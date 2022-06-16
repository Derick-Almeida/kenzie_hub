import styled, { keyframes } from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header,
  nav {
    width: 100%;
    flex: 1;
    border-bottom: 2px solid var(--grey-3);

    display: flex;
    justify-content: space-between;
    padding: 20px 20%;

    h1 {
      color: var(--color-primary);
      font-size: 1.5rem;
    }

    h2 {
      text-transform: capitalize;
      font-size: 1.5rem;
      color: var(--grey-0);
    }

    span {
      color: var(--grey-1);
      font-size: 1.1rem;
    }
  }

  header {
    padding: 35px 20%;
    margin-bottom: 20px;
  }

  @media (max-width: 750px) {
    header,
    nav {
      padding: 20px;

      h2 {
        font-size: 1rem;
        text-align: center;
      }
    }

    header {
      padding: 35px 20px;

      span {
        font-size: 0.9rem;
        text-align: center;
      }
    }
  }

  @media (min-width: 1600px) {
    header,
    nav {
      padding: 20px 20%;

      h1 {
        font-size: 3rem;
      }

      button {
        font-size: 2rem;
      }

      h2 {
        font-size: 2.5rem;
      }

      span {
        font-size: 2rem;
      }
    }

    header {
      padding: 35px 20%;
      margin-bottom: 20px;
    }
  }
`;

export const TechList = styled.div`
  padding: 20px 20%;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    p {
      color: var(--white);
      font-size: 1rem;
    }

    svg {
      color: var(--white);
      background: var(--grey-3);
      border-radius: 5px;

      font-size: 1.2rem;
      font-weight: 700;

      height: 25px;
      width: 25px;
      padding: 3px;

      &:hover {
        cursor: pointer;
        background: var(--grey-2);
      }
    }
  }

  .tech__list {
    padding: 15px;
    border-radius: 5px;

    background: var(--grey-3);
    box-shadow: var(--shadow) 2px 2px 5px;

    height: 480px;
    max-height: 480px;
    overflow-y: auto;

    li {
      display: flex;
      justify-content: space-between;

      border-radius: 5px;
      background: var(--grey-4);
      color: var(--grey-0);

      padding: 15px;
      font-size: 1rem;

      &:hover {
        background: var(--grey-2);
        cursor: pointer;
      }
      span {
        color: var(--grey-1);
        font-size: 0.9rem;
      }
    }

    li + li {
      margin-top: 10px;
    }
  }

  @media (max-width: 750px) {
    padding: 20px;
  }

  @media (min-width: 1600px) {
    > div {
      p {
        font-size: 2.5rem;
      }
      svg {
        font-size: 2.5rem;

        height: 50px;
        width: 50px;
      }
    }

    .tech__list {
      padding: 40px;
      height: 880px;
      max-height: 880px;
      overflow-y: auto;
      border-radius: 15px;

      li {
        padding: 25px;
        font-size: 2rem;

        span {
          font-size: 1.5rem;
        }
      }

      li + li {
        margin-top: 25px;
      }
    }
  }
`;

const rotateIcon = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 450px;
  width: 80%;
  text-align: center;
  margin: 0 auto;

  color: var(--grey-0);

  svg {
    font-size: 5rem;
    margin-bottom: 50px;
  }
  svg + svg {
    margin-left: 40px;
  }

  svg:nth-child(2) {
    transition: 0.3s;
    animation: ${rotateIcon} 15s infinite linear;
  }

  p {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    svg {
      font-size: 3.5rem;
    }
    svg + svg {
      margin-left: 20px;
    }
    p {
      font-size: 1.7rem;
    }
  }

  @media (min-width: 1600px) {
    margin: 180px auto;

    svg {
      font-size: 8rem;
      margin-bottom: 50px;
    }

    p {
      font-size: 4rem;
    }
  }
`;
