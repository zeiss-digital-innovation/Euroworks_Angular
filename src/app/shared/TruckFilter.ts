import {Person} from "./Person";

export class TruckFilter {
  PersonInformation: Person = new Person();
  DriverProfileCreatedAt: Date;
  ProfessionalDriver: Boolean;
  ForkLiftLicense: Boolean;
  DangerousDrivingLicense: Boolean;
  BillOfLading: Boolean;
  DrivingLicense: string;
  DriverProperties: Array<string>;
}
