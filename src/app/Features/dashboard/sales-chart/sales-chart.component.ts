import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.scss']
})
export class SalesChartComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Des'],
      datasets: [
        {
          label: '2019',
          data: [65, 59, 80, 81, 56, 55, 40, 80, 90, 100],
          fill: true,
          borderColor: '#4bc0c0'
        },
        {
          label: '2018',
          data: [28, 48, 40, 86, 27, 90],
          fill: true,
          borderColor: '#565656'
        }
      ]
    }
  }
  ngOnInit() { }
}
