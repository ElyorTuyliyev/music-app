import Vector from "../../../assets/Vector.svg";
import Album from "../../../assets/album-icon.svg";
import Profile from "../../../assets/profile.svg";
import RecentAdd from "../../../assets/recent-add.svg";
import HeartIcon from "../../../assets/heart-icon.svg";
import Playlist from "../../../assets/ph_playlist.svg";
import AddPlaylist from "../../../assets/add-playlist.svg";
import Setting from "../../../assets/setting-icon.svg";
import RecentlyInstalled from "../../../assets/recently-installed.svg";
export const SIDEBAR_LINK = [
  {
    title: "Menu",
    link: [
      {
        key: "home",
        icon: Vector,
        name: "Home",
        path: "/",
      },
      {
        icon: Vector,
        name: "Discover",
        path: "/discover",
      },
      {
        icon: Album,
        name: "Albums",
        path: "/albums",
      },
      {
        icon: Profile,
        name: "Artists",
        path: "/artists",
      },
    ],
  },
  {
    title: "Library",
    link: [
      {
        icon: RecentAdd,
        path: "/recently",
        name: "Recently Added",
      },
      {
        path: "/most",
        name: "Most played",
        icon: RecentlyInstalled,
      },
    ],
  },
  {
    title: "Playlist and favorite",
    link: [
      {
        icon: HeartIcon,
        path: "/favorites",
        name: "Your favorites",
      },
      {
        icon: Playlist,
        path: "/playlist",
        name: "Your playlist",
      },
      {
        icon: AddPlaylist,
        path: "/add",
        name: "Add playlist",
      },
    ],
  },
  {
    title: "General",
    link: [
      {
        icon: Setting,
        name: "Setting",
        path: "/setting",
      },
    ],
  },
];
