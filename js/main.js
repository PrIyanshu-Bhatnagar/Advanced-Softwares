var aboutUsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...";

$(document).ready(function()
{
    aboutDivison();
    mainDivison();
    cardWidthAdjustment();
    develop_Product();
});

$( window ).resize(function()
{
    aboutDivison();
    mainDivison();
    cardWidthAdjustment();
    develop_Product();
});

function aboutDivison()
{
    var aboutDiv = $("#about_us");
    aboutDiv.empty();
    aboutDiv.append("<div class=\"mdl-cell mdl-cell--3-col\"></div>");
    aboutDiv.append("<div class=\"mdl-cell mdl-cell--6-col\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\"><div class=\"mdl-card__supporting-text\"><h1>About Us</h1><p>"+aboutUsText+ "</p></div></div></div>")
    aboutDiv.append("<div class=\"mdl-cell mdl-cell--3-col\"></div>");

}

function mainDivison()
{
    var mainDiv = $("#main_grid");
    mainDiv.empty();
    //Desktop Screen size
    if (/*$(window).height() >= 768 && */$(window).width() >= 1024)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");
        $('#title_heading').css("font-size","40px");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" style=\"background-color: red;\">6</div>");
    }
    //Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 550)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");
        $('#title_heading').css("font-size","25px");

//        aboutDiv.append("<div class=\"mdl-cell\" style=\"width: 100%\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\"><div class=\"mdl-card__supporting-text\"><h1>About Us</h1><p>"+aboutUsText+ "</p></div></div></div>")

        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" style=\"background-color: red;\">4</div>");
    }
    //Mobile size
    else
    {
        $('header').removeClass("mdl-layout--large-screen-only").addClass("mdl-layout--small-screen-only");
        $('#title_heading').css("font-size","15px");

//        aboutDiv.append("<div class=\"mdl-cell\" style=\"width: 100%\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\"><div class=\"mdl-card__supporting-text\"><h1>About Us</h1><p>"+aboutUsText+ "</p></div></div></div>")

        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
        mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" style=\"background-color: red;\">2</div>");
    }

}

function cardWidthAdjustment(argument) {
    var mainWidth = $(window).width() - 20;
    $(".mdl-layout__content").css('width', mainWidth);
}

function develop_Product() {

}

