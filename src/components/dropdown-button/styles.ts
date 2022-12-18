import styled, { css } from 'styled-components';

import { Props } from '.';

export const Wrapper = styled.div<{
  themeColor: Props['theme'];
  variant: Props['variant'];
  isOpen: boolean;
}>`
  height: 35px;
  padding: 0 15px;

  position: relative;

  border: 1px solid #297784;
  background: #297784;

  & > button {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    background: transparent;
    border: 0;
    color: #ffffff;
    font-size: 0.875rem;

    cursor: pointer;

    svg {
      color: #ffffff;
      font-size: 1rem;
      transition-duration: 0.3s;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  ${({ themeColor }) =>
    themeColor === 'light' &&
    css`
      border: 1px solid #ffffff;
      background: #ffffff;
      button {
        color: #333333;
        svg {
          color: #333333;
        }
      }
    `}

  ${({ isOpen, variant, themeColor }) =>
    isOpen
      ? css`
          ${variant === 'up'
            ? css`
                border-radius: 0 0 20px 20px;
              `
            : css`
                border-radius: 20px 20px 0 0;
              `}

          &:after {
            content: '';
            position: absolute;

            width: calc(100% + 2px);
            height: 10px;

            background: #297784;

            right: -1px;
            ${variant === 'up'
              ? css`
                  top: -11px;
                `
              : css`
                  bottom: -11px;
                `}
            z-index: 2;
            ${themeColor === 'light' &&
            css`
              background: #ffffff;
            `}
          }
          & svg {
            transform: rotate(-180deg);
          }
        `
      : css`
          border-radius: 30px;
        `}
`;

export const Dropdown = styled.ul<{
  variant: Props['variant'];
  themeColor: Props['theme'];
}>`
  min-width: 170px;
  background: #297784;

  position: absolute;
  z-index: 2;

  right: -1px;

  padding: 10px;

  ${({ variant }) =>
    variant === 'up'
      ? css`
          bottom: 44px;
          border-radius: 15px 15px 0 15px;

          box-shadow: 0px -25px 30px rgba(0, 0, 0, 0.25);
        `
      : css`
          top: 44px;
          border-radius: 15px 0px 15px 15px;

          box-shadow: 0px 25px 30px rgba(0, 0, 0, 0.65);
        `}

  li {
    width: 100%;

    border-width: 1.5px;
    border-bottom-style: solid;
    border-image: linear-gradient(95.33deg, #276d77 -15.39%, #3093a3 93.8%) 1;

    & > button {
      width: 100%;
      border: 0;

      font-size: 0.875rem;
      text-align: left;

      padding: 10px 8px;
      background: transparent;
      color: #ffffff;

      cursor: pointer;

      &:hover {
        background: rgb(0 0 0 / 5%);
        border-radius: 2px;
      }
    }

    &:last-child {
      border: 0;
    }
  }

  ${({ themeColor }) =>
    themeColor === 'light' &&
    css`
      background: #ffffff;

      li {
        border-image: linear-gradient(95.33deg, #cccccc -15.39%, #ebebeb 93.8%)
          1;

        & > button {
          color: #333333;
        }
      }
    `}
`;
