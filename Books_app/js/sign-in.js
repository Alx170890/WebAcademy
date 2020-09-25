const url = 'http://localhost:3000/users';
const getValue = (field) => {    
    return document.querySelector(`.${field}`).value;     
}
const GuestPost = () => {     
    return JSON.stringify({guestEmail: getValue('email'), guestPassword: getValue('password')})      
}; 
const postData = () => fetch (
    url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: GuestPost()
    }
    ).then(() => {        
        document.location.href = "log-in.html";
});

document.querySelector(".btn").addEventListener("click", () => {     
    if((getValue('password') === getValue('passwordConfirm')) && getValue('email') && getValue('password') && getValue('passwordConfirm')) {
        postData();       
    }; 
});
const inputTrue = (elemTrue) => {      
    elemTrue.addEventListener("input", () => {        
        if(elemTrue.value) {
            elemTrue.classList.add("valueTrue");
        } else {
            elemTrue.classList.remove("valueTrue");
        }    
    });
};
const emailTrue = document.querySelector('.email');
const passwordTrue = document.querySelector('.password');
const passwordConfirmTrue = document.querySelector('.passwordConfirm');
inputTrue(emailTrue);
inputTrue(passwordTrue);
document.querySelector(".passwordConfirm").addEventListener("input", () => {     
    passwordConfirmTrue.classList.add("valueTrue");  
    if (getValue('password') === getValue('passwordConfirm')) {     
    } else {
        passwordConfirmTrue.classList.remove("valueTrue");
    };
});








    

    