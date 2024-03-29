const API_KEY = '15b3a302a7c863d574075b8d5ae667b7';

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log('You live in', lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
