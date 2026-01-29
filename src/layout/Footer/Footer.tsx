import Image from "next/image";
import { Box, Typography } from "@mui/material";

import Logo from "../../assets/logo.svg";
import { FooterStyle } from "./footer.style";
import { AppIcon } from "@/src/components/Icon/icon";

export default function Footer() {
  return (
    <FooterStyle>
      <footer className="footer">
        <Box className="footer__about-wrapper">
          <Typography>About</Typography>
          <Typography>
            Melodies is a website that has been created for over 5 year’s now
            and it is one of the most famous music player website’s in the
            world. in this website you can listen and download songs for free.
            also of you want no limitation you can buy our premium pass’s.
          </Typography>
        </Box>
        <Box className="footer__links-wrapper">
          <ul>
            <li>
              <Typography variant="h5">Melodies</Typography>
            </li>
            <li>Songs</li>
            <li>Radio</li>
            <li>Podcast</li>
          </ul>
          <ul>
            <li>
              <Typography variant="h5">Access</Typography>
            </li>
            <li>Explor</li>
            <li>Artists</li>
            <li>Playlists</li>
            <li>Albums</li>
            <li>Trending</li>
          </ul>
          <ul>
            <li>
              <Typography variant="h5">Contact</Typography>
            </li>
            <li>About</li>
            <li>Policy</li>
            <li>Social Media</li>
            <li>Soppurt</li>
          </ul>
        </Box>
        <Box className="footer__media-wrapper">
          <Image src={Logo} alt="logo" />
          <Box>
            <AppIcon name="facebook" />
            <AppIcon name="instagram" />
            <AppIcon name="twitter" />
            <AppIcon name="phone" />
          </Box>
        </Box>
      </footer>
    </FooterStyle>
  );
}
