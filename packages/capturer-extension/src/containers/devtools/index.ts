chrome.devtools.panels.create("Capturer", null, 'panel.html');

chrome.devtools.network.onRequestFinished.addListener(request => {
    request.getContent(body => {
      if (request.request && request.request.url) {
        // chrome.runtime.sendMessage({
        //   url: request.request.url,
        //   response: body,
        // });
      }
    });
  });
