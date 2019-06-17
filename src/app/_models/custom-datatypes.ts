export interface OrderSummary {
    statusName: string,
    ordersCount: number
}

export interface SalesSummary {
    period: string,
    orderedProductsSales: number,
    numberOfUnits: number
}