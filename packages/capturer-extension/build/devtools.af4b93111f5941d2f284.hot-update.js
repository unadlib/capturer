webpackHotUpdate("devtools",{

/***/ "./src/js/devtools/index.js":
/*!**********************************!*\
  !*** ./src/js/devtools/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.devtools.panels.create(\"Capturer\", null, 'panel.html');\n\nchrome.devtools.network.onRequestFinished.addListener(request => {\n    request.getContent(body => {\n      if (request.request && request.request.url) {\n        // chrome.runtime.sendMessage({\n        //   url: request.request.url,\n        //   response: body,\n        // });\n      }\n    });\n  });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGV2dG9vbHMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGV2dG9vbHMvaW5kZXguanM/ZTkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUuZGV2dG9vbHMucGFuZWxzLmNyZWF0ZShcIkNhcHR1cmVyXCIsIG51bGwsICdwYW5lbC5odG1sJyk7XG5cbmNocm9tZS5kZXZ0b29scy5uZXR3b3JrLm9uUmVxdWVzdEZpbmlzaGVkLmFkZExpc3RlbmVyKHJlcXVlc3QgPT4ge1xuICAgIHJlcXVlc3QuZ2V0Q29udGVudChib2R5ID0+IHtcbiAgICAgIGlmIChyZXF1ZXN0LnJlcXVlc3QgJiYgcmVxdWVzdC5yZXF1ZXN0LnVybCkge1xuICAgICAgICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIC8vICAgdXJsOiByZXF1ZXN0LnJlcXVlc3QudXJsLFxuICAgICAgICAvLyAgIHJlc3BvbnNlOiBib2R5LFxuICAgICAgICAvLyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/devtools/index.js\n");

/***/ })

})