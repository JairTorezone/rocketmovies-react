import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  width: 100%;
  height: 100vh;
  max-width: 635px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* padding: 229px 161px 267px 136px; */

  > h1 {
    font-size: 48px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > span {
    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  > h3 {
    font-size: 24px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 48px 0px;
  }

  > div {
    width: 340px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    > button {
      margin-top: 16px;
      margin-bottom: 42px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
