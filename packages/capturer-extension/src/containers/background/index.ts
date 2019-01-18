import { browser } from 'webextension-polyfill-ts';
import '../../img/icon-34.png';
import '../../img/icon-128.png';

browser.webRequest.onCompleted.addListener(
  detail => {
    console.log({
      type: 'backgroud',
      detail
    });
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);

browser.runtime.onMessage.addListener((detail, sender, sendResponse) => {
  console.log({
    type: detail.type,
    detail,
  });
});
