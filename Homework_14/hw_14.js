// // Задание 1.
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "ВЫ согласны?",
//   () => alert("Вы согласилисью"),
//   () => alert("Вы отменили выполнение")
// );

// Задание 2.
let array = document.querySelectorAll(".windowSlider__block");
let container = document.querySelector(".windowSlider__container");
container.innerHTML = ``;
container.append(array[5]);
container.append(array[0]);
container.append(array[1]);
// container.append(arrey[2]);
// container.append(arrey[3]);
// container.append(arrey[4]);
// container.append(arrey[5]);
let margin = parseInt(getComputedStyle(array[0]).margin);
let widthBlock = array[0].offsetWidth;
let i = 2;
document.querySelector(".btnRight").addEventListener("click", () => { 
  
  document.querySelector(".windowSlider__block").remove();
  container.style.left = "0";
  container.style.transition = "none";      
  let letfMove = parseInt(getComputedStyle(container).left);
  container.style.transition = "500ms ease";
  container.style.left = `-${(margin * 2 + widthBlock - letfMove)}px`;
  container.innerHTML += ``;
  container.append(array[i]);  
  if ( i === 5) {
    i = -1;
  }
  i++;    
});

