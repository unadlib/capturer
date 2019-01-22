import { send } from '../../lib/sender';

interface KeyboardHandlerOptions {
  send: send,
}

export default class KeyboardHandler {
  private _send: send;

  constructor({
    send
  }: KeyboardHandlerOptions) {
    this._send = send;
    this._addListener();
  }

  private _addListener() {
    window.addEventListener('keydown', ({
      altKey,
      ctrlKey,
      metaKey,
      shiftKey,
      code,
      type,
    }) => {
      const data = {
        altKey,
        ctrlKey,
        metaKey,
        shiftKey,
        code,
      };
      this._send({
        type,
        data,
      });
    });
  }
}
