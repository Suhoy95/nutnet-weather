import BigRainDropsIcon from "./weatherIcons/Big-rain-drops.png"
import BigSnowIcon from "./weatherIcons/Big-snow.png"
import Cloud3ZapIcon from "./weatherIcons/Cloud-3-zap.png"
// import MidSnowFastWindIcon from "./weatherIcons/Mid-snow-fast-winds.png"
import MoonCloudFatsWindIcon from "./weatherIcons/Moon-cloud-fast-wind.png"
import MoonCloudMidRainIcon from "./weatherIcons/Moon-cloud-mid-rain.png"

// import MoonFastWindIcon from "./weatherIcons/Moon-fast-wind.png"
// import SunCloudAngledRainIcon from "./weatherIcons/Sun-cloud-angled-rain.png"
import SunCloudLittleRainIcon from "./weatherIcons/Sun-cloud-little-rain.png"
import SunCloudMidRainIcon from "./weatherIcons/Sun-cloud-mid-rain.png"
import TornadoIcon from "./weatherIcons/Tornado.png"
// import ZapsIcon from "./weatherIcons/Zaps.png"

// Сопоставление Иконок из OpenWeather к иконкам из Figm-ы
// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
const idsToIcons = {
  "01d": SunCloudLittleRainIcon, // TODO: нужна иконка с Солнцем
  "01n": MoonCloudFatsWindIcon, // TODO: нужна иконка с Луной
  "02d": SunCloudLittleRainIcon, // TODO: нужны иконки с облаками и Солнцем
  "02n": MoonCloudFatsWindIcon, // TODO: нужны иконки с облаками и Луной
  "03d": SunCloudLittleRainIcon, // TODO: нужны иконки с облаками (День, scattered clouds )
  "03n": MoonCloudFatsWindIcon, // TODO: нужны иконки с облаками (Ночь, scattered clouds )
  "04d": SunCloudLittleRainIcon, // TODO: нужны иконки с облаками (День, broken clouds)
  "04n": MoonCloudFatsWindIcon, // TODO: нужны иконки с облаками (Ночь, broken clouds)
  "09d": SunCloudMidRainIcon,
  "09n": MoonCloudMidRainIcon,
  "10d": BigRainDropsIcon,
  "10n": BigRainDropsIcon,
  "11d": Cloud3ZapIcon,
  "11n": Cloud3ZapIcon,
  "13d": BigSnowIcon,
  "13n": BigSnowIcon,
  "50d": TornadoIcon,
  "50n": TornadoIcon,
};

// TODO: Нужно отлавливать ошибки работы с сетью
async function getWeatherByCityName(city) {

  // TODO: Можно вынести ключ в отдельный бандл-конфиг,
  // чтобы менять настройки приложения без необходимости пересборки
  const key = "57c0d2b3df262af2fb4aafea320db748";

  const params = [
    `q=${encodeURI(city)}`,
    `appid=${key}`,
    "units=metric",
    "lang=ru",
  ].join('&');

  const response = await fetch(`//api.openweathermap.org/data/2.5/weather?${params}`);

  if (response.ok) {
    const json = await response.json();
    return {
      name: json.name,
      temp: Math.round(json.main.temp),
      icon: idsToIcons[json.weather[0].icon],
      description: json.weather[0].description,
      pressure: Math.round(json.main.pressure * 0.75006375541921), // hPa (гПа) в мм рт. ст.
      sunrise: new Date(json.sys.sunrise * 1000),
      sunset: new Date(json.sys.sunset * 1000),

      accessDate: new Date().toLocaleTimeString("ru", {hour: "2-digit", minute:"2-digit"}),
    };
  }

  if (response.status == 404) {
    return {
      name: city,
      notFound: true,
    };
  }

  // Непредвиденная ошибка при работе с АПИ
  // TODO: Нужно логировать такие ситуации
  return {
    name: city,
    error: true,
  };
}

export default getWeatherByCityName;
