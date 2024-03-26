import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 40px 100px;

    overflow-y: auto;

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
    .title {
      margin-top: 24px;

      display: flex;
      align-items: center;
      gap: 20px;

      > h2 {
        font-size: 36px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      .stars {
        display: flex;
        gap: 10px;
      }
    }

    .created-at {
      margin-top: 24px;

      span {
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      .user {
        display: flex;
        align-items: center;
        gap: 10px;

        > img {
          height: 16px;
          width: 16px;
          border-radius: 50%;
        }
      }

      .times {
        display: flex;
        align-items: center;

        > svg {
          font-size: 16px;
          color: ${({ theme }) => theme.COLORS.PINK};
          margin-right: 10px;
        }
      }
    }

    .tags {
      margin: 40px 0;

      display: flex;
      gap: 8px;
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    @media (max-width: 576px) {
      padding: 30px 30px;

      .title {
        flex-direction: column;
        align-items: start;

        h2 {
          font-size: 22px;
        }
      }

      .tags {
        button {
          font-size: 12px;
        }
      }

      .description {
        p {
          font-size: 14px;
        }
      }
    }
  }
`;
