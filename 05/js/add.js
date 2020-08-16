var num1 = parseInt(prompt('더하려고하는 첫번째 숫자를 입력하시오.'));
var num2 = parseInt(prompt('더하려고하는 두번째 숫자를 입력하시오.'));
addNumber(num1, num2);

function addNumber(a, b) {
  var sum = a + b;
  alert(`두 수를 더한 값은 ${sum}입니다.`);
}
