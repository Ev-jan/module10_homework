/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.*/

let arr = ['',NaN,1,1,1,1,1,0,4,8,6,9,7,42,46,841,1,1,1,31,1,'cat juice',0,undefined, null];
let even = 0;
let odd = 0;
let zero = 0;
arr.forEach(function(item){
  if(item !== 0 && isNaN(item)===false && typeof item === 'number') 
    {if(item %2 === 0){even++}
    else{odd++}} 
  else if(item === 0) {zero++}
  });

console.log(`even: ${even}, odd ${odd}, zero ${zero}`)