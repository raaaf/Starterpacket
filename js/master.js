// PRELOADER
$(window).load(function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({
  	'overflow': 'visible'
  });
});

// JQUERY STUFF
$(document).ready(function($) {

// SMOOTH SCROLL TO ANCHOR
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top -87
      }, 1000);
      return false;
    }
  }
});

});