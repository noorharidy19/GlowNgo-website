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

function showPopup() {
    document.getElementById("popupContainer").style.display = "block";
}

function hidePopup() {
    document.getElementById("popupContainer").style.display = "none";
    window.location.href = "trial2.html";
}

window.onload = function() {
    showPopup();
};

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerText = hintMsg;
}

function validateForm1() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var country = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;
    var terms = document.getElementById("terms").checked;

    var error = false;
    var errorMessage = "";

    if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirm_password.trim() === "" || country === "" || phone.trim() === "") {
        errorMessage += "Please fill in all fields.\n";
        error = true;
    }

    if (password !== confirm_password) {
        errorMessage += "Passwords do not match.\n";
        error = true;
    }

    if (!terms) {
        errorMessage += "Please accept the terms and conditions.\n";
        error = true;
    }

    if (error) {
        document.getElementById("errorField").innerText = errorMessage;
        return false;
    }
    window.open("Home.html", "_self");
    
    return false; 
}

function validateForm2() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var error = false;

    if (username == "nourhan.mohamed" && password !== "1234") {
        printError("usernameErr", "Invalid password, Please Try Again! ");
        error = true;

    } else if (username!=="nourhan.mohamed"&& password !=="1234")
    {printError("usernameErr", "Invalid username or password, Please Try Again! ");
    error = true;
    }
    else if (username !=="nourhan.amr"&&password !=="nour1234")
    {printError("usernameErr", "Invalid username or password, Please Try Again! ");
    error = true;
    }
    else {
        printError("usernameErr", "");
    }


    if (error) {
        return false; 
    }
    window.open("Home.html", "_self");
    
    return false; 
}

function showPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function hidePopup(id) {
    document.getElementById(id).style.display = 'none';
}