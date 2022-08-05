(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let allNumbers = document.querySelectorAll(".number");
    let allOperators = document.querySelectorAll(".operator")
    let calcDisplay = document.querySelector(".final-result")
    let prevCalc = document.querySelector(".calc-display")
    let finalVal = 0;
    let prevResult = 0;
    let calculationArr = [];
    // clear.addEventListener('click', ()=> {
    //   alert("I'm working, clear stuff")
    //   console.log(allNum)
    // })

    for (let i = 0; i < allNumbers.length; i++) {
      allNumbers[i].addEventListener('click', displayNum);
    }
    for (let i = 0; i < allOperators.length; i++){
      allOperators[i].addEventListener('click', checkOperators)
    }

    function displayNum (val){
      let value = val.target.innerHTML;
      calculationArr.push(value);
      calcDisplay.innerHTML = value;
      console.log(calculationArr)
    }

    function checkOperators(val){
      let value = val.target.innerHTML;
      switch(value) {
        case "/":
        case "-":
        case "*":
        case "+":
        case "%":
          calculationArr.push(value);
          break;
        case "=":
          finalVal = eval(calculationArr.join(''));
          calcDisplay.innerHTML = finalVal;
          prevCalc.innerHTML = calculationArr.join('');

          // prevCalc = calculationArr;
          // finalVal = eval(calculationArr)
          // calcDisplay.innerHTML = finalVal;
          console.log(finalVal)
          break;
        case "C":
          calculationArr = [];
      }
    }









  })
})();
