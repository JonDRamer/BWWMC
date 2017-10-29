'use strict';
$(document).ready(() => {
  // adds 'opaque' class to the navbar.
  //

  $(window).on('scroll', function(){
    let s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    let scrollPercent = (s / (d - c)) * 100;


      if (scrollPercent > 3) {
        $('nav').addClass('opaque')
      } else {
        $('nav').removeClass('opaque')
      }

      if (scrollPercent > 4) {
        $('h2').addClass('fadeInDown')
        $('h2').addClass('showme')
      }

      // const scroll = $(window).scrollTop();

      if (scrollPercent > 7) {
        $('#step-one').addClass('fadeInLeft')
        $('#step-one').addClass('showme')
      }
      // const scroll = $(window).scrollTop();

      if (scrollPercent > 37) {
        $('#step-two').addClass('fadeInRight')
        $('#step-two').addClass('showme')
      }
      // const scroll = $(window).scrollTop();

      if (scrollPercent > 66) {
        $('#step-three').addClass('fadeInLeft')
        $('#step-three').addClass('showme')
      }

    console.clear();
    console.log("Scroll Percentage: ", scrollPercent);
  })

});
