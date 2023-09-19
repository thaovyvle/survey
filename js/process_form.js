document.addEventListener('DOMContentLoaded', function(event) {
    // First Name 
    var userFName = document.getElementById("firstName");
    userFName.addEventListener("focus", fnameHint);
    userFName.addEventListener("focusout", function() { validateData(this) }); 
 
    // Last Name
    var userLName = document.getElementById("lastName");
    userLName.addEventListener("focus", lnameHint);
    userLName.addEventListener("focusout", function() { validateData(this) }); 
  
    // Email
    var userEmail = document.getElementById("email");
    userEmail.addEventListener("focus", emailHint);
    userEmail.addEventListener("focusout", function() { validateData(this) });

    // Phone Number
    var userPhone = document.getElementById("phoneNum");
    userPhone.addEventListener("focus", phoneHint);
    userPhone.addEventListener("focusout", function() { validateData(this) });
 
    // Website URL
    var userWeb = document.getElementById("websiteURL");
    userWeb.addEventListener("focus", webHint);
    userWeb.addEventListener("focusout", function(){ validateData(this) });
})

// Function called to validate user input 
function validateData(field) {
    if (field.id == "firstName") {
        validateFName();
    }
    else if (field.id == "lastName") {
        validateLName();   
    }
    else if (field.id == "email") {
        validateEmail();   
    }
    else if (field.id == "phoneNum") {
       validatePhone();
    }
    else if (field.id == "websiteURL") {
       validateWeb();   
    }
}

// Function to validate the first name
function validateFName() {
    var fnameHint = document.getElementById("fnameHint");
    fnameHint.style.display = "none";
    var fnameInput = document.getElementById("firstName").value;
    // Set item in local storage to display 
    localStorage.setItem('fname', fnameInput);
    var patternCapital = /^[A-Z]/; // Pattern for first character beginning with capital letter
    var pattern = /^[A-Za-z]+$/;  // Pattern for input containing all letters

    // Validation Successful
    if (patternCapital.test(fnameInput) && pattern.test(fnameInput)) {
        var nameMsg = document.getElementById("nameMsg");
        nameMsg.classList.add("valid");
        nameMsg.classList.remove("error");

        // Let user know their input is valid
        nameMsg.firstElementChild.innerText = "\u2713";
        nameMsg.style.display = "block";
    }

     // Validation Fails
    else {
        // Let user know their input did not match pattern
        var nameMsg= document.getElementById("nameMsg");
        nameMsg.firstElementChild.innerText = "Please enter letters only";
        nameMsg.classList.add("error");
        nameMsg.classList.remove("valid");
        nameMsg.style.display = "block"; 
    }   
}

// Function to validate last name
function validateLName() {
    var lnameHint = document.getElementById("lnameHint");
    lnameHint.style.display = "none";
    var lnameInput = document.getElementById("lastName").value;
    // Set item in local storage to display 
    localStorage.setItem('lname', lnameInput);
    var patternCapital = /^[A-Z]/; // Pattern for first character beginning with capital letter
    var pattern = /^[A-Za-z '"]+$/; // Pattern for input containing all letters, apostrophe

    // Validation Successful
    if (patternCapital.test(lnameInput) && pattern.test(lnameInput)) {
        var lnameMsg = document.getElementById("lnameMsg");
        lnameMsg.classList.add("valid");
        lnameMsg.classList.remove("error");

        // Let user know their input is valid
        lnameMsg.firstElementChild.innerText = "\u2713";
        lnameMsg.style.display = "block";
    }
    // Validation Fails
    else {
        // Let user know their input did not match pattern
        var lnameMsg = document.getElementById("lnameMsg");
        lnameMsg.firstElementChild.innerText = "Please enter letters & (' \") only"; 
        lnameMsg.classList.add("error");
        lnameMsg.classList.remove("valid");
        lnameMsg.style.display = "block"; 
    }  
}

// Function to validate email
function validateEmail () {
    var emailHint = document.getElementById("emailHint");
    emailHint.style.display = "none";
    var emailInput = document.getElementById("email").value;
    // Set item in local storage to display 
    localStorage.setItem('email', emailInput);
    var pattern = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]/;
 
    // Validation Successful
    if (pattern.test(emailInput)) {
        var emailMsg = document.getElementById("emailMsg");
        emailMsg.classList.add("valid");
        emailMsg.classList.remove("error");
 
        // Let user know their input is valid
        emailMsg.firstElementChild.innerText = "\u2713";
        emailMsg.style.display = "block";    
    }
    // Validation Fails
    else {
        // Let user know their input did not match pattern
        var emailMsg = document.getElementById("emailMsg");
        emailMsg.firstElementChild.innerText = "Must be in blah@blah.com format";       
        emailMsg.classList.add("error");
        emailMsg.classList.remove("valid");
        emailMsg.style.display = "block";  
    }
}

