import {Component, ViewEncapsulation} from '@angular/core';
import {EwHeaderComponent} from './ew-header/ew-header.component';
import {EwContentComponent} from './ew-content/ew-content.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [EwHeaderComponent, EwContentComponent],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
