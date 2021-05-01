import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';


import { FormsModule } from '@angular/forms'
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
    NzEmptyModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzIconModule,
    FormsModule
  ]
})
export class RecordsModule { }
