
export {getLocationWeatherData};

const location = document.getElementById("location");
const searchButton = document.querySelector("searchButton");

const getLocationWeatherData = async function(location, country) {
  try {
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location,country}?key=7EW6WCRF34MYYV77KCDY42979`);
    const requestResponseParsedToObj = await request.json();
    console.log(requestResponseParsedToObj);
  } catch(error) {
    console.log(error);
  }
};
