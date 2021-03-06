import { Component, OnInit } from "@angular/core";
import { Car, LazyLoadEvent } from "./types";
import { CarService } from "./car.service";

import { SelectItem } from "primeng/api";

interface City {
  name: string;
  code: string;
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  datasource: Car[];

  cars: Car[];

  totalRecords: number;

  cols: any[];

  selectedCar1: Car;

  cities2: SelectItem[] = [
    { label: "Select City", value: null },
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    {
      label: "London",
      value: "LDN",
      disabled: true,
      title:
        "Doesn't work and this message needs to be longer than it is right now."
    },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" }
  ];
  selectedCity2: City;
  placeholderText = "Select Option";

  loading: boolean;
  pageSizeOptions = [10, 25, 50,1000,10000,15000, { showAll: "All" }];
  disable = false;
  constructor(private carService: CarService) {
    setTimeout(() => {
      this.disable = true;
    }, 5000);
  }

  ngOnInit() {
    //datasource imitation
    this.datasource = this.carService.getCarsLarge(150000);
    this.totalRecords = this.datasource.length;
    

    this.cols = [
      { field: "vin", header: "Vin", width: "10%" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand", width: "10%" },
      { field: "color", header: "Color" },
      { field: "vin1", header: "Vin1", width: "10%" },
      { field: "year1", header: "Year1" },
      { field: "brand1", header: "Brand1", width: "10%" },
      { field: "color1", header: "Color1" },
      { field: "vin2", header: "Vin2", width: "10%" },
      { field: "year2", header: "Year2" },
      { field: "brand2", header: "Brand2", width: "10%" },
      { field: "color2", header: "Color2" },
    ];

    this.loading = true;
    setTimeout(() => {
      this.placeholderText = "It has changed";
    }, 1000);
  }

  loadCarsLazy(event) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(
          event.first,
          event.first + event.rows
        );
        this.loading = false;
      }
    }, 0);
  }

  buttonClick() {
    console.log("button clicked!");
  }
}
