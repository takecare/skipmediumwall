/* global chrome */

const addCurrent = document.getElementById('addCurrent');

// tabs api: https://developer.chrome.com/extensions/tabs

const logInfo = (tab) => `
  console.log("title = ${tab.title}");
  console.log("url = ${tab.url}");
`;

const loadDomains = (cb) => {
  chrome.storage.sync.get(['domains'], (result) => {
    // console.log(`Value currently is ${result.key}`);
    cb(result.key);
  });
};

// this will likely need to be done via message passing
loadDomains((d) => console.log(d));

// TODO icon/element that displays if the current domain is in local storage
// e.g. a toggle, a green/red circle, ...

// TODO add current domain to local storage on button clicked (toggle?)

addCurrent.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, { code: logInfo(tabs[0]) });
  });
};
