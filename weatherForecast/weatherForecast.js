const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
}

// Get references to HTML elements used for user input, output, and error display
const postcodeInput = document.getElementById("postcodeInput");
const showButton = document.getElementById("showButton");
const weatherDiv = document.getElementById("weatherDiv");
const locationSpan = document.getElementById("locationSpan");
const descriptionSpan = document.getElementById("descriptionSpan");
const temperatureSpan = document.getElementById("temperatureSpan");
const errorDiv = document.getElementById("errorDiv");
const postcodeSpan = document.getElementById("postcodeSpan");

// Current day min and max temperatures
const minTemperatureSpan = document.getElementById("minTemperatureSpan");
const maxTemperatureSpan = document.getElementById("maxTemperatureSpan");

// Forecast spans for days 2 to 7
const descriptionSpan2 = document.getElementById("descriptionSpan2");
const dateSpan2 = document.getElementById("dateSpan2");
const minTemperatureSpan2 = document.getElementById("minTemperatureSpan2");
const maxTemperatureSpan2 = document.getElementById("maxTemperatureSpan2");

const descriptionSpan3 = document.getElementById("descriptionSpan3");
const dateSpan3 = document.getElementById("dateSpan3");
const minTemperatureSpan3 = document.getElementById("minTemperatureSpan3");
const maxTemperatureSpan3 = document.getElementById("maxTemperatureSpan3");

const descriptionSpan4 = document.getElementById("descriptionSpan4");
const dateSpan4 = document.getElementById("dateSpan4");
const minTemperatureSpan4 = document.getElementById("minTemperatureSpan4");
const maxTemperatureSpan4 = document.getElementById("maxTemperatureSpan4");

const descriptionSpan5 = document.getElementById("descriptionSpan5");
const dateSpan5 = document.getElementById("dateSpan5");
const minTemperatureSpan5 = document.getElementById("minTemperatureSpan5");
const maxTemperatureSpan5 = document.getElementById("maxTemperatureSpan5");

const descriptionSpan6 = document.getElementById("descriptionSpan6");
const dateSpan6 = document.getElementById("dateSpan6");
const minTemperatureSpan6 = document.getElementById("minTemperatureSpan6");
const maxTemperatureSpan6 = document.getElementById("maxTemperatureSpan6");

const descriptionSpan7 = document.getElementById("descriptionSpan7");
const dateSpan7 = document.getElementById("dateSpan7");
const minTemperatureSpan7 = document.getElementById("minTemperatureSpan7");
const maxTemperatureSpan7 = document.getElementById("maxTemperatureSpan7");

const forecastIntro = document.getElementById("forecastIntro");

// Icons for current and forecasted weather
const currentWeatherIcon = document.getElementById('currentWeatherIcon');
const day2Icon = document.getElementById('day2Icon');
const day3Icon = document.getElementById('day3Icon');
const day4Icon = document.getElementById('day4Icon');
const day5Icon = document.getElementById('day5Icon');
const day6Icon = document.getElementById('day6Icon');
const day7Icon = document.getElementById('day7Icon');

/**
 * Fetch location (area) data using postcode
 * Uses postcodes.io API to convert postcode to latitude/longitude
 */
async function getAreaDataForPostcode(postcode) {
    const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    const areaData = await response.json();
    return areaData["result"]; // Returns area details (including lat/lng)
}

/**
 * Fetch weather forecast and current weather using latitude/longitude
 * Uses Open-Meteo API
 */
