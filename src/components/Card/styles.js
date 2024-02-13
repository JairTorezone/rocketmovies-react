import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 15px;

  > h3 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
  }

  > P {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    line-height: 24px;
  }

  > div {
    display: flex;
    gap: 8px;
    margin-top: 15px;
  }
`;

export const Star = styled.button`
  border: 0;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 18px;
  }
`;
