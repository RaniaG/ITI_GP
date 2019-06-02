interface Order {
    id: string,//guid
    status: number,
    date: Date,
    shippingAddress: number,
    deliveryMethod: number,
    paymenMethod: string,
    invoice: {
        subtotal: number,
        discount?: number,
        shippingFees?: number
    }
    productList: Product[],
}