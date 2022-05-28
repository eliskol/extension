document.querySelectorAll('img[src="img/unlocked.png"').forEach(img => {
    img.src = chrome.runtime.getURL('./img/lock.png');
});

const beltImages = {
    "img/belt-icon-white.png": "white.png",
    "img/belt-icon-white-yellow.png": "wy.png",
    "img/belt-icon-yellow.png": "yel.png",
    "img/belt-icon-yellow-orange.png": "yo.png",
    "img/belt-icon-orange.png": "org.png",
    "img/belt-icon-green.png": "green.png",
    "img/belt-icon-green-blue.png": "gb.png",
    "img/belt-icon-blue.png": "blu.png",
    "img/belt-icon-blue-purple.png": "bp.png",
    "img/belt-icon-purple.png": "purple.png",
    "img/belt-icon-purple-red.png": "pr.png",
    "img/belt-icon-red.png": "red.png",
    "img/belt-icon-red-brown.png": "rb.png",
    "img/belt-icon-brown.png": "brown.png",
    "img/belt-icon-brown-black.png": "bb.png",
    "img/belt-icon-black.png": "black.png",
    "img/belt-icon-black-white.png": "bw.png",
    "img/belt-icon-black-yellow.png": "by.png",
    "img/belt-icon-black-green.png": "bg.png",
    "img/belt-icon-black-blue.png": "bbllu.png",
    "img/belt-icon-black-purple.png": "bpur.png",
    "img/belt-icon-black-red.png": "br.png"
}

chrome.storage.local.get({'toggle': true}, (toggle) => {
    if (toggle['toggle']) {
        for (let [key, value] of Object.entries(beltImages)) {
            document.querySelectorAll(`img[src="${key}"]`).forEach(img => {
                img.src = chrome.runtime.getURL(`./img/belts/${value}`);
            })
        }

        document.querySelector(`div[onclick="showGraph();"]`).style.background = `url(${chrome.runtime.getURL('./img/dots.png')}) 0px 0px`;
    }
})
