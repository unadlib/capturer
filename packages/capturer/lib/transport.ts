interface transport {
  (): string;   
}

const defaultTransport: transport = () => `window.postMessage(data, '*');`;

export {
  transport,
  defaultTransport,
}