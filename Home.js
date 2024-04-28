let slideIndex = 0;
let timeout;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    timeout = setTimeout(showSlides, 2000);
}

function plusSlides(n) {
    clearTimeout(timeout); 
    slideIndex += n;

    if (slideIndex > document.getElementsByClassName("slide").length) {
        slideIndex = 1;
    }
    
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("slide").length;
    }

    showSlides();
}

function currentSlide(n) {
    clearTimeout(timeout); 
    slideIndex = n - 1;
    showSlides();
}
