$('.popup__close').on('click', function () {
  $(this).parents('.popup-wrap').removeClass('open');
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.popup');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('.popup-wrap').removeClass('open');
    }
  });
});