// Получаем данные с сервера
const getWeatherCityNow = (city) => (fetch(`https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&lang=en&units=metric&q=${city}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "2f3477a892msh1889542a56384f8p1d5c76jsne7a71c9b8ec3"
	}
})
.then(response => (response.json()))
.then((res) => {       
    return res;
})
.catch(err => {
	console.log(err);
})
);

// Переводим время в нужный формат
function getCurrentTimeFromStamp(timezone) {
    let date = new Date();  
    let timezoneHours = timezone / 3600;  
    let timeStampCon = `${date.getHours()}.${date.getMinutes()}`;
    let time = +timeStampCon + timezoneHours - 3;  
    return time;
}

// Добавляем фокус на input
document.querySelector("input").focus();

// Добавляем события на клик по кнопке
document.querySelector("button").addEventListener("click", () =>{    
    const city = document.querySelector("input").value;
    document.querySelector("input").blur();
    if (city) {
        getWeatherCityNow(city).then((res) => {   
            if (res.message) {                
                let close = () => {
                    let notify = document.querySelector(".notify");
                    notify.classList.add("fadeOutUp");  
                    notify.classList.remove("fadeInDown");                    
                  };                      
                    let notify = document.querySelector(".notify");
                    notify.hidden = false;
                    notify.classList.add("fadeInDown");  
                    notify.classList.remove("fadeOutUp");                    
                    setTimeout(close,3000);                
            } else {
                let temperature = Math.round(res.main.temp);    
                let pressure = res.main.pressure;  
                let wind = Math.round(res.wind.speed);  
                let humidity = res.main.humidity;  
                let weather = res.weather[0].main; 
                let timezone = res.timezone;
                let normTime = getCurrentTimeFromStamp(timezone);               
                renderWeather(temperature, pressure, wind, humidity, weather, normTime);
            }                
        })
    }
})

// Добавляем события на по нажатию на enter
document.querySelector("input").addEventListener("keydown", event => {
    if (event.keyCode === 13 ) {
        const city = document.querySelector("input").value;
        document.querySelector("input").blur();
        if (city) {
            getWeatherCityNow(city).then((res) => {
                if (res.message) {                    
                    let close = () => {
                        let notify = document.querySelector(".notify");
                        notify.classList.add("fadeOutUp");  
                        notify.classList.remove("fadeInDown");                         
                      };                      
                        let notify = document.querySelector(".notify");
                        notify.hidden = false;
                        notify.classList.add("fadeInDown");  
                        notify.classList.remove("fadeOutUp");                         
                        setTimeout(close,3000);                                 
                } else {
                    let temperature = Math.round(res.main.temp);    
                    let pressure = res.main.pressure;  
                    let wind = Math.round(res.wind.speed);  
                    let humidity = res.main.humidity;  
                    let weather = res.weather[0].main; 
                    let timezone = res.timezone;
                    let normTime = getCurrentTimeFromStamp(timezone);                       
                    renderWeather(temperature, pressure, wind, humidity, weather, normTime);
                }                
            })
        }
    }
})

// Выводи данные на экран
const renderWeather = (temp, press, wnd, hmdt, wthr, tm) =>  {
    const temperature = document.querySelector(".cityWeather_temperature");
    const pressure = document.querySelector(".cityWeather_pressure");
    const wind = document.querySelector(".cityWeather_wind");
    const humidity = document.querySelector(".cityWeather_humidity");
    const weather = document.querySelector(".cityWeather_weatherIndicator");
    const time = document.querySelector(".cityWeather");
    const body = document.querySelector("body");
    const imgWeather = document.querySelector("img");
    temperature.innerHTML = `${temp}`;
    pressure.innerHTML = `${press} mm`;
    wind.innerHTML = `${wnd} m/c`;
    humidity.innerHTML = `${hmdt} %`;
    weather.innerHTML = `${wthr}`;
    switch(wthr) {
        case "Rain":
            imgWeather.src = "img/rain.png";
        break;
        case "Clouds":
            imgWeather.src = "img/cloud.png";
        break;
        case "Snow":
            imgWeather.src = "img/snow.png";
        break;        
        default:            
        break;
    }
    if (tm > 20 || tm < 8) {         
        time.classList.add("backgroungNight");
        body.style.background = "#5c6576"
    } else {
        time.classList.remove("backgroungNight");
        body.style.background = "#75cad8"
    }     
};