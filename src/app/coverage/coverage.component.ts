import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {

  @Input() premium:number;

  @Output() premiumAmount = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.premiumAmount.emit(this.premium);
  }

}

