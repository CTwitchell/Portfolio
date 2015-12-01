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
    $(".tile11").click(function () {
        $(".resumedisplaybox").css("display", "inline-block")
    });
    $(".close").click(function () {
        $(".resumedisplaybox").css("display", "none")
    });
    $(".tile14").hover(function () {
        $(".tile13").css("width", "15%");
         $(".tile14").css("width", "55%");
         $(".tile15").css("width", "15%");
         $(".tile16").css("width", "15%");
        $(".projects").css("font-size", "75px");
    }, function () {
        $(".tile13").css("width", "25%");
        $(".tile14").css("width", "25%");
         $(".tile15").css("width", "25%");
         $(".tile16").css("width", "25%");
        $(".projects").css("font-size", "55px");
    });
     $(".tile14").click(function () {
        $(".projectdisplaybox").css("display", "inline-block")
    });
    $(".close2").click(function () {
        $(".projectdisplaybox").css("display", "none")
    });
});