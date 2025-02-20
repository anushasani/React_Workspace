import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  let Numbers = "1234567890";
  let Operands = "+-/*";

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operand, setOperand] = useState("");
  const [isOperandAdded, SetisOperandAdded] = useState(false);
  const [result, setResult] = useState("");

  const handleClick = (button) => {
    let btnvalue = button.trim();
    if (!isOperandAdded) {
      setNum1((val) => "" + val + btnvalue);
      return;
    }
    if (isOperandAdded) {
      setNum2((val) => "" + val + btnvalue);
      return;
    }
  };
  const handleOperand = (e) => {
    setOperand(e.target.value.trim());
    SetisOperandAdded(true);
  };
  const onEquate = () => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let value = 0;

    switch (operand) {
      case "+":
        value = n1 + n2;
        break;
      case "-":
        value = n1 - n2;
        break;
      case "/":
        value = n1 / n2;
        break;
      case "*":
        value = n1 * n2;
        break;
      default:
      // do nothing
    }
    setResult(() => value);
    setNum1(() => value);
    setNum2(() => "");
    SetisOperandAdded(false);
  };
  const handleClear = () => {
    setNum1("");
    setNum2("");
    setOperand("");
    setResult("");
  };

  return (
    <div className="calculatorBoard">
      <div className="buttonContainer">
        {Numbers.split("").map((numbers) => {
          return (
            <button
              key={numbers}
              className="calculatorButton"
              value={numbers}
              onClick={(e) => handleClick(e.target.value)}
            >
              {numbers}
            </button>
          );
        })}
        {Operands.split("").map((operands) => {
          return (
            <button
              key={operands}
              value={operands}
              className="calculatorButton"
              onClick={handleOperand}
            >
              {operands}
            </button>
          );
        })}
        <button className="calculatorButton" onClick={onEquate}>
          =
        </button>
        <button className="calculatorButton" onClick={handleClear}>
          C
        </button>
      </div>
      <section className="resultTab">
        <div>Num1 : {num1} </div>
        <div>Operation : {operand} </div>
        <div>Num2 : {num2}</div>

        <div>Result : {result} </div>
      </section>
    </div>
  );
};

export default Calculator;
