import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Car } from "./types";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http
      .get<any>("assets/showcase/data/cars-small.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }

  getCarsMedium() {
    return this.http
      .get<any>("assets/showcase/data/cars-medium.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }

  getCarsLarge(count: number): any[] {
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        vin: i +"_vin",
        brand: "Brand",
        year: i,
        color: "Yellow",
        vin1: i +"_vin",
        brand1: "Brand",
        year1: i,
        color1: "Yellow",
        vin2: i +"_vin",
        brand2: "Brand",
        year2: i,
        color2: "Yellow",
        vin3: i +"_vin",
        brand3: "Brand",
        year3: i,
        color3: "Yellow"
      });
    }
    return data;

    // return this.http.get<any>('assets/showcase/data/cars-large.json')
    //   .toPromise()
    //   .then(res => <Car[]>res.data)
    //   .then(data => { return data; });
  }

  getCarsHuge() {
    return this.http
      .get<any>("assets/showcase/data/cars-huge.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }
}
