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
        image: "./photos/San-Miguel/SanMiguel3.jpg",
        about: `Udaipur, India Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it’s set around a series
        of artificial lakes and is known for its lavish royal residences. City Palace,
        overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and
        gardens, famed for its intricate peacock mosaics`
      },
      {
        id: 3,
        cityName: "Istanbul",
        country: "Turkey",
        image: "./photos/San-Miguel/SanMiguel3.jpg",
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
        image: "./photos/San-Miguel/SanMiguel3.jpg",
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
        image: "./photos/San-Miguel/SanMiguel3.jpg",
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
        image: "./photos/San-Miguel/SanMiguel3.jpg",
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

/* 

11. Taipei Taipei, the capital of Taiwan, is
// a modern metropolis with Japanese colonial lanes, busy shopping streets and
// contemporary buildings. The skyline is crowned by the 509m-tall, bamboo-shaped
// Taipei 101 skyscraper, with upscale shops at the base and a rapid elevator to an
// observatory near the top. Taipei is also known for its lively street-food scene
// and many night markets, including expansive Shilin market. 

12. Kraków, Poland
// Kraków, a southern Poland city near the border of the Czech Republic, is known
// for its well-preserved medieval core and Jewish quarter. Its old town – ringed
// by Planty Park and remnants of the city’s medieval walls – is centered on the
// stately, expansive Rynek Glówny (market square). This plaza is the site of the
// Cloth Hall, a Renaissance-era trading outpost, and St. Mary’s Basilica, a
// 14th-century Gothic church.

13. Luang Prabang, Laos Luang Prabang, the ancient
// capital of Luang Prabang Province in northern Laos, lies in a valley at the
// confluence of the Mekong and Nam Khan rivers. Inhabited for thousands of years,
// it was the royal capital of the country until 1975. It’s known for its many
// Buddhist temples, including the gilded Wat Xieng Thong, dating to the 16th
// century, and Wat Mai, once the residence of the head of Laotian Buddhism. 

14.
// Rome Rome is the capital city of Italy. It is also the capital of the Lazio
// region, the centre of the Metropolitan City of Rome, and a special comune named
// Comune di Roma Capitale. 

15. San Sebastián, Spain San Sebastián is a resort town
// on the Bay of Biscay in Spain’s mountainous Basque Country. It’s known for Playa
// de la Concha and Playa de Ondarreta, beaches framed by a picturesque bayfront
// promenade, and world-renowned restaurants helmed by innovative chefs. In its
// cobblestoned old town (Parte Vieja), upscale shops neighbor vibrant pintxo bars
// pairing local wines with bite-size regional specialties. 

16. Bodrum, Turkey
// Bodrum is a city on the Bodrum Peninsula, stretching from Turkey's southwest
// coast into the Aegean Sea. The city features twin bays with views of Bodrum
// Castle. This medieval fortress was built partly with stones from the Mausoleum
// at Halicarnassus, one of the Seven Wonders of the Ancient World, completed in
// the 4th century B.C. The city is also a gateway for nearby beach towns and
// resorts. 

17. Jaipur, India Jaipur is the capital of India’s Rajasthan state. It
// evokes the royal family that once ruled the region and that, in 1727, founded
// what is now called the Old City, or “Pink City” for its trademark building
// color. At the center of its stately street grid (notable in India) stands the
// opulent, colonnaded City Palace complex. With gardens, courtyards and museums,
// part of it is still a royal residence. 

18. Charleston, South Carolina
// Charleston, the South Carolina port city founded in 1670, is defined by its
// cobblestone streets, horse-drawn carriages and pastel antebellum houses,
// particularly in the elegant French Quarter and Battery districts. The Battery
// promenade and Waterfront Park both overlook Charleston Harbor, while Fort
// Sumter, a federal stronghold where the first shots of the Civil War rang out,
// lies across the water. 

19. Tokyo Special wards are a special form of
// municipalities in Japan under the 1947 Local Autonomy Law. They are city-level
// wards: primary subdivisions of a prefecture with municipal autonomy largely
// comparable to other forms of municipalities. 

20. Cape Town Cape Town is a port
// city on South Africa’s southwest coast, on a peninsula beneath the imposing
// Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top,
// from which there are sweeping views of the city, the busy harbor and boats
// heading for Robben Island, the notorious prison that once held Nelson Mandela,
// which is now a living museum. 

21. Trieste, Italy Trieste is the capital city of
// the Friuli Venezia Giulia region in northeast Italy. A port city, it occupies a
// thin strip of land between the Adriatic coast and Slovenia’s border on the
// limestone-dominated Karst Plateau. Italian, Austro-Hungarian and Slovenian
// influences are all evident in its layout, which encompasses a medieval old city
// and a neoclassical Austrian quarter. 

22. Ljubljana, Slovenia Ljubljana is
// Slovenia's capital and largest city. It's known for its university population
// and green spaces, including expansive Tivoli Park. The curving Ljubljanica
// River, lined in outdoor cafes, divides the city's old town from its commercial
// hub. Ljubljana has many museums, including the National Museum of Slovenia,
// displaying historic exhibitions, and the Museum of Modern Art, home to
// 20th-century Slovene paintings and sculptures. 


23. Seoul Seoul, the capital of
// South Korea, is a huge metropolis where modern skyscrapers, high-tech subways
// and pop culture meet Buddhist temples, palaces and street markets. Notable
// attractions include futuristic Dongdaemun Design Plaza, a convention hall with
// curving architecture and a rooftop park; Gyeongbokgung Palace, which once had
// more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine
// trees. 24. Antigua Guatemala, Guatemala Antigua is one of the 2 major islands
// that make up the Caribbean nation of Antigua and Barbuda. Ringed with coral
// reefs, the island is known for its many sandy beaches. Set along English
// Harbour, restored Nelson’s Dockyard, which Admiral Horatio Nelson made his base
// in the 1780s, includes a marina and the Dockyard Museum. Trails lead up to
// Shirley Heights, a former military lookout with panoramic views. 
25. Porto,
// Portugal Porto is a coastal city in northwest Portugal known for its stately
// bridges and port wine production. In the medieval Ribeira (riverside) district,
// narrow cobbled streets wind past merchants’ houses and cafes. São Francisco
// Church is known for its lavish baroque interior with ornate gilded carvings. The
// palatial 19th-century Palácio de Bolsa, formerly a stock market, was built to
// impress potential European investors.
