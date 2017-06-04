$(document).ready(function()
{

    var width = $(window).innerWidth() - 20;
    $(".demo-card-wide").css('width', width);

    var mainDiv = $(".mdl-grid");
    //Desktop Screen size
    if (/*$(window).height() >= 768 && */$(window).width() >= 1024)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
    }
    //Desktop Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 1010)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
    }
    //Desktop Mobile size
    else
    {
        $('header').removeClass("mdl-layout--large-screen-only").addClass("mdl-layout--small-screen-only");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
    }
    develop_Product();
});

$( window ).resize(function() {
    var width = $(window).innerWidth() - 20;
    $(".demo-card-wide").css('width', width);

    var mainDiv = $(".mdl-grid");
    mainDiv.empty();
    //Desktop Screen size
    if (/*$(window).height() >= 768 && */$(window).width() >= 1024)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
    }
    //Desktop Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 1010)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
    }
    //Desktop Mobile size
    else
    {
        $('header').removeClass("mdl-layout--large-screen-only").addClass("mdl-layout--small-screen-only");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
    }
    develop_Product();
});

function develop_Product() {

}

