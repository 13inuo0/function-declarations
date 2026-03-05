function receiveA() {
  console.log("철수에게 숙제를 전달받았습니다.");
}
function receiveB() {
  // 비동기 처리
  setTimeout(function () {
    const wakeUpTime = Date.now() + 5000;
    while (Date.now() < wakeUpTime) {}

    console.log("유리에게 숙제를 전달받았습니다.");
  }, 0);
}
function receiveC() {
  console.log("맹구에게 숙제를 전달받았습니다.");
}

receiveA();
receiveB();
receiveC();
