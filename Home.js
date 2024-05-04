let slideIndex = 0;
let timeout;
let ProdIndex = 0;
let ProdIndex1 = 0;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dashes = document.getElementsByClassName("dash");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dashes.length; i++) {
        dashes[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dashes[slideIndex - 1].classList.add("active");

    timeout = setTimeout(showSlides, 4000);
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

function plusProd(n) {
    ProdIndex += n;
    showProd();
}

function showProd() {
    const productContainer = document.querySelector('.shop-wrapper');
    const products = productContainer.querySelectorAll('.shop');
    const maxIndex = products.length - 5;

    if (ProdIndex < 0) {
        ProdIndex = maxIndex;
    } else if (ProdIndex > maxIndex) {
        ProdIndex = 0;
    }
    productContainer.style.marginLeft = `-${ProdIndex * 250}px`;
}

function plusProd1(n) {
    ProdIndex1 += n;
    showProd1();
}

function showProd1() {
    const productContainer = document.querySelector('.shop-wrapper1');
    const products = productContainer.querySelectorAll('.shop');
    const maxIndex = products.length - 5;

    if (ProdIndex1 < 0) {
        ProdIndex1 = maxIndex;
    } else if (ProdIndex1 > maxIndex) {
        ProdIndex1 = 0;
    }
    productContainer.style.marginLeft = `-${ProdIndex1 * 250}px`;
}

$(document).ready(function(){
    $('.dropdown-menu').hover(function(){
        $(this).find('.dropdown-contents').css('display', 'block');
    }, function(){
        $(this).find('.dropdown-contents').css('display', 'none');
    });
});