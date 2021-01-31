import { Type } from '@angular/core';

export class Battery {
  public id: string;
  public title: string;
  public Sensor: Sensor;
}
export class Sensor {
  public timestamps: string[];
  public values: number[];
}



export class BatteryResponse {
  public statues: string;
  public data: any[];
}


