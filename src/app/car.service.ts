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
        vin: "vin"+i,
        brand: "Brand",
        year: i,
        color: "Yellow"
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