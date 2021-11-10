const API_KEY = "15b3a302a7c863d574075b8d5ae667b7";

function onGeoOk(position) {
  // 현위치 위도, 경도 정보를 통해 Weather API 접근
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // 현 날씨 정보 담긴 url에서 필요한 정보 가져오기
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
