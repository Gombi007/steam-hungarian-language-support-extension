chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (/^https:\/\/store\.steampowered\.com\/app\/.*\/$/.test(tab.url) && changeInfo.status == "complete" ) {   
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["./all.css"],
    });

    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["./language-support.css"],
    });

    chrome.scripting.executeScript({
      target: { tabId: tabId, allFrames: false },
      files: ["./foreground.js"],
    });
  }
});
