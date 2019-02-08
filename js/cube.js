class CubeSlider{
    constructor()
    {
        this.slider=document.querySelector(".cube-slider");
        
        this.currentSlide=0;
        this.animationTime=2000;
        
        this.initializeCubeURLs();
        this.slide=document.createElement("div");     
        this.slide.className="cube-slider__slide";   
        this.slider.appendChild(this.slide);
        this.nextBtn=document.querySelector(".cube-slider .cube-slider__btn--next");
        this.prevBtn=document.querySelector(".cube-slider .cube-slider__btn--prev");
        this.eventListeners();

        
    }

    eventListeners(){
        
        this.nextBtn.addEventListener("click", ()=>{
            if(this.slider.contains(this.slide))
                this.nextSlide();
        });
        this.prevBtn.addEventListener("click", ()=>{
            if(this.slider.contains(this.slide))
                this.prevSlide();
        });
        this.slide.addEventListener("mouseover",()=>{
            this.pauseSlide();
            // console.log(this.prevBtn);
            this.prevBtn.classList.add("active");
            this.nextBtn.classList.add("active");
        });
        this.slide.addEventListener("mouseleave",()=>{
            this.resumeSlide();
            this.prevBtn.classList.remove("active");
            this.nextBtn.classList.remove("active");
        });
        this.nextBtn.addEventListener("mouseover",()=>{
                this.prevBtn.classList.add("active");
                this.nextBtn.classList.add("active");
        });
        this.prevBtn.addEventListener("mouseover",()=>{
                this.prevBtn.classList.add("active");
                this.nextBtn.classList.add("active");
        })
    }
    initializeCubeURLs(){
        this.slidesURL=[];
        var slidesURLs=document.querySelectorAll(".cube-slider .slide__img");
        slidesURLs.forEach((element,index)=>{
            this.slidesURL[index]=element.getAttribute("src");
        });
    }
    showCube(front,back,nextOrPrev){
        front.style.backgroundImage=`url(${this.slidesURL[this.currentSlide]})`;
        if(nextOrPrev) //next slide
            this.currentSlide=(this.currentSlide+1)%this.slidesURL.length;
        else  //previous slide
            {
                if(this.currentSlide==0)
                    this.currentSlide=this.slidesURL.length-1;
                else
                    this.currentSlide--;
            }
        back.style.backgroundImage=`url(${this.slidesURL[this.currentSlide]})`;
        this.cube.appendChild(front);
        this.cube.appendChild(back);
        this.slide.remove();
        this.slider.appendChild(this.cube);
        this.slide.style.backgroundImage=`url(${this.slidesURL[this.currentSlide]})`;
        // console.log("creating cube element vertical");     
        
        this.CubeSlideTimeout=setTimeout((g)=>{
            g.slider.appendChild(g.slide);
            g.showText();
            g.cube.remove();
            // console.log("removing cube element vertical");
        },this.animationTime,this);
    }
    showText(){
        var content=document.querySelector(`.cube-slider .slide:nth-child(${this.currentSlide+1}) .slide__content`).cloneNode(true);   
        this.slide.innerHTML="";
        this.slide.appendChild(content);
    }
    removeText(){

    }
    createCubeVertical(topOrBottom,nextOrPrev=true)
    {
        this.cube=document.createElement("div");
        var front=document.createElement("div");
        var back=document.createElement("div");        
        front.className="cube_side cube_side--front-vertical";
        back.className="cube_side cube_side--back-vertical";
        if(topOrBottom)
        {
            var top=document.createElement("div");
            top.className="cube_side cube_side--top";
            this.cube.appendChild(top);
            this.cube.className="cube cube--up";
        }else {
            var bottom=document.createElement("div");
            bottom.className="cube_side cube_side--bottom";
            this.cube.appendChild(bottom);
            this.cube.className="cube cube--down";
        }
        this.showCube(front,back,nextOrPrev);
    }
    createCubeHorizontal(leftOrRight,nextOrPrev=true)
    {
       
        this.cube=document.createElement("div");
        var front=document.createElement("div");
        var back=document.createElement("div");        
        front.className="cube_side cube_side--front-horizontal";
        back.className="cube_side cube_side--back-horizontal";
        if(leftOrRight)
        {
            var left=document.createElement("div");
            left.className="cube_side cube_side--left";
            this.cube.appendChild(left);
            this.cube.className="cube cube--left";
        }else {
            var right=document.createElement("div");
            right.className="cube_side cube_side--right";
            this.cube.appendChild(right);
            this.cube.className="cube cube--right";
        }
        this.showCube(front,back,nextOrPrev);
        
    }
    generateNewSlide(){
        // console.log("generating new slide");        
        var rand=Math.floor(Math.random()*4);
        switch (rand) {
            case 0: //top
                this.createCubeVertical(false);
                break;
            case 1: //bottom
                this.createCubeVertical(true);
                break;
            case 2: //right
                this.createCubeHorizontal(false);
                break;
            case 3: //left
                this.createCubeHorizontal(true);
                break;
            default:
                break;
        }
        
    }

    nextSlide(){
        // debugger;
        clearTimeout(this.CubeSlideTimeout);
        clearInterval(this.GenerateNewSlideInterval);
        //top or right;
        var rand=Math.round(Math.random());
        if(rand==0) //top
            this.createCubeVertical(true);
        else this.createCubeHorizontal(false);
        this.GenerateNewSlideInterval=setInterval((cs)=>{
            cs.generateNewSlide();
        },10000,this)
    }
    prevSlide(){
        clearTimeout(this.CubeSlideTimeout);
        clearInterval(this.GenerateNewSlideInterval);
        //left or bottom;
        var rand=Math.round(Math.random());
        if(rand==0) //bottom
            this.createCubeVertical(false,false);
        else this.createCubeHorizontal(true,false);
        this.GenerateNewSlideInterval=setInterval((cs)=>{
            cs.generateNewSlide();
        },10000,this)
    }
    pauseSlide(){
        // console.log("paused");
        clearTimeout(this.CubeSlideTimeout);
        clearInterval(this.GenerateNewSlideInterval);
    }
    resumeSlide(){
        // console.log("resumed");
        // this.generateNewSlide();
        this.GenerateNewSlideInterval=setInterval(()=>{
            this.generateNewSlide();
        },10000);
    }
    
}

var cs=new CubeSlider();
cs.generateNewSlide();

cs.GenerateNewSlideInterval=setInterval((cs)=>{
    cs.generateNewSlide();
},10000,cs)