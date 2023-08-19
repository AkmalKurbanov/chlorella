$('.question-js').on('click', function () {
  $(this).toggleClass('open');
  $(this).parents('.faq__item').find('.faq__answer').slideToggle();
});