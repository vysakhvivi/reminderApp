import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ViewEncapsulation } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    aname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder ) {
   }

  ngOnInit(): void {
  }

  Register() {
    var acno = this.registration.value.acno
    var pswd = this.registration.value.pswd
    var aname = this.registration.value.aname

    if(this.registration.valid)
    {
      this.ds.register(acno, pswd, aname)
      .subscribe((result:any)=>{
        if (result) {
          alert(result.message)
          this.router.navigateByUrl("")
        }
        
      },
      (result)=>{
    alert(result.error.message)
      })
    
    }
    else
    {
      alert("Invalid !!! ")
    }
    
  }

}
