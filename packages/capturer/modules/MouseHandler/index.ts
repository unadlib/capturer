import { send } from '../../lib/sender';

interface MouseHandlerOptions {
  send: send,
}

export default class MouseHandler {
  private _send: send;

  constructor({
    send
  }: MouseHandlerOptions) {
    this._send = send;
    this._addListener();
  }

  private _addListener() {
    window.addEventListener('mousedown', ({
      y,
      x,
      type,
    }) => {
      const data = {
        y,
        x,
      };
      this._send({
        type,
        data,
      });
    });
  }
}
