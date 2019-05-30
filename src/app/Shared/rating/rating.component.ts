import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {


  @Input('readonly') readonly: boolean;

  @Input() rate: number;
  @Output()
  rateChange = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  onChange(val) {
    this.rate = val;
    this.rateChange.emit(val);
  }
}
