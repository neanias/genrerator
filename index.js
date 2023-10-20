const adjectivals = [
  "Aboriginal Australian",
  "Afghan",
  "Ainu",
  "Albanian",
  "Algerian",
  "American",
  "Amsterdam",
  "Andorran",
  "Angolan",
  "Appalachian",
  "Argentine",
  "Armenian",
  "Aromanian",
  "Aruban",
  "Athens",
  "Atlanta",
  "Australian",
  "Austrian",
  "Azerbaijani",
  "Bahamian",
  "Bahraini",
  "Balkan",
  "Baltic German",
  "Baltic Russian",
  "Bangladeshi",
  "Bantu",
  "Barbadian",
  "Barcelona",
  "Basque",
  "Bedouin",
  "Belarusian",
  "Belgian",
  "Belgrade",
  "Belizean",
  "Beninese",
  "Berlin",
  "Bermudian",
  "Boer",
  "Bolivian",
  "Bosnian",
  "Brazilian",
  "Breton",
  "British Virgin Islander",
  "British",
  "Bulgarian",
  "Burkinabè",
  "Burundian",
  "Cajun",
  "Cambodian",
  "Camden",
  "Cameroonian",
  "Canadian",
  "Cape Verdean",
  "Catalan",
  "Central American",
  "Chadian",
  "Chilean",
  "Chinese",
  "Colombian",
  "Comorian",
  "Congolese",
  "Cornish",
  "Costa Rican",
  "Creole",
  "Croatian",
  "Cuban",
  "Cypriot",
  "Czech",
  "Czechoslovak",
  "Dalston",
  "Danish",
  "Dominican (Commonwealth)",
  "Dominican (Republic)",
  "Dutch",
  "East Coast",
  "East German",
  "East Timorese",
  "Eastern European",
  "Ecuadorian",
  "Egyptian",
  "Emirati",
  "English",
  "Eritrean",
  "Estonian",
  "Ethiopian",
  "Faroese",
  "Fijian",
  "Filipino",
  "Finnish Swedish",
  "Finnish",
  "First Nations",
  "French Guianese",
  "French",
  "Georgian",
  "German",
  "Ghanaian",
  "Gibraltarian",
  "Glaswegian",
  "Greek Macedonian",
  "Greek",
  "Grenadian",
  "Guatemalan",
  "Guinea-Bissauan",
  "Guinean",
  "Guyanese",
  "Haitian",
  "Honduran",
  "Hong Kong",
  "Hungarian",
  "Icelandic",
  "Indian",
  "Indigenous",
  "Indonesian",
  "Inuit",
  "Iranian",
  "Iraqi",
  "Irish",
  "Israeli",
  "Italian",
  "Ivoirian",
  "Jamaican",
  "Japanese",
  "Jordanian",
  "Kashmiri",
  "Kazakh",
  "Kenyan",
  "Kosovan",
  "Kosovo Albanian",
  "Kraków",
  "Kurdish",
  "Kuwaiti",
  "Kyiv",
  "Kyrgyzstani",
  "LA",
  "Lao",
  "Latvian",
  "Lebanese",
  "Leningrad",
  "Liberian",
  "Libyan",
  "Liechtensteiner",
  "Lithuanian",
  "Liverpudlian",
  "Luxembourgish",
  "Macanese",
  "Macedonian Bulgarian",
  "Macedonian",
  "Madrid",
  "Malagasy",
  "Malawian",
  "Malaysian",
  "Maldivian",
  "Malian",
  "Maltese",
  "Mancunian",
  "Manx",
  "Mauritanian",
  "Mauritian",
  "Mexican",
  "Moldovan",
  "Mongolian",
  "Montenegrin",
  "Moroccan",
  "Mozambican",
  "Muscovite",
  "Myanma",
  "Māori",
  "Namibian",
  "Native American",
  "Nepalese",
  "New York",
  "New Zealand",
  "Nicaraguan",
  "Nigerian",
  "Nigerien",
  "North Korean",
  "North London",
  "Northern Irish",
  "Norwegian",
  "Occitan",
  "Pakistani",
  "Palauan",
  "Palestinian",
  "Panamanian",
  "Papua New Guinean",
  "Paraguayan",
  "Parisian",
  "Peruvian",
  "Polish",
  "Portuguese",
  "Post-Soviet",
  "Puerto Rican",
  "Quecha",
  "Québécois",
  "Romanian",
  "Romansh",
  "Rome",
  "Russian",
  "Rwandan",
  "Réunionnais",
  "Salvadoran",
  "Sammarinese",
  "Samoan",
  "Saudi",
  "Scottish",
  "Senegalese",
  "Serbian",
  "Sierra Leonean",
  "Sindhian",
  "Singaporean",
  "Slovak",
  "Slovenian",
  "Somali",
  "South African",
  "South Korean",
  "South London",
  "South Sudanese",
  "South-East Asian",
  "South-East London",
  "Southern",
  "Soviet",
  "Spanish",
  "Sri Lankan",
  "St Lucian",
  "Sudanese",
  "Surinamese",
  "Swedish",
  "Swiss French",
  "Swiss German",
  "Swiss Italian",
  "Swiss",
  "Syrian",
  "Sámi",
  "Taiwanese",
  "Tanzanian",
  "Thai",
  "Tibetan",
  "Tobagonian",
  "Trinidadian",
  "Tunisian",
  "Turkish Cypriot",
  "Turkish",
  "Turkmen",
  "Tuvaluan",
  "Ugandan",
  "Ukrainian",
  "Uruguayan",
  "Uzbek",
  "Vanuatuan",
  "Venezuelan",
  "Vietnamese",
  "Warsaw",
  "Welsh",
  "West African",
  "West Coast",
  "West Country",
  "Xhosa",
  "Yemeni",
  "Yugoslav",
  "Zambian",
  "Zimbabwean",
  "Zulu",
];
const genres = [
  "Ambient",
  "Ballad",
  "Bluegrass",
  "Blues",
  "Calypso",
  "Classical",
  "Country",
  "Dance Music",
  "Disco",
  "Drill",
  "Drone",
  "Drum and Bass",
  "Dub",
  "Electronic",
  "Electronica",
  "Emo",
  "Folk",
  "Funk",
  "Garage",
  "Glitch",
  "Gospel",
  "Grunge",
  "Hardcore",
  "Highlife",
  "Hip-Hop",
  "House",
  "Jazz",
  "Jazz-Fusion",
  "Jungle",
  "Klezmer",
  "Latin",
  "Metal",
  "Motorik",
  "Musique Concrète",
  "Noise",
  "Non-Music",
  "Polka",
  "Pop",
  "Punk",
  "R&amp;B",
  "Rap",
  "Reggae",
  "Rock",
  "Rockabilly",
  "Rocksteady",
  "Shoegaze",
  "Ska",
  "Soul",
  "Spoken Word",
  "Sprechgesang",
  "Tango",
  "Techno",
  "Trance",
  "Wave",
];
const yearQualifiers = [
  "00s",
  "10s",
  "20s",
  "30s",
  "40s",
  "50s",
  "60s",
  "70s",
  "80s",
  "90s",
];
const genreModifiers = [
  "Acid",
  "Afro",
  "Alternative",
  "Apocalyptic",
  "Art",
  "Avant-Garde",
  "Baroque",
  "Bedroom",
  "Chamber",
  "Contemporary",
  "Crossover",
  "DIY",
  "Dark",
  "Desert",
  "Downtempo",
  "Electro",
  "Euro",
  "Experimental",
  "Glam",
  "Gothic",
  "Hard",
  "Hardcore",
  "Honky-tonk",
  "Hyper",
  "Indie",
  "Industrial",
  "Instrumental",
  "Jangle",
  "Lofi",
  "Medieval",
  "Melodic",
  "Neo",
  "New Age",
  "Post",
  "Postmodern",
  "Power",
  "Prog",
  "Progressive",
  "Protest",
  "Proto",
  "Psychedelic",
  "Queer",
  "Romantic",
  "Space",
  "Stoner",
  "Surf",
  "Synth",
  "Trad",
  "Trap",
  "Trip",
  "Tropical",
  "Underground",
  "Urban",
  "Witch",
];

