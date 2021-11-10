'use strict';
window.onload = function () {
  // first box
  $('.story-box-tit').addClass('story-box-move');
  // another box
  let box_lst = $('.story > .page-container').find('div');
  let box_lst_len = box_lst.length;

  // used waypoint.js
  function moveBox(_obj, moveto) {
    let sentence = `story-box-${moveto}-to-mid`;
    _obj.waypoint((dir) => {
      if (dir == 'down') {
        _obj.addClass(sentence);
      }
    },{
      offset: "100%"
    });
  }


  
  for (let i=0; i < box_lst_len; i++){
    let temp = box_lst.eq(i);
    if (i % 2 == 0) {
      moveBox(temp, 'right');
    } else {
      moveBox(temp, 'left')
    }
  }
  // visual-story box controll

  window.addEventListener('scroll', () =>{
    let sc_y = window.scrollY;
    if(sc_y >= 500){
      $('.header').addClass('header-focus');
    }else if(sc_y < 400){
      $('.header').removeClass('header-focus');
    }
  });

  let swp_visual = new Swiper('.swp-visual', {
    simulateTouch: false,
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
  // controll swiper
  $('.swp-visual-pag').on('mouseover', function () {
    swp_visual.autoplay.stop();
  });
  $('.swp-visual-pag').on('mouseleave', function () {
    swp_visual.autoplay.start();
  });

  // right aside toggle menu - responsive
  const aside_menu = $('.header nav ul');
  $('.mi-apps').click(function () {
    aside_menu.css('transform', 'translateX(-100%)');
  });
  $('.mi-c').click(function () {
    aside_menu.css('transform', 'translateX(0%)');
  });

  // when resizing window, aside menu is disappearing
  window.addEventListener('resize', function (e) {
    let win_width = window.innerWidth;
    if (win_width > 1024) {
      aside_menu.css('transform', 'translateX(0%)');
    }
  });
}