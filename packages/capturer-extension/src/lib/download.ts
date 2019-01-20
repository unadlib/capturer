
interface downloadOptions {
  data: {}|[],
  type?: string,
  filename?: string,
}

export default function download({
  data,
  type = 'text/plain',
  filename = 'data.json'
}: downloadOptions) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type });
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function () {
    if (typeof reader.result !== 'string') return;
    chrome.downloads.download({
      url: reader.result,
      filename,
    });
  }
}