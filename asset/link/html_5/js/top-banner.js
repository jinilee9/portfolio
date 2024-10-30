$(function(){
    /*
        For common
    */

    function headrLocate(){
        var topbannerH = $(".top-banner").outerHeight(),
            header = $(".header");

        header.css("top", topbannerH)
    }
    $(window).load(function(){ headrLocate() });
    $(window).resize(function(){ headrLocate() })

});