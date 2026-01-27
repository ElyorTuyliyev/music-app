"use client";
import theme from "@/src/theme/theme";
import styled from "@emotion/styled";

export const HeaderStyle = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__search-wrapper {
    width: 320px;
  }

  .header__link {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(4)};
  }
`;
