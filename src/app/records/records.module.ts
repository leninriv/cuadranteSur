import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { RecordsRoutingModule } from './records-routing.module';
import { ListViewComponent } from './list-view/list-view.component';


@NgModule({
  declarations: [
    ListViewComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    NzListModule,
    NzSkeletonModule,
  ]
})
export class RecordsModule { }