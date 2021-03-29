

function presentInfo() {
    let html = "<div class='blockWeather'>";
    // console.log( weatherInfo.returnAllInitialState())
    html+=`<h1 class="h2_nameWeather"> ${weatherInfo.getCountryName()} <sup class="spanWeather">${weatherInfo.getCountryCode()}</sup> </h1>`
    html+=`<h2 class="tempCelsium"> ${weatherInfo.getTempCelsium()} <sup class="supCelsium">°C</sup> </h2> `

       if (weatherInfo.getLastIndex().slice(-1) === "d") {
        html+= addingIconsDay(weatherInfo.getLastIndex());
    } else  {
        html+= addingIconsNight(weatherInfo.getLastIndex())
    }

    html+= `<span class="weatherDescription">${weatherInfo.getWeatherDesc()}</span> `;
    html += `<span class="weatherDate">${weatherInfo.getDateActual()} </span> </div>`;
    html+="</div>"
  
    showAllData(html);
}


function getWrong(data) {
    $(".block_input").append(`<h2 class="modal">${data.message} 😩 </h2>`);
    setTimeout(function (){ $(".modal").remove()},2000);
}


function showAllData(html) {
    $(".blockInfo").append(html);
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
