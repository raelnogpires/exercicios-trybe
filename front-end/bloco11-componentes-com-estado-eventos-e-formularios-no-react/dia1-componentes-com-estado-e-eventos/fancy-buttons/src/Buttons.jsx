import React, { Component } from 'react';

class Buttons extends Component {
  constructor() {
    super();

    this.handleFirstButton = this.handleFirstButton.bind(this);
    this.handleSecondButton = this.handleSecondButton.bind(this);
    this.handleThirdButton = this.handleThirdButton.bind(this);
  }

  handleFirstButton = () => {
    console.log('Funcionou! XD');
  };
  
  handleSecondButton = () => {
    console.log('Esse aqui também está funcionando :O');
  };
  
  handleThirdButton = () => {
    console.log('O último funcionou também, ufa! :P');
  };

  render() {
    return (
      <div className='button-div'>
        <button onClick={this.handleFirstButton}>Botão Nº1</button>
        <button onClick={this.handleSecondButton}>Botão Nº2</button>
        <button onClick={this.handleThirdButton}>Botão Nº3</button>
      </div>
    );
  };
}

export default Buttons;
