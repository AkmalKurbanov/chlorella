$(document).ready(function () {
  $('.js-calculator-plus').click(function () {

    let input = $(this).prev('.js-calculator-count');

    input.val(parseInt(input.val()) + 1);
  });

  $('.js-calculator-minus').click(function () {
    let input = $(this).next('.js-calculator-count');

    if (input.val() > 1) {
      input.val(parseInt(input.val()) - 1);
    }
  });
});