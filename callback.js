function first(callback) {
  console.log("first");
  callback();
}
first(function () {
  console.log("second");
});

function receiveA() {
  console.log("철수에게 숙제를 전달받았습니다.");
}
function receiveB(callback) {
  // 비동기 처리
  setTimeout(function () {
    const wakeUpTime = Date.now() + 5000;
    while (Date.now() < wakeUpTime) {}

    console.log("유리에게 숙제를 전달받았습니다.");
    callback();
  }, 0);
}
function receiveC() {
  console.log("맹구에게 숙제를 전달받았습니다.");
}

receiveA();
receiveB(receiveC);
console.log('after')
