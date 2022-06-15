import styled, { keyframes } from "styled-components";

const showOptions = keyframes`
from {
  transform: translateY(-55px);
  opacity: 0;
}
to{
  transform: translateY(0px);
  opacity: 1;
}
`;

export const Container = styled.div`
  width: 100%;
  position: relative;

  > div:nth-child(1) {
    color: var(--grey-0);
    margin-bottom: 15px;

    span {
      color: var(--error);
    }
  }

  ul {
    width: 100%;
    position: absolute;

    background: var(--grey-2);
    box-shadow: var(--shadow) 2px 2px 5px;

    margin-top: 5px;
    border-radius: 5px;

    animation: ${showOptions} 0.3s;
    transition: 0.5s;

    li {
      color: var(--grey-0);
      border-bottom: 1px solid var(--grey-3);

      line-height: 40px;
      cursor: pointer;
      padding: 0 10px;

      &:hover {
        background: var(--grey-1);
        color: var(--black);
      }
    }
  }

  .hidden {
    display: none;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    font-size: 1rem;

    background: var(--grey-2);
    color: var(--grey-1);

    border: 2px solid var(--grey-2);
    border-radius: 5px;
    outline: none;

    &:focus {
      border: 2px solid var(--grey-0);
    }

    &::placeholder {
      color: var(--grey-1);
    }
  }

  span {
    width: 100%;
    height: 50px;
    position: absolute;
    right: 0;
    cursor: pointer;

    svg {
      height: 50px;

      position: absolute;
      right: 10px;

      color: var(--grey-1);
      font-size: 2rem;
    }
  }
`;
