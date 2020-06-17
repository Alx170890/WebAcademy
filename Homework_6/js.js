// Задание 1

// let name = "Джон";
// let admin = name;
// alert(admin);


// Задание 2

// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1 !
// alert( `hello ${"name"}` ); // hello name !
// alert( `hello ${name}` ); // hello Ilya !


// Задание 3

// let i = prompt("Введите число")
// if (i > 0) {
// 	alert(1);
// } else if (i < 0) {
// 	alert(-1);
// } else {
// 	alert(0);
// }


// Задание 4

// let age = prompt("Введите совй возраст");

// if (isNaN(age)) {
// 	alert("Вы ввели не число");
// }	else if (90 >= age && age >= 14) {
// 	alert("Мы вас берем");
// }	else if (age > 90) {
// 	alert("Вы слишком старый");
// }	else {
//  	alert("Вы слишком молодой")
// }


// Задание 5

// for (let i = 0; i <= 10; i++) {
// 	if (i % 2 === 0) {
// 		alert(i);
// 	}
// }	


// Задание 6

// let a = prompt("Введите число");
// let b = prompt("Введите еще одно число");
// function min(a, b) {
// 	if (isNaN(a) || isNaN(b)) {
// 		alert("Вы ввели не число");		
// 	}	else {
// 		a = Number(a);
// 		b = Number(b);
// 	}
// 	if (a > b) {
// 		return b;		
// 	}	else {
// 			return a;
// 	}
// }

// alert(`Меньшее число ${min(a, b)}`);


// Задание 7

let x = prompt("Введите число, которое нужно возвести в степень");
let n = prompt("Введите число, которое будет являться степенью");
function row(x, n) {
	if (isNaN(x) || isNaN(n)) {
		alert("Вы ввели не число");		
	}	else {
			return x**n;
	}			
}

alert(`${x} в степени ${n} даст ${row(x, n)}`);