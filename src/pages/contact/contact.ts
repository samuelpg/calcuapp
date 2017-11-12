import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PythagorasPage} from '../pythagoras/pythagoras';
import {CircumferencePage} from '../circumference/circumference';
import {TemperaturePage} from '../temperature/temperature';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  pages : Array<{title:string,page:any}> 

  constructor(public navCtrl: NavController) {
    console.log(this.pages)
    this.pages = [{
      title:"pythagoras",
      page:PythagorasPage,
    },{
      title:"circumference",
      page:CircumferencePage,
    },{
      title:"temperature conversion",
      page:TemperaturePage,
    }];
  }

  openPage(p){
    this.navCtrl.push(p);
  }

}
