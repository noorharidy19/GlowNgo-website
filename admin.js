// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const salesData = [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const salesData = [10, 20, 40, 25, 17, 20, 15, 11,14 , 16, 35, 45];
const orderData = [10, 25, 45, 25, 35, 29, 30, 28,35 , 45, 48, 50];

// Define Data
const data = [{
    x: months,
    y: salesData,
    mode:"lines",
    line: {             // Specify line properties
        color: 'rgb(208, 177, 177)',   // Change line color to green
        width: 2          // Optional: Change line width
      }

  }];
  const orderChartData = [{
    x: months,
    y: orderData,
    mode: "lines",
    line: {
        color: 'rgb(208, 177, 177)',
        width: 2
    },
    name: 'Number of Orders'
}];
  
  // Define Layout
  const layout = {
    xaxis: {range: ['Jan', 'Dec'], title: "Month"},
    yaxis: {range: [10, 50], title: "Number of Sales"},  
    title: "Product Sales per Month"
  };
  const orderChartLayout = {
    xaxis: {range: ['Jan', 'Dec'], title: "Month"},
    yaxis: {range: [10, 50], title: "Number of Orders"},  
    title: "Number of Orders per Month"
};
  
 
  Plotly.newPlot("myPlot", data, layout);
  Plotly.newPlot("myPlot1", orderChartData, orderChartLayout);
 
  function showModal(containerIds) {
    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "block";
        document.getElementById('overlay').style.display = 'block';
    });
}

function closeModal(containerIds) {
    containerIds.forEach(function(id) {
        document.getElementById(id).style.display = "none";
        document.getElementById('overlay').style.display = 'none';
    });

    containerIds.forEach(function(id) {
        var modal = document.getElementById(id);
        var errorElements = modal.getElementsByClassName("error");

        for (var i = 0; i < errorElements.length; i++) {
            errorElements[i].innerHTML = "";
        }
    });

}


const adminCheckbox = document.getElementById('admin1');
const userCheckbox = document.getElementById('user1');

adminCheckbox.addEventListener('change', function() {
if (this.checked) {
    userCheckbox.checked = false;
}
});

userCheckbox.addEventListener('change', function() {
if (this.checked) {
    adminCheckbox.checked = false;
}
});

function showImage(selectedOption){
    var imageDiv = document.getElementById('image');
    var textDiv = document.getElementById('imag');

    if (selectedOption === 'productImage') {
        imageDiv.style.display = 'block';
        textDiv.style.display = 'none';
    } else {
        imageDiv.style.display = 'none';
        textDiv.style.display = 'block';
    }
};

function validationForm() {
    var id = document.getElementById('productID').value;
    var name = document.getElementById('productName').value;
    var price = document.getElementById('productPrice').value;
    var category = document.getElementById('productCategory').value;
    var quantity = document.getElementById('productQuantity').value;
    var desc = document.getElementById('productDescription').value;
    var howtouse = document.getElementById('howToUse').value;
    var shade = document.getElementById('productShade').value;
    var image = document.getElementById('productImage').value;

    
    var Validation = true;

    //Id Validation
    if(id == "" || id < 0 || isNaN(id) || id.length > 4){
        document.getElementById('idError').innerHTML = "Please enter a valid product ID (max 4 digits)";
        Validation = false;
    } else {
        document.getElementById('idError').innerHTML = "";
    }

    //name Validation
    if(name == "" || !/^[a-zA-Z\s]+$/.test(name)){
        document.getElementById('nameError').innerHTML = "Please enter a valid product name";
        Validation= false;
    } else {
        document.getElementById('nameError').innerHTML = "";
    }

    //Price Validation
    if(price == "" || price < 0|| isNaN(price)){
        document.getElementById('priceError').innerHTML = "Please enter a valid product price";
        Validation = false;
    } else {
        document.getElementById('priceError').innerHTML = "";
    }

    //Category Validation
    if(category == ""){
        document.getElementById('categoryError').innerHTML = "Please choose product category";
        Validation = false;
    } else {
        document.getElementById('categoryError').innerHTML = "";
    }

    //Quantity Validation
    if(quantity == "" || quantity < 0|| isNaN(quantity)){
        document.getElementById('quantityError').innerHTML = "Please enter a valid product quantity";
        Validation = false;
    } else {
        document.getElementById('quantityError').innerHTML = "";
    }

    //Description Validation
    if(desc == ""){
        document.getElementById('descriptionError').innerHTML = "Please enter a valid product description";
        Validation = false;
    } else {
        document.getElementById('descriptionError').innerHTML = "";
    }

    //How to use Validation
    if(howtouse == ""){
        document.getElementById('howToUseError').innerHTML = "Please enter how to use product";
        Validation = false;
    } else {
        document.getElementById('howToUseError').innerHTML = "";
    }

    //Shade Validation
    if(shade == ""){
        document.getElementById('shadesError').innerHTML = "Please choose product shade";
        Validation = false;
    } else {
        document.getElementById('shadesError').innerHTML = "";
    }

    //Image Validation
    if(image == ""){
        document.getElementById('imageError').innerHTML = "Please upload product image";
        Validation = false;
    } else {
        document.getElementById('imageError').innerHTML = "";
    }

    return Validation;
}

