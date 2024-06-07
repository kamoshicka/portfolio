'use strict';

window.onload = function() {
  const MINIMUM_DISPLAY_TIME = 700;
  const loadTime = Date.now();
  const spinner = document.getElementById('loading');

  setTimeout(function() {
    spinner.classList.add('loaded');
  }, Math.max(0, MINIMUM_DISPLAY_TIME - (Date.now() - loadTime)));
}

const slimes = document.querySelectorAll('.slime');

const keyframes = {
  borderRadius: [
    '20% 50% 70%/50% 40% 50%',
    '50% 20% 50%/40% 40% 60%',
    '50% 40% 40%/40% 50% 80%',
    '50% 50% 20%/40% 40% 60%',
  ],
};
const options = {
  duration: 3500,
  direction: 'alternate',
  iterations: Infinity,
};

slimes.forEach(slime => {
  slime.animate(keyframes, options);
});

// works-index
document.addEventListener('DOMContentLoaded', function() {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function onScroll() {
    document.querySelectorAll('.line').forEach(function(line) {
      if (isElementInViewport(line)) {
        line.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // 初期ロード時にもチェック
});