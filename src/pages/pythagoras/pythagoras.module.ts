import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PythagorasPage } from './pythagoras';

@NgModule({
  declarations: [
    PythagorasPage,
  ],
  imports: [
    IonicPageModule.forChild(PythagorasPage),
  ],
})
export class PythagorasPageModule {}
