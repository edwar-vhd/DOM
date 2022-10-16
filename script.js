const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

btn.addEventListener('click',calcular);

res.value = 0;

function calcular(){
    res.value = +n1.value + +n2.value;
}