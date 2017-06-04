$(document).ready(function()
{
    var mainDiv = $(".mdl-grid");
    //Desktop Screen size
    if (window.screen.availHeight >= 768 && window.screen.availWidth >= 1024)
    {
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
    }
    //Desktop Tablet size
    else if (window.screen.availHeight >= 660 && window.screen.availWidth >= 1010)
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
