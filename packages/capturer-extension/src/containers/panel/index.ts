chrome.devtools.network.onRequestFinished.addListener(request => {
  request.getContent(body => {
    if (request.request && request.request.url) {
      console.log(request.request.url);
      chrome.runtime.sendMessage({
        url: request.request.url,
        response: body,
        type: 'devtools',
      });
    }
  });
});
