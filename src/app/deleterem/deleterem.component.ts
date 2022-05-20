import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-deleterem',
  templateUrl: './deleterem.component.html',
  styleUrls: ['./deleterem.component.css']
})
export class DeleteremComponent implements OnInit {
  @Input() toDeleteEventId: any | undefined;

  @Output() Cancelrem = new EventEmitter();

  @Output() deleteEvent = new EventEmitter();


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancel() {
  this.Cancelrem.emit();
  }

  delete() {
    this.deleteEvent.emit(this.toDeleteEventId);
  }

}
