import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListComplaintPage } from './list-complaint';

@NgModule({
  declarations: [
    ListComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(ListComplaintPage),
  ],
})
export class ListComplaintPageModule {}
