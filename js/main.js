window.sr = ScrollReveal({ reset: true });

var aboutUsText = "\"We are in this business since 1992\""
var servicesText= "";
var busyText = `BUSY is an integrated business accounting software for Micro, Small and Medium businesses with over 1,50,000 installations (over 6 Lac Users) worldwide.`;
var radixText =`Radix is a full-featured Windows-based Financial Accounting Software. It has an array of powerful features that can be configured for any type of Business/Domain.`;

$(document).ready(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    createFeatureCards();
    createBusinessCards();
    dependentOnSize();
    sr.reveal('.reveal', { duration: 2000, origin: 'right', container: '#about_us_scroll', distance: '400px'});
    sr.reveal('.reveal', { duration: 2000,origin: 'bottom', container: '#product_image', distance: '400px'});
    sr.reveal('.reveal', { duration: 2000,origin: 'bottom', container: '#services_grid', distance: '400px'});

});

$( window ).resize(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    createFeatureCards();
    createBusinessCards();
    dependentOnSize();

    sr.reveal('.reveal', { duration: 2000, origin: 'bottom', container: '#about_us_scroll', distance: '200px'});
    sr.reveal('.reveal', { duration: 2000,origin: 'bottom', container: '#product_image', distance: '200px'});
    sr.reveal('.reveal', { duration: 2000,origin: 'bottom', container: '#services_grid', distance: '200px'});

});

function aboutDivison()
{
    var aboutDiv = $("#about_us");
    aboutDiv.empty();
    aboutDiv.append(`<div class=\"mdl-cell mdl-cell--12-col\" align=\"center\" id=\"about_us_scroll\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp about-us-card reveal\" style=\"background: rgba(0,0,0,0.12);\">
                            <div class=\"mdl-card__supporting-text top-margin reveal\">
                                <h1 align=\"center\" id=\"aboutUs_header\" style=\"color: white\">ADVANCED SOFTWARES</h1>
                                <p align=\"center\" style=\"color: white\" class=\"gen-text\">`+ aboutUsText+ `</p>
                            </div>
                        </div>
                    </div>`);
}

function mainDivison()
{
    var mainDiv = $("#main_grid");
    mainDiv.empty();
    mainDiv.append(`<div>
                        <h1 align=\"center\" class=\"top-margin\">PRODUCTS</h1>
                        <div class=\"mdl-grid\")>
                            <div class=\"mdl-cell mdl-cell--12-col\" id=\"product_image\" style(\"width: calc(100% - 16px);\">

                            </div>
                        </div>
                    </div>`);
    develop_Product();
}
function createCard(object,id){
    object.append(`<div class=\"mdl-cell mdl-cell--12-col product-card-height\" id=\"card\" style=\"margin-bottom: 30px;\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp reveal\" style=\"min-height:0px;\">
                            <div class=\"mdl-card__supporting-text reveal\" style=\"width: 100%; padding: 0px\">
                                <div class=\"mdl-grid reveal\" id=\"` +id + `\" style=\"padding: 0px\">
                                </div>
                            </div>
                        </div>
                   </div>`);
}

function develop_Product() {

   var product_image = $("#product_image");

   createCard(product_image,"1"); //Id 1 is Busy

   createCard(product_image,"2");//Id 2 is Reddix

   createCard(product_image,"3");//Id 3 is Rely

    createSection();
}

function createSection()
{
    var product_image = $("#1");

    product_image.append(`<div class="reveal" style=\"width: 45%; height:100%;\">
                            <image width=\"100%\"class=\"product-card-height mdl-shadow--2dp\" src=\"photos/busy.jpg\"> </image>
                         </div>
                         <div class=\"reveal\" style=\"width: 45%; height:100%;\">
                            <h2 align=\"center\" class=\"header reveal\">BUSY</h2>
                            <p align=\"left\" class=\"para reveal\">`+busyText+`</p>
                         </div>`);

    product_image = $('#2');

    product_image.append(`<div class=\"reveal\" style=\"width: 45%; height:100%;\">
                        <image width=\"100%\" class=\"product-card-height mdl-shadow--2dp\" src=\"photos/radix.png\"> </image>
                     </div>
                     <div class="reveal" style=\"width: 45%; height:100%;\">
                        <h2 align=\"center\" class=\"header reveal\">RADIX</h2>
                        <p align=\"left\" class=\"para reveal\">`+radixText+`</p>
                     </div>`);

    product_image = $('#3');

    product_image.append(`<div class=\"reveal\" style=\"width: 45%; height:100%;\">
                        <image width=\"100%\" class=\"product-card-height mdl-shadow--2dp\" src=\"photos/rely.png\"> </image>
                     </div>
                     <div class="reveal" style=\"width: 45%; height:100%;\">
                        <h2 align=\"center\" class=\"header reveal\">RELY</h2>
                     </div>`);
}

function cardWidthAdjustment() {
    var mainWidth = $(window).width();
    $(".mdl-layout__content").css('width', mainWidth);
}

