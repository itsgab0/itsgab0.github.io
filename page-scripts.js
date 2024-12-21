/* periodic-table-etymology.md */

const ElementData = {
  Element: [
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

function RenderPeriodicTable() {
  const TransformedElements = [];
  
  // Convert Gaps Into Individual Gap Elements
  ElementData.Element.forEach ( function( Element ) {
    if ( Element[0] === "gap" ) {
      for ( var i = 0; i < Element[1]; i++ ) {
        TransformedElements.push( ["","","gap"] );
      }
    } else {
      TransformedElements.push( Element );
    }
  });
  
  ElementData.Element = TransformedElements;
  
  //Compile Handlebars Statement
  var ElementTemplate = Handlebars.compile( "{{#each Element}}<li class='pt{{this.[2]}}'><ul><li>{{this.[0]}}</li><li>{{this.[1]}}</li><li>{{this.[3]}}</li></ul><span class='ptTip'>{{this.[4]}}<br/>{{this.[5]}}<br/>{{this.[6]}}</span></li>{{/each}}" );

  //Execute Handlebars Statement
  $( "#PeriodicTable" ).html( ElementTemplate ( ElementData ) );

}

/* gen-z-lingo.md */

const LingoData = {
  A: [
    {
      head: "acc",
      pron: "ak",
      defs: [ { type: "adv", defn: "Actually", quot: "i acc hate you", note: "abbreviation" } ]
    },
    {
      head: "acoustic",
      pron: "əkúwstik",
      defs: [ { type: "adj", defn: "Austistic", quot: "i may be a lil austistic but i'm trying my best", note: "Used either euphemistically or to circumvent automated censorship" } ]
    },
    {
      head: "af",
      pron: "ey éf",
      defs: [ { type: "inj", defn: "As fuck; really", quot: "damn that's bold af of you", note: "" } ]
    },
    {
      head: "age like milk",
      pron: "eyj layk mílk",
      defs: [ { type: "vb. phr", defn: "To mature poorly; to become controversial", quot: "all those quotes about Jimmy Savile aged like milk", note: "antonym of 'age like a fine wine', as unlike wine, milk begins to spoil quite quickly" } ]
    },
    {
      head: "aight",
      pron: "ayt",
      defs: [ { type: "inj", defn: "All right; O.K.", quot: "aight let's head out", note: "" } ]
    },
    {
      head: "ain't it, chief",
      pron: "eynt ít chiyf",
      defs: [ { type: "vb. phr", defn: "To be disagreeable", quot: "i don't know — that shirt ain't it, chief", note: "" } ]
    },
    {
      head: "AITA",
      pron: "am áy dhiy âs·houl",
      defs: [ { type: "vb. phr", defn: "Am I The Asshole?", quot: "AITA for not wanting to commit vehicular manslaughter?", note: "abbreviation, from the reddit subcommunity r/amitheasshole where users retell personal experiences and ask other users if they were acting unreasonably" } ]
    },
    {
      head: "alpha male",
      pron: "álfə meyl",
      defs: [ { type: "n. phr", defn: "An aggressive male who claims or evidences superiority", quot: "i swear girls want alpha males, just buy my $400 course", note: "from the now-debunked concept of 'alpha' and 'beta' wolves, often used self-referentially" } ]
    },
    {
      head: "amogus",
      pron: "əmówgəs",
      defs: [ { type: "n", defn: "A resemblance or actual image of a character from the 'Among Us' videogame", quot: "guys look — its amogus", note: "from a corruption of the aforementioned video game, often used to describe things that resemble the character, e.g., the Sinhalese-language glyph 'ඞ' (ṅa)" } ]
    },
    {
      head: "antimasker",
      pron: "ántiymáskə(r)",
      defs: [ { type: "n", defn: "A person who refuses to wear a face covering when asked to do so during a pandemic", quot: "another clash between retail workers and antimaskers", note: "often used pejoratively but also commonly self-referentially" } ]
    },
    {
      head: "ate",
      pron: "eyt",
      defs: [ { type: "pst. vb", defn: "To have done a good job", quot: "she ate on the dance floor", note: "also appears as 'ate sth. up'" } ]
    }
  ],
  B: [
    {
      head: "babygirl",
      pron: "béybiygə̄(r)l",
      defs: [ { type: "adj", defn: "Cute; attractive; effeminate", quot: "kpop boys can be so babygirl", note: "predominantly used to describe men" } ]
    },
    {
      head: "baddie",
      pron: "bádiy",
      defs: [ { type: "n", defn: "A confident, attractive woman", quot: "my college professor a baddie", note: "" } ]
    },
    {
      head: "bae",
      pron: "bey",
      defs: [ { type: "n", defn: "Babe; one's significant other", quot: "omg bae proposed last night", note: "used endearingly" } ]
    },
    {
      head: "banger",
      pron: "bángə(r)",
      defs: [ { type: "n", defn: "An enjoyable tune or song", quot: "he's released nothing but bangers this year", note: "" } ]
    },
    {
      head: "based",
      pron: "beyst",
      defs: [ { type: "adj", defn: "Admirable", quot: "i saw their interview and they're kinda based", note: "predominantly used to describe more extreme politics" } ]
    },
    {
      head: "basic",
      pron: "béysik",
      defs: [ { type: "adj", defn: "Unremarkable, boring", quot: "you're basic", note: "" } ]
    },
    {
      head: "bedrot",
      pron: "bédrot",
      defs: [ { type: "n", defn: "A state of spending many waking hours in bed, either procrastinating or avoiding activities", quot: "who needs self-care when you've got bedrot", note: "associated with sufferers of depression" } ]
    },
    {
      head: "bet",
      pron: "be'(t)",
      defs: [ { type: "inj", defn: "O.K.", quot: "eat that glass bottle? aight bet", note: "used to express sarcastic agreement" } ]
    },
    {
      head: "beta male",
      pron: "béytə meyl",
      defs: [ { type: "n. phr", defn: "A weak-willed male who is predisposed to subservience or cuckholdry", quot: "stop being such a beta male and buy my $400 course", note: "often used pejoratively" } ]
    },
    {
      head: "big brained",
      pron: "big bréynd",
      defs: [ { type: "adj. phr", defn: "Highly intelligent", quot: "if you can't get a girl, get a guy — now that's big brained", note: "often used sarcastically" } ]
    },
    {
      head: "big dick energy",
      pron: "big dik énə(r)jiy",
      defs: [ { type: "n. phr", defn: "A respectful aura of a confident man displaying humility and supportiveness", quot: "husbands of successful women have big dick energy", note: "" } ]
    },
    {
      head: "blep",
      pron: "blep",
      defs: [ { type: "onm", defn: "A pet cutely sticking their tongue out", quot: "the dog, he blep", note: "" } ]
    },
    {
      head: "booba",
      pron: "búwbə",
      defs: [ { type: "n", defn: "Boobs; breasts", quot: "the only thing straight guys and lesbians can agree on is booba", note: "" } ]
    },
    {
      head: "bm",
      pron: "biy ém",
      defs: [ { type: "n", defn: "Bad manners", quot: "bro quit trash talking that's so bm", note: "associated with players of video game" } ]
    },
    {
      head: "body count",
      pron: "bódiy kawnt",
      defs: [ { type: "n. phr", defn: "One's quantity of prior sexual partners", quot: "her body count is higher than your bmi", note: "" } ]
    },
    {
      head: "bofa",
      pron: "bówfə",
      defs: [ { type: "inj", defn: "Both of", quot: "you got any bofa? bofa deez nuts", note: "used to setup the pun 'bofa deez nuts', which sounds like 'both of these nuts'" } ]
    },
    {
      head: "boomer",
      pron: "búwmə(r)",
      defs: [ { type: "n", defn: "A member of the 'Baby-Boomer' generation (born from the late-1940s to the early-1960s)", quot: "OK boomer, you bought your house for sixpence", note: "often used pejoratively" } ]
    },
    {
      head: "bop",
      pron: "bop",
      defs: [ { type: "n", defn: "An enjoyable tune or song", quot: "he's released nothing but bops this year", note: "" } ]
    },
    {
      head: "boss",
      pron: "bos",
      defs: [ { type: "n", defn: "A man", quot: "mornings boss, how's it going", note: "used endearingly with connotations of friendly respect" } ]
    },
    {
      head: "brainlet",
      pron: "bréynlət",
      defs: [ { type: "n", defn: "An especially stupid person", quot: "my best mate's a brainlet idk how he's survived this long", note: "" } ]
    },
    {
      head: "Britfag",
      pron: "brítfag",
      defs: [ { type: "n", defn: "A person from the United Kingdom of Great Britain and Northern Ireland", quot: "oi britfag you got a licence for that licence?", note: "often used pejoratively" } ]
    },
    {
      head: "bsf",
      pron: "bést frend",
      defs: [ { type: "n", defn: "Best friend", quot: "she my bsf", note: "abbreviation" } ]
    },
    {
      head: "/b/tard",
      pron: "bíytaʰ(r)d",
      defs: [ { type: "n", defn: "A frequent user of 4chan, especially the often-taboo imageboard /b/", quot: "jesus what a /b/tard", note: "often used pejoratively but also commonly self-referentially" } ]
    },
    {
      head: "bussin",
      pron: "bə́sin",
      defs: [ { type: "adj", defn: "Delicious", quot: "this quiche is bussin", note: "" } ]
    },
    {
      head: "bussy",
      pron: "búsiy",
      defs: [ { type: "n", defn: "Boy pussy; the male anus", quot: "why does he keep going on about bussy", note: "associated with the LGBT community" } ]
    }
  ],
  C: [
    {
      head: "cancel",
      pron: "kánsəl",
      defs: [ { type: "vb", defn: "To cease moral or monetary support for a public figure with an irreconcilable difference of opinion", quot: "sorry mate they've been trying to cancel her for years" } ]
    },
    {
      head: "cap",
      pron: "kap",
      defs: [ { type: "n", defn: "A lie; a falsehood", quot: "ayo that's cap bro" },
            { type: "v", defn: "To lie", quot: "you're cappin' no way she said yes" }]
    },
    {
      head: "car",
      pron: "kaʳ",
      defs: [ { type: "n", defn: "A cat", quot: "what car is that?", note: "humorous comparison and respelling of 'cat', the former equating a cat's purr to an engine's thrum" } ]
    },
    {
      head: "catch hands",
      pron: "kach hán(d)z",
      defs: [ { type: "vb. phr", defn: "To have a fight", quot: "you're boutta catch these hands" } ]
    },
    {
      head: "caught in 4k",
      pron: "koʳt in fóʳkey",
      defs: [ { type: "adj. phr", defn: "Exposed for one's faults or crimes with evidence", quot: "babes you got caught cheating in 4k just accept the breakup" } ]
    },
    {
      head: "CEO",
      pron: "siyiyów",
      defs: [ { type: "n", defn: "A master; a professional", quot: "she's the CEO of gaslighting" } ]
    },
    {
      head: "chaser",
      pron: "chéysə(r)",
      defs: [ { type: "n", defn: "A person who seeks sexual partners with one specific characteristic, e.g., trans women, fat men", quot: "i thought we had something, but you're just a chaser" } ]
    },
    {
      head: "chef's kiss",
      pron: "shéfs kis",
      defs: [ { type: "adj", defn: "Of high quality; very good", quot: "this painting is just *chef's kiss*", note: "refers to the stereotypical hand gesture of a proud chef" } ]
    },
    {
      head: "chonk",
      pron: "chóngk",
      defs: [ { type: "n", defn: "A large animal", quot: "oh lawd he a chonk", note: "often used for one's pet" } ]
    },
    {
      head: "chronically online",
      pron: "krónikliy onláyn",
      defs: [ { type: "adj. phr", defn: "A person whose personality is characterised by overuse of trending internet jokes", quot: "all the chronically online think everything's a personal attack" } ]
    },
    {
      head: "cishet",
      pron: "sís·het",
      defs: [ { type: "adj. phr", defn: "Cisgender and heterosexual", quot: "i may be cishet but i'm still an ally", note: "cisgender refers to sb. whose gender identity aligns with their birth sex; heterosexual refers to sb. whose sexual preference is predominated by opposite-sex attraction" } ]
    },
    {
      head: "clickbait",
      pron: "klíkbeyt",
      defs: [ { type: "n", defn: "Online content using over-sensationalised headlines to draw in users", quot: "i thought that news article was gonna be clickbait", note: "refers to how an enticing headline may encourage a web user to 'click' on a link to a page riddled with ads" } ]
    },
    {
      head: "coomer",
      pron: "kúwmə(r)",
      defs: [ { type: "n", defn: "An exaggerated man with a severe addiction to masturbation", quot: "shut up you coomer", note: "often used pejoratively" } ]
    },
    {
      head: "cope",
      pron: "kówp",
      defs: [ { type: "vb", defn: "To be upset; to struggle through adversity", quot: "no-one's listening to you, cope hard", note: "often used imperatively, i.e., telling someone to suffer" } ]
    },
    {
      head: "-core",
      pron: "kóʳ",
      defs: [ { type: "n. suf", defn: "Indicated a specific aesthetic, such as in fashion or cliques", quot: "i absolutely love cottagecore, all the plants are so cute" } ]
    },
    {
      head: "corecore",
      pron: "kóʳkoʳ",
      defs: [ { type: "n", defn: "An audiovisual movement or aesthetic comprising (seemingly or actually) unrelated clips and music of the 2020's zeitgeist", quot: "these corecore vids are my guilty pleasure", note: "associated with a variety of themes, intended to evoke feelings of confusion, despair, and unease – but thereby reassuring those who typically suffer from such negative feelings that they're not alone" } ]
    },
    {
      head: "corn",
      pron: "ko(r)n",
      defs: [ { type: "n", defn: "Pornography", quot: "i can't believe they get away with posting borderline corn", note: "used to circumvent automated censorship; may be replaced with a corn emoji" } ]
    },
    {
      head: "covidiot",
      pron: "kowvídiyət",
      defs: [ { type: "n", defn: "A person who recklessly disregards guidance with regards to spreading COVID-19", quot: "those covidiots having parties when they should be in lockdown" } ]
    }
  ],
  D: [
    {
      head: "dabloon",
      pron: "dəblúwn",
      defs: [ { type: "n", defn: "A fictional currency used by cat characters to buy and sell fictional goods", quot: "nyellow, thanks for visiting here's a free dabloon" } ]
    },
    {
      head: "dadbod",
      pron: "dádbod",
      defs: [ { type: "n", defn: "A figure of a stereotypical father with a slight paunch", quot: "her dad has a total dadbod and i'm all for it" } ]
    },
    {
      head: "daddy",
      pron: "dádiy",
      defs: [ { type: "n", defn: "A male idol", quot: "may be due to romantic or sexual attraction, or just being a positive role-model" } ]
    },
    {
      head: "dark academia",
      pron: "dáʰ(r)k akədíymiyə",
      defs: [ { type: "n. phr", defn: "An aesthetic comprising a romanticised world of fine art and higher education", quot: "these dark academia playlists make me wanna become a professor of death" } ]
    },
    {
      head: "dark web",
      pron: "dáʰ(r)k web",
      defs: [ { type: "n. phr", defn: "The area of the deep web devoted to content inaccessible without specialist software – renowned for hosting amoral content such as the illicit sale of drugs, weapons, and illegal pornography", quot: "what were you even looking for on the dark web?" } ]
    },
    {
      head: "deadass",
      pron: "dédas",
      defs: [ { type: "adv", defn: "Seriously; really", quot: "did you deadass just do that" } ]
    },
    {
      head: "deadname",
      pron: "dédneym",
      defs: [ { type: "v", defn: "To call a transgender person by their birth name instead of their preferred/legal name", quot: "is it that hard to not deadname your friends from high school?" } ]
    },
    {
      head: "deep web",
      pron: "díyp web",
      defs: [ { type: "n. phr", defn: "The area of the World Wide Web inaccessible from standard search engines", quot: "my fresh site is still on the deep web for now" } ]
    },
    {
      head: "delulu",
      pron: "dəlúwluw",
      defs: [ { type: "adj", defn: "Delusional", quot: "ok girlie you're delulu", note: "used to describe someone obsessed with a popular figure, especially if they believe they could have a relationship with them despite never having met them" } ]
    },
    {
      head: "demi",
      pron: "démiy",
      defs: [ { type: "adj", defn: "Demisexual", quot: "just so you know, they're demi", note: "used to describe someone whose sexual attraction is contingent on a strong emotional bond" } ]
    },
    {
      head: "derp",
      pron: "də̄(r)p",
      defs: [ { type: "n", defn: "A foolish person", quot: "omg i'm so sorry i'm such a derp" } ]
    },
    {
      head: "dk",
      pron: "diy kéy",
      defs: [ { type: "vb. phr", defn: "Don't know", quot: "dk mate sorry" } ]
    },
    {
      head: "dickrider",
      pron: "díkraydə(r)",
      defs: [ { type: "n. phr", defn: "A sycophant; an obsequious person", quot: "aight mate i didn't know you were such a musk dickrider" } ]
    },
    {
      head: "dm",
      pron: "diyem",
      defs: [ { type: "n", defn: "Direct Message; an message sent privately via online or text services", quot: "hey man check your dm's god damn" },
            { type: "vb", defn: "To send a direct message; to communicate privately with someone", quot: "i think she's tryna dm you too" } ]
    },
    {
      head: "dogwater",
      pron: "dáʰgwaʰtə(r)",
      defs: [ { type: "adj", defn: "Extremely bad (especially at playing video games)", quot: "ur literally dogwater bro never play again" } ]
    },
    {
      head: "don't @ me",
      pron: "downt át miy",
      defs: [ { type: "vb. phr", defn: "Don't Tag Me; don't reply or speak to me", quot: "imma say it: milk is the superior beverage don't @ me", note: "used to indicate one's opinion is not up for discussion; refers to social media practice of putting '@' before sb's username to send a message to them" } ]
    },
    {
      head: "doomer",
      pron: "dúwmə(r)",
      defs: [ { type: "n", defn: "An extremely pessimistic or fatalistic person; a neo-nihilist", quot: "climate doomers might have a point you know" } ]
    },
    {
      head: "doompost",
      pron: "dúwmpowst",
      defs: [ { type: "v", defn: "To focus on or highlight predominantly negative news or ideas", quot: "all this doomposting is really bringing the vibe down" } ]
    },
    {
      head: "doomscroll",
      pron: "dúwmskrowl",
      defs: [ { type: "v", defn: "To consume excessive amounts of online content by continuously 'scrolling' to the next story or post", quot: "she does nothing but doomscroll every day should we say sth?" } ]
    },
    {
      head: "down bad",
      pron: "dawn bád",
      defs: [ { type: "adj. phr", defn: "Sexually or romantically unfulfilled", quot: "yo i am down so bad i'm catching feelings for my tv", note: "may be intensified as 'down astronomical'" } ]
    },
    {
      head: "drip",
      pron: "jrip",
      defs: [ { type: "n", defn: "Style; fashionable clothing", quot: "he's got mad drip" } ]
    }
  ],
  E: [
    {
      head: "eepy",
      pron: "íypiy",
      defs: [ { type: "adj", defn: "Sleepy", quot: "ooh i am so eepy stop calling me", note: "used mainly for pets, and can carry childlike or adorable qualities if used for a person" } ]
    },
    {
      head: "enby",
      pron: "énbiy",
      defs: [ { type: "n", defn: "A non-binary person", quot: "this is for the girls, boys, and enbies", note: "from pronunciation of 'NB'; a non-binary person is one whose gender identity doesn't conform to traditional archetypes" } ]
    },
    {
      head: "~ era",
      pron: "ēra",
      defs: [ { type: "n", defn: "Area or breadth of incidental interests", quot: "i'm in my loving candles era", note: "used to describe sb's current enthusiasm for sth.; often used in the phase 'in my ~ era'" } ]
    },
    {
      head: "extra",
      pron: "ékshtrə",
      defs: [ { type: "adj", defn: "Excessive; flamboyant", quot: "you're being so extra, calm it" } ]
    },
    {
      head: "ez",
      pron: "íyziy",
      defs: [ { type: "adj", defn: "Easy", quot: "gg ez bro no cap", note: "popularised by video game communities to refer to having barely broken a sweat when playing" } ]
    }
  ],
  F: [
    {
      head: "F",
      pron: "ef",
      defs: [ { type: "n", defn: "A failure; a loss", quot: "that's an F from me boss" } ]
    },
    {
      head: "fam",
      pron: "fam",
      defs: [ { type: "n", defn: "Friend; bro", quot: "hey fam, what's good", note: "used endearingly" } ]
    },
    {
      head: "Fanum tax",
      pron: "fánəm taks",
      defs: [ { type: "n. phr", defn: "A portion of food considered thievable", quot: "gotta pay the fanum tax big man", note: "often used as a non sequitur" } ]
    },
    {
      head: "fap",
      pron: "fap",
      defs: [ { type: "v", defn: "To masturbate", quot: "cut down on the fapping, cmon" } ]
    },
    {
      head: "fat",
      pron: "fat",
      defs: [ { type: "adj", defn: "Large; very good", quot: "that's some fat beat", note: "may be spelled 'phat'" } ]
    },
    {
      head: "fatherless behaviour",
      pron: "fádhə̄(r)ləs bihéyvyə̄(r)",
      defs: [ { type: "n. phr", defn: "Acting out one's daddy issues", quot: "their twerking tiktoks are prime fatherless behaviour" } ]
    },
    {
      head: "fax, no printer",
      pron: "fáks now príntə̄r",
      defs: [ { type: "inj", defn: "I agree", quot: "yas! preach gurl, fax no printer", note: "used to express agreement; a pun based on the word 'facts' sounding like 'fax', therein emphasised by comparison to a printer" } ]
    },
    {
      head: "femboy",
      pron: "fémboy",
      defs: [ { type: "n", defn: "A male who adopts a (usually, but not always hyper-sexualised) feminine aesthetic", quot: "i keep matching with femboys on Tinder" } ]
    },
    {
      head: "femcel",
      pron: "fémsel",
      defs: [ { type: "n", defn: "A female 'incel'", quot: "i ain't never seen a femcel this down bad" } ]
    },
    {
      head: "fictive",
      pron: "fíktiv",
      defs: [ { type: "n", defn: "A defined alternate personality for self-diagnosed cases of dissociative identity disorder", quot: "people always tell me my fictives from cartoons are fake", note: "refers to 'alternate personality' derived from fiction; in typical cases of DID, the identities are aspects of the sufferer's own conscious" } ]
    },
    {
      head: "fight demons",
      pron: "fayt díymənz",
      defs: [ { type: "v.phr", defn: "To be in a state of inner turmoil; to have significant emotional baggage", quot: "my man is fighting demons in the gym rn" } ]
    },
    {
      head: "finna",
      pron: "fínə",
      defs: [ { type: "aux.v", defn: "Going to", quot: "finna slap you" } ]
    },
    {
      head: "finesse",
      pron: "finés",
      defs: [ { type: "v", defn: "To trick; to manipulate", quot: "you got finessed those are fake Yeezys" } ]
    },
    {
      head: "fivehead",
      pron: "fáyvhed",
      defs: [ { type: "n", defn: "A large forehad", quot: "get yo fivehead outta the way of the tv" } ]
    },
    {
      head: "floppa",
      pron: "flópə",
      defs: [ { type: "n", defn: "A caracal (esp. Big Floppa)", quot: "Big Floppa is literally just chilling", note: "Big Floppa is the internet-given name of Гоша, a Ukraine-born Russian caracal famous for pictures and videos taken by his owners" } ]
    },
    {
      head: "FOMO",
      pron: "fówmow",
      defs: [ { type: "n", defn: "Fear Of Missing Out", quot: "i don't like staying home when y'all are partying, i get major fomo" } ]
    },
    {
      head: "forgor",
      pron: "fo(r)gó(r)",
      defs: [ { type: "v", defn: "To forget", quot: "idk what that is, i forgor", note: "often used humorously, identical in all tenses; may be used to mock those who suffer from dementia" } ]
    },
    {
      head: "fr",
      pron: "fə ríyl",
      defs: [ { type: "adv", defn: "For real; genuinely", quot: "you got this man fr" } ]
    },
    {
      head: "fren",
      pron: "fren",
      defs: [ { type: "n", defn: "A friend", quot: "hello i'm fren", note: "carries childlike or adorable qualities" } ]
    },
    {
      head: "FYP",
      pron: "ef way píy",
      defs: [ { type: "n.phr", defn: "For You Page", quot: "how is your fyp nothing but thirst traps", note: "refers to the TikTok front page with content curated to sb's interests" } ]
    },
    {
      head: "f4f",
      pron: "éf fəréf",
      defs: [ { type: "v.phr", defn: "Follow-for-follow", quot: "f4f plz?", note: "used on social media wherein one person follows/subscribes to another, hoping the other does the same back" } ]
    }
  ],
  G: [
    {
      head: "gammon",
      pron: "gámən",
      defs: [ { type: "n", defn: "A person whose face has become flushed from arguing their political (mostly right-wing) views", quot: "the gammon down the street is ranting about brexit again" } ]
    },
    {
      head: "gex",
      pron: "geks",
      defs: [ { type: "n", defn: "Gay sex", quot: "wait is this say gex?", note: "spoonerism of 'gay sex' used comedically or to circumvent automated censorship; often in reply to two members of the same gender appearing (but not necessarily) romantically or sexually interested in each other" } ]
    },
    {
      head: "ghost",
      pron: "gowst",
      defs: [ { type: "v", defn: "To ignore sb.; to silently break up with sb.", quot: "i can't lie she's ghosting me" } ]
    },
    {
      head: "gigachad",
      pron: "gígəchad",
      defs: [ { type: "n", defn: "A highly successful male", quot: "he literally gets all the girls, what a gigachad", note: "often used ironically, especially when self-referential" } ]
    },
    {
      head: "girlboss",
      pron: "gə̂(r)lbos",
      defs: [ { type: "n", defn: "An entrepreneuse; a strong-willed, enterprising woman", quot: "yass girlboss you go" } ]
    },
    {
      head: "girl dinner",
      pron: "gə̄́(r)l dínə(r)",
      defs: [ { type: "n. phr", defn: "A confusing meal devoid of context or social expectations", quot: "hi all today's girl dinner is uh idk" } ]
    },
    {
      head: "girl math",
      pron: "gə̄́(r)l math",
      defs: [ { type: "n. phr", defn: "An unusual justification for spending a lot of money on (generally feminine) items through mathematically illogical reasoning", quot: "i bought this on sale and saved $120 so i can buy another for under $120 and it's basically free", note: "used both self-referentially or pejoratively; the latter for any (perceived or actual) incorrect logic or argument used by women" } ]
    },
    {
      head: "glizzy",
      pron: "glíziy",
      defs: [ { type: "n", defn: "A hot-dog", quot: "down that glizzy in one" } ]
    },
    {
      head: "glizzy gladiator",
      pron: "glíziy gládiyeytə(r)",
      defs: [ { type: "n.phr", defn: "A person who is able to fit a substantial amount of a hot-dog in their mouth at once", quot: "Obama the glizzy gladiator" } ]
    },
    {
      head: "glow up",
      pron: "glów up",
      defs: [ { type: "n.phr", defn: "A vast improvement in one's physical appearance", quot: "she's really had a glow up" }, { type: "v.phr", defn: "To have a glow up", quot: "wait for me to glow up" } ]
    },
    {
      head: "goblin mode",
      pron: "góblin mowd",
      defs: [ { type: "n. phr", defn: "A state of physical or emotional frenzy", quot: "next time i see him imma go goblin mode" } ]
    },
    {
      head: "God's X-est soldier",
      pron: "godz ()-əst sówljə(r)",
      defs: [ { type: "n. phr", defn: "A person displaying a superlative quality", quot: "i am god's hungriest soldier" } ]
    },
    {
      head: "goofy ahh",
      pron: "gúwfiy ā",
      defs: [ { type: "adj.phr", defn: "Really goofy or zany; endearingly strange", quot: "goofy ahh mfer stickin' out like a sore thumb" } ]
    },
    {
      head: "goon",
      pron: "guwn",
      defs: [ { type: "v", defn: "To masturbate for extended periods of time as if in a trance", quot: "you need to stop gooning and start grinding" } ]
    },
    {
      head: "gorn",
      pron: "goʳn",
      defs: [ { type: "n", defn: "Gay porn", quot: "wait is this pay gorn?", note: "spoonerism of 'gay porn' used comedically or to circumvent automated censorship; often in reply to two members of the same gender appearing (but not necessarily) romantically or sexually interested in each other" } ]
    },
    {
      head: "go woke, go broke",
      pron: "gow wówk gow brówk",
      defs: [ { type: "idiom", defn: "Suggests pursuance of political correctness leads to reduction in sales or stock value", quot: "hey bro look at pepsi - go woke, go broke", note: "associated with right-wing conservative social values" } ]
    },
    {
      head: "griddy",
      pron: "grídiy",
      defs: [ { type: "n", defn: "A dance move comprising hopping on the spot or side-to-side and alternatingly throwing one's hands behind their back and up to their face to form 'ok' handsigns over their eyes", quot: "sometime's you've just got to hit the griddy", note: "used in the verb phrase 'to hit the griddy'; popularised by TikTok and Fortnite" } ]
    },
    {
      head: "grind",
      pron: "gráynd",
      defs: [ { type: "v", defn: "To train; to prepare", quot: "you know i've been grinding my hooping" }, { type: "v", defn: "To pursue financial gain", quot: "she's been grinding i respect that" } ]
    },
    {
      head: "grindset",
      pron: "gráyndset",
      defs: [ { type: "n", defn: "A mindset of constant pursuance of maximum monetary gain", quot: "that sigma grindset is too powerful, he's too rich" } ]
    },
    {
      head: "grip reaper",
      pron: "grip ríypə(r)",
      defs: [ { type: "v", defn: "A highly quirky but very attractive person", quot: "the grip reaper finna be the death of me", note: "'grip' refers to the sexual innuendo of one with a penetratable orifice being very skilled sexually" } ]
    },
    {
      head: "grippy sock vacation",
      pron: "grípiy sok veykéyshən",
      defs: [ { type: "n. phr", defn: "A (voluntary or imposed) trip to a mental health institution", quot: "it's been three weeks since my last grippy sock vacation" } ]
    },
    {
      head: "groove",
      pron: "gruwv",
      defs: [ { type: "v", defn: "To dance (not necessarily well)", quot: "they're groovin'" } ]
    },
    {
      head: "grwm",
      pron: "get rédiy widh miy",
      defs: [ { type: "v.phr", defn: "Get Ready With Me", quot: "hi grwm today", note: "a TikTok trend wherein users document and narrate their wake-up routine" } ]
    },
    {
      head: "guap",
      pron: "gwap",
      defs: [ { type: "n", defn: "Money", quot: "they wonder how, how i guap like that", note: "may be spelled 'gwop'" } ]
    },
    {
      head: "gyat",
      pron: "gyat",
      defs: [ { type: "inj", defn: "Goddamn (when seeing a bodacious rear)", quot: "oh my the gyat" } ]
    }
  ],
  H: [
    {
      head: "hai",
      pron: "hay",
      defs: [ { type: "inj", defn: "Hi; hello", quot: "hai, hai, hello, hai", note: "carries childlike or adorable qualities" } ]
    },
    {
      head: "hangxiety",
      pron: "hangzáyətiy",
      defs: [ { type: "n", defn: "A state of panic during recovery after excessive drinking", quot: "babes the hangxiety is hitting please come over" } ]
    },
    {
      head: "high key",
      pron: "háy kiy",
      defs: [ { type: "adv", defn: "Obviously; opposite of low key", quot: "you're high key bugging me right now" } ]
    },
    {
      head: "hit different",
      pron: "hit dífrənt",
      defs: [ { type: "v.phr", defn: "To be enjoyable (usually unconventionally)", quot: "her in boots kinda hits different" } ]
    },
    {
      head: "hot girl summer",
      pron: "hot gə̄(r)l sə́mə(r)",
      defs: [ { type: "n.phr", defn: "A fruitful summer spent single and partying with friends", quot: "we're gonna have a hot girl summer ok bestie?" } ]
    },
    {
      head: "hypebeast",
      pron: "háypbiyst",
      defs: [ { type: "n", defn: "A person obsessed with acquiring the latest fashion", quot: "nah he's a hypebeast don't ask about his credit score" } ]
    }
  ],
  I: [
    {
      head: "I–",
      pron: "ay'",
      defs: [ { type: "inj", defn: "What?!", quot: "you told her what?! I–", note: "used to express disbelief" } ]
    },
    {
      head: "I can't lie",
      pron: "ay káʰnt lay",
      defs: [ { type: "adv.phr", defn: "To be honest; frankly", quot: "i can't lie she's kinda bad though", note: "often abbreviated in text as 'icl'" } ]
    },
    {
      head: "ick",
      pron: "ik",
      defs: [ { type: "n", defn: "An unnatractive quality", quot: "talking shit behind people's backs is such an ick" }, { type: "n", defn: "A feeling of having experienced an unattractive quality", quot: "girl that just gives me the ick" } ]
    },
    {
      head: "idk",
      pron: "ay diy kéy",
      defs: [ { type: "vb. phr", defn: "I don't know", quot: "idk mate sorry" } ]
    },
    {
      head: "I'm dead",
      pron: "aym déd",
      defs: [ { type: "inj", defn: "Haha", quot: "I'm dead bro wtf did you just say", note: "used to express humorous enjoyment" } ]
    },
    {
      head: "I'm weak",
      pron: "aym wíyk",
      defs: [ { type: "inj", defn: "Haha", quot: "I'm weak bro wtf did you just say", note: "used to express humorous enjoyment" } ]
    },
    {
      head: "incel",
      pron: "ínsel",
      defs: [ { type: "n", defn: "A man unable to find a romantic or sexual partner despite wanting one", quot: "stop saying you're an incel you're just weird", note: "abbreviation for 'involuntary celibate'" } ]
    },
    {
      head: "in Minecraft",
      pron: "in máynkraft",
      defs: [ { type: "adv", defn: "Theoretically; figuratively", quot: "i need to build some explosives in minecraft", note: "used after saying sth. that could be considered threatening to suggest the situation would take place in the video game Minecraft instead of real life" } ]
    },
    {
      head: "ipad kid",
      pron: "áypad kid",
      defs: [ { type: "n.phr", defn: "A child who becomes absorbed in technology and begins to lose touch with reality", quot: "you were an ipad kid you can't even go to the toilet without your phone" } ]
    },
    {
      head: "it's giving",
      pron: "its gíving",
      defs: [ { type: "v.phr", defn: "It reminds me of; it suggests", quot: "it's giving small dick energy" } ]
    }
  ],
  J: [
    {
      head: "jebait",
      pron: "jəbéyt",
      defs: [ { type: "v", defn: "To confuse or finesse sb.", quot: "ok get jebaited nerd" } ]
    },
    {
      head: "Joe",
      pron: "jow",
      defs: [ { type: "n", defn: "Your", quot: "did you hear joe died? joe mama", note: "used to setup the pun 'bofa joe mama', which sounds like 'your mama'" } ]
    }
  ],
  K: [
    {
      head: "Karen",
      pron: "kárən",
      defs: [ { type: "n", defn: "A woman displaying an exaggerated sense of entitlement", quot: "this Karen threatened to get me fired if i didn't give her a free meal", note: "often used pejoratively" } ]
    },
    {
      head: "king",
      pron: "king",
      defs: [ { type: "n", defn: "A male role-model", quot: "my boyfriend's always encouraging me, we stan a supportive king"} ]
    }
  ],
  L: [
    {
      head: "L",
      pron: "el",
      defs: [ { type: "n", defn: "Loss; a failure; a sacrifice", quot: "i took a big L on that test"} ]
    },
    {
      head: "L + ratio",
      pron: "el pləs réyshiyow",
      defs: [ { type: "inj", defn: "A situation where one wholeheartedly disagrees with the listener", quot: "you wanna scrap human rights? bro l + ratio stfu"} ]
    },
    {
      head: "leave on read",
      pron: "líyv on réd",
      defs: [ { type: "v. phr", defn: "To view a message from sb. but not reply to suggest displeasure", quot: "he left me on read what the fuck" } ]
    },
    {
      head: "let's get this bread",
      pron: "lets get dhis bréd",
      defs: [ { type: "exc", defn: "Let's do it", quot: "i'm ready, let's get this bread", note: "used before attempting sth. risky or dangerous" } ]
    },
    {
      head: "lick",
      pron: "lik",
      defs: [ { type: "n", defn: "A stolen or vandalised object, typically in a school", quot: "check out the diabolical lick - a soap dispenser", note: "often intensified with adjectives associated with evil or criminality, e.g., 'dastardly', 'devious', 'diabolical', and 'nefarious'" } ]
    },
    {
      head: "ligma",
      pron: "lígmə",
      defs: [ { type: "inj", defn: "Lick my", quot: "yo did you hear steve jobs died of ligma? ligma balls lmao", note: "used to setup the pun 'ligma balls', which sounds like 'lick my balls'" } ]
    },
    {
      head: "live rent free",
      pron: "liv rent fríy",
      defs: [ { type: "v.phr", defn: "To be stuck in one's mind", quot: "her album lives rent-free in my head"} ]
    },
    {
      head: "lmao",
      pron: "ləmáw",
      defs: [ { type: "inj", defn: "Laughing my ass off", quot: "that's acc so funny lmao", note: "used to indicate great enjoyment" } ]
    },
    {
      head: "lol",
      pron: "lol",
      defs: [ { type: "inj", defn: "Haha", quot: "bruhh you didn't say that lol" }, { type: "prt", defn: "—", quot: "used to mark a casual tone in text messaging" } ]
    },
    {
      head: "low key",
      pron: "lówkiy",
      defs: [ { type: "adv", defn: "Not obviously; in a relatable way; opposite of high key", quot: "lowkey craving some ice cream rn" } ]
    }
  ],
  M: [
    {
      head: "manlet",
      pron: "mánlət",
      defs: [ { type: "n", defn: "A short man with limited sexual success", quot: "sorry you're such a manlet", note: "often used pejoratively" } ]
    },
    {
      head: "manosphere",
      pron: "mánəsfiyə(r)",
      defs: [ { type: "n", defn: "The summation of all blogs and websites of men's-rights activists", quot: "discussion in the manosphere about alphas vs sigma" } ]
    },
    {
      head: "-maxxing",
      pron: "máksing",
      defs: [ { type: "n. suf", defn: "Indicated enthusiasm for sth.", quot: "you're literally friendmaxxing right now" } ]
    },
    {
      head: "mew",
      pron: "myuw",
      defs: [ { type: "v", defn: "To press one's tongue against the roof of their mouth to appear more attractive", quot: "shut up mom i'm trying to mew", note: "used both sincerely and ironically" } ]
    },
    {
      head: "me when",
      pron: "míy wen",
      defs: [ { type: "n.phr", defn: "I (topic marker)", quot: "me when the car won't start", note: "often accompanied with an image evocative of the author's facial reaction" }, { type: "n.phr", defn: "Uh, um; a stutter, a stammer", quot: "me when the me when the me when", note: "used to show hesitation or forgetfulness" } ]
    },
    {
      head: "mfer",
      pron: "mə́(dh)əfə́kə(r)",
      defs: [ { type: "n", defn: "Motherfucker", quot: "this mfer right here a real one", note: "used both endearingly and pejoratively" } ]
    },
    {
      head: "mid",
      pron: "mid",
      defs: [ { type: "adj", defn: "Mediocre; average", quot: "that food was mid i ain't comin back" } ]
    },
    {
      head: "mlem",
      pron: "mlem",
      defs: [ { type: "onm", defn: "see blep", quot: "omg the mlem is so cute" } ]
    },
    {
      head: "MLM",
      pron: "émelem",
      defs: [ { type: "n", defn: "Men-loving-men; gay men", quot: "the mlm community is so wholesome sometimes" } ]
    },
    {
      head: "mommy",
      pron: "máʰmiy",
      defs: [ { type: "n", defn: "A female idol", quot: "mommy? sorry, mommy?", note: "may be due to romantic or sexual attraction, or just being a positive role-model" } ]
    },
    {
      head: "mood",
      pron: "múwd",
      defs: [ { type: "n", defn: "A relatable situation", quot: "yo that's a big mood" } ]
    },
    {
      head: "my brother in Christ",
      pron: "may brə́dhə(r) in kráyst",
      defs: [ { type: "inj", defn: "—", quot: "my brother in christ, you are scaring the hoes", note: "used as a replacement for the n-word, especially in image macros" } ]
    }
  ],
  N: [
    {
      head: "naur",
      pron: "náʰuw(r)",
      defs: [ { type: "inj", defn: "no", quot: "naur like you're so wrong", note: "initially used to mock Australian English pronunciation, now used unironically" } ]
    },
    {
      head: "neckbeard",
      pron: "nékbiyə(r)d",
      defs: [ { type: "n", defn: "A generally untasteful hipster male with generally unattractive qualities, such as a beard predominantly on one's neck", quot: "that guy is such a neckbeard he just complains on online forums all day", note: "often used pejoratively" } ]
    },
    {
      head: "neurospicy",
      pron: "nyúrowspáysiy",
      defs: [ { type: "n", defn: "Neurodivergent", quot: "my boyfriend loves lego cuz he a lil neurospicy", note: "associated with those diagnosed with autism, ADHD, anxiety, and similar conditions evidencing atypical cognitive behaviour; mostly endearingly but non-medical while research is still ongoing" } ]
    },
    {
      head: "nice try fed",
      pron: "nays tráy fed",
      defs: [ { type: "v.phr", defn: "(That was a) nice try (to elicit criminal information)", quot: "nice try fed i'm not gonna narc on my buddies", note: "often used tongue-in-check" } ]
    },
    {
      head: "not beating the allegations",
      pron: "not bíyting dhə áləgéyshənz",
      defs: [ { type: "v. phr", defn: "To bear incontrovertible evidence of sth.", quot: "she's not beating the happiness allegations", note: "used for positive or negative things, as well as both sincerely and ironically" } ]
    },
    {
      head: "not bland",
      pron: "not blánd",
      defs: [ { type: "adj. phr", defn: "Not black", quot: "'i like my coffee how i like my women – not bla–' he goes on to say not bland but...", note: "used to interrupt sb. before saying the word 'black' or the n-word; often used ironically to poke fun at those who attribute mildly offensive content as 'race-baiting' by interrupting completely inoffensive content" } ]
    },
    {
      head: "not me",
      pron: "not míy",
      defs: [ { type: "v. phr", defn: "I confess", quot: "not me agreeing with him for once" } ]
    },
    {
      head: "NSFL",
      pron: "énesefél",
      defs: [ { type: "adj. phr", defn: "Not Suitable For Life", quot: "a lotta liveleaks stuff is NSFL icl", note: "an extension of nsfw, used for content so graphic that the viewer may wish to never see it at all – especially gory content" } ]
    },
    {
      head: "NSFW",
      pron: "énesefdə́blyuw",
      defs: [ { type: "adj. phr", defn: "Not Suitable For Work", quot: "mark that is nsfw bro don't show me that", note: "used for any content one wouldn't feel comfortable viewing in a public place – especially sexual content" } ]
    }
  ],
  O: [
    {
      head: "oh god oh fuck",
      pron: "ow gód ow fə́k",
      defs: [ { type: "inj", defn: "Oh no", quot: "oh god oh fuck it's gandhi with an anti-tank missile", note: "used to show fear or anxiety in a comedic manner" } ]
    },
    {
      head: "omnishambles",
      pron: "ómniyshámbəlz",
      defs: [ { type: "n", defn: "A situation poorly-managed in every way", quot: "see you, you are a fucking omnishambles, that's what you are" } ]
    },
    {
      head: "on main",
      pron: "on méyn",
      defs: [ { type: "adv", defn: "Publically and without anonymity", quot: "oh she posted that on main damn", note: "used when sb. posts sth. controversial online that would typically warrant usage of an anonymous account" } ]
    },
    {
      head: "on the reg",
      pron: "on dhə rég",
      defs: [ { type: "adv", defn: "Regularly", quot: "you grinding on the reg" } ]
    },
    {
      head: "ong",
      pron: "on gód",
      defs: [ { type: "adv", defn: "On God; genuinely", quot: "you were right man ong" } ]
    },
    {
      head: "oof",
      pron: "úwf",
      defs: [ { type: "inj", defn: "Ouch; a failure;", quot: "that's an oof from me boss", note: "" } ]
    },
    {
      head: "orange man bad",
      pron: "órinj man bád",
      defs: [ { type: "phr", defn: "used to mock opponents of former US president Donald Trump by suggesting the only argument used against him is his spray tan", quot: "ok buddy 'orange man bad' and all that", note: "used both sincerely by supporters of Donald Trump and ironically by opponents" } ]
    },
    {
      head: "ouid",
      pron: "wíyd",
      defs: [ { type: "n", defn: "Weed; marijuana", quot: "copped a bit of ouid don't tell mum", note: "used either to circumvent automated censorship" } ]
    },
    {
      head: "out of pocket",
      pron: "áwt əv pókit",
      defs: [ { type: "adj.phr", defn: "Unnecessarily controversial; out of line", quot: "man ain't no way you believe it, that's way out of pocket" }, { type: "adj.phr", defn: "Sth. weird said with seemingly no lead up", quot: "we were just talking about the film and he says 'i need to hire a prostitute' like damn that's so out of pocket" } ]
    }
  ],
  P: [
    {
      head: "periodt",
      pron: "píəriyət",
      defs: [ { type: "inj", defn: "End of; that's it", quot: "that's just racist, periodt" } ]
    },
    {
      head: "pick me",
      pron: "pík me",
      defs: [ { type: "n.phr", defn: "A sycophant; an obsequious person", quot: "she's such a pick me" } ]
    },
    {
      head: "-pilled",
      pron: "pild",
      defs: [ { type: "n. suf", defn: "Indicated enthusiasm for sth.", quot: "i'm so dirtpilled fr" } ]
    },
    {
      head: "pog",
      pron: "pog",
      defs: [ { type: "inj", defn: "Awesome; exciting", quot: "dude that was pog", note: "abbreviation of PogChamp, a usable emoticon on Twitch.tv of Ryan Gutierrez after winning a game of Pogs – a game utilising the caps of the POG drink (Passion Orange Guava)" } ]
    },
    {
      head: "poly",
      pron: "póliy",
      defs: [ { type: "adj", defn: "Polyamorous; in a relationship with multiple people altogether", quot: "oh we're poly, there's 4 of us", note: "considered distinct from adultery as all participants are considered to be in a relationship with each other" } ]
    },
    {
      head: "polycule",
      pron: "póliykyuwl",
      defs: [ { type: "n", defn: "A group of people in a polyamorous relationship", quot: "our polycule is really close together, we go out for dinner every weekend" } ]
    },
    {
      head: "Plandemic",
      pron: "plandémik",
      defs: [ { type: "n", defn: "The belief that the global COVID-19 pandemic was in some way organised and employed by shady government bodies", quot: "ok but the plandemic could've happened if you ignore all the evidence" } ]
    },
    {
      head: "pressed",
      pron: "prest",
      defs: [ { type: "adj", defn: "Upset", quot: "why you so pressed it's not that dep" } ]
    },
    {
      head: "proctocracy",
      pron: "proktókrəsiy",
      defs: [ { type: "n", defn: "A humorous allusion to a governmental structure run by asses", quot: "those who live in a proctocracy may face brown times" } ]
    },
    {
      head: "pump cover",
      pron: "pə́mp kə́və(r)",
      defs: [ { type: "n.phr", defn: "A baggy or oversized garment used to cover one's body during workouts", quot: "don't forget your pump cover bro gotta guard them gains" } ]
    },
    {
      head: "purr",
      pron: "pə́(r)",
      defs: [ { type: "inj", defn: "Good job", quot: "damn gurl you got this purr", note: "used to indicate general approval" } ]
    }
  ],
  Q: [
    {
      head: "queen",
      pron: "kwiyn",
      defs: [ { type: "n", defn: "A female role-model", quot: "Katy Perry was so happy to be treated like a normal person - what a queen" }, { type: "n", defn: "A homosexual man (or a drag queen)", quot: "yass queen slay" } ]
    },
    {
      head: "quirked up",
      pron: "kwə́(r)t əp",
      defs: [ { type: "adj", defn: "Having an unconventially attractive quirk or eccentricity", quot: "ik she's weird but she's kinda quirked up" } ]
    }
  ],
  R: [
    {
      head: "ratio",
      pron: "réyshiyow",
      defs: [ { type: "n", defn: "A situation wherein a post on Twitter/X has more replies than likes", quot: "she got such a ratio i think she deleted her account", note: "a post on twitter.com/x.com is considered to have failed if few people agree (like) but many reply (presumably to disagree)" }, { type: "n", defn: "A situation wherein a post on social media has fewer likes than a post replying to it", quot: "a ratio on tiktok is so demoralising" }, { type: "v", defn: "To cause a ratio", quot: "ok, get ratioed" } ]
    },
    {
      head: "real",
      pron: "ríyl",
      defs: [ { type: "inj", defn: "A situation wherein one has displayed admirable relatibility", quot: "'idk man i've not been feeling great' 'real'" } ]
    },
    {
      head: "reality shifting",
      pron: "riyálitiy shífting",
      defs: [ { type: "v.phr", defn: "The experience of meditating and/or hallucinating oneself into 'another plane of reality' à la 'lucid dreaming'", quot: "i reality shifted into hogwarts yesterday!" } ]
    },
    {
      head: "receipts",
      pron: "rəsíyts",
      defs: [ { type: "n", defn: "A collection of evidence", quot: "don't deny it, we've got the receipts" } ]
    },
    {
      head: "red pill",
      pron: "réd pil",
      defs: [ { type: "n", defn: "A means to obtain the 'truth' by overcoming ignorant bliss", quot: "he took the red pill on covid and now he's anti-mask", note: "associated with conspiracy theorists" } ]
    },
    {
      head: "rizz",
      pron: "riz",
      defs: [ { type: "n", defn: "One's ability to attract a partner", quot: "his pick-up lines never fail, bro's got rizz" }, { type: "v", defn: "To attract a partner", quot: "stop rizzing the teacher bro", note: "may be used as 'rizz up'" } ]
    },
    {
      head: "rn",
      pron: "ráynaw",
      defs: [ { type: "adv", defn: "Right now", quot: "rn we just vibing" } ]
    },
    {
      head: "rofl",
      pron: "rófəl",
      defs: [ { type: "inj", defn: "Rolling On the Floor Laughing", quot: "rofl that's hilarious", note: "used to indicate high hilarity" } ]
    }
  ],
  S: [
    {
      head: "sadboi",
      pron: "sádboy",
      defs: [ { type: "n", defn: "An emotionally-open young man who laments over failed relationships", quot: "sadboi hours rn" } ]
    },
    {
      head: "sah",
      pron: "saʰ",
      defs: [ { type: "inj", defn: "What's up; hello", quot: "sah dude" } ]
    },
    {
      head: "sauce",
      pron: "soʳs",
      defs: [ { type: "n", defn: "Source (of an image)", quot: "any chance of sauce?", note: "used to request the source of an image, or the object pictured" } ]
    },
    {
      head: "selfie",
      pron: "sélfiy",
      defs: [ { type: "n", defn: "A photograph taken by and of the same person", quot: "i need a selfie in Barbados to show everyone back home" } ]
    },
    {
      head: "sending me",
      pron: "sénding miy",
      defs: [ { type: "v.phr", defn: "To be really funny", quot: "haha that tweet's sending me" } ]
    },
    {
      head: "shadowban",
      pron: "shádowban",
      defs: [ { type: "v", defn: "To secretly ban a user from posting on a platform", quot: "i think i got shadowbanned, what did i do wrong?", note: "used when a user still has viewing access to a platform, but their own posts are not shown to other users" } ]
    },
    {
      head: "shazam",
      pron: "shəzám",
      defs: [ { type: "v", defn: "To use technology to identify the name of a playing song", quot: "lemme just shazam this real quick", note: "Originally the proprietary software 'Shazam', since made a generic term" } ]
    },
    {
      head: "sheesh",
      pron: "shiysh",
      defs: [ { type: "inj", defn: "Damn", quot: "you got drip man sheesh", note: "used when hyping sb. up" } ]
    },
    {
      head: "sigma male",
      pron: "sígmə meyl",
      defs: [ { type: "n.phr", defn: "A male capable of being an alpha but aligns with an aggressive self-serving ideology", quot: "while alpha males are out fucking bitches, sigma males are making money", note: "used sincerely self-referentially as an alternative to 'alpha' and 'beta', or pejoratively to make fun of those using any of the above labels" } ]
    },
    {
      head: "simp",
      pron: "simp",
      defs: [ { type: "n", defn: "A person who obsesses over and devotes more than is necessary to a cruch", quot: "diamond earrings on the first date - bro you're such a simp" } ]
    },
    {
      head: "situationship",
      pron: "sítyuéyshənship",
      defs: [ { type: "n", defn: "A temporary or purely-physical relationship", quot: "the situationship with Brad is kinda complicated" } ]
    },
    {
      head: "slap",
      pron: "slap",
      defs: [ { type: "v", defn: "To be enjoyable", quot: "this song slaps" } ]
    },
    {
      head: "slay",
      pron: "sley",
      defs: [ { type: "v", defn: "To do sth. exceptionally well", quot: "your outfit slays", note: "associated with the LGBT community" } ]
    },
    {
      head: "sleep on",
      pron: "slíyp on",
      defs: [ { type: "v.phr", defn: "To ignore sth. of quality", quot: "y'all are sleeping on this tune" } ]
    },
    {
      head: "sloppy toppy",
      pron: "slópiy tópiy",
      defs: [ { type: "n.phr", defn: "Fellatio; blowjob(s)", quot: "i gave him the A* sloppy toppy" } ]
    },
    {
      head: "small dick energy",
      pron: "smóʳl dik énə(r)jiy",
      defs: [ { type: "n.phr", defn: "A compensatory aura of an arrogant man displaying toxic masculinity, aggressiveness, etc.", quot: "bragging about your body count is such small dick energy" } ]
    },
    {
      head: "smh",
      pron: "és em (h)éych",
      defs: [ { type: "inj", defn: "Shaking My Head", quot: "can't believe you said that smh", note: "used to show incredulity or disapproval" } ]
    },
    {
      head: "snack",
      pron: "snak",
      defs: [ { type: "n", defn: "An attractive person", quot: "ayo she lookin like a snack" } ]
    },
    {
      head: "SJW",
      pron: "és jey də́bəlyuw",
      defs: [ { type: "n.phr", defn: "Social Justice Warrior", quot: "they're such an sjw idk who listens to them", note: "refers to sb. who promotes causes to make themselves appear virtuous" } ]
    },
    {
      head: "soy boy",
      pron: "sóy boy",
      defs: [ { type: "n.phr", defn: "An effeminate man (usually left-leaning politically)", quot: "you're such a soy boy cuck", note: "used pejoratively by right-wing activists, originates from the incorrect belief that soy phytoestrogens function like human estrogens and induce a 'feminising' effect in men" } ]
    },
    {
      head: "soyjak",
      pron: "sóyjak",
      defs: [ { type: "n", defn: "A version of 'wojak' with a highly excited expression, usually portrayed as weak", quot: "unfortunately i've drawn you as soyjak so your argument is invalid", note: "used in online discourse to strawman the opposing argument to make it seem ridiculous or uneducated" } ]
    },
    {
      head: "spicy accountant",
      pron: "spáysiy əkáwntənt",
      defs: [ { type: "n.phr", defn: "A sex worker", quot: "yeah i'm a spicy accountant, so what?", note: "Used either euphemistically or to circumvent automated censorship" } ]
    },
    {
      head: "spoopy",
      pron: "spúwpiy",
      defs: [ { type: "adj", defn: "Spooky; scary", quot: "its kinda spoopy can we hold hands", note: "carries childlike or adorable connotations" } ]
    },
    {
      head: "squad",
      pron: "skwod",
      defs: [ { type: "n", defn: "A group of close friends", quot: "we got the whole squad, let's roll out" } ]
    },
    {
      head: "stan",
      pron: "stan",
      defs: [ { type: "n", defn: "An obsessive support/fan", quot: "she's a BTS stan, watch out" }, { type: "v", defn: "To support obsessively", quot: "i stan him so hard" } ]
    },
    {
      head: "stonks",
      pron: "stonks",
      defs: [ { type: "n", defn: "An ironic success", quot: "i jus sold my car and bought 3 Mars bars - that's stonks" } ]
    },
    {
      head: "sugondese",
      pron: "súwgondíyz",
      defs: [ { type: "inj", defn: "Suck on these", quot: "oh steve is actually sugondese... sugondese nuts lmao", note: "used to setup the pun 'sugondese balls', which sounds like 'suck on these balls'" } ]
    },
    {
      head: "sugma",
      pron: "sə́gmə",
      defs: [ { type: "inj", defn: "Suck my", quot: "i got diagnosed with sugma... sugma balls lmao", note: "sed to setup the pun 'sugma balls', which sounds like 'suck my balls'" } ]
    },
    {
      head: "super straight",
      pron: "súwpə(r) streyt",
      defs: [ { type: "adj.phr", defn: "Sexually attracted to cisgender members of the opposite sex", quot: "sorry you seem sweet but i'm super straight", note: "used to specify one is not attracted to transgender members of the opposite sex" } ]
    },
    {
      head: "sus",
      pron: "səs",
      defs: [ { type: "adj", defn: "Suspicious; unexpected", quot: "you're acting kinda sus bro you aight?" } ]
    },
    {
      head: "Swiftonomics",
      pron: "swíftənómiks",
      defs: [ { type: "n", defn: "A phenomenon where local businesses experience increased custom when Taylor Swift hosts a concert nearby", quot: "the Swiftonomics are no joke, look at the boost" } ]
    }
  ],
  T: [
    {
      head: "teleported into my hand",
      pron: "téləpo(r)təd íntə may hánd",
      defs: [ { type: "v.phr", defn: "Was masturbated very quickly", quot: "ong it teleported into my hand", note: "used exclusively in the past; often used ironically to suggest sb. was so physically attractive that the speaker couldn't stop themselves from masturbating" } ]
    },
    {
      head: "thicc",
      pron: "thik",
      defs: [ { type: "adj", defn: "Very large (of a person's body part, especially sexualised parts)", quot: "yo she dummy thicc", note: "above, 'dummy' is used as an intensifier" } ]
    },
    {
      head: "thirst trap",
      pron: "thə̄(r)st trap",
      defs: [ { type: "n.phr", defn: "A picture or video intended for a thirsty audience (typically sexually-charged)", quot: "that guy posts nothing but thirst traps but he gets millions of views" } ]
    },
    {
      head: "thirsty",
      pron: "thə̄́(r)stiy",
      defs: [ { type: "adj", defn: "Aroused; sexually or romantically unfulfilled", quot: "oh he's hella thirsty" } ]
    },
    {
      head: "this you?",
      pron: "dhis yúw",
      defs: [ { type: "v.phr", defn: "Is this you?", quot: "you said you hate gay people but this you?", note: "used as a 'gotcha' when presenting evidence of hypocrisy; may be used as 'dis you?'" } ]
    },
    {
      head: "thot",
      pron: "thot",
      defs: [ { type: "n", defn: "A sexually promiscuous woman; a whore", quot: "if she breathe, she a thot", note: "may be used sincerely or pejoratively" } ]
    },
    {
      head: "'tism",
      pron: "tízəm",
      defs: [ { type: "n", defn: "Autism", quot: "you don't need the 'tism to enjoy trains", note: "often used in the phrase 'touch of the 'tism' to describe sb. evidencing traits associated with autistic behaviours; used both self-referentially and pejoratively" } ]
    },
    {
      head: "tl;dr",
      pron: "tíyeldiyá(r)",
      defs: [ { type: "inj", defn: "Too long didn't read", quot: "tl;dr mate i'm not reading your essay of a reply", note: "used to indicate a piece of text is too long and unwieldy" } ]
    },
    {
      head: "today years old",
      pron: "tədéy yiə(r)z ówld",
      defs: [ { type: "adj.phr", defn: "At too far advanced an age to only just be learning sth.", quot: "i was today years old when i realised they're called leggings 'cause you put your legs in 'em" } ]
    },
    {
      head: "touch grass",
      pron: "təch gráʰs",
      defs: [ { type: "v. phr", defn: "To separate oneself from the Internet", quot: "sis you need to touch grass", note: "mostly used to indicate the listener spends so much time on the Internet that they lack real-world perspective, and 'touching grass' requires going outside hence experiencing reality" } ]
    },
    {
      head: "twink death",
      pron: "twínk deth",
      defs: [ { type: "n. phr", defn: "A phenomenon where men who appeared effeminate when young grow older and lose such a quality", quot: "twink death is real and we need to talk about it" } ]
    },
    {
      head: "t4t",
      pron: "tíyfətiy",
      defs: [ { type: "adj", defn: "Trans-for-trans; A trans person who seeks only sexual partners who are also trans", quot: "sorry i'm t4t, hope you find someone else tho" } ]
    }
  ],
  U: [
    {
      head: "unalive",
      pron: "ənəláyv",
      defs: [ { type: "v", defn: "To kill", quot: "i thought i was gonna unalive myself", note: "Used either euphemistically or to circumvent automated censorship" } ]
    },
    {
      head: "unit",
      pron: "yúwnit",
      defs: [ { type: "n", defn: "A large person (fat or muscular)", quot: "look at that absolute unit" } ]
    }
  ],
  V: [
    {
      head: "vibe",
      pron: "vayb",
      defs: [ { type: "n", defn: "sth. relatable or relaxing", quot: "indie music is such a vibe" }, { type: "v", defn: "To relax or chill (especially in strange circumstances)", quot: "he do be vibin doe" } ]
    },
    {
      head: "vibe check",
      pron: "váyb chek",
      defs: [ { type: "inj", defn: "Let's fight", quot: "yo boss, vibe check" } ]
    },
    {
      head: "villain arc",
      pron: "vílən á(r)k",
      defs: [ { type: "n.phr", defn: "A period in one's life that generates sufficient hardships to waarrant becoming evil", quot: "this is his last straw i stg this is his villain arc" }, { type: "n.phr", defn: "A period in one's life when they stop caring about other's feelings; the devolution into villainy", quot: "no way she said that, this gotta be her villain arc" } ]
    }
  ],
  W: [
    {
      head: "W",
      pron: "dəb",
      defs: [ { type: "n", defn: "A win; a success", quot: "nothing but w here" } ]
    },
    {
      head: "we got X before GTA VI",
      pron: "wiy got () bəfóʳ(r) jiytiyey síks",
      defs: [ { type: "idiom", defn: "Used in reference to an unlikely or unexpected event having occurred prior to the release of the anticipated Grand Theft Auto 6 video game which fans expected to have been released much earlier", quot: "wow we got a new king of england before gta vi" } ]
    },
    {
      head: "wenomechainsama",
      pron: "wenəméchə̄nsə́mə",
      defs: [ { type: "inj", defn: "When I met you in the summer", quot: "wenomechainsama, tumajarbisaun", note: "Used as a parody of mishearing lyrics; in the song 'Summer' by Calvin Harris he sings the line 'When I met you in the summer' however it sounds slightly slurred; the phrase is now used in bait-and-switch internet content where no matter the expected outcome of a video, it will cut to a humorously-unrelated image with a speech bubble featuring the above phrase and the song playing in the background" } ]
    },
    {
      head: "what the sigma",
      pron: "wot the sígmə",
      defs: [ { type: "inj", defn: "What the hell?", quot: "what the sigma are you talking about", note: "used as an intensified form of 'what?'; may be further intensified as 'what the actual sigma'" } ]
    },
    {
      head: "wojak",
      pron: "wówjak",
      defs: [ { type: "n", defn: "A crudely-drawn digital image of a depressed man, famous for its infinite iterations and alternate expressions", quot: "bro quit drawing wojaks you're not funny" } ]
    },
    {
      head: "WLW",
      pron: "də́bəlyuweldə́bəlyuw / wə́ləwə",
      defs: [ { type: "n", defn: "Women-loving women; gay women (lesbians)", quot: "look at her key chain she's def wlw" } ]
    }
  ],
  Y: [
    {
      head: "yapanese",
      pron: "yápəníyz",
      defs: [ { type: "n", defn: "Unintelligible or rambling speech", quot: "this guy is fluent in yapanese", note: "originates from 'yap' + '-ese' (language-name suffix); often used pejoratively" } ]
    },
    {
      head: "yass",
      pron: "yaʰs",
      defs: [ { type: "inj", defn: "Yes", quot: "yass queen", note: "used emphatically, with great excitement" } ]
    },
    {
      head: "yassification",
      pron: "yáʰsifikéyshən",
      defs: [ { type: "n", defn: "The process by which sb. or sth. becomes more queer", quot: "the inevitable yassification of our youth" } ]
    },
    {
      head: "yikes",
      pron: "yayks",
      defs: [ { type: "inj", defn: "Wow (negative)", quot: "big yikes, idk about that one man", note: "used to express disagreeable nature of sth." } ]
    },
    {
      head: "yeet",
      pron: "yiyt",
      defs: [ { type: "inj", defn: "Woo!", quot: "yah yeet", note: "used as an all-purpose interjection, mostly positively" }, { type: "v", defn: "To throw sth.", note: "yeet this in the bin for me" } ]
    },
    {
      head: "you thought",
      pron: "yuw thóʳt",
      defs: [ { type: "v.phr", defn: "Sike", quot: "hah you thought, gimme a break", note: "used to indicate having fooled sb." } ]
    },
    {
      head: "yt",
      pron: "wayt",
      defs: [ { type: "adj", defn: "White (of a person)", quot: "that's dead mate only yt say that", note: "often used pejoratively" } ]
    }
  ],
  Z: [
    {
      head: "zaza",
      pron: "záʰzaʰ",
      defs: [ { type: "n", defn: "Exotic or high quality strains of weed", quot: "i don't want the block i want the zaza", note: "may be written as 'za'; often used ironically" } ]
    },
    {
      head: "zoomer",
      pron: "zúwmə(r)",
      defs: [ { type: "n", defn: "A member of Generation Z", quot: "it's a war between the zoomers and the boomers" } ]
    }
  ]
    /*
    {
      head: "",
      pron: "",
      defs: [ { type: "", defn: "", quot: "", note: "" } ]
    }
    */
};

function RenderLingo() {
  for ( const [Heading, Terms] of Object.entries(LingoData) ) {

    var LingoTemplate = Handlebars.compile( "{{#each this}}<div class='LingoTerm'><div class='LingoTermHead'>{{head}}</div><div class='LingoTermPron'>( {{pron}} )</div>{{#each defs}}<div class='LingoTermDefs'><div class='LingoTermType'>{{this.type}}.</div><div class='LingoTermDefn'>{{this.defn}}</div><div class='LingoTermQuot'>\" {{this.quot}} \"</div>{{#if this.note}}<div class='LingoTermNote'>( {{this.note}} )</div>{{/if}}</div>{{/each}}</div>{{/each}}" );
    
    var HeadingID = Heading.toLowerCase();
    
    $( "#LingoContainer" ).append( `<hr><br><h2 id="${HeadingID}"><a class="anchor" href="#${HeadingID}">${Heading}</a></h2>${LingoTemplate(Terms)}` );
  }
  
}

const MorphemeData = [
  
  {
    code: "afr",
    language: "Afrikaans",
    creator: "u/EzMode420",
  
    native: ["Ek", " wil", " ŉ", " pak", " aanpas", " wat", " ek", " in", " ŉ", " winkel", " gesien", " het", " oorkant", " die", " pad", " van", " ons", " hotel."],
  
    english: ["I", " want", " to try on", " a", " suit", " that", " I", " have", " seen", " in", " a", " shop", " across", " the", " street", " from", " our", " hotel."],
    englishMap: [0, 1, 4, 2, 3, 5, 6, 11, 10, 7, 8, 9, 12, 13, 14, 15, 16, 17]
  },
  {
    code: "ara",
    language: "Arabic",
    creator: "u/So72f",
    
    native: ["أريد", " أن", " أجرب", " بذلة ", "رأيتها ", "في ", "متجر ", "مقابل ", "ل", "فندق", "نا"],
    
    transliteration: ["'urid", " 'an", " 'ujarib", " badhlatan", " ra'aytuha", " fi", " matjar", " muqabil", " li", " funduqi", " na"],
    
    english: ["I want", " to", " try on", " a suit", " I saw", " in", " a shop", " across the street", " from", " our", " hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 9]
  },
  {
    code: "cmn",
    language: "Mandarin Chinese",
    creator: "u/stupidegg_",
    
    native: ["我", "想要", "试穿", "一套", "从", "我们", "饭店", "对面的", "里", "商店", "看到的", "酉装。"],
    
    transliteration: ["wǒ", " xiǎngyào", " shìchuān", " yītào", " cóng", " wǒmen", " fàndiàn", " duìmiàn de", " lǐ", " shāngdiàn", " kàndào de", " yǒuzhuāng"],
    
    english: ["I", " want", " (to) try on", " a", " suit", " (I) saw", " in", " (a) shop", " across the street from", " our", " hotel."],
    englishMap: [0, 1, 2, 3, 11, 10, 4, 9, 7, 5, 6, 7]
  },
  {
    code: "cnr",
    language: "Montenegrin",
    creator: "u/klnvc",
    
    native: ["Желим", " да испробам", " одијело", " које", " сам видио", " у", " трговини", " преко пута", " нашег", " xотела."],
    
    transliteration: ["Želim", " da isprobam", " odiyelo", " koye", " sam vidio", " u", " trgovini", " preko puta", " nasheg",  " hotela."],
    
    english: ["I want", " to try on", " (a) suit", " (that)", " I saw", " in", "(a) shop", " across (the street) from", " our", " hotel"],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    code: "deu",
    language: "German",
    creator: "reposted by @LanguageCrawler",
    
    native: ["Ich", " möchte", " einen ", " Anzug", " anprobieren,", " den", " ich", " in", " einem", " Laden", " gegenüber", " von", " unserem", " Hotel", " gesehen habe."],
    
    english: ["I", " want", " to try on", " a", " suit", " that", " I", " saw", " in", " a", " shop", " across the street", " from", " our", " hotel."],
    englishMap: [0, 1, 4, 2, 3, 5, 6, 14, 7, 8, 9, 10, 11, 12, 13]
  },
  {
    code: "fil",
    language: "Filipino",
    creator: "unknown Reddit user",
    
    native: ["May nakito ako", " doon sa", " tindahan", " sa tapat", " ng", " ating", " hotel", " na damit", " na gusto kong", " masubukan."],
    
    english: ["I would like", " (to) try on", " (a) suit", " I have seen", " in", " (a) shop", " across", " (from)", " our", " hotel."],
    englishMap: [8, 9, 7, 0, 1, 2, 3, 4, 5, 6]
  },
  {
    code: "fin",
    language: "Finnish",
    creator: "u/nenialaloup",
    
    native: ["Halu", "ai", "sin", " kokeilla", " pukua,", " jonka", " olen nähnyt", " kaupa", "ssa", " vastapäätä", " hotellia", "mme."],
    
    english: ["I", " would", " like", " to try on", " a suit", " (that)", " I've seen", " in", " a shop", " across the street from", " our", " hotel."],
    englishMap: [2, 1, 0, 3, 4, 5, 6, 8, 7, 9, 11, 10]
  },
  {
    code: "fra",
    language: "French",
    creator: "reposted by @TranslationTalk",
    
    native: ["Je", " voudrais", " essay", "er", " un", " costume", " que", " j'", "ai vu", " dans", " un", " magasin", " en face", " de", " notre", " hôtel."],
    
    english: ["I", " would like", " to", " try on", " a ", " suit", " (that)", " I", " saw", " in", " a", " shop", " across the street", " from", " our", " hotel."],
    englishMap: [0, 1, 2, 4, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  },
  {
    code: "glg",
    language: "Galician",
    creator: "unknown Reddit user",
    
    native: ["Gustaría", "me", " probar", " un", " traxe", " que", " vira", " nunha", " tenda", " do outro lado", " da", " rúa", " do", " noso", " hotel."],
    
    english: ["I", " would like", " to try on", " a", " suit", " (that)", " I saw", " in a", " shop", " across", " (from) the", " street", " from", " our", " hotel."],
    englishMap: [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  },
  {
    code: "heb",
    language: "Hebrew",
    creator: "unknown Reddit user",
    
    native: ["הייתי שמח", " לנסות", " את החליפה", " שראיתי", " מהמלון שלנו", " בחנות", " שברחוב"],
    
    transliteration: ["hayiti sameakh", " lenasot", " et hakhalifa", " sheraiti", " mekhamalon shelanu", " bakhanut", " shebarekhov"],
    
    english: ["I would like", " to try on", " the suit", " that I saw", " in the shop", " across the street", " from our hotel"],
    englishMap: [0, 1, 2, 3, 6, 4, 5]
  },
  {
    code: "hin",
    language: "Hindi",
    creator: "u/PM_ME_YOUR_BEST_IMG",
    
    native: ["मैं", " एक सूट", " पहनकर देखना", " चाहता हूँ", " जो", " मैंने", " होटल", " से", " सड़क", " के उस पार", " वाली", " एक दुकान", " में", " देखा था"],
    
    transliteration: ["main", " ek soot", " pahanakar dekhana", " chaahata hoon", " jo", " mainne", " hotal", " se", " sadak", " ke us paar", " vaalee", " ek dukaan", " mein", " dekha tha"],
    
    english: ["I", " want", " to try on", " a suit", " (that)", " I", " saw", " in", " a shop", " across", " the street", " from", " the hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  },
  {
    code: "hrv",
    language: "Croatian",
    creator: "u/klnvc",
    
    native: ["Želim", " isprobati", " odijelo", " koje", " sam vidio", " u ", " trgovini", " preko puta", " našeg", " hotela."],
    
    english: ["I want", " to try on", " (a) suit", " (that)", " I saw", " in", "(a) shop", " across (the street) from ", " our", " hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    code: "hun",
    language: "Hungarian",
    creator: "u/kajahun123",
    
    native: ["(Én) felszeretnék", " próbálni", " egy", " öltönyt", " amit", " az", " utca", " másik oldalán levő", " boltban", " láttam", " a hotelünkből."],
    
    english: ["I want", " to try on", " a", " suit", " (that)", " I saw", " in a shop", " across", " the", " street", " from our hotel."],
    englishMap: [0, 1, 2, 3, 4, 9, 8, 7, 5, 6, 10]
  },
  {
    code: "ind",
    language: "Indonesian",
    creator: "u/jamescuteloot",
    
    native: ["Saya", " ingin", " mencoba", " baju", " yang", " saya", " lihat", " di dalam", " toko", " di seberang", " jalan", " dari", " hotel", " kami."],
    
    english: ["I", " want", " to try on", " (a) suit", " that", " I", " saw", " in(side)", " (a) shop", " across", " (the) street", " from", " our", " hotel"],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 12]
  },
  {
    code: "isl",
    language: "Icelandic",
    creator: "u/drjolaskenkja",
    
    native: ["Mig", " langar", " að", " máta", " jakkaföt", " sem", " ég", " sá", " í", " búð", " á móti", " hótelinu", " okkar."],
    
    english: ["I", " want", " to", " try on", " (a) suit", " (that)", " I", " saw", " in", " (a) shop", " across the street from", " our", " hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11]
  },
  {
    code: "ita",
    language: "Italian",
    creator: "u/TheChilliPL",
    
    native: ["Vorrei", " provare", " un", " abito", " che", " ho", " visto", " nel", " negozio", " attraverso", " la", " strada", " dall'", "albergo."],

    english: ["I would like", " to try on", " a", " suit", " that", " I have", " seen", " in the", " shop", " across", " the", " street", " from the", " hotel"],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  },
  {
    code: "jpn",
    language: "Japanese",
    creator: "u/yep_fate_eos",
    
    native: ["私は", "ホテル", "の", "向かいに", "ある", "お店", "で", "見た", "スーツを", "着て", "みたいです。"],
    
    transliteration: ["watashi wa", " hoteru", " no", " mukai ni", " aru", " o-mise", " de", " mita", " sūtsu o", " kite", "mitai desu."],
    
    english: ["I", " want", " to try on", " (a) suit", " (I) saw", " in", " (a) shop", " that's", " across the street", " from", " (the) hotel"],
    englishMap: [0, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  },
  {
    code: "kor",
    language: "Korean",
    creator: "u/sugarbannana",
    
    native: ["우리", " 호텔", "의", " 건너편", " 길에", " 있는", " 가게", "에서", " 본", " 양복을", " 입어보", "고 싶다."],
    
    transliteration: ["uli", " hotel", "ui", " geonneopyeon", " gil-e", " issneun", " gage", "eseo", " bon", " yangbog-eul", " ib-eobo", "go sipda."],
    
    english: ["(I) want", " to try on", " (a) suit", " (I) saw", " in", " (a) shop", " across", " (the) street", " from", " our", " hotel."],
    englishMap: [11, 10, 9, 8, 7, 6, 3, 4, 2, 1, 0]
  },
  {
    code: "lat",
    language: "Latin",
    creator: "@AntieDiaphanus",
    
    native: ["Synthesin", " quam", " in", " taberna", " quae", " exadversum", " deversorium", " nostrum", " est", " vidi", " induendo", " probare", " volo."],
    
    english: ["I want", " to try", " on", " (a) suit", " (which)", " I saw", " in", " (a) shop", " that'", "s", " across the street from", " our", " hotel."],
    englishMap: [12, 11, 10, 0, 1, 9, 2, 3, 4, 8, 5, 7, 6]
  },
  {
    code: "mar",
    language: "Marathi",
    creator: "u/Neater-Diamond",
    
    native: ["मला", " आपल्या", " हॉटेल", " समोरच्या", " रस्त्या पलीकडच्या", " दुकानात", " पाहिलेला", " सूट", " घालून पाहायचा आहे"],
    
    transliteration: ["Malā", " āpalyā", " hŏṭēla", " samōracyā", " rastyā palikaḍacyā", " dukānāta" , " pāhilēlā", " sūṭa", " ghālūna pāhāyacā āhē"],
    
    english: ["I", " want to try on", " (a) suit", " I saw", " in (a) shop", " across (the) street", " from", " our", " hotel."],
    englishMap: [0, 8, 7, 6, 5, 4, 3, 2, 1]
  },
  {
    code: "mon",
    language: "Mongolian",
    creator: "u/Solioroh",
    
    native: ["ᠪᠢ", " ᠮᠠᠨ ᠤ", " ᠵᠣᠴᠢᠳ ᠪᠠᠭᠤᠳᠠᠯ ᠤᠨ", " ᠡᠰᠡᠷᠡᠭ", " ᠲᠠᠯ᠎ᠠ ᠶᠢᠨ", " ᠳᠡᠯᠭᠡᠭᠦᠷ ᠲᠦ", " ᠬᠠᠷᠠᠭᠰᠠᠨ", " ᠺᠣᠰᠲ᠋ᠶᠤᠶᠢᠮ ᠢᠶᠠᠨ", " ᠡᠮᠦᠰᠴᠦ ᠦᠵᠡ", "ᠮᠡᠭᠡᠷᠡ ᠪᠠᠶᠢᠨ᠎ᠠ᠃"],
    
    alternate: ["Би", " манай", " зочид буудлын", " эсрэг", " талын", " дэлгүүрт", " харсан", " костюмаа", " өмсөж үз", "мээр байна."],
    
    transliteration: ["bi", " manai", " zochid büüdlyn", " esreg", " talyn", " delgüürt", " kharsan", " kostyumaa", " ömsöj üz", "meer baina"],
    
    english: ["I", " would like", " (to) try on", " (a) suit", " (that I) saw", " in (a) shop", " across", " (the) street", " (from) our", " hotel"],
    englishMap: [0, 9, 8, 7, 6, 5, 3, 4, 1, 2]
  },
  {
    code: "nld",
    language: "Dutch",
    creator: "reposted by @LanguageCrawler",
    
    native: ["Ik", " wil", " een", " pak", " passen", " dat", " ik", " zag", " aan de overkant van", " de", " straat", " uit", " ons", " hotel."],
    
    english: ["I", " want", " to try on", " a", " suit", " (that)", " I", " saw", " across", " the", " street", " from", " our", " hotel."],
    englishMap: [0, 1, 4, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  },
  {
    code: "nor",
    language: "Norwegian",
    creator: "reposted by @LanguageCrawler",
    
    native: ["Jeg", " vil", " prøve", " en", " dress", " som", " jeg", " så", " i", " en", " butikk", " rett over", " gat", "en", " fra", " hotell", "et."],
    
    english: ["I", " want", " to try on", " a", " suit", " (that)", " I", " saw", " in", " a", " shop", " across", " the", " street", " from", " the", " hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 12, 14, 16, 15]
  },
  {
    code: "pol",
    language: "Polish",
    creator: "u/then_sth_cameacross",
    
    native: ["(Ja)", " chcę", " przymierz", "yć", " garnitur", ", który", " zobaczyłem", " w", " sklepie", " który jest", " naprzeciwko", " hotelu."],
    
    english: ["I", " want", " to", " try on", " (a) suit", " (that)", " I saw", " in", " (a) shop", " (that's)", " across the steet from", " (the) hotel."],
    englishMap: [0, 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    code: "por",
    language: "Portuguese",
    creator: "unknown Reddit user",
    
    native: ["Quer", "o", " experiment", "ar", " uma", " ropa", " que", " vi", " n", "uma", " loja", " que está", " do outro lado d", "a", " rua", " do", " nosso", " hotel."],
    
    english: ["I", " want", " to", " try on", " a", " suit", " (that)", " I saw", " in", " a", " shop", " (that's)", " across", " the", " street", " from", " our", " hotel."],
    englishMap: [1, 0, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    code: "ron",
    language: "Romanian",
    creator: "u/andreyyshore",
    
    native: ["Vreau", " să", " probez", " un", " costum", " pe care l-", "am văzut", " într-", "un", " magazin", " vizavi", " de", " hotelul", " nostru."],
    
    english: ["I want", " to", " try on", " a", " suit", " (that)", " I saw", " in", " a", " shop", " across the street", " from", " our", " hotel"],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 12]
  },
  {
    code: "rus",
    language: "Russian",
    creator: "u/Loweren",
    
    native: ["Я хочу", " пример", "ить", " костюм,", " который", " я видел", " в", " магазине", " через", " дорогу", " от", " отеля."],
    
    transliteration: ["Ya hochu", " primer", "it'", " kostyum,", " kotoriy", " ya videl", " v", " magazinye", " cherez", " dorogu", " ot", " otelya."],
    
    english: ["I want", " to" ," try on", " (a) suit", " I saw", " in", " (a) shop", " (that's)", " across", " (the) street", " from", " (the) hotel."],
    englishMap: [0, 2, 1, 3, 5, 6, 7, 4, 8, 9, 10, 11]
  },
  {
    code: "spa",
    language: "Spanish",
    creator: "Me",
    
    native: ["Quier", "o", " prob", "ar", "me", " un", " traje", " que", " vi", " en", " una", " tienda", " al otro lado de", " la", " calle", " de", "l", " hotel."],
    
    english: ["I", " want", " to", " try on", " a", " suit", " (that)", " I saw", " in", " a", " shop", " across", " the", " street", " from", " the", " hotel."],
    englishMap: [1, 0, 3, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    code: "srp",
    language: "Serbian",
    creator: "u/klnvc",
    
    native: ["Желим", " да", " испробам", " одело", " које", " сам видео", " у", " трговини", " преко пута", " нашег", " xотела."],
    
    transliteration: ["Želim", " da", " isprobam", " odelo", " koye", " sam video", " u", " trgovini", " preko puta", " našeg", " hotela."],
    
    english: ["I want", " to", " try on", " (a) suit", " (that)", " I saw", " in", " (a) shop", " across (the street) from", " our", " hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    code: "swa",
    language: "Swahili",
    creator: "u/anagalisgv",
    
    native: ["Ninataka", " kuvaa", " suti", " niliyoona", " katika", " duka ambalo ni", " kando ya", " barabara", " kutoka", " hoteli", " yetu."],
    
    english: ["I want", " to try on", " a suit", " I saw", " in", " (a) shop", " across", " (the) street", " from", " our", " hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 9]
  },
  {
    code: "swe",
    language: "Swedish",
    creator: "Me",
    
    native: ["Jag", " vill", " prov", "a", " en", " kostym", " att", " jag", " såg", " i", " en", " butik", " tvärs över", " gat", "an", " från", " hotell", "et."],
    
    english: ["I", " want", " to", " try on", " a", " suit", " (that)", " I", " saw", " in", " a", " shop", " across", " the", " street", " from", " the", " hotel."],
    englishMap: [0, 1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15, 17, 16]
  },
  {
    code: "tel",
    language: "Telugu",
    creator: "u/ETerribleT",
    
    native: ["మన", " హోటల్", " కి", " ఎదురున ఉన్న", " ఒక షాప్ లో", " చుసిన ఒక సూట్ ని", " వేసుకొని కదలనుకుంటున్నాను."],
    
    transliteration: ["Mana", " hōṭal", " ki", " eduruna unna", " oka ṣāp lō", " cusina oka sūṭ ni", " vēsukoni kadalanukuṇṭunnānu."],
    
    english: ["I want to try on", " a suit I saw", " in a shop", " across the street", " from", " our", " hotel."],
    englishMap: [6, 5, 4, 3, 2, 0, 1]
  },
  {
    code: "tha",
    language: "Thai",
    creator: "u/WinterElsa",
    
    native: ["ฉัน", "อยาก", "ลอง", "ชุดสูท", "ที่", "ฉัน", "เห็น", "ใน", "ร้าน", "ที่อยู่", "ฝั่งตรงข้าม", "จาก", "โรงแรม"],
    
    transliteration: ["C̄hạn", " xyāk", " lxng", " chud s̄ūth", " thī̀ ", " c̄hạn", " h̄ĕn", " nı", " r̂ān", " thī̀ xyū̀ ", " f̄ạ̀ng trng k̄ĥām", " cāk", " rongræm"],
    
    english: ["I", " want", " to try on", " (a) suit", " (that)", " I", " saw", " in", " (a) shop", " (that's)", " across the street", " from", " (the) hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    code: "tur",
    language: "Turkish",
    creator: "reposted by @TranslationTalk",
    
    native: ["Otelimizin", " karşisındaki", " dükkânda", " gördüğüm", " bir ", "elbiseyi", " denemek", " isterim."],
    
    english: ["I would like", " to try on", " a", " suit", " I've seen", " in a shop", " across the street", " from our hotel."],
    englishMap: [7, 6, 4, 5, 3, 2, 1, 0]
  },
  {
    code: "vie",
    language: "Vietnamese",
    creator: "reposted by @LanguageCrawler",
    
    native: ["Tôi", " muốn", " mặc thử", " cái bộ", " mà", " tôi", " đã thấy", " ở", " tiệm", " đối diện", " khách sạn."],
    
    english: ["I", " want", " (to) try on", " (a) suit", "(that)", " I", " saw", " in", " (a) shop", " facing", " (the) hotel."],
    englishMap: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    code: "yrl",
    language: "Nheengatu",
    creator: "unknown Reddit user",
    
    native: ["A", "saã-", "putari", " yepé", " munhãmundewa", " a", "maã", " waá", " yepé", " pripanasawa ruka", " upé", " uikú waá", " amũ suaxara", " yané", " hotel", " rapé", " suí."],
    
    english: ["I", " want", " to try on", " a", " suit", " (that)", " I", " saw", " in", " a", " shop", " (that's)", " across", " (the) street", " from", " our", " hotel."],
    englishMap: [0, 2, 1, 3, 4, 7, 5, 6, 10, 8, 9, 11, 12, 15, 16, 13, 14]
  }
];

function RenderMorphemeMaps() {
  
  var data = MorphemeData;
  
  console.log(data);
  
  function getText (i) {
  
    var strReturn = "";

    for ( let j = 0; j < data[i].native.length; j++ ) {

      strReturn += "<span style='color:";
      strReturn += colours[ j % colours.length ];
      strReturn += ";'>";
      strReturn += data[i].native[j];
      strReturn += "</span>";

    }
  
    if( data[i].hasOwnProperty('alternate') ) {

      strReturn += "</td></tr><tr style='background-color: white;'><td colspan='3'>";

      for ( let j = 0; j < data[i].alternate.length; j++ ) {

        strReturn += "<span style='color:";
        strReturn += colours[ j % colours.length ];
        strReturn += ";'>";
        strReturn += data[i].alternate[j];
        strReturn += "</span>";

      }
    
    }
  
    if( data[i].hasOwnProperty('transliteration') ) {

      strReturn += "</td></tr><tr style='background-color: white;'><td colspan='3'>";

      for ( let j = 0; j < data[i].transliteration.length; j++ ) {

        strReturn += "<span style='color:";
        strReturn += colours[ j % colours.length ];
        strReturn += ";'>";
        strReturn += data[i].transliteration[j];
        strReturn += "</span>";

      }

    }

    strReturn += "</td></tr><tr style='background-color: white;'><td colspan='3'>";

    for ( let j = 0; j < data[i].english.length; j++ ) {

      strReturn += "<span style='color:";
      strReturn += colours[ data[i].englishMap[j] % colours.length ];
      strReturn += ";'>";
      strReturn += data[i].english[j] + "</span>";

    }

    return strReturn;

  }

  const colours = ["red", "orange", "lime", "green", "tomato", "blue", "maroon", "fuchsia", "blueviolet", "orchid", "purple", "seagreen", "black", "darksalmon", "teal", "palegreen", "indigo"];

  for ( let i = 0; i < data.length; i++ ) {

    document.getElementById("MorphemeMapsTableBlock").innerHTML += ( "<table><tr><th style='text-align: left; padding-left: 8px;'>" + data[i].code.toUpperCase() + "</th><th style='padding-left: 8px;'>" + data[i].language + "</th><th style='text-align: right; padding-right: 8px;'>" + data[i].creator + "</th></tr><tr style='background-color: white;'><td colspan='3'>" + getText(i) + "</td></tr></table><br/>");

  }
  
}