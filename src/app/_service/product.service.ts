import { Product } from '../_models/product';


export class ProductService {

    products: Product[];
    constructor() {
        this.products = [
            {
                id: 1,
                shopId: "4",
                name: 'Product 1',
                price: 10, discount: 2, quantity: 3,
                images: ['assets/images/image_11-1-300x300.jpg', 'assets/images/image_52-300x300.jpg'],
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                terms: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo incidunt quidem rerum mollitia in",
                category: { id: 1, name: "Clothes" },
                rate: 3.5,
                customizations: [
                    { field: 'Color', values: ['red', 'blue', 'cyan'] },
                    { field: 'Size', values: ['large', 'medium', 'small'] }
                ]
            },
            {
                id: 2,
                shopId: "2",
                name: 'Product 2',
                price: 40, discount: 2.5, quantity: 2,
                images: ['assets/images/image_11-1-300x300.jpg', 'assets/images/image_52-300x300.jpg'],
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                terms: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo incidunt quidem rerum mollitia in",
                category: { id: 2, name: "Accessories" }
            },
            {
                id: 3,
                shopId: "3",
                name: 'Product 3',
                price: 50, discount: 3, quantity: 5,
                images: ['assets/images/image_11-1-300x300.jpg', 'assets/images/image_52-300x300.jpg'],
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                terms: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo incidunt quidem rerum mollitia in",
                category: { id: 3, name: "Decor" }
            },
            {
                id: 4,
                shopId: "4",
                name: 'Product 4',
                price: 50, discount: 3, quantity: 5,
                images: ['assets/images/image_11-1-300x300.jpg', 'assets/images/image_52-300x300.jpg'],
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                terms: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo incidunt quidem rerum mollitia in",
                category: { id: 3, name: "Decor" }
            }
            // {id: "4" , name: 'Product 4' , price: 20 , discount: 2 , images:['assets/images/image_11-1-300x300.jpg','assets/images/image_52-300x300.jpg']},
            // {id: "5" , name: 'Product 5' , price: 30 , discount: 2.5 , images:['assets/images/image_11-1-300x300.jpg','assets/images/image_52-300x300.jpg']},
        ]
    }

    getAll(): Product[] {
        return this.products;
    }

    getById(id: number): Product {
        return this.products.find(p => p.id === id);
    }

    addProduct(p: Product) {
        p.id = this.products.length + 1;
        this.products.push(p);
    }

    updateProduct(p: Product) {
        const i = this.products.findIndex(e => e.id === p.id);
        this.products[i] = p;
    }

    deleteProduct(id: number) {
        const i = this.products.findIndex(e => e.id === id);
        this.products.splice(i, 1);
    }


    getRelated(id: number): Product[] {
        const categoryId = this.products.find(e => e.id == id).category.id
        // console.log(c)
        let related = this.products.filter(a => a.category.id == categoryId)
        // console.log(x)
        return related;
    }
}