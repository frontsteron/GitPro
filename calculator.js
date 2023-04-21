function calculate() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;
  let result;
  console.log(operator);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: Divizion by zero";
      break;
    default:
      result = "Invalid operator";
  }

  document.getElementById("result").value = result;
}
