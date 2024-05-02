let slideIndex = 0;
let timeout;

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
    timeout = setTimeout(showSlides, 5000);
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
document.querySelectorAll('a.product-hover').forEach(item => {
    item.addEventListener('mouseover', function() {
        const productContent = `
            <table class="products-table">
                <tr>
                    <td><img src="all.jpg" alt="All Products"></td>
                    <td><img src="face.jpg" alt="Face"></td>
                    <td><img src="eye.jpg" alt="Eyes"></td>
                    <td><img src="lips.jpg" alt="Lips"></td>
                    <td><img src="brows.jpg" alt="Brows"></td>
                    <td><img src="tools.jpg" alt="Tools"></td>
                </tr>
                <tr>
                    <td>All Products</td>
                    <td>Face</td>
                    <td>Eyes</td>
                    <td>Lips</td>
                    <td>Brows</td>
                    <td>Tools</td>
                </tr>
            </table>
        `;
      
        document.getElementById('productDropdownContent').innerHTML = productContent;
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
    window.open("trial2.html", "_self");
    
    return false; 
}

function validateForm2() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var error = false;

    if (username !== "nourhan" || password !== "1234") {
        printError("usernameErr", "Invalid username or password, Please Try Again! ");
        error = true;
    } else {
        printError("usernameErr", "");
    }

    if (error) {
        return false; 
    }
    window.open("Home.html", "_self");
    
    return false; 
}

