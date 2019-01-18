import { defaultTransport, transport } from '../../lib/transport';

interface RequestProxyOptions {
  transport?(): string,
}

export default class RequestProxy {
  private _transport: transport;

  constructor({
    transport = defaultTransport,
  }: RequestProxyOptions = {}) {
    this._transport = transport;
  }

  public getProxy(): string {
    return `
    var XHR = XMLHttpRequest.prototype;
    var send = XHR.send;
    var open = XHR.open;
    XHR.open = function(method, url) {
      var data = { data: { method: this.method, url: this.url }, type: 'request' };
      ${this._transport()}
      return open.apply(this, arguments);
    }
    XHR.send = function() {
        function callback() {
          var data = { data: { response: this.response, url: this.responseURL }, type: 'response' };
          ${this._transport()}
          this.removeEventListener('load', callback);
        };
        this.addEventListener('load', callback);
        return send.apply(this, arguments);
    };
    `;
  }
}