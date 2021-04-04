// api key c196ad55d52e01763f287132970c4400

const form = document.getElementById("form");
const city = document.getElementById("city");
const currentDay = document.getElementById("current_day");
const temp = document.getElementById("temp");
const visibility = document.getElementById("visibility");
const minMaxTemp = document.getElementById("min_max_temp");

const getWeather = async (cityName) => {
  const apiKey = "c196ad55d52e01763f287132970c4400"; // api key
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`; //api url
  const response = await fetch(url); // fetching the data
  const data = await response.json(); // parsing all the data

  // Today's day and date
  var date = new Date();
  var months = [
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
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var current_day = days[date.getDay()];
  var current_month = months[date.getMonth()];

  // city name and country
  const span1 = document.createElement("span");
  span1.innerText = data.name + ", " + data.sys.country;
  city.append(span1);

  // Current Day and Date
  const span2 = document.createElement("span");
  span2.innerText =
    current_day +
    ", " +
    current_month +
    " " +
    date.getDate() +
    " " +
    date.getFullYear();
  currentDay.append(span2);

  // Main Temperature
  const span3 = document.createElement("span");
  span3.innerText = data.main.temp + "°C";
  temp.append(span3);

  // Visibility
  const span4 = document.createElement("span");
  span4.innerText = data.weather[0].description;
  visibility.append(span4);

  // Min/Max Temperature
  const span5 = document.createElement("span");
  span5.innerText = data.main.temp_min + "°C / " + data.main.temp_max + "°C";
  minMaxTemp.append(span5);

  $('input[type="text"]').keypress("click", function () {
    $("span").remove();
  });
};

form.addEventListener("submit", (e) => {
  const cityName = form.elements[0].value;
  if (cityName) {
    getWeather(cityName);
  } else {
    alert("Type a valid city name first and try then!");
  }

  form.elements[0].value = "";
  e.preventDefault();
});
