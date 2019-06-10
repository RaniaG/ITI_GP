import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visits-summary',
  templateUrl: './visits-summary.component.html',
  styleUrls: ['./visits-summary.component.scss']
})
export class VisitsSummaryComponent implements OnInit {

  // shopTotalVisits:number;
  shopVisits;
  //to inject service later
  constructor() { }

  ngOnInit() {
    // this.shopTotalVisits = 500;
    this.shopVisits = [
      { region: "america", numberOfVisits: 28 },
      { region: "canada", numberOfVisits: 8 },
      { region: "north africa", numberOfVisits: 24 },
      { region: "asia", numberOfVisits: 16 },
      { region: "europe", numberOfVisits: 12 },
      { region: "others", numberOfVisits: 2 },
    ]
  }

}
