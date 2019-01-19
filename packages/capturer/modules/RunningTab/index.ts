
type id = number|undefined;
type callback = (() => void)|undefined;

interface RunningTabOptions {
  id? : id;
  start?: callback;
  end?: callback;
}

export default class RunningTab {
  private _id: id;
  private _start: callback;
  private _end: callback;

  constructor({
    id,
    start,
    end
  }: RunningTabOptions = {}) {
    this._id = id;
    this._start = start;
    this._end = end;
  }

  public get id() {
    return this._id;
  }

  public setId(id: id) {
    this._id = id;
    if (this._start) {
      this._start();
    }
  }

  public clear() {
    this._id = undefined;
    if (this._end) {
      this._end();
    }
  }
}
