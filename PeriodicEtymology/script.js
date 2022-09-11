const elementData = {
  element: [
    [1, "H", "Greek", "R", "GRC: ὕδωρ + γενής (húdōr genḗs)", "water begetter"],
    ["gap", 16],
    [2, "He", "Greek", "L", "GRC: ἥλιος (hḗlios)", "sun"],
    [3, "Li", "Greek", "S", "GRC: λίθος (lítʰos)", "stone"],
    [4, "Be", "English", "S", "ENG: beryl", "beryl"],
    ["gap", 10],
    [5, "B", "English", "S", "ENG: borax", "borax"],
    [6, "C", "French", "S", "FRA: charbone", "charcoal"],
    [7, "N", "Greek", "R", "GRC: νίτρον + γενής (nítron genḗs)", "niter begetter"],
    [8, "O", "Greek", "R", "GRC: ὀξύ + γείνομαι (oksý geínomai)", "to bring forth acid"],
    [9, "F", "Latin", "P", "LAT: fluo", "to flow", "added to metal ores to improve smelting"],
    [10, "Ne", "Greek", "L", "GRC: νέος (néos)", "new", "newly discovered"],
    [11, "Na", "English", "S", "ENG: soda", "sodium"],
    [12, "Mg", "Greek", "T", "GRC: Μαγνησία (Magnēsía)", "Magnesia (Thessaly)"],
    ["gap", 10],
    [13, "Al", "English", "S", "ENG: alumina", "aluminium oxide"],
    [14, "Si", "Latin", "S", "LAT: silex", "flint"],
    [15, "P", "Greek", "P", "GRC: φῶς + φόρος (pʰôs pʰóros)", "light bearer"],
    [16, "S", "ProtoLanguages", "A", "PIE: *swépl̥", "burn"],
    [17, "Cl", "Greek", "P", "GRC: χλωρός (kʰlōrós)", "pale green"],
    [18, "Ar", "Greek", "P", "GRC: ἀργόν (argón)", "inactive"],
    [19, "K", "Dutch", "S", "NLD: potas", "potash"],
    [20, "Ca", "Latin", "S", "LAT: calx", "lime"],
    [21, "Sc", "Latin", "T", "LAT: Scandia", "Scandinavia"],
    [22, "Ti", "Greek", "P", "GRC: Τιτάν (Titán)", "Titan", "very strong like a god"],
    [23, "V", "OldNorse", "V", "NON: Vanadís", "Freyja", "really beautiful"],
    [24, "Cr", "Greek", "P", "GRC: χρῶμα (kʰrôma)", "colour", "produced colourful salts"],
    [25, "Mn", "Greek", "T", "Μαγνησία (Magnēsía)", "Magnesia (Thessaly)"],
    [26, "Fe", "ProtoLanguages", "A", "PIE: *ish₂ros", "holy"],
    [27, "Co", "German", "S", "DEU: Kobold", "goblin", "ores poor in known metals were called kobold ore"],
    [28, "Ni", "German", "L", "DEU: Nickel", "goblin", "ores resisted refinement like a mischievous sprite"],
    [29, "Cu", "Latin", "T", "LAT: aes Cyprium", "Cyprian brass"],
    [30, "Zn", "German", "P", "DEU: Zinke", "prong"],
    [31, "Ga", "Latin", "T", "LAT: Gallia", "Gaul (France)", "native country of Paul Emile Lecoq de Boisbaudran"],
    [32, "Ge", "Latin", "T", "LAT: Germānia", "Germany", "native country of Clemens Winkler"],
    [33, "As", "ProtoLanguages", "A", "PIE: *ǵʰelh₃-", "yellow"],
    [34, "Se", "Greek", "L", "GRC: σελήνη (selḗnē)", "moon", "in contrast to similar tantalum"],
    [35, "Br", "Greek", "P", "GRC: βρῶμος (brômos)", "stink"],
    [36, "Kr", "Greek", "L", "GRC: κρυπτός (kryptós)", "hidden", "remained undiscovered for a long time"],
    [37, "Rb", "Latin", "P", "LAT: rubidus", "red", "red spectral lines"],
    [38, "Sr", "English", "T", "ENG: Strontian", "Strontian (Scotland)"],
    [39, "Y", "Swedish", "T", "SWE: Ytterby", "Ytterby (Sweden)"],
    [40, "Zr", "German", "S", "DEU: Zirkon", "zircon"],
    [41, "Nb", "Greek", "L", "GRC: Νιόβη (Nióbē)", "Niobe (daughter of Tantalus)", "in contrast to similar tantalum"],
    [42, "Mo", "Greek", "A", "GRC: μόλυβδος", "lead", "often confused with lead ores"],
    [43, "Tc", "Greek", "A", "GRC:τεχνητός", "artificial", "first synthetic element"],
    [44, "Ru", "English", "T", "ENG: Ruthenia", "Ruthenia (Eastern Europe)"],
    [45, "Rh", "Greek", "P", "GRC: ῥόδον (rhódon)", "rose", "rose-coloured salts"],
    [46, "Pd", "English", "L", "ENG: Pallas", "Pallas", "named after recently-discovered asteroid"],
    [47, "Ag", "ProtoLanguages", "A", "PGmc: *silubrą", "silver"],
    [48, "Cd", "Greek", "S", "GRC: Καδμεία", "calamine"],
    [49, "In", "German", "P", "DEU: Indigo", "indigo", "indigo spectral lines"],
    [50, "Sn", "ProtoLanguages", "A", "PGmc: *tiną", "tin"],
    [51, "Sb", "Arabic", "S", "ARA: إِثْمِد (ʾiṯmid)", "antimony ore"],
    [52, "Te", "Latin", "S", "LAT: tellus", "earth"],
    [53, "I", "Greek", "P", "GRC: ἰοειδής (ioeidḗs)", "violet"],
    [54, "Xe", "Greek", "P", "GRC: ξένος (ksénos)", "foreign", "residue from evaporated liquid air"],
    [55, "Cs", "Latin", "P", "LAT: caesius", "sky-blue", "sky-blue spectral lines"],
    [56, "Ba", "English", "S", "ENG: baryta", "baryta", "barium compounds"],
    ["gap", 1],
    [72, "Hf", "Latin", "T", "LAT: Hafnia", "Copenhagen (Denmark)"],
    [73, "Ta", "Greek", "P", "GRC: Τάνταλος (Tántalos)", "Tantalus", "inability to absorb acid"],
    [74, "W", "Swedish", "P", "SWE: tungsten", "heavy stone (scheelite)"],
    [75, "Re", "Latin", "T", "LAT: Rhenus", "Rhine"],
    [76, "Os", "Greek", "P", "GRC: ὀσμή (osmḗ)", "smell", "strong smell of osmium oxide"],
    [77, "Ir", "Greek", "P", "GRC: ἶρις (îris)", "rainbow", "bright coloured salts"],
    [78, "Pt", "Spanish", "L", "SPA: platina del Pinto", "little silver of the Pinto", "by association with silver and as an impurity in gold"],
    [79, "Au", "ProtoLanguages", "A", "PIE: *ǵʰelh₃-", "yellow"],
    [80, "Hg", "Latin", "P", "LAT: Mercury", "Mercury", "god associated with speed and mobility"],
    [81, "Tl", "Greek", "P", "GRC: θαλλός (tʰallós)", "green branch", "green spectral lines"],
    [82, "Pb", "ProtoLanguages", "A", "PIE: *plewd-", "to flow"],
    [83, "Bi", "Greek", "P", "GRC: ψιμύθιον (psimýtʰion)", "white lead"],
    [84, "Po", "Latin", "T", "LAT: Polonia", "Poland", "native country of Marie Curie"],
    [85, "At", "Greek", "P", "GRC: ἄστατος (ástatos)", "unstable"],
    [86, "Rn", "English", "P", "ENG: radium emanation", "radium emanation", "appears in a radium decay chain"],
    [87, "Fr", "French", "T", "FRA: France", "France", "native country of Marguerite Perey"],
    [88, "Ra", "French", "P", "FRA: radioactif", "radioactive"],
    ["gap", 1],
    [104, "Rf", "English", "E", "ENG: Rutherford", "Rutherford", "named after Ernest Rutherford"],
    [105, "Db", "Russian", "T", "RUS:  Дубна́ (Dubná)", "Dubna (Russia)"],
    [106, "Sg", "English", "E", "ENG: Seaborg", "Seaborg", "named after Glenn T. Seaborg"],
    [107, "Bh", "Danish", "E", "DAN: Bohr", "Bohr", "named after Niels Bohr"],
    [108, "Hs", "Latin", "T", "LAT: Hassia", "Hesse (Germany)"],
    [109, "Mt", "German", "E", "DEU: Meitner", "Meitner", "named after Lise Meitner"],
    [110, "Ds", "German", "T", "DEU: Darmstadt", "Darmstadt (Germany)"],
    [111, "Rg", "German", "E", "DEU: Röntgen", "Roentgen", "named after Wilhem Röntgen"],
    [112, "Cn", "Polish", "E", "POL: Kopernik", "Copernicus", "named after Nicolaus Copernicus"],
    [113, "Nh", "Japanese", "T", "JAP: 日本 (nihon)", "Japan"],
    [114, "Fl", "Russian", "E", "RUS: Флёров (Flyorov)", "Flyorov", "named after Georgy Flyorov"],
    [115, "Mc", "Russian", "T", "RUS: Москва (Moskva)", "Moscow"],
    [116, "Lv", "English", "T", "ENG: Livermore", "Livermore (USA)"],
    [117, "Ts", "English", "T", "ENG: Tennessee", "Tennessee (USA)"],
    [118, "Og", "Russian", "E", "RUS: Оганесян (Oganesyan)", "Oganesyan", "named after Yuriy Tsolakovich Oganesyan"],
    ["gap", 20],
    [57, "La", "Greek", "L", "GRC: λανθάνω (lantʰánō)", "to escape notice", "remained undiscovered for a long time"],
    [58, "Ce", "English", "L", "ENG: Ceres", "Ceres", "named after recently-discovered asteroid"],
    [59, "Pr", "Greek", "P", "GRC: πράσιος (prásios)", "leek-green", "produced leek-green salts"],
    [60, "Nd", "Greek", "L", "GRC: νέος + διδύμος (néos didýmos)", "new twin", "discovered with praseodymium"],
    [61, "Pm", "Greek", "L", "GRC: Προμηθεύς (Promētʰeýs)", "Prometheus", "represent daring and misuse of mankind's intellect"],
    [62, "Sm", "Russian", "S", "RUS: самарските (samarskitye)", "samarskite"],
    [63, "Eu", "Greek", "T", "GRC: Εὐρώπη (Eurṓpē)", "Europe"],
    [64, "Gd", "Finnish", "E", "FIN: Gadolin", "Gadolin", "named after Johann Gadolin"],
    [65, "Tb", "Swedish", "T", "SWE: Ytterby", "Ytterby (Sweden)"],
    [66, "Dy", "Greek", "L", "GRC: δυσπρόσιτος (dysprósitos)", "hard-to-get", "only originally isolated after 30 attempts"],
    [67, "Ho", "Latin", "T", "LAT: Holmia", "Stockholm", "native country of Per Theodor Cleve"],
    [68, "Er", "Swedish", "T", "SWE: Ytterby", "Ytterby (Sweden)"],
    [69, "Tm", "Greek", "T", "GRC: Θούλη (Tʰoúlē)", "Thule", "mythical scandinavian land of antiquity"],
    [70, "Yb", "Swedish", "T", "SWE: Ytterby", "Ytterby (Sweden)"],
    [71, "Lu", "Latin", "T", "LAT: Lutetia", "Paris (France)"],
    ["gap", 3],
    [89, "Ac", "Greek", "P", "GRC: ἀκτίς (aktís)", "beam", "emitted beta rays"],
    [90, "Th", "OldNorse", "E", "NON: Þórr (Thórr)", "Thor"],
    [91, "Pa", "English", "P", "ENG: proto actinium", "proto actinium", "precursor to actinium via radioactive decay"],
    [92, "U", "Latin", "L", "LAT: Uranus", "Uranus", "named after recently-discovered planet"],
    [93, "Np", "Latin", "L", "LAT: Neptune", "Neptune", "next planet after Uranus"],
    [94, "Pu", "Latin", "L", "LAT: Pluto", "Pluto", "next planet after Neptune"],
    [95, "Am", "English", "T", "ENG: America", "America"],
    [96, "Cm", "French", "E", "FRA: Curie", "Curie", "named after Marie and Pierre Curie"],
    [97, "Bk", "English", "T", "ENG: Berkeley", "Berkeley (USA)"],
    [98, "Cf", "English", "T", "ENG: California", "California (USA)"],
    [99, "Es", "German", "E", "DEU: Einstein", "Einstein", "named after Albert Einstein"],
    [100, "Fm", "Italian", "E", "ITA: Fermi", "Fermi", "named after Enrico Fermi"],
    [101, "Md", "Russian", "E", "RUS: Менделеев (Mendeleyev)", "Mendeleev", "named after Dmitri Mendeleev"],
    [102, "No", "Swedish", "E", "SWE: Nobel", "Nobel", "named after Alfred Nobel"],
    [103, "Lr", "English", "E", "ENG: Lawrence", "Lawrence", "named after Ernest Lawrence"],
    ["gap", 1]
  ]
};

