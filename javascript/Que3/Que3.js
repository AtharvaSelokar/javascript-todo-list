const calculateBtn = document.querySelector("#calculate");
const resultElem = document.querySelector("#result");
calculateBtn.addEventListener("click", function() {
  const numbers = document.querySelector("#numbers").value.split(",").map(Number);
  let positiveEvenSum = 0, negativeOddSum = 0;
  for (const number of numbers) {
    if (number > 0 && number % 2 === 0) {
      positiveEvenSum += number;
    } else if (number < 0 && number % 2 !== 0) {
      negativeOddSum += number;
    }
  }
  resultElem.innerHTML = `Sum of positive even numbers: ${positiveEvenSum}<br>Sum of negative odd numbers: ${negativeOddSum}`;
});
function value(event) {
  var value = event.target.value;
  var regex = /^[0-9-,\b]+$/;
  if (!regex.test(value)) {
    alert('Please Enter a number with comma separated');
  }
}