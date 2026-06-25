let promise = new Promise((resolve,reject)=>{
    resolve("Success");
    reject("Failed");
})

promise.then((result)=>{
    console.log(result);
});
