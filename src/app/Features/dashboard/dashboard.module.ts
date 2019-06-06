import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../../routing.module';
import { SharedModule } from '../../Shared/shared.module';

import { SummaryCardComponent } from './summary-card/summary-card.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { InventoryCardComponent } from './inventory-card/inventory-card.component';
import { OrdersSummaryComponent } from './orders-summary/orders-summary.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { OrderDetailsComponent } from './order/details/details.component';
import { OrderListingComponent } from './order/listing/listing.component';
import { VisitsSummaryComponent } from './visits-summary/visits-summary.component';
import { DashboardListingComponent } from './dashboard-listing/dashboard-listing.component';

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
  ],
  exports: [
    DashboardListingComponent,
    OrderDetailsComponent,
    OrderListingComponent,
  ]

})
export class DashboardModule { }
