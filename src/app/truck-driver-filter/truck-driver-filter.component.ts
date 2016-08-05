import { Component } from '@angular/core';
import { LabeledCheckboxComponent } from './labeled-checkbox.component';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { MultiSelect, Button, SelectItem } from 'primeng/primeng';

import {TruckFilter} from '../shared/TruckFilter';


@Component({
  moduleId: module.id,
  selector: 'ew-truck-driver-filter',
  templateUrl: 'truck-driver-filter.component.html',
  styleUrls: ['truck-driver-filter.component.css'],
  directives: [LabeledCheckboxComponent, Button, MultiSelect, REACTIVE_FORM_DIRECTIVES]
})
export class TruckDriverFilterComponent  {
  licenses: SelectItem[] = [];
  selectedLicense: string[];

  public filter: TruckFilter;

  constructor() {
    this.filter = new TruckFilter();
    this.licenses.push({label: 'C1', value: 'C1'});
    this.licenses.push({label: 'C', value: 'C'});
    this.licenses.push({label: 'C1E', value: 'C1E'});
    this.licenses.push({label: 'CE', value: 'CE'});
  }

  public startSearch(form: any) {

    console.log(form.value);
  }

}
