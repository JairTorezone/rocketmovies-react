import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 116px auto;

  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 0 100px;
    margin-top: 40px;

    > header {
      margin: 0 auto 40px;
      width: 100%;
      max-width: 1113px;

      > a {
        font-size: 16px;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;

        > svg {
          margin-right: 8px;
          font-size: 16px;
        }
      }

      > h2 {
        margin-top: 18px;
        font-size: 32px;
      }

      > a {
        font-size: 14px;
      }
    }

    > section {
      width: 100%;
      height: auto;
      margin: 40px 0;

      > .tags {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        padding: 16px;
        border-radius: 8px;
        height: 88px;

        margin: 24px 0 0;

        display: flex;
        gap: 24px;
      }
    }

    .logout {
      display: flex;
      gap: 40px;

      margin-bottom: 40px;
    }

    @media (max-width: 576px) {
      padding: 20px;

      section {
        height: fit-content;
      }

      button {
        width: fit-content;
        padding: 10;
        font-size: 14px;
        padding: 10px;
      }

      svg {
        font-size: 14px;
      }

      .logout {
        button {
          font-size: 13px;
        }
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 1113px;

  margin: 0 auto;

  > div {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  @media (max-width: 576px) {
    div {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
