"use client";
import styled from "@emotion/styled";
import homeBc from "@/src/assets/main-bc-mg.png";
import theme from "@/src/theme/theme";

export const HomeStyle = styled.div`
  .home {
    width: 100%;
    min-height: 595px;
    background-size: cover;
    border-radius: 25px;
    display: flex;
    justify-content: end;
    flex-direction: column;
    padding: 0 10px 113px 10px;
    margin: 48px 0 0 0;
    background-repeat: no-repeat;
    background-image: url(${homeBc.src});
  }

  .home__into {
    width: 325px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(5)};
  }

  .home__subtitle {
    font-size: 12px;
  }

  .home__btns {
    display: flex;
    gap: ${theme.spacing(3)};
  }
`;
