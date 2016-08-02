import { Component } from '@angular/core';
import { LabeledCheckboxComponent } from './labeled-checkbox.component';

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

 test() {
   console.log('frachtbrief:' + this.frachtbrief);
 }
}
