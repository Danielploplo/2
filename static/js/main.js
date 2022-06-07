let head__bl = document.querySelectorAll('.head__bl');
let next = document.querySelector('.next');
let pref = document.querySelector('.pref');
let up = document.querySelectorAll('.up');
let down = document.querySelectorAll('.down')
let main_h1 = document.querySelectorAll('.main_h1');
let faq_text_h1 = document.querySelectorAll('.faq_text_h1');
let faq_h1_text = document.querySelectorAll('.faq_h1_text');
let faq__text = document.querySelectorAll('.faq__text');
let faq__box = document.querySelectorAll('.faq__box');
let main_p = document.querySelectorAll('.main_p');
let modal = document.querySelector('.modal')
let modal__close = document.querySelector('.modal__close')
let btn = document.querySelectorAll('.btn')
let x = false; 
let i = 0;

for(let i = 0; i < head__bl.length; i++){
    head__bl[i].style.display = 'none'
}

head__bl[0].style.display = 'block'

next.addEventListener('click', () =>{
    if(i < 3){
        head__bl[i].style.display ='none'
        i++;
        head__bl[i].style.display ='block'
    }else{
        head__bl[i].style.display ='none'
        i = 0;
        head__bl[i].style.display ='block'
    }
})

pref.addEventListener('click', () =>{
    if(i > 0){
        head__bl[i].style.display ='none'
        i--;
        head__bl[i].style.display ='block'
    }else{
        head__bl[i].style.display ='none'
        i = 3;
        head__bl[i].style.display ='block'
    }
})

for(let i = 0; i < up.length; i++){
    up[i].style.display = 'none'
};

for(let i = 0; i < down.length; i++ ){
    down[i].style.display = 'block'
};

for(let i = 0; i < faq_text_h1.length; i++){
    faq_text_h1[i].style.display = 'none'
}

faq__box[0].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[0].style.color = '#87d2ff'
    faq_text_h1[0].style.display = 'block'
        down[0].style.display = 'none'
        up[0].style.display = 'block'
        x = true
    }else{
        faq_h1_text[0].style.color = '#000'
        faq_text_h1[0].style.display = 'none'
            down[0].style.display = 'block'
            up[0].style.display = 'none'
        x = false
    }
})

faq__box[1].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[1].style.color = '#87d2ff'
    faq_text_h1[1].style.display = 'block'
        down[1].style.display = 'none'
        up[1].style.display = 'block'
        x = true
    }else{
        faq_h1_text[1].style.color = '#000'
        faq_text_h1[1].style.display = 'none'
            down[1].style.display = 'block'
            up[1].style.display = 'none'
        x = false
    }
})
faq__box[2].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[2].style.color = '#87d2ff'
    faq_text_h1[2].style.display = 'block'
        down[2].style.display = 'none'
        up[2].style.display = 'block'
        x = true
    }else{
        faq_h1_text[2].style.color = '#000'
        faq_text_h1[2].style.display = 'none'
            down[2].style.display = 'block'
            up[2].style.display = 'none'
        x = false
    }
})
faq__box[3].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[3].style.color = '#87d2ff'
    faq_text_h1[3].style.display = 'block'
        down[3].style.display = 'none'
        up[3].style.display = 'block'
        x = true
    }else{
        faq_h1_text[3].style.color = '#000'
        faq_text_h1[3].style.display = 'none'
            down[3].style.display = 'block'
            up[3].style.display = 'none'
        x = false
    }
})
faq__box[4].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[4].style.color = '#87d2ff'
    faq_text_h1[4].style.display = 'block'
        down[4].style.display = 'none'
        up[4].style.display = 'block'
        x = true
    }else{
        faq_h1_text[4].style.color = '#000'
        faq_text_h1[4].style.display = 'none'
            down[4].style.display = 'block'
            up[4].style.display = 'none'
        x = false
    }
})
faq__box[5].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[5].style.color = '#87d2ff'
    faq_text_h1[5].style.display = 'block'
        down[5].style.display = 'none'
        up[5].style.display = 'block'
        x = true
    }else{
        faq_h1_text[5].style.color = '#000'
        faq_text_h1[5].style.display = 'none'
            down[5].style.display = 'block'
            up[5].style.display = 'none'
        x = false
    }
})
faq__box[6].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[6].style.color = '#87d2ff'
    faq_text_h1[6].style.display = 'block'
        down[6].style.display = 'none'
        up[6].style.display = 'block'
        x = true
    }else{
        faq_h1_text[6].style.color = '#000'
        faq_text_h1[6].style.display = 'none'
            down[6].style.display = 'block'
            up[6].style.display = 'none'
        x = false
    }
})
faq__box[7].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[7].style.color = '#87d2ff'
    faq_text_h1[7].style.display = 'block'
        down[7].style.display = 'none'
        up[7].style.display = 'block'
        x = true
    }else{
        faq_h1_text[7].style.color = '#000'
        faq_text_h1[7].style.display = 'none'
            down[7].style.display = 'block'
            up[7].style.display = 'none'
        x = false
    }
})
faq__box[8].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[8].style.color = '#87d2ff'
    faq_text_h1[8].style.display = 'block'
        down[8].style.display = 'none'
        up[8].style.display = 'block'
        x = true
    }else{
        faq_h1_text[8].style.color = '#000'
        faq_text_h1[8].style.display = 'none'
            down[8].style.display = 'block'
            up[8].style.display = 'none'
        x = false
    }
})
faq__box[9].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[9].style.color = '#87d2ff'
    faq_text_h1[9].style.display = 'block'
        down[9].style.display = 'none'
        up[9].style.display = 'block'
        x = true
    }else{
        faq_h1_text[9].style.color = '#000'
        faq_text_h1[9].style.display = 'none'
            down[9].style.display = 'block'
            up[9].style.display = 'none'
        x = false
    }
})
faq__box[10].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[10].style.color = '#87d2ff'
    faq_text_h1[10].style.display = 'block'
        down[10].style.display = 'none'
        up[10].style.display = 'block'
        x = true
    }else{
        faq_h1_text[10].style.color = '#000'
        faq_text_h1[10].style.display = 'none'
            down[10].style.display = 'block'
            up[10].style.display = 'none'
        x = false
    }
})
faq__box[11].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[11].style.color = '#87d2ff'
    faq_text_h1[11].style.display = 'block'
        down[11].style.display = 'none'
        up[11].style.display = 'block'
        x = true
    }else{
        faq_h1_text[11].style.color = '#000'
        faq_text_h1[11].style.display = 'none'
            down[11].style.display = 'block'
            up[11].style.display = 'none'
        x = false
    }
})
faq__box[12].addEventListener('click', () => {
    if(x == false){
    faq_h1_text[12].style.color = '#87d2ff'
    faq_text_h1[12].style.display = 'block'
        down[12].style.display = 'none'
        up[12].style.display = 'block'
        x = true
    }else{
        faq_h1_text[12].style.color = '#000'
        faq_text_h1[12].style.display = 'none'
            down[12].style.display = 'block'
            up[12].style.display = 'none'
        x = false
    }
})

btn[0].addEventListener('click', () => {
    modal.style.display = 'block'
})

btn[1].addEventListener('click', () => {
    modal.style.display = 'block'
})

btn[2].addEventListener('click', () => {
    modal.style.display = 'block'
})

modal__close.addEventListener('click', () => {
    modal.style.display = 'none'
})


