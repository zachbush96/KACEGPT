let API_Token = "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";
let API_URL = "https://api.openai.com/v1/chat/completions";

// Function to display the API response to the user

function displayResponse(response) {
  //Save the response in a variable that can be accessed by the popup script
  chrome.storage.local.set({ response: response }, () => {
    console.log("Response: ", response);
    console.log("Response saved");
  });
}

// Listener for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text) {
    // Call ChatGPT API with the extracted text
    callChatGPTAPI(request.text)
    .then((response) => {
      // Display the API response
      displayResponse(response);
    })
    .catch((error) => {
      console.error("Error calling ChatGPT API:", error);
    });
    }
  });
    
// Function to call the ChatGPT API
async function callChatGPTAPI(text) {
    const apiKey = API_Token;
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    
    const headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + apiKey,
    });
    
    const body = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": "You are going to be passed the main text from a helpdesk ticket. Please reply with a BRIEF solution to the problem. If you dont know, simpley reply with UNKNOWN."+text}],
      "temperature": 0.7
    });
    
    const response = await fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body: body,
    });
    
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const jsonResponse = await response.json();
    displayResponse(jsonResponse.choices[0].text);
    return jsonResponse.choices[0].text;
    }
