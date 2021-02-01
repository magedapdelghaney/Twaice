import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartViewComponent } from './components/chart-view/chart-view.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartRoutingModule } from './chart-routing.module';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import {MatSelectModule} from '@angular/material/select';
import { CombinedChartComponent } from './components/combined-chart/combined-chart.component';
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [ChartViewComponent, ChartComponent, CombinedChartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    PlotlyModule,
    MatSelectModule

  ]
})
export class ChartViewModule { }
