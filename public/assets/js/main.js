/* ============ Main JS ============ */

(function ($) {
  // "use strict";idebar-trigger

  // console.log("APLE");

  var windowOn = $(window);

  // 01. PreLoader Js
  $(window).on("load", function (event) {
    // console.log("THIS IN window");
    $(".preloader").delay(500).fadeOut(500);
  });
  $(document).ready(function () {
    // console.log("THIS IN doc");
    var header = $(".header"),
      stickyHeader = $(".primary-header");

    function menuSticky(w) {
      if (w.matches) {
        $(window).on("scroll", function () {
          var scroll = $(window).scrollTop();
          if (scroll >= 110) {
            stickyHeader.addClass("fixed");
          } else {
            stickyHeader.removeClass("fixed");
          }
        });
        if ($(".header").length > 0) {
          var headerHeight = document.querySelector(".header"),
            setHeaderHeight = headerHeight.offsetHeight;
          header.each(function () {
            $(this).css({
              height: setHeaderHeight + "px",
            });
          });
        }
      }
    }

    // console.log("1");
    var minWidth = window.matchMedia("(min-width: 992px)");
    if (header.hasClass("sticky-active")) {
      menuSticky(minWidth);
    }
    // console.log("2");

    //Mobile Menu Js
    // $(".mobile-menu-items").meanmenu({
    //   meanMenuContainer: ".side-menu-wrap",
    //   meanScreenWidth: "991",
    //   meanMenuCloseSize: "30px",
    //   meanRemoveAttrs: true,
    //   meanExpand: ['<i class="fa-solid fa-caret-down"></i>'],
    // });

    // // Mobile Sidemenu
    // $(".mobile-side-menu-toggle").on("click", function () {
    //   $(".mobile-side-menu, .mobile-side-menu-overlay").toggleClass("is-open");
    // });

    // $(".mobile-side-menu-close, .mobile-side-menu-overlay").on(
    //   "click",
    //   function () {
    //     $(".mobile-side-menu, .mobile-side-menu-overlay").removeClass(
    //       "is-open"
    //     );
    //   }
    // );

    // Mobile Sidemenu
    $(function () {
      // console.log("sidme menu functions");

      $("#mobile-side-menu-toggle").on("click", function () {
        // console.log("TOGGLE SIDE MENU")
        $(".mobile-side-menu, .mobile-side-menu-overlay").toggleClass(
          "is-open"
        );
      });

      $("#mobile-side-menu-close, #mobile-side-menu-overlay").on(
        "click",
        function () {
          // console.log("TOGGLE SIDE MENU CLOSE")

          $(".mobile-side-menu, .mobile-side-menu-overlay").removeClass(
            "is-open"
          );
        }
      );
    });

    // Popup Search Box
    $(function () {
      // console.log("pop search functions");

      $("#popup-search-box").removeClass("toggled");

      $(".dl-search-icon").on("click", function (e) {
        e.stopPropagation();
        $("#popup-search-box").toggleClass("toggled");
        $("#popup-search").focus();
      });

      $("#popup-search-box input").on("click", function (e) {
        e.stopPropagation();
      });

      $("#popup-search-box, body").on("click", function () {
        $("#popup-search-box").removeClass("toggled");
      });
    });

    // Popup Sidebox
    function sideBox() {
      $("body").removeClass("open-sidebar");
      $(document).on("click", ".sidebar-trigger", function (e) {
        // console.log("TOGGLE SIDEBOX")

        e.preventDefault();
        $("body").toggleClass("open-sidebar");
      });
      $(document).on(
        "click",
        ".sidebar-trigger.close, #sidebar-overlay",
        function (e) {
          // console.log("TOGGLE SIDEBOX CLOSE")
          e.preventDefault();
          $("body.open-sidebar").removeClass("open-sidebar");
        }
      );
    }

    // console.log("before calling sidebox functions");

    sideBox();
    // console.log("after calling sidebox functions");

    // // Venobox Video
    new VenoBox({
      selector: ".video-popup, .img-popup",
      bgcolor: "transparent",
      numeration: true,
      infinigall: true,
      spinner: "plane",
    });

    // console.log("after calling VenBox functions");

    // Data Background
    $("[data-background").each(function () {
      $(this).css(
        "background-image",
        "url( " + $(this).attr("data-background") + "  )"
      );
    });

    // console.log("before calling odometer");

    /* Odometer */
    $(".odometer").waypoint(
      function () {
        // console.log("CLICKING ODOMETER");
        var odo = $(".odometer");
        // console.log("ODO ", { odo });
        odo.each(function () {
          var countNumber = $(this).attr("data-count");
          // console.log("countNumber ", countNumber);
          $(this).html(countNumber);
        });
      },
      {
        offset: "80%",
        triggerOnce: true,
      }
    );

    // console.log("after calling odometer");

    // Wow JS Active
    new WOW().init();

    // console.log("after calling WOW init");

    // Nice Select Js
    $("select").niceSelect();

    //Pie Chart
    $(".piechart").waypoint(
      function () {
        $(".piechart").easyPieChart({
          scaleColor: "transparent",
          lineWidth: 5,
          lineCap: "round",
          trackColor: "#ddd",
          size: 110,
          rotate: 0,
          animate: 1000,
          onStep: function (value) {
            this.$el.find("span").text(Math.round(value));
          },
          onStop: function (value, to) {
            this.$el.find("span").text(Math.round(to));
          },
        });
      },
      {
        offset: "80%",
        triggerOnce: true,
      }
    );

    // Custom Cursor
    $("body").append('<div class="mt-cursor"></div>');
    var cursor = $(".mt-cursor"),
      linksCursor = $("a, .swiper-nav, button, .cursor-effect"),
      crossCursor = $(".cross-cursor");

    $(window).on("mousemove", function (e) {
      cursor.css({
        transform:
          "translate(" + (e.clientX - 15) + "px," + (e.clientY - 15) + "px)",
        visibility: "inherit",
      });
    });

    // Isotope
    $(".filter-items").imagesLoaded(function () {
      // Add isotope click function
      $(".project-filter-list .filter-item").on("click", function () {
        $(".project-filter-list .filter-item").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".filter-items").isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });

      $(".filter-items").isotope({
        itemSelector: ".single-item",
        percentPosition: true,
      });
    });

    // Price range slider
    var priceRange = $("#price-range"),
      priceOutput = $("#price-output span");
    priceOutput.html(priceRange.val());
    priceRange.on("change input", function () {
      priceOutput.html($(this).val());
    });

    // Sponsor Carousel
    var swiperSponsor = new Swiper(".sponsor-carousel", {
      slidesPerView: 45,
      spaceBetween: 50,
      slidesPerGroup: 1,
      loop: true,
      autoplay: true,
      grabCursor: true,
      speed: 400,
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 25,
        },
        767: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 1,
        },
      },
    });

    // Project Carousel
    var swiperProject = new Swiper(".project-carousel", {
      slidesPerView: 3,
      spaceBetween: 25,
      slidesPerGroup: 1,
      loop: true,
      autoplay: true,
      grabCursor: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      speed: 600,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".project-section .swiper-prev",
        prevEl: ".project-section .swiper-next",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 25,
        },
        767: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      },
    });

    // Testi Carousel
    var swiperTesti = new Swiper(".testi-carousel", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      autoplay: true,
      speed: 600,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Gallary Carousel
    var swiperProject = new Swiper(".gallary-carousel", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      autoplay: true,
      grabCursor: true,
      speed: 800,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // console.log("manage sctoll to top");

    // Scroll To Top
    var scrollTop = $("#scrollup");
    $(window).on("scroll", function () {
      // console.log("ON SCROLL")
      var topPos = $(this).scrollTop();
      if (topPos > 100) {
        $("#scrollup").removeClass("hide");
        $("#scrollup").addClass("show");
      } else {
        $("#scrollup").removeClass("show");
        $("#scrollup").addClass("hide");
      }
    });

    $(scrollTop).on("click", function () {
      // console.log("CLICKING SCROLL");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        0
      );
      return false;
    });

    // console.log("last of manage sctoll to top");
  });
})(jQuery);
