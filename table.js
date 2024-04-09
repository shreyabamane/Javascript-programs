//without return
function printTable(){
    let num=2;
    for(i=1;i<=10;i++){
      console.log(`${num}*${i}=${num*i}`); 
    }   
}
printTable();

function createTable(num){
    for(i=1;i<=10;i++){
        console.log(`${num}*${i}=${num*i}`);  
    }
}
createTable(4);


//with return

function table(){
    let num=6;
    let temp=[];
    for(i=1;i<=10;i++){
        temp.push(`${num}*${i}=${num*i}`);
    }
    return temp;
}
console.log(table());


function findTable(num){
    let temp=[];
    for(i=1;i<=10;i++){
        temp.push(`${num}*${i}=${num*i}`);
    }
    return temp;
}
console.log(findTable(12));