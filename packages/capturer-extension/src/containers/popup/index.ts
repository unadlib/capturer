import messageTypes from '../../enums/messageTypes';
import buttonStatus from '../../enums/buttonStatus';

import "../../css/popup.css";

const button = document.getElementById('action');
button.addEventListener('click', e => {
  chrome.runtime.sendMessage({ type: messageTypes.PopupPageChangeStatus });
});

chrome.runtime.sendMessage({ type: messageTypes.PopupPageGetStatus }, ({ running }) => {
  button.innerHTML = running ? buttonStatus.Disable : buttonStatus.Enable;
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (typeof message !== 'object') return;
  switch (message.type) {
    case messageTypes.PopupPageStart:
      button.innerHTML = buttonStatus.Disable;
      break;
    case messageTypes.PopupPageEnd:
      button.innerHTML = buttonStatus.Enable;
      break;
    default:
      return;  
  }
});
