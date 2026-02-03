import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { CardStyle } from "./Card.style";
import image from "./epp.png";

type MusicCardProps = {
  name: string;
  artist?: string | "";
  imgSrc: string;
};

export default function MusicCard({ name, artist, imgSrc }: MusicCardProps) {
  return (
    <CardStyle>
      <Box className="card">
        <Image src={image} alt="logo" className="card__img" />
        <Box className="card__title-wrapper">
          <Typography className="card__title" variant="h6">
            Adele 21
          </Typography>
          <Typography className="card__subtitle" variant="inherit">
            {artist}
          </Typography>
        </Box>
      </Box>
    </CardStyle>
  );
}
