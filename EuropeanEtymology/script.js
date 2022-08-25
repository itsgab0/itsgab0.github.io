const data = {
  tableHeadersCountries: {
    englishName: "English Name",
    englishOrigin: "English Origin",
    englishType: "English Type",
    nativeName: "Native Name",
    nativeOrigin: "Native Origin",
    nativeType: "Native Type",
  },
  tableHeadersLegend: {
    type: "Type",
    initial: "Initial",
    explanation: "Explanation",
    count: "Count",
  },
  countries: [
    {
      englishName: "Albania",
      englishOrigin: {
        origin: "Latin",
        explanation: '"Albani" - Illyrian tribe recorded by Ptolemy',
      },
      englishType: "P",
      nativeName: "Shqipëri",
      nativeOrigin: {
        origin: "Albania",
        explanation: '"Shqipëri" - (land of the eagles)',
      },
      nativeType: "A",
    },
    {
      englishName: "Andorra",
      englishOrigin: null,
      englishType: null,
      nativeName: "Andorra",
      nativeOrigin: {
        origin: "Greek\nBasque\nArabic\nNavarro-Aragonese",
        explanation:
          '"Andosinoi" - Andosins (Iberian pre-Roman tribe recorded by Polybius)\n"handia" - big/giant\n"al-darra" - thickly wooded place\n"andurrial" - covered with bushes',
      },
      nativeType: "P",
    },
    {
      englishName: "Austria",
      englishOrigin: null,
      englishType: null,
      nativeName: "Österreich",
      nativeOrigin: {
        origin: "Old High German\n⟶ Latin",
        explanation:
          '"Ostarrîchi" - eastern realm\n"marchia orientalis" - eastern realm',
      },
      nativeType: "L",
    },
    {
      englishName: "Belarus",
      englishOrigin: null,
      englishType: null,
      nativeName: "Belarus'",
      nativeOrigin: {
        origin: "Old East Slavic",
        explanation:
          '"bel + rusi" - white Ruthenia (Slavs - in contrast to Black Ruthenia (Balts))',
      },
      nativeType: "D",
    },
    {
      englishName: "Belgium",
      englishOrigin: null,
      englishType: null,
      nativeName: "België",
      nativeOrigin: {
        origin: "Latin",
        explanation: '"Belgae" - Belgae (iron-age tribe)',
      },
      nativeType: "P",
    },
    {
      englishName: "Bosnia and Herzegovina",
      englishOrigin: null,
      englishType: null,
      nativeName: "Bosna i Hercegovina",
      nativeOrigin: {
        origin: "Serbo-Croatian",
        explanation:
          '"Bosna" - Bosna (river), "Herzog + ov + ina" - land of the Duke (title of 15th century Bosnian magnate)',
      },
      nativeType: "N",
    },
    {
      englishName: "Bulgaria",
      englishOrigin: null,
      englishType: null,
      nativeName: "Bǎlgariya",
      nativeOrigin: {
        origin: "Bulgarian",
        explanation: '"Bǎlgar" - Bulgars (a Turkic group - disturbers)',
      },
      nativeType: "P",
    },
    {
      englishName: "Croatia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Hrvatska",
      nativeOrigin: {
        origin: "Serbo-Croatian",
        explanation: '"xorvat" - Croat (autonym)',
      },
      nativeType: "P",
    },
    {
      englishName: "Cyprus",
      englishOrigin: null,
      englishType: null,
      nativeName: "Kupros",
      nativeOrigin: {
        origin: "Mycenaean Greek",
        explanation: '"ku-pi-ri-jo" - Cypress tree, Henna tree, copper',
      },
      nativeType: "N",
    },
    {
      englishName: "Czechia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Česka",
      nativeOrigin: {
        origin: "Czech",
        explanation: '"čel" - people',
      },
      nativeType: "M",
    },
    {
      englishName: "Denmark",
      englishOrigin: null,
      englishType: null,
      nativeName: "Danmark",
      nativeOrigin: {
        origin: "Danish",
        explanation: '"dansk + merki" - Danish boundary',
      },
      nativeType: "L",
    },
    {
      englishName: "Estonia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Eesti",
      nativeOrigin: {
        origin: "German\n⟶ Latin",
        explanation:
          '"Eeste" - east\n"Aesti" - Aesti (tribe described by Tacitus)',
      },
      nativeType: "P",
    },
    {
      englishName: "Finland",
      englishOrigin: {
        origin: "Old Norse",
        explanation: '"Finnland" - land of the Finns',
      },
      englishType: "P",
      nativeName: "Suomi",
      nativeOrigin: {
        origin: "Balto-Slavic\nBalto-Slavic",
        explanation: '"*źemē" - ground\n"*ǵʰom-yā-" - human',
      },
      nativeType: "M",
    },
    {
      englishName: "France",
      englishOrigin: null,
      englishType: null,
      nativeName: "France",
      nativeOrigin: {
        origin: "Latin\n⟶ Proto-Germanic",
        explanation:
          '"Francia" - Francia (land inhabited by the Franks)\n"*frankô" - javelin',
      },
      nativeType: "D",
    },
    {
      englishName: "Germany",
      englishOrigin: {
        origin: "Latin\n⟶ Celtic\n⟶ Celtic\n⟶ Old High German",
        explanation:
          '"Germānia" - land of the Germans\n"gair" - neighbour\n"*garman" - noisy\n"gēr" - spear',
      },
      englishType: "D",
      nativeName: "Deutschland",
      nativeOrigin: {
        origin: "Old High German",
        explanation: '"diutisk" - of the people',
      },
      nativeType: "M",
    },
    {
      englishName: "Greece",
      englishOrigin: {
        origin: "Greek",
        explanation: '"Graikós" - Graikós (king of Phthia, son of Thessalos)',
      },
      englishType: "C",
      nativeName: "Elláda",
      nativeOrigin: {
        origin: "Greek",
        explanation:
          '"Helloí" - Hellenes (inhabitants of the area around Dodona)',
      },
      nativeType: "P",
    },
    {
      englishName: "Hungary",
      englishOrigin: {
        origin: "Latin\n⟶ Turkic",
        explanation:
          '"Ungari" - Ungari\n"Onoğurs" - Onogurs (a Turkic nomadic equestrian people)',
      },
      englishType: "P",
      nativeName: "Magyarország",
      nativeOrigin: {
        origin: "Hungarian\n⟶ Ugric",
        explanation: '"magyar + ország" - Hungarian land\n"*mańćɜ" - man',
      },
      nativeType: "M",
    },
    {
      englishName: "Iceland",
      englishOrigin: null,
      englishType: null,
      nativeName: "Ísland",
      nativeOrigin: {
        origin: "Icelandic",
        explanation: '"íss + land" - ice land',
      },
      nativeType: "D",
    },
    {
      englishName: "Ireland",
      englishOrigin: null,
      englishType: null,
      nativeName: "Éire",
      nativeOrigin: {
        origin: "Celtic\n⟶ Indo-European",
        explanation: '"*φīweryū" - Ireland\n"*peyH-" - milk, fat',
      },
      nativeType: "D",
    },
    {
      englishName: "Italy",
      englishOrigin: null,
      englishType: null,
      nativeName: "Italia",
      nativeOrigin: {
        origin: "Latin\n⟶⟶ Oscan",
        explanation: '"Italia" - Italy\n\'"víteliú" - land of bulls',
      },
      nativeType: "A",
    },
    {
      englishName: "Kosovo",
      englishOrigin: null,
      englishType: null,
      nativeName: "Kosovës",
      nativeOrigin: {
        origin: "Serbo-Croatian",
        explanation: '"kosovo polje" - blackbirds\' field',
      },
      nativeType: "A",
    },
    {
      englishName: "Latvia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Latvija",
      nativeOrigin: {
        origin: "Latvian\n⟶ Latvian",
        explanation:
          '"latvis" - Lett (member of the Latvian ethnic group)\n"*Latuva" - Latuva (a river)',
      },
      nativeType: "N",
    },
    {
      englishName: "Liechtenstein",
      englishOrigin: null,
      englishType: null,
      nativeName: "Liechtenstein",
      nativeOrigin: {
        origin: "German\n⟶ German",
        explanation:
          '"Liechtenstein" - Liechtenstein (the ruling dynasty)\n"licht + Stein" - bright stone',
      },
      nativeType: "D",
    },
    {
      englishName: "Lithuania",
      englishOrigin: null,
      englishType: null,
      nativeName: "Lietuva",
      nativeOrigin: {
        origin: "Lithuanian",
        explanation: '"Lietava" - Lietava (a rivulet in Lithuania)',
      },
      nativeType: "N",
    },
    {
      englishName: "Luxembourg",
      englishOrigin: null,
      englishType: null,
      nativeName: "Lëtzebuerg ",
      nativeOrigin: {
        origin: "Old High German\n⟶ Old High German",
        explanation:
          '"Lucilinburhuc" - Luxembourg\n\'"luzil + burg" - little castle',
      },
      nativeType: "D",
    },
    {
      englishName: "Malta",
      englishOrigin: null,
      englishType: null,
      nativeName: "Malta",
      nativeOrigin: {
        origin: "⟶⟶ Phoenician\n⟶ Greek",
        explanation: '"mlt" - refuge\n"mélitos" - honey',
      },
      nativeType: "D",
    },
    {
      englishName: "Moldova",
      englishOrigin: null,
      englishType: null,
      nativeName: "Moldova",
      nativeOrigin: {
        origin: "Gothic\nRomanian\nThracian-Illyrian",
        explanation:
          '"mulda" - dust\n"molid" - spruce\n"*mol + *dava" - mountain town',
      },
      nativeType: "D",
    },
    {
      englishName: "Monaco",
      englishOrigin: null,
      englishType: null,
      nativeName: "Monaco",
      nativeOrigin: {
        origin: "⟶ Greek",
        explanation:
          '"mónoikos" - single house (colony of Phocaeans and epithet of Heracles - who passed though Monaco)',
      },
      nativeType: "C",
    },
    {
      englishName: "Montenegro",
      englishOrigin: {
        origin: "Venetian",
        explanation: '"Montenegro" - black mountain [calque]',
      },
      englishType: "N",
      nativeName: "Crna Gora",
      nativeOrigin: {
        origin: "Serbo-Croatian",
        explanation: '"Crna Gora" - black mountain',
      },
      nativeType: "N",
    },
    {
      englishName: "Netherlands",
      englishOrigin: null,
      englishType: null,
      nativeName: "Nederland",
      nativeOrigin: {
        origin: "Dutch",
        explanation: '"neder + land" - lower lands',
      },
      nativeType: "L",
    },
    {
      englishName: "North Macedonia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Severna Makedonija",
      nativeOrigin: {
        origin: "⟶ Greek",
        explanation: '"makedonía" - highland',
      },
      nativeType: "L",
    },
    {
      englishName: "Norway",
      englishOrigin: null,
      englishType: null,
      nativeName: "Norge",
      nativeOrigin: {
        origin: "Old Norse",
        explanation: '"Norðvegr" - north way',
      },
      nativeType: "L",
    },
    {
      englishName: "Poland",
      englishOrigin: {
        origin: "Polish",
        explanation: '"Polanie" - Poles (field-dwellers)',
      },
      englishType: "P",
      nativeName: "Polska",
      nativeOrigin: {
        origin: "Slavic",
        explanation: "\"*pol'e + *zeml'a\" - plain country, field",
      },
      nativeType: "N",
    },
    {
      englishName: "Portugal",
      englishOrigin: null,
      englishType: null,
      nativeName: "Portugal",
      nativeOrigin: {
        origin: "Latin",
        explanation:
          '"Portus Cale" - port + port, port + Gallaeci (a Celtic tribe of Iberia), port + warm, port + beautiful, port + Gaia',
      },
      nativeType: "D",
    },
    {
      englishName: "Romania",
      englishOrigin: null,
      englishType: null,
      nativeName: "România",
      nativeOrigin: {
        origin: "Latin",
        explanation: '"romanus" - roman',
      },
      nativeType: "P",
    },
    {
      englishName: "Russia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Rossiya",
      nativeOrigin: {
        origin: "⟶⟶ Old East Slavic",
        explanation:
          '"Rus\'" - Rusians (people of Rus - group of Varangians ruling in Rus)',
      },
      nativeType: "P",
    },
    {
      englishName: "San Marino",
      englishOrigin: null,
      englishType: null,
      nativeName: "San Marino",
      nativeOrigin: {
        origin: "Italian",
        explanation:
          '"San Marino" - Saint Marinus (founder of the chapel that grew into San Marino)',
      },
      nativeType: "C",
    },
    {
      englishName: "Serbia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Srbija",
      nativeOrigin: {
        origin: "Serbo-Croatian",
        explanation: '"S\'rb" - Serb, ally',
      },
      nativeType: "P",
    },
    {
      englishName: "Slovakia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Slovensko",
      nativeOrigin: {
        origin: "Slavic",
        explanation: '"Slovenin" - Slav',
      },
      nativeType: "P",
    },
    {
      englishName: "Slovenia",
      englishOrigin: null,
      englishType: null,
      nativeName: "Slovenija",
      nativeOrigin: {
        origin: "Slavic",
        explanation: '"slovo" - word',
      },
      nativeType: "D",
    },
    {
      englishName: "Spain",
      englishOrigin: null,
      englishType: null,
      nativeName: "España",
      nativeOrigin: {
        origin: "Latin\nPhoenician/Punic",
        explanation:
          '"Hispania"\n"\'iy sapan" - land of hyraxes (rabbits - Phoenicians thought the rabbits resembled hyraxes)',
      },
      nativeType: "A",
    },
    {
      englishName: "Sweden",
      englishOrigin: {
        origin: "Old English\n⟶ Germanic",
        explanation: '"Swēoþēod" - Swede nation\n"*swiho" - one\'s own self',
      },
      englishType: "M",
      nativeName: "Sverige",
      nativeOrigin: {
        origin: "Swedish\n⟶ Germanic",
        explanation:
          '"svea + rike" - realm of the Swedes\n"*swiho" - one\'s own self',
      },
      nativeType: "M",
    },
    {
      englishName: "Switzerland",
      englishOrigin: {
        origin: "German\n⟶ Latin",
        explanation:
          '"Schwytzerland" - land of the Swiss\n"swīdan" - burn (referring to a spot cleared by slash-and-burn)',
      },
      englishType: "D",
      nativeName: "Helvetica",
      nativeOrigin: {
        origin: "Latin\n⟶ Gaulish",
        explanation:
          '"helvētiī" - Helvetians (a people in the Swiss region)\n"-elu" - gain, prosperity',
      },
      nativeType: "D",
    },
    {
      englishName: "Turkey",
      englishOrigin: null,
      englishType: null,
      nativeName: "Türkiye ",
      nativeOrigin: {
        origin: "Latin\n⟶⟶ Persian",
        explanation: '"Turcus" - Turk\n"Twlk\'" - Türk (Turkic autonym)',
      },
      nativeType: "P",
    },
    {
      englishName: "Ukraine",
      englishOrigin: null,
      englishType: null,
      nativeName: "Ukraïna",
      nativeOrigin: {
        origin: "Russian\n⟶ Old East Slavic",
        explanation: '"Ukraína" - borderland\n"u + krai + ina" - at the edge',
      },
      nativeType: "L",
    },
    {
      englishName: "United Kingdom",
      englishOrigin: null,
      englishType: null,
      nativeName: null,
      nativeOrigin: null,
      nativeType: null,
    },
    {
      englishName: "Vatican City",
      englishOrigin: null,
      englishType: null,
      nativeName: "Città del Vaticano",
      nativeOrigin: {
        origin: "Latin",
        explanation: '"vāticinārī" - to prophesy (cognate with Odin)',
      },
      nativeType: "D",
    },
  ],
  legend: {
    english: [
      {
        type: "Animals",
        initial: "A",
        explanation: "Animals",
        count: 0,
      },
      {
        type: "Location",
        initial: "L",
        explanation: "Locative",
        count: 0,
      },
      {
        type: "Character",
        initial: "C",
        explanation: "Specific Person",
        count: 1,
      },
      {
        type: '"Man"',
        initial: "M",
        explanation: "Man and Human Words",
        count: 1,
      },
      {
        type: "Nature",
        initial: "N",
        explanation: "Nature",
        count: 1,
      },
      {
        type: "Description",
        initial: "D",
        explanation: "Adjectives and Associated Nouns",
        count: 2,
      },
      {
        type: "People",
        initial: "P",
        explanation: "Group of People",
        count: 4,
      },
    ],
    native: [
      {
        type: "Character",
        initial: "C",
        explanation: "Specific Person",
        count: 2,
      },
      {
        type: "Animals",
        initial: "A",
        explanation: "Animals",
        count: 4,
      },
      {
        type: '"Man"',
        initial: "M",
        explanation: "Man and Human Words",
        count: 5,
      },
      {
        type: "Location",
        initial: "L",
        explanation: "Locative",
        count: 6,
      },
      {
        type: "Nature",
        initial: "N",
        explanation: "Nature",
        count: 6,
      },
      {
        type: "People",
        initial: "P",
        explanation: "Group of People",
        count: 11,
      },
      {
        type: "Description",
        initial: "D",
        explanation: "Adjectives and Associated Nouns",
        count: 12,
      },
    ],
  },
};

const etymologyTableSource = document.getElementById(
  "etymology-table-template"
).innerHTML;
const etymologyTableTemplate = Handlebars.compile(etymologyTableSource);
const normalisedCountries = data.countries.map((country) => {
  const normalisedCountry = [];
  for (const key in country) {
    let value = country[key];
    if (value?.origin) {
      value =
        '<div class="origin">' +
        value.origin.replace(/(\r\n|\n|\r)/gm, "<br>") +
        '</div><div class="explanation">' +
        value.explanation.replace(/(\r\n|\n|\r)/gm, "<br>") +
        "</div>";
    }
    let className = "";
    if (country[key] === null) className += " tableRow__empty";
    if (key === "englishName") className += " tableRow__englishName";
    normalisedCountry.push({
      header: data.tableHeadersCountries[key],
      value,
      className,
    });
  }
  return normalisedCountry;
});
document.getElementById("etymology-table").innerHTML = etymologyTableTemplate({
  countries: normalisedCountries,
});

const etymologyLegendSource = document.getElementById(
  "etymology-legend-template"
).innerHTML;
const etymologyLegendTemplate = Handlebars.compile(etymologyLegendSource);
document.getElementById("etymology-legend").innerHTML = etymologyLegendTemplate(
  data.legend
);
