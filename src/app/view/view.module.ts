import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ViewRoutingModule } from './view-routing.module';
import { RecordScreenComponent } from './record-screen/record-screen.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FieldValueComponent } from './field-value/field-value.component';


@NgModule({
  declarations: [
    RecordScreenComponent,
    DataTableComponent,
    FieldValueComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    NzGridModule,
    NzCardModule,
    NzAvatarModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule
  ]
})
export class ViewModule { }
