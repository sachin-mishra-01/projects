let val = document.querySelector('.box');



let inc = ()=>{
 let i =  parseInt( val.innerHTML);
 i = i+1;
 val.innerHTML= i;
}

let dec= ()=>{
    let i =  parseInt( val.innerHTML);
    i = i-1;
    val.innerHTML= i;
   }