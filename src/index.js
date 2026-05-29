import './styles.css'
import { searchForWeatherData } from './queryLocation.js';
import { iconHolder } from './iconDayCondition.js';

searchForWeatherData();
const iconContainer = document.querySelector(".iconContainer");
iconContainer.innerHTML = iconHolder["clear-day"];