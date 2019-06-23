import { Category } from '../_models/category';


export class CategoryService {

    categories: Category[];
    constructor(){
        this.categories = [
            {id: 1 , name: 'Accessories' },
            {id: 2 , name: 'Decor' },
            {id: 3 , name: 'Clothes' },
            // {id: 4 , name: 'Category 4' },
            // {id: 5 , name: 'Category 5' },
        ]
    }

    getAll() :Category[]{
        return this.categories;
    }

    getById(id :number) :Category{
        return this.categories.find(c => c.id === id);
    } 

    addCategory(c :Category){
        c.id = this.categories.length + 1;
        this.categories.push(c);
    }

    updateCategory(c :Category){
        const i = this.categories.findIndex( e => e.id === c.id);
        this.categories[i] = c;
    }

    deleteCategory(id :number){
        const i = this.categories.findIndex( e => e.id === id);
        this.categories.splice(i , 1);
    }

}