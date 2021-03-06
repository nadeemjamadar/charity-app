import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateCharityHousePage } from './update-charity-house.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCharityHousePage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
  declarations: [UpdateCharityHousePage]
})
export class UpdateCharityHousePageModule {}
