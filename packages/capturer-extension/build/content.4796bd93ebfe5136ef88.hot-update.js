webpackHotUpdate("content",{

/***/ "./src/js/content/index.js":
/*!*********************************!*\
  !*** ./src/js/content/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function interceptData() {\n    var xhrOverrideScript = document.createElement('script');\n    xhrOverrideScript.type = 'text/javascript';\n    xhrOverrideScript.innerHTML = `\n    (function() {\n      var XHR = XMLHttpRequest.prototype;\n      var send = XHR.send;\n      var open = XHR.open;\n      XHR.open = function(method, url) {\n          this.url = url; // the request url\n          return open.apply(this, arguments);\n      }\n      XHR.send = function() {\n          this.addEventListener('load', function() {\n                console.log(this.response);\n              if (this.url.includes('<url-you-want-to-intercept>')) {\n                //   var dataDOMElement = document.createElement('div');\n                //   dataDOMElement.id = '__interceptedData';\n                //   dataDOMElement.innerText = this.response;\n                //   dataDOMElement.style.height = 0;\n                //   dataDOMElement.style.overflow = 'hidden';\n                //   document.body.appendChild(dataDOMElement);\n                console.log(this.response);\n              }               \n          });\n          console.log(this.url);\n          return send.apply(this, arguments);\n      };\n    })();\n    `\n    document.head.prepend(xhrOverrideScript);\n  }\n  function checkForDOM() {\n    if (document.body && document.head) {\n      interceptData();\n    } else {\n      requestIdleCallback(checkForDOM);\n    }\n  }\n  requestIdleCallback(checkForDOM);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jb250ZW50L2luZGV4LmpzPzgxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW50ZXJjZXB0RGF0YSgpIHtcbiAgICB2YXIgeGhyT3ZlcnJpZGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB4aHJPdmVycmlkZVNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgeGhyT3ZlcnJpZGVTY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBYSFIgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICB2YXIgc2VuZCA9IFhIUi5zZW5kO1xuICAgICAgdmFyIG9wZW4gPSBYSFIub3BlbjtcbiAgICAgIFhIUi5vcGVuID0gZnVuY3Rpb24obWV0aG9kLCB1cmwpIHtcbiAgICAgICAgICB0aGlzLnVybCA9IHVybDsgLy8gdGhlIHJlcXVlc3QgdXJsXG4gICAgICAgICAgcmV0dXJuIG9wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIFhIUi5zZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmNsdWRlcygnPHVybC15b3Utd2FudC10by1pbnRlcmNlcHQ+JykpIHtcbiAgICAgICAgICAgICAgICAvLyAgIHZhciBkYXRhRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIC8vICAgZGF0YURPTUVsZW1lbnQuaWQgPSAnX19pbnRlcmNlcHRlZERhdGEnO1xuICAgICAgICAgICAgICAgIC8vICAgZGF0YURPTUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAvLyAgIGRhdGFET01FbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgLy8gICBkYXRhRE9NRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkYXRhRE9NRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVybCk7XG4gICAgICAgICAgcmV0dXJuIHNlbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgICBgXG4gICAgZG9jdW1lbnQuaGVhZC5wcmVwZW5kKHhock92ZXJyaWRlU2NyaXB0KTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja0ZvckRPTSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5oZWFkKSB7XG4gICAgICBpbnRlcmNlcHREYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soY2hlY2tGb3JET00pO1xuICAgIH1cbiAgfVxuICByZXF1ZXN0SWRsZUNhbGxiYWNrKGNoZWNrRm9yRE9NKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/content/index.js\n");

/***/ })

})