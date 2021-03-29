
$(".btn_search").on('click', ()=> {
    let inputWeather = $(".inputweather").val();
    let weatherInfo = new weather(inputWeather);
    // console.log(weatherInfo.getName());
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${weatherInfo.getName()}&units=metric&appid=${weatherInfo.getAPIkey()}`)
        .then(res=> res.json())
        .then(data=> {
            if (data.message === "city not found") {
                getWrong(data);
            } else {
                getShowWeather(data);
            }
        })
})


function getShowWeather(data) {
    console.log(data);
    let lastIndex = data.weather[0].icon;
    let html = "<div class='blockWeather'>";
    // console.log(data.main);
    // ${data.weather[0].main}
    html+= `<h1 class="h2_nameWeather"> ${data.name} <sup class="spanWeather">${data.sys.country}</sup> </h1>`;
    // html+= `<p>TimeZone: ${data.timezone/3600}:00</p>`;

    for (let key in data.main) {
        if (key === 'temp') {
            console.log(data.main[key])  
            html+=`<h2 class="tempCelsium"> ${Math.round(data.main[key])} <sup class="supCelsium">°C</sup> </h2> `;
        }
    }

    if (lastIndex.slice(-1) === "d") {
        html+= addingIconsDay(data.weather[0].icon);
    } else  {
        html+= addingIconsNight(data.weather[0].icon)
    }
    html+= `<span class="weatherDescription">${data.weather[0].description}</span> `;
    // html+=  + "</div>" ;
    html += `<span class="weatherDate">${dateBuilder(new Date())} </span> </div>`;
    
   showAllData(html);
}

function getWrong(data) {
    console.log(data.message);
    let html = "";


    html+= `<h2 class="modal">${data.message} 😩 </h2>`;
    $(".block_input").append(html);

    setTimeout(function (){ $(".modal").remove()},2000);
}



function addingIconsDay(iconCode) {
    let html = "";
    if (iconCode === "01d") {
        html+= ` <img class="weather_img" src="./images/01d@2x.png">`;
    } else if (iconCode === "02d") {
        html+= ` <img class="weather_img" src="./images/02d@2x.png">`;
    } else if (iconCode === "03d") {
        html+= ` <img class="weather_img" src="./images/03d@2x.png">`;
    } else if (iconCode === "04d") {
        html+= ` <img class="weather_img" src="./images/04d@2x.png">`;
    } else if (iconCode === "09d") {
        html+= ` <img class="weather_img" src="./images/09d@2x.png">`;
    } else if (iconCode === "10d") {
        html+= ` <img class="weather_img" src="./images/10d@2x.png">`;
    } else if (iconCode === "11d") {
        html+= ` <img class="weather_img" src="./images/11d@2x.png">`;
    } else if (iconCode === "13d") {
        html+= ` <img class="weather_img" src="./images/13d@2x.png">`;
    } else if (iconCode === "50d") {
        html+= ` <img class="weather_img" src="./images/50d@2x.png">`;
    }
    return html;
}


function addingIconsNight (iconCode) {
    let html = "";
    if (iconCode === "01n") {
        html+= ` <img class="weather_img" src="./images/01n@2x.png">`;
    } else if (iconCode === "02n") {
        html+= ` <img class="weather_img" src="./images/02n@2x.png">`;
    } else if (iconCode === "03n") {
        html+= ` <img class="weather_img" src="./images/03n@2x.png">`;
    } else if (iconCode === "04n") {
        html+= ` <img class="weather_img" src="./images/04n@2x.png">`;
    } else if (iconCode === "09n") {
        html+= ` <img class="weather_img"  src="./images/09n@2x.png">`;
    } else if (iconCode === "10n") {
        html+= ` <img class="weather_img"  src="./images/10n@2x.png">`;
    } else if (iconCode === "11n") {
        html+= ` <img class="weather_img" src="./images/11n@2x.png">`;
    } else if (iconCode === "13n") {
        html+= ` <img class="weather_img" src="./images/13n@2x.png">`;
    } else if (iconCode === "50n") {
        html+= ` <img class="weather_img" src="./images/50n@2x.png">`;
    }
    return html;
}


function dateBuilder(d)  {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDate()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;

}

function showAllData(html) {
    // $(".blockInfo").html(html);
    $(".blockInfo").append(html);
}


