import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridContentComponent } from './grid-content/grid-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'questionary', pathMatch: 'full' },
  { path: 'questionary', component: GridContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
