export default function createSrcipt(scripts:string[]): HTMLElement {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = `
  (function() {
    ${scripts.join('')}
  })();
  `;
  return script;
}
