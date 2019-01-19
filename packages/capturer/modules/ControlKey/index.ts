
type callback = (() => void) | undefined;

interface ControlKeyOptions {
  start?: callback,
  end?: callback,
  running?: boolean, 
}

export default class ControlKey {
  private _start: callback;
  private _end: callback;
  private _running: boolean;

  constructor({
    start,
    end,
    running = false,
  }: ControlKeyOptions = {}) {
    this._running = running;
    this._start = start;
    this._end = end;
    this._addKeyListener();
  }

  public get running() {
    return this._running;
  }

  private _addKeyListener() {
    window.addEventListener('keydown', ({
      keyCode,
      shiftKey,
      ctrlKey,
      altKey,
    }) => {
      // TODO control key shortcuts customizable
      // start: alt + ctrl + shift + s
      // end: alt + ctrl + shift + e
      const isStart = keyCode === 83 && shiftKey && ctrlKey && altKey;
      const isEnd = keyCode === 69 && shiftKey && ctrlKey && altKey;
      if (isStart && typeof this._start === 'function') {
        this._running = true;
        this._start();
      }
      if (isEnd && typeof this._end === 'function') {
        this._running = false;
        this._end();
      }
    });
  }
}
