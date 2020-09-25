export function timeNow(tegClassInner) {
    let time = document.querySelector(`.${tegClassInner}`);
    let timeNow = new Date().toLocaleTimeString().slice(0,-3);
    time.innerHTML = `${timeNow}`;
    setInterval(() => {
        let timeNow = new Date().toLocaleTimeString().slice(0,-3);
        time.innerHTML = `${timeNow}`;
    }, 60000);
};