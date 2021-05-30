let openclose=document.getElementById('open');
let openclose2=document.getElementById('open2');
let openclose3=document.getElementById('open3');
let openactve = document.getElementById('close');
let openactve2 = document.getElementById('close2');
let openactve3 = document.getElementById('close3');
openactve.addEventListener('click', () => {
  openclose.classList.toggle('user-top-open')

});
openactve2.addEventListener('click', () => {
    openclose2.classList.toggle('user-top-open');
    openactve2.classList.toggle('active')
});
openactve3.addEventListener('click', () => {
    openclose3.classList.toggle('user-top-open');
    openactve3.classList.toggle('active')
});
let button=document.getElementById('sidebar-open');
function add() {
    if(button.style.display ==='block'){
        button.style.display='none';
    }
    else {
        button.style.display='block'

    }
}
let card=document.getElementById('blok');
let card2=document.getElementById('cardjs');
function add1() {
    if(card.style.display ==='flex'){
        card.style.display='block';
    }
    else {
        card.style.display='flex'

    }
}

function add2() {
    if(card2.style.display ==='flex'){
        card2.style.display='block';
    }
    else {
        card2.style.display='flex'

    }
}
function add3() {
    alert("salom")
}
