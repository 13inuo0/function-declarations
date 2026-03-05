function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(reject(new Error('something error...')), ms));
}
// 의도적으로 reject를 부여해 오류를 낸 것.

function getBike() {
  return new Promise((resolve) => resolve("오토바이"));
}

async function getBicycle() {
    try{
  await delay(2000);
  return "자전거";
    }catch(error){
        throw error
    }
}

getBike().then(console.log);
getBicycle().then(console.log).catch(err=>console.log('error'))
