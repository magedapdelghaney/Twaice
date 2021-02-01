import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Battery, Sensor, BatteryResponse } from '../models/battery.model';

@Injectable({
  providedIn: 'root'
})
export class ChartViewServiceService {
  private fileJsonURL = 'assets/sensor-measurements.json';
  public batteries: Battery[] = [];
  public batteryList = new BehaviorSubject<Battery[]>(this.batteries);

  constructor(private http: HttpClient) {

  }
  /**
   * return all batteries data from the JSON file
   */
  fetchBatteryData(): void {
    this.getJSON().subscribe(data => {
      const response = data.data;
      response.forEach(cell => {
        const battery: Battery = {
          Sensor: {
            timestamps: [],
            values: []
          },
          id: '',
          title: ''

        };
        battery.Sensor.values = cell.values;
        battery.Sensor.timestamps = cell.timestamps;
        battery.id = cell.tid;
        battery.title = 'Battery Chart';
        this.batteries.push(battery);
      });
      this.batteryList.next(this.batteries);
    });
  }

  getCellDataById(cellId): Battery {
    return this.batteries.find(battery => battery.id === cellId);
  }

  /**
   * Creat Http call for the local file
   */
  public getJSON(): Observable<any> {
    return this.http.get(this.fileJsonURL);
  }
}
