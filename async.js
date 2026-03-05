function receiveA() {
  console.log("철수에게 숙제를 전달받았습니다.");
}
function receiveB() {
  // 코드 실행에 5초가 걸린다.
  const wakeUpTime = Date.now() + 5000;
  while (Date.now() < wakeUpTime) {}

  console.log("유리에게 숙제를 전달받았습니다.");
}
function receiveC() {
  console.log("맹구에게 숙제를 전달받았습니다.");
}

receiveA();
receiveB();
receiveC();
