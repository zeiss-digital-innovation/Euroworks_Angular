import { Component } from '@angular/core';
import { LabeledCheckboxComponent } from './labeled-checkbox.component';
import {TruckFilter} from "../shared/TruckFilter";

@Component({
  moduleId: module.id,
  selector: 'ew-truck-driver-filter',
  templateUrl: 'truck-driver-filter.component.html',
  styleUrls: ['truck-driver-filter.component.css'],
  directives: [LabeledCheckboxComponent]
})
export class TruckDriverFilterComponent  {

  frachtbrief: boolean;
  gabelstaplerschein: boolean;
  gefahrgutschein: boolean;
  berufskraftfahrer: boolean;

  public filter: TruckFilter;

  constructor() {
    this.filter = new TruckFilter();
  }



}

