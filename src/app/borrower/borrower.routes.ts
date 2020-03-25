
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const borrowerRoutes: Routes = [

    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignUpComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(borrowerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BorrowerRoutingModule {}
