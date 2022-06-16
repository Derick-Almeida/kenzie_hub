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
  max-width: 400px;
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
    justify-content: center;

    margin-bottom: 48px;

    h1 {
      color: var(--color-primary);
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1600px) {
    max-width: 800px;
    padding: 60px 0;

    header {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export const Content = styled.div`
  background: var(--grey-3);
  padding: 40px 20px 30px 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px var(--shadow);
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    h2 {
      color: var(--grey-0);
      font-size: 1.6rem;
    }

    button {
      width: 100%;
      height: 60px;
      margin-top: 10px;
    }
  }

  span {
    color: var(--grey-1);
    font-size: 1rem;
    text-align: center;
  }

  button {
    width: 100%;
    height: 60px;
  }

  @media (min-width: 1600px) {
    padding: 80px 40px 60px 40px;
    border-radius: 15px;

    form {
      gap: 50px;

      h2 {
        font-size: 2.6rem;
      }

      input {
        height: 100px;
      }

      button {
        height: 100px;
        font-size: 2rem;
        margin-top: 20px;
      }
    }

    span {
      font-size: 2rem;
    }

    button {
      height: 100px;
      font-size: 2rem;
    }
  }
`;
