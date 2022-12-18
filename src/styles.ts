import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 40px;

  h1 {
    background: #fff;
    color: #333;

    border-radius: 50px;

    padding: 20px;
    margin-top: 36px;

    font-size: 1.475rem;
    text-align: center;
  }
`;

export const Align = styled.div<{
  minorMargin?: boolean;
  minorPadding?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  padding: ${({ minorPadding }) => (minorPadding ? '14px 28px' : '28px')};
  margin-top: ${({ minorMargin }) => (minorMargin ? '18px' : '36px')};

  a {
    svg {
      font-size: 2rem;
      color: #fff;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 28px;

    border: 1px dashed #3e444c;
    padding: 28px;

    border-radius: 16px;

    & > span {
      font-size: 1rem;
      font-weight: bold;

      color: #fff;

      font-size: 0.875rem;
      font-weight: bold;
      color: #fff;
    }
  }
`;