function serviceDivison() {
    var serDiv = $('#services_grid');
    serDiv.empty();
    serDiv.append(`<div class=\"mdl-card mdl-shadow--2dp reveal service-card\" >
                        <div class=\"mdl-card__supporting-text reveal\" style=\"width:100%; padding:0px\">
                        </div>
                    </div>
                    <div class=\"mdl-card mdl-shadow--2dp reveal service-card\" id="service-left-card">
                        <div class=\"mdl-card__supporting-text reveal\" style=\"width:100%; padding:0px\">
                        </div>
                    </div>
                    <div class=\"mdl-card mdl-shadow--2dp reveal service-card\" >
                        <div class=\"mdl-card__supporting-text reveal\" style=\"width:100%; padding:0px\">
                        </div>
                    </div>
                    `);
}

function createFeatureCards(){
    var division = $('#feature-grid');
    division.empty();
    for(var i = 0; i < 12; i++)
    {
        division.append(`<div class=\"mdl-card mdl-shadow--2dp feature-card reveal\" align=\"center\" id=\"feature-card-`+i+`\" style=\"min-height: 0px\">
                            <div class=\"mdl-card__supporting-text reveal\" align=\"center\" style=\"padding:0px\">

                            </div>
                        </div>`);
    }
}

function createBusinessCards()
{
    var division = $('#business-segments');
    division.empty();
    for(var i = 0; i < 8; i++)
    {
        division.append(`<div class=\"mdl-card reveal business-card\" align=\"center\" id=\"business-card-`+i+`\" style=\"min-height: 0px; margin:0px\">
                            <div class=\"mdl-card__supporting-text reveal\" align=\"center\" style=\"padding:0px\">

                            </div>
                        </div>`);
    }
}
function dependentOnSize()
{
    $('.product-card-height').css('width', '75%');

    $('.service-card').css('min-width',$(window).width()/2 - 10);
    $('#service-left-card').css('margin-left',$(window).width() - $('#service-left-card').width());

    if ($(window).width() >= 1440)
    {
        $('.feature-card').css('width', ($(window).width()/8) - 10);
        $('.feature-card').css('height', $('.feature-card').css('width'));
        $('.feature-card').css('margin', '5px');

        $('.business-card').css('width',$(window).width()/4);
        $('.business-card').css('height',$('.business-card').css('width'));
    }
    if (/*$(window).height() >= 768 && */$(window).width() >= 840)
    {
        $('h1').css("font-size","50px");
        $('.header').css('font-size','35px');

        $('#busy-text').css('font-size','25px');
        $('#busy-text').css('margin-top','25px');
        $('.para').css('font-size','18px');
        $('.para').css('margin','10px 0px 0px 15px');

        $('.gen-text').css('font-size','23px');

        $('#about_us').css('margin-top','15%');
        $('.about-us-card').css('min-height','175px');

        $('.mdl-navigation__link').css('padding','2px 20px 0px 0px');
        $('.navigation-links').css('font-size','14px');

        $('#card').css('height','220px');

        $('.product-card-height').css('height',$('#card').height());

        $('.feature-card').css('width', ($(window).width()/6) - 10);
        $('.feature-card').css('height', $('.feature-card').css('width'));
        $('.feature-card').css('margin', '5px');

        $('.business-card').css('width',$(window).width()/4);
        $('.business-card').css('height',$('.business-card').css('width'));

    }
    //Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 440)
    {
        $('h1').css("font-size","22px");
        $('.header').css('font-size','20px');

        $('#busy-text').css('font-size','12px');
        $('.para').css('font-size','10px');
        $('.para').css('margin','0px 0px 0px 10px');

        $('.gen-text').css('font-size','20px');

        $('#about_us').css('margin-top','15%');
        $('.about-us-card').css('min-height','150px');

        $('.mdl-navigation__link').css('padding','2px 8px 0px 0px');
        $('.navigation-links').css('font-size','12px');

        $('#card').css('height','200px');

        $('.product-card-height').css('height',$('#card').height());

        $('.feature-card').css('width', '100px');
        $('.feature-card').css('height', $('.feature-card').css('width'));

        $('.feature-card').css('width', ($(window).width()/4) - 10);
        $('.feature-card').css('height', $('.feature-card').css('width'));
        $('.feature-card').css('margin', '5px');

        $('.business-card').css('width',$(window).width()/4);
        $('.business-card').css('height',$('.business-card').css('width'));
    }
    //Mobile size
    else
    {
        $('.product-card-height').css('width', '100%');

        $('h1').css("font-size","13px");
        $('.header').css('font-size','12px');

        $('#busy-text').css('font-size','10px');
        $('.para').css('font-size','8px');
        $('.para').css('margin','0px 0px 0px 5px');

        $('.gen-text').css('font-size','8px');

        $('#about_us').css('margin-top','10%');
        $('.about-us-card').css('min-height','125px');

        $('.mdl-navigation__link').css('padding','2px 3px 0px 0px');
        $('.navigation-links').css('font-size','10px');

        $('#card').css('height','150px');

        $('.product-card-height').css('height',$('#card').height());

        $('.feature-card').css('width', '75px');
        $('.feature-card').css('height', $('.feature-card').css('width'));

        $('.feature-card').css('width', $(window).width() - 10);
        $('.feature-card').css('height', $('.feature-card').css('width'));
        $('.feature-card').css('margin', '5px');

        $('.business-card').css('width',$(window).width()/2);
        $('.business-card').css('height',$('.business-card').css('width'));
    }
}
