webpackHotUpdate("content",{

/***/ "./src/js/content/index.js":
/*!*********************************!*\
  !*** ./src/js/content/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function interceptData() {\n    var xhrOverrideScript = document.createElement('script');\n    xhrOverrideScript.type = 'text/javascript';\n    xhrOverrideScript.innerHTML = `\n    (function() {\n      var XHR = XMLHttpRequest.prototype;\n      var send = XHR.send;\n      var open = XHR.open;\n      XHR.open = function(method, url) {\n          this.url = url; // the request url\n          return open.apply(this, arguments);\n      }\n      XHR.send = function() {\n            function callback() {\n                console.info(this.response);\n                this.removeEventListener('load', callback);\n            };\n            this.addEventListener('load', callback);\n            return send.apply(this, arguments);\n      };\n    })();\n    `\n    document.head.prepend(xhrOverrideScript);\n  }\n  function checkForDOM() {\n    if (document.body && document.head) {\n      interceptData();\n    } else {\n      requestIdleCallback(checkForDOM);\n    }\n  }\n  requestIdleCallback(checkForDOM);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50L2luZGV4LmpzPzgxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW50ZXJjZXB0RGF0YSgpIHtcbiAgICB2YXIgeGhyT3ZlcnJpZGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB4aHJPdmVycmlkZVNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgeGhyT3ZlcnJpZGVTY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBYSFIgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICB2YXIgc2VuZCA9IFhIUi5zZW5kO1xuICAgICAgdmFyIG9wZW4gPSBYSFIub3BlbjtcbiAgICAgIFhIUi5vcGVuID0gZnVuY3Rpb24obWV0aG9kLCB1cmwpIHtcbiAgICAgICAgICB0aGlzLnVybCA9IHVybDsgLy8gdGhlIHJlcXVlc3QgdXJsXG4gICAgICAgICAgcmV0dXJuIG9wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIFhIUi5zZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8odGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiBzZW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gICAgYFxuICAgIGRvY3VtZW50LmhlYWQucHJlcGVuZCh4aHJPdmVycmlkZVNjcmlwdCk7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tGb3JET00oKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkgJiYgZG9jdW1lbnQuaGVhZCkge1xuICAgICAgaW50ZXJjZXB0RGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKGNoZWNrRm9yRE9NKTtcbiAgICB9XG4gIH1cbiAgcmVxdWVzdElkbGVDYWxsYmFjayhjaGVja0ZvckRPTSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/content/index.js\n");

/***/ })

})