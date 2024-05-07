function toggleItemList() {
    var itemList = document.querySelector('.item-list');
    if (itemList.style.display === "none") {
        itemList.style.display = "block";
    } else {
        itemList.style.display = "none";
    }
}

function confirmCashPayment() {
    document.getElementById("cashDetails").style.display = "none";
    document.getElementById("confirmButton").style.display = "none";
    document.getElementById("successMessages").style.display = "block";
    document.getElementById("successMessages").style.top = "50%";
    document.getElementById("successMessages").style.left = "50%";
    document.getElementById("successMessages").style.transform = "translate(-50%, -50%)";
    document.getElementById("successMessages").style.backgroundColor = "#4CAF50";
    document.getElementById("successHeader").innerText = "Order Successful";
    document.getElementById("successText").innerText = "Thank you for your order!";
}

function confirmVisaPayment() {
    
    document.getElementById("cardDetails").style.display = "none";
    document.getElementById("confirmVisaButton").style.display = "none";
    document.getElementById("successMessages").style.display = "block";
    document.getElementById("successMessages").style.top = "50%";
    document.getElementById("successMessages").style.left = "50%";
    document.getElementById("successMessages").style.transform = "translate(-50%, -50%)";
    document.getElementById("successMessages").style.backgroundColor = "#4CAF50";
    document.getElementById("successHeader").innerText = "Order and Payment Successful";
    document.getElementById("successText").innerText = "Thank you for your order and payment!";
}

function showCashDetails() {
    var cashDetails = document.getElementById("cashDetails");
    var visaDetails = document.getElementById("visaDetails");
    cashDetails.style.display = "block";
    visaDetails.style.display = "none";
    document.getElementById("confirmButton").style.display = "block"; 
    document.getElementById("confirmVisaButton").style.display = "none"; 
    document.getElementById("successMessages").style.display = "none"; 
}

function showVisaDetails() {
    var cashDetails = document.getElementById("cashDetails");
    var visaDetails = document.getElementById("visaDetails");
    cashDetails.style.display = "none";
    visaDetails.style.display = "block";
    document.getElementById("confirmButton").style.display = "none"; 
    document.getElementById("confirmVisaButton").style.display = "block"; 
    document.getElementById("successMessages").style.display = "none"; 
}

function confirmPayment() {
    document.getElementById("successMessages").style.display = "block";
    document.getElementById("successHeader").innerText = "Order Successful";
    document.getElementById("successText").innerText = "Thank you for your order!";
    setTimeout(function() {
        document.getElementById("successMessages").style.display = "none";
    }, 3000); 
}

function confirmVisaPayment() {
    
    document.getElementById("successMessages").style.display = "block";
    document.getElementById("successHeader").innerText = "Order and Payment Successful";
    document.getElementById("successText").innerText = "Thank you for your order and payment!";
    setTimeout(function() {
        document.getElementById("successMessages").style.display = "none";
    }, 3000); 
}
