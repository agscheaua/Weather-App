export {changeTheIcon};
export {changeTemperature};
export {changeDescription};
export {changeFutureDays};

import {iconHolder} from './iconDayCondition.js';

// change icon after every request;
const iconContainer = document.querySelector('.iconContainer');
function changeTheIcon(responseFetchParsed) {
  iconContainer.innerHTML =
    (iconHolder[responseFetchParsed.currentConditions.icon]);
};

// change temperature after every request;
const temperatureDay = document.querySelector(".temperatureDay");
function changeTemperature(responseFetchParsed) {
  temperatureDay.textContent =
    Math.round(responseFetchParsed.currentConditions.temp) + "°C";
};

//change description after every request;
const currentConditions = document.querySelector(".currentConditions");
function changeDescription(responseFetchParsed) {
  const currentTimeProcnosis =
    responseFetchParsed.currentConditions.datetime.slice(0, 5);
  currentConditions.textContent =
    responseFetchParsed.currentConditions.conditions + " in " +
    responseFetchParsed.address + " at " +
    currentTimeProcnosis;
};

//change the rows for the future weather procnosis;
const futureInfo = document.querySelectorAll(".futureInfo");
function changeFutureDays(responseFetchParsed) {
  let dayNr = 0;
  futureInfo.forEach((elem) => {
    let childrenNr = 0;
    elem.children[childrenNr].textContent =
      responseFetchParsed.days[dayNr].datetime;
    childrenNr++;
    elem.children[childrenNr].textContent =
      responseFetchParsed.days[dayNr].description;
    childrenNr++;
    elem.children[childrenNr].textContent =
      responseFetchParsed.days[dayNr].precipprob + " %";
    childrenNr++;
    elem.children[childrenNr].innerHTML =
      iconHolder[responseFetchParsed.days[dayNr].icon];
    childrenNr++;
    elem.children[childrenNr].textContent =
      Math.round(responseFetchParsed.days[dayNr].tempmax) + "°C";
    childrenNr++;
    elem.children[childrenNr].textContent =
      Math.round(responseFetchParsed.days[dayNr].tempmin) + "°C";
    dayNr++
  });
};
