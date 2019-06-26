import { Injectable } from '@angular/core';
import { ShipmentData } from '../_models/shipmentData';
import { DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Injectable({
  providedIn: 'root'
})
export class ShipmentDataService {

  shipmentData: ShipmentData[];
  constructor() {
    this.shipmentData = [{
      id: 1,
      ContactEmail: "doaa@DomAdapter.com",
      ContactName: "Doaa",
      phone: "222222222",
      FullAddress: "fbhbfsdhfbsjbfuwenfiuwe",
    },
    {
      id: 2,
      ContactEmail: "doaa@DomAdapter.com",
      ContactName: "Doaa osama",
      phone: "88888888888888",
      FullAddress: "fbhbfsdhfbsjbfuwenfiuwe",
    }
    ]
  }

  getAll(): ShipmentData[] {
    return this.shipmentData;
  }

  getById(id: number): ShipmentData {
    return this.shipmentData.find(p => p.id === id);
  }

  addt(sh: ShipmentData) {
    sh.id = this.shipmentData.length + 1;
    this.shipmentData.push(sh);
  }

  deleteProduct(id: number) {
    const i = this.shipmentData.findIndex(e => e.id === id);
    this.shipmentData.splice(i, 1);
  }
}
