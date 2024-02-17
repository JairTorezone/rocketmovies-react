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

  display: flex;
  flex-direction: column;
  gap: 8px;

  > div:nth-child(3) {
    margin-top: 24px;
  }

  > button {
    margin: 24px 0px;
  }
`;

export const ProfileImg = styled.div`
  position: relative;

  padding: 0;
  margin: -90px 0 64px;

  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  > button {
    width: 48px;
    height: 48px;

    border-radius: 50%;

    background: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    font-size: 20px;
    font-weight: 700;

    position: absolute;
    bottom: 8px;
    right: 2px;
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
