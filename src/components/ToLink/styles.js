import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  font-size: 16px;
  font-weight: 400;

  color: ${({ theme }) => theme.COLORS.PINK};

  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
  }
`;
