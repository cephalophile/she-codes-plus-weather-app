//Updates location and clears form
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();
  // let currentLocation = document.querySelector("#current-city");
  // let newCity = document.querySelector("#city-submit").value;
  // currentLocation.innerHTML = `${newCity}`;
});

//shows current weather on load
window.onload = getCurrentPosition();

//Formats current date
let dateOnPage = document.querySelector("#current-date");
let now = new Date();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December/",
];
let month = months[now.getMonth()];
dateOnPage.innerHTML = `${day}, ${month} ${date}`;

//Switches to C
function convertToC(event) {
  event.preventDefault();
  //convert today's temp
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${tempValue}°`;
  //convert forecast temps
  let day1HighTemp = document.querySelector("#day1-high");
  day1HighTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[0].temp.max
  )}°`;
  let day2HighTemp = document.querySelector("#day2-high");
  day2HighTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[1].temp.max
  )}°`;
  let day3HighTemp = document.querySelector("#day3-high");
  day3HighTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[2].temp.max
  )}°`;
  let day4HighTemp = document.querySelector("#day4-high");
  day4HighTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[3].temp.max
  )}°`;
  let day5HighTemp = document.querySelector("#day5-high");
  day5HighTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[4].temp.max
  )}°`;

  let day1LowTemp = document.querySelector("#day1-low");
  day1LowTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[0].temp.min
  )}°`;
  let day2LowTemp = document.querySelector("#day2-low");
  day2LowTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[1].temp.min
  )}°`;
  let day3LowTemp = document.querySelector("#day3-low");
  day3LowTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[2].temp.min
  )}°`;
  let day4LowTemp = document.querySelector("#day4-low");
  day4LowTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[3].temp.min
  )}°`;
  let day5LowTemp = document.querySelector("#day5-low");
  day5LowTemp.innerHTML = `${Math.round(
    forecastTemps.data.daily[4].temp.min
  )}°`;

  let feelsLikeTemp = document.querySelector(".feelsLikeValue");
  feelsLikeTemp.innerHTML = `${feelsLikeValue}°`;

  let metricWind = Math.round(windSpeed * 1.609);
  let currentWind = document.querySelector(".windValue");
  currentWind.innerHTML = `${metricWind} kph`;
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToC);

//Swithces to F
function convertToF(event) {
  event.preventDefault();
  //convert today's temp
  let currentTemp = document.querySelector("#current-temp");
  let FtempValue = Math.round((tempValue * 9) / 5 + 32);
  currentTemp.innerHTML = `${FtempValue}°`;
  //convert forecast temps
  let day1HighTemp = document.querySelector("#day1-high");
  day1HighTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[0].temp.max * 9) / 5 + 32
  )}°`;
  let day2HighTemp = document.querySelector("#day2-high");
  day2HighTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[1].temp.max * 9) / 5 + 32
  )}°`;
  let day3HighTemp = document.querySelector("#day3-high");
  day3HighTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[2].temp.max * 9) / 5 + 32
  )}°`;
  let day4HighTemp = document.querySelector("#day4-high");
  day4HighTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[3].temp.max * 9) / 5 + 32
  )}°`;
  let day5HighTemp = document.querySelector("#day5-high");
  day5HighTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[4].temp.max * 9) / 5 + 32
  )}°`;

  let day1LowTemp = document.querySelector("#day1-low");
  day1LowTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[0].temp.min * 9) / 5 + 32
  )}°`;
  let day2LowTemp = document.querySelector("#day2-low");
  day2LowTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[1].temp.min * 9) / 5 + 32
  )}°`;
  let day3LowTemp = document.querySelector("#day3-low");
  day3LowTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[2].temp.min * 9) / 5 + 32
  )}°`;
  let day4LowTemp = document.querySelector("#day4-low");
  day4LowTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[3].temp.min * 9) / 5 + 32
  )}°`;
  let day5LowTemp = document.querySelector("#day5-low");
  day5LowTemp.innerHTML = `${Math.round(
    (forecastTemps.data.daily[4].temp.min * 9) / 5 + 32
  )}°`;

  let feelsLikeTemp = document.querySelector(".feelsLikeValue");
  let fFeelsLikeValue = Math.round((feelsLikeValue * 9) / 5 + 32);
  feelsLikeTemp.innerHTML = `${fFeelsLikeValue}°`;

  let currentWind = document.querySelector(".windValue");
  currentWind.innerHTML = `${windSpeed} mph`;
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToF);

//Update location with current Geolocation, may need in future to abbreviate states
/* function getCurrentCity(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "0f381e023853e05653c74e1a82013505";
  let apiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`;
  axios.get(apiUrl).then(showCity);
  axios.get(apiUrl).then(showState);
}

