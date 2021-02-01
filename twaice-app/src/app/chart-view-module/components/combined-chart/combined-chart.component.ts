import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Battery } from '../../models/battery.model';

@Component({
  selector: 'app-combined-chart',
  templateUrl: './combined-chart.component.html',
  styleUrls: ['./combined-chart.component.scss']
})
export class CombinedChartComponent implements OnInit, OnChanges {

  @Input() GraphData: Battery;
  public graph = {
    data: [
      {
        x: [],
        y: [], type: 'scatter', mode: 'lines+points', marker: { color: 'red' }
      },
      { type: 'line' },
    ],
    layout: { width: 1140, height: 400, title: 'Battery Chart' }
  };
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.graph.data = [
      {
        x: this.GraphData.Sensor.timestamps, y: this.GraphData.Sensor.values,
        type: 'scatter', mode: 'lines+points', marker: { color: 'red' }
      },
    ];

    this.graph.layout.title = 'All Batteries';

  }
}
