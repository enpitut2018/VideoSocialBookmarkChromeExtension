import axios from 'axios';

const apiUrl = 'https://video-social-bookmark-develop.herokuapp.com/api/v1';

const getUrl = async () => new Promise((resolve) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = tab.url;
    resolve(url);
  });
});

const fetchEntryId = async url =>
  // testdata: const url = 'https://www.youtube.com/watch?v=HGJK1IKIvrI';
   await axios
  .get(`${apiUrl}/find/?url=${url}`)
  .then(res => res.data.id
  );

let currentTabEntry = null;

const fetchEntry = async () => {
  const url = await getUrl();
  const entryId = await fetchEntryId(url);
  return axios
  .get(`${apiUrl}/entries/${entryId}`)
  .then((res) => {
    const entry = res.data;
    return entry;
  })
  .catch(_ =>
    // error
     null);
};

chrome.runtime.onMessage.addListener(async (req, sender, res) => {
  switch (req.type) {
    case 'REQUEST_ENTRY':
      console.log('current tab entry:', currentTabEntry);
      res({
        entry: JSON.stringify(currentTabEntry)
      });
      break;
    default:
      break;
  }
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  console.log('activated');
  const entry = await fetchEntry();
  if (entry) currentTabEntry = entry;
  if (entry && entry.comments) {
    const count = entry.comments.length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '' });
  }
});

chrome.tabs.onUpdated.addListener(async (activeInfo) => {
  console.log('updated');
  const entry = await fetchEntry();
  if (entry) currentTabEntry = entry;
  if (entry && entry.comments) {
    const count = entry.comments.length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '' });
  }
});
