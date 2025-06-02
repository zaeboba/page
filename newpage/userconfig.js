let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Sevastopol",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      ya: ["https://ya.ru/search/?text=", "Yandex"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    s: "search-bar",
    ы: "search-bar",
    q: "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chatgpt.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "Social Media",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: "#FF69B4",
            },
            {
              name: "twitter",
              url: "https://twitter.com/home",
              icon: "brand-twitter-filled",
              icon_color: "#7daea3",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn/",
              icon: "brand-reddit",
              icon_color: "#e78a4e",
            },
            {
              name: "dtf",
              url: "https://dtf.ru/",
              icon: "news",
              icon_color: "#00bfd8",
            },
            {
              name: "vk",
              url: "https://vk.com/feed",
              icon: "brand-vk",
              icon_color: "#0077ff",
            },
            {
              name: "4chan",
              url: "https://boards.4chan.org/w/",
              icon: "brand-4chan",
              icon_color: "#68ab45",
            },
            {
              name: "2ch",
              url: "https://2ch.hk/s",
              icon: "blade",
              icon_color: "#c3672a",
            },
            {
              name: "telegram",
              url: "https://webk.telegram.org/",
              icon: "brand-telegram",
              icon_color: "#2d90ed",
            },
            {
              name: "discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: "#5865f2",
            },
            {
              name: "matrix",
              url: "https://app.cinny.in/home/",
              icon: "brand-matrix",
              icon_color: "#0dbd8b",
            },
          ],
        },
        {
          name: "Music",
          links: [
            {
              name: "bandcamp",
              url: "https://bandcamp.com/#",
              icon: "brand-bandcamp",
              icon_color: "#1da0c3",
            },
            {
              name: "soundcloud",
              url: "https://soundcloud.com/discover",
              icon: "brand-soundcloud",
              icon_color: "#ff6400",
            },
            {
              name: "last.fm",
              url: "https://last.fm/home",
              icon: "brand-lastfm",
              icon_color: "#ba0000",
            },
            {
              name: "music.yandex",
              url: "https://music.yandex.ru/home",
              icon: "brand-spotify",
              icon_color: "#fed42b",
            },
            // {
            //   name: "",
            //   url: "",
            //   icon: "",
            //   icon_color: "#",
            // },
            // {
            //   name: "",
            //   url: "",
            //   icon: "",
            //   icon_color: "#",
            // },
          ],
        },
        {
          name: "Video",
          links: [
            {
              name: "kinopoisk+",
              url: "https://hd.kinopoisk.ru/",
              icon: "chair-director",
              icon_color: "#f86600",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube-filled",
              icon_color: "#ea6962",
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: "#d3869b",
            },
            {
              name: "rutube",
              url: "https://rutube.ru/",
              icon: "brand-youtube",
              icon_color: "#1c232b",
            },
            // {
            //   name: "",
            //   url: "",
            //   icon: "",
            //   icon_color: "",
            // },
            // {
            //   name: "",
            //   url: "",
            //   icon: "",
            //   icon_color: "",
            // },
          ],
        },
      ],
    },
    // {
    //   name: "design",
    //   background_url: "src/img/banners/cbg-6.gif",
    //   categories: [
    //     {
    //       name: "inspiration",
    //       links: [
    //         {
    //           name: "pinterest",
    //           url: "https://www.pinterest.es/",
    //           icon: "brand-pinterest",
    //           icon_color: "#ea6962",
    //         },
    //         {
    //           name: "artstation",
    //           url: "https://www.artstation.com/?sort_by=community",
    //           icon: "chart-area",
    //           icon_color: "#7daea3",
    //         },
    //         {
    //           name: "leonardo ai",
    //           url: "https://app.leonardo.ai/",
    //           icon: "brand-openai",
    //           icon_color: "#89b482",
    //         },
    //         {
    //           name: "dribble",
    //           url: "https://dribbble.com/following",
    //           icon: "brand-dribbble-filled",
    //           icon_color: "#d3869b",
    //         },
    //       ],
    //     },
    //     {
    //       name: "resources",
    //       links: [
    //         {
    //           name: "figma",
    //           url: "https://www.figma.com",
    //           icon: "brand-figma",
    //           icon_color: "#d3869b",
    //         },
    //         {
    //           name: "uxpro",
    //           url: "https://uxpro.cc/",
    //           icon: "components",
    //           icon_color: "#a9b665",
    //         },
    //         {
    //           name: "colorhunt",
    //           url: "https://colorhunt.co/",
    //           icon: "color-picker",
    //           icon_color: "#ea6962",
    //         },
    //         {
    //           name: "adobe color",
    //           url: "https://color.adobe.com/es/create/color-wheel",
    //           icon: "brand-adobe",
    //           icon_color: "#7daea3",
    //         },
    //         {
    //           name: "terminalsexy",
    //           url: "https://terminal.sexy",
    //           icon: "prompt",
    //           icon_color: "#e78a4e",
    //         },
    //       ],
    //     },
    //     {
    //       name: "resources 3d",
    //       links: [
    //         {
    //           name: "thingiverse",
    //           url: "https://www.thingiverse.com/",
    //           icon: "circle-letter-t",
    //           icon_color: "#7daea3",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "other",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
            {
              name: "gitflic",
              url: "https://gitflic.ru/",
              icon: "brand-git",
              icon_color: "#597e8d",
            },
          ],
        },
        {
          name: "resources",
          links: [
            // {
            //   name: "phind",
            //   url: "https://www.phind.com/",
            //   icon: "brand-openai",
            //   icon_color: "#89b482",
            // },
            // {
            //   name: "flutter",
            //   url: "https://docs.flutter.dev/ui",
            //   icon: "brand-flutter",
            //   icon_color: "#7daea3",
            // },
            // {
            //   name: "hacktricks",
            //   url: "https://book.hacktricks.xyz/welcome/readme",
            //   icon: "biohazard",
            //   icon_color: "#ea6962",
            // },
            {
              name: "photoshop",
              url: "https://photopea.com/",
              icon: "brand-picsart",
              icon_color: "#2daaff",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "chess",
              url: "https://www.chess.com/home",
              icon: "chess-queen-filled",
              icon_color: "#a9b665",
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#e78a4e",
            },
            {
              name: "tetris",
              url: "https://tetris.com/",
              icon: "brand-apple-arcade",
              icon_color: "#ea6962",
            },
            {
              name: "Steam",
              url: "https://steamcommunity.com/id/Mask_RF/",
              icon: "brand-steam",
              icon_color: "#597e8d",
            },
            {
              name: "epic",
              url: "https://store.epicgames.com/ru/",
              icon: "diamonds",
              icon_color: "#9e9e9e",
            },
            {
              name: "gog",
              url: "https://www.gog.com/",
              icon: "device-gamepad",
              icon_color: "#6f32be",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "ymail",
              url: "https://mail.yandex.ru/#inbox",
              icon: "brand-yandex",
              icon_color: "#ff2825",
            },
            {
              name: "rumail",
              url: "https://e.mail.ru/inbox/",
              icon: "inbox",
              icon_color: "#00abfb",
            },
            {
              name: "pmail",
              url: "https://mail.proton.me/u/1/inbox",
              icon: "brand-campaignmonitor",
              icon_color: "#6f32be",
            },
            {
              name: "mailcock",
              url: "https://mail.cock.li/",
              icon: "mailbox",
              icon_color: "#7f5345",
            },
            //            {
            //              name: "",
            //              url: "",
            //              icon: "",
            //              icon_color: "",
            //            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "mega.nz",
              url: "https://mega.nz/fm/",
              icon: "brand-onedrive",
              icon_color: "#ff4500",
            },
            {
              name: "disk.yandex",
              url: "https://disk.yandex.ru/client/disk",
              icon: "cloud-download",
              icon_color: "#00abfb",
            },
            // {
            //   name: "mega.nz",
            //   url: "https://mega.nz/fm/",
            //   icon: "brand-onedrive",
            //   icon_color: "#ff4500",
            // },
            // {
            //   name: "disk.yandex",
            //   url: "https://disk.yandex.ru/client/disk",
            //   icon: "cloud-download",
            //   icon_color: "#00abfb",
            // },
          ],
        },
        {
          name: "server",
          links: [
            {
              name: "jellyfin",
              url: "https://jellyfin.zaeboba.keenetic.link",
              icon: "carousel-vertical",
              icon_color: "#a905b6",
            },
            {
              name: "Jackett",
              url: "http://94.228.122.231:9117/UI/Dashboard",
              icon: "jacket",
              icon_color: "#000000",
            },
            //  {
            //    name: "panel3xui",
            //    url: "http://94.228.122.231:2053/panel/inbounds",
            //    icon: "network",
            //    icon_color: "#00b341",
            //  },
            {
              name: "transmission",
              url: "http://10.10.1.28:9091",
              icon: "transition-bottom",
              icon_color: "#ff2825",
            },
            {
              name: "TorrServer",
              url: "http://10.10.1.28:8090/",
              icon: "lambda",
              icon_color: "#00b341",
            },
            //            {
            //              name: "",
            //              url: "",
            //              icon: "",
            //              icon_color: "",
            //            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName("head")[0].appendChild(css);
})();
