import styled, { keyframes } from "styled-components";

const showForm = keyframes`
from {
  transform:  translateY(-50px);
  opacity: 0;
}
to{
  transform:  translateY(0px);
  opacity:1;
}
`;

export const Container = styled.div`
  min-height: 100vh;
  max-width: 450px;
  margin: 0 auto;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${showForm} 0.6s linear;
  transition: 0.3s;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 48px;

    h1 {
      color: var(--color-primary);
      font-size: 1.8rem;
    }

    button {
      font-size: 1rem;
    }
  }

  @media (max-width: 425px) {
    max-width: 400px;
    padding: 30px 0;
  }
  @media (min-width: 1600px) {
    max-width: 900px;
    padding: 80px 0;

    header {
      h1 {
        font-size: 3rem;
      }

      button {
        font-size: 2rem;
      }
    }
  }
`;

export const Content = styled.div`
  background: var(--grey-3);
  padding: 50px 20px 30px 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px var(--shadow);
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h2 {
      color: var(--grey-0);
      font-size: 1.6rem;
    }

    > span {
      color: var(--grey-1);
      font-size: 1.1rem;
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      height: 70px;
      margin-top: 10px;
    }
  }

  @media (max-width: 425px) {
    padding: 35px 20px 25px 20px;
    input {
      font-size: 0.8rem;
    }

    form {
      gap: 25px;
      h2 {
        font-size: 1.5rem;
      }

      > span {
        font-size: 1rem;
        margin-bottom: 5px;
      }

      button {
        height: 50px;
      }
    }
  }
  @media (min-width: 1600px) {
    padding: 80px 40px 60px 40px;
    border-radius: 15px;

    form {
      gap: 40px;

      h2 {
        font-size: 2.6rem;
      }

      > span {
        font-size: 2.1rem;
        margin-bottom: 10px;
      }

      input {
        height: 100px;
      }

      button {
        height: 100px;
        margin-top: 20px;
        font-size: 2rem;
      }
    }
  }
`;
