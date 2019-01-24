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
    
    $("#reviews-wrap").on("click", function(e) {
        let $target = $(e.target);
        if ($target.attr("class") !== $(".button").attr("class")) return;
         console.log($target);
        let id = parseInt($target.attr('data-id'));
        if ($target.attr("class") == $(".review__approve").attr("class")) {
            return cont.approveReview(id);
        } 
        
        if ($target.attr("class") == $(".review__delete").attr("class")) {
            return cont.deleteReview(id);
        }
        
    })
});