$(document).ready(() => {
  'use strict';

  // Get the initial width of the screen and set the navbar text accordingly
  $(window).width() < 500 ? $(".navbar-brand").text(`BWWMC?`) : $(".navbar-brand").text(`Bow Wow Where's My Chow?`);

  //Continuously monitors window width upon resizing and adjusts
  //the navbar text accordingly
  $(window).resize(function() {
    $(window).width() < 500 ? $(".navbar-brand").text(`BWWMC?`) : $(".navbar-brand").text(`Bow Wow Where's My Chow?`);
  });

  $(window).on('scroll', function(){
    //Gets the current scroll pixel value, the current document height,
    //and the full window height
    let s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    //Converts scroll value to percentage so that animations are consistent
    //on all devices
    let scrollPercent = (s / (d - c)) * 100;

      //Turns the navbar solid white after scrolling begins
      if (scrollPercent > 3) {
        $('nav').addClass('opaque')
      } else {
        $('nav').removeClass('opaque')
      }

      //Fades in the How Does It Work header
      if (scrollPercent > 4) {
        $('.howItWorks').addClass('fadeInDown')
        $('.howItWorks').addClass('showme')
      } else {
        $('.howItWorks').removeClass('showme');
        $('.howItWorks').removeClass('fadeInDown')
      }

      //Fades in the first step in the process
      if (scrollPercent > 7) {
        $('#step-one').addClass('fadeInLeft');
        $('#step-one').addClass('showme');
      } else {
        $('#step-one').removeClass('fadeInLeft');
        $('#step-one').removeClass('showme');
      }

      //Fades in the second step in the process
      if (scrollPercent > 37) {
        $('#step-two').addClass('fadeInRight');
        $('#step-two').addClass('showme');
      } else {
        $('#step-two').removeClass('fadeInRight');
        $('#step-two').removeClass('showme');
      }

      //Fades in the third step in the process
      if (scrollPercent > 65) {
        $('#step-three').addClass('fadeInLeft');
        $('#step-three').addClass('showme');
      } else {
        $('#step-three').removeClass('fadeInLeft');
        $('#step-three').removeClass('showme');
      }
  })

});
