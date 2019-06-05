import { Review } from '../_models/review';

export class ReviewService {

    reviews: Review[];
    constructor(){
        this.reviews = [
            {id: 1 , content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
            date: new Date() , productId: 1 , rate: 4, userId: 2},
        ]
    }

    getAll() :Review[]{
        return this.reviews;
    }

    getById(id :number) :Review{
        return this.reviews.find(r => r.id === id);
    } 

    addCategory(r :Review){
        r.id = this.reviews.length + 1;
        this.reviews.push(r);
    }

    updateCategory(r :Review){
        const i = this.reviews.findIndex( e => e.id === r.id);
        this.reviews[i] = r;
    }

    deleteCategory(id :number){
        const i = this.reviews.findIndex( e => e.id === id);
        this.reviews.splice(i , 1);
    }

}