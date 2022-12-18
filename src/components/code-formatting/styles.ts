import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  padding: 32px 28px 28px;
  margin-top: 46px;
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    & > span {
      position: absolute;
      top: 2px;
      color: #fff;
      gap: 12px;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      svg {
        width: 36px;
        margin: -16px 0 0 32px;
      }
    }
    pre {
      border-radius: 12px;
      padding: 8px 28px 8px 10px !important;
      box-shadow: 0px 10px 25px rgb(0 0 0 / 40%);
      code {
        font-family: 'Roboto' !important;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 1px;
      }
    }
  }
`;
