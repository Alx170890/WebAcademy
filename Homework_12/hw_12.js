// 1.
function isEmpty(obj) {
    for (let prop in obj) {
      return false;
    }
    return true;
  }
  let schedule = {};
  alert(isEmpty(schedule));
  schedule["8:30"] = "get up";
  alert(isEmpty(schedule));
  
//   // 2.
//   let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   function summa(obj) {
//     let summ = 0;
//     for (let prop in obj) {
//       summ += obj[prop];
//     }
//     return summ;
//   }
  
//   return(summa(salaries));

//   // 3.
//   let calculator = {
//     read() {
//       this.num = +prompt("Введите число");
//       this.num2 = +prompt("Введите число");
//     },
//     summ() {
//       return this.num + this.num2;
//     },
//     mul() {
//       return this.num * this.num2;
//     }
//   };
  
//   calculator.read();
//   alert(calculator.summ());
//   alert(calculator.mul());