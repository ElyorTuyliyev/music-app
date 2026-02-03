import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { CardStyle } from "./Card.style";
import image from "./epp.png";

export default function MusicCard() {
  return (
    <CardStyle>
      <Box className="card">
        <Image src={image} alt="logo" className="card__img" />
        <Box className="card__title-wrapper">
          <Typography className="card__title" variant="h6">
            Adele 21
          </Typography>
          <Typography className="card__subtitle" variant="inherit">
            Adele
          </Typography>
        </Box>
      </Box>
    </CardStyle>
  );
}
