document.querySelector('button#toggle').addEventListener('click', evt => {
    chrome.storage.local.get({'toggle': true}, (toggle) => {
        chrome.storage.local.set({'toggle': !toggle['toggle']})
        // alert(JSON.stringify(toggle));
    })
})