import {Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from "angular-bootstrap-md";
import {UserModel} from "../../../../core/models/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('tableEl') mdbTable: MdbTableDirective;
  headElements: Array<string> = ['STT', 'Image' ,'Name', 'Price', 'Quantity', 'Edit'];
  elements: UserModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
