const handler = (details) => {
  const headers = details.requestHeaders;
  const newHeaders = headers.filter((h) => h.name.toLowerCase() !== 'referer');
  newHeaders.push({ name: 'Referer', value: 'https://t.co/' });
  return { requestHeaders: newHeaders };
};

// eslint-disable-next-line no-undef
chrome.webRequest.onBeforeSendHeaders.addListener(
  handler,
  { urls: ['https://*/*', 'http://*/*'] },
  ['requestHeaders', 'blocking', 'extraHeaders'],
);
