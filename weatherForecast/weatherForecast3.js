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
    'Heavy rain': './weatherIcons/sunny-sunny.png',  // double-check this if correct
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

  return iconMap[description] || './weatherIcons/default.png';
}

function updateIcon(descriptionSpan, dayIcon) {
  dayIcon.src = getIconSrc(descriptionSpan.textContent);
}

function showWeather() {
  // Assuming descriptionSpan3, descriptionSpan4, etc. and day3Icon, day4Icon etc. are already defined

  updateIcon(descriptionSpan3, day3Icon);
  updateIcon(descriptionSpan4, day4Icon);
  updateIcon(descriptionSpan5, day5Icon);
  updateIcon(descriptionSpan6, day6Icon);
  updateIcon(descriptionSpan7, day7Icon);

  // Put here any other weather update logic you have for showing temperature, text, etc.
}

showButton.addEventListener("click", showWeather);

