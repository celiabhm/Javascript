let apiDiv= document.querySelector(".apiContact");

const contactApi =async() => {
    const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(data);
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    apiDiv.innerHTML = dataTransformed.latitude;
    // pas value LATITUDE //
}
contactApi();
// AWAIT = pour la reponse //
//  Sans ceci on aura une promesse //






