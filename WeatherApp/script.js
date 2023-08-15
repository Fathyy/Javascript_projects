require('dotenv').config();

const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const inputBox = document.getElementById("input-box");
    const inputBtn = document.getElementById("input-btn");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        // check if the user inputs correct city name
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".second section").style.display = "none";
        }
        else{
            var data = await response.json();

            // output the response into elements
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

            // update the weather image based on the weather conditions
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src="images/clouds.png";
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src="images/clear.png";
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src="images/drizzle.png";
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src="images/mist.png";
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src="images/rain.png";
            }

            document.querySelector(".second section").style.display = "block";
            document.querySelector(".error").style.display = "none";
            
        }

    }

    inputBtn.addEventListener("click", ()=>{
        checkWeather(inputBox.value);
    });
