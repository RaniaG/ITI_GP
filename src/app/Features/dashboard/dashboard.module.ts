import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../Shared/shared.module';
// import { ChartsModule } from 'ng2-charts';
// import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { ChartModule } from 'primeng/chart';



import { SummaryCardComponent } from './summary-card/summary-card.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { InventoryCardComponent } from './inventory-card/inventory-card.component';
import { OrdersSummaryComponent } from './orders-summary/orders-summary.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { OrderDetailsComponent } from './order/details/details.component';
import { OrderListingComponent } from './order/listing/listing.component';
import { VisitsSummaryComponent } from './visits-summary/visits-summary.component';
import { DashboardListingComponent } from './dashboard-listing/dashboard-listing.component';
import { SellerService } from 'src/app/_service/Seller.service';
import { ShopService } from '../shop/shop.service';
import { FormsModule } from '@angular/forms';

const Routes: Routes = [
  {
    path: 'shop/:id', children: [
      { path: 'dashboard', component: DashboardListingComponent },
      { path: 'orders', component: OrderListingComponent },
      { path: 'order/:orderId/details', component: OrderDetailsComponent }
    ]
  }
]

@NgModule({
  declarations: [
    SummaryCardComponent,
    SalesSummaryComponent,
    InventoryCardComponent,
    OrdersSummaryComponent,
    SalesChartComponent,
    OrderDetailsComponent,
    OrderListingComponent,
    VisitsSummaryComponent,
    DashboardListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    SharedModule,
    ChartModule,
    FormsModule
    // ChartsModule,
    // WavesModule

  ],
  exports: [
    DashboardListingComponent,
    OrderDetailsComponent,
    OrderListingComponent,
  ],
  providers: [SellerService, ShopService]

})
export class DashboardModule { }
