const name = "철수";
function printName() {
  const name = "영희";
  console.log(`제 이름은 ${name}입니다.`);
}
printName();


const a=10
function outer(){
    const b =20
    function inner(){
        const c=30
        console.log(b)
    }
    inner()
}
outer()

/* function other(){
    console.log(b) // undefined
}
other() */

