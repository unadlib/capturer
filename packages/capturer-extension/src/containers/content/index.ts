import RequestProxy from 'capturer/modules/RequestProxy';
import ConsoleProxy from 'capturer/modules/ConsoleProxy';
import ErrorProxy from 'capturer/modules/ErrorProxy';
import ControlKey from 'capturer/modules/ControlKey';
import Transponder from 'capturer/modules/Transponder';
import createScript from 'capturer/lib/createScript';
import InjectIdle from 'capturer/lib/injectIdle';
import MessageSender from 'capturer/modules/MessageSender';
import messageTypes from '../../enums/messageTypes';

// TODO distinguish multi-iframe.
const requestProxy = new RequestProxy().getProxy();
const consoleProxy = new ConsoleProxy().getProxy();
const errorProxy = new ErrorProxy().getProxy();
const dom = createScript([
  consoleProxy,
  requestProxy,
  errorProxy,
]);
new InjectIdle({ dom });

let controller: ControlKey;

chrome.runtime.sendMessage({type: messageTypes.RunningStatus}, (response) => {
  controller = new ControlKey({
    running: response.running,
    start(callback) {
      chrome.runtime.sendMessage({ type: messageTypes.Start }, callback);
    },
    end(callback) {
      chrome.runtime.sendMessage({ type: messageTypes.End }, callback);
    }
  });
  const send = new MessageSender({
    send: (playload) => chrome.runtime.sendMessage({ type: messageTypes.Log, playload }),
    controller,
  }).getSender();

  new Transponder({ send });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (typeof message !== 'object') return;
  switch (message.type) {
    case messageTypes.PopupPageChangeStart:
      controller.start();
      break;
    case messageTypes.PopupPageChangeEnd:
      controller.end();
      break;
    default:
      return;  
  }
});