function showCity(response) {
  let cityName = response.data[0].name;
  let currentLocationCity = document.querySelector("#current-city");
  currentLocationCity.innerHTML = `${cityName}, `;
}

function showState(response) {
  let stateName = response.data[0].country;
  let currentLocationState = document.querySelector("#current-state");
  currentLocationState.innerHTML = `${stateName}`;
} */
//
//
//...
//Update location and weather based on current position
//...
function getCurrentWeather(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "0f381e023853e05653c74e1a82013505";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showLocation);
  axios.get(apiUrl).then(showWeatherDescription);
  axios.get(apiUrl).then(showWeatherTemp);
  axios.get(apiUrl).then(showWeatherHumidityValue);
  axios.get(apiUrl).then(showWind);
  axios.get(apiUrl).then(showFeelsLike);
  axios.get(apiUrl).then(showIcon);
  axios.get(apiUrl).then(getForecast);
  axios.get(apiUrl).then(getUVindex);
}

function showLocation(response) {
  let locationCity = document.querySelector("#current-city");
  locationCity.innerHTML = response.data.name;
  let locationCountry = document.querySelector("#current-state");
  locationCountry.innerHTML = `, ${response.data.sys.country}`;
}

function showWeatherDescription(response) {
  let currentWeatherDescription = document.querySelector("#current-weather");
  currentWeatherDescription.innerHTML = response.data.weather[0].main;
}

function showWeatherTemp(response) {
  let currentWeatherTemp = document.querySelector("#current-temp");
  currentWeatherTemp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  globalThis.tempValue = Math.round(response.data.main.temp);
}

function showWeatherHumidityValue(response) {
  let currentWeatherHumidityValue = document.querySelector(
    "#current-humidity-value"
  );
  currentWeatherHumidityValue.innerHTML = `${response.data.main.humidity}%`;
}

function showWind(response) {
  globalThis.windSpeed = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector(".windValue");
  currentWind.innerHTML = `${Math.round(response.data.wind.speed)} mph`;
}

function showFeelsLike(response) {
  let feelsLike = document.querySelector(".feelsLikeValue");
  let temp = response.data.main.feels_like;
  temp = Math.round(temp);
  feelsLike.innerHTML = `${temp}°`;
  globalThis.feelsLikeValue = temp;
}

function showIcon(response) {
  let currentIcon = document.querySelector("#icon-1");
  let alt = response.data.weather[0].description;
  currentIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  currentIcon.setAttribute("alt", `${response.data.weather[0].description}`);
}

//forecast...//
function getForecast(response) {
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let apiKey = `b95f179627c8dd37f41e1be6e3250e19`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
}

