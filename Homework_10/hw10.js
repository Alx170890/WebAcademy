//1. setTimeout/setInterval:
//a.
function printNumbers(from, to) {
  let counter = from;
  let id = setInterval(() => {
    console.log(counter);
    if (counter === to) {
      clearInterval(id);
      console.log("Bang!!!");
    }
    counter--;
  }, 1000);
}
printNumbers(5, 0);

//b.
function printNumbers() {
  let counter = 1;
  let id = setInterval(() => {
    console.log(counter);
    counter++;
  }, 100);
  setTimeout(() => {
    clearInterval(id);
  }, 2000);
}
printNumbers();

//c.