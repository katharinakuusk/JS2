$(document).ready(function() {
    let $width = $(".tab-wrap").outerWidth();
    let $minWidth = $width + 100 + "px";
    console.log($minWidth);
    $("tab-content").css("min-width", $minWidth);
    
    var $tabs = $(".tab");
    $(".tab-content").not(".active-text").hide();
    $tabs.on('click', function () {
        $(".active-tab").removeClass("active-tab");
        $(this).addClass("active-tab");
        
        let $id = $(this).attr("id").split("_")[1];
        $(".active-text").removeClass("active-text").hide();
        let $currentText = $("#text_" + $id).addClass("active-text").show();
        console.log($currentText);
        
    });
});