import { browser } from 'webextension-polyfill-ts';

browser.devtools.network.onRequestFinished.addListener(request => {
  request.getContent(body => {
    if (request.request && request.request.url) {
      console.log(request.request.url);
      browser.runtime.sendMessage({
        url: request.request.url,
        response: body,
        type: 'devtools',
      });
    }
  });
});