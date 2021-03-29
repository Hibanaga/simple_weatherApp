class weather {

    _initialState = {
        inputWeather: "",
        API_KEY: "228e11cfa12602567e764ba968804c28",
        countryName: "",
        countryCode: "",
        tempCelsium: "",
        lastIndexIcon: "",
        weatherDescription:"",
        dateActual: ""
    } 

    setAllInputData(name,code,temp,lastIndex,desc,date) {
        this._initialState.countryName = name,
        this._initialState.countryCode = code,
        this._initialState.tempCelsium = temp,
        this._initialState.lastIndexIcon = lastIndex,
        this._initialState.weatherDescription = desc,
        this._initialState.dateActual = date
    }

    returnAllInitialState() {
        return this._initialState;
    }

    setinputWeather(newInputWeather) {
        this._initialState.inputWeather = newInputWeather;
    };


    getCountryName() {
        return this._initialState.countryName;
    }

    getCountryCode() {
        return this._initialState.countryCode;
    }

    getTempCelsium() {
        return this._initialState.tempCelsium;
    }

    getLastIndex () {
        return this._initialState.lastIndexIcon;
    }

    getWeatherDesc() {
        return this._initialState.weatherDescription;
    }

    getDateActual() {
        return this._initialState.dateActual;
    }

    returnWeatherInfo() {
        return this._initialState.weatherInfo
    }

    getName() {
        return this._initialState.inputWeather;
    }

    getAPIkey () {
        return this._initialState.API_KEY
    }
}

