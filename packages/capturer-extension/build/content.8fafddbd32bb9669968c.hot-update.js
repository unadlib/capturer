webpackHotUpdate("content",{

/***/ "./src/js/content/index.js":
/*!*********************************!*\
  !*** ./src/js/content/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function interceptData() {\n    var xhrOverrideScript = document.createElement('script');\n    xhrOverrideScript.type = 'text/javascript';\n    xhrOverrideScript.innerHTML = `\n    (function() {\n      var XHR = XMLHttpRequest.prototype;\n      var send = XHR.send;\n      var open = XHR.open;\n      XHR.open = function(method, url) {\n          return open.apply(this, arguments);\n      }\n      XHR.send = function() {\n            function callback() {\n                const log = { response: this.response, url: this.responseURL };\n                console.info(log);\n                window.postMessage({ type: \"FROM_PAGE\", text: \"Hello from the webpage!\" }, \"*\");\n                // chrome.runtime.sendMessage('cliaamkmfaodlopfgjbknnoihmcnbbge', log);\n                this.removeEventListener('load', callback);\n            };\n            this.addEventListener('load', callback);\n            return send.apply(this, arguments);\n      };\n    })();\n    `;\n    document.head.prepend(xhrOverrideScript);\n}\nfunction checkForDOM() {\n    if (document.body && document.head) {\n        interceptData();\n    } else {\n        requestIdleCallback(checkForDOM);\n    }\n}\n\nrequestIdleCallback(checkForDOM);\n\nvar port = chrome.runtime.connect();\n\nwindow.addEventListener('message', (event) => {\n    if (event.source != window) return;\n    chrome.runtime.sendMessage(event.data);\n}, false);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50L2luZGV4LmpzPzgxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW50ZXJjZXB0RGF0YSgpIHtcbiAgICB2YXIgeGhyT3ZlcnJpZGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB4aHJPdmVycmlkZVNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgeGhyT3ZlcnJpZGVTY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBYSFIgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICB2YXIgc2VuZCA9IFhIUi5zZW5kO1xuICAgICAgdmFyIG9wZW4gPSBYSFIub3BlbjtcbiAgICAgIFhIUi5vcGVuID0gZnVuY3Rpb24obWV0aG9kLCB1cmwpIHtcbiAgICAgICAgICByZXR1cm4gb3Blbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgWEhSLnNlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvZyA9IHsgcmVzcG9uc2U6IHRoaXMucmVzcG9uc2UsIHVybDogdGhpcy5yZXNwb25zZVVSTCB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhsb2cpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiRlJPTV9QQUdFXCIsIHRleHQ6IFwiSGVsbG8gZnJvbSB0aGUgd2VicGFnZSFcIiB9LCBcIipcIik7XG4gICAgICAgICAgICAgICAgLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoJ2NsaWFhbWttZmFvZGxvcGZnamJrbm5vaWhtY25iYmdlJywgbG9nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHNlbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgICBgO1xuICAgIGRvY3VtZW50LmhlYWQucHJlcGVuZCh4aHJPdmVycmlkZVNjcmlwdCk7XG59XG5mdW5jdGlvbiBjaGVja0ZvckRPTSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5oZWFkKSB7XG4gICAgICAgIGludGVyY2VwdERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKGNoZWNrRm9yRE9NKTtcbiAgICB9XG59XG5cbnJlcXVlc3RJZGxlQ2FsbGJhY2soY2hlY2tGb3JET00pO1xuXG52YXIgcG9ydCA9IGNocm9tZS5ydW50aW1lLmNvbm5lY3QoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuc291cmNlICE9IHdpbmRvdykgcmV0dXJuO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGV2ZW50LmRhdGEpO1xufSwgZmFsc2UpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/content/index.js\n");

/***/ })

})