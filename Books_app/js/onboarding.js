const changeBg = (bg) => {
    document.querySelector(".background").classList.add("fadeOut");    
    setTimeout(() => {
        document.querySelector(".pageBg").innerHTML = `
        <img src="../img/onboarding-${bg}.jpg" alt="bg"class="background animated fadeIn">
        `
    },900); 
};

const btn = document.querySelector(".indicator__btn");

btn.addEventListener("click", () => {           
    const div2 = `
        <div class="animateImg animated fadeInRight">			
            <img src="../img/startStar.png" alt="Book">
            <h1>Review Them</h1>
        </div>
    `
    const div3 = `
    <div class="animateImg animated fadeInRight">			
        <img src="../img/startHuman.png" alt="Book">
        <h1>Share, Make Friends</h1>
    </div>
    `    
    const animImg = (div) => {
        const animateImg = document.querySelector(".animateImg");
        animateImg.classList.add("fadeOutLeft");
        setTimeout(() => {
            animateImg.classList.remove("fadeOutLeft");    
            animateImg.innerHTML = div;            
        },900)
    };
    const changeIndicator = (doteInd, lineInd) => {
        document.querySelector(`.${doteInd}`).classList.add("indicator__dote");    
        const line = document.querySelector(`.${lineInd}`);
        line.classList.add("indicator__line");
        line.classList.remove("indicator__dote");        
    };
    changeBg(2);        
    animImg(div2);
    changeIndicator("first", "second");
    btn.addEventListener("click", () => {
        btn.addEventListener("click", () => {
            localStorage.setItem("start", "yes");
            setTimeout(() => { 
        document.location.href = "sign-in.html";        
        },800);
    });     
    changeBg(3);    
    animImg(div3);    
    changeIndicator("second", "third");
    });
});



