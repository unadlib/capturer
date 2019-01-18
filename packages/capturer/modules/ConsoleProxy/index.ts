import { defaultTransport, transport } from '../../lib/transport';

const DEFALUT_CONSOLOE_LIST: string[]  = [
  'log',
  'info',
  'warn',
  'error'
];

interface ConsoleProxyOptions {
  list?: string[],
  transport?: transport,
}

export default class ConsoleProxy {
  private _list: string[];
  private _transport: transport;

  constructor({
    list = DEFALUT_CONSOLOE_LIST,
    transport = defaultTransport,
  }: ConsoleProxyOptions = {}) {
    this._list = list;
    this._transport = transport;
  }

  private _generate(name: string): string {
    return (`
    var ${name} = console.${name};
    console.${name} = function() {
      var data = { type: '${name}', data: Array.from(arguments) };
      ${this._transport()}
      return ${name}.apply(this, arguments);
    };
    `);
  }

  public getProxy() : string {
    return this._list.map(this._generate.bind(this)).join('');
  }
}
