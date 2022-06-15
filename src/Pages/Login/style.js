import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

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
`;

export const Content = styled.div`
  background: var(--grey-3);
  padding: 40px 20px 30px 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px var(--shadow);
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

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
`;
