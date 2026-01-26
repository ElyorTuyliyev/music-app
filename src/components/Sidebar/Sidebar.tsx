import { Box, Button, Typography } from "@mui/material";
import { SidebarStyle } from "./Sidebar.style";
import Logo from "../../assets/logo.svg";
import Image from "next/image";

export default function Sidebar() {
  return (
    <SidebarStyle>
      <Box className="sidebar">
        <Image className="sidebar__logo" src={Logo} alt="logo" />
        <Box className="sidebar__link-wrapper">
          <Typography className="sidebar__title" variant="subtitle1">
            Menu
          </Typography>
          <Button variant="text" startIcon={"icon"} fullWidth>
            Discover
          </Button>
          <Button variant="text" startIcon={"icon"} fullWidth>
            Discover
          </Button>
        </Box>
      </Box>
    </SidebarStyle>
  );
}
