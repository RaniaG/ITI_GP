
import { Order } from '../_models/order';
import { OrderBrief } from '../_models/orderBrief';
import { OrderSummary, SalesSummary } from '../_models/DataTransfereObjects';
import { promise } from 'protractor';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = "http://localhost:50589";
const TOKEN = "";

@Injectable()
export class SellerService {
    ordersBriefs: OrderBrief[];
    visitsCount: number;
    soldProductsCount: number;
    ordersCount: number;
    totalRevenuValue: number;

    constructor(private http: HttpClient) {
        this.ordersBriefs = [
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "delivered",
                totalDue: 158
            },
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "shipped",
                totalDue: 158
            },
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "pending",
                totalDue: 158
            },
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "pending",
                totalDue: 158
            },
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "pending",
                totalDue: 158
            },
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "pending",
                totalDue: 158
            },
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "pending",
                totalDue: 158
            },
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "pending",
                totalDue: 158
            },
            {
                packageId: "14584",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "pending",
                totalDue: 158
            },
            {
                packageId: "898919",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "pending",
                totalDue: 158
            },
            {
                packageId: "6198981",
                date: new Date(),
                shipmentData: {
                    address: "12 nozha st.",
                    city: "nasr city",
                    country: "egypt",
                },
                status: "shipped",
                totalDue: 158
            }
        ];
    }
    //dashboard info cards
    getShopVisitsCount(): number {
        this.visitsCount = 1000;
        return this.visitsCount;
    }
    getSoldProductCount(): number {
        this.soldProductsCount = 500;
        return this.soldProductsCount;
    }
    getTotalRevenu(shopId: string): Observable<any> {
        return this.http.get(`${baseurl}/rpc/packages/GetPackagesRevenu/${shopId}`);

    }
    getDoneOredersCount(shopId: string): Observable<any> {
        return this.http.get(`${baseurl}/rpc/packages/GetDeliveredPackagesCount/${shopId}`);
    }
    //-----------------------------------------
    // dashboard summary cards
    getOrdersSummary(): OrderSummary[] {
        return [
            { statusName: "pending", ordersCount: 10 },
            { statusName: "shipped", ordersCount: 10 },
            { statusName: "delivered", ordersCount: 10 },
            // { statusName: "custom request", ordersCount: 3 },
            // { statusName: "return request", ordersCount: 1 },
        ]
    }
    getShopVisitsDetails(): { region: string, numberOfVisits: number }[] {
        return [
            { region: "america", numberOfVisits: 28 }, // these are percentages
            { region: "canada", numberOfVisits: 8 },
            { region: "north africa", numberOfVisits: 24 },
            { region: "asia", numberOfVisits: 16 },
            { region: "europe", numberOfVisits: 12 },
            { region: "others", numberOfVisits: 2 },
        ];
    }

    getSalesOverPeriods(): SalesSummary[] {
        return [
            { period: "today", orderedProductsSales: 750, numberOfUnits: 4 },
            { period: "15 days", orderedProductsSales: 750, numberOfUnits: 5 },
            { period: "1 month", orderedProductsSales: 750, numberOfUnits: 15 },
            { period: "3 months", orderedProductsSales: 750, numberOfUnits: 10 },
        ];
    }

    getSalesChartDatasets() {
        return [
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
    //------------------------------------------
    //seller order listing
    getOrderStatusOptions(): string[] {
        return ["pending", "delivered", "shipped"];
    }
    getOrdersBriefsByFilterOptionsCount(shopId: string, status: number): Observable<any> {
        return this.http.get(`${baseurl}/rpc/packages/GetPackagesCount?shopId=${shopId}&status=${status}`);
    }

    getOrdersBriefsByFilterOptions(shopId: string, status: number, numberOfDataToFetch: number, pageNumber: number): Observable<any> {
        return this.http.get(`${baseurl}/rpc/packages/GetPackagesBriefs?shopId=${shopId}&skip=${(pageNumber - 1) * numberOfDataToFetch}&take=${numberOfDataToFetch}&status=${status}`);
    }
    //---------------------------------------
    //seller order details
    getPackageById(shopId: string, packageId: number): Observable<any> {
        return this.http.get(`${baseurl}/rpc/packages/GetPackageDetails/${packageId}?shopId=${shopId}`);
    }


    updatePackageStatus(shopId: string, pkg): Observable<any> {
        return this.http.post(`${baseurl}/rpc/packages/PutPackage`,
            {

            });
    }


}