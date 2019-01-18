

/// <reference path="../index.d.ts" />

type insertDOM = (dom: HTMLElement) => void;

type checkDOM = () => boolean;

interface InjectIdleOptions {
  dom: HTMLElement,
  insert?: insertDOM,
  check?: checkDOM,
}

const DEFAULT_INSERT: insertDOM = (dom) => document.head.prepend(dom);
const DEFAULT_INSERT_CHECK: checkDOM = () => Boolean(document.body && document.head);

export default class InjectIdle {
  private _dom: HTMLElement;
  private _insert: insertDOM;
  private _check: checkDOM;

  constructor({
    dom,
    insert = DEFAULT_INSERT,
    check = DEFAULT_INSERT_CHECK,
  }: InjectIdleOptions) {
    this._dom = dom;
    this._insert = insert;
    this._check = check;
    window.requestIdleCallback(this._inject.bind(this));
  }

  private _inject() {
    if (this._check()) {
      this._insert(this._dom);
    } else {
      window.requestIdleCallback(this._inject.bind(this));
    }
  }
}