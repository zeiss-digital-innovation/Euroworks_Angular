import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ew-header',
  templateUrl: 'ew-header.component.html',
  styleUrls: ['ew-header.component.css']
})
export class EwHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    console.log('logged out');
  }
}
