import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {
  @Input('bg-color')
  cardColor: string;
  @Input('imageUrl')
  cardImage: string;
  @Input('value')
  cardValue: string;
  @Input('label')
  cardLabel: string;

  constructor() {

  }

  ngOnInit() {
  }

}
