//dark mode feature
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

//image slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initSlider();

function initSlider() {

  if(slides.length > 0) {
      slides[slideIndex].classList.add("displaySlide");
      intervalId = setInterval(nextSlide, 10000);
  }

}

function showSlide(index) {

  if(index >= slides.length) {
      slideIndex = 0;
  }
  else if(index < 0) {
      slideIndex = slides.length - 1;
  }

    slides.forEach(slide => {
      slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);

}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}


//map api
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

