// id selectors
var search = $("#search");
var searchHistory = $("#search-history");
var searchBtn = $("#search-btn");
var clearBtn = $("#clear-btn");
var fiveDay = $("#five-day-forecast");
var city = $("#current-city");
var temp = $("#current-temp");
var humidity = $("#current-humidity");
var wind = $("current-wind-speed");
var uVIndex = $("uv-index");
var weatherContent = $("weather-content");

// global variables
var cityList = [];
var currentDate = new Date().toLocaleDateString();

const keyAPI = "d2486f6655ca72c6811146e45c3ac199";
