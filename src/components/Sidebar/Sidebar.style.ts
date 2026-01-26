"use client";

import theme from "@/src/theme/theme";
import styled from "@emotion/styled";

export const SidebarStyle = styled.div`
  .sidebar {
    width: 100%;
    max-width: 270px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 48px 32px 0 64px;
    border-right: 2px solid ${theme.palette.primary.main};
  }

  .sidebar__logo {
    margin: 0 0 24px 0;
  }

  .sidebar__link-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
  }

  .sidebar__title {
    color: ${theme.palette.primary.main};
  }
`;
