import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 80%;
  margin: 32px auto;
  padding: 16px 0;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};

  align-items: ${(props) => (props.column ? "initial" : "center")};

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 16px;
  }

  form {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 72px;
    gap: 8px;
    margin-bottom: 32px;

    input {
      width: 100%;
      padding: 0 8px;
      font-size: 16px;
    }
  }
`;