function validationFormRemove() {
    var id = document.getElementById('productID1').value;
    var Validation = true;

    //Id Validation
    if(id == "" || id < 0 || isNaN(id)|| id.length > 4){
        document.getElementById('idError1').innerHTML = "Please enter a valid product ID";
        Validation = false;
    } else {
        document.getElementById('idError1').innerHTML = "";
    }

    return Validation;
}
function validationFormEdit() {
    var choice = document.getElementById('editField').value;
    var productField = document.getElementById('productChoice').value;
    var id = document.getElementById('idd').value;
    var img = document.getElementById('productImage1').value;
    var Validation = true;
    //Id Validation
    if(id == "" || id < 0 || isNaN(id) || id.length > 4){
        document.getElementById('idError2').innerHTML = "Please enter a valid product ID";
        Validation = false;
    } else {
        document.getElementById('idError2').innerHTML = "";
    }
    //Choice Validation
    if(choice == "select") {
        document.getElementById('choiceError').innerHTML = "Please choose a field to edit";
        Validation = false;
    } else {
        document.getElementById('choiceError').innerHTML = "";
        //Field Validation
        if(choice == "productName") {
            if(productField == "" || !/^[a-zA-Z\s]+$/.test(productField)) {
                document.getElementById('valueError').innerHTML = "Please enter a valid product name";
                Validation = false;
            } else {
                document.getElementById('valueError').innerHTML = "";
            }
        } else if(choice == "productPrice") {
            if(productField == "" || productField < 0 || isNaN(productField)) {
                document.getElementById('valueError').innerHTML = "Please enter a valid product price";
                Validation = false;
            } else {
                document.getElementById('valueError').innerHTML = "";
            }
        } else if(choice == "productQuantity") {
            if(productField == "" || productField < 0 || isNaN(productField)) {
                document.getElementById('valueError').innerHTML = "Please enter a valid product quantity";
                Validation = false;
            } else {
                document.getElementById('valueError').innerHTML = "";
            }
        } else if(choice == "productDescription") {
            if(productField == "") {
                document.getElementById('valueError').innerHTML = "Please enter a valid product description";
                Validation = false;
            } else {
                document.getElementById('valueError').innerHTML = "";
            }
        } else if(choice == "howToUse") {
            if(productField == "") {
                document.getElementById('valueError').innerHTML = "Please enter how to use product";
                Validation = false;
            } else {
                document.getElementById('valueError').innerHTML = "";
            }
        } else if(choice == "productShades") {
            if(productField == "") {
                document.getElementById('valueError').innerHTML = "Please choose product shade";
                Validation = false;
            } else {
                document.getElementById('valueError').innerHTML = "";
            }
        } else if(choice == "productImage") {
            if(img == "") {
                document.getElementById('imageError1').innerHTML = "Please upload product image";
                Validation = false;
            } else {
                document.getElementById('imageError1').innerHTML = "";
            }
        }
    }

    return Validation;
}

