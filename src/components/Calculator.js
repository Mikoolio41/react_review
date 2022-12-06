import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: "",
      secondNumber: "",
      operator: "",
      result: 0,
    };
    this.handleFirstNumberChange = this.handleFirstNumberChange.bind(this);
    this.handleSecondNumberChange = this.handleSecondNumberChange.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  handleFirstNumberChange(event) {
    this.setState({ firstNumber: event.target.value });
  }
  handleSecondNumberChange(event) {
    this.setState({ secondNumber: event.target.value });
  }
  handleOperatorChange(event) {
    this.setState({ operator: event.target.value });
  }
  calculate() {
    const { firstNumber, secondNumber, operator } = this.state;
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        break;
    }
    this.setState({ result: result });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.firstNumber}
          onChange={this.handleFirstNumberChange}
        />
        <input
          type="text"
          value={this.state.secondNumber}
          onChange={this.handleSecondNumberChange}
        />
        <select
          value={this.state.operator}
          onChange={this.handleOperatorChange}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button onClick={this.calculate}>Calculate</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}
export default Calculator;
