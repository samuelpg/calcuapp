import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PythagorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pythagoras',
  templateUrl: 'pythagoras.html',
})
export class PythagorasPage {
  a:number=0;
  b:number=0;
  c:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  solve(){
    if(this.a!==0&&this.b!==0){
      this.c = Math.sqrt(Math.pow(this.a,2)+Math.pow(this.b,2))
    }else if(this.a!==0&&this.c!==0){
      this.b =  Math.sqrt(Math.pow(this.c,2)-Math.pow(this.a,2))
    }else if(this.b!==0&&this.c!==0){
      this.a =  Math.sqrt(Math.pow(this.c,2)-Math.pow(this.b,2))
    }
  }
  delete(){
    this.a=0;
    this.b=0;
    this.c=0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PythagorasPage');
  }

}
