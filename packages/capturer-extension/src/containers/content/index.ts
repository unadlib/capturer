import { browser } from 'webextension-polyfill-ts';
import RequestProxy from 'capturer/modules/RequestProxy';
import ConsoleProxy from 'capturer/modules/ConsoleProxy';
import createScript from 'capturer/lib/createScript';
import InjectIdle from 'capturer/lib/injectIdle';
import ControlKey from 'capturer/modules/ControlKey';
import addTransponder from 'capturer/lib/addTransponder';

const requestProxy = new RequestProxy().getProxy();
const consoleProxy = new ConsoleProxy().getProxy();
const dom = createScript([
  consoleProxy,
  requestProxy,
]);

new InjectIdle({ dom });

const controlKey = new ControlKey({
  start() {
    console.log('start');
  },
  end() {
    console.log('end');
  }
});

addTransponder((data) => {
  if (controlKey.isRuning) {
    browser.runtime.sendMessage(data);
  }
});
