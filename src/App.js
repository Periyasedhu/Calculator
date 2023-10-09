// import { useState } from "react";
// export default function App() {
//   return (
//     <div>
//       <Calculator />
//     </div>
//   );
// }
// function Calculator() {
//   const [input, setInput] = useState("");
//   const [currentValue, setCurrentValue] = useState("");
//   const [operator, setOperator] = useState("");

//   function numberClick(currentValue) {
//     setInput((prevInput) => prevInput + currentValue.toString());
//   }
//   function operatorClick(currentValue) {
//     setOperator(currentValue);
//     setCurrentValue(input);
//     setInput("");
//   }

//   function resetAll() {
//     setOperator("");
//     setCurrentValue("");
//     setInput("");
//   }

//   function deleteLast() {
//     setInput((prevInput) => prevInput.slice(0, -1));
//   }

//   function calculate() {
//     if (operator === "+") {
//       setInput((parseFloat(currentValue) + parseFloat(input)).toString());
//     } else if (operator === "-") {
//       setInput((parseFloat(currentValue) - parseFloat(input)).toString());
//     } else if (operator === "/") {
//       setInput((parseFloat(currentValue) / parseFloat(input)).toString());
//     } else if (operator === "*") {
//       setInput((parseFloat(currentValue) * parseFloat(input)).toString());
//     } else if (operator === "%") {
//       setInput((parseFloat(currentValue) % parseFloat(input)).toString());
//     }
//   }

//   return (
//     <div className="calculator">
//       <input className="display" type="text" value={input} readOnly />
//       <Button
//         numberClick={numberClick}
//         operatorClick={operatorClick}
//         resetAll={resetAll}
//         deleteLast={deleteLast}
//         calculate={calculate}
//       />
//     </div>
//   );
// }
// function Button({
//   numberClick,
//   operatorClick,
//   resetAll,
//   deleteLast,
//   calculate,
// }) {
//   return (
//     <div className="buttons">
//       <button value="clear" onClick={resetAll}>
//         AC
//       </button>
//       <button value="X" onClick={deleteLast}>
//         x
//       </button>
//       <button value="modulus" onClick={operatorClick}>
//         %
//       </button>
//       <button value="divide" onClick={operatorClick}>
//         /
//       </button>
//       <button value="multiply" onClick={operatorClick}>
//         *
//       </button>
//       <button value="substraction" onClick={operatorClick}>
//         -
//       </button>
//       <button value="addition" onClick={operatorClick}>
//         +
//       </button>
//       <button value="00" onClick={numberClick}>
//         00
//       </button>
//       <button value="7" onClick={numberClick}>
//         7
//       </button>
//       <button value="8" onClick={numberClick}>
//         8
//       </button>
//       <button value="9" onClick={numberClick}>
//         9
//       </button>
//       <button value="4" onClick={numberClick}>
//         4
//       </button>
//       <button value="5" onClick={numberClick}>
//         5
//       </button>
//       <button value="6" onClick={numberClick}>
//         6
//       </button>
//       <button value="3" onClick={numberClick}>
//         3
//       </button>
//       <button value="2" onClick={numberClick}>
//         2
//       </button>
//       <button value="1" onClick={numberClick}>
//         {" "}
//         1
//       </button>
//       <button value="0" onClick={numberClick}>
//         0
//       </button>
//       <button value=".">.</button>
//       <button value="equal" onClick={calculate}>
//         =
//       </button>
//     </div>
//   );
// }
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [input, setInput] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState("");

  function numberClick(currentValue) {
    setInput((Input) => Input + currentValue.toString());
  }

  function operatorClick(currentValue) {
    setOperator(currentValue);
    setCurrentValue(input);
    setInput("");
  }

  function resetAll() {
    setOperator("");
    setCurrentValue("");
    setInput("");
  }

  function deleteLast() {
    setInput((Input) => Input.slice(0, -1));
  }

  function calculate() {
    if (operator === "+") {
      setInput((parseFloat(currentValue) + parseFloat(input)).toString());
    } else if (operator === "-") {
      setInput((parseFloat(currentValue) - parseFloat(input)).toString());
    } else if (operator === "/") {
      // Check for division by zero
      if (parseFloat(input) === 0) {
        setInput("Error");
      } else {
        setInput((parseFloat(currentValue) / parseFloat(input)).toString());
      }
    } else if (operator === "*") {
      setInput((parseFloat(currentValue) * parseFloat(input)).toString());
    } else if (operator === "%") {
      setInput((parseFloat(currentValue) % parseFloat(input)).toString());
    }
  }

  return (
    <div className="calculator">
      <input className="display" type="text" value={input} readOnly />
      <Button
        numberClick={numberClick}
        operatorClick={operatorClick}
        resetAll={resetAll}
        deleteLast={deleteLast}
        calculate={calculate}
      />
    </div>
  );
}

function Button({
  numberClick,
  operatorClick,
  resetAll,
  deleteLast,
  calculate,
}) {
  return (
    <div className="buttons">
      <button key="clear" value="clear" onClick={resetAll}>
        AC
      </button>
      <button key="delete" value="X" onClick={deleteLast}>
        x
      </button>
      <button key="modulus" value="%" onClick={() => operatorClick("%")}>
        %
      </button>
      <button key="divide" value="/" onClick={() => operatorClick("/")}>
        /
      </button>
      <button key="multiply" value="*" onClick={() => operatorClick("*")}>
        *
      </button>
      <button key="subtract" value="-" onClick={() => operatorClick("-")}>
        -
      </button>
      <button key="add" value="+" onClick={() => operatorClick("+")}>
        +
      </button>
      <button key="double-zero" value="00" onClick={() => numberClick("00")}>
        00
      </button>
      <button key="7" value="7" onClick={() => numberClick("7")}>
        7
      </button>
      <button key="8" value="8" onClick={() => numberClick("8")}>
        8
      </button>
      <button key="9" value="9" onClick={() => numberClick("9")}>
        9
      </button>
      <button key="4" value="4" onClick={() => numberClick("4")}>
        4
      </button>
      <button key="5" value="5" onClick={() => numberClick("5")}>
        5
      </button>
      <button key="6" value="6" onClick={() => numberClick("6")}>
        6
      </button>
      <button key="3" value="3" onClick={() => numberClick("3")}>
        3
      </button>
      <button key="2" value="2" onClick={() => numberClick("2")}>
        2
      </button>
      <button key="1" value="1" onClick={() => numberClick("1")}>
        1
      </button>
      <button key="0" value="0" onClick={() => numberClick("0")}>
        0
      </button>
      <button key="decimal" value="." onClick={() => numberClick(".")}>
        .
      </button>
      <button key="equal" value="equal" onClick={calculate}>
        =
      </button>
    </div>
  );
}
