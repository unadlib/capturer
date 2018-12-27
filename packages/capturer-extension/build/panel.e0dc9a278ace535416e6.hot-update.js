webpackHotUpdate("panel",{

/***/ "./src/js/panel/index.js":
/*!*******************************!*\
  !*** ./src/js/panel/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.devtools.network.onRequestFinished.addListener(request => {\n    request.getContent(body => {\n      if (request.request && request.request.url) {\n        chrome.runtime.sendMessage({\n            url: request.request.url,\n            response: body,\n        });\n      }\n    });\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcGFuZWwvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFuZWwvaW5kZXguanM/NGJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUuZGV2dG9vbHMubmV0d29yay5vblJlcXVlc3RGaW5pc2hlZC5hZGRMaXN0ZW5lcihyZXF1ZXN0ID0+IHtcbiAgICByZXF1ZXN0LmdldENvbnRlbnQoYm9keSA9PiB7XG4gICAgICBpZiAocmVxdWVzdC5yZXF1ZXN0ICYmIHJlcXVlc3QucmVxdWVzdC51cmwpIHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdXJsOiByZXF1ZXN0LnJlcXVlc3QudXJsLFxuICAgICAgICAgICAgcmVzcG9uc2U6IGJvZHksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/panel/index.js\n");

/***/ })

})