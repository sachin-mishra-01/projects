

//object creation 

let box = document.querySelector('.ok');

   let count = 0;
  //box.textContent = 'hiii ';
  //let count = document.createElement('div');
  box.innerHTML = count;
 //box.appendChild(count);

let con = document.querySelector('.og');
con.addEventListener('click', function(){
   count = count + 1;
   box.innerHTML = count;

})


let dec = document.querySelector('.od');
dec.addEventListener('click', function(){
   count = count - 1;
   box.innerHTML = count;

})