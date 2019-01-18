export default class ErrorHandler {
  constructor() {
    this._addListener();
  }

  private _addListener() {
    window.addEventListener('error', (event: ErrorEvent) => {
      const data = {
        type: 'throwError',
        data: {
          colno: event.colno,
          error: event.error,
          lineno: event.lineno,
          message: event.message,
          source: event.message,
        }
      }
    });
    window.addEventListener("unhandledrejection", (event: PromiseRejectionEvent) => {
      const data = {
        type: 'unhandledrejection',
        data: {
          reason: event.reason,
          timeStamp: event.timeStamp,
        }
      }
    });
  }
}
