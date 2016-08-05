import {Component, ViewEncapsulation} from '@angular/core';
import {EwHeaderComponent} from './ew-header/ew-header.component';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [EwHeaderComponent, ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
