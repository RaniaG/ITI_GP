import { Category } from './category';



export class Product {

    id?: number; 
    name?: string;
    price?: number;
    discount?: number;
    quantity?: number;
    description?: string;
    images?: any[];
    terms?: String;
    category?: Category;
    fKCategory?: number;
    rate?: number;
    details?: {
        color?: string;
        size?: string;
    }
    customizations?: { field: string, values: string[] }[]
}