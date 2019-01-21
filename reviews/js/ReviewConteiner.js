class Container {
    constructor(id) {
        this.list = [];
        this.id = id;
        this.getList();
    }
    
    getList() {
        let reviewsWrap = $("#reviews-wrap");

        $.ajax({
            type: 'GET',
            url: './json/reviews.json',
            context: this, 
            dataType: 'json',
            success: function (data) {
                let comments = data.comments;
                let self = this;
                let $reviewContainer = $('<div />', {
                    class: 'reviews'
                });
                
                comments.forEach(function (item) {
                    let review = new Review(item.id_user, item.text);
                    self.list.push(review);
                    review.render($reviewContainer)
                });
                
                $reviewContainer.appendTo(reviewsWrap);
                
                this.count = this.list.lenth;
            },
            error: function (err) {
                console.log('Ошибка', err);
            }
        });
    }
    
    render($jQueryElement) {
        
        //console.log(this.list);
        let $container = $("<div />", {
            id: this.id
        });
        
        //item.render($container)
        
        this.list.forEach(function(item) {
            item.render($container);
        });
        $container.appendTo($jQueryElement);
    }
    
    add(id, content) {
        
    }
}