//export { searchForWeatherData }

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

// triggres the action to fetch data when we press the search button;
/*
let requestedWeatherData;
async function searchForWeatherData() {
  searchButton.addEventListener('click', async (eve) => {
    eve.preventDefault();
    if (location.validity.valueMissing) {
      console.log('No location.');
    } else {
      requestedWeatherData = await getLocationWeatherData(location.value);
      console.log(requestedWeatherData);
    };
  });
};
*/

async function test1() {
  let requestedWeatherData;
  searchButton.addEventListener("click", async (eve) => {
    eve.preventDefault();
    requestedWeatherData = await getLocationWeatherData(location.value);
    return requestedWeatherData;
  });
  return requestedWeatherData;
}; 
test1();

function change() {
  searchButton.addEventListener("click", async (eve) => {
    eve.preventDefault();
    const alex1 = await test1()
    console.log(alex1);
    location.value = alex1;
  });
};
change();