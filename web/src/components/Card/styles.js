import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Photo = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export const Infos = styled.div`
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 16px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: #555;
    line-height: 24px;
  }

  span {
    text-align: right;
    color: #00e676;
    font-weight: bold;
    font-size: 18px;
    margin-top: 4px;
  }

  button {
    width: 100%;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #00e676;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }

  :last-child {
    margin-left: 16px;
  }
`;
