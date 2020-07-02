let close = () => {
  let notify = document.querySelector(".notify");
  notify.classList.add("fadeOutUp");  
  notify.classList.remove("fadeInDown");   
};
document.querySelector("button").addEventListener("click", () => {
  let notify = document.querySelector(".notify");
  notify.hidden = false;
  notify.classList.add("fadeInDown");  
  notify.classList.remove("fadeOutUp");  
  setTimeout(close,3000);  
})
document.querySelector("span").addEventListener("click", close)