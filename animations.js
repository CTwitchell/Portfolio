$(document).ready(function () {

    $(".tile18").hover(function () {
        $(".tile17").animate({width: '15%'}, "fast");
         $(".tile19").animate({width: '15%'},  "fast");
         $(".tile20").animate({width: '15%'},  "fast");
         $(".tile18").animate({width: '55%'},  "fast");
        $(".resume").css("font-size", "75px");
    }, function () {
        $(".tile17").animate({width: '25%'}, "fast");
        $(".tile18").animate({width: '25%'}, "fast");
         $(".tile19").animate({width: '25%'},  "fast");
         $(".tile20").animate({width: '25%'}, "fast");
        $(".resume").css("font-size", "55px");
    });
    $(".tile18").click(function () {
        $(".resumedisplaybox").toggle({display: 'inline-block'}, "slow");
    });
    $(".close").click(function () {
        $(".resumedisplaybox").toggle({display: 'inline-block'}, "slow");
    });
    $(".tile9").hover(function () {
        $(".tile10").animate({width: '15%'}, "fast");
         $(".tile9").animate({width: '55%'}, "fast");
         $(".tile11").animate({width: '15%'}, "fast");
         $(".tile12").animate({width: '15%'}, "fast");
        $(".projects").animate("font-size", "75px");
    }, function () {
        $(".tile9").animate({width: '25%'}, "fast");
        $(".tile10").animate({width: '25%'}, "fast");
         $(".tile11").animate({width: '25%'}, "fast");
         $(".tile12").animate({width: '25%'}, "fast");
        $(".projects").animate("font-size", "55px");
    });
     $(".tile9").click(function () {
        $(".projectdisplaybox").toggle({display: 'inline-block'}, "slow")
    });
    $(".close2").click(function () {
        $(".projectdisplaybox").toggle({display: 'inline-block'}, "slow")
    });
    $(".tile4").hover(function () {
        $(".tile1").animate({width: '15%'}, "fast");
         $(".tile2").animate({width: '15%'},  "fast");
         $(".tile3").animate({width: '15%'},  "fast");
         $(".tile4").animate({width: '55%'},  "fast");
        $(".about").css("font-size", "75px", "fast");
    }, function () {
        $(".tile1").animate({width: '25%'}, "fast");
        $(".tile2").animate({width: '25%'}, "fast");
         $(".tile4").animate({width: '25%'},  "fast");
         $(".tile3").animate({width: '25%'}, "fast");
        $(".about").css("font-size", "55px");
    });
     $(".tile4").click(function () {
        $(".aboutdisplaybox").toggle({display: 'inline-block'}, "slow");
    });
    $(".close3").click(function () {
        $(".aboutdisplaybox").toggle({display: 'inline-block'}, "slow");
    });
});