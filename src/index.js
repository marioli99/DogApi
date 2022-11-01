import React from "react";
import ReactDOM from "react-dom";
import Dogs from "./components/Dogs";
import GlobalStyle from "./components/Style/GlobalStyle";
import * as S from "./components/Style/Style"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogUrl: "",
      breed: ""
    };
  }
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <S.Title>Fotos de Doguinhos para aquecer seu ❤ !</S.Title>
        <Dogs />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
