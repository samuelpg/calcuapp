import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  decimal: string;
  binary: string;
  hexadecimal: string;
  octadecimal: string;
  clipboard: Clipboard;

  constructor(public navCtrl: NavController) {
    this.clipboard = new Clipboard();
  }
  fromDecimal(){
    let number = parseFloat(this.decimal);
    this.binary = number.toString(2);
    this.hexadecimal = number.toString(16);
    this.octadecimal = number.toString(8);
  }
  fromBinary(){
    let number = parseInt(this.binary,2);
    this.decimal = number.toString(10);
    this.hexadecimal = number.toString(16);
    this.octadecimal = number.toString(8);
  }
  fromHexadecimal(){
    let number = parseInt(this.hexadecimal,16);
    this.decimal = number.toString(10);
    this.binary = number.toString(2);
    this.octadecimal = number.toString(8);
  }
  fromOctadecimal(){
    let number = parseInt(this.octadecimal,8);
    this.decimal = number.toString(10);
    this.binary = number.toString(2);
    this.hexadecimal = number.toString(16);
  }
  clear(){
    this.decimal = "";
    this.binary = "";
    this.hexadecimal = "";
    this.octadecimal = "";
  }
  copy(str:string){
    this.clipboard.copy(str);
  }
}
