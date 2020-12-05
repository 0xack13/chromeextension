searchTime = function(word) {
    var query = word.selectionText;
    alert(new Date(query))
}

chrome.contextMenus.create({
    id: "some-command",
    title: "To local time",
    contexts: ["selection"],
    onclick: searchTime
});