async function getWeatherDataForLocation(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=Europe%2FLondon`);
    const weatherData = await response.json();
    return weatherData;
}

/**
 * Main function to fetch and display weather data for the entered postcode
 */
async function showWeather() {
    const postcode = postcodeInput.value;

    // Proceed only if postcode input is not empty
    if (postcode) {
        try {
            // Get area info from postcode
            const areaData = await getAreaDataForPostcode(postcode);

            // Display location name
            locationSpan.textContent = areaData["admin_district"];

            // Get weather using the area’s coordinates
            const weatherData = await getWeatherDataForLocation(areaData["latitude"], areaData["longitude"]);

            // Show current weather
            descriptionSpan.textContent = weatherCodes[weatherData["current_weather"]["weathercode"]];
            temperatureSpan.textContent = weatherData["current_weather"]["temperature"];
            minTemperatureSpan.textContent = weatherData["daily"]["temperature_2m_min"][0];
            maxTemperatureSpan.textContent = weatherData["daily"]["temperature_2m_max"][0];

            // Show 6-day forecast (Day 2 to Day 7)
            dateSpan2.textContent = weatherData["daily"]["time"][1];
            descriptionSpan2.textContent = weatherCodes[weatherData["daily"]["weathercode"][1]];
            minTemperatureSpan2.textContent = weatherData["daily"]["temperature_2m_min"][1];
            maxTemperatureSpan2.textContent = weatherData["daily"]["temperature_2m_max"][1];

            dateSpan3.textContent = weatherData["daily"]["time"][2];
            descriptionSpan3.textContent = weatherCodes[weatherData["daily"]["weathercode"][2]];
            minTemperatureSpan3.textContent = weatherData["daily"]["temperature_2m_min"][2];
            maxTemperatureSpan3.textContent = weatherData["daily"]["temperature_2m_max"][2];

            dateSpan4.textContent = weatherData["daily"]["time"][3];
            descriptionSpan4.textContent = weatherCodes[weatherData["daily"]["weathercode"][3]];
            minTemperatureSpan4.textContent = weatherData["daily"]["temperature_2m_min"][3];
            maxTemperatureSpan4.textContent = weatherData["daily"]["temperature_2m_max"][3];

            dateSpan5.textContent = weatherData["daily"]["time"][4];
            descriptionSpan5.textContent = weatherCodes[weatherData["daily"]["weathercode"][4]];
            minTemperatureSpan5.textContent = weatherData["daily"]["temperature_2m_min"][4];
            maxTemperatureSpan5.textContent = weatherData["daily"]["temperature_2m_max"][4];

            dateSpan6.textContent = weatherData["daily"]["time"][5];
            descriptionSpan6.textContent = weatherCodes[weatherData["daily"]["weathercode"][5]];
            minTemperatureSpan6.textContent = weatherData["daily"]["temperature_2m_min"][5];
            maxTemperatureSpan6.textContent = weatherData["daily"]["temperature_2m_max"][5];

            dateSpan7.textContent = weatherData["daily"]["time"][6];
            descriptionSpan7.textContent = weatherCodes[weatherData["daily"]["weathercode"][6]];
            minTemperatureSpan7.textContent = weatherData["daily"]["temperature_2m_min"][6];
            maxTemperatureSpan7.textContent = weatherData["daily"]["temperature_2m_max"][6];

            // Example: If day 2 is "Clear sky", show sunny icon (add more conditions if needed)
            if (weatherCodes[weatherData["daily"]["weathercode"][1]] === 'Clear sky') {
                day2Icon.src = './weatherIcons/sunny-clear.png';
            }

            // Show all relevant sections and hide error
            errorDiv.hidden = true;
            weatherDiv.hidden = false;
            day2.hidden = false;
            day3.hidden = false;
            day4.hidden = false;
            day5.hidden = false;
            day6.hidden = false;
            day7.hidden = false;
            forecastIntro.hidden = false;

        } catch {
            // Handle invalid postcode or API failure
            postcodeSpan.textContent = postcode;
            weatherDiv.hidden = true;
            day2.hidden = true;
            day3.hidden = true;
            day4.hidden = true;
            day5.hidden = true;
            day6.hidden = true;
            day7.hidden = true;
            forecastIntro.hidden = true;
            errorDiv.hidden = false;
        }

    } else {
        // If postcode is empty, hide all weather data and error message
        weatherDiv.hidden = true;
        errorDiv.hidden = true;
        day2.hidden = true;
        day3.hidden = true;
        day4.hidden = true;
        day5.hidden = true;
        day6.hidden = true;
        day7.hidden = true;
        forecastIntro.hidden = true;
    }
}

if (descriptionSpan.textContent === 'Clear sky') {
    currentWeatherIcon.src = './weatherIcons/sunny-clear.png'
} else if (descriptionSpan.textContent === 'Mainly clear') {
    currentWeatherIcon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan.textContent === 'Partly cloudy') {
    currentWeatherIcon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan.textContent === 'Overcast') {
    currentWeatherIcon.src = './weatherIcons/overcast.png'
} else if (descriptionSpan.textContent === 'Fog') {
    currentWeatherIcon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan.textContent === 'Depositing rime fog') {
    currentWeatherIcon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan.textContent === 'Light drizzle') {
    currentWeatherIcon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan.textContent === 'Moderate drizzle') {
    currentWeatherIcon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan.textContent === 'Dense drizzle') {
    currentWeatherIcon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan.textContent === 'Light freezing drizzle') {
    currentWeatherIcon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan.textContent === 'Dense freezing drizzle') {
    currentWeatherIcon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan.textContent === 'Light rain') {
    currentWeatherIcon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan.textContent === 'Light freezing rain') {
    currentWeatherIcon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan.textContent === 'Slight rain showers') {
    currentWeatherIcon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan.textContent === 'Moderate rain') {
    currentWeatherIcon.src = './weatherIcons/rain.png'
} else if (descriptionSpan.textContent === 'Moderate rain showers') {
    currentWeatherIcon.src = './weatherIcons/rain.png'
} else if (descriptionSpan.textContent === 'Heavy rain') {
    currentWeatherIcon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan.textContent === 'Violent rain showers') {
    currentWeatherIcon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan.textContent === 'Heavy freezing rain') {
    currentWeatherIcon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan.textContent === 'Slight snow fall') {
    currentWeatherIcon.src = './weatherIcons/snow.png'
} else if (descriptionSpan.textContent === 'Snow grains') {
    currentWeatherIcon.src = './weatherIcons/snow.png'
} else if (descriptionSpan.textContent === 'Slight snow showers') {
    currentWeatherIcon.src = './weatherIcons/snow.png'
} else if (descriptionSpan.textContent === 'Heavy snow showers') {
    currentWeatherIcon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan.textContent === 'Moderate snow fall') {
    currentWeatherIcon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan.textContent === 'Heavy snow fall') {
    currentWeatherIcon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan.textContent === 'Thunderstorms') {
    currentWeatherIcon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan.textContent === 'Thunderstorms with slight hail') {
    currentWeatherIcon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan.textContent === 'Thunderstorms with heavy hail') {
    currentWeatherIcon.src = './weatherIcons/thunder.png'
};

if (descriptionSpan2.textContent === 'Clear sky') {
    day2Icon.src = './weatherIcons/sunny-clear.png'
} else if (descriptionSpan2.textContent === 'Mainly clear') {
    day2Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan2.textContent === 'Partly cloudy') {
    day2Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan2.textContent === 'Overcast') {
    day2Icon.src = './weatherIcons/overcast.png'
} else if (descriptionSpan2.textContent === 'Fog') {
    day2Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan2.textContent === 'Depositing rime fog') {
    day2Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan2.textContent === 'Light drizzle') {
    day2Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan2.textContent === 'Moderate drizzle') {
    day2Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan2.textContent === 'Dense drizzle') {
    day2Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan2.textContent === 'Light freezing drizzle') {
    day2Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan2.textContent === 'Dense freezing drizzle') {
    day2Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan2.textContent === 'Light rain') {
    day2Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan2.textContent === 'Light freezing rain') {
    day2Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan2.textContent === 'Slight rain showers') {
    day2Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan2.textContent === 'Moderate rain') {
    day2Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan2.textContent === 'Moderate rain showers') {
    day2Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan2.textContent === 'Heavy rain') {
    day2Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan2.textContent === 'Violent rain showers') {
    day2Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan2.textContent === 'Heavy freezing rain') {
    day2Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan2.textContent === 'Slight snow fall') {
    day2Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan2.textContent === 'Snow grains') {
    day2Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan2.textContent === 'Slight snow showers') {
    day2Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan2.textContent === 'Heavy snow showers') {
    day2Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan2.textContent === 'Moderate snow fall') {
    day2Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan2.textContent === 'Heavy snow fall') {
    day2Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan2.textContent === 'Thunderstorm') {
    day2Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan2.textContent === 'Thunderstorm with slight hail') {
    day2Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan2.textContent === 'Thunderstorm with heavy hail') {
    day2Icon.src = './weatherIcons/thunder.png'
};

if (descriptionSpan3.textContent === 'Clear sky') {
    day3Icon.src = './weatherIcons/sunny-clear.png'
} else if (descriptionSpan3.textContent === 'Mainly clear') {
    day3Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan3.textContent === 'Partly cloudy') {
    day3Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan3.textContent === 'Overcast') {
    day3Icon.src = './weatherIcons/overcast.png'
} else if (descriptionSpan3.textContent === 'Fog') {
    day3Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan3.textContent === 'Depositing rime fog') {
    day3Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan3.textContent === 'Light drizzle') {
    day3Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan3.textContent === 'Moderate drizzle') {
    day3Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan3.textContent === 'Dense drizzle') {
    day3Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan3.textContent === 'Light freezing drizzle') {
    day3Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan3.textContent === 'Dense freezing drizzle') {
    day3Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan3.textContent === 'Light rain') {
    day3Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan3.textContent === 'Light freezing rain') {
    day3Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan3.textContent === 'Slight rain showers') {
    day3Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan3.textContent === 'Moderate rain') {
    day3Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan3.textContent === 'Moderate rain showers') {
    day3Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan3.textContent === 'Heavy rain') {
    day3Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan3.textContent === 'Violent rain showers') {
    day3Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan3.textContent === 'Heavy freezing rain') {
    day3Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan3.textContent === 'Slight snow fall') {
    day3Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan3.textContent === 'Snow grains') {
    day3Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan3.textContent === 'Slight snow showers') {
    day3Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan3.textContent === 'Heavy snow showers') {
    day3Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan3.textContent === 'Moderate snow fall') {
    day3Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan3.textContent === 'Heavy snow fall') {
    day3Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan3.textContent === 'Thunderstorm') {
    day3Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan3.textContent === 'Thunderstorm with slight hail') {
    day3Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan3.textContent === 'Thunderstorm with heavy hail') {
    day3Icon.src = './weatherIcons/thunder.png'
};

if (descriptionSpan4.textContent === 'Clear sky') {
    day4Icon.src = './weatherIcons/sunny-clear.png'
} else if (descriptionSpan4.textContent === 'Mainly clear') {
    day4Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan4.textContent === 'Partly cloudy') {
    day4Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan4.textContent === 'Overcast') {
    day4Icon.src = './weatherIcons/overcast.png'
} else if (descriptionSpan4.textContent === 'Fog') {
    day4Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan4.textContent === 'Depositing rime fog') {
    day4Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan4.textContent === 'Light drizzle') {
    day4Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan4.textContent === 'Moderate drizzle') {
    day4Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan4.textContent === 'Dense drizzle') {
    day4Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan4.textContent === 'Light freezing drizzle') {
    day4Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan4.textContent === 'Dense freezing drizzle') {
    day4Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan4.textContent === 'Light rain') {
    day4Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan4.textContent === 'Light freezing rain') {
    day4Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan4.textContent === 'Slight rain showers') {
    day4Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan4.textContent === 'Moderate rain') {
    day4Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan4.textContent === 'Moderate rain showers') {
    day4Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan4.textContent === 'Heavy rain') {
    day4Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan4.textContent === 'Violent rain showers') {
    day4Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan4.textContent === 'Heavy freezing rain') {
    day4Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan4.textContent === 'Slight snow fall') {
    day4Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan4.textContent === 'Snow grains') {
    day4Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan4.textContent === 'Slight snow showers') {
    day4Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan4.textContent === 'Heavy snow showers') {
    day4Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan4.textContent === 'Moderate snow fall') {
    day4Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan4.textContent === 'Heavy snow fall') {
    day4Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan4.textContent === 'Thunderstorm') {
    day4Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan4.textContent === 'Thunderstorm with slight hail') {
    day4Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan4.textContent === 'Thunderstorm with heavy hail') {
    day4Icon.src = './weatherIcons/thunder.png'
};

if (descriptionSpan5.textContent === 'Clear sky') {
    day5Icon.src = './weatherIcons/sunny-clear.png'
} else if (descriptionSpan5.textContent === 'Mainly clear') {
    day5Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan5.textContent === 'Partly cloudy') {
    day5Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan5.textContent === 'Overcast') {
    day5Icon.src = './weatherIcons/overcast.png'
} else if (descriptionSpan5.textContent === 'Fog') {
    day5Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan5.textContent === 'Depositing rime fog') {
    day5Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan5.textContent === 'Light drizzle') {
    day5Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan5.textContent === 'Moderate drizzle') {
    day5Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan5.textContent === 'Dense drizzle') {
    day5Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan5.textContent === 'Light freezing drizzle') {
    day5Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan5.textContent === 'Dense freezing drizzle') {
    day5Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan5.textContent === 'Light rain') {
    day5Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan5.textContent === 'Light freezing rain') {
    day5Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan5.textContent === 'Slight rain showers') {
    day5Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan5.textContent === 'Moderate rain') {
    day5Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan5.textContent === 'Moderate rain showers') {
    day5Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan5.textContent === 'Heavy rain') {
    day5Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan5.textContent === 'Violent rain showers') {
    day5Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan5.textContent === 'Heavy freezing rain') {
    day5Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan5.textContent === 'Slight snow fall') {
    day5Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan5.textContent === 'Snow grains') {
    day5Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan5.textContent === 'Slight snow showers') {
    day5Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan5.textContent === 'Heavy snow showers') {
    day5Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan5.textContent === 'Moderate snow fall') {
    day5Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan5.textContent === 'Heavy snow fall') {
    day5Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan5.textContent === 'Thunderstorm') {
    day5Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan5.textContent === 'Thunderstorm with slight hail') {
    day5Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan5.textContent === 'Thunderstorm with heavy hail') {
    day5Icon.src = './weatherIcons/thunder.png'
};

if (descriptionSpan6.textContent === 'Clear sky') {
    day6Icon.src = './weatherIcons/sunny-clear.png'
} else if (descriptionSpan6.textContent === 'Mainly clear') {
    day6Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan6.textContent === 'Partly cloudy') {
    day6Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan6.textContent === 'Overcast') {
    day6Icon.src = './weatherIcons/overcast.png'
} else if (descriptionSpan6.textContent === 'Fog') {
    day6Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan6.textContent === 'Depositing rime fog') {
    day6Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan6.textContent === 'Light drizzle') {
    day6Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan6.textContent === 'Moderate drizzle') {
    day6Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan6.textContent === 'Dense drizzle') {
    day6Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan6.textContent === 'Light freezing drizzle') {
    day6Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan6.textContent === 'Dense freezing drizzle') {
    day6Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan6.textContent === 'Light rain') {
    day6Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan6.textContent === 'Light freezing rain') {
    day6Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan6.textContent === 'Slight rain showers') {
    day6Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan6.textContent === 'Moderate rain') {
    day6Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan6.textContent === 'Moderate rain showers') {
    day6Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan6.textContent === 'Heavy rain') {
    day6Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan6.textContent === 'Violent rain showers') {
    day6Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan6.textContent === 'Heavy freezing rain') {
    day6Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan6.textContent === 'Slight snow fall') {
    day6Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan6.textContent === 'Snow grains') {
    day6Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan6.textContent === 'Slight snow showers') {
    day6Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan6.textContent === 'Heavy snow showers') {
    day6Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan6.textContent === 'Moderate snow fall') {
    day6Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan6.textContent === 'Heavy snow fall') {
    day6Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan6.textContent === 'Thunderstorm') {
    day6Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan6.textContent === 'Thunderstorm with slight hail') {
    day6Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan6.textContent === 'Thunderstorm with heavy hail') {
    day6Icon.src = './weatherIcons/thunder.png'
};

if (descriptionSpan7.textContent === 'Clear sky') {
    day7Icon.src = './weatherIcons/sunny-clear.png'
} else if (descriptionSpan7.textContent === 'Mainly clear') {
    day7Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan7.textContent === 'Partly cloudy') {
    day7Icon.src = './weatherIcons/partly-cloudy.png'
} else if (descriptionSpan7.textContent === 'Overcast') {
    day7Icon.src = './weatherIcons/overcast.png'
} else if (descriptionSpan7.textContent === 'Fog') {
    day7Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan7.textContent === 'Depositing rime fog') {
    day7Icon.src = './weatherIcons/foggy.png'
} else if (descriptionSpan7.textContent === 'Light drizzle') {
    day7Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan7.textContent === 'Moderate drizzle') {
    day7Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan7.textContent === 'Dense drizzle') {
    day7Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan7.textContent === 'Light freezing drizzle') {
    day7Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan7.textContent === 'Dense freezing drizzle') {
    day7Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan7.textContent === 'Light rain') {
    day7Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan7.textContent === 'Light freezing rain') {
    day7Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan7.textContent === 'Slight rain showers') {
    day7Icon.src = './weatherIcons/drizzle.png'
} else if (descriptionSpan7.textContent === 'Moderate rain') {
    day7Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan7.textContent === 'Moderate rain showers') {
    day7Icon.src = './weatherIcons/rain.png'
} else if (descriptionSpan7.textContent === 'Heavy rain') {
    day7Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan7.textContent === 'Violent rain showers') {
    day7Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan7.textContent === 'Heavy freezing rain') {
    day7Icon.src = './weatherIcons/sunny-sunny.png'
} else if (descriptionSpan7.textContent === 'Slight snow fall') {
    day7Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan7.textContent === 'Snow grains') {
    day7Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan7.textContent === 'Slight snow showers') {
    day7Icon.src = './weatherIcons/snow.png'
} else if (descriptionSpan7.textContent === 'Heavy snow showers') {
    day7Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan7.textContent === 'Moderate snow fall') {
    day7Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan7.textContent === 'Heavy snow fall') {
    day7Icon.src = './weatherIcons/heavy-snow.png'
} else if (descriptionSpan7.textContent === 'Thunderstorm') {
    day7Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan7.textContent === 'Thunderstorm with slight hail') {
    day7Icon.src = './weatherIcons/thunder.png'
} else if (descriptionSpan7.textContent === 'Thunderstorm with heavy hail') {
    day7Icon.src = './weatherIcons/thunder.png'
};

}

showButton.addEventListener("click", showWeather)