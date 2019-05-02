'use strict';//стандар ES6
a=5;
console.log(a);
var numer=5;//число 
var string="Hello";//строка
var boolean=true;//булевая переменная тру фолс(правда/неправда)
null;//cсылка на несуществующий элемент 
undefined;//значения нет
var obj={};//обьект


console.log(4/0);
let person ={ //обьект и его свойства
  name:"jonh",
  age:25,
  isMarried:false
}
console.log(person.name);
let arr = ['plum.png','orange.jpg','apple.bmp'];//массив элементов 
//console.log(arr[2]);

//alert("Hello Word!");

//let answer=confirm("are You Here?");
//console.log(answer);
//let answer=+prompt("Вам есть 18?","Да");//Ответ на вопрос в строку + перед promt превращает строку в цифру
//console.log(typeof(answer));//typeof-проверка на тип данных в консоль
//console.log("arr"+"-object");//конкатинация строк
//console.log("arr"+4);//обьединение строки с числом дает строку 
let incr=10,
    decr=10;
   

console.log(incr++); //дикремент и инкремент нужно обьявлять перед переменной иначе они не сработают 
console.log(decr--);

console.log(5%2);
console.log("2"===2);

let isChecked=true;
    isClose=true;

console.log(isChecked&&isClose);//true&&true=true true&&fals=false
console.log(isChecked||isClose);//false||false=false true||false=true !-оператор отрицания false в true и наоборот 