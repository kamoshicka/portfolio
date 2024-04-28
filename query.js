'use strict';

// タブ
// タブ
// タブ
function GethashID(hashIDName) {
  if (hashIDName) {
      $('#label-container label').find('a').each(function () {
          var idName = $(this).attr('href');
          if (idName === hashIDName) {
              var parentElm = $(this).parent();
              $('#label-container label').removeClass("active");
              $(parentElm).addClass("active");
              $(".area").removeClass("is-active");
              $(hashIDName).addClass("is-active");
          }
      });
  }
}

$(document).ready(function() {
  // タブをクリックしたら
  $('#label-container label a').on('click', function() {
      var idName = $(this).attr('href');
      GethashID(idName);
      return false; // aタグを無効にする
  });

  // ページが読み込まれたらすぐに動かす
  $('#label-container label:first-of-type').addClass("active");
  $('.area:first-of-type').addClass("is-active");
  var hashName = location.hash;
  GethashID(hashName);
});


function setupTabs() {
  // 共通の関数を使用してタブの切り替えを管理
  function activateTab(sectionId) {
      $(sectionId + ' a').on('click', function(e) {
          e.preventDefault();
          var idName = $(this).attr('href');
          GethashID(idName);

          // 他のすべてのareaを非アクティブにし、選択されたareaをアクティブに
          $('.area').removeClass('is-active');
          $(idName).addClass('is-active');

          // 他のすべてのタブを非アクティブにし、選択されたタブをアクティブに
          $(sectionId + ' label').removeClass('active');
          $(this).parent().addClass('active');
      });
  }

  // 'Works' セクションと 'Skill' セクションにタブ機能を設定
  activateTab('#works');
  activateTab('#skill');

  // ページ読み込み時の初期状態設定
  $('#label-container label:first-of-type').addClass("active");
  $('.area:first-of-type').addClass("is-active");
  var hashName = location.hash;
  GethashID(hashName);
}

$(document).ready(function() {
  setupTabs();
});


// カーソル
// カーソル
// カーソル
gsap.registerPlugin();

let cursor = $(".cursor"),
      follower = $(".follower"),
      cWidth = 8, 
      fWidth = 40, 
      delay = 8, 
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
      duration: .6,
      scale: 2, 
      ease: "power1.inOut",
      onComplete: function() {
        // サイズ拡大アニメーション完了後に実行
        gsap.to(follower, {
          duration: .6,
          scale: 1,
          ease: "power1.inOut" 
        });
      }
    });
  }
});

// 文字パラ
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");
    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// This function initializes text animations on load
function initTextAnimation() {
  $(".eachTextAnime").each(function() {
    var element = $(this);
    var html = element.html();
    var lines = html.split('<br>');
    var newHtml = lines.map(function(line) {
      var spans = line.split('').map(function(char, index) {
        var delay = index * 0.1;  // Delay increases by 0.1s for each character
        return '<span style="animation-delay:' + delay + 's;">' + char + '</span>';
      }).join('');
      return spans;
    }).join('<br>');  // Rejoin lines with <br> tags
    element.html(newHtml);
  });
}

// Run animations on scroll
$(window).scroll(EachTextAnimeControl);

// Initialize animations on load
$(window).on('load', function() {
  initTextAnimation();
  EachTextAnimeControl();
});
