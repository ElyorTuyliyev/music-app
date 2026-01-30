import { Box, Button, Typography } from "@mui/material";
import { HomeStyle } from "./home";

export default function HomePage() {
  return (
    <HomeStyle>
      <main className="main">
        <section className="home">
          <Box className="home__into">
            <Typography className="home__title" variant="h1">
              in One Place
            </Typography>
            <Typography className="home__subtitle">
              On our website, you can access an amazing collection of popular
              and new songs. Stream your favorite tracks in high quality and
              enjoy without interruptions. Whatever your taste in music, we have
              it all for you!
            </Typography>
            <Box className="home__btns">
              <Button variant="contained">Discover Now</Button>
              <Button variant="outlined">Create Playlist</Button>
            </Box>
          </Box>
        </section>
      </main>
    </HomeStyle>
  );
}
