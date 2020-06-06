import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ListComplaintPage } from '../pages/list-complaint/list-complaint';
import { FillPage } from '../pages/fill/fill';
import { AddPage } from '../pages/add/add';
import { AuthProvider } from '../providers/auth/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { ComplaintProvider } from '../providers/complaint/complaint';
import { FileTransfer } from '@ionic-native/file-transfer';
import {FileChooser} from '@ionic-native/file-chooser';
import {File} from '@ionic-native/file';
import {FilePath} from '@ionic-native/file-path';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    FillPage,
    ListComplaintPage,

    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    FillPage,
    ListComplaintPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    FileTransfer,
    FileChooser,
    File,
    FilePath,
    ComplaintProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
