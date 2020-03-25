import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/components/home/home.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'borrower',
      loadChildren: () => import('./borrower/borrower.module').then(m => m.BorrowerModule)
  },
  {
    path: '**', component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
          preloadingStrategy: PreloadAllModules,
          enableTracing: false
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
