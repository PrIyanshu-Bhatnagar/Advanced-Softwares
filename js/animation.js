function goToByScroll(id){
      // Scroll
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

$("#about_us_link").click(function(e) {
      // Prevent a page reload when a link is pressed
    e.preventDefault();
      // Call the scroll function
    goToByScroll('navigateToAboutUs');
});

$("#main_grid_link").click(function(e) {
      // Prevent a page reload when a link is pressed
    e.preventDefault();
      // Call the scroll function
    goToByScroll('main_grid');
});

$("#service_grid_link").click(function(e) {
      // Prevent a page reload when a link is pressed
    e.preventDefault();
      // Call the scroll function
    goToByScroll('ser');
});

$("#contact_us_link").click(function(e) {
      // Prevent a page reload when a link is pressed
    e.preventDefault();
      // Call the scroll function
    goToByScroll('navigateToContactUs');
});

window.sr = ScrollReveal({reset:true, mobile: true, duration:1000, distance:'400px', origin: 'right',easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});

sr.reveal("#about_us",{origin: 'top'});
sr.reveal(".feature-card",{container:'#feature-grid'},50);
