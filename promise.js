const promise = new Promise((resolve, reject)=>{
    console.log("async task execution");
    if (false){
        resolve()
    }
    else{
        reject();
    }
})

promise.then((val)=>{
    console.log("Passed")
},
()=>{
    console.log("failed")
}
)