let arr = [1,1,1,1,1,1,1,1,1,1,1];
let randomIndex = Math.floor(Math.random()*arr.length);
let randomItem = arr[randomIndex];
let isEqual = true;

for(let item of arr) {
  if (item !== randomItem) {
  isEqual = false;
  }
}
console.log(isEqual)
