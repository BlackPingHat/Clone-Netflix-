const x = document.querySelector('.accordion-item');
const y = document.querySelector('.accordin-answer');
const z = document.querySelector('.open')
/* Cach 1 x.addEventListener('click' , () =>{
    if(y.style.display === 'none') {
        y.style.display = 'block';
        
    }else{
        y.style.display = 'none';
    }
}); */
function hiddenText(){
    if(y.style.display === 'none') {
        y.style.display = 'block';
        
    }else{
        y.style.display = 'none';
    }
}