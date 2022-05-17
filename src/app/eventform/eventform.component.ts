import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {

  reminders: any
  acno:any
  events: any;

  

  constructor(private ds:DataService,private router:Router) {
    
    this.acno=JSON.parse(localStorage.getItem("currentacno")||'')
    this.ds.events(this.acno)
    .subscribe((result:any)=>{
      if(result){
        this.events=result.events
      }
          },
          
            (result)=>{
              alert(result.error.message)
            }
          )
          console.log(this.events);
   }


  ngOnInit(): void {
  }

  delete(i:any){
console.log(i);
this.ds.deletedata(i)
.subscribe((result:any)=>{
  if(result)
  {
    alert(result.message)
    this.router.navigateByUrl("/eventform")
  }
},

  (result:any)=>{
    alert(result.error.message)
  }
)
}

}


