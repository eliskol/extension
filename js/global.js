document.querySelector('link[rel="shortcut icon"]').href = chrome.runtime.getURL('./img/favicon.png');

chrome.storage.local.get({'toggle': true}, (toggle) => {
    if (toggle['toggle']) {
        document.querySelector('.logo').src = chrome.runtime.getURL('./img/math-academy-icon-reversed.png');
        document.querySelector('.logo').style.maxHeight = "35px";


        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
            if (link.href.startsWith('https://mathacademy.com')) {
                link.remove()
                newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = chrome.runtime.getURL('/css/' + link.href.split('/')[link.href.split('/').length - 1]);
                document.head.appendChild(newLink);
            }
            console.log(link.href.startsWith('https://mathacademy.com') ? link.href.split('/')[link.href.split('/').length - 1] : 'nope');
        });
    }
});
