
var aboutUsText = "\"We are in this business since 1992\""
$(document).ready(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    dependentOnSize();
});

$( window ).resize(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    dependentOnSize();
});

function aboutDivison()
{
    var aboutDiv = $("#about_us");
    aboutDiv.empty();
    //aboutDiv.append("<div class=\"mdl-cell mdl-cell--1-col\" ></div>");
    aboutDiv.append("<div class=\"mdl-cell mdl-cell--12-col\" align=\"center\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12); min-height: 175px\"><div class=\"mdl-card__supporting-text animation-element\"><h1 align=\"center\">About Us</h1><p align=\"center\">"+aboutUsText+ "</p></div></div></div>")
    //aboutDiv.append("<div class=\"mdl-cell mdl-cell--1-col\" ></div>");

}

function mainDivison()
{
    var mainDiv = $("#main_grid");
    mainDiv.empty();
    mainDiv.append("<div class=\"mdl-cell mdl-cell--12-col\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text\" id=\"product_grid\" style=\"width:100%; padding:0px\"></div></div></div>");

    mainDiv = $("#product_grid");
    mainDiv.append("<h1 align=\"center\" class=\"top-margin\">Products</h1>");
    mainDiv.append("<div class=\"mdl-grid\" id=\"products\")></div>");
    mainDiv = $('#products');

    mainDiv.append("<div class=\"mdl-cell mdl-cell--12-col\" id=\"product_image\" style(\"width: calc(100% - 16px);\"></div>");

    //Desktop Screen size
    develop_Product();
}
function createCard(object,id){
    object.append("<div class=\"mdl-cell mdl-cell--12-col animation-element\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text\" style=\"width: 100%\"><div class=\"mdl-grid\" id=\"" +id + "\"></div></div></div></div>");
}

function cardWidthAdjustment() {
    var mainWidth = $(window).width();
    $(".mdl-layout__content").css('width', mainWidth);
}

function develop_Product() {
    var product_image = $("#product_image");

    createCard(product_image,"1"); //Id 1 is Busy

    createCard(product_image,"2");//Id 2 is Reddix

    createCard(product_image,"3");//Id 3 is Rely

    product();

}

function product()
{
    var busyCard = $('#1');
    busyCard.append("<div class=\"demo-card-image mdl-card mdl-shadow--2dp\" style=\"width: 50%; height: 100%\"> <div class=\"mdl-card__title mdl-card--expand\"></div><div class=\"mdl-card__actions\"><span class=\"demo-card-image__filename\">BUSY</span></div></div>");
    busyCard.append("<div style=\"width:50%\"><h2 id=\"header1\">Busy</h2></div>");

    var reddix = $('#2');
    reddix.append("<div style=\"width:50%\"><h2 id=\"header2\">Reddix</h2></div>");
    reddix.append("<div class=\"demo-card-image mdl-card mdl-shadow--2dp\" style=\"width: 45%; height: 100%;\"> <div class=\"mdl-card__title mdl-card--expand\"></div><div class=\"mdl-card__actions\"><span class=\"demo-card-image__filename\">REDDIX</span></div></div>");

    var rely = $('#3');
    rely.append("<div class=\"demo-card-image mdl-card mdl-shadow--2dp\" style=\"width: 50%; height: 100%\"> <div class=\"mdl-card__title mdl-card--expand\"></div><div class=\"mdl-card__actions\"><span class=\"demo-card-image__filename\">RELY</span></div></div>");
    rely.append("<div style=\"width:50%\"><h2 id=\"header3\">Rely</h2></div>");
}

function serviceDivison() {
    var serDiv = $('#services_grid');
    serDiv.empty();
    serDiv.append("<div class=\"mdl-cell mdl-cell--12-col\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text\" id=\"service_text\" style=\"width:100%; padding:0px\"></div></div></div>");

    var serText = $('#service_text');
    serText.prepend("<p align=\"center\">"+aboutUsText+"</p>");
    serText.prepend("<h1 align=\"center\" class=\"top-margin\">Services</h1>");
}

function dependentOnSize()
{

    if (/*$(window).height() >= 768 && */$(window).width() >= 830)
    {
        $('h1').css("font-size","40px");
        $('#header1').css('font-size','35px');
        $('#header2').css('font-size','35px');
        $('#header3').css('font-size','35px');
        $('.content').css('top','65px');
        $('p').css('font-size','25px');
        $('p').css('margin','20px 0px 0px 0px');
        $('#about_us').css('margin-top','15%');
        $('.mdl-navigation__link').css('padding','2px 20px 0px 0px');
        $('.navigation-links').css('font-size','14px');
        $('.mdl-card').css('min-height','175px');
    }
    //Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 440)
    {
        $('h1').css("font-size","25px");
        $('#header1').css('font-size','20px');
        $('#header2').css('font-size','20px');
        $('#header3').css('font-size','20px');
        $('p').css('font-size','20px');
        $('p').css('margin','15px 0px 0px 0px');
        $('#about_us').css('margin-top','15%');
        $('.mdl-navigation__link').css('padding','2px 8px 0px 0px');
        $('.navigation-links').css('font-size','12px');
        $('.mdl-card').css('min-height','150px');

    }
    //Mobile size
    else
    {
        $('h1').css("font-size","15px");
        $('#header1').css('font-size','12px');
        $('#header2').css('font-size','12px');
        $('#header3').css('font-size','12px');
        $('p').css('font-size','8px');
        $('p').css('margin','5px 0px 0px 0px');
        $('#about_us').css('margin-top','10%');
        $('.mdl-navigation__link').css('padding','2px 3px 0px 0px');
        $('.navigation-links').css('font-size','10px');
        $('.mdl-card').css('min-height','100px');
    }
}
