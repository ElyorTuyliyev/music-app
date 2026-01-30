"use client";
import { Box, Button, Typography } from "@mui/material";
import { SidebarStyle } from "./Sidebar.style";
import Logo from "../../assets/logo.svg";
import { SIDEBAR_LINK } from "./constants/sidebarLink";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppIcon } from "../../components/Icon/icon";

export default function Sidebar() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <SidebarStyle>
      <Box className="sidebar">
        <Box>
          <Link href="/">
            <Image className="sidebar__logo" src={Logo} alt="logo" />
          </Link>
          {SIDEBAR_LINK.map(({ link, title }, i) => (
            <Box className="sidebar__link-wrapper" key={i}>
              <Typography className="sidebar__title" variant="subtitle1">
                {title}
              </Typography>
              {link.map(({ icon, name, path }, i) => (
                <Box key={i}>
                  <Link
                    className={`sidebar__links ${path === pathName ? "active__link" : ""}`}
                    href={path}
                  >
                    <AppIcon className="sidebar__icons" name={icon} />
                    {name}
                  </Link>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        <Button
          variant="text"
          className="sidebar__btn"
          startIcon={<AppIcon className="sidebar__icons" name="logout" />}
        >
          Logout
        </Button>
      </Box>
    </SidebarStyle>
  );
}
