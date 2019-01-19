import { defaultTransport, transport } from '../../lib/transport';

interface ErrorProxyOptions {
  transport?(): string,
}

export default class ErrorProxy {
  private _transport: transport;

  constructor({
    transport = defaultTransport,
  }: ErrorProxyOptions = {}) {
    this._transport = transport;
  }

  public getProxy(): string {
    return `
    window.addEventListener('error', function (event){
      const data = {
        type: 'throwError',
        data: {
          colno: event.colno,
          lineno: event.lineno,
          message: event.message,
          source: event.source,
        }
      }
      ${this._transport()}
    });
    window.addEventListener("unhandledrejection", function (event){
      var data = {
        type: 'unhandledrejection',
        data: {
          reason: event.reason,
          timeStamp: event.timeStamp,
        }
      }
      ${this._transport()}
    });
    `;
  }
}
