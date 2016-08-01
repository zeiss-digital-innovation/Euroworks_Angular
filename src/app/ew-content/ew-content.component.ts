import { Component, OnInit } from '@angular/core';
import {TruckDriverFilterComponent} from '../truck-driver-filter/truck-driver-filter.component';

@Component({
  moduleId: module.id,
  selector: 'ew-content',
  templateUrl: 'ew-content.component.html',
  styleUrls: ['ew-content.component.css'],
  directives:[TruckDriverFilterComponent]
})
export class EwContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
