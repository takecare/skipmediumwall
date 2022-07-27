/* global chrome */

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
const logCookies = (details) => {
  browser.cookies.getAll({})
    .then((cookies) => {
      for (c of cookies) {
        console.log(`> COOKIE name="${c.name}", domain="${c.domain}", value="${c.value}"`)
      }
    })
}

const completed = (details) => {
  console.log(">>> COMPLETED!: ")
  console.log(details)
  // logCookies()
  browser.cookies.remove({name: "uid", url: details.url})
    .then(
      (cookie) => {
        console.log("> REMOVED COOKIE", cookie)
      }
    )
    .catch(
      (error) => console.error("> ERROR: " + error)
    )
}

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/onCompleted
browser.webNavigation.onCompleted.addListener(
  completed,
)

// browser.webRequest.onBeforeRequest.addListener(
//   f,
//   {urls: ["<all_urls>"]}
// );

const handler = (details) => {
  const headers = details.requestHeaders;
  const newHeaders = headers.filter((h) => h.name.toLowerCase() !== 'referer');
  newHeaders.push({ name: 'Referer', value: 'https://t.co/xyZXYz12pt' });
  return { requestHeaders: newHeaders };
};

browser.webRequest.onBeforeSendHeaders.addListener(
  handler,
  // { urls: ['https://*/*', 'http://*/*'] },
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

browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setTitle({
    tabId: tab.id,
    title: `You are on tab: ${tab.id}`,
  });
});
