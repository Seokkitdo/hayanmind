import "./App.css";
import Card from "./components/Card/Card";
import styled from "styled-components";

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <CardWrap>
      <Card />
    </CardWrap>
  );
}

export default App;