function UserValidation(){
    var fname = document.getElementById('Fname').value;
    var lname = document.getElementById('Lname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var user= document.getElementById('username').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var admin = document.getElementById('admin1');
    var user = document.getElementById('user1');

    var Validation = true;

    //First Name Validation
    if(fname == "" || !/^[a-zA-Z\s]+$/.test(fname)){
        document.getElementById('fnameError').innerHTML = "Please enter a valid first name";
        Validation = false;
    } else {
        document.getElementById('fnameError').innerHTML = "";
    }

    //Last Name Validation
    if(lname == "" || !/^[a-zA-Z\s]+$/.test(lname)){
        document.getElementById('lnameError').innerHTML = "Please enter a valid last name";
        Validation = false;
    } else {
        document.getElementById('lnameError').innerHTML = "";
    }

    //Email Validation
    if(email == "" || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)){
        document.getElementById('emailError').innerHTML = "Please enter a valid email";
        Validation = false;
    } else {
        document.getElementById('emailError').innerHTML = "";
    }

    //Password Validation
    if(pass == "" || pass.length < 8 ||isNaN(pass)){
        document.getElementById('passwordError').innerHTML = "Please enter a valid password (min 8 characters)";
        Validation = false;
    } else {
        document.getElementById('passwordError').innerHTML = "";
    }

    //Username Validation
    if(user == "" || !/^[a-zA-Z0-9]+$/.test(user)){
        document.getElementById('usernameError').innerHTML = "Please enter a valid username";
        Validation = false;
    } else {
        document.getElementById('usernameError').innerHTML = "";
    }

    //Phone Validation
    if(phone == "" || phone.length < 11 ||phone.length > 11 || isNaN(phone)){
        document.getElementById('phoneError').innerHTML = "Please enter a valid phone number";
        Validation = false;
    } else {
        document.getElementById('phoneError').innerHTML = "";
    }

    //Address Validation
    if(address == ""){
        document.getElementById('addressError').innerHTML = "Please enter a valid address";
        Validation = false;
    } else {
        document.getElementById('addressError').innerHTML = "";
    }
    if(!admin.checked && !user.checked) {
        document.getElementById('UserAdminError').innerHTML = "Please select a role (Admin or User)";
        Validation = false;
    } else {
        document.getElementById('UserAdminError').innerHTML = "";
    }
    

    return Validation;
}
function UserValidationEdit(){
    var choicee = document.getElementById('editFieldd').value;
    var userField = document.getElementById('val').value;
    var id = document.getElementById('userid').value;
    var Validation = true;
    //Id Validation
    if(id == "" || id < 0 || isNaN(id) || id.length > 4){
        document.getElementById('useridError').innerHTML = "Please enter a valid user ID";
        Validation = false;
    } else {
        document.getElementById('useridError').innerHTML = "";
    }
    //Choice Validation

    if(choicee == "select") {
        document.getElementById('optionError').innerHTML = "Please choose a field to edit";
        Validation = false;
    } else {
        document.getElementById('optionError').innerHTML = "";
        //Field Validation
        if(choicee == "email") {
            if(userField == "" || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(userField)) {
                document.getElementById('valError').innerHTML = "Please enter a valid email";
                Validation = false;
            } else {
                document.getElementById('valError').innerHTML = "";
            }
        } else if(choicee == "password") {
            if(userField == "" || userField.length < 8 ||isNaN(userField)) {
                document.getElementById('valError').innerHTML = "Please enter a valid password (min 8 characters)";
                Validation = false;
            } else {
                document.getElementById('valError').innerHTML = "";
            }
        } else if(choicee == "username") {
            if(userField == "" || !/^[a-zA-Z0-9]+$/.test(userField)) {
                document.getElementById('valError').innerHTML = "Please enter a valid username";
                Validation = false;
            } else {
                document.getElementById('valError').innerHTML = "";
            }
        } else if(choicee == "phone") {
            if(userField == "" || userField.length < 11 ||userField.length > 11 || isNaN(userField)) {
                document.getElementById('valError').innerHTML = "Please enter a valid phone number";
                Validation = false;
            } else {
                document.getElementById('valError').innerHTML = "";
            }
        } else if(choicee == "address") {
            if(userField == "") {
                document.getElementById('valError').innerHTML = "Please enter a valid address";
                Validation = false;
            } else {
                document.getElementById('valError').innerHTML = "";
            }
        }

 
}
 return Validation;
}
function UservalidationRemove() {
    var id = document.getElementById('useridd').value;
    var email = document.getElementById('emaill').value;
    var Validation = true;

    //Id Validation
    if(id == "" || id < 0 || isNaN(id) || id.length > 4){
        document.getElementById('useriddError').innerHTML = "Please enter a valid user ID";
        Validation = false;
    } else {
        document.getElementById('useriddError').innerHTML = "";
    }
    //Email Validation
    if(email == "" || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)){
        document.getElementById('emaillError').innerHTML = "Please enter a valid email";
        Validation = false;
    } else {
        document.getElementById('emaillError').innerHTML = "";
    }
    return Validation;
}