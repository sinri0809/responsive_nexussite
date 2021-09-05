'use strict';

window.onload = function () {
  // 시작하자마자 바로 동작한다
  $('.story-box-tit').addClass('story-box-move');

  $(window).scroll(function () {



    // 웹 브라우저 오른쪽의 스크롤 바의 위치를 파악한다. 
    var scY = $(window).scrollTop();

    if (scY > 50) {
      $('.story-box-top').addClass('story-box-right-to-mid');
      $('.story-box-1').addClass('story-box-left-to-mid');
    }
    if (scY >= 550) {
      $('.story-box-2').addClass('story-box-right-to-mid');
      $('.story-box-3').addClass('story-box-left-to-mid');
    }
    if (scY >= 1580) {
      $('.story-box-4').addClass('story-box-right-to-mid');
      $('.story-box-5').addClass('story-box-left-to-mid');
    }
    if (scY >= 2100) {
      $('.story-box-6').addClass('story-box-right-to-mid');
      $('.story-box-bottom').addClass('story-box-left-to-mid');
      $('.story-button-more').addClass('story-box-right-to-mid');
    }


    // console.log(scY);
    if (scY >= 500) {
      $('.header').addClass('header-focus');
    } else if (scY < 450) {
        $('.header').removeClass('header-focus');
      // $('.header-focus').css('animation-name', 'slideup');
      // if (scY < 100) {
      //   $('.header-focus').css('animation-name', 'slidedown');
      //   $('.header').removeClass('header-focus');
      // }
    } 

  });

  var swp_visual = new Swiper('.swp-visual', {
    direction: "vertical",
    loop: true,
    effect: 'fade',
    speed: 1000,
    crossEffect: { 
      crossFade: true,
    },
    autoplay : {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swp-visual-pag",
      clickable: true,
    }
  });

  $('.swp-visual-pag').on('mouseover', function () {
    swp_visual.autoplay.stop();
  });
  $('.swp-visual-pag').on('mouseleave', function () {
    swp_visual.autoplay.start();
  });
  // var swp_visual_txt = $('.swp-visual .page-container img');
  // swp_visual.on('slideChange'.function(){

  // });

  
  var aside_menu = $('.header nav ul');
  $('.mi-apps').click(function () {
    // aside_menu.toggleClass('nav-open');
    aside_menu.css('right', '0px');
  });
  $('.mi-c').click(function () {
    aside_menu.css('right', '-250px');
    
  });

  // resizing
  $(window).resize(function () {
    var winW = $(window).width();
    if (winW > 1024) {
      // close menu

    } 
  });
}