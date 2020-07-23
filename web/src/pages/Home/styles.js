import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: darken;
`;

export const Text = styled.div`
  width: 80%;
  text-align: center;
  text-transform: uppercase;

  h1 {
    color: #fff;
    font-size: 64px;
  }

  strong {
    color: #00e676;
  }
`;

export const Cards = styled.div`
  width: 80%;
  margin: 24px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  column-gap: 8px;
`;
