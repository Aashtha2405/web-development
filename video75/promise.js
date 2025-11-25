console.log('This is promises');

let prom1 = new Promise((resolve,reject)=>{
    let a= Math.random();
    if(a<0.5){
        reject("no random number was found")
    }
    else{
         setTimeout(()=>{
        console.log("yes I am done")
        resolve("aastha")
    }, 3000);
    }
})
//     setTimeout(()=>{
//         console.log("yes I am done")
//         resolve("aastha")
//     }, 3000);
// })
prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log("err")
})