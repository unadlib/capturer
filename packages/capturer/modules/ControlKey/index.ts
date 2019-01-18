
type callback = (() => void) | undefined;

interface ControlKeyOptions {
  start?: callback,
  end?: callback,
}

export default class ControlKey {
  private _start: callback;
  private _end: callback;
  private _isRuning: boolean;

  constructor({
    start,
    end
  }: ControlKeyOptions = {}) {
    this._isRuning = false;
    this._start = start;
    this._end = end;
    this._addKeyListener();
  }

  public get isRuning() {
    return this._isRuning;
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
        this._isRuning = true;
        this._start();
      }
      if (isEnd && typeof this._end === 'function') {
        this._isRuning = false;
        this._end();
      }
    });
  }
}
