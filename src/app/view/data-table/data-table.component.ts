import { Component, OnInit, Input } from '@angular/core';
import { toSnakeCase } from 'src/utilities/global';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() title?: string;
  @Input() blockname: string;
  @Input() tableFields: Array<string>;
  @Input() tableTitles: Array<string>;
  @Input() form?: any;
  register = true;
  fieldsInSnakeCase: any[] = [];

  listOfData: any[] = [''];

  constructor() {
    this.blockname = 'block';
    this.tableFields = [];
    this.tableTitles = [];
  }

  ngOnInit(): void {
    this.buildFields();
    this.buildDataList()
  }

  buildFields(): void {
    if (!this.tableTitles?.length) {
      this.tableTitles = [...this.tableFields];
    }
  }

  buildDataList() {
    const dataArray = this.form[this.blockname];
    if (dataArray === 'No Registra') {
      this.listOfData = [];
      this.register = false;
      return;
    }
    if (!dataArray) return;
    if (!dataArray.length) return;
    let fieldsParsed = [];
    for (let field of this.tableFields) {
      fieldsParsed.push(toSnakeCase(field));
    }
    this.fieldsInSnakeCase = [...fieldsParsed];
    this.listOfData = [...dataArray]
  }

}
