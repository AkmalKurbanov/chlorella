$(document).on('click', '.select-js', function () {
  $(this).toggleClass('open');
}).on('click', '.select__dropdown', function () {
  return false;
});
$('.select__option').on('click', function () {
  let optionVal = $(this).attr('data-value');
  $(this).parents('.select-js').find('.select__selected input').val(optionVal);
  $(this).parents('.select-js').find('.select__selected span').text(optionVal);
});