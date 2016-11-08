$(document).ready(function(){
  var nav = $('nav');

$(window).on('scroll', () => {     //es6 thx to steven
  let winScroll = $(this).scrollTop();
  winScroll > $('.logo').offset().top + $('.logo').outerHeight(true) ? nav.addClass("fixed-nav") : nav.removeClass('fixed-nav');
});





});
