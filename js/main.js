$(document).ready(function()
{
    var mainDiv = $(".mdl-grid");
    //Desktop Screen size
    if (/*$(window).height() >= 768 && */$(window).width() >= 1024)
    {
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
    }
    //Desktop Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 1010)
    {
        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
    }
    //Desktop Mobile size
    else
    {
        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
    }
});

$( window ).resize(function() {
    var mainDiv = $(".mdl-grid");
    mainDiv.empty();
    //Desktop Screen size
    if (/*$(window).height() >= 768 && */$(window).width() >= 1024)
    {
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
    }
    //Desktop Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 1010)
    {
        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
    }
    //Desktop Mobile size
    else
    {
        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
    }
});


