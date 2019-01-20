interface changeBadgeOptions {
  enable: boolean,
}

interface changeBadgeColorOptions extends changeBadgeOptions {
  disbaleColor?: string,
  enableColor?: string,
}

export function changeBadgeStatus({
  enable
}: changeBadgeOptions) {
  const text = enable ? ' ' : '';
  chrome.browserAction.setBadgeText({ text });
  changeBadgeColor({ enable });
}

export function changeBadgeColor({
  enable,
  disbaleColor = '#9C9C9C',
  enableColor = '#00AA00'
}: changeBadgeColorOptions) {
  const color = enable ? enableColor : disbaleColor;
  chrome.browserAction.setBadgeBackgroundColor({ color });
}