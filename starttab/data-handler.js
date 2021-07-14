// this file is used to handle all localStorage logic, data saving and loading, all saving and loading utility functions

//the main object which has all the data in it
var config = {
    "config": {
        "greeting": "heya",
        "img": "img/vader.jpg"
        
    },
    "links-left": [
        {
            "name": "gmail",
            "url": "https://mail.google.com/mail/u/0/#inbox"
        },
        {
            "name": "youtube",
            "url": "https://www.youtube.com/"
        },
        {
            "name": "reddit",
            "url": "https://www.reddit.com/"
        },
        {
            "name": "twitter",
            "url": "https://twitter.com/home"
        },
        {
            "name": "twitch",
            "url": "https://www.twitch.tv/"
        },
        {
            "name": "tj",
            "url": "https://tjournal.ru/"
        },
        {
            "name": "protonmail",
            "url": "https://beta.protonmail.com/u/0/inbox"
        },
        {
            "name": "yandex mail",
            "url": "https://mail.yandex.ru/"
        }

    ],
    "links-right": [
        {
            "name": "github",
            "url": "https://github.com/"
        },
        {
            "name": "stackoverflow",
            "url": "https://stackoverflow.com/search"
        },
        {
            "name": "google drive",
            "url": "https://drive.google.com/drive/my-drive"
        },
        {
            "name": "spotify",
            "url": "https://open.spotify.com/"
        },
        {
            "name": "instagram",
            "url": "https://www.instagram.com/"
        },
        {
            "name": "pinterest",
            "url": "https://www.pinterest.com/"
        },
        {
            "name": "discord web",
            "url": "https://discord.com/channels/@me"
        },
        {
            "name": "wallpaper",
            "url": "https://unsplash.com/"
        }
    ]
}

//main Handler object which will house all the methods.
const dataHandler = {}

/**
 * load the links into the startpage from localStorage or provided json
 * @param {String} mode "normal" or "config" normal loads everything normally, config loads stuff for configuring (drag n drop enabled etc)
 * @param {String} customjson json (string) to load
 */
dataHandler.configLoad = (mode, customjson) => {
    const parentLeft = window.globals.parentLeft
    const parentRight = window.globals.parentRight
    
    parentLeft.innerHTML = ""
    parentRight.innerHTML = ""

    if (typeof customjson !== "undefined") {
        config = JSON.parse(customjson)
        parentRight.innerHTML = ""
        parentLeft.innerHTML = ""
    }

    if ('config' in config) {
        if ('greeting' in config["config"]) {
                document.querySelector('#greeting').innerText = config.config.greeting
        }
        if ('img' in config["config"]) {
                document.querySelector('img').src = config.config.img
        }
    }

    let borderme = document.querySelectorAll(".borderme")
    let marginleft = document.querySelector(".w3gridclass")

    if (mode == "config") {
        borderme.forEach(e => {e.classList.add("borderme-bordered")});
        marginleft.classList.add("marginleft194")
    } else {
        borderme.forEach(e => {e.classList.remove("borderme-bordered")});
        marginleft.classList.remove("marginleft194")
    }

    for (let i = 0; i < Object.keys(config["links-left"]).length; i++) {
        spHandler.renderLink(mode, config, "left", i)
    }

    for (let i = 0; i < Object.keys(config["links-right"]).length; i++) {
        spHandler.renderLink(mode, config, "right", i)
    }

    if (mode == "config") {
        spHandler.dragSetup()
    }

    console.log("loaded config: ", config)
}
function configloadnormal() {configLoad("normal")}

console.log("init data-handler"/*, dataHandler*/)

