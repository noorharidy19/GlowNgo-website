function showPopup() {
    document.getElementById("PContainer").style.display = "block";
  
    
   
    

}

function hidePopup() {
    document.getElementById("PContainer").style.display = "none";
    document.getElementById("PContainerr").style.display = "none";
  
  
}
function showP() {
    document.getElementById("PCont").style.display = "block";
   
    
    

}

function hideP() {
    document.getElementById("PCont").style.display = "none";
   
}
function des(){
    var nourhanElements = document.getElementsByClassName("nourhan");//description->nourhan
    var btn1Elements = document.getElementsByClassName("btn1");
    var btn2Elements = document.getElementsByClassName("btn2");
    var noorElements = document.getElementsByClassName("noor");
    for (var i = 0; i < nourhanElements.length; i++) {
        nourhanElements[i].style.display = "inline-block";
    }
    for (var i = 0; i < btn1Elements.length; i++) {
        btn1Elements[i].style.backgroundColor = "pink";
    }
    for (var i = 0; i < btn2Elements.length; i++) {
        btn2Elements[i].style.backgroundColor = "whitesmoke";
    }
    for (var i = 0; i < noorElements.length; i++) {
        noorElements[i].style.display = "none";
    }
}

function use(){
    var noorElements = document.getElementsByClassName("noor");//how to use->noor
    var btn2Elements = document.getElementsByClassName("btn2");
    var btn1Elements = document.getElementsByClassName("btn1");
    var nourhanElements = document.getElementsByClassName("nourhan");
    for (var i = 0; i < noorElements.length; i++) {
        noorElements[i].style.display = "inline-block";
    }
    for (var i = 0; i < btn2Elements.length; i++) {
        btn2Elements[i].style.backgroundColor = "pink";
    }
    for (var i = 0; i < btn1Elements.length; i++) {
        btn1Elements[i].style.backgroundColor = "whitesmoke";
    }
    for (var i = 0; i < nourhanElements.length; i++) {
        nourhanElements[i].style.display = "none";
    }
}


function usee(){
    document.getElementById("PContainerr").style.display = "block";
  
   
}


function x(selectedOption) {
    if (selectedOption) {
        switch (selectedOption) {
            case "A-Z":
                sortDivsAlphabetically();
                console.log("Sorting A-Z");
                break;
            case "By price(LOWER->HIGHER)":
                sortProductsByPrice();
                console.log("Sorting by price (lower to higher)");
                break;
            case "BY BRAND":
                console.log("Sorting by brand");
                break;
                case "By price(HIGHER->LOWER)":
                    sortProductsByPriceDescending();
            default:
                console.log("Please select an option");
                break;
        }
    } else {
        var selectedValue = document.getElementById("sortSelect").value;
        x(selectedValue);
    }
}

function sortDivsAlphabetically() {
    console.log("Sorting divs alphabetically...");
    
    var parentContainer = document.querySelector('.popupp');
    var divs = Array.from(parentContainer.children);
    
    divs.sort(function(a, b) {
        var textA = a.querySelector('h3').textContent.toUpperCase();
        var textB = b.querySelector('h3').textContent.toUpperCase();
        if (textA < textB) {
            return -1;
        }
        if (textA > textB) {
            return 1;
        }
        return 0;
    });
    while (parentContainer.firstChild) {
        parentContainer.removeChild(parentContainer.firstChild);
    }
    divs.forEach(function(div) {
        parentContainer.appendChild(div);
    });
}
function sortProductsByPrice() {
    var parentContainer = document.querySelector('.popupp');
    var productElements = Array.from(parentContainer.children);
    productElements.sort(function(a, b) {
        var priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
        var priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
        return priceA - priceB;
    });
    productElements.forEach(function(product) {
        parentContainer.appendChild(product);
    });
}
function sortProductsByPriceDescending() {
    var parentContainer = document.querySelector('.popupp');
    var productElements = Array.from(parentContainer.children);
    productElements.sort(function(a, b) {
        var priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
        var priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
        return priceB - priceA; 
    });
    productElements.forEach(function(product) {
        parentContainer.appendChild(product);
    });
}

