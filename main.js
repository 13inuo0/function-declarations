// 함수 선언문 (function declarations)
function printName() {
  console.log(`3 * 1 = 3`);
}
printName();

// 함수 표현식 (function expressions)
const printName2 = function printName2() {
  console.log(`3 * 1 = 3`);
};
printName2();

function gugudan(dan) {
  for (i = 1; i <= 9; i++) {
    console.log(`${dan}*${i}=${dan * i}`);
  }
}
gugudan(5);

const printIntroduce = function (name, age) {
  console.log(`안녕하세요 저는 ${name}이고 ${age}살 입니다.`);
};
printIntroduce("철수", 19);

function sum() {
  let result = 0;
  for (let value of arguments) {
    result = result + value;
  }
  console.log(result);
}
sum(10, 20, 30, 40);

function sum(...args) {
  console.log(args);
}
sum(10, 20);

function sum2(num1, ...args2) {
  console.log(num1);
  console.log(args2);
}
sum2(10, 20, 30);

function sum3(num3, num4) {
  const result2 = num3 + num4;
  console.log(result2);
  return result2;
}
const result2 = sum3(10, 20);
console.log(result2);

function pow(squa) {
  const square = squa * squa;
  return square;
}
const square = pow(5);
console.log(square);

const person = {
  name: "철수",
  introduce: function () {
    console.log(`제 이름은 ${this.name}입니다.`);
  },
};
person.introduce();

// 함수 선언문을 화살표 함수로 변경해보기

/* function sum4(a, b){
    return a + b
}
const result = sum(10, 20)
console.log(result) */

const sum4 = (a, b) => {
  return a + b;
};
const result = sum4(10, 20);
console.log(result);

// 함수 표현식을 화살표 함수로 변경해보기
/* const pow1 = function pow1(num5) {
  return num5 * num5;
};
const result3 = pow1(10);
console.log(result3); */

const pow1 = (num5) => {
  return num5 * num5;
};
const result3 = pow1(10);
console.log(result3);
