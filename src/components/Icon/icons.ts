import type { FC, SVGProps } from "react";

import Phone from "./phone.svg";
import Vector from "./Vector.svg";
import Logout from "./log-out.svg";
import Twitter from "./twitter.svg";
import Profile from "./profile.svg";
import Album from "./album-icon.svg";
import Heart from "./heart-icon.svg";
import Facebook from "./facebook.svg";
import Search from "./search-icon.svg";
import Instagram from "./instagram.svg";
import RecentAdd from "./recent-add.svg";
import HeartIcon from "./heart-icon.svg";
import Playlist from "./ph_playlist.svg";
import Setting from "./setting-icon.svg";
import AddPlaylist from "./add-playlist.svg";
import RecentlyInstalled from "./recently-installed.svg";

type SvgIcon = FC<SVGProps<SVGSVGElement>>;

export const icons: Record<string, SvgIcon> = {
  album: Album,
  heart: Heart,
  phone: Phone,
  search: Search,
  vector: Vector,
  logout: Logout,
  profile: Profile,
  twitter: Twitter,
  setting: Setting,
  facebook: Facebook,
  playlist: Playlist,
  instagram: Instagram,
  heartIcon: HeartIcon,
  recentAdd: RecentAdd,
  addPlaylist: AddPlaylist,
  recentlyInstalled: RecentlyInstalled,
};

export type IconName = keyof typeof icons;
