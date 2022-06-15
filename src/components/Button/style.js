import styled, { css } from "styled-components";

export const ButtonTheme = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 16px;

  ${(prop) => {
    switch (prop.color) {
      case "primary":
        return css`
          background: ${(prop) => (prop.disabled ? "#59323F" : "#FF577F")};
          color: var(--white);
          font-size: 1rem;

          &:hover {
            background: ${(prop) => (prop.disabled ? "#59323F" : "#FF427F")};
            cursor: ${(prop) => (prop.disabled ? "not-allowed" : "pointer")};
          }
        `;

      case "secundary":
        return css`
          background: var(--grey-1);
          color: var(--white);
          font-size: 1rem;

          &:hover {
            background: var(--grey-2);
          }
        `;

      default:
        return css`
          background: var(--grey-3);
          color: var(--grey-0);
          font-size: 0.8rem;
        `;
    }
  }}
`;
