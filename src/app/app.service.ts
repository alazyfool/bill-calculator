import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Bill } from './app.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:4000/users');
  }

  public postBill(bill: Bill): Observable<Bill>  {
    return this.httpClient.post<Bill>('http://localhost:4000/bill', bill);
  }

  public getBill(billNo: number): Observable<Bill>  {
    return this.httpClient.get<Bill>('http://localhost:4000/bill/' + billNo);
  }

}
