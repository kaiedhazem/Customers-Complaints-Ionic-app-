import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {add} from '../add/add';
import { ComplaintProvider} from '../../providers/complaint/complaint';
import {FillPage} from '../fill/fill'
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage:any = TabsPage;
  ProjectClient:any;
  width: any;
  constructor(public navCtrl: NavController,public authService:AuthProvider, public complaint :ComplaintProvider) {
 if (localStorage.token !=''){  this.complaint. ProjectClient().then((data)=>{
   // console.log(JSON.stringify(data))
      this.ProjectClient=data["projects"];
     
     })
    }
    
  }
  

  fillPage(){
    this.navCtrl.push(FillPage)
  }
  myLogOut(){
    this.authService.logout();
    this.rootPage=LoginPage;
    this.navCtrl.push(LoginPage);
    location.reload();
  }

}
