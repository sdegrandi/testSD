import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoPage } from './todo.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoPageRoutingModule {}
