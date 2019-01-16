chrome.webRequest.onCompleted.addListener(
    detail => {
        console.log({
            type: 'backgroud',
            detail
        });
    },
    { urls: ["<all_urls>"] },
    ["responseHeaders", "extraHeaders"]
);

chrome.runtime.onMessage.addListener((detail, sender, sendResponse) => {
    console.log({
        type: detail.type,
        detail,
    });
});
