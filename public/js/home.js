'use strict';
$(document).ready(() => {
  // adds 'opaque' class to the navbar.
  //

  $(window).on('scroll', function(){
    let s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

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
      if (scrollPercent > 66) {
        $('#step-three').addClass('fadeInLeft');
        $('#step-three').addClass('showme');
      } else {
        $('#step-three').removeClass('fadeInLeft');
        $('#step-three').removeClass('showme');
      }
  })

});
