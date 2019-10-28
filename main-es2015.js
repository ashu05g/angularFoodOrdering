(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!--\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n-->\n<!-- Toolbar -->\n<!--<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div>\n\n<div class=\"content\" role=\"main\">\n-->\n  <!-- Highlight Card -->\n  <!--<div class=\"card highlight-card card-small\">\n\n    <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n          <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n          <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ title }} app is running!</span>\n\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n      <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n    </svg>\n\n  </div>\n-->\n  <!-- Resources -->\n  <!--<h2>Resources</h2>\n  <p>Here are some links to help you get started:</p>\n\n  <div class=\"card-container\">\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\n\n      <span>Learn Angular</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\n\n      <span>CLI Documentation</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\n\n      <span>Angular Blog</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n  </div>\n-->\n  <!-- Next Steps -->\n  <!--<h2>Next Steps</h2>\n  <p>What do you want to do next with your app?</p>\n\n  <input type=\"hidden\" #selection>\n\n  <div class=\"card-container\">\n    <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>New Component</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Angular Material</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Add Dependency</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Run and Watch Tests</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Build for Production</span>\n    </div>\n  </div>\n-->\n  <!-- Terminal -->\n  <!--<div class=\"terminal\" [ngSwitch]=\"selection.value\">\n      <pre *ngSwitchDefault>ng generate component xyz</pre>\n      <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\n      <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\n      <pre *ngSwitchCase=\"'test'\">ng test</pre>\n      <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\n  </div>\n-->\n  <!-- Links -->\n  <!--<div class=\"card-container\">\n    <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\n      <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\n        <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\n        <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\n        <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\n        <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\n        <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\n        <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\n          <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\n          <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\n          <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\n          <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\n          <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <defs>\n          <clipPath id=\"clip-path\">\n            <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\n          </clipPath>\n        </defs>\n        <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\n          <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\n          <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\n          <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\n            <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\n              <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\n                <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\n              </g>\n            </g>\n          </g>\n          <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\n          <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\n          <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\n          <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\n        <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\n        <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\n          <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\n          <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\n            <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\n              <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </a>\n  </div>\n-->\n  <!-- Footer -->\n  <!--<footer>\n      Love Angular?&nbsp;\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\n        <div class=\"github-star-badge\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\n          Star\n        </div>\n      </a>\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n      </a>\n  </footer>\n\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n  </svg>\n\n</div>\n-->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bodytag\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"login-form\">\n    \n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\" method=\"post\">\n                    <h2 class=\"text-center\">LOGIN</h2>       \n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email-ID\" required formControlName=\"email\">\n                        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n\n                            <div *ngIf=\"email.errors.required\">\n                               Email id is required.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required formControlName=\"password\">\n                        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n\n                            <div *ngIf=\"password.errors.required\">\n                               Password id is required.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group text-danger\" *ngIf=\"isnotvalid\">*Invalid Username or Password</div>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-warning btn-block loginButton\" [disabled]=\"!loginForm.valid\"> Log in</button>\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-warning btn-block loginButton\" (click)=\"onRegister()\">Create A New Account</button>\n                    </div>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Header Section Starts-->\n<header>\n    <div class=\"container-fluid\" >\n      <div class=\"row\" style=\"background-color:#ffc107\">\n        <div class=\"col-md-12\">\n          <p class=\"tagline\">take a break from kitchen, to enjoy our delicious services</p>\n        </div>\n      </div>\n    </div>\n  </header>\n  <!--Header Section Ends-->\n  <!--Navigation Section Starts-->\n  <nav class=\"navbar navbar-expand-xl sticky-top navbar-dark\" style=\"background-color:#000000;\">\n    <div class=\"container-fluid\">\n                  \n          <div class=\"navbar-header\">\n              <a class=\"navbar-brand sitename\" href=\"#\" style=\"color:#f5b505\">\n              <img src=\"/assets/img/logo1.png\" alt=\"logo\" height=\"52\" width=\"72\" style=\"padding:0px;margin:0px;\">\n            Orderista</a>\n          </div>\n                  \n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n              <span class=\"navbar-toggler-icon\"> <i class=\"fa fa-navicon\"></i></span>\n          </button>\n  \n                  \n  \n          <div class=\"collapse navbar-collapse\" style=\"width:100%;\" id=\"collapsibleNavbar\">\n              <ul class=\"navbar-nav mr-auto\">\n              \n                <li><a href=\"#Home\" class=\"navpage\">Home</a></li>\n                <li><a href=\"#OurService\" class=\"navpage\">Our Services</a></li>\n                <li><a href=\"#OurGoals\" class=\"navpage\">Our Goals</a></li>\n                <li><a href=\"#AboutUs\" class=\"navpage\">About Us</a></li>\n                <li><a href=\"#AboutUs\" class=\"navpage\">Contact Us</a></li>\n              </ul>\n                  \n              <ul class=\"navbar-nav\">\n                  <li class=\"listbutton\">\n                    <button id=\"signinBtn\" type=\"button\" class=\"btn btn-outline-warning\" (click)=\"onSignin()\">SIGN-IN</button>\n                    <button id=\"loginBtn\" type=\"button\" class=\"btn btn-outline-warning\" (click)=\"onLogin()\">LOGIN</button>\n                  </li>\n              </ul>\n        </div>\n              \n      </div>\n  </nav>\n  <!--Navigation Section Ends-->\n\n  <!--Slide Show-->\n<div id=\"foodslideshow\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <!-- Indicators -->\n  <ul class=\"carousel-indicators\">\n  <li data-target=\"#foodslideshow\" data-slide-to=\"0\" class=\"active\"></li>\n  <li data-target=\"#foodslideshow\" data-slide-to=\"1\"></li>\n  <li data-target=\"#foodslideshow\" data-slide-to=\"2\"></li>\n  <li data-target=\"#foodslideshow\" data-slide-to=\"3\"></li>\n  </ul>\n  \n  <!-- The slideshow -->\n  <div class=\"carousel-inner\">\n  <div class=\"carousel-item active\">\n    <img src=\"assets/img/food1.jpg\" width=\"100%\" style=\"height: 37vw\"> \n    <div class=\"carousel-caption\" id=\"food-caption\" style=\"background-color:rgba(0,0,0,0.7);\">\n        <h1 style=\"margin: auto;\">Quality Food Delivered</h1>\n        <p>The food delivered by our company looks like it comes from restaurant's kitchen just a second before.The restaurants and hotels connected with us prepares delisious, higine and quality food with great & expert chefs...</p>\n     </div>  \n  </div>\n  <div class=\"carousel-item\">\n    <img src=\"assets/img/food2.jpg\" width=\"100%\" style=\"height: 37vw\">\n    <div class=\"carousel-caption\" id=\"food-caption\" style=\"background-color:rgba(0,0,0,0.7);\">\n      <h1 style=\"margin: auto;\">Quality Food Delivered</h1>\n      <p>The food delivered by our company looks like it comes from restaurant's kitchen just a second before.The restaurants and hotels connected with us prepares delisious, higine and quality food with great & expert chefs...</p>\n    </div>\n  </div>\n  <div class=\"carousel-item\">\n    <img src=\"assets/img/food3.jpg\" width=\"100%\" style=\"height: 37vw\">\n    <div class=\"carousel-caption\" id=\"food-caption\" style=\"background-color:rgba(0,0,0,0.7);\">\n      <h1 style=\"margin: auto;\">Quality Food Delivered</h1>\n      <p>The food delivered by our company looks like it comes from restaurant's kitchen just a second before.The restaurants and hotels connected with us prepares delisious, higine and quality food with great & expert chefs...</p>\n    </div>\n  </div>\n  <div class=\"carousel-item\">\n    <img src=\"assets/img/food4.jpg\" width=\"100%\" style=\"height: 37vw\">\n    <div class=\"carousel-caption\" id=\"food-caption\" style=\"background-color:rgba(0,0,0,0.7);\">\n      <h1 style=\"margin: auto;\">Quality Food Delivered</h1>\n      <p>The food delivered by our company looks like it comes from restaurant's kitchen just a second before.The restaurants and hotels connected with us prepares delisious, higine and quality food with great & expert chefs...</p>\n    </div>\n  </div>\n  </div>\n  \n  <!-- Left and right controls -->\n  <a class=\"carousel-control-prev\" href=\"#foodslideshow\" data-slide=\"prev\">\n  <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#foodslideshow\" data-slide=\"next\">\n  <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\" id=Home>\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8 about\">\n      <div style=\"text-align: center;\"><img src=\"assets/img/decor1.png\" alt=\"decor\" height=\"10px\" width=\"100px\"></div>\n      <p class=\"welcome\"> Welcome to Orderista!</p>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-1\" ></div>\n    <div class=\"col-md-10 \" style=\"font-family:'Dancing Script', cursive;\">\n      <p>Orderista belives that break is needed in any kind of work , even for cooking. So take a break from your kitchen and oder your favrouit from from yoy favrouit restaurant.\n        Orderista is transforming the way food move around cities by enabling anyone to have anything delivered on-demand. Our revolutionary Urban Logistics platform connects customers with local couriers who can deliver anything from any restaurant in minutes. We encourage people to fill your stomach with no waiting, and empower businesses through our API to offer delivery. </p>\n    </div>\n    <div class=\"col-md-1\"></div>\n  </div>\n  <br><br>\n  <div id=\"OurService\"  style=\"border-color:darkorange;border-style: double; border-width: 3px;\">\n    \n    <div style=\"justify-content: center; display:flex;font-family: 'Courgette', cursive;font-size: 40px\"><p>Our Services</p></div>\n    \n    <div class=\"row\" style=\"justify-content: center; display:flex;\">\n     <div class=\"col-md-1\"></div>\n      <div class=\"col-md-2\">\n          <div  style=\"width: 10vm;border-width: 0px\">\n              <img src=\"assets/img/fastdelivery.png\" alt=\"Card image cap\" height=\"50%\" width=\"50%\">\n             \n          </div>\n      </div>\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-2\">\n          <div  style=\"width: 10vw; padding-left: 25px;\">\n              <img  src=\"assets/img/restaurant.jpg\" alt=\"Card image cap\" height=\"50%\" width=\"50%\">\n          </div>\n      </div>\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-2\">\n          <div  style=\"width: 10vw;\">\n              <img  src=\"assets/img/gift.png\" alt=\"Card image cap\" height=\"50%\" width=\"50%\">\n          </div>\n      </div>\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-2\">\n          <div  style=\"width: 11vw;border-width: 0px\">\n              <img  src=\"assets/img/hotandfresh.png\" alt=\"Card image cap\" height=\"50%\" width=\"50%\">\n          </div>\n      </div>\n      \n    </div>\n    <div class=\"row\" style=\"justify-content: center; display:flex;\">\n        <div class=\"col-md-1\"></div>\n         <div class=\"col-md-2\">\n             <div  style=\"width: 10vm;border-width: 0px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\">Fast Delvery</div>\n         </div>\n         <div class=\"col-md-1\"></div>\n         <div class=\"col-md-2\">\n            <div  style=\"width: 10vm;border-width: 0px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\">Best Restaurants</div>\n         </div>\n         <div class=\"col-md-1\"></div>\n         <div class=\"col-md-2\">\n            <div  style=\"width: 10vm;padding-left: 5px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\">Gifting</div>\n         </div>\n         <div class=\"col-md-1\"></div>\n         <div class=\"col-md-2\">\n            <div  style=\"width: 10vm;border-width: 0px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\">Hot And Fresh</div>\n         </div>\n         \n       </div>\n  </div>\n<br><br>\n\n<div id=\"OurGoals\" style=\"border-color:darkorange;border-style: double; border-width: 3px;\">\n      \n  <div class=\"row\" >\n      <div class=\"card mb-3\" style=\"left: 100px;top:10px ;border-width:0px; max-width: 700px;\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-md-4\">\n              <img src=\"assets/img/delivery.jpg\" class=\"card-img\" height=\"150px\" width=\"90px\">\n            </div>\n            <div class=\"col-md-8\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\" style=\"font-family: 'Courgette', cursive;font-size: 40px\">Our Goals</h5>\n                <p class=\"card-text\">Our Goal is to provide:<br>-Food Quality.-Employee Development.-Reasonable.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n  </div>\n</div>\n</div>\n<br><br>\n\n<!--Footer-->\n<footer class=\"site-footer\">\n    <div id=\"aboutUs\" class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h6>About Us</h6>\n          <p class=\"text-justify\">Orderista belives that break is needed in any kind of work , even for cooking. So take a break from your kitchen and oder your favrouit from from yoy favrouit restaurant.</p>\n        </div>\n\n        <div class=\"col-md-3\"></div>\n\n        <div class=\"col-xs-6\">\n          <h6>Contact Us</h6>\n            <div><img src=\"assets/img/call2.png\" height=\"40px\" width=\"40px\"><span style=\"padding-left: 10px;\">+91 9924106383, +91 7016375925</span></div>\n            <div><img src=\"assets/img/email.png\" height=\"40px\" width=\"40px\"><span style=\"padding-left: 10px;\">orderistaFoods@gmail.com</span></div>\n        </div>\n      </div>\n      <hr>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <p class=\"copyright-text\">Copyright &copy; 2019 All Rights Reserved by \n            <a href=\"#\">Orderista</a>.\n          </p>\n        </div>\n\n        <div class=\"col-md-4\">\n          <ul class=\"social-icons\">\n            <li><a class=\"facebook fa fa-facebook\" href=\"#\"></a></li>\n            <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li><a class=\"dribbble\" href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n            <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>   \n          </ul>\n        </div>\n      </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-user/manage-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-user/manage-user.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bodytag\">\n        <br><br>\n        <div class=\"signup-form bodytag1\">\n            <form [formGroup]=\"updateForm\" (ngSubmit)=\"onUpdate()\" method=\"post\">\n                <h2>Update Info</h2>\n                <p>change data of Feilds you want to modify!</p>\n                <div class=\"text-primary form-group\" *ngIf=\"exists\">*Updated</div>\n                <hr>\n                <div class=\"row\">\n                    <div id=\"info1\" class=\"col-md-6\">\n                            \n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"first_name\" placeholder=\"First Name\" required>\n                            <div *ngIf=\"first_name.invalid && (first_name.dirty || first_name.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"first_name.errors.required\">\n                                   First Name is required.\n                                </div>\n                                <div *ngIf=\"first_name.errors.minlength\">\n                                   First Name must be at least 3 characters long.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"last_name\" placeholder=\"Last Name\" required>\n                            <div *ngIf=\"last_name.invalid && (last_name.dirty || last_name.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"last_name.errors.required\">\n                                   Last Name is required.\n                                </div>\n                                <div *ngIf=\"last_name.errors.minlength\">\n                                   Last Name must be at least 3 characters long.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input disabled type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"password.errors.required\">\n                                   Password is required.\n                                </div>\n                                <div *ngIf=\"password.errors.minlength\">\n                                   Password must be at least 6 characters long.\n                                </div>\n                                <div *ngIf=\"password.errors.maxlength\">\n                                    Password must be at most 15 characters long.\n                                 </div>\n                                 <div *ngIf=\"password.errors.pattern\">\n                                    Password must have atleat one character and one digit.\n                                 </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <input type=\"tel\" class=\"form-control\" formControlName=\"contact_num\" placeholder=\"Contact Number\" required>\n                            <div *ngIf=\"contact_num.invalid && (contact_num.dirty || contact_num.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"contact_num.errors.required\">\n                                   Contact number is required.\n                                </div>\n                                <div *ngIf=\"contact_num.errors.pattern\">\n                                   Contact Number not valid.\n                                </div>\n                            </div>\n                        </div> \n                    </div>\n                    <div id=\"info2\" class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"address1\" placeholder=\"Address line 1\" required>\n                            <div *ngIf=\"address1.invalid && (address1.dirty || address1.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"address1.errors.required\">  \n                                   Address Line 1 is required.\n                                </div>\n                            </div>        \t\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"landmark\" placeholder=\"Landmark\" required>\n                            <div *ngIf=\"landmark.invalid && (landmark.dirty || landmark.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"landmark.errors.required\">  \n                                   Landmark is required.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"area\" placeholder=\"Area\" required>\n                            <div *ngIf=\"area.invalid && (area.dirty || area.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"area.errors.required\">  \n                                   Area is required.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"City\" required>\n                            <div *ngIf=\"city.invalid && (city.dirty || city.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"city.errors.required\">  \n                                   City is required.\n                                </div>\n                            </div>\n                        </div>\t\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"state\" placeholder=\"State\" required>\n                            <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"state.errors.required\">  \n                                   State is required.\n                                </div>\n                            </div>\n                        </div> \n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"pincode\" placeholder=\"Pincode\" required>\n                            <div *ngIf=\"pincode.invalid && (pincode.dirty || pincode.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"pincode.errors.required\">  \n                                   Pincode is required.\n                                </div>\n                                <div *ngIf=\"pincode.errors.pattern\">\n                                    Pincode is invalid\n                                </div>\n                            </div>\n                        </div> \n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-warning btn-block signinButton\" >Update</button>\n                        </div>        \n                    </div>\n                </div>\n                <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <button type=\"submit\" class=\"btn btn-warning btn-block signinButton\" (click)=\"onBack()\">Back</button>\n                            </div>        \n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <button type=\"submit\" class=\"btn btn-warning btn-block signinButton\" (click)=\"onDelete()\">Delete Account</button>\n                                </div>        \n                            </div>\n                        </div>\n            </form>\n        </div>\n        </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"bodytag\">\n        <br><br>\n        <div class=\"signup-form bodytag1\">\n            <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSignin()\" method=\"post\">\n                <h2>Sign Up</h2>\n                <p>Please fill in this form to create an account!</p>\n                <div class=\"text-danger form-group\" *ngIf=\"exists\">*User with same emailid is already registered..</div>\n                <hr>\n                <div class=\"row\">\n                    <div id=\"info1\" class=\"col-md-6\">\n                            \n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"first_name\" placeholder=\"First Name\" required>\n                            <div *ngIf=\"first_name.invalid && (first_name.dirty || first_name.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"first_name.errors.required\">\n                                   First Name is required.\n                                </div>\n                                <div *ngIf=\"first_name.errors.minlength\">\n                                   First Name must be at least 3 characters long.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"last_name\" placeholder=\"Last Name\" required>\n                            <div *ngIf=\"last_name.invalid && (last_name.dirty || last_name.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"last_name.errors.required\">\n                                   Last Name is required.\n                                </div>\n                                <div *ngIf=\"last_name.errors.minlength\">\n                                   Last Name must be at least 3 characters long.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required>\n                            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"email.errors.required\">\n                                   Email id is required.\n                                </div>\n                                <div *ngIf=\"email.errors.email\">\n                                   Email id not valid.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"password.errors.required\">\n                                   Password is required.\n                                </div>\n                                <div *ngIf=\"password.errors.minlength\">\n                                   Password must be at least 6 characters long.\n                                </div>\n                                <div *ngIf=\"password.errors.maxlength\">\n                                    Password must be at most 15 characters long.\n                                 </div>\n                                 <div *ngIf=\"password.errors.pattern\">\n                                    Password must have atleat one character and one digit.\n                                 </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" formControlName=\"confirm_password\" placeholder=\"Confirm Password\" required>\n                            <div *ngIf=\"confirm_password.invalid && (confirm_password.dirty || confirm_password.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"confirm_password.errors.required\">\n                                   Confirm Password is required.\n                                </div>\n                            </div>\n                            <!--<div *ngIf=\"signinForm.hasError('notSame')\">\n                                passwords not match\n                            </div>-->  \n                        </div>\t\n                        <div class=\"form-group\">\n                            <input type=\"tel\" class=\"form-control\" formControlName=\"contact_num\" placeholder=\"Contact Number\" required>\n                            <div *ngIf=\"contact_num.invalid && (contact_num.dirty || contact_num.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"contact_num.errors.required\">\n                                   Contact number is required.\n                                </div>\n                                <div *ngIf=\"contact_num.errors.pattern\">\n                                   Contact Number not valid.\n                                </div>\n                            </div>\n                        </div> \n                    </div>\n                    <div id=\"info2\" class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"address1\" placeholder=\"Address line 1\" required>\n                            <div *ngIf=\"address1.invalid && (address1.dirty || address1.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"address1.errors.required\">  \n                                   Address Line 1 is required.\n                                </div>\n                            </div>        \t\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"landmark\" placeholder=\"Landmark\" required>\n                            <div *ngIf=\"landmark.invalid && (landmark.dirty || landmark.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"landmark.errors.required\">  \n                                   Landmark is required.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"area\" placeholder=\"Area\" required>\n                            <div *ngIf=\"area.invalid && (area.dirty || area.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"area.errors.required\">  \n                                   Area is required.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"City\" required>\n                            <div *ngIf=\"city.invalid && (city.dirty || city.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"city.errors.required\">  \n                                   City is required.\n                                </div>\n                            </div>\n                        </div>\t\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"state\" placeholder=\"State\" required>\n                            <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"state.errors.required\">  \n                                   State is required.\n                                </div>\n                            </div>\n                        </div> \n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"pincode\" placeholder=\"Pincode\" required>\n                            <div *ngIf=\"pincode.invalid && (pincode.dirty || pincode.touched)\" class=\"alert alert-danger\">\n    \n                                <div *ngIf=\"pincode.errors.required\">  \n                                   Pincode is required.\n                                </div>\n                                <div *ngIf=\"pincode.errors.pattern\">\n                                    Pincode is invalid\n                                </div>\n                            </div>\n                        </div> \n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group text-danger\" *ngIf=\"exists\">*User with same emailid is already registered..</div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-warning btn-block signinButton\" [disabled]=\"!signinForm.valid\">SignIn</button>\n                        </div>        \n                    </div>\n                </div>\n                <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <button type=\"submit\" class=\"btn btn-warning btn-block signinButton\" (click)=\"onCancel()\">Cancel</button>\n                            </div>        \n                        </div>\n                    </div>\n            </form>\n            <div class=\"hint-text\">Already have an account? <a (click)=\"onLoginClick()\">Login here</a></div>\n        </div>\n        </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-home/user-home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-home/user-home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Header Section Starts-->\n<header >\n    <div class=\"container-fluid\" >\n        <div class=\"row\" style=\"background-color:#ffc107\">\n            <div class=\"col-md-12\">\n                <p class=\"tagline\">take a break from kitchen, to enjoy our delicious services</p>\n            </div>\n        </div>\n    </div>\n</header>\n<!--Header Section Ends-->\n  \n<!--Navigation Section Starts-->\n    <nav class=\"navbar navbar-expand-xl sticky-top navbar-dark\" style=\"background-color:#000000;\">\n        \n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand sitename\" href=\"#\" style=\"color:#f5b505\">\n                    <img src=\"assets/img/logo1.png\" alt=\"logo\" height=\"52\" width=\"72\" style=\"padding:0px;margin:0px;\">\n                    Orderista </a>\n            </div>\n      \n            <ul class=\"navbar-nav mr-auto\">\n                <button class=\"btn btn-warning hotelButton\" [hidden]=\"isOnMenu\" (click)=\"goToHotels()\">Back To View Hotels</button>\n            </ul>\n                      \n                <ul class=\"navbar-nav\">\n\n                    <div class=\"dropdown manage\">\n                        <button class=\"btn btn-warning\" [hidden]=\"isOnMenu\" [disabled]=\"isItemSelected\" (click)=\"onMakePayment()\">Make Payment</button>\n                        <button class=\"btn btn-warning dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Welcome {{userName}}\n                        <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu\">\n                            <li><a class=\"dropdown-item\" (click)=\"onManageClick()\">Modify Account</a></li>\n                            <li><a class=\"dropdown-item\" (click)=\"onLogoutClick()\">LogOut</a></li>\n                        </ul>\n                    </div> \n                </ul>\n                \n            <!--</div>-->\n        </div>\n        \n    </nav>\n    \n    \n        \n<!--Navigation Section Ends-->\n  \n<!--Search bar starts-->\n<div>\n    <img src=\"assets/img/food1.jpg\" width=\"100%\" height=\"480\"> \n</div>\n<div class=\"searchbar\">\n    <h3 style=\"text-align:center;\">Find Best restaurants near you</h3>\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <div class=\"btn-group\">\n                    <div class=\"form-group\">\n                        <select class=\"form-control bg-danger\" style=\"color:#fff\" (change)=\"changeInCity($event)\" id=\"sel1\">\n                            <option>Select City</option>\n                            <option>Nadiad</option>\n                            <option>Baroda</option>\n                            <option>Ahemdabad</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\"></div>\n        </div>\n</div>\n\n<div *ngIf=\"selectedCity && !hotelSelected && !isOrdered\" style=\"margin-bottom:25px;\">\n    <div class=\"container-fluid\">\n        <div *ngFor=\"let item of hotels\" class=\"row\" style=\"margin-top:10px;margin-bottom:10px;\">\n            <div class=\"col-md-12\">\n                <div class=\"hotel-link\" (click)=\"onHotelClick(item.hotelName)\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8\"><h1><p class=\"hotelName text-dark\">{{item.hotelName}}</p></h1></div>\n                        <div class=\"col-md-4\"><button class=\"btn btn-success\" >OREDER NOW</button></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-9\">\n                            <h6><p>{{item.address}}, {{item.city}} - {{item.pincode}}, {{item.state}}</p></h6>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"!selectedCity && !hotelSelected && !isOrdered\" style=\"margin-bottom:25px;\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div style=\"height:500px\">\n                    <p></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"hotelSelected && !isOrdered\" style=\"margin-bottom:25px;\">\n    <div class=\"container-fluid\">\n        <div *ngFor=\"let item of items\" class=\"row\" style=\"margin-top:10px;margin-bottom:10px;\">\n            <div class=\"col-md-12\">\n                <div class=\"menu-link\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <h3><p>{{item.itemName}}</p></h3>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <p>Food Type :- {{item.foodType}}</p>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <p>&#8377; {{item.price}} (per plate)</p>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-success\" (click)=\"onMinus(item.itemName)\" style=\"border-radius:0px\">-</button>\n                            <button class=\"btn btn-success\" [disabled]=\"true\" style=\"border-radius:0px\">{{item.quantity}}</button>\n                            <button class=\"btn btn-success\" (click)=\"onPlus(item.itemName)\" style=\"border-radius:0px\">+</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>        \n</div>\n<div *ngIf=\"isOrdered\" style=\"margin-bottom:25px;\">\n    <div class=\"container-fluid\">\n        <div *ngFor=\"let item of orderDetails.items\" class=\"row\" style=\"margin-top:10px;margin-bottom:10px;\">\n            <div class=\"col-md-12\">\n                <div class=\"order-link\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <h3><p>{{item.itemName}}</p></h3>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <p>Food Type :- {{item.foodType}}</p>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <p>Price :- &#8377; {{item.price}}</p>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <p>Quantity :- {{item.quantity}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" style=\"margin-top:10px;margin-bottom:10px;\">\n            <div class=\"col-md-12\">\n                <div class=\"hotel-link\">\n                    <div class=\"row\">\n                        <div class=\"col-md-5\">\n                            <h3><p>Total Amount To Pay :- &#8377; {{orderDetails.totalAmount}}</p></h3>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h3><p>Total Items :- {{orderDetails.netItems}}</p></h3>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-success\" (click)=\"placeOrder()\">Place Your Order</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>        \n</div>\n<!--Footer-->\n<footer class=\"site-footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h6>About</h6>\n                <p class=\"text-justify\">Orderista belives that break is needed in any kind of work , even for cooking. So take a break from your kitchen and oder your favrouit from from yoy favrouit restaurant.</p>\n            </div>\n  \n            <div class=\"col-md-3\"></div>\n  \n            <div class=\"col-xs-6\">\n                <h6>Contact Us</h6>\n                <div>\n                    <img src=\"assets/img/call2.png\" height=\"40px\" width=\"40px\">\n                        <span style=\"padding-left:10px;\">+91 9924106383, +91 7016375925</span>\n                </div>\n                <div>\n                    <img src=\"assets/img/email.png\" height=\"40px\" width=\"40px\">\n                    <span style=\"padding-left: 10px;\">orderistaFoods@gmail.com</span>\n                </div>\n            </div>\n        </div>\n        <hr>\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <p class=\"copyright-text\">Copyright &copy; 2019 All Rights Reserved by \n                    <a href=\"#\">Orderista</a>.\n                </p>\n            </div>\n  \n            <div class=\"col-md-4\">\n                <ul class=\"social-icons\">\n                    <li><a class=\"facebook fa fa-facebook\" href=\"#\"></a></li>\n                    <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li><a class=\"dribbble\" href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n                    <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>   \n                </ul>\n            </div>\n        </div>\n    </div>\n</footer>\n<!--Header Section Starts-->  ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-home/main-home.component */ "./src/app/main-home/main-home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-home/user-home.component */ "./src/app/user-home/user-home.component.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "./src/app/manage-user/manage-user.component.ts");









const routes = [
    { path: '', component: _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_3__["MainHomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: 'userHome', component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_6__["UserHomeComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_7__["GuardService"]] },
    { path: 'manageUser', component: _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_8__["ManageUserComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_7__["GuardService"]] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'FoodDelieveryApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-home/main-home.component */ "./src/app/main-home/main-home.component.ts");
/* harmony import */ var _db_operation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./db-operation.service */ "./src/app/db-operation.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-home/user-home.component */ "./src/app/user-home/user-home.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "./src/app/manage-user/manage-user.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
            _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_8__["MainHomeComponent"],
            _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_11__["UserHomeComponent"],
            _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_14__["ManageUserComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        providers: [_db_operation_service__WEBPACK_IMPORTED_MODULE_9__["DbOperationService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"], _auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");



let AuthService = class AuthService {
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    isAuthenticated() {
        return this.cookieService.check('user');
    }
};
AuthService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/db-operation.service.ts":
/*!*****************************************!*\
  !*** ./src/app/db-operation.service.ts ***!
  \*****************************************/
/*! exports provided: httpOptions, DbOperationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbOperationService", function() { return DbOperationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let DbOperationService = class DbOperationService {
    constructor(http) {
        this.http = http;
        this._url1 = "http://localhost:8000/loginUser";
        this._url2 = "http://localhost:8000/registerUser";
        this._url3 = "http://localhost:8000/getHotels";
        this._url4 = "http://localhost:8000/userHome";
        this._url5 = "http://localhost:8000/manageUser";
        this._url6 = "http://localhost:8000/deleteUser";
        this._url7 = "http://localhost:8000/insertOrder";
    }
    loginUser(user) {
        console.log(user);
        var user1 = JSON.stringify(user);
        console.log(user1);
        return this.http.post(this._url1, user1, httpOptions);
    }
    registerUser(userData) {
        console.log(userData);
        var user1 = JSON.stringify(userData);
        console.log(user1);
        return this.http.post(this._url2, user1, httpOptions);
    }
    showHotelDetails(city) {
        var hotel1 = { "city": city };
        console.log(hotel1);
        return this.http.post(this._url3, hotel1, httpOptions);
    }
    UserHome(userEmail) {
        console.log('In User Home');
        var user1 = { "email": userEmail };
        console.log(user1);
        return this.http.post(this._url4, user1, httpOptions);
    }
    UpdateUser(userData) {
        console.log(userData);
        var user1 = JSON.stringify(userData);
        console.log(user1);
        return this.http.post(this._url5, user1, httpOptions);
    }
    DeleteUser(userEmail) {
        var user1 = { "email": userEmail };
        console.log(user1);
        return this.http.post(this._url6, user1, httpOptions);
    }
    orderPlace(order) {
        var order1 = JSON.stringify(order);
        console.log(order1);
        return this.http.post(this._url7, order1, httpOptions);
    }
};
DbOperationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DbOperationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DbOperationService);



/***/ }),

/***/ "./src/app/guard.service.ts":
/*!**********************************!*\
  !*** ./src/app/guard.service.ts ***!
  \**********************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let GuardService = class GuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            alert("You Need To Login First");
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
};
GuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GuardService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\r\n    width: 340px;\r\n    margin: 50px auto;\r\n}\r\n.login-form form {\r\n    margin-bottom: 15px;\r\n    background: #f7f7f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.login-form h2 {\r\n    margin: 0 0 15px;\r\n    color:#f5b505;\r\n    font-size:4vw;\r\n    font-weight:bold;\r\n}\r\n.form-control, .btn {\r\n    min-height: 38px;\r\n    border-radius: 2px;\r\n}\r\n.loginButton {        \r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n.loginButton:hover{\r\n    background-color: rgb(0,0,0);\r\n    color:#f5b505;\r\n}\r\n.bodytag{\r\n    background-image:url('back2.jpg');\r\n    height:600px;\r\n    width:1300px;\r\n    margin:0px;\r\n    padding:0px;\r\n    z-index:-1;\r\n}\r\n.bodytag1{\r\n    color: #fff;\r\n    z-index:1;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlDQUFrRDtJQUNsRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG4ubG9naW4tZm9ybSBmb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG4ubG9naW4tZm9ybSBoMiB7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgY29sb3I6I2Y1YjUwNTtcclxuICAgIGZvbnQtc2l6ZTo0dnc7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG4ge1xyXG4gICAgbWluLWhlaWdodDogMzhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4ubG9naW5CdXR0b24geyAgICAgICAgXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW5CdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xyXG4gICAgY29sb3I6I2Y1YjUwNTtcclxufVxyXG4uYm9keXRhZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iYWNrMi5qcGdcIik7XHJcbiAgICBoZWlnaHQ6NjAwcHg7XHJcbiAgICB3aWR0aDoxMzAwcHg7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICB6LWluZGV4Oi0xO1xyXG59XHJcbi5ib2R5dGFnMXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_userLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/userLogin */ "./src/app/model/userLogin.ts");
/* harmony import */ var _db_operation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../db-operation.service */ "./src/app/db-operation.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");







