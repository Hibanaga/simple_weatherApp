let weatherInfo = new weather();


$(".btn_search").on('click', ()=> {
    let inputWeather = $(".inputweather").val();
    weatherInfo.setinputWeather(inputWeather);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInfo.getName()}&units=metric&appid=${weatherInfo.getAPIkey()}`)
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
    let datatemp = "";

    for (let key in data.main) {
        if (key === 'temp') {
            datatemp = Math.round(data.main[key]);
        }
    }

    weatherInfo.setAllInputData(data.name,data.sys.country,datatemp,data.weather[0].icon,data.weather[0].description,dateBuilder(new Date()));

    
    presentInfo();
}

function dateBuilder(d)  {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${date} ${month} ${year}`;
}



