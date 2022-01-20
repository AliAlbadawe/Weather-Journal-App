//Web API info + Zipcode user variable
const baseURL = "api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=3f79df4bac710e681d42067b5769fa1d&units=imperial";

const date = new Date();
//Getting info from weather API
document.getElementById("generate").addEventListener("click", performAction);

function performAction() {
  //storing variables after click
  const zipCode = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  getWeatherInfo(baseURL, zipCode, apiKey);
}

const getWeatherInfo = async (baseURL, zipCode, apiKey) => {
  const res = await fetch(baseURL + zipCode + apiKey);

  try {
    const data = res.json();
    data.feelings = feelings;
    data.date = date;
    data.temp = data;

    console.log(data);
    return data
      .then((data) => {
        postData("/add", data);
      })
      .then(retrieveData("/all"));
  } catch (error) {
    console.log("error", error);
  }
};

//post data
const postData = async (url = "", data = {}) => {
  const response = await fetch("/add", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data.date, data.temp, data.feelings),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

//Retrieving data to UI
const retrieveData = async () => {
  const request = await fetch("/all");
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById("temp").innerHTML =
      Math.round(allData.temp) + "degrees";
    document.getElementById("content").innerHTML = allData.feelings;
    document.getElementById("date").innerHTML = allData.date;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