let LoginComponent = class LoginComponent {
    constructor(router, dbServ, cookieService) {
        this.router = router;
        this.dbServ = dbServ;
        this.cookieService = cookieService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    get email() { return this.loginForm.get('email'); }
    get password() { return this.loginForm.get('password'); }
    ngOnInit() {
        console.log('IN Login Compomnent');
        this.isnotvalid = false;
    }
    onLoginSubmit() {
        console.log(this.loginForm.value);
        this.userLogin = new _model_userLogin__WEBPACK_IMPORTED_MODULE_4__["UserLogin"](this.loginForm.controls.email.value, this.loginForm.controls.password.value, this.message);
        this.dbServ.loginUser(this.userLogin).subscribe(data => {
            console.log(data);
            this.message = data["success"];
            console.log(this.message);
            if (this.message == "no") {
                this.isnotvalid = true;
                console.log('Error is there');
            }
            else {
                this.cookieService.set('user', data["email"]);
                const cookieExists = this.cookieService.check('user');
                console.log(cookieExists);
                this.router.navigate(['userHome']);
            }
        });
    }
    onRegister() {
        this.router.navigate(['register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _db_operation_service__WEBPACK_IMPORTED_MODULE_5__["DbOperationService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main-home/main-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-home/main-home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header .tagline\r\n{\r\n    text-align:center;\r\n    font-family:'Pacifico' ,cursive;\r\n    color:rgb(0,0,0);\r\n    font-size:20px;\r\n    padding-bottom:8px;\r\n    padding-top:5px;\r\n    margin:0px; \r\n}\r\n\r\n.navbar{\r\n    padding:0px;\r\n}\r\n\r\n.sitename{\r\n    color:#f5b505;\r\n    font-family: 'Lobster', cursive;\r\n    margin:0px;\r\n    padding:5px;\r\n    font-size:35px;\r\n }\r\n\r\nnav div div#collapsibleNavbar #signinBtn{\r\n    padding-right:12px;\r\n    padding-left:12px;\r\n    border-radius:20px;\r\n    font-weight: bold;\r\n    border-width: 3px;\r\n    font-family: cursive;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nnav div div#collapsibleNavbar #loginBtn{\r\n    padding-right:20px;\r\n    padding-left:20px;\r\n    border-radius:20px;\r\n    font-weight: bold;\r\n    border-width: 3px;\r\n    font-family: cursive;\r\n    margin-bottom: 10px;\r\n    margin-left:5px;\r\n}\r\n\r\nnav div div a:hover{\r\n    color:#f2cc61;\r\n }\r\n\r\ndiv.navbar-header{\r\n    display:inline;\r\n}\r\n\r\nnav div div#collapsibleNavbar li a.navpage{\r\n    color:#ffffff;\r\n    font-family: 'Chilanka', cursive;\r\n    position: relative;\r\n    padding-top:0px;\r\n    padding-bottom:0px;\r\n    font-size:20px;\r\n    margin-top:0px;\r\n}\r\n\r\nnav div div#collapsibleNavbar li a.navpage:hover{\r\n    text-decoration: none;\r\n    color:#e0e0e0;\r\n    border-bottom:2px solid #f5b505;\r\n}\r\n\r\nul li.listbutton{\r\n    padding-top:0px;\r\n}\r\n\r\nul li a.active{\r\n    color:#ffffff;\r\n    border-bottom:2px solid #f5b505;\r\n}\r\n\r\nnav div ul li{\r\n    margin-top:5px;\r\n    margin-left:10px;\r\n    margin-right:10px;\r\n}\r\n\r\n.carousel-inner img {\r\n    width: 100%;\r\n    height:85%;\r\n}\r\n\r\n.fa.fa-navicon {\r\ncolor:white;\r\n}\r\n\r\ndiv#food-caption\r\n{\r\n    position:absolute;\r\n    padding:40px;\r\n    top:30;\r\n    bottom: 30px;\r\n    text-align: justify;\r\n    overflow: hidden;\r\n}\r\n\r\ndiv#food-caption h1\r\n{\r\n    font-family: 'Abril Fatface', cursive;\r\n\r\n    \r\n    font-size:40px;\r\n}\r\n\r\ndiv#food-caption p\r\n{\r\n    font-family: 'Vibes', cursive;\r\n    font-weight: bold;\r\n    font-size:20px;\r\n}\r\n\r\n.welcome{\r\n    margin:0px;\r\n    height: 70px;\r\n    text-align: center;\r\n    font-family: 'Tangerine', cursive;\r\n    color:#f5b505;\r\n    font-size: 70px;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.blog-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    box-shadow: 0 3px 7px -1px rgba(#000, .1);\r\n    margin-bottom: 1.6%;\r\n    line-height: 1.4;\r\n    font-family: sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    z-index: 0;\r\n}\r\n\r\n.alt {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.meta {\r\n    position: relative;\r\n    z-index: 0;\r\n    height: 200px;\r\n  }\r\n\r\n.photo {\r\n    position: relative;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    height:100px;\r\n    width:100px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform .2s;\r\n  }\r\n\r\n.description {\r\n    padding: 1rem;\r\n    \r\n    background: #ffffff;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n\r\nh1 {\r\n      line-height: 1;\r\n      margin: 0;\r\n      font-size: 1.7rem;\r\n    }\r\n\r\n.site-footer\r\n    {\r\n      background-color:#26272b;\r\n      padding:45px 0 20px;\r\n      font-size:15px;\r\n      line-height:24px;\r\n      color:#737373;\r\n    }\r\n\r\n.site-footer hr\r\n    {\r\n      border-top-color:#bbb;\r\n      opacity:0.5\r\n    }\r\n\r\n.site-footer hr.small\r\n    {\r\n      margin:20px 0\r\n    }\r\n\r\n.site-footer h6\r\n    {\r\n      color:#fff;\r\n      font-size:16px;\r\n      text-transform:uppercase;\r\n      margin-top:5px;\r\n      letter-spacing:2px\r\n    }\r\n\r\n.site-footer a\r\n    {\r\n      color:#737373;\r\n    }\r\n\r\n.site-footer a:hover\r\n    {\r\n      color:#f5b505;\r\n      text-decoration:none;\r\n    }\r\n\r\n.footer-links\r\n    {\r\n      padding-left:0;\r\n      list-style:none\r\n    }\r\n\r\n.footer-links li\r\n    {\r\n      display:block\r\n    }\r\n\r\n.footer-links a\r\n    {\r\n      color:#737373\r\n    }\r\n\r\n.footer-links a:active,.footer-links a:focus,.footer-links a:hover\r\n    {\r\n      color:#f5b505;\r\n      text-decoration:none;\r\n    }\r\n\r\n.footer-links.inline li\r\n    {\r\n      display:inline-block\r\n    }\r\n\r\n.site-footer .social-icons\r\n    {\r\n      text-align:right\r\n    }\r\n\r\n.site-footer .social-icons a\r\n    {\r\n      width:40px;\r\n      height:40px;\r\n      line-height:40px;\r\n      margin-left:6px;\r\n      margin-right:0;\r\n      border-radius:100%;\r\n      background-color:#33353d\r\n    }\r\n\r\n.copyright-text\r\n    {\r\n      margin:0\r\n    }\r\n\r\n@media (max-width:991px)\r\n    {\r\n      .site-footer [class^=col-]\r\n      {\r\n        margin-bottom:30px\r\n      }\r\n    }\r\n\r\n@media (max-width:767px)\r\n    {\r\n      .site-footer\r\n      {\r\n        padding-bottom:0\r\n      }\r\n      .site-footer .copyright-text,.site-footer .social-icons\r\n      {\r\n        text-align:center\r\n      }\r\n    }\r\n\r\n.social-icons\r\n    {\r\n      padding-left:0;\r\n      margin-bottom:0;\r\n      list-style:none\r\n    }\r\n\r\n.social-icons li\r\n    {\r\n      display:inline-block;\r\n      margin-bottom:4px\r\n    }\r\n\r\n.social-icons li.title\r\n    {\r\n      margin-right:15px;\r\n      text-transform:uppercase;\r\n      color:#96a2b2;\r\n      font-weight:700;\r\n      font-size:13px\r\n    }\r\n\r\n.social-icons a{\r\n      background-color:#eceeef;\r\n      color:#ffffff;\r\n      font-size:16px;\r\n      display:inline-block;\r\n      line-height:44px;\r\n      width:44px;\r\n      height:44px;\r\n      text-align:center;\r\n      margin-right:8px;\r\n      border-radius:100%;\r\n      transition:all .2s linear\r\n    }\r\n\r\n.social-icons a:active,.social-icons a:focus,.social-icons a:hover\r\n    {\r\n      color:#fff;\r\n      background-color:#f5b505;\r\n    }\r\n\r\n.social-icons.size-sm a\r\n    {\r\n      line-height:34px;\r\n      height:34px;\r\n      width:34px;\r\n      font-size:14px\r\n    }\r\n\r\n.social-icons a.facebook:hover\r\n    {\r\n      background-color:#3b5998\r\n    }\r\n\r\n.social-icons a.twitter:hover\r\n    {\r\n      background-color:#00aced\r\n    }\r\n\r\n.social-icons a.linkedin:hover\r\n    {\r\n      background-color:#007bb6\r\n    }\r\n\r\n.social-icons a.dribbble:hover\r\n    {\r\n      background-color:#ea4c89\r\n    }\r\n\r\n.slider-text h2 {\r\n        font-weight: 800;\r\n    }\r\n\r\n.ftco-animate {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.align-items-center {\r\n    align-items: center !important;\r\n}\r\n\r\n.d-flex {\r\n    display: flex !important;\r\n}\r\n\r\n.fadeInUp {\r\n    -webkit-animation-name: fadeInUp;\r\n    animation-name: fadeInUp;\r\n}\r\n\r\n.ftco-animated {\r\n    -webkit-animation-duration: .5s;\r\n    animation-duration: .5s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.text {\r\n    width: 100%;\r\n}\r\n\r\n.text-center {\r\n    text-align: center !important;\r\n}\r\n\r\n.slider-text h2 span {\r\n    color: #3e64ff;\r\n    text-decoration: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1ob21lL21haW4taG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0NBQ2pCOztBQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFQTtJQUNHLGNBQWM7QUFDbEI7O0FBRUM7SUFDRyxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLE1BQU07SUFDTixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxxQ0FBcUM7OztJQUdyQyxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7RUFDZjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLGFBQWE7O0lBRWIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0FBQ0U7TUFDRSxjQUFjO01BQ2QsU0FBUztNQUNULGlCQUFpQjtJQUNuQjs7QUFHQTs7TUFFRSx3QkFBd0I7TUFDeEIsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsYUFBYTtJQUNmOztBQUNBOztNQUVFLHFCQUFxQjtNQUNyQjtJQUNGOztBQUNBOztNQUVFO0lBQ0Y7O0FBQ0E7O01BRUUsVUFBVTtNQUNWLGNBQWM7TUFDZCx3QkFBd0I7TUFDeEIsY0FBYztNQUNkO0lBQ0Y7O0FBQ0E7O01BRUUsYUFBYTtJQUNmOztBQUNBOztNQUVFLGFBQWE7TUFDYixvQkFBb0I7SUFDdEI7O0FBQ0E7O01BRUUsY0FBYztNQUNkO0lBQ0Y7O0FBQ0E7O01BRUU7SUFDRjs7QUFDQTs7TUFFRTtJQUNGOztBQUNBOztNQUVFLGFBQWE7TUFDYixvQkFBb0I7SUFDdEI7O0FBQ0E7O01BRUU7SUFDRjs7QUFDQTs7TUFFRTtJQUNGOztBQUNBOztNQUVFLFVBQVU7TUFDVixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCO0lBQ0Y7O0FBQ0E7O01BRUU7SUFDRjs7QUFDQTs7TUFFRTs7UUFFRTtNQUNGO0lBQ0Y7O0FBQ0E7O01BRUU7O1FBRUU7TUFDRjtNQUNBOztRQUVFO01BQ0Y7SUFDRjs7QUFDQTs7TUFFRSxjQUFjO01BQ2QsZUFBZTtNQUNmO0lBQ0Y7O0FBQ0E7O01BRUUsb0JBQW9CO01BQ3BCO0lBQ0Y7O0FBQ0E7O01BRUUsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixhQUFhO01BQ2IsZUFBZTtNQUNmO0lBQ0Y7O0FBQ0E7TUFDRSx3QkFBd0I7TUFDeEIsYUFBYTtNQUNiLGNBQWM7TUFDZCxvQkFBb0I7TUFDcEIsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFHbEI7SUFDRjs7QUFDQTs7TUFFRSxVQUFVO01BQ1Ysd0JBQXdCO0lBQzFCOztBQUNBOztNQUVFLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsVUFBVTtNQUNWO0lBQ0Y7O0FBQ0E7O01BRUU7SUFDRjs7QUFDQTs7TUFFRTtJQUNGOztBQUNBOztNQUVFO0lBQ0Y7O0FBQ0E7O01BRUU7SUFDRjs7QUFJQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFDSjtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFHSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFHSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL21haW4taG9tZS9tYWluLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciAudGFnbGluZVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OidQYWNpZmljbycgLGN1cnNpdmU7XHJcbiAgICBjb2xvcjpyZ2IoMCwwLDApO1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICBtYXJnaW46MHB4OyBcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59XHJcblxyXG4uc2l0ZW5hbWV7XHJcbiAgICBjb2xvcjojZjViNTA1O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGZvbnQtc2l6ZTozNXB4O1xyXG4gfVxyXG5cclxuIG5hdiBkaXYgZGl2I2NvbGxhcHNpYmxlTmF2YmFyICNzaWduaW5CdG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5uYXYgZGl2IGRpdiNjb2xsYXBzaWJsZU5hdmJhciAjbG9naW5CdG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuXHJcbm5hdiBkaXYgZGl2IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjojZjJjYzYxO1xyXG4gfVxyXG5cclxuIGRpdi5uYXZiYXItaGVhZGVye1xyXG4gICAgZGlzcGxheTppbmxpbmU7XHJcbn1cclxuXHJcbiBuYXYgZGl2IGRpdiNjb2xsYXBzaWJsZU5hdmJhciBsaSBhLm5hdnBhZ2V7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDaGlsYW5rYScsIGN1cnNpdmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcblxyXG5uYXYgZGl2IGRpdiNjb2xsYXBzaWJsZU5hdmJhciBsaSBhLm5hdnBhZ2U6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjojZTBlMGUwO1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2Y1YjUwNTtcclxufVxyXG5cclxudWwgbGkubGlzdGJ1dHRvbntcclxuICAgIHBhZGRpbmctdG9wOjBweDtcclxufVxyXG5cclxudWwgbGkgYS5hY3RpdmV7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2Y1YjUwNTtcclxufVxyXG5cclxubmF2IGRpdiB1bCBsaXtcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG59XHJcblxyXG5cclxuLmNhcm91c2VsLWlubmVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo4NSU7XHJcbn1cclxuXHJcbi5mYS5mYS1uYXZpY29uIHtcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmRpdiNmb29kLWNhcHRpb25cclxue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOjQwcHg7XHJcbiAgICB0b3A6MzA7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuZGl2I2Zvb2QtY2FwdGlvbiBoMVxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xyXG5cclxuICAgIFxyXG4gICAgZm9udC1zaXplOjQwcHg7XHJcbn1cclxuXHJcbmRpdiNmb29kLWNhcHRpb24gcFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ1ZpYmVzJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuXHJcbi53ZWxjb21le1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiNmNWI1MDU7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmJsb2ctY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgjMDAwLCAuMSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjYlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuLmFsdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuLm1ldGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC5waG90byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gICAgaDEge1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC5zaXRlLWZvb3RlclxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNjI3MmI7XHJcbiAgICAgIHBhZGRpbmc6NDVweCAwIDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDoyNHB4O1xyXG4gICAgICBjb2xvcjojNzM3MzczO1xyXG4gICAgfVxyXG4gICAgLnNpdGUtZm9vdGVyIGhyXHJcbiAgICB7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6I2JiYjtcclxuICAgICAgb3BhY2l0eTowLjVcclxuICAgIH1cclxuICAgIC5zaXRlLWZvb3RlciBoci5zbWFsbFxyXG4gICAge1xyXG4gICAgICBtYXJnaW46MjBweCAwXHJcbiAgICB9XHJcbiAgICAuc2l0ZS1mb290ZXIgaDZcclxuICAgIHtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOjJweFxyXG4gICAgfVxyXG4gICAgLnNpdGUtZm9vdGVyIGFcclxuICAgIHtcclxuICAgICAgY29sb3I6IzczNzM3MztcclxuICAgIH1cclxuICAgIC5zaXRlLWZvb3RlciBhOmhvdmVyXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOiNmNWI1MDU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1saW5rc1xyXG4gICAge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgICAgbGlzdC1zdHlsZTpub25lXHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWxpbmtzIGxpXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6YmxvY2tcclxuICAgIH1cclxuICAgIC5mb290ZXItbGlua3MgYVxyXG4gICAge1xyXG4gICAgICBjb2xvcjojNzM3MzczXHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWxpbmtzIGE6YWN0aXZlLC5mb290ZXItbGlua3MgYTpmb2N1cywuZm9vdGVyLWxpbmtzIGE6aG92ZXJcclxuICAgIHtcclxuICAgICAgY29sb3I6I2Y1YjUwNTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWxpbmtzLmlubGluZSBsaVxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9ja1xyXG4gICAgfVxyXG4gICAgLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnNcclxuICAgIHtcclxuICAgICAgdGV4dC1hbGlnbjpyaWdodFxyXG4gICAgfVxyXG4gICAgLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMgYVxyXG4gICAge1xyXG4gICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6NnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzM1M2RcclxuICAgIH1cclxuICAgIC5jb3B5cmlnaHQtdGV4dFxyXG4gICAge1xyXG4gICAgICBtYXJnaW46MFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpXHJcbiAgICB7XHJcbiAgICAgIC5zaXRlLWZvb3RlciBbY2xhc3NePWNvbC1dXHJcbiAgICAgIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjMwcHhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpXHJcbiAgICB7XHJcbiAgICAgIC5zaXRlLWZvb3RlclxyXG4gICAgICB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MFxyXG4gICAgICB9XHJcbiAgICAgIC5zaXRlLWZvb3RlciAuY29weXJpZ2h0LXRleHQsLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnNcclxuICAgICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWwtaWNvbnNcclxuICAgIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgICAgbGlzdC1zdHlsZTpub25lXHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIGxpXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjRweFxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1pY29ucyBsaS50aXRsZVxyXG4gICAge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICBjb2xvcjojOTZhMmIyO1xyXG4gICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZToxM3B4XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIGF7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2VjZWVlZjtcclxuICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICBsaW5lLWhlaWdodDo0NHB4O1xyXG4gICAgICB3aWR0aDo0NHB4O1xyXG4gICAgICBoZWlnaHQ6NDRweDtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDo4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyO1xyXG4gICAgICAtby10cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyO1xyXG4gICAgICB0cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyXHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIGE6YWN0aXZlLC5zb2NpYWwtaWNvbnMgYTpmb2N1cywuc29jaWFsLWljb25zIGE6aG92ZXJcclxuICAgIHtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjViNTA1O1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1pY29ucy5zaXplLXNtIGFcclxuICAgIHtcclxuICAgICAgbGluZS1oZWlnaHQ6MzRweDtcclxuICAgICAgaGVpZ2h0OjM0cHg7XHJcbiAgICAgIHdpZHRoOjM0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZToxNHB4XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIGEuZmFjZWJvb2s6aG92ZXJcclxuICAgIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk4XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIGEudHdpdHRlcjpob3ZlclxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGFjZWRcclxuICAgIH1cclxuICAgIC5zb2NpYWwtaWNvbnMgYS5saW5rZWRpbjpob3ZlclxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiYjZcclxuICAgIH1cclxuICAgIC5zb2NpYWwtaWNvbnMgYS5kcmliYmJsZTpob3ZlclxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlYTRjODlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC5zbGlkZXItdGV4dCBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuLmZ0Y28tYW5pbWF0ZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcbi5mYWRlSW5VcCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxufVxyXG4uZnRjby1hbmltYXRlZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcbi50ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4uc2xpZGVyLXRleHQgaDIgc3BhbiB7XHJcbiAgICBjb2xvcjogIzNlNjRmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/main-home/main-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-home/main-home.component.ts ***!
  \**************************************************/
/*! exports provided: MainHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomeComponent", function() { return MainHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MainHomeComponent = class MainHomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onLogin() {
        console.log('Transferring to login');
        this.router.navigate(['/login']);
    }
    onSignin() {
        this.router.navigate(['/register']);
    }
};
MainHomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MainHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-home.component.css */ "./src/app/main-home/main-home.component.css")).default]
    })
], MainHomeComponent);



