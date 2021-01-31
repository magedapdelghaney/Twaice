import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
  },
  {
      path: 'about',
      loadChildren: () => import('./about-module/about.module').then(m => m.AboutModule)
  },
  {
      path: 'chart',
      loadChildren: () => import('./chart-view-module/chart-view.module').then(m => m.ChartViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
