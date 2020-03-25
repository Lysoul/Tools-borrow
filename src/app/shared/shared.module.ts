import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [LoginComponent, PageNotFoundComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
