// Area of triangle = 1/2 × b × h

//without parameter

function area(){
    let base=12;
    let height=15;

    let areaTri = 1/2*(base*height);

    return areaTri;
}
console.log(area());

//with parameter

function areaT(base,height){
    let areaOfTriangle= 1/2*(base*height);

    return areaOfTriangle;
}
console.log(areaT(20,40));