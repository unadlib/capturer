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
      var data = { type: 'request', data: { method: this.method, url: this.url } };
      ${this._transport()}
      return open.apply(this, arguments);
    }
    XHR.send = function() {
        function callback() {
          var data = { type: 'response', data: { response: this.response, url: this.responseURL } };
          ${this._transport()}
          this.removeEventListener('load', callback);
        };
        this.addEventListener('load', callback);
        return send.apply(this, arguments);
    };
    `;
  }
}