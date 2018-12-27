webpackHotUpdate("panel",{

/***/ "./src/js/panel/index.js":
/*!*******************************!*\
  !*** ./src/js/panel/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.devtools.network.onRequestFinished.addListener(request => {\n    request.getContent((body) => {\n      if (request.request && request.request.url) {\n        console.log(body);\n      }\n    });\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcGFuZWwvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFuZWwvaW5kZXguanM/NGJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUuZGV2dG9vbHMubmV0d29yay5vblJlcXVlc3RGaW5pc2hlZC5hZGRMaXN0ZW5lcihyZXF1ZXN0ID0+IHtcbiAgICByZXF1ZXN0LmdldENvbnRlbnQoKGJvZHkpID0+IHtcbiAgICAgIGlmIChyZXF1ZXN0LnJlcXVlc3QgJiYgcmVxdWVzdC5yZXF1ZXN0LnVybCkge1xuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/panel/index.js\n");

/***/ })

})