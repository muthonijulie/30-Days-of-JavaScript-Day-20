const isEmpty=function(obj){
    for (const x in obj){
        return false;
    }
    return true;
}
//example 1
//const obj = {"x": 5, "y": 42};

//example2
const obj = {};

console.log(isEmpty(obj));
