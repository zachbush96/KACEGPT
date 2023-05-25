chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "get_text") {
      const text = document.querySelector(".fr-view.wysiwyg").innerText;
      sendResponse(text);
    }
  });
  