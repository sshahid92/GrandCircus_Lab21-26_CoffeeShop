function validateEmail(email) {
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());    
}

function validatePhone(phoneNumber) {
    var pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return pattern.test(String(phoneNumber));
}

function validate() {
    var emailMessage = $("#emailMessage");
    var email = $("#email").val();
    emailMessage.text("");

    if (validateEmail(email)) {
        return true
    } else {
        emailMessage.text(email + " is not a valid email");
        emailMessage.css("color", "red");
        return false;
    }    
}

function validatePN() {
    var phoneMessage = $("#phoneMessage");
    var phone = $("#phone").val();
    phoneMessage.text("");

    if (validatePhone(phone)) {
        return true
    } else {
        phoneMessage.text(phone + " is not a valid phone number");
        phoneMessage.css("color", "red");
        return false;
    }
}
$("#register").bind("click", validate);
$("#register").bind("click", validatePN);

