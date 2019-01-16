function generateSpy(name: string): string {
    return `
    var ${name} = console.${name};
    console.${name} = function() {
        window.postMessage({ type: '${name}', msg: Array.from(arguments) }, '*');
        return ${name}.apply(this, arguments);
    };
    `
}

const consoleList = [
    'log',
    'info',
    'warn',
    'error'
];

const spyConsole = consoleList.map(generateSpy).join('');

function interceptData() {
    var xhrOverrideScript = document.createElement('script');
    xhrOverrideScript.type = 'text/javascript';
    // TODO check content page enable `strict` mode
    xhrOverrideScript.innerHTML = `
    (function() {
        ${spyConsole}
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

window.addEventListener('keydown', ({
    keyCode,
    shiftKey,
    ctrlKey,
    altKey,
}) => {
    // TODO control key shortcuts customizable
    // start: alt + ctrl + shift + s
    // end: alt + ctrl + shift + e
    const isStart = keyCode === 83 && shiftKey && ctrlKey && altKey;
    const isEnd = keyCode === 69 && shiftKey && ctrlKey && altKey;
    if (isStart) {
        console.log('isStart');
    }
    if (isEnd) {
        console.log('isEnd');
    }
});
