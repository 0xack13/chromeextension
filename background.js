
chrome.contextMenus.create({
    id: "some-command",
    title: "Pop up!",
    contexts: ["all"]
});
chrome.contextMenus.onClicked.addListener(function(clickData) {
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, function(selection) {
        var date = new Date(selection[0] + ' UTC');
        alert(date.toString());
    });
});