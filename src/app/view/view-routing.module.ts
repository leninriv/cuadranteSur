import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinistryViewComponent } from './ministry-view/ministry-view.component';
import { RecordScreenComponent } from './record-screen/record-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'asamblea', pathMatch: 'full' },
  { path: 'asamblea', component: RecordScreenComponent },
  { path: 'ministerio', component: MinistryViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
