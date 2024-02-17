import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  border-radius: 14px;

  > input {
    height: 56px;
    width: 100%;

    padding: 19px 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    > svg {
      margin-left: 18px;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    @media (max-width: 768px) {
      height: 40px;
      padding: 12px;
      font-size: 13px;
    }
  }
`;
