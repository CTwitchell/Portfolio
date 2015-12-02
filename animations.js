$(document).ready(function () {

    $(".tile11").hover(function () {
        $(".tile9").animate({width: '15%'}, "slow");
         $(".tile10").animate({width: '15%'},  "slow");
         $(".tile12").animate({width: '15%'},  "slow");
         $(".tile11").animate({width: '55%'},  "slow");
        $(".resume").css("font-size", "75px");
    }, function () {
        $(".tile9").animate({width: '25%'}, "slow");
        $(".tile10").animate({width: '25%'}, "slow");
         $(".tile11").animate({width: '25%'},  "slow");
         $(".tile12").animate({width: '25%'}, "slow");
        $(".resume").css("font-size", "55px");
    });
    $(".tile11").click(function () {
        $(".resumedisplaybox").animate({height: '25%'}, "slow");
    });
    $(".close").click(function () {
        $(".resumedisplaybox").animate({height: '0'}, "slow")
    });
    $(".tile14").hover(function () {
        $(".tile13").animate({width: '15%'}, "400");
         $(".tile14").animate({width: '55%'}, "400");
         $(".tile15").animate({width: '15%'}, "400");
         $(".tile16").animate({width: '15%'}, "slow");
        $(".projects").animate("font-size", "75px");
    }, function () {
        $(".tile13").animate({width: '25%'}, "400");
        $(".tile14").animate({width: '25%'}, "400");
         $(".tile15").animate({width: '25%'}, "400");
         $(".tile16").animate({width: '25%'}, "400");
        $(".projects").animate("font-size", "55px");
    });
     $(".tile14").click(function () {
        $(".projectdisplaybox").animate({height: '150'}, "slow")
    });
    $(".close2").click(function () {
        $(".projectdisplaybox").animate({height: '0'}, "slow")
    });
    $(".tile23").hover(function () {
        $(".tile21").animate({width: '15%'}, "slow");
         $(".tile22").animate({width: '15%'},  "slow");
         $(".tile24").animate({width: '15%'},  "slow");
         $(".tile23").animate({width: '55%'},  "slow");
        $(".about").css("font-size", "75px", "slow");
    }, function () {
        $(".tile21").animate({width: '25%'}, "slow");
        $(".tile22").animate({width: '25%'}, "slow");
         $(".tile24").animate({width: '25%'},  "slow");
         $(".tile23").animate({width: '25%'}, "slow");
        $(".about").css("font-size", "55px");
    });
     $(".tile23").click(function () {
        $(".aboutdisplaybox").animate({height: '15%'}, "slow");
    });
    $(".close3").click(function () {
        $(".aboutdisplaybox").animate({height: '0'}, "slow")
    });
});