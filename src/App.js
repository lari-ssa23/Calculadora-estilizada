import React, { Component } from "react";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{ 
margin:0;
padding:0;
box-sizing: border-box;
}
`;
const Inpu = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16em;
  height: 4em;
`;
const Operation = styled.button`
  width: 4em;
  height: 3em;
`;
const Num = styled.button`
  color: #c2c2c2;
  width: 4em;
  height: 3em;
`;
const Del = styled.button`
  color: red;
  width: 8em;
  height: 3em;
`;
const Title = styled.h1`
  width: 10em;
  font-size: 1.5em;
  text-align: center;
  color: purple;
  display: flex;
`;
const Tudao = styled.div`
  margin-left: 10em;
`;
export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: "",
    sinal: ""
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  divide = () => {
    const { n1, n2 } = this.state;
    if (this.state.n2 !== 0) {
      this.setState({
        res: n1 / n2,
        sinal: "/"
      });
    }
  };
  soma = () => {
    const { n1, n2 } = this.state;
    if (this.state.n2 > 0) {
      this.setState({
        res: n1 + n2,
        sinal: "+"
      });
    }
  };
  subtrai = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 - n2,
        sinal: "-"
      });
    }
  };
  multiplica = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 * n2,
        sinal: "*"
      });
    }
  };
  clear = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        n1: "",
        n2: "",
        res: ""
      });
    }
  };

  render() {
    return (
      <Tudao>
        <Title>Calculadora de Operações básicas</Title>
        <Inpu>
          <input onChange={this.handleChange1} type="number" />
          <input onChange={this.handleChange2} type="number" />
        </Inpu>
        <h2>{this.state.res}</h2>
        <div>
          <Operation onClick={this.divide}>/</Operation>
          <Operation onClick={this.multiplica}>*</Operation>
          <Operation onClick={this.subtrai}>-</Operation>
          <Operation onClick={this.soma}>+</Operation>
        </div>
        <div>
          <div>
            <Num>0</Num>
            <Num>1</Num>
            <Num>2</Num>
            <Num>3</Num>
          </div>
          <div>
            <Num>4</Num>
            <Num>5</Num>
            <Num>6</Num>
            <Num>7</Num>
          </div>
          <div>
            <Num>8</Num>
            <Num>9</Num>
            <Del OnClick={this.clear}>Del</Del>
          </div>
        </div>
      </Tudao>
    );
  }
}

export default App;
