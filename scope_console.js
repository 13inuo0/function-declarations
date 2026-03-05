/*
 [스코프 실습]
 
 본 실습은 절대로 코드를 실행하지 말고, 
 그 실행 결과를 예측만 하여 정답을 적어주세요.
*/

const a = 10;
function sum(b){
  return a + b;
}
console.log(sum(5)); // 출력 값은 ? -> 15

function multiple(c){
  return sum(5) * c;
}
console.log(multiple(4)); // 출력 값은 ? -> 60

function division(d){
  const a = 4;
  function inner(e){
    return a / e;
  }
  return inner(d);
}
console.log(division(2)); // 출력 값은? -> 2