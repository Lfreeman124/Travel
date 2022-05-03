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
        18th-century churrigueresque facade. `,
    },
      {
        id: 2,
        cityName: "Udaipur",
        country: "India",
        image: "./photos/Udaipur/Udaipur3.jpg",
        about: `Udaipur, India Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it’s set around a series
        of artificial lakes and is known for its lavish royal residences. City Palace,
        overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and
        gardens, famed for its intricate peacock mosaics`
      },
      {
        id: 3,
        cityName: "Istanbul",
        country: "Turkey",
        image: "./photos/Istanbul/Istanbul3.jpg",
        about: `Istanbul Istanbul is a
        major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.
        Its Old City reflects cultural influences of the many empires that once ruled
        here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for
        centuries the site of chariot races, and Egyptian obelisks also remain. The
        iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare
        Christian mosaics. `
      },
      {
        id: 4,
        cityName: "Ubud",
        country: "Indonesia",
        image: "./photos/Udub/Udub3.jpg",
        about: `Ubud, Indonesia The town of Ubud, in the uplands of Bali,
        Indonesia, is known as a center for traditional crafts and dance. The
        surrounding Ubud District’s rainforest and terraced rice paddies, dotted with
        Hindu temples and shrines, are among Bali’s most famous landscapes. Ancient holy
        sites include the intricately carved Goa Gajah (“Elephant Cave”) and Gunung
        Kawi, with its rock-cut shrines. `
      },
      {
        id: 5,
        cityName: "Kyoto",
        country: "Japan",
        image: "./photos/Kyoto/Kyoto3.jpg",
        about: ` Kyoto, Japan Kyoto, once the capital of
        Japan, is a city on the island of Honshu. It's famous for its numerous classical
        Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and
        traditional wooden houses. It’s also known for formal traditions such as kaiseki
        dining, consisting of multiple courses of precise dishes, and geisha, female
        entertainers often found in the Gion district.`
      },
      {
        id: 6,
        cityName: "Florence",
        country: "Italy",
        image: "./photos/Florence/Florence3.jpg",
        about: `Florence Florence, capital of
        Italy’s Tuscany region, is home to many masterpieces of Renaissance art and
        architecture. One of its most iconic sights is the Duomo, a cathedral with a
        terracotta-tiled dome engineered by Brunelleschi and a bell tower by Giotto. The
        Galleria dell'Accademia displays Michelangelo’s “David” sculpture. The Uffizi
        Gallery exhibits Botticelli’s “The Birth of Venus” and da Vinci’s
        “Annunciation.`
      },
      {
        id: 7,
        cityName: "Mexico City",
        country: "Mexico",
        image: "./photos/San-Miguel/SanMiguel3.jpg",
        about: `Mexico City Mexico City is the densely populated,
        high-altitude capital of Mexico. It's known for its Templo Mayor (a 13th-century
        Aztec temple), the baroque Catedral Metropolitana de México of the Spanish
        conquistadors and the Palacio Nacional, which houses historic murals by Diego
        Rivera. All of these are situated in and around the Plaza de la Constitución,
        the massive main square also known as the Zócalo.`
      },
      {
        id: 8,
        cityName: "Oaxaca",
        country: "Mexico",
        image: "./photos/San-Miguel/SanMiguel3.jpg",
        about: `Oaxaca, Mexico The city of
        Oaxaca de Juárez, or Oaxaca City or simply Oaxaca, is the capital and largest
        city of the eponymous Mexican state Oaxaca. It is the municipal seat for the
        surrounding Municipality of Oaxaca. `
      },
      {
        id: 9,
        cityName: "Chiang Mai",
        country: "Thailand",
        image: "./photos/San-Miguel/SanMiguel3.jpg",
        about: `Chiang Mai, Thailand Chiang Mai is a city
        in mountainous northern Thailand. Founded in 1296, it was capital of the
        independent Lanna Kingdom until 1558. Its Old City area still retains vestiges
        of walls and moats from its history as a cultural and religious center. It’s
        also home to hundreds of elaborate Buddhist temples, including 14th-century Wat
        Phra Singh and 15th-century Wat Chedi Luang, adorned with carved serpents.`
      },
      {
        id: 10,
        cityName: "bangkok",
        country: "Thailand",
        image: "./photos/San-Miguel/SanMiguel3.jpg",
        about: `Bangkok Bangkok, Thailand’s capital, is a large city known for ornate shrines
        and vibrant street life. The boat-filled Chao Phraya River feeds its network of
        canals, flowing past the Rattanakosin royal district, home to opulent Grand
        Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an
        enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its
        steep steps and Khmer-style spire. `
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
