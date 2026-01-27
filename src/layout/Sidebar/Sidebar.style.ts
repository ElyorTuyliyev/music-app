"use client";

import theme from "@/src/theme/theme";
import styled from "@emotion/styled";

export const SidebarStyle = styled.div`
  .sidebar {
    width: 100%;
    max-width: 270px;
    min-height: 100vh;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 48px 32px 24px 64px;
    border-right: 2px solid ${theme.palette.primary.main};
  }

  .sidebar__logo {
    margin: 0 0 24px 0;
  }

  .sidebar__link-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
    padding: 0 0 24px;
  }

  .sidebar__title {
    color: ${theme.palette.primary.main};
  }

  .sidebar__links {
    font-size: 16px;
    transition: 0.2s;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(1)};
    border-radius: 9px;
    color: ${theme.palette.common.white};
    :hover {
      padding: 6px 8px;
      background-color: ${theme.palette.primary.main};
    }
  }

  .active__link {
    padding: 6px 8px;
    background-color: ${theme.palette.primary.dark};
    font-size: 18px;
  }
`;
