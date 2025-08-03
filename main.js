console.log("main.js в работе");
const burgerMenu = document.querySelector(".burger-menu");
const burgerButton = document.querySelector(".burger-button");

if (burgerMenu && burgerButton) {
  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("active");

    if (burgerButton.classList.contains("active")) {
      burgerMenu.classList.add("active");
    } else {
      burgerMenu.classList.remove("active");
    }
  });
}

const swiperMain = new Swiper(".support-section__swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 80,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1240: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 80,
    },
    850: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 80,
    },
  },
});

const swiperNews = new Swiper(".news-section__swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 80,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1240: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    850: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});

const swiperPartners = new Swiper(".partners-section__swiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const supportCont = document.querySelector("#support-tabs");

if (supportCont) {
  const supportTabButtons = Array.from(supportCont.children);
  const supportTabItems = Array.from(
    document.querySelector(".tabs-sec").children
  );

  supportTabButtons.forEach((el) => {
    el.addEventListener("click", () => {
      console.log(el);
      if (!el.classList.contains("tab-button--active")) {
        const active = document.querySelector(".tab-button--active");
        const tabIndex = supportTabButtons.indexOf(el);

        if (active) {
          active.classList.remove("tab-button--active");
        }
        el.classList.add("tab-button--active");

        supportTabItems.forEach((tab) => {
          tab.style.display = "none";
        });
        supportTabItems[tabIndex].style.display = "flex";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".documents__tab-button");

  const reportSections = document.querySelectorAll(
    ".documents__flex-container"
  );

  tabButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const year = this.getAttribute("data-year");

      // РЈРґР°Р»СЏРµРј Р°РєС‚РёРІРЅС‹Р№ РєР»Р°СЃСЃ Сѓ РІСЃРµС…
      tabButtons.forEach((btn) =>
        btn.classList.remove("documents__tab-button--active")
      );
      this.classList.add("documents__tab-button--active");

      // РџРѕРєР°Р·С‹РІР°РµРј РЅСѓР¶РЅСѓСЋ РіСЂСѓРїРїСѓ РѕС‚С‡РµС‚РѕРІ
      reportSections.forEach((section) => {
        if (section.getAttribute("data-year") === year) {
          section.style.display = "flex";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});