/***/ }),

/***/ "./src/app/manage-user/manage-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/manage-user/manage-user.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bodytag{\r\n    background-color: darkslategrey;\r\n    height:900px;\r\n    width:1300px;\r\n    margin:0px;\r\n    padding:0px;\r\n    z-index:-1;\r\n}\r\n.bodytag1{\r\n    color: #fff;\r\n    z-index:1;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.form-control{\r\n    height: 41px;\r\n    background: #020202;\r\n    color:#fff;\r\n    box-shadow: none !important;\r\n    border: none;\r\n}\r\n.form-control:focus{\r\n    background: #1f1f1f;\r\n    color:#f5b505;\r\n}\r\n.form-control{        \r\n    border-radius: 3px;\r\n}\r\n.signup-form{\r\n    width: 590px;\r\n    margin: 30px auto;\r\n    color:#f5b505;\r\n}\r\n.signup-form form{\r\n    color: #999;\r\n    border-radius: 3px;\r\n    margin-bottom: 15px;\r\n    background: #fff;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.signup-form h2 {\r\n    color: #f5b505;\r\n    font-weight: bold;\r\n    margin-top: 0;\r\n}\r\n.signup-form hr {\r\n    margin: 0 -30px 20px;\r\n}\r\n.signup-form .form-group{\r\n    margin-bottom: 20px;\r\n}\r\n.signup-form{        \r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background: #f5b505;\r\n    border: none;\r\n    min-width: 140px;\r\n}\r\n.signup-form{\r\n    background:rgba(255,255,255,0);\r\n    outline: none;\r\n}\r\n.signup-form a{\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n.signup-form a:hover{\r\n    text-decoration: none;\r\n}\r\n.signup-form form a{\r\n    color: #3598dc;\r\n    text-decoration: none;\r\n}\r\n.signup-form form a:hover{\r\n    text-decoration: underline;\r\n}\r\n.signup-form .hint-text {\r\n    padding-bottom: 15px;\r\n    text-align: center;\r\n}\r\n.signinButton {        \r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n.signinButton:hover{\r\n    background-color: rgb(0,0,0);\r\n    color:#f5b505;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXVzZXIvbWFuYWdlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLXVzZXIvbWFuYWdlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5dGFne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICAgIGhlaWdodDo5MDBweDtcclxuICAgIHdpZHRoOjEzMDBweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIHotaW5kZXg6LTE7XHJcbn1cclxuLmJvZHl0YWcxe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMjAyMDI7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWYxZjFmO1xyXG4gICAgY29sb3I6I2Y1YjUwNTtcclxufVxyXG4uZm9ybS1jb250cm9seyAgICAgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnNpZ251cC1mb3Jte1xyXG4gICAgd2lkdGg6IDU5MHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBjb2xvcjojZjViNTA1O1xyXG59XHJcbi5zaWdudXAtZm9ybSBmb3Jte1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIGgyIHtcclxuICAgIGNvbG9yOiAjZjViNTA1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSBociB7XHJcbiAgICBtYXJnaW46IDAgLTMwcHggMjBweDtcclxufSAgICBcclxuLnNpZ251cC1mb3JtIC5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2lnbnVwLWZvcm17ICAgICAgICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1YjUwNTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbn1cclxuLnNpZ251cC1mb3Jte1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDApO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0gYXtcclxuICAgIGNvbG9yOiAjMzU5OGRjO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zaWdudXAtZm9ybSAuaGludC10ZXh0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaWduaW5CdXR0b24geyAgICAgICAgXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc2lnbmluQnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcclxuICAgIGNvbG9yOiNmNWI1MDU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/manage-user/manage-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/manage-user/manage-user.component.ts ***!
  \******************************************************/
