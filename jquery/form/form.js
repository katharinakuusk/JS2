const nameReg = /^[a-zа-я\-]+$/i;
const phoneReg = /^[0-9()\-+]+$/;
const emailReg = /^[\w\-_.]+@[\w\-_.]{2,}\.[a-z]{2,}$/i;
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
        alert("Валидация пройдена!");
    }
});

function showError (container, errorMessage) {
    /*let formEr = document.getElementById("contacts");
    let errorDiv = document.createElement('div');
    errorDiv.setAttribute('class', 'error');
    errorDiv.innerHTML = errorMessage;
    formEr.insertBefore(errorDiv, container);
    container.setAttribute("class", "error-node");*/
    console.log(errorMessage);
}

//
//function formValid() {
////    let messageDiv = document.querySelector('.valid-message');
////    messageDiv.innerHTML = 'Валидация пройдена';
//    alert("Валидация пройдена!");
//}
//

$(document).ready(function(){
    $("#cities__options").hide();
    var $autoCities = [];
    
    $.ajax({
        type: 'GET',
        url: 'cities.json',
        dataType: 'json',
        success: function (data) {
            $citiesJSON = data.cities;
            jQuery.each($citiesJSON, function (i, val) {
                $autoCities.push(val);
            })

        },
        error: function (error) {
            console.log(error);
        }
    });
    
    let $cityInput = $("[name='city']").on("input", function () {
        
        $("#cities__options").empty();
        let $userCity = $cityInput.val();
        
        if ($userCity.length > 2) {
            
            $("#cities__options").show();
            $citiesJSON.filter(function (val) {
                
                let guess = val.toUpperCase();
                return ~guess.indexOf($userCity.toUpperCase());
            }).forEach(function (val, i, $userCity) {
                let elem = new Element("li", val, ".cities__options_option", "#cities__options");
                elem.render();
            });
            
        }
    });
    
    $("#cities__options").on("click", function (event) {
        let target = $(event.target);
        let content = target.text();
        $("[name='city']").val(content);
    });
    
    $cityInput.on("blur", function () {
        setTimeout(function() {
            $("#cities__options").hide()
        }, 2000)
    });
    
});


