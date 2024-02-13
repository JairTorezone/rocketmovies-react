import styled from "styled-components";

export const Container = styled.a`
  font-size: 16px;
  font-weight: 400;

  color: ${({ theme }) => theme.COLORS.PINK};

  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
  }
`;
