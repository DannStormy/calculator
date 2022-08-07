(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let allNumbers = document.querySelectorAll(".number");
    let allOperators = document.querySelectorAll(".operator");
    let calcDisplay = document.querySelector(".final-result");
    let prevCalc = document.querySelector(".calc-display");
    let decimal = document.querySelector(".decimal");

    let operand1 = '';
    let operand2 = '';
    let operator = '';
    let result = '';

    const operators = {
      '+': (a, b) => a + b,
      '*': (a, b) => a * b,
      '-': (a, b) => a - b,
      '/': (a, b) => a / b,
      '%': (a, b) => a % b,
    };

    for (let i = 0; i < allNumbers.length; i++) {
      allNumbers[i].addEventListener('click', displayNum);
    }

    for (let i = 0; i < allOperators.length; i++){
      allOperators[i].addEventListener('click', checkOperators)
    }

    function displayNum (val) {

      const value = val.target.innerHTML;
      operator ? operand2 += value : operand1 += value;
      calcDisplay.innerHTML = operator ? operand2 : operand1;
    }

    function resetOperands() {
      operand1 = '';
      operand2 = '';
      operator = '';
    }

    function checkOperators(val) {
      let value = val.target.innerHTML;

      if (value === 'C') {
        resetOperands();
        calcDisplay.innerHTML = '0';
        prevCalc.innerHTML = '';
        return;
      }

      if (result && !operand1) {
        operand1 = result;
      }

      // If there are no operands yet, prevent the use of an operator
      // Prevent using `=` as the first operator
      if (!operand1 || (!operator && value === '=')) return;

      if (!operand2) {
        operator = value;
        return;
      }

      if (!operators[operator]) {
        calcDisplay.innerHTML = 'Err!';
        resetOperands();
        return;
      };

      // Calculate
      result = `${operators[operator](parseFloat(operand1), parseFloat(operand2))}`;
      // result = Number(result.toFixed(1));
      console.log(result)
      prevCalc.innerHTML = `${operand1} ${operator} ${operand2}`;
      resetOperands();
      calcDisplay.innerHTML = result;

      if (value !== '=') {
        operand1 = result;
        operator = value;
      }
    }
    decimal.onclick = () => {
      if(!operand1.includes(".")){
        operand1+=".";
      }else{
        operand2+=".";
      }
      calcDisplay.innerHTML = operand1;
      calcDisplay.innerHTML = operand2;
    }
  })
})();
