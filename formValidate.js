
function validateFirstName() {
    const nameInput = document.getElementById('firstname');
    const nameError = document.getElementById('firstNameError');
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Please enter a valid name';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}
function validateLastName() {
    const nameInput = document.getElementById('lastname');
    const nameError = document.getElementById('lastNameError');
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Please enter a valid name';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const isFNameValid = validateFirstName();
    const isLNameValid = validateLastName();
    const isEmailValid = validateEmail();

    if (isFNameValid && isLNameValid && isEmailValid) {
        // Perform your submission logic here
        var userName = document.getElementById('firstname').value + " " + document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phoneNo').value;
        var msg = document.getElementById('textarea').value;

        var messageBody = "Name :" + userName +
            "<br> Email :" + email +
            "<br> Mobile :" + phone +
            "<br> Message :" + msg;
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "sandeepjerubandi143@gmail.com",
            Password: "7C68A9455F8405FEC2281AC44F352A7FF296",
            To: 'sandeepjerubandi143@gmail.com',
            From: 'sandeepjerubandi143@gmail.com',
            Subject: "New Contact From Portfolio",
            Body: messageBody
        }).then(
            message => alert("Message sent Successfully"),
            document.getElementById('contactform').reset()
            
        );

    }
}
    // Add event listeners to input fields
document.getElementById('firstname').addEventListener('input', validateFirstName);
document.getElementById('lastname').addEventListener('input', validateLastName);
document.getElementById('email').addEventListener('input', validateEmail);

    // Add event listener to the form
document.getElementById('contactform').addEventListener('submit', handleSubmit);