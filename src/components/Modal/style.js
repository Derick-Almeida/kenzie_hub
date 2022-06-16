import styled, { keyframes } from "styled-components";

const showModal = keyframes`
    from{
        transform: scale(0);
        opacity: 0;
    }
    to{
        transform: scale(1);
        opacity: 1;
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--opacity-color);
  position: fixed;
  min-height: 100vh;
  width: 100%;
  top: 0;

  .box {
    background: var(--grey-3);
    min-width: 35%;
    border-radius: 5px;

    animation: ${showModal} 0.3s linear;
    transition: 0.3s;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background: var(--grey-2);
      padding: 12px;
      border-radius: 5px 5px 0 0;

      h2 {
        color: var(--grey-0);
        font-size: 1.1rem;
      }
      svg {
        cursor: pointer;
        color: var(--grey-1);
        font-size: 1.5rem;
      }
    }

    form {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .buttons {
        display: flex;

        button + button {
          margin-left: 10px;
        }

        button:nth-child(1) {
          flex: 2;
        }

        button:nth-child(2) {
          flex: 1;
        }
      }

      button {
        width: 100%;
        margin-bottom: 15px;
        height: 50px;
      }
    }
  }

  @media (min-width: 1600px) {
    .box {
      min-width: 30%;

      .header {
        padding: 25px;

        h2 {
          font-size: 2rem;
        }
        svg {
          font-size: 2.5rem;
        }
      }

      form {
        padding: 40px;
        gap: 40px;

        .buttons {
          button + button {
            margin-left: 10px;
          }
        }
        button {
          margin-bottom: 25px;
          height: 80px;
          font-size: 2rem;
        }
      }
    }
  }
`;
