export interface OrderSummary {
    statusName: string,
    ordersCount: number
}

export class SalesSummary {
    period: string;
    orderedProductsSales: number;
    numberOfUnits: number;
}