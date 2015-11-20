$(document).ready(function () {

    $(".tile11").hover(function () {
        $(".tile9").css("width", "15%");
         $(".tile10").css("width", "15%");
         $(".tile12").css("width", "15%");
         $(".tile11").css("width", "55%");
        $(".resume").css("font-size", "75px");
    }, function () {
        $(".tile9").css("width", "25%");
        $(".tile10").css("width", "25%");
         $(".tile12").css("width", "25%");
         $(".tile11").css("width", "25%");
        $(".resume").css("font-size", "55px");
    });
});