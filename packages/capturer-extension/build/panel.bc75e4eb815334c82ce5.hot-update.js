webpackHotUpdate("panel",{

/***/ "./src/js/panel/index.js":
/*!*******************************!*\
  !*** ./src/js/panel/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.devtools.network.onRequestFinished.addListener(request => {\n    request.getContent((body) => {\n      if (request.request && request.request.url) {\n        console.log(request.request.url);\n        // chrome.runtime.sendMessage({\n        //     response: body\n        // });\n      }\n    });\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcGFuZWwvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFuZWwvaW5kZXguanM/NGJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUuZGV2dG9vbHMubmV0d29yay5vblJlcXVlc3RGaW5pc2hlZC5hZGRMaXN0ZW5lcihyZXF1ZXN0ID0+IHtcbiAgICByZXF1ZXN0LmdldENvbnRlbnQoKGJvZHkpID0+IHtcbiAgICAgIGlmIChyZXF1ZXN0LnJlcXVlc3QgJiYgcmVxdWVzdC5yZXF1ZXN0LnVybCkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnJlcXVlc3QudXJsKTtcbiAgICAgICAgLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAvLyAgICAgcmVzcG9uc2U6IGJvZHlcbiAgICAgICAgLy8gfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/panel/index.js\n");

/***/ })

})