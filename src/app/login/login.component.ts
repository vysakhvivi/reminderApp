import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  loginform=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })

  ngOnInit(): void {
  }

  login() {
    var acno = this.loginform.value.acno;
    var pswd = this.loginform.value.pswd;

    if(this.loginform.valid)
    {
     this.ds.login(acno,pswd)
     .subscribe((result:any)=>{
       if(result){
        localStorage.setItem("currentacno", JSON.stringify(result.currentacno))
        localStorage.setItem("currentuser", JSON.stringify(result.currentuser))
        alert('login succesfull');
           this.router.navigateByUrl('dashboard');
       }
     },
     (result)=>{
       alert(result.error.message)
     })
     
    }
  }

}
