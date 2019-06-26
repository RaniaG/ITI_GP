import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShipmentDataService } from 'src/app/_service/shipment-data.service';
import { ShipmentData } from 'src/app/_models/shipmentData';

@Component({
  selector: 'app-shipping-information',
  templateUrl: './shipping-information.component.html',
  styleUrls: ['./shipping-information.component.scss']
})
export class ShippingInformationComponent implements OnInit {

  shipmentData: ShipmentData[];
  shipment: ShipmentData;

  @Output() shipTo: EventEmitter<ShipmentData> = new EventEmitter();

  constructor(private shipmentDataService: ShipmentDataService) { }

  ngOnInit() {
    this.shipmentData = this.shipmentDataService.getAll();
  }

  AddToOrder(id: number) {
    this.shipment = this.shipmentDataService.getById(id);
    this.shipTo.emit(this.shipment);
  }

}
