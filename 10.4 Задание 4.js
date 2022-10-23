/*Задание 4

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/

function getRandomInt() {
    return Math.floor(Math.random()*100);
  }
  console.log(getRandomInt());