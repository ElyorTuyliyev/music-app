"use client";
import theme from "@/src/theme/theme";
import styled from "@emotion/styled";

export const FooterStyle = styled.div`
  .footer {
    display: flex;
    padding: 33px 0;
    align-items: center;
    justify-content: space-between;
  }

  .footer__about-wrapper {
    width: 349px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  }

  .footer__about-title {
    font-weight: 600;
  }

  .footer__links-wrapper {
    gap: 22px;
    display: flex;
  }

  .footer__link-title {
    border-bottom: 3px solid;
    padding: 0 0 10px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    li {
      list-style: none;
      font-style: italic;
    }
    a {
      color: ${theme.palette.common.white};
    }
  }

  .footer__media-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(4.5)};
  }

  .footer__media-into {
    display: flex;
    gap: ${theme.spacing(5)};
  }
`;
