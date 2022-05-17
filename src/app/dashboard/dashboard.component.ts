import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date = ""
  des = ""
  acno=""
  uid=""
  user=""
  logindate:any

  


  constructor(private ds: DataService, private router: Router, private form: FormBuilder) {
    this.user=JSON.parse(localStorage.getItem('currentuser')||'')
    this.logindate=new Date()

   }

  eventform = this.form.group({
    date: ['',Validators.required],
    des: ['',Validators.required]
  })

  ngOnInit(): void {
  }

  addevent() {
    var acno=JSON.parse(localStorage.getItem("currentacno")||"")

    console.log(acno);

    var date = this.eventform.value.date
  
    
    var des = this.eventform.value.des


    var uid=uuidv4();
if(this.eventform.valid)
   { 
     var result = this.ds.addevent(acno,date,des,uid)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      },

        result => {
          alert(result.error.message)
        }
      )
    }
  }

  logout()
  {
    localStorage.removeItem("currentacno")
    localStorage.removeItem("currentuser")
    this.router.navigateByUrl("")
  }

  deletefromparent(){
    this.acno=JSON.parse(localStorage.getItem("currentacno")||"")
  }

  oncancel()
  {
    this.acno=""
  }

  ondelete(event:any)
  {
    
      this.ds.ondelete(event)
     .subscribe((result:any)=>{
       if(result)
       {
         alert(result.message)
         this.router.navigateByUrl("")
       }
     },
     
       (result:any)=>{
         alert(result.error.message)
       }
     )
  }


}

