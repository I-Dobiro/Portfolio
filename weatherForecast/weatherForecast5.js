// Select the button that triggers the weather update when clicked
const showButton = document.getElementById('show-weather-button'); 

// Select weather description spans for days 3 to 7
// These elements contain the weather description text like "Clear sky", "Fog", etc.
const descriptionSpan3 = document.getElementById('description-day3');
const descriptionSpan4 = document.getElementById('description-day4');
const descriptionSpan5 = document.getElementById('description-day5');
const descriptionSpan6 = document.getElementById('description-day6');
const descriptionSpan7 = document.getElementById('description-day7');

// Select the corresponding image elements for days 3 to 7
// These <img> tags will display the weather icon based on the description
const day3Icon = document.getElementById('icon-day3');
const day4Icon = document.getElementById('icon-day4');
const day5Icon = document.getElementById('icon-day5');
const day6Icon = document.getElementById('icon-day6');
const day7Icon = document.getElementById('icon-day7');


// Maps weather descriptions to corresponding icon file paths
function getIconSrc(description) {
  const iconMap = {
    'Clear sky': './weatherIcons/sunny-clear.png',
    'Mainly clear': './weatherIcons/partly-cloudy.png',
    'Partly cloudy': './weatherIcons/partly-cloudy.png',
    'Overcast': './weatherIcons/overcast.png',
    'Fog': './weatherIcons/foggy.png',
    'Depositing rime fog': './weatherIcons/foggy.png',
    'Light drizzle': './weatherIcons/drizzle.png',
    'Moderate drizzle': './weatherIcons/drizzle.png',
    'Dense drizzle': './weatherIcons/drizzle.png',
    'Light freezing drizzle': './weatherIcons/drizzle.png',
    'Dense freezing drizzle': './weatherIcons/drizzle.png',
    'Light rain': './weatherIcons/drizzle.png',
    'Light freezing rain': './weatherIcons/drizzle.png',
    'Slight rain showers': './weatherIcons/drizzle.png',
    'Moderate rain': './weatherIcons/rain.png',
    'Moderate rain showers': './weatherIcons/rain.png',
    // NOTE: Confirm these icons for heavy rain cases
    'Heavy rain': './weatherIcons/sunny-sunny.png',
    'Violent rain showers': './weatherIcons/sunny-sunny.png',
    'Heavy freezing rain': './weatherIcons/sunny-sunny.png',
    'Slight snow fall': './weatherIcons/snow.png',
    'Snow grains': './weatherIcons/snow.png',
    'Slight snow showers': './weatherIcons/snow.png',
    'Heavy snow showers': './weatherIcons/heavy-snow.png',
    'Moderate snow fall': './weatherIcons/heavy-snow.png',
    'Heavy snow fall': './weatherIcons/heavy-snow.png',
    'Thunderstorm': './weatherIcons/thunder.png',
    'Thunderstorm with slight hail': './weatherIcons/thunder.png',
    'Thunderstorm with heavy hail': './weatherIcons/thunder.png'
  };

  // Return the matching icon path or a default icon if description is unknown
  return iconMap[description] || './weatherIcons/default.png';
}

// Updates the icon image element based on the text content of the weather description span
function updateIcon(descriptionSpan, dayIcon) {
  dayIcon.src = getIconSrc(descriptionSpan.textContent);
}

// Main function that updates the weather icons for days 3 to 7 when called
function showWeather() {
  // Update weather icons for each day by passing the respective description element and icon image element
  updateIcon(descriptionSpan3, day3Icon);
  updateIcon(descriptionSpan4, day4Icon);
  updateIcon(descriptionSpan5, day5Icon);
  updateIcon(descriptionSpan6, day6Icon);
  updateIcon(descriptionSpan7, day7Icon);

  // Add additional weather update code here (e.g., temperatures, conditions)
}

// Event listener to trigger the weather update when the show button is clicked
showButton.addEventListener("click", showWeather);
