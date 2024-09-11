const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click",function(){
    counter++;
    corousel();
});

prevBtn.addEventListener("click",function(){
    counter--;
    corousel();
});

function corousel(){
    // working with slide
    // if(counter === slides.length){
    //     counter = 0;
    // }
    // if(counter < 0){
    //     counter = slides.length -1;
    // }

    // next button
    if(counter < slides.length -1){
        nextBtn.style.display = "block";
    }else{
        nextBtn.style.display = "none";
    }

    // prev button
    if(counter > 0){
        prevBtn.style.display = "block";
    }else{
        prevBtn.style.display = "none";
    }

    // slide transform
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";