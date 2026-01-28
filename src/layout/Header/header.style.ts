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

  .header__link-wrapper {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(4)};
  }

  .header__links {
    color: ${theme.palette.common.white};
    font-size: 16px;
  }

  .header__btn-wrapper {
    display: flex;
    gap: ${theme.spacing(1.5)};
  }

  .header__btn {
    padding: 7px 63px;
  }
`;
