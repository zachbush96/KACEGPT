//Append the content of the chrome local storage to the popup.html
chrome.storage.local.get(["response"], (result) => {
  chrome.storage.local.get(["response"], (result) => {
    let response = result.response;
    let previousResponse = document.getElementById("response").innerHTML;
    document.getElementById("response").innerHTML = previousResponse + response;
    });
});
