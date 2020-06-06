import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { FillPage } from '../fill/fill';
import { ListComplaintPage } from '../list-complaint/list-complaint';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  rootPage:any = TabsPage;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = FillPage;
  tab4Root= LoginPage;
  tab5Root=ListComplaintPage;



  constructor(public navCtrl: NavController,public authService:AuthProvider) {

  }
  myLogOut(){
    this.authService.logout();
    this.navCtrl.push(LoginPage);
  }
}
