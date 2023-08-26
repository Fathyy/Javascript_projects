 var nameError = document.getElementById("nameError");
 var emailError = document.getElementById("emailError");
 var phoneError = document.getElementById("phoneError");
 var messageError = document.getElementById("messageError");
 var submitError = document.getElementById("submitError");

//  function to be executed whenever you type something in the input 
 function validateName(){
     var contactName = document.getElementById("contactName").value;

    //  if name is empty, show required error
    if (contactName.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    // if name does'nt match the expression below, show error
    if (!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name";
        return false;
    }
    // if there is no error display sucess message
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

 }

 function validatePhone(){
    var contactPhone = document.getElementById("contactPhone").value;

    if (contactPhone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }

    if (contactPhone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }

    if (!contactPhone.match(/^[0-9]{10}$/)) {
        nameError.innerHTML = "Only digits are allowed";
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
 }

 function validateEmail(){
    var contactEmail = document.getElementById("contactEmail").value;

    if (contactEmail.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if (!contactEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

 }

 function validateMessage(){
    var contactMessage = document.getElementById("contactMessage").value;
    // required characters
    var required = 30;
    // characters left
    var left = required - contactMessage.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
        
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
 }

 function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function(){submitError.style.display = "none"}, 3000);
        return false;
    }

 }