import { Category } from './category';



export class Product {

    id? :string;
    name? :string;
    price? :number;
    discount? :number;
    quantity? :number;
    description? :string;
    images?: string[];
    terms?: String;
    category? :Category;
    fKCategory? :number;
    rate?: number;
    details?: {
        color?: string;
        size?: string;
    }
}