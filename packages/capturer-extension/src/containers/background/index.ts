import RunningTab from 'capturer/modules/RunningTab';
import Logger from 'capturer/modules/Logger';
import messageTypes from '../../enums/messageTypes';
import { changeBadgeColor, changeBadgeStatus } from '../../lib/changeBadge';
import download from '../../lib/download';
import '../../img/icon-34.png';
import '../../img/icon-128.png';

// TODO use webextension-polyfill and resolve types file
// TODO GC for logger big data in memory.
const transports = [console.log];
let logger = new Logger({ transports });
const start = () => {  
  changeBadgeStatus({ enable: true });
  chrome.runtime.sendMessage({ type: messageTypes.PopupPageStart });
};
const end = () => {
  changeBadgeStatus({ enable: false });
  chrome.runtime.sendMessage({ type: messageTypes.PopupPageEnd });
  download({ data: logger.data });
  logger = new Logger({ transports });
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
      // TODO use `html2canvas` lib for inVisible running page screenshot.
      // TODO support multi-activeTab.
      if (sender && sender.tab) {
        const windowId = sender.tab.windowId;
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          if (tabs.length === 0 || !tabs[0].id || runningTab.id !== tabs[0].id) return;
          chrome.tabs.captureVisibleTab(windowId, {format : 'png', quality : 50}, (screenshot) => {
            logger.add({
              type: 'screenshot',
              data: {
                screenshot
              }
            });
          });
        });
      }
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
  const enable = runningTab.id === tabId;
  changeBadgeColor({ enable });
});

chrome.windows.onFocusChanged.addListener(() => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (tabs.length === 0 || !tabs[0].id) return;
    const enable = runningTab.id === tabs[0].id;
    changeBadgeColor({ enable });
  });
});
