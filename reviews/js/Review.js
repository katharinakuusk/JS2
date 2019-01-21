class Review {
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }
    
    render($jQueryElement) {
        let $reviewContainer = $('<div />', {
            class: 'review'
        });
        let $reviewTitle = $('<p />', {
            class: 'review__title',
            text: "Review #" + this.id
        });
        let $reviewContent = $('<p />', {
            text: this.content,
            class: 'review__content'
        });
        let $approveBtn = $('<button />', {
            class: 'review__approve button',
            text: 'Approve',
            'data-id': this.id
        });

        let $deleteBtn = $('<button />', {
            class: 'review__delete button',
            text: 'Delete',
            'data-id': this.id
        });
        
        //Создаем структуру отзыва
        $reviewTitle.appendTo($reviewContainer);
        $reviewContent.appendTo($reviewContainer);
        $approveBtn.appendTo($reviewContainer);
        $deleteBtn.appendTo($reviewContainer);
        $reviewContainer.appendTo($jQueryElement);
    }
}