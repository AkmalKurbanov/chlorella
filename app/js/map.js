let containerPosition = $('.container').offset();
$('.contacts__col_contacts').css('margin-left', containerPosition.left + 15);

$(window).on("resize", function () {
  let containerPosition = $('.container').offset();
  $('.contacts__col_contacts').css('margin-left', containerPosition.left + 15);
});