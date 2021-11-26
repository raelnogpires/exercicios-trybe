import React, { Component } from 'react';
import stateOptions from './stateData';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export class Form extends Component {
  constructor() {
    super();

    this.state = { value: '' };

    this.removingSpecialCharacter = this.removingSpecialCharacter.bind(this);
    this.hasNumber = this.hasNumber.bind(this);
  }

  // Remoção de caracteres especiais usando Regex:
  // https://www.codegrepper.com/code-examples/javascript/how+to+remove+special+characters+from+a+string+in+javascript
  removingSpecialCharacter({ target }) {
    this.setState({ value: target.value.replace(/[^a-zA-Z ]/g, '') });
  }

  // Verificação da existência de números no input usando Regex:
  // https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
  hasNumber({ target }) {
    const test = /\d/.test(target.value);
    if (test) target.value = '';
  }

  render() {
    return (
      <form>
        <fieldset>
          <div id="personal-data">
            <label htmlFor="name">
              Digite seu nome:
              <input type="text" id="name" max="40" required/>
            </label>
            <label htmlFor="email">
              Digite seu e-mail:
              <input type="text" id="email" max="50" required />
            </label>
            <label>
              CPF:
              <input type="number" id="cpf" max="50" required/>
            </label>
          </div>
          <div id="residence-data">
            <label htmlFor="house-adress">
              Digite seu endereço:
              <input
                type="text"
                id="house-adress"
                max="50"
                value={ this.state.value }
                onChange={ this.removingSpecialCharacter }
                required
              />
            </label>
            <label htmlFor="city">
              Digite o nome da sua cidade:
              <input
                type="text"
                id="city"
                onBlur={ this.hasNumber }
              />
            </label>
            <label htmlFor="combo-box">
              Selecione seu estado:
              {/* https://www.geeksforgeeks.org/how-to-use-combobox-in-reactjs/ */}
              <Autocomplete
                options={ stateOptions }
                style={{ width: 100 }}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    variant="outlined"
                    id="combo-box"
                    required
                  />}
              />
            </label>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
