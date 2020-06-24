/* global chrome */

const handler = (details) => {
  const headers = details.requestHeaders;
  const newHeaders = headers.filter((h) => h.name.toLowerCase() !== 'referer');
  newHeaders.push({ name: 'Referer', value: 'https://t.co/' });
  return { requestHeaders: newHeaders };
};

chrome.webRequest.onBeforeSendHeaders.addListener(
  handler,
  { urls: ['https://*/*', 'http://*/*'] },
  ['requestHeaders', 'blocking', 'extraHeaders'],
);

// storage api: https://developer.chrome.com/extensions/storage

chrome.runtime.onInstalled.addListener(() => {
  // TODO load domains from storage
  chrome.storage.sync.set({ domains: ['medium.com'] }, () => {
    //
  });
});

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.browserAction.setTitle({
    tabId: tab.id,
    title: `You are on tab: ${tab.id}`,
  });
});
