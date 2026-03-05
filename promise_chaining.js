new Promise((resolve, reject)=>{
    resolve(1)
}).then(num=>{
    return num *2
}).then(num=>{
    console.log(num)
})