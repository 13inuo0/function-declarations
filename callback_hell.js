function counter(n, callback) {
  setTimeout(() => {
    const num = n + 1;
    console.log(num);
    if (callback) {
      callback(num);
    }
  }, 0);
}
counter(0, function (n) {
  counter(n, (n) => {
    counter(n,(n)=>{
        counter(n)
    });
  });
});
