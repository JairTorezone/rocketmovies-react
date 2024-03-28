import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  flex-direction: column;

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_800};

    margin-top: 15px;
  }

  > span {
    margin-top: 8px;
    display: flex;
    gap: 4px;

    position: relative;
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    gap: 8px;
  }

  @media (max-width: 498px) {
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 13px;
    }
    footer {
      flex-wrap: wrap;
    }
  }
`;
