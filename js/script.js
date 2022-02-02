'use strict';
/**
 * *ver 2022.02.02
 * 수정 내용
 * 1. 변수명 정리 및 제이쿼리 -> 바닐라 자바스크립트 & WEB api
 * @boxAnimation : waypoint없이도 구현할 수 있도록 하기 
 */


window.onload = function () {

  const boxAnimation = () => {
    // First Box
    document.querySelector('.story-box-tit').classList.add('story-box-move');
    
    // Another Boxs
    const boxList = document.querySelectorAll('.story > .page-container > div');
    const boxListLength = boxList.length;
    
    directDefine();
    
    window.addEventListener('', (event) => {
      const boxs = document.querySelector('.story > .page-container');
      console.log(boxs.clientHeight);
      console.log(boxs.scrollHeight);
      // console.log(boxs.style.height);
    });

  }
  
  // navigation bar event 
  window.addEventListener('scroll', () =>{
    const header = document.querySelector("header");
    const scY = window.scrollY;

    if(scY >= 500){
      header.classList.add('header-focus');
    }else if(scY < 400){
      header.classList.remove('header-focus');
    }

  });

  // when resizing window, aside menu is disappearing
  window.addEventListener('resize', function (e) {
    let win_width = window.innerWidth;
    if (win_width > 1024) {
      aside_menu.css('transform', 'translateX(0%)');
    }
  });

  
  const box_lst = $('.story > .page-container').find('div');
  const box_lst_len = box_lst.length;
  
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

}