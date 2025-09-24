function convertTemp() {
  let inputTemp = document.getElementById("inputTemp").value;
  let unit = document.getElementById("unit").value;

  if (inputTemp === "") {
    alert("Please enter a temperature value!");
    return;
  }

  inputTemp = parseFloat(inputTemp);

  let celsius, fahrenheit, kelvin;

  if (unit === "celsius") {
    celsius = inputTemp;
    fahrenheit = (inputTemp * 9/5) + 32;
    kelvin = inputTemp + 273.15;
  } else if (unit === "fahrenheit") {
    celsius = (inputTemp - 32) * 5/9;
    fahrenheit = inputTemp;
    kelvin = celsius + 273.15;
  } else if (unit === "kelvin") {
    celsius = inputTemp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = inputTemp;
  }

  document.getElementById("celsius").innerText = `Celsius: ${celsius.toFixed(2)} °C`;
  document.getElementById("fahrenheit").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById("kelvin").innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
