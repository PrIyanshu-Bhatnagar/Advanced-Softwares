var aboutUsText = "\"We are in this business since 1992\""
var servicesText= "";
var busyText = `BUSY is an integrated business accounting software for Micro, Small and Medium businesses with over 1,50,000 installations (over 6 Lac Users) worldwide.`;
var radixText =`Radix is a full-featured Windows-based Financial Accounting Software. It has an array of powerful features that can be configured for any type of Business/Domain.`;
var relyText = `RELY is a full-fledged Financial Accounting & Inventory Software which can be used to write complete books of accounts and maintain stock and control inventory.`;
$(document).ready(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    createFeatureCards();
    createBusinessCards();
    dependentOnSize();

});

$(window).resize(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    createFeatureCards();
    createBusinessCards();
    dependentOnSize();
});

function aboutDivison()
{
    var aboutDiv = $("#about_us");
    aboutDiv.empty();
    aboutDiv.append(`<div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp about-us-card\" style=\"background: rgba(0,0,0,0.12);\" >
                            <div class=\"mdl-card__supporting-text top-margin\">
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
    object.append(`<div class=\"mdl-cell mdl-cell--12-col product-card-height fooReveal2\" id=\"card\" style=\"margin-bottom: 30px;\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"min-height:0px;\">
                            <div class=\"mdl-card__supporting-text\" style=\"width: 100%; padding: 0px\">
                                <div class=\"mdl-grid\" id=\"` +id + `\" style=\"padding: 0px\">
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

    product_image.append(`<div class=\"\" style=\"width: 50%; height:100%;\">
                            <image style=\"width:100%\" class=\"mdl-shadow--2dp\" src=\"photos/busy.jpg\"> </image>
                         </div>
                         <div class=\"\" style=\"width: 50%; height:100%;\">
                            <h2 align=\"center\" class=\"header\">BUSY</h2>
                            <p align=\"center\" class=\"para\">`+busyText+`</p>
                         </div>`);

    product_image = $('#2');

    product_image.append(`<div class=\"\" style=\"width: 50%; height:100%;\">
                        <image style=\"width:100%\" class=\"mdl-shadow--2dp\" src=\"photos/radix.png\"> </image>
                     </div>
                     <div class=\"\" style=\"width: 50%; height:100%;\">
                        <h2 align=\"center\" class=\"header\">RADIX</h2>
                        <p align=\"center\" class=\"para\">`+radixText+`</p>
                     </div>`);

    product_image = $('#3');

    product_image.append(`<div class=\"\" style=\"width: 50%; height:100%;\">
                        <image style=\"width:100%\" class=\"mdl-shadow--2dp\" src=\"photos/rely.png\"> </image>
                     </div>
                     <div class=\"\" style=\"width: 50%; height:100%;\">
                        <h2 align=\"center\" class=\"header\">RELY</h2>
                        <p align=\"center\" class=\"para\">`+relyText+`</p>
                     </div>`);
}

function cardWidthAdjustment() {
    var mainWidth = $(window).width();
    $(".mdl-layout__content").css('width', mainWidth);
}

function serviceDivison() {
    var serDiv = $('#services_grid');
    serDiv.empty();
    serDiv.append(`<div class=\"mdl-card mdl-shadow--2dp service-card fooReveal3\" id=\"service_card_1\" style=\"background-color: #424242;\">
                        <div class=\"mdl-card__supporting-text\" style=\"width:100%; padding:0px;\">
                            <h1 align=\"center\" class=\"service-card-para\">Software Training</h1>
                        </div>
                    </div>
                    <div class=\"mdl-card mdl-shadow--2dp service-card fooReveal3\" id="service-left-card" style=\"background-color: #424242;\">
                        <div class=\"mdl-card__supporting-text\" style=\"width:100%; padding:0px;">
                            <h1 align=\"center\" class=\"service-card-para\">Online Support</h1>
                        </div>
                    </div>
                    <div class=\"mdl-card mdl-shadow--2dp service-card fooReveal3\" style=\"background-color: #424242;\">
                        <div class=\"mdl-card__supporting-text\" style=\"width:100%; padding:0px;\">
                            <h1 align=\"center\" class=\"service-card-para\">Staff Visit</h1>
                        </div>
                    </div>
                    `);
}

function createFeatureCards(){
    var division = $('#feature-grid');
    division.empty();
    for(var i = 0; i < 12; i++)
    {
        division.append(`<div class=\"mdl-card mdl-shadow--2dp feature-card fooReveal4\" align=\"center\" id=\"feature-card-`+i+`\" style=\"min-height: 0px\">
                            <div class=\"mdl-card__supporting-text\" align=\"center\" style=\"padding: 0; padding-top: 5px;\">

                            </div>
                        </div>`);
    }

    drawFeatureIcons();
}
function drawFeatureIcons()
{
    for (var i=0;i<12;i++)
    {
        var icon = $('#feature-card-'+i).children().first();
        switch(i)
        {
            case 0:
                    icon.append(`<i class=\"material-icons\">monetization_on</i>`);
                    icon.append(`<p class=\"business-card-para\">Comprehensive Financial Accounting</p>`);
                    break;
            case 1:
                    icon.append(`<i class=\"material-icons\">add_location</i>`);
                    icon.append(`<p class=\"business-card-para\">Multi-location Inventory</p>`);
                    break;
            case 2:
                    icon.append(`<i class=\"material-icons\">attach_money</i>`);
                    icon.append(`<p class=\"business-card-para\">GST, VAT, Excise, Service Tax, TDS</p>`);
                    break;
            case 3:
                    icon.append(`<i class=\"material-icons\">print</i>`);
                    icon.append(`<p class=\"business-card-para\">Confrigurable Invoicing \/ Document Printing</p>`);
                    break;
            case 4:
                    icon.append(`<i class=\"material-icons\">notifications_active</i>`);
                    icon.append(`<p class=\"business-card-para\">Email \/ SMS</p>`);
                    break;
            case 5:
                    icon.append(`<i class=\"material-icons\">accessibility</i>`);
                    icon.append(`<p class=\"business-card-para\">Enquiry Management</p>`);
                    break;
            case 6:
                    icon.append(`<i class=\"material-icons\">call</i>`);
                    icon.append(`<p class=\"business-card-para\">Customer Support Management</p>`);
                    break;
            case 7:
                    icon.append(`<i class=\"material-icons\">map</i>`);
                    icon.append(`<p class=\"business-card-para\">Multi-Branch \/ Location Management</p>`);
                    break;
            case 8:
                    icon.append(`<i class=\"material-icons\">pie_chart</i>`);
                    icon.append(`<p class=\"business-card-para\">MIS Reports & Analysis</p>`);
                    break;
            case 9:
                    icon.append(`<i class=\"material-icons\">done_all</i>`);
                    icon.append(`<p class=\"business-card-para\">Checks and Controls</p>`);
                    break;
            case 10:
                    icon.append(`<i class=\"material-icons\">sync</i>`);
                    icon.append(`<p class=\"business-card-para\">Payroll Management</p>`);
                    break;
            case 11:
                    icon.append(`<i class=\"material-icons\">print</i>`);
                    icon.append(`<p class=\"business-card-para\">Print</p>`);
                    break;

        }
    }
}

function createBusinessCards()
{
    var division = $('#business-segments');
    division.empty();
    for(var i = 0; i < 8; i++)
    {
        division.append(`<div class=\"mdl-card mdl-shadow--2dp business-card fooReveal5\" id=\"business-card-`+i+`\" style=\"min-height: 0px; margin:0px;\"></div>`);
    }
    drawBusinessCards();
}

function drawBusinessCards()
{
    for(var i = 0; i < 8; i++)
    {
        var card = $('#business-card-' + i);
        switch(i)
        {
            case 0:
                $('#business-card-' + i).css('background-color','#212121');
                card.append(`<div class=\"business-card-margin\"></div>`);
                card = card.children();
                card.append(`<p class=\"business-card-white business-card-text\">General Accounting</p>`);
                break;
            case 1:
                $('#business-card-' + i).css('background-color','#424242');
                card.append(`<div class=\"business-card-margin\"></div>`);
                card = card.children();
                card.append(`<p class=\"business-card-white business-card-text\">Textile</p>`);
                break;
            case 2:
                $('#business-card-' + i).css('background-color','#616161');
                card.append(`<div class=\"business-card-margin\"></div>`);
                card = card.children();
                card.append(`<p class=\"business-card-white business-card-text\">Finance</p>`);
                break;
            case 3:
                $('#business-card-' + i).css('background-color','#757575');
                card.append(`<div class=\"business-card-margin\"></div>`);
                card = card.children();
                card.append(`<p class=\"business-card-white business-card-text\">Ad Agencies</p>`);
                break;
            case 4:
                $('#business-card-' + i).css('background-color','#9E9E9E');
                card.append(`<div class=\"business-card-margin\"></div>`);
                card = card.children();
                card.append(`<p class=\"business-card-black business-card-text\">Merchants</p>`);
                break;
            case 5:
                $('#business-card-' + i).css('background-color','#BDBDBD');
                card.append(`<div class=\"business-card-margin\"></div>`);
                card = card.children();
                card.append(`<p class=\"business-card-black business-card-text\">Chemical Traders & Manufacturers</p>`);
                break;
            case 6:
                $('#business-card-' + i).css('background-color','#E0E0E0');
                card.append(`<div class=\"business-card-margin\"></div>`);
                card = card.children();
                card.append(`<p class=\"business-card-black business-card-text\">Vehicle Service Centers</p>`);
                break;
            case 7:
                $('#business-card-' + i).css('background-color','#EEEEEE');
                card.append(`<div class=\"business-card-margin\"></div>`);
                card = card.children();
                card.append(`<p class=\"business-card-black business-card-text\">Diamond Traders & Manufacturers</p>`);
                break;
        }
    }
}

function dependentOnSize()
{
    $('.product-card-height').css('width', '75%');

    $('.service-card').css('width',$(window).width()/2 - 10);
    $('#service-left-card').css('margin-left',$(window).width() - $('#service-left-card').width());

    $('#video').css('height',$(window).height() - 65);
    $('#video').css('width',$(window).width())

    if (/*$(window).height() >= 768 && */$(window).width() >= 840)
    {
        $('h1').css("font-size","60px");
        $('.header').css('font-size','35px');
        $('.header').css('margin-top','20px');

        $('#busy-text').css('font-size','25px');
        $('#busy-text').css('margin-top','25px');
        $('.para').css('font-size','20px');
        $('.para').css('margin','13px');

        $('.material-icons').css('font-size','80px');

        $('.business-card-para').css('font-size','22px');// Feature Card
        $('.business-card-para').css('margin-top','20px');// Feature Card

        $('.gen-text').css('font-size','23px');
        $('.gen-text').css('margin-top','20px');

        $('.about-us-card').css('height','175px');

        $('.mdl-navigation__link').css('padding','2px 20px 0px 0px');
        $('.navigation-links').css('font-size','14px');

        $('.product-card-height').css('height','250px');

        $('.feature-card').css('width', ($(window).width()/6) - 10);

        $('.business-card').css('width',$(window).width()/8);
        $('.business-card').css('margin', '0px');

        $('.business-card-text').css('font-size',);
    }
    //Tablet size
    else if (/*$(window).height() >= 660 && */$(window).width() >= 440)
    {
        $('h1').css("font-size","35px");
        $('.header').css('font-size','20px');
        $('.header').css('margin-top','10px');

        $('#busy-text').css('font-size','12px');
        $('.para').css('font-size','12px');
        $('.para').css('margin','5px');

        $('.material-icons').css('font-size','60px');

        $('.business-card-para').css('font-size','17px');// Feature Card
        $('.business-card-para').css('margin-top','2px');// Feature Card

        $('.gen-text').css('font-size','18px');
        $('.gen-text').css('margin-top','12px');

        $('.about-us-card').css('height','120px');

        $('.mdl-navigation__link').css('padding','2px 8px 0px 0px');
        $('.navigation-links').css('font-size','12px');

        $('.product-card-height').css('height','200px');

        $('.feature-card').css('width', '100px');
        $('.feature-card').css('height', $('.feature-card').css('width'));

        $('.feature-card').css('width', ($(window).width()/4) - 10);

        $('.business-card').css('width',$(window).width()/4);
        $('.business-card').css('margin', '0px');
    }
    //Mobile size
    else
    {
        $('.product-card-height').css('width', '100%');

        $('h1').css("font-size","25px");
        $('.header').css('font-size','14px');
        $('.header').css('margin-top','0px');

        $('#busy-text').css('font-size','10px');
        $('.para').css('font-size','8px');
        $('.para').css('margin','1px');

        $('.material-icons').css('font-size','50px');

        $('.business-card-para').css('font-size','15px');// Feature Card
        $('.business-card-para').css('margin-top','0px');// Feature Card

        $('.gen-text').css('font-size','12px');
        $('.gen-text').css('margin-top','5px');

        $('.about-us-card').css('height','30px');

        $('.mdl-navigation__link').css('padding','2px 3px 0px 0px');
        $('.navigation-links').css('font-size','10px');

        $('.product-card-height').css('height','170px');

        $('.feature-card').css('width', '75px');

        $('.feature-card').css('width', $(window).width()/2 - 10);
        $('.feature-card').css('height', $('.feature-card').css('width'));

        $('.business-card').css('width',$(window).width()/2 );
        $('.business-card').css('margin', '0px');
    }

    var product_image = $('#1').children().first().children();
    product_image.css('height',$('.product-card-height').css('height'));

    var product_image = $('#2').children().first().children();
    product_image.css('height',$('.product-card-height').css('height'));

    var product_image = $('#3').children().first().children();
    product_image.css('height',$('.product-card-height').css('height'));

    $('.top-margin').css('margin-top',parseInt($('.about-us-card').css('height'))/2 - (parseInt($('#aboutUs_header').css('font-size')) + parseInt($('.gen-text').css('font-size'))));

    $('#about_us').css('margin-top',$(window).height()/2 - 65 - parseInt($('#about_us').css('height'))/2); //Align vertically and horizontally at center

    $('.feature-card').css('height', $('.feature-card').css('width'));
    $('.feature-card').css('margin', '5px');

    $('.material-icons').css('margin-top',parseInt($('.feature-card').css('height'))/2 - parseInt($('.material-icons').css('font-size')));

    $('.business-card').css('height', $('.business-card').css('width'));
    for (var i = 0; i < 8; i++)
    {
            $('#business-card-' + i).children().first().css('margin-top',parseInt($('#business-card-' + i).css('height'))/2 - parseInt($('.business-card-text').css('font-size')));
    }
    $('.service-card-para').css('margin-top',parseInt($('.service-card').css('height'))/2 - parseInt($('.service-card-para').css('font-size')));
}