function showForecast(response) {
  globalThis.forecastTemps = response;
  let forecastElement1 = document.querySelector(".day1");
  let forecastElement2 = document.querySelector(".day2");
  let forecastElement3 = document.querySelector(".day3");
  let forecastElement4 = document.querySelector(".day4");
  let forecastElement5 = document.querySelector(".day5");
  let forecast1 = response.data.daily[1];
  let forecast2 = response.data.daily[2];
  let forecast3 = response.data.daily[3];
  let forecast4 = response.data.daily[4];
  let forecast5 = response.data.daily[5];

  let forecastHTML1 = `
    <p class="weatherIcon" id="day1-icon"><img id="icon-1" src="http://openweathermap.org/img/wn/${
      forecast1.weather[0].icon
    }@2x.png" alt="#" /></p>
          <p class="forecastDay" id="day1-day">${formatDay(forecast1.dt)}</p>
          <p class="forecastDate" id="day1-date">${formatDate(forecast1.dt)}</p>
          <p><span class="forecastHigh temperature" id="day1-high">${Math.round(
            forecast1.temp.max
          )}°</span> | <span class="forecastLow temperature" id="day1-low">${Math.round(
    forecast1.temp.min
  )}°</span></p>
    `;
  let forecastHTML2 = `
    <p class="weatherIcon" id="day2-icon"><img id="icon-2" src="http://openweathermap.org/img/wn/${
      forecast2.weather[0].icon
    }@2x.png" alt="#" /></p>
          <p class="forecastDay" id="day2-day">${formatDay(forecast2.dt)}</p>
          <p class="forecastDate" id="day2-date">${formatDate(forecast2.dt)}</p>
          <p><span class="forecastHigh temperature" id="day2-high">${Math.round(
            forecast2.temp.max
          )}°</span> | <span class="forecastLow temperature" id="day2-low">${Math.round(
    forecast2.temp.min
  )}°</span></p>
    `;
  let forecastHTML3 = `
    <p class="weatherIcon" id="day3-icon"><img id="icon-3" src="http://openweathermap.org/img/wn/${
      forecast3.weather[0].icon
    }@2x.png" alt="#" /></p>
          <p class="forecastDay" id="day3-day">${formatDay(forecast3.dt)}</p>
          <p class="forecastDate" id="day3-date">${formatDate(forecast3.dt)}</p>
          <p><span class="forecastHigh temperature" id="day3-high">${Math.round(
            forecast3.temp.max
          )}°</span> | <span class="forecastLow temperature" id="day3-low">${Math.round(
    forecast3.temp.min
  )}°</span></p>
    `;
  let forecastHTML4 = `
    <p class="weatherIcon" id="day4-icon"><img id="icon-4" src="http://openweathermap.org/img/wn/${
      forecast4.weather[0].icon
    }@2x.png" alt="#" /></p>
          <p class="forecastDay" id="day4-day">${formatDay(forecast4.dt)}</p>
          <p class="forecastDate" id="day4-date">${formatDate(forecast4.dt)}</p>
          <p><span class="forecastHigh temperature" id="day4-high">${Math.round(
            forecast4.temp.max
          )}°</span> | <span class="forecastLow temperature" id="day4-low">${Math.round(
    forecast4.temp.min
  )}°</span></p>
    `;
  let forecastHTML5 = `
    <p class="weatherIcon" id="day5-icon"><img id="icon-5" src="http://openweathermap.org/img/wn/${
      forecast5.weather[0].icon
    }@2x.png" alt="#" /></p>
          <p class="forecastDay" id="day5-day">${formatDay(forecast5.dt)}</p>
          <p class="forecastDate" id="day5-date">${formatDate(forecast5.dt)}</p>
          <p><span class="forecastHigh temperature" id="day5-high">${Math.round(
            forecast5.temp.max
          )}°</span> | <span class="forecastLow temperature" id="day5-low">${Math.round(
    forecast5.temp.min
  )}°</span></p>
    `;
  forecastElement1.innerHTML = forecastHTML1;
  forecastElement2.innerHTML = forecastHTML2;
  forecastElement3.innerHTML = forecastHTML3;
  forecastElement4.innerHTML = forecastHTML4;
  forecastElement5.innerHTML = forecastHTML5;
}

//formatting of dates
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function formatDate(timestamp) {
  let newDate = new Date(timestamp * 1000);
  let date = newDate.getDay();
  let month = months[newDate.getMonth()];
  month = month.substring(0, 3);
  return `${month} ${date}`;
}
//event listener
function getCurrentPosition() {
  //navigator.geolocation.getCurrentPosition(getCurrentCity);
  navigator.geolocation.getCurrentPosition(getCurrentWeather);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentPosition);
//
//
//...
//Search engine
//...
function getSearchPosition() {
  let city = document.querySelector("#city-submit").value;
  let apiKey = "0f381e023853e05653c74e1a82013505";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  showLocation(response);
  showWeatherDescription(response);
  showWeatherTemp(response);
  showWeatherHumidityValue(response);
  showWind(response);
  showFeelsLike(response);
  showIcon(response);
  clearSearch();
  getForecast(response);
  getUVindex(response);
}

function clearSearch() {
  let formInput = document.getElementById(`city-submit`);
  formInput.value = ``;
}

let startSearch = document.querySelector("form");
startSearch.addEventListener("submit", getSearchPosition);

//
//
//...UV Index
function getUVindex(response) {
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let apiKey = `b95f179627c8dd37f41e1be6e3250e19`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showUVindex);
}

function showUVindex(response) {
  console.log(response);
  let currentUVI = document.querySelector(".uvIndex");
  console.log(currentUVI);
  let UVIvalue = response.data.current.uvi;
  console.log(UVIvalue);
  if (UVIvalue >= 11) {
    currentUVI.innerHTML = `<li class="container uvIndex UVIextreme">
              UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
            </li>`;
  } else if (UVIvalue >= 8 && UVIvalue < 11) {
    currentUVI.innerHTML = `<li class="container uvIndex UVIveryHigh">
              UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
            </li>`;
  } else if (UVIvalue >= 6 && UVIvalue < 8) {
    currentUVI.innerHTML = `<li class="container uvIndex UVIhigh">
              UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
            </li>`;
  } else if (UVIvalue >= 3 && UVIvalue < 6) {
    currentUVI.innerHTML = `<li class="container uvIndex UVImoderate">
              UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
            </li>`;
  } else {
    currentUVI.innerHTML = `<li class="container uvIndex UVIlow">
              UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
            </li>`;
  }
  console.log(currentUVI);
}

//
//
