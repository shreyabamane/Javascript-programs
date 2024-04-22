// 1. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

function ReverseNumber(n){
    n=n+"";
    return n.split("").reverse().join("");
    
}
console.log(ReverseNumber(32224));