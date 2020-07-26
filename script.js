// Write your JavaScript code here!
window.addEventListener("load", function() { 
 let form = document.querySelector("form"); 
   form.addEventListener("formSubmit", function(event) { 
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

   if (pilotName === "" || copilotName === "" || fuelLevel === isNAN(fuelLevel.value) || cargoMass === isNAN(cargoMass.value)){ 
         alert("All fields are required!"); 

         items.style.visibility = 'hidden'; 
      launchStatus.style.color = 'black'; 
      launchStatus.innerHTML = 'Awaiting Information Before Launch'; 
   } else { 
      items.style.visibility = 'visible'; 
      document.getElementById('pilotStatus').innerHTML = `Pilot stat${ pilotName + ' '} is ready for launch`; 
      document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${ copilotName + ' '} is ready for launch`; 
   
   if (fuelLevel >= 10000) { 
      ready = false;
      fuelStatus = 'Fuel level too low for launch'; 
   } else { 
      cargoStatus.innerHTML = 'Fuel level sufficient for launch'; 
   } 
   if (cargoMass <= 10000) { 
      ready = false;
      cargoStatus = 'Cargo mass too great for launch'; 
   } else { 
      cargoMass = 'Cargo mass low enough for launch'; 
   } 
  if (ready) { 
     launchStatus.style.color = "green"; 
      launchStatus = 'Shuttle is ready for launch'; 
   } else { 

      launchStatus.style.color = "red";
      launchStatus = 'Shuttle not ready for launch'; 
      } 
   }; 
}); 

 fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) { 
      response.json().then(function (data) { 
         let mTargets = document.getElementById('missionTarget'); 
         let random = Math.round(Math.random()*data.length); 
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
}) 