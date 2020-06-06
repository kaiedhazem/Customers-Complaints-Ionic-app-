import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {xxx} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map' ;

/*
  Generated class for the ComplaintProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComplaintProvider {

  constructor(public http: Http,public storage:Storage) {
    this.http
  }
  Complain(){
    return new Promise((resolve, reject) => {

   let value = localStorage.getItem('token')
          let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Accept','application/json');
      headers.append('Authorization','Bearer '+value);
        this.http.get('http://stark-beyond-68322.herokuapp.com/api/reclamationmobile',{headers: headers})
        .map(res=>res.json())
        .subscribe(data => {
            resolve(data);
   }, (err) => {
            reject(err);

          });  });


  }
  Type(){
    return new Promise((resolve, reject) => {

   let value = localStorage.getItem('token')
          let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Accept','application/json');
      headers.append('Authorization','Bearer '+value);
        this.http.get('http://stark-beyond-68322.herokuapp.com/api/type',{headers: headers})
        .map(res=>res.json())
        .subscribe(data => {
            resolve(data);
   }, (err) => {
            reject(err);

          });  });


  }
  Project(){
    return new Promise((resolve, reject) => {

   let value = localStorage.getItem('token')
          let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Accept','application/json');
      headers.append('Authorization','Bearer '+value);
        this.http.get('http://stark-beyond-68322.herokuapp.com/api/projetRec',{headers: headers})
        .map(res=>res.json())
        .subscribe(data => {
            resolve(data);
   }, (err) => {
            reject(err);

          });  });


  }
  AddComplain(complain,file) {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let   value =    localStorage.getItem('token')
             let headers = new Headers();
             headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
             headers.append('Accept','application/json');
             headers.append('Content-type','application/json');
             headers.append('Content-type', 'multipart/form-data');
              headers.append('X-Requested-With','XMLHttpRequest');
         headers.append('Authorization','Bearer '+value);
           this.http.post('http://stark-beyond-68322.herokuapp.com/api/reclamation',JSON.stringify(complain),{headers: headers}).toPromise().
           then(()=> this.http.post('http://stark-beyond-68322.herokuapp.com/api/complainfile',JSON.stringify(file),{headers: headers})
           .map(res=>res.json())
           .subscribe(data => {
               resolve(data);
      }, (err) => {
               reject(err);

           }));
            });
          }
            ProjectClient(){
              return new Promise((resolve, reject) => {
          
             let value = localStorage.getItem('token')
                    let headers = new Headers();
              headers.append('Access-Control-Allow-Origin' , '*');
                headers.append('Accept','application/json');
                headers.append('Authorization','Bearer '+value);
                  this.http.get('http://stark-beyond-68322.herokuapp.com/api/Cprojet',{headers: headers})
                  .map(res=>res.json())
                  .subscribe(data => {
                      resolve(data);
             }, (err) => {
                      reject(err);
          
                    });  });
          
          
            
     }
  }
