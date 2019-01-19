interface RunningStatus {
  running?: boolean,
}

type callback = ((callback: (runningStatus: RunningStatus) => void) => void) | undefined;

interface ControlKeyOptions extends RunningStatus{
  start?: callback,
  end?: callback,
}

export default class ControlKey {
  private _start: callback;
  private _end: callback;
  private _running: boolean|undefined;

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
      if (isStart) {
        this.start();
      }
      if (isEnd) {
        this.end();
      }
    });
  }

  public start() {
    if (typeof this._start !== 'function') return;
    this._start(({ running } = {}) => {
      if (typeof running !== 'undefined') {
        this._running = running;
      }
    });
  }

  public end() {
    if (typeof this._end !== 'function') return;
    this._end(({ running } = {}) => {
      if (typeof running !== 'undefined') {
        this._running = running;
      }
    });
  }
}
