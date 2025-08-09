// Replace with your actual OpenWeatherMap API key
const apiKey = '2099854e1d2dac361677dddccf43ed79';
const city = 'Ibadan'; // or any city you want to display

async function fetchWeather() {
  const weatherContainer = document.getElementById('weather-info');

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Weather data fetch failed.');
    }

    const data = await response.json();

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    weatherContainer.innerHTML = `
      <p><strong>${city}</strong>: ${temperature}°C, ${description}</p>
      <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}" />
    `;
  } catch (error) {
    console.error('Error fetching weather:', error);
    weatherContainer.innerHTML = '<p>Weather data not available at the moment.</p>';
  }
}

// Call function on page load
window.addEventListener('DOMContentLoaded', fetchWeather);
