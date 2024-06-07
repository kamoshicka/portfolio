'use strict';



// カーソル
// カーソル
// カーソル
gsap.registerPlugin();

let cursor = $(".cursor"),
      follower = $(".follower"),
      cWidth = 8, 
      fWidth = 40, 
      delay = 1, 
      posX = 0, 
      posY = 0; 

let mouseX = 0, 
    mouseY = 0;

// マウスの動きに応じたアニメーション
gsap.ticker.add(() => {
  posX += (mouseX - posX) / delay;
  posY += (mouseY - posY) / delay;
  
  gsap.set(follower, {
    x: posX - (fWidth / 2),
    y: posY - (fWidth / 2)
  });
  
  gsap.set(cursor, {
    x: mouseX - (cWidth / 2),
    y: mouseY - (cWidth / 2)
  });
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active-cursor");
    follower.addClass("is-active-cursor");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active-cursor");
    follower.removeClass("is-active-cursor");
  }
});

$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active-cursor");
    follower.addClass("is-active-cursor");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active-cursor");
    follower.removeClass("is-active-cursor");
  },
  "click": function() {
    // カーソルのサイズを2倍に拡大
    gsap.to(cursor, {
      duration: 1, 
      scale: 2, 
      ease: "power1.inOut", 
      onComplete: function() {
        // サイズ拡大アニメーション完了後に実行
        gsap.to(cursor, {
          duration: 1, 
          scale: 1,
          ease: "power1.inOut"
        });
      }
    });

    // フォロワーのサイズを2倍に拡大
    gsap.to(follower, {
      duration: .3,
      scale: 2, 
      ease: "power1.inOut",
      onComplete: function() {
        // サイズ拡大アニメーション完了後に実行
        gsap.to(follower, {
          duration: .3,
          scale: 1,
          ease: "power1.inOut" 
        });
      }
    });
  }
});


// skillsアニメーション
$(window).on('scroll resize', function() {
  $('.blurTrigger').each(function() {
    var elemPos = $(this).offset().top - 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('blur');
    } else {
      $(this).removeClass('blur');
    }
  });
});

