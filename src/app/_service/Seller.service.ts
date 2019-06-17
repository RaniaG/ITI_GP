import { Injectable } from "@angular/core";
import { ProductService } from './product.service';
import { Product } from '../_models/product';
import { Order } from '../_models/order';
import { OrderedProductsService } from './ordered-products.service';
import { OrderBrief } from '../_models/orderBrief';
import { OrderSummary, SalesSummary } from '../_models/custom-datatypes';

@Injectable()
export class SellerService {
    // productService: ProductService;
    orderedProductService: OrderedProductsService;
    products: Product[];
    orders: Order[];
    ordersBriefs: OrderBrief[];
    visitsCount: number;
    soldProductsCount: number;
    ordersCount: number;
    totalRevenuValue: number;

    constructor(productService: ProductService) {
        this.ordersBriefs = [

        ];

    }
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

    getOrderStatusOptions(): string[] {
        return ["pending", "delivered", "shipped"];
    }
    getOrdersByStatus(status: string): OrderBrief[] {
        this.ordersBriefs = [];
        return this.ordersBriefs;
    }

    getAllOrdersBriefs(): OrderBrief[] {
        return this.ordersBriefs;
    }
    getOrderDetailsById(packageId: string): Order {
        return this.orders[0];
    }


    //     <tr>
    //     <td>#14584 < /td>
    //         < td > Jun 26, 2013 < /td>
    //             < td > <span class="badge badge-warning" > Shipped < /span>
    //                 < td > 173 Donec Ave Sandwich < /td>
    //                     < td > $318.00 < /td>
    //                         < td class="text-light" > <a href="" class="btn btn-sm btn-primary" > <i class="fa fa-search" > </i>
    // View < /a>
    //     < /td>
    //     < /tr>

    //     < tr >
    //     <td>#14584 < /td>
    //         < td > Jun 26, 2013 < /td>
    //             < td > <span class="badge badge-info" > Pending < /span>
    //                 < td > 173 Donec Ave Sandwich < /td>
    //                     < td > $318.00 < /td>
    //                         < td class="text-light" > <a href="" class="btn btn-sm btn-primary" > <i class="fa fa-search" > </i>
    // View < /a>
    //     < /td>
    //     < /tr>

    //     < tr >
    //     <td>#14584 < /td>
    //         < td > Jun 26, 2013 < /td>
    //             < td > <span class="badge badge-success" > Delivered < /span>
    //                 < td > 173 Donec Ave Sandwich < /td>
    //                     < td > $318.00 < /td>
    //                         < td class="text-light" > <a href="" class="btn btn-sm btn-primary" > <i class="fa fa-search" > </i>
    // View < /a>
    //     < /td>
    //     < /tr>

    //     < tr >
    //     <td>#14584 < /td>
    //         < td > Jun 26, 2013 < /td>
    //             < td > <span class="badge badge-warning" > Shipped < /span>
    //                 < td > 173 Donec Ave Sandwich < /td>
    //                     < td > $318.00 < /td>
    //                         < td class="text-light" > <a href="" class="btn btn-sm btn-primary" > <i class="fa fa-search" > </i>
    // View < /a>
    //     < /td>
    //     < /tr>
}