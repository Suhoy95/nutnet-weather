import key from "./api-key"

// Сопоставление Иконок из OpenWeather к иконкам из Figm-ы
// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
const idsToIcons = {
  "01d": "/images/weather/Sun-cloud-mid-rain.png", // нужна иконка с Солнцем
  "01n": "/images/weather/Moon-fast-wind.svg", // нужна иконка с Луной
  "02d": "/images/weather/Sun-cloud-little-rain.png", // нужны иконки просто с облаками
  "02n": "/images/weather/Moon-cloud-fast-wind.png", // нужны иконки просто с облаками
  "03d": "/images/weather/Sun-cloud-little-rain.png", // нужны иконки просто с облаками
  "03n": "/images/weather/Moon-cloud-fast-wind.png", // нужны иконки просто с облаками
  "04d": "/images/weather/Sun-cloud-little-rain.png", // нужны иконки просто с облаками
  "04n": "/images/weather/Moon-cloud-fast-wind.png", // нужны иконки просто с облаками
  "09d": "/images/weather/Sun-cloud-mid-rain.png",
  "09n": "/images/weather/Moon-cloud-mid-rain.png",
  "10d": "/images/weather/Big-rain-drops.png",
  "10n": "/images/weather/Big-rain-drops.png",
  "11d": "/images/weather/Cloud-3-zap.png",
  "11n": "/images/weather/Cloud-3-zap.png",
  "13d": "/images/weather/Big snow.png",
  "13n": "/images/weather/Big snow.png",
  "50d": "/images/weather/Tornado.png",
  "50n": "/images/weather/Tornado.png",
};

async function getWeatherByCityName(city) {
  const params = [
    `q=${encodeURI(city)}`,
    `appid=${key.key}`,
    "units=metric",
    "lang=ru",
  ].join('&');

  const response = await fetch(`//api.openweathermap.org/data/2.5/weather?${params}`);

  if (response.ok) {
    const json = await response.json();
    return {
      name: json.name,
      temp: json.main.temp,
      icon: idsToIcons[json.weather[0].icon],
      description: json.weather[0].description,
    };
  }

  return {};
}

export default getWeatherByCityName;