const suffixes = [
  "core",
  "tronica",
  "wave",
];

window.sessionStorage.setItem("articleNumber", 1);

function romanize(num) {
  if (isNaN(num)) {
    return NaN;
  }
  const digits = String(+num).split("");
  const key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  let roman = "";
  let i = 3;
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  }
  return Array(+digits.join("") + 1).join("M") + roman;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  const shuffledArray = Array.from(array);
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function generateTitle() {
  const articleNumber = parseInt(
    window.sessionStorage.getItem("articleNumber"),
  );

  let title = "";

  if (Math.random() > 0.7) {
    const year =
      yearQualifiers[Math.floor(Math.random() * yearQualifiers.length)];
    title += `${year} `;
  }

  const country = adjectivals[Math.floor(Math.random() * adjectivals.length)];
  title += `${country} `;

  const modifierCount = getRandomInt(1, 2);
  const modifiers = shuffleArray(genreModifiers).slice(0, modifierCount).join(
    "–",
  );
  title += `${modifiers} `;

  const genreCount = getRandomInt(1, 2);
  const titleGenres = shuffleArray(genres).slice(0, genreCount).join(" ");
  title += `${titleGenres}`;

  if (Math.random() > 0.7) {
    const coinFlip = Math.random() < 0.5 ? 0 : 1;
    title += `-${suffixes[coinFlip]}`;
  }

  if (Math.random() > 0.7) {
    title += " Revival";
  }

  const element = document.getElementById("quietus_article_name");
  element.innerHTML = `Organic Intelligence ${
    romanize(articleNumber)
  }: ${title}`;

  window.sessionStorage.setItem("articleNumber", articleNumber + 1);
}

generateTitle();
