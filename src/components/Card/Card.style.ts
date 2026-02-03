"use client";

import theme from "@/src/theme/theme";
import styled from "@emotion/styled";

export const CardStyle = styled.div`
  .card {
    width: 100%;
    padding: 8px;
    max-width: 174px;
    border-radius: 8px;
    background-color: ${theme.palette.grey[900]};
  }

  .card__img {
    width: 100%;
    max-width: 158px;
    border-radius: 8px;
  }

  .card__title {
    font-size: 16px;
  }

  .card__subtitle {
    font-size: 12px;
  }
`;
