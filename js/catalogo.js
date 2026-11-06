/* =============================================================
   STREAMIA · catalogo.js
   Datos de las películas y series (generado a partir de los
   Excel Streamia_Catalogo_Peliculas_V2 y _Series_V2).
   Se usa un .js en vez de un .json para que funcione también
   abriendo la web sin servidor (file://).
   ============================================================= */

const CATALOGO = [
  {
    "id": "senderos-de-gloria",
    "titulo": "Senderos de gloria",
    "tituloOriginal": "Paths of Glory",
    "tipo": "pelicula",
    "genero": "Bélico",
    "anio": 1957,
    "duracion": 88,
    "direccion": [
      "Stanley Kubrick"
    ],
    "reparto": [
      "Kirk Douglas",
      "Ralph Meeker",
      "Adolphe Menjou",
      "George Macready",
      "Wayne Morris",
      "Richard Anderson"
    ],
    "argumento": "Durante la Primera Guerra Mundial, el coronel Dax intenta defender a tres soldados franceses acusados de cobardía tras el fracaso de un ataque imposible. El juicio enfrenta la vida de los hombres con los intereses del alto mando.",
    "cartel": "img/senderos-de-gloria.jpg"
  },
  {
    "id": "dune-parte-dos",
    "titulo": "Dune: Parte dos",
    "tipo": "pelicula",
    "genero": "Ciencia ficción",
    "anio": 2024,
    "duracion": 166,
    "direccion": [
      "Denis Villeneuve"
    ],
    "reparto": [
      "Timothée Chalamet",
      "Zendaya",
      "Rebecca Ferguson",
      "Javier Bardem",
      "Austin Butler",
      "Josh Brolin",
      "Florence Pugh",
      "Stellan Skarsgård"
    ],
    "argumento": "Paul Atreides se incorpora a los Fremen de Arrakis para combatir a quienes destruyeron a su familia. Mientras crece su influencia, debe afrontar el conflicto entre su vínculo con Chani, la venganza y el futuro que anuncian sus visiones.",
    "cartel": "img/dune-parte-dos.jpg"
  },
  {
    "id": "oppenheimer",
    "titulo": "Oppenheimer",
    "tipo": "pelicula",
    "genero": "Drama",
    "anio": 2023,
    "duracion": 180,
    "direccion": [
      "Christopher Nolan"
    ],
    "reparto": [
      "Cillian Murphy",
      "Emily Blunt",
      "Robert Downey Jr.",
      "Matt Damon",
      "Florence Pugh",
      "Josh Hartnett",
      "Kenneth Branagh"
    ],
    "argumento": "El físico J. Robert Oppenheimer dirige el laboratorio de Los Álamos durante el Proyecto Manhattan. La creación de la bomba atómica y las investigaciones políticas posteriores lo obligan a enfrentarse a las consecuencias personales y morales de su trabajo.",
    "cartel": "img/oppenheimer.jpg"
  },
  {
    "id": "pobres-criaturas",
    "titulo": "Pobres criaturas",
    "tipo": "pelicula",
    "genero": "Comedia",
    "anio": 2023,
    "duracion": 141,
    "direccion": [
      "Yorgos Lanthimos"
    ],
    "reparto": [
      "Emma Stone",
      "Mark Ruffalo",
      "Willem Dafoe",
      "Ramy Youssef",
      "Christopher Abbott",
      "Kathryn Hunter",
      "Margaret Qualley"
    ],
    "argumento": "Bella Baxter, una joven devuelta a la vida por un científico, descubre el mundo con una curiosidad sin límites. Un viaje por distintos países la lleva a cuestionar las convenciones sociales y a buscar su independencia.",
    "cartel": "img/pobres-criaturas.jpg"
  },
  {
    "id": "el-padrino",
    "titulo": "El padrino",
    "tipo": "pelicula",
    "genero": "Drama",
    "anio": 1972,
    "duracion": 175,
    "direccion": [
      "Francis Ford Coppola"
    ],
    "reparto": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall",
      "Diane Keaton",
      "John Cazale",
      "Talia Shire"
    ],
    "argumento": "En la Nueva York de los años cuarenta, Vito Corleone dirige una poderosa familia mafiosa. Una guerra entre clanes arrastra a su hijo Michael, inicialmente alejado de los negocios familiares, a una lucha por el poder y la supervivencia.",
    "cartel": "img/el-padrino.jpg"
  },
  {
    "id": "blade-runner",
    "titulo": "Blade Runner",
    "tipo": "pelicula",
    "genero": "Ciencia ficción",
    "anio": 1982,
    "duracion": 117,
    "direccion": [
      "Ridley Scott"
    ],
    "reparto": [
      "Harrison Ford",
      "Rutger Hauer",
      "Sean Young",
      "Edward James Olmos",
      "Daryl Hannah",
      "M. Emmet Walsh",
      "Joanna Cassidy"
    ],
    "argumento": "En un Los Ángeles futurista, Rick Deckard recibe la misión de localizar a varios replicantes fugitivos. Su investigación lo enfrenta a seres artificiales que buscan prolongar su vida y cuestiona la frontera entre lo humano y lo fabricado.",
    "cartel": "img/blade-runner.jpg"
  },
  {
    "id": "amelie",
    "titulo": "Amélie",
    "tipo": "pelicula",
    "genero": "Comedia",
    "anio": 2001,
    "duracion": 122,
    "direccion": [
      "Jean-Pierre Jeunet"
    ],
    "reparto": [
      "Audrey Tautou",
      "Mathieu Kassovitz",
      "Rufus",
      "Dominique Pinon",
      "Jamel Debbouze",
      "Yolande Moreau",
      "Isabelle Nanty"
    ],
    "argumento": "Una joven camarera de Montmartre decide mejorar en secreto la vida de las personas que la rodean. Sus pequeñas intervenciones la acercan a un muchacho peculiar y la obligan a afrontar sus propios miedos y su soledad.",
    "cartel": "img/amelie.jpg"
  },
  {
    "id": "la-chaqueta-metalica",
    "titulo": "La chaqueta metálica",
    "tipo": "pelicula",
    "genero": "Bélico",
    "anio": 1987,
    "duracion": 116,
    "direccion": [
      "Stanley Kubrick"
    ],
    "reparto": [
      "Matthew Modine",
      "Vincent D’Onofrio",
      "R. Lee Ermey",
      "Adam Baldwin"
    ],
    "argumento": "Un grupo de reclutas estadounidenses soporta un entrenamiento militar brutal antes de ser enviado a Vietnam. A través del soldado Joker, la película muestra cómo la disciplina y el combate transforman y deshumanizan a los hombres.",
    "cartel": "img/la-chaqueta-metalica.jpg"
  },
  {
    "id": "apocalypse-now",
    "titulo": "Apocalypse Now",
    "tipo": "pelicula",
    "genero": "Bélico",
    "anio": 1979,
    "duracion": 153,
    "direccion": [
      "Francis Ford Coppola"
    ],
    "reparto": [
      "Martin Sheen",
      "Marlon Brando",
      "Robert Duvall",
      "Frederic Forrest",
      "Sam Bottoms",
      "Laurence Fishburne",
      "Dennis Hopper"
    ],
    "argumento": "Durante la guerra de Vietnam, el capitán Willard remonta un río para encontrar y eliminar al coronel Kurtz, un oficial que ha actuado al margen del mando militar. El viaje lo sumerge en la violencia y la pérdida de sentido de la guerra.",
    "cartel": "img/apocalypse-now.jpg"
  },
  {
    "id": "salvar-al-soldado-ryan",
    "titulo": "Salvar al soldado Ryan",
    "tipo": "pelicula",
    "genero": "Bélico",
    "anio": 1998,
    "duracion": 169,
    "direccion": [
      "Steven Spielberg"
    ],
    "reparto": [
      "Tom Hanks",
      "Matt Damon",
      "Tom Sizemore",
      "Edward Burns",
      "Barry Pepper",
      "Adam Goldberg",
      "Vin Diesel",
      "Giovanni Ribisi",
      "Jeremy Davies"
    ],
    "argumento": "Tras el desembarco de Normandía, el capitán Miller y su patrulla reciben la orden de encontrar al soldado James Ryan, cuyos hermanos han muerto en combate. La búsqueda les plantea cuánto puede costar salvar una sola vida.",
    "cartel": "img/salvar-al-soldado-ryan.jpg"
  },
  {
    "id": "1917",
    "titulo": "1917",
    "tipo": "pelicula",
    "genero": "Bélico",
    "anio": 2019,
    "duracion": 119,
    "direccion": [
      "Sam Mendes"
    ],
    "reparto": [
      "George MacKay",
      "Dean-Charles Chapman",
      "Mark Strong",
      "Richard Madden",
      "Benedict Cumberbatch",
      "Colin Firth",
      "Andrew Scott"
    ],
    "argumento": "En la Primera Guerra Mundial, dos soldados británicos deben cruzar territorio enemigo para entregar una orden que detenga un ataque condenado al fracaso. Su misión contrarreloj podría salvar a cientos de hombres, incluido el hermano de uno de ellos.",
    "cartel": "img/1917.jpg"
  },
  {
    "id": "sin-novedad-en-el-frente",
    "titulo": "Sin novedad en el frente",
    "tipo": "pelicula",
    "genero": "Bélico",
    "anio": 2022,
    "duracion": 147,
    "direccion": [
      "Edward Berger"
    ],
    "reparto": [
      "Felix Kammerer",
      "Albrecht Schuch",
      "Aaron Hilmer",
      "Moritz Klaus",
      "Edin Hasanovic",
      "Daniel Brühl",
      "Devid Striesow"
    ],
    "argumento": "Paul Bäumer y sus amigos se alistan con entusiasmo en el ejército alemán durante la Primera Guerra Mundial. La vida en las trincheras destruye pronto sus expectativas y los enfrenta al hambre, el miedo y la brutalidad del frente.",
    "cartel": "img/sin-novedad-en-el-frente.jpg"
  },
  {
    "id": "the-bear",
    "titulo": "The Bear",
    "tipo": "serie",
    "genero": "Comedia",
    "anio": 2022,
    "temporadas": 5,
    "duracionEpisodio": 30,
    "creacion": [
      "Christopher Storer"
    ],
    "reparto": [
      "Jeremy Allen White",
      "Ayo Edebiri",
      "Ebon Moss-Bachrach",
      "Abby Elliott",
      "Lionel Boyce",
      "Liza Colón-Zayas",
      "Matty Matheson"
    ],
    "argumento": "Carmy, un chef de alta cocina, regresa a Chicago para hacerse cargo del negocio de bocadillos de su hermano fallecido. Entre deudas, tensiones familiares y un equipo difícil de coordinar, intenta transformar el restaurante y encontrar su lugar.",
    "cartel": "img/the-bear.jpg"
  },
  {
    "id": "shogun",
    "titulo": "Shōgun",
    "tipo": "serie",
    "genero": "Drama",
    "anio": 2024,
    "temporadas": 1,
    "duracionEpisodio": 60,
    "creacion": [
      "Rachel Kondo",
      "Justin Marks"
    ],
    "reparto": [
      "Hiroyuki Sanada",
      "Cosmo Jarvis",
      "Anna Sawai",
      "Tadanobu Asano",
      "Takehiro Hira",
      "Fumi Nikaido",
      "Shinnosuke Abe"
    ],
    "argumento": "En el Japón de 1600, un navegante inglés llega a un país dividido por las luchas de poder. Su relación con el señor Toranaga y con la intérprete Mariko lo sitúa en el centro de una compleja disputa política y cultural.",
    "cartel": "img/shogun.jpg"
  },
  {
    "id": "separacion-severance",
    "titulo": "Separación",
    "tituloOriginal": "Severance",
    "tipo": "serie",
    "genero": "Ciencia ficción",
    "anio": 2022,
    "temporadas": 2,
    "duracionEpisodio": 50,
    "creacion": [
      "Dan Erickson"
    ],
    "reparto": [
      "Adam Scott",
      "Britt Lower",
      "Zach Cherry",
      "Tramell Tillman",
      "Patricia Arquette",
      "John Turturro",
      "Christopher Walken",
      "Dichen Lachman"
    ],
    "argumento": "Los empleados de Lumon se someten a una intervención que separa sus recuerdos laborales de los personales. Cuando Mark y sus compañeros comienzan a cuestionar su trabajo, descubren indicios de que la empresa oculta algo inquietante.",
    "cartel": "img/separacion-severance.jpg"
  },
  {
    "id": "breaking-bad",
    "titulo": "Breaking Bad",
    "tipo": "serie",
    "genero": "Drama",
    "anio": 2008,
    "temporadas": 5,
    "duracionEpisodio": 45,
    "creacion": [
      "Vince Gilligan"
    ],
    "reparto": [
      "Bryan Cranston",
      "Aaron Paul",
      "Anna Gunn",
      "Dean Norris",
      "Betsy Brandt",
      "RJ Mitte",
      "Giancarlo Esposito",
      "Bob Odenkirk",
      "Jonathan Banks"
    ],
    "argumento": "Walter White, un profesor de química diagnosticado de cáncer, empieza a fabricar metanfetamina con un antiguo alumno para asegurar el futuro de su familia. Su entrada en el narcotráfico transforma sus relaciones y lo arrastra a una espiral de violencia y ambición.",
    "cartel": "img/breaking-bad.jpg"
  },
  {
    "id": "dark",
    "titulo": "Dark",
    "tipo": "serie",
    "genero": "Ciencia ficción",
    "anio": 2017,
    "temporadas": 3,
    "duracionEpisodio": 55,
    "creacion": [
      "Baran bo Odar",
      "Jantje Friese"
    ],
    "reparto": [
      "Louis Hofmann",
      "Oliver Masucci",
      "Jördis Triebel",
      "Maja Schöne",
      "Karoline Eichhorn",
      "Lisa Vicari",
      "Andreas Pietschmann",
      "Mark Waschke"
    ],
    "argumento": "La desaparición de unos niños en Winden revela secretos que conectan a cuatro familias. La investigación descubre vínculos entre distintas épocas y un entramado de viajes temporales que pone en duda la posibilidad de cambiar el destino.",
    "cartel": "img/dark.jpg"
  },
  {
    "id": "the-office",
    "titulo": "The Office",
    "tipo": "serie",
    "genero": "Comedia",
    "anio": 2005,
    "temporadas": 9,
    "duracionEpisodio": 22,
    "creacion": [
      "Greg Daniels"
    ],
    "reparto": [
      "Steve Carell",
      "Rainn Wilson",
      "John Krasinski",
      "Jenna Fischer",
      "B. J. Novak",
      "Mindy Kaling",
      "Ed Helms",
      "Angela Kinsey",
      "Brian Baumgartner"
    ],
    "argumento": "Un equipo documental sigue el día a día de los empleados de Dunder Mifflin, una empresa papelera de Scranton. Las ocurrencias de su jefe, las rivalidades y las relaciones entre compañeros convierten la rutina de oficina en una comedia incómoda.",
    "cartel": "img/the-office.jpg"
  },
  {
    "id": "hermanos-de-sangre",
    "titulo": "Hermanos de sangre",
    "tituloOriginal": "Band of Brothers",
    "tipo": "serie",
    "genero": "Bélico",
    "anio": 2001,
    "temporadas": 1,
    "duracionEpisodio": 60,
    "creacion": [
      "Tom Hanks",
      "Steven Spielberg"
    ],
    "reparto": [
      "Damian Lewis",
      "Ron Livingston",
      "Donnie Wahlberg",
      "Scott Grimes",
      "David Schwimmer",
      "Neal McDonough",
      "Michael Cudlitz",
      "Ross McCall"
    ],
    "argumento": "La miniserie reconstruye el recorrido de la Compañía Easy de paracaidistas estadounidenses durante la Segunda Guerra Mundial, desde su entrenamiento hasta el final del conflicto en Europa. Sus protagonistas afrontan el combate, las pérdidas y los vínculos entre soldados.",
    "cartel": "img/hermanos-de-sangre.jpg"
  }
];
