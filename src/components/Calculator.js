import CalculatorButton from './CalculatorButton';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-output">0</div>
      <div className="calculator-row">
        <CalculatorButton label="AC" />
        <CalculatorButton label="+/-" />
        <CalculatorButton label="%" />
        <CalculatorButton label="/" />
      </div>
      <div className="calculator-row">
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="*" />
      </div>
      <div className="calculator-row">
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" />
      </div>
      <div className="calculator-row">
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" />
      </div>
      <div className="calculator-row calculator-row-last">
        <CalculatorButton label="0" />
        <CalculatorButton label="." />
        <CalculatorButton label="=" />
      </div>
    </div>
  );
}

export default Calculator;
