import {changeTheIcon, changeTemperature, changeDescription, changeFutureDays} 
  from "./domControl.js";

export {getWeatherData};
export {createInitialContent};

const location = document.getElementById('location');
const searchButton = document.querySelector('.searchButton');

// fetch the weather data for a specific city and return an obj 
// containing the requested data;
async function getLocationWeatherData(location) {
  const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline?location=${String(location)}&key=7EW6WCRF34MYYV77KCDY42979&unitGroup=metric&iconSet=icons1`);
  const requestResponseParsedToObj = await request.json();
  if (requestResponseParsedToObj) {
    return requestResponseParsedToObj;
  } else {
    console.log('getLocationWeatherData, problem');
  };
};

// triggres the action to fetch the data when we press the search button;
async function getWeatherData() {
  searchButton.addEventListener("click", async (eve) => {
    eve.preventDefault();
    if (location.validity.valueMissing) {
      console.log("empty input");
    } else {
      const resultSearchWeather = await getLocationWeatherData(location.value);
      location.value = "";
      console.log(resultSearchWeather);

      changeTheIcon(resultSearchWeather);
      changeTemperature(resultSearchWeather);
      changeDescription(resultSearchWeather);
      changeFutureDays(resultSearchWeather);

    };
  });
};

async function createInitialContent() {
  const resultSearchWeather = await getLocationWeatherData("London, UK");

  changeTheIcon(resultSearchWeather);
  changeTemperature(resultSearchWeather);
  changeDescription(resultSearchWeather);
  changeFutureDays(resultSearchWeather);
}