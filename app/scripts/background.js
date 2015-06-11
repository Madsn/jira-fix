chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Injecting JS");
  chrome.tabs.executeScript({
    file: "js/taxreturn.min.js"
  });
});