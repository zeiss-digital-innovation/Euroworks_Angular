import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ew-header',
  templateUrl: 'ew-header.component.html',
  styleUrls: ['ew-header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class EwHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  logout() {
    console.log('logged out');
  }
}
