//Formula (a+b)^2 =a^2 +2ab + b^2

function findSum(a,b){
    let sum = (a*a) +(2*a*b) + (b*b);
    return sum;
}
console.log(findSum(10,20));

//(a-b)^2 = a^2 -2ab -b^2

function findSub(a,b){
    let sub=(a*a)-(2*a*b)+(b*b);
    return sub;
}
console.log(findSub(9,5));

//(a+b)^3 = a^3 + 3a^2b +3ab^2 +b^3

function add(a,b){
    let addition= (a*a*a)+(3*a*a*b)+(3*a*b*b)+(b*b*b);
    return addition; 
}
console.log(add(3,4));