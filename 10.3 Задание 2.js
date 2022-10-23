/*Задание 2
Дана переменная x, которая может принимать любое значение. 
Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».*/

var x;
x = 14;
if (typeof(x) == 'number') {
    console.log("x is a number");
}
else if (typeof(x) == 'boolean') {
    console.log("x is a boolean");
}
else if (typeof(x) == 'string') {
    console.log("x is a string");
}

else {
  console.log("x is undefined");
}
