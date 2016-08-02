import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ew-detail-row',
  templateUrl: 'detail-row.component.html',
  styleUrls: ['detail-row.component.css']
})
export class DetailRowComponent implements OnInit {

  @Input()
  icon : string;

  constructor() { }

  ngOnInit() {
  }

}
