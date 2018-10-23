import axios from 'axios';

const apiUrl = 'https://video-social-bookmark.herokuapp.com/api/v1';

const getUrl = async () => new Promise((resolve) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = tab.url;
    resolve(url);
  });
});

let c = true;

const fetchEntryId = () => {
  c = !c;
  return c ? 5 : 8;
};

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
      if (currentTabEntry === null) currentTabEntry = await fetchEntry();
      res({
        entry: JSON.stringify(currentTabEntry)
      });
      break;
    default:
      break;
  }
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  console.log('update');
  const entry = await fetchEntry();
  if (entry) currentTabEntry = entry;
  if (entry && entry.bookmarks) {
    const count = entry.bookmarks.length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '!' });
  }
});
