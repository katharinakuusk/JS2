window.onload = function () {
    var bPic = document.querySelector("#mainPic");
    var galBlock = document.querySelector("#smallPics");
    
    function addEventPic() {
        let smPics = document.querySelectorAll('.smallPics__sm-pic');
        smPics.forEach(function(item, i) {
            item.addEventListener("click", function(e) {
                let currentPic = event.currentTarget;
                checkPic(currentPic);
            });
        })
    }
    
    function checkPic(elem) {
        let id = elem.id;

        /*let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.myjson.com/bins/hsz48', true); //true - асинхронный запрос

        //Навешиваем функцию обработчик, которая будет отвечать за запрос
        //Функция вызовется несколько раз

        xhr.onreadystatechange = function () {
            
            if(xhr.readyState !== 4){ return;}

            if(xhr.status !== 200){
                console.log('Error', xhr.status, xhr.statusText);
            } else {
                console.log('ok', xhr.responseText);
                let data = JSON.parse(xhr.responseText);
                data.forEach(function(item) {
                        if (item.id == id) {
                            showPic(item);
                        }
                    });
            }
        };

        xhr.send(); //Отправка запроса      */
        
        
        fetch('galData.json', {
            method: 'GET',
        })
            .then(function(response){
                if (response.status != 200) {
                    console.log('Problem: ' + response.status);
                    return;
                }

                response.json().then(function(data) {
                    data.forEach(function(item) {
                        if (item.id == id) {
                            showPic(item);
                        }
                    })
                });
            })

            .catch(function(err) {
                console.log('Ошибка: ' + err);
            })
    };
    
    function showPic(obj) {
        bPic.innerHTML = "";
        let src = obj.max;
        let imageDomEl = document.createElement('img');
        imageDomEl.src = src;
        imageDomEl.id = obj.id;
        imageDomEl.alt = "bPic" + obj.id;
        bPic.appendChild(imageDomEl);
    }
    
    
    addEventPic();
}