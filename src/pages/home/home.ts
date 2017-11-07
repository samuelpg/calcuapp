import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let row1 = [7,8,9];
    let row2 = [4,5,6];
    let row3 = [1,2,3];
  }

}
