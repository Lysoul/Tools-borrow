import { LoginComponent } from '../shared/components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

const borrowerRoutes: Routes = [

    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'login',
                component: LoginComponent
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
