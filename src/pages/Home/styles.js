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
  grid-area: content;
  overflow-y: auto;

  margin: 0 auto;
  padding: 50px 100px;

  > h2 {
    font-size: 32px;
    font-weight: 400;

    padding-bottom: 41px;
  }
`;

export const Assessment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
