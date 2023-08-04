console.log("execution started");
function sleep(milliseconds){
    
    let starttime = new Date().getTime();
    console.log("operation running");
    setTimeout(()=> {
        console.log("operation done")
    }, milliseconds)}
sleep(1000);
console.log("Do something")