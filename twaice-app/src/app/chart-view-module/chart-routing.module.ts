import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartViewComponent } from './components/chart-view/chart-view.component';


const routes: Routes = [
  {
    path: '',
    component: ChartViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
