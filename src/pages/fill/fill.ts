import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ComplaintProvider } from '../../providers/complaint/complaint';
import { ListComplaintPage } from '../list-complaint/list-complaint';
import { FormGroup } from '@angular/forms';
/**
 * Generated class for the FillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-fill',
  templateUrl: 'fill.html',
})
export class FillPage  {
  uploadForm: FormGroup;  
  myRec = {
    type:'' ,
    project:'' ,
    description:'',
 
   }
   
   mood:any;
   project:any;
   photoUrl: any=null;
   fileInput: any=null;
   constructor(public navCtrl: NavController, public navParams: NavParams,public complaint: ComplaintProvider
    ,public toastCtrl: ToastController ) {
     this.complaint.Type().then((data)=>{
         this.mood=data["type"];
        })
        this.complaint.Project().then((data)=>{
           this.project=data["projects"];
          })
        
   }
   
  onFileSelect() {
  
    this.fileInput = (<HTMLInputElement>document.getElementById('profile')) ;
     const formData = new FormData();
     formData.append('file', this.fileInput.files[0]);
     console.log(formData);
     this.photoUrl= this.fileInput.files[0];
  }
   add(){
     this.complaint.AddComplain(this.myRec).then((result)=>{
       console.log(result)
       var myHeaders = new Headers();
       let   value =    localStorage.getItem('token')
       myHeaders.append("Authorization", "Bearer"+ value);
       
       var formdata = new FormData();
       formdata.append("file", this.photoUrl);
       
       var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: formdata,
        // redirect: 'follow'
       };
       
       fetch("http://stark-beyond-68322.herokuapp.com/api/complainfileionic", requestOptions)
         .then(response => response.text())
         .then(result => alert(result))
         .catch(error => alert(error));
         
         this.navCtrl.push(ListComplaintPage);
        
         this.myRec = {
          type:'' ,
          project:'' ,
          description:'',
       
         }
        // this.fileInput= null;
        // (<HTMLInputElement>document.getElementById('profile')).onreset;
         
           
     },(err)=>{
       console.log("insert err: "+ err)
       console.log("this.myInfo: "+ JSON.stringify(this.myRec))
     })
    }
}

   





