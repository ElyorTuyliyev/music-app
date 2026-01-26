import { Box } from "@mui/material";
import { SidebarStyle } from "./Sidebar.style";
import Image from "next/image";

export default function Sidebar() {
  return (
    <SidebarStyle>
      <Box className="sidebar">
        <Image src={""} alt="logo" />
      </Box>
    </SidebarStyle>
  );
}
