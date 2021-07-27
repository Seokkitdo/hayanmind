import "./App.css";
import React from "react";
import Card from "./components/Card/Card";
import styled from "styled-components";

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <CardWrap>
      <Card />
    </CardWrap>
  );
}

export default App;
