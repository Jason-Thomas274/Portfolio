//this function will validate the contact form, ensuring all required fields (fname, lname, email) have user input 
function contactButton() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var emailadd = document.getElementById('emailadd').value;
    var fnameError = document.getElementById('fnameError');
    var lnameError = document.getElementById('lnameError');
    var emailaddError = document.getElementById('emailaddError');
    var validChar = /^[A-Za-z]+$/;
    errorCountF = 0
    errorCountL = 0
    errorCountE = 0
    //this if loop will cycle through checking to make sure the user enters values into the form
    if (fname == "" || !validChar.test(fname)) { //checks for a first name input by the end user 
        fnameError.style.display = "block";
        alert("Please enter your first name with no numbers or special characters");
        errorCountF = 1
    } else {
        fnameError.style.display = "none";
    }
    if (lname == "") { //checks for a last name input by the end user
        lnameError.style.display = "block";
        errorCountL = 1
        alert("Please enter your last name with no numbers or special characters");
    } else {
        lnameError.style.display = "none";
    }
    if (emailadd == "") { //checks for valid email address input by end user
        emailaddError.style.display = "block";
        alert("Please enter valid email");
        errorCountE = 1
    } else {
        emailaddError.style.display = "none";
    }
    //Loop to check for any changes from validation, if 1 is discovered, loop will return False
    if (errorCountF == 1 || errorCountL == 1 || errorCountE == 1) {
        return false;
    } else {
        alert("Thank you!");
        return true;
    }
}
//event listener to check the form to verify the fields pass the validation checks before continuing
var basicForm = document.querySelector('#basic_form');
//event verifies that the form passes validation before moving forward
basicForm.addEventListener('submit', function(e) {
    e.preventDefault();
});

//DOM Changes using .classlist.add to then add the page_titles CSS to the webTitle for each page
var divwebTitle = document.querySelector('.webTitle');
divwebTitle.classList.add('page_titles');