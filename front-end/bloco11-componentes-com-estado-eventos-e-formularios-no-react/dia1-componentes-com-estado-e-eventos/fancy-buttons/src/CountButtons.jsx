import React, { Component } from 'react';

class CountButtons extends Component {
  constructor() {
    super();

    this.handleFirstButton = this.handleFirstButton.bind(this);
    this.handleSecondButton = this.handleSecondButton.bind(this);
    this.handleThirdButton = this.handleThirdButton.bind(this);

    this.state = {
      firstButton: 0,
      secondButton: 0,
      thirdButton: 0,
    };
  };

  handleFirstButton = () => {
    this.setState((firstCount, _props) => ({
      firstButton: firstCount.firstButton + 1,
    }));

    if (this.state.firstButton === 5) {
      const a = document.querySelector('.firstButton');
      a.style.backgroundColor = '#ada7ff';
      console.log('azul meio céu');
    };
  };

  handleSecondButton = () => {
    this.setState((secondCount, _props) => ({
      secondButton: secondCount.secondButton + 1,
    }));

    if (this.state.secondButton === 5) {
      const a = document.querySelector('.secondButton');
      a.style.backgroundColor = '#bbadff';
      console.log('azul já meio roxinho');
    };
  };

  handleThirdButton = () => {
    this.setState((thirdCount, _props) => ({
      thirdButton: thirdCount.thirdButton + 1,
    }));

    if (this.state.thirdButton === 5) {
      const a = document.querySelector('.thirdButton');
      a.style.backgroundColor = '#dab6fc';
      console.log('roxinho claro');
    };
  };

  render() {
    return (
      <div className='button-div'>
        <button onClick={this.handleFirstButton} className='firstButton'>
          {this.state.firstButton}
        </button>
        <button onClick={this.handleSecondButton} className='secondButton'>
        {this.state.secondButton}
        </button>
        <button onClick={this.handleThirdButton} className='thirdButton'>
        {this.state.thirdButton}
        </button>
      </div>
    );
  };
}

export default CountButtons;
