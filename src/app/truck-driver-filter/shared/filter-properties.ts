export class FilterProperties {

  constructor(private _Coachworks?: Array<String>,
              private _DriverLicenceClasses?: Array<String>,
              private _FieldOfApplications?: Array<String>,
              private _ProfessionalDriverModuls?: Array<String>,
              private _Workshift?: Array<String>
  ) {}


  set Coachworks(value: Array<String>) {
    this._Coachworks = value;
  }

  set DriverLicenceClasses(value: Array<String>) {
    this._DriverLicenceClasses = value;
  }

  set FieldOfApplications(value: Array<String>) {
    this._FieldOfApplications = value;
  }

  set ProfessionalDriverModuls(value: Array<String>) {
    this._ProfessionalDriverModuls = value;
  }

  set Workshift(value: Array<String>) {
    this._Workshift = value;
  }

  get Coachworks(): Array<String> {
    return this._Coachworks;
  }

  get DriverLicenceClasses(): Array<String> {
    return this._DriverLicenceClasses;
  }

  get FieldOfApplications(): Array<String> {
    return this._FieldOfApplications;
  }

  get ProfessionalDriverModuls(): Array<String> {
    return this._ProfessionalDriverModuls;
  }

  get Workshift(): Array<String> {
    return this._Workshift;
  }
}
