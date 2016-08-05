import { Component } from '@angular/core';
import { LabeledCheckboxComponent } from './labeled-checkbox.component';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { MultiSelect, Button, SelectItem, InputText } from 'primeng/primeng';
import {TruckFilter} from '../shared/TruckFilter';


@Component({
  moduleId: module.id,
  selector: 'ew-truck-driver-filter',
  templateUrl: 'truck-driver-filter.component.html',
  styleUrls: ['truck-driver-filter.component.css'],
  directives: [LabeledCheckboxComponent, Button, InputText, MultiSelect, REACTIVE_FORM_DIRECTIVES]
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
    if(form) {

      const personenDaten = form.value.personenDaten;

      this.filter.PersonInformation.FirstName = personenDaten.nachname;
      this.filter.PersonInformation.LastName = personenDaten.vorname;
      this.filter.PersonInformation.BirthDate = personenDaten.gebDatum;
      this.filter.PersonInformation.Email = personenDaten.email;
      this.filter.PersonInformation.LivingCountryCode = personenDaten.land;

      const skills = form.value.skills;
      this.filter.BillOfLading = skills.frachtbrief;
      this.filter.ForkLiftLicense = skills.gabelstaplerschein;
      this.filter.DangerousDrivingLicense = skills.gefahrgutschein;
      this.filter.ProfessionalDriver = skills.berufskraftfahrer;

      this.filter.DrivingLicense = form.value.selectedLicense.join(',');
    }
  }

}
