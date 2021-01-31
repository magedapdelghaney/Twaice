import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Sensor } from '../../models/battery.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() GraphData: Sensor;
  public graph = {
    data: [
      {
        x: [],
        y: [], type: 'scatter', mode: 'lines+points', marker: { color: 'red' }
      },
      { type: 'line' },
    ],
    layout: { width: 1120, height: 400, title: 'A Fancy Plot' }
  };
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    // this.graph.data['x'] = this.GraphData.timestamps;
    // this.graph.data['y'] = this.GraphData.values;
    this.graph.data = [
      {
        x: this.GraphData.timestamps, y: this.GraphData.values, type: 'scatter', mode: 'lines+points', marker: { color: 'red' }
      },
    ];

  }

}
