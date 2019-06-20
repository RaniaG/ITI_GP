import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.scss']
})
export class SalesChartComponent implements OnInit {

  data: any;
  datasets: any;
  constructor(private sellerService: SellerService) {
  }
  ngOnInit() {
    this.datasets = this.sellerService.getSalesChartDatasets();
    this.data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Des'],
      datasets: this.datasets
    }
  }
}
