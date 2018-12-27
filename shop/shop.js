// Создаем суперкласс, конструктор Container
	function Container()
	{
	  this.id = "";
	  this.className= "";
	  this.htmlCode = "";
	}

	// Добавляем метод render
	Container.prototype.render = function()
	{
	   return this.htmlCode;
	}
    
    Container.prototype.remove = function () {
        var nodeId = this.id;
        var node = document.getElementById(nodeId);
        return node.remove();
    }
	
// Создаем класс, конструктор Menu
	function Menu(my_id, my_class, my_items){
	   Container.call(this); //наследуем свойства Container
	   this.id = my_id;
	   this.className = my_class;
	   this.items = my_items;
	}

	//Создаем цепочку наследования Menu от Container	
	Menu.prototype = Object.create(Container.prototype);
	Menu.prototype.constructor = Menu;
	
	//Переопределяем метод render для класса Menu
	Menu.prototype.render = function(){	
		let result = "<ul class='"+this.className+"' id='"+this.id+"'>";

		//В цикле проходимся по пунктам меню (this.items), внутри выполняем проверку на принадлежность к классу MenuItem
		for(var item in this.items){			
			if(this.items[item] instanceof MenuItem){
				result += this.items[item].render();
//                if (this.items[item].items) {
//                    result += this.items[item].items.render();
//                }
			}
		}
		result += "</ul>";
		return result;
	}
    
	//Создаем класс, конструктор для пункта меню
	function MenuItem(my_href, my_name, my_id, my_items){
	   Container.call(this); //наследуем свойства Container
	   this.className = "menu-item";
       this.id = my_id;
	   this.href = my_href;
	   this.name = my_name;
       this.items = my_items;
	}

	//Создаем цепочку наследования MenuItem от Container	
	MenuItem.prototype = Object.create(Container.prototype);
	MenuItem.prototype.constructor = MenuItem;

	//Переопределяем метод render для класса MenuItem
	MenuItem.prototype.render = function(){
        let result = "<li class='"+this.className+ "' id = '" + this.id +  "' href='"+ this.href +"'>" + this.name + "</li>";
        if (this.hasOwnProperty("items") && Array.isArray(this.items)) {
            var subItems = [];
            for (let item in this.items) {
                let id = "m_item" + item;
                subItems[item] = new MenuItem(this.items[item].href, this.items[item].title, id, this.items[item].items);
            }
            var subMenu = new Menu(this.name, 'subMenu', subItems);
            result += subMenu.render();
        }
        return result;
	}

    //Выводим меню и пункты меню на экран
	function fillMenuItems(xhr) {
	var m_items = {};
	
	if(xhr.readyState==4) {
		if(xhr.status==200) {			
			var items = JSON.parse(xhr.responseText);
			console.log(items);
            
			items.menu_items.map((item, index) => {
                let subItems = "";
                if (item.hasOwnProperty("items")) {
                    subItems = item.items;
                    console.log(subItems);
                }
                let id = "m_item" + index;
				m_items[index] = new MenuItem(item.href, item.title, id, subItems);
			})
		} else {
			alert ('Произошла ошибка: ' + xhr.status);
		}
	}
        var menu = new Menu('my_menu', 'my_class', m_items);
        document.write(menu.render());
    }
        
        //XMLHttpRequest        
     
    var xhr = false;
    if (window.XMLHttpRequest) { // если используется Gecko (Chrome, Mozilla, Opera, Safari)
        xhr = new XMLHttpRequest();
        if (xhr.overrideMimeType) {xhr.overrideMimeType('text/xml');}// для Mozilla Firefox, которые умеют обрабатывать ответ от сервера в случае, если тот не содержит заголовка XML mime-type  
    } else if (window.ActiveXObject) { // Internet Explorer
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } 
        catch (e) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } 
            catch (e) {
            	console.log(e);
            }
        }
    }    
        
    if(!xhr) {
        alert('Невозможно открыть соединение');
    }

    var m_items;
    xhr.onreadystatechange = function(){
        fillMenuItems(xhr);
    }

    xhr.timeout = 15000;
    xhr.ontimeout = function(){
        alert('Превышено время ожидания запроса')
    }

    xhr.open('GET', 'https://api.myjson.com/bins/ffnqi', true);
    xhr.send(null);