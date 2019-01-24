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
                    let review = new Review(item.id_comment, item.text);
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
        $jQueryElement.empty();
        //console.log(this.list);
        let $container = $("<div />", {
            id: this.id
        });
        
        this.list.forEach(function(item) {
            item.render($container);
        });
        $container.appendTo($jQueryElement);
    }
    
    addReview(content) {
        let reviewsArrCurrentLengh = this.list.length;
        let newReview = new Review (++reviewsArrCurrentLengh, content);
        this.list.push(newReview);
        console.log(this.list);
        this.render($("#reviews-wrap"));
    }
    
    approveReview(id) {
        let currentReview = $("#" + id);
        currentReview.addClass("approved");
        let item = id; //через декримент получим ключ в массиве объектов
        this.list[--item].status = "approved";
    }
    
    deleteReview(id) {
        let item = id; //через декримент получим ключ в массиве объектов
        this.list.splice([--item], 1);
        this.render($("#reviews-wrap"));
    }
}