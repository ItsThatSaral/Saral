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


  });
})(jQuery);
