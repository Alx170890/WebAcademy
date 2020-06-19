
// задание 1

// function summa(a) {
// 	return function(b) {
// 		return (a + b);
// 	};
// }

// alert(summa(6)(8));

// Задание 2

// function makeCounter() {
// 	let	a = 0;
// 	return function Counter() {
// 		return(a++);
// 	};
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter());
// alert(counter());
// alert(counter2());
// alert(counter2());
// alert(counter2());
// alert(counter());
// alert(counter());

// Задание 3

function sumInput() {
  let summa = [];
  while (true) {
    let x = prompt("Введите число");
    let p = +x;
    summa.push(p);
    if (x === "" || x === null || isNaN(x)) {
      break;
    }
  }
  let i = 0;
  summa.forEach(function(item) {
    i += item;
  });
  alert(`Сумма равна ${i}`);
}

sumInput();