webpackHotUpdate("panel",{

/***/ "./src/js/panel/index.js":
/*!*******************************!*\
  !*** ./src/js/panel/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.devtools.network.onRequestFinished.addListener(request => {\n  request.getContent(body => {\n    if (request.request && request.request.url) {\n      chrome.runtime.sendMessage({\n        url: request.request.url,\n        response: body,\n      });\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcGFuZWwvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFuZWwvaW5kZXguanM/NGJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUuZGV2dG9vbHMubmV0d29yay5vblJlcXVlc3RGaW5pc2hlZC5hZGRMaXN0ZW5lcihyZXF1ZXN0ID0+IHtcbiAgcmVxdWVzdC5nZXRDb250ZW50KGJvZHkgPT4ge1xuICAgIGlmIChyZXF1ZXN0LnJlcXVlc3QgJiYgcmVxdWVzdC5yZXF1ZXN0LnVybCkge1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICB1cmw6IHJlcXVlc3QucmVxdWVzdC51cmwsXG4gICAgICAgIHJlc3BvbnNlOiBib2R5LFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/panel/index.js\n");

/***/ })

})