/*10.3 Задание 1 
Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса 
(арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли 
оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/

//Вариант №1: исходя из того, что любое введенное значение, преобразованное с помощью унарного плюса, будет являться "числом",
// я остановился на таком решении:

let userValue = +prompt("Enter a random value");
    console.log(typeof(userValue));
if (userValue % 2 == 0) {
  console.log("You entered an even number");
}
else if (userValue % 2 > 0) {
  console.log("You entered an odd number");
}
else if (Number.isNaN(userValue)) {
  console.log("Oops, you seem to have made a mistake. Try again");
}

// Вариант №2, без преобразования введенного значения в число посредством унарного плюса

let userValue1 = prompt("Enter a random value");

if (userValue1 % 2 == 0) {
  console.log("You entered an even number");
}
else if (userValue1 % 2 > 0) {
  console.log("You entered an odd number");
}
else if (isNaN(userValue1)==true) {
  console.log("Oops, you seem to have made a mistake. Try again");
}