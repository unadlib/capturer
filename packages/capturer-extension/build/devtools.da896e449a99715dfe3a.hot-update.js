webpackHotUpdate("devtools",{

/***/ "./src/js/devtools/index.js":
/*!**********************************!*\
  !*** ./src/js/devtools/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.devtools.panels.create(\"Capturer\", null, 'panel.html', panel => {\n    panel.onShown.addListener(function (window) {\n        var port = chrome.runtime.connect({\n            name: 'panel'\n        });\n\n        port.postMessage({\n            name: 'init',\n            tabId: chrome.devtools.inspectedWindow.tabId\n        });\n\n        port.onMessage.addListener(function(request) {\n            if (request.type === 'init_routes') {\n                var actions = request.actions || [];\n                window.cyraOps.initRoute(request.routes, actions);\n            } else if (request.type === 'switch_route') {\n                window.cyraOps.switchRoute(request.pathObj);\n            }\n        });\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGV2dG9vbHMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGV2dG9vbHMvaW5kZXguanM/ZTkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUuZGV2dG9vbHMucGFuZWxzLmNyZWF0ZShcIkNhcHR1cmVyXCIsIG51bGwsICdwYW5lbC5odG1sJywgcGFuZWwgPT4ge1xuICAgIHBhbmVsLm9uU2hvd24uYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHdpbmRvdykge1xuICAgICAgICB2YXIgcG9ydCA9IGNocm9tZS5ydW50aW1lLmNvbm5lY3Qoe1xuICAgICAgICAgICAgbmFtZTogJ3BhbmVsJ1xuICAgICAgICB9KTtcblxuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIG5hbWU6ICdpbml0JyxcbiAgICAgICAgICAgIHRhYklkOiBjaHJvbWUuZGV2dG9vbHMuaW5zcGVjdGVkV2luZG93LnRhYklkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdpbml0X3JvdXRlcycpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9ucyA9IHJlcXVlc3QuYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3lyYU9wcy5pbml0Um91dGUocmVxdWVzdC5yb3V0ZXMsIGFjdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdzd2l0Y2hfcm91dGUnKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmN5cmFPcHMuc3dpdGNoUm91dGUocmVxdWVzdC5wYXRoT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/devtools/index.js\n");

/***/ })

})