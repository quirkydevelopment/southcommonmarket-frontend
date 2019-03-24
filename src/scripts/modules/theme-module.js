AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function() {
    // private stuff

    // var swiper = new Swiper('.swiper-container', {
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    // });
  };

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

  var homeCarousel = function() {
    if ($('.section-awesome-vendors .slick-container').length) {
      $('.section-awesome-vendors .slick-container').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.section-awesome-vendors .slick-prev'),
        nextArrow: $('.section-awesome-vendors .slick-next'),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
        ]
      });
    }

    if ($('.section-awesome-vendors .slick-container').length) {
      $('.section-testimonials .slick-container').slick({
        dots: false,
        infinite: false,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.section-testimonials .slick-prev'),
        nextArrow: $('.section-testimonials .slick-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
        ]
      });
    }    
  }

  var tabActive = function() {
    if ($('.dashboard-tab').length) {
      var tabItem =  $('.dashboard-tab .tab-item');
      
      tabItem.each(function() {
        $(this).find('.tab-link').click(function() {
          tabItem.removeClass('active');
          setTimeout(() => {
            $(this).parent().addClass('active');
          }, 100);
        })
      });
    }
  }

  var uploadImage = function() {
    var reader = new FileReader();
    reader.onload = function (e) {
        $('#category-image').attr('src', e.target.result);
    }
    
    function readURL(input) {
      if (input.files && input.files[0]) {
          reader.readAsDataURL(input.files[0]);
      }
    }
    
    $("#image-upload").change(function(){
        readURL(this);
    });
  }

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _privateMethod();

    $(window).on('load', function (event) {
      headerScroll();
      headerHamburger();
      scrollNextSection();
      scrollTop();
      homeCarousel();
      tabActive();
      uploadImage();
    });
  
    $(window).scroll(function (event) {
      headerScroll();
      homeCarousel();
    });
  };

  return {
    init: init
  };
})();
