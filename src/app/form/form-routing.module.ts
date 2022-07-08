import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinisteryFormComponent } from '../screens/ministery-form/ministery-form.component';
import { GridContentComponent } from './grid-content/grid-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'questionary', pathMatch: 'full' },
  { path: 'questionary', component: GridContentComponent },
  { path: 'questionary:/id', component: GridContentComponent },
  { path: 'ministry-form', component: MinisteryFormComponent },
  { path: 'ministry-form:/id', component: MinisteryFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
