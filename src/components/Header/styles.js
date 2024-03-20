import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  padding: 0 100px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  > a {
    font-size: 24px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  @media (max-width: 992px) {
    padding: 0 30px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    gap: 40px;

    a {
      font-size: 18px;
    }
  }

  @media (max-width: 576px) {
    padding: 0 20px;
    gap: 20px;

    img {
      display: none;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 630px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 9px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  @media (max-width: 576px) {
    div {
      display: none;
    }
  }

  a img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;
