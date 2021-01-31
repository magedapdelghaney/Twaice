import { Component, OnInit } from '@angular/core';
import { ChartViewServiceService } from '../../services/chart-view-service.service';
import { Battery } from '../../models/battery.model';
import { CloseScrollStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent implements OnInit {

  batteryData: Battery[];
  cells: Battery[];
  CurrentCell: Battery;
  constructor(private chartService: ChartViewServiceService) { }

  ngOnInit(): void {
    this.getAllBatteriesData();
    this.chartService.batteryList.subscribe(cells => {
      this.cells = cells;
    });
  }

  getAllBatteriesData() {
    this.chartService.fetchBatteryData();
  }

  selectCellChart(cellId) {
    this.CurrentCell = this.chartService.getCellDataById(cellId);

  }

}
