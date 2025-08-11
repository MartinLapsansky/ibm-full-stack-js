

function celsiusToFahrenheit() {
    let celsius = document.getElementById("celsius-input").value;

    const celsiusValue = Number(celsius);
    document.getElementById("fahrenheit-input").value = (celsiusValue * 9 / 5) + 32;
    document.getElementById("celsius-input").value = celsiusValue;
}

function kilogramsToPounds() {
    let kilograms = document.getElementById("kilograms-input").value;

    const kilogramsValue = Number(kilograms);
    document.getElementById("pounds-input").value = kilogramsValue * 2.20462;
    document.getElementById("kilograms-input").value = kilogramsValue;
}

function kilometersToMiles() {
    let kilometers = document.getElementById("kilometers-input").value;

    const kilometersValue = Number(kilometers);
    document.getElementById("miles-input").value = kilometersValue * 0.621371;
    document.getElementById("kilometers-input").value = kilometersValue;
}