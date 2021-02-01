import { Component, OnInit } from '@angular/core';
import { ChartViewServiceService } from '../../services/chart-view-service.service';
import { Battery } from '../../models/battery.model';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent implements OnInit {

  batteryData: Battery[];
  cells: Battery[];
  cellData: Battery;
  allCellsData: Battery = {
    Sensor: {
      timestamps: [],
      values: []
    }, title: '', id: ''
  };
  selectAllMode = false;
  constructor(private chartService: ChartViewServiceService) { }

  ngOnInit(): void {
    this.getAllBatteriesData();
    this.chartService.batteryList.subscribe(response => {
      this.cells = response;
    });
  }

  /**
   * fetching all batteries data to list the cells on selection dropdown
   */
  getAllBatteriesData(): void {
    this.chartService.fetchBatteryData();
  }

  /**
   * get battery sensors data by selected battery Id
   * @param cellId selected battery Id
   */
  selectCellChart(cellId): void {
    let currentCell: Battery = null;
    if (cellId !== 'SelectAll') {
      this.selectAllMode = false;
      currentCell = this.chartService.getCellDataById(cellId);
    } else {
      this.getAllCellsDataChart();
    }
    this.cellData = { ...currentCell };

  }

  /**
   * concatenate all cell data to show in one graph
   */
  getAllCellsDataChart(): void {
    this.cells.forEach(cell => {
      this.allCellsData.Sensor.timestamps.push(...cell.Sensor.timestamps);
      this.allCellsData.Sensor.values.push(...cell.Sensor.values);
    });
    this.selectAllMode = true;
  }

}
