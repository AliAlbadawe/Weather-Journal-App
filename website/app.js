//Web API info
const baseURL = "api.openweathermap.org/data/2.5/weather?zip=";
const zipCode = document.getElementById("zip").value;
const apiKey = "&appid=3f79df4bac710e681d42067b5769fa1d&units=imperial";

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  weather(baseURL, zipCode, apiKey);
}
