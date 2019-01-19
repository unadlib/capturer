type transport = (log: Log) => void;
interface Log {
  type: string,
  data: object,
}

interface Data {
  time: number,
  log: Log,
}

interface LoggerOptions {
  transports?: transport[]
}

// TODO support multi-transport
export default class Logger {
  private _data: Data[];
  private _transports: transport[];

  constructor({
    transports = []
  }: LoggerOptions = {}) {
    this._transports = transports;
    this._data = [];
  }

  add(log: Log) {
    this._data.push({
      time: new Date().getTime(),
      log,
    });
    for (const transport of this._transports) {
      transport(log);
    }
  }

  public get data() {
    return this._data;
  }
}