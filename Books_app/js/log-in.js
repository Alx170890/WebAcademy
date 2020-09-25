const url = 'http://localhost:3000/users';
const getValue = (field) => {    
    return document.querySelector(`${field}`).value;     
};
const dataTrue = (list) => {    
    list.forEach((item) => {               
        if (getValue(".email") === item.guestEmail && getValue(".password") === item.guestPassword) {
            document.location.href = "../index.html";                      
        }; 
    });
};
const getData = () => fetch(url)
    .then((res)=> res.json())
    .then((result) => {       
        dataTrue(result);
        return result;             
});

document.querySelector(".btn").addEventListener("click", () => {
    getData();    
});
const gotData = () => fetch(url)
    .then((res)=> res.json())
    .then((result) => {        
        return result;           
});
const inputTrue = (field) => {
    document.querySelector(field).addEventListener("input", () => { 
        gotData().then((result) => {              
            result.forEach((item) => {             
                if (getValue(field) === item.guestEmail || getValue(field) === item.guestPassword) {                
                    document.querySelector(field).classList.add("valueTrue");                    
                } else {                
                    document.querySelector(field).classList.remove("valueTrue");               
                };
            });
        });
    });
};
inputTrue(".email");
const passwordTrue = document.querySelector('.password');
const input = (elemTrue) => {      
    elemTrue.addEventListener("input", () => {        
        if(elemTrue.value) {
            elemTrue.classList.add("valueTrue");
        } else {
            elemTrue.classList.remove("valueTrue");
        }    
    });
};
input(passwordTrue);