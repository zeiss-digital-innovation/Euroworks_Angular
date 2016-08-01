import { Component } from '@angular/core';
import {TruckDriverFilterComponent} from './truck-driver-filter';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TruckDriverFilterComponent]
})
export class AppComponent {
  title = 'app works!';
}
