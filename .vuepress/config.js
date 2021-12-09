module.exports = {
  "title": "Garvin",
  "description": "Leave Time For WorthWhile Characters And Stories.",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Url",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/ngwszsd",
            "icon": "reco-github"
          },
          {
            "text": "Cloud Drive",
            "link": "https://ngws.ml/",
            "icon": "reco-tag"
          },
          {
            "text": "Proxy Internet",
            "link": "https://garvin.ga/",
            "icon": "reco-tag"
          }
        ]
      }
    ],

    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "garvin",
    "authorAvatar": "/avatar.png",
    "record": "for free",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}
