$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});
$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton1").click(function(){
        if ($("#carouselButton1").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton1").children("i").removeClass("fa-pause");
            $("#carouselButton1").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton1").children("i").removeClass("fa-play");
            $("#carouselButton1").children("i").addClass("fa-pause"); 
        }
    });
});