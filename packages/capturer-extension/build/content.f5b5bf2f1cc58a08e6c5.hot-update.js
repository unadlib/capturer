webpackHotUpdate("content",{

/***/ "./src/js/content/index.js":
/*!*********************************!*\
  !*** ./src/js/content/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function interceptData() {\n    var xhrOverrideScript = document.createElement('script');\n    xhrOverrideScript.type = 'text/javascript';\n    xhrOverrideScript.innerHTML = `\n    (function() {\n      var XHR = XMLHttpRequest.prototype;\n      var send = XHR.send;\n      var open = XHR.open;\n      XHR.open = function(method, url) {\n          return open.apply(this, arguments);\n      }\n      XHR.send = function() {\n            function callback() {\n                const log = { response: this.response, url: this.responseURL };\n                console.info(log);\n                chrome.runtime.sendMessage({content:'从main.js发送给background.js',},function(response) {\n                    console.log('content get response:',response);\n                });\n                this.removeEventListener('load', callback);\n            };\n            this.addEventListener('load', callback);\n            return send.apply(this, arguments);\n      };\n    })();\n    `;\n    document.head.prepend(xhrOverrideScript);\n}\nfunction checkForDOM() {\n    if (document.body && document.head) {\n        interceptData();\n    } else {\n        requestIdleCallback(checkForDOM);\n    }\n}\n\nrequestIdleCallback(checkForDOM);\n\n// function sendmessage(){\n//     var msg = {content:'从main.js发送给background.js',};\n//     chrome.runtime.sendMessage(msg,function(response) {\n//         console.log('content get response:',response);\n//     });\n// }\n// sendmessage()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50L2luZGV4LmpzPzgxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW50ZXJjZXB0RGF0YSgpIHtcbiAgICB2YXIgeGhyT3ZlcnJpZGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB4aHJPdmVycmlkZVNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgeGhyT3ZlcnJpZGVTY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBYSFIgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICB2YXIgc2VuZCA9IFhIUi5zZW5kO1xuICAgICAgdmFyIG9wZW4gPSBYSFIub3BlbjtcbiAgICAgIFhIUi5vcGVuID0gZnVuY3Rpb24obWV0aG9kLCB1cmwpIHtcbiAgICAgICAgICByZXR1cm4gb3Blbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgWEhSLnNlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvZyA9IHsgcmVzcG9uc2U6IHRoaXMucmVzcG9uc2UsIHVybDogdGhpcy5yZXNwb25zZVVSTCB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhsb2cpO1xuICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtjb250ZW50Oifku45tYWluLmpz5Y+R6YCB57uZYmFja2dyb3VuZC5qcycsfSxmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29udGVudCBnZXQgcmVzcG9uc2U6JyxyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiBzZW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLnByZXBlbmQoeGhyT3ZlcnJpZGVTY3JpcHQpO1xufVxuZnVuY3Rpb24gY2hlY2tGb3JET00oKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkgJiYgZG9jdW1lbnQuaGVhZCkge1xuICAgICAgICBpbnRlcmNlcHREYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjayhjaGVja0ZvckRPTSk7XG4gICAgfVxufVxuXG5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNoZWNrRm9yRE9NKTtcblxuLy8gZnVuY3Rpb24gc2VuZG1lc3NhZ2UoKXtcbi8vICAgICB2YXIgbXNnID0ge2NvbnRlbnQ6J+S7jm1haW4uanPlj5HpgIHnu5liYWNrZ3JvdW5kLmpzJyx9O1xuLy8gICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZyxmdW5jdGlvbihyZXNwb25zZSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnY29udGVudCBnZXQgcmVzcG9uc2U6JyxyZXNwb25zZSk7XG4vLyAgICAgfSk7XG4vLyB9XG4vLyBzZW5kbWVzc2FnZSgpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/content/index.js\n");

/***/ })

})