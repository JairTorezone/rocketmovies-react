import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme, isBlack }) =>
    isBlack ? theme.COLORS.BACKGROUND_600 : theme.COLORS.PINK};

  color: ${({ theme, isBlack }) =>
    isBlack ? theme.COLORS.PINK : theme.COLORS.GRAY_300};

  font-size: 16px;
  font-weight: 500;

  padding: 17px 0;
  border: none;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
