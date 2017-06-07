window.sr = ScrollReveal({ reset: true });

var aboutUsText = "\"We are in this business since 1992\""
var servicesText= "";
var busyText = `BUSY is an integrated business accounting software for Micro, Small and Medium businesses.  With over 1,50,000 installations (over 6 Lac Users) worldwide, BUSY is one of the leading accounting softwares in India. The salient features of BUSY are:`;
var radixText =`Radix is a full-featured Windows-based Financial Accounting Software. It has an array of powerful features that can be configured for any type of Business/Domain.`;

$(document).ready(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    createFeatureCards();
    dependentOnSize();
    sr.reveal('.reveal', { duration: 2000, origin: 'right', container: '#about_us_scroll', distance: '400px'});
    sr.reveal('.reveal', { duration: 2000,origin: 'bottom', container: '#main_grid', distance: '400px'});
    sr.reveal('.reveal', { duration: 2000,origin: 'bottom', container: '#services_grid', distance: '400px'});

});

$( window ).resize(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    dependentOnSize();

    sr.reveal('.reveal', { duration: 2000, origin: 'bottom', container: '#about_us_scroll', distance: '200px'});
    sr.reveal('.reveal', { duration: 2000,origin: 'bottom', container: '#main_grid', distance: '200px'});
    sr.reveal('.reveal', { duration: 2000,origin: 'bottom', container: '#services_grid', distance: '200px'});

});

function aboutDivison()
{
    var aboutDiv = $("#about_us");
    aboutDiv.empty();
    aboutDiv.append(`<div class=\"mdl-cell mdl-cell--12-col\" align=\"center\" id=\"about_us_scroll\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp reveal\" style=\"background: rgba(0,0,0,0.12); min-height: 175px\">
                            <div class=\"mdl-card__supporting-text top-margin reveal\">
                                <h1 align=\"center\" id=\"aboutUs_header\" style=\"color: white\">ADVANCED SOFTWARES</h1>
                                <p align=\"center\" style=\"color: white\">`+ aboutUsText+ `</p>
                            </div>
                        </div>
                    </div>`);
}

function mainDivison()
{
    var mainDiv = $("#main_grid");
    mainDiv.empty();
    mainDiv.append(`<div class=\"mdl-cell mdl-cell--12-col reveal\" >
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp reveal\">
                            <div class=\"mdl-card__supporting-text reveal\" style=\"width:100%; padding:0px\">
                                <h1 align=\"center\" class=\"top-margin reveal\">PRODUCTS</h1>
                                <div class=\"mdl-grid reveal\")>
                                    <div class=\"mdl-cell mdl-cell--12-col reveal\" id=\"product_image\" style(\"width: calc(100% - 16px);\">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`);
    develop_Product();
}
function createCard(object,id){
    object.append(`<div class=\"mdl-cell mdl-cell--12-col product-card-height\" style=\"margin-bottom: 30px;\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" id=\"card\">
                            <div class=\"mdl-card__supporting-text\" style=\"width: 100%; padding: 0px\">
                                <div class=\"mdl-grid\" id=\"` +id + `\" style=\"padding: 0px\">
                                </div>
                            </div>
                        </div>
                   </div>`);
}
function createSection()
{
    var product_image = $("#1");

    product_image.append(`<div class="reveal" style=\"width: 50%; height:100%;\">
                            <image width=\"100%\"class=\"product-card-height mdl-shadow--2dp\" src=\"photos/busy.jpg\"> </image>
                         </div>
                         <div class=\"reveal\" style=\"width: 45%; height:100%;\">
                            <h2 align=\"center\" class=\"header reveal\">BUSY</h2>
                            <p align=\"left\" class=\"para reveal\">`+busyText+`</p>
                            <p id=\"busy-text\" align=\"right\" class=\"reveal\"></p>
                         </div>`);

    product_image = $('#2');

    product_image.append(`<div class=\"reveal\" style=\"width: 50%; height:100%;\">
                        <image width=\"100%\" class=\"product-card-height mdl-shadow--2dp\" src=\"photos/radix.png\"> </image>
                     </div>
                     <div class="reveal" style=\"width: 45%; height:100%;\">
                        <h2 align=\"center\" class=\"header reveal\">RADIX</h2>
                        <p align=\"left\" class=\"para reveal\">`+radixText+`</p>
                        <p id=\"reddix-text\" align=\"center\" class=\"reveal\"></p>
                     </div>`);

    product_image = $('#3');

    product_image.append(`<div class=\"reveal\" style=\"width: 50%; height:100%;\">
                        <image width=\"100%\" class=\"product-card-height mdl-shadow--2dp\" src=\"photos/rely.png\"> </image>
                     </div>
                     <div class="reveal" style=\"width: 45%; height:100%;\">
                        <h2 align=\"center\" class=\"header reveal\">RELY</h2>
                        <p id=\"rely-text\" align=\"center\" class=\"reveal\"></p>
                     </div>`);
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

    createSection();
}

function serviceDivison() {
    var serDiv = $('#services_grid');
    serDiv.empty();
    serDiv.append(`<div class=\"mdl-cell mdl-cell--12-col reveal\" id=\"service_grid_scroll\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp reveal\" >
                            <div class=\"mdl-card__supporting-text reveal\" style=\"width:100%; padding:0px\">
                                <h1 align=\"center\" class=\"top-margin reveal\">SERVICES</h1>
                                <p align=\"center\" class=\"reveal\">`+aboutUsText+`</p>
                            </div>
                        </div>
                  </div>`);
}

