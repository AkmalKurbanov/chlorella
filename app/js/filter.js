$('.filter-js').on('click', function () {
  $('.container.filter__flex-wrap').addClass('filter');
  $('body').addClass('layout no-scroll');
});
$('.sorting-js').on('click', function () {
  $('.container.filter__flex-wrap').addClass('sorting');
  $('body').addClass('layout no-scroll');
});


jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.filter__flex-wrap, .menu');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.removeClass('filter sorting');
      $('body').removeClass('layout no-scroll')
    }
  });
});