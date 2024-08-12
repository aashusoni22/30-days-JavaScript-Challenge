const locationSearch = document.querySelector("#locationSearch");
const searchBtn = document.querySelector(".searchBtn");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const condition = document.querySelector(".condition");
const conditionText = document.querySelector(".conditionText");
const forecastBox = document.querySelector(".forecastBox");
const apiKey = "0db8fbc5a4bf41ad953215852240608";

const fetchData = async function () {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationSearch.value}&days=5`
    );
    const data = await response.json();

    // Update current weather
    city.textContent = data.location.name;
    temp.textContent = `${Math.floor(data.current.temp_c)}°C`;
    condition.src = icon(
      data.current.condition.code,
      data.current.is_day,
      data.current.condition.icon
    );
    condition.alt = data.current.condition.text;

    const nearbyIndex = data.current.condition.text.indexOf("nearby");
    conditionText.textContent =
      nearbyIndex !== -1
        ? data.current.condition.text.substring(0, nearbyIndex)
        : data.current.condition.text;

    // Update forecast
    forecastBox.innerHTML = ""; // Clear previous forecast
    const fragment = document.createDocumentFragment();

    data.forecast.forecastday.forEach((d) => {
      const dateObj = new Date(d.date);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      const forecastDiv = document.createElement("div");
      forecastDiv.className = "forecastDiv";

      const dateElement = document.createElement("p");
      dateElement.className = "forecastDate";
      dateElement.textContent = formattedDate;
      forecastDiv.appendChild(dateElement);

      const iconElement = document.createElement("img");
      iconElement.className = "forecastIcon";
      iconElement.src = d.day.condition.icon;
      forecastDiv.appendChild(iconElement);

      const tempElement = document.createElement("p");
      tempElement.className = "forecastTemp";
      tempElement.textContent = `${Math.floor(d.day.avgtemp_c)}°C`;
      forecastDiv.appendChild(tempElement);

      fragment.appendChild(forecastDiv);
    });

    forecastBox.appendChild(fragment);
  } catch (error) {
    alert("Failed to fetch weather data. Please try again.");
  }
};

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (locationSearch.value.trim() !== "") {
    fetchData();
    document.querySelector(".weatherDetails").style.boxShadow =
      "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    locationSearch.value = "";
  } else {
    alert("Please add city");
  }
});

function icon(code, is_day, apiIconUrl) {
  switch (code) {
    case 1000:
      return is_day ? "images/sun.png" : "images/clear.png";
    case 1003:
      return "images/partly-cloudy.png";
    case 1006:
    case 1009:
      return "images/cloudy.png";
    case 1030:
      return "images/fog.png";
    case 1063:
    case 1072:
      return "images/rainy-day.png";
    case 1066:
      return "images/snowy.png";
    case 1069:
      return "images/sleet.png";
    case 1087:
      return "images/storm.png";
    case 1114:
      return "images/snowy.png";
    default:
      return apiIconUrl;
  }
}
