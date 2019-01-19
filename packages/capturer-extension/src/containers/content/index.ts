import { browser } from 'webextension-polyfill-ts';
import RequestProxy from 'capturer/modules/RequestProxy';
import ConsoleProxy from 'capturer/modules/ConsoleProxy';
import ErrorProxy from 'capturer/modules/ErrorProxy';
import ControlKey from 'capturer/modules/ControlKey';
import Transponder from 'capturer/modules/Transponder';
import createScript from 'capturer/lib/createScript';
import InjectIdle from 'capturer/lib/injectIdle';
import MessageSender from 'capturer/modules/MessageSender';

const requestProxy = new RequestProxy().getProxy();
const consoleProxy = new ConsoleProxy().getProxy();
const errorProxy = new ErrorProxy().getProxy();
const dom = createScript([
  consoleProxy,
  requestProxy,
  errorProxy,
]);
new InjectIdle({ dom });

const send = new MessageSender({
  controller: new ControlKey({
    running: true,
    start() {
      console.log('start');
    },
    end() {
      console.log('end');
    }
  }),
  send: browser.runtime.sendMessage
}).getSender();

new Transponder({ send });
