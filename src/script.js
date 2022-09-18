//Updates location and clears form
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();
  // let currentLocation = document.querySelector("#current-city");
  // let newCity = document.querySelector("#city-submit").value;
  // currentLocation.innerHTML = `${newCity}`;
});

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

//Switches from C to F
function convertToC(event) {
  event.preventDefault();
  //convert today's temp
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = "19°";
  //convert forecast temps
  let day1HighTemp = document.querySelector("#day1-high");
  day1HighTemp.innerHTML = "11°";
  let day2HighTemp = document.querySelector("#day2-high");
  day2HighTemp.innerHTML = "13°";
  let day3HighTemp = document.querySelector("#day3-high");
  day3HighTemp.innerHTML = "17°";
  let day4HighTemp = document.querySelector("#day4-high");
  day4HighTemp.innerHTML = "14°";
  let day5HighTemp = document.querySelector("#day5-high");
  day5HighTemp.innerHTML = "12°";

  let day1LowTemp = document.querySelector("#day1-low");
  day1LowTemp.innerHTML = "9°";
  let day2LowTemp = document.querySelector("#day2-low");
  day2LowTemp.innerHTML = "10°";
  let day3LowTemp = document.querySelector("#day3-low");
  day3LowTemp.innerHTML = "13°";
  let day4LowTemp = document.querySelector("#day4-low");
  day4LowTemp.innerHTML = "11°";
  let day5LowTemp = document.querySelector("#day5-low");
  day5LowTemp.innerHTML = "9°";
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToC);

//Swithces from F to C
function convertToF(event) {
  event.preventDefault();
  //convert today's temp
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = "66°";
  //convert forecast temps
  let day1HighTemp = document.querySelector("#day1-high");
  day1HighTemp.innerHTML = "52°";
  let day2HighTemp = document.querySelector("#day2-high");
  day2HighTemp.innerHTML = "55°";
  let day3HighTemp = document.querySelector("#day3-high");
  day3HighTemp.innerHTML = "63°";
  let day4HighTemp = document.querySelector("#day4-high");
  day4HighTemp.innerHTML = "57°";
  let day5HighTemp = document.querySelector("#day5-high");
  day5HighTemp.innerHTML = "54°";

  let day1LowTemp = document.querySelector("#day1-low");
  day1LowTemp.innerHTML = "48°";
  let day2LowTemp = document.querySelector("#day2-low");
  day2LowTemp.innerHTML = "50°";
  let day3LowTemp = document.querySelector("#day3-low");
  day3LowTemp.innerHTML = "55°";
  let day4LowTemp = document.querySelector("#day4-low");
  day4LowTemp.innerHTML = "52°";
  let day5LowTemp = document.querySelector("#day5-low");
  day5LowTemp.innerHTML = "48°";
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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(showLocation);
  axios.get(apiUrl).then(showWeatherDescription);
  axios.get(apiUrl).then(showWeatherTemp);
  axios.get(apiUrl).then(showWeatherHumidityValue);
  axios.get(apiUrl).then(showWind);
  axios.get(apiUrl).then(showFeelsLike);
  axios.get(apiUrl).then(showIcon);
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
  currentWeatherTemp.innerHTML = response.data.main.temp;
}

function showWeatherHumidityValue(response) {
  let currentWeatherHumidityValue = document.querySelector(
    "#current-humidity-value"
  );
  currentWeatherHumidityValue.innerHTML = `${response.data.main.humidity}%`;
}

function showWind(response) {
  let currentWind = document.querySelector(".windValue");
  currentWind.innerHTML = `${Math.round(response.data.wind.speed)} mph`;
}

function showFeelsLike(response) {
  let feelsLike = document.querySelector(".feelsLikeValue");
  let temp = response.data.main.feels_like;
  temp = Math.round(temp);
  feelsLike.innerHTML = `${temp}°`;
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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
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
//
//
