'use strict'
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal)
for(var i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })};
    // code are repeated
    // btnCloseModal.addEventListener('click',function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // });
    // overlay.addEventListener('click',function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // })
const btnClose=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click',btnClose);
overlay.addEventListener('click',btnClose);
const s=document.addEventListener('keydown',function(e){
if(e.key === 'Escape' && !modal.classList.contains('.hidden')){
    btnClose();
}
});


   