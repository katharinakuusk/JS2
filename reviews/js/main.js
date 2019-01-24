$(document).ready(function() {
    
    //let $reviewsContainer = $("#reviews");
    
    //let review1 = new Review (1, "blablabla");
    //review1.render($reviewsContainer);
    
    let cont = new Container("reviews");
    cont.render($("#reviews-wrap"));
    
    $("#review").on("submit", function(e) {
        e.preventDefault()
        let $content = $("#text").val();
        cont.addReview($content);
        console.log("Ваш отзыв был передан на модерацию");
    });
    
    $("#reviews-wrap").on("click", ".review__approve" ,function(e) {
        let $target = $(e.target);
        let id = parseInt($target.attr('data-id'));
        cont.approveReview(id);
    });
    
    $("#reviews-wrap").on("click", ".review__delete" ,function(e) {
        let $target = $(e.target);
        let id = parseInt($target.attr('data-id'));
        cont.deleteReview(id);
    });
});