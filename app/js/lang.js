$('.lang').on('click', function () {
  $(this).toggleClass('open')
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.lang__dropdown, .lang');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.removeClass('open');
    }
  });
});