webpackHotUpdate("background",{

/***/ "./src/js/background/index.js":
/*!************************************!*\
  !*** ./src/js/background/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_icon_128_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/icon-128.png */ \"./src/img/icon-128.png\");\n/* harmony import */ var _img_icon_128_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_icon_128_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_icon_34_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/icon-34.png */ \"./src/img/icon-34.png\");\n/* harmony import */ var _img_icon_34_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_icon_34_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n// chrome.devtools.network.onRequestFinished.addListener(\n//     function(request) {\n//       if (request.response.bodySize > 40*1024) {\n//         chrome.devtools.inspectedWindow.eval(\n//             'console.log(\"Large image: \" + unescape(\"' +\n//             escape(request.request.url) + '\"))');\n//       }\n// });\n\n// chrome.webRequest.onBeforeSendHeaders.addListener(\n//     function(details) {\n//     //   for (var i = 0; i < details.requestHeaders.length; ++i) {\n//     //     if (details.requestHeaders[i].name === 'User-Agent') {\n//     //       details.requestHeaders.splice(i, 1);\n//     //       break;\n//     //     }\n//     //   }\n//         console.log(details);\n//       return {requestHeaders: details.requestHeaders};\n//     },\n//     {urls: [\"<all_urls>\"]},\n//     [\"blocking\", \"requestHeaders\"]);\n\n\nchrome.webRequest.onCompleted.addListener((details) => {\n    console.log(details);\n},\n    { urls: [\"<all_urls>\"] },\n    [\"responseHeaders\", \"extraHeaders\"]\n);\n\nchrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {\n    console.log(request);\n    //   console.log(sender.tab ?\n    //               \"来自内容脚本：\" + sender.tab.url :\n    //               \"来自扩展程序\");\n    //   if (request.greeting == \"您好\")\n    //     sendResponse({farewell: \"再见\"});\n});\n\n\n\n    // (function() {\n    //     const tabStorage = {};\n    //     const networkFilters = {\n    //         urls: [\n    //             \"*://developer.mozilla.org/*\"\n    //         ]\n    //     };\n\n    //     chrome.webRequest.onBeforeRequest.addListener((details) => {\n    //         const { tabId, requestId } = details;\n    //         if (!tabStorage.hasOwnProperty(tabId)) {\n    //             return;\n    //         }\n\n    //         tabStorage[tabId].requests[requestId] = {\n    //             requestId: requestId,\n    //             url: details.url,\n    //             startTime: details.timeStamp,\n    //             status: 'pending'\n    //         };\n    //         console.log(tabStorage[tabId].requests[requestId]);\n    //     }, networkFilters);\n\n    //     chrome.webRequest.onCompleted.addListener((details) => {\n    //         const { tabId, requestId } = details;\n    //         if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {\n    //             return;\n    //         }\n\n    //         const request = tabStorage[tabId].requests[requestId];\n\n    //         Object.assign(request, {\n    //             endTime: details.timeStamp,\n    //             requestDuration: details.timeStamp - request.startTime,\n    //             status: 'complete'\n    //         });\n    //         console.log(tabStorage[tabId].requests[details.requestId]);\n    //     }, networkFilters);\n\n    //     chrome.webRequest.onErrorOccurred.addListener((details)=> {\n    //         const { tabId, requestId } = details;\n    //         if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {\n    //             return;\n    //         }\n\n    //         const request = tabStorage[tabId].requests[requestId];\n    //         Object.assign(request, {\n    //             endTime: details.timeStamp,           \n    //             status: 'error',\n    //         });\n    //         console.log(tabStorage[tabId].requests[requestId]);\n    //     }, networkFilters);\n\n    //     chrome.tabs.onActivated.addListener((tab) => {\n    //         const tabId = tab ? tab.tabId : chrome.tabs.TAB_ID_NONE;\n    //         if (!tabStorage.hasOwnProperty(tabId)) {\n    //             tabStorage[tabId] = {\n    //                 id: tabId,\n    //                 requests: {},\n    //                 registerTime: new Date().getTime()\n    //             };\n    //         }\n    //     });\n    //     chrome.tabs.onRemoved.addListener((tab) => {\n    //         const tabId = tab.tabId;\n    //         if (!tabStorage.hasOwnProperty(tabId)) {\n    //             return;\n    //         }\n    //         tabStorage[tabId] = null;\n    //     });\n    // }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kL2luZGV4LmpzP2I0ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi8uLi9pbWcvaWNvbi0xMjgucG5nJztcbmltcG9ydCAnLi4vLi4vaW1nL2ljb24tMzQucG5nJztcblxuXG4vLyBjaHJvbWUuZGV2dG9vbHMubmV0d29yay5vblJlcXVlc3RGaW5pc2hlZC5hZGRMaXN0ZW5lcihcbi8vICAgICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4vLyAgICAgICBpZiAocmVxdWVzdC5yZXNwb25zZS5ib2R5U2l6ZSA+IDQwKjEwMjQpIHtcbi8vICAgICAgICAgY2hyb21lLmRldnRvb2xzLmluc3BlY3RlZFdpbmRvdy5ldmFsKFxuLy8gICAgICAgICAgICAgJ2NvbnNvbGUubG9nKFwiTGFyZ2UgaW1hZ2U6IFwiICsgdW5lc2NhcGUoXCInICtcbi8vICAgICAgICAgICAgIGVzY2FwZShyZXF1ZXN0LnJlcXVlc3QudXJsKSArICdcIikpJyk7XG4vLyAgICAgICB9XG4vLyB9KTtcblxuLy8gY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVycy5hZGRMaXN0ZW5lcihcbi8vICAgICBmdW5jdGlvbihkZXRhaWxzKSB7XG4vLyAgICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGRldGFpbHMucmVxdWVzdEhlYWRlcnMubGVuZ3RoOyArK2kpIHtcbi8vICAgICAvLyAgICAgaWYgKGRldGFpbHMucmVxdWVzdEhlYWRlcnNbaV0ubmFtZSA9PT0gJ1VzZXItQWdlbnQnKSB7XG4vLyAgICAgLy8gICAgICAgZGV0YWlscy5yZXF1ZXN0SGVhZGVycy5zcGxpY2UoaSwgMSk7XG4vLyAgICAgLy8gICAgICAgYnJlYWs7XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2coZGV0YWlscyk7XG4vLyAgICAgICByZXR1cm4ge3JlcXVlc3RIZWFkZXJzOiBkZXRhaWxzLnJlcXVlc3RIZWFkZXJzfTtcbi8vICAgICB9LFxuLy8gICAgIHt1cmxzOiBbXCI8YWxsX3VybHM+XCJdfSxcbi8vICAgICBbXCJibG9ja2luZ1wiLCBcInJlcXVlc3RIZWFkZXJzXCJdKTtcblxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcigoZGV0YWlscykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRldGFpbHMpO1xufSxcbiAgICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0gfSxcbiAgICBbXCJyZXNwb25zZUhlYWRlcnNcIiwgXCJleHRyYUhlYWRlcnNcIl1cbik7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuICAgIC8vICAgY29uc29sZS5sb2coc2VuZGVyLnRhYiA/XG4gICAgLy8gICAgICAgICAgICAgICBcIuadpeiHquWGheWuueiEmuacrO+8mlwiICsgc2VuZGVyLnRhYi51cmwgOlxuICAgIC8vICAgICAgICAgICAgICAgXCLmnaXoh6rmianlsZXnqIvluo9cIik7XG4gICAgLy8gICBpZiAocmVxdWVzdC5ncmVldGluZyA9PSBcIuaCqOWlvVwiKVxuICAgIC8vICAgICBzZW5kUmVzcG9uc2Uoe2ZhcmV3ZWxsOiBcIuWGjeingVwifSk7XG59KTtcblxuXG5cbiAgICAvLyAoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnN0IHRhYlN0b3JhZ2UgPSB7fTtcbiAgICAvLyAgICAgY29uc3QgbmV0d29ya0ZpbHRlcnMgPSB7XG4gICAgLy8gICAgICAgICB1cmxzOiBbXG4gICAgLy8gICAgICAgICAgICAgXCIqOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnLypcIlxuICAgIC8vICAgICAgICAgXVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcigoZGV0YWlscykgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgeyB0YWJJZCwgcmVxdWVzdElkIH0gPSBkZXRhaWxzO1xuICAgIC8vICAgICAgICAgaWYgKCF0YWJTdG9yYWdlLmhhc093blByb3BlcnR5KHRhYklkKSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgdGFiU3RvcmFnZVt0YWJJZF0ucmVxdWVzdHNbcmVxdWVzdElkXSA9IHtcbiAgICAvLyAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcbiAgICAvLyAgICAgICAgICAgICB1cmw6IGRldGFpbHMudXJsLFxuICAgIC8vICAgICAgICAgICAgIHN0YXJ0VGltZTogZGV0YWlscy50aW1lU3RhbXAsXG4gICAgLy8gICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZydcbiAgICAvLyAgICAgICAgIH07XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0YWJTdG9yYWdlW3RhYklkXS5yZXF1ZXN0c1tyZXF1ZXN0SWRdKTtcbiAgICAvLyAgICAgfSwgbmV0d29ya0ZpbHRlcnMpO1xuXG4gICAgLy8gICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQ29tcGxldGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCB7IHRhYklkLCByZXF1ZXN0SWQgfSA9IGRldGFpbHM7XG4gICAgLy8gICAgICAgICBpZiAoIXRhYlN0b3JhZ2UuaGFzT3duUHJvcGVydHkodGFiSWQpIHx8ICF0YWJTdG9yYWdlW3RhYklkXS5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShyZXF1ZXN0SWQpKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGFiU3RvcmFnZVt0YWJJZF0ucmVxdWVzdHNbcmVxdWVzdElkXTtcblxuICAgIC8vICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXF1ZXN0LCB7XG4gICAgLy8gICAgICAgICAgICAgZW5kVGltZTogZGV0YWlscy50aW1lU3RhbXAsXG4gICAgLy8gICAgICAgICAgICAgcmVxdWVzdER1cmF0aW9uOiBkZXRhaWxzLnRpbWVTdGFtcCAtIHJlcXVlc3Quc3RhcnRUaW1lLFxuICAgIC8vICAgICAgICAgICAgIHN0YXR1czogJ2NvbXBsZXRlJ1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0YWJTdG9yYWdlW3RhYklkXS5yZXF1ZXN0c1tkZXRhaWxzLnJlcXVlc3RJZF0pO1xuICAgIC8vICAgICB9LCBuZXR3b3JrRmlsdGVycyk7XG5cbiAgICAvLyAgICAgY2hyb21lLndlYlJlcXVlc3Qub25FcnJvck9jY3VycmVkLmFkZExpc3RlbmVyKChkZXRhaWxzKT0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHsgdGFiSWQsIHJlcXVlc3RJZCB9ID0gZGV0YWlscztcbiAgICAvLyAgICAgICAgIGlmICghdGFiU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSh0YWJJZCkgfHwgIXRhYlN0b3JhZ2VbdGFiSWRdLnJlcXVlc3RzLmhhc093blByb3BlcnR5KHJlcXVlc3RJZCkpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0YWJTdG9yYWdlW3RhYklkXS5yZXF1ZXN0c1tyZXF1ZXN0SWRdO1xuICAgIC8vICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXF1ZXN0LCB7XG4gICAgLy8gICAgICAgICAgICAgZW5kVGltZTogZGV0YWlscy50aW1lU3RhbXAsICAgICAgICAgICBcbiAgICAvLyAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRhYlN0b3JhZ2VbdGFiSWRdLnJlcXVlc3RzW3JlcXVlc3RJZF0pO1xuICAgIC8vICAgICB9LCBuZXR3b3JrRmlsdGVycyk7XG5cbiAgICAvLyAgICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgdGFiSWQgPSB0YWIgPyB0YWIudGFiSWQgOiBjaHJvbWUudGFicy5UQUJfSURfTk9ORTtcbiAgICAvLyAgICAgICAgIGlmICghdGFiU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSh0YWJJZCkpIHtcbiAgICAvLyAgICAgICAgICAgICB0YWJTdG9yYWdlW3RhYklkXSA9IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaWQ6IHRhYklkLFxuICAgIC8vICAgICAgICAgICAgICAgICByZXF1ZXN0czoge30sXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlZ2lzdGVyVGltZTogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAvLyAgICAgICAgICAgICB9O1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgY2hyb21lLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHRhYklkID0gdGFiLnRhYklkO1xuICAgIC8vICAgICAgICAgaWYgKCF0YWJTdG9yYWdlLmhhc093blByb3BlcnR5KHRhYklkKSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRhYlN0b3JhZ2VbdGFiSWRdID0gbnVsbDtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSgpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/background/index.js\n");

/***/ })

})