function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "1112fe88e93908caf3cc29e57ec1349e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
