
import { send } from '../../lib/sender';

interface TransponderOptions {
  send: send,
}

export default class Transponder {
  private _send: send;

  constructor({
    send
  }: TransponderOptions) {
    this._send = send;
    this._transpond();
  }

  private _transpond() {
    window.addEventListener('message', (event: MessageEvent) => {
      if (event.source != window) return;
      this._send(event.data);
    }, false);
  }
}
