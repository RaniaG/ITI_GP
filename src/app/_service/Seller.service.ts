import { Injectable } from "@angular/core";
import { ProductService } from './product.service';
import { Product } from '../_models/product';
import { Order } from '../_models/order';
import { OrderedProductsService } from './ordered-products.service';

@Injectable()
class SellerService {
    // productService: ProductService;
    orderedProductService: OrderedProductsService;
    products: Product[];
    orders: Order[];
    constructor(productService: ProductService) {

    }
}