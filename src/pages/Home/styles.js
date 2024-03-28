import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 116px auto;

  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  overflow-y: auto;

  margin: 0 auto;
  padding: 50px 100px;

  .titles {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 37px;

    h2 {
      font-size: 32px;
      font-weight: 400;
    }

    @media (max-width: 498px) {
      h2 {
        font-size: 16px;
      }
    }

    a {
      padding: 13px 32px;
      color: #1c1b1e;

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      border-radius: 8px;
      background: #ff859b;
      border: none;

      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 5px;
    }

    @media (max-width: 498px) {
      a {
        padding: 12px;
        gap: 5px;

        font-size: 12px;
      }
    }
  }

  @media (max-width: 679px) {
    padding: 40px 15px;

    h2 {
      font-size: 22px;
    }
  }
`;

export const Assessment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
