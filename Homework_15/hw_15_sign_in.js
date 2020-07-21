// // Задание 1.
document.querySelector("textarea").addEventListener("change", () => {
  let text = document.querySelector("textarea").value;  
  localStorage.setItem("textValue", text);  
})
let saveValue = localStorage.getItem("textValue");
document.querySelector("textarea").value = saveValue;

// Задание 2.
document.querySelector(".btn").addEventListener("click", () => {
  const name = document.querySelector(".name").value;
  const password = document.querySelector(".password").value;  
  localStorage.setItem("name", name);
  localStorage.setItem("password", password);  
});

document.querySelector(".content").addEventListener("click", () => { 
    document.location.href = "hw_15_content.html";  
});