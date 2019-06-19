import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../../routing.module';
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
    RoutingModule,
    SharedModule,
    ChartModule,
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
