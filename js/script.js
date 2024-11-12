function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function initMap(){

  const mapDetails = {
    center: {lat: -34.397, lng: 150.644},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true,
    mapTypeControl: true,
    zoom: 10,
    minZoom: 10,
    maxZoom: 10
  }
  const map = new google.maps.Map(document.getElementById('map'), mapDetails);

  const marker = new google.maps.Marker({
    map: map,
    position: {lat: -34.397, lng: 150.644},
    title: "IIT"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "Where I go to school :D"
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
}

