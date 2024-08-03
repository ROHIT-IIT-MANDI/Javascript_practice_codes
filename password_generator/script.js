let len;
let value;
function onSliderChange(){
  len = parseInt(document.querySelector('.inlen').value);
  console.log(len);
  value = document.querySelector('#length-given');
  value.textContent = len;
}

document.querySelector('.inlen').addEventListener('input', onSliderChange);


function getCharacter(array, j, i) { 
  const str = array[j];
  
  return str[i];
}



let sub = document.querySelector('.button');
let showPass  = document.querySelector('#password');
sub.addEventListener('click',()=>{
  const check = document.querySelectorAll('.checkbox');
const numbers   = '12345678901234567890123456789012345678901234567890';
const lowercase = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWX';
const symbols   = '~!@#$%^&*()_+=-[]{}|;,./<>?`~!@#$%^&*()_+=-[]{}|;,';

const arr = [];

async function checkCheckboxes(){
  
  check.forEach(function(checkbox) {
    console.log('hi');
      if(checkbox.checked){
        
        if(checkbox.id==='numbers'){
          arr.push(numbers);
        }
        else if(checkbox.id==='lowercase'){
          arr.push(lowercase);
        }

        else if(checkbox.id==='uppercase'){
          arr.push(uppercase);
        }     
        
        else if(checkbox.id==='symbols'){
          arr.push(symbols);
        }        


      }



  });
}

checkCheckboxes();

console.log('array is : ',arr);

let l = parseInt(arr.length);

let password = '';

for(let i = 0; i<len; i++){
  let r = Math.random();
  let arrIndex = Math.floor(r*(l));
  password = password+getCharacter(arr,arrIndex,Math.floor(r*100)%50);


}
console.log(password);
  
  showPass.textContent = password;

if(len+(arr.length*2)>=10){
  document.querySelector('.light').style.backgroundColor = 'green';
}
else{
  document.querySelector('.light').style.backgroundColor = 'red';
}
console.log(arr.length*2);
console.log(len+arr.length*2);

});

document.querySelector('#copy').addEventListener('click',()=>{

  let textToCopy = document.querySelector('#password').textContent;
  navigator.clipboard.writeText(textToCopy);
})


  