function createFeatureCards(){
    var division = $('#Features').children();
    for(var i = 0; i < 12; i++)
    {
        division.append(`<div class=\"mdl-card mdl-shadow--2dp feature-card reveal\" align=\"center\" id=\"feature-card-`+i+`\" style=\"min-height: 0px\">
                            <div class=\"mdl-card__supporting-text reveal\" align=\"center\" style=\"padding:0px\">

                            </div>
                        </div>`);
    }
}

function dependentOnSize()
{
    $('.feature-card').css('min-width', '230px');
    $('.feature-card').css('min-height', $('.feature-card').css('width'));

    if (/*$(window).height() >= 768 && */$(window).width() >= 830)
    {
        $('h1').css("font-size","50px");
        $('.header').css('font-size','35px');
        $('#busy-text').css('font-size','25px');
        $('#busy-text').css('margin-top','25px');
        $('.para').css('font-size','18px');
        $('.para').css('margin','10px 0px 0px 15px');
        $('#about_us').css('margin-top','15%');
        $('.mdl-navigation__link').css('padding','2px 20px 0px 0px');
        $('.navigation-links').css('font-size','14px');
        $('#card').css('min-height','175px');
        $('.demo-card-image__filename').css('font-size','14px');
        $('#card').css('height','325px');
        $('.product-card-height').css('height',$('#card').height());

        $('.feature-card').css('min-width', '230px');
        $('.feature-card').css('min-height', $('.feature-card').css('width'));
    }
    //Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 440)
    {
        $('h1').css("font-size","22px");
        $('.header').css('font-size','20px');
        $('#busy-text').css('font-size','12px');
        $('.para').css('font-size','10px');
        $('.para').css('margin','0px 0px 0px 10px');
        $('#about_us').css('margin-top','15%');
        $('.mdl-navigation__link').css('padding','2px 8px 0px 0px');
        $('.navigation-links').css('font-size','12px');
        $('#card').css('min-height','150px');
        $('.demo-card-image__filename').css('font-size','12px');
        $('#card').css('height','230px');
        $('.product-card-height').css('height',$('#card').height());

        $('.feature-card').css('min-width', '120px');
        $('.feature-card').css('min-height', $('.feature-card').css('width'));
    }
    //Mobile size
    else
    {
        $('h1').css("font-size","13px");
        $('.header').css('font-size','12px');
        $('#busy-text').css('font-size','10px');
        $('.para').css('font-size','8px');
        $('.para').css('margin','0px 0px 0px 5px');
        $('#about_us').css('margin-top','10%');
        $('.mdl-navigation__link').css('padding','2px 3px 0px 0px');
        $('.navigation-links').css('font-size','10px');
        $('#card').css('min-height','100px');
        $('.demo-card-image__filename').css('font-size','8px');
        $('#card').css('height','80px');
        $('.product-card-height').css('height',$('#card').height());

        $('.feature-card').css('min-width', '50px');
        $('.feature-card').css('min-height', $('.feature-card').css('width'));
    }
}

$("#about_us_link").on('click',function() {
    $('html, body').animate({scrollTop: $("#navigateToAboutUs").offset().top}, 2000);
});
$("#main_grid_link").click(function() {
    $('html, body').animate({scrollTop: $("#main_grid").offset().top}, 2000);
});
$("#service_grid_link").click(function() {
    $('html, body').animate({scrollTop: $("#services_grid").offset().top}, 2000);
});
$("#contact_us_link").click(function() {
    $('html, body').animate({scrollTop: $("#navigateToContactUs").offset().top}, 2000);
});

var busyCount = 0, reddixCount = 0, relyCount = 0;

window.setInterval(function(){
    var para = $('#busy-text');
    if(busyCount == 0){
        para.fadeOut(0);
        para.text("\"Financial Accounting (Multi-Currency)\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 1) {
        para.fadeOut(0);
        para.text("\"Inventory Management (Multi-location)\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 2) {
        para.fadeOut(0);
        para.text("\"Production / Bill of Material\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 3) {
        para.fadeOut(0);
        para.text("\"Sales / Purchase Quotations\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 4) {
        para.fadeOut(0);
        para.text("\"Sales / Purchase Order Processing\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 5) {
        para.fadeOut(0);
        para.text("\"Fully User-configurable Invoicing\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 6) {
        para.fadeOut(0);
        para.text("\"User-configurable Documents / Letters\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 7) {
        para.fadeOut(0);
        para.text("\"User-configurable Columns in Reports\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 8) {
        para.fadeOut(0);
        para.text("\"CST / VAT Reports (State-specific)\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 9) {
        para.fadeOut(0);
        para.text("\"Service Tax & TDS\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 10) {
        para.fadeOut(0);
        para.text("\"Mfg / Trading Excise Registers\"");
        para.fadeIn(1500);
        busyCount += 1;
    }
    else if (busyCount == 11) {
        para.fadeOut(0);
        para.text("\"MIS Reports & Analysis \"");
        para.fadeIn(1500);
        busyCount = 0;
    }
}, 2000);

window.setInterval(function(){
    var para = document.getElementById('busy-text');
    if(reddixCount == 0){

        reddixCount = 1;
    }
    else if (reddixCount == 1) {

        reddixCount = 2;
    }
    else if (reddixCount == 2) {

    reddixCount = 0;
    }
}, 3500);

window.setInterval(function(){
    if(relyCount == 0){

        relyCount = 1;
    }
    else if (relyCount == 1) {

        relyCount = 2;
    }
    else if (relyCount == 2) {

    relyCount = 0;
    }
}, 4000);
