import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
import { HeaderStyle } from "./header.style";

export default function Header() {
  return (
    <HeaderStyle>
      <header className="header">
        <Box className="header__search-wrapper">
          <TextField
            className="header__search"
            fullWidth
            placeholder="Search For Musics, Artists, ..."
          />
        </Box>
        <Box className="header__link">
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Contact</Link>
          <Link href={"#"}>Premium</Link>
        </Box>
        <Box className="header__btn">
          <Button variant="outlined">Login</Button>
          <Button variant="contained">Sign Up</Button>
        </Box>
      </header>
    </HeaderStyle>
  );
}
