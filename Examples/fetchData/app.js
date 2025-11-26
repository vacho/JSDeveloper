function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecast));
    });
}

function displayData(weather) {
    console.log(weather);
}

function onError(error) {
    console.log(`ERROR: ${error}`);
}

fetchData()
    .then(displayData)
    .catch(onError);