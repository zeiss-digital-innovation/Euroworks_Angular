import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs";
import {FilterProperties} from "./filter-properties";

@Injectable()
export class GetPropertiesService {

  private _properties: BehaviorSubject<FilterProperties> = new BehaviorSubject(new FilterProperties([], [], []));

  constructor(private http: Http) {
  }

  get properties() {
    const newProperties = this.http.get("http://euroworksdockerserver.cloudapp.net/api/Driver/properties")
      .map(data => data.json())
      .map(jsonData => {
        let resultProperties = new FilterProperties();

        jsonData.forEach(dataSet => {
          const key = dataSet.propertyType;
          let data = [];

          for (let key in dataSet.propertyValues) {
            data.push(dataSet.propertyValues[key]);
          }

          resultProperties[key] = data;
        });

        return resultProperties;
      })
      .share();

    newProperties.subscribe(
      data => this._properties.next(data),
      error => console.error(error)
    );

    return newProperties;
  }

}
