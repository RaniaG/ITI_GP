


export class Product {
    id?: number;
    name?: string;
    price?: number;
    discount?: number;
    images?: string[];
    // category? :Category;
    fKCategory?: number;
    rate?: number;
    details?: {
        color?: string;
        size?: string;
    }
}