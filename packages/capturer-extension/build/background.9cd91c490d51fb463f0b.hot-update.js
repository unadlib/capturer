webpackHotUpdate("background",{

/***/ "./src/js/background/index.js":
/*!************************************!*\
  !*** ./src/js/background/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.webRequest.onCompleted.addListener(\n    detail => {\n        console.log(detail);\n    },\n    { urls: [\"<all_urls>\"] },\n    [\"responseHeaders\", \"extraHeaders\"]\n);\n\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n    console.log(request);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kL2luZGV4LmpzP2I0ZTciXSwic291cmNlc0NvbnRlbnQiOlsiY2hyb21lLndlYlJlcXVlc3Qub25Db21wbGV0ZWQuYWRkTGlzdGVuZXIoXG4gICAgZGV0YWlsID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGV0YWlsKTtcbiAgICB9LFxuICAgIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSB9LFxuICAgIFtcInJlc3BvbnNlSGVhZGVyc1wiLCBcImV4dHJhSGVhZGVyc1wiXVxuKTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/background/index.js\n");

/***/ })

})