// Function to validate phone number
function validatePhone() {
    var phoneHint = document.getElementById("phoneHint");
    phoneHint.style.display = "none";
    var phoneInput = document.getElementById("phoneNum").value;
    // Set item in local storage to display 
    localStorage.setItem('phone', phoneInput);
    var pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;
 
    // Validation Successful
    if (pattern.test(phoneInput)) {
        var phoneMsg = document.getElementById("phoneMsg");
        phoneMsg.classList.add("valid");
        phoneMsg.classList.remove("error");
 
        // Let user know their input is valid
        phoneMsg.firstElementChild.innerText = "\u2713";
        phoneMsg.style.display = "block";
    }
    // Validation Fails
    else {
        // Let user know their input did not match pattern
        var phoneMsg = document.getElementById("phoneMsg");
        phoneMsg.firstElementChild.innerText = "Enter xxx-xxx-xxxx format";       
        phoneMsg.classList.add("error");
        phoneMsg.classList.remove("valid");
        phoneMsg.style.display = "block";         
    }
}

// Function to validate email
function validateWeb() {
    var webHint = document.getElementById("webHint");
    webHint.style.display = "none";
    var webInput = document.getElementById("websiteURL").value;
    // Set item in local storage to display 
    localStorage.setItem('website', webInput);
    var pattern = /^https:\/\/.*~/;
  
    // Validation Successful
    if (pattern.test(webInput)) {
        var webMsg = document.getElementById("webMsg");
        webMsg.classList.add("valid");
        webMsg.classList.remove("error");
  
        // Let user know their input is valid 
        webMsg.firstElementChild.innerText = "\u2713";
        webMsg.style.display = "block";      
    }
    // Validation Fails
    else {
        // Let user know their input did not match pattern
        var webMsg = document.getElementById("webMsg");
        webMsg.firstElementChild.innerText = "Must contain https:// and ~";       
        webMsg.classList.add("error");
        webMsg.classList.remove("valid");
        webMsg.style.display = "block";   
    }
}

// Shows the First Name Hint
function fnameHint() {
    var fnameHint = document.getElementById("fnameHint");
    fnameHint.style.display = "block";
    var nameMsg = document.getElementById("nameMsg");
    nameMsg.style.display = "none";
}

// Shows the Last Name Hint
function lnameHint() {
    var lnameHint = document.getElementById("lnameHint");
    lnameHint.style.display = "block";
    var lnameMsg = document.getElementById("lnameMsg");
    lnameMsg.style.display = "none";
}

// Shows the Email Hint
function emailHint() {
    var emailHint = document.getElementById("emailHint");
    emailHint.style.display = "block";
    var emailMsg = document.getElementById("emailMsg");    
    emailMsg.style.display = "none";
}

// Shows the Phone Number Hint
function phoneHint() {
    var phoneHint = document.getElementById("phoneHint");
    phoneHint.style.display = "block";
    var phoneMsg = document.getElementById("phoneMsg");    
    phoneMsg.style.display = "none";
}

// Shows the Website URL Hint
function webHint() {
    var webHint = document.getElementById("webHint");
    webHint.style.display = "block";
    var webMsg = document.getElementById("webMsg");    
    webMsg.style.display = "none";
}

// Function to display results of survey
function displayResults() {
    var fname = localStorage.getItem('fname');
    var lname = localStorage.getItem('lname');
    var email = localStorage.getItem('email');
    var phone= localStorage.getItem('phone');
    var website = localStorage.getItem('website');

    document.getElementById("result1").innerText = "Name: " + fname + " " + lname;
    document.getElementById("result2").innerText = "Email: " + email;
    document.getElementById("result3").innerText = "Phone: " + phone;
    document.getElementById("result4").innerText = "Website URL: " + website;

    // Show specific badge based on user's answers to survey 
    const badge = document.createElement("img");
    const div = document.getElementById("badgeImg");
    if ((document.querySelector(".Q1No").checked) === true) {
        // If user picks 'no' for question 1, then they don't like animals 
        badge.src = "img/loner.png"
        div.appendChild(badge);
    } else if ((document.querySelector(".Q2No").checked) === true) {
        // If user picks 'no' for question 2, then they don't want a high maintenance pet
        badge.src = "img/catPerson.png";
        div.appendChild(badge);
    } else { 
        badge.src = "img/dogPerson.png";
        div.appendChild(badge);
    }
}