/*! exports provided: ManageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserComponent", function() { return ManageUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_userLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/userLogin */ "./src/app/model/userLogin.ts");
/* harmony import */ var _db_operation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../db-operation.service */ "./src/app/db-operation.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");







let ManageUserComponent = class ManageUserComponent {
    constructor(router, dbServ, cookieService) {
        this.router = router;
        this.dbServ = dbServ;
        this.cookieService = cookieService;
        this.exists = false;
        this.message = '';
        console.log("hello");
    }
    check() {
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}/)]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            contact_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.contactNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[6-9]\d{9}$/)]),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.addresses[0].address1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.addresses[0].landmark, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.addresses[0].area, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.addresses[0].city, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.addresses[0].state, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userDetails.addresses[0].pincode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]\d{5}$/)])
        });
    }
    get first_name() { return this.updateForm.get('first_name'); }
    get last_name() { return this.updateForm.get('last_name'); }
    get email() { return this.updateForm.get('email'); }
    get password() { return this.updateForm.get('password'); }
    get confirm_password() { return this.updateForm.get('confirm_password'); }
    get contact_num() { return this.updateForm.get('contact_num'); }
    // get passcheck() { return this.updateForm.get('password')===this.updateForm.get('confirm_password')?null : {notSame:true}}
    get address1() { return this.updateForm.get('address1'); }
    get landmark() { return this.updateForm.get('landmark'); }
    get area() { return this.updateForm.get('area'); }
    get city() { return this.updateForm.get('city'); }
    get state() { return this.updateForm.get('state'); }
    get pincode() { return this.updateForm.get('pincode'); }
    ngOnInit() {
        console.log(this.cookieService.check('user'));
        this.dbServ.UserHome(this.cookieService.get('user')).subscribe(data => {
            console.log(data);
            this.userDetails = new _model_userLogin__WEBPACK_IMPORTED_MODULE_4__["UserDetails"](data.email, data.password, data.firstName, data.lastName, data.contactNumber, data.addresses);
            console.log(this.userDetails);
            this.check();
        });
    }
    onUpdate() {
        this.userAddress = [new _model_userLogin__WEBPACK_IMPORTED_MODULE_4__["Address"](this.updateForm.controls.address1.value, this.updateForm.controls.landmark.value, this.updateForm.controls.area.value, this.updateForm.controls.city.value, this.updateForm.controls.state.value, this.updateForm.controls.pincode.value, 'Home')];
        this.userData = new _model_userLogin__WEBPACK_IMPORTED_MODULE_4__["UserDetails"](this.updateForm.controls.email.value, this.updateForm.controls.password.value, this.updateForm.controls.first_name.value, this.updateForm.controls.last_name.value, this.updateForm.controls.contact_num.value, this.userAddress);
        console.log(this.userData);
        this.dbServ.UpdateUser(this.userData).subscribe(data => {
            this.message = data["message"];
            if (this.message != "Failure") {
                this.exists = true;
            }
            else {
                this.exists = false;
            }
        });
        /*console.log(this.exists)
        console.log(this.message)
        if(this.message!="exists"){
          this.router.navigate(['/login'])
        }*/
    }
    onBack() {
        this.router.navigate(['userHome']);
    }
    onDelete() {
        alert("sure You Want To Delete Your Account??");
        this.dbServ.DeleteUser(this.cookieService.get('user')).subscribe(data => data);
        this.cookieService.delete('user');
        alert("Account Deleted");
        this.router.navigate(['']);
    }
};
ManageUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _db_operation_service__WEBPACK_IMPORTED_MODULE_5__["DbOperationService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
ManageUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-user/manage-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-user.component.css */ "./src/app/manage-user/manage-user.component.css")).default]
    })
], ManageUserComponent);



