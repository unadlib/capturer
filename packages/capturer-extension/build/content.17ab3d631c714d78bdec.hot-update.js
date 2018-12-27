webpackHotUpdate("content",{

/***/ "./src/js/content/index.js":
/*!*********************************!*\
  !*** ./src/js/content/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function interceptData() {\n    var xhrOverrideScript = document.createElement('script');\n    xhrOverrideScript.type = 'text/javascript';\n    xhrOverrideScript.innerHTML = `\n    (function() {\n        var log = console.log;\n        console.log = function() {\n            window.postMessage({ type: 'log', log: arguments }, '*');\n            return log.apply(this, arguments);\n        };\n        var XHR = XMLHttpRequest.prototype;\n        var send = XHR.send;\n        var open = XHR.open;\n        XHR.open = function(method, url) {\n            return open.apply(this, arguments);\n        }\n        XHR.send = function() {\n                function callback() {\n                    const log = { response: this.response, url: this.responseURL, type: 'content', };\n                    window.postMessage(log, '*');\n                    this.removeEventListener('load', callback);\n                };\n                this.addEventListener('load', callback);\n                return send.apply(this, arguments);\n        };\n    })();\n    `;\n    document.head.prepend(xhrOverrideScript);\n}\n\nfunction checkForDOM() {\n    if (document.body && document.head) {\n        interceptData();\n    } else {\n        requestIdleCallback(checkForDOM);\n    }\n}\n\nrequestIdleCallback(checkForDOM);\n\nwindow.addEventListener('message', (event) => {\n    if (event.source != window) return;\n    chrome.runtime.sendMessage(event.data);\n}, false);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50L2luZGV4LmpzPzgxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW50ZXJjZXB0RGF0YSgpIHtcbiAgICB2YXIgeGhyT3ZlcnJpZGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB4aHJPdmVycmlkZVNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgeGhyT3ZlcnJpZGVTY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgICBjb25zb2xlLmxvZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ2xvZycsIGxvZzogYXJndW1lbnRzIH0sICcqJyk7XG4gICAgICAgICAgICByZXR1cm4gbG9nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBYSFIgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICAgIHZhciBzZW5kID0gWEhSLnNlbmQ7XG4gICAgICAgIHZhciBvcGVuID0gWEhSLm9wZW47XG4gICAgICAgIFhIUi5vcGVuID0gZnVuY3Rpb24obWV0aG9kLCB1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBvcGVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgWEhSLnNlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9nID0geyByZXNwb25zZTogdGhpcy5yZXNwb25zZSwgdXJsOiB0aGlzLnJlc3BvbnNlVVJMLCB0eXBlOiAnY29udGVudCcsIH07XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShsb2csICcqJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLnByZXBlbmQoeGhyT3ZlcnJpZGVTY3JpcHQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckRPTSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5oZWFkKSB7XG4gICAgICAgIGludGVyY2VwdERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKGNoZWNrRm9yRE9NKTtcbiAgICB9XG59XG5cbnJlcXVlc3RJZGxlQ2FsbGJhY2soY2hlY2tGb3JET00pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5zb3VyY2UgIT0gd2luZG93KSByZXR1cm47XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoZXZlbnQuZGF0YSk7XG59LCBmYWxzZSk7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/content/index.js\n");

/***/ })

})