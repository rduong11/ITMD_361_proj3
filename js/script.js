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

  const iitCoords = { lat: 41.831299, lng: -87.627274 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: iitCoords,
    zoom: 10,
  });

  const marker = new google.maps.Marker({
    map: map,
    position: iitCoords,
    title: "IIT"
  });

  const iitString = '<h1>Illinois Institute of Technology</h1> <p>A private university in Chicago, IL. This is where I go to school! </p>';
  const infoWindow = new google.maps.InfoWindow({
    content: iitString
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
}
