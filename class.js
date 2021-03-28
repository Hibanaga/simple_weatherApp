class weather {

    _initialState = {
        API_KEY: "228e11cfa12602567e764ba968804c28",
    }

    constructor(name) {
        this.name = name
    };

    setName(newName) {
        this.name = newName
    };

    getName() {
        return this.name;
    }

    getAPIkey () {
        return this._initialState.API_KEY
    }
}

