export const SIDEBAR_LINK = [
  {
    title: "Menu",
    link: [
      {
        key: "home",
        icon: "vector",
        name: "Home",
        path: "/",
      },
      {
        icon: "vector",
        name: "Discover",
        path: "/discover",
      },
      {
        icon: "album",
        name: "Albums",
        path: "/albums",
      },
      {
        icon: "profile",
        name: "Artists",
        path: "/artists",
      },
    ],
  },
  {
    title: "Library",
    link: [
      {
        icon: "recentAdd",
        path: "/recently",
        name: "Recently Added",
      },
      {
        path: "/most",
        name: "Most played",
        icon: "recentlyInstalled",
      },
    ],
  },
  {
    title: "Playlist and favorite",
    link: [
      {
        icon: "heartIcon",
        path: "/favorites",
        name: "Your favorites",
      },
      {
        icon: "playlist",
        path: "/playlist",
        name: "Your playlist",
      },
      {
        icon: "addPlaylist",
        path: "/add",
        name: "Add playlist",
      },
    ],
  },
  {
    title: "General",
    link: [
      {
        icon: "setting",
        name: "Setting",
        path: "/setting",
      },
    ],
  },
];
