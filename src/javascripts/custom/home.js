import '../global/jquery-parcel';
import '../global/slick';
// import '../global/burger';
import './header';

// hero mouseover function
// $(".section-hero").mouseenter(function(){
//   console.log('inside');
//   $('.section-hero .hero-image').mousemove(function(e){
//     var pageX = e.pageX - ($(window).width() / 2);
//     var pageY = e.pageY - ($(window).height() / 2);

//     console.log(e.pageX);
//     console.log(e.pageY);
//     console.log('new page x' + pageX);
//     console.log('new page y' + pageY);
//     $(".hero-image").css({'left' : pageX , 'top' : pageY});
//   });
// }).mouseleave(function(){
//   setTimeout(function(){
    
//     console.log('outside');
// }, 500);
// });

// slick carousel functions
$(document).ready(function(){
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
});

console.log('Home Script');