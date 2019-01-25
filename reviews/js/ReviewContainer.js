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
                
                this.count = this.list.length;
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
        let newRevID = ++this.count;
        let newReview = new Review (newRevID, content);
        this.list.push(newReview);
        this.render($("#reviews-wrap"));
    }
    
    approveReview(id) {
        let currentReview = $("#" + id);
        currentReview.addClass("approved");
        let indexInArr = this.list.findIndex(item => item.id == id); 
        this.list[indexInArr].status = "approved";
    }
    
    deleteReview(id) {
        let indexInArr = this.list.findIndex(item => item.id == id); 
        console.log(id);
        console.log(indexInArr);
        this.list.splice(indexInArr, 1);
        this.render($("#reviews-wrap"));
        console.log(this.list);
    }
}