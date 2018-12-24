const nameReg = /[A-Za-zА-Яа-я]+/u;
const phoneReg = /^[0-9()\-+]+$/;
const emailReg = /@/;
//function onsubmit(e) {e.preventDefault();}

//class CustomValidation {
//    constructor() {
//        this.invalidites = [];
//    }   
//    
//    checkValidity (input) {
//        let validity = input.validity;
//    }
//    
//}

var submit = document.getElementById("contacts");

submit.addEventListener('submit', function(e) {e.preventDefault()});

//submit.addEventListener('click', function(e) {
//    let elements = submit.elements;
//    for (let i = 0; i < elements.length; i++) {
//        let input = elements[i];
//        console.log[input];
//
//// Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
////        if (input.checkValidity() == false) {
////
//////let inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
//////inputCustomValidation.checkValidity(input); // Выявим ошибки
//////var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
//////input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
////
////} 
//} 
//});
function showError (container, errorMessage) {
//    var errorDiv = document.createElement('div');
//    errorDiv.setAttribute('class', 'error');
//    errorDiv.innerHTML = errorMessage;
//    container.appendChild(errorDiv);
    container.setAttribute("class", "error-node");
}

function formValid() {
    let messageDiv = document.querySelector('.valid-message');
    messageDiv.innerHTML = 'Валидация пройдена';
}

submit.addEventListener('click', function(e) {
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
})

