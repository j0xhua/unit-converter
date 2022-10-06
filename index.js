/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const feet = 3.281;
const liter = 0.264;
const kilo = 2.204;

const inputEl = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn")
const lengthDisplay = document.getElementById("length-display")
const volumeDisplay = document.getElementById("volume-display")
const massDisplay = document.getElementById("mass-display")

//let input = inputEl.value;
console.log(inputEl)
//console.log(input)


convertBtn.addEventListener("click", function() {
    let input = inputEl.value;
    
    let metersToFeet = (input * feet).toFixed(3);
    let feetToMeters = (input / feet).toFixed(3);
    let litersToGallons = (input * liter).toFixed(3);
    let gallonsToLiters = (input / liter).toFixed(3);
    let kilosToPounds = (input * kilo).toFixed(3);
    let poundsToKilos = (input / kilo).toFixed(3);

    
    lengthDisplay.innerHTML = `${input} meters = ${metersToFeet} feet | ${input} feet = ${feetToMeters} meters`
    
    volumeDisplay.innerHTML = `${input} liters = ${litersToGallons} gallons | ${input} gallons = ${litersToGallons} liters`
    
    massDisplay.innerHTML = `${input} kilos = ${kilosToPounds} pounds | ${input} pounds = ${poundsToKilos} kilos`
    
})
