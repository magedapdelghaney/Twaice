import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Battery, Sensor, BatteryResponse } from '../models/battery.model';

@Injectable({
  providedIn: 'root'
})
export class ChartViewServiceService {
  private _jsonURL = 'assets/sensor-measurements.json';
  public batteries: Battery[] = [];
  public batteryList = new BehaviorSubject<Battery[]>(this.batteries);

  constructor(private http: HttpClient) {

  }

  fetchBatteryData() {
    return this.getJSON().subscribe(data => {
      let response = data.data;
      response.forEach(cell => {
        let battery: Battery = {
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
        this.batteries.push(battery);
      })
      this.batteryList.next(this.batteries)
    });
  }

  getCellDataById(cellId): Battery {
    return this.batteries.find(battery => battery.id = cellId)
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
