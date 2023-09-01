const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".closemenu");
const menu = document.querySelector("ul")
const overlay = document.querySelector(".ulcontainer");
const carousel = document.querySelector(".lefttop");
const slides = document.querySelectorAll(".lefttop .product");
const previous = document.querySelector(".mobilearrowleft");
const next = document.querySelector(".mobilearrowright");

hamburger.addEventListener('click', () => {
    if (window.innerWidth <= 1000) { // Check if screen width is 1000px or less
        hamburger.style.display = 'none';
        close.style.display = 'block';
        menu.style.display = 'block';
        overlay.style.display = 'block';
        previous.style.display = 'none';
    }
});

close.addEventListener('click', () => {
    if (window.innerWidth <= 1000) { // Check if screen width is 1000px or less
        hamburger.style.display = 'block';
        close.style.display = 'none';
        menu.style.display = 'none';
        overlay.style.display = 'none';
        previous.style.display = 'block';
    }
});


if (window.innerWidth <= 1000){

let currentIndex = 0;

previous.addEventListener('click', () =>{
    if(currentIndex > 0){
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
});

next.addEventListener('click', () =>{
    if(currentIndex < slides.length - 1){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});


const updateCarousel = (() => {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });

});

updateCarousel();

}

if (window.innerWidth <= 1000){
    
}
    