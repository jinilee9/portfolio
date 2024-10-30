$(function(){

    // going
    $(".go-top").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);

    });
    $(".go-btm").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $(document).height() }, 300);

    });


});