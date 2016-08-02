import { Component } from '@angular/core';
import { LabeledCheckboxComponent } from './labeled-checkbox.component';
import { ComboboxComponent, ComboboxOption } from '../ew-combobox';


@Component({
  moduleId: module.id,
  selector: 'ew-truck-driver-filter',
  templateUrl: 'truck-driver-filter.component.html',
  styleUrls: ['truck-driver-filter.component.css'],
  directives: [LabeledCheckboxComponent, ComboboxComponent]
})
export class TruckDriverFilterComponent  {

  frachtbrief: boolean = true;


	drivingLicenceClasses: Array<ComboboxOption> = [
		new ComboboxOption("C1"),
		new ComboboxOption("C"),
		new ComboboxOption("C1E"),
		new ComboboxOption("CE")
	];

	selectedDrivingLicense: string;


	test() {
		console.log('frachtbrief:' + this.frachtbrief);
	}
}
