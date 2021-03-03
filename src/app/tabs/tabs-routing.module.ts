import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dogs',
        loadChildren: () => import('../dogs/dogs.module').then(m => m.DogsPageModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('../todo/todo.module').then(m => m.ToDoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dogs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dogs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
