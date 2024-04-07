// F= degree celsius*9/5+32 without parameter

function temperatureCalculate(){
    let c=30;
    
    let temperature = c * (9/5) + 32;

    return temperature;
}
console.log(temperatureCalculate()+ " Fahrenheit");


//C=  (F - 32) * (5/9) with parameter

function tempCal(f){
     let temp = (f-32)*(5/9);
     return temp;
}
console.log(tempCal(86)+ "celsius");