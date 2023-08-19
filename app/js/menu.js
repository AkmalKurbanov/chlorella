$('.hamburger').on('click', function () {
  $('.menu').toggleClass('--open');
  $('.wrapper').toggleClass('--open');
  $(this).toggleClass('--open');
  $('body').addClass('no-scroll');
});



$('.menu__close').on('click', function () {
  $('.menu').removeClass('--open');
  $('body').removeClass('no-scroll');
  $('.wrapper').removeClass('--open');
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.menu');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.removeClass('--open');
      $('body').removeClass('no-scroll');
      $('.wrapper').removeClass('--open');
    }
  });
});

