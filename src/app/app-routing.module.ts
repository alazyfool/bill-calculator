import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NewBillComponent } from './new-bill/new-bill.component';

const routes: Routes = [
  { path: 'new', component: UserDashboardComponent },
  { path: '', component: NewBillComponent },
  { path: 'bill/:billId', component: NewBillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
