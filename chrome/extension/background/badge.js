import axios from 'axios';

const apiUrl = 'https://video-social-bookmark.herokuapp.com/api/v1';

const getUrl = async () => new Promise((resolve) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = tab.url;
    resolve(url);
  });
});

const fetchEntryId = async () => 5;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const url = await getUrl();
  const entryId = await fetchEntryId(url);
  axios
  .get(`${apiUrl}/entries/${entryId}`)
  .then((res) => {
    const entry = res.data;
    if (entry) {
      const count = entry.bookmarks.length;
      chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
    } else {
      // Initial
      chrome.browserAction.setBadgeText({ text: '!' });
    }
  })
  .catch((_) => {
    // error
  });
});
