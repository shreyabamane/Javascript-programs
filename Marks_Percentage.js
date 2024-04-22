
//without parameter
function getPercentage(){
    let Hindi = 80;
    let Marathi = 70;
    let English = 90;
    let Math = 60;
    let Socialscience = 75;
    let Science = 65;

    let Percentage = ((Hindi+Marathi+English+Math+Socialscience+Science)/600)*100;

    return Percentage+"%";
}

//console.log(getPercentage());

//with parameter

function findPercentage(Hindi,Marathi,English,Math,Socialscience,Science){
    let Percentage = ((Hindi+Marathi+English+Math+Socialscience+Science)/600)*100;
    return Percentage+"%";
}
//console.log(findPercentage(80,70,90,60,75,65));

//without Parameter with Object
function studentMarks(Hindi,Marathi,English,Math,Socialscience,Science){
    let TotalMarks =600;
    let Marks = Hindi+Marathi+English+Math+Socialscience+Science;
    let Percentage= (Marks/TotalMarks)*100

     
    let Details = [];

    Details.push(Percentage)

    return Details+"%";
}

console.log(studentMarks(80,20,50,70,90,80));
