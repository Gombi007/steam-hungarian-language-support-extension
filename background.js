chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    if (/^https:\/\/store\.steampowered\.com\/app/.test(current_tab_info.url)) {
      chrome.scripting.executeScript({
        target: { tabId: tab.tabId, allFrames: false },
        files: ["./foreground.js"],
      },
      ()=>{console.log("hello");}
      );
    }
  });
});
