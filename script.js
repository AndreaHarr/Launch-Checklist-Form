// Write your JavaScript code here!
window.addEventListener('load', function () {
   this.fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      response.json().then(function (json) {

         let div = document.getElementById('missionTarget')

         div.innerHTML = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}"></img>
    `
      });
   });
      let form = document.querySelector('form')

      form.addEventListener('submit', function (event) {
         event.preventDefault();
         let launchStatus = document.getElementById('launchStatus');
         let faultyItems = document.getElementById('faultyItems');
         let pilotName = document.querySelector('input[name = pilotName]');
         let copilotName = document.querySelector('input[name = copilotName]');
         let fuelLevel = document.querySelector('input[name = fuelLevel]');
         let cargoMass = document.querySelector('input[name = cargoMass]');
         let pilotStatus = document.getElementById('pilotStatus')
         let copilotStatus = document.getElementById('copilotStatus')
         let cargoStatus = document.getElementById('cargoStatus')
         let fuelStatus = document.getElementById('fuelStatus')

         if (pilotName.value === ('') || copilotName.value === ('') || fuelLevel.value === ('') || cargoMass.value === ('')) {
            alert('All fields are required!');
            event.preventDefault();

         } else if (!isNaN(pilotName.value) === true || !isNaN(copilotName.value) === true) {
            alert('Enter in a vaild name for the pilot name and or co-pilot name!');
            event.preventDefault();

         } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
            alert('Enter in a valid number for fuel level and or cargo mass!');
            event.preventDefault();

         } else if (fuelLevel.value < 10000 && cargoMass.value < 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            pilotStatus.innerHTML = `Pilot${pilotName.value} is not ready for launch`;
            copilotStatus.innerHTML = `Copilot${copilotName.value} is not  ready for launch`;
            fuelStatus.innerHTML = `Not enough fuel for the journey`;
            cargoStatus.innerHTML = 'Mass low enough for journey'
            event.preventDefault();

         } else if (fuelLevel.value > 10000 && cargoMass.value > 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            pilotStatus.innerHTML = `Pilot${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Copilot${copilotName.value} is ready for launch`;
            fuelStatus.innerHTML = `Enough fuel for the journey`;
            cargoStatus.innerHTML = `Too much mass for launch`;
            event.preventDefault();

         } else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            pilotStatus.innerHTML = `Pilot${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Copilot${copilotName.value} is ready for launch`;
            fuelStatus.innerHTML = `Not enough fuel for the journey`;
            cargoStatus.innerHTML = `Too much mass for launch `;
            event.preventDefault();

         } else if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
            launchStatus.style.color = 'green';
            launchStatus.innerHTML = `Shuttle ready for launch`; 
            faultyItems.style.visibility ='hidden';
            event.preventDefault();
         };
      });



   
   event.preventDefault();
});
