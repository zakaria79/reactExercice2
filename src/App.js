import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
    inputLengthValue: 0
  }

  onChangeInputHandler = (event) => {
    this.setState({
      inputValue: event.target.value,
      inputLengthValue: event.target.value.length
    });
  }

  deleteChar = (index) => {
    console.log(index);
    console.log(this.state.inputValue.split('').splice(index, 1));
    const inputValue = this.state.inputValue.split('');
    inputValue.splice(index, 1);
    this.setState({
      inputLengthValue: inputValue.length,
      inputValue: inputValue.join('')
      });
  }

  render() {

    const letters = this.state.inputValue.split('');

    const charComponents = letters.map((letter, index) => {
      return (
        <CharComponent
          key={index}
          char={letter}
          click={event => this.deleteChar(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.onChangeInputHandler}
          value={this.state.inputValue}
        />
        <p>{this.state.inputValue}</p>
        <ValidationComponent inputLengthValue={this.state.inputLengthValue} />
        {charComponents}
      </div>
    );
  }
}

export default App;
