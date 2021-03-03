import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsPage } from './dogs.page';

const routes: Routes = [
  {
    path: '',
    component: DogsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsPageRoutingModule {}
