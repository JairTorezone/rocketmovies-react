import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  border-radius: 14px;

  padding: 0 16px;

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
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;
