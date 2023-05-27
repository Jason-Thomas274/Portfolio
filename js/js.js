function contactButton() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var emailadd = document.getElementById('emailadd').value;
    var fnameError = document.getElementById('fnameError');
    var lnameError = document.getElementById('lnameError');
    var emailaddError = document.getElementById('emailaddError');
    var validChar = /^[A-Za-z]+$/;
    var errorCountF = 0;
    var errorCountL = 0;
    var errorCountE = 0;

    if (fname == "" || !validChar.test(fname)) {
        fnameError.style.display = "block";
        alert("Please enter your first name with no numbers or special characters");
        errorCountF = 1;
    } else {
        fnameError.style.display = "none";
    }
    if (lname == "") {
        lnameError.style.display = "block";
        errorCountL = 1;
        alert("Please enter your last name with no numbers or special characters");
    } else {
        lnameError.style.display = "none";
    }
    if (emailadd == "" || !validateEmail(emailadd)) {
        emailaddError.style.display = "block";
        alert("Please enter a valid email address");
        errorCountE = 1;
    } else {
        emailaddError.style.display = "none";
    }

    if (errorCountF == 1 || errorCountL == 1 || errorCountE == 1) {
        return false;
    } else {
        alert("Thank you!");
        return true;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

var basicForm = document.querySelector('.basic_form');
basicForm.addEventListener('submit', function(e) {
    e.preventDefault();
});
