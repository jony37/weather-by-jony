const search = document.querySelector('.search'),
geolacation = document.querySelector('.geolocationBtn'),
city = document.querySelector('.city'),
weather = document.querySelector('.weather'),
cityTime = document.querySelector('.city-time'),
humidity = document.querySelector('.humidity'),
wind = document.querySelector('.wind'),
input = document.querySelector('.input')


async function chekWeather (city) {
const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=f79f0a2d41904905b65110327240711&q=${city}&days=4&aqi=no&alerts=no`;
const apiKey = "f79f0a2d41904905b65110327240711";

    const response  = await fetch(apiUrl + city)


    if (response.status == 400) {
        console.log("ERROR");
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.card').style.display = 'none'
    } else {
        const data = await response.json();
        console.log(data);

        document.querySelector('.city').innerHTML = data.location.name;
        document.querySelector('.city-time').innerHTML =  data.forecast.forecastday[0].date;
        document.querySelector('.weather').innerHTML = Math.round(data.forecast.forecastday[0].day.avgtemp_c) + '°C';
        document.querySelector('.humidity').innerHTML = Math.round(data.forecast.forecastday[0].day.avghumidity) + '%';
        document.querySelector('.wind').innerHTML =  Math.round(data.forecast.forecastday[0].day.maxwind_kph) + 'km/h';
        document.querySelector('.cloud').innerHTML = data.current.cloud + '%';

        // day 9
        document.querySelector('.tomorowData1').innerHTML = data.forecast.forecastday[1].date;
        document.querySelector('.tomorowWeather1').innerHTML = Math.round(data.forecast.forecastday[1].day.avgtemp_c) + '°C';
        document.querySelector('.tomorow-humidity').innerHTML = Math.round(data.forecast.forecastday[1].day.avghumidity) + '%';
        document.querySelector('.tomorow-wind').innerHTML = Math.round(data.forecast.forecastday[1].day.maxwind_kph) + 'km/h';

        // day 10
        document.querySelector('.tomorowData3').innerHTML = data.forecast.forecastday[2].date;
        document.querySelector('.tomorowWeather3').innerHTML = Math.round(data.forecast.forecastday[2].day.avgtemp_c) + '°C';
        document.querySelector('.tomorow-humidity3').innerHTML = Math.round(data.forecast.forecastday[2].day.avghumidity) + '%';
        document.querySelector('.tomorow-wind3').innerHTML = Math.round(data.forecast.forecastday[2].day.maxwind_kph) + 'km/h';

        // day 11
        document.querySelector('.tomorowData4').innerHTML = data.forecast.forecastday[3].date;
        document.querySelector('.tomorowWeather4').innerHTML = Math.round(data.forecast.forecastday[3].day.avgtemp_c) + '°C';
        document.querySelector('.tomorow-humidity4').innerHTML = Math.round(data.forecast.forecastday[3].day.avghumidity) + '%';
        document.querySelector('.tomorow-wind4').innerHTML = Math.round(data.forecast.forecastday[3].day.maxwind_kph) + 'km/h';



        const weatherIcons = [
            {condition: "Overcast", icon: "./assest/images/clouds.png"},
            {condition: "Sunny", icon: "./assest/images/clear.png"},
            {condition: "Clear", icon: "./assest/images/clear.png"},
            {condition: "Light drizzle", icon: "./assest/images/drizzle.png"},
            {condition: "Partly cloudy", icon: "./assest/images/clouds.png"},
            {condition: "Light rain", icon: "./assest/images/rain.png"},
            {condition: "Light mist", icon: "./assest/images/drizzle.png"}
        ];

        for (let i = 0; i < weatherIcons.length; i++) {
            for (let x = 0; x < 4; x++) {
                // if (data.forecast.forecastday[x].day.condition.text === weatherIcons[i].condition) {
                //     document.querySelector('.weatherIcon').src = weatherIcons[i].icon;
                // }
                // console.log(data.forecast.forecastday[x].day.condition.text);

                if (data.forecast.forecastday[0].day.condition.text === weatherIcons[i].condition) {
                    document.querySelector('.weatherIcon').src = weatherIcons[i].icon;                    
                }

                console.log(data.forecast.forecastday[0].day.condition.text);
                
                
            }
    
        }
    }   

    if (city === '') {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.error').textContent = "Iltimos inputni toldiring"
    }

    // const apiUrlTommorow = `http://api.weatherapi.com/v1/forecast.json?key=f79f0a2d41904905b65110327240711&q=${city}&days=3&aqi=no&alerts=no`
    // const response2 = await fetch(apiUrlTommorow);

    // if (response2.status === 400) { 
    //     return;
    // } else {
    //     const data2 = await response2.json()
    //     console.log(data2);



    //     const weatherIcons = [
    //         {condition: "Overcast", icon: "./assest/images/clouds.png"},
    //         {condition: "Sunny", icon: "./assest/images/clear.png"},
    //         {condition: "Clear", icon: "./assest/images/clear.png"},
    //         {condition: "Light drizzle", icon: "./assest/images/drizzle.png"},
    //         {condition: "Partly Cloudy ", icon: "./assest/images/clouds.png"},
    //         {condition: "Light rain", icon: "./assest/images/rain.png"},
    //         {condition: "Light mist", icon: "./assest/images/drizzle.png"}
    //     ];

    //     for (let i = 0; i < weatherIcons.length; i++) {
    //         if (data2.forecast.forecastday[1].day.condition.text === weatherIcons[i].condition) {
    //             document.querySelector('.tomorow1Img').src = weatherIcons[i].icon;
    //         }
    //     }

    //     document.querySelector('.tomorowData2').innerHTML = data2.forecast.forecastday[2].date;
    //     document.querySelector('.tomorowWeather2').innerHTML =  Math.round(data2.forecast.forecastday[2].day.avgtemp_c) + '°C';
    //     document.querySelector('.tomorow-humidity2').innerHTML = Math.round(data2.forecast.forecastday[2].day.avghumidity) + '%';
    //     document.querySelector('.tomorow-wind2').innerHTML = Math.round(data2.forecast.forecastday[2].day.maxwind_kph) + 'km/h';

    //     for (let i = 0; i < weatherIcons.length; i++) {
    //         if (data2.forecast.forecastday[2].day.condition.text === weatherIcons[i].condition) {
    //             document.querySelector('.tomorow1Img').src = weatherIcons[i].icon;
    //         }
    //     }
        
        
    // }
}

search.addEventListener('click', function () {
    chekWeather(input.value)
})

// loc
geolacation.addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            // console.log(lat, lon);
            

            const locApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6be5bcb5136584ac61355d420a2e0bae`;

            async function MyLoc() {
                const response = await fetch(locApiUrl)

                if (response.status == 400) {
                    console.log("ERROR");
                } else {
                    const data = await response.json();

                    document.querySelector('.city').innerHTML = data.name;
                    document.querySelector('.weather').innerHTML =  Math.round(data.main.temp) + "°F";
                    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
                    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
                    document.querySelector('.cloud').innerHTML = data.clouds.all + '%'
                    console.log(data);
                    console.log(locApiUrl);
                }
            }
            MyLoc()
        }) 
    }
})





