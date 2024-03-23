import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  background: none;

  > svg {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
