interface data {
  type: string,
  data: object,
}

export default function addTransponder(send: (data: data) => void) {
  window.addEventListener('message', (event: MessageEvent) => {
    if (event.source != window) return;
    send(event.data);
  }, false);
}
