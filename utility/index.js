export const noxfolioUtilits = {
  animaiton() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  stickyNav() {
    window.addEventListener("scroll", () => {
      let offset = window.scrollY;
      const sticky = document.querySelectorAll(".main-header");
      for (let i = 0; i < sticky.length; i++) {
        const stick = sticky[i];
        if (stick) {
          if (offset > 10) {
            stick.classList.add("fixed-header");
          } else {
            stick.classList.remove("fixed-header");
          }
        }
      }
    });
  },
  preloader() {
    var preloader = document.querySelector(".preloader");
    if (preloader) {
      setTimeout(function () {
        preloader.style.transition = "opacity 0.5s";
        preloader.style.opacity = "0";
        setTimeout(function () {
          preloader.style.display = "none";
        }, 500);
      }, 200);
    }
  },
  scrollTop() {
    let scrollUp = document.querySelector(".scroll-top"),
      lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let st = window.scrollY;
      if (st > 110) {
        scrollUp.style.display = "flex";
      } else {
        scrollUp.style.display = "none";
      }
    });
  },
};
