chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        backgroundColor: '#5C5C5C',
        color: '#FFFFFF'
    }, function () {
        console.log('The backgroundColor is grey.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    urlContains: '.com'
                },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});