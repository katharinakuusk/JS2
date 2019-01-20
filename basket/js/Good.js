class Good {
    constructor(id, name, price)
    {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    render($jQueryElement)
    {
        let $goodContainer = $('<div />', {
            class: 'good'
        });
        let $goodTitle = $('<p />', {
            text: this.name
        });
        let $goodPrice = $(`<p>Стоимость: <span class="product-price">${this.price}</span> руб.</p>`);
        let $goodBtnAdd = $('<button />', {
            class: 'buygood',
            text: 'Добавить в корзину',
            'data-id': this.id
        });

        //TODO: Кнопка удаления товара

        let $goodBtnDel = $('<button />', {
            class: 'delgood',
            text: 'Удалить из корзины',
            'data-id': this.id
        });
        
        //Создаем структуру товара
        $goodTitle.appendTo($goodContainer);
        $goodPrice.appendTo($goodContainer);
        $goodBtnAdd.appendTo($goodContainer);
        $goodBtnDel.appendTo($goodContainer);
        $goodContainer.appendTo($jQueryElement);
    }
}