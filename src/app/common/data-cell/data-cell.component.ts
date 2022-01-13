import { User } from './../../model/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {

  @Input() data: User = new User;
  @Input() key: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
