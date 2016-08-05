/* tslint:disable:no-unused-variable */

import {addProviders, async, inject} from '@angular/core/testing';
import {GetPropertiesService} from './get-properties.service';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/of';

describe('Service: GetProperties', () => {
  beforeEach(() => {
    addProviders([{provide: Http, useClass: MockHttp}, GetPropertiesService]);
  });

  it('should get and parse data correctly',
    async(inject([GetPropertiesService],
      (service: GetPropertiesService) => {
        service.properties.subscribe(data => {
          const reference = {
            Coachworks: [
              "Cooler",
              "Plans",
              "Silo",
              "Tipper",
              "Tanker",
              "HeavyDuty"
            ],
            DriverLicenceClasses: [
              "C1",
              "C",
              "C1E",
              "CE",
              "PersonTransfer"
            ],
            FieldOfApplications: [
              "National",
              "International",
              "Regional"
            ],
            ProfessionalDriverModuls: [
              "Module1",
              "Module2"
            ],
            Workshift: [
              "Daily",
              "Weekly",
              "Every2Week",
              "Even"
            ]
          };

          expect(data.Coachworks).toEqual(reference.Coachworks);
          expect(data.DriverLicenceClasses).toEqual(reference.DriverLicenceClasses);
          expect(data.FieldOfApplications).toEqual(reference.FieldOfApplications);
          expect(data.ProfessionalDriverModuls).toEqual(reference.ProfessionalDriverModuls);
          expect(data.Workshift).toEqual(reference.Workshift);

        })
      })
    ))
})

class MockHttp {
  constructor() {
  };

  get(url: String) {
    return Observable.of({
      json: function () {
        return JSON.parse(`[
  {
    "propertyType": "Coachworks",
    "propertyValues": {
      "1": "Cooler",
      "2": "Plans",
      "3": "Silo",
      "4": "Tipper",
      "5": "Tanker",
      "6": "HeavyDuty"
    }
  },
  {
    "propertyType": "DriverLicenceClasses",
    "propertyValues": {
      "1": "C1",
      "2": "C",
      "3": "C1E",
      "4": "CE",
      "5": "PersonTransfer"
    }
  },
  {
    "propertyType": "FieldOfApplications",
    "propertyValues": {
      "1": "National",
      "2": "International",
      "3": "Regional"
    }
  },
  {
    "propertyType": "ProfessionalDriverModuls",
    "propertyValues": {
      "1": "Module1",
      "2": "Module2"
    }
  },
  {
    "propertyType": "Workshift",
    "propertyValues": {
      "1": "Daily",
      "2": "Weekly",
      "3": "Every2Week",
      "4": "Even"
    }
  }
]`)
      }
    });
  }
}
