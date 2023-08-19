import Swiper from "swiper/bundle";

var swiper = new Swiper(".slider-js", {
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".prev-btn",
    nextEl: ".next-btn"
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".slider-products-js", {
  slidesPerView: 4,
  spaceBetween: 35,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});




var swiper = new Swiper('.certificate-js', {
  slidesPerView: 6,
  //  slidesPerGroup: 6,
  spaceBetween: 30,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  }
});

var swiper = new Swiper('.partners-js', {
  slidesPerView: 6,
  //  slidesPerGroup: 6,
  spaceBetween: 30,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  }
});