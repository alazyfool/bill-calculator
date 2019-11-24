import { Component, OnInit } from '@angular/core';
import { User, Item, Bill, PieChartDatatype } from '../app.model';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.scss']
})
export class NewBillComponent implements OnInit {
  public users: User[];
  public bill = {
    createdBy: undefined,
    dateOfPurchase: new Date(),
    paidBy: {} as User,
    title: '',
    items: [] as Item[],
    id: undefined
  } as Bill;
  public billCalculated: boolean;
  public userContributions = [] as PieChartDatatype[];
  public view: any[] = [800, 800];
  public userPurchases = {
    selectedUser: {} as User,
    itemsIncluded: [] as Item[],
  }
  public displayedColumns =  ['id', 'name', 'quantity', 'price', 'contributors'];
  public windowLocation: any;
  public billSaved = false as boolean;
  public showExistingBill = false as boolean;

  constructor(private appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllUsers();
    this.addNewItem();

    this.route.params.subscribe(params => {
      const billId = +params.billId; // (+) converts string 'id' to a number
      if (billId) {
        this.setBillDetails(billId);
      }
   });

  }

  public getAllUsers(): void {
    this.appService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  public addNewItem(): void {
    this.bill.items.push({
      name: '',
      price: 0,
      quantity: 1,
      contributors: [] as User[]
    } as Item);

  }

  // very trivial function - check if need to add a new item
  public shouldAddNewItem(itemIndex: number) {
    if (itemIndex === this.bill.items.length - 1) {
      this.addNewItem();
    }
  }

  public calculateBill(): void {
    const contriAmount = new Map();

    // get all the items and calcualte contri of each user
    this.bill.items = this.bill.items.filter(item => {
      if (this.checkIfValidEntry(item)) {
        // if all values are entered
        // if item is valid, distribute its amount to all the contributors
        // TODO: remove item if no data is present
        item.contributors.forEach(contributor => {
          const splitAmount = item.price / item.contributors.length;
          if (contriAmount.has(contributor.id)) {
            contriAmount.set(contributor.id, contriAmount.get(contributor.id) + splitAmount);
          } else {
            contriAmount.set(contributor.id, splitAmount);
          }
        });
        return true;
      }
    });

    // Empty the existing piechart data
    this.userContributions = [] as PieChartDatatype[];

    // build data required to be displayed in piechart
    this.users.forEach(user => {
      if (contriAmount.get(user.id)) {
        user.contri = contriAmount.get(user.id);
        this.userContributions.push({name: user.name, value: user.contri, somethingelse: user.id});
      } else {
        // in case the user has a contribution calculated, and later is was removed and
        // recalculation was done, the older value should be removed
        user.contri = undefined;
      }
    });
    this.billCalculated = true;
  }

  // checks if name and contributors for an item are added
  private checkIfValidEntry(item: Item): boolean {
    if (item.name.trim() !== '' && item.contributors.length >= 1) {
      return true;
    }
    return false;
  }


  // when user clicks on the pie chart, build the table
  public viewUserContributions(event) {
    this.userPurchases.itemsIncluded = [] as Item[];
    // this is a workaround, just to get it working, need to optimize if much further
    this.userPurchases.selectedUser = this.users.filter(user => user.name === event.name)[0] as User;
    this.bill.items.forEach(item => {
      if (this.checkIfValidEntry(item)) {
        if (item.contributors.filter(contributor => contributor.id === this.userPurchases.selectedUser.id).length > 0 ){
          this.userPurchases.itemsIncluded.push(item);
        }
      }
    });
  }

  // do a post call to save the bill
  public saveBill(): void {
    this.windowLocation = window.location;
    this.appService.postBill(this.bill).subscribe(res => {
      this.bill = res;
      this.billSaved = true;
    }, error => {
      console.log(error);
    });
  }

  public getContributorList(contributors: User[]): string {
    return contributors.map(contributor => contributor.name).join(' | ');
  }

  public setBillDetails(billId: number): void {
    this.appService.getBill(billId).subscribe(billDetails => {
      this.bill = billDetails;
      this.calculateBill();
      this.showExistingBill = true;
    });
  }
}

