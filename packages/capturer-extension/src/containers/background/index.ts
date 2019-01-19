import RunningTab from 'capturer/modules/RunningTab';
import Logger from 'capturer/modules/Logger';
import messageTypes from '../../enums/messageTypes';
import '../../img/icon-34.png';
import '../../img/icon-128.png';

// TODO use webextension-polyfill and resolve types file
// TODO GC for logger big data in memory.
let logger: Logger;
const start = () => {
  logger = new Logger({
    transports: [
      console.log
    ]
  });
  chrome.browserAction.setBadgeText({ text: ' ' });
  chrome.browserAction.setBadgeBackgroundColor({ color: '#00AA00' });
  chrome.runtime.sendMessage({ type: messageTypes.PopupPageStart });
};
const end = () => {
  chrome.browserAction.setBadgeText({ text: '' });
  chrome.runtime.sendMessage({ type: messageTypes.PopupPageEnd });
  const blob = new Blob([JSON.stringify(logger.data, null, 2)], {type: "text/plain"});
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function() {
    if(typeof reader.result !== 'string') return;
    chrome.downloads.download({
      url: reader.result,
      filename: 'data.json',
    });
  }
  logger = new Logger({
    transports: [
      console.log
    ]
  });
};

const runningTab = new RunningTab({
  start,
  end
});

chrome.webRequest.onCompleted.addListener(
  data => {
    if (runningTab.id === data.tabId) {
      logger.add({
        type: 'backgroud',
        data
      });
    }
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);

// TODO add sign for confusion
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (typeof message !== 'object') return;
  switch (message.type) {
    case messageTypes.Log:
      logger.add(message.playload);
      break;
    case messageTypes.PopupPageChangeStatus:
      if (runningTab.id) {
        chrome.tabs.sendMessage(runningTab.id, { type: messageTypes.PopupPageChangeEnd });  
      } else {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          if (tabs.length === 0 || !tabs[0].id) return;
          chrome.tabs.sendMessage(tabs[0].id, { type: messageTypes.PopupPageChangeStart });  
        });
      }
      break;
    case messageTypes.PopupPageGetStatus:
      sendResponse({ running: Boolean(runningTab.id) });
      break;
    case messageTypes.RunningStatus:
      sendResponse({ running: sender.tab && runningTab.id === sender.tab.id, id: sender.tab && sender.tab.id  });
      break;
    case messageTypes.Start:
      if (!runningTab.id && sender.tab) {
        runningTab.setId(sender.tab.id);
        sendResponse({running: true});
      }
      break;
    case messageTypes.End:
      if (sender.tab && runningTab.id === sender.tab.id) {
        runningTab.clear();
        sendResponse({running: false});
      }
      break;    
    default:
      return;
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  if (runningTab.id === tabId) {
    runningTab.clear();
  }
});

chrome.tabs.onActiveChanged.addListener((tabId) => {
  const color = runningTab.id === tabId ? '#00AA00' : '#9C9C9C';
  chrome.browserAction.setBadgeBackgroundColor({ color });
});



