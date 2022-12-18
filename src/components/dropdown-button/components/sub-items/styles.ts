import styled, { css } from 'styled-components';

export const Wrapper = styled.li<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;

  gap: 0;

  & > button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    padding-bottom: 5px;
    svg {
      color: #ffffff;
      font-size: 1rem;

      transition-duration: 0.3s;

      transform: rotate(0);

      ${({ isOpen }) =>
        isOpen &&
        css`
          transform: rotate(-180deg);
        `}
    }
  }
`;

export const Accordion = styled.ul`
  padding: 0px 0px 0px 5px;
  width: 100%;

  li {
    & > button {
      height: 26px;
      display: flex;
      align-items: center;
    }
  }
`;
