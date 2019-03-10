// header function
$(document).ready(function() {
  $(window).on('load', function (event) {
    headerScroll();
    headerHamburger();
    scrollNextSection();
    scrollTop();
  });

  $(window).scroll(function (event) {
    headerScroll();
  });

  var headerScroll = function() {
    var scrolledHeight = $(window).scrollTop();
    
    if (scrolledHeight  > 50) {
      $('.header').addClass('header-scrolled');
      $('.scroll-top-trigger').addClass('active');
    }

    else {
      $('.header').removeClass('header-scrolled');
      $('.scroll-top-trigger').removeClass('active');
    }
  }

  var headerHamburger = function() {
    $('.js-navbar-open').click(function() {
      $('.navbar-menu').addClass('active');
    });

    $('.js-navbar-close').click(function() {
      $('.navbar-menu').removeClass('active');
    });
  }

  var scrollNextSection = function() {
    $('.js-scroll-next').click(function () {
      var scrollTarget = $(this.getAttribute('href'));

      if( scrollTarget.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: scrollTarget.offset().top
        }, 1000);
      }
    });
  }

  var scrollTop = function() {
    $('.js-scroll-top').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
  }
});

console.log('header script');