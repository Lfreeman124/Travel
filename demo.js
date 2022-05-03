// This is the city object
const travelData = {
  city: [
    {
      id: 1,
      cityName: "San Miguel",
      country: "Mexico",
      image: "./photos/San-Miguel/SanMiguel3.jpg",
      about: `San Miguel de Allende, Mexico San
        Miguel de Allende, a colonial-era city in Mexico’s central highlands, is known
        for its baroque Spanish architecture, thriving arts scene and cultural
        festivals. In the city’s historic, cobblestoned center lies the neo-Gothic
        church Parroquia de San Miguel Arcángel, whose dramatic pink towers rise above
        the main plaza, El Jardín. The Templo de San Francisco church nearby has an
        18th-century churrigueresque facade.`,
    },
  ],
};

const cityName = document.getElementById("city-name");
cityName.innerText = travelData.city[0].country;

const blurb = document.getElementById("blurb");
blurb.innerText = travelData.city[0].about;

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
