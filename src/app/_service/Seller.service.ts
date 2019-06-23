
import { Order } from '../_models/order';
import { OrderBrief } from '../_models/orderBrief';
import { OrderSummary, SalesSummary } from '../_models/DataTransfereObjects';
import { promise } from 'protractor';
import { analyzeAndValidateNgModules } from '@angular/compiler';

const serverName = "http://localhost:50589";
const TOKEN = "";

export class SellerService {
    ordersBriefs: OrderBrief[];
    visitsCount: number;
    soldProductsCount: number;
    ordersCount: number;
    totalRevenuValue: number;

    constructor() {
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
        this.soldProductsCount = 1000;
        return this.soldProductsCount;
    }
    getTotalRevenu(): number {
        this.totalRevenuValue = 1000;
        return this.totalRevenuValue;
    }
    getDoneOredersCount(): number {
        this.ordersCount = 1000;
        return this.ordersCount;
    }
    //-----------------------------------------
    // dashboard summary cards
    getShopSubscription(shopId: string): string {
        let output: any;
        fetch(`${serverName}/rpc/shops/getsubscriptiontype/${shopId}`,
            {
                method: "GET",
                mode: "cors",
                headers: new Headers({
                    'content-type': 'application/json',
                    authentication: `bearer ${TOKEN}`
                })
            }).then(response => {
                output = "uhuu";
            }).catch(error => {
                output = "404";
            });
        return output;
    }
    getShopUsedSlots(shopId: string): number {
        let output: any;
        fetch(`${serverName}/rpc/shops/getsubscriptiontype/${shopId}`,
            {
                method: "GET",
                mode: "cors",
                headers: new Headers({
                    'content-type': 'application/json',
                    authentication: `bearer ${TOKEN}`
                })
            }).then(response => {
                output = "uhuu";
            }).catch(error => {
                output = "404";
            });
        return output;
    }
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
    getOrdersBriefsByFilterOptionsCount(status: string, searchKey: string, numberOfDataToFetch: number, pageNumber: number): number {
        return 100;
    }

    getOrdersBriefsByFilterOptions(status: string, searchKey: string, numberOfDataToFetch: number, pageNumber: number): OrderBrief[] {
        let stateIndex = (numberOfDataToFetch * pageNumber) - 1;
        return this.ordersBriefs.filter(order => order.status.includes(status));
    }

    getAllOrdersBriefs(): OrderBrief[] {
        return this.ordersBriefs;
    }
    //---------------------------------------
    //seller order details
    getPackageById(shopId: string, packageId: number): Order {
        let order: Order;
        if (packageId === 12547) {
            order = {
                id: "12547",
                date: new Date(),
                status: "pending",
                deliveryMethod: "door to door",
                paymentMethod: "cash on delivery",
                invoice: {
                    subtotal: 25.00,
                    totalDiscount: 5,
                    totalShippingFees: 10,
                },
                packageId: "jngtrhut",
            }
        }
        return order;
    }


    updatePackageStatus(shopId, packageId, newStatus): Order {
        let order: Order = {
            id: "12547",
            date: new Date(),
            status: newStatus,
            deliveryMethod: "door to door",
            paymentMethod: "cash on delivery",
            invoice: {
                subtotal: 25.00,
                totalDiscount: 5,
                totalShippingFees: 10,
            },
            packageId: "jngtrhut",
        }
        return order;
    }

}