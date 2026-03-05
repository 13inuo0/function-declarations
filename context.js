function outer() {
  const a = 10;
  function inner() {
    return a;
  }
  return inner;
}

const inner = outer();
console.log(inner());
// inner = null;

//즉시 실행 함수
(function hello(){
    console.log('hello')
})()

// 익명함수도 가능
/* (function (){
    console.log('hello')
})() */

// 화살표함수도 가능
/* (()=>{
    console.log('hello')
})() */