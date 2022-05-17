import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  })

  ngOnInit(): void {
    console.log(this.arouter.snapshot.params.i);
    
    this.ds.getcurrentdata(this.arouter.snapshot.params.i).subscribe((result)=>{
    
    })
  }

updateevent(




){

}

}


