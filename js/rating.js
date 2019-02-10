class Rating{
    constructor(){
        this.goldColor="#ffd055";
        this.greyColor="rgb(176, 176, 176)";
        this.calcAllStaticRating();
        this.calcAllDynamicRating();
    }
    calcAllStaticRating(){
        var arrRating=document.getElementsByClassName("rating--static");
        arrRating.forEach=Array.prototype.forEach;
        arrRating.forEach((element,index)=>{
            this.calcStaticRating(element);
        });
    }
    calcStaticRating(el){
        var rating=parseFloat(el.innerText);
        el.innerText="";
        if(rating>5||rating<0) return;
        var filling=document.createElement("div");
        filling.className="rating--static-fill";
        filling.innerText="★★★★★";
        filling.style.width=`${rating*100/5}%`;
        el.appendChild(filling);
    }
    calcAllDynamicRating(){
        var arrRating=document.getElementsByClassName("rating--dynamic");
        arrRating.forEach=Array.prototype.forEach;
        arrRating.forEach((element,index)=>{
            this.calcDynamicRating(element);
        });
    }
    calcDynamicRating(el){
        el.setAttribute("value","0");
        var star;
        for (let i = 0; i < 5; i++) {
            star=document.createElement("span");
            star.className="rating--dynamic__star";
            star.innerText="★";
            star.setAttribute("value",i+1);
            star.addEventListener("mouseover",(event)=>{
                this.dynamicRatingHover(event.target);
            });
            star.addEventListener("mouseleave",(event)=>{
                var ratingElement=event.target.parentElement;
                var allStars=ratingElement.children;
                if(ratingElement.getAttribute("value")==0)
                {
                    for (let i = 0; i < 5; i++) {
                        allStars[i].style.color=this.greyColor;
                    }
                }else{
                    this.dynamicRatingClick(parseInt(ratingElement.getAttribute("value"))-1,allStars);
                }
            });
            star.addEventListener("click",(event)=>{
                var starValue=event.target.getAttribute("value");
                event.target.parentElement.setAttribute("value",starValue);
                var allStars=event.target.parentElement.children;
                this.dynamicRatingClick(starValue-1,allStars);
            });
            el.appendChild(star);
        }
    }
    dynamicRatingHover(element){
        var currentStar=element;
        var ratingElement=element.parentElement;
        var allStars=ratingElement.children;
        for (let i = 0; i < 5; i++) {
            if(i+1<=parseInt(currentStar.getAttribute("value")))
                allStars[i].style.color=this.goldColor;
            else 
                allStars[i].style.color=this.greyColor;
        }
    }
    dynamicRatingClick(index,collection){
        for (let i = 0; i < collection.length; i++) {
            if(i<=index)
            collection[i].style.color=this.goldColor;
            else collection[i].style.color=this.greyColor;
        }
    }
}

var r=new Rating();
