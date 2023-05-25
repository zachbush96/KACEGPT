// Function to extract text from the specified class
function getTextFromElement() {
    const element = document.querySelector(".fr-view.wysiwyg");
    return element ? element.innerText : "";
  }
  
  // Send the extracted text to the background script
  chrome.runtime.sendMessage({ text: getTextFromElement() });
  

  //listen for messages from the background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //create an alert with the response from the background script
    alert(request.response);
  });