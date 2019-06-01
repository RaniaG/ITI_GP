import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { InventoryCardComponent } from './inventory-card/inventory-card.component';
import { OrdersSummaryComponent } from './orders-summary/orders-summary.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { DetailsComponent } from './order/details/details.component';
import { ListingComponent } from './order/listing/listing.component';
import { VisitsSummaryComponent } from './visits-summary/visits-summary.component';

@NgModule({
  declarations: [SummaryCardComponent, SalesSummaryComponent, InventoryCardComponent, OrdersSummaryComponent, SalesChartComponent, DetailsComponent, ListingComponent, VisitsSummaryComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
