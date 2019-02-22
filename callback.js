var mainfun= a=>{
console.log("you call the main function")
a();
}
var y= ()=>{
    console.log("you call the callback function")
}
mainfun(y)