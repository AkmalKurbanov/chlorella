var headerHeight = $('#header').outerHeight() / 1.5;

$(window).scroll(function () {
  var sticky = $('.header_sticky'),
    scroll = $(window).scrollTop();
  if (scroll >= headerHeight) {
    sticky.addClass('sticky-on');
  }
  else sticky.removeClass('sticky-on');
});