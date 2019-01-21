$(document).ready(function() {
    
    //let $reviewsContainer = $("#reviews");
    
    //let review1 = new Review (1, "blablabla");
    //review1.render($reviewsContainer);
    
    let cont = new Container("reviews");
    cont.render($("#reviews-wrap"));
    
    $("#review").on("submit", function(e) {
        e.preventDefault()
        let review = new Review (0, $("#text").val());
        review.render($reviewsContainer);
        console.log("Ваш отзыв был передан на модерацию");
    });
    
    $(".review__approve").on("click", function() {
        let id = parseInt($(this).attr('data-id'));
        let content = (this).parent().find('.review__content').text();
        
        basket.add(id, content);
    })
});