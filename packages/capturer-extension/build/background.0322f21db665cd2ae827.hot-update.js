webpackHotUpdate("background",{

/***/ "./src/js/background/index.js":
/*!************************************!*\
  !*** ./src/js/background/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.webRequest.onCompleted.addListener(\n    (details) => {\n        console.log(details);\n    },\n    { urls: [\"<all_urls>\"] },\n    [\"responseHeaders\", \"extraHeaders\"]\n);\n\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n    console.log(request);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kL2luZGV4LmpzP2I0ZTciXSwic291cmNlc0NvbnRlbnQiOlsiY2hyb21lLndlYlJlcXVlc3Qub25Db21wbGV0ZWQuYWRkTGlzdGVuZXIoXG4gICAgKGRldGFpbHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGV0YWlscyk7XG4gICAgfSxcbiAgICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0gfSxcbiAgICBbXCJyZXNwb25zZUhlYWRlcnNcIiwgXCJleHRyYUhlYWRlcnNcIl1cbik7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/background/index.js\n");

/***/ })

})