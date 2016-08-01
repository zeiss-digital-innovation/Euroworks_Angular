import { Component, OnInit } from '@angular/core';
import {TruckDriverFilterComponent} from '../truck-driver-filter/truck-driver-filter.component';
import {ResultOverviewComponent} from "../result-overview/result-overview.component";
import {ResultComponent} from "../result-overview/result/result.component";

@Component({
  moduleId: module.id,
  selector: 'ew-content',
  templateUrl: 'ew-content.component.html',
  styleUrls: ['ew-content.component.css'],
  directives:[TruckDriverFilterComponent, ResultOverviewComponent,ResultComponent]
})
export class EwContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
