import { Component } from '@angular/core';
import { LabeledCheckboxComponent } from './labeled-checkbox.component';
import { ComboboxComponent, ComboboxOption } from '../ew-combobox';
import {InputText} from 'primeng/primeng';

import {TruckFilter} from "../shared/TruckFilter";


@Component({
  moduleId: module.id,
  selector: 'ew-truck-driver-filter',
  templateUrl: 'truck-driver-filter.component.html',
  styleUrls: ['truck-driver-filter.component.css'],
  directives: [LabeledCheckboxComponent, ComboboxComponent, InputText]
})
export class TruckDriverFilterComponent  {

  public filter: TruckFilter;

  constructor() {
    this.filter = new TruckFilter();
  }

  public startSearch(){

    console.log(this.filter);

    alert("Haha!!!");
  }

	drivingLicenceClasses: Array<ComboboxOption> = [
		new ComboboxOption("C1"),
		new ComboboxOption("C"),
		new ComboboxOption("C1E"),
		new ComboboxOption("CE")
	];

	selectedDrivingLicense: string;
}
