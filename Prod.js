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
function sortDivsAlphabetically(containerClass) {
    console.log("Sorting divs alphabetically...");
    var parentContainer = document.querySelector('.' + containerClass);
    if (!parentContainer) {
        console.log("Parent container not found");
        return;
    }
    var divs = Array.from(parentContainer.children);
    if (!divs.length) {
        console.log("No child divs found");
        return;
    }
    divs.sort(function(a, b) {
        var h2A = a.querySelector('h2');
        var h2B = b.querySelector('h2');
        var textA = h2A ? h2A.textContent.toUpperCase() : '';
        var textB = h2B ? h2B.textContent.toUpperCase() : '';
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



function sortProductsByPrice(containerClass) {
    console.log("Sorting products by price...");
    var parentContainer = document.querySelector('.' + containerClass);
    if (!parentContainer) {
        console.log("Parent container not found");
        return;
    }
    var productElements = Array.from(parentContainer.children);
    if (!productElements.length) {
        console.log("No child divs found");
        return;
    }
    productElements.sort(function(a, b) {
        var h3A = a.querySelector('h3');
        var h3B = b.querySelector('h3');
        var priceA = h3A ? parseFloat(h3A.textContent.replace('$', '')) : 0;
        var priceB = h3B ? parseFloat(h3B.textContent.replace('$', '')) : 0;
        return priceA - priceB;
    });
    productElements.forEach(function(product) {
        parentContainer.appendChild(product);
    });
}

function sortProductsByPrice(containerClass) {
    console.log("Sorting products by price...");
    var parentContainer = document.querySelector('.' + containerClass);
    if (!parentContainer) {
        console.log("Parent container not found");
        return;
    }
    var productElements = Array.from(parentContainer.children);
    if (!productElements.length) {
        console.log("No child divs found");
        return;
    }
    productElements.sort(function(a, b) {
        var h3A = a.querySelector('h3');
        var h3B = b.querySelector('h3');
        var priceA = h3A ? parseFloat(h3A.textContent.replace('$', '')) : 0;
        var priceB = h3B ? parseFloat(h3B.textContent.replace('$', '')) : 0;
        return priceA - priceB;
    });
    productElements.forEach(function(product) {
        parentContainer.appendChild(product);
    });
}

function sortProductsByPriceDescending(containerClass) {
    console.log("Sorting products by price (descending)...");
    var parentContainer = document.querySelector('.' + containerClass);
    if (!parentContainer) {
        console.log("Parent container not found");
        return;
    }
    var productElements = Array.from(parentContainer.children);
    if (!productElements.length) {
        console.log("No child divs found");
        return;
    }
    productElements.sort(function(a, b) {
        var h3A = a.querySelector('h3');
        var h3B = b.querySelector('h3');
        var priceA = h3A ? parseFloat(h3A.textContent.replace('$', '')) : 0;
        var priceB = h3B ? parseFloat(h3B.textContent.replace('$', '')) : 0;
        return priceB - priceA; 
    });
    productElements.forEach(function(product) {
        parentContainer.appendChild(product);
    });
}
