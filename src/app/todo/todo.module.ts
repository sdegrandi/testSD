import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoPage } from './todo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ToDoPageRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ToDoPageRoutingModule
  ],
  declarations: [ToDoPage]
})
export class ToDoPageModule {}
