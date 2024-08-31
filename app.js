let on = document.querySelector(`.on`);
let img = document.querySelector(`.img`);
let off = document.querySelector(`.off`);

on.addEventListener('click', function(){
    img.src = "https://www.w3schools.com/Js/pic_bulbon.gif";
})

off .addEventListener('click',function(){
    img.src = "https://www.w3schools.com/Js/pic_bulboff.gif";
})