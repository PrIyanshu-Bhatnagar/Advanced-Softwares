    window.sr = ScrollReveal({ reset: true });

var aboutUsText = "\"We are in this business since 1992\""

$(document).ready(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    dependentOnSize();
    sr.reveal('.reveal', { duration: 2500, origin: 'right', container: '#about_us_scroll', distance: '200px'});
    sr.reveal('.reveal', { duration: 2500,origin: 'right', container: '#main_grid', distance: '200px'});
    sr.reveal('.reveal', { duration: 2500,origin: 'left', container: '#services_grid'});

});

$( window ).resize(function()
{
    aboutDivison();
    serviceDivison();
    mainDivison();
    cardWidthAdjustment();
    dependentOnSize();
    //sr.reveal('.reveal', { duration: 500,origin: 'bottom', container: '#about_us_scroll'});
    //sr.reveal('.reveal', { duration: 500,origin: 'bottom', container: '#services_grid'});

});

function aboutDivison()
{
    var aboutDiv = $("#about_us");
    aboutDiv.empty();
    aboutDiv.append(`<div class=\"mdl-cell mdl-cell--12-col\" align=\"center\" id=\"about_us_scroll\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp reveal\" style=\"background: rgba(0,0,0,0.12); min-height: 175px\">
                            <div class=\"mdl-card__supporting-text top-margin reveal\">
                                <h1 align=\"center\" class=\"\">About Us</h1>
                                <p align=\"center\" class=\"\">`+ aboutUsText+ `</p>
                            </div>
                        </div>
                    </div>`);
}

function mainDivison()
{
    var mainDiv = $("#main_grid");
    mainDiv.empty();
    mainDiv.append(`<div class=\"mdl-cell mdl-cell--12-col reveal\" >
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp reveal\" style=\"background: rgba(0,0,0,0.12)\">
                            <div class=\"mdl-card__supporting-text reveal\" style=\"width:100%; padding:0px\">
                                <h1 align=\"center\" class=\"top-margin reveal\">Products</h1>
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
    object.append(`<div class=\"mdl-cell mdl-cell--12-col animation-element\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\" style=\"background: rgba(0,0,0,0.12)\">
                            <div class=\"mdl-card__supporting-text\" style=\"width: 100%\">
                                <div class=\"mdl-grid\" id=\"` +id + `\">
                                </div>
                            </div>
                        </div>
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

    product();

}

function product()
{
    var busyCard = $('#1');
    busyCard.append(`<div class=\"demo-card-image mdl-card mdl-shadow--2dp reveal\" style=\"width: 50%; height: 100%\">
                        <div class=\"mdl-card__title mdl-card--expand reveal\"></div>
                        <div class=\"mdl-card__actions reveal\">
                            <span class=\"demo-card-image__filename reveal\">BUSY</span>
                        </div>
                    </div>`);
    busyCard.append(`<div style=\"width:50%\">
                        <h2 id=\"header1\" align=\"center\" class=\"reveal\">Busy</h2>
                        <p id="busy-text" align=\"center\" class=\"reveal\"> </p>
                    </div>`);

    var reddix = $('#2');
    reddix.append(`<div style=\"width:50%\" class=\"reveal\">
                        <h2 id=\"header2\" align=\"center\" class=\"reveal\">Reddix</h2>
                        <p id="reddix-text" align=\"center\" class=\"reveal\" > </p>
                    </div>`);
    reddix.append(`<div class=\"demo-card-image mdl-card mdl-shadow--2dp\" style=\"width: 45%; height: 100%;\">
                        <div class=\"mdl-card__title mdl-card--expand\"></div>
                        <div class=\"mdl-card__actions\">
                            <span class=\"demo-card-image__filename\">REDDIX</span>
                        </div>
                   </div>`);

    var rely = $('#3');
    rely.append(`<div class=\"demo-card-image mdl-card mdl-shadow--2dp\" style=\"width: 50%; height: 100%\">
                    <div class=\"mdl-card__title mdl-card--expand\"></div>
                    <div class=\"mdl-card__actions\">
                        <span class=\"demo-card-image__filename\">RELY</span>
                    </div>
                </div>`);
    rely.append(`<div style=\"width:50%\">
                    <h2 id=\"header3\" align=\"center\">Rely</h2>
                    <p id="rely-text" align=\"center\"> </p>
                </div>`);
}

function serviceDivison() {
    var serDiv = $('#services_grid');
    serDiv.empty();
    serDiv.append(`<div class=\"mdl-cell mdl-cell--12-col reveal\" id=\"service_grid_scroll\">
                        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp reveal\" style=\"background: rgba(0,0,0,0.12)\">
                            <div class=\"mdl-card__supporting-text reveal\" style=\"width:100%; padding:0px\">
                                <h1 align=\"center\" class=\"top-margin reveal\">Services</h1>
                                <p align=\"center\" class=\"reveal\">`+aboutUsText+`</p>
                            </div>
                        </div>
                  </div>`);
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
        $('.demo-card-image__filename').css('font-size','14px');
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
        $('.demo-card-image__filename').css('font-size','12px');
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
        $('.demo-card-image__filename').css('font-size','8px');
    }
}

var busyCount = 0, reddixCount = 0, relyCount = 0;

window.setInterval(function(){
    var para = $('#busy-text');
    if(busyCount == 0){
        para.fadeOut(0);
        para.text("\"Financial Accounting (Multi-Currency)\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 1) {
        para.fadeOut(0);
        para.text("\"Inventory Management (Multi-location)\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 2) {
        para.fadeOut(0);
        para.text("\"Production / Bill of Material\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 3) {
        para.fadeOut(0);
        para.text("\"Sales / Purchase Quotations\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 4) {
        para.fadeOut(0);
        para.text("\"Sales / Purchase Order Processing\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 5) {
        para.fadeOut(0);
        para.text("\"Fully User-configurable Invoicing\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 6) {
        para.fadeOut(0);
        para.text("\"User-configurable Documents / Letters\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 7) {
        para.fadeOut(0);
        para.text("\"User-configurable Columns in Reports\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 8) {
        para.fadeOut(0);
        para.text("\"CST / VAT Reports (State-specific)\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 9) {
        para.fadeOut(0);
        para.text("\"Service Tax & TDS\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 10) {
        para.fadeOut(0);
        para.text("\"Mfg / Trading Excise Registers\"");
        para.fadeIn(500);
        busyCount += 1;
    }
    else if (busyCount == 11) {
        para.fadeOut(0);
        para.text("\"MIS Reports & Analysis \"");
        para.fadeIn(500);
        busyCount = 0;
    }
}, 3000);

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