/***/ }),

/***/ "./src/app/model/userLogin.ts":
/*!************************************!*\
  !*** ./src/app/model/userLogin.ts ***!
  \************************************/
/*! exports provided: UserLogin, Address, UserDetails, Menu, HotelDetails, Item, OrderDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetails", function() { return HotelDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetails", function() { return OrderDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserLogin {
    constructor(email, password, msg) {
        this.email = email;
        this.password = password;
        this.msg = msg;
    }
}
class Address {
    constructor(address1, landmark, area, city, state, pincode, type) {
        this.address1 = address1;
        this.landmark = landmark;
        this.area = area;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.type = type;
    }
}
class UserDetails {
    //msg:string
    constructor(email, password, firstName, lastName, contactNumber, addresses) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNumber = contactNumber;
        this.addresses = addresses;
        //this.msg=msg;
    }
}
class Menu {
    constructor(itemName, itemType, foodType, price) {
        this.itemName = itemName;
        this.itemType = itemType;
        this.foodType = foodType;
        this.price = price;
    }
}
class HotelDetails {
    constructor(hotelId, hotelName, hotelEmail, hotelContactNo, address, city, state, pincode, menu) {
        this._id = hotelId;
        this.hotelName = hotelName;
        this.hotelEmail = hotelEmail;
        this.hotelContactNo = hotelContactNo;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.menu = menu;
    }
}
class Item {
    constructor(itemName, itemType, foodType, price, quantity) {
        this.itemName = itemName;
        this.itemType = itemType;
        this.foodType = foodType;
        this.price = price;
        this.quantity = quantity;
    }
}
class OrderDetails {
    constructor(orderDate, hotelName, hotelEmail, userEmail, totalAmount, status, paymentMode, netItems, items) {
        this.orderDate = orderDate;
        this.hotelName = hotelName;
        this.hotelEmail = hotelEmail;
        this.userEmail = userEmail;
        this.totalAmount = totalAmount;
        this.status = status;
        this.paymentMode = paymentMode;
        this.netItems = netItems;
        this.items = items;
    }
}


/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bodytag{\r\n    background-image:url('back2.jpg');\r\n    height:900px;\r\n    width:1300px;\r\n    margin:0px;\r\n    padding:0px;\r\n    z-index:-1;\r\n}\r\n.bodytag1{\r\n    color: #fff;\r\n    z-index:1;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.form-control{\r\n    height: 41px;\r\n    background: #020202;\r\n    color:#fff;\r\n    box-shadow: none !important;\r\n    border: none;\r\n}\r\n.form-control:focus{\r\n    background: #1f1f1f;\r\n    color:#f5b505;\r\n}\r\n.form-control{        \r\n    border-radius: 3px;\r\n}\r\n.signup-form{\r\n    width: 590px;\r\n    margin: 30px auto;\r\n    color:#f5b505;\r\n}\r\n.signup-form form{\r\n    color: #999;\r\n    border-radius: 3px;\r\n    margin-bottom: 15px;\r\n    background: #fff;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.signup-form h2 {\r\n    color: #f5b505;\r\n    font-weight: bold;\r\n    margin-top: 0;\r\n}\r\n.signup-form hr {\r\n    margin: 0 -30px 20px;\r\n}\r\n.signup-form .form-group{\r\n    margin-bottom: 20px;\r\n}\r\n.signup-form{        \r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background: #f5b505;\r\n    border: none;\r\n    min-width: 140px;\r\n}\r\n.signup-form{\r\n    background:rgba(255,255,255,0);\r\n    outline: none;\r\n}\r\n.signup-form a{\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n.signup-form a:hover{\r\n    text-decoration: none;\r\n}\r\n.signup-form form a{\r\n    color: #3598dc;\r\n    text-decoration: none;\r\n}\r\n.signup-form form a:hover{\r\n    text-decoration: underline;\r\n}\r\n.signup-form .hint-text {\r\n    padding-bottom: 15px;\r\n    text-align: center;\r\n}\r\n.signinButton {        \r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n.signinButton:hover{\r\n    background-color: rgb(0,0,0);\r\n    color:#f5b505;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWtEO0lBQ2xELFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXRhZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iYWNrMi5qcGdcIik7XHJcbiAgICBoZWlnaHQ6OTAwcHg7XHJcbiAgICB3aWR0aDoxMzAwcHg7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICB6LWluZGV4Oi0xO1xyXG59XHJcbi5ib2R5dGFnMXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDIwMjAyO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZDogIzFmMWYxZjtcclxuICAgIGNvbG9yOiNmNWI1MDU7XHJcbn1cclxuLmZvcm0tY29udHJvbHsgICAgICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5zaWdudXAtZm9ybXtcclxuICAgIHdpZHRoOiA1OTBweDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgY29sb3I6I2Y1YjUwNTtcclxufVxyXG4uc2lnbnVwLWZvcm0gZm9ybXtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMiB7XHJcbiAgICBjb2xvcjogI2Y1YjUwNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaHIge1xyXG4gICAgbWFyZ2luOiAwIC0zMHB4IDIwcHg7XHJcbn0gICAgXHJcbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JteyAgICAgICAgXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWI1MDU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybXtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zaWdudXAtZm9ybSBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zaWdudXAtZm9ybSBmb3JtIGF7XHJcbiAgICBjb2xvcjogIzM1OThkYztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVx0XHJcbi5zaWdudXAtZm9ybSBmb3JtIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmhpbnQtdGV4dCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lnbmluQnV0dG9uIHsgICAgICAgIFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNpZ25pbkJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XHJcbiAgICBjb2xvcjojZjViNTA1O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_userLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/userLogin */ "./src/app/model/userLogin.ts");
/* harmony import */ var _db_operation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../db-operation.service */ "./src/app/db-operation.service.ts");






