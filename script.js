'use strict';

window.onload = function() {
  const MINIMUM_DISPLAY_TIME = 1500;
  const loadTime = Date.now();
  const spinner = document.getElementById('loading');

  setTimeout(function() {
    spinner.classList.add('loaded');
  }, Math.max(0, MINIMUM_DISPLAY_TIME - (Date.now() - loadTime)));
}