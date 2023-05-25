// Get the stored response and append it to the popup.html
chrome.storage.local.get(["response"], (result) => {
  let response = result.response;
  let previousResponse = document.getElementById("response").innerHTML;
  document.getElementById("response").innerHTML = previousResponse + response;
});
