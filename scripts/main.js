import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const stepsSlider = document.querySelector(".steps-slider");

if (stepsSlider) {
  const swiperSteps = new Swiper(stepsSlider, {
    loop: true,
    draggable: true,
    speed: 1000,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: ".steps-slider__pagination",
      clickable: true,
    },

    a11y: {
      enabled: true,
      prevSlideMessage: "Предыдущий шаг",
      nextSlideMessage: "Следующий шаг",
      firstSlideMessage: "Это первый шаг",
      lastSlideMessage: "Это последний шаг",
      paginationBulletMessage: "Перейти к шагу {{index}}",
    },

    pagination: {
      el: ".steps-slider__pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      renderBullet: function (index, className) {
        return `<button
                  class="${className}"
                  type="button"
                  aria-label="Перейти к шагу ${index + 1}"
                  role="tab"
                  aria-selected="${index === 0 ? "true" : "false"}">
                  <span class="sr-only">Шаг ${index + 1}</span>
                </button>`;
      },
    },

    on: {
      slideChange: function () {
        const bullets = document.querySelectorAll(".swiper-pagination-bullet");
        bullets.forEach((bullet, index) => {
          bullet.setAttribute(
            "aria-selected",
            index === this.activeIndex ? "true" : "false"
          );
        });
      },
    },
  });
}

const pricesSlider = document.querySelector(".prices-grid");

if (pricesSlider) {
  const swiperPrices = new Swiper(pricesSlider, {
    breakpoints: {
      1780: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      990: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 20,
      },
      570: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
    },
  });
}

const menuButton = document.querySelector(".header__nav-button");
const header = document.querySelector(".header");

menuButton.addEventListener("click", (event) => {
  header.classList.toggle("header--opened");
});