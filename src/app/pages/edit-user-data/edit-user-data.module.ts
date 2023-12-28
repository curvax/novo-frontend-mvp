import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUserDataPageRoutingModule } from './edit-user-data-routing.module';

import { EditUserDataPage } from './edit-user-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditUserDataPageRoutingModule
  ],
  declarations: [EditUserDataPage]
})
export class EditUserDataPageModule {}
