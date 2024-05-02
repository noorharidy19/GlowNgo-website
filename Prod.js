function showPopup(containerIds) {
    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "block";
    });
}

function hidePopup(containerIds) {
    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "none";
    });
}
function showP(containerIds) {
    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "block";
    });
}

function hideP(containerIds) {
    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "none";
    });
}
// function showPopup1() {
//     document.getElementById("PContainerrr").style.display = "block";
// }

// function hidePopup1() {
//     document.getElementById("PContainerrr").style.display = "none";
//     document.getElementById("PContainerrrr").style.display = "none";
// }
// function showP1() {
//     document.getElementById("PContt").style.display = "block";
// }

// function hideP1() {
//     document.getElementById("PContt").style.display = "none";
   
// }

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


// function usee(){
//     document.getElementById("PContainerr").style.display = "block";
  
   
// }


function x(selectedOption, container) {
    if (selectedOption) {
        switch (selectedOption) {
            case "A-Z":
                sortDivsAlphabetically(container);
                console.log("Sorting A-Z");
                break;
            case "By price(LOWER->HIGHER)":
                sortProductsByPrice(container);
                console.log("Sorting by price (lower to higher)");
                break;
            case "BY BRAND":
                console.log("Sorting by brand");
                break;
            case "By price(HIGHER->LOWER)":
                sortProductsByPriceDescending(container);
                console.log("Sorting by price (higher to lower)");
                break;
            default:
                console.log("Please select an option");
                break;
        }
    } else {
        console.log("Please select an option");
    }
}

function sortDivsAlphabetically(container) {
    console.log("Sorting divs alphabetically...");
    var parentContainer = document.querySelector(container);
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

function sortProductsByPrice(container) {
    var parentContainer = document.querySelector(container);
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

function sortProductsByPriceDescending(container) {
    var parentContainer = document.querySelector(container);
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

