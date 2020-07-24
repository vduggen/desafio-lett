import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 80%;
  margin: 24px auto;
  padding: 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};

  h2 {
    font-size: 40px;
    margin-bottom: 8px;
  }

  span {
    color: #555;
    font-size: 18px;
    margin-bottom: 24px;
  }

  ul {
    margin-top: 8px;
  }

  li {
    list-style: none;
    line-height: 24px;
  }

  p:first-child {
    color: #00e676;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4px;
  }
`;

export const Photo = styled.div`
  img {
    width: 100%;
    border-radius: 4px;
  }
`;
