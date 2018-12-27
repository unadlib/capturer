webpackHotUpdate("content",{

/***/ "./src/js/content/index.js":
/*!*********************************!*\
  !*** ./src/js/content/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function interceptData() {\n    var XHR = XMLHttpRequest.prototype;\n    var send = XHR.send;\n    var open = XHR.open;\n    XHR.open = function(method, url) {\n        this.url = url; // the request url\n        return open.apply(this, arguments);\n    }\n    XHR.send = function() {\n        function callback() {\n            console.info(this.response);\n            this.removeEventListener('load', callback);\n        };\n        this.addEventListener('load', callback);\n        return send.apply(this, arguments);\n    };\n}\nfunction checkForDOM() {\n    if (document.body && document.head) {\n        interceptData();\n    } else {\n        requestIdleCallback(checkForDOM);\n    }\n}\n\nrequestIdleCallback(checkForDOM);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50L2luZGV4LmpzPzgxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW50ZXJjZXB0RGF0YSgpIHtcbiAgICB2YXIgWEhSID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgIHZhciBzZW5kID0gWEhSLnNlbmQ7XG4gICAgdmFyIG9wZW4gPSBYSFIub3BlbjtcbiAgICBYSFIub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsOyAvLyB0aGUgcmVxdWVzdCB1cmxcbiAgICAgICAgcmV0dXJuIG9wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgWEhSLnNlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8odGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHNlbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tGb3JET00oKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkgJiYgZG9jdW1lbnQuaGVhZCkge1xuICAgICAgICBpbnRlcmNlcHREYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjayhjaGVja0ZvckRPTSk7XG4gICAgfVxufVxuXG5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNoZWNrRm9yRE9NKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/content/index.js\n");

/***/ })

})