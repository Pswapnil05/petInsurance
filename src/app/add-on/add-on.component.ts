import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})
export class AddOnComponent implements OnInit {

  @Input() addOnPremium : number;

  @Output() addOnAmount = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.addOnAmount.emit(this.addOnPremium);
  }

}
