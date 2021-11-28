const contactForm = document.querySelector('#contactForm');
let fullName = document.getElementById('fullName');
let email = document.getElementById('emailAddress');
let phone = document.getElementById('phoneNumber');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        name: fullName.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }
    
    let xhttp = new XMLHttpRequest();

    xhttp.open('POST', '/');
    xhttp.setRequestHeader('content-type', 'application/json');
    xhttp.onload = function() {
        console.log(xhttp.responseText);
        if(xhttp.responseText == 'success') {
            console.log('Email sent successfully');
            fullName.value = '';
            emai.value = '';
            phone.value = '';
            message.value = '';
        }else {
            console.log('Something went wrong');
        }
    }

    xhttp.send(JSON.stringify(formData));

})