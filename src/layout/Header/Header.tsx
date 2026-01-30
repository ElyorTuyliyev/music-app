"use client";
import Link from "next/link";
import { Box, Button, InputAdornment, TextField } from "@mui/material";

import { HeaderStyle } from "./header.style";
import { AppIcon } from "../../components/Icon/icon";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  return (
    <HeaderStyle>
      <header className={`header ${pathName === "/" ? "position" : ""}`}>
        <Box className="header__search-wrapper">
          <TextField
            fullWidth
            className="header__search"
            placeholder="Search For Musics, Artists, ..."
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AppIcon name="search" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
        <Box className="header__link-wrapper">
          <Link className="header__links" href={"#"}>
            About Us
          </Link>
          <Link className="header__links" href={"#"}>
            Contact
          </Link>
          <Link className="header__links" href={"#"}>
            Premium
          </Link>
        </Box>
        <Box className="header__btn-wrapper">
          <Button className="header__btn" variant="outlined">
            Login
          </Button>
          <Button className="header__btn" variant="contained">
            Sign Up
          </Button>
        </Box>
      </header>
    </HeaderStyle>
  );
}
