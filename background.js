/* global chrome */

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
const removeCookiesOnLoadCompleted = (details) => {
  browser.cookies.remove({name: "uid", url: details.url})
    .then()
    .catch(
      (error) => console.error("Failed to remove 'uid' cookie:", error)
    )
}

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/onCompleted
browser.webNavigation.onCompleted.addListener(removeCookiesOnLoadCompleted)

const addRefererHeader = (details) => {
  const headers = details.requestHeaders;
  const referer = headers.find((header) => header.name.toLowerCase() === 'referer')
    || { name: 'Referer', value: 'https://t.co/xyZXYz12pt' };
  headers.push(referer);
  return { requestHeaders: headers };
};

browser.webRequest.onBeforeSendHeaders.addListener(
  addRefererHeader,
  { urls: ['<all_urls>'] },
  ['requestHeaders', 'blocking'],
);

// storage api: https://developer.chrome.com/extensions/storage
browser.runtime.onInstalled.addListener(() => {
  // TODO load domains from storage
  browser.storage.sync.set({ domains: ['medium.com'] }, () => {
    //
  });
});
