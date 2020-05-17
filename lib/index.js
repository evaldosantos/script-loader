"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scriptLoader = scriptLoader;

function scriptLoader(scripts) {
  return new Promise(function (resolve) {
    var script = document.createElement('script');
    script.src = scripts;
    document.body.appendChild(script);

    script.onload = function () {
      resolve();
    };
  });
}