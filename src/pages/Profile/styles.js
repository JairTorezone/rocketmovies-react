import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > main {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 20px;
    }
  }
`;

export const Header = styled.div`
  height: 144px;
  width: 100%;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;

  padding: 0 144px;

  > a {
    font-size: 16px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;

    > svg {
      margin-right: 8px;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  @media (max-width: 768px) {
    align-items: start;
    padding: 30px;
  }
`;

export const Form = styled.div`
  width: 100%;
  max-width: 340px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  > button {
    margin: 24px 0px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -90px 0 64px;

  display: flex;
  justify-content: center;

  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 5px;
    right: 75px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

  @media (max-width: 768px) {
    img {
      width: 130px;
      height: 130px;
    }

    button {
      width: 35px;
      height: 35px;
    }
  }
`;
