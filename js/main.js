var $animation_elements = $('.animation-element');
var $window = $(window);

$window.on('scroll', check_if_in_view);

$window.on('scroll resize', check_if_in_view);

$window.trigger('scroll');

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

var aboutUsText = "\"We are in this business since 1992\""
$(document).ready(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
});

$( window ).resize(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
});

function aboutDivison()
{
    var aboutDiv = $("#about_us");
    aboutDiv.empty();
    //aboutDiv.append("<div class=\"mdl-cell mdl-cell--1-col\" ></div>");
    aboutDiv.append("<div class=\"mdl-cell mdl-cell--12-col\" align=\"center\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text animation-element\"><h1 align=\"center\">About Us</h1><p align=\"center\">"+aboutUsText+ "</p></div></div></div>")
    //aboutDiv.append("<div class=\"mdl-cell mdl-cell--1-col\" ></div>");

}

function mainDivison()
{
    var mainDiv = $("#main_grid");
    mainDiv.empty();
    mainDiv.append("<div class=\"mdl-cell mdl-cell--12-col\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text\" id=\"product_grid\" style=\"width:100%; padding:0px\"></div></div></div>");

    mainDiv = $("#product_grid");
    mainDiv.append("<h1>Products</h1>");
    mainDiv.append("<div class=\"mdl-grid\" id=\"products\")></div>");
    mainDiv = $('#products');

    mainDiv.append("<div class=\"mdl-cell mdl-cell--12-col\" id=\"product_image\" style(\"width: calc(100% - 16px);\"></div>");

    //Desktop Screen size
    if (/*$(window).height() >= 768 && */$(window).width() >= 830)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");
        $('h1').css("font-size","40px");
        $('h2').css("font-size","35px");
        $('.mdl-navigation__link').css('padding','2px 24px 0px 0px');
    }
    //Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 440)
    {
        $('header').removeClass("mdl-layout--small-screen-only").addClass("mdl-layout--large-screen-only");
        $('h1').css("font-size","25px");
        $('h2').css("font-size","20px");
        $('.mdl-navigation__link').css('padding','2px 12px 0px 0px');
    }
    //Mobile size
    else
    {
        $('header').removeClass("mdl-layout--large-screen-only").addClass("mdl-layout--small-screen-only");
        $('h1').css("font-size","15px");
        $('h2').css("font-size","12px");
        $('#about_us').css('margin-top','15%');
        $('.mdl-navigation__link').css('padding','2px 5px 0px 0px');
    }
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
    busyCard.append("<image src=\"http://via.placeholder.com/350x150\" style=\"width: 50%\; height: 100%;\"></image>");
    busyCard.append("<div style=\"width:50%\"><h2>Busy<div></div>");

    var reddix = $('#2');
    reddix.append("<div style=\"width:50%\"><h2>Reddix<div></div>");
    reddix.append("<image src=\"http://via.placeholder.com/350x150\" style=\"width: 50%\; height: 100%;\"></image>");

    var rely = $('#3');
    rely.append("<image src=\"http://via.placeholder.com/350x150\" style=\"width: 50%\; height: 100%;\"></image>");
    rely.append("<div style=\"width:50%\"><h2>Rely<div></div>");
}

function serviceDivison() {
    var serDiv = $('#services_grid');
    serDiv.empty();
    serDiv.append("<div class=\"mdl-cell mdl-cell--12-col\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\"><div class=\"mdl-card__supporting-text\" id=\"service_text\" style=\"width:100%; padding:0px\"></div></div></div>");

    var serText = $('#service_text');
    serText.prepend("<p>"+aboutUsText+"</p>");
    serText.prepend("<h1>Services</h1>");
}


