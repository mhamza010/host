let caros = document.getElementById("caros");
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.querySelector(".navbar-menu");
const slider = document.querySelector(".slider");
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".cards");

let currentSlide = 0;

if (sliderTrack && slides.length > 1) {
    sliderTrack.appendChild(slides[0].cloneNode(true));

    setInterval(() => {
        currentSlide++;
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

        if (currentSlide === slides.length) {
            setTimeout(() => {
                sliderTrack.style.transition = "none";
                currentSlide = 0;
                sliderTrack.style.transform = "translateX(0)";

                requestAnimationFrame(() => {
                    sliderTrack.style.transition = "transform 0.6s ease-in-out";
                });
            }, 600);
        }
    }, 2000);
}
hamburger.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
});

setInterval(function(){

    
    caros.style.transition = "transform 0.5s";
    caros.style.transform = "translateX(0)";

    setTimeout(function(){

        
        let firstImage = caros.firstElementChild;

        
        caros.appendChild(firstImage);

        
        caros.style.transition = "none";
        caros.style.transform = "translateX(0px)";

    },500);

},2000);
