/*
@author Diyorbek Olimov https://diyorbek.me
*/
(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#main-nav').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if (window.matchMedia("(max-width:991px)").matches) {
          $('.nav-menu').hide();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (!$('.subpage-nav').length) {
      if (scroll > 200) {
        $("#main-nav").slideDown(700);
      } else {
        $("#main-nav").slideUp(700);
      }
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    var strings = $('.typed-items').text();
    strings = $('.typed-items').data('typed-person') + ',' + strings;
    strings = strings.split(',');

    typed.typed({
      strings: strings,
      typeSpeed: 100,
      loop: true,
    });
  });

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 4
      }
    }
  });

  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  $(".fa-angle-down").click(function () {
    let more = $(this).parent().next();
    more.slideToggle("slow");
    $(this).parent().css({
      "border-bottom-left-radius": "5px",
      "border-bottom-right-radius": "5px"
    });
  })

  $(".click").click(function () {

      let item0 = $(".dots")[0].children;
      let item1 = $(".dots")[1].children;
      let item2 = $(".dots")[2].children;
      let item3 = $(".dots")[3].children;
      let item4 = $(".dots")[4].children;
      let item5 = $('.dots')[5].children;
      let item6 = $('.dots')[6].children;
      let item7 = $(".dots")[7].children;
      let item8 = $(".dots")[8].children;
      let item9 = $(".dots")[9].children;
      let item10 = $(".dots")[10].children;
      let item11 = $(".dots")[11].children;
      let item12 = $('.dots')[12].children;
      let item13 = $('.dots')[13].children;

    let t1 = 0, t2 = 1500, t3 = 3000, t4 = 4500, t5 = 6000, t6 = 7200, t7 = 8400;
    for (let i = 0; i < 5; i++) {
      t1 += 300;
      setTimeout(function () {item0[i].style.backgroundColor = "#17a2b8";},t1)
      setTimeout(function () {item7[i].style.backgroundColor = "#17a2b8";},t1)
      t2 += 300;
      setTimeout(function () {item1[i].style.backgroundColor = "#17a2b8";},t2)
      setTimeout(function () {item8[i].style.backgroundColor = "#17a2b8";},t2)
      t3 += 300;
      setTimeout(function () {item2[i].style.backgroundColor = "#17a2b8";},t3)
    }
    t3 = 3000;
    for (let i = 0; i < 4; i++) {
      t3 += 300;
      setTimeout(function () {item9[i].style.backgroundColor = "#17a2b8";},t3)
      t4 += 300;
      setTimeout(function () {item3[i].style.backgroundColor = "#17a2b8";},t4)
      setTimeout(function () {item10[i].style.backgroundColor = "#17a2b8";},t4)
    }
    for (let i = 0; i < 3; i++) {
      t5 += 400;
      setTimeout(function () {item4[i].style.backgroundColor = "#17a2b8";},t5)
      setTimeout(function () {item11[i].style.backgroundColor = "#17a2b8";},t5)
      t6 += 400;
      setTimeout(function () {item5[i].style.backgroundColor = "#17a2b8";},t6)
      setTimeout(function () {item12[i].style.backgroundColor = "#17a2b8";},t6)
      t7 += 400;
      setTimeout(function () {item6[i].style.backgroundColor = "#17a2b8";},t7)
      setTimeout(function () {item13[i].style.backgroundColor = "#17a2b8";},t7)
    }
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back').fadeIn('slow');} else {$('.back').fadeOut('slow');}
  });

  $('.back').click(function() {$('html, body').animate({scrollTop: 0}, 2000, 'easeInOutExpo');return false;});
})(jQuery);
