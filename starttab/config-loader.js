var config = {
    "config": {
        "greeting": "heya 🤙",
        "img": "img/lain.gif"
        
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

const parentLeft = document.getElementById("wrapper-left")
const parentRight = document.getElementById("wrapper-right")

function dragSetup() {
    console.log("setting up drag&drop")
    const draggables = document.querySelectorAll('.dragabble-link')
    const containers = document.querySelectorAll('.drag-container')

    draggables.forEach(link => {
        link.addEventListener('dragstart', () => {
            link.classList.add("dragging")
            link.style.userSelect = "none"
        })

        link.addEventListener('dragend', () => {
            link.classList.remove("dragging")
            link.style.userSelect = "none"
        })
    })

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getAfterElement(container, e.clientY)
            const current = document.querySelector('.dragging')
            
            if (afterElement == null) {
                container.appendChild(current)
            } else {
                container.insertBefore(current, afterElement)
            }
        })
    })

    function getAfterElement(c, y) {
        const dragabbleElements = [...c.querySelectorAll(".dragabble-link:not(.dragging)")]

        return dragabbleElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child}
            } else {
                return closest
            }
        }, {offset: Number.NEGATIVE_INFINITY}).element
    }
}

function generateLinks(mode, config, leftright, i) {
    let li = document.createElement("li");

    if (mode == "config") {
        li.draggable = "true"
        li.classList.add("dragabble-link")
        li.style.userSelect = "none";
    }

    let a = document.createElement("a")
    a.href = config[`links-${leftright}`][i].url
    a.id = `link-${i+1}`
    a.innerText = config[`links-${leftright}`][i].name
    a.style.cursor = "pointer"

    let span = document.createElement("span");
    span.classList.add("accent")
    span.innerHTML = mode == "normal" ? "~" : "&times;"
    span.style.cursor = "pointer"
    if (mode == "config") {
        a.setAttribute("url", a.getAttribute("href"))
        a.removeAttribute('href');
        a.style.cursor = "grab"
        span.addEventListener("click", () => {if (window.confirm(`delete '${a.innerText}' ?`)) {li.remove()}})
    }
    if (mode == "config") {
        li.prepend(span)
        li.appendChild(a)
        if (leftright == "left") {
            parentLeft.appendChild(li)
        } else {
            parentRight.appendChild(li)
        }
        
    } else {
        a.prepend(span)
        li.appendChild(a)
        if (leftright == "left") {
            parentLeft.appendChild(li)
        } else {
            parentRight.appendChild(li)
        }
    }
}

function configLoad(mode, customjson) {
    parentLeft.innerHTML = ""
    parentRight.innerHTML = ""

    if (typeof customjson !== "undefined") {
        config = JSON.parse(customjson)
        parentRight.innerHTML = ""
        parentLeft.innerHTML = ""
    }

    console.log(config)

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
        generateLinks(mode, config, "left", i)
    }

    for (let i = 0; i < Object.keys(config["links-right"]).length; i++) {
        generateLinks(mode, config, "right", i)
    }

    if (mode == "config") {
        dragSetup()
    }
}
function configloadnormal() {configLoad("normal")}
