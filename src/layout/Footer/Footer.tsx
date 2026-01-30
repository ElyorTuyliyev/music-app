import Image from "next/image";
import { Box, Typography } from "@mui/material";

import Logo from "../../assets/logo.svg";
import { FooterStyle } from "./footer.style";
import { AppIcon } from "@/src/components/Icon/icon";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterStyle>
      <footer className="footer">
        <Box className="footer__about-wrapper">
          <Typography className="footer__about-title" variant="h5">
            About
          </Typography>
          <Typography className="footer__about-subtitle">
            Melodies is a website that has been created for over 5 year’s now
            and it is one of the most famous music player website’s in the
            world. in this website you can listen and download songs for free.
            also of you want no limitation you can buy our premium pass’s.
          </Typography>
        </Box>
        <Box className="footer__links-wrapper">
          <ul>
            <li>
              <Typography variant="h5" className="footer__link-title">
                Melodies
              </Typography>
            </li>
            <li>
              <Link href="#">Songs</Link>
            </li>
            <li>
              <Link href="#">Radio</Link>
            </li>
            <li>
              <Link href="#">Podcast</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Typography variant="h5" className="footer__link-title">
                Access
              </Typography>
            </li>
            <li>
              <Link href="#">Explor</Link>
            </li>
            <li>
              <Link href="#">Artists</Link>
            </li>
            <li>
              <Link href="#">Playlists</Link>
            </li>
            <li>
              <Link href="#">Albums</Link>
            </li>
            <li>
              <Link href="#">Trending</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Typography variant="h5" className="footer__link-title">
                Contact
              </Typography>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Policy</Link>
            </li>
            <li>
              <Link href="#">Social Media</Link>
            </li>
            <li>
              <Link href="#">Soppurt</Link>
            </li>
          </ul>
        </Box>
        <Box className="footer__media-wrapper">
          <Image src={Logo} alt="logo" />
          <Box className="footer__media-into">
            <Link href="#">
              <AppIcon name="facebook" />
            </Link>
            <Link href="#">
              <AppIcon name="instagram" />
            </Link>
            <Link href="#">
              <AppIcon name="twitter" />
            </Link>
            <Link href="#">
              <AppIcon name="phone" />
            </Link>
          </Box>
        </Box>
      </footer>
    </FooterStyle>
  );
}
