/* global chrome */

const addCurrent = document.getElementById('addCurrent');

// tabs api: https://developer.chrome.com/extensions/tabs

const logInfo = (tab) => `
  console.log("title = ${tab.title}");
  console.log("url = ${tab.url}");
`;

addCurrent.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, { code: logInfo(tabs[0]) });
  });
};
