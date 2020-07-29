// Write your JavaScript code here!
window.addEventListener("load", function() { 
 let form = document.querySelector("form")
fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) { 
      response.json().then(function (data) { 
         let mTargets = document.getElementById('missionTarget'); 
         let random = Math.round(Math.random() * data.length); 
         let target = data[random]; 

      mTargets.innerHTML = 
      `<h2>Mission Destination</h2> 
   <ol> 
      <li>Name: ${target.name}</li> 
      <li>Diameter: ${target.diameter}</li> 
      <li>Star: ${target.star}</li> 
      <li>Distance from Earth: ${target.distance}</li> 
      <li>Number of Moons: ${target.moons}</li> 
   </ol> 
      <img src="${target.image}"></img>` 
      }); 
   })
       form.addEventListener("submit", function(event) { 
       event.preventDefault(); 
       event.stopPropagation(); 

      let items = document.getElementById('faultyItems'); 
      let launchStatus = document.getElementById('launchStatus'); 
      let fuelStatus = document.getElementById('fuelStatus'); 
      let cargoStatus = document.getElementById('cargoStatus'); 
      let readyLaunch = true; 

      let pilotName = document.querySelector("input[name=pilotName]").value; 
      let copilotName = document.querySelector("input[name=copilotName]").value; 
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value; 
      let cargoMass = document.querySelector("input[name=cargoMass]").value; 

   if (pilotName === "" || copilotName === "" || fuelLevel === '' || isNAN(fuelLevel.value) || cargoMass === '' || isNAN(cargoMass.value)) { 
         
      alert("All fields are required!"); 
         items.style.visibility = 'hidden'; 
         launchStatus.style.color = 'black';
         launchStatus.innerHTML = 'Awaiting Information Before Launch'; 
   
   } else { 
      items.style.visibility = 'visible'; 
      
      document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName + ' '} ready for launch`
      document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${copilotName + ' '} ready for launch` 
      
   if (fuelLevel < 10000) { 
      ready = false;
      fuelStatus.innerHTML = 'Fuel level too low for launch'; 
   } else { 
      furelStatus.innerHTML = 'Fuel level sufficient for launch'; 
   } 
   if (cargoMass > 10000) { 
      ready = false;
      cargoStatus.innerHTML = 'Cargo mass too great for launch'; 
   } else { 
      cargoStatus.innerHTML = 'Cargo mass low enough for launch'; 
   } 
  if (ready) { 
     launchStatus.style.color = 'green'; 
      launchStatus.innnerHTML = 'Shuttle is ready for launch'; 
      retrieveData();
   } else { 
      items.style.visibility = 'visible'
      launchStatus.style.color = 'red';
      launchStatus.innerHTML = 'Shuttle not ready for launch'; 
         }
       };
      });
   });