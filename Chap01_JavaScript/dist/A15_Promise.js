"use strict";

function sleep(ms) {
  var wakeUp = Date.now() + ms;

  while (Date.now() < wakeUp) {}
}

;

function normalFunc() {
  console.log('start');
  sleep(1000);
  console.log('end');
}

normalFunc();
console.log('');