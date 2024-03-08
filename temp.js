
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convtBtn = document.querySelector("#convt-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if(degree.value === ""){
  convtBtn.setAttribute("disabled","");
  setTimeout(() => {
    convtBtn.removeAttribute('disabled');
  }, 4000);
}


convtBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convtBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convtBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "Fahrenheat") {
      const FahrenheatToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheatToCelsius.toFixed(3)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1200)
}