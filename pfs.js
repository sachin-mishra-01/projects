

function showw(){
    let b = document.querySelector('.bhide');
   
    b.setAttribute('style','scale: 1; margin-left: 31%; margin-top: 15%;width: 35%; height: 35%; border: 2px solid white;  position:absolute; display: flex;  flex-direction: column;  border-radius: 5%; z-index: 1; transition: 1s');
   

};

let cut = document.querySelector('h1');

cut.addEventListener('click',function(){
    let b = document.querySelector('.bhide');
    b.setAttribute('style','scale: 0;margin-left: 31%; margin-top: 15%;width: 35%; height: 35%; border: 2px solid white;  position:absolute; display: flex;  flex-direction: column;  border-radius: 5%; z-index: 1;  transition: 1s');
    
})