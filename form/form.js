const nameReg = /^[a-zа-я\-]+$/i;
const phoneReg = /^[0-9()\-+]+$/;
const emailReg = /@/;
var submit = document.getElementById("contacts");

submit.addEventListener('submit', function(e) {
    e.preventDefault()

    let form = document.forms.contacts;
    let elements = form.elements;
    let userName = elements.name.value;
    let userPhone = elements.phone.value;
    let userEmail = elements.mail.value;
    
    let nameValid = true, phoneValid = true, emailValid = true;
    
    if (!nameReg.test(userName)) {
        showError(elements.name, 'Имя должно содержать латинские и кириллические символы');
        nameValid = false;
    }
    
    if(!phoneReg.test(userPhone)) {
        showError(elements.phone, 'Номер телефона должен сожердать цифры, может вклчючать + и -');
        phoneValid = false;
    }
    
    if(!emailReg.test(userEmail)) {
        showError(elements.mail, 'E-mail должен содержать @');
         emailValid = false;
    }
    
    const formValid = nameValid && phoneValid && emailValid;
    if (formValid) {
        return formValid();
    }
});

function showError (container, errorMessage) {
    /*let formEr = document.getElementById("contacts");
    let errorDiv = document.createElement('div');
    errorDiv.setAttribute('class', 'error');
    errorDiv.innerHTML = errorMessage;
    formEr.insertBefore(errorDiv, container);
    container.setAttribute("class", "error-node");*/
    
    alert(errorMessage);
    
}

function formValid() {
    let messageDiv = document.querySelector('.valid-message');
    messageDiv.innerHTML = 'Валидация пройдена';
}

var a = "STIPENDIUM HUNGARICUM";
var b = a.toLowerCase();
console.log(b);


