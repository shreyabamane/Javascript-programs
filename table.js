
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