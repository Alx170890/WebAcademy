let close = () => {
  let notify = document.querySelector(".notify");
  notify.classList.add("fadeOutUp");  
  notify.classList.remove("fadeInDown"); 
}

document.querySelector("button").addEventListener("click", () => {
  let notify = document.querySelector(".notify");
  notify.classList.add("fadeInDown");  
  notify.classList.remove("fadeOutUp");
  document.querySelector(".notify").hidden = false;  
  setTimeout(close,3000);
  });



document.querySelector("span").addEventListener("click", close);



// () => {
//   let notify = document.querySelector(".notify");
//   notify.classList.add("fadeOutUp");  
//   notify.classList.remove("fadeInDown"); 
// }