let RegistrationComponent = class RegistrationComponent {
    constructor(router, dbServ) {
        this.router = router;
        this.dbServ = dbServ;
        this.exists = false;
        this.message = '';
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}/)]),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}/)]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            contact_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[6-9]\d{9}$/)]),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]\d{5}$/)])
        });
    }
    get first_name() { return this.signinForm.get('first_name'); }
    get last_name() { return this.signinForm.get('last_name'); }
    get email() { return this.signinForm.get('email'); }
    get password() { return this.signinForm.get('password'); }
    get confirm_password() { return this.signinForm.get('confirm_password'); }
    get contact_num() { return this.signinForm.get('contact_num'); }
    // get passcheck() { return this.signinForm.get('password')===this.signinForm.get('confirm_password')?null : {notSame:true}}
    get address1() { return this.signinForm.get('address1'); }
    get landmark() { return this.signinForm.get('landmark'); }
    get area() { return this.signinForm.get('area'); }
    get city() { return this.signinForm.get('city'); }
    get state() { return this.signinForm.get('state'); }
    get pincode() { return this.signinForm.get('pincode'); }
    ngOnInit() {
    }
    onSignin() {
        this.userAddress = [new _model_userLogin__WEBPACK_IMPORTED_MODULE_4__["Address"](this.signinForm.controls.address1.value, this.signinForm.controls.landmark.value, this.signinForm.controls.area.value, this.signinForm.controls.city.value, this.signinForm.controls.state.value, this.signinForm.controls.pincode.value, 'Home')];
        this.userData = new _model_userLogin__WEBPACK_IMPORTED_MODULE_4__["UserDetails"](this.signinForm.controls.email.value, this.signinForm.controls.password.value, this.signinForm.controls.first_name.value, this.signinForm.controls.last_name.value, this.signinForm.controls.contact_num.value, this.userAddress);
        console.log(this.userData);
        this.dbServ.registerUser(this.userData).subscribe(data => {
            this.message = data["message"];
            if (this.message != "exists") {
                this.exists = false;
                this.router.navigate(['login']);
            }
            else {
                this.exists = true;
                //this.router.navigate(['userHome'])
            }
        });
        /*console.log(this.exists)
        console.log(this.message)
        if(this.message!="exists"){
          this.router.navigate(['/login'])
        }*/
    }
    onCancel() {
        this.router.navigate(['']);
    }
    onLoginClick() {
        this.router.navigate(['login']);
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _db_operation_service__WEBPACK_IMPORTED_MODULE_5__["DbOperationService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/user-home/user-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-home/user-home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header .tagline\r\n{\r\n    text-align:center;\r\n    font-family:'Pacifico' ,cursive;\r\n    color:rgb(0,0,0);\r\n    font-size:20px;\r\n    padding-bottom:8px;\r\n    padding-top:5px;\r\n    margin:0px; \r\n}\r\n\r\n.navbar{\r\n    padding:0px;\r\n}\r\n\r\n.sitename{\r\n    color:#f5b505;\r\n    font-family: 'Lobster', cursive;\r\n    margin:0px;\r\n    padding:5px;\r\n    font-size:30px;\r\n }\r\n\r\nnav div div#collapsibleNavbar #logout{\r\n    padding-right:20px;\r\n    padding-left:20px;\r\n    border-radius:20px;\r\n    border-width: 3px;\r\n    font-family: 'Lobster', cursive;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nnav div div a:hover{\r\n    color:#f2cc61;\r\n }\r\n\r\ndiv.navbar-header{\r\n    display:inline;\r\n}\r\n\r\nnav div div#collapsibleNavbar li a.navpage{\r\n    color:#e0e0e0;\r\n    font-family: 'Chilanka', cursive;\r\n    position: relative;\r\n    padding-top:0px;\r\n    padding-bottom:0px;\r\n    font-size:19px;\r\n    margin-top:5px;\r\n    transition:font-size 0.3s;\r\n}\r\n\r\nul li.listbutton{\r\n    padding-top:0px;\r\n}\r\n\r\nnav div div#collapsibleNavbar li a.navpage:hover{\r\n    font-size:21px;\r\n    text-decoration: none;\r\n    color:#ffffff;\r\n    border-bottom:2px solid #f5b505;\r\n}\r\n\r\nul li a.active{\r\n    font-size:21px;\r\n    color:#ffffff;\r\n    border-bottom:2px solid #f5b505;\r\n}\r\n\r\nnav div ul li{\r\n    margin-top:5px;\r\n    margin-left:10px;\r\n    margin-right:10px;\r\n}\r\n\r\n.fa.fa-navicon {\r\ncolor:white;\r\n}\r\n\r\n.welcome{\r\n    margin:0px;\r\n    height: 70px;\r\n    text-align: center;\r\n    font-family: 'Tangerine', cursive;\r\n    color:#f5b505;\r\n    font-size: 70px;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.site-footer\r\n{\r\n    background-color:#26272b;\r\n    padding:45px 0 20px;\r\n    font-size:15px;\r\n    line-height:24px;\r\n    color:#737373;\r\n}\r\n\r\n.site-footer hr\r\n{\r\n    border-top-color:#bbb;\r\n    opacity:0.5\r\n}\r\n\r\n.site-footer hr.small\r\n{\r\n    margin:20px 0\r\n}\r\n\r\n.site-footer h6\r\n{\r\n    color:#fff;\r\n    font-size:16px;\r\n    text-transform:uppercase;\r\n    margin-top:5px;\r\n    letter-spacing:2px\r\n}\r\n\r\n.site-footer a\r\n{\r\n    color:#737373;\r\n}\r\n\r\n.site-footer a:hover\r\n{\r\n    color:#f5b505;\r\n    text-decoration:none;\r\n}\r\n\r\n.footer-links\r\n{\r\n    padding-left:0;\r\n    list-style:none\r\n}\r\n\r\n.footer-links li\r\n{\r\n    display:block\r\n}\r\n\r\n.footer-links a\r\n{\r\n    color:#737373\r\n}\r\n\r\n.footer-links a:active,.footer-links a:focus,.footer-links a:hover\r\n{\r\n    color:#f5b505;\r\n    text-decoration:none;\r\n}\r\n\r\n.footer-links.inline li\r\n{\r\n    display:inline-block\r\n}\r\n\r\n.site-footer .social-icons\r\n{\r\n    text-align:right\r\n}\r\n\r\n.site-footer .social-icons a\r\n{\r\n    width:40px;\r\n    height:40px;\r\n    line-height:40px;\r\n    margin-left:6px;\r\n    margin-right:0;\r\n    border-radius:100%;\r\n    background-color:#33353d\r\n}\r\n\r\n.copyright-text\r\n{\r\n    margin:0\r\n}\r\n\r\n@media (max-width:991px)\r\n{\r\n    .site-footer [class^=col-]\r\n    {\r\n       margin-bottom:30px\r\n    }\r\n}\r\n\r\n@media (max-width:767px)\r\n{\r\n    .site-footer\r\n    {\r\n        padding-bottom:0\r\n    }\r\n    .site-footer .copyright-text,.site-footer .social-icons\r\n    {\r\n        text-align:center\r\n    }\r\n}\r\n\r\n.social-icons\r\n{\r\n    padding-left:0;\r\n    margin-bottom:0;\r\n    list-style:none\r\n}\r\n\r\n.social-icons li\r\n{\r\n    display:inline-block;\r\n    margin-bottom:4px\r\n}\r\n\r\n.social-icons li.title\r\n{\r\n    margin-right:15px;\r\n    text-transform:uppercase;\r\n    color:#96a2b2;\r\n    font-weight:700;\r\n    font-size:13px\r\n}\r\n\r\n.social-icons a{\r\n    background-color:#eceeef;\r\n    color:#ffffff;\r\n    font-size:16px;\r\n    display:inline-block;\r\n    line-height:44px;\r\n    width:44px;\r\n    height:44px;\r\n    text-align:center;\r\n    margin-right:8px;\r\n    border-radius:100%;\r\n    transition:all .2s linear\r\n}\r\n\r\n.social-icons a:active,.social-icons a:focus,.social-icons a:hover\r\n{\r\n    color:#fff;\r\n    background-color:#f5b505;\r\n}\r\n\r\n.social-icons.size-sm a\r\n{\r\n    line-height:34px;\r\n    height:34px;\r\n    width:34px;\r\n    font-size:14px\r\n}\r\n\r\n.social-icons a.facebook:hover\r\n{\r\n    background-color:#3b5998\r\n}\r\n\r\n.social-icons a.twitter:hover\r\n{\r\n    background-color:#00aced\r\n}\r\n\r\n.social-icons a.linkedin:hover\r\n{\r\n    background-color:#007bb6\r\n}\r\n\r\n.social-icons a.dribbble:hover\r\n{\r\n    background-color:#ea4c89\r\n}\r\n\r\n.searchbar\r\n{\r\n\tposition: absolute;\r\n  \ttop:300px;\r\n  \tleft: 400px;\r\n\tmax-width:700px;\r\n\tbackground-color: rgb(255, 255, 255);\r\n    box-shadow: rgba(0, 0, 0, 0.16) 4px 2px 4px 0px;\r\n\tpadding: 16px;\r\n\tz-index: 10;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n#sel1 option:hover\r\n{\r\n    background-color: #fff;\r\n    color:#33353d;\r\n}\r\n\r\n.hotel-link\r\n{\r\n    display:block;\r\n    padding:5px;\r\n    height:100%;\r\n    width:100%;\r\n    text-decoration:none;\r\n    cursor: pointer;\r\n    border:3px solid gray;\r\n    border-radius: 3px;\r\n}\r\n\r\n.hotelName\r\n{\r\n    color:#000;\r\n    font-weight: bold;\r\n}\r\n\r\n.hotelAddress\r\n{\r\n    color:gray;\r\n    font-weight: bold;\r\n}\r\n\r\n.manage a\r\n{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    color:gray;\r\n}\r\n\r\n.manage a:hover\r\n{\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    color:#f5b505;\r\n    background-color: black;\r\n    border-radius: 7px;\r\n}\r\n\r\n.manage button\r\n{\r\n    font-weight: bold;\r\n    font-family:cursive;\r\n    color:black;\r\n    margin:5px;\r\n}\r\n\r\n.hotelButton\r\n{\r\n    font-weight: bold;\r\n    font-family:cursive;\r\n    color:black;\r\n    margin:5px;\r\n}\r\n\r\n.menu-link\r\n{\r\n    display:block;\r\n    padding:5px;\r\n    height:100%;\r\n    width:100%;\r\n    text-decoration:none;\r\n    border:3px solid gray;\r\n    border-radius: 3px;\r\n}\r\n\r\n.order-link\r\n{\r\n    display:block;\r\n    padding:5px;\r\n    height:100%;\r\n    width:100%;\r\n    text-decoration:none;\r\n    border:3px solid gray;\r\n    border-radius: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1ob21lL3VzZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQztJQUNHLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0NBQ2hCOztBQUVBO0lBQ0csY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFHQTtBQUNBLFdBQVc7QUFDWDs7QUFHQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBQ0E7O0lBRUksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBQ0E7O0lBRUk7QUFDSjs7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Q7QUFDSjs7QUFDQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUNBOztJQUVJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBQ0E7O0lBRUksY0FBYztJQUNkO0FBQ0o7O0FBQ0E7O0lBRUk7QUFDSjs7QUFDQTs7SUFFSTtBQUNKOztBQUNBOztJQUVJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBQ0E7O0lBRUk7QUFDSjs7QUFDQTs7SUFFSTtBQUNKOztBQUNBOztJQUVJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBQ0E7O0lBRUk7QUFDSjs7QUFDQTs7SUFFSTs7T0FFRztJQUNIO0FBQ0o7O0FBQ0E7O0lBRUk7O1FBRUk7SUFDSjtJQUNBOztRQUVJO0lBQ0o7QUFDSjs7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7O0lBRUksb0JBQW9CO0lBQ3BCO0FBQ0o7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFHbEI7QUFDSjs7QUFDQTs7SUFFSSxVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCOztBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsVUFBVTtJQUNWO0FBQ0o7O0FBQ0E7O0lBRUk7QUFDSjs7QUFDQTs7SUFFSTtBQUNKOztBQUNBOztJQUVJO0FBQ0o7O0FBQ0E7O0lBRUk7QUFDSjs7QUFDQTs7Q0FFQyxrQkFBa0I7R0FDaEIsU0FBUztHQUNULFdBQVc7Q0FDYixlQUFlO0NBQ2Ysb0NBQW9DO0lBQ2pDLCtDQUErQztDQUNsRCxhQUFhO0NBQ2IsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFDQTs7SUFFSSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUNBOztJQUVJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBQ0E7O0lBRUksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFDQTs7SUFFSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUNBOztJQUVJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIgLnRhZ2xpbmVcclxue1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTonUGFjaWZpY28nICxjdXJzaXZlO1xyXG4gICAgY29sb3I6cmdiKDAsMCwwKTtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206OHB4O1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgbWFyZ2luOjBweDsgXHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG4gLnNpdGVuYW1le1xyXG4gICAgY29sb3I6I2Y1YjUwNTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuIH1cclxuXHJcbm5hdiBkaXYgZGl2I2NvbGxhcHNpYmxlTmF2YmFyICNsb2dvdXR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbm5hdiBkaXYgZGl2IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjojZjJjYzYxO1xyXG4gfVxyXG5cclxuIGRpdi5uYXZiYXItaGVhZGVye1xyXG4gICAgZGlzcGxheTppbmxpbmU7XHJcbn1cclxuXHJcbm5hdiBkaXYgZGl2I2NvbGxhcHNpYmxlTmF2YmFyIGxpIGEubmF2cGFnZXtcclxuICAgIGNvbG9yOiNlMGUwZTA7XHJcbiAgICBmb250LWZhbWlseTogJ0NoaWxhbmthJywgY3Vyc2l2ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIGZvbnQtc2l6ZToxOXB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICB0cmFuc2l0aW9uOmZvbnQtc2l6ZSAwLjNzO1xyXG59XHJcbnVsIGxpLmxpc3RidXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDowcHg7XHJcbn1cclxuXHJcbm5hdiBkaXYgZGl2I2NvbGxhcHNpYmxlTmF2YmFyIGxpIGEubmF2cGFnZTpob3ZlcntcclxuICAgIGZvbnQtc2l6ZToyMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNmNWI1MDU7XHJcbn1cclxudWwgbGkgYS5hY3RpdmV7XHJcbiAgICBmb250LXNpemU6MjFweDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZjViNTA1O1xyXG59XHJcbm5hdiBkaXYgdWwgbGl7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufVxyXG5cclxuXHJcbi5mYS5mYS1uYXZpY29uIHtcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG4ud2VsY29tZXtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjojZjViNTA1O1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxufVxyXG4uc2l0ZS1mb290ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjYyNzJiO1xyXG4gICAgcGFkZGluZzo0NXB4IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MjRweDtcclxuICAgIGNvbG9yOiM3MzczNzM7XHJcbn1cclxuLnNpdGUtZm9vdGVyIGhyXHJcbntcclxuICAgIGJvcmRlci10b3AtY29sb3I6I2JiYjtcclxuICAgIG9wYWNpdHk6MC41XHJcbn1cclxuLnNpdGUtZm9vdGVyIGhyLnNtYWxsXHJcbntcclxuICAgIG1hcmdpbjoyMHB4IDBcclxufVxyXG4uc2l0ZS1mb290ZXIgaDZcclxue1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzoycHhcclxufVxyXG4uc2l0ZS1mb290ZXIgYVxyXG57XHJcbiAgICBjb2xvcjojNzM3MzczO1xyXG59XHJcbi5zaXRlLWZvb3RlciBhOmhvdmVyXHJcbntcclxuICAgIGNvbG9yOiNmNWI1MDU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZm9vdGVyLWxpbmtzXHJcbntcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgbGlzdC1zdHlsZTpub25lXHJcbn1cclxuLmZvb3Rlci1saW5rcyBsaVxyXG57XHJcbiAgICBkaXNwbGF5OmJsb2NrXHJcbn1cclxuLmZvb3Rlci1saW5rcyBhXHJcbntcclxuICAgIGNvbG9yOiM3MzczNzNcclxufVxyXG4uZm9vdGVyLWxpbmtzIGE6YWN0aXZlLC5mb290ZXItbGlua3MgYTpmb2N1cywuZm9vdGVyLWxpbmtzIGE6aG92ZXJcclxue1xyXG4gICAgY29sb3I6I2Y1YjUwNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5mb290ZXItbGlua3MuaW5saW5lIGxpXHJcbntcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbn1cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnNcclxue1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodFxyXG59XHJcbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGFcclxue1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjZweDtcclxuICAgIG1hcmdpbi1yaWdodDowO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzMzNTNkXHJcbn1cclxuLmNvcHlyaWdodC10ZXh0XHJcbntcclxuICAgIG1hcmdpbjowXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpXHJcbntcclxuICAgIC5zaXRlLWZvb3RlciBbY2xhc3NePWNvbC1dXHJcbiAgICB7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOjMwcHhcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweClcclxue1xyXG4gICAgLnNpdGUtZm9vdGVyXHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MFxyXG4gICAgfVxyXG4gICAgLnNpdGUtZm9vdGVyIC5jb3B5cmlnaHQtdGV4dCwuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29uc1xyXG4gICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgICB9XHJcbn1cclxuLnNvY2lhbC1pY29uc1xyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZVxyXG59XHJcbi5zb2NpYWwtaWNvbnMgbGlcclxue1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOjRweFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgbGkudGl0bGVcclxue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjojOTZhMmIyO1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgZm9udC1zaXplOjEzcHhcclxufVxyXG4uc29jaWFsLWljb25zIGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWY7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OjQ0cHg7XHJcbiAgICB3aWR0aDo0NHB4O1xyXG4gICAgaGVpZ2h0OjQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDo4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhclxyXG59XHJcbi5zb2NpYWwtaWNvbnMgYTphY3RpdmUsLnNvY2lhbC1pY29ucyBhOmZvY3VzLC5zb2NpYWwtaWNvbnMgYTpob3ZlclxyXG57XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjViNTA1O1xyXG59XHJcbi5zb2NpYWwtaWNvbnMuc2l6ZS1zbSBhXHJcbntcclxuICAgIGxpbmUtaGVpZ2h0OjM0cHg7XHJcbiAgICBoZWlnaHQ6MzRweDtcclxuICAgIHdpZHRoOjM0cHg7XHJcbiAgICBmb250LXNpemU6MTRweFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgYS5mYWNlYm9vazpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OThcclxufVxyXG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGFjZWRcclxufVxyXG4uc29jaWFsLWljb25zIGEubGlua2VkaW46aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3YmI2XHJcbn1cclxuLnNvY2lhbC1pY29ucyBhLmRyaWJiYmxlOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VhNGM4OVxyXG59XHJcbi5zZWFyY2hiYXJcclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcdHRvcDozMDBweDtcclxuICBcdGxlZnQ6IDQwMHB4O1xyXG5cdG1heC13aWR0aDo3MDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDRweCAycHggNHB4IDBweDtcclxuXHRwYWRkaW5nOiAxNnB4O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4jc2VsMSBvcHRpb246aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiMzMzM1M2Q7XHJcbn1cclxuLmhvdGVsLWxpbmtcclxue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmhvdGVsTmFtZVxyXG57XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmhvdGVsQWRkcmVzc1xyXG57XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hbmFnZSBhXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4ubWFuYWdlIGE6aG92ZXJcclxue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojZjViNTA1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLm1hbmFnZSBidXR0b25cclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBtYXJnaW46NXB4O1xyXG59XHJcblxyXG4uaG90ZWxCdXR0b25cclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBtYXJnaW46NXB4O1xyXG59XHJcbi5tZW51LWxpbmtcclxue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLm9yZGVyLWxpbmtcclxue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user-home/user-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-home/user-home.component.ts ***!
  \**************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _db_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db-operation.service */ "./src/app/db-operation.service.ts");
/* harmony import */ var _model_userLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/userLogin */ "./src/app/model/userLogin.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UserHomeComponent = class UserHomeComponent {
    constructor(dbServ, cookieService, router) {
        this.dbServ = dbServ;
        this.cookieService = cookieService;
        this.router = router;
    }
    ngOnInit() {
        this.isOrdered = false;
        this.selectedCity = false;
        this.hotelSelected = false;
        this.isOnMenu = true;
        this.isItemSelected = true;
        console.log('In User Home');
        console.log(this.cookieService.get('user'));
        if (this.cookieService.get('user')) {
            this.dbServ.UserHome(this.cookieService.get('user')).subscribe(data => {
                console.log(data);
                this.userDetails = new _model_userLogin__WEBPACK_IMPORTED_MODULE_3__["UserDetails"](data.email, data.password, data.firstName, data.lastName, data.contactNumber, data.addresses);
                console.log(this.userDetails);
                this.userName = this.userDetails['firstName'];
            });
        }
        else {
            this.router.navigate(['login']);
        }
    }
    onLogoutClick() {
        this.cookieService.delete('user');
        console.log("cookie deleted and logging out");
        this.router.navigate(['']);
    }
    setHotels(hotels) {
        this.hotels = hotels;
    }
    onManageClick() {
        this.router.navigate(['manageUser']);
    }
    changeInCity(newValue) {
        this.isOrdered = false;
        this.isOnMenu = true;
        console.log('Change in select');
        console.log(newValue.target.value);
        var cityname = newValue.target.value;
        if (cityname != "Select City") {
            this.selectedCity = true;
            this.hotelSelected = false;
            this.dbServ.showHotelDetails(cityname).subscribe(data => {
                console.log('In Subscribe Method');
                var hotelData = new Array();
                data.forEach(function (hd) {
                    var menusOfHotel = new Array();
                    var j;
                    for (j = 0; j < hd.menu.length; j++) {
                        menusOfHotel.push(new _model_userLogin__WEBPACK_IMPORTED_MODULE_3__["Menu"](hd.menu[j].itemName, hd.menu[j].itemType, hd.menu[j].foodType, hd.menu[j].price));
                    }
                    hotelData.push(new _model_userLogin__WEBPACK_IMPORTED_MODULE_3__["HotelDetails"](hd._id, hd.hotelName, hd.hotelEmail, hd.hotelContactNo, hd.address, hd.city, hd.state, hd.pincode, menusOfHotel));
                });
                this.setHotels(hotelData);
                console.log(this.hotels);
            });
        }
        else {
            this.selectedCity = false;
            this.hotelSelected = false;
        }
    }
    onHotelClick(newValue) {
        this.isOnMenu = false;
        this.items = new Array();
        //this.menus=new Array<Menu>()
        this.hotelSelected = true;
        this.selectedCity = false;
        console.log(newValue);
        this.hotelName = newValue;
        var i, j;
        for (i = 0; i < this.hotels.length; i++) {
            if (this.hotels[i].hotelName == newValue) {
                console.log(this.hotels[i]);
                this.hotelEmail = this.hotels[i].hotelEmail;
                //this.menus=this.hotels[i].menu
                for (j = 0; j < this.hotels[i].menu.length; j++) {
                    this.items.push(new _model_userLogin__WEBPACK_IMPORTED_MODULE_3__["Item"](this.hotels[i].menu[j].itemName, this.hotels[i].menu[j].itemType, this.hotels[i].menu[j].foodType, this.hotels[i].menu[j].price, 0));
                }
                //this.orderDetails=new OrderDetails()
                console.log(this.items);
                break;
            }
        }
    }
    onMinus(newValue) {
        var k;
        var count = 0;
        for (k = 0; k < this.items.length; k++) {
            if (this.items[k].itemName == newValue) {
                if (this.items[k].quantity > 0) {
                    this.items[k].quantity -= 1;
                }
            }
            if (this.items[k].quantity == 0) {
                count++;
            }
        }
        if (count == this.items.length) {
            this.isItemSelected = true;
        }
        console.log(this.items);
    }
    onPlus(newValue) {
        this.isItemSelected = false;
        var k;
        for (k = 0; k < this.items.length; k++) {
            if (this.items[k].itemName == newValue) {
                this.items[k].quantity = this.items[k].quantity + 1;
                break;
            }
        }
        console.log(this.items);
    }
    onMakePayment() {
        this.isOrdered = true;
        var today = new Date();
        var month = today.getMonth() + 1;
        var date = today.getDate() + "/" + month + "/" + today.getFullYear();
        console.log(date);
        var itemsOrdered = new Array();
        var totalAmount = 0;
        var netItems = 0;
        var k;
        for (k = 0; k < this.items.length; k++) {
            if (this.items[k].quantity > 0) {
                itemsOrdered.push(this.items[k]);
                totalAmount = totalAmount + this.items[k].quantity * this.items[k].price;
                netItems = netItems + this.items[k].quantity;
            }
        }
        console.log(itemsOrdered);
        console.log(this.hotelName);
        console.log(this.hotelEmail);
        this.orderDetails = new _model_userLogin__WEBPACK_IMPORTED_MODULE_3__["OrderDetails"](date, this.hotelName, this.hotelEmail, this.userDetails.email, totalAmount, "pending", "Cash On Delievery", netItems, itemsOrdered);
        console.log(this.orderDetails);
    }
    placeOrder() {
        this.dbServ.orderPlace(this.orderDetails).subscribe(data => {
            console.log(data);
            var message = data['message'];
            console.log(message);
            if (message == "Success") {
                alert("Your Order is placed successfully");
                this.isOrdered = false;
                this.isOnMenu = true;
                this.isItemSelected = false;
                this.selectedCity = false;
                this.hotelSelected = false;
            }
        });
    }
    goToHotels() {
        this.isOrdered = false;
        this.hotelSelected = false;
        this.isItemSelected = false;
        this.selectedCity = true;
        this.isOnMenu = true;
    }
};
UserHomeComponent.ctorParameters = () => [
    { type: _db_operation_service__WEBPACK_IMPORTED_MODULE_2__["DbOperationService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-home/user-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-home.component.css */ "./src/app/user-home/user-home.component.css")).default]
    })
], UserHomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\clg\ATProject\FoodDelieveryApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map