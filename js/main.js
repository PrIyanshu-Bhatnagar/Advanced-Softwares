var aboutUsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend laciniaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...";

$(document).ready(function()
{
    aboutDivison();
    mainDivison();
    cardWidthAdjustment();
});

$( window ).resize(function()
{
    aboutDivison();
    mainDivison();
    cardWidthAdjustment();
});

function aboutDivison()
{
    var aboutDiv = $("#about_us");
    aboutDiv.empty();
    aboutDiv.append("<div class=\"mdl-cell mdl-cell--3-col\"></div>");
    aboutDiv.append("<div class=\"mdl-cell mdl-cell--6-col\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text\"><h1>About Us</h1><p>"+aboutUsText+ "</p></div></div></div>")
    aboutDiv.append("<div class=\"mdl-cell mdl-cell--3-col\"></div>");

}

function mainDivison()
{
    var mainDiv = $("#main_grid");
    mainDiv.empty();
    mainDiv.append("<div class=\"mdl-cell mdl-cell--12-col\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text\" id=\"product_grid\" style=\"width:100%; padding:0px\"></div></div></div>");

    mainDiv = $("#product_grid");
    mainDiv.append("<h1 style=\"margin: 24px 0px 0px 0px; padding: 0px 0px 0px 20px;\">Products</h1>");
    mainDiv.append("<div class=\"mdl-grid\" id=\"products\")></div>");
    mainDiv = $('#products');
    //Desktop Screen size
    if (/*$(window).height() >= 768 && */$(window).width() >= 830)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");
        $('#title_heading').css("font-size","40px");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--12-col\" id=\"product_image\" style(\"width: calc(100% - 16px);\"></div>");
        //mainDiv.append("<div class=\"mdl-cell mdl-cell--6-col\" id=\"product_details\"></div>");
    }
    //Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 440)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");
        $('#title_heading').css("font-size","25px");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--12-col\" id=\"product_image\" style(\"width: calc(100% - 16px);\"></div>");
        //mainDiv.append("<div class=\"mdl-cell mdl-cell--4-col\" id=\"product_details\"></div>");
    }
    //Mobile size
    else
    {
        $('header').removeClass("mdl-layout--large-screen-only").addClass("mdl-layout--small-screen-only");
        $('#title_heading').css("font-size","15px");

        mainDiv.append("<div class=\"mdl-cell mdl-cell--12-col\" id=\"product_image\" style(\"width: calc(100% - 16px);\"></div>");
       // mainDiv.append("<div class=\"mdl-cell mdl-cell--2-col\" id=\"product_details\"></div>");
    }
    develop_Product();
}
function createCard(object,id){
    object.append("<div class=\"mdl-cell mdl-cell--12-col\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text\" id=\"" +id + "\"></div></div></div>");
}

function cardWidthAdjustment() {
    var mainWidth = $(window).width() - 20;
    $(".mdl-layout__content").css('width', mainWidth);
}

function develop_Product() {
    var product_image = $("#product_image");
    var product_details = $("#product_details");

    createCard(product_image,"product_image");
    //createCard(product_details, "product_details");

    createCard(product_image,"product_image");
    //createCard(product_details, "product_details");

    createCard(product_image,"product_image");
    //createCard(product_details, "product_details");
}

