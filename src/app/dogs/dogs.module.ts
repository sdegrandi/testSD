import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DogsPage } from './dogs.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DogsPageRoutingModule } from './dogs-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DogsPageRoutingModule
  ],
  declarations: [DogsPage]
})
export class DogsPageModule {}
