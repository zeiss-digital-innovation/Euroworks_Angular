import {Person} from "./Person";

export class TruckFilter {
  PersonInformation: Person;
  DriverProfileCreatedAt: Date;
  ProfessionalDriver: Boolean;
  ForkLiftLicense: Boolean;
  DangerousDrivingLicense: Boolean;
  BillOfLading: Boolean;
  DriverProperties: Array<string>;
}
