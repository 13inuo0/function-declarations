/* new Promise((resolve, reject)=>{
    // 비동기 로직
    // 1. 대기(pending) - 아직 프로미스 문법이 실행되지 않은 상태.
    console.log('code running...')
    // 2. 이행(Fulfilled)
    resolve()
    // 3. 거절(rejected)
 }) .then(()=>{
    console.log('sucess')
 }) */
new Promise((resolve, reject)=>{
    // 비동기 로직
    // 1. 대기(pending) - 아직 프로미스 문법이 실행되지 않은 상태.
    console.log('code running...')
    // 2. 이행(Fulfilled)
    // resolve('sample sucess')
    // 3. 거절(rejected) - 실패하는 상황에 실행.
    reject(/* 'sample fails' */new Error('sample fail'))
 }) .then((res)=>{
    console.log(res)
 }).catch((err)=>{
    console.log(err.message)
 })