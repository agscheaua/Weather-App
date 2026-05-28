export {searchForWeatherData};

const location = document.getElementById("location");
const searchButton = document.querySelector(".searchButton");

// fetch the data for a specific city and return an obj with that data;

const getLocationWeatherData = async function(location) {
  try {
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline?location=${String(location)}&key=7EW6WCRF34MYYV77KCDY42979&unitGroup=metric&iconSet=icons1`);
    const requestResponseParsedToObj = await request.json();
    console.log(requestResponseParsedToObj);
    return requestResponseParsedToObj;
  } catch(error) {
    console.log(error);
    console.log("getLocationWeatherData, problem");
  };
};

// triggres the action to fetch data;

function searchForWeatherData() {
  searchButton.addEventListener("click", async (eve) => {
    eve.preventDefault();
    if (location.validity.valueMissing) {
      location.value = "Please input the city name, and the country code."
    } else {
      getLocationWeatherData(location.value);
    };
  });
};