const transformedElements = [];

const languages = {
  language: [
    ["Arabic", 1],
    ["Danish", 1],
    ["Dutch", 1],
    ["English", 19],
    ["Finnish", 1],
    ["French", 4],
    ["German", 9],
    ["Greek", 37],
    ["Italian", 1],
    ["Japanese", 1],
    ["Latin", 20],
    ["OldNorse", 2],
    ["ProtoLanguages", 7],
    ["Polish", 1],
    ["Russian", 6],
    ["Spanish", 1],
    ["Swedish", 6]
  ]
};

const origins = {
  origin: [
    ["Ancient", 8],
    ["Eponym", 16],
    ["Linguistics", 16],
    ["Property", 28],
    ["Reaction", 3],
    ["Source", 16],
    ["Toponym", 31]
  ]
};

// convert gaps into individual gap elements
elementData.element.forEach ( function( element ) {
  if ( element[0] == "gap" ) {
    for ( var i = 0; i < element[1]; i++ ) {
      transformedElements.push( ["","","gap"] );
    }
  } else {
    transformedElements.push( element );
  }
});

elementData.element = transformedElements;

//compile handlebars statement
var elementTemplate = Handlebars.compile( 
  "{{#each element}}<li class='pt{{this.[2]}}'><ul><li>{{this.[0]}}</li><li>{{this.[1]}}</li><li>{{this.[3]}}</li></ul><span class='ptTip'>{{this.[4]}}<br/>{{this.[5]}}<br/>{{this.[6]}}</span></li>{{/each}}" );

//execute handlebars statement
document.getElementById ( "periodicTable" ).innerHTML += elementTemplate ( elementData );

//compile handlebars statement
var languageTemplate = Handlebars.compile( "<li>{{#each language}}<ul><li class='pt{{this.[0]}}'>&nbsp;</li><li>{{this.[0]}}</li><li>{{this.[1]}}</li></ul>{{/each}}</li>" );

//execute handlebars statement
document.getElementById( "ptLegend" ).innerHTML += languageTemplate ( languages );

var originTemplate = Handlebars.compile( "<li>{{#each origin}}<ul><li>{{this.[0]}}</li><li>{{this.[1]}}</li></ul>{{/each}}</li>" );

document.getElementById( "ptLegend" ).innerHTML += originTemplate ( origins );