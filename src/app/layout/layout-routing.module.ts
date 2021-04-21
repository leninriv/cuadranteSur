import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form' },
  {
    path: 'form', component: LayoutComponent, children:
      [
        {
          path: '',
          loadChildren: () => import('../form/form.module').then(m => m.FormModule)
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
