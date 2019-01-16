import browser from 'webextension-polyfill';

browser.devtools.panels.create("Capturer", null, 'panel.html');

browser.devtools.network.onRequestFinished.addListener(request => {
    request.getContent(body => {
      if (request.request && request.request.url) {
        // browser.runtime.sendMessage({
        //   url: request.request.url,
        //   response: body,
        // });
      }
    });
  });
