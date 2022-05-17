import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {

@Input() item:string | undefined 

@Output() oncancel = new EventEmitter()

@Output() ondelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  cancel()
  {
  this.oncancel.emit()
  }
  
  delete()
  {
  this.ondelete.emit(this.item)
  Swal.fire({
    text: 'Please Register or Log in Again.. ',
    target: '#custom-target',
    timer: 5000,
    customClass: {
      container: 'position-absolute'
    },
    toast: true,
    position: 'bottom-right'
  })
  
  }
  

}
