function showPopup(containerIds) {
    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "block";
        document.getElementById('overlay').style.display = 'block';
    });
}

function hidePopup(containerIds) {
    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "none";
        document.getElementById('overlay').style.display = 'none';
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
function showShade(containerIds, containerClass) {
    var hideElements = document.getElementsByClassName(containerClass);
    for (var i = 0; i < hideElements.length; i++) {
        hideElements[i].style.display = "none";
    }

    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "block";
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

function x(selectedOption, brandDropdownId, container) {
    var brandDropdown = document.getElementById(brandDropdownId);
    var containerElement = document.getElementById(container);
    if (selectedOption) {
        switch (selectedOption) {
            case "A-Z":
                sortDivsAlphabetically(container);
                console.log("Sorting A-Z");
                break;
            case "Z-A":
                sortDivsAlphabeticallyZA(container);
                console.log("Sorting Z-A");
                break;
            case "By price(LOWER->HIGHER)":
                sortProductsByPrice(container);
                console.log("Sorting by price (lower to higher)");
                break;
            case "BY BRAND":
                if (brandDropdown) {
                    brandDropdown.style.display = "inline-block";
                }
                if (containerElement) {
                    containerElement.style.display = "none";
                }
                console.log("Showing brand dropdown");
                break;
            case "By price(HIGHER->LOWER)":
                sortProductsByPriceDescending(container);
                console.log("Sorting by price (higher to lower)");
                break;
            default:
                if (brandDropdown) {
                    brandDropdown.style.display = "none";
                }
                if (containerElement) {
                    containerElement.style.display = "flex";
                }
                console.log("Hiding brand dropdown");
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
    var originalOrder = Array.from(parentContainer.children); 
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
    function resetToOriginalOrder() {
        while (parentContainer.firstChild) {
            parentContainer.removeChild(parentContainer.firstChild);
        }
        originalOrder.forEach(function(div) {
            parentContainer.appendChild(div);
        });
    }
    document.getElementById('sortSelect').addEventListener('change', function() {
        var selectedOption = this.value;
        if (selectedOption === 'Select') {
            resetToOriginalOrder();
        }
    });
    while (parentContainer.firstChild) {
        parentContainer.removeChild(parentContainer.firstChild);
    }
    divs.forEach(function(div) {
        parentContainer.appendChild(div);
    });
}
function sortDivsAlphabeticallyZA(containerClass) {
    console.log("Sorting divs alphabetically Z to A...");
    var parentContainer = document.querySelector('.' + containerClass);
    if (!parentContainer) {
        console.log("Parent container not found");
        return;
    }
    var originalOrder = Array.from(parentContainer.children); 
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
            return 1; 
        }
        if (textA > textB) {
            return -1; 
        }
        return 0;
    });

    function resetToOriginalOrder() {
        while (parentContainer.firstChild) {
            parentContainer.removeChild(parentContainer.firstChild);
        }
        originalOrder.forEach(function(div) {
            parentContainer.appendChild(div);
        });
    }

    document.getElementById('sortSelect').addEventListener('change', function() {
        var selectedOption = this.value;
        if (selectedOption === 'Select') {
            resetToOriginalOrder();
        }
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
    var originalOrder = Array.from(parentContainer.children); 
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

    function resetToOriginalOrder() {
        while (parentContainer.firstChild) {
            parentContainer.removeChild(parentContainer.firstChild);
        }
        originalOrder.forEach(function(product) {
            parentContainer.appendChild(product);
        });
    }

    document.getElementById('sortSelect').addEventListener('change', function() {
        var selectedOption = this.value;
        if (selectedOption === 'Select') {
            resetToOriginalOrder();
        }
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
    var originalOrder = Array.from(parentContainer.children);
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

    function resetToOriginalOrder() {
        while (parentContainer.firstChild) {
            parentContainer.removeChild(parentContainer.firstChild);
        }
        originalOrder.forEach(function(product) {
            parentContainer.appendChild(product);
        });
    }

    document.getElementById('sortSelect').addEventListener('change', function() {
        var selectedOption = this.value;
        if (selectedOption === 'Select') {
            resetToOriginalOrder();
        }
    });

    productElements.forEach(function(product) {
        parentContainer.appendChild(product);
    });
}

// ---------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sortSelect').addEventListener('change', function() {
        var selectedOption = this.value;
        if (selectedOption === 'BY BRAND') {
            document.getElementById('brandOptions').style.display = 'inline-block';
        } else {
            document.getElementById('brandOptions').style.display = 'none';
            if(selectedOption === 'Select') {
                showAllProducts();
            } else {
                filterProducts(selectedOption);
            }
        }
    });

    document.getElementById('brandOptions').addEventListener('change', function() {
        var selectedBrand = this.value;
        filterProductsByBrand(selectedBrand);
    });

    function filterProducts(option) {
        var products = document.querySelectorAll('.AllProducts');
        products.forEach(function(product) {
            product.style.display = 'block';
        });
    }

    function filterProductsByBrand(brand) {
        var products = document.querySelectorAll('.AllProducts');
        products.forEach(function(product) {
            if (!product.classList.contains(brand)) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    }

    function showAllProducts() {
        var products = document.querySelectorAll('.AllProducts');
        products.forEach(function(product) {
            product.style.display = 'block';
        });
    }
});

let initialPrices = {};

function changeQuantity(change, quantityId, priceId) {
    let quantityElement = document.getElementById(quantityId);
    let quantity = parseInt(quantityElement.textContent);
    
    quantity += change;
    if (quantity < 1) {
      quantity = 1;
    } else if (quantity > 5) {
      quantity = 5;
    }
    
    let priceElement = document.getElementById(priceId);
    if (!initialPrices[priceId]) {
      initialPrices[priceId] = parseFloat(priceElement.textContent);
    }
    
    let pricePerItem = initialPrices[priceId];
    
    quantityElement.textContent = quantity;
    priceElement.textContent = (pricePerItem * quantity).toFixed(2);
    getTotalPrice();
  }
function getTotalPrice() {
    let priceIds = ['price1', 'price2', 'price3']; 
    let totalPrice = 0;
    priceIds.forEach(function(priceId) {
      let priceElement = document.getElementById(priceId);
      totalPrice += parseFloat(priceElement.textContent);
    });
    document.getElementById('total').textContent = totalPrice.toFixed(2);
  }
  window.onload = function() {
    getTotalPrice();
  };