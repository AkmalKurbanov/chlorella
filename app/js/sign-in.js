let headerHeight = $('.header').outerHeight();
let footerHeight = $('.footer').outerHeight();
let windowHeight = $(window).outerHeight();
let totalHeight = headerHeight + footerHeight


$(".sign-in").css('min-height', 'calc(100vh - ' + totalHeight + 'px)');
console.log(totalHeight)