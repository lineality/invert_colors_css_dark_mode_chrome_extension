// Function to listen for browser action clicks
chrome.action.onClicked.addListener((tab) => {
  // Execute the content script into the active tab
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});
