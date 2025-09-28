// Folder path for weather icons
const ICONS_FOLDER = './weatherIcons/';

// Days to update weather icons for
const days = [3, 4, 5, 6, 7];

// Store references to description and icon elements
const descriptions = days.map(day => document.getElementById(`description-day${day}`));
const icons = days.map(day => document.getElementById(`icon-day${day}`));

// Button to trigger weather update
const showButton = document.getElementById('show-weather-button');

/**
 * Returns the icon path for a given weather description.
 * @param {string} description - The weather description text.
 * @returns {string} - The relative path to the corresponding weather icon.
 */
function getIconSrc(description) {
  const iconMap = {
    'Clear sky': 'sunny-clear.png',
    'Mainly clear': 'partly-cloudy.png',
    'Partly cloudy': 'partly-cloudy.png',
    'Overcast': 'overcast.png',
    'Fog': 'foggy.png',
    'Depositing rime fog': 'foggy.png',
    'Light drizzle': 'drizzle.png',
    'Moderate drizzle': 'drizzle.png',
    'Dense drizzle': 'drizzle.png',
    'Light freezing drizzle': 'drizzle.png',
    'Dense freezing drizzle': 'drizzle.png',
    'Light rain': 'drizzle.png',
    'Light freezing rain': 'drizzle.png',
    'Slight rain showers': 'drizzle.png',
    'Moderate rain': 'rain.png',
    'Moderate rain showers': 'rain.png',
    'Heavy rain': 'sunny-sunny.png',
    'Violent rain showers': 'sunny-sunny.png',
    'Heavy freezing rain': 'sunny-sunny.png',
    'Slight snow fall': 'snow.png',
    'Snow grains': 'snow.png',
    'Slight snow showers': 'snow.png',
    'Heavy snow showers': 'heavy-snow.png',
    'Moderate snow fall': 'heavy-snow.png',
    'Heavy snow fall': 'heavy-snow.png',
    'Thunderstorm': 'thunder.png',
    'Thunderstorm with slight hail': 'thunder.png',
    'Thunderstorm with heavy hail': 'thunder.png'
  };

  // Return the matching icon filename or a default icon if description unknown
  return ICONS_FOLDER + (iconMap[description] || 'default.png');
}

/**
 * Updates the weather icons for each day based on their descriptions.
 */
function showWeather() {
  days.forEach((day, index) => {
    const descriptionText = descriptions[index]?.textContent || '';
    if (!descriptionText) {
      console.warn(`Missing description for day ${day}`);
      icons[index].src = ICONS_FOLDER + 'default.png';
      icons[index].alt = `No weather description available for day ${day}`;
      return;
    }
    icons[index].src = getIconSrc(descriptionText);
    icons[index].alt = `Weather icon for ${descriptionText}`;
  });
}

// Add event listener to update weather on button click
showButton.addEventListener('click', showWeather);
