// const getWeatherCityNow = (city) => (fetch(`https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&lang=en&units=metric&q=${city}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
// 		"x-rapidapi-key": "2f3477a892msh1889542a56384f8p1d5c76jsne7a71c9b8ec3"
// 	}
// })
// .then(response => (response.json()))
// .then((res) => (res))
// .catch(err => {
// 	console.log(err);
// })
// );


document.querySelector("button").addEventListener("click", () => {    
    let temperature = 34;    
    let pressure = 704;  
    let wind = 1.8;  
    let humidity = 88;  
    let weather = "cloud"; 
    let time = 0;                  
    renderWeather(temperature, pressure, wind, humidity, weather, time);   
})

document.querySelector("input").addEventListener("keydown", event => {
    if (event.keyCode === 13 ) {
        let temperature = 34;    
        let pressure = 704;  
        let wind = 1.8;  
        let humidity = 88;  
        let weather = "cloud";  
        let time = 0;                 
        renderWeather(temperature, pressure, wind, humidity, weather, time);
    }
})


const renderWeather = (temp, press, wnd, hmdt, wthr, tm) =>  {
    const temperature = document.querySelector(".cityWeather_temperature");
    const pressure = document.querySelector(".cityWeather_pressure");
    const wind = document.querySelector(".cityWeather_wind");
    const humidity = document.querySelector(".cityWeather_humidity");
    const weather = document.querySelector(".cityWeather_weatherIndicator");
    let time = document.querySelector(".cityWeather");
    let body = document.querySelector("body");
    let imgWeather = document.querySelector("img");    
    switch(wthr) {
        case "rain":
            imgWeather.src = "img/rain.png";
        break;
        case "cloud":
            imgWeather.src = "img/cloud.png";
        break;
        case "snow":
            imgWeather.src = "img/snow.png";
        break;        
        default:            
        break;
    }
    if (tm > 20 || tm < 8) {         
        time.classList.add("backgroungNight");
        body.style.background = "#5c6576"
    }    
    temperature.innerHTML = `${temp}`;
    pressure.innerHTML = `${press} mm`;
    wind.innerHTML = `${wnd} m/c`;
    humidity.innerHTML = `${hmdt} %`;
    weather.innerHTML = `${wthr}`;
};


// document.querySelector("button").addEventListener("click", () =>{
//     const city = document.querySelector("input").value;
//     if (city) {
//         getWeatherCityNow(city).then((res) => {
//             console.log(res);
//             let temperature = Math.round(res.main.temp);    
//             let pressure = Math.round(res.main.temp);  
//             let wind = Math.round(res.main.temp);  
//             let humidity = Math.round(res.main.temp);  
//             let weather = res.main.temp;                     
//             renderWeather(temperature, pressure, wind, humidity, weather);
//         })
//     }
// })










