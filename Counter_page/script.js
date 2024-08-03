let m = document.getElementById("minus");
let b = document.getElementById("counter");
let r = document.getElementById('reset');
//console.log(b);
m.addEventListener("click",function(){
    b.textContent=parseInt(b.textContent)-1;
})

let a = document.getElementById("addition");

a.addEventListener("click",function(){
    b.textContent=parseInt(b.textContent)+1;
})

r.addEventListener('click',function(){
    b.textContent = 0;
})
