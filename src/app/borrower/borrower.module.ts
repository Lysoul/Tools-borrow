import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowerRoutingModule } from './borrower.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [DashboardComponent, SignUpComponent, LoginComponent],
  imports: [
    CommonModule,
    BorrowerRoutingModule
  ]
})
export class BorrowerModule { }
