import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  padding-bottom: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #00000033;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: space-between;
  align-items: ${(props) => (props.column ? "initial" : "center")};

  span {
    color: #00e676;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Controll = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
  }
`;

export const Photo = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 4px;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: darken;
`;
