import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 16px;

  font-size: 16px;
  border-radius: 10px;

  padding: 16px;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 22px;
  }

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.GRAY_400};

  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};
`;
