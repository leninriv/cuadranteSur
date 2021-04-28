import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordScreenComponent } from './record-screen/record-screen.component';

const routes: Routes = [
  { path: '', component: RecordScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
