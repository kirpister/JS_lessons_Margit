const convert = (id, val) =>  {
val = parseFloat(val);

const inputFahren = document.querySelector('#inputFahren');
const inputCelsius = document.querySelector('#inputCelcius');
const inputKelvin = document.querySelector('#inputKelvin');

if (id == "inputFahren") {
    inputCelsius.value = ((val - 32) / 1.8).toFixed(2);
    inputKelvin.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
} 
if (id == "inputCelcius") {
    inputFahren.value = (val * 1.8 + 32).toFixed(2);
    inputKelvin.value = (val + 273.15).toFixed(2);
} 
if (id == "inputKelvin") {
    inputFahren.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
    inputCelsius.value = (val - 273.15).toFixed(2);
}

};