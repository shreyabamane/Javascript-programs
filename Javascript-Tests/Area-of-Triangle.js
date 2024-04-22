//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7

//Heron's formula.
//semi-perimeter is, s = (a + b + c)/2 
//A = √[s(s-a)(s-b)(s-c)] 


function areaOfTriangle(a,b,c){
    let semiPerimeter = (a+b+c)/2;

    let Area = Math.sqrt(semiPerimeter * (semiPerimeter-a) * (semiPerimeter-b) * (semiPerimeter-c));

    return Area;
}
console.log(areaOfTriangle(5,6,7));