import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {

  constructor(private ds:DataService, private router:Router,private form:FormBuilder,private arouter:ActivatedRoute) { }

  eventform = this.form.group({
    date: ['', Validators.required],
    des: ['', Validators.required],
    time:['',Validators.required]
  })

  ngOnInit(): void {
    console.log(this.arouter.snapshot.params.i);
    
  }

updateevent(){

  var date = this.eventform.value.date

  var time=this.eventform.value.time

  console.log(time);

  
  var des = this.eventform.value.des


  var uid=uuidv4();
if(this.eventform.valid)
 { 
   var result = this.ds.updateevent(date,time,des,uid)
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

}
