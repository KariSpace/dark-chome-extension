let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('backgroundColor', function (data) {
    changeColor.style.backgroundColor = data.backgroundColor;
    changeColor.setAttribute('value', data.backgroundColor);
});



changeColor.onclick = function (element) {
    let backgroundColor = element.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'document.body.style.backgroundColor = "' + backgroundColor + '";'
            });
    });
};