import type { FC, SVGProps } from "react";

import Search from "./search-icon.svg";
import Heart from "./heart-icon.svg";
import Vector from "./Vector.svg";
import Album from "./album-icon.svg";
import Profile from "./profile.svg";
import RecentAdd from "./recent-add.svg";
import Logout from "./log-out.svg";
import HeartIcon from "./heart-icon.svg";
import Playlist from "./ph_playlist.svg";
import AddPlaylist from "./add-playlist.svg";
import Setting from "./setting-icon.svg";
import RecentlyInstalled from "./recently-installed.svg";

type SvgIcon = FC<SVGProps<SVGSVGElement>>;

export const icons: Record<string, SvgIcon> = {
  search: Search,
  heart: Heart,
  vector: Vector,
  logout: Logout,
  album: Album,
  profile: Profile,
  recentAdd: RecentAdd,
  heartIcon: HeartIcon,
  playlist: Playlist,
  addPlaylist: AddPlaylist,
  setting: Setting,
  recentlyInstalled: RecentlyInstalled,
};

export type IconName = keyof typeof icons;
