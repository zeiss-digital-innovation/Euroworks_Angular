import { Component, OnInit } from '@angular/core';
import {DetailRowComponent} from "./detail-row/detail-row.component";

@Component({
  moduleId: module.id,
  selector: 'ew-result',
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.css'],
  directives: [DetailRowComponent]
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
