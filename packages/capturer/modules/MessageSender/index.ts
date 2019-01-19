import { send, data } from '../../lib/sender';

interface controller {
  readonly running: boolean|undefined;
}

interface MessageSenderOptions {
  controller: controller,
  send: send
}

export default class MessageSender {
  private _controller: controller;
  private _send: send;

  constructor({
    controller,
    send,
  }: MessageSenderOptions) {
    this._controller = controller;
    this._send = send;
  }

  private get _running() {
    return this._controller.running;
  }

  public getSender(): send  {
    return (data: data) => {
      if (this._running) {
        this._send(data);
      }
    }
  }
}
