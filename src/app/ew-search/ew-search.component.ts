import { Component, OnInit } from '@angular/core';
import {TruckDriverFilterComponent} from '../truck-driver-filter/truck-driver-filter.component';
import {ResultOverviewComponent} from '../result-overview/result-overview.component';
import {ResultComponent} from '../result-overview/result/result.component';

@Component({
  moduleId: module.id,
  selector: 'ew-search',
  templateUrl: 'ew-search.component.html',
  styleUrls: ['ew-search.component.css'],
  directives: [TruckDriverFilterComponent, ResultOverviewComponent, ResultComponent]
})
export class EwSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
