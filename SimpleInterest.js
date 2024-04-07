
//without parameter
function simpleInterest(){
    let P= 3400;
    let R=2;
    let T=2;

    let SI = (P * R * T)/100;
    return SI;

}
console.log(simpleInterest());

//with parameter
function simpleInt(p,r,t){
    
    let sI=(p*r*t)/100;
    return sI;
    

}
console.log(simpleInt(10000,3,5));