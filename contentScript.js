chrome.runtime.sendMessage({greeting: "hello" ,'data': window.getSelection().toString()}, function(response) {
    console.log("started sending messages..")
})