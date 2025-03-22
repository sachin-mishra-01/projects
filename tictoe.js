let count = 0;
let ch = document.querySelector('.chance');
ch.textContent = 'current player X';
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;
let i7 = 0;
let i8 = 0;
let i9 = 0;
let b1 = document.querySelector('.a');
let b2 = document.querySelector('.b');
let b3 = document.querySelector('.c');
let b4 = document.querySelector('.d');
let b5 = document.querySelector('.e');
let b6 = document.querySelector('.f');
let b7 = document.querySelector('.g');
let b8 = document.querySelector('.h');
let b9 = document.querySelector('.i');

let j = 0;
b1.addEventListener('click',function(){
    
    if(i1 == 0 && j == 0){
    if(count %2 == 0 ){
       
        b1.textContent = 'X';
        i1 = 1;
    }else{
        b1.textContent = 'O'; 
        i1 = 10;
    }
    
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }
   

    if(i1 === i2  && i2 === i3 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j =1;
    }

    if(i1 === i4 && i4 === i7 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j =1;
    }

    if(i1 == i5 && i5 == i9 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j = 1;
    }

    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }
})



b2.addEventListener('click',function(){
    
    if(i2 == 0 && j == 0){
    if(count %2 == 0 ){
       
        b2.textContent = 'X';
        i2 = 1;
    }else{
        b2.textContent = 'O'; 
        i2 = 10;
    }
   
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }

    if(i1 === i2 && i2 === i3 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j =1;
    }

    if(i2 === i5 && i5 === i8){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1
    }
    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }

})


b3.addEventListener('click',function(){
    
    if(i3 == 0  && j==0){
    if(count %2 == 0 ){
       
        b3.textContent = 'X';
        i3 = 1;
    }else{
        b3.textContent = 'O'; 
        i3 = 10;
    }
    
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }

    if(i1 === i2 && i2 === i3){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j= 1;
    }

    if(i3 === i6 && i6 === i9){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j= 1;
    }

    if(i3 === i5 && i5 === i7 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }
    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }

})



b4.addEventListener('click',function(){
    
    if(i4 == 0 && j == 0){
    if(count %2 == 0 ){
       
        b4.textContent = 'X';
        i4 = 1;
    }else{
        b4.textContent = 'O'; 
        i4 = 10;
    }
    
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }

    if(i1 === i4 && i4 === i7 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j = 1;
    }

    if(i4 === i5 && i5 === i6 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }


})


b5.addEventListener('click',function(){
    
    if(i5 == 0 && j == 0){
    if(count %2 == 0 ){
       
        b5.textContent = 'X';
        i5 = 1;
    }else{
        b5.textContent = 'O'; 
        i5 = 10;
    }
    
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }

    if(i1 === i5 && i5 === i9 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

    if(i3 === i5 && i5 === i7 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

    if(i2 === i5 && i5 === i8 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

    if(i4 === i5 && i5 === i6 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }
    
    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }

})


b6.addEventListener('click',function(){
    
    if(i6 == 0 && j == 0){
    if(count %2 == 0 ){
       
        b6.textContent = 'X';
        i6 = 1;
    }else{
        b6.textContent = 'O'; 
        i6 = 10;
    }
    
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }

    if(i3 === i6 && i9 === i6){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

    

    if(i4 === i5 && i5 ===  i6){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }
    
    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }

})


b7.addEventListener('click',function(){
    
    if(i7 == 0  && j == 0){
    if(count %2 == 0 ){
       
        b7.textContent = 'X';
        i7 = 1;
    }else{
        b7.textContent = 'O'; 
        i7 = 10;
    }
    
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }

    if(i7 === i8 && i8 === i9 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

    

    if(i1 === i4 && i4 === i7){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

  
    if(i3 === i5 && i5 === i7){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }

})



b8.addEventListener('click',function(){
    
    if(i8 == 0 && j == 0){
    if(count %2 == 0 ){
       
        b8.textContent = 'X';
        i8 = 1;
    }else{
        b8.textContent = 'O'; 
        i8 = 10;
    }
    
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }

    if(i7 === i8 && i8 === i9 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

    

    if(i2 === i5 && i5 === i8 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
        j=1;
    }

  
    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }

})



b9.addEventListener('click',function(){
    
    if(i9 == 0 && j == 0){
    if(count %2 == 0 ){
       
        b9.textContent = 'X';
        i9 = 1;
    }else{
        b9.textContent = 'O'; 
        i9 = 10;
    }
    
}
    count = count+1;
    if(count % 2 == 0){
        ch.textContent = 'current player X';
    }else{
        ch.textContent = 'current player O';
    }

    if(i7 === i8 && i8 === i9 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
    }

    

    if(i3 === i6 && i6 === i8 ){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
    }

  
    if(i1 === i5 && i5 === i9){
        let o = document.querySelector('.won');
        o.setAttribute('style','opacity : 1 ');
    }
    
    if(count == 9){
        let o = document.querySelector('.draw');
        o.setAttribute('style','opacity : 1 ');
    }
})



