// Add console.log to check to see if our code is working.
console.log("working");
// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });

//yellow circle maker
L.circle([34.0522, -118.2437], {
    radius: 450,
    color: "black",
    fillColor: "yellow"
  }).addTo(map);



// Get data from cities.js
let cityData = cities;
console.log(cityData)


// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
});


// L.circleMarker([34.0522, -118.2437], {
//   radius:200,
//   color:"black",
//   fillColor: '#ffffa1'
// }).addTo(map);

  // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });

//dark tile layer
let dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
dark.addTo(map);

