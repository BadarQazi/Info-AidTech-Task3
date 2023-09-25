document.addEventListener("DOMContentLoaded", function () {
  const inputTemperature = document.getElementById("inputTemperature");
  const inputScale = document.getElementById("inputScale");
  const outputTemperature = document.getElementById("outputTemperature");
  const outputScale = document.getElementById("outputScale");
  const convertButton = document.getElementById("convertButton");
  const resetButton = document.getElementById("resetButton");

  convertButton.addEventListener("click", function () {
    const inputTemp = parseFloat(inputTemperature.value);
    console.log = inputTemp;
    if (isNaN(inputTemp)) {
      alert("Please enter a valid numeric temperature.");
      outputTemperature.value = '';
      return;
    }

    let result;
    if (inputScale.value === "celsius" && outputScale.value === "fahrenheit") {
      result = 0;
      result = inputTemp * 1.8 + 32;
    } 
    else if ( inputScale.value === "fahrenheit" && outputScale.value === "celsius") {
      result = (inputTemp - 32) * 5/9;
    } 
    else if ( inputScale.value === "celsius" && outputScale.value === "kalvin") {
      result = (inputTemp + 273.15);
    } 
    else if ( inputScale.value === "fahrenheit" && outputScale.value === "kalvin") {
      result = ((inputTemp-32)/1.8)+273.15;
    } 
    else if ( inputScale.value === "kalvin" && outputScale.value === "fahrenheit") {
      result = ((inputTemp - 273.15) * 1.8 ) + 32;
    } 
    else if ( inputScale.value === "kalvin" && outputScale.value === "celsius") {
      result = (inputTemp -273.15);
    } 
    else {
      result = inputTemp;
    }

    outputTemperature.value = result.toFixed(2);
  });

  resetButton.addEventListener("click", function (event) {
    outputTemperature.value = '';
    inputTemperature.value = '';
  });
});
