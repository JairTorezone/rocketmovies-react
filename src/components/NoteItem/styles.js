import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  border-radius: 10px;

  padding: 16px;

  border: 1px solid red;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 22px;
  }

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.GRAY_400};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
