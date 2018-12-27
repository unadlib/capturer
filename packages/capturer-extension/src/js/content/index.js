function interceptData() {
    var xhrOverrideScript = document.createElement('script');
    xhrOverrideScript.type = 'text/javascript';
    xhrOverrideScript.innerHTML = `
    (function() {
        var log = console.log;
        console.log = function() {
            console.info(Array.from(arguments));
            window.postMessage({ type: 'log', log: Array.from(arguments) }, '*');
            return log.apply(this, arguments);
        };
        var XHR = XMLHttpRequest.prototype;
        var send = XHR.send;
        var open = XHR.open;
        XHR.open = function(method, url) {
            return open.apply(this, arguments);
        }
        XHR.send = function() {
                function callback() {
                    const log = { response: this.response, url: this.responseURL, type: 'content', };
                    window.postMessage(log, '*');
                    this.removeEventListener('load', callback);
                };
                this.addEventListener('load', callback);
                return send.apply(this, arguments);
        };
    })();
    `;
    document.head.prepend(xhrOverrideScript);
}

function checkForDOM() {
    if (document.body && document.head) {
        interceptData();
    } else {
        requestIdleCallback(checkForDOM);
    }
}

requestIdleCallback(checkForDOM);

window.addEventListener('message', (event) => {
    if (event.source != window) return;
    chrome.runtime.sendMessage(event.data);
}, false);

