// DC collection slugs and their corresponding uuid pulled from legacy DC April 2025.
const collectionSlugToUuid = [
  {
    uuid: null,
    slug: "africana-black-history",
  },
  {
    uuid: null,
    slug: "charting-america-maps-from-the-lawrence-h-slaughter-collection-and-others",
  },
  {
    uuid: null,
    slug: "classic-six-new-york-city-apartment-building-living-1880s-1910s",
  },
  {
    uuid: null,
    slug: "william-blake-illuminated-books",
  },
  {
    uuid: null,
    slug: "customs-and-costume-surveys-and-examples-of-national-studies-to-1900",
  },
  {
    uuid: null,
    slug: "ornament-and-pattern-pre-victorian-to-art-deco",
  },
  {
    uuid: null,
    slug: "ellis-island-photographs-from-the-collection-of-william-williams-commissioner",
  },
  {
    uuid: null,
    slug: "a-new-nation-the-thomas-addis-emmet-collection-of-illustrations-relating",
  },
  {
    uuid: null,
    slug: "empire-and-regency-decoration-in-the-age-of-napoleon",
  },
  {
    uuid: null,
    slug: "illustrated-classics-of-engineering-from-the-william-barclay-parsons-collection",
  },
  {
    uuid: null,
    slug: "asia-and-the-eastern-pacific-rim-in-early-prints-and-photographs",
  },
  {
    uuid: null,
    slug: "hebrew-illuminated-manuscripts",
  },
  {
    uuid: null,
    slug: "medieval-and-renaissance-illuminated-manuscripts-from-western-europe",
  },
  {
    uuid: null,
    slug: "lewis-wickes-hine-documentary-photographs-1905-1938",
  },
  {
    uuid: null,
    slug: "the-middle-east-in-early-prints-and-photographs",
  },
  {
    uuid: null,
    slug: "after-columbus-four-hundred-years-of-native-american-portraiture",
  },
  {
    uuid: null,
    slug: "classic-illustrated-zoologies-and-related-works-1550-1900",
  },
  {
    uuid: null,
    slug: "nature-illustrated-flowers-plants-and-trees-1550-1900",
  },
  {
    uuid: null,
    slug: "metropolis-new-york-city-water-and-transit-infrastructure-in-photographs",
  },
  {
    uuid: null,
    slug: "picturing-america-1497-1899-prints-maps-and-drawings-bearing-on-the-new-world",
  },
  {
    uuid: null,
    slug: "russia-and-eastern-europe-in-rare-photographs-1860-1945",
  },
  {
    uuid: null,
    slug: "icons-and-images-of-cultures-plate-books-from-the-russian-empire-early-soviet",
  },
  {
    uuid: null,
    slug: "early-landscape-photography-of-the-american-west",
  },
  {
    uuid: null,
    slug: "art-from-the-george-arents-collection-on-tobacco",
  },
  {
    uuid: null,
    slug: "the-floating-world-japanese-color-woodcuts-by-kitagawa-utamaro",
  },
  {
    uuid: null,
    slug: "the-luso-hispanic-new-world-in-early-prints-and-photographs",
  },
  {
    uuid: null,
    slug: "photographic-books-by-alvin-langdon-coburn",
  },
  {
    uuid: null,
    slug: "world-war-i-photograph-albums-and-postcards",
  },
  {
    uuid: null,
    slug: "turn-of-the-century-posters",
  },
  {
    uuid: null,
    slug: "dress-fashion-design-manufacture",
  },
  {
    uuid: null,
    slug: "dance-in-photographs-and-prints",
  },
  {
    uuid: null,
    slug: "americas-first-illustrator-alexander-anderson",
  },
  {
    uuid: null,
    slug: "streetscape-and-townscape-of-metropolitan-new-york-city1860-1942",
  },
  {
    uuid: null,
    slug: "before-victoria-extraordinary-women-of-the-british-romantic-era-a-selection",
  },
  {
    uuid: null,
    slug: "ehon-the-artist-and-the-book-in-japan",
  },
  {
    uuid: null,
    slug: "lgbt-materials-in-the-new-york-public-library",
  },
  {
    uuid: null,
    slug: "chinese-rare-books-from-the-james-legge-collection",
  },
  {
    uuid: "16ad5350-c52e-012f-aecf-58d385a7bc34",
    slug: "print-collection-portrait-file",
  },
  {
    uuid: "b50ab6f0-c52b-012f-5986-58d385a7bc34",
    slug: "cigarette-cards",
  },
  {
    uuid: "2589a880-c52c-012f-2cb4-58d385a7bc34",
    slug: "billy-rose-theatre-collection-photograph-file",
  },
  {
    uuid: "5261fd50-c52e-012f-85ec-58d385a7bc34",
    slug: "robert-n-dennis-collection-of-stereoscopic-views",
  },
  {
    uuid: "a301da20-c52e-012f-cc55-58d385a7bc34",
    slug: "photographic-views-of-new-york-city-1870s-1970s-from-the-collections-of-the-ne-2",
  },
  {
    uuid: "79d4a650-c52e-012f-67ad-58d385a7bc34",
    slug: "wallach-division-picture-collection",
  },
  {
    uuid: "51894d20-c52f-012f-657d-58d385a7bc34",
    slug: "the-vinkhuijzen-collection-of-military-uniforms",
  },
  {
    uuid: "7a830280-c542-012f-b87c-58d385a7bc34",
    slug: "friedman-abeles-photographs-2",
  },
  {
    uuid: "0146e060-c530-012f-1e6f-58d385a7bc34",
    slug: "martha-swope-photographs",
  },
  {
    uuid: "e5114e30-c52f-012f-993c-58d385a7bc34",
    slug: "the-buttolph-collection-of-menus",
  },
  {
    uuid: "de1dcfb0-c5f6-012f-1dfc-58d385a7bc34",
    slug: "atlases-of-new-york-city",
  },
  {
    uuid: "491273d0-c605-012f-4af6-58d385a7bc34",
    slug: "emmet-collection-of-manuscripts-etc-relating-to-american-history",
  },
  {
    uuid: "26818d00-c611-012f-a212-58d385a7bc34",
    slug: "the-pageant-of-america-collection",
  },
  {
    uuid: "d5e04a00-c61a-012f-127f-58d385a7bc34",
    slug: "kenn-duncan-photograph-archive-ca-1960-1986",
  },
  {
    uuid: "bc9cb190-c598-012f-9f74-58d385a7bc34",
    slug: "joseph-muller-collection-of-music-and-other-portraits",
  },
  {
    uuid: "439afdd0-c62b-012f-66d1-58d385a7bc34",
    slug: "detroit-publishing-company-postcards",
  },
  {
    uuid: "8f3e9bb0-c623-012f-5ab6-58d385a7bc34",
    slug: "benjamin-k-miller-collection-of-united-states-stamps",
  },
  {
    uuid: "35301010-c58d-012f-1196-58d385a7bc34",
    slug: "american-popular-songs",
  },
  {
    uuid: "02d1c8f0-c52d-012f-a615-58d385a7bc34",
    slug: "thomas-addis-emmet-collection-2",
  },
  {
    uuid: "2600a3f0-c5ec-012f-424e-58d385a7bc34",
    slug: "atlases-of-the-united-states",
  },
  {
    uuid: "8d08f9f0-c60b-012f-0c69-58d385a7bc34",
    slug: "samuel-putnam-avery-collection",
  },
  {
    uuid: "0f38cb80-c5ae-012f-b01b-58d385a7bc34",
    slug: "doors-nyc",
  },
  {
    uuid: "0e023030-c5ab-012f-a4c2-58d385a7bc34",
    slug: "vandamm-theatrical-photographs",
  },
  {
    uuid: "274b79c0-c5b6-012f-1730-58d385a7bc34",
    slug: "collection-of-book-jackets",
  },
  {
    uuid: "a71baeb0-c5b2-012f-595e-58d385a7bc34",
    slug: "new-york-public-library-visual-materials",
  },
  {
    uuid: "a0108230-c5b9-012f-ed50-58d385a7bc34",
    slug: "childrens-book-illustrations",
  },
  {
    uuid: "3acb82b0-c5c2-012f-ae84-58d385a7bc34",
    slug: "holiday-postcards",
  },
  {
    uuid: "1d4128a0-c5c0-012f-4063-58d385a7bc34",
    slug: "photographs-of-indonesia",
  },
  {
    uuid: "918b8b20-c5bd-012f-3635-58d385a7bc34",
    slug: "wonders",
  },
  {
    uuid: "99854bd0-c5c4-012f-7bd7-58d385a7bc34",
    slug: "publishers-proofs-of-the-publications-of-l-prang-co-and-scrapbooks-of-colored",
  },
  {
    uuid: "395130a0-c5cd-012f-5117-58d385a7bc34",
    slug: "obshchii-gerbovnik-dvorianskikh-rodov-vserossiiskiia-imperii-nachatyi-v-1797m",
  },
  {
    uuid: "7c22cac0-c5b8-012f-4613-58d385a7bc34",
    slug: "white-studio-theatrical-photographs",
  },
  {
    uuid: "8a2e2e90-c5cd-012f-9f4e-58d385a7bc34",
    slug: "photographic-views-of-new-york-city-1870s-1970s-from-the-collections-of-the-new",
  },
  {
    uuid: "ecad1270-c6ca-012f-7acd-58d385a7bc34",
    slug: "sophia-peabody-hawthorne-collection-of-papers",
  },
  {
    uuid: "954eecd0-c5bf-012f-9413-58d385a7bc34",
    slug: "samuel-j-tilden-papers",
  },
  {
    uuid: "d533f0b0-c5ca-012f-d4a0-58d385a7bc34",
    slug: "renaissance-and-medieval-manuscripts-collection",
  },
  {
    uuid: "b4f82020-c5cf-012f-fda7-58d385a7bc34",
    slug: "magazin-dp",
  },
  {
    uuid: "a1a9d830-c5a6-012f-00ec-58d385a7bc34",
    slug: "maps-of-new-york-city-and-state",
  },
  {
    uuid: "382251b0-c5cf-012f-afb4-58d385a7bc34",
    slug: "photographic-views-of-the-united-states",
  },
  {
    uuid: "07430830-c5d1-012f-bd22-58d385a7bc34",
    slug: "pacific-pursuits-postcards",
  },
  {
    uuid: "931079a0-c5d1-012f-7fd0-58d385a7bc34",
    slug: "andr-fashion-illustrations-from-nypls-picture-collection",
  },
  {
    uuid: "99ba5790-c5d4-012f-f523-58d385a7bc34",
    slug: "david-bar-pesah-mahzor-germany",
  },
  {
    uuid: "eb4bfbd0-c5d5-012f-6554-58d385a7bc34",
    slug: "alexander-anderson-scrapbooks",
  },
  {
    uuid: "e48572c0-c5d6-012f-97ee-58d385a7bc34",
    slug: "photographs-taken-by-inspectors-of-the-new-york-city-tenement-house-department",
  },
  {
    uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
    slug: "farm-security-administration-photographs",
  },
  {
    uuid: "6a373d50-c5d3-012f-a6fb-58d385a7bc34",
    slug: "lawrence-h-slaughter-collection-of-english-maps-charts-globes-books-and-atlases",
  },
  {
    uuid: "f2aa95e0-c5da-012f-b9b4-58d385a7bc34",
    slug: "khudozhestvennyia-sokrovishcha-rossii",
  },
  {
    uuid: "20064220-c5d8-012f-e8c7-58d385a7bc34",
    slug: "oscar-lion-papers",
  },
  {
    uuid: "f1c763b0-c5dd-012f-5b39-58d385a7bc34",
    slug: "denishawn-collection-photographs-nos-1-3796",
  },
  {
    uuid: "8af2a3a0-c5df-012f-81b5-58d385a7bc34",
    slug: "denkmaeler-aus-aegypten-und-aethiopien-nach-den-zeichnungen-der-von-seiner",
  },
  {
    uuid: "59d2d0b0-c632-012f-b163-58d385a7bc34",
    slug: "description-de-lgypte",
  },
  {
    uuid: "66b22740-c5eb-012f-4223-58d385a7bc34",
    slug: "stereograph-collection",
  },
  {
    uuid: "4e2cd740-c5d3-012f-4b1a-58d385a7bc34",
    slug: "posters",
  },
  {
    uuid: "fc161e40-c5ec-012f-c513-58d385a7bc34",
    slug: "automobiles-manufacturers-catalogues",
  },
  {
    uuid: "c901a3b0-c5ec-012f-9493-58d385a7bc34",
    slug: "i-n-phelps-stokes-collection-of-american-historical-prints",
  },
  {
    uuid: "3ba13340-c5ee-012f-c8d6-58d385a7bc34",
    slug: "staten-island-post-cards",
  },
  {
    uuid: "5e789350-c5dc-012f-1163-58d385a7bc34",
    slug: "schwimmer-lloyd-collection",
  },
  {
    uuid: "67706790-c5ef-012f-83a6-58d385a7bc34",
    slug: "photographs-of-general-motors-and-chrysler-car-and-truck-models",
  },
  {
    uuid: "223a6ee0-c5f0-012f-d801-58d385a7bc34",
    slug: "sztuka",
  },
  {
    uuid: "22f5f390-c5f0-012f-2796-58d385a7bc34",
    slug: "the-eno-collection-of-new-york-city-views",
  },
  {
    uuid: "d0501dc0-c5ee-012f-1507-58d385a7bc34",
    slug: "joffrey-ballet-slides",
  },
  {
    uuid: "2c941f50-c5f1-012f-dc04-58d385a7bc34",
    slug: "w-dieter-zander-menu-collection",
  },
  {
    uuid: "72f51020-c5f1-012f-00ce-58d385a7bc34",
    slug: "scrap-book-of-russian-bookjackets-1895-1949",
  },
  {
    uuid: "1fa2d5b0-c5ef-012f-fa0d-58d385a7bc34",
    slug: "spezialkarte-der-osterreichisch-ungarischen-monarchie",
  },
  {
    uuid: "6e78bb70-0d19-0131-2cea-3c075448cc4b",
    slug: "bhutan-dance-project-core-of-culture",
  },
  {
    uuid: "860d5500-c5f2-012f-8260-58d385a7bc34",
    slug: "picturesque-palestine-sinai-and-egypt",
  },
  {
    uuid: "6c7dc4f0-c5f5-012f-ff48-58d385a7bc34",
    slug: "the-a-g-spalding-baseball-collection",
  },
  {
    uuid: "a1f0cf50-c5f3-012f-5ec8-58d385a7bc34",
    slug: "dinanda-nooney-brooklyn-photograph-collection",
  },
  {
    uuid: "5cd94760-c52a-012f-bcd4-3c075448cc4b",
    slug: "maps-of-north-america",
  },
  {
    uuid: "787827a0-c5d9-012f-a36c-58d385a7bc34",
    slug: "barbara-gittings-and-kay-tobin-lahusen-gay-history-papers-and-photographs",
  },
  {
    uuid: "74fd6aa0-c5f6-012f-a870-58d385a7bc34",
    slug: "umleck-list",
  },
  {
    uuid: "dc853890-c5f7-012f-8020-58d385a7bc34",
    slug: "xanten-bible",
  },
  {
    uuid: "3e2a4be0-c5f8-012f-8126-58d385a7bc34",
    slug: "monuments-de-lgypte-et-de-la-nubie-daprs-les-dessins-excuts-sur-les-lieux-sous",
  },
  {
    uuid: "985c0350-c5f8-012f-a60f-58d385a7bc34",
    slug: "drevnosti-rossiiskago-gosudarstva",
  },
  {
    uuid: "f48074f0-c5f8-012f-9b20-58d385a7bc34",
    slug: "the-birds-of-america",
  },
  {
    uuid: "65274530-c5f9-012f-8761-58d385a7bc34",
    slug: "don-ferrante-mahzor",
  },
  {
    uuid: "bc920670-c5f9-012f-63ad-58d385a7bc34",
    slug: "trait-des-arbres-et-arbustes-que-lon-cultive-en-france-en-pleine-terre",
  },
  {
    uuid: "1644e4c0-c5fa-012f-4e5d-58d385a7bc34",
    slug: "a-curious-herbal-containing-five-hundred-cuts-of-the-most-useful-plants-which",
  },
  {
    uuid: "7be57260-c5fa-012f-4416-58d385a7bc34",
    slug: "russkie-portrety-xviii-i-xix-vekov",
  },
  {
    uuid: "e9af2140-4673-0131-0c52-58d385a7b928",
    slug: "merce-cunningham-video-archive",
  },
  {
    uuid: "dc28c570-c5fa-012f-a0fe-58d385a7bc34",
    slug: "les-liliaces",
  },
  {
    uuid: "bbec4410-c5fb-012f-2417-58d385a7bc34",
    slug: "a-collection-of-the-dresses-of-different-nations",
  },
  {
    uuid: "ed948d00-c5fb-012f-238b-58d385a7bc34",
    slug: "the-people-of-india",
  },
  {
    uuid: "97a9e6e0-c5fc-012f-2b39-58d385a7bc34",
    slug: "iskusstvo",
  },
  {
    uuid: "a3a558e0-c5fc-012f-9269-58d385a7bc34",
    slug: "la-botanique-mise-la-porte-de-tout-le-monde-ou-collection-des-plantes-dusage",
  },
  {
    uuid: "e24c6280-c5fd-012f-261f-58d385a7bc34",
    slug: "the-birds-of-europe",
  },
  {
    uuid: "25478300-c5fe-012f-4de1-58d385a7bc34",
    slug: "puteshestve-flota-kapitana-sarycheva-po-sieverovostochno-chasti-sibiri",
  },
  {
    uuid: "e2b08120-c5fe-012f-5feb-58d385a7bc34",
    slug: "voyage-de-la-corvette-lastrolabe-excut-par-ordre-du-roi",
  },
  {
    uuid: "4b7ff3c0-577a-0130-1851-58d385a7b928",
    slug: "william-hogarth",
  },
  {
    uuid: "a945bb70-c600-012f-7ed6-58d385a7bc34",
    slug: "tobacco-its-history-and-associations",
  },
  {
    uuid: "70485490-c601-012f-e8fb-58d385a7bc34",
    slug: "eye-on-the-reich-german-propaganda-photographs-1939-1942",
  },
  {
    uuid: "06623870-c602-012f-0bd3-58d385a7bc34",
    slug: "russkii-khudozhestvennyi-listok",
  },
  {
    uuid: "c8b16940-c5f2-012f-769c-58d385a7bc34",
    slug: "wilberforce-eames-babylonian-collection",
  },
  {
    uuid: "69c5d400-c601-012f-e7b7-58d385a7bc34",
    slug: "kate-greenaways-almanack-for",
  },
  {
    uuid: "e1d86880-c602-012f-e829-58d385a7bc34",
    slug: "materaly-dlia-istori-russkago-ikonopisania",
  },
  {
    uuid: "84b97660-371f-0130-802e-58d385a7b928",
    slug: "nathaniel-hawthorne-collection-of-papers-1694-1931-bulk-1817-1864",
  },
  {
    uuid: "6864d470-c603-012f-2353-58d385a7bc34",
    slug: "knights-pictorial-gallery-of-arts",
  },
  {
    uuid: "81a85820-c603-012f-3d1a-58d385a7bc34",
    slug: "i-monumenti-dellegitto-e-della-nubia-disegnati-dalla-spedizione",
  },
  {
    uuid: "a9c98790-c604-012f-a04a-58d385a7bc34",
    slug: "monument-de-ninive-dcouvert-et-dcrit-par-mpe-botta-mesur-et-dessin-par-me",
  },
  {
    uuid: "9a41dd30-c5fe-012f-dd13-58d385a7bc34",
    slug: "sheet-music-of-songs-from-various-musicals-plays-movies-and-television-mc-file",
  },
  {
    uuid: "d73da890-c605-012f-ccd1-58d385a7bc34",
    slug: "collection-of-automobile-photographs-and-news-releases-1877-1938",
  },
  {
    uuid: "a36eb070-c5f6-012f-e062-58d385a7bc34",
    slug: "berg-collection-portrait-file",
  },
  {
    uuid: "77ba9d00-c606-012f-2348-58d385a7bc34",
    slug: "the-birds-of-great-britain",
  },
  {
    uuid: "b28be120-c602-012f-769c-58d385a7bc34",
    slug: "atlases-gazetteers-guidebooks-and-other-books",
  },
  {
    uuid: "a608b180-c5f3-012f-3c75-58d385a7bc34",
    slug: "cia-fornaroli-collection",
  },
  {
    uuid: "fb7fb1b0-c607-012f-4724-58d385a7bc34",
    slug: "die-ausstellung-von-meisterwerken-muhammedanischer-kunst-in-mnchen-1910",
  },
  {
    uuid: "b039b670-c608-012f-8f64-58d385a7bc34",
    slug: "series-of-photographic-documents-of-social-conditions-1905-1939",
  },
  {
    uuid: "5e2b6640-c60a-012f-e2a4-58d385a7bc34",
    slug: "obraztsy-starinnago-narodnoe-uzornago-shitia-i-kruzhev-iz-kollektsii-k-dalmatova",
  },
  {
    uuid: "bb5c4380-c6f4-012f-df87-58d385a7bc34",
    slug: "prints-depicting-dance",
  },
  {
    uuid: "7db3b2b0-c60b-012f-c11f-58d385a7bc34",
    slug: "dendrah-description-gnrale-du-grand-temple-de-cette-ville",
  },
  {
    uuid: "da4687f0-cc71-0130-fb40-58d385a7b928",
    slug: "american-jewish-committee-oral-history-collection",
  },
  {
    uuid: "f008fd40-c60b-012f-ad5f-58d385a7bc34",
    slug: "voyage-en-perse-de-mm-eugne-flandin-peintre-et-pascal-coste-architecte",
  },
  {
    uuid: "812e5770-c60c-012f-7167-58d385a7bc34",
    slug: "changing-new-york",
  },
  {
    uuid: "94437a40-c607-012f-45c8-58d385a7bc34",
    slug: "the-emilio-sanchez-private-sketches",
  },
  {
    uuid: "36bd8b70-c60e-012f-f701-58d385a7bc34",
    slug: "collection-of-photographs-of-new-york-city-1931-1942",
  },
  {
    uuid: "69ebfdb0-c60e-012f-6951-58d385a7bc34",
    slug: "materialy-dlia-russkoi-ikonografii",
  },
  {
    uuid: "22ffdfd0-c60d-012f-45b4-58d385a7bc34",
    slug: "odezhdy-russkago-gosudarstva",
  },
  {
    uuid: "869e9a80-c60f-012f-28d1-58d385a7bc34",
    slug: "oeuvres-compltes-de-buffon-augmentes-par-m-f-cuvier-de-deux-volumes",
  },
  {
    uuid: "b471a6f0-c60f-012f-aa99-58d385a7bc34",
    slug: "poland-in-photographs-1939-1944",
  },
  {
    uuid: "18b97130-c610-012f-b021-58d385a7bc34",
    slug: "albom-portretov-byvshikh-kadet-i-kadetskago-korpusa",
  },
  {
    uuid: "282137f0-c610-012f-cf2a-58d385a7bc34",
    slug: "photographs-of-the-catskill-water-supply-system-in-process-of-construction",
  },
  {
    uuid: "1dd11840-c611-012f-399c-58d385a7bc34",
    slug: "istoricheskoe-opisane-odezhdy-i-vooruzhenia-rossskikh-vosk",
  },
  {
    uuid: "2bae0210-c60f-012f-5abf-58d385a7bc34",
    slug: "liberia",
  },
  {
    uuid: "21929b50-c611-012f-2b50-58d385a7bc34",
    slug: "motivy-russko-arkhitektury",
  },
  {
    uuid: "8b22d010-c611-012f-8854-58d385a7bc34",
    slug: "the-worlds-loose-leaf-album-of-apartment-houses",
  },
  {
    uuid: "a590ff40-c611-012f-2b61-58d385a7bc34",
    slug: "monuments-franais-indits-pour-servir-lhistoire-des-arts-depuis-le-vie-sicle",
  },
  {
    uuid: "077c29f0-c612-012f-f4fa-58d385a7bc34",
    slug: "apartment-houses-of-the-metropolis",
  },
  {
    uuid: "f7ffc990-c5ae-012f-eb75-58d385a7bc34",
    slug: "diana-davies-photographs",
  },
  {
    uuid: "45013f40-c555-012f-c94a-3c075448cc4b",
    slug: "billy-rose-theatre-division-scrapbooks",
  },
  {
    uuid: "97ac7440-c612-012f-7fa5-58d385a7bc34",
    slug: "portrety-lits-otlichivshikhsia-zaslugami-i-komandovavshikh-dieistvuiushchimi",
  },
  {
    uuid: "28d304b0-c612-012f-cd39-58d385a7bc34",
    slug: "photographs-of-british-algae-cyanotype-impressions",
  },
  {
    uuid: "1281d470-c613-012f-63d8-58d385a7bc34",
    slug: "the-north-american-sylva-or-a-description-of-the-forest-trees-of-the-united",
  },
  {
    uuid: "96a14ab0-c613-012f-5c8e-58d385a7bc34",
    slug: "magazine-posters",
  },
  {
    uuid: "e8a00440-c613-012f-d6c4-58d385a7bc34",
    slug: "the-caucasus",
  },
  {
    uuid: "7abeb350-c614-012f-2253-58d385a7bc34",
    slug: "catalogue-g",
  },
  {
    uuid: "675652a0-c614-012f-c7ec-58d385a7bc34",
    slug: "benjamin-r-tucker-papers",
  },
  {
    uuid: "e8acd360-c614-012f-a4c2-58d385a7bc34",
    slug: "les-matres-de-laffiche",
  },
  {
    uuid: "5f00fa20-c615-012f-c85b-58d385a7bc34",
    slug: "hecla-iron-works-from-1876-to-1908",
  },
  {
    uuid: "b44b5a10-c615-012f-3585-58d385a7bc34",
    slug: "the-holy-land-syria-idumea-arabia-egypt-and-nubia",
  },
  {
    uuid: "adb54360-c60d-012f-bcfa-58d385a7bc34",
    slug: "zoology-of-new-york",
  },
  {
    uuid: "440fcfe0-c634-012f-713a-58d385a7bc34",
    slug: "knigl-bayer-pinakothek-zu-mnchen-und-gemlde-gallerie-zu-schleissheim-mit-seiner",
  },
  {
    uuid: "66ebbe10-c617-012f-4a17-58d385a7bc34",
    slug: "the-history-of-the-feminine-costume-of-the-world-from-the-year-5318-bc",
  },
  {
    uuid: "2e21da80-c608-012f-bfe9-58d385a7bc34",
    slug: "billy-rose-theatre-collection-clipping-file",
  },
  {
    uuid: "47da5670-c635-012f-de88-58d385a7bc34",
    slug: "a-new-general-collection-of-voyages-and-travels",
  },
  {
    uuid: "d3db9230-c635-012f-0e52-58d385a7bc34",
    slug: "the-natural-history-of-carolina-florida-and-the-bahama-islands",
  },
  {
    uuid: "8ea54b40-c635-012f-db4c-58d385a7bc34",
    slug: "moskva",
  },
  {
    uuid: "aa18cd70-0d99-0131-bfae-3c075448cc4b",
    slug: "general-dance-video-archive",
  },
  {
    uuid: "b58e4c60-0d99-0131-eb7d-3c075448cc4b",
    slug: "mikhail-baryshnikov-video-archive",
  },
  {
    uuid: "1dee0830-c637-012f-fd99-58d385a7bc34",
    slug: "kartiny-galerei-imperatorskago-ermitazha",
  },
  {
    uuid: "b95e5c20-c637-012f-40d8-58d385a7bc34",
    slug: "posters-2",
  },
  {
    uuid: "8031e230-c612-012f-3daf-58d385a7bc34",
    slug: "farm-security-administration-collection",
  },
  {
    uuid: "8aa41240-c638-012f-475e-58d385a7bc34",
    slug: "national-highways-association",
  },
  {
    uuid: "caf63510-c638-012f-af74-58d385a7bc34",
    slug: "lart-arabe-daprs-les-monuments-du-kaire",
  },
  {
    uuid: "ab01a7d0-c63d-012f-07ea-58d385a7bc34",
    slug: "illustrations-of-indian-zoology",
  },
  {
    uuid: "f4fe1ec0-c63d-012f-0803-58d385a7bc34",
    slug: "zbirka-portreta-i-biografija-znamenitih-ljudi-kraljevstva-srba-hrvata-i",
  },
  {
    uuid: "c15cb840-c63e-012f-db24-58d385a7bc34",
    slug: "pattern-book-for-jewellers-gold-and-silversmiths",
  },
  {
    uuid: "a9ae3e20-c63f-012f-688f-58d385a7bc34",
    slug: "architectura-curiosa-nova",
  },
  {
    uuid: "5883ce50-c63f-012f-5997-58d385a7bc34",
    slug: "illuminerade-figurer-till-skandinaviens-fauna",
  },
  {
    uuid: "0b77f5a0-c63f-012f-cbb6-58d385a7bc34",
    slug: "lornement-polychrome",
  },
  {
    uuid: "7e148210-c63e-012f-5a52-58d385a7bc34",
    slug: "particular-voices-portraits-of-gay-and-lesbian-writers-by-robert-giard",
  },
  {
    uuid: "f4abcdc0-c63f-012f-0cdc-58d385a7bc34",
    slug: "american-engravings",
  },
  {
    uuid: "46b7de60-c640-012f-90d8-58d385a7bc34",
    slug: "iconographie-gnrale-et-mthodique-du-costume-du-ive-au-xixe-sicle",
  },
  {
    uuid: "914eef60-c640-012f-9b22-58d385a7bc34",
    slug: "a-monograph-of-the-pheasants",
  },
  {
    uuid: "2291c7c0-c641-012f-cee8-58d385a7bc34",
    slug: "portretnaia-galereia-russkikh-dieiatelei",
  },
  {
    uuid: "69220420-c641-012f-35e3-58d385a7bc34",
    slug: "russkii-narodnyi-lubok-1860-kh-1870-kh-gg-albom",
  },
  {
    uuid: "7401dac0-c642-012f-5f57-58d385a7bc34",
    slug: "german-world-war-i-photographic-postcards",
  },
  {
    uuid: "032e5ac0-c643-012f-d66e-58d385a7bc34",
    slug: "journal-of-saints",
  },
  {
    uuid: "43d880b0-c643-012f-9f3c-58d385a7bc34",
    slug: "reichenbachia-orchids-illustrated-and-described-by-f-sander-1st-2d-series",
  },
  {
    uuid: "40c8e0e0-c644-012f-191c-58d385a7bc34",
    slug: "album-du-bal-costume-au-palais-dhiver-fevrier-1903",
  },
  {
    uuid: "ca41cfa0-c643-012f-e1c2-58d385a7bc34",
    slug: "moskva-2",
  },
  {
    uuid: "b2f201c0-c644-012f-db84-58d385a7bc34",
    slug: "traite-theorique-et-pratique-de-lart-de-btir",
  },
  {
    uuid: "86ffb4f0-c5fd-012f-d690-58d385a7bc34",
    slug: "jerome-robbins-dance-division-photograph-files",
  },
  {
    uuid: "78dfb3b0-c616-012f-7acb-58d385a7bc34",
    slug: "soete-menu-collection",
  },
  {
    uuid: "b34f8e50-c642-012f-89c8-58d385a7bc34",
    slug: "variety-vaudeville-burlesque",
  },
  {
    uuid: "f073e770-c644-012f-9c19-58d385a7bc34",
    slug: "histoire-physique-politique-et-naturelle-de-lile-de-cuba",
  },
  {
    uuid: "2ad23250-c645-012f-edf8-58d385a7bc34",
    slug: "memoir-prepared-at-the-request-of-a-committee-of-the-common-council-of-the-city",
  },
  {
    uuid: "65049f20-c646-012f-ad1a-58d385a7bc34",
    slug: "drawings-engraved-plates-printed-excerpts-etc-of-tobacco-interest-from-the-18th",
  },
  {
    uuid: "56605f50-c6cc-012f-3e5a-58d385a7bc34",
    slug: "indian-coloured-drawings",
  },
  {
    uuid: "7f183850-c647-012f-4d36-58d385a7bc34",
    slug: "hortvs-nitidissimis-omnem-per-annvm-svperbiens-floribvs",
  },
  {
    uuid: "b6309a70-c647-012f-d6d0-58d385a7bc34",
    slug: "les-roses",
  },
  {
    uuid: "885cfc80-c6b7-012f-c2a6-58d385a7bc34",
    slug: "zoological-lectures-delivered-at-the-royal-institution-in-the-years-1806",
  },
  {
    uuid: "2ebb2db0-c6b8-012f-a06b-58d385a7bc34",
    slug: "histoire-de-lart-gyptien-daprs-les-monuments",
  },
  {
    uuid: "6fc81e90-c6b8-012f-f7be-58d385a7bc34",
    slug: "kaishien-gaden",
  },
  {
    uuid: "bcb40830-c6b7-012f-8184-58d385a7bc34",
    slug: "william-henry-jackson-papers-1862-1942",
  },
  {
    uuid: "d5138d40-c6b9-012f-efb0-58d385a7bc34",
    slug: "atlante-del-basso-ed-alto-egitto",
  },
  {
    uuid: "10e0ef70-c647-012f-17d4-58d385a7bc34",
    slug: "baratta-menu-collection",
  },
  {
    uuid: "98c5e7b0-c6b9-012f-3944-58d385a7bc34",
    slug: "pomona-italiana",
  },
  {
    uuid: "0ea7ef20-c6ba-012f-7776-58d385a7bc34",
    slug: "the-antiquities-natural-history-ruins-and-other-curiosities-of-egypt-nubia",
  },
  {
    uuid: "87633d50-c6ba-012f-69a1-58d385a7bc34",
    slug: "butterflies-of-north-america",
  },
  {
    uuid: "c0da2480-c6ba-012f-ce56-58d385a7bc34",
    slug: "koronatsonny-sbornik",
  },
  {
    uuid: "f6e81710-c6ba-012f-f0bf-58d385a7bc34",
    slug: "nieskolko-narodnykh-tipov-rossii",
  },
  {
    uuid: "520ab890-c6ba-012f-a9fe-58d385a7bc34",
    slug: "the-industrial-arts-of-the-nineteenth-century",
  },
  {
    uuid: "24829140-c6bc-012f-339e-58d385a7bc34",
    slug: "album-zasluznih-hrvata-xix-stoljeca",
  },
  {
    uuid: "819ec2d0-c6bc-012f-7d85-58d385a7bc34",
    slug: "theatrum-machinarum-novum",
  },
  {
    uuid: "b68a6ad0-c6bc-012f-819e-58d385a7bc34",
    slug: "the-cabinet-maker-and-upholsterers-guide",
  },
  {
    uuid: "ed093f00-c6bc-012f-8074-58d385a7bc34",
    slug: "illustrations-of-exotic-entomology-containing-upwards-of-six-hundred-and-fifty",
  },
  {
    uuid: "50d439c0-c6bd-012f-8e66-58d385a7bc34",
    slug: "north-american-herpetology",
  },
  {
    uuid: "21372960-c6bd-012f-7c77-58d385a7bc34",
    slug: "the-viviparous-quadrupeds-of-north-america",
  },
  {
    uuid: "3a6bcc10-c6be-012f-72f8-58d385a7bc34",
    slug: "costumes-collected-in-italy-by-stewart-watson-rsa",
  },
  {
    uuid: "754b6530-c6be-012f-a832-58d385a7bc34",
    slug: "viaggio-nel-basso-ed-alto-egitto",
  },
  {
    uuid: "80c88430-c6bd-012f-d33e-58d385a7bc34",
    slug: "thomas-a-larcom-photographs-collection",
  },
  {
    uuid: "d357c8a0-c6be-012f-d8a1-58d385a7bc34",
    slug: "lgypte-et-la-nubie-grand-album-monumental-historique-architectural",
  },
  {
    uuid: "0715e670-c6bf-012f-6079-58d385a7bc34",
    slug: "antiquits-de-la-nubie-ou-monumens-indits-des-bords-du-nil-situs-entre-la-premire",
  },
  {
    uuid: "9282a5e0-c6bf-012f-e655-58d385a7bc34",
    slug: "fables",
  },
  {
    uuid: "c1372460-c6bf-012f-433e-58d385a7bc34",
    slug: "illustrated-circular",
  },
  {
    uuid: "1e5da0d0-c6c0-012f-cb11-58d385a7bc34",
    slug: "photographs-of-the-construction-of-the-holland-tunnel-1919-1927",
  },
  {
    uuid: "71b29c30-c6c0-012f-c63b-58d385a7bc34",
    slug: "voyage-dans-la-basse-et-la-haute-gypte",
  },
  {
    uuid: "a6ce5fe0-c6c0-012f-ba6b-58d385a7bc34",
    slug: "ikonografiia-gospoda-boga-i-spasa-nashego-iisusa-khrista-istoricheskii-i",
  },
  {
    uuid: "75b72d10-c645-012f-1555-58d385a7bc34",
    slug: "military",
  },
  {
    uuid: "600b22d0-c6c1-012f-6852-58d385a7bc34",
    slug: "cornelis-de-bruins-reizen-over-moskovie-door-persie-en-indie",
  },
  {
    uuid: "1f463c80-c6c2-012f-4241-58d385a7bc34",
    slug: "the-earle-collection-of-early-staffordshire-pottery-illustrating-over-seven",
  },
  {
    uuid: "a5283ba0-c6c2-012f-5dfe-58d385a7bc34",
    slug: "mukashigatari-shichiya-no-kura",
  },
  {
    uuid: "7b672430-c6c2-012f-d63b-58d385a7bc34",
    slug: "shhnmah",
  },
  {
    uuid: "c04ccaf0-c6c1-012f-47f2-58d385a7bc34",
    slug: "sketches-for-frank-leslies-illustrated-newspaper",
  },
  {
    uuid: "9d0f5d40-c6c3-012f-689b-58d385a7bc34",
    slug: "histoire-naturelle",
  },
  {
    uuid: "ee8ff000-c6c3-012f-8148-58d385a7bc34",
    slug: "principles-of-geology",
  },
  {
    uuid: "8a473cb0-c6c4-012f-4a5c-58d385a7bc34",
    slug: "tarjumah-i-shhnmah-translation-of-shhnmah-into-turkish",
  },
  {
    uuid: "02eefbb0-c6c5-012f-8215-58d385a7bc34",
    slug: "abbildungen-der-jagtbaren-thiere-mit-derselben-angefuegten-faehrten-und-spuhren",
  },
  {
    uuid: "33b73c00-c6c5-012f-a795-58d385a7bc34",
    slug: "albom-fotograficheskikh-portretov-avgustieishikh-osob-i-lits-izviestnykh-v",
  },
  {
    uuid: "b1169fb0-c6c4-012f-c759-58d385a7bc34",
    slug: "les-anciennes-tapisseries-histories",
  },
  {
    uuid: "7c1ac6e0-c6c5-012f-d142-58d385a7bc34",
    slug: "sakhalin-the-island-of-exile",
  },
  {
    uuid: "8903b2c0-c5f1-012f-080d-58d385a7bc34",
    slug: "portrait-collection",
  },
  {
    uuid: "fd6e6630-c6c5-012f-f039-58d385a7bc34",
    slug: "egypt-nubia",
  },
  {
    uuid: "4ec30d70-c6c6-012f-4a82-58d385a7bc34",
    slug: "egypte-nubie-palestine-et-syrie",
  },
  {
    uuid: "286c8900-c6c6-012f-7951-58d385a7bc34",
    slug: "incidents-of-travel-in-yucatan",
  },
  {
    uuid: "5fa75050-c6c7-012f-e24b-58d385a7bc34",
    slug: "drawing-of-floretine-painters-classified-criticised-and-studied-as-documents",
  },
  {
    uuid: "f01ed3e0-c6c6-012f-36ed-58d385a7bc34",
    slug: "ise-monogatari",
  },
  {
    uuid: "1453d460-c6c7-012f-03d3-58d385a7bc34",
    slug: "larchitecture-et-la-dcoration-aux-palais-de-versailles-et-des-trianon",
  },
  {
    uuid: "3ec86960-c6c7-012f-d945-58d385a7bc34",
    slug: "the-natural-history-of-british-fishes",
  },
  {
    uuid: "c67b0960-c6c7-012f-f9da-58d385a7bc34",
    slug: "abydos-description-des-fouilles-excutes-sur-lemplacement-de-cette-ville",
  },
  {
    uuid: "5572eb60-c6c8-012f-b39e-58d385a7bc34",
    slug: "arabische-und-alt-italienische-bau-verzierungen",
  },
  {
    uuid: "f27492c0-c6c7-012f-6b64-58d385a7bc34",
    slug: "interesting-selections-from-animated-nature",
  },
  {
    uuid: "e49e6a90-c6c8-012f-aa58-58d385a7bc34",
    slug: "costume-of-the-ladies-of-england",
  },
  {
    uuid: "86709630-c6c8-012f-a026-58d385a7bc34",
    slug: "twentieth-century-negro-literature-or-a-cyclopedia-of-thought-on-the-vital",
  },
  {
    uuid: "43b9a390-c6c9-012f-7440-58d385a7bc34",
    slug: "chichi-no",
  },
  {
    uuid: "14e27740-c6c9-012f-4966-58d385a7bc34",
    slug: "fauna-boreali-americana-or-the-zoology-of-the-northern-parts-of-british-america",
  },
  {
    uuid: "cc0159c0-c6c7-012f-1c1a-58d385a7bc34",
    slug: "histoire-naturelle-des-oiseaux-de-paradis-et-des-rolliers-suivie-de-celle",
  },
  {
    uuid: "93625ae0-c6c9-012f-559f-58d385a7bc34",
    slug: "a-complete-body-of-architecture",
  },
  {
    uuid: "f584fdd0-c6c7-012f-3e62-58d385a7bc34",
    slug: "pamiatniki-drevniago-russkago-zodchestva-izd-imperatorskoi-akademii-khudozhestv",
  },
  {
    uuid: "488d5d30-c6c8-012f-2f10-58d385a7bc34",
    slug: "posters-by-edward-penfield",
  },
  {
    uuid: "1ddda470-c6c8-012f-c71b-58d385a7bc34",
    slug: "retratos-de-los-espaoles-ilustres-con-un-eptome-de-sus-vidas",
  },
  {
    uuid: "85566470-c6c7-012f-19a1-58d385a7bc34",
    slug: "laronautique-des-origines-1922",
  },
  {
    uuid: "6fe4ec70-c6c8-012f-84ca-58d385a7bc34",
    slug: "the-new-natural-history-by-richard-lydekker",
  },
  {
    uuid: "bd49e140-c6c8-012f-7238-58d385a7bc34",
    slug: "dcorations-polychromes",
  },
  {
    uuid: "e402c940-c6c8-012f-76a7-58d385a7bc34",
    slug: "entrance-gates-railings-etc",
  },
  {
    uuid: "f066ea90-c6c1-012f-2369-58d385a7bc34",
    slug: "les-difices-antiques-de-rome-dessins-et-mesurs-trs-exactement",
  },
  {
    uuid: "285247a0-c6c9-012f-0046-58d385a7bc34",
    slug: "voyage-autour-du-monde-sur-la-fregate-la-venus-pendant-les-annees-1836-1839",
  },
  {
    uuid: "bfff53b0-c6c9-012f-a7cf-58d385a7bc34",
    slug: "peasant-art-of-subcarpathian-russia",
  },
  {
    uuid: "40eb7330-c6c3-012f-24cb-58d385a7bc34",
    slug: "grenada-plantation-records",
  },
  {
    uuid: "7845e510-c6c9-012f-96c9-58d385a7bc34",
    slug: "ise-monogatari-emaki",
  },
  {
    uuid: "64ab7680-c6ca-012f-f89d-58d385a7bc34",
    slug: "vidy-kishineva-i-ego-okrestnostei",
  },
  {
    uuid: "87fbe960-c6ca-012f-9c56-58d385a7bc34",
    slug: "animate-creation-popular-edition-of-our-living-world-a-natural-history",
  },
  {
    uuid: "9238e040-c6ca-012f-2dec-58d385a7bc34",
    slug: "newspaper-posters",
  },
  {
    uuid: "f18beac0-c6b7-012f-342e-58d385a7bc34",
    slug: "the-negro-in-the-new-world",
  },
  {
    uuid: "dc248a40-c6ca-012f-802c-58d385a7bc34",
    slug: "lart-du-menuisier",
  },
  {
    uuid: "bf6b09e0-c6ca-012f-4849-58d385a7bc34",
    slug: "puteshestvie-vokrug-svieta-v-1803-4-5-i-1806-godakh",
  },
  {
    uuid: "44c11530-c6cb-012f-0f28-58d385a7bc34",
    slug: "china-2",
  },
  {
    uuid: "726a47e0-c6cb-012f-fceb-58d385a7bc34",
    slug: "movie-houses-of-the-outer-boroughs-past-glory-and-adaptive-reuse-1998-2001",
  },
  {
    uuid: "c6f71180-c6cb-012f-ad4b-58d385a7bc34",
    slug: "trait-denluminure-dart-au-pochoir",
  },
  {
    uuid: "9c608fb0-c6cb-012f-695d-58d385a7bc34",
    slug: "les-modes-fminines-du-xixe-sicle-interprtes-en-cent-pointes-sches-aquarelles-au",
  },
  {
    uuid: "99810af0-c6cb-012f-f4d4-58d385a7bc34",
    slug: "the-monuments-of-nineveh-from-drawings-made-on-the-spot-by-austen-henry-layard",
  },
  {
    uuid: "ed1993b0-c6cb-012f-14a9-58d385a7bc34",
    slug: "tudes-danimaux",
  },
  {
    uuid: "5d4d7ac0-c6cc-012f-4bcd-58d385a7bc34",
    slug: "caldrons-and-kettles",
  },
  {
    uuid: "c209ad30-c6c9-012f-50f1-58d385a7bc34",
    slug: "the-charrington-set",
  },
  {
    uuid: "46b00150-c6cc-012f-f574-58d385a7bc34",
    slug: "collection-of-russian-and-ukrainian-posters-1917-1921",
  },
  {
    uuid: "9af20e70-c6cc-012f-644f-58d385a7bc34",
    slug: "materaly-po-istori-russko-kartografi",
  },
  {
    uuid: "372173a0-c6cc-012f-19fd-58d385a7bc34",
    slug: "recueil-de-cent-estampes-representant-differentes-nations-du-levant",
  },
  {
    uuid: "1d849020-c6cc-012f-aa26-58d385a7bc34",
    slug: "rules-and-examples-of-perspective-proper-for-painters-and-architects-etc",
  },
  {
    uuid: "126366e0-c6cc-012f-2104-58d385a7bc34",
    slug: "a-description-of-the-genus-pinus",
  },
  {
    uuid: "713c0af0-c6cc-012f-fe84-58d385a7bc34",
    slug: "the-grammar-of-ornament",
  },
  {
    uuid: "7ae9def0-c6cc-012f-b26b-58d385a7bc34",
    slug: "the-practical-cabinet-maker-upholsterer-and-complete-decorator",
  },
  {
    uuid: "1726c410-c6cd-012f-c57f-58d385a7bc34",
    slug: "album-of-photographic-views-of-italy",
  },
  {
    uuid: "ede91940-c6c9-012f-9918-58d385a7bc34",
    slug: "franklin-car",
  },
  {
    uuid: "c1db4690-c6cc-012f-1d14-58d385a7bc34",
    slug: "the-history-of-the-royal-residences-of-windsor-castle",
  },
  {
    uuid: "1eb168a0-c6ce-012f-a7fb-58d385a7bc34",
    slug: "flora-rossica",
  },
  {
    uuid: "c4383170-c6cd-012f-6e4d-58d385a7bc34",
    slug: "japan",
  },
  {
    uuid: "3edc40f0-c6cd-012f-0efa-58d385a7bc34",
    slug: "monographie-de-loeuvre-de-bernard-palissy",
  },
  {
    uuid: "a675d330-c6cc-012f-0cfa-58d385a7bc34",
    slug: "photographs-concerning-labor-housing-and-social-conditions-in-the-united-states",
  },
  {
    uuid: "6a9fd3d0-c6cd-012f-05f2-58d385a7bc34",
    slug: "recueil-de-cent-planches-de-dcoration",
  },
  {
    uuid: "f3a81a90-c6cd-012f-f630-58d385a7bc34",
    slug: "la-cramique-dans-lart-dextrme-orient",
  },
  {
    uuid: "9044cbe0-c6ce-012f-0e43-58d385a7bc34",
    slug: "blatter-aus-meinem-portefeuille-im-laufe-des-feldzugs-1812-in-russland-an-ort",
  },
  {
    uuid: "e995c3f0-c6ce-012f-d28a-58d385a7bc34",
    slug: "the-book-of-decorative-furniture",
  },
  {
    uuid: "3cf9b310-c6cf-012f-771a-58d385a7bc34",
    slug: "architecture-arabe",
  },
  {
    uuid: "161a92a0-c6cf-012f-6979-58d385a7bc34",
    slug: "photographs-of-native-americans-by-edward-curtis",
  },
  {
    uuid: "6e3083f0-c6cf-012f-ad3c-58d385a7bc34",
    slug: "manners-and-customs-of-the-ancient-egyptians-including-their-private-life",
  },
  {
    uuid: "dd357da0-c6cf-012f-17c9-58d385a7bc34",
    slug: "the-butterflies-of-the-eastern-united-states-and-canada-with-special-reference",
  },
  {
    uuid: "47d7a790-c6ce-012f-a61c-58d385a7bc34",
    slug: "collection-of-photographs-of-east-river-and-hudson-river-piers-manhattan",
  },
  {
    uuid: "08a68bf0-c6d0-012f-509f-58d385a7bc34",
    slug: "istoriia-kavalergardov-i-kavalergardskago-eia-velichestva-polka-s-1724-po-1-e",
  },
  {
    uuid: "7902de60-c6d0-012f-4f57-58d385a7bc34",
    slug: "pamiatniki-stariny-v-zapadnykh-guberniakh-imperii",
  },
  {
    uuid: "514e7210-c6d0-012f-6788-58d385a7bc34",
    slug: "portrety-gerby-i-pechati-bolshoi-gosudarstvennoi-knigi-1672-g",
  },
  {
    uuid: "c1c13ad0-c6d0-012f-cba9-58d385a7bc34",
    slug: "european-russia-portraits-cities-and-villages-street-scenes-and-country-views",
  },
  {
    uuid: "e4f69750-c6d0-012f-792f-58d385a7bc34",
    slug: "frank-e-downs-trip-to-nome-alaska-may-to-sept-1900",
  },
  {
    uuid: "6d90b620-c6d1-012f-80dd-58d385a7bc34",
    slug: "interborough-rapid-transit",
  },
  {
    uuid: "93b7b6d0-c6d1-012f-052c-58d385a7bc34",
    slug: "sobranie-vizantiiskikh-gruzinskikh-i-drevnerusskikh-ornamentov-i-pamiatnikov",
  },
  {
    uuid: "f6148260-c6d1-012f-46e8-58d385a7bc34",
    slug: "newest-styles-for-men",
  },
  {
    uuid: "1424a910-c6d2-012f-46c9-58d385a7bc34",
    slug: "opisanie-vsekh-obitaiushchikh-v-rossiiskom-gosudarstve-narodov-ikh-zhiteiskikh",
  },
  {
    uuid: "ab394b60-d4bc-0131-8bd5-58d385a7bbd0",
    slug: "works-progress-administration-wpa-art",
  },
  {
    uuid: "ae5f3830-c6d2-012f-1b4e-58d385a7bc34",
    slug: "a-monograph-of-the-phasianidae",
  },
  {
    uuid: "34007fd0-c6d2-012f-5566-58d385a7bc34",
    slug: "a-pictorial-description-of-broadway",
  },
  {
    uuid: "5249a940-c6d2-012f-fda1-58d385a7bc34",
    slug: "views-of-the-estrada-de-ferro-madeira-e-mamor-amazonas-matto-grosso-brazil-sa",
  },
  {
    uuid: "8fb550b0-c6d2-012f-1902-58d385a7bc34",
    slug: "the-bronze-ornaments-of-the-palace-gates-of-balawat-shalmaneser-ii-bc-859-825",
  },
  {
    uuid: "cdf3ec70-c6d2-012f-3cc9-58d385a7bc34",
    slug: "les-arts-arabes",
  },
  {
    uuid: "ef471740-c6d2-012f-b91b-58d385a7bc34",
    slug: "specimens-of-ornamental-art",
  },
  {
    uuid: "b7b3a390-c6d1-012f-c2f0-58d385a7bc34",
    slug: "yiddish-theater-collection",
  },
  {
    uuid: "30c77990-c6d3-012f-99cd-58d385a7bc34",
    slug: "mcanisme-de-la-physionomie-humaine",
  },
  {
    uuid: "1000fe80-c6d3-012f-6608-58d385a7bc34",
    slug: "pomona-britannica",
  },
  {
    uuid: "93b16510-c634-012f-3fb3-58d385a7bc34",
    slug: "helen-armstead-johnson-photograph-collection",
  },
  {
    uuid: "f1a4e960-c6d3-012f-b5b0-58d385a7bc34",
    slug: "ninive-et-lassyrie-par-victor-place",
  },
  {
    uuid: "2a832730-c6d4-012f-7fe5-58d385a7bc34",
    slug: "pantheon-egyptien-collection-des-personnages-mythologiques-de-lancienne-egypte",
  },
  {
    uuid: "cb16fe10-c6d3-012f-2c35-58d385a7bc34",
    slug: "travels-in-ethiopia-above-the-second-cataract-of-the-nile-exhibiting-the-state",
  },
  {
    uuid: "daa39170-c6d4-012f-b604-58d385a7bc34",
    slug: "les-pigeons-par-madame-knip-ne-pauline-de-courcelles",
  },
  {
    uuid: "9b7029b0-c6d4-012f-6dfe-58d385a7bc34",
    slug: "men-of-mark-eminent-progressive-and-rising",
  },
  {
    uuid: "2e9d11f0-c6d5-012f-2ce6-58d385a7bc34",
    slug: "album-of-turkish-costume-paintings",
  },
  {
    uuid: "19197ae0-c6e1-012f-1239-58d385a7bc34",
    slug: "soviet-russia-in-its-early-years-a-collection-of-photographs-presented",
  },
  {
    uuid: "40b404c0-c6e1-012f-e0b1-58d385a7bc34",
    slug: "russkii-narodnyi-lubok",
  },
  {
    uuid: "d8510200-c6e2-012f-375e-3c075448cc4b",
    slug: "kievskii-vladimirskii-sobor",
  },
  {
    uuid: "65cfc030-c6d5-012f-0b61-58d385a7bc34",
    slug: "oeyama-shuten-doji",
  },
  {
    uuid: "8428c270-c6ca-012f-a5a2-58d385a7bc34",
    slug: "cte-occidentale-dafrique-vues-scnes-croquis",
  },
  {
    uuid: "66614620-c6ca-012f-0a98-58d385a7bc34",
    slug: "fifth-avenue-new-york-from-start-to-finish",
  },
  {
    uuid: "553e4ee0-c6e4-012f-fcbc-3c075448cc4b",
    slug: "voyage-dexploration-a-la-mer-morte-a-petra-et-sur-la-rive-gauche-du-jourdain",
  },
  {
    uuid: "4003fa20-c6ca-012f-871c-58d385a7bc34",
    slug: "photographs-and-prints-of-egypt-and-syria",
  },
  {
    uuid: "d1027350-c6ca-012f-50d6-58d385a7bc34",
    slug: "los-caprichos",
  },
  {
    uuid: "331f5700-c6cb-012f-a891-58d385a7bc34",
    slug: "the-great-south",
  },
  {
    uuid: "56fde230-c6cb-012f-2187-58d385a7bc34",
    slug: "the-aboriginal-port-folio",
  },
  {
    uuid: "c5968560-c6cb-012f-cd73-58d385a7bc34",
    slug: "billy-rose-theatre-division-lobby-cards",
  },
  {
    uuid: "68b37c50-c6cc-012f-bb14-58d385a7bc34",
    slug: "croix-lithuaniennes",
  },
  {
    uuid: "adbf39d0-c6cb-012f-f18a-58d385a7bc34",
    slug: "le-caucase-pittoresque-dessine-dapres-nature-par-le-prince-gregoire-gagarine",
  },
  {
    uuid: "cd4c3430-c6cb-012f-ccf3-58d385a7bc34",
    slug: "one-hundred-years-of-the-african-methodist-episcopal-zion-church",
  },
  {
    uuid: "89a19110-c6cc-012f-cef4-58d385a7bc34",
    slug: "studies-of-a-modern-manufacturing-plant",
  },
  {
    uuid: "aa7f7670-c6cc-012f-9567-58d385a7bc34",
    slug: "voyage-dans-lintrieur-de-lamrique-du-nord",
  },
  {
    uuid: "e925fa40-c6cc-012f-bbd8-58d385a7bc34",
    slug: "historische-inschriften-altgyptischer-denkmler",
  },
  {
    uuid: "2ae1b730-c6cd-012f-2b85-58d385a7bc34",
    slug: "new-york-city-theater-marquees",
  },
  {
    uuid: "0b536bc0-c6cd-012f-7a0d-58d385a7bc34",
    slug: "supplement-to-apartment-houses-of-the-metropolis",
  },
  {
    uuid: "a5b9e0d0-c6cd-012f-5692-58d385a7bc34",
    slug: "collection-of-photographs-by-daniel-b-austin-and-his-associate-adam-dove-taken",
  },
  {
    uuid: "0a576c80-c6ce-012f-cd13-58d385a7bc34",
    slug: "chinese-drawings",
  },
  {
    uuid: "3698c5d0-c6bf-012f-6d88-58d385a7bc34",
    slug: "new-york-worlds-fair-1964-1965-corporation-records",
  },
  {
    uuid: "820c91a0-c6ce-012f-240a-58d385a7bc34",
    slug: "peking-the-beautiful",
  },
  {
    uuid: "47e85830-c6ce-012f-6aa2-58d385a7bc34",
    slug: "the-russian-revolution-events-and-personalities",
  },
  {
    uuid: "27642b20-c6cf-012f-24ca-58d385a7bc34",
    slug: "catalogue-d",
  },
  {
    uuid: "e74049b0-c6ce-012f-5731-58d385a7bc34",
    slug: "des-cleres-et-nobles-femmes",
  },
  {
    uuid: "c43112d0-c6ce-012f-a990-58d385a7bc34",
    slug: "egypt-and-palestine",
  },
  {
    uuid: "46243480-c6cf-012f-dffe-58d385a7bc34",
    slug: "putevyia-zapiski-vedennyia-vo-vremia-prebyvaniia-na-ionicheskikh-ostrovakh-v",
  },
  {
    uuid: "06a212a0-c6cf-012f-2556-58d385a7bc34",
    slug: "recueil-dornemens-lusage-des-jeunes-artistes-qui-se-destinent-la-dcoration",
  },
  {
    uuid: "a56d9c80-c6ce-012f-0f05-58d385a7bc34",
    slug: "the-british-miscellany",
  },
  {
    uuid: "9a7deee0-c6cf-012f-285d-58d385a7bc34",
    slug: "albom-voenno-pokhodnoi-svietopisi-rushchukskago-otriada",
  },
  {
    uuid: "d670a580-c6cf-012f-1cc4-58d385a7bc34",
    slug: "views-of-japan",
  },
  {
    uuid: "d20d0f80-c6d0-012f-a6e5-58d385a7bc34",
    slug: "historiae-naturalis-de-quadrupetibus-libri",
  },
  {
    uuid: "b4b15c80-c6d0-012f-44d4-58d385a7bc34",
    slug: "toffes-et-tapis-trangers",
  },
  {
    uuid: "413286d0-c6d1-012f-7796-58d385a7bc34",
    slug: "recueil-de-dcorations-intrieures-comprenant-tout-ce-qui-a-rapport-lameublement",
  },
  {
    uuid: "0418a630-c6d1-012f-1065-58d385a7bc34",
    slug: "the-new-and-heretofore-unfigured-species-of-birds-of-north-america",
  },
  {
    uuid: "911c71a0-c6e5-012f-2ff7-58d385a7bc34",
    slug: "au-sud-de-lafrique-avec-150-dessins-et-croquis-de-lauteur",
  },
  {
    uuid: "2516e470-c6e5-012f-9195-58d385a7bc34",
    slug: "commercial-posters",
  },
  {
    uuid: "7bfb4420-c6e5-012f-3a43-58d385a7bc34",
    slug: "portraits-of-russian-political-exiles-and-convicts-with-some-additional",
  },
  {
    uuid: "4e016900-c6e5-012f-92f5-58d385a7bc34",
    slug: "sermons-addresses-and-reminiscences-and-important-correspondence-with-a-picture",
  },
  {
    uuid: "7f0946b0-c6d1-012f-62ee-58d385a7bc34",
    slug: "the-highlands-of-the-hudson",
  },
  {
    uuid: "68423d40-c6e5-012f-9ce1-58d385a7bc34",
    slug: "voyage-de-larabie-ptre-par-lon-de-laborde-et-linant",
  },
  {
    uuid: "9ac22610-c6d1-012f-bb34-58d385a7bc34",
    slug: "zoological-researches-in-java-and-the-neighbouring-islands",
  },
  {
    uuid: "84fe2cd0-c6e4-012f-1676-3c075448cc4b",
    slug: "la-plante-et-ses-applications-ornementales",
  },
  {
    uuid: "55934a60-c6e6-012f-5374-58d385a7bc34",
    slug: "moderne-flachornamente-entwickelt-aus-dem-pflanzen-und-thierreich",
  },
  {
    uuid: "e18b4b90-c6e7-012f-868d-58d385a7bc34",
    slug: "views-in-the-ottoman-dominions-in-europe-in-asia-and-some-of-the-mediterranean",
  },
  {
    uuid: "724cf9c0-c6e6-012f-c238-58d385a7bc34",
    slug: "a-second-series-of-the-monuments-of-nineveh",
  },
  {
    uuid: "f72845d0-c6e7-012f-ebdb-58d385a7bc34",
    slug: "nouveaux-livre-dornements",
  },
  {
    uuid: "0c039110-c6e8-012f-2570-58d385a7bc34",
    slug: "pictures-of-former-korean-palaces",
  },
  {
    uuid: "389aa560-c6e8-012f-6fd6-58d385a7bc34",
    slug: "vidy-peterburga",
  },
  {
    uuid: "229858a0-c6e8-012f-78bf-58d385a7bc34",
    slug: "fables-ancient-and-modern-adapted-for-the-use-of-children",
  },
  {
    uuid: "a26a5170-c6e8-012f-3149-58d385a7bc34",
    slug: "sobranie-kart-i-risunkov-k-izledovaniam-o-drevnostiakh-iuzhnoi-rossii-i-beregov",
  },
  {
    uuid: "b9545400-c6e8-012f-b834-58d385a7bc34",
    slug: "the-holy-bible",
  },
  {
    uuid: "1c9c4ca0-c6e9-012f-f7c6-58d385a7bc34",
    slug: "la-vie-et-les-paysages-en-egypte",
  },
  {
    uuid: "46c69e80-c6eb-012f-1fdd-58d385a7bc34",
    slug: "iac-cornvti-canadensivm-planatarvm-aliarumque-nondum-editarum-historia-cui",
  },
  {
    uuid: "ec2d6030-c6eb-012f-3834-58d385a7bc34",
    slug: "keramic-art-of-japan",
  },
  {
    uuid: "5bcb4b60-c6eb-012f-092e-58d385a7bc34",
    slug: "old-wedgwood",
  },
  {
    uuid: "05f83020-c6e9-012f-8fc6-58d385a7bc34",
    slug: "photographic-negatives-of-the-new-york-city-tenement-house-department",
  },
  {
    uuid: "1e577940-c6eb-012f-77f6-58d385a7bc34",
    slug: "russkii-revoliutsionnyi-plakat",
  },
  {
    uuid: "8ab643a0-c6eb-012f-5bd7-58d385a7bc34",
    slug: "street-views-of-new-york-city",
  },
  {
    uuid: "0254a3f0-c6eb-012f-6733-3c075448cc4b",
    slug: "the-earth-and-its-inhabitants-africa",
  },
  {
    uuid: "affb37d0-c6ec-012f-9ffa-3c075448cc4b",
    slug: "athanasii-kircheri-e-soc-jesu-china-monumentis",
  },
  {
    uuid: "d46daec0-c6e8-012f-55c7-58d385a7bc34",
    slug: "childe-hassam-prints",
  },
  {
    uuid: "b7595d20-c6eb-012f-d7f8-3c075448cc4b",
    slug: "kaid-kyoka-awase",
  },
  {
    uuid: "4da1d2d0-c5ee-012f-96b2-58d385a7bc34",
    slug: "series-of-social-and-political-caricatures-by-james-gillray",
  },
  {
    uuid: "35c2f950-c6ed-012f-579d-58d385a7bc34",
    slug: "suzdalskie-monastyri",
  },
  {
    uuid: "b9a888c0-c6cf-012f-f0b1-58d385a7bc34",
    slug: "thomas-kelah-wharton-diaries-and-sketchbook",
  },
  {
    uuid: "db7cd820-c6ed-012f-1c4e-58d385a7bc34",
    slug: "joachimi-de-sandrart-academia-nobilissim-artis-pictori",
  },
  {
    uuid: "aaf0f440-c6ed-012f-2a97-58d385a7bc34",
    slug: "kelly-millers-history-of-the-world-war-for-human-rights",
  },
  {
    uuid: "c4b70730-c6ed-012f-cbe4-58d385a7bc34",
    slug: "noted-negro-women-their-triumphs-and-activities",
  },
  {
    uuid: "7c2ae220-c6ed-012f-b8b2-58d385a7bc34",
    slug: "album-of-photographs-of-japan",
  },
  {
    uuid: "9dc01750-c6ee-012f-49ce-3c075448cc4b",
    slug: "opisanie-v-litsakh-torzhestva",
  },
  {
    uuid: "0af808d0-c6ef-012f-cb96-58d385a7bc34",
    slug: "photographs-of-world-war-i-battlefields-captured-german-installations-and-allied",
  },
  {
    uuid: "b0231f20-c6ef-012f-c6ed-58d385a7bc34",
    slug: "augustin-freiherr-von-meyerberg-und-seine-reise-nach-russland-nebst-einer-von",
  },
  {
    uuid: "32282f70-c6ef-012f-63c0-58d385a7bc34",
    slug: "minch-shiken",
  },
  {
    uuid: "b8950980-c6ce-012f-a205-58d385a7bc34",
    slug: "new-york-city-museum-of-modern-art-photographs",
  },
  {
    uuid: "c49e9520-c6ef-012f-4453-58d385a7bc34",
    slug: "palestine-and-egypt-march-1894",
  },
  {
    uuid: "e9403300-0035-0130-e03d-58d385a7bc34",
    slug: "jerome-robbins-dance-division-program-files",
  },
  {
    uuid: "f2580a50-c6ef-012f-2de5-58d385a7bc34",
    slug: "jerusalem-explored-being-a-description-of-the-ancient-and-modern-city",
  },
  {
    uuid: "09031770-c6f0-012f-909f-58d385a7bc34",
    slug: "opisanie-koronatsii-eia-velichestva-imperatritsy-i-samoderzhitsy-vserossiiskoi",
  },
  {
    uuid: "e9a8b6e0-c6d3-012f-28b7-3c075448cc4b",
    slug: "american-medical-botany",
  },
  {
    uuid: "271a96a0-3c59-0132-cd82-58d385a7b928",
    slug: "cartes-de-visite-collection",
  },
  {
    uuid: "3f4752f0-c6d1-012f-818d-3c075448cc4b",
    slug: "chinese-rice-paper-paintings",
  },
  {
    uuid: "98216820-c6d6-012f-22e1-3c075448cc4b",
    slug: "thesaurus-imaginum-piscium-testaceorum",
  },
  {
    uuid: "2aa564d0-c6d5-012f-43a8-3c075448cc4b",
    slug: "views-of-british-guiana-album",
  },
  {
    uuid: "a3a9da50-c6e1-012f-bc27-3c075448cc4b",
    slug: "blagosostoianie-detei-sovetskogo-soiuza",
  },
  {
    uuid: "bdfac0a0-c6df-012f-f4f3-3c075448cc4b",
    slug: "catalogue-no-9",
  },
  {
    uuid: "c22c1d10-c6e3-012f-1ef2-3c075448cc4b",
    slug: "drevnosti-rossiiskago-gosudarstva-2",
  },
  {
    uuid: "8916a680-c6dc-012f-db96-3c075448cc4b",
    slug: "george-grenfell-and-the-congo",
  },
  {
    uuid: "94e61950-c6d0-012f-5b88-58d385a7bc34",
    slug: "maps-of-asia",
  },
  {
    uuid: "1c6113a0-c6e5-012f-ee4c-3c075448cc4b",
    slug: "puteshestvie-po-vostochnoi-sibiri-i-bulychova",
  },
  {
    uuid: "bbe0f0b0-0d99-0131-473c-3c075448cc4b",
    slug: "ronald-k-brown-video-archive",
  },
  {
    uuid: "900abc70-c6dd-012f-5a69-3c075448cc4b",
    slug: "russkii-narodnyi-lubok-albom-1873-1888",
  },
  {
    uuid: "c26cbaf0-c6d7-012f-d4fe-3c075448cc4b",
    slug: "sporting-sketches",
  },
  {
    uuid: "87a65670-c6e2-012f-3d46-3c075448cc4b",
    slug: "album-of-photographs-of-burma-india-and-egypt",
  },
  {
    uuid: "e5fb02a0-c6e5-012f-49bf-58d385a7bc34",
    slug: "mendelssohn-family-letters",
  },
  {
    uuid: "758a59b0-c6d8-012f-bb61-3c075448cc4b",
    slug: "lanimal-dans-la-dcoration",
  },
  {
    uuid: "7dbbd310-c6d9-012f-4b9d-3c075448cc4b",
    slug: "the-pyramids-of-gizeh-from-actual-survey-and-admeasurement-by-j-e-perring",
  },
  {
    uuid: "0160f0f0-c6ec-012f-5675-3c075448cc4b",
    slug: "combinaisons-ornementales-se-multipliant-linfini-laide-du-miroir",
  },
  {
    uuid: "ab9dee00-c6e6-012f-bb60-3c075448cc4b",
    slug: "household-furniture-and-interior-decoration",
  },
  {
    uuid: "e4150070-c6e5-012f-6b5f-3c075448cc4b",
    slug: "industrial-america-or-manufacturers-and-inventors-of-the-united-states",
  },
  {
    uuid: "9a991470-c6ed-012f-c87b-3c075448cc4b",
    slug: "intrieurs-de-style-xviie-xviiie-sicles-directoire-empire",
  },
  {
    uuid: "e67a1320-8c22-0131-5d3f-58d385a7bbd0",
    slug: "janis-brenner-video-archive",
  },
  {
    uuid: "67a31ee0-c6ee-012f-3e38-3c075448cc4b",
    slug: "studies-in-design",
  },
  {
    uuid: "f6569ba0-c6ea-012f-6395-3c075448cc4b",
    slug: "the-architect-and-builders-miscellany-or-pocket-library",
  },
  {
    uuid: "347eadd0-c6ef-012f-460d-3c075448cc4b",
    slug: "etchings-of-rustic-figures",
  },
  {
    uuid: "16916980-c6f0-012f-5f69-3c075448cc4b",
    slug: "john-h-levine-collection",
  },
  {
    uuid: "30e9f730-c6ea-012f-2580-3c075448cc4b",
    slug: "kavkazske-pokhodnye-risunki-gorshelta",
  },
  {
    uuid: "b9224670-0d99-0131-a136-3c075448cc4b",
    slug: "khmer-dance-project",
  },
  {
    uuid: "ad7b7cf0-c6f2-012f-8ac1-58d385a7bc34",
    slug: "new-illustration-of-the-sexual-system-of-carolus-von-linnaeus-comprehending",
  },
  {
    uuid: "e9163ec0-c6f2-012f-9e0b-58d385a7bc34",
    slug: "sbornik-khudozhestvenno-promyshlennykh-risunkov",
  },
  {
    uuid: "37702f70-c6f3-012f-f387-58d385a7bc34",
    slug: "the-natural-history-of-washington-territory-and-oregon",
  },
  {
    uuid: "2d40b500-c6f1-012f-2fd9-3c075448cc4b",
    slug: "russia",
  },
  {
    uuid: "dd0510b0-c6f3-012f-7b2d-58d385a7bc34",
    slug: "bowery",
  },
  {
    uuid: "0b2f5660-c6e6-012f-2379-58d385a7bc34",
    slug: "the-great-west-illustrated-in-a-series-of-photographic-views-across",
  },
  {
    uuid: "510aa2d0-c6e7-012f-25d3-58d385a7bc34",
    slug: "africa-being-an-accurate-description-of-the-regions-of-gypt-barbary-lybia",
  },
  {
    uuid: "2ffdbff0-c6f4-012f-6c96-58d385a7bc34",
    slug: "american-entomology-or-description-of-the-insects-of-north-america",
  },
  {
    uuid: "ce34a130-c6f3-012f-2f1d-3c075448cc4b",
    slug: "khudozhestvenno-fotograficheskii-albom-russkiia-drevnosti-i-pamiatnikov",
  },
  {
    uuid: "73b12200-c6e6-012f-80b0-3c075448cc4b",
    slug: "the-negro-in-revelation-in-history-and-in-citizenship",
  },
  {
    uuid: "53e40250-c6e7-012f-8546-3c075448cc4b",
    slug: "collection-of-views-of-egypt-including-cairo-and-the-pyramids",
  },
  {
    uuid: "f8bc31b0-c6e5-012f-9327-58d385a7bc34",
    slug: "the-story-of-the-illinois-federation-of-colored-womens-clubs-1900-1922",
  },
  {
    uuid: "fe716700-c6f4-012f-2303-58d385a7bc34",
    slug: "a-new-negro-for-a-new-century",
  },
  {
    uuid: "93255be0-c6f4-012f-4ef5-58d385a7bc34",
    slug: "albom-poiezdki-komandy-sieverskago-dragunskago-polka-iz-goroda-vladikavkaza",
  },
  {
    uuid: "b2c8a500-c6f3-012f-ae25-58d385a7bc34",
    slug: "archibald-robertson-his-diaries-and-sketches-in-america-1762-1780",
  },
  {
    uuid: "1c0142f0-c6f4-012f-ae46-3c075448cc4b",
    slug: "les-fleurs-animes",
  },
  {
    uuid: "26d0aca0-c6f5-012f-6e0b-58d385a7bc34",
    slug: "notes-ethnographiques-sur-les-peuples-communment-appels-bakuba-ainsi-que",
  },
  {
    uuid: "e4266f20-c6f4-012f-3c90-58d385a7bc34",
    slug: "the-cabinet-maker-and-artists-encyclopedia",
  },
  {
    uuid: "08c40070-c6f5-012f-fb12-3c075448cc4b",
    slug: "afrika-dets-opdagelse-erobring-og-kolonisation",
  },
  {
    uuid: "5a39e290-c6f5-012f-5a89-58d385a7bc34",
    slug: "album-of-photographs-showing-construction-of-the-cable-road-on-broadway-new-york",
  },
  {
    uuid: "e59f0910-c6f5-012f-a6a8-58d385a7bc34",
    slug: "american-natural-history",
  },
  {
    uuid: "cbe6b360-c6c2-012f-6462-58d385a7bc34",
    slug: "billy-rose-theatre-collection-program-file",
  },
  {
    uuid: "941eaf90-c6f5-012f-eb10-58d385a7bc34",
    slug: "eidodendron",
  },
  {
    uuid: "7f5fcec0-c6f5-012f-3e6c-58d385a7bc34",
    slug: "progress-of-a-race",
  },
  {
    uuid: "ba91ec70-c6ea-012f-6281-3c075448cc4b",
    slug: "the-american-anti-slavery-almanac",
  },
  {
    uuid: "dae291b0-c6f6-012f-05ac-58d385a7bc34",
    slug: "itineraire-pittoresque-du-fleuve-hudson-et-des-parties-laterales-de-lamerique",
  },
  {
    uuid: "a25d8110-c6f6-012f-94c3-58d385a7bc34",
    slug: "khrama-vo-imia-khrista-spasitelia-v-moskvie",
  },
  {
    uuid: "1c8aaa50-c6f6-012f-f654-58d385a7bc34",
    slug: "ornamental-architecture-in-the-gothic-chinese-and-modern-taste",
  },
  {
    uuid: "4154fa60-c6f6-012f-cca4-58d385a7bc34",
    slug: "sights-and-scenes-in-fair-japan",
  },
  {
    uuid: "b5533200-c6f6-012f-a39f-58d385a7bc34",
    slug: "villas-on-the-hudson",
  },
  {
    uuid: "08836fc0-c6f6-012f-59c5-58d385a7bc34",
    slug: "voyage-autour-du-monde",
  },
  {
    uuid: "1146e870-c6f5-012f-fdfc-58d385a7bc34",
    slug: "les-colonies-franaises",
  },
  {
    uuid: "8db6b700-c6d3-012f-aa14-58d385a7bc34",
    slug: "monuments-gyptiens-bas-reliefs-peintures-inscriptins-etc",
  },
  {
    uuid: "61c21dc0-c6d3-012f-9893-58d385a7bc34",
    slug: "rikka-zu",
  },
  {
    uuid: "2153dd40-c6d3-012f-abfb-58d385a7bc34",
    slug: "the-afro-american-press-and-its-editors",
  },
  {
    uuid: "79ae5ee0-c6d3-012f-a8fa-58d385a7bc34",
    slug: "illustrated-catalogue-of-metal-work",
  },
  {
    uuid: "4c4acb60-c6f7-012f-8321-58d385a7bc34",
    slug: "english-interior-woodwork-of-the-xvi-xvii-xviiith-centuries",
  },
  {
    uuid: "b1b92b40-c6d3-012f-d5b7-58d385a7bc34",
    slug: "journal-of-the-discovery-of-the-source-of-the-nile",
  },
  {
    uuid: "c4368a10-c6d3-012f-144e-58d385a7bc34",
    slug: "roaming-through-the-west-indies",
  },
  {
    uuid: "dcbd3850-c6d3-012f-5466-58d385a7bc34",
    slug: "the-progression-of-the-race-in-the-united-states-and-canada-treating",
  },
  {
    uuid: "92c5b080-c6f7-012f-63ba-58d385a7bc34",
    slug: "mxico-y-sus-alrededores",
  },
  {
    uuid: "c58e2f90-c6f7-012f-30ac-58d385a7bc34",
    slug: "pamiatniki-drevniago-russkogo-zodchestva",
  },
  {
    uuid: "b46a89d0-c6f7-012f-4821-58d385a7bc34",
    slug: "the-ferns-of-great-britain-and-ireland",
  },
  {
    uuid: "6c5355e0-c6f7-012f-f1da-58d385a7bc34",
    slug: "the-mordant-dyestuffs-of-the-farbenfabriken-vorm-friedr-bayer-co-elberfeld",
  },
  {
    uuid: "e86808d0-c6f7-012f-27ae-58d385a7bc34",
    slug: "views-of-japan-2",
  },
  {
    uuid: "7f102560-c6f7-012f-5c0b-58d385a7bc34",
    slug: "photographs-of-japan",
  },
  {
    uuid: "2ae8f050-c6f8-012f-945a-58d385a7bc34",
    slug: "art-nouveau-decoration-and-ameublement",
  },
  {
    uuid: "fc5fb060-c6f7-012f-686c-58d385a7bc34",
    slug: "ellis-island-portfolio",
  },
  {
    uuid: "5dca98b0-c6f8-012f-94e4-58d385a7bc34",
    slug: "illustrations-of-the-birds-of-california-texas-oregon-british-and-russian",
  },
  {
    uuid: "af6da7f0-0d99-0131-fb82-3c075448cc4b",
    slug: "jerome-robbins-archive-of-the-recorded-moving-image-original-documentation",
  },
  {
    uuid: "0d60d760-c6f8-012f-5b62-58d385a7bc34",
    slug: "la-porcelaine-tendre-de-svres",
  },
  {
    uuid: "3bb18280-c6f8-012f-31c0-58d385a7bc34",
    slug: "picturesque-representations-of-the-dress-and-manners-of-the-english",
  },
  {
    uuid: "5bfd2520-c6ef-012f-9e3b-3c075448cc4b",
    slug: "posters-2-3",
  },
  {
    uuid: "0ae82cc0-c6f0-012f-09b3-3c075448cc4b",
    slug: "views-of-jamaica",
  },
  {
    uuid: "d759e580-c6d8-012f-ab27-58d385a7bc34",
    slug: "examples-of-ornamental-metal-work",
  },
  {
    uuid: "b26427c0-c6d8-012f-5653-58d385a7bc34",
    slug: "karrikatury-napoleona-i",
  },
  {
    uuid: "f5a10970-c6d8-012f-f661-58d385a7bc34",
    slug: "prebyvane-imperatora-vilgelma-ii-v-rossi-1888-g",
  },
  {
    uuid: "94e81370-c6d8-012f-78c5-58d385a7bc34",
    slug: "report-upon-united-states-geographical-surveys-west-of-the-one-hundredth",
  },
  {
    uuid: "593fa8a0-c6da-012f-e06e-58d385a7bc34",
    slug: "boutiques-et-magasins",
  },
  {
    uuid: "6cf01af0-c6da-012f-4659-58d385a7bc34",
    slug: "milton-a-poem-in-2-books",
  },
  {
    uuid: "2c2da8e0-c6da-012f-0f26-58d385a7bc34",
    slug: "photographs-of-ellis-island-1902-1913",
  },
  {
    uuid: "d872fc10-c6f7-012f-d540-3c075448cc4b",
    slug: "photographs-showing-landscapes-geological-and-other-features-of-portions",
  },
  {
    uuid: "4b0a1230-c6d9-012f-b6f0-58d385a7bc34",
    slug: "photographs-of-indians-of-the-southwest-and-the-plains",
  },
  {
    uuid: "3992d1c0-c6db-012f-461a-58d385a7bc34",
    slug: "1913-supplement-to-the-worlds-loose-leaf-album-of-apartment-houses",
  },
  {
    uuid: "b32a5ba0-c6da-012f-c1a1-58d385a7bc34",
    slug: "albom-vidov-solovetskogo-monastyria-i-snimkov-drevnostei-i-dostoprimechatelnoste",
  },
  {
    uuid: "88da4540-c6da-012f-a829-58d385a7bc34",
    slug: "fantaisies-dcoratives-composes-par-j-habert-dys",
  },
  {
    uuid: "4b811da0-c6db-012f-d7ce-58d385a7bc34",
    slug: "modern-plumbing",
  },
  {
    uuid: "27e8fb70-c6db-012f-4078-58d385a7bc34",
    slug: "wild-animals-and-birds",
  },
  {
    uuid: "f463f3e0-c6da-012f-8744-58d385a7bc34",
    slug: "the-history-of-japan-giving-an-account-of-the-ancient-and-present-state",
  },
  {
    uuid: "811c2b40-c6db-012f-5a91-58d385a7bc34",
    slug: "cits-et-ruines-americaines",
  },
  {
    uuid: "5b6f8680-c6db-012f-3b60-58d385a7bc34",
    slug: "photographs-of-the-empire-state-building-under-construction",
  },
  {
    uuid: "b11d57a0-c6cb-012f-3be2-58d385a7bc34",
    slug: "collections-souvenirs-de-malmaison-appartements-meubles-et-dcoration",
  },
  {
    uuid: "f8843920-c6cb-012f-5cd4-58d385a7bc34",
    slug: "kokushi-daijiten",
  },
  {
    uuid: "e5a8d8f0-c6cb-012f-d60c-58d385a7bc34",
    slug: "nishikizuri-onna-sanjrokkasen",
  },
  {
    uuid: "9de385a0-c6cb-012f-206b-58d385a7bc34",
    slug: "ordnance-survey-of-jerusalem-made-with-the-sanction-of-the-earl-de-grey",
  },
  {
    uuid: "64167030-c6cb-012f-b15e-58d385a7bc34",
    slug: "the-zoology-of-captain-beecheys-voyage",
  },
  {
    uuid: "33d3de20-c6cc-012f-9618-58d385a7bc34",
    slug: "christian-reconstruction-in-the-south",
  },
  {
    uuid: "e8f78020-c6cc-012f-13cb-58d385a7bc34",
    slug: "kusejr-amra-mit-einer-karte-von-arabia-petraea",
  },
  {
    uuid: "a4fea570-c6cc-012f-21eb-58d385a7bc34",
    slug: "progress-of-a-race-2",
  },
  {
    uuid: "77eab840-c6cc-012f-a8f4-58d385a7bc34",
    slug: "turkestanskaia-vystavka-1890-g",
  },
  {
    uuid: "d87f1410-c6cc-012f-14ab-58d385a7bc34",
    slug: "turris-babel-sive-archontologia-qua-primo-priscorum-post-diluvium-hominum-vita",
  },
  {
    uuid: "27f4c840-c6cd-012f-dd52-58d385a7bc34",
    slug: "mekka-mit-bilder-atlas",
  },
  {
    uuid: "90ec4900-c6cd-012f-bbbf-58d385a7bc34",
    slug: "uncle-toms-cabin-2",
  },
  {
    uuid: "3adf7ea0-c6cd-012f-ddb7-58d385a7bc34",
    slug: "the-fishes-of-north-america-that-are-captured-on-hook-and-line-with-eighty",
  },
  {
    uuid: "94fd78a0-c6ce-012f-19c7-58d385a7bc34",
    slug: "album-of-illustrations-of-imperial-royal-state-carriages-together-with-other",
  },
  {
    uuid: "851a7e00-c6ce-012f-379b-58d385a7bc34",
    slug: "album-of-photographs-of-japan-2",
  },
  {
    uuid: "361b4b20-c6ce-012f-5b07-58d385a7bc34",
    slug: "collection-of-photographs-of-egypt-and-nubia",
  },
  {
    uuid: "e5566c40-c6da-012f-9720-58d385a7bc34",
    slug: "seder-hagadah-shel-pesah",
  },
  {
    uuid: "37a0e550-c6c4-012f-462b-58d385a7bc34",
    slug: "jerome-robbins-dance-division-original-artwork-and-designs",
  },
  {
    uuid: "a38ba760-c6ce-012f-ec22-58d385a7bc34",
    slug: "moskovskii-publichnyi-i-rumiantsovskii-muzei",
  },
  {
    uuid: "c5b5c380-c6cd-012f-0e1c-58d385a7bc34",
    slug: "the-orchidace-of-mexico-guatemala",
  },
  {
    uuid: "45de9630-c6cc-012f-4781-58d385a7bc34",
    slug: "plates-illustrative-of-the-researches-and-operations-of-g-belzoni-in-egypt",
  },
  {
    uuid: "ab90b460-c6ed-012f-45e9-3c075448cc4b",
    slug: "robert-a-wilson-slides",
  },
  {
    uuid: "491d5db0-c6ce-012f-aa27-58d385a7bc34",
    slug: "umbstandliche-und-eigentliche-beschreibung-von-africa",
  },
  {
    uuid: "172b9220-c6dc-012f-7f92-58d385a7bc34",
    slug: "albom-monogramm-dlia-mietki-bielia-gravirovaniia-riezby-shtampovaniia",
  },
  {
    uuid: "d48c2b70-c6db-012f-f254-58d385a7bc34",
    slug: "della-trasportatione-dellobelisco-vaticano-et-delle-fabriche-di-nostro-signore",
  },
  {
    uuid: "3f3cfdc0-c6dc-012f-1304-58d385a7bc34",
    slug: "description-de-lafrique",
  },
  {
    uuid: "c85b58a0-c6db-012f-3330-58d385a7bc34",
    slug: "designs-for-ornamental-plate",
  },
  {
    uuid: "175d0560-c6cf-012f-060c-58d385a7bc34",
    slug: "dcoration-gyptienne-plafonds-et-frises-vgtales-du-nouvel-empire-thbain",
  },
  {
    uuid: "edbd2910-c6ce-012f-4d8a-58d385a7bc34",
    slug: "histoire-naturelle-des-poissons",
  },
  {
    uuid: "0a8a0c20-c6dc-012f-8619-58d385a7bc34",
    slug: "john-yang",
  },
  {
    uuid: "b25369d0-c6ce-012f-250c-58d385a7bc34",
    slug: "prismes-40-planches-de-dessins-et-coloris-nouveaux",
  },
  {
    uuid: "cf90e680-c6ce-012f-64c5-58d385a7bc34",
    slug: "sur-le-niger-et-au-pays-des-touaregs",
  },
  {
    uuid: "fc335060-c6ce-012f-0536-58d385a7bc34",
    slug: "the-colored-american-from-slavery-to-honorable-citizenship",
  },
  {
    uuid: "e3f0ded0-c6db-012f-0803-58d385a7bc34",
    slug: "the-costume-of-yorkshire-illustrated-by-a-series-of-forty-engravings-being",
  },
  {
    uuid: "fbb8d560-c6db-012f-4652-58d385a7bc34",
    slug: "an-illustration-of-the-egyptian-grecian-and-roman-costume",
  },
  {
    uuid: "3477f7c0-c6f8-012f-291e-3c075448cc4b",
    slug: "broderies-russes-tartares-armeniennes",
  },
  {
    uuid: "503e1810-c6dd-012f-efe1-58d385a7bc34",
    slug: "compendiosa-totius-anatomie-delineatio-re-exarata",
  },
  {
    uuid: "a0494c10-c6dc-012f-779c-58d385a7bc34",
    slug: "designs-on-various-ornaments",
  },
  {
    uuid: "e7643ed0-c6dc-012f-b482-58d385a7bc34",
    slug: "eaux-fortes-originales-pointes-seches-essais-de-procedes-etc",
  },
  {
    uuid: "93b91600-c6dc-012f-c420-58d385a7bc34",
    slug: "la-france-au-dahomey",
  },
  {
    uuid: "41653180-c6dd-012f-3179-58d385a7bc34",
    slug: "general-program-of-the-sessions-and-anniversaries-of-the-general-conference",
  },
  {
    uuid: "65a81890-c6e7-012f-dd38-58d385a7bc34",
    slug: "maps-of-europe",
  },
  {
    uuid: "69427f80-c6dc-012f-9949-58d385a7bc34",
    slug: "negro-poets-and-their-poems",
  },
  {
    uuid: "daed5cd0-c6dc-012f-d69c-58d385a7bc34",
    slug: "reise-zum-tempel-des-jupiter-ammon-in-der-libyschen-wste-und-nach-ober-aegypten",
  },
  {
    uuid: "85dcc060-c6dc-012f-30e8-58d385a7bc34",
    slug: "sketches-in-lithography-containing-forty-original-subjects-designed-and-drawn",
  },
  {
    uuid: "ff53edd0-c6dc-012f-d875-58d385a7bc34",
    slug: "vidy-valaamskago-monastyria",
  },
  {
    uuid: "359b2d00-c6dd-012f-8730-58d385a7bc34",
    slug: "views-in-japan-and-india",
  },
  {
    uuid: "664becd0-c6e0-012f-3c19-58d385a7bc34",
    slug: "chinese-water-color-paintings",
  },
  {
    uuid: "2d5b1970-c6e1-012f-e741-58d385a7bc34",
    slug: "engravings-of-lions-tigers-panthers-leopards-dogs-c",
  },
  {
    uuid: "cc024a30-c6df-012f-6de0-58d385a7bc34",
    slug: "narrative-of-travels-and-discoveries-in-northern-and-central-africa-in-the-years",
  },
  {
    uuid: "fed94f20-c6df-012f-3cab-58d385a7bc34",
    slug: "rossiiskii-tsarstvennyi-dom-romanovykh",
  },
  {
    uuid: "4d10b770-c6e1-012f-4967-58d385a7bc34",
    slug: "sinai-and-palestine",
  },
  {
    uuid: "62942b70-c6e1-012f-8ed4-58d385a7bc34",
    slug: "working-with-the-hands",
  },
  {
    uuid: "16e79870-c6e0-012f-a549-58d385a7bc34",
    slug: "the-book-of-old-sundials-their-mottoes-with-eight-illustrations-in-colour",
  },
  {
    uuid: "fbe41180-749d-0131-1e6a-58d385a7b928",
    slug: "arthur-bell-collection-of-recorded-interviews-1970-1980",
  },
  {
    uuid: "1b84f400-c6e1-012f-c580-58d385a7bc34",
    slug: "britain-across-the-seas",
  },
  {
    uuid: "f2ea2400-c6e0-012f-8e64-58d385a7bc34",
    slug: "horae",
  },
  {
    uuid: "d9ee56d0-c6e0-012f-22da-58d385a7bc34",
    slug: "iz-moego-alboma",
  },
  {
    uuid: "0ebcaa80-c6e1-012f-b037-58d385a7bc34",
    slug: "lower-egypt-thebes-and-the-pyramids",
  },
  {
    uuid: "4b936260-c6dc-012f-bb90-58d385a7bc34",
    slug: "the-negro-american-family",
  },
  {
    uuid: "a195eb80-c6e0-012f-8c8f-58d385a7bc34",
    slug: "sngambie-et-guine-par-m-amde-tardieu-nubie-par-m-s-chrubini-abyssinie-par-m",
  },
  {
    uuid: "9195bae0-c6e0-012f-06d6-58d385a7bc34",
    slug: "upper-egypt-and-ethiopia",
  },
  {
    uuid: "e7c34a30-c6e0-012f-f337-58d385a7bc34",
    slug: "vues-dafrique",
  },
  {
    uuid: "e1121f50-c6e0-012f-1ebd-58d385a7bc34",
    slug: "cuba-and-porto-rico",
  },
  {
    uuid: "b74ce7d0-0d99-0131-0ed6-3c075448cc4b",
    slug: "dance-theater-workshop-video-archive",
  },
  {
    uuid: "bc2329f0-c6e0-012f-e904-58d385a7bc34",
    slug: "egypt",
  },
  {
    uuid: "77cc31e0-c6e0-012f-5e1f-58d385a7bc34",
    slug: "narodnye-kartinki-preimushchestvenno-istoricheskogo-i-religioznovo-soderzhaniia",
  },
  {
    uuid: "ee920fd0-c6df-012f-fe19-58d385a7bc34",
    slug: "olonetskaia-gubernia",
  },
  {
    uuid: "c2a44710-c6e0-012f-3453-58d385a7bc34",
    slug: "plantae-rariores-quas-maximam-partem-ipse-in-horto-domestico-colvit-secundum",
  },
  {
    uuid: "dd602eb0-c6df-012f-4815-58d385a7bc34",
    slug: "sbornik-starinno-russkikh-slavianskikh-bukv-zastavits-i-kaemok-dlia",
  },
  {
    uuid: "3c096200-c6e0-012f-981b-3c075448cc4b",
    slug: "scraps-of-african-methodist-episcopal-history",
  },
  {
    uuid: "63f13c10-c6e0-012f-5971-58d385a7bc34",
    slug: "souvenirs-de-saint-petersbourg-collection-de-lithographies-representant",
  },
  {
    uuid: "4ff475b0-c6e0-012f-d5d0-58d385a7bc34",
    slug: "zakaspskaia-voennaia-zhelieznaia-doroga",
  },
  {
    uuid: "2ae85130-c6e0-012f-b9c9-58d385a7bc34",
    slug: "prebyvanie-ikh-imperatorskikh-velichestv-v-brest-litovske-v-vysoko-litovske-i",
  },
  {
    uuid: "7b7f5760-c6df-012f-6cc4-3c075448cc4b",
    slug: "the-thirty-seven-nats-a-phase-of-spirit-worship-prevailing-in-burma-by-sir-r-c",
  },
  {
    uuid: "0b9a7bf0-c6df-012f-ceaa-58d385a7bc34",
    slug: "panorama-degypte-et-de-nubie",
  },
  {
    uuid: "5f1985e0-c6df-012f-d1a8-58d385a7bc34",
    slug: "polychromatic-decoration-as-applied-to-buildings-in-the-mediaeval-styles",
  },
  {
    uuid: "26d63ba0-c6de-012f-2cae-3c075448cc4b",
    slug: "le-srapum-de-memphis",
  },
  {
    uuid: "42c24900-c6df-012f-fd22-58d385a7bc34",
    slug: "torgovye-riady-na-krasnoi-ploshchadi-v-moskvie",
  },
  {
    uuid: "efa836c0-c6de-012f-327d-58d385a7bc34",
    slug: "town-and-country-house-painting-thirty-five-colored-illustrations-showing",
  },
  {
    uuid: "e136e000-c6de-012f-83c3-58d385a7bc34",
    slug: "whos-who-in-philadelphia",
  },
  {
    uuid: "52b1b710-c6df-012f-eecd-58d385a7bc34",
    slug: "the-college-of-life-or-practical-self-educator-a-manual-of-self-improvement",
  },
  {
    uuid: "e70163b0-c6d0-012f-9a14-3c075448cc4b",
    slug: "the-africans-at-home",
  },
  {
    uuid: "7dd9d750-c6d1-012f-44b7-3c075448cc4b",
    slug: "assortment-of-photographs-of-palestine-and-jerusalem",
  },
  {
    uuid: "372f87b0-c6d0-012f-db38-3c075448cc4b",
    slug: "das-empire-ornament-nach-originalgegenstnden-und-quellenwerken-aus",
  },
  {
    uuid: "87887ae0-c6d6-012f-21f7-3c075448cc4b",
    slug: "horae-et-psalterium",
  },
  {
    uuid: "4b9d7990-c6d3-012f-f07c-58d385a7bc34",
    slug: "japanese-color-woodcuts-by-kitagawa-utamaro",
  },
  {
    uuid: "859ef0e0-c6d4-012f-9f33-3c075448cc4b",
    slug: "men-of-mark",
  },
  {
    uuid: "51003a90-c6dc-012f-8416-3c075448cc4b",
    slug: "more-men-of-mark",
  },
  {
    uuid: "58c0f5c0-c6dd-012f-555f-3c075448cc4b",
    slug: "sketch-book-of-livingstone-college-and-east-tennessee-industrial-school",
  },
  {
    uuid: "c4dcc670-c6dc-012f-f25b-3c075448cc4b",
    slug: "turkestanskaia-vystavka-1886-g",
  },
  {
    uuid: "d99ae4b0-c6d3-012f-d947-3c075448cc4b",
    slug: "usines-delahaye-collaboration-des-femmes-a-la-defense-nationale-guerre",
  },
  {
    uuid: "b7db03f0-c6cd-012f-8584-58d385a7bc34",
    slug: "the-natural-history-of-fishes-of-the-perch-family",
  },
  {
    uuid: "6c6aca10-c6ce-012f-85bb-58d385a7bc34",
    slug: "albom-borovichesko-oblastno-selsko-khoziastvenno-kustarno-i-promyshlenno",
  },
  {
    uuid: "f34b2de0-c6cd-012f-59fb-58d385a7bc34",
    slug: "albom-vnut-vidy-remeslennoi-vystavki-ego-imperatorskomu-vysochestvu-velikomu",
  },
  {
    uuid: "2e8b7e10-c6ce-012f-d672-58d385a7bc34",
    slug: "characteristic-sketches-of-animals-principally-from-the-zoological-gardens",
  },
  {
    uuid: "1a74dd70-8c25-0131-3bc3-58d385a7bbd0",
    slug: "garry-reigenborn-video-archive",
  },
  {
    uuid: "69746e50-3bd7-0130-36a1-58d385a7b928",
    slug: "halloween",
  },
  {
    uuid: "77122cf0-c6ce-012f-43f2-58d385a7bc34",
    slug: "katsura-kasane",
  },
  {
    uuid: "5f2db300-c6ce-012f-9939-58d385a7bc34",
    slug: "missions-de-gironcourt-en-afrique-occidentale-19081909-19111912",
  },
  {
    uuid: "489c7460-c6ce-012f-7fe9-58d385a7bc34",
    slug: "nigeria-its-peoples-and-its-problems",
  },
  {
    uuid: "08fb29e0-c6ce-012f-76a5-58d385a7bc34",
    slug: "russia-komissiya-dlya-issledovaniya-kharkovo-nikolayevskoi-zheleznoi-dorogi",
  },
  {
    uuid: "143d0b30-c6ce-012f-fa14-58d385a7bc34",
    slug: "s-risunkov-profes-mn-vasileva-dlia-khrama-spasitelia-v-moskvie",
  },
  {
    uuid: "30fee420-c6cf-012f-4e8a-58d385a7bc34",
    slug: "the-crusader",
  },
  {
    uuid: "3bbce380-c6ce-012f-8aa0-58d385a7bc34",
    slug: "vidy-g-novgoroda-i-ego-okrestnostei",
  },
  {
    uuid: "9f72a5e0-c6ce-012f-67fe-58d385a7bc34",
    slug: "exotic-moths",
  },
  {
    uuid: "602a0410-c6cf-012f-dd31-58d385a7bc34",
    slug: "illustrations-of-fashionable-cabinet-furniture",
  },
  {
    uuid: "ea563e00-c6ce-012f-c11e-58d385a7bc34",
    slug: "interieurs-rustiques",
  },
  {
    uuid: "56098260-c6cf-012f-c389-58d385a7bc34",
    slug: "krin-gafu",
  },
  {
    uuid: "818de870-c6ce-012f-0cf9-58d385a7bc34",
    slug: "narrative-of-travels-and-discoveries-in-northern-and-central-africa-in-the-yea-2",
  },
  {
    uuid: "2380c0e0-c6cf-012f-1ace-58d385a7bc34",
    slug: "trait-thorique-et-pratique-de-la-fabrication-du-fer-avec-un-expos",
  },
  {
    uuid: "a9ffd0c0-c6ce-012f-b4e5-58d385a7bc34",
    slug: "le-dcor-sculpt-moderne",
  },
  {
    uuid: "ba245090-c6cf-012f-56c0-58d385a7bc34",
    slug: "albom-fotograficheskikh-snimkov-s-tserkovno-arkhitektury-v-iaroslavsko-gubernii",
  },
  {
    uuid: "e6fdcad0-c6cf-012f-5998-58d385a7bc34",
    slug: "america-revisited",
  },
  {
    uuid: "d96735b0-c6cf-012f-3967-58d385a7bc34",
    slug: "boutiques-parisiennes-du-premier-empire",
  },
  {
    uuid: "a21319f0-c6cf-012f-07be-58d385a7bc34",
    slug: "bussetsu-jky",
  },
  {
    uuid: "c4bbd2c0-c6cf-012f-ab55-58d385a7bc34",
    slug: "dcorations-chinoises-japonaises-et-de-got-chinois",
  },
  {
    uuid: "f35aeb10-c6cf-012f-a4a0-58d385a7bc34",
    slug: "dcorations-japonaises-chinoises",
  },
  {
    uuid: "37968680-c6cb-012f-3b68-3c075448cc4b",
    slug: "groups-of-cattle-drawn-from-nature-by-ts-cooper-1839",
  },
  {
    uuid: "08d31640-c6d0-012f-3017-58d385a7bc34",
    slug: "moskva-gorodskie-riady",
  },
  {
    uuid: "f1f6c7a0-c6cd-012f-7cc8-3c075448cc4b",
    slug: "negro-education",
  },
  {
    uuid: "3eb657c0-c6cd-012f-bef2-3c075448cc4b",
    slug: "nikolai-ivanovich-utkin-ego-zhizn-i-proizvedeniia",
  },
  {
    uuid: "a8de0270-c6cc-012f-4b78-3c075448cc4b",
    slug: "william-h-meyers-diary",
  },
  {
    uuid: "a9196db0-c6cb-012f-6335-3c075448cc4b",
    slug: "the-birds-of-eastern-north-america",
  },
  {
    uuid: "8ceb2130-c6cf-012f-420c-58d385a7bc34",
    slug: "the-natural-history-of-the-amphibious-carnivora",
  },
  {
    uuid: "69e59130-c6c7-012f-4984-3c075448cc4b",
    slug: "collection-of-egyptian-antiquities",
  },
  {
    uuid: "d1397440-c6c7-012f-79ca-3c075448cc4b",
    slug: "methodist-adventures-in-negro-education",
  },
  {
    uuid: "f272cb40-c616-012f-f7ac-58d385a7bc34",
    slug: "notable-new-yorkers-of-1896-1899",
  },
  {
    uuid: "5c43b4a0-c6c4-012f-8c10-3c075448cc4b",
    slug: "oriental-album-characters-costumes-and-modes-of-life-in-the-valley-of-the-nile",
  },
  {
    uuid: "ab2de160-c6c6-012f-5ce2-3c075448cc4b",
    slug: "oriental-album",
  },
  {
    uuid: "10e31e10-c6ca-012f-91cc-3c075448cc4b",
    slug: "sonan-gafu",
  },
  {
    uuid: "e7460070-c6c2-012f-a3f5-3c075448cc4b",
    slug: "views-of-egypt-palestine-and-syria",
  },
  {
    uuid: "e7b5f890-c6c4-012f-5c2d-3c075448cc4b",
    slug: "vignettes-dcoratives-dans-le-got-du-jour",
  },
  {
    uuid: "8df4d660-c6c1-012f-58dd-58d385a7bc34",
    slug: "atlas-celeste-de-flamsteed-publie-en-1776",
  },
  {
    uuid: "fcc69c50-c6c0-012f-8a2e-58d385a7bc34",
    slug: "catalogue-of-the-chiroptera",
  },
  {
    uuid: "c91037b0-c6c1-012f-364a-58d385a7bc34",
    slug: "kafuku-ninpitsu",
  },
  {
    uuid: "37297e60-c6c1-012f-fee8-58d385a7bc34",
    slug: "die-mahlmhlen-eine-darstellung-des-baues-und-des-betriebes-der-gebrublichsten",
  },
  {
    uuid: "2bf11f90-c6c1-012f-e745-58d385a7bc34",
    slug: "photographic-views-of-the-construction-of-the-new-york-city-subway-system",
  },
  {
    uuid: "7f42dd80-c6c1-012f-6d66-58d385a7bc34",
    slug: "photographs-of-american-indians",
  },
  {
    uuid: "017492e0-c6c1-012f-fcf1-3c075448cc4b",
    slug: "politekhnicheskaia-vystavka-1872-pochtovyi-otdel",
  },
  {
    uuid: "dd4026a0-c6c1-012f-c07d-3c075448cc4b",
    slug: "the-decorative-work-of-robert-james-adam",
  },
  {
    uuid: "1c2ee870-c6c1-012f-5858-58d385a7bc34",
    slug: "travels-and-discoveries-in-north-and-central-africa-being-a-journal",
  },
  {
    uuid: "f00f5a10-c6c0-012f-a3dd-58d385a7bc34",
    slug: "yosemite",
  },
  {
    uuid: "aacbeff0-c6c1-012f-3ad4-58d385a7bc34",
    slug: "the-costumes-of-the-various-tribes-portraits-of-ladies-of-rank-celebrated",
  },
  {
    uuid: "f75a8a00-c6bf-012f-909a-58d385a7bc34",
    slug: "albom-snimkov-drevnoste-i-dostoprimiechatelnoste-khraniashchikhsia-v-riznitsie",
  },
  {
    uuid: "827daef0-c6c0-012f-7827-58d385a7bc34",
    slug: "ensayos-politicos-sociales-y-economicos",
  },
  {
    uuid: "ec841b20-c6bf-012f-64dc-3c075448cc4b",
    slug: "lafrique-francaise-lempire-de-maroc-et-les-deserts-de-sahara",
  },
  {
    uuid: "5cc04ca0-c6be-012f-7547-3c075448cc4b",
    slug: "new-york-public-library-photographs",
  },
  {
    uuid: "9cee55a0-c6c0-012f-de85-58d385a7bc34",
    slug: "notice-sur-le-dahomey",
  },
  {
    uuid: "7673ed40-c6c0-012f-35f3-58d385a7bc34",
    slug: "photographs-of-buildings-covered-with-warrens-anchor-brand-natural-asphalt",
  },
  {
    uuid: "0d7806c0-c6c1-012f-ea39-58d385a7bc34",
    slug: "photographs-of-geological-formations-and-western-landscapes",
  },
  {
    uuid: "51dae640-c6c0-012f-8b72-58d385a7bc34",
    slug: "picturae-dominici-zampierii",
  },
  {
    uuid: "6ba85c70-c6cf-012f-d0da-58d385a7bc34",
    slug: "the-pilgrimage-of-the-soul",
  },
  {
    uuid: "e31e6d70-c6c0-012f-6d64-58d385a7bc34",
    slug: "relation-universelle-de-lafrique-ancienne-et-moderne",
  },
  {
    uuid: "a99d7280-c6c0-012f-3203-58d385a7bc34",
    slug: "yosemite-views",
  },
  {
    uuid: "456bc2e0-c6c0-012f-8f71-58d385a7bc34",
    slug: "the-history-of-the-coronation-of-james-ii-king-of-england-scotland-france",
  },
  {
    uuid: "b22507b0-c6be-012f-08f3-3c075448cc4b",
    slug: "ichthyology-of-south-carolina-vol-i",
  },
  {
    uuid: "0f7466e0-c6bf-012f-9521-3c075448cc4b",
    slug: "intrieurs-dappartements-modernes",
  },
  {
    uuid: "8eb699c0-c6bf-012f-d2f7-58d385a7bc34",
    slug: "krasnoe-selo",
  },
  {
    uuid: "ed3ca3f0-c6be-012f-3637-58d385a7bc34",
    slug: "labor-in-japan-report-by-consul-general-van-buren",
  },
  {
    uuid: "0fed7af0-c6bf-012f-d26b-58d385a7bc34",
    slug: "lietuvos-kryiai",
  },
  {
    uuid: "9adc50e0-c6bf-012f-cd8d-58d385a7bc34",
    slug: "sketches-in-afghaunistan",
  },
  {
    uuid: "4a17d560-c6bf-012f-83d2-58d385a7bc34",
    slug: "the-sudan-a-short-compendium-of-facts-and-figures-about-the-land-of-darkness",
  },
  {
    uuid: "024c9050-c6bf-012f-b197-58d385a7bc34",
    slug: "the-plans-elevations-and-sections-chimney-pieces-and-cielings-sic-of-houghton",
  },
  {
    uuid: "1a906650-c6bf-012f-5a90-58d385a7bc34",
    slug: "the-west-indies-illustrated-historical-and-descriptive-commercial-and-industrial",
  },
  {
    uuid: "4f1d06d0-c6be-012f-ed3c-58d385a7bc34",
    slug: "albom-ofitserskikh-polkovykh-grupp",
  },
  {
    uuid: "d4597350-c6be-012f-c837-58d385a7bc34",
    slug: "albom-izdannyi-ko-dniu-75-letniago-iubileia-l-gv-1-strielkovago-ego-velichestva",
  },
  {
    uuid: "7cc8cd60-c6be-012f-af94-58d385a7bc34",
    slug: "bois-ceramique-bijoux-cuir",
  },
  {
    uuid: "40c0fcc0-c6be-012f-e6f9-58d385a7bc34",
    slug: "character-costumes-of-afghaunistan",
  },
  {
    uuid: "729dcc60-c6be-012f-6668-58d385a7bc34",
    slug: "description-de-lunivers",
  },
  {
    uuid: "e05bc840-c6be-012f-8b79-58d385a7bc34",
    slug: "exhibition-of-the-faience-of-persia-and-the-nearer-east",
  },
  {
    uuid: "186a93b0-c6be-012f-27f1-58d385a7bc34",
    slug: "national-youth-administration-collection",
  },
  {
    uuid: "b300f7b0-c6be-012f-11b6-58d385a7bc34",
    slug: "photographs-of-brooklyn",
  },
  {
    uuid: "0aef4650-c6be-012f-4a48-3c075448cc4b",
    slug: "sobranie-vidov-miestnostei-ostrova-valaama",
  },
  {
    uuid: "93390dd0-c6be-012f-317e-58d385a7bc34",
    slug: "sol-whites-official-base-ball-guide",
  },
  {
    uuid: "a7e6aad0-c6be-012f-6389-58d385a7bc34",
    slug: "taishokukan-2",
  },
  {
    uuid: "0bf660c0-c6be-012f-098a-58d385a7bc34",
    slug: "the-black-soldier",
  },
  {
    uuid: "02d6d160-c6be-012f-2cf8-58d385a7bc34",
    slug: "the-deer-of-all-lands",
  },
  {
    uuid: "2c269830-c6be-012f-8e8c-58d385a7bc34",
    slug: "chinese-water-color-paintings-2",
  },
  {
    uuid: "da9ddc80-c6bd-012f-eaf6-58d385a7bc34",
    slug: "broadsides-collection",
  },
  {
    uuid: "52346460-c6bd-012f-4d18-3c075448cc4b",
    slug: "comus",
  },
  {
    uuid: "ef7da310-c6bd-012f-7ad3-58d385a7bc34",
    slug: "la-gographie-sacre-et-les-monuments-de-lhistoire-sainte",
  },
  {
    uuid: "cfad7470-c6bd-012f-c0cc-58d385a7bc34",
    slug: "lights-and-shadows-of-african-history-by-the-author-of-peter-parleys-tales",
  },
  {
    uuid: "25fe3050-c6bd-012f-164e-58d385a7bc34",
    slug: "new-and-rare-inventions-of-water-works",
  },
  {
    uuid: "735ae030-c6bd-012f-e850-58d385a7bc34",
    slug: "novvelle-invention-de-lever-leav-plvs-havt-qve-sa-source",
  },
  {
    uuid: "97c67440-c6bd-012f-1322-58d385a7bc34",
    slug: "opisanie-sviashchennago-koronovaniia-ikh-imperatorskikh-velichestv-gosudaria",
  },
  {
    uuid: "609f0c20-c6bd-012f-f623-58d385a7bc34",
    slug: "panama-and-the-canal-in-picture-and-prose",
  },
  {
    uuid: "a3471180-c6bd-012f-b054-58d385a7bc34",
    slug: "pen-and-ink-drawings-for-the-wizard-of-oz-by-l-frank-baum",
  },
  {
    uuid: "39076f20-c6bd-012f-8e99-58d385a7bc34",
    slug: "troitskii-sobor-v-ipatievskom-monastyrie-remont-1911-1913-g",
  },
  {
    uuid: "f308cd90-c6bb-012f-4f97-58d385a7bc34",
    slug: "a-portfolio-of-linoleum-cuts",
  },
  {
    uuid: "fa370040-c6ba-012f-ec5d-58d385a7bc34",
    slug: "bible-historie-et-vie-des-saints",
  },
  {
    uuid: "ff5044c0-c6bb-012f-ddbd-3c075448cc4b",
    slug: "catlins-north-american-indian-portfolio",
  },
  {
    uuid: "62126c90-c6bb-012f-fe8d-58d385a7bc34",
    slug: "duplicity-as-identity-series",
  },
  {
    uuid: "fb0bec10-c6bb-012f-c371-58d385a7bc34",
    slug: "following-the-color-line-an-account-of-negro-citizenship-in-the-american",
  },
  {
    uuid: "46dc4bc0-c6bc-012f-32a3-58d385a7bc34",
    slug: "gulag-prisoners-at-work-1936-1937",
  },
  {
    uuid: "1d54f800-c6bd-012f-cbad-58d385a7bc34",
    slug: "history-of-the-eighth-illinois-united-states-volunteers",
  },
  {
    uuid: "b1f08da0-c6bb-012f-67c8-58d385a7bc34",
    slug: "khudozhestvennyi-albom-fotografii-s-natury",
  },
  {
    uuid: "3d4ce2c0-c6bc-012f-a4b5-58d385a7bc34",
    slug: "morgans-history-of-the-new-jersey-conference-of-the-ame-church-from-1872-to-1887",
  },
  {
    uuid: "33631f20-c6bc-012f-d095-58d385a7bc34",
    slug: "original-designs",
  },
  {
    uuid: "e1777440-c6bb-012f-ee2b-58d385a7bc34",
    slug: "plan-stolichnago-goroda-sanktpeterburga-s-izobrahenem-znatnieshikh-onago",
  },
  {
    uuid: "2a2dd6c0-c6bc-012f-c1ca-58d385a7bc34",
    slug: "sevastopol-v-1855-1856-g-25-fototipicheskikh-snimkov-s-riedkago",
  },
  {
    uuid: "e9c8ec10-c6bb-012f-86e2-58d385a7bc34",
    slug: "shi-ba-luo-han-xiang",
  },
  {
    uuid: "07687a10-c6bc-012f-882e-58d385a7bc34",
    slug: "souvenirs-degypte",
  },
  {
    uuid: "bc396180-c6bb-012f-b62e-58d385a7bc34",
    slug: "the-gospel-of-slavery-a-primer-of-freedom",
  },
  {
    uuid: "4e9e4530-c6bc-012f-5b15-3c075448cc4b",
    slug: "illustrations-of-the-highlands-of-thiopia",
  },
  {
    uuid: "d08d11c0-c6bb-012f-ef28-58d385a7bc34",
    slug: "camille-pissarro-etchings",
  },
  {
    uuid: "b483c960-c6ba-012f-5bcc-58d385a7bc34",
    slug: "albom-gelograviur-s-kartin-russkikh-khudozhnikov",
  },
  {
    uuid: "6a5f6f30-c6bb-012f-e577-58d385a7bc34",
    slug: "costume-of-the-lower-orders-of-london",
  },
  {
    uuid: "c7dd4f00-c6ba-012f-1f38-58d385a7bc34",
    slug: "djiny-umn-nroda-eskho",
  },
  {
    uuid: "dd382360-004e-0130-5626-58d385a7bc34",
    slug: "edison-album",
  },
  {
    uuid: "447b9b20-c6bb-012f-ec3b-58d385a7bc34",
    slug: "esquisses-sngalaises",
  },
  {
    uuid: "4dd8d980-c6bb-012f-3e8a-58d385a7bc34",
    slug: "faits-memorables-des-empereurs-de-la-chine",
  },
  {
    uuid: "c51cb7e0-c6ba-012f-206d-3c075448cc4b",
    slug: "illustrations-of-himalayan-plants",
  },
  {
    uuid: "857cf6b0-c6bb-012f-7d35-58d385a7bc34",
    slug: "inspirations",
  },
  {
    uuid: "d8a880d0-c6ba-012f-2795-58d385a7bc34",
    slug: "jamaica",
  },
  {
    uuid: "63db5540-c6ba-012f-cfcb-3c075448cc4b",
    slug: "krasny-oktiabr-i-gody",
  },
  {
    uuid: "159e6d00-c6bb-012f-2219-58d385a7bc34",
    slug: "reise-in-nordost-africa-1860",
  },
  {
    uuid: "8cd60dc0-c6ba-012f-34fe-58d385a7bc34",
    slug: "risunki-pamiatnikov-chinam-12-go-korpusa-pavshim-v-voine-1877-78-gg-v-bolgarii",
  },
  {
    uuid: "26a7a630-c6bb-012f-a6b7-58d385a7bc34",
    slug: "the-sundhya-or-the-daily-prayers-of-the-brahmins",
  },
  {
    uuid: "10b702a0-c6bb-012f-489b-3c075448cc4b",
    slug: "tuskegee-and-its-people-their-ideals-and-achievements",
  },
  {
    uuid: "79ced760-c6bb-012f-5735-58d385a7bc34",
    slug: "vidy-kieva",
  },
  {
    uuid: "d5dabbb0-004e-0130-7ac4-58d385a7bc34",
    slug: "views-in-palestine-from-the-original-drawings-of-luigi-mayer-with-an-historical",
  },
  {
    uuid: "975d1c90-c6bb-012f-5b77-58d385a7bc34",
    slug: "voyage-loasis-de-thbes",
  },
  {
    uuid: "60c2fe70-24b5-0132-5ebd-58d385a7b928",
    slug: "360641-infinity-symbol-new-york-public-library",
  },
  {
    uuid: "a7461710-c6b9-012f-87d5-58d385a7bc34",
    slug: "album-de-martinique",
  },
  {
    uuid: "d35d2550-dadf-0131-b2c4-58d385a7b928",
    slug: "bertram-ross-video-archive",
  },
  {
    uuid: "b1ad0650-c6b9-012f-b8d4-58d385a7bc34",
    slug: "blancs-et-noirs-carnet-de-voyage-hati-cuba-jamaque-tats-unis",
  },
  {
    uuid: "58131700-c6ba-012f-69b2-58d385a7bc34",
    slug: "cuba-with-pen-and-pencil",
  },
  {
    uuid: "a1dc92e0-c6b9-012f-0e8a-3c075448cc4b",
    slug: "etchings-of-remarkable-beggars-itinerant-traders-and-other-persons-of-notoriety",
  },
  {
    uuid: "58e9ef50-c6b9-012f-9f0b-58d385a7bc34",
    slug: "europe",
  },
  {
    uuid: "441c6220-c6b9-012f-3d96-3c075448cc4b",
    slug: "forty-etchings-from-sketches-made-with-the-camera-lucida-in-north-america",
  },
  {
    uuid: "203bc940-c6ba-012f-ff0d-58d385a7bc34",
    slug: "funeral-cortege-of-mariia-fedorovna-consort-of-paul-i-emperor-of-russia",
  },
  {
    uuid: "0eeca6d0-c6ba-012f-78ee-58d385a7bc34",
    slug: "holz-und-marmor-malerei-22-tafeln",
  },
  {
    uuid: "28eace90-c6ba-012f-090d-58d385a7bc34",
    slug: "lafrique-quatoriale-franaise-le-pays-les-habitants-la-colonisation-les-pouvoirs",
  },
  {
    uuid: "82347a70-c6b9-012f-c946-58d385a7bc34",
    slug: "ladies-dress-shoes-of-the-nineteenth-century",
  },
  {
    uuid: "680ad600-c6b9-012f-c296-58d385a7bc34",
    slug: "lietopisnyi-i-litsevoi-izbornik-doma-romanovykh-iubileinoe-izdanie-v",
  },
  {
    uuid: "5fe47390-c6bf-012f-c9cf-58d385a7bc34",
    slug: "maps-of-the-oceans",
  },
  {
    uuid: "646224a0-c6b9-012f-6459-58d385a7bc34",
    slug: "my-larger-education-being-chapters-from-my-experience",
  },
  {
    uuid: "076a2230-c6ba-012f-b8ea-3c075448cc4b",
    slug: "the-negro-in-the-cities-of-the-north",
  },
  {
    uuid: "8ae920b0-c6b9-012f-45ce-58d385a7bc34",
    slug: "official-history-of-freemasonry-among-the-colored-people-in-north-america",
  },
  {
    uuid: "69529f10-c6ba-012f-14a8-58d385a7bc34",
    slug: "pogrzeb-marszalka-jozefa-pilsudskiego",
  },
  {
    uuid: "17c8bf30-c6ba-012f-aeb4-58d385a7bc34",
    slug: "textiles",
  },
  {
    uuid: "4ec97040-c6ba-012f-1ce4-58d385a7bc34",
    slug: "vidy-kieva-2",
  },
  {
    uuid: "cf97daa0-c6ba-012f-b585-58d385a7bc34",
    slug: "wilton-garden",
  },
  {
    uuid: "53b877c0-c6b9-012f-2e79-58d385a7bc34",
    slug: "lornementation-fleurie",
  },
  {
    uuid: "291847e0-c6b9-012f-4ad8-58d385a7bc34",
    slug: "a-woman-rice-planter",
  },
  {
    uuid: "48c6ab30-c6b9-012f-2969-58d385a7bc34",
    slug: "affairs-of-west-africa",
  },
  {
    uuid: "94e26580-c6b9-012f-3c13-58d385a7bc34",
    slug: "anatomical-studies-of-the-bones-and-muscles-for-the-use-of-artists",
  },
  {
    uuid: "ae3e0f90-c6b8-012f-e71f-3c075448cc4b",
    slug: "four-thousand-miles-of-african-travel-a-personal-record-of-a-journey-up",
  },
  {
    uuid: "0c2c5500-c6b9-012f-ee93-58d385a7bc34",
    slug: "gouldtown-a-very-remarkable-settlement-of-ancient-date",
  },
  {
    uuid: "d9a92580-c6b8-012f-faa8-58d385a7bc34",
    slug: "lake-ngami",
  },
  {
    uuid: "5c9f7820-c6b9-012f-b035-58d385a7bc34",
    slug: "maps-of-north-and-south-america",
  },
  {
    uuid: "ff0bca30-c6b8-012f-7c2f-58d385a7bc34",
    slug: "musee-des-anciens-costumes-turcs-de-constantinople",
  },
  {
    uuid: "3b262720-c6b9-012f-9dbd-58d385a7bc34",
    slug: "photographs-and-personal-letters-1904-1928",
  },
  {
    uuid: "206d5b20-c6b9-012f-b20b-58d385a7bc34",
    slug: "pokrovski-kevsk-zhensk-obshchezhitelny-monastyr",
  },
  {
    uuid: "bca76e00-c6b9-012f-8171-58d385a7bc34",
    slug: "tai-ping-tian-guo-yun-dong-yuan-shi-zi-liao-ji",
  },
  {
    uuid: "04dc3670-c6b9-012f-3e95-58d385a7bc34",
    slug: "the-colored-american-republican-text-book",
  },
  {
    uuid: "f360c050-c6b8-012f-9734-58d385a7bc34",
    slug: "the-punishments-of-china",
  },
  {
    uuid: "72337480-c6ba-012f-e5e3-58d385a7bc34",
    slug: "werke-der-hheren-baukunst-fr-die-ausfhrung-erfunden-von-schinkel",
  },
  {
    uuid: "3e39db70-c6b9-012f-0af3-58d385a7bc34",
    slug: "a-half-century-of-freedom-of-the-negro-in-ohio",
  },
  {
    uuid: "21303e80-c6b8-012f-8a75-58d385a7bc34",
    slug: "bulgarski-khudozhestveni-starini",
  },
  {
    uuid: "0db3d0b0-c6b9-012f-b2ec-58d385a7bc34",
    slug: "early-western-prints-and-photographs-1790-1887",
  },
  {
    uuid: "c08864e0-0d99-0131-cee1-3c075448cc4b",
    slug: "edme-wood-video-archive",
  },
  {
    uuid: "3943a010-c6b8-012f-bdc5-58d385a7bc34",
    slug: "floral-dessins-coloris-nouveaux",
  },
  {
    uuid: "a35fd6d0-c6b8-012f-ffa1-58d385a7bc34",
    slug: "krasnaia-armiia-1918-1933",
  },
  {
    uuid: "7a3afbf0-c6b8-012f-36c6-58d385a7bc34",
    slug: "lowestoft-china-factory-and-the-moulds-found-there-in-december-1902",
  },
  {
    uuid: "cb29b460-c6b8-012f-6ab4-58d385a7bc34",
    slug: "nouvelles-fantasies-dcoratives",
  },
  {
    uuid: "f2e9be50-c6b7-012f-0cdb-58d385a7bc34",
    slug: "ocherki-tverskoi-stariny",
  },
  {
    uuid: "ea5afd90-c6b7-012f-1930-58d385a7bc34",
    slug: "qisas-al-anbiy",
  },
  {
    uuid: "e3454500-c6b7-012f-9729-58d385a7bc34",
    slug: "suggestions-pour-toffes-et-tapis-60-motifs-en-couleur",
  },
  {
    uuid: "4db9ba70-c6b8-012f-df88-58d385a7bc34",
    slug: "the-lake-regions-of-central-africa-a-picture-of-exploration",
  },
  {
    uuid: "92809440-c6b8-012f-f276-58d385a7bc34",
    slug: "vidy-solovetskago-monastyria-otpechatannye-s-drevnikh-dosok-khraniashchikhsia-v",
  },
  {
    uuid: "820428a0-c6b8-012f-137d-58d385a7bc34",
    slug: "vidy-g-solvychegodska-i-ego-dostoprimiechatelnostei",
  },
  {
    uuid: "72b28150-c6b8-012f-61e0-58d385a7bc34",
    slug: "vsemirnaia-kolumbova-vystavka-1893-goda-v-chikago",
  },
  {
    uuid: "89bcd160-c6b8-012f-e880-58d385a7bc34",
    slug: "reproductions-dapres-differents-maitres-2",
  },
  {
    uuid: "0f164500-c6b8-012f-c9d7-58d385a7bc34",
    slug: "the-oriental-album",
  },
  {
    uuid: "bfa08930-c6b7-012f-5d37-58d385a7bc34",
    slug: "a-voyage-to-abyssinia-and-travels-into-the-interior-of-that-country-executed",
  },
  {
    uuid: "3cd12dc0-c6b6-012f-3dd6-58d385a7bc34",
    slug: "albom-vidov-tserkvei-estliandskoi-gubernii",
  },
  {
    uuid: "519058b0-c6b6-012f-c472-58d385a7bc34",
    slug: "chinese-paintings",
  },
  {
    uuid: "5fdf0870-c6b7-012f-25ef-58d385a7bc34",
    slug: "documents-de-style-empire",
  },
  {
    uuid: "35ec60d0-c6b6-012f-5ee0-58d385a7bc34",
    slug: "emergence",
  },
  {
    uuid: "7c08f180-c6b7-012f-8c0f-58d385a7bc34",
    slug: "formes-et-couleurs",
  },
  {
    uuid: "01abe100-c6b8-012f-48f9-3c075448cc4b",
    slug: "fotografii-novgorodskago-muzeia",
  },
  {
    uuid: "5ef55130-c6b6-012f-c53c-58d385a7bc34",
    slug: "studies-of-native-americans-by-carl-moon",
  },
  {
    uuid: "c0ea8450-c6b6-012f-d9a8-58d385a7bc34",
    slug: "joannis-elerti-bode-uranographia-sive-astrorum-descriptio-viginti-tabulis-aeneis",
  },
  {
    uuid: "b810ec70-c6b7-012f-8c3a-58d385a7bc34",
    slug: "kaleidoscope",
  },
  {
    uuid: "44183a90-c6b6-012f-477d-58d385a7bc34",
    slug: "kniga-ob-izbranii-na-tsarstvo-velikago-gosu-daria-tsaria-i-velikago-kniazia",
  },
  {
    uuid: "22d13ff0-c6b6-012f-9c7d-58d385a7bc34",
    slug: "medaliony-v-pamiat-voennykh-sobyti-1812-1813-1814-i-1815-godov",
  },
  {
    uuid: "6ea44310-c6b7-012f-0b75-3c075448cc4b",
    slug: "narrative-of-the-life-and-adventures-of-henry-bibb-an-american-slave-written",
  },
  {
    uuid: "baf947a0-0d99-0131-cf50-3c075448cc4b",
    slug: "ping-chong-video-archive",
  },
  {
    uuid: "c9834410-c6b7-012f-2524-58d385a7bc34",
    slug: "report-of-a-special-commission-designated-by-the-senate-to-ascertain-the-best",
  },
  {
    uuid: "57d623e0-c6b7-012f-c2ab-58d385a7bc34",
    slug: "slavery-in-south-carolina-and-the-ex-slaves",
  },
  {
    uuid: "4a52e7b0-c6b6-012f-c0d4-58d385a7bc34",
    slug: "the-capture-and-execution-of-john-brown-a-tale-of-martyrdom-by-elijah-avey-eye",
  },
  {
    uuid: "9f95f2f0-c6b7-012f-a235-58d385a7bc34",
    slug: "the-upward-path-the-evolution-of-a-race",
  },
  {
    uuid: "8da73a30-c6b7-012f-ac3b-58d385a7bc34",
    slug: "variations",
  },
  {
    uuid: "86969900-c6b5-012f-14c9-58d385a7bc34",
    slug: "bilder-aus-mekka",
  },
  {
    uuid: "69f5a540-c6b5-012f-929b-58d385a7bc34",
    slug: "bouquets-et-frondaisons-60-motifs-en-couleur",
  },
  {
    uuid: "018b4210-c6b6-012f-6356-58d385a7bc34",
    slug: "british-west-africa-its-rise-and-progress",
  },
  {
    uuid: "06a8ee20-c6b5-012f-6a16-58d385a7bc34",
    slug: "colour-pictures-on-pot-lids-and-other-forms-of-19th-century-staffordshire",
  },
  {
    uuid: "05adbca0-c6b5-012f-6990-3c075448cc4b",
    slug: "down-the-islands-a-voyage-to-the-caribbees",
  },
  {
    uuid: "41661af0-c6b5-012f-3677-58d385a7bc34",
    slug: "glimpses-of-africa-west-and-southwest-coast",
  },
  {
    uuid: "802bb640-c6b5-012f-0d62-58d385a7bc34",
    slug: "pervaia-vystavka-rossskago-narodnago-uzornago-shitia-ustroennaia-v-1883-1884-g",
  },
  {
    uuid: "7169ac20-c6b5-012f-8550-58d385a7bc34",
    slug: "portolan-atlas",
  },
  {
    uuid: "f40d4520-c6b5-012f-bf3f-58d385a7bc34",
    slug: "posieshchenie-vysochaishimi-osobami-zlatoustovskikh-kazennykh-gornykh-zavodov",
  },
  {
    uuid: "78a91860-c6b5-012f-3aa5-58d385a7bc34",
    slug: "de-la-twyere-psalter",
  },
  {
    uuid: "0ce0c200-c6b5-012f-ac9b-58d385a7bc34",
    slug: "the-negro-pictorial-review-a-visual-narrative-of-the-negros-glorious-part",
  },
  {
    uuid: "5df3c8d0-c6b5-012f-efde-58d385a7bc34",
    slug: "the-architectural-antiquities-of-the-collegiate-chapel-of-st-stephen-westminster",
  },
  {
    uuid: "13a49350-c6b5-012f-ba13-58d385a7bc34",
    slug: "vidy-s-peterburga",
  },
  {
    uuid: "de4f81d0-c6b5-012f-120e-58d385a7bc34",
    slug: "egypt-a-collection-of-views",
  },
  {
    uuid: "578e9a50-c6b5-012f-d652-58d385a7bc34",
    slug: "humpolec-and-its-environs-1890-1990",
  },
  {
    uuid: "af034d30-c6b5-012f-4075-3c075448cc4b",
    slug: "ketubbot",
  },
  {
    uuid: "e57195d0-c6b5-012f-2c1d-58d385a7bc34",
    slug: "the-hudson-river-portfolio",
  },
  {
    uuid: "ec5c4e60-c6b4-012f-6cd8-58d385a7bc34",
    slug: "a-description-of-some-ancient-monuments",
  },
  {
    uuid: "6ea4c020-c6b4-012f-62fd-58d385a7bc34",
    slug: "a-treatise-on-descriptive-geometry-for-the-use-of-the-cadets-of-the-united",
  },
  {
    uuid: "be0cc100-0d99-0131-0e98-3c075448cc4b",
    slug: "african-dance-video-archive",
  },
  {
    uuid: "905db7d0-c6b4-012f-1719-58d385a7bc34",
    slug: "brief-report-of-the-services-rendered-by-the-freed-people-to-the-united-states",
  },
  {
    uuid: "b7dfaa40-c6b4-012f-f26e-58d385a7bc34",
    slug: "gilbert-academy-and-agricultural-college-winsted-louisiana-sketches",
  },
  {
    uuid: "782b1350-c6b4-012f-5657-58d385a7bc34",
    slug: "golden-thoughts-on-chastity-and-procreation-including-heredity-prenatial",
  },
  {
    uuid: "74a613b0-c6b4-012f-df59-58d385a7bc34",
    slug: "haiti-its-dawn-of-progress-after-years-in-a-night-of-revolution",
  },
  {
    uuid: "b9e57930-c6b8-012f-e8df-58d385a7bc34",
    slug: "les-colonies-franaises-notices-illustres",
  },
  {
    uuid: "697d9f10-c6b4-012f-7a96-58d385a7bc34",
    slug: "lu-yi-mu-ke-xuan",
  },
  {
    uuid: "e094b680-c6b4-012f-5fd0-58d385a7bc34",
    slug: "magazine-posters-2",
  },
  {
    uuid: "4d87de70-c6b4-012f-5ad2-58d385a7bc34",
    slug: "negro-almanac-and-statistics",
  },
  {
    uuid: "c3dc0000-004d-0130-03a6-58d385a7bc34",
    slug: "o-babele-gladkove-zharove-zoriche-zoshchenko-inber-klychkove-krest-poete",
  },
  {
    uuid: "61b80680-c6b4-012f-e345-58d385a7bc34",
    slug: "o-muata-cazembe-e-os-povos-maraves-chevas-muizas-muembas-lundas-e-outros-da",
  },
  {
    uuid: "e74aa4e0-c6b4-012f-0bbf-58d385a7bc34",
    slug: "painting-protective-and-decorative",
  },
  {
    uuid: "61023600-c6b4-012f-babd-3c075448cc4b",
    slug: "picturesque-views-of-american-scenery-1820",
  },
  {
    uuid: "becd3810-0d99-0131-a21d-3c075448cc4b",
    slug: "popular-balanchine",
  },
  {
    uuid: "c077aab0-c6b4-012f-8785-58d385a7bc34",
    slug: "the-philadelphia-colored-directory-1910",
  },
  {
    uuid: "63144ab0-c6b4-012f-fcb7-58d385a7bc34",
    slug: "the-family-album",
  },
  {
    uuid: "6eb18b90-c6b4-012f-7306-3c075448cc4b",
    slug: "through-liberia-by-lady-dorothy-mills",
  },
  {
    uuid: "fdf53cd0-c6b3-012f-e1e4-3c075448cc4b",
    slug: "wall-drawings-and-monuments-of-el-kab",
  },
  {
    uuid: "f34d9590-c6b4-012f-c550-58d385a7bc34",
    slug: "wall-drawings-and-monuments-of-el-kab-the-temple-of-amenhetep-iii-by-j-j-tylor",
  },
  {
    uuid: "5b1d00d0-c6b4-012f-6d46-58d385a7bc34",
    slug: "palestine",
  },
  {
    uuid: "87926940-c6b4-012f-1e2d-58d385a7bc34",
    slug: "vidy-g-koly",
  },
  {
    uuid: "148d2cd0-c6b4-012f-1f99-58d385a7bc34",
    slug: "a-glimpse-of-the-tropics-or-four-months-cruising-in-the-west-indies",
  },
  {
    uuid: "3a075140-c6b4-012f-ffab-58d385a7bc34",
    slug: "booker-t-washington-builder-of-a-civilization",
  },
  {
    uuid: "8dab2ac0-c6b3-012f-f0d9-58d385a7bc34",
    slug: "the-choctaw-freedmen-and-the-story-of-oak-hill-industrial-academy-valliant",
  },
  {
    uuid: "bc5516e0-c6b3-012f-b4e9-58d385a7bc34",
    slug: "costume-of-the-lower-orders-of-the-metropolis",
  },
  {
    uuid: "8c21f570-c6ce-012f-0899-58d385a7bc34",
    slug: "lincoln-school-for-nurses-photograph-collection",
  },
  {
    uuid: "fd93dad0-c6b3-012f-778d-58d385a7bc34",
    slug: "missionary-travels-and-researches-in-south-africa-including-a-sketch-of-sixteen",
  },
  {
    uuid: "c2d43f70-c6b3-012f-3bf8-58d385a7bc34",
    slug: "omahas-riot-in-story-and-picture",
  },
  {
    uuid: "9f90dde0-c6b4-012f-db2f-58d385a7bc34",
    slug: "pallas",
  },
  {
    uuid: "b6817170-c6b3-012f-b337-58d385a7bc34",
    slug: "para-blancos-y-negros-ensayos-politicos-sociales-y-economicos",
  },
  {
    uuid: "692ea0a0-c62b-012f-f49d-58d385a7bc34",
    slug: "photographs-of-actors-who-played-hamlet-1983",
  },
  {
    uuid: "a3a490c0-c6b6-012f-152e-58d385a7bc34",
    slug: "popular-instrumental-sheet-music",
  },
  {
    uuid: "86f9fa70-c6b3-012f-432f-58d385a7bc34",
    slug: "reize-naar-de-oost-en-westkust-van-zuid-amerika-en",
  },
  {
    uuid: "a415e340-c6b3-012f-0d45-58d385a7bc34",
    slug: "reprint-of-the-original-letters-from-washington-to-joseph-reed-during",
  },
  {
    uuid: "39386ee0-c6b4-012f-a608-58d385a7bc34",
    slug: "riazanskiia-russkiia-drevnosti-ili-izviestie-o-starinnykh-i-bogatykh",
  },
  {
    uuid: "40a0de50-c6b4-012f-8af0-58d385a7bc34",
    slug: "shest-dnei",
  },
  {
    uuid: "47257b20-c6b4-012f-efef-58d385a7bc34",
    slug: "the-king-and-queen-of-hearts",
  },
  {
    uuid: "e9edecc0-c6b3-012f-895f-58d385a7bc34",
    slug: "the-official-manual-and-history-of-the-grand-united-order-of-odd-fellows",
  },
  {
    uuid: "205503f0-c6b4-012f-8a4d-58d385a7bc34",
    slug: "the-underground-railroad-from-slavery-to-freedom",
  },
  {
    uuid: "344f2240-c6b4-012f-4676-58d385a7bc34",
    slug: "three-visits-to-madagascar-during-the-years-1853-1854-1856-including-a-journey",
  },
  {
    uuid: "0d8f92a0-c6b4-012f-e0f3-58d385a7bc34",
    slug: "voyage-dans-le-soudan-occidental",
  },
  {
    uuid: "357020d0-c6b3-012f-f9ac-3c075448cc4b",
    slug: "vues",
  },
  {
    uuid: "9397cec0-c6b3-012f-4d24-58d385a7bc34",
    slug: "wall-drawings-and-monuments-of-el-kab-2",
  },
  {
    uuid: "717620e0-c6b3-012f-a863-3c075448cc4b",
    slug: "the-work-of-colored-women",
  },
  {
    uuid: "ef7b5fa0-c6b3-012f-3a5b-58d385a7bc34",
    slug: "uvres-dorfvrerie-lusage-des-glises-inventes-par-j-f-forty-livre-1-3",
  },
  {
    uuid: "feeaf110-c6b2-012f-89a7-58d385a7bc34",
    slug: "truth-is-stranger-than-fiction-an-autobiography-of-the-rev-josiah-henson-mrs",
  },
  {
    uuid: "bfe54090-c62d-012f-a9dc-58d385a7bc34",
    slug: "albom-obraztsov-kharakternago-starinnago-narodnago-uzornago-shitia-tkania-i",
  },
  {
    uuid: "cca18ea0-c62d-012f-c478-58d385a7bc34",
    slug: "annuaire-general-dhaiti-c-celestin-b-danache-directeurs",
  },
  {
    uuid: "941c4f40-c6b2-012f-c247-58d385a7bc34",
    slug: "conspectus-novi-praetori-loo-ex-accurata-delineatione-j-romani",
  },
  {
    uuid: "2a060080-c6c0-012f-712f-58d385a7bc34",
    slug: "karikatury-na-stepanova",
  },
  {
    uuid: "4c1e8f10-c6b3-012f-3086-58d385a7bc34",
    slug: "le-pays-des-ngres",
  },
  {
    uuid: "b6225d30-c6b2-012f-6e30-3c075448cc4b",
    slug: "les-voeux-du-paon",
  },
  {
    uuid: "3c8b8b80-c6b3-012f-ff04-58d385a7bc34",
    slug: "lilliputian-characters",
  },
  {
    uuid: "bd850d80-c6b2-012f-0aa0-58d385a7bc34",
    slug: "north-carolinas-social-welfare-program-for-negroes",
  },
  {
    uuid: "96e813a0-c62d-012f-adae-58d385a7bc34",
    slug: "pastor-henry-n-jeters-twenty-five-years-experience-with-the-shiloh-baptist",
  },
  {
    uuid: "37a42020-c6b9-012f-0791-58d385a7bc34",
    slug: "philippe-halsman-theatrical-photographs-1947-1969",
  },
  {
    uuid: "86b06d70-0040-0130-03cc-58d385a7bc34",
    slug: "philippine-costumes",
  },
  {
    uuid: "9da81040-c62d-012f-cc2c-58d385a7bc34",
    slug: "picturesque-jamaica-by-a-duperly-son-with-descriptive-text-of-the-island",
  },
  {
    uuid: "c5c29280-c62d-012f-b94d-58d385a7bc34",
    slug: "practical-training-in-negro-rural-schools",
  },
  {
    uuid: "591c4e70-c6b3-012f-03b2-58d385a7bc34",
    slug: "recreation-and-amusement-among-negroes-in-washington-dc",
  },
  {
    uuid: "d38ac1f0-c62d-012f-4e1f-58d385a7bc34",
    slug: "seiro-bijin-awase-sugata-kagami",
  },
  {
    uuid: "0766d850-c6b4-012f-b89e-58d385a7bc34",
    slug: "the-anti-slavery-record",
  },
  {
    uuid: "2a00c990-c6b3-012f-36ce-58d385a7bc34",
    slug: "the-history-of-the-colored-methodist-episcopal-church-in-america-comprising",
  },
  {
    uuid: "b23de6f0-c62d-012f-a3a7-58d385a7bc34",
    slug: "vidy-krasnago-sela",
  },
  {
    uuid: "4386c910-c6b3-012f-4496-58d385a7bc34",
    slug: "a-sketch-of-the-origin-and-progress-of-steam-navigation-from-authentic-documents",
  },
  {
    uuid: "0211f4d0-c62c-012f-9598-58d385a7bc34",
    slug: "album-female-society-for-the-relief-of-negro-slaves",
  },
  {
    uuid: "8df47b10-004d-0130-1b56-58d385a7bc34",
    slug: "america-2",
  },
  {
    uuid: "9b768780-c62c-012f-89ba-58d385a7bc34",
    slug: "american-caricatures-pertaining-to-the-civil-war",
  },
  {
    uuid: "f07165c0-c62c-012f-379e-58d385a7bc34",
    slug: "bref-om-de-forenta-staterna",
  },
  {
    uuid: "7a588e10-c62c-012f-5522-58d385a7bc34",
    slug: "circus-and-magic-posters",
  },
  {
    uuid: "4026e4d0-c62c-012f-1581-58d385a7bc34",
    slug: "collection-of-photographs-of-new-york-streets-showing-work-on-subway",
  },
  {
    uuid: "2799e130-c62c-012f-3d11-58d385a7bc34",
    slug: "cours-complet-danatomie-peint-et-grave-en-couleurs-naturelles",
  },
  {
    uuid: "e55a0820-c62c-012f-9bfa-58d385a7bc34",
    slug: "decorations-in-the-city-of-new-york-to-honor-the-british-french-italian-japanese",
  },
  {
    uuid: "954d5930-c62c-012f-1626-58d385a7bc34",
    slug: "eia-imperatorskago-vysochestva-velikoi-kniazhny-anastastii-nikolaevny",
  },
  {
    uuid: "73e31400-c62c-012f-3fee-58d385a7bc34",
    slug: "flug-flight-portfolio",
  },
  {
    uuid: "df260940-c62c-012f-a1f8-58d385a7bc34",
    slug: "gtikhvin-i-tikhvinskaia-sistema-26-go-iiulia-1887-g",
  },
  {
    uuid: "b0418bf0-8c25-0131-f9a4-58d385a7bbd0",
    slug: "hilary-easton-video-archive",
  },
  {
    uuid: "180daab0-c62d-012f-5b13-58d385a7bc34",
    slug: "history-of-the-first-african-baptist-church-from-its-organization-january-20th",
  },
  {
    uuid: "41fa9fe0-c5fb-012f-dd5b-58d385a7bc34",
    slug: "hokusai-manga",
  },
  {
    uuid: "10d4ba30-c62d-012f-aed9-58d385a7bc34",
    slug: "isadora-duncan-dancers",
  },
  {
    uuid: "b291a420-c62c-012f-3011-58d385a7bc34",
    slug: "khudozhestvennyi-albom-fotografii-s-natury-2",
  },
  {
    uuid: "6556d080-c6b6-012f-6324-58d385a7bc34",
    slug: "maps-of-the-world",
  },
  {
    uuid: "f6f80b50-c62c-012f-2949-58d385a7bc34",
    slug: "mitla-a-narrative-of-incidents-and-personal-adventures-on-a-journey-in-mexico",
  },
  {
    uuid: "618cf770-c62c-012f-2f15-58d385a7bc34",
    slug: "oforty-ve-makovskago",
  },
  {
    uuid: "2996a790-c6ce-012f-4b56-58d385a7bc34",
    slug: "regina-andrews-photograph-collection",
  },
  {
    uuid: "a24a7190-c62c-012f-a804-58d385a7bc34",
    slug: "relais-1930",
  },
  {
    uuid: "0e3e7d00-c62c-012f-fb46-58d385a7bc34",
    slug: "representation-exacte-des-edifices-et-du-jardin",
  },
  {
    uuid: "c8b33310-c62c-012f-d7c7-58d385a7bc34",
    slug: "souvenir-official-program-and-music-of-the-negro-young-peoples-christian",
  },
  {
    uuid: "67551190-c62c-012f-5210-58d385a7bc34",
    slug: "the-republic-of-liberia",
  },
  {
    uuid: "c258afe0-c62c-012f-d5bd-58d385a7bc34",
    slug: "twenty-eight-years-a-slave-or-the-story-of-my-life-in-three-continents",
  },
  {
    uuid: "086c85b0-c62c-012f-f333-58d385a7bc34",
    slug: "winnie-the-pooh-stuffed-animals",
  },
  {
    uuid: "a051d180-c62b-012f-0ce4-58d385a7bc34",
    slug: "aleksandro-nevskaia-lavra-v-s-peterburgie-fotograficheskii-albom",
  },
  {
    uuid: "a89c31f0-c62a-012f-5524-58d385a7bc34",
    slug: "among-the-ibos-of-nigeria-an-account-of-the-curious-interesting-habits-customs",
  },
  {
    uuid: "41d95490-c62b-012f-8081-58d385a7bc34",
    slug: "black-america",
  },
  {
    uuid: "ead93990-c6b2-012f-fda2-3c075448cc4b",
    slug: "chronik-des-constanzer-concils",
  },
  {
    uuid: "7ab823b0-c62b-012f-b4dc-58d385a7bc34",
    slug: "description-of-the-ruins-of-an-ancient-city-discovered-near-palenque",
  },
  {
    uuid: "d67dbba0-c62a-012f-12b3-58d385a7bc34",
    slug: "die-lander-und-volker-der-erde-oder-vollstandige-beschreibung-aller-funf",
  },
  {
    uuid: "aee70590-c62a-012f-6e66-58d385a7bc34",
    slug: "espaa-en-el-frica-occidental-ro-de-oro-y-guinea-con-dibujos-y-fotografias-de-m",
  },
  {
    uuid: "47e59c80-c62b-012f-9d0a-58d385a7bc34",
    slug: "folk-beliefs-of-the-southern-negro",
  },
  {
    uuid: "b533dd80-c62a-012f-08d0-58d385a7bc34",
    slug: "frank-leslies-illustrated-newspaper",
  },
  {
    uuid: "f43249e0-c62a-012f-2e14-58d385a7bc34",
    slug: "gaffer-gray",
  },
  {
    uuid: "caef2ba0-c62b-012f-5388-58d385a7bc34",
    slug: "haut-sngal-et-moyen-niger-kita-et-segou",
  },
  {
    uuid: "f9b8e150-c62a-012f-143c-58d385a7bc34",
    slug: "horae-roman-use",
  },
  {
    uuid: "bb9f4f40-c62a-012f-389f-58d385a7bc34",
    slug: "ides-1",
  },
  {
    uuid: "9ba8b9c0-c62a-012f-51ee-58d385a7bc34",
    slug: "isles-of-spice-and-palm",
  },
  {
    uuid: "d0e67430-c62a-012f-af12-58d385a7bc34",
    slug: "jamaica-its-past-and-present-state",
  },
  {
    uuid: "35e7b4c0-c62b-012f-3e9c-58d385a7bc34",
    slug: "jerusalem",
  },
  {
    uuid: "1798b1a0-c62b-012f-63f3-58d385a7bc34",
    slug: "les-vitraux-de-la-cathdrale-de-tournai",
  },
  {
    uuid: "e2a77430-c62a-012f-591e-58d385a7bc34",
    slug: "methodism-and-the-negro",
  },
  {
    uuid: "c42e6c70-c62b-012f-edb5-58d385a7bc34",
    slug: "poro-hair-beauty-culture",
  },
  {
    uuid: "5d6e3c00-c62b-012f-6ef1-58d385a7bc34",
    slug: "sufi-interpretations-of-the-quatrains-of-omar-khayyam-and-fitzgerald",
  },
  {
    uuid: "b20798a0-c62b-012f-46d4-58d385a7bc34",
    slug: "the-trouvelot-astronomical-drawings",
  },
  {
    uuid: "dcad4f90-c62a-012f-0eee-58d385a7bc34",
    slug: "the-fetish-folk-of-west-africa",
  },
  {
    uuid: "abf9d2d0-c62b-012f-2997-58d385a7bc34",
    slug: "the-history-of-slavery-and-the-slave-trade-ancient-and-modern",
  },
  {
    uuid: "56ff73e0-c62b-012f-0935-58d385a7bc34",
    slug: "the-present-state-of-the-cape-of-good-hope",
  },
  {
    uuid: "f32358b0-c62b-012f-df0e-58d385a7bc34",
    slug: "the-story-of-my-life-or-the-sunshine-and-shadow-of-seventy-years",
  },
  {
    uuid: "1d63c7f0-c62b-012f-98cf-58d385a7bc34",
    slug: "the-upholsterers-repository",
  },
  {
    uuid: "755fad00-c62b-012f-05dd-58d385a7bc34",
    slug: "travels-in-the-interior-of-southern-africa",
  },
  {
    uuid: "ee711e50-c62a-012f-e81a-58d385a7bc34",
    slug: "trije-labodje",
  },
  {
    uuid: "b839eb60-c62b-012f-a25e-58d385a7bc34",
    slug: "twenty-nine-years-work-among-negroes",
  },
  {
    uuid: "a605c390-c62b-012f-6246-58d385a7bc34",
    slug: "vidy-smolenska-i-borodinskago-polia",
  },
  {
    uuid: "06ac0e80-c62b-012f-2962-58d385a7bc34",
    slug: "vidy-goroda-s-peterburga",
  },
  {
    uuid: "11fe6cb0-c62b-012f-d797-58d385a7bc34",
    slug: "vospominanie-ob-otechestvennoi-voinie-1812-g",
  },
  {
    uuid: "e7690730-c62b-012f-ef9f-58d385a7bc34",
    slug: "album-of-photographs-of-landscapes-around-lankorona-izdebnik-presented",
  },
  {
    uuid: "30059bd0-c62b-012f-98b7-58d385a7bc34",
    slug: "views-of-the-adirondack-mountain-region",
  },
  {
    uuid: "193a7610-c62a-012f-31bf-58d385a7bc34",
    slug: "a-narrative-of-a-visit-to-the-mauritius-and-south-africa",
  },
  {
    uuid: "692a7010-c629-012f-5c74-58d385a7bc34",
    slug: "a-school-history-of-the-negro-race-in-america-from-1619-to-1890",
  },
  {
    uuid: "3b769f30-c62a-012f-7262-58d385a7bc34",
    slug: "afrique-australe-cap-de-bonne-esperance-congo-etc-afrique-orientale-mozamboque",
  },
  {
    uuid: "e870e150-c6f2-012f-9678-3c075448cc4b",
    slug: "american-theatre-wing-scrapbooks",
  },
  {
    uuid: "8686de30-c62a-012f-bf04-58d385a7bc34",
    slug: "american-garden-architecture-designed-and-executed-by-j-weidenmann",
  },
  {
    uuid: "c6de8d10-c62a-012f-20bb-58d385a7bc34",
    slug: "billy-rose-theatre-division-cabinet-file",
  },
  {
    uuid: "4784b9d0-c62a-012f-775b-58d385a7bc34",
    slug: "the-centennial-jubilee-of-freedom-at-columbus-ohio-saturday-september-22-1888",
  },
  {
    uuid: "01872af0-c62a-012f-6efc-58d385a7bc34",
    slug: "designs-for-the-pavillon-at-brighton",
  },
  {
    uuid: "fbae0250-c629-012f-e3d1-58d385a7bc34",
    slug: "domik-petra-velikago-v-vologdie",
  },
  {
    uuid: "1ef90d60-c62a-012f-45bc-58d385a7bc34",
    slug: "enter-wash-dress-fabrics-mdcccciiii",
  },
  {
    uuid: "d58fd020-c629-012f-d7e5-58d385a7bc34",
    slug: "fifty-years-in-the-gospel-ministry-twenty-seven-years-in-the-pastorate-sixteen",
  },
  {
    uuid: "bf1a89f0-c629-012f-f349-58d385a7bc34",
    slug: "kampen-fr-och-emot-negerslafveriet-ett-blad-ur-frenta-staternas-historia",
  },
  {
    uuid: "afe405c0-c629-012f-64f6-58d385a7bc34",
    slug: "nevsky-prospect-saint-petersburg",
  },
  {
    uuid: "6ec40350-c629-012f-2b83-58d385a7bc34",
    slug: "notice-sur-la-guine-franaise",
  },
  {
    uuid: "7387e1b0-0044-0130-ca14-58d385a7bc34",
    slug: "novogeorgievsk-1884",
  },
  {
    uuid: "5ac9fa60-c62a-012f-1f37-58d385a7bc34",
    slug: "official-history-of-the-first-african-baptist-church-philadelphia-pa",
  },
  {
    uuid: "95c36e70-c62a-012f-8ff5-58d385a7bc34",
    slug: "officium-beatae-mariae-virginis",
  },
  {
    uuid: "c5737bf0-c629-012f-df74-58d385a7bc34",
    slug: "opisanie-novago-imperatorskago-dvortsa-v-kremlie-moskovskom",
  },
  {
    uuid: "cb023b20-c629-012f-165d-58d385a7bc34",
    slug: "paradise-lost-by-john-milton-a-series-of-twelve-illustrations",
  },
  {
    uuid: "1395b990-c62a-012f-8040-58d385a7bc34",
    slug: "portraits-of-immigrants-at-ellis-island-new-york",
  },
  {
    uuid: "8138eb00-c62a-012f-b088-58d385a7bc34",
    slug: "russian-costume",
  },
  {
    uuid: "5d4d4d10-c629-012f-539a-58d385a7bc34",
    slug: "starks-history-and-guide-to-barbados-and-the-caribbee-islands-containing",
  },
  {
    uuid: "9701fc70-c6b5-012f-8f0d-58d385a7bc34",
    slug: "the-bruno-walter-papers",
  },
  {
    uuid: "63584720-c629-012f-114c-58d385a7bc34",
    slug: "the-general-education-board-an-account-of-its-activities-1902-1914",
  },
  {
    uuid: "e72f5480-c629-012f-a5df-58d385a7bc34",
    slug: "the-modern-voyager-and-traveller-through-europe-asia-africa-america",
  },
  {
    uuid: "7bc33320-c62a-012f-3341-58d385a7bc34",
    slug: "the-new-negro-an-interpretation",
  },
  {
    uuid: "8bcee2a0-c62a-012f-97f3-58d385a7bc34",
    slug: "the-pilgrims-progress-from-this-world-to-that-which-is-to-come",
  },
  {
    uuid: "415cd950-c62a-012f-4f0b-58d385a7bc34",
    slug: "the-tragedy-of-the-negro-in-america-a-condensed-history-of-the-enslavment",
  },
  {
    uuid: "54aac6a0-c62a-012f-5a77-58d385a7bc34",
    slug: "the-white-side-of-a-black-subject-enlarged-and-brought-down-to-date",
  },
  {
    uuid: "b9fa27f0-c629-012f-cbed-58d385a7bc34",
    slug: "travels-to-discover-the-source-of-the-nile-in-the-years-1768-1769-1770-1771-1772",
  },
  {
    uuid: "0e480370-c62a-012f-520d-58d385a7bc34",
    slug: "twelve-views-in-miami-and-montgomery-counties-ohio-1831",
  },
  {
    uuid: "24bf2e90-c62a-012f-62f8-58d385a7bc34",
    slug: "twenty-years-in-public-life-1890-1910-north-carolina-tennessee",
  },
  {
    uuid: "57a5f760-c629-012f-45ab-58d385a7bc34",
    slug: "voyages-au-prou-faits-dans-les-annes-1790-1794-collection-de-planches",
  },
  {
    uuid: "7106e230-c62a-012f-c9c2-58d385a7bc34",
    slug: "vues-des-ceremonies-les-plus-interessantes-du-couronnement-de-leurs-majestes",
  },
  {
    uuid: "aaa7f000-c629-012f-3d44-58d385a7bc34",
    slug: "wanderings-among-the-falashas-in-abyssinia-together-with-a-description",
  },
  {
    uuid: "9b1347c0-c629-012f-bd04-58d385a7bc34",
    slug: "weltchronik",
  },
  {
    uuid: "668ac5d0-c62a-012f-a589-58d385a7bc34",
    slug: "z-sanshshi-kyka",
  },
  {
    uuid: "60637380-c62a-012f-5679-58d385a7bc34",
    slug: "mammoth-prints-of-colorado-and-wyoming",
  },
  {
    uuid: "07cf8590-c62a-012f-73cd-58d385a7bc34",
    slug: "an-economic-study-of-negro-farmers-as-owners-tenants-and-croppers",
  },
  {
    uuid: "76e93530-c62a-012f-61fd-58d385a7bc34",
    slug: "an-explanation-of-the-works-of-the-tunnel-under-the-thames-from-rotherhithe",
  },
  {
    uuid: "3c651270-c628-012f-66c3-58d385a7bc34",
    slug: "a-colonisao-de-angola",
  },
  {
    uuid: "caced580-c628-012f-0a85-58d385a7bc34",
    slug: "at-the-back-of-the-black-mans-mind",
  },
  {
    uuid: "16661210-c628-012f-c852-58d385a7bc34",
    slug: "black-haiti-a-biography-of-africas-eldest-daughter",
  },
  {
    uuid: "066b2020-c629-012f-f58a-58d385a7bc34",
    slug: "book-of-shapes-with-description-of-the-works",
  },
  {
    uuid: "bed63c20-c628-012f-17f3-58d385a7bc34",
    slug: "cartographic-materials-from-the-emmet-collection-of-manuscripts-etc-relating",
  },
  {
    uuid: "52816780-c628-012f-671d-58d385a7bc34",
    slug: "chinese-paintings-on-rice-paper-illustrating-the-treatment-of-crime-in-china",
  },
  {
    uuid: "a6702e40-860a-0131-9f85-58d385a7b928",
    slug: "collection-of-world-war-i-photographs-issued-by-the-division-of-pictures",
  },
  {
    uuid: "b9975600-c628-012f-d863-58d385a7bc34",
    slug: "compositions-from-shelleys-prometheus-unbound",
  },
  {
    uuid: "e1451e10-c629-012f-6fdb-58d385a7bc34",
    slug: "david-mcneely-stauffer-collection",
  },
  {
    uuid: "afa33e80-c628-012f-7adf-58d385a7bc34",
    slug: "description-des-crmonies-et-des-ftes-qui-ont-eu-lieu-pour-le-couronnement",
  },
  {
    uuid: "161c50b0-c629-012f-ea22-58d385a7bc34",
    slug: "fasady-zdaniia-i-vnutrennii-vid-masterskikh-tipografii-vtorago-otdieleniia",
  },
  {
    uuid: "4d0f0c70-c628-012f-065a-58d385a7bc34",
    slug: "fifty-years-in-the-lombard-street-central-presbyterian-church",
  },
  {
    uuid: "ad974720-c62c-012f-5d36-58d385a7bc34",
    slug: "highland-notes",
  },
  {
    uuid: "3828e860-c629-012f-118f-58d385a7bc34",
    slug: "jugoslavija-opisi-i-slike-sa-zemljopisnom-kartom-u-prilogu",
  },
  {
    uuid: "fcde6cd0-c628-012f-0245-58d385a7bc34",
    slug: "leninu-21-ianvaria-1924",
  },
  {
    uuid: "42d85800-c628-012f-6fe0-58d385a7bc34",
    slug: "lights-and-shadows-of-african-history-by-the-author-of-peter-parleys-tales-2",
  },
  {
    uuid: "7c539350-c628-012f-f297-58d385a7bc34",
    slug: "mounseer-nongtongpaw-2",
  },
  {
    uuid: "0ba88da0-c629-012f-bd65-58d385a7bc34",
    slug: "narodnye-kartinky-religioznovo-i-nravstvennogo-soderzhaniia-i-vidy-stolits",
  },
  {
    uuid: "21193750-c629-012f-daea-58d385a7bc34",
    slug: "narrative-of-discovery-and-adventure-in-africa-from-the-earliest-ages",
  },
  {
    uuid: "f35cb070-c628-012f-7190-58d385a7bc34",
    slug: "narrative-of-a-five-years-expedition-against-the-revolted-negroes-of-surinam",
  },
  {
    uuid: "fbbaec20-c17d-0130-5695-58d385a7b928",
    slug: "new-york-city-architecture-parks-and-skyline-views",
  },
  {
    uuid: "2693a810-c629-012f-b385-58d385a7bc34",
    slug: "trait-lmentaire-de-chimie",
  },
  {
    uuid: "10fd51a0-c628-012f-bd43-58d385a7bc34",
    slug: "nouvelle-gographie-de-lle-dhati-contenant-des-notions-historiques",
  },
  {
    uuid: "31a94850-c629-012f-e99e-58d385a7bc34",
    slug: "oshielle-or-village-life-in-the-yoruba-country-from-the-journals-and-letters",
  },
  {
    uuid: "61893bb0-c628-012f-40af-58d385a7bc34",
    slug: "otryvki-iz-dnevnika-krasnogo-petrograda",
  },
  {
    uuid: "3dc12810-c629-012f-8392-58d385a7bc34",
    slug: "photographs-of-the-new-york-city-schools",
  },
  {
    uuid: "26282c60-c628-012f-7a5e-58d385a7bc34",
    slug: "portraits-of-russian-eastern-orthodox-priests",
  },
  {
    uuid: "1bd304b0-c628-012f-cbdd-58d385a7bc34",
    slug: "russkiia-kartiny",
  },
  {
    uuid: "668d4130-c628-012f-959a-58d385a7bc34",
    slug: "second-voyage-dans-linterieur-de-lafrique-par-le-cap-de-bonne-esperance-dans",
  },
  {
    uuid: "21680360-c628-012f-d39a-58d385a7bc34",
    slug: "souvenir-de-moscou",
  },
  {
    uuid: "47f265b0-c628-012f-ef69-58d385a7bc34",
    slug: "the-haitian-revolution-1791-to-1804",
  },
  {
    uuid: "370c88c0-c628-012f-1ddd-58d385a7bc34",
    slug: "the-common-objects-of-the-sea-shore-2",
  },
  {
    uuid: "a95ca0c0-c628-012f-46d5-58d385a7bc34",
    slug: "the-common-objects-of-the-sea-shore",
  },
  {
    uuid: "6b5f1660-c628-012f-149b-58d385a7bc34",
    slug: "the-old-south-and-the-new",
  },
  {
    uuid: "2baf7200-c628-012f-7f5a-58d385a7bc34",
    slug: "the-pantheon",
  },
  {
    uuid: "ee69e070-c628-012f-adfb-58d385a7bc34",
    slug: "tipy-naselenii-penzenskoi-gubernii",
  },
  {
    uuid: "f8273980-c628-012f-b392-58d385a7bc34",
    slug: "travels-researches-and-missionary-labors-during-an-eighteen-years-residence",
  },
  {
    uuid: "a3fe6010-c628-012f-c0b4-58d385a7bc34",
    slug: "vidy-goroda-vytegry-i-eia-okrestnostei",
  },
  {
    uuid: "0b13a3d0-c628-012f-3275-58d385a7bc34",
    slug: "wall-drawings-and-monuments-of-el-kab-2-3",
  },
  {
    uuid: "c63ac540-c628-012f-b1c7-58d385a7bc34",
    slug: "a-miscellaneous-collection-of-pamphlets-broadsides-etc-relating-to-the-projects",
  },
  {
    uuid: "83cd6770-c625-012f-cd17-58d385a7bc34",
    slug: "a-decade-of-negro-extension-work-1914-1924",
  },
  {
    uuid: "6eaa8e70-c627-012f-69d6-58d385a7bc34",
    slug: "banska-bystrica",
  },
  {
    uuid: "3bac87f0-c616-012f-383b-58d385a7bc34",
    slug: "billy-rose-theatre-collection-scripts",
  },
  {
    uuid: "8e49ec80-c627-012f-7cc9-58d385a7bc34",
    slug: "description-of-the-wilton-house-diptych",
  },
  {
    uuid: "eb9b6ad0-c625-012f-9f5b-58d385a7bc34",
    slug: "gerardi-meerman-et-doctorum-virorum-ad-eum-epistolae-atqueobservationes",
  },
  {
    uuid: "e9142220-c627-012f-7b8d-58d385a7bc34",
    slug: "history-of-the-american-negro-north-carolina-edition",
  },
  {
    uuid: "d4693a60-c625-012f-b97a-58d385a7bc34",
    slug: "imported-french-fabrics-e-meyer-co-paris-fall-1930-1931",
  },
  {
    uuid: "a005b7f0-c625-012f-16e5-58d385a7bc34",
    slug: "in-the-vanguard-of-a-race",
  },
  {
    uuid: "77390980-c626-012f-a4eb-58d385a7bc34",
    slug: "jiu-jing-suo-yin",
  },
  {
    uuid: "69ad5e60-c626-012f-f4fd-58d385a7bc34",
    slug: "jubilee-singers-number-after-forty-years-1871-1911",
  },
  {
    uuid: "6efee3b0-c6bf-012f-7125-58d385a7bc34",
    slug: "lake-ngami-or-explorations-and-discoveries-during-four-years-wanderings",
  },
  {
    uuid: "f589aa60-c625-012f-1687-58d385a7bc34",
    slug: "livre-de-divers-animaux-pour-dessus-de-portes-par-les-meilleurs-maitres",
  },
  {
    uuid: "4d296020-c6b4-012f-5e4b-58d385a7bc34",
    slug: "marion-morgan-dancers",
  },
  {
    uuid: "d48d1030-c627-012f-1c4a-58d385a7bc34",
    slug: "negro-housing-in-certain-virgina-cities",
  },
  {
    uuid: "7a99f900-c627-012f-5f7e-58d385a7bc34",
    slug: "original-drawings",
  },
  {
    uuid: "97a15c60-c627-012f-0b5e-58d385a7bc34",
    slug: "paradise-regaind",
  },
  {
    uuid: "fa5e9610-c625-012f-547c-58d385a7bc34",
    slug: "photographs-1950s",
  },
  {
    uuid: "74ab89f0-c627-012f-067b-58d385a7bc34",
    slug: "picture-of-slavery-in-the-united-states-of-america",
  },
  {
    uuid: "defa5fa0-c627-012f-cad7-58d385a7bc34",
    slug: "pioneers-in-west-africa",
  },
  {
    uuid: "49e0b730-c626-012f-1f8a-58d385a7bc34",
    slug: "prayer-book-in-dutch",
  },
  {
    uuid: "08dc84a0-c626-012f-95e4-58d385a7bc34",
    slug: "projet-de-deux-toiletes",
  },
  {
    uuid: "3f59f9b0-c626-012f-26c5-58d385a7bc34",
    slug: "recueil-de-differentes-tudes-danimaux-graves-daprs-les-desseins-des-plus",
  },
  {
    uuid: "88ec5b90-c625-012f-de92-58d385a7bc34",
    slug: "sovremenny-leningrad",
  },
  {
    uuid: "58fd7cc0-c626-012f-415f-58d385a7bc34",
    slug: "the-human-heart-illustrated-by-nine-figures-of-the-heart-representing",
  },
  {
    uuid: "7f25aa70-c627-012f-2b0e-58d385a7bc34",
    slug: "the-industrial-history-of-the-negro-race-of-the-united-states",
  },
  {
    uuid: "be3afa30-c627-012f-1a20-58d385a7bc34",
    slug: "the-land-of-the-white-helmet-lights-and-shadows-across-africa",
  },
  {
    uuid: "8479d930-c627-012f-3f07-58d385a7bc34",
    slug: "the-story-of-cotton-and-the-development-of-the-cotton-states",
  },
  {
    uuid: "a9249260-c625-012f-643d-58d385a7bc34",
    slug: "the-wild-sports-of-southern-africa",
  },
  {
    uuid: "b8ab1d50-c627-012f-bf38-58d385a7bc34",
    slug: "travels-in-south-america-during-the-years-1819-1820-1821-containing-an-account",
  },
  {
    uuid: "d970aa20-c625-012f-defc-58d385a7bc34",
    slug: "vetvstissimae",
  },
  {
    uuid: "c746a660-c625-012f-00f2-58d385a7bc34",
    slug: "a-week-of-cutting-hair",
  },
  {
    uuid: "e4520640-c627-012f-fc1f-58d385a7bc34",
    slug: "world-survey-conference-atlantic-city-january-7-to-10-1920",
  },
  {
    uuid: "ae16a890-c625-012f-2767-58d385a7bc34",
    slug: "srie-a-eaux-fortes",
  },
  {
    uuid: "639f1210-c626-012f-3fa6-58d385a7bc34",
    slug: "views-of-the-city-and-harbor-of-archangel",
  },
  {
    uuid: "feeb8b40-c625-012f-c46b-58d385a7bc34",
    slug: "la-traite-des-ngres-et-la-croisade-africaine",
  },
  {
    uuid: "c1cde0e0-c625-012f-6249-58d385a7bc34",
    slug: "les-travaux-publics-de-la-france-par-mm-f-lucas-et-v-fourni-ed-collignon-h",
  },
  {
    uuid: "a00b9730-749d-0131-b8ef-58d385a7b928",
    slug: "george-antheil-collecton-of-sound-recordings",
  },
  {
    uuid: "e2915050-c623-012f-984f-58d385a7bc34",
    slug: "a-geographical-present",
  },
  {
    uuid: "5b65abb0-c624-012f-275d-58d385a7bc34",
    slug: "ad-alexandrvm-vii-obelisci-aegyptiaci",
  },
  {
    uuid: "925fa970-c624-012f-53bf-58d385a7bc34",
    slug: "afrika-eine-allgemeine-landeskunde-von-prof-dr-wilhelm-sievers",
  },
  {
    uuid: "44fd4b80-c624-012f-ffbf-58d385a7bc34",
    slug: "esquisse-gnrale-des-langues-de-lafrique-et-plus",
  },
  {
    uuid: "5067b160-c625-012f-f801-58d385a7bc34",
    slug: "five-hundred-thousand-strokes-for-freedom",
  },
  {
    uuid: "148ba6c0-c624-012f-6970-58d385a7bc34",
    slug: "history-of-the-american-negro-virginia-edition",
  },
  {
    uuid: "73f6dec0-c624-012f-1ce8-58d385a7bc34",
    slug: "history-of-the-american-negro-and-his-institutions-georgia-edition",
  },
  {
    uuid: "e22255f0-c624-012f-0d10-58d385a7bc34",
    slug: "journal-of-the-proceedings-of-the-late-embassy-to-china",
  },
  {
    uuid: "ddd41d80-c623-012f-8adc-58d385a7bc34",
    slug: "life-in-abyssinia-being-notes-collected-during-three-years-residence-and-travels",
  },
  {
    uuid: "8ccc6c20-c624-012f-d189-58d385a7bc34",
    slug: "liure-de-la-conqueste-de-la-toison-dor-par-le-prince-iason-de-tessalie",
  },
  {
    uuid: "0fcf9420-c624-012f-4117-58d385a7bc34",
    slug: "our-negro-population-a-sociological-study-of-the-negroes-of-kansas-city-missouri",
  },
  {
    uuid: "7dfe8c90-c624-012f-594f-58d385a7bc34",
    slug: "photos-of-scenes-in-arizona-new-mexico",
  },
  {
    uuid: "2f707630-c624-012f-3d57-58d385a7bc34",
    slug: "russias-treasure-of-diamonds-and-precious-stones",
  },
  {
    uuid: "be76b010-c624-012f-2dcd-58d385a7bc34",
    slug: "savage-africa-being-the-narrative-of-a-tour-in-equatorial-southwestern",
  },
  {
    uuid: "5f30a740-c625-012f-7167-58d385a7bc34",
    slug: "south-american-costumes",
  },
  {
    uuid: "6f392550-c624-012f-5e40-58d385a7bc34",
    slug: "ten-thousand-miles-in-a-yacht-round-the-west-indies-and-up-the-amazon",
  },
  {
    uuid: "0b7a9b10-c624-012f-c8fe-58d385a7bc34",
    slug: "the-childs-anti-slavery-book-containing-a-few-words-about-american-slave",
  },
  {
    uuid: "55a9cfc0-c625-012f-f14c-58d385a7bc34",
    slug: "the-jubilee-singers-and-their-campaign-for-twenty-thousand-dollars",
  },
  {
    uuid: "49dbc7f0-c624-012f-07c0-58d385a7bc34",
    slug: "the-history-of-the-last-quarter-century-in-the-united-states-1870-1895",
  },
  {
    uuid: "64fbe040-c624-012f-07bf-58d385a7bc34",
    slug: "through-jamaica-with-a-kodak",
  },
  {
    uuid: "0399e400-c624-012f-c5f9-58d385a7bc34",
    slug: "travels-in-south-africa-undertaken-at-the-request-of-the-london-missionary",
  },
  {
    uuid: "fac3b310-c623-012f-e26c-58d385a7bc34",
    slug: "vidy-tikhvinskago-bolsh-monastyria-v-pamiat-piatisot-sic-1-lietiia-1383-1883",
  },
  {
    uuid: "69ca4b00-c624-012f-fe2f-58d385a7bc34",
    slug: "views-of-the-city-of-stalingrad",
  },
  {
    uuid: "cc89fad0-c624-012f-c4b5-58d385a7bc34",
    slug: "engravings-by-alfred-latour",
  },
  {
    uuid: "d5456f20-c624-012f-d7d3-58d385a7bc34",
    slug: "illustrations-for-mark-twains-following-the-equator-1897-original-drawings",
  },
  {
    uuid: "6b8a6a40-c625-012f-15ab-58d385a7bc34",
    slug: "isadora-duncan",
  },
  {
    uuid: "ff76a0a0-c623-012f-f920-58d385a7bc34",
    slug: "portraits",
  },
  {
    uuid: "00332790-c62b-012f-f4ba-58d385a7bc34",
    slug: "two-texts-by-giovanni-boccaccio",
  },
  {
    uuid: "601d8bc0-c624-012f-af87-58d385a7bc34",
    slug: "le-temple-dangkor-vat",
  },
  {
    uuid: "3c067920-c623-012f-153c-58d385a7bc34",
    slug: "a-system-of-aeronautics-comprehending-its-earliest-investigations-and-modern",
  },
  {
    uuid: "6c4e51f0-c623-012f-454b-58d385a7bc34",
    slug: "brazil-miscellaneous-collections",
  },
  {
    uuid: "1a884540-c623-012f-69b1-58d385a7bc34",
    slug: "civil-war-and-reconstruction-in-alabama",
  },
  {
    uuid: "1ef112b0-c623-012f-06d1-58d385a7bc34",
    slug: "dawn-in-darkest-africa",
  },
  {
    uuid: "120fb550-c623-012f-5175-58d385a7bc34",
    slug: "excursions-in-western-africa-and-narrative-of-a-campaign-in-kaffir-land",
  },
  {
    uuid: "ca584340-c622-012f-e12b-58d385a7bc34",
    slug: "humble-creatures-part-i-the-earthworm-and-the-common-housefly-in-eight-letters",
  },
  {
    uuid: "b9f6f580-c623-012f-45ba-58d385a7bc34",
    slug: "la-republique-dhaiti-telle-quelle-est-apercus-historique-geographique",
  },
  {
    uuid: "cf738540-c623-012f-c646-58d385a7bc34",
    slug: "narrative-of-a-journey-to-the-zoolu-country-in-south-africa",
  },
  {
    uuid: "ae14c230-c627-012f-5125-58d385a7bc34",
    slug: "nos-grandes-colonies",
  },
  {
    uuid: "d42d4dc0-c623-012f-b62e-58d385a7bc34",
    slug: "nouveau-voyage-aux-isles-de-lamerique",
  },
  {
    uuid: "bd31ebe0-0d99-0131-0d96-3c075448cc4b",
    slug: "ps-122-video-archive",
  },
  {
    uuid: "be0c4f90-c623-012f-bd70-58d385a7bc34",
    slug: "personal-reminiscences-of-the-anti-slavery-and-other-reforms-and-reformers",
  },
  {
    uuid: "5e40df40-c626-012f-8307-58d385a7bc34",
    slug: "the-philadelphia-negro-a-social-study-by-w-e-burghardt-du-bois-together",
  },
  {
    uuid: "271c1840-c623-012f-7d49-58d385a7bc34",
    slug: "photographic-views-of-the-construction-of-the-woolworth-building-233-broadway",
  },
  {
    uuid: "a2287e30-c623-012f-f638-58d385a7bc34",
    slug: "prince-dorus-or-flattery-put-out-of-countenance",
  },
  {
    uuid: "700db8a0-c623-012f-e917-58d385a7bc34",
    slug: "prospectus-of-the-new-rochelle-co-operative-business-league-incorporated-under",
  },
  {
    uuid: "cf58b740-c622-012f-1322-58d385a7bc34",
    slug: "psalterium",
  },
  {
    uuid: "39c61200-c6b5-012f-67bf-58d385a7bc34",
    slug: "punch",
  },
  {
    uuid: "46f734e0-c623-012f-1dfd-58d385a7bc34",
    slug: "southern-africa-a-geography-and-natural-history-of-the-country-colonies",
  },
  {
    uuid: "588963c0-c6c2-012f-d8b4-3c075448cc4b",
    slug: "systema-brahmanicum-liturgicum-mythologicum-civile",
  },
  {
    uuid: "8c5d7eb0-c623-012f-ffab-58d385a7bc34",
    slug: "the-liberty-bell",
  },
  {
    uuid: "943f00e0-c623-012f-b274-58d385a7bc34",
    slug: "the-ogowe-band-a-narrative-of-african-travel",
  },
  {
    uuid: "d9487480-c623-012f-abca-58d385a7bc34",
    slug: "the-west-indies-and-the-spanish-main",
  },
  {
    uuid: "4ae3a220-c623-012f-0770-58d385a7bc34",
    slug: "the-black-mans-burden-illustrated-by-portraits-and-views",
  },
  {
    uuid: "98909500-c623-012f-a248-58d385a7bc34",
    slug: "the-hierarchie-of-the-blessed-angells",
  },
  {
    uuid: "4f0493d0-c623-012f-91cc-58d385a7bc34",
    slug: "the-life-and-times-of-frederick-douglass-from-1817-1882",
  },
  {
    uuid: "d466f8d0-c622-012f-156e-58d385a7bc34",
    slug: "the-official-theatrical-world-of-colored-artists",
  },
  {
    uuid: "5368fe70-c623-012f-f295-58d385a7bc34",
    slug: "timbuktu-reise-durch-marokko-die-sahara-und-den-sudan-ausgefhrt-im-auftrage",
  },
  {
    uuid: "165b5a10-c623-012f-cffe-58d385a7bc34",
    slug: "vida-de-j-j-dessalines-gefe-de-los-negros-de-santo-domingo",
  },
  {
    uuid: "83e60fc0-c623-012f-2408-58d385a7bc34",
    slug: "vidy-g-totmy",
  },
  {
    uuid: "9741f4a0-c624-012f-8e43-58d385a7bc34",
    slug: "carl-h-pforzheimer-collection-of-shelley-and-his-circle",
  },
  {
    uuid: "f72edb80-c622-012f-83e7-58d385a7bc34",
    slug: "voyages-en-afrique-par-bruce-adanson-bonaparte-levaillant-mungo-park-burchell",
  },
  {
    uuid: "3fd39d40-c623-012f-cac8-58d385a7bc34",
    slug: "war-songs",
  },
  {
    uuid: "d6d5fe40-c62b-012f-37b6-58d385a7bc34",
    slug: "psalter-with-canticles-and-prayers",
  },
  {
    uuid: "2295e7d0-c624-012f-5587-58d385a7bc34",
    slug: "the-history-of-england",
  },
  {
    uuid: "78e20950-c624-012f-788e-58d385a7bc34",
    slug: "a-select-collection-of-caricatures",
  },
  {
    uuid: "d78cb4b0-c621-012f-b96a-58d385a7bc34",
    slug: "a-narrative-of-travels-in-northern-africa-in-the-years-1818-19-and-20",
  },
  {
    uuid: "459aa2f0-c622-012f-6cbd-58d385a7bc34",
    slug: "a-slaveholders-daughter",
  },
  {
    uuid: "98bbe910-c621-012f-6448-58d385a7bc34",
    slug: "akt-sdachi-pamiatnika-sooruzhennago-na-sredstva-selskago-naseleniia-gubernii",
  },
  {
    uuid: "529e2970-c621-012f-7bde-58d385a7bc34",
    slug: "bible",
  },
  {
    uuid: "81086b40-c621-012f-ed19-58d385a7bc34",
    slug: "bookplates",
  },
  {
    uuid: "710015b0-c621-012f-1356-58d385a7bc34",
    slug: "blgarski-baladi",
  },
  {
    uuid: "2f063be0-c623-012f-4930-58d385a7bc34",
    slug: "caricatures-collected-by-horace-walpole",
  },
  {
    uuid: "17d8db40-c622-012f-0bc0-58d385a7bc34",
    slug: "carta-ejecutoria",
  },
  {
    uuid: "4ef86080-c621-012f-8e67-58d385a7bc34",
    slug: "chroniques-martiniennes",
  },
  {
    uuid: "f02afb20-c621-012f-b104-58d385a7bc34",
    slug: "dance-images-of-gertrude-hoffmann",
  },
  {
    uuid: "b17f78f0-c622-012f-dc4c-58d385a7bc34",
    slug: "die-neue-ee",
  },
  {
    uuid: "5b500b40-c622-012f-d7fb-58d385a7bc34",
    slug: "en-guine",
  },
  {
    uuid: "37efd150-c624-012f-187c-58d385a7bc34",
    slug: "flos-florum-paradisi-and-letanie-gloriosissime-virginis-marie",
  },
  {
    uuid: "fc721470-c621-012f-638e-58d385a7bc34",
    slug: "fotografi-stienno-zhivopisi-v-bolshom-altarie-isaakevskago-kaedralnago-sobora",
  },
  {
    uuid: "4b4a10a0-c621-012f-a251-58d385a7bc34",
    slug: "fotografii-s-proekta-pravoslavnago-sobora-dlia-gor-revelia",
  },
  {
    uuid: "ec56eb40-c621-012f-e36d-58d385a7bc34",
    slug: "geographi-vnivers-tvm-veteris-tvm-nov-absolvtissimvm-opvs-dvobvs-volvminibvs",
  },
  {
    uuid: "5a1e59d0-c621-012f-7543-58d385a7bc34",
    slug: "histoire-complte-des-voyages-et-dcouvertes-en-afrique-depuis-les-sicles-les-plus",
  },
  {
    uuid: "757c7730-c622-012f-7e2b-58d385a7bc34",
    slug: "history-of-madagascar",
  },
  {
    uuid: "6ca73660-c621-012f-c18b-58d385a7bc34",
    slug: "how-to-solve-the-race-problem-the-proceedings-of-the-washington-conference",
  },
  {
    uuid: "63047b70-c621-012f-ad42-58d385a7bc34",
    slug: "in-africs-forest-and-jungle-or-six-years-among-the-yorubans",
  },
  {
    uuid: "a5482da0-c624-012f-f843-58d385a7bc34",
    slug: "inatomi-ryu-teppo-densho",
  },
  {
    uuid: "dfb7c140-c621-012f-c804-58d385a7bc34",
    slug: "kosviashcheniiu-chasovni-khrista-spasitelia-v-g-kazani-21-avgusta-1905-g",
  },
  {
    uuid: "2a7fb1c0-c626-012f-ff23-58d385a7bc34",
    slug: "la-plaisante-ioyevse-histoyre-du-grand-geant-gargantua-prochainement-reueue",
  },
  {
    uuid: "79b2ef80-c622-012f-50d7-58d385a7bc34",
    slug: "leaven-for-doughfaces",
  },
  {
    uuid: "3d837ac0-c622-012f-d436-58d385a7bc34",
    slug: "lilliputian-humorists",
  },
  {
    uuid: "32a65d60-c621-012f-8382-58d385a7bc34",
    slug: "marc-eidlitz-son-1854-1914",
  },
  {
    uuid: "28204dd0-c622-012f-27c3-58d385a7bc34",
    slug: "naar-de-antillen-en-venezuela",
  },
  {
    uuid: "241c9ce0-c622-012f-fb5d-58d385a7bc34",
    slug: "narrative-of-an-expedition-to-explore-the-river-zaire-usually-called-the-congo",
  },
  {
    uuid: "56113820-c622-012f-a5e3-58d385a7bc34",
    slug: "nigerian-studies-or-the-religious-and-political-system-of-the-yoruba",
  },
  {
    uuid: "100a9a80-c622-012f-4bd5-58d385a7bc34",
    slug: "oeuvre-de-tempesti",
  },
  {
    uuid: "49d02450-c622-012f-c483-58d385a7bc34",
    slug: "plamk",
  },
  {
    uuid: "f4a5afd0-c621-012f-9b50-58d385a7bc34",
    slug: "remingtons-rough-riders",
  },
  {
    uuid: "2a5212f0-c621-012f-58d8-58d385a7bc34",
    slug: "slavery-resolutions",
  },
  {
    uuid: "2e7d53b0-c621-012f-3151-58d385a7bc34",
    slug: "the-american-slave-trade-an-account-of-its-origin-growth-and-suppression",
  },
  {
    uuid: "b737a3f0-c6b6-012f-7d5f-58d385a7bc34",
    slug: "the-crisis",
  },
  {
    uuid: "7da1d880-c622-012f-e497-58d385a7bc34",
    slug: "the-suppressed-book-about-slavery-prepared-for-public-1857-never-published-until",
  },
  {
    uuid: "89440510-c622-012f-7eb1-58d385a7bc34",
    slug: "the-annual-meeting-and-convention-held-in-the-city-of-albany-new-york-may-26",
  },
  {
    uuid: "851f70e0-c622-012f-1070-58d385a7bc34",
    slug: "the-cruise-of-the-scythian-in-the-west-indies",
  },
  {
    uuid: "0436eec0-c622-012f-2111-58d385a7bc34",
    slug: "the-education-and-economic-development-of-the-negro-in-virginia",
  },
  {
    uuid: "1dc16e70-c624-012f-975a-58d385a7bc34",
    slug: "the-illustrated-london-novelist",
  },
  {
    uuid: "4e0da480-c62a-012f-8b48-58d385a7bc34",
    slug: "the-photographic-history-of-the-civil-war-thousands-of-scenes-photographed",
  },
  {
    uuid: "67b49960-c621-012f-e83b-58d385a7bc34",
    slug: "the-plantation-south-1934-1937",
  },
  {
    uuid: "396dc010-c622-012f-0a65-58d385a7bc34",
    slug: "thesaurus-sacrarum-historiaru-veteris-testamenti-et-novi-testamenti",
  },
  {
    uuid: "5205d7c0-c622-012f-d5af-58d385a7bc34",
    slug: "two-colored-women-with-the-american-expeditionary-forces",
  },
  {
    uuid: "98f334b0-c622-012f-ad3e-58d385a7bc34",
    slug: "uraltsy-ocherki-byta-uralskikh-kazakov",
  },
  {
    uuid: "8cfc6cf0-c621-012f-91ea-58d385a7bc34",
    slug: "vidy-g-velikago-ustiuga",
  },
  {
    uuid: "2032da40-c622-012f-c11e-58d385a7bc34",
    slug: "breviary",
  },
  {
    uuid: "8d3a0270-c61e-012f-9134-58d385a7bc34",
    slug: "a-journey-from-aleppo-to-jerusalem-at-easter-a-d-1697",
  },
  {
    uuid: "87035cf0-c61f-012f-4deb-58d385a7bc34",
    slug: "a-voyage-to-senegal-or-historical-philosophical-and-political-memoirs-relative",
  },
  {
    uuid: "47938d90-c61f-012f-62e4-58d385a7bc34",
    slug: "ain-bethbuch-linn-der-zehn-gebot-des-glaubens-des-vatters-unsers-und-des-ave",
  },
  {
    uuid: "6cfbfe40-c61f-012f-22d6-58d385a7bc34",
    slug: "albom-georgievskago-balaklavskago-monastyria-v-krymu",
  },
  {
    uuid: "a1d84400-c61f-012f-ecd3-58d385a7bc34",
    slug: "alphabetum-tibetanum-missionum-apostolicarum-commodo-editum",
  },
  {
    uuid: "b942c000-c616-012f-1776-58d385a7bc34",
    slug: "anita-arden-scrapbooks-1920-1996",
  },
  {
    uuid: "a123ed80-9a3f-0130-3e73-58d385a7b928",
    slug: "billy-rose-theatre-division-posters",
  },
  {
    uuid: "daeb9c30-c61e-012f-4239-58d385a7bc34",
    slug: "breve-trattato-delle-afflittioni-ditalia-et-del-conflitto-di-roma-con",
  },
  {
    uuid: "1e32d380-c61f-012f-d8cb-58d385a7bc34",
    slug: "brief-sketch-of-the-life-and-labors-of-rev-alexander-bettis-also-an-account",
  },
  {
    uuid: "ab30b170-c61e-012f-bb00-58d385a7bc34",
    slug: "the-classic-grounds-of-american-authors",
  },
  {
    uuid: "165ff300-c61f-012f-4904-58d385a7bc34",
    slug: "colonie-de-la-cte-divoire-cercle-du-bas-cavally-au-point-de-vue-politique",
  },
  {
    uuid: "837d9040-c61f-012f-2c5b-58d385a7bc34",
    slug: "commissio-spectabilis-et-generosi-viri-domini-laurentii-mauri-honorabilis-duche",
  },
  {
    uuid: "28d1ec70-c61f-012f-dcb0-58d385a7bc34",
    slug: "cuban-views",
  },
  {
    uuid: "e457e7a0-c61e-012f-8bcf-58d385a7bc34",
    slug: "de-angola-contra-costa-descripo-de-uma-viagem-atravez-do-continente-africano",
  },
  {
    uuid: "edcb69e0-c61f-012f-f052-58d385a7bc34",
    slug: "de-koulikoro-tombouctou-sur-la-canonnire",
  },
  {
    uuid: "a5ba2c70-c61f-012f-77db-58d385a7bc34",
    slug: "dlia-golosa",
  },
  {
    uuid: "25844540-c61f-012f-2e49-58d385a7bc34",
    slug: "dutchess-county-anti-slavery-society-executive-committee-minutes",
  },
  {
    uuid: "9e1c1060-c61f-012f-7fa8-58d385a7bc34",
    slug: "education-in-the-united-states-a-series-of-monographs",
  },
  {
    uuid: "e65d3d00-c625-012f-6152-58d385a7bc34",
    slug: "edward-clark-potter-papers",
  },
  {
    uuid: "fd980ca0-2561-0131-33bd-58d385a7bbd0",
    slug: "eiko-and-koma-video-archive",
  },
  {
    uuid: "4ec9efb0-c61f-012f-087e-58d385a7bc34",
    slug: "french-goldsmiths-designs-ca-1800",
  },
  {
    uuid: "0db13030-c621-012f-ed71-58d385a7bc34",
    slug: "heures-prsentes-a-madame-le-pelletier-intendante-de-la-generalit-de-soissons",
  },
  {
    uuid: "780f08b0-c61f-012f-c251-58d385a7bc34",
    slug: "histoire-ancienne-books-vi-x",
  },
  {
    uuid: "7bd713b0-c61e-012f-9a01-58d385a7bc34",
    slug: "history-of-the-colored-race-in-america",
  },
  {
    uuid: "2c9240d0-c61f-012f-8f78-58d385a7bc34",
    slug: "pictorial-humpty-dumpty",
  },
  {
    uuid: "1f4c5630-c621-012f-5906-58d385a7bc34",
    slug: "introduction-to-drawing-ships",
  },
  {
    uuid: "43435a60-c61f-012f-e832-58d385a7bc34",
    slug: "isadora-duncan-dancers-programs",
  },
  {
    uuid: "9653c1d0-c61f-012f-91c3-58d385a7bc34",
    slug: "jack-johnson-in-the-ring-and-out",
  },
  {
    uuid: "25a36230-0dc9-0131-9591-58d385a7bbd0",
    slug: "james-gossage-additions",
  },
  {
    uuid: "f03047c0-c61e-012f-5d67-58d385a7bc34",
    slug: "krilatiiat-iunak-prikazka",
  },
  {
    uuid: "40abd8e0-c621-012f-2745-58d385a7bc34",
    slug: "leo-seltzer-archive",
  },
  {
    uuid: "d1ca1440-c61e-012f-4a18-58d385a7bc34",
    slug: "livre-du-petit-artus-fils-du-bon-duc-jehan-de-bretiagne",
  },
  {
    uuid: "63087400-c62b-012f-e576-58d385a7bc34",
    slug: "lon-gontran-damas-photograph-collection",
  },
  {
    uuid: "f4c10b00-c61f-012f-1423-58d385a7bc34",
    slug: "mao-shi-ji-shi-san-shi-juan",
  },
  {
    uuid: "9262b2d0-c61f-012f-1a00-58d385a7bc34",
    slug: "miscellaneous-nineteenth-century-collections",
  },
  {
    uuid: "94d34940-c620-012f-a75e-58d385a7bc34",
    slug: "mon-roman-au-niger-roman-daventures",
  },
  {
    uuid: "7b766570-c620-012f-ed61-58d385a7bc34",
    slug: "negro-life",
  },
  {
    uuid: "5a98f740-c61f-012f-f0ee-58d385a7bc34",
    slug: "the-negroes-of-athens-georgia",
  },
  {
    uuid: "0b491670-c61f-012f-b46d-58d385a7bc34",
    slug: "officium-beatae-mariae-virginis-2",
  },
  {
    uuid: "1b0b7960-c621-012f-56d8-58d385a7bc34",
    slug: "onkel-toms-pastor-josiah-hensons-lefnadshistoria-fran-1789-till-1877-berattad-af",
  },
  {
    uuid: "42738e00-c6b9-012f-278b-58d385a7bc34",
    slug: "our-british-landscape-painters-from-samuel-scott-to-david-cox",
  },
  {
    uuid: "56e83e90-c61f-012f-248a-58d385a7bc34",
    slug: "our-old-folks",
  },
  {
    uuid: "aecba770-c61e-012f-b1e9-58d385a7bc34",
    slug: "out-of-the-ditch-a-true-story-of-an-ex-slave",
  },
  {
    uuid: "3c178190-c61f-012f-58e0-58d385a7bc34",
    slug: "pavlova-ballets",
  },
  {
    uuid: "d5ea1200-c61e-012f-e8f1-58d385a7bc34",
    slug: "psalterium-cum-antiphonario",
  },
  {
    uuid: "52655d00-c61f-012f-ac65-58d385a7bc34",
    slug: "recollections-of-seventy-years",
  },
  {
    uuid: "00fbbcb0-c61f-012f-36d2-58d385a7bc34",
    slug: "report-of-the-mayors-push-cart-commission",
  },
  {
    uuid: "ec8b4ca0-c61e-012f-41f5-58d385a7bc34",
    slug: "risunki-prinadlezhashchie-k-opisaniiu-koronovaniia-imperatritsy-ekateriny-ii",
  },
  {
    uuid: "ea3b9e20-c61f-012f-2666-58d385a7bc34",
    slug: "souvenir-program",
  },
  {
    uuid: "98ae2f70-c620-012f-b3e7-58d385a7bc34",
    slug: "stimpsons-boston-directory-containing-the-names-of-the-inhabitants",
  },
  {
    uuid: "f86fbe10-c621-012f-6b14-58d385a7bc34",
    slug: "the-british-west-indies-their-history-resources-and-progress",
  },
  {
    uuid: "e5f11790-c61f-012f-5aa0-58d385a7bc34",
    slug: "the-jerry-rescue-october-1-1851-delivered-before-the-onondaga-historical",
  },
  {
    uuid: "4aed3850-c61f-012f-a1e5-58d385a7bc34",
    slug: "the-lesser-antilles",
  },
  {
    uuid: "dff5fed0-c61e-012f-b2a4-58d385a7bc34",
    slug: "the-life-trial-and-execution-of-captain-john-brown-known-as-old-brown",
  },
  {
    uuid: "7f77dfe0-c61e-012f-bc10-58d385a7bc34",
    slug: "the-twenty-fourth-infantry-past-and-present-a-brief-history-of-the-regiment",
  },
  {
    uuid: "9d04c120-c61e-012f-c7e8-58d385a7bc34",
    slug: "the-colored-man-in-the-methodist-episcopal-church",
  },
  {
    uuid: "77b31b80-c61e-012f-1526-58d385a7bc34",
    slug: "the-cradle-of-the-deep-an-account-of-a-voyage-to-the-west-indies",
  },
  {
    uuid: "1a694780-c61f-012f-dcd8-58d385a7bc34",
    slug: "the-cradle-of-the-deep-an-account-of-a-voyage-to-the-west-indies-2",
  },
  {
    uuid: "129ce550-c61f-012f-6351-58d385a7bc34",
    slug: "the-history-of-dahomy-an-inland-kingdom-of-africa",
  },
  {
    uuid: "a08b2840-c61e-012f-a496-58d385a7bc34",
    slug: "the-history-of-jamaica-or-general-survey-of-the-antient-and-modern-state",
  },
  {
    uuid: "99ac37c0-c61e-012f-464c-58d385a7bc34",
    slug: "the-looking-glass-being-a-true-report-and-narrative-of-the-life-travels",
  },
  {
    uuid: "8a87fda0-c61f-012f-62a7-58d385a7bc34",
    slug: "the-slave-states-of-america",
  },
  {
    uuid: "a3d99010-c61e-012f-46bf-58d385a7bc34",
    slug: "tiko-le-ngrillon-aventures-dun-escalve-travers-lafrique",
  },
  {
    uuid: "dd7e5190-c61f-012f-36ba-58d385a7bc34",
    slug: "travels-in-africa-performed-during-the-years-1785-1786-and-1787-in-the-western",
  },
  {
    uuid: "e1f4fb90-c61f-012f-768e-58d385a7bc34",
    slug: "twelve-years-a-slave",
  },
  {
    uuid: "e8d38ec0-c61e-012f-2e1a-58d385a7bc34",
    slug: "various-sketches-of-shipping-designed-as-an-assistant-for-youth-towards-studying",
  },
  {
    uuid: "707879c0-c61f-012f-3354-58d385a7bc34",
    slug: "views-of-interesting-places-in-the-holy-land",
  },
  {
    uuid: "0a397da0-c621-012f-f0ea-58d385a7bc34",
    slug: "breviary-for-carthusian-use",
  },
  {
    uuid: "82d2d750-c620-012f-92a2-58d385a7bc34",
    slug: "lithographies",
  },
  {
    uuid: "034e8230-c621-012f-702a-58d385a7bc34",
    slug: "missal-of-san-petronio",
  },
  {
    uuid: "8d6f0cb0-c62b-012f-c69c-58d385a7bc34",
    slug: "synacharion-and-menologion",
  },
  {
    uuid: "746c0f00-c61f-012f-b6ab-58d385a7bc34",
    slug: "wappenbuch-book-of-heraldry-and-including-text-das-lublich-herkommen",
  },
  {
    uuid: "914d8d70-c61e-012f-37c4-58d385a7bc34",
    slug: "the-fishes-of-new-york-described-and-arranged",
  },
  {
    uuid: "94d478d0-c61e-012f-937b-58d385a7bc34",
    slug: "a-slaves-adventures-toward-freedom-not-fiction-but-the-true-story-of-a-struggle",
  },
  {
    uuid: "5ebbf250-c61d-012f-711c-58d385a7bc34",
    slug: "a-few-thoughts-on-this",
  },
  {
    uuid: "0ccee380-c61e-012f-5c85-58d385a7bc34",
    slug: "a-study-of-home-economics-education-in-teacher-training-institutions-for-negroes",
  },
  {
    uuid: "88ae02a0-c62c-012f-92f1-58d385a7bc34",
    slug: "american-architect-and-architecture",
  },
  {
    uuid: "a3fcce90-c61d-012f-6633-58d385a7bc34",
    slug: "amerique-septentrionale-vues-des-chutes-du-niagara",
  },
  {
    uuid: "037cc250-c61b-012f-656a-58d385a7bc34",
    slug: "lami-du-peuple-ou-le-publiciste-parisien",
  },
  {
    uuid: "5d3ef7e0-c61e-012f-46fe-58d385a7bc34",
    slug: "bible-stories-memorable-acts-of-the-ancient-patriarchs-judges-and-kings",
  },
  {
    uuid: "1d98f030-c61d-012f-6285-58d385a7bc34",
    slug: "bible-ot-genesis",
  },
  {
    uuid: "ccbfdea0-c61a-012f-862c-58d385a7bc34",
    slug: "c-g-a-oldendorps-geschichte-der-mission-der-evangelischen-bruder-auf-den",
  },
  {
    uuid: "2b9502e0-c61d-012f-efe5-58d385a7bc34",
    slug: "china-2-3",
  },
  {
    uuid: "38a1f4a0-c61e-012f-9ef3-58d385a7bc34",
    slug: "chinese-water-colors-illustrating-methods-of-punishment",
  },
  {
    uuid: "52a29330-c61e-012f-1521-58d385a7bc34",
    slug: "dahomey-and-the-dahomans",
  },
  {
    uuid: "fc594080-c61a-012f-205e-58d385a7bc34",
    slug: "de-jnsulis-inuentis",
  },
  {
    uuid: "7bd52e90-c61f-012f-6a97-58d385a7bc34",
    slug: "eaux-fortes-sur-paris",
  },
  {
    uuid: "fe213470-c61d-012f-f8de-58d385a7bc34",
    slug: "episodios-de-las-guerras-de-independencia-de-cuba-en-que-tomo-parte-principal",
  },
  {
    uuid: "4a477910-c61d-012f-db19-58d385a7bc34",
    slug: "fables-anciennes-et-modernes-adaptes-a-lusage-des-enfans",
  },
  {
    uuid: "3d6d1af0-c61d-012f-383b-58d385a7bc34",
    slug: "folk-song-of-the-american-negro",
  },
  {
    uuid: "271d77a0-c61e-012f-77a6-58d385a7bc34",
    slug: "histoire-complete-des-voyages-et-decouvertes-en-afrique",
  },
  {
    uuid: "a4509820-c620-012f-67be-58d385a7bc34",
    slug: "history-of-greece",
  },
  {
    uuid: "46afe260-c61d-012f-d2d7-58d385a7bc34",
    slug: "history-of-rome",
  },
  {
    uuid: "5502e6c0-c61d-012f-7145-58d385a7bc34",
    slug: "john-smith-albums",
  },
  {
    uuid: "d454fdc0-c61a-012f-2f40-58d385a7bc34",
    slug: "josephi-alexandri-furietti-de-musivis-ad-ss-patrem-benedictum-xiv",
  },
  {
    uuid: "39f20f20-c61d-012f-3a38-58d385a7bc34",
    slug: "lafrique-equatoriale-gabonais-pahouins-gallois-par-le-marquis-de-compiegne",
  },
  {
    uuid: "83c42f50-c61d-012f-341a-58d385a7bc34",
    slug: "lament",
  },
  {
    uuid: "a9c41c50-c623-012f-5509-58d385a7bc34",
    slug: "le-tour-du-monde",
  },
  {
    uuid: "8b0d4140-c61d-012f-54f6-58d385a7bc34",
    slug: "the-legion-of-liberty-and-force-of-truth-containing-the-thoughts-words",
  },
  {
    uuid: "06b58d20-c621-012f-2c7f-58d385a7bc34",
    slug: "liber-de-instructione-principum",
  },
  {
    uuid: "32760cc0-c61d-012f-85ba-58d385a7bc34",
    slug: "life-of-charles-t-walker-d-d-the-black-spurgeon-pastor-mt-olivet-baptist-church",
  },
  {
    uuid: "d0a954d0-c61a-012f-c96a-58d385a7bc34",
    slug: "lula-goins-of-kentucky-a-true-story-of-the-love-and-courtship-of-an-illinois",
  },
  {
    uuid: "5265e1e0-c624-012f-a393-58d385a7bc34",
    slug: "music-division-clipping-file",
  },
  {
    uuid: "714de600-c61e-012f-4e67-58d385a7bc34",
    slug: "octonaries-upon-the-vanitie-and-inconstancie-of-the-world",
  },
  {
    uuid: "1a50bfc0-c61d-012f-0b43-58d385a7bc34",
    slug: "officium-beatae-mariae-virginis-2-3",
  },
  {
    uuid: "edfb5510-c61d-012f-87bf-58d385a7bc34",
    slug: "opera-di-architectura",
  },
  {
    uuid: "dcae0190-c61a-012f-badd-58d385a7bc34",
    slug: "original-drawings-by-james-gillray",
  },
  {
    uuid: "44088e50-c621-012f-7ddf-58d385a7bc34",
    slug: "our-mutual-friend",
  },
  {
    uuid: "c5188670-c61d-012f-f543-58d385a7bc34",
    slug: "paintings-at-the-new-york-public-library",
  },
  {
    uuid: "746fcb40-c61e-012f-75b9-58d385a7bc34",
    slug: "passionale-seu-vitae-sanctorum-per-anni-circulum",
  },
  {
    uuid: "77d9aba0-c623-012f-a2ea-58d385a7bc34",
    slug: "robert-s-f-olden-collection",
  },
  {
    uuid: "f7573320-c61d-012f-3a66-58d385a7bc34",
    slug: "roman-de-la-rose",
  },
  {
    uuid: "a14671d0-c6ba-012f-6bf2-58d385a7bc34",
    slug: "russk-graver-chemesov-gelograficheskia-kopi-s-ego-proizveden-sdielannyia-po",
  },
  {
    uuid: "abd3db60-c61d-012f-12ce-58d385a7bc34",
    slug: "stories-of-black-folk-for-little-folk",
  },
  {
    uuid: "7c199c70-c61d-012f-77b5-58d385a7bc34",
    slug: "summer-excursion-routes-for-the-season-of-1874",
  },
  {
    uuid: "66f8e1b0-c61d-012f-d8c2-58d385a7bc34",
    slug: "sur-la-cte-dafrique-villes-brousses-fleuves-et-problmes-de-louest-africain",
  },
  {
    uuid: "59b7ddd0-c61e-012f-6cc2-58d385a7bc34",
    slug: "the-chinese-traveller",
  },
  {
    uuid: "21278270-c61d-012f-4e7e-58d385a7bc34",
    slug: "the-west-india-sketch-book-in-two-volumes-vol-i-ii",
  },
  {
    uuid: "316317c0-c61e-012f-21ce-58d385a7bc34",
    slug: "the-book-of-the-west-indies",
  },
  {
    uuid: "b2cef520-c61d-012f-0313-58d385a7bc34",
    slug: "the-cartoons-of-raffaelle-from-the-originals-in-hampton-court-palace",
  },
  {
    uuid: "a0655f10-c61d-012f-7976-58d385a7bc34",
    slug: "the-first-colored-baptist-church-in-north-america-constituted-at-savannah",
  },
  {
    uuid: "4f14ca70-c61e-012f-972b-58d385a7bc34",
    slug: "the-history-of-my-life-and-work",
  },
  {
    uuid: "a7503380-c61d-012f-6e87-58d385a7bc34",
    slug: "the-magic-box",
  },
  {
    uuid: "2a9a4700-c61e-012f-0a2d-58d385a7bc34",
    slug: "travels-in-south-africa-undertaken-at-the-request-of-the-missionary-society",
  },
  {
    uuid: "4beb1a70-c61e-012f-03a3-58d385a7bc34",
    slug: "travels-in-the-interior-of-africa-to-the-sources-of-the-senegal-and-gambia",
  },
  {
    uuid: "b6346120-c61d-012f-5551-58d385a7bc34",
    slug: "verscheyden-vervallen-gebouwen-so-binnen-als-buyten-romen",
  },
  {
    uuid: "351c6810-c61e-012f-e79e-58d385a7bc34",
    slug: "william-king-friend-and-champion-of-the-slaves",
  },
  {
    uuid: "016662d0-c61e-012f-8cf4-58d385a7bc34",
    slug: "albom-fotografii-prepodavatelei-i-uchenikov-imperatorskoi-akademii-khudozhestv",
  },
  {
    uuid: "f3e63fc0-c61d-012f-112c-58d385a7bc34",
    slug: "breviary-for-birgittine-use",
  },
  {
    uuid: "6e00bac0-c61e-012f-878f-58d385a7bc34",
    slug: "drawings-of-siege-weapons-tactics-etc",
  },
  {
    uuid: "98f5e830-c61d-012f-cc3a-58d385a7bc34",
    slug: "gradual-with-dedicatory-verse",
  },
  {
    uuid: "ee729f60-c61a-012f-ab5a-58d385a7bc34",
    slug: "leben-der-heiligen-altvter",
  },
  {
    uuid: "9c88a7b0-c61d-012f-a666-58d385a7bc34",
    slug: "prayers-for-feast-days",
  },
  {
    uuid: "58579200-c61d-012f-1291-58d385a7bc34",
    slug: "reproductive-prints-after-diego-velzquez",
  },
  {
    uuid: "d902b980-c61a-012f-9cd0-58d385a7bc34",
    slug: "the-cartoons-at-hampton-court",
  },
  {
    uuid: "2805f790-c61d-012f-d760-58d385a7bc34",
    slug: "the-generall-historie-of-virginia-new-england-and-the-summer-isles-2",
  },
  {
    uuid: "2f25ac00-c61d-012f-8127-58d385a7bc34",
    slug: "a-southern-planter-social-life-in-the-old-south",
  },
  {
    uuid: "faef2130-c61d-012f-e410-58d385a7bc34",
    slug: "the-stolen-children-a-narrative-compiled-from-authentic-sources",
  },
  {
    uuid: "1414cc20-c61e-012f-5686-58d385a7bc34",
    slug: "rawce",
  },
  {
    uuid: "4fabd5d0-c618-012f-692c-58d385a7bc34",
    slug: "35-ieharminct-verse",
  },
  {
    uuid: "48ee9f90-c618-012f-b78f-58d385a7bc34",
    slug: "a-brief-sketch-of-the-early-history-of-british-guiana-with-the-origin",
  },
  {
    uuid: "b84fdc60-c618-012f-0b5d-58d385a7bc34",
    slug: "a-campanha-dafrica",
  },
  {
    uuid: "95ae2ab0-c619-012f-1987-58d385a7bc34",
    slug: "la-cte-occidentale-dafrique",
  },
  {
    uuid: "a0f09460-c61a-012f-8317-58d385a7bc34",
    slug: "a-visit-to-london",
  },
  {
    uuid: "070ba3b0-c618-012f-c639-58d385a7bc34",
    slug: "advance-in-the-antilles",
  },
  {
    uuid: "8f0be6c0-4297-0132-fdd6-58d385a7bbd0",
    slug: "ambrotypes-of-students-of-fort-edward-institute-ca-1861",
  },
  {
    uuid: "72a959a0-c61a-012f-8045-58d385a7bc34",
    slug: "american-slave-trade",
  },
  {
    uuid: "9dd8f800-c61a-012f-17c2-58d385a7bc34",
    slug: "antiquits-mexicaines-relation-des-trois-expditions-du-capitaine-dupaix-ordonnes",
  },
  {
    uuid: "1e3f73e0-c6f4-012f-a4bd-58d385a7bc34",
    slug: "painting-and-sculpture-collection",
  },
  {
    uuid: "2c549740-c622-012f-51e3-58d385a7bc34",
    slug: "arthur-alfonso-schomburg-collection-graphic",
  },
  {
    uuid: "cbce85d0-c619-012f-56b9-58d385a7bc34",
    slug: "beschryving-der-nieuwlijks-uitgevonden-en-geoctrojeerde-slang-brand-spuiten",
  },
  {
    uuid: "89205af0-c619-012f-136f-58d385a7bc34",
    slug: "breviarium",
  },
  {
    uuid: "bbec36f0-c618-012f-c630-58d385a7bc34",
    slug: "cahier-de-vases-invents-et-dessins-par-forty-et-gravs-par-laurent-ier-iime",
  },
  {
    uuid: "343d2550-c618-012f-2568-58d385a7bc34",
    slug: "codex-antiquitatum-sive-speculum-antiquitatis",
  },
  {
    uuid: "b5cc0b70-c619-012f-c266-58d385a7bc34",
    slug: "collection-de-estampas-que-representan-los-principales-pasos-echos-y-prodigios",
  },
  {
    uuid: "03f05820-c618-012f-9a82-58d385a7bc34",
    slug: "crusading-in-the-west-indies",
  },
  {
    uuid: "6eaeae20-c61a-012f-3a88-58d385a7bc34",
    slug: "death-struggles-of-slavery-being-a-narrative-of-facts-and-incidents-which",
  },
  {
    uuid: "a1c56a80-c618-012f-3c15-58d385a7bc34",
    slug: "emblemata-volsinnighe-uytbeelsels-by-gabrielem-rollenhagium-uyt-andere-versamelt",
  },
  {
    uuid: "e952db80-c618-012f-1a6a-58d385a7bc34",
    slug: "exercise-journalier-du-chrestien",
  },
  {
    uuid: "09685fd0-c619-012f-95a5-58d385a7bc34",
    slug: "facta-et-dicta-memorabilia",
  },
  {
    uuid: "0d821650-c618-012f-ec94-58d385a7bc34",
    slug: "faits-relatifs-a-la-traite-des-noirs",
  },
  {
    uuid: "1098a430-c618-012f-db63-58d385a7bc34",
    slug: "florida-plantation-records-from-the-papers-of-george-noble-jones",
  },
  {
    uuid: "5edc1a70-c619-012f-fa89-58d385a7bc34",
    slug: "fotograficheskie-snimki-biustov-imperatorov-nikolaia-i-i-aleksandra-ii",
  },
  {
    uuid: "f4814b60-c617-012f-867f-58d385a7bc34",
    slug: "funff-osterpredigten-aus-dem-gesichte-ezechielis-am-37-capittel-gethan",
  },
  {
    uuid: "ffce92a0-c61a-012f-5537-58d385a7bc34",
    slug: "genet-family-papers",
  },
  {
    uuid: "a8b75c30-c618-012f-0882-58d385a7bc34",
    slug: "gertrude-hoffmann-clippings",
  },
  {
    uuid: "3d5fb400-c618-012f-13e8-58d385a7bc34",
    slug: "gleanings-in-africa-exhibiting-a-faithful-and-correct-view-of-the-manners",
  },
  {
    uuid: "ee767ae0-c617-012f-47ed-58d385a7bc34",
    slug: "gospel-lectionary",
  },
  {
    uuid: "c9bf6430-c617-012f-2de7-58d385a7bc34",
    slug: "het-leerzaam-huisraad-vertoond-in-vyftig-konstige-figuuren-met-godlyke-spreuken",
  },
  {
    uuid: "a5bb21a0-c619-012f-be7a-58d385a7bc34",
    slug: "historical-and-souvenir-journal-commemorating-the-forty-fourth-session",
  },
  {
    uuid: "6676df60-c61a-012f-057b-58d385a7bc34",
    slug: "horae-2",
  },
  {
    uuid: "064ef260-c619-012f-0191-58d385a7bc34",
    slug: "imperatorskaia-okhota-vo-vladieniiakh-lovichskago-kniazhestva-v-1884-g",
  },
  {
    uuid: "9bb83e90-c619-012f-cd2f-58d385a7bc34",
    slug: "in-the-tropics-or-scenes-and-incidents-of-west-indian-life",
  },
  {
    uuid: "24837be0-c61d-012f-4a7b-58d385a7bc34",
    slug: "lobi-ludolfi-alias-leutholf-dicti-historia-aethiopica-sive-brevis-succincta",
  },
  {
    uuid: "f1818190-c617-012f-d681-58d385a7bc34",
    slug: "istoricheskoe-opisanie-postroenia-v-moskvie-khrama-vo-imia-khrista-spasitelia",
  },
  {
    uuid: "16057240-c619-012f-73fd-58d385a7bc34",
    slug: "laffrique-et-le-peuple-affriquain-consideres-sous-tous-leurs-rapports-avec-notre",
  },
  {
    uuid: "d75b5490-c618-012f-8b26-58d385a7bc34",
    slug: "les-voyages-et-observations-dv-sievr-de-la-bovllaye-le-govz-gentil-homme-angevin",
  },
  {
    uuid: "bec38900-c619-012f-7bf5-58d385a7bc34",
    slug: "jain-invitation-scroll-vijnaptipatra-to-a-monk",
  },
  {
    uuid: "b1688e10-c61a-012f-d57d-58d385a7bc34",
    slug: "ludi-nuptiales-pro-matrimonio-archiducis-ferdinandi-comitis-tyrolis-cum-anna",
  },
  {
    uuid: "196db8a0-c618-012f-56c6-58d385a7bc34",
    slug: "merce-cunningham-at-black-mountain-college",
  },
  {
    uuid: "9c7f31f0-c618-012f-9dcd-58d385a7bc34",
    slug: "mexican-revolution-political-cartoons-by-wa-rogers-in-the-new-york-herald",
  },
  {
    uuid: "e65425f0-c618-012f-b235-58d385a7bc34",
    slug: "missal",
  },
  {
    uuid: "b22f84a0-c618-012f-a6d7-58d385a7bc34",
    slug: "my-old-kentucky-home",
  },
  {
    uuid: "0c8c3630-c619-012f-76b1-58d385a7bc34",
    slug: "my-work-and-public-sentiment",
  },
  {
    uuid: "fa29c6e0-c617-012f-54a2-58d385a7bc34",
    slug: "narrative-of-henry-watson-a-fugitive-slave-written-by-himself",
  },
  {
    uuid: "84b3c7b0-c618-012f-601d-58d385a7bc34",
    slug: "narrative-of-a-voyage-in-his-majestys-late-ship-alceste-to-the-yellow-sea",
  },
  {
    uuid: "8ba25670-c618-012f-8494-58d385a7bc34",
    slug: "negro-education-in-texas-special-activities-and-industrial-aid",
  },
  {
    uuid: "190dbbc0-c619-012f-47cc-58d385a7bc34",
    slug: "the-negro-problem-solved-or-africa-as-she-was-as-she-is-and-as-she-shall-be-her",
  },
  {
    uuid: "430ae7c0-c618-012f-b16f-58d385a7bc34",
    slug: "nubia-and-abyssinia-comprehending-their-civil-history-antiquities-arts-religion",
  },
  {
    uuid: "8c53ce10-c619-012f-449f-58d385a7bc34",
    slug: "officium-beatae-mariae-virginis-2-3-4",
  },
  {
    uuid: "ba197af0-0d99-0131-bd2e-3c075448cc4b",
    slug: "speaking-of-dancing-oral-history-project",
  },
  {
    uuid: "98ccedc0-c619-012f-f785-58d385a7bc34",
    slug: "pamiatnik-iz-turetskikh-orudii-v-s-peterburgie-ego-sooruzhenie-i-torzhestvennoe",
  },
  {
    uuid: "7eae0fc0-c618-012f-02e4-58d385a7bc34",
    slug: "papers-relating-to-captured-negroes-part-i-ii",
  },
  {
    uuid: "630f56a0-c61a-012f-aeb3-58d385a7bc34",
    slug: "photographs-of-the-russian-imperial-family-held-in-the-slavic-and-baltic",
  },
  {
    uuid: "9b93b520-c624-012f-9f2c-58d385a7bc34",
    slug: "pictures-bre-brok",
  },
  {
    uuid: "81b3ed60-c618-012f-e570-58d385a7bc34",
    slug: "pravoslavnaia-tserkov-v-gorodie-lodzi",
  },
  {
    uuid: "b56ffe60-c618-012f-e585-58d385a7bc34",
    slug: "proceedings-of-the-most-worshipful-hiram-grand-lodge-of-and-for-the-state",
  },
  {
    uuid: "ec8b6840-c618-012f-2875-58d385a7bc34",
    slug: "promotional-material-for-ballets-russes-diaghilev-american-tour",
  },
  {
    uuid: "aaf88970-c61a-012f-a5ce-58d385a7bc34",
    slug: "rays-of-sunlight-from-south-america",
  },
  {
    uuid: "f5b37d10-c618-012f-4564-58d385a7bc34",
    slug: "recueil-de-vues-des-lieux-principaux-de-la-colonie-francoise-de-saint-domingue",
  },
  {
    uuid: "c5036730-c619-012f-76fe-58d385a7bc34",
    slug: "rhetorica-christiana-ad-concionandi-et-orandi-vsvm-accommodata",
  },
  {
    uuid: "c596b800-c618-012f-67bf-58d385a7bc34",
    slug: "rosaras-chain-or-the-choice-of-life-a-poem-by-alicia-lefanu-niece-to-the-right",
  },
  {
    uuid: "02e1e700-c619-012f-b88a-58d385a7bc34",
    slug: "russian-types",
  },
  {
    uuid: "64184d30-c622-012f-d948-58d385a7bc34",
    slug: "science-et-vie",
  },
  {
    uuid: "4c40ff30-c618-012f-7b84-58d385a7bc34",
    slug: "shadows-on-the-wal",
  },
  {
    uuid: "76a46d60-c619-012f-5f31-58d385a7bc34",
    slug: "six-histoires-pour-la-prmiere-enfance-adaptes-maniere-faciliter-ltude",
  },
  {
    uuid: "6556cca0-c619-012f-1132-58d385a7bc34",
    slug: "social-life-in-old-virginia-before-the-war",
  },
  {
    uuid: "aedc5730-c618-012f-023a-58d385a7bc34",
    slug: "street-cries-of-an-old-southern-city",
  },
  {
    uuid: "b27dd860-c61e-012f-7272-58d385a7bc34",
    slug: "svedoanstva",
  },
  {
    uuid: "a7a17460-c61a-012f-9f89-58d385a7bc34",
    slug: "terzo-volvme-delle-navigationi-et-viaggi-nel-qvale-si-contengono-le-nauigationi",
  },
  {
    uuid: "85107310-c629-012f-590f-58d385a7bc34",
    slug: "the-century-illustrated-monthly-magazine",
  },
  {
    uuid: "9764cd40-c61a-012f-c96f-58d385a7bc34",
    slug: "the-florida-exiles-and-the-war-for-slavery",
  },
  {
    uuid: "1fc59f20-c618-012f-cdb0-58d385a7bc34",
    slug: "the-yosemite-book-a-description-of-the-yosemite-valley-and-the-adjacent-region",
  },
  {
    uuid: "b4560b10-c61a-012f-4359-58d385a7bc34",
    slug: "adventures-of-huckleberry-finn",
  },
  {
    uuid: "5828a240-c619-012f-6a00-58d385a7bc34",
    slug: "the-history-civil-and-commercial-of-the-british-west-indies",
  },
  {
    uuid: "af2e34b0-c619-012f-f35f-58d385a7bc34",
    slug: "the-looking-glass-a-true-history-of-the-early-years-of-an-artist",
  },
  {
    uuid: "fdd8ea50-c617-012f-49b4-58d385a7bc34",
    slug: "travels-from-the-cape-of-good-hope-into-the-interior-parts-of-africa-including",
  },
  {
    uuid: "1c7fa420-c618-012f-2af2-58d385a7bc34",
    slug: "uspenski-sobor-v-moskve",
  },
  {
    uuid: "0fc01960-c619-012f-a8d3-58d385a7bc34",
    slug: "vie-de-jesus",
  },
  {
    uuid: "598cdc30-c618-012f-0a5e-58d385a7bc34",
    slug: "visits-to-the-juvenile-library-or-knowledge-proved-to-be-the-source",
  },
  {
    uuid: "9f087ef0-c618-012f-d718-58d385a7bc34",
    slug: "the-voice-of-the-victor",
  },
  {
    uuid: "3a5b0570-c618-012f-5928-58d385a7bc34",
    slug: "voyage-pittoresque-dans-le-brsil",
  },
  {
    uuid: "12ea6670-c619-012f-7eea-58d385a7bc34",
    slug: "bible-with-prologues-and-interpretation-of-hebrew-names",
  },
  {
    uuid: "86309d30-c619-012f-badd-58d385a7bc34",
    slug: "book-of-hours",
  },
  {
    uuid: "a591e2b0-c618-012f-f4d4-58d385a7bc34",
    slug: "book-of-hours-2",
  },
  {
    uuid: "dd5c1d40-c618-012f-87fd-58d385a7bc34",
    slug: "book-of-hours-2-3",
  },
  {
    uuid: "78bf67d0-c618-012f-d133-58d385a7bc34",
    slug: "ducale",
  },
  {
    uuid: "37395e40-c618-012f-482c-58d385a7bc34",
    slug: "missal-2",
  },
  {
    uuid: "7b9ab880-c618-012f-4b17-58d385a7bc34",
    slug: "an-historical-account-of-the-black-empire-of-hayti",
  },
  {
    uuid: "a00a9280-c620-012f-1b8b-58d385a7bc34",
    slug: 291,
  },
  {
    uuid: "dd7c9bc0-c616-012f-d61f-58d385a7bc34",
    slug: "a-sabbath-scene",
  },
  {
    uuid: "b29a4760-c60d-012f-bef7-58d385a7bc34",
    slug: "a-history-of-the-west-indies-containing-the-natural-civil-and-ecclesiastical",
  },
  {
    uuid: "8050cb00-c617-012f-fc9e-58d385a7bc34",
    slug: "a-narrative-of-the-adventures-and-escape-of-moses-roper-from-american-slavery",
  },
  {
    uuid: "7d67bae0-c617-012f-53c2-58d385a7bc34",
    slug: "a-new-and-accurate-description-of-the-coast-of-guinea-divided-into-the-gold",
  },
  {
    uuid: "831ffb70-c616-012f-9b33-58d385a7bc34",
    slug: "a-peep-into-uncle-toms-cabin",
  },
  {
    uuid: "8028d6d0-c619-012f-37d0-58d385a7bc34",
    slug: "a-plan-of-the-city-of-hartford",
  },
  {
    uuid: "83470d20-c617-012f-5ef6-58d385a7bc34",
    slug: "a-voyage-in-the-west-indies-containing-various-observations-made-during",
  },
  {
    uuid: "ae79b240-c60d-012f-f42f-58d385a7bc34",
    slug: "africa-explored-or-a-judicious-abridgement-of-the-latest-and-most-authentic",
  },
  {
    uuid: "4dde8b10-f31a-0131-0d2a-58d385a7b928",
    slug: "american-student-of-art",
  },
  {
    uuid: "7cae0960-c616-012f-fbf0-58d385a7bc34",
    slug: "aunt-sally-or-the-cross-the-way-of-freedom",
  },
  {
    uuid: "b698c0f0-0d99-0131-b732-3c075448cc4b",
    slug: "bates-dance-festival-collection",
  },
  {
    uuid: "38cf21c0-c621-012f-0f23-58d385a7bc34",
    slug: "beauty-culture",
  },
  {
    uuid: "74cf6890-c617-012f-d977-58d385a7bc34",
    slug: "biblia-pauperum",
  },
  {
    uuid: "5dd90330-c617-012f-b82d-58d385a7bc34",
    slug: "biography-and-achievements-of-the-colored-citizens-of-chattanooga-1904",
  },
  {
    uuid: "f221dd30-c618-012f-611e-58d385a7bc34",
    slug: "brazil-1860-1900",
  },
  {
    uuid: "bf385650-c61a-012f-6b26-58d385a7bc34",
    slug: "casparis-barli",
  },
  {
    uuid: "bc9ad260-c60d-012f-1609-58d385a7bc34",
    slug: "crania-americana",
  },
  {
    uuid: "90d97880-c620-012f-b8d2-58d385a7bc34",
    slug: "dance",
  },
  {
    uuid: "b8d17e90-c617-012f-7720-58d385a7bc34",
    slug: "das-heilige-land-nach-seiner-ehemaligen-und-jetzigen-geographischen",
  },
  {
    uuid: "bba4d4e0-c617-012f-c50c-58d385a7bc34",
    slug: "devotae-aliquot-piae-et-perpulchrae-orationes-meditationes-et-gratiarum-actiones",
  },
  {
    uuid: "d427e4f0-c60d-012f-987d-58d385a7bc34",
    slug: "die-grunen-armpolypen",
  },
  {
    uuid: "9b56f670-c60d-012f-2dbd-58d385a7bc34",
    slug: "dramas-for-children-or-gentle-reproofs-for-their-faults",
  },
  {
    uuid: "38599c10-c616-012f-b453-58d385a7bc34",
    slug: "elements-dorfvrerie-diviss-en-duex-parties-de-cinquante-feuilles-chacune-composz",
  },
  {
    uuid: "b6cbebb0-c60d-012f-a0c8-58d385a7bc34",
    slug: "exercice-de-la-sainte-messe-et-loffice-de-la-vierge-a-paris",
  },
  {
    uuid: "25178d20-c617-012f-ce68-58d385a7bc34",
    slug: "fotografii-khersonisskago-khrama-bliz-sevastopolia",
  },
  {
    uuid: "995bee40-c6b3-012f-1759-58d385a7bc34",
    slug: "frederick-samuel-dellenbaugh-papers-1871-1934",
  },
  {
    uuid: "d494a900-c6e0-012f-20c0-3c075448cc4b",
    slug: "fugaku-hyakkei-2",
  },
  {
    uuid: "cdb839c0-c60d-012f-85b7-58d385a7bc34",
    slug: "genji-monogatari-sakaki-no-maki",
  },
  {
    uuid: "da39a600-c616-012f-0ba1-58d385a7bc34",
    slug: "harpers-weekly",
  },
  {
    uuid: "958207a0-c616-012f-75b2-58d385a7bc34",
    slug: "histoire-de-la-guerre-de-mhmed-ali-contre-la-porte-ottomane-en-syrie-et-en",
  },
  {
    uuid: "901a99b0-c60b-012f-cd60-58d385a7bc34",
    slug: "history-of-the-african-methodist-episcopal-church",
  },
  {
    uuid: "a6ac8670-c60d-012f-3eaa-58d385a7bc34",
    slug: "history-of-the-afro-american-group-of-the-episcopal-church",
  },
  {
    uuid: "60f16a40-c617-012f-a415-58d385a7bc34",
    slug: "history-of-the-united-states-from-the-earliest-discovery-of-america-to-the-end",
  },
  {
    uuid: "2b14f6b0-c617-012f-561d-58d385a7bc34",
    slug: "horae-2-3",
  },
  {
    uuid: "990c20c0-c60d-012f-56ea-58d385a7bc34",
    slug: "jyugyu-zu",
  },
  {
    uuid: "37edba70-c623-012f-d019-58d385a7bc34",
    slug: "the-keystone-a-journal-devoted-to-the-interests-of-the-jewelry-and-optical",
  },
  {
    uuid: "45cb2090-c617-012f-6342-58d385a7bc34",
    slug: "la-traverse-de-lafrique-du-zambze-au-congo-franais",
  },
  {
    uuid: "a227e5d0-c60d-012f-a0d4-58d385a7bc34",
    slug: "landlord-and-tenant-on-the-cotton-plantation",
  },
  {
    uuid: "36b25bc0-c617-012f-19ab-58d385a7bc34",
    slug: "les-voyages-du-sieur-le-maire-aux-iles-canaries-cap-verd-senegal-et-gambie",
  },
  {
    uuid: "8e98c1f0-c6b5-012f-818c-58d385a7bc34",
    slug: "magazines-and-newspapers",
  },
  {
    uuid: "eb13d130-c61d-012f-4d00-58d385a7bc34",
    slug: "mary-cassatt",
  },
  {
    uuid: "8e7949c0-c61d-012f-0aa3-58d385a7bc34",
    slug: "michelin-france",
  },
  {
    uuid: "913a7ea0-c617-012f-eefb-58d385a7bc34",
    slug: "migratory-farm-workers-in-the-atlantic-coast-stream",
  },
  {
    uuid: "97ea4820-85de-0131-90d9-58d385a7b928",
    slug: "miscellaneous-exhibit-items-music-division",
  },
  {
    uuid: "c4256a40-c617-012f-311d-58d385a7bc34",
    slug: "montjoie",
  },
  {
    uuid: "d75902c0-c616-012f-5d90-58d385a7bc34",
    slug: "my-southern-home-or-the-south-and-its-people",
  },
  {
    uuid: "9d6a3bf0-c60d-012f-eae7-58d385a7bc34",
    slug: "naauwkeurige-beschryvinge-van-malabar-en-choromandel",
  },
  {
    uuid: "d1eb09d0-c60d-012f-8917-58d385a7bc34",
    slug: "narrative-of-joanna-an-emancipated-slave-of-surinam",
  },
  {
    uuid: "8c7eabc0-c60b-012f-8675-58d385a7bc34",
    slug: "narrative-of-an-expedition-into-the-interior-of-africa-by-the-river-niger",
  },
  {
    uuid: "197bd860-c617-012f-95e3-58d385a7bc34",
    slug: "national-police-gazette-microform",
  },
  {
    uuid: "a4ae98d0-c60d-012f-23d7-58d385a7bc34",
    slug: "the-negro-world",
  },
  {
    uuid: "5abc92d0-c617-012f-cbdb-58d385a7bc34",
    slug: "negro-neighbors-bond-and-free-lessons-in-history-and-humanity",
  },
  {
    uuid: "b097e7e0-0d99-0131-7930-3c075448cc4b",
    slug: "new-york-public-library-for-the-performing-arts-public-program-dance-video",
  },
  {
    uuid: "7672a450-c616-012f-3230-58d385a7bc34",
    slug: "nuremberger-schonbart",
  },
  {
    uuid: "cbb9f9f0-c616-012f-5b36-58d385a7bc34",
    slug: "nuremberger-schonbart-2",
  },
  {
    uuid: "7328bc60-c616-012f-7f73-58d385a7bc34",
    slug: "officium-beatae-mariae-virginis-2-3-4-5",
  },
  {
    uuid: "cb5ea8b0-c60d-012f-f312-58d385a7bc34",
    slug: "one-hundred-years-history-of-the-2nd-batt-west-india-regiment-from-date",
  },
  {
    uuid: "b47710e0-c60d-012f-b8a6-58d385a7bc34",
    slug: "opera-carmina-epodes-carmen-saeculare-ars-poetica-epistolae-sermones",
  },
  {
    uuid: "c59d78f0-c60d-012f-a91a-58d385a7bc34",
    slug: "photographs-1917-1937",
  },
  {
    uuid: "42ed9c30-c617-012f-f86e-58d385a7bc34",
    slug: "the-pine-tree-mission",
  },
  {
    uuid: "6f0141e0-c617-012f-85e1-58d385a7bc34",
    slug: "piratas-de-la-america",
  },
  {
    uuid: "51b7e4c0-c617-012f-dac4-58d385a7bc34",
    slug: "pokhodnyi-ochag-i-vagon-kukhnya",
  },
  {
    uuid: "800a9890-c616-012f-0213-58d385a7bc34",
    slug: "precis-historique-de-la-traite-des-noirs-et-de-lesclavage-colonial-contenant",
  },
  {
    uuid: "f86d1270-c616-012f-6464-58d385a7bc34",
    slug: "psalterium-hebreum-grec-arabic-chalde-c-tribus-latinus-terpretatibus-glossis",
  },
  {
    uuid: "99476e50-c60b-012f-caa0-58d385a7bc34",
    slug: "quinze-histoires-dedgar-po",
  },
  {
    uuid: "a88256c0-c60d-012f-ba7e-58d385a7bc34",
    slug: "red-rubber-the-story-of-the-rubber-slave-trade-flourishing-on-the-congo",
  },
  {
    uuid: "91653ae0-c607-012f-435b-58d385a7bc34",
    slug: "schuyler-family-photograph-collection",
  },
  {
    uuid: "b8a4e270-c60d-012f-ddb9-58d385a7bc34",
    slug: "series-of-advertising-cards-issued-by-arbuckle-bros-coffee-company-each",
  },
  {
    uuid: "e438b530-c616-012f-3739-58d385a7bc34",
    slug: "shadow-and-sunshine",
  },
  {
    uuid: "c9764380-c60d-012f-50e9-58d385a7bc34",
    slug: "slave-manifests-and-auction-receipts-new-orleans-1861-invoices-and-sales-slips",
  },
  {
    uuid: "768683b0-c61a-012f-eb1b-58d385a7bc34",
    slug: "the-history-of-prince-lee-boo-to-which-is-added-the-life-of-paul-cuffee-a-man",
  },
  {
    uuid: "ae2d44d0-c617-012f-eae5-58d385a7bc34",
    slug: "the-pennsylvania-gazette",
  },
  {
    uuid: "e72fa6a0-c616-012f-76f2-58d385a7bc34",
    slug: "the-republican-party-and-the-afro-american",
  },
  {
    uuid: "9f843010-c60d-012f-1722-58d385a7bc34",
    slug: "the-south",
  },
  {
    uuid: "895bff00-c616-012f-0809-58d385a7bc34",
    slug: "the-south-in-the-building-of-the-nation",
  },
  {
    uuid: "f2c0b1a0-c627-012f-dcc5-58d385a7bc34",
    slug: "the-judge",
  },
  {
    uuid: "c705e180-c617-012f-89ad-58d385a7bc34",
    slug: "the-pantheon-or-ancient-history-of-the-gods-of-greece-and-rome",
  },
  {
    uuid: "f8d50600-c61a-012f-bcd6-58d385a7bc34",
    slug: "the-works-of-william-makepeace-thackeray",
  },
  {
    uuid: "86878e70-c60b-012f-aaab-58d385a7bc34",
    slug: "titustown-a-community-of-negro-homes",
  },
  {
    uuid: "c580a820-c616-012f-c084-58d385a7bc34",
    slug: "translatio-inclyte-civitatis-ianue",
  },
  {
    uuid: "33ebcd70-c617-012f-79fe-58d385a7bc34",
    slug: "travels-through-central-africa-to-timbuctoo-and-across-the-great-desert",
  },
  {
    uuid: "be272ae0-c617-012f-500c-58d385a7bc34",
    slug: "trinidad-then-and-now-being-a-series-of-sketches-in-connection-with-the-progress",
  },
  {
    uuid: "c112fbf0-c617-012f-39bb-58d385a7bc34",
    slug: "twentieth-century-jamaica",
  },
  {
    uuid: "9267c3d0-c60b-012f-bb74-58d385a7bc34",
    slug: "twenty-two-years-a-slave-and-forty-years-a-freeman-embracing-a-correspondence",
  },
  {
    uuid: "280ac990-c617-012f-5949-58d385a7bc34",
    slug: "vaticinia-pontificum",
  },
  {
    uuid: "7aa4f2a0-c617-012f-6cc2-58d385a7bc34",
    slug: "vaticinia-pontificum-2",
  },
  {
    uuid: "83078250-c60b-012f-b888-58d385a7bc34",
    slug: "voice-of-the-press-on-the-new-york-arcade-railway-115-broadway-1886",
  },
  {
    uuid: "cfb8b2a0-c60d-012f-9fe8-58d385a7bc34",
    slug: "which-one-and-other-ante-bellum-days",
  },
  {
    uuid: "13180ce0-f662-0131-fb89-58d385a7b928",
    slug: "william-sawrey-gilpin-prints",
  },
  {
    uuid: "95f5c0b0-c6da-012f-536f-58d385a7bc34",
    slug: "yokohama-kaik-kenbunshi",
  },
  {
    uuid: "2e2676f0-c617-012f-8179-58d385a7bc34",
    slug: "armorial",
  },
  {
    uuid: "c8a55350-c616-012f-8d0d-58d385a7bc34",
    slug: "armorial-2",
  },
  {
    uuid: "31087840-c617-012f-d5b1-58d385a7bc34",
    slug: "emblemata",
  },
  {
    uuid: "97a43a10-c60b-012f-07ce-58d385a7bc34",
    slug: "frontispieces-addresses-rebuses-and-various-subjects",
  },
  {
    uuid: "7056c8e0-c616-012f-8610-58d385a7bc34",
    slug: "psalter",
  },
  {
    uuid: "401363a0-c617-012f-2d92-58d385a7bc34",
    slug: "a-general-description-of-the-people-of-africa-including-a-more-particular",
  },
  {
    uuid: "30d4fd20-c616-012f-913c-58d385a7bc34",
    slug: "a-souvenir-of-ivanhoe",
  },
  {
    uuid: "018bd5e0-c617-012f-d0e7-58d385a7bc34",
    slug: "travers-lasie-centrale",
  },
  {
    uuid: "63294b50-c60a-012f-bfa1-58d385a7bc34",
    slug: "a-voyage-to-africa-with-some-account-of-the-manners-and-customs-of-the-dahomian",
  },
  {
    uuid: "adcf7c90-c60a-012f-ee5a-58d385a7bc34",
    slug: "abeceda",
  },
  {
    uuid: "b8bdd280-c60a-012f-5794-58d385a7bc34",
    slug: "africa-redeemed",
  },
  {
    uuid: "a0c96090-c60a-012f-6fdc-58d385a7bc34",
    slug: "album-of-drawings-of-sioux-indians",
  },
  {
    uuid: "09158500-c60b-012f-3e52-58d385a7bc34",
    slug: "america-being-the-latest-and-most-accurate-description-of-the-nevv-vvorld",
  },
  {
    uuid: "bd6ead40-c60a-012f-a42a-58d385a7bc34",
    slug: "american-music",
  },
  {
    uuid: "673a77e0-c616-012f-20c9-58d385a7bc34",
    slug: "american-homes-and-gardens",
  },
  {
    uuid: "650c9050-c60b-012f-b97a-58d385a7bc34",
    slug: "an-account-of-five-aerial-voyages-in-scotland",
  },
  {
    uuid: "56bc0460-c60a-012f-1df0-58d385a7bc34",
    slug: "an-account-of-the-rosetta-stone-in-three-languages-which-was-brought-to-england",
  },
  {
    uuid: "363d7630-c60a-012f-cfdc-58d385a7bc34",
    slug: "an-appeal-in-favor-of-that-class-of-americans-called-africans",
  },
  {
    uuid: "1f1027d0-c60b-012f-4e68-58d385a7bc34",
    slug: "oxmantown-collection-of-west-african-art",
  },
  {
    uuid: "c9f04b90-c6f6-012f-ab90-3c075448cc4b",
    slug: "athanasii-kircheri-oedipvs-aegyptiacvs",
  },
  {
    uuid: "71337370-4283-0132-3534-58d385a7b928",
    slug: "australian-aboriginals",
  },
  {
    uuid: "e6e78280-c609-012f-2902-58d385a7bc34",
    slug: "aux-antilles",
  },
  {
    uuid: "5e5490e0-2bd3-0132-f353-58d385a7b928",
    slug: "billy-rose-theatre-division-periodicals-file",
  },
  {
    uuid: "0c167fc0-c6f4-012f-fdda-58d385a7bc34",
    slug: "c-w-mcalpin-collection",
  },
  {
    uuid: "2cab8f80-42a1-0132-470e-58d385a7b928",
    slug: "cabinet-card-views-of-mexico",
  },
  {
    uuid: "f1f1f7f0-c60a-012f-aadc-58d385a7bc34",
    slug: "the-castle-gavotte",
  },
  {
    uuid: "ea24fee0-c60a-012f-e43a-58d385a7bc34",
    slug: "chicagoan",
  },
  {
    uuid: "10488690-c60a-012f-3616-58d385a7bc34",
    slug: "church-of-the-crucifixion-philadelphia-pa-semi-centennial-may-1847-may-1897",
  },
  {
    uuid: "71e178b0-428d-0132-d098-58d385a7bbd0",
    slug: "collection-of-9-cyanotype-prints-from-the-yolo-base-line-survey",
  },
  {
    uuid: "c8496ca0-c619-012f-fb7e-58d385a7bc34",
    slug: "comdia-illustr",
  },
  {
    uuid: "1be58100-c60a-012f-3201-58d385a7bc34",
    slug: "congestorium-artificiose-memorie",
  },
  {
    uuid: "9f2a76b0-c60a-012f-2d57-58d385a7bc34",
    slug: "de-nieuwe-en-onbekende-weereld",
  },
  {
    uuid: "4a9036a0-c60b-012f-9871-58d385a7bc34",
    slug: "die-griechische-plastik",
  },
  {
    uuid: "343813b0-c60b-012f-e42b-58d385a7bc34",
    slug: "discorsi-e-dimostrazioni-matematiche",
  },
  {
    uuid: "5e1f8550-c60b-012f-2d43-58d385a7bc34",
    slug: "door-west-indi-antillen-panama-venezuela-britsch-guyana-suriname",
  },
  {
    uuid: "da6ff060-c60a-012f-d1e8-58d385a7bc34",
    slug: "du-niger-au-golfe-de-guine-par-le-pays-de-kong-et-le-mossi-par-le-capitaine",
  },
  {
    uuid: "7ae1a480-c60a-012f-f705-58d385a7bc34",
    slug: "elmens-de-la-philosophie-de-neuton",
  },
  {
    uuid: "d707e8a0-c617-012f-a74a-58d385a7bc34",
    slug: "encyclopdie-ou-dictionnaire-raisonn-des-sciences-des-arts-et-des-mtiers",
  },
  {
    uuid: "49818dc0-c60a-012f-4c89-58d385a7bc34",
    slug: "excursions-daguerriennes-2",
  },
  {
    uuid: "e4f3bd10-c60a-012f-145a-58d385a7bc34",
    slug: "four-years-residence-in-the-west-indies",
  },
  {
    uuid: "173720c0-c60b-012f-1ac4-58d385a7bc34",
    slug: "from-freedom-to-slavery",
  },
  {
    uuid: "9d6bd5e0-c60a-012f-fb28-58d385a7bc34",
    slug: "greater-new-york-baby-week-june-20-26-1914-purpose-to-reduce-the-toll",
  },
  {
    uuid: "94630ee0-c60b-012f-8fd8-58d385a7bc34",
    slug: "gustav-scholer-papers",
  },
  {
    uuid: "1fb758c0-c6b3-012f-b01d-58d385a7bc34",
    slug: "harry-a-williamson-papers",
  },
  {
    uuid: "601445e0-c60b-012f-e5dd-58d385a7bc34",
    slug: "histoire-de-lisle-espagnole-ou-de-s-domingue-ecrite-particulierement",
  },
  {
    uuid: "f856a3c0-0768-0131-347a-58d385a7bbd0",
    slug: "the-history-of-america",
  },
  {
    uuid: "04352c30-c60a-012f-46b3-58d385a7bc34",
    slug: "history-of-morehouse-college-written-on-the-authority-of-the-board-of-trustees",
  },
  {
    uuid: "664354b0-c60a-012f-3d8e-58d385a7bc34",
    slug: "history-of-the-ame-zion-church-in-america-founded-in-1796-in-the-city-of-new",
  },
  {
    uuid: "5c72bb70-c60b-012f-3324-58d385a7bc34",
    slug: "homes-of-the-freed",
  },
  {
    uuid: "e21e8f80-c607-012f-cabd-58d385a7bc34",
    slug: "hypnerotomachia-poliphili-2",
  },
  {
    uuid: "074646a0-c60a-012f-7eda-58d385a7bc34",
    slug: "kliedzosie-korpusi",
  },
  {
    uuid: "f3361080-c609-012f-daf6-58d385a7bc34",
    slug: "koyasu-monogatari",
  },
  {
    uuid: "5a92e8e0-c60a-012f-2b55-58d385a7bc34",
    slug: "kurt-fisher-haitian-history-collection-graphic",
  },
  {
    uuid: "092e7130-c60a-012f-0611-58d385a7bc34",
    slug: "lafrique-quatoriale-okanda-bangouens-osyba",
  },
  {
    uuid: "bbc80750-c60a-012f-5f9d-58d385a7bc34",
    slug: "letters-written-during-a-tour-through-northern-and-eastern-states-of-america",
  },
  {
    uuid: "8a0d9880-c60a-012f-d5fa-58d385a7bc34",
    slug: "livy-3rd-decade",
  },
  {
    uuid: "9dc06700-c606-012f-6172-58d385a7bc34",
    slug: "loie-fuller-notebooks-and-letters-1907-1911",
  },
  {
    uuid: "32a34e20-c60b-012f-ff70-58d385a7bc34",
    slug: "los-proverbios",
  },
  {
    uuid: "e8629400-c60a-012f-0bfe-58d385a7bc34",
    slug: "ma",
  },
  {
    uuid: "754e8cb0-c6e0-012f-a99e-58d385a7bc34",
    slug: "maps-of-south-america",
  },
  {
    uuid: "708c0530-c619-012f-ad37-58d385a7bc34",
    slug: "martin-j-gross-collection-of-selected-manuscripts-of-voltaire-1727-1778",
  },
  {
    uuid: "bc9c1250-c61d-012f-fa7a-58d385a7bc34",
    slug: "meta-warrick-fuller-photograph-collection",
  },
  {
    uuid: "02036a60-c60a-012f-a0d2-58d385a7bc34",
    slug: "migratory-cotton-pickers-in-arizona-by-malcolm-brown-and-orin-cassmore-under",
  },
  {
    uuid: "e53c1980-c609-012f-d5f6-58d385a7bc34",
    slug: "modern-history-or-the-present-state-of-all-nations",
  },
  {
    uuid: "a49114a0-c622-012f-155a-58d385a7bc34",
    slug: "music-division-uncataloged-program-file",
  },
  {
    uuid: "d7190380-c60a-012f-4f6c-58d385a7bc34",
    slug: "my-miss-nancy",
  },
  {
    uuid: "57557540-c60b-012f-9515-58d385a7bc34",
    slug: "my-life-and-work",
  },
  {
    uuid: "1be39b80-c60b-012f-b3a8-58d385a7bc34",
    slug: "naboths-vineyard-the-dominican-republic-1844-1924",
  },
  {
    uuid: "e68e5820-c60a-012f-1669-58d385a7bc34",
    slug: "der-negeraufstand-auf-jamaica-oder-todeskampfe-des-sclaventhums",
  },
  {
    uuid: "f8faf130-c60a-012f-6c2c-58d385a7bc34",
    slug: "new-york-streets-and-icons",
  },
  {
    uuid: "2a38e100-c60b-012f-22e0-58d385a7bc34",
    slug: "new-travels-into-the-interior-parts-of-africa-by-the-way-of-the-cape-of-good",
  },
  {
    uuid: "a943fb40-c60a-012f-4a99-58d385a7bc34",
    slug: "nova-pentas-colleactionis-suae-craniorum-diversarum-gentium-tanquam-complementum",
  },
  {
    uuid: "3fe23e20-c60b-012f-663d-58d385a7bc34",
    slug: "orbis-habitabilis-oppida-et-vestitus-centenario-numero-complexa-summo-studio",
  },
  {
    uuid: "def2ff00-c60a-012f-9962-58d385a7bc34",
    slug: "paradise-regaind-a-poem-in-four-books-to-which-is-added-samson-agonistes",
  },
  {
    uuid: "366ae180-45ac-0132-f41b-58d385a7b928",
    slug: "peruvian-portraits",
  },
  {
    uuid: "63815c00-c60b-012f-c16e-58d385a7bc34",
    slug: "pervyi-sviatoi-i-serdechnyi-dolg-vernopoddannykh-russkago-tsaria",
  },
  {
    uuid: "40cdb0d0-c60a-012f-fb4a-58d385a7bc34",
    slug: "physiognomy-of-tropical-vegetation-in-south-america-a-series-of-views",
  },
  {
    uuid: "145955b0-c60a-012f-fbf9-58d385a7bc34",
    slug: "promissio-of-doge-tron",
  },
  {
    uuid: "c7e141b0-c61f-012f-667e-58d385a7bc34",
    slug: "the-publishers-weekly-microform-the-american-book-trade-journal",
  },
  {
    uuid: "45e46360-c60a-012f-f676-58d385a7bc34",
    slug: "repository-of-arts-literature-fashions-etc",
  },
  {
    uuid: "275bce90-c60b-012f-636d-58d385a7bc34",
    slug: "sansui-ryakugashiki",
  },
  {
    uuid: "f4074490-c620-012f-b62a-58d385a7bc34",
    slug: "scientific-american",
  },
  {
    uuid: "208ff220-c60b-012f-ec86-58d385a7bc34",
    slug: "shadow-land-stories-of-the-south",
  },
  {
    uuid: "e3961630-c609-012f-206f-58d385a7bc34",
    slug: "silvia-dubois-now-116-years-old",
  },
  {
    uuid: "96ae1570-c60d-012f-8066-58d385a7bc34",
    slug: "song-slides-reproductions-of-lantern-slides-illustrating-early-20th-century",
  },
  {
    uuid: "4edb4c40-c60a-012f-6dd4-58d385a7bc34",
    slug: "specimen-of-leavenworths-patent-wood-type",
  },
  {
    uuid: "26fd6800-c609-012f-dc85-58d385a7bc34",
    slug: "stolitsa-i-usadba",
  },
  {
    uuid: "1a68af70-c60b-012f-cdab-58d385a7bc34",
    slug: "teachers-year-book-colored-schools",
  },
  {
    uuid: "b4379d30-c60a-012f-c50b-58d385a7bc34",
    slug: "the-american-womans-home-or-principles-of-domestic-science-being-a-guide",
  },
  {
    uuid: "d8c28170-c60a-012f-47f6-58d385a7bc34",
    slug: "the-gospel-among-the-slaves",
  },
  {
    uuid: "e89e8bc0-c609-012f-632b-58d385a7bc34",
    slug: "the-okavango-river-a-narrative-of-travel-exploration-and-adventure",
  },
  {
    uuid: "d98c1fc0-c61d-012f-df44-58d385a7bc34",
    slug: "the-tea-coffee-trade-journal",
  },
  {
    uuid: "24695290-c60a-012f-ac80-58d385a7bc34",
    slug: "the-van-rensselaers-of-the-manor-of-rensselaerswyck",
  },
  {
    uuid: "8340af60-c60a-012f-7946-58d385a7bc34",
    slug: "the-black-man-of-the-south-and-the-rebels-or",
  },
  {
    uuid: "32b897b0-c60a-012f-153a-58d385a7bc34",
    slug: "the-colored-inventor-a-record-of-fifty-years",
  },
  {
    uuid: "84f41c10-c60a-012f-5c9e-58d385a7bc34",
    slug: "the-devil-between-the-white-man-and-the-negro",
  },
  {
    uuid: "03daa8b0-c60b-012f-0b0d-58d385a7bc34",
    slug: "the-grey-river-by-justin-mccarthy-mrs-campbell-praed-and-mortimer-menpes",
  },
  {
    uuid: "8d146a80-c60a-012f-fe18-58d385a7bc34",
    slug: "the-highlands-of-aethiopia",
  },
  {
    uuid: "074c6e00-c60b-012f-caec-58d385a7bc34",
    slug: "the-illustrated-bouquet",
  },
  {
    uuid: "649ba7f0-c60a-012f-e2a5-58d385a7bc34",
    slug: "the-kidnapped-and-the-ransomed",
  },
  {
    uuid: "67e25650-c60a-012f-38c3-58d385a7bc34",
    slug: "the-philosophy-of-negro-suffrage",
  },
  {
    uuid: "5ae322f0-c60b-012f-f6fc-58d385a7bc34",
    slug: "the-slave-trade-slavery-and-color",
  },
  {
    uuid: "5fd100c0-c60a-012f-67f2-58d385a7bc34",
    slug: "the-twentieth-century-union-league-directory",
  },
  {
    uuid: "a2e07930-c60a-012f-c359-58d385a7bc34",
    slug: "thomas-nast-cartoonist-and-illustrator-examples-of-his-work",
  },
  {
    uuid: "550b38e0-c60a-012f-72f9-58d385a7bc34",
    slug: "three-years-travels-from-moscow-over-land-to-china",
  },
  {
    uuid: "df80aaf0-c609-012f-0b80-58d385a7bc34",
    slug: "tomas-garrigue-masaryk-1850-1935-a-collection-of-portraits-of-the-first",
  },
  {
    uuid: "8babc170-c60a-012f-e034-58d385a7bc34",
    slug: "travels-in-brazil",
  },
  {
    uuid: "61cc6f50-c60b-012f-71e7-58d385a7bc34",
    slug: "travels-in-southern-africa-in-the-years-1803-1804-1805-and-1806",
  },
  {
    uuid: "463515e0-c6f6-012f-cd96-3c075448cc4b",
    slug: "von-der-empire-zur-biedermeierzeit",
  },
  {
    uuid: "fb6d04c0-c609-012f-14ee-58d385a7bc34",
    slug: "voyages-et-descovvertvres-faites-en-la-novvelle-france-depuis-lanne-1615-iusques",
  },
  {
    uuid: "27a490b0-c60a-012f-7b02-58d385a7bc34",
    slug: "vues-pittoresques-de-lamrique",
  },
  {
    uuid: "18d057b0-c60b-012f-b509-58d385a7bc34",
    slug: "weedens-history-of-the-colored-people-of-louisville-with-an-appendix-containing",
  },
  {
    uuid: "1da5afd0-c60b-012f-b9a4-58d385a7bc34",
    slug: "zlom",
  },
  {
    uuid: "004d61c0-c60a-012f-c746-58d385a7bc34",
    slug: "an-authentic-and-faithful-history-of-the-mysterious-murder",
  },
  {
    uuid: "f0455160-c60a-012f-3f2c-58d385a7bc34",
    slug: "lithographies-2",
  },
  {
    uuid: "880a2ea0-c60a-012f-f902-58d385a7bc34",
    slug: "repertorio-di-una-compagnia-della-commedia-dellarte",
  },
  {
    uuid: "3bce19d0-c60a-012f-9de9-58d385a7bc34",
    slug: "two-illuminated-manuscript-folios-with-unidentified-text",
  },
  {
    uuid: "7dbcc310-c60a-012f-b7a5-58d385a7bc34",
    slug: "posters-the-hanlon-lees",
  },
  {
    uuid: "06717920-50ce-0132-efe3-58d385a7b928",
    slug: "la-femme-criminelle-et-la-prostitute",
  },
  {
    uuid: "77a23290-c60a-012f-436d-58d385a7bc34",
    slug: "an-original-theory-or-new-hypothesis-of-the-universe",
  },
  {
    uuid: "7d836850-c60b-012f-62ee-58d385a7bc34",
    slug: "ivot",
  },
  {
    uuid: "c12513c0-c608-012f-d001-58d385a7bc34",
    slug: "a-description-of-the-province-and-city-of-new-york",
  },
  {
    uuid: "b5f1bdd0-c609-012f-4217-58d385a7bc34",
    slug: "a-general-history-of-the-pyrates",
  },
  {
    uuid: "f5b46af0-c608-012f-ed44-58d385a7bc34",
    slug: "a-narrative-of-the-expedition-to-algiers-in-the-year-1816-under-the-command",
  },
  {
    uuid: "9c675510-c609-012f-dcae-58d385a7bc34",
    slug: "a-red-record",
  },
  {
    uuid: "95c93c20-c609-012f-ea28-58d385a7bc34",
    slug: "account-of-a-shooting-excursion-on-the-mountains-near-dromilly-estate",
  },
  {
    uuid: "8e358c30-c609-012f-fce7-58d385a7bc34",
    slug: "account-of-the-capture-of-recife",
  },
  {
    uuid: "869bdf30-c608-012f-9a31-58d385a7bc34",
    slug: "active-service-or-religious-work-among-us-soldiers",
  },
  {
    uuid: "7fc91010-c609-012f-3b9b-58d385a7bc34",
    slug: "adnotationes-et-meditationes-in-evangelia-qv-in-sacrosancto-miss-sacrificio-toto",
  },
  {
    uuid: "8d4dc740-c609-012f-6d07-58d385a7bc34",
    slug: "africa-2",
  },
  {
    uuid: "8f9ca3a0-c608-012f-7b51-58d385a7bc34",
    slug: "album-historico-fotografico-de-la-guerra-de-cuba-desde-su-principio-hasta",
  },
  {
    uuid: "9fb7dad0-c617-012f-fd46-58d385a7bc34",
    slug: "american-annual-of-photography-and-photographic-times-almanac",
  },
  {
    uuid: "347a70f0-6fe5-0131-5314-58d385a7bbd0",
    slug: "american-railway-guide-and-pocket-companion-for-the-united-states",
  },
  {
    uuid: "a5e5b3b0-c608-012f-a91c-58d385a7bc34",
    slug: "an-account-of-the-native-africans-in-the-neighbourhood-of-sierra-leone-to-which",
  },
  {
    uuid: "dfce0f80-c608-012f-333c-58d385a7bc34",
    slug: "an-inquiry-into-the-symbolical-language-of-ancient-art-and-mythology-by-r-p",
  },
  {
    uuid: "faba0ae0-c608-012f-ad1b-58d385a7bc34",
    slug: "anthony-burns-a-history",
  },
  {
    uuid: "cdf3a830-c608-012f-e961-58d385a7bc34",
    slug: "apocalypse",
  },
  {
    uuid: "be13e5c0-c608-012f-75fd-58d385a7bc34",
    slug: "ars-magna-lucis-et-umbrae-in-x-libros-digesta-quibus-admirandae-lucis-umbrae",
  },
  {
    uuid: "5d30b7b0-c608-012f-3667-58d385a7bc34",
    slug: "atlas-photographique-de-la-lune-publi-par-lobservatoire-de-paris-excut-par-m-m",
  },
  {
    uuid: "f4eb0450-c6b8-012f-ae87-58d385a7bc34",
    slug: "au-cirque",
  },
  {
    uuid: "96fd2640-c609-012f-e08a-58d385a7bc34",
    slug: "autographs-for-freedom",
  },
  {
    uuid: "4db2ead0-c60b-012f-abbd-58d385a7bc34",
    slug: "battles-and-leaders-of-the-civil-war",
  },
  {
    uuid: "457f28c0-c609-012f-76ca-58d385a7bc34",
    slug: "biblia-pauperum-2",
  },
  {
    uuid: "74580490-c608-012f-fbb3-58d385a7bc34",
    slug: "a-book-of-plans-for-churches-and-parsonages",
  },
  {
    uuid: "c0574db0-c60d-012f-3b2c-58d385a7bc34",
    slug: "brush-and-pencil",
  },
  {
    uuid: "91f90e10-c609-012f-d452-58d385a7bc34",
    slug: "die-bcher-der-chronika-der-drei-schwestern-illustrirt-von-h-die-die-lefler-und-j",
  },
  {
    uuid: "a02a5240-f6ac-012f-89d9-58d385a7bbd0",
    slug: "cabinet-card-collection",
  },
  {
    uuid: "895aadf0-c609-012f-b226-58d385a7bc34",
    slug: "character-and-individuality-in-decorations-and-furnishings",
  },
  {
    uuid: "8ab12cc0-c609-012f-d405-58d385a7bc34",
    slug: "civitates-orbis-terrarvm-liber-primvs-sextvs",
  },
  {
    uuid: "71191040-c608-012f-bfce-58d385a7bc34",
    slug: "compendio-historico-politico-dos-principios-da-lavoura-do-maranho",
  },
  {
    uuid: "41d0a080-c609-012f-84b0-58d385a7bc34",
    slug: "histori-animalium-lib",
  },
  {
    uuid: "71e70b20-b732-0130-39cb-58d385a7bbd0",
    slug: "cosmographiae-introdvctio-cvm-qvibvsdam-geometriae-ac-astrono-miae",
  },
  {
    uuid: "bfb90cc0-0d99-0131-8f31-3c075448cc4b",
    slug: "dance-critics-association-video-archive",
  },
  {
    uuid: "7e681800-c6e0-012f-839d-58d385a7bc34",
    slug: "demonstrations",
  },
  {
    uuid: "c7a67de0-c608-012f-f413-58d385a7bc34",
    slug: "die-pflanze-als-erfinder-von-r-h-franc-mit-zahlreichen-abbildungen",
  },
  {
    uuid: "9f9750f0-c609-012f-7840-58d385a7bc34",
    slug: "dixie-or-southern-scenes-and-sketches",
  },
  {
    uuid: "8fc54480-c609-012f-9c26-58d385a7bc34",
    slug: "documentary-history-of-reconstruction-political-military-social-religious",
  },
  {
    uuid: "48ebd270-c609-012f-e982-58d385a7bc34",
    slug: "drawings-by-charles-t-griffes",
  },
  {
    uuid: "eb0e6190-c608-012f-105f-58d385a7bc34",
    slug: "dur-crt-sit",
  },
  {
    uuid: "a6ebcc60-c6bb-012f-045f-58d385a7bc34",
    slug: "early-western-photographs-1857-1899",
  },
  {
    uuid: "dc77dbe0-c608-012f-cf4f-58d385a7bc34",
    slug: "easter-set",
  },
  {
    uuid: "af77c2b0-c608-012f-0706-58d385a7bc34",
    slug: "efforts-for-social-betterment-among-negro-americans",
  },
  {
    uuid: "42f111c0-c608-012f-a531-58d385a7bc34",
    slug: "ehon-kototsugai",
  },
  {
    uuid: "b6d23640-24c6-0132-82cc-58d385a7b928",
    slug: "elizabeth-barrett-browning-collection-of-papers",
  },
  {
    uuid: "e5274c70-c6d8-012f-1b72-58d385a7bc34",
    slug: "enshoku-shina-sadame",
  },
  {
    uuid: "9857ec30-c609-012f-d455-58d385a7bc34",
    slug: "experience-and-personal-narrative-of-uncle-tom-jones-who-was-for-forty-years",
  },
  {
    uuid: "0c783d50-c60b-012f-7372-58d385a7bc34",
    slug: "fac-similes-of-the-miniatures-ornaments-of-anglo-saxon-irish-manuscripts",
  },
  {
    uuid: "4c8410a0-c609-012f-693a-58d385a7bc34",
    slug: "five-years-residence-in-the-west-indies",
  },
  {
    uuid: "68f10490-c6c0-012f-237f-3c075448cc4b",
    slug: "fugaku-hyakkei",
  },
  {
    uuid: "e2c2d1b0-c61a-012f-d825-58d385a7bc34",
    slug: "gideon-welles-papers-1825-1878-bulk-1840-1864",
  },
  {
    uuid: "33a9fdf0-c609-012f-5ac7-58d385a7bc34",
    slug: "giga-bassui-itich-gafu",
  },
  {
    uuid: "b56d0200-c608-012f-7fe9-58d385a7bc34",
    slug: "miscellaneous-personal-name-files",
  },
  {
    uuid: "8c7762a0-c608-012f-ea76-58d385a7bc34",
    slug: "het-menselyk-bedryf-vertoond-in-100-verbeeldingen-van-ambachten-konsten",
  },
  {
    uuid: "4e0428d0-c608-012f-e4d0-58d385a7bc34",
    slug: "histoire-naturelle-des-perroquettes",
  },
  {
    uuid: "5154f0a0-c608-012f-ad52-58d385a7bc34",
    slug: "hotel-savoy-illustrated-fifty-ninth-street-and-fifth-avenue-new-york-city",
  },
  {
    uuid: "f4e42460-65de-0131-f0bc-58d385a7bbd0",
    slug: "illustrated-sporting-news",
  },
  {
    uuid: "42148840-c60b-012f-fbf4-58d385a7bc34",
    slug: "the-international-socialist-review",
  },
  {
    uuid: "0adf6e60-c617-012f-4f1f-58d385a7bc34",
    slug: "the-international-studio",
  },
  {
    uuid: "a235f010-c609-012f-f86f-58d385a7bc34",
    slug: "jkysh",
  },
  {
    uuid: "a876ca00-c6f6-012f-7f69-3c075448cc4b",
    slug: "krym",
  },
  {
    uuid: "ccd75620-c617-012f-8541-58d385a7bc34",
    slug: "lillustration",
  },
  {
    uuid: "442aee10-c609-012f-2a4b-58d385a7bc34",
    slug: "la-historia-del-mondo-nuovo-di-m-girolamo-benzoni-milanese",
  },
  {
    uuid: "02aaa950-c609-012f-b45c-58d385a7bc34",
    slug: "la-photographie-mdicale-application-aux-sciences-mdicales-et-physiologiques",
  },
  {
    uuid: "20f801c0-c607-012f-3084-58d385a7bc34",
    slug: "leopold-morse-goulston-baseball-collection-in-memory-of-leo-j-bondy",
  },
  {
    uuid: "f778e4f0-c61e-012f-ebbf-58d385a7bc34",
    slug: "les-uvres-de-m-franois-rabelais-augmentes-de-la-vie-de-lauteur-de-quelques",
  },
  {
    uuid: "7c978af0-c608-012f-dbe4-58d385a7bc34",
    slug: "letters-on-the-colonization-society-and-on-its-probable-results-under",
  },
  {
    uuid: "2ba5e1a0-c609-012f-4781-58d385a7bc34",
    slug: "lloyds-steamboat-directory-and-disasters-on-the-western-waters",
  },
  {
    uuid: "81cc7410-c608-012f-c0d5-58d385a7bc34",
    slug: "log-of-the-ship-lawrance",
  },
  {
    uuid: "41419440-c608-012f-d3b2-58d385a7bc34",
    slug: "london-labour-and-the-london-poor-a-cyclopaedia-of-the-condition-and-earnings",
  },
  {
    uuid: "f9e3ea50-c608-012f-34f4-58d385a7bc34",
    slug: "the-mad-mullah-of-somaliland-by-douglas-jardine-with-a-foreword-by-the-right",
  },
  {
    uuid: "f11ea9a0-c608-012f-dedd-58d385a7bc34",
    slug: "military-services-rendered-by-the-haitians-in-the-north-and-south-american-wars",
  },
  {
    uuid: "f7ddf6d0-c608-012f-02d6-58d385a7bc34",
    slug: "miscellaneous-afro-latin-america-collection",
  },
  {
    uuid: "676ba9b0-c608-012f-a1c9-58d385a7bc34",
    slug: "mo-parizh",
  },
  {
    uuid: "052da800-c609-012f-a3ac-58d385a7bc34",
    slug: "myh-rengeky",
  },
  {
    uuid: "7e69def0-c608-012f-a5d2-58d385a7bc34",
    slug: "narrative-of-william-w-brown-an-american-slave",
  },
  {
    uuid: "94a5cf30-c608-012f-55a7-58d385a7bc34",
    slug: "neue-und-curieuse-theatralische-tantz-schul",
  },
  {
    uuid: "f3d6c580-c61e-012f-04f8-58d385a7bc34",
    slug: "new-york-evening-journal",
  },
  {
    uuid: "7d576e20-c619-012f-39cc-58d385a7bc34",
    slug: "new-york-illustrated",
  },
  {
    uuid: "ff8127f0-40fe-0132-bfa2-58d385a7b928",
    slug: "new-neighborhoods-new-lives",
  },
  {
    uuid: "965b71a0-c618-012f-1898-58d385a7bc34",
    slug: "the-new-york-gazette-and-the-weekly-mercury",
  },
  {
    uuid: "eada8df0-c61a-012f-cffc-58d385a7bc34",
    slug: "nightclubs-and-theaters",
  },
  {
    uuid: "4aec4cb0-c608-012f-aedd-58d385a7bc34",
    slug: "nishikawa-hinagata",
  },
  {
    uuid: "ccc9d130-c618-012f-4e76-58d385a7bc34",
    slug: "obadiah-rich-collection",
  },
  {
    uuid: "81d38320-c609-012f-a86d-58d385a7bc34",
    slug: "old-believers-manuscript",
  },
  {
    uuid: "e7155750-c608-012f-a670-58d385a7bc34",
    slug: "parentalia-mariae-clementinae-magn-britan-franc-et-hibern-regin-jussu-clementis",
  },
  {
    uuid: "a92b9980-c608-012f-1f6f-58d385a7bc34",
    slug: "photographic-views-of-shermans-campaign",
  },
  {
    uuid: "863ecaf0-c617-012f-a712-58d385a7bc34",
    slug: "photographs-and-other-materials-depicting-the-new-york-public-library",
  },
  {
    uuid: "fbfc6cb0-0043-0130-495b-58d385a7bc34",
    slug: "photographs-of-american-indians-2",
  },
  {
    uuid: "fda2f060-c60a-012f-ea89-58d385a7bc34",
    slug: "das-plakat-mitteilungen-des-vereins-der-plakatfreunde-ev",
  },
  {
    uuid: "30d0e280-71a4-0131-1a7d-58d385a7b928",
    slug: "plastering-industries",
  },
  {
    uuid: "aa618b50-c609-012f-cc1f-58d385a7bc34",
    slug: "pomorske-tvty-tvty-pstynnozhitele-na-voprosy-eromonakha-neofta",
  },
  {
    uuid: "b6d8bc00-c608-012f-9466-58d385a7bc34",
    slug: "portraits-and-vignettes",
  },
  {
    uuid: "166b4ae0-c618-012f-db17-58d385a7bc34",
    slug: "print-collection-clipping-file",
  },
  {
    uuid: "b0d8f7e0-c617-012f-a561-58d385a7bc34",
    slug: "prozhektor",
  },
  {
    uuid: "0c18ce40-c607-012f-4c53-58d385a7bc34",
    slug: "ransai-gafu",
  },
  {
    uuid: "6c3755c0-c608-012f-1b6a-58d385a7bc34",
    slug: "recht-ghebruyck-ende-misbruyck-van-tydlycke-have",
  },
  {
    uuid: "161b17c0-c609-012f-2281-58d385a7bc34",
    slug: "recueil-de-vues-des-lieux-principaux-de-la-colonie-franoise-de-saint-domingue",
  },
  {
    uuid: "8f63ab10-c609-012f-5a6a-58d385a7bc34",
    slug: "report-upon-the-colorado-river-of-the-west-explored-in-1857-and-1858",
  },
  {
    uuid: "02a6e2c0-c609-012f-4818-58d385a7bc34",
    slug: "restriti",
  },
  {
    uuid: "af867020-c60a-012f-1864-58d385a7bc34",
    slug: "rimon-berlin-germany",
  },
  {
    uuid: "cf7268b0-c609-012f-49a8-58d385a7bc34",
    slug: "russk-tsar-s-tsaritseiu-na-pokloneni-moskovskim-sviatyniam",
  },
  {
    uuid: "3fa126a0-c61f-012f-d5e9-58d385a7bc34",
    slug: "samuel-b-ruggles-papers-1801-1881",
  },
  {
    uuid: "98479260-c6c8-012f-0f1d-58d385a7bc34",
    slug: "sansai-hyakush",
  },
  {
    uuid: "88682aa0-c609-012f-68e3-58d385a7bc34",
    slug: "satyr-against-marriage",
  },
  {
    uuid: "f4417190-c608-012f-ae71-58d385a7bc34",
    slug: "die-schne-raritt",
  },
  {
    uuid: "99370350-c608-012f-875b-58d385a7bc34",
    slug: "series-of-advertising-cards-issued-by-arbuckle-bros-coffee-company-each-2",
  },
  {
    uuid: "837076a0-c609-012f-11f9-58d385a7bc34",
    slug: "six-trios-concertants-pour-deux-violons-et-basse-oblige",
  },
  {
    uuid: "95e11d70-c609-012f-29d9-58d385a7bc34",
    slug: "six-years-of-a-travellers-life-in-western-africa",
  },
  {
    uuid: "3c98da20-c621-012f-7c22-58d385a7bc34",
    slug: "sketch",
  },
  {
    uuid: "9de317c0-c609-012f-2e67-58d385a7bc34",
    slug: "smiley-polk-family-documents",
  },
  {
    uuid: "eb0d5340-c6f6-012f-abd0-3c075448cc4b",
    slug: "sobrane-kart-planov-i-risunkov-k-trudam-pervago-arkheologicheskago-siezda",
  },
  {
    uuid: "a912aa50-c609-012f-2570-58d385a7bc34",
    slug: "sollicitude-dune-mre-pour-les-plus-prcieux-intrts-de-sa-fille-traduit",
  },
  {
    uuid: "f2a1ea10-c608-012f-6dde-58d385a7bc34",
    slug: "solomon-crows-christmas-pockets-and-other-tales",
  },
  {
    uuid: "0c9580b0-ffd3-0131-0c57-58d385a7b928",
    slug: "souvenir-album-of-china",
  },
  {
    uuid: "addf2530-c608-012f-43cc-58d385a7bc34",
    slug: "souvenirs-de-la-campagne-du-dahomey",
  },
  {
    uuid: "a77a1ee0-c608-012f-df98-58d385a7bc34",
    slug: "st-domingo-of-het-land-der-zwarten-in-hayti-en-deszelfs-omwenteling",
  },
  {
    uuid: "2d8d0730-c618-012f-632a-58d385a7bc34",
    slug: "the-studio",
  },
  {
    uuid: "c48c2ed0-c609-012f-4343-58d385a7bc34",
    slug: "stvdio-darchitettvra-civile-sopra-gli-ornamenti-di-porte-e-finestre-tratti-da",
  },
  {
    uuid: "ac321c00-c619-012f-25ea-58d385a7bc34",
    slug: "testamente-nutak-kaladlin-okauzeennut-nuktersimarsok-narkiutingoaenniglo",
  },
  {
    uuid: "c2c91830-c608-012f-6b5f-58d385a7bc34",
    slug: "the-first-book-of-poetry-for-the-use-of-schools-intended-as-reading-lessons",
  },
  {
    uuid: "801d01e0-c608-012f-026f-58d385a7bc34",
    slug: "the-urban-league-bulletin",
  },
  {
    uuid: "a7d108d0-c609-012f-a66c-58d385a7bc34",
    slug: "the-adventures-of-ulysses",
  },
  {
    uuid: "2e4e2c50-c609-012f-7871-58d385a7bc34",
    slug: "the-colored-patriots-of-the-american-revolution-with-sketches-of-several",
  },
  {
    uuid: "c21d7a10-c60d-012f-abc6-58d385a7bc34",
    slug: "the-craftsman",
  },
  {
    uuid: "47ab00b0-c608-012f-9447-58d385a7bc34",
    slug: "the-last-leaf-poem",
  },
  {
    uuid: "09cedff0-c609-012f-1153-58d385a7bc34",
    slug: "the-parents-offering-or-tales-for-children-by-mrs-caroline-barnard",
  },
  {
    uuid: "b102fe50-c608-012f-1e4f-58d385a7bc34",
    slug: "the-penitential-tyrant-or-slave-trader-reformed-a-pathetic-poem-in-four-cantos",
  },
  {
    uuid: "85ba8070-c609-012f-e116-58d385a7bc34",
    slug: "the-report-of-the-new-york-city-improvement-commission-to-the-hon-george-b",
  },
  {
    uuid: "884a7a90-c608-012f-3f12-58d385a7bc34",
    slug: "the-welfare-of-children-in-cotton-growing-areas-of-texas",
  },
  {
    uuid: "93e2e7c0-c609-012f-7b6b-58d385a7bc34",
    slug: "the-white-mans-grave-a-visit-to-sierra-leone-in-1834",
  },
  {
    uuid: "a8f2b920-c619-012f-2856-58d385a7bc34",
    slug: "theatre-magazine",
  },
  {
    uuid: "9f675530-c60b-012f-adb7-58d385a7bc34",
    slug: "tobacco-its-history-illustrated-by-the-books-manuscripts-and-engravings",
  },
  {
    uuid: "b350f190-c609-012f-7ac1-58d385a7bc34",
    slug: "toin-zukan",
  },
  {
    uuid: "2c38a390-c4d1-0131-7c20-58d385a7b928",
    slug: "toveys-official-brewers-and-maltsters-directory-of-the-united-states-and-canada",
  },
  {
    uuid: "4b4a7540-c609-012f-15e0-58d385a7bc34",
    slug: "travels-in-south-africa-undertaken-at-the-request-of-the-missionary-society-2",
  },
  {
    uuid: "4a1a4030-c609-012f-0df0-58d385a7bc34",
    slug: "travels-in-the-interior-districts-of-africa-performed-under-the-direction",
  },
  {
    uuid: "9ee64fe0-c609-012f-0013-58d385a7bc34",
    slug: "travels-through-the-interior-parts-of-north-america-in-theyears-1766-1767",
  },
  {
    uuid: "e9c86e90-c608-012f-849d-58d385a7bc34",
    slug: "tszoku-isho-monogatari",
  },
  {
    uuid: "0cf58900-c609-012f-bc5f-58d385a7bc34",
    slug: "twice-sold-twice-ransomed-autobiography-of-mr-and-mrs-lp-ray",
  },
  {
    uuid: "fc531530-c608-012f-d770-58d385a7bc34",
    slug: "united-states-atrocities-lynch-law",
  },
  {
    uuid: "7e0a5db0-c609-012f-593f-58d385a7bc34",
    slug: "upjohns-rural-architecture",
  },
  {
    uuid: "795368a0-c608-012f-d913-58d385a7bc34",
    slug: "voyages-et-decouvertes-dans-lafrique-centrale-et-lafrique-septentrionale",
  },
  {
    uuid: "f510c750-c608-012f-0d95-58d385a7bc34",
    slug: "waikna-or-adventures-on-the-mosquito-shore",
  },
  {
    uuid: "47c1a060-c609-012f-fdb7-58d385a7bc34",
    slug: "wappenbuch-der-familie-funckh",
  },
  {
    uuid: "850dc250-c608-012f-8243-58d385a7bc34",
    slug: "white-and-black-under-the-old-regime",
  },
  {
    uuid: "10e7b200-c617-012f-ca23-58d385a7bc34",
    slug: "wide-world-magazine",
  },
  {
    uuid: "e5d939d0-c608-012f-93cc-58d385a7bc34",
    slug: "berg-collection-uncataloged-manuscripts",
  },
  {
    uuid: "52d342e0-c608-012f-b027-58d385a7bc34",
    slug: "drawings-by-friedrich-von-germann",
  },
  {
    uuid: "4c7194c0-c608-012f-f13c-58d385a7bc34",
    slug: "engraved-portraits-collected-by-valentin-alexander-blacque",
  },
  {
    uuid: "2cf888f0-c609-012f-0255-58d385a7bc34",
    slug: "five-colored-etchings-by-francesco-camporesi-in-slavic-and-baltic-division",
  },
  {
    uuid: "9d8e3630-c609-012f-a258-58d385a7bc34",
    slug: "supplment",
  },
  {
    uuid: "9b1c66c0-c608-012f-75de-58d385a7bc34",
    slug: "the-belles-of-japan",
  },
  {
    uuid: "3f1dd190-c609-012f-d5bc-58d385a7bc34",
    slug: "the-book-of-americas-making-exposition-held-at-the-71st-regiment-armory-new",
  },
  {
    uuid: "72b2fad0-c608-012f-b123-58d385a7bc34",
    slug: "a-collection-of-several-authentick-accounts-of-the-history-and-price-of-wheat",
  },
  {
    uuid: "8ce58e40-c609-012f-9e4f-58d385a7bc34",
    slug: "a-complete-life-of-gen-george-a-custer",
  },
  {
    uuid: "2a4450e0-c609-012f-2491-58d385a7bc34",
    slug: "los-desastres-de-la-guerra",
  },
  {
    uuid: "90a1f330-c609-012f-18f0-58d385a7bc34",
    slug: "the-group-plan-of-the-public-buildings-of-the-city-of-cleveland-report-made",
  },
  {
    uuid: "f89f4840-c608-012f-b82a-58d385a7bc34",
    slug: "the-history-of-negro-servitude-in-illinois-and-of-the-slavery-agitation",
  },
  {
    uuid: "46092e70-c608-012f-7a48-58d385a7bc34",
    slug: "les-navigations-peregrinations-et-voyages-faicts-en-la-tvrqvie",
  },
  {
    uuid: "0b3a9d90-c609-012f-b554-58d385a7bc34",
    slug: "the-redemption-of-africa-a-story-of-civilization-with-maps-statistical-tables",
  },
  {
    uuid: "0e81b7b0-e846-0131-9d7b-58d385a7b928",
    slug: "a-serious-comedy-for-trivial-people",
  },
  {
    uuid: "895841e0-c607-012f-e28a-58d385a7bc34",
    slug: "a-collection-of-voyages-and-travels",
  },
  {
    uuid: "442b6ef0-c607-012f-40cd-58d385a7bc34",
    slug: "a-motor-flight-through-france",
  },
  {
    uuid: "a26bd3c0-c606-012f-66a2-58d385a7bc34",
    slug: "a-treatise-on-the-forces-which-produce-the-organization-of-plants",
  },
  {
    uuid: "09846e70-c607-012f-2674-58d385a7bc34",
    slug: "a-voyage-to-the-south-sea-along-the-coasts-of-chili-and-peru-in-the-years-1712",
  },
  {
    uuid: "871b28e0-c607-012f-49dd-58d385a7bc34",
    slug: "achillis-bocchii",
  },
  {
    uuid: "b2598170-c607-012f-e697-58d385a7bc34",
    slug: "africa-in-brief",
  },
  {
    uuid: "6c651d80-c607-012f-0b03-58d385a7bc34",
    slug: "africa-in-the-nineteenth-century-by-edgar-sanderson",
  },
  {
    uuid: "8afa9a90-c606-012f-904d-58d385a7bc34",
    slug: "afrique-orientale-abssinie",
  },
  {
    uuid: "c13bad20-c606-012f-3b99-58d385a7bc34",
    slug: "airs-overtures-and-other-pieces-for-the-harpsichord",
  },
  {
    uuid: "ef916770-c602-012f-148e-58d385a7bc34",
    slug: "album-comique",
  },
  {
    uuid: "7bcecc10-4684-0132-9421-58d385a7bbd0",
    slug: "album-de-la-galerie-contemporaine",
  },
  {
    uuid: "b6dbe1d0-c606-012f-95b2-58d385a7bc34",
    slug: "album-of-russian-popular-prints",
  },
  {
    uuid: "50bc2860-c606-012f-b1d3-58d385a7bc34",
    slug: "alexandreida-in-rima-cauata-dal-latino",
  },
  {
    uuid: "eb919cc0-c606-012f-0f49-58d385a7bc34",
    slug: "almanach-perpetuum-celestium-motuum",
  },
  {
    uuid: "54860be0-c606-012f-ff8e-58d385a7bc34",
    slug: "american-political-caricatures",
  },
  {
    uuid: "d4294f20-c607-012f-f141-58d385a7bc34",
    slug: "the-amherst-papyri-being-an-account-of-the-egyptian-papyri-in-the-collection",
  },
  {
    uuid: "fef54340-c606-012f-5df1-58d385a7bc34",
    slug: "an-authentic-narrative-of-the-extraordinary-career-of-james-allen-the-female",
  },
  {
    uuid: "4af6b490-c607-012f-a8bf-58d385a7bc34",
    slug: "an-enquiry-concerning-political-justice-and-its-influence-on-general-virtue",
  },
  {
    uuid: "cc2d32b0-c607-012f-3ad6-58d385a7bc34",
    slug: "an-era-of-progress-and-promise-1863-1910",
  },
  {
    uuid: "a19ac9f0-c607-012f-32fa-58d385a7bc34",
    slug: "angelo-soliman-der-hochfurstliche-mohr-ein-exotisches-kapitel-alt-wien",
  },
  {
    uuid: "8bdccf40-48c7-0132-a8d5-58d385a7b928",
    slug: "angels-in-fall",
  },
  {
    uuid: "6a016ad0-dc45-0130-12fb-58d385a7b928",
    slug: "annual-report-of-the-american-type-founders-company",
  },
  {
    uuid: "6445beb0-4690-0132-8044-58d385a7bbd0",
    slug: "anthropologisch-ethnologisches-album-in-photographien",
  },
  {
    uuid: "4a679f30-c607-012f-be5b-58d385a7bc34",
    slug: "anti-slavery-almanac-1846",
  },
  {
    uuid: "45c5af60-c62c-012f-6ae8-58d385a7bc34",
    slug: "architectural-forum",
  },
  {
    uuid: "267bcc70-c607-012f-d4e7-58d385a7bc34",
    slug: "mr-and-mrs-marc-grumet-collection",
  },
  {
    uuid: "99b52760-c607-012f-a2b6-58d385a7bc34",
    slug: "assignees-sale-of-books",
  },
  {
    uuid: "d6e3d210-c607-012f-78ae-58d385a7bc34",
    slug: "atlas-azatsko-rossi",
  },
  {
    uuid: "bcfc1240-4e79-0132-4d29-58d385a7b928",
    slug: "barnards-photographic-views-of-the-sherman-campaign",
  },
  {
    uuid: "b574d9b0-c606-012f-3a06-58d385a7bc34",
    slug: "bereisung-der-vereinigten-staaten-von-nordamerika-mit-besonderer-hinsicht-auf",
  },
  {
    uuid: "9ad418f0-c607-012f-231b-58d385a7bc34",
    slug: "beschrijvinghe-van-virginia-nieuw-nederlandt-nieuw-engelandt-en-deylanden",
  },
  {
    uuid: "ec43f460-c608-012f-6d2b-58d385a7bc34",
    slug: "beverly-chew-collection-of-milton-portraits",
  },
  {
    uuid: "d59bea10-c607-012f-bd5f-58d385a7bc34",
    slug: "bibliografa-californica-or-notes-and-materials-to-aid-in-forming-a-more-perfect",
  },
  {
    uuid: "c6c766e0-c6d8-012f-8e84-58d385a7bc34",
    slug: "bijin-ezukushi",
  },
  {
    uuid: "b751ca50-c625-012f-d978-58d385a7bc34",
    slug: "billy-rose-theatre-collection-originals-file",
  },
  {
    uuid: "a9c9e080-c607-012f-f729-58d385a7bc34",
    slug: "bond-and-free",
  },
  {
    uuid: "375ce0d0-c607-012f-d8b3-58d385a7bc34",
    slug: "botanical-prints-and-drawings-depicting-tobacco",
  },
  {
    uuid: "11110520-c60b-012f-9bcd-58d385a7bc34",
    slug: "brewster-and-company-records-1837-1924-bulk-1897-1924",
  },
  {
    uuid: "1ca446b0-c609-012f-02df-58d385a7bc34",
    slug: "calliope-or-english-harmony",
  },
  {
    uuid: "0e714820-c607-012f-41ee-58d385a7bc34",
    slug: "candide-ou-loptimisme",
  },
  {
    uuid: "12273290-c607-012f-2a71-58d385a7bc34",
    slug: "candide-or-the-optimist",
  },
  {
    uuid: "f057fed0-c606-012f-443d-58d385a7bc34",
    slug: "candide-ou-loptimisme-par-voltaire-candide-et-les-hommes-de-1918-par-pierre-mac",
  },
  {
    uuid: "d9d08db0-c606-012f-0dd7-58d385a7bc34",
    slug: "cantabrigia-illustrata",
  },
  {
    uuid: "72893fa0-c60a-012f-4604-58d385a7bc34",
    slug: "cartoons-and-stereotypes",
  },
  {
    uuid: "ea23c190-c607-012f-8e89-58d385a7bc34",
    slug: "ceramique-dcors-divers",
  },
  {
    uuid: "aa1795e0-f8c5-0131-7156-58d385a7b928",
    slug: "le-charivari",
  },
  {
    uuid: "320bb570-c608-012f-b309-58d385a7bc34",
    slug: "christi-iesu-vit-admirabilique-actionum-speculum-a-philippo-gallo-apparat-bened",
  },
  {
    uuid: "a860d910-c607-012f-09f5-58d385a7bc34",
    slug: "city-of-god",
  },
  {
    uuid: "50c8d5f0-c607-012f-53c9-58d385a7bc34",
    slug: "collection-de-meubles-et-objets-de-got",
  },
  {
    uuid: "846c47a0-004d-0130-0ebc-58d385a7bc34",
    slug: "colliers",
  },
  {
    uuid: "0c62ebf0-c622-012f-68f9-58d385a7bc34",
    slug: "conewago-canal-company-records-1788-1820",
  },
  {
    uuid: "73c97c70-c607-012f-b5c6-58d385a7bc34",
    slug: "continuation-of-the-stories-of-old-daniel-or-tales-of-wonder-and-delight",
  },
  {
    uuid: "b0ffb350-c606-012f-80ab-58d385a7bc34",
    slug: "convoi-funebre-de-son-altesse-royale-anne-princesse-royale-de-la-grande-bretagne",
  },
  {
    uuid: "cd976850-c607-012f-8a9a-58d385a7bc34",
    slug: "costumes-russes-dess-par-w-timm-publi-par-dazario-moscou-et-st-petersbourg",
  },
  {
    uuid: "88577960-c607-012f-d868-58d385a7bc34",
    slug: "cours-darchitecture",
  },
  {
    uuid: "a0abc7b0-c607-012f-fe4e-58d385a7bc34",
    slug: "cronicas-de-santiago-de-cuba",
  },
  {
    uuid: "2cdadf30-c60a-012f-dc78-58d385a7bc34",
    slug: "cuba-y-amrica",
  },
  {
    uuid: "9c888d10-c607-012f-9a8c-58d385a7bc34",
    slug: "current-labor-problems",
  },
  {
    uuid: "07a7b130-bcae-0130-6ce5-58d385a7b928",
    slug: "the-curtiss-wright-er-about-the-buffalo-plant-production-soldiers",
  },
  {
    uuid: "0043be30-c608-012f-595b-58d385a7bc34",
    slug: "daihannyaky",
  },
  {
    uuid: "f54de1a0-c616-012f-819d-58d385a7bc34",
    slug: "divina-commedia",
  },
  {
    uuid: "93b9ac40-c607-012f-0176-58d385a7bc34",
    slug: "david-garrick-manuscript-materials-and-ephemera-1730-1900-portfolio",
  },
  {
    uuid: "5ee64aa0-c608-012f-10de-58d385a7bc34",
    slug: "decorative-furnisher",
  },
  {
    uuid: "a74cfca0-2d4b-0132-343d-58d385a7bbd0",
    slug: "denishawn-collection-unprocessed-photographs",
  },
  {
    uuid: "9a2a0080-c606-012f-bbbe-58d385a7bc34",
    slug: "description-generale-historique-geographique-et-physique-de-la-colonie",
  },
  {
    uuid: "798ccf60-c606-012f-caf7-58d385a7bc34",
    slug: "descrizione-degli-spettacoli-e-feste-datesi-in-venezia-per-occazione-della",
  },
  {
    uuid: "8ab716d0-c60b-012f-7135-58d385a7bc34",
    slug: "designs-for-the-garden-of-paradise-1914",
  },
  {
    uuid: "4c5110d0-c607-012f-722c-58d385a7bc34",
    slug: "deuotes-prieres-escrites-et-burines-apres-le-naturel-de-la-plume-par-p-moreau-m",
  },
  {
    uuid: "cb298dc0-c60a-012f-da4a-58d385a7bc34",
    slug: "dictionnaire-raisonn-de-larchitecture-franaise-du-xie-au-xvie-sicle-par-m",
  },
  {
    uuid: "a51faac0-fa3d-0131-926d-58d385a7bbd0",
    slug: "die-locomotive",
  },
  {
    uuid: "8ff562f0-c607-012f-e072-58d385a7bc34",
    slug: "die-reklame-ihre-kunst-und-wissenschaft-hrsg-von-paul-ruben-unter-mitarbeit",
  },
  {
    uuid: "9eb81840-c607-012f-2d12-58d385a7bc34",
    slug: "die-sklavenmacht-blicke-in-die-geschichte-der-vereinigten-staaten-von-amerika",
  },
  {
    uuid: "cacb3970-c607-012f-5537-58d385a7bc34",
    slug: "divers-ajustements-et-usages-de-russie-dessines-en-russie-daprs-nature-et-gravs",
  },
  {
    uuid: "8571b870-c607-012f-664c-58d385a7bc34",
    slug: "divinar-nvptiarvm-conventa-et-acta",
  },
  {
    uuid: "0f73e880-c608-012f-013a-58d385a7bc34",
    slug: "division-and-reunion-1829-1889",
  },
  {
    uuid: "24856750-c607-012f-f06e-58d385a7bc34",
    slug: "dixie-after-the-war-an-exposition-of-social-conditions-existing-in-the-south",
  },
  {
    uuid: "532ed500-c607-012f-e85c-58d385a7bc34",
    slug: "las-dos-antillas-political-club-minutes-1892-1898",
  },
  {
    uuid: "950d4fc0-c606-012f-784b-58d385a7bc34",
    slug: "ecclesia-africana-sub-primate-carthaginiensi-opus-continens-dissertationes",
  },
  {
    uuid: "ac5866a0-c606-012f-5064-58d385a7bc34",
    slug: "ecclesiae-anglicanae-trophaea-siue-sanctorum-martyrumqui-pro-christo",
  },
  {
    uuid: "eb76ac60-c607-012f-f089-58d385a7bc34",
    slug: "echoes-from-the-gospel-trumpet-three-sermons-and-a-paper",
  },
  {
    uuid: "31548750-c60a-012f-2db7-58d385a7bc34",
    slug: "edward-c-taintor-papers-1839-1879",
  },
  {
    uuid: "abd83730-c607-012f-2e4c-58d385a7bc34",
    slug: "en-afrique-centrale-niger-bnou-tchad",
  },
  {
    uuid: "50d9f4f0-c60b-012f-d158-58d385a7bc34",
    slug: "encyclopdie-mthodique",
  },
  {
    uuid: "23c0d8a0-c607-012f-32e5-58d385a7bc34",
    slug: "erotick-revue",
  },
  {
    uuid: "7dc15230-c607-012f-2e1a-58d385a7bc34",
    slug: "erschrckliche-brderschafft-der-alten-und-neuen-wiedertuffer-qucker-schwrmer-und",
  },
  {
    uuid: "89976df0-c609-012f-46b9-58d385a7bc34",
    slug: "erste-xxvi-schiffart",
  },
  {
    uuid: "1e8d9290-c608-012f-fdf2-58d385a7bc34",
    slug: "essay-on-sepulchres-or-a-proposal-for-erecting-some-memorial-of-the-illustrious",
  },
  {
    uuid: "4349b410-c607-012f-b9d8-58d385a7bc34",
    slug: "explanations-and-sailing-directions-to-accompany-the-wind-and-current-charts",
  },
  {
    uuid: "72ae9810-c607-012f-9df6-58d385a7bc34",
    slug: "fables-of-aesop-and-others-translated-into-english-with-instructive",
  },
  {
    uuid: "07e11ee0-c607-012f-df64-58d385a7bc34",
    slug: "fables-2",
  },
  {
    uuid: "1324fc50-c607-012f-7cc7-58d385a7bc34",
    slug: "fame-and-fancy-or-voltaire-improved-containing-the-story-of-candid-revised",
  },
  {
    uuid: "bef1ba70-c606-012f-6ad4-58d385a7bc34",
    slug: "feste-nelle-nozze-del-serenissimo-don-francesco-medici-gran-dvca-di-toscana",
  },
  {
    uuid: "9065d2a0-c607-012f-e5cf-58d385a7bc34",
    slug: "figurarum-aegyptiorum-secretarum",
  },
  {
    uuid: "0840e620-003e-0130-5353-58d385a7bc34",
    slug: "four-landscapes-with-figures",
  },
  {
    uuid: "35b89a10-c60b-012f-e6e2-58d385a7bc34",
    slug: "frank-leslies-new-york-journal",
  },
  {
    uuid: "8454bb90-c609-012f-5515-58d385a7bc34",
    slug: "frank-r-crosswaith-photograph-collection",
  },
  {
    uuid: "22002970-c608-012f-2f8e-58d385a7bc34",
    slug: "fuji-no-hitoana-soshi",
  },
  {
    uuid: "0a6536f0-c608-012f-304e-58d385a7bc34",
    slug: "gardners-photographic-sketch-book-of-the-war",
  },
  {
    uuid: "ec864bc0-c606-012f-6c92-58d385a7bc34",
    slug: "gazette-du-bon-ton-arts-modes-frivolits",
  },
  {
    uuid: "84207900-c606-012f-0ef5-58d385a7bc34",
    slug: "genji-monogatari-kashiwagi-no-maki",
  },
  {
    uuid: "8aa91c40-c607-012f-8b13-58d385a7bc34",
    slug: "geografia-tavole-moderne-di-geografia-de-la-maggior-parte-del-mondo-di-diversi",
  },
  {
    uuid: "210d6350-c60a-012f-1702-58d385a7bc34",
    slug: "gleasons-pictorial-drawing-room-companion",
  },
  {
    uuid: "d701c730-c607-012f-b418-58d385a7bc34",
    slug: "gospital-krasnago-kresta-pri-minskom-blag-o-vie-dobrochinnost",
  },
  {
    uuid: "5bc08de0-c608-012f-6cdc-58d385a7bc34",
    slug: "the-greenwich-village-spectator",
  },
  {
    uuid: "3ecfa490-c605-012f-1c9d-58d385a7bc34",
    slug: "gwendolyn-bennett-photograph-collection",
  },
  {
    uuid: "f93a1200-c6b4-012f-0df5-58d385a7bc34",
    slug: "harlem-mecca-of-the-new-negro",
  },
  {
    uuid: "246b00c0-c608-012f-fc33-58d385a7bc34",
    slug: "harmony-exercises",
  },
  {
    uuid: "2eed7da0-c60a-012f-70c1-58d385a7bc34",
    slug: "hikawa-sairei-emaki",
  },
  {
    uuid: "541f7100-c606-012f-a656-58d385a7bc34",
    slug: "histoire-admirable-des-plantes-et-herbes-esmerueillables-miraculeuses-en-nature",
  },
  {
    uuid: "1de28800-c607-012f-2213-58d385a7bc34",
    slug: "histoire-militaire-de-la-guerre-dindependance-de-saint-domingue",
  },
  {
    uuid: "4de87740-c607-012f-eb91-58d385a7bc34",
    slug: "historical-sketches-of-the-slave-trade-and-of-its-effects-in-africa-addressed",
  },
  {
    uuid: "9c6bc600-c606-012f-9189-58d385a7bc34",
    slug: "history-of-the-indian-tribes-of-north-america-with-biographical-sketches",
  },
  {
    uuid: "5e76ed10-c607-012f-d8ff-58d385a7bc34",
    slug: "hob-ikh-mir-a-lidele",
  },
  {
    uuid: "beddd260-c609-012f-a55d-58d385a7bc34",
    slug: "house-garden",
  },
  {
    uuid: "aa077910-c61f-012f-d5d8-58d385a7bc34",
    slug: "house-beautiful",
  },
  {
    uuid: "8b3e5030-c607-012f-618e-58d385a7bc34",
    slug: "illinois-at-vicksburg",
  },
  {
    uuid: "5144fff0-c606-012f-c286-58d385a7bc34",
    slug: "in-morocco-by-edith-wharton",
  },
  {
    uuid: "91ba4fa0-c606-012f-a0bc-58d385a7bc34",
    slug: "in-the-brush",
  },
  {
    uuid: "4d095040-c60a-012f-1795-58d385a7bc34",
    slug: "interiors",
  },
  {
    uuid: "b588e400-c629-012f-ff07-58d385a7bc34",
    slug: "intikhb-i-shhnmah-selections-from-shhnmah",
  },
  {
    uuid: "01560a10-c607-012f-0fb8-58d385a7bc34",
    slug: "ioannis-keppleri-harmonices-mvndi-libri-v-qvorvm-primus-geometricvs-de-figurarum",
  },
  {
    uuid: "af6afb20-c607-012f-1339-58d385a7bc34",
    slug: "is-hayti-decadent",
  },
  {
    uuid: "f97120a0-c607-012f-3886-58d385a7bc34",
    slug: "ismailia-a-narrative-of-the-expedition-to-central-africa-for-suppression",
  },
  {
    uuid: "c607aaf0-c608-012f-99cc-58d385a7bc34",
    slug: "itinerario-uoyage-ofte-schipvaert-van-jan-huygen-van-linschoten-naer-oost-ofte",
  },
  {
    uuid: "0baf24b0-c607-012f-ae1e-58d385a7bc34",
    slug: "j-e-ridingers-werke",
  },
  {
    uuid: "ee9c0ce0-c608-012f-0657-58d385a7bc34",
    slug: "james-weldon-johnson-photograph-collection",
  },
  {
    uuid: "d0f73140-c606-012f-9e4d-58d385a7bc34",
    slug: "james-wright-brown-cartoon-collection",
  },
  {
    uuid: "b80b8380-c606-012f-f55b-58d385a7bc34",
    slug: "john-smith-prints",
  },
  {
    uuid: "99a6eb60-0042-0130-2a7a-58d385a7bc34",
    slug: "kiev-teper-i-prezhde",
  },
  {
    uuid: "221d0080-c607-012f-8f8f-58d385a7bc34",
    slug: "kiunangi-or-story-and-history-from-central-africa",
  },
  {
    uuid: "f34e48c0-c606-012f-2b06-58d385a7bc34",
    slug: "kupfersammlung-zu-j-b-basedows-elementarwerke-fr-die-jugend-und-ihre-freunde",
  },
  {
    uuid: "896ee0a0-c607-012f-39ef-58d385a7bc34",
    slug: "kyy-hireki",
  },
  {
    uuid: "7202f2b0-c606-012f-7aac-58d385a7bc34",
    slug: "political-ravishment",
  },
  {
    uuid: "59862070-c607-012f-8314-58d385a7bc34",
    slug: "la-pucelle-dorlans-pome-divis-en-vingt-chants-avec-des-notes-manuscript-not",
  },
  {
    uuid: "234ff540-c607-012f-c88f-58d385a7bc34",
    slug: "la-guerre-noire-conqute-du-dahomey",
  },
  {
    uuid: "e88aaa00-c608-012f-eeb3-58d385a7bc34",
    slug: "ladies-home-journal",
  },
  {
    uuid: "0c9733e0-c607-012f-cb59-58d385a7bc34",
    slug: "le-nid-holograph",
  },
  {
    uuid: "fc19a870-c606-012f-f343-58d385a7bc34",
    slug: "le-vere-imagini-et-descritioni-delle-piv-nobilli-citta-del-mondo",
  },
  {
    uuid: "66619bc0-c606-012f-7604-58d385a7bc34",
    slug: "leah-the-forsaken-a-play-in-five-acts",
  },
  {
    uuid: "2e276610-c608-012f-95eb-58d385a7bc34",
    slug: "lettre-monsievr-barrillon-damoncourt-contenant-la-relation-la-description",
  },
  {
    uuid: "5a873df0-c6bc-012f-e513-58d385a7bc34",
    slug: "li-ji-ji-shi",
  },
  {
    uuid: "a4791df0-c606-012f-d435-58d385a7bc34",
    slug: "life-and-adventures-of-robert-the-hermit-of-massachusetts-who-has-lived-14-years",
  },
  {
    uuid: "ee06bd40-c607-012f-759c-58d385a7bc34",
    slug: "life-of-isaac-mason-as-a-slave",
  },
  {
    uuid: "33827610-c607-012f-123d-58d385a7bc34",
    slug: "life-of-lady-jane-grey-and-of-lord-guildford-dudley-her-husband-by-edward",
  },
  {
    uuid: "dc9ee3a0-c607-012f-3527-58d385a7bc34",
    slug: "liure-des-ouvrages-dorfeurerie-fait-par-gilles-lgare-orfeure-du-roy",
  },
  {
    uuid: "5f2dda50-c607-012f-72ef-58d385a7bc34",
    slug: "livre-de-chinois",
  },
  {
    uuid: "deb92100-c607-012f-5acf-58d385a7bc34",
    slug: "lunsford-lane-or-another-helper-from-north-carolina",
  },
  {
    uuid: "ae201a60-c609-012f-fed9-58d385a7bc34",
    slug: "manuel-danatomie-descriptive-du-corps-humain-represente-en-planches",
  },
  {
    uuid: "20000cf0-c607-012f-456c-58d385a7bc34",
    slug: "matthew-peters-a-foreign-immigrant-the-true-story-of-a-life",
  },
  {
    uuid: "ecbefbe0-c607-012f-ed8e-58d385a7bc34",
    slug: "memoir-of-mrs-chloe-spear-a-native-of-africa-who-was-enslaved-in-childhood",
  },
  {
    uuid: "7f5dcd80-c607-012f-c903-58d385a7bc34",
    slug: "memoires-pour-servir-a-lhistoire-des-insectes",
  },
  {
    uuid: "21df75f0-c607-012f-5126-58d385a7bc34",
    slug: "memoirs-of-the-lady-hester-stanhope-as-related-by-herself-in-conversations",
  },
  {
    uuid: "f5923d10-c607-012f-7b9a-58d385a7bc34",
    slug: "memories-of-childhoods-slavery-days",
  },
  {
    uuid: "2716eef0-c624-012f-4dee-58d385a7bc34",
    slug: "the-metronome",
  },
  {
    uuid: "37371480-c607-012f-cbce-58d385a7bc34",
    slug: "microcosm-of-london",
  },
  {
    uuid: "d8b37e20-c606-012f-b1c3-58d385a7bc34",
    slug: "milch-cows-and-dairy-farming",
  },
  {
    uuid: "90d28480-c607-012f-e840-58d385a7bc34",
    slug: "mr-william-shakespeares-comedies-histories-tragedies",
  },
  {
    uuid: "7b98d480-c606-012f-a1a8-58d385a7bc34",
    slug: "mrs-leicesters-school-or-the-history-of-several-young-ladies-related",
  },
  {
    uuid: "59e82730-c6c5-012f-ac1b-58d385a7bc34",
    slug: "mukashigatari-shichiya-no-kura-2",
  },
  {
    uuid: "d0db0070-c607-012f-ba0e-58d385a7bc34",
    slug: "my-life-in-the-south",
  },
  {
    uuid: "1ee8a470-c607-012f-b5ba-58d385a7bc34",
    slug: "my-old-black-mammy",
  },
  {
    uuid: "5b528840-c607-012f-cc38-58d385a7bc34",
    slug: "my-story-of-the-war-a-womans-narrative-of-four-years-personal-experience-as",
  },
  {
    uuid: "f4718d70-c607-012f-92ff-58d385a7bc34",
    slug: "nadrealizam-danas-i-ovde",
  },
  {
    uuid: "51b75c30-c607-012f-0de5-58d385a7bc34",
    slug: "narrative-of-the-adventures-and-escape-of-moses-roper-from-american-slavery",
  },
  {
    uuid: "dfbfcc80-c607-012f-dd59-58d385a7bc34",
    slug: "narrative-of-the-shipwreck-of-the-sophia-on-the-30th-of-may-1819-on-the-western",
  },
  {
    uuid: "219de280-c61f-012f-0338-58d385a7bc34",
    slug: "national-police-gazette",
  },
  {
    uuid: "49117430-c607-012f-e1c3-58d385a7bc34",
    slug: "naufrage-de-la-frgate-la-mduse-faisant-partie-de-lexpdition-du-sngal-en-1816",
  },
  {
    uuid: "fc3b4860-c607-012f-b924-58d385a7bc34",
    slug: "negro-year-book-an-annual-encyclopedia-of-the-negro-1921-1922",
  },
  {
    uuid: "058abf20-c609-012f-7cf2-58d385a7bc34",
    slug: "new-netherland-papers",
  },
  {
    uuid: "bacb13c0-c607-012f-0229-58d385a7bc34",
    slug: "new-york-american",
  },
  {
    uuid: "4b480510-c60a-012f-16cc-58d385a7bc34",
    slug: "new-york-world",
  },
  {
    uuid: "7c719040-c609-012f-ec6e-58d385a7bc34",
    slug: "new-york-evening-graphic",
  },
  {
    uuid: "1f70e8b0-c607-012f-22a5-58d385a7bc34",
    slug: "nos-hommes-et-notre-histoire-notices-biographiques-accompagnees-de-reflexions",
  },
  {
    uuid: "b9830030-c609-012f-e7b8-58d385a7bc34",
    slug: "nova-typis",
  },
  {
    uuid: "84b71d90-0042-0130-e203-58d385a7bc34",
    slug: "novveaux-povrtraitz-et-figvres-de-termes-pour-vser-en-larchitecture-composez",
  },
  {
    uuid: "b8f05500-c606-012f-f3de-58d385a7bc34",
    slug: "novy-ierusalim",
  },
  {
    uuid: "c5f40fb0-c607-012f-fcdd-58d385a7bc34",
    slug: "novy-lef",
  },
  {
    uuid: "423543e0-c607-012f-b3ff-58d385a7bc34",
    slug: "nuremberg-chronicle",
  },
  {
    uuid: "f15cddf0-c607-012f-8e81-58d385a7bc34",
    slug: "office-building-senate",
  },
  {
    uuid: "50018150-c606-012f-bcbb-58d385a7bc34",
    slug: "official-guide-and-monthly-reprint-and-advertiser",
  },
  {
    uuid: "1aab9d20-c607-012f-ca4b-58d385a7bc34",
    slug: "oriental-scenery",
  },
  {
    uuid: "466d3c80-c607-012f-0280-58d385a7bc34",
    slug: "outlaws-of-the-border",
  },
  {
    uuid: "9613eab0-c607-012f-47fd-58d385a7bc34",
    slug: "parafrasis-comentado-sobre-el-pentateuco",
  },
  {
    uuid: "cef29cf0-c607-012f-9491-58d385a7bc34",
    slug: "paris-exposition-reproduced-from-the-official-photographs-taken-under",
  },
  {
    uuid: "6c238830-c607-012f-caee-58d385a7bc34",
    slug: "partial-report-on-city-plan",
  },
  {
    uuid: "83de8c80-c607-012f-9e35-58d385a7bc34",
    slug: "passional-christi-vnd",
  },
  {
    uuid: "35cd7c20-c606-012f-4345-58d385a7bc34",
    slug: "pastorals",
  },
  {
    uuid: "9442bf60-c607-012f-a4d1-58d385a7bc34",
    slug: "paul-et-virginie-2",
  },
  {
    uuid: "d397e390-c606-012f-9b3e-58d385a7bc34",
    slug: "pavli-maccii-emblemata",
  },
  {
    uuid: "013e1e10-c609-012f-3e8d-58d385a7bc34",
    slug: "the-photographic-news-for-amateur-photographers",
  },
  {
    uuid: "8438acd0-c607-012f-3feb-58d385a7bc34",
    slug: "photographs-by-steve-fitch",
  },
  {
    uuid: "965393f0-c607-012f-279f-58d385a7bc34",
    slug: "picturesque-worlds-fair",
  },
  {
    uuid: "8f5b7940-c606-012f-7f99-58d385a7bc34",
    slug: "poems-by-john-g-whittier",
  },
  {
    uuid: "825b94f0-0042-0130-7490-58d385a7bc34",
    slug: "posters-for-books-and-magazines",
  },
  {
    uuid: "24b2dae0-c607-012f-288a-58d385a7bc34",
    slug: "praesens",
  },
  {
    uuid: "d72f9300-c606-012f-9505-58d385a7bc34",
    slug: "preobrazhenskoe-i-okruzhaiushchia-miesta-ikh-proshloe-i-nastoiashchee-sostavil-i",
  },
  {
    uuid: "93c50b90-c607-012f-1e82-58d385a7bc34",
    slug: "primo-volvme-delle-navigationi-et-viaggi-nel-qval-si-contiene-la-descrittione",
  },
  {
    uuid: "b35f5bd0-c607-012f-cf94-58d385a7bc34",
    slug: "proceedings-of-the-semi-centenary-celebration-of-the-african-methodist-episcopal",
  },
  {
    uuid: "8308e620-c607-012f-6f1c-58d385a7bc34",
    slug: "public-libraries-and-popular-education",
  },
  {
    uuid: "8373a760-c608-012f-775d-58d385a7bc34",
    slug: "putevi",
  },
  {
    uuid: "4f387d40-c607-012f-5171-58d385a7bc34",
    slug: "queen-mab-a-philosophical-poem-by-percy-bysshe-shelley-1821-edition-new-york",
  },
  {
    uuid: "2f73ccd0-c608-012f-eeff-58d385a7bc34",
    slug: "radio-merchant",
  },
  {
    uuid: "5d33e400-c606-012f-a896-58d385a7bc34",
    slug: "rasskazy-risunki-shterenberga",
  },
  {
    uuid: "a81f8e60-c607-012f-59b9-58d385a7bc34",
    slug: "reflections-on-the-causes-that-led-to-the-formation-of-the-colonization-society",
  },
  {
    uuid: "c1d0e940-c619-012f-702f-58d385a7bc34",
    slug: "revue-coloniale-microform",
  },
  {
    uuid: "4bd14600-c62c-012f-61d9-58d385a7bc34",
    slug: "robert-louis-stevenson-collection-of-papers-1873-1944-bulk-1881-1917",
  },
  {
    uuid: "c47f3810-c607-012f-ea65-58d385a7bc34",
    slug: "roma",
  },
  {
    uuid: "bb0f9af0-c606-012f-f5c9-58d385a7bc34",
    slug: "sad-tale-of-the-courtship-of-chevalier-slyfox-wikof-showing-his-heart-rending",
  },
  {
    uuid: "5f759d00-c606-012f-3217-58d385a7bc34",
    slug: "salle-de-spectacle-de-bordeaux-par-m-louis",
  },
  {
    uuid: "55359b80-c607-012f-4279-58d385a7bc34",
    slug: "letters-of-the-late-ignatius-sancho-an-african",
  },
  {
    uuid: "5a75a200-c607-012f-0eb6-58d385a7bc34",
    slug: "sansui-ryakugashiki-how-to-draw-simple-landscapes",
  },
  {
    uuid: "a2ba3320-c607-012f-b13f-58d385a7bc34",
    slug: "scenas-africanas-1897-a-1917",
  },
  {
    uuid: "f73a15b0-c617-012f-0189-58d385a7bc34",
    slug: "scrapbook-of-portraits-and-pictures-illustrating-the-life-and-activities",
  },
  {
    uuid: "93f32a00-c606-012f-6d7c-58d385a7bc34",
    slug: "seik-j",
  },
  {
    uuid: "5464d5b0-c607-012f-f33f-58d385a7bc34",
    slug: "seiro-bijin-awase",
  },
  {
    uuid: "685302f0-c607-012f-6d12-58d385a7bc34",
    slug: "sekka-zusetsu",
  },
  {
    uuid: "47d40c30-c607-012f-6da8-58d385a7bc34",
    slug: "sermons-delivered-by-bishop-daniel-a-payne-before-the-general-conference",
  },
  {
    uuid: "aca586a0-c607-012f-ae3d-58d385a7bc34",
    slug: "sermons-on-several-occasions",
  },
  {
    uuid: "9732aec0-c607-012f-7593-58d385a7bc34",
    slug: "seven-pillars-of-wisdom",
  },
  {
    uuid: "b073ad70-c607-012f-03ff-58d385a7bc34",
    slug: "sever-zpad-vchod-jih",
  },
  {
    uuid: "c1cc2a30-c62a-012f-f754-58d385a7bc34",
    slug: "shirley-c-burden-collection",
  },
  {
    uuid: "14689d80-c608-012f-48bf-58d385a7bc34",
    slug: "sketches-from-the-civil-war-in-north-america-1861-62-63",
  },
  {
    uuid: "98bd4630-c606-012f-dc8f-58d385a7bc34",
    slug: "slave-life-in-georgia-a-narrative-of-the-life-sufferings-and-escape-of-john",
  },
  {
    uuid: "cec6d440-c607-012f-8180-58d385a7bc34",
    slug: "slavery-illustrated-in-its-effects-upon-woman-and-domestic-society",
  },
  {
    uuid: "399c6580-c607-012f-be8f-58d385a7bc34",
    slug: "songs-sung-by-the-famous-canadian-jubilee-singers-the-royal-paragon-male",
  },
  {
    uuid: "4d9851f0-c607-012f-91dd-58d385a7bc34",
    slug: "st-petersburgische-hausierer",
  },
  {
    uuid: "ca76ca50-c608-012f-726b-58d385a7bc34",
    slug: "successful-selling-for-the-retail-book-salesman",
  },
  {
    uuid: "1cb43d70-c607-012f-d83b-58d385a7bc34",
    slug: "sunshine-and-sport-in-florida-and-the-west-indies",
  },
  {
    uuid: "f5baa520-c60a-012f-4d1d-58d385a7bc34",
    slug: "tableau-de-leurope-pour-servir-de-supplment-lhistoire-philosophique-politique",
  },
  {
    uuid: "8ffc8330-c6d3-012f-fe10-58d385a7bc34",
    slug: "taigado-gaho",
  },
  {
    uuid: "a12de810-c607-012f-6ba5-58d385a7bc34",
    slug: "ten-jatakas",
  },
  {
    uuid: "c9d4c830-c607-012f-2f5f-58d385a7bc34",
    slug: "mahanipata-jataka",
  },
  {
    uuid: "4fa6c270-c607-012f-9487-58d385a7bc34",
    slug: "a-thankfvll-remembrance-of-gods-mercie",
  },
  {
    uuid: "965e00e0-c606-012f-f675-58d385a7bc34",
    slug: "the-african-preacher",
  },
  {
    uuid: "d27176b0-c606-012f-654f-58d385a7bc34",
    slug: "the-bible-that-is-the-holy-scriptures-contained-in-the-old-new-testament",
  },
  {
    uuid: "a7ff4e10-c60a-012f-b9fe-58d385a7bc34",
    slug: "the-bystander",
  },
  {
    uuid: "5bfbfac0-c606-012f-9802-58d385a7bc34",
    slug: "the-charleston-mercury",
  },
  {
    uuid: "75c46240-c607-012f-2670-58d385a7bc34",
    slug: "the-columbus-gallery-the-discoverer-of-the-new-world-as-represented-in-portraits",
  },
  {
    uuid: "875ad9a0-c607-012f-0138-58d385a7bc34",
    slug: "the-cooper-vignettes",
  },
  {
    uuid: "52ab5b20-c606-012f-2c56-58d385a7bc34",
    slug: "the-denishawn-magazine",
  },
  {
    uuid: "531a8850-c607-012f-0a5d-58d385a7bc34",
    slug: "the-eugene-l-armbruster-collection-of-long-island-photographic-views",
  },
  {
    uuid: "e1125d30-c608-012f-bcba-58d385a7bc34",
    slug: "the-goodrich",
  },
  {
    uuid: "0560bdc0-c60b-012f-6698-58d385a7bc34",
    slug: "the-graphic",
  },
  {
    uuid: "e67fe500-c607-012f-3e09-58d385a7bc34",
    slug: "the-illustrated-american-news",
  },
  {
    uuid: "c924e710-c618-012f-1ccd-58d385a7bc34",
    slug: "the-illustrated-london-news",
  },
  {
    uuid: "cdf27d60-c609-012f-5781-58d385a7bc34",
    slug: "the-muses",
  },
  {
    uuid: "b09916c0-c607-012f-fdc1-58d385a7bc34",
    slug: "the-negro-in-the-christian-pulpit-or-the-two-characters-and-two-destinies-as",
  },
  {
    uuid: "4b63bb20-c607-012f-38a1-58d385a7bc34",
    slug: "the-new-england-anti-slavery-almanac-for-1841",
  },
  {
    uuid: "b2061920-c607-012f-0e67-58d385a7bc34",
    slug: "the-new-york-mercury",
  },
  {
    uuid: "ff168260-c607-012f-22cf-58d385a7bc34",
    slug: "the-paradise-lost-of-milton-2",
  },
  {
    uuid: "575b49d0-c607-012f-b604-58d385a7bc34",
    slug: "the-rational-dame",
  },
  {
    uuid: "c02ca530-c606-012f-0ab5-58d385a7bc34",
    slug: "the-salem-gazette",
  },
  {
    uuid: "8b118760-c608-012f-14ba-58d385a7bc34",
    slug: "the-strand-magazine",
  },
  {
    uuid: "589456c0-c607-012f-6201-58d385a7bc34",
    slug: "the-aborigines-of-porto-rico-and-neighboring-islands",
  },
  {
    uuid: "8be88160-c607-012f-6ba3-58d385a7bc34",
    slug: "the-adventures-of-caleb-williams",
  },
  {
    uuid: "556da980-c606-012f-ee59-58d385a7bc34",
    slug: "the-art-of-swimming",
  },
  {
    uuid: "c0fb3ea0-c607-012f-3cf6-58d385a7bc34",
    slug: "the-book-of-household-management-comprising-information-for-the-mistress",
  },
  {
    uuid: "0e348cc0-c608-012f-7427-58d385a7bc34",
    slug: "the-cotton-industry-an-essay-in-american-economic-history",
  },
  {
    uuid: "4cb37ce0-c607-012f-72da-58d385a7bc34",
    slug: "the-envoy-from-free-hearts-to-the-free",
  },
  {
    uuid: "16bedc10-c607-012f-fbc9-58d385a7bc34",
    slug: "the-family-robinson-crusoe-or-journal-of-a-father-shipwrecked",
  },
  {
    uuid: "66c66a50-c607-012f-3425-58d385a7bc34",
    slug: "the-fisher-boy-of-weymouth-to-which-are-added-the-pet-donkey-and-the-sisters",
  },
  {
    uuid: "9b582010-c606-012f-2a0d-58d385a7bc34",
    slug: "the-history-of-the-maroons-from-their-origin-to-the-establishment-of-their-chief",
  },
  {
    uuid: "285d0250-c608-012f-2411-58d385a7bc34",
    slug: "the-poetical-class-book-or-reading-lessons-for-every-day-in-the-year",
  },
  {
    uuid: "a573c010-c606-012f-6999-58d385a7bc34",
    slug: "the-proceedings-of-the-governor-and-assembly-of-jamaica-in-regard-to-the-maroon",
  },
  {
    uuid: "e32d7990-c607-012f-55a9-58d385a7bc34",
    slug: "the-voyages-travels-of-sir-john-mandevile",
  },
  {
    uuid: "337d69b0-c608-012f-a32a-58d385a7bc34",
    slug: "the-world-of-science-art-and-industry",
  },
  {
    uuid: "dc56e290-c62b-012f-005e-58d385a7bc34",
    slug: "theatre-arts",
  },
  {
    uuid: "90873a50-c606-012f-4f4e-58d385a7bc34",
    slug: "thirty-years-a-slave-from-bondage-to-freedom-the-institution-of-slavery-as-seen",
  },
  {
    uuid: "e1326990-c60a-012f-35b0-58d385a7bc34",
    slug: "thomas-f-madigan-collection-1817-1931",
  },
  {
    uuid: "702763b0-c607-012f-4c89-58d385a7bc34",
    slug: "to-the-cadets-of-the-west-point-military-academy",
  },
  {
    uuid: "cf3d33b0-c619-012f-5dd4-58d385a7bc34",
    slug: "tobacco-a-catalogue-of-the-books-manuscripts-and-engravings-acquired-since-1942",
  },
  {
    uuid: "6727f4e0-c607-012f-30d0-58d385a7bc34",
    slug: "transactions-of-the-missionary-society",
  },
  {
    uuid: "69e9a270-c607-012f-e2a4-58d385a7bc34",
    slug: "trattato-della-pittvra-di-lionardo-da-vinci",
  },
  {
    uuid: "c89092b0-c607-012f-266d-58d385a7bc34",
    slug: "travels-into-several-remote-nations-of-the-world",
  },
  {
    uuid: "ab324270-c607-012f-7472-58d385a7bc34",
    slug: "travels-into-the-inland-parts-of-africa-containing-a-description-of-the-several",
  },
  {
    uuid: "d5e14860-c607-012f-dd7c-58d385a7bc34",
    slug: "travels-into-the-interior-parts-of-africa-by-the-way-of-the-cape-of-good-hope",
  },
  {
    uuid: "af53eaf0-c61d-012f-3430-58d385a7bc34",
    slug: "tsuwamono-tsukushi",
  },
  {
    uuid: "83246900-c606-012f-4719-58d385a7bc34",
    slug: "tkaid-gojsantsugi-emaki",
  },
  {
    uuid: "f30756a0-c607-012f-adf7-58d385a7bc34",
    slug: "un-parisien-dans-les-antilles",
  },
  {
    uuid: "9d462aa0-c607-012f-d0e9-58d385a7bc34",
    slug: "uncle-toms-cabin",
  },
  {
    uuid: "349f3d20-c607-012f-36d2-58d385a7bc34",
    slug: "united-states-mission-to-russia-official-papers-of-albert-gallatin-john-quincy",
  },
  {
    uuid: "a3b5db40-c607-012f-8f8e-58d385a7bc34",
    slug: "uzumaki",
  },
  {
    uuid: "988dd030-c607-012f-acc5-58d385a7bc34",
    slug: "vida-virtudes-y-dones-sobrenaturales-de-la-ven-sierva-de-dios-sor-maria-de-jesus",
  },
  {
    uuid: "83264a20-c609-012f-172d-58d385a7bc34",
    slug: "vier-wege-durch-amerika",
  },
  {
    uuid: "c25f4c70-c607-012f-9240-58d385a7bc34",
    slug: "views-in-south-america",
  },
  {
    uuid: "a2d01f90-c605-012f-fdbe-58d385a7bc34",
    slug: "views-of-ancient-monuments-in-central-america-chiapas-and-yucatan",
  },
  {
    uuid: "52882910-c606-012f-b705-58d385a7bc34",
    slug: "vollstndiges-diarium-von-den-merckwrdigsten-begebenheiten",
  },
  {
    uuid: "66204a70-c607-012f-cedd-58d385a7bc34",
    slug: "voyage-a-lisle-de-france-a-lisle-de-bourbon-au-cap-de-bonne-esperance-etc-avec",
  },
  {
    uuid: "7fd593a0-c606-012f-3ebb-58d385a7bc34",
    slug: "west-india-pickles-diary-of-a-cruise-through-the-west-indies-in-the-yacht",
  },
  {
    uuid: "4c9ca7c0-c607-012f-604a-58d385a7bc34",
    slug: "what-to-drink-the-blue-book-of-beverages-recipes-and-directions-for-making",
  },
  {
    uuid: "08aa2010-c609-012f-ae48-58d385a7bc34",
    slug: "william-greenleaf-webster-papers-1820-1865",
  },
  {
    uuid: "ee355100-c606-012f-ee10-58d385a7bc34",
    slug: "works-of-mr-alexander-pope",
  },
  {
    uuid: "5d9181f0-c607-012f-4fba-58d385a7bc34",
    slug: "yakusha-konotegashiwa",
  },
  {
    uuid: "12dba6d0-c60b-012f-1c5c-58d385a7bc34",
    slug: "yankee-notions",
  },
  {
    uuid: "1c39bd60-c608-012f-ebf2-58d385a7bc34",
    slug: "charles-brockden-brown-papers",
  },
  {
    uuid: "ec4974a0-c608-012f-1446-58d385a7bc34",
    slug: "dorot-jewish-division-postcards",
  },
  {
    uuid: "5c57f2d0-c607-012f-107d-58d385a7bc34",
    slug: "the-poetical-works-of-john-milton",
  },
  {
    uuid: "72df8d90-c607-012f-c1f9-58d385a7bc34",
    slug: "miscellaneous-prints",
  },
  {
    uuid: "45858de0-c607-012f-b676-58d385a7bc34",
    slug: "reproductions-dapres-differents-maitres",
  },
  {
    uuid: "631975a0-c607-012f-1e34-58d385a7bc34",
    slug: "supplment-srie-a-eaux-fortes",
  },
  {
    uuid: "9fc60590-c607-012f-4a4b-58d385a7bc34",
    slug: "srie-c-publications-illustres",
  },
  {
    uuid: "9b7a6430-c607-012f-ab59-58d385a7bc34",
    slug: "le-arti-di-bologna-disegnate-da-annibale-caracci-ed-intagliate-da-simone-guilini",
  },
  {
    uuid: "f711e380-c606-012f-89cb-58d385a7bc34",
    slug: "a-book-of-pictures-in-roland-park-baltimore-maryland",
  },
  {
    uuid: "65b2dbf0-c607-012f-6f87-58d385a7bc34",
    slug: "the-breeds-of-the-domestic-animals-of-the-british-islands",
  },
  {
    uuid: "a680d8a0-c606-012f-d243-58d385a7bc34",
    slug: "the-experience-of-thomas-h-jones",
  },
  {
    uuid: "757cef50-c606-012f-4863-58d385a7bc34",
    slug: "an-itinerary-containing-his-ten-yeeres-travell",
  },
  {
    uuid: "8963fae0-c607-012f-effc-58d385a7bc34",
    slug: "a-memento-of-the-emancipation-proclamation-exposition-of-the-state-of-new-york",
  },
  {
    uuid: "d1e452d0-c607-012f-c9ee-58d385a7bc34",
    slug: "the-narrative-of-bethany-veney-a-slave-woman",
  },
  {
    uuid: "ae179a40-c607-012f-520e-58d385a7bc34",
    slug: "a-narrative-of-a-voyage-to-surinam-of-a-residence-there-during-1805-1806",
  },
  {
    uuid: "9783e690-c606-012f-a00a-58d385a7bc34",
    slug: "a-narrative-of-events-since-the-first-of-august-1834-by-james-williams",
  },
  {
    uuid: "b2344960-c606-012f-2837-58d385a7bc34",
    slug: "il-nuovo-teatro-delle-fabriche-et-edificii-in-prospettiva-di-roma-moderna-sotto",
  },
  {
    uuid: "f80f9e70-c606-012f-02ae-58d385a7bc34",
    slug: "a-souvenir-of-shakespeares-the-merchant-of-venice-as-presented-by-david-belasco",
  },
  {
    uuid: "8d10e230-c606-012f-710c-58d385a7bc34",
    slug: "the-story-of-archer-alexander-from-slavery-to-freedom-march-30-1863",
  },
  {
    uuid: "66be6e30-c607-012f-6f64-58d385a7bc34",
    slug: "the-tapestry-hangings-of-the-house-of-lords-representing-the-several-engagements",
  },
  {
    uuid: "33ba8670-c603-012f-6378-58d385a7bc34",
    slug: "het-tooneel-der-hooft-ketteren",
  },
  {
    uuid: "98956f70-c607-012f-ebc0-58d385a7bc34",
    slug: "i-vestigi-dell-antichit-di-roma",
  },
  {
    uuid: "270a87f0-c608-012f-e0ef-58d385a7bc34",
    slug: "the-young-travellers-or-a-visit-to-the-grandmother",
  },
  {
    uuid: "1c64b090-c607-012f-0268-58d385a7bc34",
    slug: "claircissemens-sur-linscription-grecque-du-monument-trouv-rosette",
  },
  {
    uuid: "c74d3b30-c607-012f-0ed1-58d385a7bc34",
    slug: "ti-emlkezetek-amerikbl",
  },
  {
    uuid: "2dfc28d0-c604-012f-4597-58d385a7bc34",
    slug: "what-shall-we-do-with-our-walls-by-clarence-cook",
  },
  {
    uuid: "85a00c90-c602-012f-6cc6-58d385a7bc34",
    slug: "21-dzeja",
  },
  {
    uuid: "85d13cc0-003e-0130-d817-58d385a7bc34",
    slug: "a-collection-of-pamphlets-relating-to-antivivisection-published-in-various",
  },
  {
    uuid: "76b65030-c602-012f-79ee-58d385a7bc34",
    slug: "a-brief-account-of-the-african-christian-church-in-new-bedford",
  },
  {
    uuid: "756e2120-c605-012f-592a-58d385a7bc34",
    slug: "a-collection-from-the-newspaper-writings-of-nathaniel-peabody-rogers",
  },
  {
    uuid: "abfd0290-c605-012f-280d-58d385a7bc34",
    slug: "a-collection-of-emblemes",
  },
  {
    uuid: "0c338870-c606-012f-510e-58d385a7bc34",
    slug: "a-coon-alphabet",
  },
  {
    uuid: "bef87320-c605-012f-e784-58d385a7bc34",
    slug: "a-curious-hieroglyphick-bible",
  },
  {
    uuid: "a0fc1380-c605-012f-c996-58d385a7bc34",
    slug: "a-history-of-the-amistad-captives-being-a-circumstantial-account-of-the-capture",
  },
  {
    uuid: "7aeede40-c604-012f-c000-58d385a7bc34",
    slug: "a-history-of-the-kgy-relationship-in-america-from-1715-to1900",
  },
  {
    uuid: "79a44390-c602-012f-3732-58d385a7bc34",
    slug: "a-journal-of-the-proceedings-in-the-detection-of-the-conspiracy-formed-by-some",
  },
  {
    uuid: "9b2303f0-c605-012f-626a-58d385a7bc34",
    slug: "a-lassaut-de-lafrique",
  },
  {
    uuid: "8697d430-c605-012f-293f-58d385a7bc34",
    slug: "a-la-louenge-de-dieu",
  },
  {
    uuid: "341aebf0-c606-012f-72b4-58d385a7bc34",
    slug: "a-narrative-of-the-britons-voyage-to-pitcairns-island",
  },
  {
    uuid: "c5b1d230-c604-012f-354a-58d385a7bc34",
    slug: "a-narrative-of-the-captivity-and-sufferings-of-mr-ebenezer-fletcher",
  },
  {
    uuid: "52565a60-c604-012f-84ce-58d385a7bc34",
    slug: "a-narrative-of-voyages-and-commercial-enterprises-by-richard-j-cleveland",
  },
  {
    uuid: "1c5f57b0-c604-012f-3e53-58d385a7bc34",
    slug: "a-particular-account-of-the-late-and-present-great-sufferings-and-oppressions",
  },
  {
    uuid: "6c986ba0-c602-012f-08a0-58d385a7bc34",
    slug: "a-race-between-two-straits",
  },
  {
    uuid: "0e2b8270-c604-012f-53e5-58d385a7bc34",
    slug: "a-relation-or-iournall-of-the-beginning-and-proceedings-of-the-english",
  },
  {
    uuid: "7771a1f0-c602-012f-9a33-58d385a7bc34",
    slug: "a-semi-centenary-discourse-with-a-history-of-the-church",
  },
  {
    uuid: "43ef5ee0-c604-012f-e520-58d385a7bc34",
    slug: "a-signal-success-the-work-and-travels-of-mrs-martha-j-coston-an-autobiography",
  },
  {
    uuid: "94deb7c0-c605-012f-85b9-58d385a7bc34",
    slug: "a-surprising-account-of-the-captivity-and-escape-of-philip-mdonald-and-alexander",
  },
  {
    uuid: "f3b1b2e0-c603-012f-bf7c-58d385a7bc34",
    slug: "a-synopsis-of-the-indian-tribes-within-the-united-states-east-of-the-rocky",
  },
  {
    uuid: "bcf80700-c603-012f-b94a-58d385a7bc34",
    slug: "a-topographical-history-of-surrey",
  },
  {
    uuid: "acc15370-c605-012f-f079-58d385a7bc34",
    slug: "a-treatise-of-the-system-of-the-world",
  },
  {
    uuid: "83e07610-c602-012f-6b89-58d385a7bc34",
    slug: "a-vindication-of-the-rights-of-woman-with-strictures-on-political-and-moral",
  },
  {
    uuid: "0be1bea0-c605-012f-3c28-58d385a7bc34",
    slug: "a-visit-to-the-celestial-city-revised-by-the-committee-of-publication",
  },
  {
    uuid: "45a61070-c604-012f-06d3-58d385a7bc34",
    slug: "a-voice-from-harpers-ferry-a-narrative-of-events-at-harpers-ferry",
  },
  {
    uuid: "ae0d8140-c602-012f-f8ca-58d385a7bc34",
    slug: "a-voyage-of-discovery-made-under-the-orders-of-the-admiralty-in-his-majestys",
  },
  {
    uuid: "3104eaf0-c604-012f-0690-58d385a7bc34",
    slug: "a-voyage-to-the-pacific-ocean-undertaken-by-the-command-of-his-majesty",
  },
  {
    uuid: "54342ec0-c604-012f-b0db-58d385a7bc34",
    slug: "a-e-gallatin-collection-of-whistler-portraits",
  },
  {
    uuid: "5e9b7ff0-c604-012f-3597-58d385a7bc34",
    slug: "abbildung-der-gemein-ntzlichen-haupt-stnde-von-denen-regenten-und-ihren-so",
  },
  {
    uuid: "3c472280-c606-012f-de1d-58d385a7bc34",
    slug: "abriss-des-in-st-petersburg-vorgestellten-lust-feuers-als-der-zwischen",
  },
  {
    uuid: "afa6e720-c602-012f-9625-58d385a7bc34",
    slug: "addresses-at-the-curtis-pine-red-lodge-denning-decoration-day-1901",
  },
  {
    uuid: "65d7c4d0-c602-012f-9279-58d385a7bc34",
    slug: "addresses-of-his-excellency-grover-cleveland-and-booker-t-washington-principal",
  },
  {
    uuid: "17ef3d90-c604-012f-5b08-58d385a7bc34",
    slug: "aesopi-fabule-cum-ordine-vulgari-et-historijs-ad-communem-omnium-vtilitatem",
  },
  {
    uuid: "025b0120-c605-012f-a7ba-58d385a7bc34",
    slug: "aesopus-moralisatus-text",
  },
  {
    uuid: "0cae6e30-0042-0130-388f-58d385a7bc34",
    slug: "africa-containing-a-description-of-the-manners-and-customs-with-some-historical",
  },
  {
    uuid: "36122c10-c604-012f-0694-58d385a7bc34",
    slug: "african-methodist-episcopal-church-magazine",
  },
  {
    uuid: "92f276f0-0040-0130-8c08-58d385a7bc34",
    slug: "afro-american-church-work-and-workers",
  },
  {
    uuid: "d2f2aff0-c603-012f-a900-58d385a7bc34",
    slug: "album-de-voyage-pittoresque-et-archologique-en-russie",
  },
  {
    uuid: "56f97d60-c604-012f-8a5f-58d385a7bc34",
    slug: "album-pintoresco-de-la-isla-de-cuba",
  },
  {
    uuid: "7699a640-c602-012f-008f-58d385a7bc34",
    slug: "alfabeto-in-sogno-esemplare-per-disegnare-di-gmm-pittore-bolognese",
  },
  {
    uuid: "85c3adb0-c605-012f-d43a-58d385a7bc34",
    slug: "al-seu-scal-mathematic",
  },
  {
    uuid: "39414590-c608-012f-5d33-58d385a7bc34",
    slug: "ambition-a-journal-of-inspiration-to-self-help",
  },
  {
    uuid: "15a527f0-c62c-012f-99f6-58d385a7bc34",
    slug: "american-negro-theatre-alumni-photograph-collection",
  },
  {
    uuid: "e8b35750-c602-012f-d1d2-58d385a7bc34",
    slug: "american-caricatures",
  },
  {
    uuid: "efa91760-c604-012f-2908-58d385a7bc34",
    slug: "american-chess-bulletin",
  },
  {
    uuid: "9f169770-c605-012f-8461-58d385a7bc34",
    slug: "american-political-caricatures-other",
  },
  {
    uuid: "6de345b0-c605-012f-c0b3-58d385a7bc34",
    slug: "american-political-caricatures-1798-1840",
  },
  {
    uuid: "3ad30740-c604-012f-a24f-58d385a7bc34",
    slug: "american-slavery-and-colour",
  },
  {
    uuid: "30042600-c607-012f-89f0-58d385a7bc34",
    slug: "americana",
  },
  {
    uuid: "7c9d1cf0-c604-012f-76e2-58d385a7bc34",
    slug: "lah-amerikah",
  },
  {
    uuid: "ab2f22e0-c603-012f-a855-58d385a7bc34",
    slug: "an-account-of-the-proceedings-on-the-trial-of-susan-b-anthony-on-the-charge",
  },
  {
    uuid: "f95be200-c603-012f-6f66-58d385a7bc34",
    slug: "an-account-of-travels-into-the-interior-of-southern-africa",
  },
  {
    uuid: "dd4fb4d0-c602-012f-2dc9-58d385a7bc34",
    slug: "an-address-delivered-before-the-american-academy-of-the-fine-arts-november-17",
  },
  {
    uuid: "0e8404b0-c609-012f-122f-58d385a7bc34",
    slug: "an-essay-on-colonization-particularly-applied-to-the-western-coast-of-africa",
  },
  {
    uuid: "825f6c50-c605-012f-6865-58d385a7bc34",
    slug: "an-essay-towards-the-present-and-future-peace-of-europe-by-the-establishment",
  },
  {
    uuid: "7750f060-c605-012f-6796-58d385a7bc34",
    slug: "the-anglo-african-magazine-2",
  },
  {
    uuid: "d82f3690-c607-012f-8e93-58d385a7bc34",
    slug: "the-animals-guardian-an-illustrated-humane-monthly-journal",
  },
  {
    uuid: "4eb15a70-c624-012f-80f0-58d385a7bc34",
    slug: "anna-held-museum-papers-1897-1987",
  },
  {
    uuid: "60977fd0-c604-012f-dfd9-58d385a7bc34",
    slug: "anno-regni-georgii-iii-regis-magn-britanni-franci-hiberni-quinto",
  },
  {
    uuid: "a50887d0-c604-012f-1bdc-58d385a7bc34",
    slug: "apocalypse-de-saint-jean-par-odilon-redon",
  },
  {
    uuid: "2f403850-c604-012f-f7ad-58d385a7bc34",
    slug: "apocalypsis-sancti-johannis",
  },
  {
    uuid: "e7f9db80-c602-012f-e212-58d385a7bc34",
    slug: "appletons-complete-letter-writer",
  },
  {
    uuid: "84ea5b10-c605-012f-557f-58d385a7bc34",
    slug: "appletons-journal-of-literature-science-and-art",
  },
  {
    uuid: "2c17a2f0-c605-012f-6e7a-58d385a7bc34",
    slug: "apuntes-biogrficos-de-emilia-casanova-de-villaverde-escritos-por-un-contemporneo",
  },
  {
    uuid: "d9e1a8b0-c603-012f-5908-58d385a7bc34",
    slug: "architectonographie-des-thtres",
  },
  {
    uuid: "852860a0-c606-012f-188a-58d385a7bc34",
    slug: "architectural-league-of-new-york-annual-exhibitions",
  },
  {
    uuid: "ca4ff4e0-c603-012f-0b5c-58d385a7bc34",
    slug: "architecture",
  },
  {
    uuid: "fd8afee0-c603-012f-00e4-58d385a7bc34",
    slug: "arkhitektura-moskovskogo-metropolitena-2-ochered",
  },
  {
    uuid: "68f7cc00-c607-012f-2957-58d385a7bc34",
    slug: "art-age",
  },
  {
    uuid: "de36aed0-c602-012f-b46d-58d385a7bc34",
    slug: "art-and-architecture-in-the-service-of-politics",
  },
  {
    uuid: "cf9f0a00-c605-012f-f764-58d385a7bc34",
    slug: "articles-of-confederation-and-perpetual-union-between-the-states",
  },
  {
    uuid: "17419700-c604-012f-177d-58d385a7bc34",
    slug: "artistic-houses-being-a-series-of-interior-views-of-a-number-of-the-most",
  },
  {
    uuid: "6ac89aa0-c61e-012f-504a-58d385a7bc34",
    slug: "arts-decoration",
  },
  {
    uuid: "180790b0-c608-012f-0767-58d385a7bc34",
    slug: "astor-family-papers-1792-1916",
  },
  {
    uuid: "d089ff30-c604-012f-f9d5-58d385a7bc34",
    slug: "aubrey-beardsleys-drawings-to-illustrate-the-tales-of-edgar-allan-poe",
  },
  {
    uuid: "bd0457c0-c607-012f-936f-58d385a7bc34",
    slug: "automobile-blue-book",
  },
  {
    uuid: "cb1e02a0-c602-012f-edae-58d385a7bc34",
    slug: "aya-sofia-constantinople-as-recently-restore-from-the-original-drawings-by-gf",
  },
  {
    uuid: "d5061bf0-c604-012f-1004-58d385a7bc34",
    slug: "aziats-dzejoli-saucieni-dialogi",
  },
  {
    uuid: "5f4397e0-0042-0130-aae3-58d385a7bc34",
    slug: "ballous-pictorial-drawing-room-companion",
  },
  {
    uuid: "10e30e10-c606-012f-518a-58d385a7bc34",
    slug: "ballous-pictorial",
  },
  {
    uuid: "cd8486a0-c605-012f-6d95-58d385a7bc34",
    slug: "banquet-menus-from-czarist-russia",
  },
  {
    uuid: "b66e18a0-c602-012f-f0e8-58d385a7bc34",
    slug: "beadles-pocket-library",
  },
  {
    uuid: "02856520-c605-012f-78b9-58d385a7bc34",
    slug: "benkei-ichidaiki",
  },
  {
    uuid: "123e2480-c605-012f-3816-58d385a7bc34",
    slug: "beschreibung-der-feierlichkeiten-welche-bei-anwesenheit-von-ihro-majestten",
  },
  {
    uuid: "c4001ce0-c604-012f-3875-58d385a7bc34",
    slug: "beschreibung-der-reisz-empfahung-desz-ritterlichen-ordens-volbringung",
  },
  {
    uuid: "72c69400-0042-0130-33c8-58d385a7bc34",
    slug: "beschreibung-der-in-america-neu-erfundenen-provinz-pensylvanien",
  },
  {
    uuid: "864e6610-c605-012f-08fc-58d385a7bc34",
    slug: "beschryving-der-nieuwlyks-uitgevonden-en-geoctrojeerde-slang-brand-spuiten",
  },
  {
    uuid: "6d6a9770-c602-012f-11c6-58d385a7bc34",
    slug: "beschryving-van-spanjen-en-portugal",
  },
  {
    uuid: "299f04f0-c605-012f-39f2-58d385a7bc34",
    slug: "bible-lubeck-steffen-arndes-1494",
  },
  {
    uuid: "bc7378f0-c602-012f-ba84-58d385a7bc34",
    slug: "bible-new-testament-gospels",
  },
  {
    uuid: "0d788350-c604-012f-8313-58d385a7bc34",
    slug: "biblia-sacra-iuxta-vulgatam-quam-dicvnt-editionem",
  },
  {
    uuid: "433f4560-c606-012f-a356-58d385a7bc34",
    slug: "biblia-sacra",
  },
  {
    uuid: "1b53bc90-c604-012f-8fb3-58d385a7bc34",
    slug: "bibliotheca-chalcographica-hoc-est-virtute-et-eruditione-clarorum-virorum",
  },
  {
    uuid: "c0c1ac90-c603-012f-b28e-58d385a7bc34",
    slug: "biography-of-mahommah-g-baquaqua-a-native-of-zoogoo-in-the-interior-of-africa",
  },
  {
    uuid: "d8d68e90-c604-012f-4f01-58d385a7bc34",
    slug: "biography-of-a-spaniel-to-which-is-annexed-the-idiot-a-tale",
  },
  {
    uuid: "e2a46770-c605-012f-e823-58d385a7bc34",
    slug: "black-holes",
  },
  {
    uuid: "9fef98c0-c605-012f-0c60-58d385a7bc34",
    slug: "the-black-phalanx-a-history-of-the-negro-soldiers-of-the-united-states",
  },
  {
    uuid: "8768f000-c604-012f-7384-58d385a7bc34",
    slug: "borsszen-janko",
  },
  {
    uuid: "fd869d30-c603-012f-303d-58d385a7bc34",
    slug: "the-bow-in-the-cloud",
  },
  {
    uuid: "3f2d6520-c605-012f-1004-58d385a7bc34",
    slug: "britannias-triumph-in-the-year-1762",
  },
  {
    uuid: "78262c50-c602-012f-a8ec-58d385a7bc34",
    slug: "broadsides-posters-and-playbills",
  },
  {
    uuid: "d10955c0-c603-012f-d1c4-58d385a7bc34",
    slug: "bdne-ognie",
  },
  {
    uuid: "194553f0-c604-012f-d044-58d385a7bc34",
    slug: "c-iulii-csaris-rerum-ab-se-gestarum-commentarii-de-bello-gallico-libri-viii",
  },
  {
    uuid: "0381ed00-c6e0-012f-4ca4-58d385a7bc34",
    slug: "cabinet-card-collection-2",
  },
  {
    uuid: "c73d4800-c604-012f-6870-58d385a7bc34",
    slug: "caen-et-bayeux",
  },
  {
    uuid: "7bfc66a0-c602-012f-6a18-58d385a7bc34",
    slug: "calengier",
  },
  {
    uuid: "105f4940-c604-012f-33ca-58d385a7bc34",
    slug: "campaigning-on-the-oxus-and-the-fall-of-khiva-by-ja-macgahan-correspondent",
  },
  {
    uuid: "21de2710-c605-012f-0789-58d385a7bc34",
    slug: "cane-by-jean-toomer-with-a-foreword-by-waldo-frank",
  },
  {
    uuid: "8061eff0-c602-012f-bdfd-58d385a7bc34",
    slug: "caribbean-area-trinidad",
  },
  {
    uuid: "5181ad50-c604-012f-ef7c-58d385a7bc34",
    slug: "caricatures-graphic",
  },
  {
    uuid: "5bb508f0-0042-0130-20f6-58d385a7bc34",
    slug: "caricatures-and-book-illustrations",
  },
  {
    uuid: "5d0828d0-c604-012f-fdc1-58d385a7bc34",
    slug: "systema-natur-sive-regna-tria-natur-systematice-proposita-per-classes-ordines",
  },
  {
    uuid: "7ec51490-c606-012f-1ab8-58d385a7bc34",
    slug: "the-carpet-and-upholstery-trade-review",
  },
  {
    uuid: "23482be0-c605-012f-5f72-58d385a7bc34",
    slug: "cartoons-for-the-cause-1886-1896",
  },
  {
    uuid: "b3d795d0-c606-012f-389f-58d385a7bc34",
    slug: "cartoons-of-our-war-with-spain",
  },
  {
    uuid: "ff16fa40-c603-012f-4aea-58d385a7bc34",
    slug: "catchisme-en-crole",
  },
  {
    uuid: "e6bc66c0-c603-012f-240d-58d385a7bc34",
    slug: "centralasien-landschaften-und-vlker-in-kaschgar-turkestan-kaschmir-und-tibet",
  },
  {
    uuid: "a426e550-c605-012f-1224-58d385a7bc34",
    slug: "cham-au-salon-de-1863-en-pologne-croquis-contemporains-revue-de-lanne-1866-qui",
  },
  {
    uuid: "ec138a90-c602-012f-e76b-58d385a7bc34",
    slug: "chap-books-of-the-eighteenth-century",
  },
  {
    uuid: "d1ed5eb0-c603-012f-fcc1-58d385a7bc34",
    slug: "charades-alphabtiques",
  },
  {
    uuid: "6f022810-0042-0130-565c-58d385a7bc34",
    slug: "charles-bianconi-a-biography-1786-1875",
  },
  {
    uuid: "7d8ffaa0-c606-012f-0323-58d385a7bc34",
    slug: "charles-blue-diary-kept-on-board-the-uss-vandalia",
  },
  {
    uuid: "9e0700f0-c605-012f-a907-58d385a7bc34",
    slug: "charles-d-wolf-of-guadaloupe-his-ancestors-and-descendants-being-a-complete",
  },
  {
    uuid: "dc08e200-c606-012f-9261-58d385a7bc34",
    slug: "charles-smith-collection",
  },
  {
    uuid: "d27ea840-c602-012f-0b0f-58d385a7bc34",
    slug: "cherokee-phoenix",
  },
  {
    uuid: "b4340570-c602-012f-4016-58d385a7bc34",
    slug: "china-imperial-maritime-customs-illustrated-catalogue-of-the-chinese-collection",
  },
  {
    uuid: "d50bf6f0-c605-012f-cb21-58d385a7bc34",
    slug: "a-chippendale-romance",
  },
  {
    uuid: "81ab6cc0-c602-012f-4994-58d385a7bc34",
    slug: "choviekut-s-dve-litsa",
  },
  {
    uuid: "67094f00-c604-012f-dd4f-58d385a7bc34",
    slug: "chronica-hungarorum",
  },
  {
    uuid: "c98ca5b0-c602-012f-39e7-58d385a7bc34",
    slug: "chronica-de-la-provincia-de-s-antonio-de-los-charcas-del-orden-de-nro-seraphico",
  },
  {
    uuid: "d4e74d70-c628-012f-9f8c-58d385a7bc34",
    slug: "civil-rights-congress-photograph-collection",
  },
  {
    uuid: "2a9b7670-c608-012f-1c8d-58d385a7bc34",
    slug: "autograph-verses-and-photographs-of-southern-poets-of-the-civil-war",
  },
  {
    uuid: "6aa52820-c602-012f-615e-58d385a7bc34",
    slug: "civitates-orbis-terrarvm-liber-primvs-tertivs",
  },
  {
    uuid: "07aac7e0-c603-012f-b29c-58d385a7bc34",
    slug: "cl-ptolemaei-alexandrini-geographiae-libri-octo-recognitiiam-et-diligenter",
  },
  {
    uuid: "33490fc0-c605-012f-4dab-58d385a7bc34",
    slug: "clarissimi-viri-d-andre-alciati-emblematum-libellus-uigilanter-recognitus-i",
  },
  {
    uuid: "ce8ed7d0-c604-012f-ffec-58d385a7bc34",
    slug: "texas-guinan-scrapbook-and-clippings",
  },
  {
    uuid: "295ba810-c607-012f-a6ca-58d385a7bc34",
    slug: "clotelle-or-the-colored-heroine-a-tale-of-the-southern-states",
  },
  {
    uuid: "3e1e7ec0-c606-012f-b20c-58d385a7bc34",
    slug: "collection-de-tableuax-modernes",
  },
  {
    uuid: "df017f60-c602-012f-52ae-58d385a7bc34",
    slug: "collection-of-etruscan-greek-and-roman-antiquities-from-the-cabinet",
  },
  {
    uuid: "fe49a860-c603-012f-a04d-58d385a7bc34",
    slug: "columbia-1880-1900",
  },
  {
    uuid: "1976fae0-c603-012f-7ab6-58d385a7bc34",
    slug: "comedio-del-divino-poeta-danthe-alighieri-con-la-dotta-leggiadra-spositione-di",
  },
  {
    uuid: "cb3417c0-c604-012f-57df-58d385a7bc34",
    slug: "comentari-della-moscovia-et-parimente-della-russia-delle-altre-cose-belle",
  },
  {
    uuid: "2b27f710-c606-012f-a118-58d385a7bc34",
    slug: "commentaire-historique-sur-les-oeuvres-de-lauteur-de-la-henriade-c-avec",
  },
  {
    uuid: "d704ded0-c604-012f-c3c3-58d385a7bc34",
    slug: "commentaire-historique-sur-les-oeuvres-de-lauteur-de-la-henriade-c-avec-2",
  },
  {
    uuid: "2adec8a0-c603-012f-1054-58d385a7bc34",
    slug: "commerce-of-the-prairies-of-the-journal-of-a-santa-f-trader-during-eight",
  },
  {
    uuid: "9673e9c0-c605-012f-58c9-58d385a7bc34",
    slug: "common-sense-addressed-to-the-inhabitants-of-america-on-the-following",
  },
  {
    uuid: "3c30af40-c604-012f-01cb-58d385a7bc34",
    slug: "common-sense-addressed-to-the-inhabitants-of-america-on-the-following-subjects-i",
  },
  {
    uuid: "baef5670-c602-012f-dd41-58d385a7bc34",
    slug: "compte-rendu-officiel-de-la-manifestation-internationale-en-lhonneur-de-charles",
  },
  {
    uuid: "91e4d570-c607-012f-cab6-58d385a7bc34",
    slug: "confederate-veteran",
  },
  {
    uuid: "62982780-c604-012f-6372-58d385a7bc34",
    slug: "confusion-de-confusiones-dialogos-curiosos-entre-un-philosopho-agudo-un-mercador",
  },
  {
    uuid: "70599020-c607-012f-01ee-58d385a7bc34",
    slug: "conjurers-monthly-magazine",
  },
  {
    uuid: "38761980-c603-012f-85c4-58d385a7bc34",
    slug: "conrad-tubman-photograph-collection",
  },
  {
    uuid: "eb1184e0-c603-012f-72ff-58d385a7bc34",
    slug: "conradi-gesneri-de-rervm-fossilivm-lapidvm-et-gemmarvm-maxim-figuris",
  },
  {
    uuid: "1790f140-c604-012f-afcf-58d385a7bc34",
    slug: "considerations-on-keeping-negroes-recommended-to-the-professors-of-christianity",
  },
  {
    uuid: "64c8d160-c605-012f-d071-58d385a7bc34",
    slug: "constitution-de-la-colonie-franaise-de-saint-domingue",
  },
  {
    uuid: "1590a9d0-c604-012f-1c1d-58d385a7bc34",
    slug: "la-construction-moderne",
  },
  {
    uuid: "16bc9fb0-c603-012f-cb35-58d385a7bc34",
    slug: "contending-forces",
  },
  {
    uuid: "6ebc29d0-c603-012f-23ad-58d385a7bc34",
    slug: "contrasts-or",
  },
  {
    uuid: "c5d3c070-c602-012f-f94b-58d385a7bc34",
    slug: "copper-work-a-text-book-for-teachers-and-students-in-the-manual-arts",
  },
  {
    uuid: "05ea1fa0-c604-012f-6a52-58d385a7bc34",
    slug: "coronica-de-la-religiosissima-provincia-de-los-doze-apostoles-del-perv",
  },
  {
    uuid: "997a4030-c617-012f-5896-58d385a7bc34",
    slug: "country-homes",
  },
  {
    uuid: "1edc8070-c606-012f-071b-58d385a7bc34",
    slug: "courier-of-new-hampshire",
  },
  {
    uuid: "e8d30ac0-c603-012f-98b1-58d385a7bc34",
    slug: "cuba-with-pen-and-pencil-2",
  },
  {
    uuid: "d1abe640-c602-012f-be2b-58d385a7bc34",
    slug: "cyclopdia-of-universal-history-being-an-account-of-the-principal-events",
  },
  {
    uuid: "9df440c0-c604-012f-e0ee-58d385a7bc34",
    slug: "crmonies-et-coutumes-religieuses-de-tous-les-peuples-du-monde-representes",
  },
  {
    uuid: "271b57b0-c604-012f-3fcc-58d385a7bc34",
    slug: "d-philip-iv-hisp-et-ind-regi-opt-max-ioannes-de-solorzano-pereira",
  },
  {
    uuid: "25bedee0-c604-012f-0097-58d385a7bc34",
    slug: "dada-siegt-eine-bilanz-des-dadaismus",
  },
  {
    uuid: "d0b996d0-c602-012f-0309-58d385a7bc34",
    slug: "das-buch-der-chroniken",
  },
  {
    uuid: "696e7110-c602-012f-918d-58d385a7bc34",
    slug: "days-and-ways-in-old-boston",
  },
  {
    uuid: "bfe32ad0-c605-012f-7302-58d385a7bc34",
    slug: "de-bello-belgico",
  },
  {
    uuid: "dba54360-c605-012f-57c1-58d385a7bc34",
    slug: "de-optimo-reip-statv-deqve-noua-insula-vtopia-libellus-uere-aureus-nec-minus",
  },
  {
    uuid: "90b40940-c605-012f-fa9d-58d385a7bc34",
    slug: "declaratie-van-sijn-koninghlijcke-majesteyt-van-portugael-don-ioan",
  },
  {
    uuid: "1d5d4f00-c605-012f-2aea-58d385a7bc34",
    slug: "defensorium-inuiolate-perpetueque-virginitatis-castissime-dei-genitricis-marie",
  },
  {
    uuid: "023eb310-c607-012f-feb9-58d385a7bc34",
    slug: "dekorative-kunst",
  },
  {
    uuid: "fe9f7d20-c603-012f-b0ad-58d385a7bc34",
    slug: "della-pi-che-nouissima-iconologia-di-cesare-ripa-perugino-caualier-di-ss-maurito",
  },
  {
    uuid: "69b4d510-c605-012f-00c0-58d385a7bc34",
    slug: "delle-famiglie-nobili-napoletane-di-scipione-ammirato-parte-prima-seconda",
  },
  {
    uuid: "30a02b00-c606-012f-4d2f-58d385a7bc34",
    slug: "des-representations-en-musique-anciennes-et-modernes",
  },
  {
    uuid: "f87222d0-c604-012f-6634-58d385a7bc34",
    slug: "des-reprsentations-en-musique-anciennes-et-modernes",
  },
  {
    uuid: "6a1ed940-c602-012f-1fd5-58d385a7bc34",
    slug: "description-de-la-nigritie",
  },
  {
    uuid: "8ddb2950-c604-012f-80b3-58d385a7bc34",
    slug: "description-de-la-ville-de-peking",
  },
  {
    uuid: "9985caa0-c604-012f-21a5-58d385a7bc34",
    slug: "description-geographique-de-la-guiane",
  },
  {
    uuid: "49ba8910-c605-012f-d9d7-58d385a7bc34",
    slug: "description-historique-de-la-ville-de-paris-et-de-ses-environs",
  },
  {
    uuid: "ba025f70-c605-012f-4119-58d385a7bc34",
    slug: "description-of-the-plates-representing-the-itinerant-traders-of-london",
  },
  {
    uuid: "dfe8f610-c602-012f-4bc3-58d385a7bc34",
    slug: "descrizione-delle-feste-fatte-in-firenze-gran-dvca-di-toscana-e-vittoria",
  },
  {
    uuid: "a1331eb0-c604-012f-10e3-58d385a7bc34",
    slug: "descrizione-delle-grandiose-solennita-celebrate-alla-sublime-presenza-di-sua",
  },
  {
    uuid: "ce0a28e0-c602-012f-903b-58d385a7bc34",
    slug: "der-deutsche-ptolemaeus",
  },
  {
    uuid: "ecba9fd0-c604-012f-6f1b-58d385a7bc34",
    slug: "deuttung-der-zwo-grewlichen-figuren-bapstesels-zu-rom-vnd-munchkalbs-zu-freyberg",
  },
  {
    uuid: "2b9eb8a0-c606-012f-e887-58d385a7bc34",
    slug: "di-idishe-bihne",
  },
  {
    uuid: "4d082d60-c604-012f-f2f2-58d385a7bc34",
    slug: "dicks-standard-plays-the-iron-chest",
  },
  {
    uuid: "c4daee90-c604-012f-dbd3-58d385a7bc34",
    slug: "die-schammade",
  },
  {
    uuid: "de0a5d60-c603-012f-a53d-58d385a7bc34",
    slug: "die-deutsche-kaiserstadt-berlin-und-ihre-umgang",
  },
  {
    uuid: "a7d5b320-c604-012f-45f2-58d385a7bc34",
    slug: "dignimont",
  },
  {
    uuid: "3955aad0-c603-012f-a64c-58d385a7bc34",
    slug: "discours-qui-a-remport-le-prix-a-lacademie-de-dijon-en-lanne-1750",
  },
  {
    uuid: "96c17e90-003e-0130-c0c8-58d385a7bc34",
    slug: "dmitrevsk-sobor-vo-vladimrie-na-kliazmie",
  },
  {
    uuid: "e5e25c90-c604-012f-ba4e-58d385a7bc34",
    slug: "domestic-misery-or-the-victim-of-seduction-a-pathetic-tale-addressed",
  },
  {
    uuid: "240b3d70-c603-012f-28dc-58d385a7bc34",
    slug: "domini-simphoriani-champerij-lugdune",
  },
  {
    uuid: "685e5e20-c605-012f-e6b4-58d385a7bc34",
    slug: "dosugi-krymskago-sudi-ili-vtoroe-puteshestve-v-tavridu",
  },
  {
    uuid: "eec554e0-c603-012f-e019-58d385a7bc34",
    slug: "drammi-scelti-dell-abbate-pietro-metastasio",
  },
  {
    uuid: "6fbfb5b0-c604-012f-a046-58d385a7bc34",
    slug: "drey-schne-vnd-lustige-bcher-von-der-hohen-zollerischen-hochzeyt-welcher-gestalt",
  },
  {
    uuid: "d96469d0-c604-012f-4ca6-58d385a7bc34",
    slug: "du-bartas-his-diuine-weekes-and-workes-with-a-compleate-collectio-of-all",
  },
  {
    uuid: "185d31f0-c604-012f-e1e1-58d385a7bc34",
    slug: "du-contract-social-ou-principes-du-droit-politique",
  },
  {
    uuid: "f2ea4610-c605-012f-bfe7-58d385a7bc34",
    slug: "dutch-genre-prints-depicting-smoking-and-related-subjects",
  },
  {
    uuid: "943d5310-003e-0130-217e-58d385a7bc34",
    slug: "elegiac-sonnets-and-other-poems",
  },
  {
    uuid: "4bf41870-c604-012f-0c47-58d385a7bc34",
    slug: "elements-of-bacchus-or-toasts-and-sentiments-given-by-distinguished-characters",
  },
  {
    uuid: "389a8c00-c609-012f-26ad-58d385a7bc34",
    slug: "elizabeth-garver-jordan-papers-1891-1945",
  },
  {
    uuid: "345e5d70-c604-012f-208c-58d385a7bc34",
    slug: "emancipation-its-course-and-progress-from-1481-bc-to-1875-a-d-with-a-review",
  },
  {
    uuid: "06c7e740-c603-012f-ab0e-58d385a7bc34",
    slug: "emblemata-andre-alciati",
  },
  {
    uuid: "b2036d50-c605-012f-b884-58d385a7bc34",
    slug: "emporium",
  },
  {
    uuid: "5debae40-c604-012f-2427-58d385a7bc34",
    slug: "engagement-ring-given-to-harriet-westbrook-by-percy-bysshe-shelley",
  },
  {
    uuid: "bd26d630-c602-012f-b5ee-58d385a7bc34",
    slug: "englands-grievance-discovered-in-relation-to-the-coal-trade",
  },
  {
    uuid: "1a4fb640-c603-012f-582c-58d385a7bc34",
    slug: "english-caricatures-1760-1769",
  },
  {
    uuid: "426c6cd0-c604-012f-b9c2-58d385a7bc34",
    slug: "engravings-from-the-pictures-sketches-painted-by-sir-joshua-reynolds-comprising",
  },
  {
    uuid: "4a16bf50-c604-012f-e283-58d385a7bc34",
    slug: "engravings-of-scenes-from-the-history-of-the-netherlands-france-and-germany-1535",
  },
  {
    uuid: "fcbfd930-c603-012f-3292-58d385a7bc34",
    slug: "ensayos-politicos-segunda-serie",
  },
  {
    uuid: "1bac6fa0-c605-012f-6b35-58d385a7bc34",
    slug: "enshoku-shinasadame",
  },
  {
    uuid: "a5e3f900-c605-012f-5394-58d385a7bc34",
    slug: "lentree-de-tres-grand-tres-chrestien-tres-magnanime-et-victorievx-prince-henry",
  },
  {
    uuid: "e8365950-c603-012f-71fe-58d385a7bc34",
    slug: "entstehung-fortgang-und-ietzige-beschaffenheit-der-russischen-iagdmusik",
  },
  {
    uuid: "0838aaf0-c604-012f-4b4c-58d385a7bc34",
    slug: "espaa-artistica-y-monumental",
  },
  {
    uuid: "7b54af40-c602-012f-4870-58d385a7bc34",
    slug: "essai-sur-larchitecture-par-le-p-laugier",
  },
  {
    uuid: "ae713440-c605-012f-28f6-58d385a7bc34",
    slug: "essays-on-physiognomy",
  },
  {
    uuid: "dd46ada0-c603-012f-c22b-58d385a7bc34",
    slug: "etchings-from-the-works-of-richard-wilson-with-some-memoirs-of-his-life-etc",
  },
  {
    uuid: "7d1c86e0-c604-012f-03a4-58d385a7bc34",
    slug: "etudes-prises-dans-le-bas-peuple-ou-les-cris-de-paris",
  },
  {
    uuid: "e5704300-c607-012f-0dd3-58d385a7bc34",
    slug: "the-evangelist",
  },
  {
    uuid: "f3388280-c603-012f-9d1e-58d385a7bc34",
    slug: "evidence-upon-oath-touching-the-condition-and-treatment-of-the-negro-population",
  },
  {
    uuid: "e97676e0-c602-012f-88ac-58d385a7bc34",
    slug: "lexposition-universelle-de-1867-illustre-publication-internationale-autorise",
  },
  {
    uuid: "42ab9700-c605-012f-6574-58d385a7bc34",
    slug: "f-thom-campanell-civitas-solis-poetica-idea-reipublic-philosophic",
  },
  {
    uuid: "bf6df450-c604-012f-2904-58d385a7bc34",
    slug: "f-w-putzgers-historischer-schul-atlas-zur-alten-mittleren-und-neuen-geschichte",
  },
  {
    uuid: "70618430-0042-0130-37a3-58d385a7bc34",
    slug: "fables-ancient-and-modern-adapted-for-the-use-of-children-from-three-to-eight",
  },
  {
    uuid: "bcd413a0-c604-012f-5abc-58d385a7bc34",
    slug: "fables-choisies",
  },
  {
    uuid: "199dfc00-c604-012f-7ddb-58d385a7bc34",
    slug: "fama-y-obras-posthumas-del-fenix-de-mexico-decima-musa-poetisa-americana",
  },
  {
    uuid: "5dbb6ce0-c604-012f-0216-58d385a7bc34",
    slug: "feuilles-dherbe",
  },
  {
    uuid: "a5e88cd0-c604-012f-8c8f-58d385a7bc34",
    slug: "final-report-on-the-geology-of-massachusetts",
  },
  {
    uuid: "dd1fb9d0-c606-012f-6df4-58d385a7bc34",
    slug: "fine-arts-journal-devoted-to-art-music-and-literature",
  },
  {
    uuid: "c43a2b20-c606-012f-9a37-58d385a7bc34",
    slug: "fireworks",
  },
  {
    uuid: "6165ca30-0042-0130-62a7-58d385a7bc34",
    slug: "fliegende-bltter",
  },
  {
    uuid: "0187a500-c604-012f-847f-58d385a7bc34",
    slug: "florilegium-diversorum-epigrammatum-in-septem-libros",
  },
  {
    uuid: "6aedbe80-c602-012f-e35c-58d385a7bc34",
    slug: "for-the-presbyterian-female-of-colors-enterprising-society-in-baltimore",
  },
  {
    uuid: "7134daa0-0042-0130-ae7c-58d385a7bc34",
    slug: "france-pittoresque-ou-description-pittoresque-topographique-et-statistique",
  },
  {
    uuid: "54988d60-c605-012f-212a-58d385a7bc34",
    slug: "free-military-school-for-applicants-for-commands-of-colored-troops-no-1210",
  },
  {
    uuid: "563afc30-c604-012f-61fa-58d385a7bc34",
    slug: "the-freedmans-spelling-book-the-freedmans-second-reader-the-freedmans-third",
  },
  {
    uuid: "26a4ec10-c603-012f-f4a3-58d385a7bc34",
    slug: "fuji-no-hitoana",
  },
  {
    uuid: "ee159770-c604-012f-9fba-58d385a7bc34",
    slug: "gail-hamiltons-life-in-letters",
  },
  {
    uuid: "791cbb10-c605-012f-61e3-58d385a7bc34",
    slug: "die-gegenstandslose-welt",
  },
  {
    uuid: "f05da800-c604-012f-ad94-58d385a7bc34",
    slug: "gems-from-the-dsseldorf-gallery",
  },
  {
    uuid: "ba178c10-c605-012f-dc30-58d385a7bc34",
    slug: "genera-florae-americae-boreali-orientalis-illustrata",
  },
  {
    uuid: "afd6a000-c609-012f-79ea-58d385a7bc34",
    slug: "generelle-morphologie-der-organismen-allgemeine-grundzge-der-organischen",
  },
  {
    uuid: "20ed58d0-c605-012f-e311-58d385a7bc34",
    slug: "genji-monogatari",
  },
  {
    uuid: "366c1430-c606-012f-f104-58d385a7bc34",
    slug: "geographia-americae",
  },
  {
    uuid: "ee95c190-c604-012f-a7fb-58d385a7bc34",
    slug: "geographia-vniversalis-vetvs-et-nova-complectens-clavdii-ptolemi-enarrationis",
  },
  {
    uuid: "8061f0c0-c604-012f-c273-58d385a7bc34",
    slug: "geography-for-beginners-or-the-instructers-sic-assistant-in-giving-first-lessons",
  },
  {
    uuid: "06f08710-c609-012f-acff-58d385a7bc34",
    slug: "geology-of-new-york",
  },
  {
    uuid: "78998d40-c61d-012f-09fe-58d385a7bc34",
    slug: "george-jones-papers-1825-1894-bulk-1860-1887",
  },
  {
    uuid: "bdc0fed0-c604-012f-40e1-58d385a7bc34",
    slug: "georgii-agricol-de-ortu-causis-subterraneorum-lib-v-denatura-eorum-qu-effluunt",
  },
  {
    uuid: "a6185720-c602-012f-1f17-58d385a7bc34",
    slug: "gerhard-schnings-norges-riiges-historie",
  },
  {
    uuid: "71140230-c602-012f-ab1e-58d385a7bc34",
    slug: "geschichte-der-insel-hayti-und-ihres-negerstaats",
  },
  {
    uuid: "1590b4c0-c60b-012f-3639-58d385a7bc34",
    slug: "gil-blas-illustr",
  },
  {
    uuid: "0264fea0-c604-012f-9c31-58d385a7bc34",
    slug: "glossary-of-ecclesiastical-ornament-and-costume",
  },
  {
    uuid: "3517d7a0-c605-012f-84ef-58d385a7bc34",
    slug: "gospel-according-to-saint-luke",
  },
  {
    uuid: "44d9bef0-c605-012f-4d21-58d385a7bc34",
    slug: "gottlieb-mittelbergers-reise-nach-pennsylvanien-im-jahr-1750-und-rkreise-nach",
  },
  {
    uuid: "7fad92b0-c602-012f-c988-58d385a7bc34",
    slug: "government",
  },
  {
    uuid: "1e9cb940-c609-012f-862f-58d385a7bc34",
    slug: "the-great-metropolis-or-new-york-almanac",
  },
  {
    uuid: "c2e7b800-c606-012f-ea9a-58d385a7bc34",
    slug: "der-groyser-kundes",
  },
  {
    uuid: "f08d9a20-c603-012f-6b7b-58d385a7bc34",
    slug: "guide-to-the-crystal-palace-and-its-park-and-gardens-by-samuel-phillips",
  },
  {
    uuid: "c865ebc0-c605-012f-2a0a-58d385a7bc34",
    slug: "hachi-kazuki-no-soshi",
  },
  {
    uuid: "8e828fb0-c6b4-012f-d36e-58d385a7bc34",
    slug: "harlem-scrapbook-franklin-f-hopper-scrapbook",
  },
  {
    uuid: "84c0c500-c602-012f-2fd6-58d385a7bc34",
    slug: "harpers-pictorial-history-of-the-war-with-spain",
  },
  {
    uuid: "333be380-c603-012f-4be3-58d385a7bc34",
    slug: "hasshu-gafu",
  },
  {
    uuid: "1cfae750-c606-012f-1ef3-58d385a7bc34",
    slug: "heirloom-scarf-ring-descended-through-family-of-percy-bysshe-shelley",
  },
  {
    uuid: "466888d0-c605-012f-ee76-58d385a7bc34",
    slug: "henry-whitehead-1825-1896-a-memorial-sketch",
  },
  {
    uuid: "ccde48c0-c605-012f-efd9-58d385a7bc34",
    slug: "hermann-von-wissmann-deutschlands-grsster-afrikaner-sein-leben-und-wirken-unter",
  },
  {
    uuid: "655c5f30-c602-012f-df86-58d385a7bc34",
    slug: "herodoti-halicarnasei-libri-novem",
  },
  {
    uuid: "54169960-0042-0130-9db4-58d385a7bc34",
    slug: "the-hindu-pantheon",
  },
  {
    uuid: "2ad05270-c606-012f-6690-58d385a7bc34",
    slug: "hiram-revels-photograph-collection",
  },
  {
    uuid: "61850640-c605-012f-5a33-58d385a7bc34",
    slug: "histoire-de-la-guerre-du-mexique",
  },
  {
    uuid: "1e01ccd0-c605-012f-cf9e-58d385a7bc34",
    slug: "histoire-des-ordres-monastiques-religieux-et-militaires",
  },
  {
    uuid: "68f1a850-c605-012f-0664-58d385a7bc34",
    slug: "historical-notes-of-saint-james-parish-hyde-park-on-hudson-new-york",
  },
  {
    uuid: "c7dd1b20-c602-012f-d089-58d385a7bc34",
    slug: "history-of-cumberland-maryland-from-the-time-of-the-indian-town-caiuctucuc",
  },
  {
    uuid: "bec6af60-c602-012f-ecae-58d385a7bc34",
    slug: "history-of-long-island-from-its-earliest-settlement-to-the-present-time",
  },
  {
    uuid: "13b77850-c606-012f-1e56-58d385a7bc34",
    slug: "history-of-the-negro-race-in-america-from-1619-to-1880",
  },
  {
    uuid: "0266f0d0-c604-012f-3e06-58d385a7bc34",
    slug: "history-of-the-captivity-and-sufferings-of-mrs-maria-martin",
  },
  {
    uuid: "5bb14760-c605-012f-8508-58d385a7bc34",
    slug: "history-of-the-cotton-manufacture-in-great-britain-with-a-notice-of-its-early",
  },
  {
    uuid: "7be841f0-c605-012f-3752-58d385a7bc34",
    slug: "history-of-the-expedition-under-the-command-of-captains-lewis-and-clark",
  },
  {
    uuid: "7db362c0-c602-012f-2f77-58d385a7bc34",
    slug: "history-of-the-work-of-connecticut-women-at-the-worlds-columbian-exposition",
  },
  {
    uuid: "9dc5b560-c604-012f-90a7-58d385a7bc34",
    slug: "hokuetsu-seppu",
  },
  {
    uuid: "3f5e42e0-c607-012f-7ff5-58d385a7bc34",
    slug: "les-hommes-daujourdhui-publication-illustre",
  },
  {
    uuid: "d50b1560-c602-012f-5c7e-58d385a7bc34",
    slug: "hornbook",
  },
  {
    uuid: "917bd8a0-c607-012f-6dff-58d385a7bc34",
    slug: "house-furnishing-review",
  },
  {
    uuid: "b866a140-c605-012f-9b00-58d385a7bc34",
    slug: "hovwelyck",
  },
  {
    uuid: "beb60190-c60d-012f-d13b-58d385a7bc34",
    slug: "hudson-gazette",
  },
  {
    uuid: "15970fb0-c608-012f-1c92-58d385a7bc34",
    slug: "humphreys-journal-of-photography-and-the-allied-arts-and-sciences",
  },
  {
    uuid: "e6698b10-c603-012f-48b3-58d385a7bc34",
    slug: "i-dieci-libri-dellarchitettvra",
  },
  {
    uuid: "7141cef0-c602-012f-eba1-58d385a7bc34",
    slug: "i-sette-colli-di-roma-antica-e-moderna-con-piante-e-restauri-dei-medesimi-e-coi",
  },
  {
    uuid: "95abe280-0042-0130-caed-58d385a7bc34",
    slug: "iconografa-de-gobernantes-de-la-nueva-espaa",
  },
  {
    uuid: "7bd7f4b0-c604-012f-e8f9-58d385a7bc34",
    slug: "idea-grammatiki-musikisko",
  },
  {
    uuid: "2d79fef0-c605-012f-b0be-58d385a7bc34",
    slug: "il-convito-editore-adolfo-de-bosis-libro-i-xii",
  },
  {
    uuid: "71f0d640-c602-012f-8523-58d385a7bc34",
    slug: "il-solimano-tragedia-del-co-prospero-bonarellj-al-sermo-gran-duca-di-toscana",
  },
  {
    uuid: "93a334b0-003e-0130-f999-58d385a7bc34",
    slug: "il-dissoluto-punito-osia-il-don-giovanni-dramma-giocoso-in-due-atti-posto",
  },
  {
    uuid: "6f995600-0042-0130-bc91-58d385a7bc34",
    slug: "illustration-of-time",
  },
  {
    uuid: "e31dbaf0-c603-012f-b5ed-58d385a7bc34",
    slug: "illustrations-of-phrenology-with-engravings-by-sir-g-s-mackenzie-bart-f-r-s-lond",
  },
  {
    uuid: "facfae50-c604-012f-353e-58d385a7bc34",
    slug: "ilustracin-espaola-y-americana",
  },
  {
    uuid: "4cefab40-c605-012f-1329-58d385a7bc34",
    slug: "in-memoriam",
  },
  {
    uuid: "1d300250-c603-012f-42ce-58d385a7bc34",
    slug: "in-memory-of-christian-herter",
  },
  {
    uuid: "071d87b0-c604-012f-68c2-58d385a7bc34",
    slug: "in-town-about-or-pencillings",
  },
  {
    uuid: "9a32b270-c605-012f-95a1-58d385a7bc34",
    slug: "index-letk-kulturn-informace",
  },
  {
    uuid: "3a50ca20-c606-012f-2ff6-58d385a7bc34",
    slug: "index-et-catalogvs-librorum-prohibitorum-mandato-illustriss-ac-reuerdiss-dd",
  },
  {
    uuid: "14cf86b0-c603-012f-6c67-58d385a7bc34",
    slug: "information-respecting-the-history-condition-and-prospects-of-the-indian-tribes",
  },
  {
    uuid: "367d0880-c605-012f-3c5d-58d385a7bc34",
    slug: "the-ink-pot",
  },
  {
    uuid: "d83eac00-c603-012f-7199-58d385a7bc34",
    slug: "intrieurs",
  },
  {
    uuid: "42512960-c606-012f-a4ce-58d385a7bc34",
    slug: "iohn-hvighen-van-linschoten",
  },
  {
    uuid: "a9ee71d0-c602-012f-b983-58d385a7bc34",
    slug: "itsukushima-zue",
  },
  {
    uuid: "e44eabb0-c607-012f-3559-58d385a7bc34",
    slug: "izraelita",
  },
  {
    uuid: "1562cb50-c606-012f-f302-58d385a7bc34",
    slug: "j-w-thinks-black",
  },
  {
    uuid: "3bb29ce0-c61e-012f-a022-58d385a7bc34",
    slug: "james-weldon-johnson-community-centers-inc-records",
  },
  {
    uuid: "b92df9e0-c605-012f-cde3-58d385a7bc34",
    slug: "jannt-al-khuld",
  },
  {
    uuid: "cbb2c1a0-c603-012f-9586-58d385a7bc34",
    slug: "japanese-pictures-of-japanese-life",
  },
  {
    uuid: "8d0545f0-c607-012f-a238-58d385a7bc34",
    slug: "je-sais-tout",
  },
  {
    uuid: "6487bc30-c627-012f-abfe-58d385a7bc34",
    slug: "jerome-robbins-dance-division-clipping-files",
  },
  {
    uuid: "8687fc70-c6be-012f-61c5-58d385a7bc34",
    slug: "jerome-robbins-dance-division-souvenir-program-files",
  },
  {
    uuid: "b1393f50-c602-012f-20b9-58d385a7bc34",
    slug: "jo-ludovici-gottfridi-historische-chronica-oder-beschreibung-der-frnemsten",
  },
  {
    uuid: "673d96b0-c61e-012f-a609-58d385a7bc34",
    slug: "joe-nash-black-dance-photograph-collection",
  },
  {
    uuid: "f8b6c150-c603-012f-8f67-58d385a7bc34",
    slug: "johanna-papissa-toti-orbi-manifestata",
  },
  {
    uuid: "c25f6ff0-c603-012f-2e37-58d385a7bc34",
    slug: "john-brown-portrait-collection",
  },
  {
    uuid: "a35d2720-c604-012f-f764-58d385a7bc34",
    slug: "journal-du-voyage-fait-par-ordre-du-roi-a-lquateur-a-lquateur-servant",
  },
  {
    uuid: "57b1a8b0-c604-012f-489a-58d385a7bc34",
    slug: "journal-of-a-voyage-performed-in-the-lion-extra-indiaman-from-madras-to-columbo",
  },
  {
    uuid: "1211d1d0-c608-012f-a7a8-58d385a7bc34",
    slug: "journal-of-a-voyage-to-brazil",
  },
  {
    uuid: "8acd4090-0040-0130-6330-58d385a7bc34",
    slug: "journal-of-the-discovery-of-the-source-of-the-nile-2",
  },
  {
    uuid: "7a7f2000-c607-012f-10f7-58d385a7bc34",
    slug: "judy",
  },
  {
    uuid: "eead3490-c602-012f-0e7a-58d385a7bc34",
    slug: "kaiser-maximilians-i-gebetbuch-mit-zeichnungen-von-albrecht-drer-und-anderen",
  },
  {
    uuid: "70a0ad70-c604-012f-5612-58d385a7bc34",
    slug: "kaiser-maximilians-i-triumph-le-triomphe-de-lempereur-maximilien-i-en-une-suite",
  },
  {
    uuid: "b86b1790-c602-012f-d3e7-58d385a7bc34",
    slug: "kamerny-teatr",
  },
  {
    uuid: "2a65ed50-c606-012f-d152-58d385a7bc34",
    slug: "kanyosai-gafu",
  },
  {
    uuid: "6b4d2e60-c604-012f-befa-58d385a7bc34",
    slug: "kih-gafu",
  },
  {
    uuid: "006c91a0-c605-012f-ba3e-58d385a7bc34",
    slug: "kimpira-musha-shugyo",
  },
  {
    uuid: "22711620-c604-012f-1007-58d385a7bc34",
    slug: "king-leopolds-soliloquy-a-defense-of-his-congo-rule",
  },
  {
    uuid: "7a389960-c604-012f-6e04-58d385a7bc34",
    slug: "kings-handbook-of-new-york-city-an-outline-history-and-description",
  },
  {
    uuid: "59fdb570-c605-012f-2d7f-58d385a7bc34",
    slug: "kinsei-kijin-den",
  },
  {
    uuid: "45580c80-c604-012f-2776-58d385a7bc34",
    slug: "kip-family-papers",
  },
  {
    uuid: "ecf12eb0-c602-012f-8ee8-58d385a7bc34",
    slug: "klavierbungen",
  },
  {
    uuid: "3eba0760-c603-012f-ab7c-58d385a7bc34",
    slug: "kniga-istoriografiia-pochatiia-imene-slavy-i-razshireniia-naroda-slavianskogo",
  },
  {
    uuid: "811bd2d0-c606-012f-a073-58d385a7bc34",
    slug: "koppel-s-pinson-papers-1923-1960-bulk-1940s-1950s",
  },
  {
    uuid: "ab3b8880-c604-012f-9194-58d385a7bc34",
    slug: "kurze-zuverlssige-nachricht-von-der-unter-dem-namen-derbmisch-mhrischen-brder",
  },
  {
    uuid: "a60fd3b0-c605-012f-e3a3-58d385a7bc34",
    slug: "kychzan",
  },
  {
    uuid: "cde05130-c605-012f-a247-58d385a7bc34",
    slug: "karne-ha-hod",
  },
  {
    uuid: "00a0b940-c604-012f-237d-58d385a7bc34",
    slug: "lasie-llnsulinde-lafrique",
  },
  {
    uuid: "04d7e6f0-c604-012f-a263-58d385a7bc34",
    slug: "lart-dimprimer-les-tableaux",
  },
  {
    uuid: "5ec9d970-c604-012f-6693-58d385a7bc34",
    slug: "lart-de-lever-les-plans-appliqu-tout-ce-qui-a-rapport-la-guerre-la-navigation",
  },
  {
    uuid: "c8ef94e0-c607-012f-c700-58d385a7bc34",
    slug: "la-dpche-coloniale-illustre",
  },
  {
    uuid: "b3a9b080-c617-012f-9e7a-58d385a7bc34",
    slug: "la-vie-moderne",
  },
  {
    uuid: "349662e0-c604-012f-5c30-58d385a7bc34",
    slug: "la-deuise-des-armes-des-cheualiers-de-la-table-ronde-qui-estoient-du-temps",
  },
  {
    uuid: "87fa7f70-c607-012f-89de-58d385a7bc34",
    slug: "la-dissection-des-parties-du-corps-humain-diuisee-en-trois-liures",
  },
  {
    uuid: "a47e4700-c602-012f-7f87-58d385a7bc34",
    slug: "la-galerie-agreable-du-monde-o-lon-voit-en-un-grand-nombre-de-cartes",
  },
  {
    uuid: "8fa77f60-c605-012f-ad29-58d385a7bc34",
    slug: "la-guerre-des-mondes",
  },
  {
    uuid: "0c355b10-c606-012f-0c8b-58d385a7bc34",
    slug: "la-tauromaquia",
  },
  {
    uuid: "ffc5a230-c604-012f-c362-58d385a7bc34",
    slug: "la-trouvaille-de-deir-el-bahari",
  },
  {
    uuid: "e926a6b0-c604-012f-50ae-58d385a7bc34",
    slug: "labyrinte-de-versailles",
  },
  {
    uuid: "9ee42820-c605-012f-fe4f-58d385a7bc34",
    slug: "las-castas-mexicanas",
  },
  {
    uuid: "9874c610-c604-012f-4be7-58d385a7bc34",
    slug: "le-grand-dsert-ou-itinraire-dune-caravane-du-sahara-au-pays-des-ngres-royaume",
  },
  {
    uuid: "51bdd3c0-c607-012f-772d-58d385a7bc34",
    slug: "le-nouvel-art-cinmatographique",
  },
  {
    uuid: "7c26cc40-c602-012f-0481-58d385a7bc34",
    slug: "le-blason-des-armoiries-de-tous-les-chevaliers-de-lordre-de-la-toison-dor-depvis",
  },
  {
    uuid: "6bc439b0-c602-012f-66b9-58d385a7bc34",
    slug: "le-voyage-cvrievx-faict-avtovr-du-monde-par-franois-drach-admiral-dangleterre",
  },
  {
    uuid: "f14ac160-c604-012f-e300-58d385a7bc34",
    slug: "lectionary",
  },
  {
    uuid: "da5ee280-c604-012f-15bf-58d385a7bc34",
    slug: "lehrreiche-fabeln-aus-dem-reiche-der-thiere-zur-verbesserung-der-sitten-und",
  },
  {
    uuid: "e77fb720-c604-012f-cdb7-58d385a7bc34",
    slug: "leonora-tr-by-julia-m-cameron-with-illustrations-by-d-maclise-ra-engr-by-john",
  },
  {
    uuid: "e2e00910-c607-012f-5a82-58d385a7bc34",
    slug: "les-modes",
  },
  {
    uuid: "c3f79290-c602-012f-6159-58d385a7bc34",
    slug: "les-abus-du-mariage-ou-sont-clairement-representez-les-subtilitez-deshonnestes",
  },
  {
    uuid: "86938730-c602-012f-464f-58d385a7bc34",
    slug: "les-aventures-de-tlmaque-fils-dulysse",
  },
  {
    uuid: "17a69310-c603-012f-b2b7-58d385a7bc34",
    slug: "les-bas-bleus",
  },
  {
    uuid: "deb5c490-c603-012f-4b81-58d385a7bc34",
    slug: "les-grandes-chroniques-de-france",
  },
  {
    uuid: "12839fc0-c606-012f-e38c-58d385a7bc34",
    slug: "les-grandes-croniques-de-bretaigne",
  },
  {
    uuid: "25674b60-c604-012f-86a3-58d385a7bc34",
    slug: "les-principales-journes-de-la-rvolution",
  },
  {
    uuid: "a2870e40-c605-012f-4e9b-58d385a7bc34",
    slug: "les-vrais-pourtraits-de-quelques-unes-des-plvs-grandes-dames-de-la-chrestient",
  },
  {
    uuid: "51f54560-c604-012f-70e8-58d385a7bc34",
    slug: "letter-of-advice-to-a-young-american-on-the-course-of-studies-it-might-be-most",
  },
  {
    uuid: "7e0e36c0-c604-012f-32a8-58d385a7bc34",
    slug: "letter-to-thomas-o-moore",
  },
  {
    uuid: "2d7ff120-c603-012f-36f3-58d385a7bc34",
    slug: "lettera-delle-isole-nuouamente-trouate-in-quattro-suoi-viaggi-fiorenza-1505",
  },
  {
    uuid: "1225e310-c606-012f-eeb8-58d385a7bc34",
    slug: "levensgeschiedenis-van-den-amerikaanschen-slaaf-william-wells-brown-amerikaansch",
  },
  {
    uuid: "7935bad0-0042-0130-4ab5-58d385a7bc34",
    slug: "leviathan-or-the-matter-forme-power-of-a-common-wealth-ecclesiasticall",
  },
  {
    uuid: "30ac7640-c608-012f-2e09-58d385a7bc34",
    slug: "lewis-m-isaacs-collection-of-ea-robinson-papers-1896-1967",
  },
  {
    uuid: "4133b180-c605-012f-b6e6-58d385a7bc34",
    slug: "libellus-vere-aureus-nec-minvs-salvtaris-qvam-festiuus-de-optimo-reip-ftatu",
  },
  {
    uuid: "973faba0-c605-012f-f962-58d385a7bc34",
    slug: "liber-cronicarum-cum-figuris-et-ymagnibus-abinicio-mdi-usqz-nc-temporis-at-end",
  },
  {
    uuid: "692e0660-c602-012f-2af4-58d385a7bc34",
    slug: "liberias-offering-being-addresses-sermons-etc",
  },
  {
    uuid: "0de2ac40-c606-012f-b25f-58d385a7bc34",
    slug: "life-and-reminiscences-of-a-19th-century-gladiator",
  },
  {
    uuid: "1d28d540-c604-012f-9f9b-58d385a7bc34",
    slug: "life-of-ma-ka-tai-me-she-kia-kiak-or-black-hawk-embracing-the-tradition-of-his",
  },
  {
    uuid: "0b04b3b0-c605-012f-fcb5-58d385a7bc34",
    slug: "life-of-maumer-juno-of-charleston-sc-a-sketch-of-juno-waller-seymour",
  },
  {
    uuid: "01799bd0-c606-012f-06e7-58d385a7bc34",
    slug: "lightning-flashes-and-electric-dashes",
  },
  {
    uuid: "9d5db9d0-c605-012f-9bdc-58d385a7bc34",
    slug: "little-women-or-meg-jo-beth-and-amy",
  },
  {
    uuid: "4066a0f0-c604-012f-3a04-58d385a7bc34",
    slug: "livre-de-chinoise",
  },
  {
    uuid: "ff88ac40-c603-012f-e58c-58d385a7bc34",
    slug: "london-and-environs",
  },
  {
    uuid: "1455bd70-c606-012f-545b-58d385a7bc34",
    slug: "london-a-pilgrimage-by-gustave-dor-and-blanchard-jerrold",
  },
  {
    uuid: "29d230f0-c604-012f-e683-58d385a7bc34",
    slug: "luggage-and-leather-goods",
  },
  {
    uuid: "d3696cf0-c602-012f-89d0-58d385a7bc34",
    slug: "lysistrat",
  },
  {
    uuid: "109f3a30-c605-012f-eed3-58d385a7bc34",
    slug: "manuel-de-piete-a-lusage-des-hommes-de-couleur-et-des-noirs",
  },
  {
    uuid: "744a5b00-c602-012f-0e05-58d385a7bc34",
    slug: "manx-note-book",
  },
  {
    uuid: "4bf081c0-c617-012f-e5a2-58d385a7bc34",
    slug: "maps-of-africa",
  },
  {
    uuid: "86a90ec0-c604-012f-68af-58d385a7bc34",
    slug: "maps-of-the-arctic-regions",
  },
  {
    uuid: "0f3ce3f0-0042-0130-9332-58d385a7bc34",
    slug: "marcella-sembrich-papers",
  },
  {
    uuid: "a939e210-c602-012f-8b4c-58d385a7bc34",
    slug: "margaret-king-moore-lady-mount-cashell-holograph-autobiographical-account",
  },
  {
    uuid: "2cd4df60-c605-012f-326e-58d385a7bc34",
    slug: "masterpieces-of-industrial-art-sculpture-at-the-international-exhibition-1862",
  },
  {
    uuid: "769fc530-c604-012f-4d53-58d385a7bc34",
    slug: "maternity-and-child-care-in-selected-rural-areas-of-mississippi",
  },
  {
    uuid: "fbfa3690-c603-012f-8dc9-58d385a7bc34",
    slug: "mat-i-ditia",
  },
  {
    uuid: "d3ca8730-c6b4-012f-7800-58d385a7bc34",
    slug: "may-sarton-collection-of-papers-1914-1993-bulk-1928-1974",
  },
  {
    uuid: "97b818f0-c604-012f-6fa0-58d385a7bc34",
    slug: "meika-gafu",
  },
  {
    uuid: "ce83b310-c603-012f-cfc6-58d385a7bc34",
    slug: "memoir-and-correspondence-of-caroline-herschel",
  },
  {
    uuid: "6c4c3030-c605-012f-85d0-58d385a7bc34",
    slug: "memoir-of-pierre-toussaint-born-a-slave-in-st-domingo-2",
  },
  {
    uuid: "1847c1e0-c606-012f-2f9c-58d385a7bc34",
    slug: "memoir-of-pierre-toussaint-born-a-slave-in-st-domingo",
  },
  {
    uuid: "a5428c80-c605-012f-b4d9-58d385a7bc34",
    slug: "memoirs-of-her-late-royal-highness-charlotte-augusta-of-wales",
  },
  {
    uuid: "21c1aa40-c604-012f-cd76-58d385a7bc34",
    slug: "memoirs-of-a-polyglot-by-william-gerhardi",
  },
  {
    uuid: "e249c250-c602-012f-e2eb-58d385a7bc34",
    slug: "memoirs-of-my-life",
  },
  {
    uuid: "c3f37c20-c605-012f-b36d-58d385a7bc34",
    slug: "memorable-women",
  },
  {
    uuid: "c2ffbc80-c604-012f-18b9-58d385a7bc34",
    slug: "memorie-istoriche-della-gran-cupola-del-tempio-vaticano",
  },
  {
    uuid: "41f6db90-c607-012f-7753-58d385a7bc34",
    slug: "mercure-de-france",
  },
  {
    uuid: "ca8d6200-c604-012f-8080-58d385a7bc34",
    slug: "meteorographica-or-methods-of-mapping-the-weather-illustrated-by-upwards-of-600",
  },
  {
    uuid: "1665fa50-c604-012f-0594-58d385a7bc34",
    slug: "mikveh-yirael",
  },
  {
    uuid: "f2799100-c602-012f-1f44-58d385a7bc34",
    slug: "millers-new-york-as-it-is-or-strangers-guide-book-to-the-cities-of-new-york",
  },
  {
    uuid: "65a3b6f0-c605-012f-7261-58d385a7bc34",
    slug: "minstrelsy-of-the-scottish-border-consisting-of-historical-and-romantic-ballads",
  },
  {
    uuid: "74ab9ae0-c605-012f-6451-58d385a7bc34",
    slug: "miscellaneous-writings-on-slavery-by-william-jay",
  },
  {
    uuid: "69abeb30-c604-012f-2e88-58d385a7bc34",
    slug: "mission-from-cape-coast-castle-to-ashantee-with-a-statistical-account",
  },
  {
    uuid: "38a670e0-c605-012f-a1e7-58d385a7bc34",
    slug: "missions-reise-nach-suriname-und-barbice-zu-einer-am-surinamflusse-im-dritten",
  },
  {
    uuid: "1e443c00-c605-012f-0455-58d385a7bc34",
    slug: "misticheskie-obrazy-voiny",
  },
  {
    uuid: "89088d20-c602-012f-d021-58d385a7bc34",
    slug: "modern-dancing",
  },
  {
    uuid: "31870360-c603-012f-10cd-58d385a7bc34",
    slug: "modiano-1931-iv-reklm-fzet",
  },
  {
    uuid: "38378630-c608-012f-3bdf-58d385a7bc34",
    slug: "moonshine",
  },
  {
    uuid: "459f5db0-c605-012f-972e-58d385a7bc34",
    slug: "motor-bus-and-general-traffic-study-of-london-england-compiled-by-lewis-nixon",
  },
  {
    uuid: "0fa190b0-c605-012f-9dfd-58d385a7bc34",
    slug: "mounseer-nongtongpaw",
  },
  {
    uuid: "3d227810-c605-012f-4e81-58d385a7bc34",
    slug: "mr-wrays-cash-box-or-the-mask-and-the-mystery",
  },
  {
    uuid: "25ef47f0-c606-012f-4a73-58d385a7bc34",
    slug: "munka",
  },
  {
    uuid: "caf299b0-c605-012f-a0a4-58d385a7bc34",
    slug: "murray-marks-and-his-friends-a-tribute-of-regard-by-dr-g-c-williamson",
  },
  {
    uuid: "1c0b26e0-c605-012f-4330-58d385a7bc34",
    slug: "musee-ou-magasin-comique-de-philipon",
  },
  {
    uuid: "58a440c0-c604-012f-e1d6-58d385a7bc34",
    slug: "museum-wormianum",
  },
  {
    uuid: "6c3e0470-c607-012f-bc4c-58d385a7bc34",
    slug: "musical-america",
  },
  {
    uuid: "290a0940-c606-012f-15ac-58d385a7bc34",
    slug: "my-recollections-of-african-me-ministers-or-forty-years-experience",
  },
  {
    uuid: "250444b0-c605-012f-c54a-58d385a7bc34",
    slug: "myliuss-school-dictionary-of-the-english-language-to-which-is-prefixed-a-new",
  },
  {
    uuid: "bf805d30-c602-012f-2d00-58d385a7bc34",
    slug: "das-mrchen-vom-gestiefelten-kater-in-den-bearbeitungen-von-straparola-basile",
  },
  {
    uuid: "a7b6ab60-c605-012f-63f1-58d385a7bc34",
    slug: "mlas-kontrabanda-dzejas",
  },
  {
    uuid: "3bb9d4a0-c605-012f-e509-58d385a7bc34",
    slug: "narrative-and-successful-result-of-a-voyage-in-the-south-seas-performed-by-order",
  },
  {
    uuid: "faffeef0-c603-012f-23ec-58d385a7bc34",
    slug: "narrative-of-henry-box-brown-who-escaped-from-slavery-enclosed-in-a-box-3-feet",
  },
  {
    uuid: "08256f40-c605-012f-8fe0-58d385a7bc34",
    slug: "narrative-of-james-williams-an-american-slave-who-was-for-several-years-a-driver",
  },
  {
    uuid: "73824330-c604-012f-7c04-58d385a7bc34",
    slug: "narrative-of-a-five-years-expedition-against-the-revolted-negroes-of-surinam-2",
  },
  {
    uuid: "0bb2eda0-c604-012f-609a-58d385a7bc34",
    slug: "narrative-of-the-most-extraordinary-and-distressing-shipwreck-of-the-whale-ship",
  },
  {
    uuid: "f2ddead0-c603-012f-03f0-58d385a7bc34",
    slug: "narrative-of-a-five-years-expedition-against-the-revolted-negroes-of-surinam-2-3",
  },
  {
    uuid: "a0a86670-c604-012f-dc49-58d385a7bc34",
    slug: "natrliche-schpfungsgeschichte-gemeinverstndliche-wissenschaftliche-vortrge-ber",
  },
  {
    uuid: "ce7eff30-c606-012f-7265-58d385a7bc34",
    slug: "needlecraft",
  },
  {
    uuid: "fc5e48f0-c608-012f-6bb6-58d385a7bc34",
    slug: "negro-labor-committee-photograph-collection",
  },
  {
    uuid: "cb6ee860-c605-012f-ebab-58d385a7bc34",
    slug: "neuer-tugendspiegel-oder-anecdoten-und-characterzge-aus-dem-jugendleben",
  },
  {
    uuid: "35210130-c603-012f-9ca8-58d385a7bc34",
    slug: "neujahrsblatt-der-allgemeinen-musik-gesellschaft-in-zrich",
  },
  {
    uuid: "93f26a10-0042-0130-b700-58d385a7bc34",
    slug: "new-york-clipper",
  },
  {
    uuid: "8ea73d30-c605-012f-fe34-58d385a7bc34",
    slug: "new-york-dada",
  },
  {
    uuid: "3e8f6ef0-c60b-012f-39b3-58d385a7bc34",
    slug: "new-york-journal-and-advertiser",
  },
  {
    uuid: "3b1cd580-c606-012f-d108-58d385a7bc34",
    slug: "new-voyages-to-north-america",
  },
  {
    uuid: "fdd96a30-c603-012f-4796-58d385a7bc34",
    slug: "new-york-pictorial-business-directory-of-wall-st",
  },
  {
    uuid: "c6feafb0-c60a-012f-fb45-58d385a7bc34",
    slug: "the-new-york-sketch-book-of-architecture",
  },
  {
    uuid: "e88d56b0-c603-012f-98ab-58d385a7bc34",
    slug: "newe-welt-und-americanische-historien",
  },
  {
    uuid: "e92e87d0-c603-012f-d86d-58d385a7bc34",
    slug: "newe-welt-vnd-americanische-historien-jnhaltende-warhafftige-vnd-vollkommene",
  },
  {
    uuid: "0959d930-c603-012f-66b1-58d385a7bc34",
    slug: "newport-daily-news",
  },
  {
    uuid: "d2d5de90-c605-012f-c83c-58d385a7bc34",
    slug: "news-from-nowhere-or-an-epoch-of-rest-eing-some-chapters-from-a-utopian-romance",
  },
  {
    uuid: "05a4e510-c623-012f-b6a9-58d385a7bc34",
    slug: "nicholas-kelley-papers",
  },
  {
    uuid: "4a85a1e0-c605-012f-77d9-58d385a7bc34",
    slug: "nicolai-copernici-toriensis-de-revolvtionibvs-orbium-clestium-libri-vi",
  },
  {
    uuid: "cc50c170-c603-012f-0423-58d385a7bc34",
    slug: "nicolai-josephi-jacquin-selectarum-stirpium-americanarum-historia",
  },
  {
    uuid: "e4408950-c605-012f-8307-58d385a7bc34",
    slug: "nine",
  },
  {
    uuid: "5c3a5260-c605-012f-1276-58d385a7bc34",
    slug: "no-cross-no-crown-or-several-sober-reasons-against-hat-honour-titular-respects",
  },
  {
    uuid: "fbe5c990-c603-012f-31c4-58d385a7bc34",
    slug: "notes-on-haiti-made-during-a-residence-in-that-republic",
  },
  {
    uuid: "96d49af0-c604-012f-5c55-58d385a7bc34",
    slug: "notes-taken-during-travels-in-africa",
  },
  {
    uuid: "c7a579d0-c605-012f-5c29-58d385a7bc34",
    slug: "notice-adresse-la-socit-libre-dmulation-de-rouen",
  },
  {
    uuid: "5d6440a0-0042-0130-5337-58d385a7bc34",
    slug: "nouveaux-faits-relatifs-la-traite-des-noirs",
  },
  {
    uuid: "a7ba5f10-c604-012f-dde0-58d385a7bc34",
    slug: "nouvelle-description-de-la-ville-de-paris-et-de-tout-ce-quelle-contient-de-plus",
  },
  {
    uuid: "2d3f5cc0-c604-012f-3d0b-58d385a7bc34",
    slug: "nova-iconologia-di-cesare-ripa-pervgino-caualier-de-ss-mauritio-lazzaro-nella",
  },
  {
    uuid: "4e7daf00-c605-012f-32e3-58d385a7bc34",
    slug: "o-kurske-o-komsomole-o-mae",
  },
  {
    uuid: "c2783bd0-c602-012f-bd9f-58d385a7bc34",
    slug: "oviedo-dela-natural-hystoria-delas-indias",
  },
  {
    uuid: "7ae86fd0-c605-012f-d390-58d385a7bc34",
    slug: "obi-or-the-history-of-three-fingered-jack-in-a-series-of-letters",
  },
  {
    uuid: "b0576ef0-c603-012f-9eb5-58d385a7bc34",
    slug: "observations-sur-la-virginie",
  },
  {
    uuid: "77044cc0-c607-012f-9ec3-58d385a7bc34",
    slug: "o-occidente",
  },
  {
    uuid: "e9511b70-c6cd-012f-49d7-58d385a7bc34",
    slug: "occupations",
  },
  {
    uuid: "c643ec60-c602-012f-f114-58d385a7bc34",
    slug: "oeuvres-choisies-de-gavarni",
  },
  {
    uuid: "333f8d80-c605-012f-3e59-58d385a7bc34",
    slug: "of-the-russe-common-wealth",
  },
  {
    uuid: "13832fd0-c605-012f-e354-58d385a7bc34",
    slug: "official-letter-books-of-wcc-claiborne-1801-1816",
  },
  {
    uuid: "0f54ee50-c606-012f-cd14-58d385a7bc34",
    slug: "ogonek",
  },
  {
    uuid: "1e161320-c604-012f-7003-58d385a7bc34",
    slug: "oliver-twist-or-the-parish-boys-progress",
  },
  {
    uuid: "cf248e60-c605-012f-5783-58d385a7bc34",
    slug: "onna-shorei-shu",
  },
  {
    uuid: "1f476930-c605-012f-d988-58d385a7bc34",
    slug: "opisanie-uralskikh-i-sibirskikh-zavodov-1735",
  },
  {
    uuid: "79007430-c604-012f-045d-58d385a7bc34",
    slug: "ordonnance-du-roy-pour-lentretenement-du-regiment-suiss-de-karrer-au-service",
  },
  {
    uuid: "f8883870-c603-012f-7522-58d385a7bc34",
    slug: "our-brothers-and-cousins-a-summer-tour-in-canada-and-the-states",
  },
  {
    uuid: "8fd61c70-003e-0130-8608-58d385a7bc34",
    slug: "our-whole-country-or-the-past-and-present-of-the-united-states-historical",
  },
  {
    uuid: "033cb070-c606-012f-3555-58d385a7bc34",
    slug: "outlines-of-english-grammar-partly-abridged-from-mr-hazlitts-new-and-improved",
  },
  {
    uuid: "dc680750-c602-012f-bc71-58d385a7bc34",
    slug: "ovids-metamorphosis-englished-by-gs",
  },
  {
    uuid: "67b483b0-c606-012f-3112-58d385a7bc34",
    slug: "oxford-magazine-or-university-museum",
  },
  {
    uuid: "c4bd2c90-c602-012f-897e-58d385a7bc34",
    slug: "oxonia-illustrata-sive-omnium-celeberrim-istius-universitatis-collegiorum",
  },
  {
    uuid: "95aa88d0-c605-012f-6fd4-58d385a7bc34",
    slug: "palaty-sanktpeterburgsko-imperatorsko-akademii-nauk-biblioteki-i-kunstkamery",
  },
  {
    uuid: "dc42f9c0-c604-012f-f325-58d385a7bc34",
    slug: "palazzi-di-genova",
  },
  {
    uuid: "8d08f5c0-c605-012f-faa8-58d385a7bc34",
    slug: "panorama-of-the-hudson-showing-both-sides-of-the-river-from-new-york",
  },
  {
    uuid: "31bc5760-c606-012f-0b0b-58d385a7bc34",
    slug: "papillons-deurope-peints-daprs-nature",
  },
  {
    uuid: "93236980-c627-012f-7e3e-58d385a7bc34",
    slug: "paradise-lost-2",
  },
  {
    uuid: "392e9f60-c604-012f-f2c3-58d385a7bc34",
    slug: "passages-from-my-autobiography",
  },
  {
    uuid: "7db08590-c605-012f-5665-58d385a7bc34",
    slug: "pauli-iouii-nouocomensis-episcopi-nucerini-elogia-virorum-bellica-virtute",
  },
  {
    uuid: "520f30d0-c607-012f-3c49-58d385a7bc34",
    slug: "pearsons-magazine",
  },
  {
    uuid: "369c5a50-c606-012f-451e-58d385a7bc34",
    slug: "the-pennsylvania-evening-post",
  },
  {
    uuid: "756baee0-c604-012f-1069-58d385a7bc34",
    slug: "peregrinatio-in-terram-sanctam",
  },
  {
    uuid: "2f59d110-c605-012f-0a4c-58d385a7bc34",
    slug: "le-perou",
  },
  {
    uuid: "4ccc4430-c604-012f-a261-58d385a7bc34",
    slug: "peter-pan-in-kensington-gardens",
  },
  {
    uuid: "e822dc40-c603-012f-7107-58d385a7bc34",
    slug: "petersons-magazine",
  },
  {
    uuid: "5f1a1f40-c605-012f-ffda-58d385a7bc34",
    slug: "philadelphia-and-notable-philadelphians-by-moses-king-twenty-one-hundred-fifty",
  },
  {
    uuid: "1494a8a0-c609-012f-8cc1-58d385a7bc34",
    slug: "philosophical-transactions-of-the-royal-society-of-london",
  },
  {
    uuid: "86093f00-c607-012f-e920-58d385a7bc34",
    slug: "phonographic-world-and-commercial-school-review-a-magazine-for-stenographers",
  },
  {
    uuid: "e7594ef0-c603-012f-d2e5-58d385a7bc34",
    slug: "photo-graphic-art",
  },
  {
    uuid: "d0e1f5b0-c605-012f-e186-58d385a7bc34",
    slug: "photographes-of-the-robert-l-stuart-gallery",
  },
  {
    uuid: "0240a200-c6ed-012f-18bf-3c075448cc4b",
    slug: "photographs-from-the-american-country-woman-series",
  },
  {
    uuid: "823153b0-c604-012f-7232-58d385a7bc34",
    slug: "photographs",
  },
  {
    uuid: "94d32330-c605-012f-464c-58d385a7bc34",
    slug: "phra-malai-buddhist-readings",
  },
  {
    uuid: "ac3786c0-c602-012f-080a-58d385a7bc34",
    slug: "phra-malai",
  },
  {
    uuid: "41ed8530-c605-012f-74bc-58d385a7bc34",
    slug: "picturesque-illustrations-of-buenos-ayres-and-monte-videoconsisting",
  },
  {
    uuid: "89685a10-c605-012f-77aa-58d385a7bc34",
    slug: "pikes-illustrated-descriptive-catalogue-of-optical-mathematical",
  },
  {
    uuid: "35e444f0-c603-012f-bd14-58d385a7bc34",
    slug: "plain-tales-from-the-hills",
  },
  {
    uuid: "7a890110-c602-012f-fa83-58d385a7bc34",
    slug: "plan-of-the-town-of-ridley-park-delaware-county-pennsylvania",
  },
  {
    uuid: "1ca97ce0-c606-012f-d7de-58d385a7bc34",
    slug: "pln",
  },
  {
    uuid: "1d2d62b0-c605-012f-9356-58d385a7bc34",
    slug: "poems-on-miscellaneous-subjects",
  },
  {
    uuid: "b7d154a0-c603-012f-ec67-58d385a7bc34",
    slug: "poems-on-miscellaneous-subjects-2",
  },
  {
    uuid: "ffdc8ff0-c603-012f-62b8-58d385a7bc34",
    slug: "poems-on-various-subjects-religious-and-moral",
  },
  {
    uuid: "bb482970-c603-012f-0812-58d385a7bc34",
    slug: "pompeii-its-life-and-art",
  },
  {
    uuid: "4e997770-c607-012f-fcb9-58d385a7bc34",
    slug: "the-port-folio",
  },
  {
    uuid: "60bfc090-c605-012f-04ba-58d385a7bc34",
    slug: "porto-rico-and-the-west-indies",
  },
  {
    uuid: "39bb79c0-c606-012f-1cba-58d385a7bc34",
    slug: "portraits-des-grands-hommes",
  },
  {
    uuid: "416c3a90-c606-012f-2f07-58d385a7bc34",
    slug: "poshchechina-obshchestvennomu-vkusu-stikhi-proza-stati",
  },
  {
    uuid: "5a8a99c0-c604-012f-d151-58d385a7bc34",
    slug: "practical-navigation-or-an-introduction-to-the-whole-art",
  },
  {
    uuid: "466cad00-c605-012f-391a-58d385a7bc34",
    slug: "praecipua-aliquot-romanae-antiquitatis-ruinarum-monimenta",
  },
  {
    uuid: "2fa1c3f0-c605-012f-cd8d-58d385a7bc34",
    slug: "praeclara-ferdindi-cortesii-de-noua-maris-oceani-hyspania-narratio",
  },
  {
    uuid: "cda7c090-c604-012f-510d-58d385a7bc34",
    slug: "primera-segunda-tercera-parte-de-los-veinte-i-vn-librosrituales-i-monarchia",
  },
  {
    uuid: "e1690a30-c604-012f-f2e7-58d385a7bc34",
    slug: "printed-maps-of-russia-and-neighboring-lands-including-city-plans-of-saint",
  },
  {
    uuid: "e2505bf0-c603-012f-7865-58d385a7bc34",
    slug: "prison-ship-martyr-captain-jabez-fitch-his-diary-in-facsimile-1776",
  },
  {
    uuid: "117689f0-c606-012f-3f26-58d385a7bc34",
    slug: "proceedings-of-the-association-for-promoting-the-discovery-of-the-interior-parts",
  },
  {
    uuid: "085b5b70-c606-012f-873b-58d385a7bc34",
    slug: "prodromo-delle-antichit-dercolano-alla-maest-del-r-dell-due-sicilie-carlo",
  },
  {
    uuid: "032c4cf0-c605-012f-2866-58d385a7bc34",
    slug: "programs-of-concerts-including-performances-of-works-by-richard-wagner-1832-1862",
  },
  {
    uuid: "0cb8c840-c603-012f-28d1-58d385a7bc34",
    slug: "projet-dune-nouvelle-mechanique",
  },
  {
    uuid: "737e2180-0042-0130-5cd2-58d385a7bc34",
    slug: "proofs-from-pictures-painted-by-robert-smirke-ra-and-engraved-by-a-raimbach",
  },
  {
    uuid: "7aec7d20-0040-0130-3dfc-58d385a7bc34",
    slug: "prospekt",
  },
  {
    uuid: "62ed9460-c602-012f-0329-58d385a7bc34",
    slug: "proverbj-figvrati-consecrati-al-serenissimo-principe-francesco-maria-di-toscana",
  },
  {
    uuid: "2fce7570-c606-012f-5af4-58d385a7bc34",
    slug: "pubblicazioni-dellistituto-di-geografia-della-r-universit-di-roma-serie-b",
  },
  {
    uuid: "7b1f6090-c602-012f-25fe-58d385a7bc34",
    slug: "public-proceedings-relating-to-calvary-church",
  },
  {
    uuid: "57bb1de0-c604-012f-43a6-58d385a7bc34",
    slug: "al-qadast-al-thalthah-al-ilhyah",
  },
  {
    uuid: "eb0910c0-c603-012f-f071-58d385a7bc34",
    slug: "quando-verr-quel-di-arietta-composta-espressamente-e-dedicata-alla-sig-contessa",
  },
  {
    uuid: "71e3d4e0-c604-012f-2dc7-58d385a7bc34",
    slug: "queen-mab-by-percy-bysshe-shelley-1829-edition",
  },
  {
    uuid: "7f654040-c605-012f-1e6e-58d385a7bc34",
    slug: "queen-mab-by-percy-bysshe-shelley-1826-edition",
  },
  {
    uuid: "37142e40-c605-012f-b9b0-58d385a7bc34",
    slug: "qurn",
  },
  {
    uuid: "59acd840-c604-012f-976e-58d385a7bc34",
    slug: "rachilde",
  },
  {
    uuid: "ab826cb0-c602-012f-8d55-58d385a7bc34",
    slug: "receipts-chiefly-for-curing-tobacco-and-preparing-snuff",
  },
  {
    uuid: "6c4f7670-0042-0130-e2c2-58d385a7bc34",
    slug: "recessional-a-victorian-ode",
  },
  {
    uuid: "e4e2c8c0-c604-012f-162c-58d385a7bc34",
    slug: "recueil-de-pices-pour-servir-lhistoire-de-la-rvolte-des-princes-1614",
  },
  {
    uuid: "f01f35a0-c605-012f-5a1a-58d385a7bc34",
    slug: "recuerdos-de-lima-album-tipos-trajes-y-costumbres",
  },
  {
    uuid: "5606c0e0-0042-0130-3919-58d385a7bc34",
    slug: "regiments-and-armories-of-massachusetts-an-historical-narration",
  },
  {
    uuid: "ab16e2c0-c605-012f-26a6-58d385a7bc34",
    slug: "relation-historique-de-la-virginie-contenant-lhistoire-de-son-etablissement",
  },
  {
    uuid: "b991d7f0-c603-012f-9b77-58d385a7bc34",
    slug: "religious-experience-and-journal-of-mrs-jarena-lee-giving-an-account-of-her-call",
  },
  {
    uuid: "101ef050-c603-012f-dd29-58d385a7bc34",
    slug: "reliques-of-ancient-english-poetry",
  },
  {
    uuid: "72b16280-c602-012f-7ab0-58d385a7bc34",
    slug: "report-of-the-lords-of-the-committee-of-council-appointed-for-the-consideration",
  },
  {
    uuid: "0ffb6670-c606-012f-1af9-58d385a7bc34",
    slug: "new-york-colored-mission-annual-report",
  },
  {
    uuid: "8a16b9d0-c605-012f-2886-58d385a7bc34",
    slug: "report-on-the-proposed-development-of-wards-island-and-the-construction",
  },
  {
    uuid: "0a4a8b70-c605-012f-9f52-58d385a7bc34",
    slug: "resume-de-lhistoire-de-st-domingue-republique-dhaiti-depuis-sa-decouverte-jusqu",
  },
  {
    uuid: "0bbe40f0-c605-012f-46db-58d385a7bc34",
    slug: "the-rev-j-w-loguen-as-a-slave-and-as-a-freeman-a-narrative-of-real-life",
  },
  {
    uuid: "a368f300-c607-012f-ecb3-58d385a7bc34",
    slug: "revue-de-lart-ancien-et-moderne",
  },
  {
    uuid: "50eddb70-c60a-012f-384f-58d385a7bc34",
    slug: "richard-rodgers-scrapbooks",
  },
  {
    uuid: "0f37c320-c604-012f-8183-58d385a7bc34",
    slug: "ritratti-de-sermi-principi-deste-sigri-di-ferrarapcconlaggionta-de-loro-fatti-pi",
  },
  {
    uuid: "0426b5a0-c605-012f-2379-58d385a7bc34",
    slug: "rolands-knappen",
  },
  {
    uuid: "25351090-c606-012f-c7a2-58d385a7bc34",
    slug: "romantika-autobus-dzeju-cikls",
  },
  {
    uuid: "5ab41dd0-c605-012f-7b1f-58d385a7bc34",
    slug: "roundabout-papers",
  },
  {
    uuid: "6b762320-c605-012f-5e41-58d385a7bc34",
    slug: "rowlandsons-characteristic-sketches-of-the-lower-orders-intended-as-a-companion",
  },
  {
    uuid: "cebde950-c605-012f-910b-58d385a7bc34",
    slug: "rules-and-regulations-for-the-government-of-the-police-department-of-the-city",
  },
  {
    uuid: "ee63b780-c609-012f-a2ac-58d385a7bc34",
    slug: "rvolutions-de-paris",
  },
  {
    uuid: "3eb8ea60-c604-012f-9c50-58d385a7bc34",
    slug: "rzh",
  },
  {
    uuid: "a6ea2970-c604-012f-c7ca-58d385a7bc34",
    slug: "al-sahifah-al-kmilah-al-sajjdyah",
  },
  {
    uuid: "10b273a0-c606-012f-04ba-58d385a7bc34",
    slug: "saint-domingue-ou-histoire-de-ses-rvolutions-rvolte-gnrale-des-ngres-massacre",
  },
  {
    uuid: "cd7d7f40-c606-012f-4e9f-58d385a7bc34",
    slug: "samuel-hill-papers-1813-1822",
  },
  {
    uuid: "0f6a3430-c60b-012f-0aed-58d385a7bc34",
    slug: "samuel-and-john-galloway-papers-1739-1812",
  },
  {
    uuid: "d753e200-c602-012f-87af-58d385a7bc34",
    slug: "sapientia-sinica-exponente-p-ignatio-a-costa-lusitano-soc-ies-p-prospero",
  },
  {
    uuid: "4f927a10-c604-012f-4ef7-58d385a7bc34",
    slug: "sappho-and-phaon",
  },
  {
    uuid: "aeaf2930-c603-012f-5c27-58d385a7bc34",
    slug: "schola-cordis",
  },
  {
    uuid: "f44ad4f0-c606-012f-9322-58d385a7bc34",
    slug: "scrapbook-of-clippings-telegrams-and-letters-1906",
  },
  {
    uuid: "cd5fa070-c602-012f-3bd9-58d385a7bc34",
    slug: "scrutinium-scripturarum-a-paulo-de-sancta-maria-burgensi-presule-antehac",
  },
  {
    uuid: "01d822b0-c604-012f-6426-58d385a7bc34",
    slug: "secretos-de-artes-liberales-y-mecanicas-recopilados-y-traducidos-de-varios",
  },
  {
    uuid: "702f34c0-c602-012f-24a7-58d385a7bc34",
    slug: "select-sermons",
  },
  {
    uuid: "bda26990-c604-012f-d396-58d385a7bc34",
    slug: "semper-eadem-john-huighen-van-linschoten-his-discours-of-voyages-into-yue-easte",
  },
  {
    uuid: "31656f80-c606-012f-d55a-58d385a7bc34",
    slug: "sexology",
  },
  {
    uuid: "9e7a16c0-c604-012f-9288-58d385a7bc34",
    slug: "shadow-and-substance",
  },
  {
    uuid: "f51d2f40-c603-012f-551b-58d385a7bc34",
    slug: "shipping-illustrated-v-60-no-774-sept-1917",
  },
  {
    uuid: "9c1d03b0-c6c6-012f-0119-58d385a7bc34",
    slug: "shhnmah-first-half-of-manuscript-only",
  },
  {
    uuid: "cff567b0-c604-012f-e7b0-58d385a7bc34",
    slug: "six-romances-destelle-mises-en-musique-avec-accompagnement-de-harpe-ou",
  },
  {
    uuid: "1642ae40-c604-012f-52fd-58d385a7bc34",
    slug: "sketch-of-the-life-of-the-rev-charles-b-ray",
  },
  {
    uuid: "db925da0-c603-012f-6142-58d385a7bc34",
    slug: "sketches-from-nature",
  },
  {
    uuid: "97d6be10-c605-012f-bffb-58d385a7bc34",
    slug: "skizzen-aus-dem-leben-der-musik-gesellschaft-germania-germania-musical-society",
  },
  {
    uuid: "1fed39d0-c605-012f-4f7a-58d385a7bc34",
    slug: "smetanas-opera-the-bartered-bride-for-the-benefit-of-the-legal-aid-society",
  },
  {
    uuid: "c7157cc0-c602-012f-22f7-58d385a7bc34",
    slug: "smyth-of-nibley-papers",
  },
  {
    uuid: "3e129d20-c604-012f-681c-58d385a7bc34",
    slug: "snimki-drevnikh-ikon-i-staroobriadcheskikh-khramov-rogozhskago-kladbishcha-v",
  },
  {
    uuid: "e7341310-c602-012f-1178-58d385a7bc34",
    slug: "sobraniye-vidov-goroda-kazani-1839",
  },
  {
    uuid: "8a81ed50-c604-012f-76e5-58d385a7bc34",
    slug: "societas-jesu-apostolorum-imitatrix-sive-gesta-prclara-et-virtutes-eorum",
  },
  {
    uuid: "e27f1640-c625-012f-75a6-58d385a7bc34",
    slug: "sol-bloom-papers-1898-1949-bulk-1935-1949",
  },
  {
    uuid: "11dee8e0-c604-012f-9053-58d385a7bc34",
    slug: "songs-of-jamaica",
  },
  {
    uuid: "33f05ba0-c604-012f-8ed8-58d385a7bc34",
    slug: "songs-c-in-the-catawba-travellers-or-kiew-neikas-return",
  },
  {
    uuid: "cfc72600-c606-012f-b7f3-58d385a7bc34",
    slug: "specifications-of-inventions",
  },
  {
    uuid: "720d7360-0042-0130-df3f-58d385a7bc34",
    slug: "specimens-of-polyautography",
  },
  {
    uuid: "a0da09b0-c605-012f-68e4-58d385a7bc34",
    slug: "speculum-romanae-magnificentiae",
  },
  {
    uuid: "d37caac0-c607-012f-4959-58d385a7bc34",
    slug: "speeches-and-letters",
  },
  {
    uuid: "46c41510-c605-012f-c1aa-58d385a7bc34",
    slug: "spcimens-de-la-dcoration-et-de-lornementation-au-xixe-sicle-par-linard",
  },
  {
    uuid: "47ac9720-c607-012f-8189-58d385a7bc34",
    slug: "the-starry-cross",
  },
  {
    uuid: "a1ff4e00-c605-012f-974b-58d385a7bc34",
    slug: "the-story-of-louisiana",
  },
  {
    uuid: "0c0eefa0-c603-012f-8e33-58d385a7bc34",
    slug: "miscellaneous-personal-name-files-2-3-4-5",
  },
  {
    uuid: "24f4f2a0-c603-012f-50f3-58d385a7bc34",
    slug: "stow-massachusetts-1683-1933-compiled-in-honor-of-the-two-hundred-fiftieth",
  },
  {
    uuid: "ba007f70-c602-012f-85d8-58d385a7bc34",
    slug: "stupid",
  },
  {
    uuid: "97a58e30-0042-0130-5363-58d385a7bc34",
    slug: "success",
  },
  {
    uuid: "031fb240-c605-012f-ba65-58d385a7bc34",
    slug: "suifutei-gigafu",
  },
  {
    uuid: "69c30b00-c602-012f-73b2-58d385a7bc34",
    slug: "suite-destampes-daprs-lancret-pater-eisen-boucher-etc-pour-illustrer-les-contes",
  },
  {
    uuid: "6e9cebd0-c604-012f-6960-58d385a7bc34",
    slug: "sunshine-and-shadow-of-slave-life-reminiscences-as-told-by-isaac-d-williams",
  },
  {
    uuid: "308510c0-c605-012f-886d-58d385a7bc34",
    slug: "symbolorvm-et-emblematvm-ex-re-herbaria-desvmtorvm-centvria-vna-collecta",
  },
  {
    uuid: "b4adedd0-c603-012f-abe4-58d385a7bc34",
    slug: "taishokukan",
  },
  {
    uuid: "e0dbc260-c602-012f-1c95-58d385a7bc34",
    slug: "taketori-monogatari",
  },
  {
    uuid: "cc8ac8e0-c602-012f-cc89-58d385a7bc34",
    slug: "tales-from-shakespear-designed-for-the-use-of-young-persons-by-charles-lamb",
  },
  {
    uuid: "8c1930a0-c605-012f-11f7-58d385a7bc34",
    slug: "taunton-social-library-records",
  },
  {
    uuid: "a9695b80-c607-012f-0b0b-58d385a7bc34",
    slug: "ted-shawn-2",
  },
  {
    uuid: "a2784970-c604-012f-b5b7-58d385a7bc34",
    slug: "tefilah-mi-kol-ha-shanah",
  },
  {
    uuid: "61b10960-c604-012f-e9f6-58d385a7bc34",
    slug: "telliamed-or-the-world-explaind",
  },
  {
    uuid: "0a1bc6d0-c604-012f-3fb8-58d385a7bc34",
    slug: "temperance-essays-and-selections-from-different-authors-collected-and-ed",
  },
  {
    uuid: "0d989d70-c606-012f-4b46-58d385a7bc34",
    slug: "ten-years-wanderings-among-the-ethiopians-with-sketches-of-the-manners",
  },
  {
    uuid: "e1726380-c602-012f-27f8-58d385a7bc34",
    slug: "tentation-de-saint-antoine",
  },
  {
    uuid: "47c49760-c605-012f-c6ce-58d385a7bc34",
    slug: "tetro-evangalie",
  },
  {
    uuid: "271324a0-c604-012f-c93e-58d385a7bc34",
    slug: "the-american-spelling-book-containing-the-rudiments-of-the-english-language",
  },
  {
    uuid: "bc8eb460-c603-012f-513f-58d385a7bc34",
    slug: "the-american-transportation-problem-a-study-of-american-transportation",
  },
  {
    uuid: "b27c59c0-c619-012f-55d4-58d385a7bc34",
    slug: "the-architectural-review",
  },
  {
    uuid: "a2530b70-c607-012f-d58b-58d385a7bc34",
    slug: "the-art-journal",
  },
  {
    uuid: "228bd650-c605-012f-71c1-58d385a7bc34",
    slug: "the-atlantic-souvenir-a-christmas-and-new-years-offering",
  },
  {
    uuid: "5d5148e0-c605-012f-612d-58d385a7bc34",
    slug: "the-bible-that-is-the-holy-scripture-of-the-olde-and-new-testament-faithfully",
  },
  {
    uuid: "7cb13680-c606-012f-ab87-58d385a7bc34",
    slug: "the-bohemian",
  },
  {
    uuid: "9322b480-c608-012f-3907-58d385a7bc34",
    slug: "the-broadway-journal",
  },
  {
    uuid: "15f945e0-c605-012f-c457-58d385a7bc34",
    slug: "brownies-book",
  },
  {
    uuid: "0c521400-c604-012f-a7b6-58d385a7bc34",
    slug: "the-byble-in-englyshe",
  },
  {
    uuid: "1209abe0-c605-012f-e29c-58d385a7bc34",
    slug: "the-cc-cough-fin-brand-cigarettes",
  },
  {
    uuid: "2da08650-c604-012f-aba5-58d385a7bc34",
    slug: "the-christian-quaker-and-his-divine-testimony-vindicated-by-scripture-reason",
  },
  {
    uuid: "27d88300-c607-012f-780f-58d385a7bc34",
    slug: "the-cosmopolitan",
  },
  {
    uuid: "3cb45dc0-c604-012f-ae3b-58d385a7bc34",
    slug: "the-daily-graphic-an-illustrated-evening-newspaper",
  },
  {
    uuid: "12344090-c603-012f-62bb-58d385a7bc34",
    slug: "the-english-dance-of-death-from-the-designs-of-thomas-rowlandson-with-metrical",
  },
  {
    uuid: "76919760-c606-012f-6800-58d385a7bc34",
    slug: "the-exhibitor",
  },
  {
    uuid: "94c80db0-0042-0130-3af8-58d385a7bc34",
    slug: "the-general-magazine-of-arts-and-sciences",
  },
  {
    uuid: "215c8940-c604-012f-2631-58d385a7bc34",
    slug: "the-generall-historie-of-virginia-new-england-and-the-summer-isles",
  },
  {
    uuid: "86452f10-c607-012f-604a-58d385a7bc34",
    slug: "the-gentlemans-magazine",
  },
  {
    uuid: "ad95fbc0-c605-012f-6363-58d385a7bc34",
    slug: "the-glass-and-pottery-world-with-which-is-incorporated-the-house-furnisher-china",
  },
  {
    uuid: "74ec2680-0042-0130-8d79-58d385a7bc34",
    slug: "the-holy-bible-2-3-4",
  },
  {
    uuid: "7eb80450-c604-012f-3674-58d385a7bc34",
    slug: "the-holy-bible-containing-the-old-and-new-testaments-translated-out",
  },
  {
    uuid: "e184eea0-c603-012f-093c-58d385a7bc34",
    slug: "the-hudson-river-portfolio-ford-collection",
  },
  {
    uuid: "78cd8630-c602-012f-e4f8-58d385a7bc34",
    slug: "the-illustrated-american",
  },
  {
    uuid: "1b913800-c603-012f-e6fe-58d385a7bc34",
    slug: "the-kentucky-revival-or-a-short-history-of-the-late-extraordinary-out-pouring",
  },
  {
    uuid: "6bc8b350-c602-012f-ffa9-58d385a7bc34",
    slug: "the-light-and-truth-of-slavery",
  },
  {
    uuid: "6f8d5470-c606-012f-73fd-58d385a7bc34",
    slug: "the-london-gazette",
  },
  {
    uuid: "4948e230-c604-012f-c0ed-58d385a7bc34",
    slug: "berg-collection-uncataloged-manuscripts-2",
  },
  {
    uuid: "81ed2140-c607-012f-1f1d-58d385a7bc34",
    slug: "the-new-york-herald",
  },
  {
    uuid: "547a1450-c604-012f-1d09-58d385a7bc34",
    slug: "the-newcomes-memoirs-of-a-most-respectable-family",
  },
  {
    uuid: "1d625aa0-c605-012f-1e69-58d385a7bc34",
    slug: "the-paradise-lost-of-milton",
  },
  {
    uuid: "e94f4230-c607-012f-433a-58d385a7bc34",
    slug: "the-philistine-a-periodical-of-protest",
  },
  {
    uuid: "b00df780-c606-012f-f855-58d385a7bc34",
    slug: "the-rams-horn",
  },
  {
    uuid: "9717d0a0-c605-012f-4ce6-58d385a7bc34",
    slug: "the-roycroft-catalog-books-leather-copper",
  },
  {
    uuid: "e29dce30-c604-012f-6a18-58d385a7bc34",
    slug: "the-smith-administration",
  },
  {
    uuid: "56d8b1a0-c604-012f-c57c-58d385a7bc34",
    slug: "the-three-white-kittens",
  },
  {
    uuid: "1b5d4110-c609-012f-2c92-58d385a7bc34",
    slug: "the-woman-republican",
  },
  {
    uuid: "23303ba0-c603-012f-2a3e-58d385a7bc34",
    slug: "the-babys-own-aesop",
  },
  {
    uuid: "15d02530-c603-012f-8274-58d385a7bc34",
    slug: "the-bande-mataram",
  },
  {
    uuid: "703d45c0-c604-012f-c6c4-58d385a7bc34",
    slug: "the-black-laws",
  },
  {
    uuid: "3465b780-c605-012f-e7d9-58d385a7bc34",
    slug: "the-butterflys-ball-or-the-grasshoppers-feast-a-canzonettina-for-three-voices",
  },
  {
    uuid: "e083e890-c604-012f-d629-58d385a7bc34",
    slug: "the-cat",
  },
  {
    uuid: "acdf4e00-c603-012f-9753-58d385a7bc34",
    slug: "the-complaint-and-the-consolation-or-night-thoughts",
  },
  {
    uuid: "2831fe90-c605-012f-5966-58d385a7bc34",
    slug: "the-crim-con-gazette",
  },
  {
    uuid: "323856c0-c606-012f-8298-58d385a7bc34",
    slug: "the-decadent-being-the-gospel-of-inaction-wherein-are-set-forth-in-romance-form",
  },
  {
    uuid: "283438a0-c604-012f-5a4c-58d385a7bc34",
    slug: "the-definitive-treaty-of-peace-and-friendship-between-his-britannick-majesty",
  },
  {
    uuid: "7a697020-c602-012f-d926-58d385a7bc34",
    slug: "the-doctrines-and-discipline-of-the-amechurch",
  },
  {
    uuid: "09bcfdb0-c604-012f-e079-58d385a7bc34",
    slug: "the-federalist-a-collection-of-essays-written-in-favour-of-the-new-constitution",
  },
  {
    uuid: "79f812f0-c605-012f-f8db-58d385a7bc34",
    slug: "the-feeble-minded-or-the-hub-to-our-wheel-of-vice-crime-and-pauperism",
  },
  {
    uuid: "0e4c07d0-c603-012f-7047-58d385a7bc34",
    slug: "the-female-guardian",
  },
  {
    uuid: "208e4a10-c605-012f-67f8-58d385a7bc34",
    slug: "the-four-disgracers",
  },
  {
    uuid: "89c1ba30-c606-012f-dbf7-58d385a7bc34",
    slug: "the-freedom-seekers",
  },
  {
    uuid: "f07c8c10-c602-012f-bb35-58d385a7bc34",
    slug: "the-fruits-of-america-containing-richly-colored-figures-and-full-descriptions",
  },
  {
    uuid: "eda5e360-c605-012f-75b4-58d385a7bc34",
    slug: "the-gallery-of-illustrious-americans-containing-the-portraits-and-biographical",
  },
  {
    uuid: "6dc86d40-c603-012f-4407-58d385a7bc34",
    slug: "the-great-art-of-artillery-of-casimir-simienowicz-tr-from-the-french-by-george",
  },
  {
    uuid: "12ee0fb0-c606-012f-0160-58d385a7bc34",
    slug: "the-higher-law-in-its-relations-to-civil-government-with-particular-reference",
  },
  {
    uuid: "ca171520-c605-012f-abc6-58d385a7bc34",
    slug: "the-history-of-the-catnach-press",
  },
  {
    uuid: "ef7c25e0-c604-012f-f1fc-58d385a7bc34",
    slug: "the-house-in-good-taste-by-elsie-de-wolfe-illustrated-with-photographs-in-color",
  },
  {
    uuid: "584ee6c0-c605-012f-2c47-58d385a7bc34",
    slug: "the-interesting-narrative-of-the-life-of-olaudah-equiano-or-gustavus-vassa",
  },
  {
    uuid: "1991b6a0-c606-012f-8164-58d385a7bc34",
    slug: "the-kettle-abusing-the-pot",
  },
  {
    uuid: "136a9d90-c603-012f-6eb5-58d385a7bc34",
    slug: "the-kitchen-companion-and-house-keepers-own-book-containing-all-the-modern",
  },
  {
    uuid: "e98a4a00-c603-012f-7f7d-58d385a7bc34",
    slug: "the-last-journals-of-david-livingstone-in-central-africa-from-1865-to-his-death",
  },
  {
    uuid: "c15ad0d0-c605-012f-3e33-58d385a7bc34",
    slug: "the-life-and-adventures-of-joshua-penny-a-native-of-southold-long-island-suffolk",
  },
  {
    uuid: "365207e0-c605-012f-541f-58d385a7bc34",
    slug: "the-life-of-charlotte-bront",
  },
  {
    uuid: "8c33d610-c604-012f-1dd2-58d385a7bc34",
    slug: "the-looking-glass-for-the-mind-being-an-elegant-collection-of-delightful",
  },
  {
    uuid: "0a501170-c606-012f-72b9-58d385a7bc34",
    slug: "the-madonna-of-saint-anthony-of-padua",
  },
  {
    uuid: "ebd4f340-c604-012f-416f-58d385a7bc34",
    slug: "the-market-assistant",
  },
  {
    uuid: "11c34f30-c604-012f-120a-58d385a7bc34",
    slug: "the-maroon-or-planter-life-in-jamaica",
  },
  {
    uuid: "26afc260-c603-012f-b04a-58d385a7bc34",
    slug: "the-melancholy-cavalier-or-fancys-master-piece-a-poem-by-j-c",
  },
  {
    uuid: "b4eb64e0-c604-012f-2ed9-58d385a7bc34",
    slug: "the-metaphysics-of-sir-isaac-newton-or-a-comparison-between-the-opinions-of-sir",
  },
  {
    uuid: "e739da90-c605-012f-846f-58d385a7bc34",
    slug: "the-millennium-or-the-thousand-years-of-prosperity-promised-to-the-church-of-god",
  },
  {
    uuid: "14e1aab0-c607-012f-ace0-58d385a7bc34",
    slug: "the-morning-telegraph",
  },
  {
    uuid: "378ee9e0-c604-012f-b67d-58d385a7bc34",
    slug: "the-mysteries-of-udolpho",
  },
  {
    uuid: "29e36470-c606-012f-5fe5-58d385a7bc34",
    slug: "the-narrative-of-an-explorer-in-tropical-south-africa",
  },
  {
    uuid: "a4269ee0-c604-012f-1888-58d385a7bc34",
    slug: "the-national-and-private-advantages-of-the-african-trade-considered-being",
  },
  {
    uuid: "01a9aa90-c605-012f-fb7e-58d385a7bc34",
    slug: "the-natural-history-of-the-rarer-lepidopterous-insects-of-georgia-including",
  },
  {
    uuid: "d331cc00-c604-012f-ce33-58d385a7bc34",
    slug: "the-new-pilgrims-progress-or-a-journey-to-jerusalem",
  },
  {
    uuid: "17a92650-c606-012f-dd2d-58d385a7bc34",
    slug: "the-night-before-christmas-or-a-visit-of-st-nicholas",
  },
  {
    uuid: "63b1faf0-0042-0130-e549-58d385a7bc34",
    slug: "the-passing-year-1911",
  },
  {
    uuid: "bd6804d0-c605-012f-0db3-58d385a7bc34",
    slug: "the-physiology-of-common-life",
  },
  {
    uuid: "5e0e09e0-c605-012f-33e9-58d385a7bc34",
    slug: "the-pilgrims-progress-from-this-world-to-that-which-is-to-come-2",
  },
  {
    uuid: "3faa10b0-c605-012f-5ddd-58d385a7bc34",
    slug: "the-pilgrims-progress-from-this-world-to-that-which-is-to-come-2-3",
  },
  {
    uuid: "93899ee0-c605-012f-0e64-58d385a7bc34",
    slug: "the-pilgrims-progress",
  },
  {
    uuid: "ce2f5e90-c602-012f-93a3-58d385a7bc34",
    slug: "the-posthumous-papers-of-the-pickwick-club",
  },
  {
    uuid: "74533870-c604-012f-0522-58d385a7bc34",
    slug: "the-queens-matrimonial-ladder-a-national-toy-with-fourteen-step-scenes",
  },
  {
    uuid: "396a4c70-c605-012f-6371-58d385a7bc34",
    slug: "the-real-oscar-wilde",
  },
  {
    uuid: "4328c600-c604-012f-342d-58d385a7bc34",
    slug: "the-return-of-the-native",
  },
  {
    uuid: "6f4d92f0-c602-012f-85ab-58d385a7bc34",
    slug: "the-rock-of-wisdom-an-explanation-of-the-sacred-scriptures",
  },
  {
    uuid: "7d50c080-c602-012f-88aa-58d385a7bc34",
    slug: "the-science-of-love-or-the-whole-art-of-courtship",
  },
  {
    uuid: "fa1e93e0-c603-012f-6a45-58d385a7bc34",
    slug: "the-scourging-of-a-race-and-other-sermons-and-addresses-by-w-bishop-johnson",
  },
  {
    uuid: "8b637f90-0040-0130-78d3-58d385a7bc34",
    slug: "the-sea-mans-dictionary-or-an-exposition-and-demonstration-of-all-the-parts",
  },
  {
    uuid: "cba412e0-c606-012f-60b4-58d385a7bc34",
    slug: "the-sketch-book",
  },
  {
    uuid: "7c7e2a50-c60a-012f-5b66-58d385a7bc34",
    slug: "the-sleeping-beauty-picture-book",
  },
  {
    uuid: "5edc7540-c605-012f-2f80-58d385a7bc34",
    slug: "the-souldiers-pocket-bible-containing-the-most-if-not-all-those-places-contained",
  },
  {
    uuid: "21a0e7a0-c606-012f-0deb-58d385a7bc34",
    slug: "the-story-of-the-jubilee-singers-with-their-songs",
  },
  {
    uuid: "ec587f60-c604-012f-4270-58d385a7bc34",
    slug: "the-story-of-the-exposition-being-the-official-history-of-the-international",
  },
  {
    uuid: "3b39bf20-c605-012f-3a5d-58d385a7bc34",
    slug: "the-topography-and-monuments-of-ancient-rome",
  },
  {
    uuid: "1f0ab8f0-c605-012f-2424-58d385a7bc34",
    slug: "the-tour-of-doctor-prosody-in-search-of-the-antique-and-picturesque-through",
  },
  {
    uuid: "f18e1ef0-c603-012f-9e75-58d385a7bc34",
    slug: "the-travels-of-the-jesuits-in-ethiopia",
  },
  {
    uuid: "1b425170-c605-012f-be4d-58d385a7bc34",
    slug: "the-whole-prose-romances-of-franois-marie-arouet-de-voltaire-now-first",
  },
  {
    uuid: "4b0f6750-c604-012f-1cd0-58d385a7bc34",
    slug: "the-works-of-percy-bysshe-shelley-with-his-life-in-two-volumes",
  },
  {
    uuid: "d6811e30-c604-012f-e562-58d385a7bc34",
    slug: "the-works-of-william-shakespeare",
  },
  {
    uuid: "3383af70-c605-012f-c9ea-58d385a7bc34",
    slug: "the-works-of-the-late-professor-camper",
  },
  {
    uuid: "1bed3e80-c606-012f-72df-58d385a7bc34",
    slug: "the-young-womans-guide-to-virtue-economy-and-happiness",
  },
  {
    uuid: "37ee89c0-c606-012f-d4e3-58d385a7bc34",
    slug: "theion-kai-hieron-euangelion-kai-aphierthen-t-pote-makaritat-kai-sophotat",
  },
  {
    uuid: "08ca5890-c605-012f-e8f5-58d385a7bc34",
    slug: "theodore-ii-le-nouvel-empire-dabyssinie-et-les-interets-francais-dans-le-sud",
  },
  {
    uuid: "0ae1b190-c603-012f-93ef-58d385a7bc34",
    slug: "theorica-musice",
  },
  {
    uuid: "6ce1dbf0-c604-012f-45c0-58d385a7bc34",
    slug: "thomas-clarkson",
  },
  {
    uuid: "e5e29e80-c605-012f-464f-58d385a7bc34",
    slug: "thompson-starrett-company-building-and-industrial-construction",
  },
  {
    uuid: "7d24e300-c602-012f-2b58-58d385a7bc34",
    slug: "three-weeks-in-the-gold-mines-or-adventures-with-the-gold-diggers-of-california",
  },
  {
    uuid: "c0e845e0-c602-012f-3299-58d385a7bc34",
    slug: "through-the-looking-glass",
  },
  {
    uuid: "10182e30-c604-012f-dbd4-58d385a7bc34",
    slug: "torat-adonai",
  },
  {
    uuid: "1e871ab0-c604-012f-be06-58d385a7bc34",
    slug: "tractatus-secudi-pars-ii-de-templo-musicae-in-quo-musica-universalis-tanquam-en",
  },
  {
    uuid: "6d77dc90-c602-012f-ad12-58d385a7bc34",
    slug: "travels-through-the-interior-provinces-of-colombia",
  },
  {
    uuid: "3e0e9650-c605-012f-b21c-58d385a7bc34",
    slug: "travels-to-discover-the-source-of-the-nile-in-the-years-1768-1769-1770-1771-17-2",
  },
  {
    uuid: "73c31e50-c605-012f-5e2d-58d385a7bc34",
    slug: "truth-stranger-than-fiction-father-hensons-story-of-his-own-life",
  },
  {
    uuid: "b63872a0-c603-012f-5ead-58d385a7bc34",
    slug: "trzy-swiete-hostye-w-poznniu-1399-roku-noami-od-ydow-ukote-w-xiadz-tomasz",
  },
  {
    uuid: "90a6fb70-003e-0130-ec11-58d385a7bc34",
    slug: "tsarskoe-selo-v-tsarstvovanie-imperatritsy-elisavety-petrovny",
  },
  {
    uuid: "8e780e40-003e-0130-ec68-58d385a7bc34",
    slug: "tsarskoselskii-arsenal-ili-sobranie-oruzhiia-prinadlezhashchago-ego-velichestvu",
  },
  {
    uuid: "406411c0-c605-012f-4129-58d385a7bc34",
    slug: "types-of-mankind-or-ethnological-researches-based-upon-the-ancient-monuments",
  },
  {
    uuid: "c68175e0-c607-012f-4935-58d385a7bc34",
    slug: "typographic-messenger",
  },
  {
    uuid: "0e173690-c604-012f-b94c-58d385a7bc34",
    slug: "uerdadera-relacion-de-la-conquista-del-peru-y-prouincia-del-cuzco-llamada",
  },
  {
    uuid: "1a157280-c604-012f-0848-58d385a7bc34",
    slug: "uncle-toms-cabin-2-3",
  },
  {
    uuid: "9262df80-c616-012f-094b-58d385a7bc34",
    slug: "united-states-army-medical-museum-photography-collection",
  },
  {
    uuid: "0f4f7eb0-c607-012f-03e0-58d385a7bc34",
    slug: "universal-architecture",
  },
  {
    uuid: "cfde0850-c602-012f-4a05-58d385a7bc34",
    slug: "urbis-romae-prospectus-1593",
  },
  {
    uuid: "2ea3c6d0-c606-012f-b704-58d385a7bc34",
    slug: "venationis-piscationis-et-avcvpii-typi",
  },
  {
    uuid: "3874b510-c60b-012f-2d4a-58d385a7bc34",
    slug: "the-verdict",
  },
  {
    uuid: "c5399040-c60a-012f-4b7b-58d385a7bc34",
    slug: "vicar-of-wakefield-virgin-of-the-sun-vortigern-way-of-the-world-wreck-ashore",
  },
  {
    uuid: "41290e40-c605-012f-d2b5-58d385a7bc34",
    slug: "victoria-porcheti-aduersus-impios-hebros-in-qua-tum-ex-sacris-literis-tum-ex",
  },
  {
    uuid: "4d1d6a20-c6cf-012f-6f78-58d385a7bc34",
    slug: "views-of-paris-france-and-its-environs",
  },
  {
    uuid: "01cc0910-c60b-012f-a261-58d385a7bc34",
    slug: "vingt-annes-de-vie-africaine-rcits-de-voyages-daventures-et-dexploration-au",
  },
  {
    uuid: "2404c220-c604-012f-ed3c-58d385a7bc34",
    slug: "virginia-a-sermon-preached-at-white-chappel",
  },
  {
    uuid: "32d067f0-c603-012f-665f-58d385a7bc34",
    slug: "vlyssis-aldrovandi",
  },
  {
    uuid: "c69e7100-c602-012f-dec0-58d385a7bc34",
    slug: "vnderweysung-der-messung-mit-dem-zirckel-vnd-richtscheyt-in-linien-ebnen-vnnd",
  },
  {
    uuid: "2cef93f0-c608-012f-b97b-58d385a7bc34",
    slug: "vogue",
  },
  {
    uuid: "5fd805d0-0042-0130-4e23-58d385a7bc34",
    slug: "voitures-harnois-livres",
  },
  {
    uuid: "782f4a30-c604-012f-6f08-58d385a7bc34",
    slug: "von-material-zu-architektur",
  },
  {
    uuid: "dd63f730-c605-012f-245a-58d385a7bc34",
    slug: "vorstelijcke-warande-der-dieren-waer-in-de-zeden-rijcke-philosophie-potisch",
  },
  {
    uuid: "5676e590-c605-012f-16ea-58d385a7bc34",
    slug: "voyage-d-iserts-en-guine-et-dans-les-iles-caraibes-en-amerique-par-paul-erdman",
  },
  {
    uuid: "772374b0-c604-012f-40e5-58d385a7bc34",
    slug: "voyage-en-perse",
  },
  {
    uuid: "d482d310-c603-012f-077e-58d385a7bc34",
    slug: "voyage-pittoresque-de-paris-ou-indication-de-tout-ce-quil-y-a-plus-beau-dans",
  },
  {
    uuid: "148bdcf0-c606-012f-6c70-58d385a7bc34",
    slug: "voyage-cayenne-dans-les-deux-amriques-et-chez-les-anthropophages",
  },
  {
    uuid: "893100a0-c605-012f-c7f0-58d385a7bc34",
    slug: "voyage-surinam",
  },
  {
    uuid: "c223a950-c605-012f-7ad9-58d385a7bc34",
    slug: "voyages-de-corneille-le-brun-par-la-moscovie-en-perse-etaux-indes-orientales",
  },
  {
    uuid: "bbbfd610-c603-012f-585a-58d385a7bc34",
    slug: "voyages-en-guinee-et-dans-les-iles-caraibes-en-amerique",
  },
  {
    uuid: "6b951690-0042-0130-9e5c-58d385a7bc34",
    slug: "vryheden-by-de-vergaderinghe-van-de-negenthiene-vande-geoctroyeerde",
  },
  {
    uuid: "083b6ea0-c609-012f-a62c-58d385a7bc34",
    slug: "walter-l-fleming-papers",
  },
  {
    uuid: "bd5cf530-c603-012f-4957-58d385a7bc34",
    slug: "wanderings-and-adventures-in-the-interior-of-southern-africa",
  },
  {
    uuid: "6aa623b0-c605-012f-f6c5-58d385a7bc34",
    slug: "the-washington-sketch-book-a-society-souvenir",
  },
  {
    uuid: "7f749940-c605-012f-7cb4-58d385a7bc34",
    slug: "why-rome",
  },
  {
    uuid: "c64d33d0-c603-012f-f25e-58d385a7bc34",
    slug: "wild-flowers-of-new-england",
  },
  {
    uuid: "2c744c00-c604-012f-7d31-58d385a7bc34",
    slug: "willards-map-of-time-a-companion-to-the-historic-guide",
  },
  {
    uuid: "0e300b30-c605-012f-68b7-58d385a7bc34",
    slug: "william-alexander-yancey-papers",
  },
  {
    uuid: "0b230f90-c609-012f-9021-58d385a7bc34",
    slug: "william-frederick-allen-papers-1870-1894-bulk-1879-1894",
  },
  {
    uuid: "760b5160-c605-012f-aaf1-58d385a7bc34",
    slug: "women-stenographers",
  },
  {
    uuid: "efc621b0-c603-012f-6024-58d385a7bc34",
    slug: "yamato-ezukushi",
  },
  {
    uuid: "03fe4890-c604-012f-bf24-58d385a7bc34",
    slug: "yogai-jinbutsu-shu",
  },
  {
    uuid: "0307e720-c607-012f-b3f3-58d385a7bc34",
    slug: "zeitschrift-der-gesellschaft-fr-erdkunde-zu-berlin",
  },
  {
    uuid: "355df420-c604-012f-5a13-58d385a7bc34",
    slug: "zoo-ili-pisma-ne-o-liubvi",
  },
  {
    uuid: "c74ba0c0-c603-012f-3722-58d385a7bc34",
    slug: "zvrokruh",
  },
  {
    uuid: "f1578a70-c603-012f-9805-58d385a7bc34",
    slug: "a-collection-of-sras-prayers-and-other-religious-writings",
  },
  {
    uuid: "bead7320-c604-012f-0222-58d385a7bc34",
    slug: "babylonian-talmud-seder-kodashim-and-the-minor-tractates-colophon-of-tractate",
  },
  {
    uuid: "61ec14f0-0042-0130-3ac6-58d385a7bc34",
    slug: "bible-new-testament-gospels-matthew-and-mark",
  },
  {
    uuid: "cf10b7f0-c602-012f-78e8-58d385a7bc34",
    slug: "charms-and-incantations",
  },
  {
    uuid: "c23bfe30-c60a-012f-0882-58d385a7bc34",
    slug: "circulars-no-1-4",
  },
  {
    uuid: "a6c72db0-c605-012f-fd09-58d385a7bc34",
    slug: "collection-of-vladimir-mayakovskii-tatiana-iakovleva-held-by-the-slavic",
  },
  {
    uuid: "2b6966c0-c603-012f-b8b8-58d385a7bc34",
    slug: "collection-of-four-prints-by-akeksei-zubov-in-the-slavic-and-baltic-division",
  },
  {
    uuid: "cb0705a0-c603-012f-9180-58d385a7bc34",
    slug: "collection-publiee-en-1864",
  },
  {
    uuid: "fce9e080-c605-012f-9dbb-58d385a7bc34",
    slug: "eaux-fortes-originales-pointes-seches-essais-de-procedes-etc-2",
  },
  {
    uuid: "27f34580-c604-012f-77db-58d385a7bc34",
    slug: "illustrations-of-byrons-poetry",
  },
  {
    uuid: "67e0d460-c604-012f-3d7f-58d385a7bc34",
    slug: "landscapes-seascapes-and-miscellaneous-subjects",
  },
  {
    uuid: "28b66420-c604-012f-9fdb-58d385a7bc34",
    slug: "mundus-novus",
  },
  {
    uuid: "db47fc70-c604-012f-4dfc-58d385a7bc34",
    slug: "opere",
  },
  {
    uuid: "92a1c9d0-c605-012f-6a66-58d385a7bc34",
    slug: "organization-and-objects",
  },
  {
    uuid: "0f028770-c605-012f-b2a3-58d385a7bc34",
    slug: "photograph-album",
  },
  {
    uuid: "997a98c0-c605-012f-b3c3-58d385a7bc34",
    slug: "ruth-page-photographic-scrapbook",
  },
  {
    uuid: "be2fb690-c603-012f-ec4f-58d385a7bc34",
    slug: "photographs-of-hopi-zuni-and-navaho-indians-and-their-communal-life",
  },
  {
    uuid: "0d7cea90-c605-012f-0be6-58d385a7bc34",
    slug: "portraits-2",
  },
  {
    uuid: "7a32a840-c602-012f-38a2-58d385a7bc34",
    slug: "prayers-in-ethiopic",
  },
  {
    uuid: "35caea70-c605-012f-e9e6-58d385a7bc34",
    slug: "isadora-duncan-programs-and-announcements",
  },
  {
    uuid: "c92296e0-c605-012f-ac79-58d385a7bc34",
    slug: "sonate-en-mi-bemol-mineur-pour-piano-iv-lent",
  },
  {
    uuid: "c7c12ae0-c605-012f-87b4-58d385a7bc34",
    slug: "supplment-2",
  },
  {
    uuid: "699ec040-c607-012f-db2b-58d385a7bc34",
    slug: "the-four-gospels",
  },
  {
    uuid: "49fcb600-c603-012f-1251-58d385a7bc34",
    slug: "the-earliest-issued-new-york-notes",
  },
  {
    uuid: "a6a193a0-c609-012f-a6df-58d385a7bc34",
    slug: "anacron",
  },
  {
    uuid: "0b5bff80-c606-012f-6c20-58d385a7bc34",
    slug: "views-of-bourges-and-other-miscellaneous-prints",
  },
  {
    uuid: "cb7b75b0-c604-012f-9c23-58d385a7bc34",
    slug: "views-of-constantinople-and-the-bosporus-engravings-from-the-designs-of-ai",
  },
  {
    uuid: "f6fb9610-c603-012f-986a-58d385a7bc34",
    slug: "views-of-the-pacific",
  },
  {
    uuid: "64d32700-0042-0130-8c26-58d385a7bc34",
    slug: "an-abstract-of-all-statutes-made-concerning-aliens-trading-in-england",
  },
  {
    uuid: "a9f30b40-c627-012f-9c32-58d385a7bc34",
    slug: "al-shif-bi-tarf-i-huqq-al-mustaf",
  },
  {
    uuid: "19773560-c606-012f-fafb-58d385a7bc34",
    slug: "lambassade-de-la-compagnie-orientale-des-provinces-unies-vers-lempereur",
  },
  {
    uuid: "3c823aa0-c605-012f-d6eb-58d385a7bc34",
    slug: "de-animalibvs-insectis-libri-septem-cvm-singvlorvm-iconibvs-adviuum-expressis",
  },
  {
    uuid: "c58dd230-c602-012f-5509-58d385a7bc34",
    slug: "the-antiquities-of-warwickshire-illustrated-from-records-leiger-books",
  },
  {
    uuid: "2b35f840-c605-012f-70ac-58d385a7bc34",
    slug: "the-art-of-dancing-explained-by-reading-and-figures-whereby-the-manner",
  },
  {
    uuid: "d151cc30-c607-012f-8bfa-58d385a7bc34",
    slug: "the-bee",
  },
  {
    uuid: "c69d1f70-c604-012f-6a7c-58d385a7bc34",
    slug: "a-brief-description-of-the-province-of-carolina-on-the-coasts-of-floreda",
  },
  {
    uuid: "43237710-c605-012f-052d-58d385a7bc34",
    slug: "a-brief-history-of-epidemic-and-pestilential-diseases-with-the-principal",
  },
  {
    uuid: "6e71e420-c602-012f-0cdc-58d385a7bc34",
    slug: "la-cause-des-esclaves-negres-et-des-habitans-de-la-guinee-portee-au-tribunal",
  },
  {
    uuid: "50c53330-c604-012f-673e-58d385a7bc34",
    slug: "the-chronicles-of-crime-or-the-new-newgate-calendar-being-a-series-of-memoirs",
  },
  {
    uuid: "88fa87a0-c604-012f-580f-58d385a7bc34",
    slug: "the-complete-works-of-joshuah-sylvester",
  },
  {
    uuid: "8cb06b80-0040-0130-df14-58d385a7bc34",
    slug: "de-conflagratione-agri-puteolani-simonis-portii",
  },
  {
    uuid: "c09bdcc0-c605-012f-c8ed-58d385a7bc34",
    slug: "a-constitution-or-frame-of-government-agreed-upon-by-the-delegates-of-the-people",
  },
  {
    uuid: "f11d6ed0-c605-012f-46ca-58d385a7bc34",
    slug: "the-costume-of-china",
  },
  {
    uuid: "efe0b9e0-c607-012f-f11a-58d385a7bc34",
    slug: "the-daily-graphic",
  },
  {
    uuid: "7152cfa0-c605-012f-7840-58d385a7bc34",
    slug: "the-dangerous-classes-of-new-york-and-twenty-years-work-among-them",
  },
  {
    uuid: "c5c2ed00-c605-012f-9d14-58d385a7bc34",
    slug: "la-danse-au-thtre",
  },
  {
    uuid: "6f7c96b0-c602-012f-c1e0-58d385a7bc34",
    slug: "the-decree-in-the-case-of-solomon-de-medina-mosesson-and-company-merchants",
  },
  {
    uuid: "8416d6d0-c604-012f-78d5-58d385a7bc34",
    slug: "a-defence-of-the-constitutions-of-government-of-the-united-states-of-america",
  },
  {
    uuid: "737ea530-c604-012f-271e-58d385a7bc34",
    slug: "le-diable-paris",
  },
  {
    uuid: "647064c0-c604-012f-47ad-58d385a7bc34",
    slug: "a-dissertation-on-indian-treaties-traders-manners-customs-from-experimental",
  },
  {
    uuid: "e59511d0-c605-012f-c7c5-58d385a7bc34",
    slug: "the-emigrants-guide-to-oregon-and-california",
  },
  {
    uuid: "c41d0910-c602-012f-8f05-58d385a7bc34",
    slug: "der-erste-tail",
  },
  {
    uuid: "0772ad90-c605-012f-f40d-58d385a7bc34",
    slug: "the-first-annual-report-of-the-new-york-committee-of-vigilance-for-the-year-1837",
  },
  {
    uuid: "19c1d1b0-c605-012f-68d4-58d385a7bc34",
    slug: "a-general-history-of-the-lives-and-adventures-of-the-most-famous-highwaymen",
  },
  {
    uuid: "18842520-c603-012f-4dc8-58d385a7bc34",
    slug: "the-glorious-kingdom-of-christ-escribed-and-clearly-vindicated-against-the-bold",
  },
  {
    uuid: "64703630-c604-012f-9eb4-58d385a7bc34",
    slug: "the-greatness-of-christ-and-other-sermons",
  },
  {
    uuid: "58a0ca50-c604-012f-d3f8-58d385a7bc34",
    slug: "ha-mishnayot",
  },
  {
    uuid: "44b43910-c603-012f-bd51-58d385a7bc34",
    slug: "the-glorious-progress-of-the-gospel-amongst-the-indians-in-new-england",
  },
  {
    uuid: "37f512c0-c605-012f-0704-58d385a7bc34",
    slug: "the-history-of-four-footed-beasts-and-serpents",
  },
  {
    uuid: "c327b060-c603-012f-b373-58d385a7bc34",
    slug: "the-history-of-the-maroons-from-their-origin-to-the-establishment-of-their-chi-2",
  },
  {
    uuid: "2cdaa7d0-c603-012f-09be-58d385a7bc34",
    slug: "the-history-of-the-parliament-of-england",
  },
  {
    uuid: "1406c910-c605-012f-be5c-58d385a7bc34",
    slug: "the-history-of-the-rise-progress-and-accomplishment-of-the-abolition",
  },
  {
    uuid: "f613a290-c605-012f-fec3-58d385a7bc34",
    slug: "the-history-or-anecdotes-of-the-revolution-in-russia-in-the-year-1762",
  },
  {
    uuid: "699a74f0-c607-012f-86b9-58d385a7bc34",
    slug: "the-illuminated-pictorial-directory-of-new-york",
  },
  {
    uuid: "669924e0-c605-012f-1acb-58d385a7bc34",
    slug: "the-illustrated-hand-book-to-london-and-its-environs-with-fifty-engravings-two",
  },
  {
    uuid: "4b4d0340-c605-012f-0e08-58d385a7bc34",
    slug: "the-injustice-and-impolicy-of-the-slave-trade-and-of-the-slavery-of-the-africans",
  },
  {
    uuid: "edd01140-c602-012f-a0e9-58d385a7bc34",
    slug: "a-journal-of-the-voyages-and-travels-of-a-corps-of-discovery",
  },
  {
    uuid: "c1a2a4f0-c603-012f-1fd6-58d385a7bc34",
    slug: "the-law-of-freedom-and-bondage-in-the-united-states",
  },
  {
    uuid: "0d52c5e0-c604-012f-8f56-58d385a7bc34",
    slug: "a-letter-from-william-penn-proprietary-and-governour-of-pennsylvania-in-america",
  },
  {
    uuid: "fade5da0-c607-012f-6e69-58d385a7bc34",
    slug: "the-life-of-toussaint-louverture-the-negro-patriot-of-hayti-comprising",
  },
  {
    uuid: "b69fb6c0-c605-012f-de78-58d385a7bc34",
    slug: "the-life-travels-and-adventures-of-ferdinand-de-soto-discoverer",
  },
  {
    uuid: "93064260-003e-0130-6962-58d385a7bc34",
    slug: "the-literary-miscellany-or-selections-and-extracts-classical-and-scientific",
  },
  {
    uuid: "b9269060-c602-012f-7c3a-58d385a7bc34",
    slug: "lllustrated-catalogue-of-the-art-and-literary-collections-of-miss-emilie-grigsby",
  },
  {
    uuid: "fa6f9490-c6b5-012f-dfc8-58d385a7bc34",
    slug: "the-lure-of-africa",
  },
  {
    uuid: "2ec84fc0-c605-012f-2954-58d385a7bc34",
    slug: "the-man-in-the-moon",
  },
  {
    uuid: "419bbe60-c604-012f-a44c-58d385a7bc34",
    slug: "the-mathematical-principles-of-natural-philosophy",
  },
  {
    uuid: "47613d80-c606-012f-032f-58d385a7bc34",
    slug: "a-military-and-topographical-atlas-of-the-united-states-including-the-british",
  },
  {
    uuid: "ca5c2300-c602-012f-7cb4-58d385a7bc34",
    slug: "a-mite-cast-into-the-treasury-or-observations-on-slave-keeping",
  },
  {
    uuid: "3fa71390-c603-012f-7e71-58d385a7bc34",
    slug: "la-mnagerie-parisienne",
  },
  {
    uuid: "f2fb0560-c604-012f-8af7-58d385a7bc34",
    slug: "a-new-and-improved-grammar-of-the-english-tongne-sic-for-the-use-of-schools",
  },
  {
    uuid: "32a563c0-c604-012f-5e84-58d385a7bc34",
    slug: "the-peddler",
  },
  {
    uuid: "f715a3e0-c603-012f-ec4f-58d385a7bc34",
    slug: "the-pocket-guide-to-california-a-sea-and-land-route-book-containing",
  },
  {
    uuid: "5c698670-0042-0130-fc85-58d385a7bc34",
    slug: "the-survey-of-london",
  },
  {
    uuid: "1b435110-c606-012f-fbc0-58d385a7bc34",
    slug: "a-survey-of-the-roads-of-the-united-states-of-america",
  },
  {
    uuid: "d19ac0e0-c604-012f-e258-58d385a7bc34",
    slug: "the-three-lakes-marian-lall-jan-and-how-they-were-named",
  },
  {
    uuid: "12349da0-c604-012f-b9d0-58d385a7bc34",
    slug: "le-tombeau-de-la-sorbonne",
  },
  {
    uuid: "3d0073a0-c604-012f-6dcc-58d385a7bc34",
    slug: "a-tour-in-scotland",
  },
  {
    uuid: "43a2a560-c603-012f-1060-58d385a7bc34",
    slug: "the-true-history-of-deacon-giles-distillery-reported-for-the-benefit",
  },
  {
    uuid: "621d04f0-c605-012f-8b5d-58d385a7bc34",
    slug: "les-voyages-dv-sievr-de-champlain-xaintongeois",
  },
  {
    uuid: "d491d960-c605-012f-4279-58d385a7bc34",
    slug: "tudes-sur-lislam-au-sngal",
  },
  {
    uuid: "4824d040-c606-012f-ae16-58d385a7bc34",
    slug: "uvres-de-moliere",
  },
  {
    uuid: "63738340-c604-012f-9250-58d385a7bc34",
    slug: "uvres-de-racine",
  },
  {
    uuid: "a2f6ac00-98af-0130-239e-58d385a7b928",
    slug: "nypl-exhibition-and-retail-shop-poster-collection",
  },
  {
    uuid: "8d683590-d880-0131-e8a0-58d385a7b928",
    slug: "the-feathered-world",
  },
  {
    uuid: "3b592540-ac73-0131-1e79-58d385a7b928",
    slug: "the-hotel-monthly",
  },
  {
    uuid: "2e9678a0-50a2-0132-67f0-58d385a7bbd0",
    slug: "hyperion",
  },
  {
    uuid: "6cb29f40-2a10-0131-fc83-58d385a7b928",
    slug: "john-van-druten-papers-1901-1957",
  },
  {
    uuid: "00d06f30-525b-0132-a30e-58d385a7b928",
    slug: "nyc-high-school-pics-1968-1970",
  },
  {
    uuid: "8c74c160-4da3-0132-3e5c-58d385a7b928",
    slug: "a-new-american-picture",
  },
  {
    uuid: "dec972d0-23af-0131-2af4-58d385a7bbd0",
    slug: "trow-business-directory-of-the-boroughs-of-manhattan-and-the-bronx-city-of-new",
  },
  {
    uuid: "ecafeaa0-a6f8-0131-2ca3-58d385a7b928",
    slug: "new-york-polyanthos",
  },
  {
    uuid: "cdecb450-c23a-0130-a81b-58d385a7bbd0",
    slug: "overseas-woman",
  },
  {
    uuid: "acc876a0-1c0a-0132-c5a7-58d385a7b928",
    slug: "peter-joseph-krahe",
  },
  {
    uuid: "e51232f0-5268-0132-f141-58d385a7bbd0",
    slug: "photomat-hollywood-blvd",
  },
  {
    uuid: "e3029160-0ac6-0132-b29f-58d385a7bbd0",
    slug: "the-black-list-volumes-1-2-and-3",
  },
  {
    uuid: "593a25f0-4672-0132-a793-58d385a7b928",
    slug: "views-of-southern-utah",
  },
  {
    uuid: "44fea050-561e-0132-4a67-58d385a7bbd0",
    slug: "written-in-memory",
  },
  {
    uuid: "311a0c00-35e2-0132-3c12-58d385a7bbd0",
    slug: "des-fortifications-et-artifices",
  },
  {
    uuid: "e0f76510-50a7-0132-88b3-58d385a7b928",
    slug: "the-gossiping-photographer-on-the-rhine",
  },
  {
    uuid: "372054f0-0d04-0131-4b3f-58d385a7b928",
    slug: "the-great-trunk-mystery-of-new-york-city-murder-of-the-beautiful-miss-alice",
  },
  {
    uuid: "00767000-f4d5-0131-3d91-58d385a7b928",
    slug: "the-jungle-book",
  },
  {
    uuid: "15109bb0-4cc4-0132-254c-58d385a7b928",
    slug: "la-photographie-applique-aux-recherches-micrographiques",
  },
  {
    uuid: "dc8ce110-f4d5-0131-8223-58d385a7b928",
    slug: "the-second-jungle-book",
  },
  {
    uuid: "a3950870-27c8-0132-2d7e-58d385a7b928",
    slug: "the-secrets-of-stage-conjuring",
  },
  {
    uuid: "6a584cf0-fa52-0131-c563-58d385a7bbd0",
    slug: "lincoln-kirsteins-collection-of-photographs-of-artwork",
  },
  {
    uuid: "31fdff90-410f-0132-f2fc-58d385a7bbd0",
    slug: "30-years-of-amalgamated-cooperative-housing-1927-1957",
  },
  {
    uuid: "b94282e0-d49d-0131-8d86-58d385a7bbd0",
    slug: "ambassades-mmorables-de-la-compagnie-des-indes-orientales-des-provinces-unies",
  },
  {
    uuid: "abb7c100-6fea-0131-75fe-58d385a7bbd0",
    slug: "annual-report-of-the-board-of-directors-to-the-bondholders-stockholders",
  },
  {
    uuid: "f5e91e40-b2a4-0131-3725-58d385a7bbd0",
    slug: "automobile-digest-and-register",
  },
  {
    uuid: "4a455820-d761-0130-968a-58d385a7bbd0",
    slug: "billy-rose-theatre-division-book-file",
  },
  {
    uuid: "67486c30-2d44-0132-f429-58d385a7b928",
    slug: "breve-e-succinta-relazione-del-viaggio-nel-regno-di-congo-nell-africa",
  },
  {
    uuid: "7d651de0-c4d6-0131-60b0-58d385a7b928",
    slug: "brewers-guide-for-the-united-states-canada-and-mexico-containing-complete-lists",
  },
  {
    uuid: "ffd6b760-9c06-0131-0da0-58d385a7bbd0",
    slug: "broadside-ballads",
  },
  {
    uuid: "8dde1200-e82a-0131-5aea-58d385a7b928",
    slug: "charles-lamb-collection-of-papers",
  },
  {
    uuid: "07b8ef10-1b49-0132-0bd8-58d385a7bbd0",
    slug: "cherokee-advocate",
  },
  {
    uuid: "0bec87c0-deba-0131-afeb-58d385a7b928",
    slug: "cleveland-akron-columbus-railway-company-annual-report-of-the-president",
  },
  {
    uuid: "9a94f750-1cba-0132-fe2a-58d385a7b928",
    slug: "collection-of-decorative-engravings-by-remondini",
  },
  {
    uuid: "5ebf2d00-41a8-0132-f879-58d385a7b928",
    slug: "construction-cost-analysis",
  },
  {
    uuid: "a4c42860-2723-0132-0684-58d385a7b928",
    slug: "cours-de-physique-purement-exprimentale-lusage-des-gens-du-monde",
  },
  {
    uuid: "fde42230-5ba4-0131-4e20-58d385a7b928",
    slug: "daphnis-et-chlo",
  },
  {
    uuid: "a7de0fd0-926b-0131-a315-58d385a7bbd0",
    slug: "dissertation-sur-le-papyrus",
  },
  {
    uuid: "b2be46b0-cb9b-0130-b79f-58d385a7bbd0",
    slug: "documents",
  },
  {
    uuid: "09f81ec0-50c6-0132-8efe-58d385a7bbd0",
    slug: "egypt-nubia-and-ethiopia",
  },
  {
    uuid: "e77a6cb0-1b44-0132-7cfb-58d385a7bbd0",
    slug: "elements-of-phrenology",
  },
  {
    uuid: "23636ca0-076d-0131-793e-58d385a7b928",
    slug: "the-history-and-antiquities-of-london",
  },
  {
    uuid: "830fbca0-8a82-0131-8c5d-58d385a7bbd0",
    slug: "howard-university-the-capstone-of-negro-education",
  },
  {
    uuid: "ab0d3c70-60fc-0131-32d3-58d385a7bbd0",
    slug: "jerome-robbins-video-archive",
  },
  {
    uuid: "6a6e8fc0-6c0f-0131-6fc7-58d385a7bbd0",
    slug: "memoirs-of-zehir-ed-din-muhammed-baber-emperor-of-hindustan",
  },
  {
    uuid: "8b8e68c0-1eea-0131-e81c-58d385a7bbd0",
    slug: "miscellaneous-manuscripts",
  },
  {
    uuid: "967455b0-0074-0132-8ff4-58d385a7bbd0",
    slug: "montezuma-the-serf-or-the-revolt-of-the-mexitili",
  },
  {
    uuid: "6521fe50-9109-0131-3f06-58d385a7b928",
    slug: "monumentos-guadalupanos",
  },
  {
    uuid: "1f5497c0-dee3-0131-b220-58d385a7bbd0",
    slug: "nccs",
  },
  {
    uuid: "99267890-90d4-0131-4244-58d385a7bbd0",
    slug: "petri-apiani-cosmographia",
  },
  {
    uuid: "4c007ce0-f325-0131-daf5-58d385a7b928",
    slug: "photographic-facsimiles-of-the-remains-of-the-epistles-of-clement-of-rome",
  },
  {
    uuid: "2567b4a0-0ea5-0132-ca19-58d385a7b928",
    slug: "photographs-by-kenn-duncan",
  },
  {
    uuid: "7152a310-05fc-0132-3e29-58d385a7b928",
    slug: "pictorial-times",
  },
  {
    uuid: "2669ee70-90da-0131-6960-58d385a7b928",
    slug: "plain-truth",
  },
  {
    uuid: "2d9f8dc0-b436-0131-417a-58d385a7bbd0",
    slug: "poster-collection",
  },
  {
    uuid: "a2ad9470-1a61-0132-9f5b-58d385a7bbd0",
    slug: "pratt-institute-monthly",
  },
  {
    uuid: "082139a0-5c5e-0131-26b7-58d385a7b928",
    slug: "the-printers-helper",
  },
  {
    uuid: "535459f0-0156-0132-1f6c-58d385a7b928",
    slug: "the-queens-empire",
  },
  {
    uuid: "ee50b760-40e7-0131-9345-58d385a7bbd0",
    slug: "sociedad-fonogrfica-espaola-cylinder-recordings",
  },
  {
    uuid: "35b2ebd0-ee8e-0131-d2a6-58d385a7b928",
    slug: "soldados-de-la-memoria",
  },
  {
    uuid: "5df86560-b298-0131-a5a3-58d385a7b928",
    slug: "stead-collection",
  },
  {
    uuid: "794212b0-2c85-0132-d7a0-58d385a7bbd0",
    slug: "stories-from-the-pentamerone",
  },
  {
    uuid: "9a1d8ae0-f3e3-0130-bd80-58d385a7b928",
    slug: "tanny",
  },
  {
    uuid: "18e48540-dee6-0131-3c58-58d385a7b928",
    slug: "telegraph-and-telephone-age",
  },
  {
    uuid: "3f972680-5312-0132-e7ad-58d385a7b928",
    slug: "tiflis",
  },
  {
    uuid: "8940f2c0-410a-0132-ee28-58d385a7bbd0",
    slug: "twenty-five-years-of-public-housing",
  },
  {
    uuid: "533a4880-4116-0132-9619-58d385a7b928",
    slug: "wallabout-houses",
  },
  {
    uuid: "655447e0-32b9-0132-09f6-58d385a7b928",
    slug: "wesley-williams-photograph-collection",
  },
  {
    uuid: "b09b22d0-7174-0131-837d-58d385a7bbd0",
    slug: "zur-fauna-der-vorwelt",
  },
  {
    uuid: "8f96ce90-2567-0132-ac2b-58d385a7b928",
    slug: "johannis-henrici-alstedii-encyclopaedia-septem-tomis-distincta",
  },
  {
    uuid: "4471f3a0-4be5-0131-008d-58d385a7b928",
    slug: "the-art-of-drawings-on-stone",
  },
  {
    uuid: "71399b40-973d-0131-b973-58d385a7bbd0",
    slug: "le-cuisinier-moderne",
  },
  {
    uuid: "19aa6be0-df9b-0131-db57-58d385a7bbd0",
    slug: "the-general-history-of-china",
  },
  {
    uuid: "5ae10330-382c-0131-ca58-58d385a7b928",
    slug: "the-house-in-good-taste",
  },
  {
    uuid: "ba4b55d0-09f3-0132-b7a6-58d385a7b928",
    slug: "the-paradise-of-childhood",
  },
  {
    uuid: "bc805b10-7246-0131-77a8-58d385a7bbd0",
    slug: "a-sparke-of-frendship-and-warme-goodwill-that-shewes-the-effect-of-true",
  },
  {
    uuid: "3effd3b0-dd15-0130-c112-58d385a7b928",
    slug: "les-trente-six-vues-de-la-tour-eiffel",
  },
  {
    uuid: "ef865a60-27b5-0132-1951-58d385a7bbd0",
    slug: "the-true-history-of-the-ghost-and-all-about-metempsychosis",
  },
  {
    uuid: "d5a8ff80-0080-0132-7baa-58d385a7bbd0",
    slug: "the-war-between-the-united-states-and-mexico-illustrated-2",
  },
  {
    uuid: "2ae851e0-5705-0132-55e2-58d385a7b928",
    slug: "photographs-by-leon-levinstein",
  },
  {
    uuid: "d7e27420-57e3-0132-617d-58d385a7bbd0",
    slug: "spanish-colonial-architecture-in-mexico",
  },
  {
    uuid: "c3d18e50-c60a-012f-ea7f-58d385a7bc34",
    slug: "bobby-kork-collection",
  },
  {
    uuid: "42b46dd0-5e15-0132-1789-58d385a7b928",
    slug: "frank-m-sutcliffes-photographs",
  },
  {
    uuid: "09b78480-516b-0132-6781-58d385a7b928",
    slug: "the-kodak-fiend",
  },
  {
    uuid: "4c94a0f0-5173-0132-23b9-58d385a7bbd0",
    slug: "carry-me-ohio",
  },
  {
    uuid: "36a1db70-53df-0132-cb4c-58d385a7b928",
    slug: "real-estate-agents-list-with-prices-and-photographs-of-buildings-mostly",
  },
  {
    uuid: "e0c17570-525f-0132-39a2-58d385a7bbd0",
    slug: "ser-un-hombre-chapin",
  },
  {
    uuid: "94e7b000-526d-0132-c16e-58d385a7bbd0",
    slug: "views-of-portland-oregon-for-the-oregon-art-project",
  },
  {
    uuid: "2620f480-c606-012f-11f8-58d385a7bc34",
    slug: "the-acropolis-of-athens",
  },
  {
    uuid: "e73fb7c0-612c-0132-88c6-58d385a7bbd0",
    slug: "camera-notes",
  },
  {
    uuid: "44088c20-6147-0132-d877-58d385a7bbd0",
    slug: "daguerreotype-portraits",
  },
  {
    uuid: "03fbc8c0-c607-012f-4e44-58d385a7bc34",
    slug: "camera-work",
  },
  {
    uuid: "4ac9b200-518a-0132-fe60-58d385a7b928",
    slug: "the-friendly-visitor",
  },
  {
    uuid: "99935740-c607-012f-dbcf-58d385a7bc34",
    slug: "new-york-genealogical-and-biographical-society-collection",
  },
  {
    uuid: "b24391d0-5951-0132-fff8-58d385a7bbd0",
    slug: "photoglyphic-engravings-and-other-photomechanical-prints-presented-to-william",
  },
  {
    uuid: "96826380-562a-0132-00a2-58d385a7b928",
    slug: "the-book-of-fair-women",
  },
  {
    uuid: "5421d680-5969-0132-baee-58d385a7bbd0",
    slug: "les-ruines-de-paris-1871",
  },
  {
    uuid: "14f3a730-5d54-0132-a8b1-58d385a7bbd0",
    slug: "the-ruins-of-mexico",
  },
  {
    uuid: "966d62b0-518f-0132-38ba-58d385a7b928",
    slug: "a-son-of-the-forest",
  },
  {
    uuid: "f5ad3520-c6c8-012f-2bed-3c075448cc4b",
    slug: "united-states-work-projects-administration-wpa-collection-of-prints",
  },
  {
    uuid: "49e0c0e0-c4cb-0131-487b-58d385a7b928",
    slug: "the-inner-life",
  },
  {
    uuid: "8e6ffc80-530d-0132-1d31-58d385a7b928",
    slug: "lectures-on-india",
  },
  {
    uuid: "dec97e60-50b0-0132-681e-58d385a7b928",
    slug: "magie-oder-die-zauberkrfte-der-natur-so-auf-den-nutzen-und-die-belustigung",
  },
  {
    uuid: "e7dee560-5ecd-0132-25a0-58d385a7bbd0",
    slug: "photographs-by-amy-arbus",
  },
  {
    uuid: "f5301480-9c31-0131-7b95-58d385a7bbd0",
    slug: "walter-silver-photographs",
  },
  {
    uuid: "eaa9d570-c6bf-012f-0446-58d385a7bc34",
    slug: "samuel-langhorne-clemens-collection-of-papers-1856-1938-bulk-1870-1938",
  },
  {
    uuid: "2f6a2a60-2188-0132-8610-58d385a7b928",
    slug: "david-gordon-video-archive",
  },
  {
    uuid: "cd41a230-c6df-012f-5bb7-58d385a7bc34",
    slug: "genji-monogatari-emaki",
  },
  {
    uuid: "6be55fd0-684b-0132-f76b-58d385a7b928",
    slug: "thomas-moran",
  },
  {
    uuid: "a82bcb20-c6cd-012f-8fa6-3c075448cc4b",
    slug: "shivery-family-papers-1865-1974",
  },
  {
    uuid: "b182a370-c6b8-012f-2bae-58d385a7bc34",
    slug: "history-and-progress-of-the-steam-engine",
  },
  {
    uuid: "ce07eb30-684e-0132-39f8-58d385a7b928",
    slug: "the-yellowstone-national-park-and-the-mountain-regions-of-portions-of-idaho",
  },
  {
    uuid: "3e4ce460-c608-012f-fc06-58d385a7bc34",
    slug: "aerial-views-of-new-york-city-1927-1939",
  },
  {
    uuid: "606f2610-c608-012f-2c5c-58d385a7bc34",
    slug: "koronatsonnyia-torzhestva",
  },
  {
    uuid: "3ef11880-646c-0132-7c5e-58d385a7bbd0",
    slug: "townsend-walsh-scrapbook-collection",
  },
  {
    uuid: "37323a40-51a5-0132-7ffb-58d385a7b928",
    slug: "circulation-date-place-events",
  },
  {
    uuid: "eb8184b0-69d1-0132-2c1d-58d385a7b928",
    slug: "claude-lorrain",
  },
  {
    uuid: "f9cee5a0-c606-012f-a9bf-58d385a7bc34",
    slug: "father-abrahams-speech-to-a-great-number-of-people-at-a-vendue-of-merchant-goods",
  },
  {
    uuid: "dc7f3a20-435b-0132-9f6c-58d385a7b928",
    slug: "simeon-a-stearns-papers",
  },
  {
    uuid: "896df5d0-6c5e-0132-25b7-58d385a7bbd0",
    slug: "arbre-genealogique-de-lharmonie",
  },
  {
    uuid: "2e1c2320-6f61-0132-7cea-58d385a7b928",
    slug: "bliss-family-papers",
  },
  {
    uuid: "77ce20b0-5c89-0132-89f5-58d385a7bbd0",
    slug: "broadsides-photographically-illustrated-with-pictures-of-wanted-criminals",
  },
  {
    uuid: "6486d5a0-c604-012f-68c6-58d385a7bc34",
    slug: "the-english-counties-delineated",
  },
  {
    uuid: "554fcd10-c6f6-012f-dd07-58d385a7bc34",
    slug: "harpers-weekly-a-journal-of-civilization",
  },
  {
    uuid: "fb4d83e0-c605-012f-51ff-58d385a7bc34",
    slug: "optice-sive-de-reflexionibus-refractionibus-inflexionibus-coloribus-lucis-libri",
  },
  {
    uuid: "40714d50-66a7-0132-9948-58d385a7bbd0",
    slug: "photographs-by-adam-bartos",
  },
  {
    uuid: "d7aea980-5eeb-0132-de33-58d385a7b928",
    slug: "photographs-by-stephen-dupont-from-fob-castle-khan-neshin-helmand-afghanistan",
  },
  {
    uuid: "6010cfd0-20db-0132-4503-58d385a7bbd0",
    slug: "troe",
  },
  {
    uuid: "35681c40-7271-0132-8fa7-58d385a7b928",
    slug: "der-reisende",
  },
  {
    uuid: "944be180-8a2f-0132-b510-58d385a7b928",
    slug: "milton-avery",
  },
  {
    uuid: "c45bac60-c608-012f-8de1-58d385a7bc34",
    slug: "the-play-pictorial",
  },
  {
    uuid: "ec3791e0-92bd-0132-354e-58d385a7bbd0",
    slug: "lyonel-feininger",
  },
  {
    uuid: "6233fa80-c608-012f-305b-58d385a7bc34",
    slug: "die-gesandschafft-ihro-kyserl-majest-von-gross-russland-an-den-sinesischen-kyser",
  },
  {
    uuid: "99ddd080-6dca-0132-cfd5-58d385a7b928",
    slug: "the-clothier-and-furnisher",
  },
  {
    uuid: "68dc8de0-78bd-0132-7a21-58d385a7bbd0",
    slug: "zodch",
  },
  {
    uuid: "c08e0d10-8e1d-0132-9045-58d385a7b928",
    slug: "jean-jacques-de-boissieu",
  },
  {
    uuid: "96e87d40-8e21-0132-fc58-58d385a7bbd0",
    slug: "livingston-hershey-bennett",
  },
  {
    uuid: "f8547250-8fa9-0132-6367-58d385a7bbd0",
    slug: "louis-lozowick",
  },
  {
    uuid: "0fad93f0-7cc0-0132-58d8-58d385a7bbd0",
    slug: "die-mode-in-der-karikatur",
  },
  {
    uuid: "7334faa0-af74-0130-1b57-58d385a7b928",
    slug: "randzeichnungen-zu-goethes-balladen-und-romanzen",
  },
  {
    uuid: "aa9332d0-8a24-0132-6303-58d385a7b928",
    slug: "outer-boroughs-new-york-beyond-manhattan",
  },
  {
    uuid: "b1accc90-9530-0132-233c-58d385a7b928",
    slug: "harry-sternberg",
  },
  {
    uuid: "57ab75c0-9386-0132-dd59-58d385a7bbd0",
    slug: "johann-heinrich-roos",
  },
  {
    uuid: "7cf18840-8ee9-0132-cc13-58d385a7b928",
    slug: "qvadrins-historiqves-de-la-bible",
  },
  {
    uuid: "7c8d4cc0-9db5-0132-73a2-58d385a7b928",
    slug: "blackwork-ornament-designs-for-gold-and-silversmiths",
  },
  {
    uuid: "2350a2b0-98ed-0132-aa4a-58d385a7b928",
    slug: "the-old-curiosity-shop",
  },
  {
    uuid: "a7926ac0-895f-0132-2ee6-58d385a7bbd0",
    slug: "ausstattung-vornehmer-wohnrume",
  },
  {
    uuid: "0450bba0-a00d-0132-4665-58d385a7b928",
    slug: "an-account-of-sir-isaac-newtons-philosophical-discoveries",
  },
  {
    uuid: "aa67fd80-8961-0132-0f21-58d385a7bbd0",
    slug: "der-bazar",
  },
  {
    uuid: "742333b0-5e28-0132-6468-58d385a7b928",
    slug: "bill-barvin-location-photograph-archive",
  },
  {
    uuid: "a24ba9c0-c607-012f-edf5-58d385a7bc34",
    slug: "government-counterfeit-detector-john-s-dye-editor",
  },
  {
    uuid: "1507fe00-c6ca-012f-dcff-58d385a7bc34",
    slug: "music-division-iconography-collection",
  },
  {
    uuid: "93599700-a588-0132-9cae-58d385a7bbd0",
    slug: "thophile-alexandre-steinlen",
  },
  {
    uuid: "a3de1730-a5a9-0132-20c4-58d385a7b928",
    slug: "rollin-kirby",
  },
  {
    uuid: "6311e280-95e1-0132-1a80-58d385a7bbd0",
    slug: "curiosities-of-natural-history",
  },
  {
    uuid: "885abfe0-a8ba-0132-8c59-58d385a7b928",
    slug: "drawings-prints-and-watercolors-by-edna-boies-hopkins",
  },
  {
    uuid: "2ea96660-c6cf-012f-6d52-58d385a7bc34",
    slug: "revoliutsionnoe-dvizhenie-v-kartinakh",
  },
  {
    uuid: "ff2a6380-abdd-0132-e541-58d385a7bbd0",
    slug: "albrecht-drer",
  },
  {
    uuid: "bbb5b5e0-313f-0132-eaea-58d385a7b928",
    slug: "the-american-photo-engraver",
  },
  {
    uuid: "5f9cb9e0-4739-0132-1946-58d385a7bbd0",
    slug: "auto-digest-register-and-trade-weekly",
  },
  {
    uuid: "6957ad10-0494-0132-7e41-58d385a7bbd0",
    slug: "emily-dickinson-2-als-to-benjamin-kimball",
  },
  {
    uuid: "00bb5980-952a-0132-c0c6-58d385a7bbd0",
    slug: "exploration-of-the-colorado-river-of-the-west-and-its-tributaries",
  },
  {
    uuid: "64ec5570-3144-0132-5bf5-58d385a7b928",
    slug: "the-bulletin",
  },
  {
    uuid: "8604f770-6ee1-0130-f554-58d385a7b928",
    slug: "ancona-world",
  },
  {
    uuid: "933bc950-c605-012f-5105-58d385a7bc34",
    slug: "plan-for-permanent-world-capitol-at-flushing-meadow-park",
  },
  {
    uuid: "1a958590-b173-0132-b1d5-58d385a7b928",
    slug: "rembrandt-van-rijn",
  },
  {
    uuid: "4a65ded0-99af-0132-f9f8-58d385a7bbd0",
    slug: "from-nowhere-to-the-north-pole",
  },
  {
    uuid: "60525000-ca18-0130-7221-58d385a7bbd0",
    slug: "national-research-project-on-reemployment-opportunities-and-recent-changes",
  },
  {
    uuid: "b2d0ebf0-9e96-0132-a85d-58d385a7b928",
    slug: "designs-for-richly-ornamented-dishes-with-medallions",
  },
  {
    uuid: "3ed90a70-b55d-0132-b90f-58d385a7b928",
    slug: "pierre-bonnard",
  },
  {
    uuid: "1f8647b0-9f55-0132-ec41-58d385a7bbd0",
    slug: "the-ladies-companion",
  },
  {
    uuid: "4845efd0-a0d0-0132-0c04-58d385a7bbd0",
    slug: "voyage-de-paris-dans-lamrique-du-sud",
  },
  {
    uuid: "e39c24d0-bacb-0132-b4db-58d385a7bbd0",
    slug: "istitvtioni-harmoniche-del-rev-messere-gioseffo-zarlino-di-nuono-in-molti",
  },
  {
    uuid: "e34bd710-bab9-0132-b136-58d385a7b928",
    slug: "the-doctrine-and-discipline-of-divorce",
  },
  {
    uuid: "0af0dd10-82bc-0130-244d-58d385a7b928",
    slug: "newsstands",
  },
  {
    uuid: "a0a69c90-82bd-0130-b31e-58d385a7b928",
    slug: "midtown-lower-manhattan-on-the-bowery",
  },
  {
    uuid: "9c0b1b70-829f-0130-ff78-58d385a7b928",
    slug: "the-harlem-new-york-series",
  },
  {
    uuid: "bec36830-829b-0130-370a-58d385a7bbd0",
    slug: "new-york-city",
  },
  {
    uuid: "fb980790-82b7-0130-09c6-58d385a7bbd0",
    slug: "portraits-of-people-living-with-aids",
  },
  {
    uuid: "2ea555a0-959a-0130-ac7d-58d385a7b928",
    slug: "new-york-subways",
  },
  {
    uuid: "b24a7930-958b-0130-ce5a-58d385a7bbd0",
    slug: "the-times-square-gym",
  },
  {
    uuid: "50b22da0-9594-0130-b9ab-58d385a7b928",
    slug: "after-just-photographs-ajp",
  },
  {
    uuid: "e629bfc0-c6cb-012f-92cd-3c075448cc4b",
    slug: "billy-rose-theatre-collection-iconography-file",
  },
  {
    uuid: "3168fa70-82b5-0130-8381-58d385a7bbd0",
    slug: "coney-island",
  },
  {
    uuid: "40426470-bebf-0132-ea6f-58d385a7b928",
    slug: "celebrity-art-co",
  },
  {
    uuid: "81202910-bf96-0132-c82f-58d385a7b928",
    slug: "jean-duvet",
  },
  {
    uuid: "7bed36b0-be9b-0132-3be6-58d385a7b928",
    slug: "paradise-lost",
  },
  {
    uuid: "5888dff0-c6e8-012f-37dd-58d385a7bc34",
    slug: "window-cards",
  },
  {
    uuid: "298cc4a0-ab0c-0132-8959-58d385a7bbd0",
    slug: "mccall-pattern-book",
  },
  {
    uuid: "7fbdd050-50d3-0132-6aef-58d385a7b928",
    slug: "early-years-collection",
  },
  {
    uuid: "120d5700-bc71-0132-ca35-58d385a7bbd0",
    slug: "bonfanti-maria-1847-1921-photographic-albums",
  },
  {
    uuid: "8ebfa2f0-a0f1-0132-6403-58d385a7b928",
    slug: "kaye-nora-1920-1987-photographic-scrapbook",
  },
  {
    uuid: "4bee21a0-c606-012f-0947-58d385a7bc34",
    slug: "pm",
  },
  {
    uuid: "b4392ec0-4023-0132-bb44-58d385a7bbd0",
    slug: "puerto-rican-slave-documents",
  },
  {
    uuid: "836c3800-ab18-0132-5924-58d385a7bbd0",
    slug: "ritratto-di-roma-moderna",
  },
  {
    uuid: "6ce49910-b923-0132-977d-58d385a7b928",
    slug: "the-orcharde-of-syon",
  },
  {
    uuid: "d446b300-ab05-0132-bbd9-58d385a7b928",
    slug: "vogue-pattern-book",
  },
  {
    uuid: "96103900-c6e9-012f-2c1b-3c075448cc4b",
    slug: "voyage-pittoresque-et-historique-de-listrie-et-dalmatie",
  },
  {
    uuid: "c59ab3a0-bc60-0132-4f78-58d385a7b928",
    slug: "the-cuba-review-and-bulletin",
  },
  {
    uuid: "94faf940-aeb7-0130-cd58-58d385a7b928",
    slug: "the-book-of-hours-of-the-emperor-maximilian-the-first",
  },
  {
    uuid: "2f25cdd0-1a7d-0132-1045-58d385a7bbd0",
    slug: "the-war-between-the-united-states-and-mexico-illustrated",
  },
  {
    uuid: "7cf43260-a5b8-0132-dcbb-58d385a7b928",
    slug: "george-chalmers-collection",
  },
  {
    uuid: "904c4ec0-c6db-012f-925b-58d385a7bc34",
    slug: "isadora-duncan-in-various-dance-poses",
  },
  {
    uuid: "832d14a0-c619-012f-ed1a-58d385a7bc34",
    slug: "nueva-cornica-y-buen-gobierno",
  },
  {
    uuid: "a0bd0cc0-c6f3-012f-8e59-58d385a7bc34",
    slug: "melville-j-and-frances-s-herskovits-photograph-collection",
  },
  {
    uuid: "1c046ad0-b669-0130-32bb-58d385a7bbd0",
    slug: "free-and-other-stories",
  },
  {
    uuid: "6bfa5670-c6b3-012f-11a8-58d385a7bc34",
    slug: "new-york-jazz-museum-photograph-collection",
  },
  {
    uuid: "18640050-badd-0132-172e-58d385a7b928",
    slug: "ellen",
  },
  {
    uuid: "7d0b7310-c602-012f-1b80-58d385a7bc34",
    slug: "spanish-sketches",
  },
  {
    uuid: "f9b36810-a8b6-0132-2675-58d385a7bbd0",
    slug: "creators-studios-fashion-illustrations",
  },
  {
    uuid: "f886ef20-c607-012f-8cb0-58d385a7bc34",
    slug: "la-mode-illustre",
  },
  {
    uuid: "53dc2f30-37ec-0130-e055-58d385a7bbd0",
    slug: "indian-sign-talk",
  },
  {
    uuid: "765ca9c0-c604-012f-d707-58d385a7bc34",
    slug: "solving-the-traffic-problem",
  },
  {
    uuid: "c57eb480-c607-012f-5c90-58d385a7bc34",
    slug: "portfolio-one-twelve-photographic-prints-by-ansel-adams",
  },
  {
    uuid: "d01d7f80-c607-012f-6a6a-58d385a7bc34",
    slug: "country-life",
  },
  {
    uuid: "cbdc8ad0-c605-012f-e93c-58d385a7bc34",
    slug: "the-pushcart-problem-in-new-york-city",
  },
  {
    uuid: "46c1f660-eaa5-0132-73c8-58d385a7bbd0",
    slug: "jerry-n-uelsmann",
  },
  {
    uuid: "948cf060-ea9f-0132-a3fe-58d385a7b928",
    slug: "twelve-photographs",
  },
  {
    uuid: "6f378f30-c6cd-012f-c54a-58d385a7bc34",
    slug: "william-s-burroughs-papers",
  },
  {
    uuid: "ecf40670-bf8a-0132-9aed-58d385a7b928",
    slug: "john-gadsby-chapman",
  },
  {
    uuid: "436f0bf0-cf39-0132-e8ee-58d385a7b928",
    slug: "opera-philosophica-et-mineralia",
  },
  {
    uuid: "f7ec0680-c605-012f-9f7e-58d385a7bc34",
    slug: "dictionnaire-de-physique",
  },
  {
    uuid: "9ccb18b0-7a74-0132-a7b1-58d385a7b928",
    slug: "james-madison-papers",
  },
  {
    uuid: "92b8aa40-9a91-0132-06d3-58d385a7b928",
    slug: "thomas-jefferson-papers",
  },
  {
    uuid: "5eee3870-c604-012f-6d92-58d385a7bc34",
    slug: "simeon-north-first-official-pistol-maker-of-the-united-states",
  },
  {
    uuid: "cc2a1390-c604-012f-c45e-58d385a7bc34",
    slug: "the-little-mischief-maker",
  },
  {
    uuid: "0866bf90-1d37-0130-cda4-58d385a7b928",
    slug: "home-and-flowers",
  },
  {
    uuid: "0a1998d0-c6ec-012f-d89e-58d385a7bc34",
    slug: "views-of-france",
  },
  {
    uuid: "b459fb90-c602-012f-050b-58d385a7bc34",
    slug: "alciphron-or-the-minute-philosopher",
  },
  {
    uuid: "c907eb10-c604-012f-ff28-58d385a7bc34",
    slug: "tres-relaciones-de-antigedades-peruanas",
  },
  {
    uuid: "54ef4850-c6d5-012f-a571-3c075448cc4b",
    slug: "housing",
  },
  {
    uuid: "f77e3cd0-c607-012f-821b-58d385a7bc34",
    slug: "salesology",
  },
  {
    uuid: "026347d0-964d-0130-f782-58d385a7bbd0",
    slug: "the-enormous-room",
  },
  {
    uuid: "27796bd0-c603-012f-a5bb-58d385a7bc34",
    slug: "apiaria-vnivers-philosophi-mathematic-in-qvibvs-paradoxa-et-noua-pleraque",
  },
  {
    uuid: "cedbb5c0-c604-012f-aa69-58d385a7bc34",
    slug: "geschichte-des-russischen-reiches-von-karamsin",
  },
  {
    uuid: "7fefcfd0-c603-012f-14ed-58d385a7bc34",
    slug: "iconologia-del-cavaliere-cesare-ripa-perugino",
  },
  {
    uuid: "33efc440-77b7-0130-bbf1-58d385a7bbd0",
    slug: "ku-klux-klan",
  },
  {
    uuid: "bef04ae0-c605-012f-0be4-58d385a7bc34",
    slug: "tom-treddlehoyles-peep-at-t-manchester-art-treasures-exhebishan-e-1857-an-uther",
  },
  {
    uuid: "111ce000-f2f6-0130-47ae-58d385a7b928",
    slug: "tracts-on-romanism",
  },
  {
    uuid: "ff6d4320-6e30-0130-28f3-58d385a7bbd0",
    slug: "expressions-des-plus-exquis-sentimens-de-nos-grisettes-recueillies-et-dessines",
  },
  {
    uuid: "095d0580-6ce8-0131-270e-58d385a7bbd0",
    slug: "a-brief-historical-sketch-of-the-life-and-sufferings-of-leonard-trask",
  },
  {
    uuid: "ed41e730-c616-012f-7746-58d385a7bc34",
    slug: "gm-folks",
  },
  {
    uuid: "f230a350-c603-012f-2945-58d385a7bc34",
    slug: "vestiges-of-the-natural-history-of-creation",
  },
  {
    uuid: "7ae3d3e0-5ec1-0131-327b-58d385a7b928",
    slug: "a-specimen-of-printing-types",
  },
  {
    uuid: "7f168330-c603-012f-5ea4-58d385a7bc34",
    slug: "bread-baking-industry",
  },
  {
    uuid: "f4346c70-c607-012f-0272-58d385a7bc34",
    slug: "historie-van-barbaryen-en-des-zelfs-zee-roovers",
  },
  {
    uuid: "618d3e70-8506-0130-874a-58d385a7b928",
    slug: "isaaci-newtoni-equitis-aurati-opuscula-mathematica-philosophica-et-philologica",
  },
  {
    uuid: "195462f0-8feb-0130-e172-58d385a7b928",
    slug: "paul-et-virginie",
  },
  {
    uuid: "9acfb240-850e-0130-4599-58d385a7b928",
    slug: "trait-des-fluxions",
  },
  {
    uuid: "76ab76b0-c603-012f-38ce-58d385a7bc34",
    slug: "captivity-of-the-oatman-girls-being-an-interesting-narrative-of-life-among",
  },
  {
    uuid: "e866ac50-64db-0130-6b50-58d385a7b928",
    slug: "english-line-writing",
  },
  {
    uuid: "86003f40-594a-0132-b4bd-58d385a7bbd0",
    slug: "street-life-in-london",
  },
  {
    uuid: "96a3f7b0-d01a-0132-bb27-58d385a7b928",
    slug: "boston-committee-of-correspondence-records",
  },
  {
    uuid: "4345b0f0-cb2b-0132-27cb-58d385a7b928",
    slug: "richard-henry-lee-letters",
  },
  {
    uuid: "8357e600-c604-012f-43b0-58d385a7bc34",
    slug: "a-reliable-account-of-the-coast-of-guinea-1760",
  },
  {
    uuid: "02fcc630-c606-012f-55d3-58d385a7bc34",
    slug: "bobby-shuttle-un-his-woife-sayrohs-visit-to-manchester-un-to-th-greight-hert",
  },
  {
    uuid: "b2b7e650-c602-012f-b075-58d385a7bc34",
    slug: "eine-nachricht-wegen-der-landschaft-pennsilvania-in-america",
  },
  {
    uuid: "263e0520-c604-012f-fdb0-58d385a7bc34",
    slug: "in-america",
  },
  {
    uuid: "8f589e80-ae8e-0130-3a75-58d385a7b928",
    slug: "la-relacion-que-dio-aluar-nuez-cabea-de-vaca-de-lo-acaescido-enlas-jndias-enla",
  },
  {
    uuid: "9276c2b0-c605-012f-eba9-58d385a7bc34",
    slug: "le-conservatoire-de-la-danse-moderne",
  },
  {
    uuid: "f96f5640-c605-012f-d575-58d385a7bc34",
    slug: "other-people",
  },
  {
    uuid: "8278ae70-c603-012f-d91f-58d385a7bc34",
    slug: "the-political-house-that-jack-built-with-thirteen-cuts",
  },
  {
    uuid: "fe2ce2d0-c604-012f-2cb3-58d385a7bc34",
    slug: "augusta-savage-photograph-collection",
  },
  {
    uuid: "7afd6830-9bae-0130-4c40-58d385a7bbd0",
    slug: "vancenza-or-the-dangers-of-credulity",
  },
  {
    uuid: "9e0968b0-c623-012f-7d87-58d385a7bc34",
    slug: "segregation-and-integration",
  },
  {
    uuid: "624b04e0-c605-012f-8b28-58d385a7bc34",
    slug: "birth-control-pioneer",
  },
  {
    uuid: "fd947f00-c605-012f-8dfb-58d385a7bc34",
    slug: "an-elegiac-poem-on-the-death-of-that-celebrated-divine-and-eminent-servant",
  },
  {
    uuid: "95d450f0-f5a5-0132-3fee-58d385a7b928",
    slug: "little-brother-little-sister-and-other-tales",
  },
  {
    uuid: "e1622510-caa2-0132-7b20-58d385a7b928",
    slug: "philip-mazzei-papers",
  },
  {
    uuid: "c7881780-0e00-0133-e7d6-58d385a7bbd0",
    slug: "anne-allen",
  },
  {
    uuid: "0ea6df40-0189-0133-911d-58d385a7b928",
    slug: "beauty-and-the-beast",
  },
  {
    uuid: "f35a0cf0-12d5-0133-809d-58d385a7b928",
    slug: "duyckinck-collection",
  },
  {
    uuid: "0f029390-0196-0133-8541-58d385a7bbd0",
    slug: "hansel-and-gretel-and-other-stories",
  },
  {
    uuid: "840d2f50-1471-0133-50f1-58d385a7b928",
    slug: "maria-cosway",
  },
  {
    uuid: "bb357ec0-5184-0132-6ec0-58d385a7b928",
    slug: "europe-2",
  },
  {
    uuid: "55486cc0-0042-0130-6d6f-58d385a7bc34",
    slug: "il-palazzo-ducale-di-venezia",
  },
  {
    uuid: "7cc2cbe0-c603-012f-b2a6-58d385a7bc34",
    slug: "mabel-mercer-photograph-collection",
  },
  {
    uuid: "f5f343a0-d4be-0132-abae-58d385a7b928",
    slug: "henry-knox-papers",
  },
  {
    uuid: "519a0540-c52f-012f-3e93-58d385a7bc34",
    slug: "dictionary-catalog-of-the-music-collection",
  },
  {
    uuid: "6524eff0-5324-0132-4248-58d385a7bbd0",
    slug: "youths-companion-photograph-competition-photographs",
  },
  {
    uuid: "a1272380-fb3d-0132-4a97-58d385a7b928",
    slug: "tres-ndices-expurgatorios-de-la-inquisicin-espaola-en-le-siglo-xvi",
  },
  {
    uuid: "7990e500-c602-012f-db71-58d385a7bc34",
    slug: "autumn-in-the-valley",
  },
  {
    uuid: "b45b4d80-c607-012f-b1d0-58d385a7bc34",
    slug: "church-building-quarterly",
  },
  {
    uuid: "c9a3e890-c606-012f-2d5a-58d385a7bc34",
    slug: "la-lumire-lectrique",
  },
  {
    uuid: "ed5beaa0-088e-0133-eb79-58d385a7b928",
    slug: "album-of-peruvian-sketches",
  },
  {
    uuid: "1355d900-3965-0133-ae88-00505686a51c",
    slug: "the-midtown-y-collection-of-photography",
  },
  {
    uuid: "7e202670-146a-0133-ed28-58d385a7b928",
    slug: "conditions-in-the-paint-creek-district-west-virginia",
  },
  {
    uuid: "2654b5e0-1832-0133-4ff3-58d385a7bbd0",
    slug: "jackson-architectural-iron-works",
  },
  {
    uuid: "312f9770-1925-0133-51e1-58d385a7b928",
    slug: "the-races-of-man",
  },
  {
    uuid: "30920be0-e6dc-0132-ee49-58d385a7b928",
    slug: "joseph-hawley-papers",
  },
  {
    uuid: "5761fe50-3a11-0133-341c-00505686d14e",
    slug: "elaine-lustig-cohen-dada-collection",
  },
  {
    uuid: "ab5b5760-ecf4-0132-cd8c-58d385a7b928",
    slug: "emigrant-savings-bank-records-microfilm",
  },
  {
    uuid: "5a7dbfe0-21a8-0133-e0f0-58d385a7bbd0",
    slug: "sequent",
  },
  {
    uuid: "1cbb3000-21c4-0133-92ca-58d385a7b928",
    slug: "sarah-sze",
  },
  {
    uuid: "7adf8810-21b1-0133-7cc3-58d385a7bbd0",
    slug: "untitled-chair-series",
  },
  {
    uuid: "52bebad0-21b7-0133-23db-58d385a7b928",
    slug: "the-means-to-an-end",
  },
  {
    uuid: "2d3ef010-2752-0133-0475-58d385a7bbd0",
    slug: "absint",
  },
  {
    uuid: "d31b5ea0-2753-0133-84fb-58d385a7bbd0",
    slug: "clotho-tropos-lach",
  },
  {
    uuid: "bea5a7e0-c607-012f-3339-58d385a7bc34",
    slug: "playthings",
  },
  {
    uuid: "3b17c850-21bd-0133-4a83-58d385a7b928",
    slug: "diane-victor",
  },
  {
    uuid: "86e8f0f0-21cd-0133-c46a-58d385a7b928",
    slug: "valerie-hammond",
  },
  {
    uuid: "6ab5ce00-21cc-0133-a537-58d385a7b928",
    slug: "daughter-of-the-east",
  },
  {
    uuid: "db9bced0-21c7-0133-bcb9-58d385a7b928",
    slug: "six-by-four",
  },
  {
    uuid: "13d90ed0-e2c6-0132-ff9f-58d385a7b928",
    slug: "alexander-hamilton-papers",
  },
  {
    uuid: "c480ee40-d4be-0132-8339-58d385a7b928",
    slug: "silas-deane-letters",
  },
  {
    uuid: "d11c8480-c6cd-012f-f4fc-58d385a7bc34",
    slug: "claudia-jones-memorial-photograph-collection",
  },
  {
    uuid: "af090f70-c616-012f-766f-58d385a7bc34",
    slug: "california-gardens",
  },
  {
    uuid: "ad2f9260-c602-012f-f9ad-58d385a7bc34",
    slug: "bronx-municipal-terminal-market-constructed-and-operated-by-the-department",
  },
  {
    uuid: "80e51000-c607-012f-288f-58d385a7bc34",
    slug: "interior-design",
  },
  {
    uuid: "6f644de0-2d8b-0133-41a3-58d385a7b928",
    slug: "local-planning-and-zoning-a-manual-of-powers-and-procedures-for-citizens",
  },
  {
    uuid: "069e1f10-c606-012f-32a3-58d385a7bc34",
    slug: "the-opal",
  },
  {
    uuid: "250ac9c0-3228-0133-d574-58d385a7b928",
    slug: "five-sketchbooks",
  },
  {
    uuid: "7918d1c0-f5ad-0132-694e-58d385a7b928",
    slug: "noah-webster-papers",
  },
  {
    uuid: "1f2302d0-c617-012f-24df-58d385a7bc34",
    slug: "scientific-american-architects-and-building-edition",
  },
  {
    uuid: "adaf3fc0-9887-0130-20d0-58d385a7bbd0",
    slug: "architecture-2",
  },
  {
    uuid: "eb55cd90-3aeb-0133-f98a-00505686a51c",
    slug: "histoire-de-lart-par-les-monumens",
  },
  {
    uuid: "de598100-c617-012f-7c77-58d385a7bc34",
    slug: "burnside-collection-of-american-theater-music-manuscripts",
  },
  {
    uuid: "35bc6ef0-50c1-0133-61be-00505686d14e",
    slug: "lady-gregory-collection-of-papers",
  },
  {
    uuid: "b7e4ec30-0def-0133-ecef-58d385a7bbd0",
    slug: "vida-de-la-venerable-negra-la-madre-sor-theresa-juliana-de-santo-domingo",
  },
  {
    uuid: "be54d6f0-c6dc-012f-00c4-58d385a7bc34",
    slug: "qurn-fragment",
  },
  {
    uuid: "2b332a20-e136-0132-f347-58d385a7bbd0",
    slug: "german-old-master-prints",
  },
  {
    uuid: "41ce2730-c607-012f-4993-58d385a7bc34",
    slug: "modnoe-ezhemiesiachnoe-izdanie-ili-biblioteka-dlia-damskago-tualeta",
  },
  {
    uuid: "2f2aac20-c603-012f-b32a-58d385a7bc34",
    slug: "primiechania-na-istoriu-drevnia-i-nynieshnia-rossi-g-leklerka",
  },
  {
    uuid: "8a67dd90-c604-012f-ce3c-58d385a7bc34",
    slug: "puteshestve-na-vostok-ego-imperatorskago-vysochestva-gosudaria-nasliednika",
  },
  {
    uuid: "f4ef8d00-c605-012f-193d-58d385a7bc34",
    slug: "rossskago-kuptsa-grigoria-shelekhova-stranstvovane-v-1783-godu-iz-okhotska-po",
  },
  {
    uuid: "840569e0-c605-012f-ab64-58d385a7bc34",
    slug: "rossskoe-posolstvo-v-konstantinopol-1776-goda",
  },
  {
    uuid: "39a34480-c6bb-012f-6c15-58d385a7bc34",
    slug: "roger-pryor-dodge-collection",
  },
  {
    uuid: "fb9218a0-c616-012f-000e-58d385a7bc34",
    slug: "the-architect",
  },
  {
    uuid: "06696d00-c605-012f-0306-58d385a7bc34",
    slug: "twenty-five-years-of-girl-scouting-1912-1937",
  },
  {
    uuid: "6f9b41d0-c603-012f-99ff-58d385a7bc34",
    slug: "journal-of-a-residence-in-the-burmham-empire",
  },
  {
    uuid: "a7adf170-c606-012f-0e84-58d385a7bc34",
    slug: "opportunity-2",
  },
  {
    uuid: "e7120a80-dac5-0131-52be-58d385a7b928",
    slug: "bradstreets-book-of-commercial-ratings-of-bankers-merchants-manufacturers-etc",
  },
  {
    uuid: "6c64dfa0-d2e0-0130-a94f-58d385a7bbd0",
    slug: "marya-freund-papers-relating-to-arnold-schoenberg",
  },
  {
    uuid: "3e0acbb0-c6f7-012f-80fc-58d385a7bc34",
    slug: "albert-sterner-prints-and-drawings",
  },
  {
    uuid: "95d49c80-c6f5-012f-4483-3c075448cc4b",
    slug: "japan-to-day",
  },
  {
    uuid: "93256740-0042-0130-7847-58d385a7bc34",
    slug: "new-yorker-staats-zeitung-und-herold",
  },
  {
    uuid: "a1e13a80-6629-0133-0f7b-00505686a51c",
    slug: "agnes-de-mille-photographic-scrapbooks-2",
  },
  {
    uuid: "26016a50-c6c8-012f-d002-58d385a7bc34",
    slug: "the-hispanic-american-historical-review",
  },
  {
    uuid: "a3e1e960-33d7-0133-8ff6-00505686a51c",
    slug: "the-cabinet-gallery-of-pictures-by-the-first-masters-of-the-english-and-foreign",
  },
  {
    uuid: "65a60fc0-c6f6-012f-f17c-58d385a7bc34",
    slug: "tokaido-gojusan-tsugi-no-uchi",
  },
  {
    uuid: "e3fb0d20-c607-012f-3a5c-58d385a7bc34",
    slug: "the-journal-of-egyptian-archaeology",
  },
  {
    uuid: "78884cc0-c606-012f-e585-58d385a7bc34",
    slug: "artes-y-letras",
  },
  {
    uuid: "3d8f81e0-c60a-012f-c863-58d385a7bc34",
    slug: "pliuvium",
  },
  {
    uuid: "f2e3ee30-c607-012f-1e78-58d385a7bc34",
    slug: "commentarii-academiae-scientiarum-imperialis-petropolitanae",
  },
  {
    uuid: "bd2acaf0-c605-012f-587e-58d385a7bc34",
    slug: "drevniaia-rossiskaia-istoriia-ot-nachala-rossiskago-naroda-do-konchiny-velikago",
  },
  {
    uuid: "bc6b6a40-c605-012f-ebec-58d385a7bc34",
    slug: "opisane-sibirskago-tsarstva-i-vsiekh-proizshedshikh-v-nem-diel",
  },
  {
    uuid: "cdf7cf30-c604-012f-86e5-58d385a7bc34",
    slug: "opyt-istoricheskago-slovaria-o-rossskikh-pisateliakh",
  },
  {
    uuid: "ff1e8ed0-c603-012f-b567-58d385a7bc34",
    slug: "the-chouteau-family",
  },
  {
    uuid: "4be4bf70-c605-012f-d5f9-58d385a7bc34",
    slug: "viaje-y-descripcin-de-las-indias-1539-1553",
  },
  {
    uuid: "8e3dbf60-087a-0133-a43e-58d385a7bbd0",
    slug: "middlemarch",
  },
  {
    uuid: "b24b8f40-116a-0130-ebe4-58d385a7bbd0",
    slug: "the-beat-generation-cook-book",
  },
  {
    uuid: "80e926d0-c603-012f-3f60-58d385a7bc34",
    slug: "madam-cj-walker-collection",
  },
  {
    uuid: "8e0e4fd0-2e58-0133-2fde-58d385a7b928",
    slug: "theodorus-bailey-myers-collection",
  },
  {
    uuid: "6f88b3d0-4829-0133-3fb5-00505686d14e",
    slug: "jacques-offenbach-und-das-paris-seiner-zeit",
  },
  {
    uuid: "4fcf5cb0-c604-012f-d4bc-58d385a7bc34",
    slug: "photographs-by-harry-callahan",
  },
  {
    uuid: "5c28a180-c604-012f-bab2-58d385a7bc34",
    slug: "the-atlanta-university-bulletin",
  },
  {
    uuid: "d38a3a70-4ff4-0133-80d5-00505686d14e",
    slug: "the-greenes-of-rhode-island",
  },
  {
    uuid: "3a2e2690-53f5-0132-8719-58d385a7bbd0",
    slug: "the-architecture-of-ancient-delhi",
  },
  {
    uuid: "7064c550-c602-012f-79a9-58d385a7bc34",
    slug: "woyzeck",
  },
  {
    uuid: "9e036b80-c608-012f-02f0-58d385a7bc34",
    slug: "kreuzigung",
  },
  {
    uuid: "90d41660-53a5-0130-2430-58d385a7b928",
    slug: "opportunity",
  },
  {
    uuid: "6a37c060-c616-012f-dbb0-58d385a7bc34",
    slug: "progressive-architecture",
  },
  {
    uuid: "cec755d0-c604-012f-301c-58d385a7bc34",
    slug: "self-portraits-by-blythe-bohnen",
  },
  {
    uuid: "f4854310-b1da-0130-aec1-58d385a7b928",
    slug: "the-penny-magazine-of-the-society-for-the-diffusion-of-useful-knowledge",
  },
  {
    uuid: "8dea0620-3932-0133-c2f5-00505686d14e",
    slug: "lloyd-acker-collection-views-of-new-york-city-buildings-1935-75",
  },
  {
    uuid: "26f35e80-476a-0132-137f-58d385a7b928",
    slug: "photographs-of-the-department-of-the-interior-us-geological-survey",
  },
  {
    uuid: "2e75c7c0-53ee-0132-2ce7-58d385a7b928",
    slug: "gypsies",
  },
  {
    uuid: "08971380-c96b-0131-3f65-58d385a7bbd0",
    slug: "leloge-de-la-folie",
  },
  {
    uuid: "38c5b820-4ff9-0133-0102-00505686a51c",
    slug: "genealogy-of-the-willcomb-family-of-new-england-1665-1902",
  },
  {
    uuid: "3e45c340-c607-012f-f681-58d385a7bc34",
    slug: "the-bellman",
  },
  {
    uuid: "3cf62030-c607-012f-0309-58d385a7bc34",
    slug: "the-new-pictorial-and-illustrated-family-magazine",
  },
  {
    uuid: "94e17280-c621-012f-738f-58d385a7bc34",
    slug: "afro-cubans-in-ybor-city",
  },
  {
    uuid: "6c33ffd0-c60a-012f-e2d6-58d385a7bc34",
    slug: "our-mutual-friend-2",
  },
  {
    uuid: "4d627ab0-c607-012f-b9e2-58d385a7bc34",
    slug: "railway-age",
  },
  {
    uuid: "326a1760-c603-012f-31e8-58d385a7bc34",
    slug: "the-worlds-advance-thought",
  },
  {
    uuid: "b91e1b20-c607-012f-9e4a-58d385a7bc34",
    slug: "the-dance-magazine",
  },
  {
    uuid: "f6933360-c607-012f-cab8-58d385a7bc34",
    slug: "the-pure-oil-news",
  },
  {
    uuid: "ca41a5e0-c602-012f-2b3c-58d385a7bc34",
    slug: "the-ports-harbours-watering-places-and-coast-scenery-of-great-britain-views",
  },
  {
    uuid: "524b9f60-ac30-0130-eae9-58d385a7bbd0",
    slug: "illustrations-for-works-by-washington-irving",
  },
  {
    uuid: "e10916a0-c606-012f-5b82-58d385a7bc34",
    slug: "the-dial",
  },
  {
    uuid: "b31da4b0-1e0c-0133-9f2b-58d385a7b928",
    slug: "hugh-gaine-papers",
  },
  {
    uuid: "aee37670-5ca3-0132-abd8-58d385a7bbd0",
    slug: "rules-of-the-photographic-society-club",
  },
  {
    uuid: "23640e10-c604-012f-c8af-58d385a7bc34",
    slug: "dance-observer",
  },
  {
    uuid: "6dc8b1a0-c6b6-012f-2398-58d385a7bc34",
    slug: "harry-a-williamson-photograph-collection",
  },
  {
    uuid: "a54fb290-eaca-0132-abca-58d385a7bbd0",
    slug: "sanko-gyojitsu",
  },
  {
    uuid: "7cb1f210-c609-012f-3f30-58d385a7bc34",
    slug: "american-negro-monographs-historical-and-educational-papers-v-1-nos-1-4-april",
  },
  {
    uuid: "c38a3f80-c607-012f-7abb-58d385a7bc34",
    slug: "art-front",
  },
  {
    uuid: "f934ca30-7459-0133-3c1f-00505686a51c",
    slug: "the-journals-of-captain-james-cook-on-his-voyages-of-discovery",
  },
  {
    uuid: "7e07faa0-7456-0133-73e4-00505686a51c",
    slug: "missions-in-western-polynesia",
  },
  {
    uuid: "ade85e70-5fb0-0133-d152-00505686a51c",
    slug: "el-devoto-de-la-santissima-trinidad",
  },
  {
    uuid: "f4059280-d2e7-0131-a33e-58d385a7bbd0",
    slug: "garnett-david-letters-to-mina-stein-kirstein-curtiss",
  },
  {
    uuid: "779969b0-660f-0133-a0da-00505686d14e",
    slug: "lumen-picturae-et-delineationis-divisum-in-sex-partes",
  },
  {
    uuid: "da7b8f10-c607-012f-9705-58d385a7bc34",
    slug: "sponsor",
  },
  {
    uuid: "4337f510-c5f7-012f-3480-58d385a7bc34",
    slug: "george-gissing-collection-of-papers",
  },
  {
    uuid: "077f4a90-a104-0133-6d70-00505686d14e",
    slug: "original-compositions-and-extracts-in-prose-and-verse",
  },
  {
    uuid: "f2007870-c623-012f-d4bc-58d385a7bc34",
    slug: "photographs-diagrams-and-documents-relating-to-the-new-york-port-of-embarkation",
  },
  {
    uuid: "fb8a5490-e343-0130-b569-58d385a7bbd0",
    slug: "the-pacific-miner",
  },
  {
    uuid: "be3f33f0-c604-012f-2fb9-58d385a7bc34",
    slug: "the-censored-review",
  },
  {
    uuid: "6e591e10-0042-0130-bc6d-58d385a7bc34",
    slug: "willard-gibbs",
  },
  {
    uuid: "f11ec710-b1d2-0130-1fc6-58d385a7bbd0",
    slug: "oliver-twist-or-the-parish-boys-progress-2",
  },
  {
    uuid: "f836d690-7cbd-0133-8030-00505686a51c",
    slug: "a-arte-musical",
  },
  {
    uuid: "30a0e6a0-995d-0130-e8ed-58d385a7bbd0",
    slug: "portefeuille-des-arts-dcoratifs",
  },
  {
    uuid: "a24375e0-7cbe-0133-ef13-00505686a51c",
    slug: "music-front",
  },
  {
    uuid: "84bb3470-ab38-0133-4091-00505686a51c",
    slug: "jean-honor-fragonard",
  },
  {
    uuid: "d9fcddc0-c627-012f-538f-58d385a7bc34",
    slug: "eugene-gladstone-oneill-papers",
  },
  {
    uuid: "1d87d2b0-7cbf-0133-421c-00505686a51c",
    slug: "jewish-music-journal",
  },
  {
    uuid: "252f39d0-9604-0133-0f50-00505686a51c",
    slug: "going-to-the-centennial",
  },
  {
    uuid: "14a1ef60-9606-0133-8db3-00505686a51c",
    slug: "international-exhibition",
  },
  {
    uuid: "2d4477f0-9601-0133-be4e-00505686a51c",
    slug: "josiah-allens-wife-as-a-pa-and-pi",
  },
  {
    uuid: "77ab8a50-c620-012f-b3de-58d385a7bc34",
    slug: "monumental-news-devoted-to-monumental-and-kindred-interests",
  },
  {
    uuid: "023b3950-8bcc-0133-1add-00505686d14e",
    slug: "photographs-of-russian-dancers",
  },
  {
    uuid: "b2042890-8721-0133-50d9-00505686a51c",
    slug: "queensborough",
  },
  {
    uuid: "22e23240-c607-012f-7827-58d385a7bc34",
    slug: "the-american-magazine",
  },
  {
    uuid: "16b79460-9613-0133-b346-00505686d14e",
    slug: "the-rights-and-duties-of-masters",
  },
  {
    uuid: "b7366f20-c603-012f-2a24-58d385a7bc34",
    slug: "the-raven-and-other-poems",
  },
  {
    uuid: "b65a94c0-c624-012f-4c73-58d385a7bc34",
    slug: "metropolitan-magazine",
  },
  {
    uuid: "0bcd6ce0-b0aa-0133-4d4a-00505686a51c",
    slug: "ellabelle-davis-photograph-collection",
  },
  {
    uuid: "4fd6f7a0-e13d-0132-4561-58d385a7bbd0",
    slug: "italian-old-master-prints",
  },
  {
    uuid: "0f266a60-9d32-0133-24eb-00505686a51c",
    slug: "the-natural-history-of-the-sperm-whale",
  },
  {
    uuid: "456aa260-a2a4-0133-1a19-00505686d14e",
    slug: "gourmet",
  },
  {
    uuid: "bdee4e00-960f-0133-2570-00505686d14e",
    slug: "motor-west",
  },
  {
    uuid: "ea0a9600-a6a2-0133-a726-00505686a51c",
    slug: "report-on-the-tanzim-department",
  },
  {
    uuid: "b398a420-9d36-0133-5258-00505686a51c",
    slug: "the-almanack-of-the-month",
  },
  {
    uuid: "59a347a0-793e-0130-4457-58d385a7bbd0",
    slug: "the-doome-warning-all-men-to-the-iudgemente",
  },
  {
    uuid: "6afabec0-5dca-0130-20c1-58d385a7b928",
    slug: "record-of-the-expedition-to-abyssinia",
  },
  {
    uuid: "4214e850-c61e-012f-abea-58d385a7bc34",
    slug: "illustrations-des-opras-comiques-et-comdies-du-xviiime-sicle",
  },
  {
    uuid: "3d1bb5b0-fca1-0132-791d-58d385a7b928",
    slug: "duyckinck-family-papers",
  },
  {
    uuid: "027854e0-c598-012f-7d10-58d385a7bc34",
    slug: "music-division-set-and-costume-design-collection",
  },
  {
    uuid: "27743130-9c5e-0133-5e8f-00505686d14e",
    slug: "the-canadian-journal-of-music",
  },
  {
    uuid: "5a47e550-b304-0133-7ad9-00505686d14e",
    slug: "brainards-musical-world",
  },
  {
    uuid: "cda9a620-a1d1-0133-ea16-00505686a51c",
    slug: "the-keynote",
  },
  {
    uuid: "817e93a0-9c63-0133-97f4-00505686d14e",
    slug: "la-cronaca-musicale",
  },
  {
    uuid: "a6a18c40-b1a7-0133-0c68-00505686a51c",
    slug: "the-scottish-musical-magazine",
  },
  {
    uuid: "56cc8ef0-b1a3-0133-1c2c-00505686a51c",
    slug: "the-convention-manual-of-procedure-forms-and-rules-for-the-regulation",
  },
  {
    uuid: "267964e0-bd3e-0133-e926-00505686d14e",
    slug: "death-begins-at-40",
  },
  {
    uuid: "80ba4d10-c609-012f-3f0b-58d385a7bc34",
    slug: "magazine-of-art",
  },
  {
    uuid: "f70526f0-016c-0133-a9ff-58d385a7b928",
    slug: "george-gibbs-collection-of-oliver-wolcott-correspondence",
  },
  {
    uuid: "f0ab0fe0-a363-0133-1176-00505686d14e",
    slug: "the-gift-and-art-buyer",
  },
  {
    uuid: "caaf9340-c606-012f-be98-58d385a7bc34",
    slug: "the-little-review",
  },
  {
    uuid: "55dafc90-c607-012f-f35c-58d385a7bc34",
    slug: "daily-news",
  },
  {
    uuid: "03b8ca50-c606-012f-ec35-58d385a7bc34",
    slug: "voyage-pittoresque-dans-les-deux-ameriques-rsum-gnral-de-tous-les-voyages",
  },
  {
    uuid: "f615e780-cf6e-0133-dacd-00505686a51c",
    slug: "general-audio-collection",
  },
  {
    uuid: "a73c2e40-55a2-0133-a6e8-00505686d14e",
    slug: "writers-program-new-york-city-negroes-of-new-york-collection",
  },
  {
    uuid: "7f6509a0-c60b-012f-3e7b-58d385a7bc34",
    slug: "william-pickens-photograph-collection",
  },
  {
    uuid: "35fc2440-627f-0130-48e1-58d385a7b928",
    slug: "songs-of-innocence",
  },
  {
    uuid: "085ca030-c617-012f-b193-58d385a7bc34",
    slug: "engravings-after-amelia-currans-portrait-of-percy-bysshe-shelley",
  },
  {
    uuid: "fa927670-bd6f-0133-04c2-00505686d14e",
    slug: "gilbert-livingston-papers",
  },
  {
    uuid: "4f563490-fd8d-0132-125a-58d385a7b928",
    slug: "madam-modjeska-scrapbooks",
  },
  {
    uuid: "4d1d04e0-c6c9-012f-e391-3c075448cc4b",
    slug: "plan-of-the-cities-of-london-and-westminster",
  },
  {
    uuid: "45bd0700-bd4f-0133-4028-00505686a51c",
    slug: "the-new-york-ledger",
  },
  {
    uuid: "54e9cab0-c6ce-012f-957e-58d385a7bc34",
    slug: "works-on-paper-collection",
  },
  {
    uuid: "dabcb880-c603-012f-6f35-58d385a7bc34",
    slug: "collection-of-engravings-after-richard-cosway",
  },
  {
    uuid: "7a614410-a13d-0130-5f59-58d385a7b928",
    slug: "osservazioni-di-gio-battista-piranesi-sopra-la-lettre-de-m-mariette-aux-auteurs",
  },
  {
    uuid: "cfb02790-c604-012f-3743-58d385a7bc34",
    slug: "tableaux-du-temple-des-muses-tirez-du-cabinet-de-feu-mr-faverau-conseiller",
  },
  {
    uuid: "605e8770-b96a-0133-8021-00505686a51c",
    slug: "the-new-york-red-book",
  },
  {
    uuid: "24de1630-d40c-0133-090d-00505686a51c",
    slug: "the-united-service",
  },
  {
    uuid: "1837b570-c605-012f-2625-58d385a7bc34",
    slug: "the-newtonian-system-of-philosophy",
  },
  {
    uuid: "a7214990-96b9-0133-86c9-00505686d14e",
    slug: "musical-magazine-review-and-register",
  },
  {
    uuid: "96077ec0-0833-0131-ab66-58d385a7b928",
    slug: "dean-dixon-photograph-collection",
  },
  {
    uuid: "fe930c60-f2ce-0133-fa1d-00505686a51c",
    slug: "george-bancroft-collection",
  },
  {
    uuid: "35594610-ef58-0131-4347-58d385a7bbd0",
    slug: "national-dance-institute-video-archive",
  },
  {
    uuid: "1d4ada60-60a6-0133-6353-00505686d14e",
    slug: "tag-foundation-video-archive",
  },
  {
    uuid: "cb32b4f0-9c3c-0133-3450-00505686a51c",
    slug: "dance-in-america-video-archive",
  },
  {
    uuid: "d94782f0-81bd-0133-824d-00505686d14e",
    slug: "high-school-of-performing-arts-video-archive",
  },
  {
    uuid: "693002a0-e090-0132-a44f-58d385a7bbd0",
    slug: "rudolf-nureyev-video-archive",
  },
  {
    uuid: "2849eb10-5fca-0133-6b2b-00505686a51c",
    slug: "don-redlich-video-archive",
  },
  {
    uuid: "66119fe0-e9fe-0133-1eb9-00505686a51c",
    slug: "the-villager",
  },
  {
    uuid: "8e52d7f0-5ee4-0133-0a0b-00505686d14e",
    slug: "george-avakian-and-anahid-ajemian-papers",
  },
  {
    uuid: "0ab4da30-c6e0-012f-1667-58d385a7bc34",
    slug: "ancestral-charts-families-beekman-bennett-brock-cole-mcspadden-steinhauer-etc",
  },
  {
    uuid: "077211a0-9843-0133-39b7-00505686d14e",
    slug: "society-of-tammany-or-columbian-order-records",
  },
  {
    uuid: "714c87c0-d4f6-0133-7cb9-00505686d14e",
    slug: "alexander-anderson-papers",
  },
  {
    uuid: "b3594840-f515-0133-bc77-00505686d14e",
    slug: "angna-enters-papers",
  },
  {
    uuid: "e78b2d50-d33d-0133-226b-00505686a51c",
    slug: "john-bernd-video-archive",
  },
  {
    uuid: "0a0035e0-3c46-0132-a742-58d385a7b928",
    slug: "hippodrome-visual-materials-1905-1919",
  },
  {
    uuid: "d6e833a0-d4eb-0133-cef1-00505686d14e",
    slug: "george-washington-papers",
  },
  {
    uuid: "f0048ea0-d758-0133-4a9b-00505686d14e",
    slug: "gerry-townsend-papers",
  },
  {
    uuid: "05582360-10b4-0134-aabc-00505686d14e",
    slug: "oscar-wilde-collection-of-papers",
  },
  {
    uuid: "d50bd130-c604-012f-f772-58d385a7bc34",
    slug: "lake-como-to-stelvio-pass-1895-alps",
  },
  {
    uuid: "7b25ca60-9d2e-0133-44f8-00505686a51c",
    slug: "sidney-lapidus-slavery-and-abolition-collection",
  },
  {
    uuid: "7f1bc6a0-211f-0134-f303-00505686a51c",
    slug: "denishawn-video-archive",
  },
  {
    uuid: "40790c10-21e4-0134-f94a-00505686d14e",
    slug: "samuel-taylor-coleridge-collection-of-papers",
  },
  {
    uuid: "ebef8ed0-1842-0133-5142-58d385a7bbd0",
    slug: "john-gisborne-manuscript-material",
  },
  {
    uuid: "32c65ed0-f039-0133-66f7-00505686d14e",
    slug: "pierre-f-simon-collection-of-artists-letters",
  },
  {
    uuid: "bc5b34f0-c6b4-012f-927f-3c075448cc4b",
    slug: "american-anthropologist",
  },
  {
    uuid: "d8db28d0-0e5b-0134-e322-00505686a51c",
    slug: "jan-georg-van-vliet",
  },
  {
    uuid: "725d3240-dca9-0133-7641-00505686d14e",
    slug: "isaiah-sheffer-papers",
  },
  {
    uuid: "1a0528c0-0d47-0133-a1f0-58d385a7b928",
    slug: "morris-huberland",
  },
  {
    uuid: "2f0baa50-c626-012f-c85f-58d385a7bc34",
    slug: "frank-thompson-photograph-albums",
  },
  {
    uuid: "b84f5080-c6db-012f-4fc6-58d385a7bc34",
    slug: "leslies",
  },
  {
    uuid: "ece291e0-149f-0134-487d-00505686a51c",
    slug: "the-ballad-of-reading-gaol",
  },
  {
    uuid: "cd0fd890-b0de-0133-ad22-00505686d14e",
    slug: "century-company-records",
  },
  {
    uuid: "f611c130-b3f1-0133-7eb4-00505686d14e",
    slug: "new-york-city-ballet-video-archive",
  },
  {
    uuid: "df2a4d50-c604-012f-0caf-58d385a7bc34",
    slug: "reliques-of-my-contemporaries",
  },
  {
    uuid: "6036e800-e238-0133-e118-00505686d14e",
    slug: "robert-morris-papers",
  },
  {
    uuid: "56b4b2c0-c624-012f-09de-58d385a7bc34",
    slug: "upholstering-a-magazine-for-the-factory-and-the-workroom",
  },
  {
    uuid: "9d93e640-dfdc-0133-8d61-00505686d14e",
    slug: "arnold-auerbach-papers",
  },
  {
    uuid: "c43d36e0-c6cb-012f-f7fe-58d385a7bc34",
    slug: "nezumi-no-soshi-emaki",
  },
  {
    uuid: "1e6fa2f0-ea2a-0133-7aad-00505686d14e",
    slug: "liebmann-collection-of-american-historical-documents-relating-to-spiritous",
  },
  {
    uuid: "cc1f4c10-3a58-0134-7d4d-00505686d14e",
    slug: "jacob-riis-papers",
  },
  {
    uuid: "eb0a1b80-ea35-0133-053b-00505686d14e",
    slug: "livingston-family-papers",
  },
  {
    uuid: "92e8f710-c604-012f-69c8-58d385a7bc34",
    slug: "philosophi-naturalis-principia-mathematica-2-3",
  },
  {
    uuid: "6e744f70-c606-012f-7442-58d385a7bc34",
    slug: "the-pullman-news",
  },
  {
    uuid: "8d9a33d0-c622-012f-355b-58d385a7bc34",
    slug: "the-african-repository",
  },
  {
    uuid: "19167ac0-2c27-0134-0940-00505686d14e",
    slug: "e-y-yip-harburg-papers",
  },
  {
    uuid: "d09099a0-c604-012f-a3ea-58d385a7bc34",
    slug: "the-most-excellent-and-lamentable-tragedie-of-romeo-and-juliet-as-it-hath-been",
  },
  {
    uuid: "cadcaed0-a540-0130-e661-58d385a7bbd0",
    slug: "strength",
  },
  {
    uuid: "ccb37810-f875-0130-c6e4-58d385a7b928",
    slug: "the-richmond-county-mirror",
  },
  {
    uuid: "9ba4f610-326d-0130-db56-58d385a7bbd0",
    slug: "confectioners-journal",
  },
  {
    uuid: "cc28c440-4154-0130-ff4f-58d385a7bbd0",
    slug: "essai-thorique-et-exprimental-sur-le-galvanisme-avec-une-srie-dexpriences-faites",
  },
  {
    uuid: "7b077870-b1c3-0130-7932-58d385a7bbd0",
    slug: "the-american-silk-journal",
  },
  {
    uuid: "2e3a24c0-c60b-012f-6bd9-58d385a7bc34",
    slug: "the-standard",
  },
  {
    uuid: "5f013030-4793-0134-e6d7-00505686d14e",
    slug: "richard-tucker-photographs",
  },
  {
    uuid: "c693e190-44f4-0133-bf20-00505686d14e",
    slug: "collection-of-photographs-of-new-york-city-new-york-state-and-more-by-max",
  },
  {
    uuid: "d6d29460-031a-0133-7ddc-58d385a7b928",
    slug: "yizkor-book-collection",
  },
  {
    uuid: "8cf0d190-4ba1-0134-9c27-00505686d14e",
    slug: "paul-muni-papers",
  },
  {
    uuid: "5eb07200-0042-0130-fc14-58d385a7bc34",
    slug: "letters-by-william-blake",
  },
  {
    uuid: "74f46a20-5105-0134-c76b-00505686a51c",
    slug: "dance-oral-history-project",
  },
  {
    uuid: "7b787cf0-5fca-0133-9d8b-00505686a51c",
    slug: "joyce-trisler-video-archive",
  },
  {
    uuid: "1da0a350-c60a-012f-fa39-58d385a7bc34",
    slug: "the-book-of-instruction-in-the-elements-of-the-art-of-astrology",
  },
  {
    uuid: "af89ccc0-212a-0134-25e0-00505686d14e",
    slug: "jacob-a-riis-neighborhood-settlement-records",
  },
  {
    uuid: "e067b7f0-0a22-0133-50be-58d385a7bbd0",
    slug: "serrell-opdycke-patrick-papers",
  },
  {
    uuid: "f7533140-3179-0134-f53a-00505686a51c",
    slug: "new-york-city-directories",
  },
  {
    uuid: "625af5e0-15ff-0134-c780-00505686a51c",
    slug: "ein-totentanz-von-1914",
  },
  {
    uuid: "919692b0-3a47-0134-c16f-00505686a51c",
    slug: "agnes-de-mille-photographic-scrapbooks",
  },
  {
    uuid: "5deafb60-4144-0134-393d-00505686a51c",
    slug: "american-superiority-at-the-worlds-fair",
  },
  {
    uuid: "dde121a0-413e-0134-5e67-00505686a51c",
    slug: "gleasons-pictorial",
  },
  {
    uuid: "4db00a00-3020-0134-d5da-00505686a51c",
    slug: "golf",
  },
  {
    uuid: "0ed2f490-3bcf-0134-2f75-00505686a51c",
    slug: "modern-practice-of-the-electric-telegraph",
  },
  {
    uuid: "7daa06f0-4152-0134-01ba-00505686a51c",
    slug: "rire",
  },
  {
    uuid: "759ce830-c603-012f-1275-58d385a7bc34",
    slug: "robert-adam-his-brothers-their-lives-work-influence-on-english-architecture",
  },
  {
    uuid: "55d10280-414a-0134-84a8-00505686a51c",
    slug: "the-leisure-hour",
  },
  {
    uuid: "2c9f3610-4136-0134-9735-00505686a51c",
    slug: "the-watch-clockmakers-handbook",
  },
  {
    uuid: "051bba20-1ac5-0134-626d-00505686a51c",
    slug: "suburbia",
  },
  {
    uuid: "81c347c0-1abe-0134-01c6-00505686a51c",
    slug: "mechanics-no-miracles-today",
  },
  {
    uuid: "88d607b0-4abc-0134-dba6-00505686a51c",
    slug: "adventures-and-letters-of-richard-harding-davis",
  },
  {
    uuid: "3ae00a20-3fd1-0134-b043-00505686a51c",
    slug: "trois-valses-brillantes",
  },
  {
    uuid: "c5127730-3d48-0134-8905-00505686a51c",
    slug: "walter-damrosch-scrapbooks-and-clippings",
  },
  {
    uuid: "ee54fe50-60ad-0134-d5f4-00505686d14e",
    slug: "george-w-westerman-papers",
  },
  {
    uuid: "3b755c60-c606-012f-4900-58d385a7bc34",
    slug: "the-hotel-tattler",
  },
  {
    uuid: "0a0bbdb0-eccf-0130-1920-58d385a7bbd0",
    slug: "the-universal-penman",
  },
  {
    uuid: "a27751e0-67cd-0134-1d05-00505686d14e",
    slug: "frank-j-sprague-papers",
  },
  {
    uuid: "95592630-24d9-0133-c70f-58d385a7b928",
    slug: "united-states-sanitary-commission-records-department-of-north-carolina-archives",
  },
  {
    uuid: "1f29b710-5028-0134-2e99-00505686a51c",
    slug: "pseudodoxia-epidemica",
  },
  {
    uuid: "02165120-4b9c-0134-844a-00505686a51c",
    slug: "anna-pavlova-company-tour-south-america",
  },
  {
    uuid: "eeafc9b0-66f3-0134-9888-00505686a51c",
    slug: "authentic-and-impartial-narrative-of-the-tragical-scene-which-was-witnessed",
  },
  {
    uuid: "527aced0-cac5-0133-309a-00505686a51c",
    slug: "emma-goldman-papers",
  },
  {
    uuid: "da11afc0-6f95-0133-6389-00505686a51c",
    slug: "p-jay-sidney-collection",
  },
  {
    uuid: "e7eb8fc0-58cf-0134-81e7-00505686a51c",
    slug: "the-southhampton-insurrection",
  },
  {
    uuid: "e2423970-7475-0134-c2ac-00505686d14e",
    slug: "mattachine-society-inc-of-new-york-records",
  },
  {
    uuid: "d2251ba0-7850-0134-7a11-00505686a51c",
    slug: "census-maps",
  },
  {
    uuid: "e4d4ebc0-f9b1-0133-12f9-00505686a51c",
    slug: "wadleigh-high-school-yearbooks",
  },
  {
    uuid: "1e915770-b521-0131-64fa-58d385a7bbd0",
    slug: "memorials-of-the-life-of-amelia-opie",
  },
  {
    uuid: "0e161030-82ae-0130-3eaf-58d385a7bbd0",
    slug: "a-cyclopaedia-of-biblical-literature",
  },
  {
    uuid: "8ed7c300-c604-012f-457f-58d385a7bc34",
    slug: "the-temple-of-nature-or-the-origin-of-society-a-poem-with-philosophical-notes",
  },
  {
    uuid: "a4b78820-6d4b-0134-0dfa-00505686a51c",
    slug: "fausto",
  },
  {
    uuid: "a67e0440-67db-0134-161f-00505686d14e",
    slug: "booth-grossman-family-papers",
  },
  {
    uuid: "e536b550-1494-0134-879b-00505686d14e",
    slug: "merce-cunningham-dance-foundation-inc-records-additions",
  },
  {
    uuid: "84d3ff60-3713-0134-933f-00505686d14e",
    slug: "patrick-kelly-collection-of-audio-visual-recordings",
  },
  {
    uuid: "ac3842d0-5d8f-0134-3906-00505686a51c",
    slug: "the-tree-planting-association-of-new-york-city",
  },
  {
    uuid: "bd3159f0-574f-0134-5a04-00505686a51c",
    slug: "le-streghe",
  },
  {
    uuid: "035a6540-486c-0134-c302-00505686a51c",
    slug: "leah-the-forsaken",
  },
  {
    uuid: "04284720-6d3f-0134-401a-00505686a51c",
    slug: "lartiste",
  },
  {
    uuid: "05cafcb0-c60a-012f-5418-58d385a7bc34",
    slug: "the-toscanini-legacy-papers",
  },
  {
    uuid: "5b4d9740-c5f4-012f-9b5f-58d385a7bc34",
    slug: "frankenstein-or-the-modern-prometheus-2-3",
  },
  {
    uuid: "7401df90-5697-0134-5095-00505686a51c",
    slug: "am1-collection",
  },
  {
    uuid: "113d5f50-4602-0134-bad5-00505686d14e",
    slug: "carl-van-vechten-papers",
  },
  {
    uuid: "d6660990-60cb-0134-414d-00505686d14e",
    slug: "jules-fisher-collection-of-jo-mielziner-designs",
  },
  {
    uuid: "12313180-0a59-0134-4a84-00505686a51c",
    slug: "federal-theatre-project-theater-stills-collection",
  },
  {
    uuid: "15f37480-3732-0134-8c08-00505686d14e",
    slug: "philip-schuyler-papers",
  },
  {
    uuid: "770f3cd0-899f-0134-3827-00505686d14e",
    slug: "dorothy-kilgallen-papers-and-scrapbooks",
  },
  {
    uuid: "e3f46760-8b3d-0134-fe0a-00505686d14e",
    slug: "emily-fowler-ford-papers",
  },
  {
    uuid: "60e14180-8d9c-0134-e8cf-00505686a51c",
    slug: "hypnerotomachia-poliphili",
  },
  {
    uuid: "02465890-205d-0134-f6c8-00505686d14e",
    slug: "john-robert-gregg-collection",
  },
  {
    uuid: "e5c6f1b0-6d34-0134-e085-00505686d14e",
    slug: "maloney-collection-of-irish-historical-papers",
  },
  {
    uuid: "82086b30-08b0-0133-72b4-58d385a7b928",
    slug: "the-merce-cunningham-dance-foundation-inc-records",
  },
  {
    uuid: "b6096ba0-9d3a-0133-81a1-00505686d14e",
    slug: "the-fortnightly-musical-review",
  },
  {
    uuid: "8a20b4d0-9e2e-0134-b9a6-00505686d14e",
    slug: "lillian-gish-papers",
  },
  {
    uuid: "da9ec970-ed26-0133-9e3f-00505686a51c",
    slug: "msica-de-amrica",
  },
  {
    uuid: "e68fb830-ce85-0133-abd0-00505686a51c",
    slug: "jos-limn-video-archive",
  },
  {
    uuid: "42f79df0-a1e5-0133-e213-00505686a51c",
    slug: "musical-news",
  },
  {
    uuid: "c90a81a0-ac0f-0133-8dbc-00505686d14e",
    slug: "the-musical-age",
  },
  {
    uuid: "f4589720-ae7f-0133-ee17-00505686d14e",
    slug: "the-new-york-musical-echo",
  },
  {
    uuid: "0c194c50-b0ce-0133-31ad-00505686a51c",
    slug: "oriental-music-in-european-notation",
  },
  {
    uuid: "54f33f00-a120-0133-0c51-00505686a51c",
    slug: "international-music-and-drama",
  },
  {
    uuid: "2b649080-a1d8-0133-422f-00505686d14e",
    slug: "the-music-magazinemusical-courier",
  },
  {
    uuid: "51985db0-9d33-0133-8257-00505686d14e",
    slug: "freunds-music-and-drama",
  },
  {
    uuid: "496b9a30-a1ed-0133-9ae4-00505686a51c",
    slug: "musical-observer",
  },
  {
    uuid: "d04d6900-a827-0133-9dd9-00505686a51c",
    slug: "musik-mappe",
  },
  {
    uuid: "97899530-ac00-0133-d4d2-00505686d14e",
    slug: "moderne-tonkunst",
  },
  {
    uuid: "28b5df90-eec0-0133-384c-00505686a51c",
    slug: "the-jeanne-ruddy-video-archive",
  },
  {
    uuid: "14f39f70-fea0-0133-fa25-00505686a51c",
    slug: "the-belevskii-zhukovskii-collection-of-manuscripts-photographs-drawings-books",
  },
  {
    uuid: "6fa506b0-ca17-0134-229e-00505686d14e",
    slug: "andrew-carnegie-letters",
  },
  {
    uuid: "d9d3f640-c61f-012f-ea3b-58d385a7bc34",
    slug: "art-and-artists",
  },
  {
    uuid: "8ab644f0-0e5f-0134-43fb-00505686a51c",
    slug: "adriaen-van-ostade",
  },
  {
    uuid: "c32ff8e0-826c-0133-d8d0-00505686a51c",
    slug: "japanese-prints",
  },
  {
    uuid: "85526b30-8355-0134-6dd9-00505686a51c",
    slug: "selected-lima-studies",
  },
  {
    uuid: "d7c76a70-84b9-0133-73c0-00505686a51c",
    slug: "manuel-alum-video-archive",
  },
  {
    uuid: "03cb41e0-e01c-0134-d707-0d7346f0d5ae",
    slug: "oliver-wolcott-letterbook",
  },
  {
    uuid: "fc924680-f098-0134-a8a3-0bb30c24e1aa",
    slug: "cheryl-crawford-papers",
  },
  {
    uuid: "fea9db50-5c18-0134-d0a5-00505686a51c",
    slug: "the-black-experience-in-childrens-books-2",
  },
  {
    uuid: "01ec7b30-f14a-0134-db12-47133d5e8d94",
    slug: "henry-cowell-papers",
  },
  {
    uuid: "587aca90-609b-0133-2090-00505686d14e",
    slug: "eliot-feld-video-archive",
  },
  {
    uuid: "2e57e530-7d94-0133-3c74-00505686d14e",
    slug: "les-ballets-trockadero-de-monte-carlo-video-archive",
  },
  {
    uuid: "30f12ad0-a3e9-0132-124f-58d385a7b928",
    slug: "claudia-gitelman-archive",
  },
  {
    uuid: "54d5d230-a827-0133-c947-00505686a51c",
    slug: "jerry-ames-video-archive",
  },
  {
    uuid: "c30ea740-81aa-0133-b63e-00505686d14e",
    slug: "asia-society-video-archive",
  },
  {
    uuid: "c7108700-cf43-0133-340b-00505686a51c",
    slug: "carmen-beuchat-video-archive",
  },
  {
    uuid: "377688a0-cf44-0133-30c0-00505686a51c",
    slug: "asian-american-dance-theater-video-archive",
  },
  {
    uuid: "ee7d8d30-3ad4-0133-78ce-00505686a51c",
    slug: "charles-weidman-video-archive",
  },
  {
    uuid: "a8918b80-95f1-0133-4d9f-00505686d14e",
    slug: "may-odonnell-and-ray-green-video-archive",
  },
  {
    uuid: "ff57e050-f623-0134-a084-08d7a2abd4fb",
    slug: "comden-and-green-papers",
  },
  {
    uuid: "4e76ac60-fd1a-0134-4ee5-71e0a0ece547",
    slug: "charles-lutwidge-dodgson-collection-of-papers",
  },
  {
    uuid: "b758a380-010a-0135-4abe-0fe8e7494d9d",
    slug: "historical-postcards-of-new-york-city",
  },
  {
    uuid: "b06d1010-8344-0134-0c7f-00505686a51c",
    slug: "tom-scott-audio-collection",
  },
  {
    uuid: "20738510-10dd-0135-5287-5d659d54d7a9",
    slug: "robert-patrick-papers",
  },
  {
    uuid: "7c2dbe80-7459-0133-e5d5-00505686d14e",
    slug: "norman-maen-video-archive",
  },
  {
    uuid: "27673350-1b7e-0134-75fe-00505686d14e",
    slug: "arthur-weyhe-toy-theatre-collection",
  },
  {
    uuid: "cbed07d0-c608-012f-e65e-58d385a7bc34",
    slug: "the-anglo-african-magazine",
  },
  {
    uuid: "40c313d0-5701-0132-88c6-58d385a7b928",
    slug: "new-york-masjid",
  },
  {
    uuid: "fb344770-c60a-012f-4db2-58d385a7bc34",
    slug: "lincoln-in-photographs-an-album-of-every-known-pose",
  },
  {
    uuid: "9621d4a0-c6de-012f-3280-3c075448cc4b",
    slug: "the-journal-of-southern-history",
  },
  {
    uuid: "607bf240-c61e-012f-2f19-58d385a7bc34",
    slug: "abolition-of-the-african-slave-trade-by-the-british-parliament-abridged",
  },
  {
    uuid: "51a97ad0-c3a9-0133-c62c-00505686d14e",
    slug: "the-wife-of-his-youth-and-other-stories-of-the-color-line",
  },
  {
    uuid: "8115dff0-c6cf-012f-fda6-58d385a7bc34",
    slug: "philip-trager-photographs",
  },
  {
    uuid: "50c83880-c84a-0133-18cb-00505686a51c",
    slug: "alvin-ailey-video-archive",
  },
  {
    uuid: "907ac020-f2e4-0134-dd62-063322175d52",
    slug: "circle-repertory-company-records",
  },
  {
    uuid: "d2e11b20-2391-0135-e0ad-00e74e93dd98",
    slug: "jerome-robbins-photographs",
  },
  {
    uuid: "5a69f7d0-ba7f-0134-9012-00505686a51c",
    slug: "photographs-by-louis-edouard-roussel",
  },
  {
    uuid: "aa5b6250-ba71-0134-341f-00505686a51c",
    slug: "mexico",
  },
  {
    uuid: "55592750-833c-0134-356e-00505686a51c",
    slug: "bnai-brith-messenger",
  },
  {
    uuid: "8be62e90-def8-0133-60a3-00505686d14e",
    slug: "fifty-seven-early-new-york-documents",
  },
  {
    uuid: "f926e1b0-277c-0134-a846-00505686d14e",
    slug: "schuyler-malcom-family-papers",
  },
  {
    uuid: "dce7e3e0-617a-0134-cca3-00505686d14e",
    slug: "philip-schuyler-letters-and-documents",
  },
  {
    uuid: "6c44c370-e5ac-0134-2c08-63caf4b81e1d",
    slug: "robert-brooke-papers-relating-to-the-chesapeake-and-delaware-canal",
  },
  {
    uuid: "11c64a00-617c-0134-9382-00505686d14e",
    slug: "collin-macgregor-letterbooks",
  },
  {
    uuid: "c9c69da0-836c-0134-08cf-00505686a51c",
    slug: "views-of-chile",
  },
  {
    uuid: "f6f72ea0-841c-0134-7579-00505686a51c",
    slug: "views-of-guatemala",
  },
  {
    uuid: "703eb1b0-7c62-0134-23f7-00505686a51c",
    slug: "libraries",
  },
  {
    uuid: "a053d220-23be-0135-e1f4-0190a8332cbe",
    slug: "robert-baral-papers",
  },
  {
    uuid: "11bc3770-8367-0134-3b94-00505686a51c",
    slug: "photographs-by-g-blain",
  },
  {
    uuid: "40ffa6f0-843b-0134-3707-00505686a51c",
    slug: "photographs-by-leo-matiz",
  },
  {
    uuid: "872c9570-a853-0134-6282-00505686a51c",
    slug: "puck",
  },
  {
    uuid: "89a31860-84fb-0134-6d29-00505686a51c",
    slug: "ser-guatemalteca",
  },
  {
    uuid: "049cd860-8422-0134-d911-00505686a51c",
    slug: "views-of-argentina",
  },
  {
    uuid: "d55a4a30-5829-0134-a5be-00505686a51c",
    slug: "an-essay-on-the-causes-of-the-revolution-and-civil-wars-of-hayti",
  },
  {
    uuid: "14a4acc0-8746-0134-e82a-00505686a51c",
    slug: "guarapuava",
  },
  {
    uuid: "34a46500-8745-0134-1500-00505686a51c",
    slug: "yanomamo",
  },
  {
    uuid: "84b41090-279b-0135-62f5-0fb7b6b36733",
    slug: "henry-george-papers",
  },
  {
    uuid: "d87b2ae0-2797-0135-1fa2-5d15868a7517",
    slug: "lewis-hine-papers",
  },
  {
    uuid: "7b8d8890-19f8-0134-eeca-00505686a51c",
    slug: "radio",
  },
  {
    uuid: "293f3210-c6df-012f-844b-58d385a7bc34",
    slug: "el-museo-pictorico-y-escala-optica",
  },
  {
    uuid: "e4a06150-7f62-0134-ba3e-00505686a51c",
    slug: "donald-angus-collection-of-carl-van-vechten-postcards-and-photographs-circa",
  },
  {
    uuid: "c3ae6da0-4624-0134-5b5a-00505686d14e",
    slug: "raphael-lemkin-papers",
  },
  {
    uuid: "a735fa70-67a0-0132-28bc-58d385a7bbd0",
    slug: "beverly-blossom-video-archive",
  },
  {
    uuid: "ddff29d0-f45d-0133-86fd-00505686a51c",
    slug: "lady-lancing",
  },
  {
    uuid: "fcafbd60-98af-0134-80a8-00505686d14e",
    slug: "richard-mansfield-family-papers",
  },
  {
    uuid: "bde7a090-f460-0133-baec-00505686a51c",
    slug: "the-importance-of-being-earnest",
  },
  {
    uuid: "76f7f770-fa92-0133-2762-00505686a51c",
    slug: "america-or-large-voyages",
  },
  {
    uuid: "9dd8a560-8286-0134-5861-00505686a51c",
    slug: "catalogue-of-works-of-art",
  },
  {
    uuid: "81b22fe0-c603-012f-e961-58d385a7bc34",
    slug: "endless-entertainment",
  },
  {
    uuid: "cf4a2460-2f42-0134-e71d-00505686a51c",
    slug: "historia-della-cose-svccesse-dal-principio-della-guerra-mossa-da-selim-ottomano",
  },
  {
    uuid: "c92b6970-c602-012f-a388-58d385a7bc34",
    slug: "historical-poetical-and-pictorial-american-scenes-principally-moral",
  },
  {
    uuid: "0b5b67b0-63e2-0134-08a1-00505686a51c",
    slug: "imagini-delli-dei-de-glantichi",
  },
  {
    uuid: "041622e0-7d25-0134-31b8-00505686a51c",
    slug: "inscriptions-on-tombstones-and-monuments-in-the-burying-grounds-of-the-first",
  },
  {
    uuid: "e322b700-58cf-0134-16c3-00505686a51c",
    slug: "la-biblioteca-americana-o-miscelnea-de-literatura-artes-i-ciencias",
  },
  {
    uuid: "5c412c90-003e-0130-09b0-58d385a7bc34",
    slug: "la-gerusalemme-liberata-di-torquato-tasso",
  },
  {
    uuid: "0186d5d0-7d1c-0134-709d-00505686a51c",
    slug: "maliar",
  },
  {
    uuid: "48f111d0-f39f-0133-8080-00505686d14e",
    slug: "stephen-crane-collection-of-papers",
  },
  {
    uuid: "955a5ce0-f4ff-0133-0c2e-00505686a51c",
    slug: "temple-of-heaven",
  },
  {
    uuid: "96aad5b0-5c12-0134-a7e5-00505686a51c",
    slug: "the-holy-bible-2-3",
  },
  {
    uuid: "6f1c1850-9faa-0134-1683-00505686a51c",
    slug: "the-roeblings-a-century-of-engineers-bridge-builders-and-industrialists",
  },
  {
    uuid: "f246e180-bf38-0131-34a2-58d385a7b928",
    slug: "the-public-entry-of-the-queen-into-jerusalem",
  },
  {
    uuid: "fa1c3200-79f4-0134-050e-00505686a51c",
    slug: "woman-in-the-nineteenth-century",
  },
  {
    uuid: "de714dc0-a860-0134-599a-00505686a51c",
    slug: "la-fin-du-cheval",
  },
  {
    uuid: "98560360-9c47-0133-146f-00505686a51c",
    slug: "allgemeine-musikalische-zeitung",
  },
  {
    uuid: "025da240-835e-0134-3bb2-00505686a51c",
    slug: "old-mexico",
  },
  {
    uuid: "c625b2f0-a825-0133-c916-00505686a51c",
    slug: "la-musique-populaire",
  },
  {
    uuid: "f79b1ad0-8416-0134-d3a2-00505686a51c",
    slug: "photographs-of-peru",
  },
  {
    uuid: "509836f0-9d21-0133-a07f-00505686a51c",
    slug: "eco-musical",
  },
  {
    uuid: "42c9d880-a1de-0133-e4dc-00505686d14e",
    slug: "music-and-musicians",
  },
  {
    uuid: "0eba1670-0331-0134-1fd8-00505686a51c",
    slug: "musical-world",
  },
  {
    uuid: "cf768fc0-0fd9-0134-6bb1-00505686a51c",
    slug: "scrap-book-containing-newspaper-and-magazine-clippings-concerning-the-project",
  },
  {
    uuid: "7104e360-2481-0135-a09a-4b445a473bf6",
    slug: "mina-curtiss-collection",
  },
  {
    uuid: "a67e37a0-e7ef-0134-1eb2-009c0e29b581",
    slug: "a-raisin-in-the-sun-theater-stills-collection",
  },
  {
    uuid: "f53c34b0-068e-0135-ac4c-471986fab0f3",
    slug: "annual-report-of-the-city-history-club-of-new-york",
  },
  {
    uuid: "f76a9680-10ca-0135-e410-43962e862982",
    slug: "asadata-dafora-papers",
  },
  {
    uuid: "fa2e6680-1f9d-0134-ed43-00505686a51c",
    slug: "emile-ardolino-video-archive",
  },
  {
    uuid: "0ab77b70-ce86-0133-2211-00505686a51c",
    slug: "erick-hawkins-video-archive",
  },
  {
    uuid: "a1e836a0-1bd1-0135-5429-4d44e112d3e7",
    slug: "fandango",
  },
  {
    uuid: "9ce31230-c622-012f-ad21-58d385a7bc34",
    slug: "forverts",
  },
  {
    uuid: "93d61350-8fd3-0134-1457-00505686d14e",
    slug: "gene-frankel-papers",
  },
  {
    uuid: "e7132640-7469-0134-7ee5-00505686a51c",
    slug: "jerome-robbins-dance-division-posters-and-broadsides",
  },
  {
    uuid: "b234bb00-3b1b-0134-4aa8-00505686a51c",
    slug: "peter-williams-portrait-collection",
  },
  {
    uuid: "e4263420-ea28-0134-1bc7-01ddd46e284a",
    slug: "political-sketches-c",
  },
  {
    uuid: "a580b480-8359-0134-dc6b-00505686a51c",
    slug: "recuerdos-de-la-campaa-de-buenos-ayres",
  },
  {
    uuid: "9bdf5b70-26b2-0134-30bd-00505686a51c",
    slug: "samuel-taylor-coleridge",
  },
  {
    uuid: "a9e21d30-93bf-0134-771c-00505686a51c",
    slug: "the-jewelers-circular-and-horological-review",
  },
  {
    uuid: "beb2e4f0-c6eb-012f-ef9b-58d385a7bc34",
    slug: "del-moto-e-misura-dellacqua-di-leonardo-da-vinci",
  },
  {
    uuid: "c4aee340-c6cd-012f-c789-58d385a7bc34",
    slug: "conquest-of-the-irrational",
  },
  {
    uuid: "d209e1d0-c6b6-012f-4bd8-58d385a7bc34",
    slug: "tales-from-shakespear",
  },
  {
    uuid: "33cd2900-b029-0134-f444-00505686a51c",
    slug: "the-sonora-bell",
  },
  {
    uuid: "29ba5830-c6bb-012f-6243-58d385a7bc34",
    slug: "arabic-manuscripts-collection",
  },
  {
    uuid: "78058370-8753-0134-2924-00505686a51c",
    slug: "los-ambulantes",
  },
  {
    uuid: "7a335980-9eee-0134-7f2b-00505686a51c",
    slug: "prints-by-bjo-nordfeldt",
  },
  {
    uuid: "bfca54f0-d8b7-0133-8536-00505686a51c",
    slug: "theatri-machinarum-erster-sechster-vnd-letzter-theill",
  },
  {
    uuid: "4610d7e0-ea2d-0134-2cf9-0959d1838dca",
    slug: "a-catalogue-of-british-historical-medals",
  },
  {
    uuid: "62c93480-0042-0130-745a-58d385a7bc34",
    slug: "a-day-with-bum-and-the-smart-little-fish",
  },
  {
    uuid: "aa6d8520-7e61-0132-3068-58d385a7b928",
    slug: "the-black-experience-in-childrens-books",
  },
  {
    uuid: "1d28d860-60a9-0134-c19a-00505686a51c",
    slug: "animal-kingdom",
  },
  {
    uuid: "6c5d71a0-10c6-0135-b11c-00d1a4392d74",
    slug: "billy-rose-papers",
  },
  {
    uuid: "e008c300-f793-0134-3e4c-5f1dc7d1711d",
    slug: "di-idishe-muzikalishe-velt-un-teater-zshurnal",
  },
  {
    uuid: "447f56d0-ea3a-0134-3215-0dac6996f826",
    slug: "lincoln-kirstein-papers",
  },
  {
    uuid: "d2c45910-7d11-0134-9279-00505686a51c",
    slug: "photographs-of-the-marriage-of-vittorio-emmanuele-prince-of-naples-to-princess",
  },
  {
    uuid: "51fb8b10-c6c1-012f-86d5-58d385a7bc34",
    slug: "the-new-york-times",
  },
  {
    uuid: "248ecb40-d456-0134-c190-00505686d14e",
    slug: "the-philippines-and-the-far-east",
  },
  {
    uuid: "d7c71530-79d3-0134-e91b-00505686d14e",
    slug: "edward-kleban-papers",
  },
  {
    uuid: "5a5ffef0-c608-012f-c6b8-58d385a7bc34",
    slug: "new-york-herald-tribune",
  },
  {
    uuid: "c59ad8b0-9ef1-0134-becd-00505686a51c",
    slug: "prints-by-margaret-jordan-patterson",
  },
  {
    uuid: "728c37e0-81b5-0134-39e2-00505686a51c",
    slug: "il-ballarino",
  },
  {
    uuid: "cf467d90-d42b-0133-04dd-00505686a51c",
    slug: "gregory-hines-collection-of-american-tap-dance",
  },
  {
    uuid: "7c166130-dccc-0134-108f-0ff42bef68ba",
    slug: "photographic-scrapbook-2-3",
  },
  {
    uuid: "edd162f0-8f2c-0134-6f06-00505686a51c",
    slug: "cia-fornaroli-collection-of-costume-drawings-and-prints-items-in-mats",
  },
  {
    uuid: "0f1d0860-8da9-0134-a557-00505686a51c",
    slug: "12-kunstblatten-zu-casanovas-memoiren-gallerie-zu-den-memoiren-des-venetianers",
  },
  {
    uuid: "a0fe29c0-81df-0134-4192-00505686a51c",
    slug: "costumi-della-repubblica-e-monumenti-principali-di-venezia",
  },
  {
    uuid: "b879fde0-81af-0134-e513-00505686a51c",
    slug: "diversarum-nationvm-habitus",
  },
  {
    uuid: "e51a9090-7f73-0134-a802-00505686a51c",
    slug: "givochi-festivi-e-militari-danze-serenate-machine-boscareccia-artificiosa",
  },
  {
    uuid: "9ea21cb0-0cbe-0130-a375-58d385a7b928",
    slug: "habiti-dhvomeni-et-donne-venetiane",
  },
  {
    uuid: "e47ef7b0-559b-0133-0531-00505686d14e",
    slug: "studio-one-production-files",
  },
  {
    uuid: "5096cee0-e2f0-0133-f4f2-00505686a51c",
    slug: "the-peoples-voice",
  },
  {
    uuid: "f15c4920-d7ef-0133-f8db-00505686a51c",
    slug: "william-stanley-braithwaite-photograph-collection",
  },
  {
    uuid: "0c683110-73be-0134-e9aa-00505686d14e",
    slug: "a-j-antoon-papers",
  },
  {
    uuid: "91e759e0-1f9d-0134-b6a3-00505686a51c",
    slug: "agnes-de-mille-video-archive",
  },
  {
    uuid: "e52125d0-827e-0134-4dda-00505686a51c",
    slug: "album-of-dcoupages-of-costume-plates-and-animal-illustrations",
  },
  {
    uuid: "ae790030-e666-0134-4d0d-59795f29cd41",
    slug: "amours-aventures-de-jacques-casanova-de-seingalt",
  },
  {
    uuid: "4b9cbae0-7f7e-0134-f23e-00505686a51c",
    slug: "ceremonial-appearances-of-the-doge-of-venice",
  },
  {
    uuid: "0d3acc00-81b8-0134-4fa5-00505686a51c",
    slug: "de-gli-habiti-antichi",
  },
  {
    uuid: "5f41a2b0-8280-0134-4cb9-00505686a51c",
    slug: "gli-amori-dapollo",
  },
  {
    uuid: "a855c7b0-81a9-0134-7d14-00505686a51c",
    slug: "habiti-antichi",
  },
  {
    uuid: "61ff7a30-81a7-0134-e9ee-00505686a51c",
    slug: "habiti-delle-donne-venetiane-intagliate-sic-in-rame-nuouamente",
  },
  {
    uuid: "eb2e43a0-7f71-0134-315a-00505686a51c",
    slug: "i-nvmi-a-diporto-sv-ladriatico",
  },
  {
    uuid: "29a70fc0-8f19-0134-11fa-00505686a51c",
    slug: "musaeum-italicum-novum",
  },
  {
    uuid: "81036690-1f9e-0134-1380-00505686a51c",
    slug: "north-carolina-dance-theatre-video-archive",
  },
  {
    uuid: "af4fa9d0-c605-012f-6832-58d385a7bc34",
    slug: "real-estate-catalogs",
  },
  {
    uuid: "b993a220-8271-0134-0744-00505686a51c",
    slug: "secreti-nobilissimi-dellarte-profvmatoria",
  },
  {
    uuid: "7dd68390-81bc-0134-6763-00505686a51c",
    slug: "varie-acconciatvre-di-teste-usate-da-nobilissime-dame-in-diuerse-cittadi-ditalia",
  },
  {
    uuid: "cdc618f0-7f82-0134-c5c2-00505686a51c",
    slug: "vendetta-damore",
  },
  {
    uuid: "de028e60-c6df-012f-8fc5-58d385a7bc34",
    slug: "washington-irving-papers",
  },
  {
    uuid: "4731f830-d1a2-0133-1aa5-00505686a51c",
    slug: "six-patriotic-posters-for-the-first-world-war",
  },
  {
    uuid: "a910a560-0040-0135-35aa-5d92544575eb",
    slug: "caecilia",
  },
  {
    uuid: "e1b3b8f0-f6dc-0134-1d7c-2dcecb5848d9",
    slug: "ruth-mitchell-papers",
  },
  {
    uuid: "a812e8e0-c6b7-012f-3f2f-58d385a7bc34",
    slug: "san-francisco-views-before-and-after-the-earthquake-and-fire-of-1906",
  },
  {
    uuid: "8084fab0-3804-0135-0f54-718d7347321d",
    slug: "abe-burrows-papers",
  },
  {
    uuid: "500ee5b0-b4d4-0134-4181-00505686a51c",
    slug: "thodore-etienne-de-st-lger-collection",
  },
  {
    uuid: "9c06f920-3825-0135-9cde-5d38e197e8e7",
    slug: "lesbian-gay-bisexual-and-transgender-periodical-collection",
  },
  {
    uuid: "0f7543b0-10c7-0135-074f-0971c8a8db41",
    slug: "the-secrets-of-the-great-city",
  },
  {
    uuid: "503aada0-01ef-0135-4a60-0c32d94424e4",
    slug: "yellow-springs-institute-audiovisual-collection",
  },
  {
    uuid: "3aafd410-c6da-012f-6d4d-58d385a7bc34",
    slug: "views-of-brooklyn",
  },
  {
    uuid: "34a4a490-2220-0135-a421-0d4d9da27e71",
    slug: "prints-by-james-smillie",
  },
  {
    uuid: "477938e0-0754-0135-aac7-5d1be760b3c3",
    slug: "the-moslem-sunrise",
  },
  {
    uuid: "2c95ec90-10ad-0135-d06f-2fe149c78139",
    slug: "alt-orientalische-teppichmuster",
  },
  {
    uuid: "6ec8f8e0-1338-0135-a3b7-08dd25e4bdb1",
    slug: "les-deux-nigauds",
  },
  {
    uuid: "08789360-2793-0135-aadc-61beb74151fb",
    slug: "les-plus-excellents-bastiments-de-france",
  },
  {
    uuid: "b26c8b30-4006-0131-80a1-58d385a7b928",
    slug: "an-inquiry-into-the-authenticity-of-various-pictures-and-prints-which",
  },
  {
    uuid: "413f9f00-035b-0135-45c1-552912be836e",
    slug: "the-syrian-american-commercial-magazine",
  },
  {
    uuid: "2934c330-3e4a-0135-cd9d-2d2afb607159",
    slug: "harold-prince-papers",
  },
  {
    uuid: "eb9894a0-3e47-0135-4535-69495820bdf5",
    slug: "ivan-black-papers",
  },
  {
    uuid: "b926c770-f164-0134-dc7c-71c2353cb8fe",
    slug: "an-account-of-the-history-manners-and-customs-of-the-indian-nations",
  },
  {
    uuid: "d0e34710-cec5-0134-aa38-00505686a51c",
    slug: "the-village-voice",
  },
  {
    uuid: "ff23e970-2135-0135-95b8-006173da87c2",
    slug: "jerome-robbins-papers",
  },
  {
    uuid: "95fe13a0-dade-0131-f1bd-58d385a7bbd0",
    slug: "dance-notation-bureau-collection",
  },
  {
    uuid: "268a5b70-ce86-0133-c4a2-00505686a51c",
    slug: "senta-driver-video-archive",
  },
  {
    uuid: "6f0c1f70-ce85-0133-6db3-00505686a51c",
    slug: "jeff-duncan-video-archive",
  },
  {
    uuid: "c797f7f0-67e0-0134-7dc5-00505686d14e",
    slug: "souvenir-collection-of-costume-designs",
  },
  {
    uuid: "28df49e0-3813-0135-2ed3-23b469a57474",
    slug: "john-h-finley-papers",
  },
  {
    uuid: "300a3160-119d-0135-148b-1daad2fa415a",
    slug: "sophie-tucker-scrapbooks",
  },
  {
    uuid: "0811d850-9b7e-0133-89b3-00505686d14e",
    slug: "boston-musical-visitor",
  },
  {
    uuid: "a2e42fd0-194a-0135-195c-05b9965ef483",
    slug: "american-funeral-director",
  },
  {
    uuid: "9267b610-bb25-0134-30ab-00505686a51c",
    slug: "the-architect-2",
  },
  {
    uuid: "c7de6660-32a1-0135-2f2c-4d5318acd753",
    slug: "touching-second",
  },
  {
    uuid: "b7c0ce60-c6f5-012f-e049-58d385a7bc34",
    slug: "james-mcneill-whistler-non-avery",
  },
  {
    uuid: "03aae050-6467-0133-f48c-00505686d14e",
    slug: "charles-stewart-smith-collection-of-japanese-prints",
  },
  {
    uuid: "850619c0-08f6-0135-73fb-33f566ca2b3f",
    slug: "kriegszeit",
  },
  {
    uuid: "a561e130-0d9f-0135-4a8b-69a4be85611b",
    slug: "prints-by-asher-b-durand",
  },
  {
    uuid: "33154700-1661-0135-021f-27a64ea2a620",
    slug: "in-arcadia",
  },
  {
    uuid: "cbae3d70-5a68-0133-2006-00505686d14e",
    slug: "sothern-and-marlowe-collection",
  },
  {
    uuid: "a77fe480-566a-0133-ae33-00505686d14e",
    slug: "frank-wilstach-papers-on-sothern-and-marlowe",
  },
  {
    uuid: "30d0f500-3363-0135-5582-27f94a9276aa",
    slug: "the-sunflower-2",
  },
  {
    uuid: "87385870-1d50-0135-7e52-089d63067985",
    slug: "arcularius-and-merrell-record-and-account-book",
  },
  {
    uuid: "3558a0e0-e5b0-0134-9c48-7955c63bbe5c",
    slug: "andrew-jackson-and-william-b-lewis-correspondence",
  },
  {
    uuid: "577c9fa0-c6d3-012f-2b44-58d385a7bc34",
    slug: "vignettes-by-asher-brown-durand",
  },
  {
    uuid: "1e4f1780-037e-0135-3bc0-556a36a91a84",
    slug: "hubert-thomas-parker-scrapbook-album",
  },
  {
    uuid: "e0484770-f516-0133-aba3-00505686a51c",
    slug: "bungalow-magazine",
  },
  {
    uuid: "de9cec20-44ab-0135-3ebc-07f28556e73f",
    slug: "sketchbook-archive",
  },
  {
    uuid: "bc27f730-229a-0133-5a81-58d385a7b928",
    slug: "city-of-alexandria-town-planning-scheme",
  },
  {
    uuid: "ad9dfea0-c6c7-012f-df94-58d385a7bc34",
    slug: "hogarth-set",
  },
  {
    uuid: "8aae9740-a28c-0133-5d78-00505686d14e",
    slug: "collection-of-ledgers-and-cash-books-covering-the-period-1891-1925",
  },
  {
    uuid: "2b2d3800-c6d9-012f-1a1c-58d385a7bc34",
    slug: "women-of-distinction-remarkable-in-works-and-invincible-in-character",
  },
  {
    uuid: "9b129980-3d6c-0135-f664-0456b5a39b35",
    slug: "siegfried-sassoon-collection-of-papers",
  },
  {
    uuid: "25e9cd60-c6bf-012f-69a3-58d385a7bc34",
    slug: "grand-voyages",
  },
  {
    uuid: "27f3e660-c6b8-012f-afa9-58d385a7bc34",
    slug: "biblia-2-3-4",
  },
  {
    uuid: "eb825890-fd2f-0134-50a0-739994b8b877",
    slug: "alices-adventures-in-wonderland",
  },
  {
    uuid: "844aea90-2204-0135-2040-65f998419edb",
    slug: "notes-to-the-retreat-of-the-english",
  },
  {
    uuid: "ef6fc8a0-e7dc-0134-9791-2d379fef5cf6",
    slug: "tales-of-terror",
  },
  {
    uuid: "3086dee0-c6b6-012f-2e7e-58d385a7bc34",
    slug: "the-north-american-indian",
  },
  {
    uuid: "bf7ffc70-9530-0134-2de4-00505686d14e",
    slug: "william-smith-jr-papers",
  },
  {
    uuid: "e9bf7bf0-c6ba-012f-4f09-58d385a7bc34",
    slug: "puits-et-fontaines",
  },
  {
    uuid: "89c5ea00-c6ca-012f-c69e-3c075448cc4b",
    slug: "la-henriade",
  },
  {
    uuid: "6359cf70-5841-0135-1795-0a1dd4d6754b",
    slug: "batouala",
  },
  {
    uuid: "e6c5e2d0-c605-012f-fc6f-58d385a7bc34",
    slug: "uchene-i-khitrost-ratnago-stroen-pekhotnykh-liude",
  },
  {
    uuid: "530a11c0-c8b6-0131-2d6e-58d385a7b928",
    slug: "scrapbooks-of-new-york-city-views",
  },
  {
    uuid: "66d801d0-c6cc-012f-e2ad-58d385a7bc34",
    slug: "photographs-of-madison-square-garden",
  },
  {
    uuid: "0e708590-d50d-0134-a5ac-00505686d14e",
    slug: "reza-abdoh-collection-of-papers",
  },
  {
    uuid: "a6deb9b0-c6f4-012f-9e25-58d385a7bc34",
    slug: "designs-for-public-and-private-buildings",
  },
  {
    uuid: "25174a80-62d7-0132-0173-58d385a7b928",
    slug: "photographs-by-francis-frith-co",
  },
  {
    uuid: "87ed5b60-c6d2-012f-ffd6-3c075448cc4b",
    slug: "antiquities-of-rome",
  },
  {
    uuid: "832db000-9c53-0133-1d64-00505686d14e",
    slug: "the-cadenza",
  },
  {
    uuid: "0a382160-01d6-0135-e999-7367cd949750",
    slug: "frankenstein-or-the-man-and-the-monster",
  },
  {
    uuid: "fecb7340-0130-0135-728a-07f42ff1ed75",
    slug: "the-ruins-or-a-survey-of-the-revolutions-of-empires",
  },
  {
    uuid: "ce146ac0-5e83-0135-4dd8-3551d0c950fe",
    slug: "architect-records",
  },
  {
    uuid: "ee324210-01ca-0135-e9a4-0f522c5271bf",
    slug: "broadsides-from-the-carl-h-pforzheimer-collection",
  },
  {
    uuid: "fb098730-012d-0135-64b6-1be8d4a2d71b",
    slug: "tales-of-the-dead",
  },
  {
    uuid: "aa81bb80-0128-0135-b73a-0091c001d223",
    slug: "the-modern-minerva-or-the-bats-seminary-for-young-ladies",
  },
  {
    uuid: "939949c0-0366-0135-e782-0b41a1a07f3c",
    slug: "the-foundling-of-the-lake",
  },
  {
    uuid: "42dce0a0-02ba-0135-8201-416fee226d3c",
    slug: "dicks-english-library-of-standard-works",
  },
  {
    uuid: "68eb7cd0-c6ce-012f-3632-58d385a7bc34",
    slug: "english-caricatures-and-cartoons-depicting-smoking-and-other-subjects",
  },
  {
    uuid: "2bd5bd50-012d-0135-6b33-0516763b5db5",
    slug: "fantasmagoriana-ou-recueil-dhistoires-dapparitions-de-spectres-revenans-fantmes",
  },
  {
    uuid: "4283c0d0-02b2-0135-b765-3d122e6aa9af",
    slug: "frankenstein-2",
  },
  {
    uuid: "a0945b30-02b2-0135-0bcf-0b12fb7c1f22",
    slug: "frankenstein-2-3",
  },
  {
    uuid: "8adcf860-01ca-0135-7999-553cde5cdfb3",
    slug: "the-fortunes-of-perkin-warbeck",
  },
  {
    uuid: "25f7f960-01ca-0135-08e2-027bfde1bb7a",
    slug: "the-last-man",
  },
  {
    uuid: "70460c40-c6f3-012f-7aa1-58d385a7bc34",
    slug: "recueil-de-peintures-antiques-trouves-rome",
  },
  {
    uuid: "56c18e70-c6d8-012f-57f6-58d385a7bc34",
    slug: "geschichte-und-denkmler-des-byzantinischen-emails",
  },
  {
    uuid: "6bf4ddd0-70aa-0135-b505-01dd44a3f7fa",
    slug: "charles-dickens-collection-of-papers",
  },
  {
    uuid: "31166990-455b-0135-6704-55afc0245077",
    slug: "new-york-state-comptrollers-office-canal-records",
  },
  {
    uuid: "4b127060-dce5-0134-6ece-5fff45af663d",
    slug: "timothy-leary-papers",
  },
  {
    uuid: "5b70e940-01d6-0135-2f36-738f1cd05b21",
    slug: "frankenstein",
  },
  {
    uuid: "aae2d740-0c20-0135-f019-2f24ca6179ec",
    slug: "leonora",
  },
  {
    uuid: "a3a75600-0c23-0135-7dc1-0854585d39a0",
    slug: "wolfstein-or-the-mysterious-bandit",
  },
  {
    uuid: "cb768a50-292c-0135-8f37-0b262f13d0c2",
    slug: "carl-van-vechten-theatre-photographs",
  },
  {
    uuid: "da549a00-c6ef-012f-382b-58d385a7bc34",
    slug: "het-vermakelyck-landtleven-begrepen-in-drie-deelen",
  },
  {
    uuid: "ad4f3250-c6d3-012f-05fa-58d385a7bc34",
    slug: "fugaku-hyakkei-2-3",
  },
  {
    uuid: "32bbd6b0-c6d1-012f-6ecd-58d385a7bc34",
    slug: "nuzhatnmah-i-al-als-book-of-pleasures",
  },
  {
    uuid: "f59ed570-014f-0132-9762-58d385a7bbd0",
    slug: "original-poetry-by-victor-and-cazire",
  },
  {
    uuid: "ff44d930-6446-0132-54b5-58d385a7b928",
    slug: "photographs-relating-to-the-report-on-the-survey-and-prospects-of-a-railway",
  },
  {
    uuid: "6ec56140-012b-0135-d9ae-7377c16322b6",
    slug: "boys-weekly-reader-novelette",
  },
  {
    uuid: "19f13230-c6f7-012f-addd-3c075448cc4b",
    slug: "ysuf-va-zulaykh",
  },
  {
    uuid: "bc8e8860-eee3-0133-30b5-00505686a51c",
    slug: "the-roger-tolle-video-archive",
  },
  {
    uuid: "e08254f0-eee0-0133-f291-00505686a51c",
    slug: "the-gus-solomons-video-archive",
  },
  {
    uuid: "3274e120-1f9f-0134-2829-00505686a51c",
    slug: "the-jennifer-muller-video-archive",
  },
  {
    uuid: "fc392480-1f9e-0134-eed1-00505686a51c",
    slug: "john-butler-video-archive",
  },
  {
    uuid: "a0f05ef0-1f9e-0134-fbfe-00505686a51c",
    slug: "the-louis-falco-video-archive",
  },
  {
    uuid: "42b9e3b0-2520-0134-05cb-00505686a51c",
    slug: "the-nina-wiener-video-archive",
  },
  {
    uuid: "10c02cd0-478f-0134-8af1-00505686a51c",
    slug: "shela-xoregos-video-archive",
  },
  {
    uuid: "d9f18470-1f9e-0134-33b2-00505686a51c",
    slug: "the-donald-weissmuller-video-archive",
  },
  {
    uuid: "ddb67270-c9dc-0133-ab37-00505686a51c",
    slug: "harkness-foundation-video-archive",
  },
  {
    uuid: "91f65450-3da7-0135-1e2a-0dd8b0851ef9",
    slug: "henry-harrisse-papers",
  },
  {
    uuid: "bdf85910-1f9e-0134-3d9c-00505686a51c",
    slug: "the-american-ballet-theatre-video-archive",
  },
  {
    uuid: "b92040d0-c9dc-0133-5e0e-00505686a51c",
    slug: "meredith-monk-video-archive",
  },
  {
    uuid: "92be02d0-c607-012f-5099-58d385a7bc34",
    slug: "photographs-by-chester-burger",
  },
  {
    uuid: "ea5102b0-eed5-0133-a93e-00505686a51c",
    slug: "the-pooh-kaye-video-archive",
  },
  {
    uuid: "4cf6d7b0-7ba8-0135-f8c7-156bd8d98660",
    slug: "bob-lockyer-video-archive",
  },
  {
    uuid: "cca525c0-825e-0133-6bfc-00505686d14e",
    slug: "danspace-project-video-archive",
  },
  {
    uuid: "c763a390-609b-0133-1171-00505686d14e",
    slug: "paul-sanasardo-video-archive",
  },
  {
    uuid: "eb402e60-c620-012f-2d46-58d385a7bc34",
    slug: "janet-collins-scrapbooks-clippings-programs-photographs-and-memorabilia",
  },
  {
    uuid: "b6d6df10-7eb8-0135-c5a0-61febd3faaca",
    slug: "stefan-george-letters-to-ernst-morwitz",
  },
  {
    uuid: "db4d0ec0-803c-0135-2468-6b91743086de",
    slug: "dance-on-video-archive",
  },
  {
    uuid: "103fce00-803c-0135-25d6-01398cdda38a",
    slug: "americas-exchange-program-for-dance-video-archive",
  },
  {
    uuid: "f59929a0-eed4-0133-6858-00505686a51c",
    slug: "the-phyllis-lamhut-video-archive",
  },
  {
    uuid: "530793f0-84b9-0133-b34f-00505686a51c",
    slug: "keith-lee-video-archive",
  },
  {
    uuid: "396acf10-8124-0135-ab29-065a2b14ba10",
    slug: "on-the-boards-video-archive",
  },
  {
    uuid: "bf90c2b0-803b-0135-aade-5bf4cc10abcc",
    slug: "liljan-espenak-dancedance-therapy-collection",
  },
  {
    uuid: "039a89a0-803b-0135-2244-0f2451c1767e",
    slug: "deena-burton-video-archive",
  },
  {
    uuid: "f7b27da0-8127-0135-e065-613697889b9e",
    slug: "sophie-maslow-video-archive",
  },
  {
    uuid: "7b1648a0-c609-012f-2ec7-58d385a7bc34",
    slug: "american-negro-theatre-photograph-collection",
  },
  {
    uuid: "ea651540-1fa2-0134-5cdd-00505686a51c",
    slug: "the-george-balanchine-foundation-essays-video-archive",
  },
  {
    uuid: "2b139840-5851-0135-99b6-6de24bcbfe67",
    slug: "ancient-journals-of-the-house-of-assembly-of-bermuda",
  },
  {
    uuid: "8e808340-6100-0135-2032-517f1210cd24",
    slug: "berg-collection-counterculture-posters",
  },
  {
    uuid: "1bb27a60-64fa-0135-0bb4-0ebdd7a31b45",
    slug: "fuck-you",
  },
  {
    uuid: "8dfc9090-6103-0135-44b7-31c3df6492e4",
    slug: "outlaws-of-amerika",
  },
  {
    uuid: "d25c95e0-634d-0135-c7b5-2720b05a92fb",
    slug: "the-opium-trail",
  },
  {
    uuid: "8b824bd0-8aa5-0135-46df-41591abbf636",
    slug: "thomas-hardy-collection-of-papers",
  },
  {
    uuid: "3c10a960-6666-0135-df59-6744257d3222",
    slug: "griechische-vasenmalerei",
  },
  {
    uuid: "2a55a0b0-f6db-0134-8a2a-6f15f7d4f875",
    slug: "portraits-of-american-composers",
  },
  {
    uuid: "fac3c190-6b0e-0135-4104-513f1c5a7093",
    slug: "art-and-artifacts-division-button-collection",
  },
  {
    uuid: "5dd09610-f6db-0134-5820-017612a04372",
    slug: "margaret-carson-papers",
  },
  {
    uuid: "c1695580-6b1f-0135-2468-677f16aece30",
    slug: "correspondence-relating-to-toscaninis-refusal-on-feb-16-1938-to-return",
  },
  {
    uuid: "0bf2e410-6b2a-0135-2855-2db9fbe3cb3f",
    slug: "a-f-r-lawrence-papers",
  },
  {
    uuid: "37ee4340-1f9e-0134-b8c0-00505686a51c",
    slug: "the-grand-prix-video-danse-video-archive",
  },
  {
    uuid: "8d1c44b0-478f-0134-626a-00505686a51c",
    slug: "nicolas-petrov-video-archive",
  },
  {
    uuid: "dbdcd900-8a8a-0135-1932-11f54b676f4d",
    slug: "eugene-loring-video-archive",
  },
  {
    uuid: "22e5f750-c606-012f-d249-58d385a7bc34",
    slug: "louisa-picquet-the-octoroon-or-inside-views-of-southern-domestic-life",
  },
  {
    uuid: "ae468f40-8762-0135-babe-1f48a3f860e5",
    slug: "jeff-mcmahon-video-archive",
  },
  {
    uuid: "61294330-85ae-0135-b250-21bd9f681f70",
    slug: "jane-goldberg-video-archive",
  },
  {
    uuid: "6423f260-8a8d-0135-29ab-4f118ad5dde8",
    slug: "gabriella-komleva-video-archive",
  },
  {
    uuid: "94fd6a40-8a88-0135-73be-6d1d15f33bd4",
    slug: "elizabeth-streb-video-archive",
  },
  {
    uuid: "c52e3da0-85b3-0135-f1a5-23cc9125de8d",
    slug: "barbara-mettler-video-archive",
  },
  {
    uuid: "3568d370-543e-0135-c7c2-02b45faf905c",
    slug: "marco-rizo-papers",
  },
  {
    uuid: "318f9490-8b3c-0135-d645-0ed1624fd26d",
    slug: "christopher-chadman-collection",
  },
  {
    uuid: "4cb59000-84b8-0133-44d6-00505686a51c",
    slug: "ruth-page-video-archive",
  },
  {
    uuid: "3e886c00-8b3d-0135-6744-7b5bdc74a524",
    slug: "jonathon-appels-video-archive",
  },
  {
    uuid: "4a4ce020-8c20-0135-642d-0074d608a8d6",
    slug: "dwight-godwin-video-archive",
  },
  {
    uuid: "55f19d60-dcad-0133-60b4-00505686d14e",
    slug: "jay-gorney-scores",
  },
  {
    uuid: "fb4c2ee0-8b43-0135-4d85-04560fcb2698",
    slug: "john-kelly-video-archive",
  },
  {
    uuid: "79e17be0-8cfc-0135-fcd1-63719333a695",
    slug: "rebecca-kelly-video-archive",
  },
  {
    uuid: "534b9f40-1f9f-0134-dc1a-00505686a51c",
    slug: "the-michael-truppin-video-archive",
  },
  {
    uuid: "1a3c3640-8cf8-0135-1870-7fba703012c6",
    slug: "virginia-brooks-video-archive",
  },
  {
    uuid: "c948c7c0-8cf0-0135-d933-4d4b66dd2d47",
    slug: "pauline-koner-video-archive",
  },
  {
    uuid: "e3189990-90be-0135-55bf-4b299075133c",
    slug: "improvisations-unlimited-video-archive",
  },
  {
    uuid: "6ae86e20-8c21-0135-091a-0053186be529",
    slug: "jacobs-pillow-collection",
  },
  {
    uuid: "915e1c50-67db-0134-c2c0-00505686d14e",
    slug: "katharine-hepburn-papers",
  },
  {
    uuid: "ed321e70-60d7-0135-e4ed-317887771c5a",
    slug: "the-organ",
  },
  {
    uuid: "0f8e4160-5de7-0135-7a4a-7fda7370be86",
    slug: "city-of-san-francisco-oracle",
  },
  {
    uuid: "43aa5dc0-c6cc-012f-da38-3c075448cc4b",
    slug: "qisas-al-anbiy-2",
  },
  {
    uuid: "8c4b5520-c604-012f-d62e-58d385a7bc34",
    slug: "collection-of-30-photographs-and-snapshots-of-w-h-auden-chester-kallman-peter",
  },
  {
    uuid: "fc938480-c607-012f-6d5d-58d385a7bc34",
    slug: "lequivoco-stravagante",
  },
  {
    uuid: "31dd7f40-c603-012f-724d-58d385a7bc34",
    slug: "studies-in-jewish-bibliography-and-related-subjects",
  },
  {
    uuid: "4353a0e0-5120-0135-2e3e-6d11a2135d38",
    slug: "actors-directory-studio-guide",
  },
  {
    uuid: "5f524eb0-87b9-0133-ad87-00505686a51c",
    slug: "holograph-literary-fragments-and-notes-for-poems",
  },
  {
    uuid: "5bd5be60-21ed-0135-a695-65ceed5ce189",
    slug: "the-life-of-robert-fulton-by-cadwallader-d-colden-illustrated-by-thos-addis",
  },
  {
    uuid: "420c1f30-c622-012f-bf4c-58d385a7bc34",
    slug: "al-tashrh-bi-al-tasvr",
  },
  {
    uuid: "faa73de0-91a3-0135-2b8d-0dfefa4183ae",
    slug: "stereoscopic-views-from-steubenville-ohio",
  },
  {
    uuid: "ec427500-7c4e-0135-a53e-5dc68a3d114a",
    slug: "elizabeth-buehrmann-photographic-collection",
  },
  {
    uuid: "8498e5e0-957e-0135-09d6-6762e9b84876",
    slug: "photographs-of-yellowstone-national-park-by-t-w-ingersoll",
  },
  {
    uuid: "10072a90-b1ea-0135-33d2-2388615f464a",
    slug: "james-sibley-watsonthe-dial-papers",
  },
  {
    uuid: "53cb1410-1b86-0134-0c06-00505686a51c",
    slug: "riverside-dance-festival-video-archive",
  },
  {
    uuid: "9cafa160-84af-0133-296d-00505686d14e",
    slug: "anna-halprin-video-archive",
  },
  {
    uuid: "0a16ae00-c473-0134-a669-00505686d14e",
    slug: "bancker-plans",
  },
  {
    uuid: "3d05f900-c604-012f-7e1f-58d385a7bc34",
    slug: "f-hayl-al-tibb",
  },
  {
    uuid: "3f67a3c0-5863-0135-0e75-3723c2aba579",
    slug: "jo-mielziner-designs-and-technical-drawings",
  },
  {
    uuid: "0cceec20-9c86-0135-a5d0-196b384f9fb1",
    slug: "views-of-australia-and-new-zealand",
  },
  {
    uuid: "d6ba91a0-c6ce-012f-2170-58d385a7bc34",
    slug: "umewaka-maru-emaki",
  },
  {
    uuid: "45724160-c6c8-012f-9bf3-3c075448cc4b",
    slug: "c-a-muller-actors-portraits",
  },
  {
    uuid: "e19ff530-c6c5-012f-005b-3c075448cc4b",
    slug: "bible-apocalypse-with-gloss",
  },
  {
    uuid: "25f5f100-9d29-0133-19a8-00505686d14e",
    slug: "jelko-yuresha-video-archive",
  },
  {
    uuid: "5ecc85d0-d68d-0134-45ae-00505686d14e",
    slug: "gilbert-h-montague-collection-of-robert-fulton-manuscripts",
  },
  {
    uuid: "47bb34c0-c7fa-0135-b5af-45ebbb85b73b",
    slug: "elaine-summers-video-archive",
  },
  {
    uuid: "211070c0-8777-0135-e508-252f3aa1ef1d",
    slug: "mary-rodgers-guettel-collection-of-set-and-costume-designs1936-1965",
  },
  {
    uuid: "213e4990-91b4-0135-6f90-0292ee472d9d",
    slug: "20-photographs-by-eugne-atget-1856-1927",
  },
  {
    uuid: "8af2bf20-cd60-0135-b08f-4b66e6702f35",
    slug: "boudoir-card-photographs-of-portland-oregon",
  },
  {
    uuid: "87a0e8b0-c7dc-0135-782b-1dac41625432",
    slug: "american-telephone-and-telegraph-company-video-archive",
  },
  {
    uuid: "4ba60b90-c723-0135-8a04-29527da36132",
    slug: "frances-burney-darblay-collection-of-papers",
  },
  {
    uuid: "846ba530-c6bf-012f-203e-3c075448cc4b",
    slug: "sports",
  },
  {
    uuid: "3e94bc80-f78b-0134-14cc-03b95afd82f0",
    slug: "martin-worman-audiovisual-collection",
  },
  {
    uuid: "a10f6620-f8b4-0135-72f5-25a72658c852",
    slug: "prints-by-wenceslaus-holler",
  },
  {
    uuid: "0df1fff0-e41e-0135-02b8-5dd5ea654018",
    slug: "ada-bricktop-smith-photograph-collection",
  },
  {
    uuid: "ecbe7320-c0d6-0135-d8af-6df4906518e2",
    slug: "mexico-pintoresco-artistico-y-monumental",
  },
  {
    uuid: "d568f290-d2eb-0135-2dda-0891aa601a1b",
    slug: "david-belasco-papers",
  },
  {
    uuid: "e127eb80-ad2b-0135-ca2c-09bec38fb777",
    slug: "giotto-and-his-works-in-padua",
  },
  {
    uuid: "995f6060-d798-0130-3733-58d385a7bbd0",
    slug: "paul-jacobs-collection",
  },
  {
    uuid: "bfc47200-a08c-0135-74ef-6315d4844a58",
    slug: "picturesque-palestine-sinai-and-egypt-2",
  },
  {
    uuid: "5e5d8ce0-c653-0135-de36-19c5d78451cc",
    slug: "rare-book-divisions-printed-ephemera-collection",
  },
  {
    uuid: "90eb10c0-d914-0135-5d2a-0f74eecd0d4e",
    slug: "the-homesteader-motion-picture-stills-collection",
  },
  {
    uuid: "151e7a60-d92a-0135-c873-00db364c34e6",
    slug: "the-wages-of-sin-motion-picture-stills-collection",
  },
  {
    uuid: "0f54cd20-cd66-0135-79ea-7f191344cb79",
    slug: "album-of-photographs-of-oregon",
  },
  {
    uuid: "334e74a0-e511-0135-0107-316c562441cb",
    slug: "an-hebrew-and-english-lexicon-without-points",
  },
  {
    uuid: "002597e0-cee8-0135-e719-5d7eee88c5d6",
    slug: "cabin-in-the-sky-motion-picture-stills-collection",
  },
  {
    uuid: "3fc26ff0-d2f5-0135-a176-1d53f1c5e555",
    slug: "hallelujah-motion-picture-stills-collection",
  },
  {
    uuid: "c381ac90-d915-0135-9ce3-01be9fbf454b",
    slug: "imitation-of-life-motion-picture-stills-collection",
  },
  {
    uuid: "be6028d0-4e29-0135-df3c-3f7ba1e06010",
    slug: "john-robert-powers-publication",
  },
  {
    uuid: "8da72160-6bf8-0135-c9e4-03f0ba6d7e9a",
    slug: "paradisus-precum-selectarum",
  },
  {
    uuid: "b5c2f800-c802-0135-480e-0e1b9248ed6d",
    slug: "paris-atlas",
  },
  {
    uuid: "5be88b40-9fd9-0135-9a27-339fdabbcfd7",
    slug: "photographs-by-flix-bonfils",
  },
  {
    uuid: "ec889790-d916-0135-28ad-75c8b133e31c",
    slug: "the-jackie-robinson-story-motion-picture-stills-collection",
  },
  {
    uuid: "eb11be90-d484-0135-c778-0e5ff61b2959",
    slug: "the-peoples-voice-2",
  },
  {
    uuid: "2ff841d0-d5cf-0134-86b2-00505686d14e",
    slug: "vito-marcantonio-papers",
  },
  {
    uuid: "b66f4af0-a143-0135-7b62-045fd6af3d59",
    slug: "voyage-fait-par-ordre-du-roy-louis-xiv-dans-la-palestine",
  },
  {
    uuid: "5c0edf10-a236-0135-6387-069492af4f49",
    slug: "a-journey-from-aleppo-to-jerusalem",
  },
  {
    uuid: "39ec2ba0-ac7c-0135-f0d3-09ca4e309165",
    slug: "a-solemne-ioviall-disputation-theoreticke-and-practicke",
  },
  {
    uuid: "4c9cf9f0-e1ba-0135-7ff0-3f5dd032178c",
    slug: "americana-satire-and-humor",
  },
  {
    uuid: "4cc8d390-d84f-0135-922b-2db1c4b93d3c",
    slug: "asia-dance-project-video-archive",
  },
  {
    uuid: "4eee3cd0-ceda-0135-d103-0c5e293231be",
    slug: "big-fella-motion-picture-stills-collection",
  },
  {
    uuid: "e2213050-91a2-0135-69c9-6d20a88c8ece",
    slug: "boot-and-shoe-recorder",
  },
  {
    uuid: "438a4e40-85c8-0135-8c06-0a9df1245c54",
    slug: "cincinnati-sonst-und-jetzt",
  },
  {
    uuid: "045f0eb0-55d8-0135-cd12-11c8c791635d",
    slug: "crams-modern-reference-atlas-of-the-world",
  },
  {
    uuid: "b8f93730-e4df-0135-aa5b-0d391775e8f1",
    slug: "dearborn-independent",
  },
  {
    uuid: "14966b20-c403-0135-db63-51af4a28aba2",
    slug: "donald-saddler-papers",
  },
  {
    uuid: "6f949230-e43e-0135-858d-256ef4539640",
    slug: "ellis-rabb-papers",
  },
  {
    uuid: "5deaf530-3f10-0135-5c2a-39a3fa427c17",
    slug: "engineering-record-building-record-and-sanitary-engineer",
  },
  {
    uuid: "36c94420-df71-0135-b0f6-4d6943cd6ff3",
    slug: "ewart-guinier-photograph-collection",
  },
  {
    uuid: "9bfccab0-13f5-0135-4584-139d4d138cb5",
    slug: "george-h-budke-collection",
  },
  {
    uuid: "0f422260-d2f4-0135-d49c-6969b45e197f",
    slug: "gunsaulus-mystery-motion-picture-stills-collection",
  },
  {
    uuid: "56bc69f0-df7e-0135-0640-2bd68cfd70ff",
    slug: "harlem-theater-stills-collection",
  },
  {
    uuid: "f8b22bb0-c605-012f-f016-58d385a7bc34",
    slug: "illustrations-to-walt-whitmans-leaves-of-grass",
  },
  {
    uuid: "903dc7d0-9186-0135-d36f-73148982bd66",
    slug: "io-bapt-ferrarii",
  },
  {
    uuid: "786f63a0-c602-012f-421f-58d385a7bc34",
    slug: "la-prose-du-transsibrien-et-de-la-petite-jehanne-de-france",
  },
  {
    uuid: "739667d0-7551-0135-a056-018e92c5c76a",
    slug: "le-moniteur-de-la-mode",
  },
  {
    uuid: "056f8f80-4e24-0135-5c60-477630485f66",
    slug: "le-conchyliologie-or-histoire-naturelle-des-coquilles-de-mer-deau-dounce",
  },
  {
    uuid: "e6bf83d0-511c-0135-491c-23a5809ac1d6",
    slug: "mormon-miscellaneous-collection",
  },
  {
    uuid: "f9a4cde0-d918-0135-ec95-0cb7b7aa2ac1",
    slug: "murder-in-harlem-motion-picture-stills-collection",
  },
  {
    uuid: "6e828760-fd69-0135-f60d-0f91a4c2b890",
    slug: "peregrinatio-in-terram-sanctam-2",
  },
  {
    uuid: "7143d4c0-c401-0135-b724-0f48da15e66c",
    slug: "photographs-taken-for-standard-oil-company-of-new-jersey",
  },
  {
    uuid: "90e4b060-a2ed-0135-0695-298e144c80ec",
    slug: "prints-by-emil-nolde",
  },
  {
    uuid: "8f849440-5516-0135-9ab5-13bc209e7ff3",
    slug: "psalterium-cum-canticis",
  },
  {
    uuid: "bf606750-a14a-0135-cb4e-11d4fcce4b99",
    slug: "sanctorum-septem-dormientium-historia",
  },
  {
    uuid: "18d781a0-d91b-0135-d908-4f93a4ac481d",
    slug: "sanders-of-the-river-motion-picture-stills-collection",
  },
  {
    uuid: "09a44f80-df80-0135-7c99-3b4bc1f0c4da",
    slug: "shuffle-along-theater-stills-collection",
  },
  {
    uuid: "0935ae30-ac84-0135-cdda-21a56d5c2f4f",
    slug: "slum-clearance-progress-under-title-i",
  },
  {
    uuid: "baa827b0-bdac-0135-df2a-7170ebfcfaf3",
    slug: "summary-of-vital-statistics",
  },
  {
    uuid: "6fb2a770-d91c-0135-c715-07951cafe1b1",
    slug: "swing-motion-picture-stills-collection",
  },
  {
    uuid: "a5521720-cedc-0135-a3e5-739d8086d011",
    slug: "the-birth-of-a-nation-motion-picture-stills-collection",
  },
  {
    uuid: "60849be0-cd71-0135-828f-0b9cf34ad648",
    slug: "the-charlie-lucas-huberts-museum-archive",
  },
  {
    uuid: "0a3dfc50-32b1-0135-732d-076d9fbbcbdb",
    slug: "the-jewelers-circular",
  },
  {
    uuid: "79f7e340-7153-0135-65ee-043988754dcb",
    slug: "the-march-of-time-collection",
  },
  {
    uuid: "17777f40-d91a-0135-a8ee-79ef96efafd1",
    slug: "the-notorious-elinor-lee-motion-picture-stills-collection",
  },
  {
    uuid: "f00ad670-4d59-0135-3c36-001efc6da979",
    slug: "the-lonely-island",
  },
  {
    uuid: "eebd1210-a091-0135-28f6-7397b16ba469",
    slug: "trattato-delle-piante-immagini-de-sacri-edifizi-di-terra-santa",
  },
  {
    uuid: "a0d867d0-48a4-0135-a23c-7b5199b882db",
    slug: "two-years-before-the-mast",
  },
  {
    uuid: "d38d9b00-d91c-0135-31a5-237a667cd476",
    slug: "underworld-motion-picture-stills-collection",
  },
  {
    uuid: "eb72b1c0-9fe2-0135-1c30-5d38fcd1e3ce",
    slug: "voyage-au-levant",
  },
  {
    uuid: "76f3e430-551a-0135-a237-25322135221c",
    slug: "voyage-pittoresque-et-archologique-dans-la-partie-la-plus-intressante-du-mexique",
  },
  {
    uuid: "31eab0c0-ca04-0134-3c2a-00505686d14e",
    slug: "william-augustine-washington-letters",
  },
  {
    uuid: "f6c24890-d92a-0135-7257-0d3e2a583b59",
    slug: "within-our-gates-motion-picture-stills-collection",
  },
  {
    uuid: "9c7a1eb0-ef1c-0135-44ef-21e08ea86874",
    slug: "yvonne-patterson-and-william-dollar-papers",
  },
  {
    uuid: "2e2418f0-d9ec-0135-1064-4d4af730c773",
    slug: "a-narrative-of-the-lords-wonderful-dealings-with-john-marrant-a-black",
  },
  {
    uuid: "0f802f70-f63e-0135-31d7-174fc57c6cb1",
    slug: "national-audubon-society-records",
  },
  {
    uuid: "a283e720-a3ab-0130-04f3-58d385a7b928",
    slug: "a-critical-inquiry-into-ancient-armour",
  },
  {
    uuid: "d5ea44e0-6322-0130-d972-58d385a7bbd0",
    slug: "historical-sketch-of-the-freedmens-missions-of-the-united-presbyterian-church",
  },
  {
    uuid: "f2e42490-0db5-0136-8d0f-59b78fb464bb",
    slug: "avery-willard-photographs",
  },
  {
    uuid: "d2504470-33eb-0133-976e-00505686a51c",
    slug: "george-balanchine-foundation-interpreters-archive",
  },
  {
    uuid: "b536f670-600e-0135-d8bb-01ba24a9ff24",
    slug: "lorraine-hansberry-papers",
  },
  {
    uuid: "957568f0-0eab-0136-cd05-0172f44580ce",
    slug: "roger-wood-photographic-prints-of-dancers-and-dance-companies",
  },
  {
    uuid: "8b691580-ffa3-0135-2246-07754e251ef2",
    slug: "the-nature-printed-british-sea-weeds",
  },
  {
    uuid: "5c8b32d0-ffa9-0135-fe8a-047a3eecebcc",
    slug: "quarterly-journal-of-science-literature-and-art",
  },
  {
    uuid: "4d62a940-c9ca-0132-5bd8-58d385a7b928",
    slug: "exaltacion-de-la-divina-misericordia-en-la-milagrosa-renovacion-de-la-soberana",
  },
  {
    uuid: "28e83740-c605-012f-d6be-58d385a7bc34",
    slug: "harpers-history-of-the-war-in-the-philippines",
  },
  {
    uuid: "086fb030-c603-012f-b957-58d385a7bc34",
    slug: "japanese-homes-and-their-surroundings",
  },
  {
    uuid: "b1e4e030-c6e5-012f-c9d3-3c075448cc4b",
    slug: "morgan-and-marvin-smith-collection",
  },
  {
    uuid: "aecc0380-005a-0136-9eb9-593a5627bf30",
    slug: "transactions-and-proceedings-of-the-botanical-society-of-edinburgh",
  },
  {
    uuid: "34bea010-005f-0136-80c4-09a864aca6ff",
    slug: "proceedings-of-the-royal-philosophical-society-of-glasgow",
  },
  {
    uuid: "41d57e20-0066-0136-8549-07fa3476c3cb",
    slug: "the-mirror-of-literature-amusement-and-instruction",
  },
  {
    uuid: "100def70-d854-0135-9c93-0a7655af1b6b",
    slug: "auction-catalogs-numbered",
  },
  {
    uuid: "ef557d00-e1c8-0135-83cf-61a819179787",
    slug: "art-architecture-collection-works-of-art-files",
  },
  {
    uuid: "2eca28e0-3af0-0133-8438-00505686a51c",
    slug: "allgemeine-bauzeitung-mit-abbildungen",
  },
  {
    uuid: "c90cfed0-d2db-0135-bb13-41667b946fae",
    slug: "lenox-library-records",
  },
  {
    uuid: "436c55d0-0094-0136-31bb-5921c42ab6e6",
    slug: "blyde-inkomst-der-allerdoorluchtighste-koninginne-maria-de-medicis-tamsterdam",
  },
  {
    uuid: "6df9af00-c607-012f-dc2d-58d385a7bc34",
    slug: "le-follet",
  },
  {
    uuid: "30566e80-09c5-0136-2e06-0d3fa397ea91",
    slug: "rambles-in-the-path-of-the-steam-horse",
  },
  {
    uuid: "9a316b10-0aa6-0136-954a-3bd03c5d9676",
    slug: "biblia-sacra-vulgat-editionis-sixti-v-pont-max-jussu-recognita-et-clementis-viii",
  },
  {
    uuid: "fedb76e0-19a1-0136-c8f1-00a15589440f",
    slug: "goethes-schriften",
  },
  {
    uuid: "45d51c20-50ef-0134-f450-00505686a51c",
    slug: "a-monograph-of-the-work-of-mckim-mead-white-1879-1915",
  },
  {
    uuid: "c7163ee0-039d-0136-9584-3720f646593c",
    slug: "prison-association-of-new-york-records",
  },
  {
    uuid: "c4eb1760-d8be-0133-aec6-00505686d14e",
    slug: "mary-wollstonecraft-manuscript-material",
  },
  {
    uuid: "de8b3b60-c284-0135-01bc-33751ccfcc26",
    slug: "carl-van-vechten-slides",
  },
  {
    uuid: "9b502050-8e52-0134-0f3f-00505686a51c",
    slug: "dance-audio-archive",
  },
  {
    uuid: "1f168910-c6bb-012f-0e3e-58d385a7bc34",
    slug: "draper-collection-of-cuneiform",
  },
  {
    uuid: "be09ceb0-2938-0136-9e95-2d1b861a9aa5",
    slug: "frdric-auguste-bartholdi-papers",
  },
  {
    uuid: "227fb700-2a0c-0136-66e0-378030146b3d",
    slug: "eric-siday-collection-of-sound-recordings",
  },
  {
    uuid: "9491a090-fa18-0135-fd98-05f347313ee7",
    slug: "kitty-marion-papers",
  },
  {
    uuid: "3436bc00-2ad2-0136-2083-4d2c70454712",
    slug: "the-zulu-and-the-zayda-theater-stills-collection",
  },
  {
    uuid: "78a94730-2ece-0136-672f-0bd50e9b4080",
    slug: "new-music-quarterly-recordings",
  },
  {
    uuid: "841ff6a0-2c6b-0136-67e9-03114965abbf",
    slug: "henry-cowell-collection-of-noncommercial-recordings",
  },
  {
    uuid: "63924150-306b-0136-70f1-0d9dc8095160",
    slug: "riverton-houses-collection",
  },
  {
    uuid: "c0bb08e0-ff9e-0135-c1b4-001f89705757",
    slug: "illustrated-catalogue-of-statuary-fountains-vases-settees-etc-for-parks-gardens",
  },
  {
    uuid: "db0c6080-2932-0136-aea9-097dda0e341b",
    slug: "the-warsaw-signal",
  },
  {
    uuid: "058ea050-a09d-0135-bb23-6fdb83cfcd35",
    slug: "constantinople-and-the-scenery-of-the-seven-churches-of-asia-minor-illustrated",
  },
  {
    uuid: "5d943f30-3053-0136-f1cf-0b1886781559",
    slug: "collection-of-theatrical-correspondence-and-ephemera",
  },
  {
    uuid: "d0d6f5c0-3f51-0136-998f-0bded33ac7be",
    slug: "max-eastman-papers",
  },
  {
    uuid: "fa6c9a30-2ed5-0136-5655-0e795d9f5450",
    slug: "barbara-mae-watson-papers",
  },
  {
    uuid: "31386090-135d-0136-f0d7-7d7a8dfefe41",
    slug: "otto-f-hess-photographs",
  },
  {
    uuid: "a613e340-1a4f-0136-f6f4-6b8b75eebaa4",
    slug: "material-on-dr-solomon-andrews-flying-ship-aeron-and-the-aerial-navigation",
  },
  {
    uuid: "383b1710-2ad9-0136-6ea4-297c4e83a732",
    slug: "the-pictorial-life-of-benjamin-franklin",
  },
  {
    uuid: "59f8b370-40f4-0136-c766-1de671714d76",
    slug: "bugaku-zu",
  },
  {
    uuid: "e64e0be0-1fd5-0136-3699-658ffa7259d9",
    slug: "messages-of-the-records",
  },
  {
    uuid: "d9ae6e20-1688-0136-55d6-061f3ca48dc0",
    slug: "ted-shawn",
  },
  {
    uuid: "23cc9570-42c0-0133-4579-00505686a51c",
    slug: "leslies-official-history-of-the-spanish-american-war",
  },
  {
    uuid: "45704d90-42c4-0133-d56f-00505686a51c",
    slug: "the-masque-torn-off",
  },
  {
    uuid: "420422d0-8006-0133-fded-00505686d14e",
    slug: "the-worlds-work",
  },
  {
    uuid: "755afcc0-9897-0134-17a3-00505686a51c",
    slug: "robert-boucher-papers",
  },
  {
    uuid: "c1299500-47e5-0136-5615-7b4cfecfd6b8",
    slug: "club-cubano-inter-americano-photograph-collection",
  },
  {
    uuid: "a6ea30b0-b5ad-0130-3d5a-58d385a7bbd0",
    slug: "the-book-of-the-fair",
  },
  {
    uuid: "3d3446e0-faad-0133-34c3-00505686a51c",
    slug: "american-mural-painting",
  },
  {
    uuid: "2fdad8d0-faaf-0133-99c8-00505686a51c",
    slug: "antonio-allegri-da-correggio-from-the-german-of-dr-julius-meyer",
  },
  {
    uuid: "2fbabc10-faa9-0133-7f32-00505686a51c",
    slug: "art-and-handicraft-in-the-womans-building-of-the-worlds-columbian-exposition",
  },
  {
    uuid: "0538b700-faab-0133-9359-00505686a51c",
    slug: "diego-velazquez-and-his-times",
  },
  {
    uuid: "d624d710-e2b1-0135-841e-03f87f896cb9",
    slug: "new-york-shakespeare-festival-recordings-collection",
  },
  {
    uuid: "eb848160-1f51-0133-4cdd-58d385a7b928",
    slug: "truth-seeker",
  },
  {
    uuid: "78147940-ee15-0133-e758-00505686a51c",
    slug: "a-world-trade-center-in-the-port-of-new-york",
  },
  {
    uuid: "fd3718e0-c6cc-012f-da2e-58d385a7bc34",
    slug: "khulsah-i-suwar-i-abd-al-rahmn-al-sf",
  },
  {
    uuid: "61393150-e889-0133-495e-00505686a51c",
    slug: "modern-review",
  },
  {
    uuid: "0200d380-c6bb-012f-4dac-58d385a7bc34",
    slug: "khamsah",
  },
  {
    uuid: "44926f80-c6b9-012f-f0ec-58d385a7bc34",
    slug: "khamsah-2",
  },
  {
    uuid: "c480ba00-f51f-0133-8b1e-00505686a51c",
    slug: "the-jewish-encyclopedia",
  },
  {
    uuid: "602aae10-5153-0136-5afc-0e5695364f99",
    slug: "actors-workshop-and-repertory-theatre-of-lincoln-center-records",
  },
  {
    uuid: "94948db0-eee1-0133-3044-00505686a51c",
    slug: "andr-eglevsky-video-archive",
  },
  {
    uuid: "e52584b0-c492-0134-4c4b-00505686a51c",
    slug: "lamrique-dlivre",
  },
  {
    uuid: "bba40c90-0419-0134-6add-00505686a51c",
    slug: "the-london-journal-and-weekly-record-of-literature-science-and-art",
  },
  {
    uuid: "9b383fd0-509c-0136-02c5-3f4831af8a3c",
    slug: "george-avakian-and-anahid-ajemian-audio-collection",
  },
  {
    uuid: "d06e6d00-a474-0130-e97c-58d385a7bbd0",
    slug: "opere-2",
  },
  {
    uuid: "e8db8860-3b5e-0136-e0b8-025f3ff71c11",
    slug: "prints-by-charles-merrick-capps",
  },
  {
    uuid: "43340790-39df-0136-2dac-5d4e23e6e5ae",
    slug: "the-castellated-and-domestic-architecture-of-scotland-from-the-twelfth",
  },
  {
    uuid: "9b1c1720-3f5a-0136-5bae-0756c8d27c5b",
    slug: "the-practical-grocer",
  },
  {
    uuid: "1a7380b0-509c-0136-d180-0998dd413c1b",
    slug: "margaret-carson-audio-visual-materials",
  },
  {
    uuid: "1b336f20-3c42-0136-d091-73a746d17f16",
    slug: "nova-britannia",
  },
  {
    uuid: "864b93d0-85ca-0135-6fbc-7bee5317b584",
    slug: "genealogical-and-family-history-of-the-state-of-new-hampshire",
  },
  {
    uuid: "fe04e280-7ed5-0135-d872-6fa87af464cb",
    slug: "raphael-patai-papers",
  },
  {
    uuid: "253d3c50-2774-0134-9ec4-00505686a51c",
    slug: "biographical-sketches-in-cornwall",
  },
  {
    uuid: "e14f2ea0-2128-0134-26c3-00505686a51c",
    slug: "reports-of-officers-charter-by-laws-officers-committees",
  },
  {
    uuid: "77a61e00-db5d-0134-902a-13d5959d4e44",
    slug: "the-rhyme-of-ruth",
  },
  {
    uuid: "217344b0-d044-0134-e2b8-00505686a51c",
    slug: "ascension-du-mont-cervin-14-juillet-1865",
  },
  {
    uuid: "2ce15630-bc04-0135-99c7-6b978b10e685",
    slug: "charles-dickens-collection-of-papers-microfilm",
  },
  {
    uuid: "2e833c60-39c6-0136-fa78-27984ce09210",
    slug: "emergency-committee-in-aid-of-displaced-foreign-scholars-records",
  },
  {
    uuid: "40a71530-cfb1-0134-46b3-00505686d14e",
    slug: "the-book-of-jonah",
  },
  {
    uuid: "caf62de0-6739-0130-f8d0-58d385a7bbd0",
    slug: "a-collection-of-roma-engravings-1720-1780-ca",
  },
  {
    uuid: "822fd810-509c-0136-0cf8-21774024bc49",
    slug: "katharine-hepburn-audiovisual-materials",
  },
  {
    uuid: "646047f0-509c-0136-16cc-59d3bc184fea",
    slug: "oratorio-society-of-new-york",
  },
  {
    uuid: "275bd780-5086-0136-3bbb-051d502d9647",
    slug: "anna-letitia-barbauld-manuscript-material",
  },
  {
    uuid: "eabceef0-6e2f-0135-086d-31f795cffa26",
    slug: "elaine-summers-papers",
  },
  {
    uuid: "0ed4e240-509c-0136-8e2a-79e0a253f893",
    slug: "merce-cunningham-dance-foundation-collection-audio-materials",
  },
  {
    uuid: "bbd9f860-311f-0136-310a-0615bab6de1e",
    slug: "gaceta-de-puerto-principe",
  },
  {
    uuid: "396134f0-514d-0136-8a37-31d8d73b1685",
    slug: "american-apartment-houses-of-today",
  },
  {
    uuid: "d8f099c0-587f-0136-3b08-5f2bb65e9b9e",
    slug: "port-washington-public-library-gallery-talks",
  },
  {
    uuid: "e68df230-509c-0136-fb7d-2fc713dfb15a",
    slug: "behind-the-scenes-in-music-radio-program",
  },
  {
    uuid: "c19c0ed0-60fe-0136-a9b1-2d16d585d6d0",
    slug: "new-music-for-young-ensembles-recordings",
  },
  {
    uuid: "1253b6f0-c626-012f-c8f9-58d385a7bc34",
    slug: "africa",
  },
  {
    uuid: "d14df550-c6f4-012f-55bc-58d385a7bc34",
    slug: "one-hundred-distinguished-leaders",
  },
  {
    uuid: "8e6c4af0-0abc-0136-1e2c-0968bdf8c4a3",
    slug: "jerome-robbins-collection-of-graphic-works",
  },
  {
    uuid: "bb991e00-b04e-0135-9777-0139096115e9",
    slug: "jerome-robbins-personal-papers",
  },
  {
    uuid: "cdd39050-4618-0134-c53b-00505686d14e",
    slug: "percy-bysshe-shelley-manuscript-material",
  },
  {
    uuid: "eff2f9b0-e3bd-0133-e418-00505686d14e",
    slug: "twenty-one-manuscript-letters-to-lord-byron-from-venetian-women",
  },
  {
    uuid: "3e600000-df13-0133-e6ee-00505686d14e",
    slug: "timothy-shelley-manuscript-material",
  },
  {
    uuid: "da420020-d997-0133-7880-00505686d14e",
    slug: "fanny-silvestrini-manuscript-material-8-items",
  },
  {
    uuid: "e4198820-e3ae-0133-6ae9-00505686d14e",
    slug: "four-manuscript-letters-of-petition-to-lord-byron-from-venetian-strangers",
  },
  {
    uuid: "001d4130-dca2-0133-6fdd-00505686d14e",
    slug: "william-and-richard-dry-manuscript-material-4-items",
  },
  {
    uuid: "cda7f380-b5b9-0134-4d69-00505686a51c",
    slug: "album-del-ferrocarril-mexicano",
  },
  {
    uuid: "fc2c6240-d4e4-0133-786d-00505686d14e",
    slug: "edward-du-bois-manuscript-material-3-items",
  },
  {
    uuid: "70a984c0-dfbe-0133-f246-00505686d14e",
    slug: "john-keats-manuscript-material",
  },
  {
    uuid: "411f8960-d4ec-0133-d54c-00505686d14e",
    slug: "marianna-segati-manuscript-material-3-items",
  },
  {
    uuid: "fa010b90-d1f8-0134-a203-00505686a51c",
    slug: "report-by-the-trustees-of-the-library-on-the-fitness-of-the-english-high",
  },
  {
    uuid: "c49230c0-9259-0134-5954-00505686a51c",
    slug: "twin-territories",
  },
  {
    uuid: "9a90f580-d4c3-0133-ec5b-00505686d14e",
    slug: "andrea-magnarotto-manuscript-material-2-items",
  },
  {
    uuid: "79c03300-d7fd-0133-717a-00505686d14e",
    slug: "cardinal-rusconi-manuscript-material-4-items",
  },
  {
    uuid: "6820fe20-d979-0133-90a3-00505686d14e",
    slug: "catherine-gordon-byron-manuscript-material-10-items",
  },
  {
    uuid: "76659210-df30-0133-6796-00505686d14e",
    slug: "harriet-grove-manuscript-material",
  },
  {
    uuid: "41650060-509b-0136-8fb7-03e45ab5a3ac",
    slug: "jacob-druckman-collection-of-noncommercial-sound-recordings",
  },
  {
    uuid: "39321b70-dd86-0133-e5e6-00505686d14e",
    slug: "john-frank-newton-manuscript-material-2-items",
  },
  {
    uuid: "a2570660-de4a-0133-d4a2-00505686d14e",
    slug: "joseph-hume-somerset-house-clerk-manuscript-material",
  },
  {
    uuid: "4daca4b0-dcb7-0133-529e-00505686d14e",
    slug: "margaret-nicholson-manuscript-material",
  },
  {
    uuid: "c1add710-d74c-0133-0c62-00505686d14e",
    slug: "margherita-cogni-manuscript-material-2-items",
  },
  {
    uuid: "ccb75b90-d989-0133-98a1-00505686d14e",
    slug: "marina-querini-benzon-manuscript-material-3-items",
  },
  {
    uuid: "7c7451b0-dfc5-0133-d9c6-00505686d14e",
    slug: "mary-robinson-manuscript-material",
  },
  {
    uuid: "59f21310-d7e9-0133-f393-00505686d14e",
    slug: "odoardo-machirelli-manuscript-material-2-items",
  },
  {
    uuid: "25b1f240-ced4-0134-3e7b-00505686a51c",
    slug: "segunda-comedia-de-celestina",
  },
  {
    uuid: "b8d6bd50-e248-0133-96b2-00505686d14e",
    slug: "andrew-kippis-manuscript-material",
  },
  {
    uuid: "feac7f60-8b4d-0135-6528-4778f344d5f5",
    slug: "bygone-liverpool",
  },
  {
    uuid: "c50b38e0-da5d-0133-92bc-00505686d14e",
    slug: "charles-lamb-manuscript-material-10-items",
  },
  {
    uuid: "f9c5cee0-dd8e-0133-280a-00505686d14e",
    slug: "cornelia-newton-manuscript-material-1-item",
  },
  {
    uuid: "1c939e90-e2ef-0133-ad14-00505686d14e",
    slug: "creak-capel-manuscript-material",
  },
  {
    uuid: "dec3a4e0-e253-0133-6a6b-00505686d14e",
    slug: "daniel-mkinnen-manuscript-material",
  },
  {
    uuid: "12a0f320-6e1f-0134-7e24-00505686a51c",
    slug: "essai-sur-les-causes-de-la-rvolution-et-des-guerres-civiles-dhayti",
  },
  {
    uuid: "b0bab9e0-d80c-0133-2fe2-00505686d14e",
    slug: "george-dyson-manuscript-material",
  },
  {
    uuid: "d4116670-dcd5-0133-45af-00505686d14e",
    slug: "harriet-collins-boinville-manuscript-material-1-item",
  },
  {
    uuid: "34ba96b0-dcc6-0133-0540-00505686d14e",
    slug: "harriet-westbrook-shelley-manuscript-material-3-items",
  },
  {
    uuid: "aeb5fc20-e241-0133-dd09-00505686d14e",
    slug: "harry-buxton-forman-manuscript-material",
  },
  {
    uuid: "e4cc5330-d9af-0133-6d36-00505686d14e",
    slug: "henry-brougham-1st-baron-brougham-and-vaux-manuscript-material-15-items",
  },
  {
    uuid: "0b199e90-da71-0133-e250-00505686d14e",
    slug: "henry-leigh-hunt-manuscript-material-6-items",
  },
  {
    uuid: "4ed09240-e2f3-0133-7802-00505686d14e",
    slug: "henry-willey-reveley-manuscript-material",
  },
  {
    uuid: "f1c8f550-dd91-0133-0047-00505686d14e",
    slug: "horace-smith-manuscript-material-81-items",
  },
  {
    uuid: "e55bb160-da40-0133-615e-00505686d14e",
    slug: "isabella-teotochi-albrizzi-manuscript-material-3-items",
  },
  {
    uuid: "b97bcae0-da78-0133-c0ae-00505686d14e",
    slug: "j-a-hessey-manuscript-material-5-items",
  },
  {
    uuid: "a2823320-de4a-0133-9d3d-00505686d14e",
    slug: "james-lind-manuscript-material",
  },
  {
    uuid: "e1dab0b0-e24f-0133-99d5-00505686d14e",
    slug: "john-keenan-manuscript-material",
  },
  {
    uuid: "27db9440-e2f7-0133-0fdd-00505686d14e",
    slug: "john-mackenzie-kennedy-manuscript-material",
  },
  {
    uuid: "bf9d95a0-e300-0133-815d-00505686d14e",
    slug: "joseph-kennerley-manuscript-material",
  },
  {
    uuid: "c9ad1fd0-da4e-0133-61d0-00505686d14e",
    slug: "madame-de-stal-manuscript-material-5-items",
  },
  {
    uuid: "e2603a60-d817-0133-f54f-00505686d14e",
    slug: "marianne-hunt-manuscript-material-10-items",
  },
  {
    uuid: "cd81d4b0-e24c-0133-0a5e-00505686d14e",
    slug: "mary-elizabeth-robinson-manuscript-material",
  },
  {
    uuid: "18545210-e53f-0133-d2ce-00505686d14e",
    slug: "pynson-wilmot-longdill-manuscript-material",
  },
  {
    uuid: "43a9cec0-da6a-0133-89bd-00505686d14e",
    slug: "r-w-hayward-manuscript-material-1-item",
  },
  {
    uuid: "254a4bc0-dcda-0133-9d0a-00505686d14e",
    slug: "robert-clarke-manuscript-material-1-item",
  },
  {
    uuid: "ea336250-dd7c-0133-c813-00505686d14e",
    slug: "samuel-romilly-manuscript-material-1-item",
  },
  {
    uuid: "d595e290-c606-012f-959e-58d385a7bc34",
    slug: "the-saturday-evening-post",
  },
  {
    uuid: "a3a6e510-803d-0135-6925-555f30887b76",
    slug: "the-story-of-a-blind-inventor",
  },
  {
    uuid: "aea4fc70-e304-0133-0c3b-00505686d14e",
    slug: "thomas-charters-manuscript-material",
  },
  {
    uuid: "ef68ac00-e2e9-0133-3a97-00505686d14e",
    slug: "thomas-hume-manuscript-material",
  },
  {
    uuid: "51538ba0-e184-0134-33f2-715732dba123",
    slug: "traduzione-del-lamento-di-torquato-tasso-di-lord-byron-e-riposta-di-leonora-di",
  },
  {
    uuid: "d1009e10-e541-0133-e82f-00505686d14e",
    slug: "william-hazlitt-manuscript-material",
  },
  {
    uuid: "0b20cf60-b676-0134-9da0-00505686a51c",
    slug: "history-of-the-pequot-war",
  },
  {
    uuid: "30132d30-212b-0134-3525-00505686a51c",
    slug: "the-englishwomans-domestic-magazine",
  },
  {
    uuid: "bc5dbde0-c3ea-0134-2960-00505686a51c",
    slug: "catskill-aqueduct-croton-division",
  },
  {
    uuid: "c9ce6f00-c604-012f-2011-58d385a7bc34",
    slug: "nevves-from-america-or-a-new-and-experimentall-discoverie-of-new-england",
  },
  {
    uuid: "da7d5940-1fcd-0136-6ebb-11971ba7ad5c",
    slug: "prize-appeals",
  },
  {
    uuid: "1ec839c0-3e01-0133-45a4-00505686a51c",
    slug: "antonia-clairmont-manuscript-material",
  },
  {
    uuid: "ec0dba10-2096-0136-94fb-31b3df87fd36",
    slug: "asie-centrale",
  },
  {
    uuid: "56185c10-509c-0136-3676-15cc6fe47a46",
    slug: "first-national-congress-on-women-in-music-recordings",
  },
  {
    uuid: "8d59c650-5b94-0136-5efe-476e6d55f8de",
    slug: "an-imperative-duty",
  },
  {
    uuid: "bf81d920-5222-0136-979e-08393ae7fb8d",
    slug: "forces-productives-et-commerciales-de-la-france",
  },
  {
    uuid: "1b358810-5221-0136-75d3-08bd08a1169c",
    slug: "irish-railway-commission",
  },
  {
    uuid: "4f556440-41a1-0136-c45f-3740763adfff",
    slug: "mishnayot-mi-seder-zeraim",
  },
  {
    uuid: "c30d4ee0-5099-0136-fc65-041fd87cbf8e",
    slug: "little-orchestra-society-concert-recordings-collection",
  },
  {
    uuid: "4777b810-509c-0136-bc6f-071a6e363303",
    slug: "interviews-for-the-book-theyre-playing-our-song",
  },
  {
    uuid: "23117da0-508b-0136-a730-258d741993f1",
    slug: "afr-lawrence-collection-of-historical-spoken-word",
  },
  {
    uuid: "979f2950-508c-0136-60d4-001f14a7d7f1",
    slug: "alexander-scourby-collection",
  },
  {
    uuid: "a71731e0-509c-0136-72cf-6db9c4badfcd",
    slug: "germany-today-radio-program",
  },
  {
    uuid: "3b52f610-509b-0136-c762-112b2c22fc56",
    slug: "carolyn-leigh-papers-and-sound-recordings-1944-1985",
  },
  {
    uuid: "52b2c3c0-509b-0136-46e1-5d60313e1374",
    slug: "anna-balos-collection-of-non-commercial-recordings",
  },
  {
    uuid: "3f38db90-5099-0136-4c6d-6198a81d1685",
    slug: "lewis-archibald-collection-of-recorded-interviews",
  },
  {
    uuid: "c7206500-1664-0136-2286-75b9396420ec",
    slug: "century-flashlight-photographers-circus-photographs-2",
  },
  {
    uuid: "773a4520-73e1-0136-fc71-03bfab749590",
    slug: "ascap-sponsored-radio-interviews-with-musicians-and-composers-collection",
  },
  {
    uuid: "e2a1bea0-5099-0136-a2ba-1180567f76cb",
    slug: "collegiate-chorale-collection-of-performance-recordings",
  },
  {
    uuid: "31d19c50-509c-0136-05e4-2d3c3514649d",
    slug: "music-from-germany-radio-program",
  },
  {
    uuid: "11e8e660-509b-0136-6860-5b7622793839",
    slug: "ross-lee-finney-collection-sound-and-video-recordings1938-1986",
  },
  {
    uuid: "afc1a800-5099-0136-f24d-67119749e280",
    slug: "leida-snow-collection-of-audio-interviews-and-reports-on-theater-culture",
  },
  {
    uuid: "17926780-509b-0136-9fcb-7512a91ef692",
    slug: "lawrence-and-lee-collection-of-broadcast-recordings",
  },
  {
    uuid: "a3634120-2b62-0134-ce55-00505686a51c",
    slug: "win-the-war-cook-book",
  },
  {
    uuid: "68d66310-65b4-0136-f6ce-71d624269869",
    slug: "gibsons-guide-and-directory-of-the-state-of-louisiana",
  },
  {
    uuid: "dfb5c660-9fa6-0134-e812-00505686a51c",
    slug: "proceedings-of-the-international-anti-vivisection-and-animal-protection-congress",
  },
  {
    uuid: "f33ba360-509c-0136-34eb-75d68d417214",
    slug: "luther-sies-collection",
  },
  {
    uuid: "74249090-509c-0136-2ca3-23c85357e38b",
    slug: "philip-sterling-research-materials-on-bert-williams-collection-of-sound",
  },
  {
    uuid: "dd374690-5099-0136-9904-035451ff7b98",
    slug: "national-orchestral-association-collection-of-rehearsal-and-concert-recordings",
  },
  {
    uuid: "325e3fc0-c607-012f-975a-58d385a7bc34",
    slug: "new-york-journal-american",
  },
  {
    uuid: "1d3596b0-509b-0136-9c1d-41d81068936e",
    slug: "jan-peerce-collection-of-sound-recordings1932-1983",
  },
  {
    uuid: "c304a470-509c-0136-d088-41d2d0988039",
    slug: "hugo-weisgall-collection-of-noncommercial-recordings",
  },
  {
    uuid: "fc4c8cd0-5099-0136-3366-0a5efe62d9fa",
    slug: "collection-of-audio-interviews-about-bobby-clark",
  },
  {
    uuid: "0ce6f820-7891-0136-8464-4d9b9ef48129",
    slug: "journal-of-researches-into-the-natural-history-and-geology-of-the-countries",
  },
  {
    uuid: "faa149b0-65ba-0136-0972-6de2d6fedaf6",
    slug: "rivista-di-discipline-carcerarie-e-correttive-in-rapporto-con-lantropologia",
  },
  {
    uuid: "23b798f0-8ebb-0136-96ed-29c7fa3eb1e6",
    slug: "mikhail-mordkin-papers",
  },
  {
    uuid: "58051080-509b-0136-2980-04f9a528a784",
    slug: "teiji-it-collection-of-noncommercial-recordings",
  },
  {
    uuid: "00e47d90-509d-0136-7d74-2f4b37dccfd4",
    slug: "edison-white-wax-cylinders-collection",
  },
  {
    uuid: "cbeee2a0-6db9-0136-fa48-023385374b9b",
    slug: "the-afro-american",
  },
  {
    uuid: "38f8e830-9813-0136-6cd3-337d2a738a4d",
    slug: "brooke-hayward-papers",
  },
  {
    uuid: "e853f270-77d5-0136-b4ca-0bfdca6a197f",
    slug: "le-magasin-des-enfants",
  },
  {
    uuid: "f26d6da0-8d24-0136-70e8-5744dd5470e4",
    slug: "general-view-of-the-agriculture-of-hampshire",
  },
  {
    uuid: "3ed11f40-7e45-0136-cc6c-3548d9501f8e",
    slug: "stammbuch-der-frankfurter-juden",
  },
  {
    uuid: "31154590-c605-012f-f89a-58d385a7bc34",
    slug: "the-political-censor",
  },
  {
    uuid: "bf3ceab0-a308-0136-0678-535497b6c810",
    slug: "john-millington-synge-collection-of-papers",
  },
  {
    uuid: "a9ea3f30-9a5d-0136-1a07-63a3fa47f230",
    slug: "manual-of-the-botany-of-the-northern-united-states",
  },
  {
    uuid: "e38e7d20-8dfe-0136-bcd1-029c07b456df",
    slug: "artkraft-strauss-records",
  },
  {
    uuid: "6a847d40-6ce7-0136-7264-418caa3a474f",
    slug: "sir-arthur-conan-doyle-collection-of-papers",
  },
  {
    uuid: "9f5c9170-8d00-0136-e17d-1725a6cfacca",
    slug: "a-system-of-architectural-ornament-according-with-a-philosophy-of-mans-powers",
  },
  {
    uuid: "d95d2550-9289-0136-ea65-07b587623937",
    slug: "american-international-music-fund-recording-guarantee-project",
  },
  {
    uuid: "5bb33970-509b-0136-fcaf-533457556ee5",
    slug: "equity-library-theatre-collection-of-performance-recordings",
  },
  {
    uuid: "f2b88770-8d03-0136-d5e7-2d2eabfd852c",
    slug: "moby-dick",
  },
  {
    uuid: "e035f9a0-886c-0136-71df-0ab2ed7dbf30",
    slug: "gypsy-music",
  },
  {
    uuid: "dc844240-02b2-0136-26c0-792b4842cec8",
    slug: "a-curious-herbal",
  },
  {
    uuid: "f8819070-9b4c-0136-8c66-11edddbb52ef",
    slug: "india-the-beauties-of-lucknow",
  },
  {
    uuid: "5e44e1d0-401b-0136-84c2-59b7faa7dc95",
    slug: "martin-worman-papers",
  },
  {
    uuid: "0fe23bf0-509d-0136-9543-27b538414b63",
    slug: "benedict-stambler-memorial-archive-of-jewish-music-and-theatre",
  },
  {
    uuid: "1b220ea0-509d-0136-1125-0f5bfe7757b3",
    slug: "jan-holcman-collection",
  },
  {
    uuid: "296e1a60-509d-0136-2e4f-1780ba44b764",
    slug: "seth-bingham-collection-of-sound-recordings",
  },
  {
    uuid: "b9d5c1f0-35bb-0136-44ca-06121bd98efa",
    slug: "collection-of-broadside-real-estate-maps-announcing-auctions-of-lots-in-early",
  },
  {
    uuid: "5ed4d510-b864-0136-17c0-63a87b208d20",
    slug: "aviva-slesin-collection-of-research-and-production-materials-for-the-ten-year",
  },
  {
    uuid: "e77396f0-8469-0136-49df-279062e653d4",
    slug: "moe-berg-papers",
  },
  {
    uuid: "fb8448b0-9db5-0136-41d6-67ac8a4d9089",
    slug: "a-dictionary-of-arts-manufactures-and-mines",
  },
  {
    uuid: "866c6db0-bb78-0136-f6a0-0df72cc0219d",
    slug: "images-of-the-new-york-city-opera",
  },
  {
    uuid: "9bff5570-9290-0136-74f0-5dd6841e6f4e",
    slug: "horace-newton-allen-papers",
  },
  {
    uuid: "bf53a070-a7e5-0136-1822-1315f4c92e60",
    slug: "voyage-dans-lhmisphre-austral-et-autour-du-monde",
  },
  {
    uuid: "ed569050-41b1-0136-a355-75fa5fcadf17",
    slug: "augusta-melville-papers",
  },
  {
    uuid: "e3957110-c33e-0136-4707-2d4af1fd32af",
    slug: "horace-greeley-papers",
  },
  {
    uuid: "13791770-77cd-0136-7f1f-00075594f300",
    slug: "the-boxing-blade",
  },
  {
    uuid: "4ebc6670-86c0-0136-ebea-0f4768d9727a",
    slug: "le-muse-franais",
  },
  {
    uuid: "b71f4180-9839-0136-545f-1192ae12b990",
    slug: "yi-a-lao-wei-pu-sa-jing",
  },
  {
    uuid: "e86316f0-a3ee-0136-b3a0-009792b17e8e",
    slug: "a-faithful-account-of-the-processions-and-ceremonies-observed-in-the-coronation",
  },
  {
    uuid: "2a392b00-a26e-0136-fb8d-23b45d8ea932",
    slug: "an-archological-index-to-remains-of-antiquity-of-the-celtic-romano-british",
  },
  {
    uuid: "e3abac90-a886-0136-0ddf-0d12357161b4",
    slug: "history-of-england",
  },
  {
    uuid: "070e5a90-a3e7-0136-5bc2-7be9a6f27cc8",
    slug: "the-military-costume-of-europe",
  },
  {
    uuid: "4a97cea0-10ad-0135-a349-51eb7763f8d0",
    slug: "brown-brothers-company-records",
  },
  {
    uuid: "fe00a960-b9ea-0136-c331-0121e220c8c0",
    slug: "a-plain-and-practical-treatise-on-the-epidemic-cholera",
  },
  {
    uuid: "21af3c30-4b19-0136-5971-6132d526f9d6",
    slug: "illustrirte-zeitung",
  },
  {
    uuid: "9f867530-a7de-0136-d14a-31622596f22b",
    slug: "valentines-manual-of-old-new-york",
  },
  {
    uuid: "1e85fcd0-98cf-0136-783c-41cd6b50bfd6",
    slug: "photographs-by-bedrich-grunzweig",
  },
  {
    uuid: "16000e00-a87b-0136-f681-1bbbacdf58ae",
    slug: "la-science-amusante",
  },
  {
    uuid: "f277f820-bdbd-0136-7bf2-3d6d7baf3235",
    slug: "les-franais-peints-par-eux-mmes",
  },
  {
    uuid: "da1855c0-aba9-0136-0adb-7d8f2144ead9",
    slug: "j-cleaveland-revived-poems-orations-epistles",
  },
  {
    uuid: "59077160-99c9-0136-c455-3fbec0aee915",
    slug: "nasa-photographs",
  },
  {
    uuid: "09901390-99bf-0136-5496-6948c638c333",
    slug: "galerie-astronomique",
  },
  {
    uuid: "ae1c7a10-aa14-0136-17aa-01ba8220bff6",
    slug: "the-three-presidencies-of-india",
  },
  {
    uuid: "931d8590-99c6-0136-63f6-2f979c85197e",
    slug: "transparencies-of-the-moon-from-negatives-made-at-the-lick-observatory",
  },
  {
    uuid: "7c27e6b0-da03-0136-aa99-007164e24047",
    slug: "ted-shawn-papers-additions",
  },
  {
    uuid: "e82e4600-b389-0136-fb7c-3d2dd8cc256f",
    slug: "emerson-family-papers",
  },
  {
    uuid: "935aa820-58f4-0135-97c9-3f8ef09c43b6",
    slug: "asadata-dafora-photograph-collection",
  },
  {
    uuid: "7d02a4c0-df7e-0136-03bf-1bb0706e5c4b",
    slug: "lawrence-brown-photograph-collection",
  },
  {
    uuid: "f81689d0-86bb-0136-81aa-03395fb06f33",
    slug: "sefer-mishle",
  },
  {
    uuid: "2be44660-e51b-0136-a562-02f697c80207",
    slug: "loie-fuller-papers",
  },
  {
    uuid: "a7b8a880-ac7d-0131-5d25-58d385a7b928",
    slug: "oswiecim-camp-of-death",
  },
  {
    uuid: "cbabb4d0-aad4-0136-3ff1-61eda7abb188",
    slug: "wizard-of-oz-costume-designs-and-illustrations1902-1907-and-undated",
  },
  {
    uuid: "813e05c0-aad1-0136-c61f-0d33f2e39ad2",
    slug: "color-transparencies-and-slides",
  },
  {
    uuid: "b71a8470-a31b-0136-b62d-1b4bd8a7b5a4",
    slug: "breviarivm-romanvm-ex-decreto-sacrosancti-concilij-tridentini-restitutum-pii-v",
  },
  {
    uuid: "b2209fe0-cb4b-0136-04dc-17c4e380f2f2",
    slug: "the-new-broadway-magazine",
  },
  {
    uuid: "c456eb30-cf0a-0136-1a48-39ce42cfffdc",
    slug: "the-story-of-the-lopez-family",
  },
  {
    uuid: "5c014a40-a529-0130-8b20-58d385a7b928",
    slug: "a-journey-to-the-earths-interior",
  },
  {
    uuid: "2afdbef0-a525-0130-f21b-58d385a7bbd0",
    slug: "etidorhpa-or-the-end-of-the-earth",
  },
  {
    uuid: "545beec0-6cec-0131-ed4d-58d385a7bbd0",
    slug: "exploration-of-the-valley-of-the-amazon",
  },
  {
    uuid: "2a1fffe0-09b3-0130-2426-58d385a7b928",
    slug: "le-vingtime-sicle",
  },
  {
    uuid: "8c85bc80-0042-0130-4099-58d385a7bc34",
    slug: "les-monumens-plus-celbres-de-rome-ancienne-et-les-quatre-basiliques-principales",
  },
  {
    uuid: "aa5cae10-c606-012f-a140-58d385a7bc34",
    slug: "le-guide-du-fabricant-de-meubles-et-du-dcorateur",
  },
  {
    uuid: "7249bc90-c606-012f-af5c-58d385a7bc34",
    slug: "the-wonderful-wizard-of-oz",
  },
  {
    uuid: "a165dff0-c608-012f-3378-58d385a7bc34",
    slug: "arts-architecture",
  },
  {
    uuid: "94d413e0-c607-012f-be5d-58d385a7bc34",
    slug: "sefer-elim",
  },
  {
    uuid: "6323a270-b5e2-0136-bbc5-53a0af7ab66d",
    slug: "felia-doubrovska-photographs",
  },
  {
    uuid: "ed4e8190-c607-012f-0014-58d385a7bc34",
    slug: "popular-science-monthly",
  },
  {
    uuid: "7ebd92a0-fb37-0136-2999-0ffa194d65f5",
    slug: "leon-bakst-designs",
  },
  {
    uuid: "efb45ba0-b5f9-0136-7e8f-397cf816b7b5",
    slug: "album-ddi-tamar-karsavina",
  },
  {
    uuid: "19e8cb30-c60a-012f-9ad4-58d385a7bc34",
    slug: "the-telephone-review",
  },
  {
    uuid: "6f26ac20-c607-012f-47a3-58d385a7bc34",
    slug: "les-rarets-des-indes",
  },
  {
    uuid: "02b6c310-a521-0130-1148-58d385a7bbd0",
    slug: "the-goddess-of-atvatabar",
  },
  {
    uuid: "5ab5e3c0-01e9-0131-ad1d-58d385a7bbd0",
    slug: "instructions-for-the-olina-or-mund-harmonica",
  },
  {
    uuid: "d2ddcdb0-0842-0131-b122-58d385a7b928",
    slug: "the-modern-musick-master-or",
  },
  {
    uuid: "f8d05ef0-c6b6-012f-47ea-3c075448cc4b",
    slug: "futh-al-haramayn",
  },
  {
    uuid: "13f79940-ce42-0136-1517-0fb4cffff1bf",
    slug: "album-de-mejico",
  },
  {
    uuid: "a7f3ac10-c59c-0136-ca81-3ba83711da98",
    slug: "newe-geometrische-vnd-perspectiuische-inuentiones-etlicher-sonderbahrer",
  },
  {
    uuid: "61ea6630-11b1-0135-a898-332cf6f5b431",
    slug: "elaine-stritch-papers",
  },
  {
    uuid: "52f3b630-dc7b-0136-3c40-31d52da97eac",
    slug: "poems-by-john-cleavland",
  },
  {
    uuid: "22cd2780-382e-0135-dcfa-0bdba8019f89",
    slug: "international-gay-information-center-collection-ephemera-organizations",
  },
  {
    uuid: "371b2ab0-ecde-0136-a2d5-011f952de670",
    slug: "george-gordon-byron-lord-byron-manuscript-material",
  },
  {
    uuid: "30ee26c0-e141-0136-cf09-094c3bcc3ba6",
    slug: "robert-burns-and-william-nicol-burns-letters",
  },
  {
    uuid: "d332fc30-8850-0136-eae4-0a5e21495f2d",
    slug: "rodgers-and-hammerstein-archives-of-recorded-sound-clipping-files",
  },
  {
    uuid: "20d6e6b0-8868-0136-178d-7fa89e2f2db7",
    slug: "alan-shulman-papers",
  },
  {
    uuid: "b52a7790-e442-0136-6e58-7f782edbe41f",
    slug: "the-oracle",
  },
  {
    uuid: "66d9ca30-0b8a-0137-f788-03b52424d223",
    slug: "eunice-stoddard-papers",
  },
  {
    uuid: "7d8f5970-aeea-0136-1a62-39a9f9835c4a",
    slug: "ruth-page-photographic-scrapbooks",
  },
  {
    uuid: "a29aa9a0-f59a-0136-c361-5b81e2666cba",
    slug: "the-true-travels-adventures-and-observations-of-captaine-iohn-smith",
  },
  {
    uuid: "7f625260-f59c-0136-892b-055591295272",
    slug: "a-map-of-virginia",
  },
  {
    uuid: "ace57580-1132-0137-84aa-21e1eba6c1d5",
    slug: "edward-f-caldwell-lighting-company-records",
  },
  {
    uuid: "5fef8770-dc73-0136-ab6b-00f2866a2fec",
    slug: "robert-burns-collection-of-papers",
  },
  {
    uuid: "8f2c4550-1293-0137-a6e1-33e54d787cc4",
    slug: "new-york-shakespeare-festival-records",
  },
  {
    uuid: "bc08a340-3c07-0136-31e9-1d7ff933ca43",
    slug: "the-asmonean",
  },
  {
    uuid: "102830f0-f0fd-0136-8a21-31728f3aec69",
    slug: "description-des-principaux-endroites-de-la-mer-du-sud",
  },
  {
    uuid: "55d603d0-82ac-0135-7dfc-092a7af570c6",
    slug: "peoples-institute-records",
  },
  {
    uuid: "09aa4130-aa49-0136-3214-7f9263997978",
    slug: "cravath-swaine-moore-collection-of-historical-documents",
  },
  {
    uuid: "4dc136b0-b094-0136-8240-6bc0ef4ecdd6",
    slug: "alexander-jackson-davis-papers",
  },
  {
    uuid: "a43f6d70-3dac-0136-6e57-1f548cf1ab15",
    slug: "van-cortlandt-van-wyck-family-papers",
  },
  {
    uuid: "f82c22d0-1e5c-0137-35aa-0792cded7bb1",
    slug: "rosalyn-tureck-collection-of-sound-recordings",
  },
  {
    uuid: "b16793b0-0903-0136-e519-7b2b6ffacf6d",
    slug: "specimens-of-the-earliest-photographic-experiments-of-fox-talbot-and-the-french",
  },
  {
    uuid: "25e1f660-0550-0137-ad09-63dbf7953283",
    slug: "prints-by-adrian-collaert",
  },
  {
    uuid: "5e54a6d0-0547-0137-e655-2b1437e362dc",
    slug: "prints-by-hans-bol",
  },
  {
    uuid: "62be40c0-e6e3-0136-cea9-07f3221ddb1d",
    slug: "constantine-photograph-collection",
  },
  {
    uuid: "ec1ebd30-e6e0-0136-973e-055cb448fc7f",
    slug: "john-martin-papers",
  },
  {
    uuid: "720bbb50-0556-0137-f95c-1f21ca65d1d2",
    slug: "prints-by-jacob-matham",
  },
  {
    uuid: "b50810b0-0bc0-0134-41c1-00505686d14e",
    slug: "walter-terry-papers",
  },
  {
    uuid: "1dfa8d10-2666-0137-2a6d-2798826bc3ba",
    slug: "joffrey-ballet-video-archive",
  },
  {
    uuid: "e206e020-0d23-0137-09a5-1b634b6eec10",
    slug: "a-j-swayne-anonymous-ladys-friendship-album",
  },
  {
    uuid: "098d0940-1373-0137-2ce2-57a714b527ba",
    slug: "jay-gorney-papers",
  },
  {
    uuid: "82e7cb90-df8c-0135-8b1d-7f81b13cd55a",
    slug: "stevedore-theater-stills-collection",
  },
  {
    uuid: "fff83e40-db06-0136-0d2f-05b697bb1f25",
    slug: "a-compleat-history-of-druggs",
  },
  {
    uuid: "c99d4640-33b6-0137-1258-03b42c6d89fb",
    slug: "babette-edwards-education-reform-in-harlem-collection",
  },
  {
    uuid: "d0e0a950-dbbf-0136-d3c2-00db27b15c60",
    slug: "emily-ellsworth-ford-skeel-papers",
  },
  {
    uuid: "4cc4f970-e2c6-0136-809e-438ff09d9b8d",
    slug: "eugenia-hughes-papers",
  },
  {
    uuid: "e2b543b0-dd3a-0136-e922-13241c207565",
    slug: "nathan-straus-papers",
  },
  {
    uuid: "da5ddc10-c618-012f-b217-58d385a7bc34",
    slug: "jean-garrigue-collection-of-papers",
  },
  {
    uuid: "7db6e590-3220-0137-5fc8-7bc896e9764b",
    slug: "james-haughton-papers",
  },
  {
    uuid: "92153de0-2700-0137-f732-4334a722a7e6",
    slug: "duncan-isadora-programs",
  },
  {
    uuid: "8f466f40-2265-0137-c78c-77a02af6212d",
    slug: "drawings-by-william-wallace-denslow",
  },
  {
    uuid: "01997c60-0bb1-0137-1a26-59757ea73ea0",
    slug: "gallery-of-nature-and-art-or-a-tour-through-creation-and-science",
  },
  {
    uuid: "10bff5e0-18e7-0137-0c30-00ab99bcc565",
    slug: "american-clay-magazine",
  },
  {
    uuid: "934200a0-0bb6-0137-3719-217046f3feac",
    slug: "theorie-der-hofe-nebensonnen-und-verwandter-phanomene",
  },
  {
    uuid: "96f70000-3f5a-0137-603d-05b5f93c8848",
    slug: "gansevoort-lansing-collection",
  },
  {
    uuid: "808d4ff0-585d-0135-5e0c-7b92a785d14c",
    slug: "jo-mielziner-papers",
  },
  {
    uuid: "bc90ed10-45b8-0137-28c6-037631633e69",
    slug: "lee-kohns-collection",
  },
  {
    uuid: "e9562020-45ba-0137-8206-0feabf72d9f5",
    slug: "ruth-and-hermann-vollmer-papers",
  },
  {
    uuid: "596e09a0-45de-0137-0aab-334dac7fd4c8",
    slug: "august-belmont-papers",
  },
  {
    uuid: "924921a0-3cd0-0136-c557-0af54bc5b55e",
    slug: "the-reform-advocate",
  },
  {
    uuid: "ca543cc0-4a70-0137-3c67-1b4756f7c5bb",
    slug: "mitch-miller-collection-of-audio-and-moving-image",
  },
  {
    uuid: "18374c40-5d77-0137-9378-2796839c8188",
    slug: "susan-hess-modern-dance-lecture-series-video-archive",
  },
  {
    uuid: "bc0e6c60-54c4-0137-ecd7-6f4ec4464fcf",
    slug: "david-lichine-and-tatiana-riabouchinska-papers",
  },
  {
    uuid: "d7918940-5940-0137-a6ca-355c399b1b87",
    slug: "robert-fulton-collection",
  },
  {
    uuid: "6d6ac530-d3cf-0136-96ad-11b892b4a87a",
    slug: "arthur-bell-papers",
  },
  {
    uuid: "18c7fb50-21a3-0137-7a51-5ff7b985ad55",
    slug: "daily-mirror",
  },
  {
    uuid: "4a918060-38f3-0135-0758-0efe5a8ee080",
    slug: "international-gay-information-center-collection-ephemera-bars",
  },
  {
    uuid: "2bbeca90-54af-0137-f7ae-4364cae98076",
    slug: "ruth-clark-papers",
  },
  {
    uuid: "f320c8a0-20f3-0137-3468-7bdf98534193",
    slug: "demetrio-e-polibio",
  },
  {
    uuid: "4960b650-4832-0137-bf05-5554c4b9b1ab",
    slug: "eduardo-e-cristina",
  },
  {
    uuid: "2febbc70-6082-0137-9ffa-5f83c668b6ad",
    slug: "history-of-american-conspiracies",
  },
  {
    uuid: "1a7c0180-2f04-0137-9933-0072ca661993",
    slug: "sean-ocasey-collection-of-papers",
  },
  {
    uuid: "146f4350-38c0-0135-e524-19fb94aaee66",
    slug: "international-gay-information-center-collection-ephemera-subjects",
  },
  {
    uuid: "651a8950-41db-0137-bd7b-116d159241c0",
    slug: "le-guide-sam",
  },
  {
    uuid: "e8c07e00-48e2-0137-92ea-019b48ff544d",
    slug: "teatralny-portret-kontsa-xix-nachala-xx-veka",
  },
  {
    uuid: "895e04f0-3f8b-0133-8839-00505686a51c",
    slug: "ted-shawn-collection",
  },
  {
    uuid: "d0331a00-e589-012f-5363-58d385a7bbd0",
    slug: "the-story-of-a-cavalry-regiment",
  },
  {
    uuid: "0a26b4f0-003e-0130-b8f2-58d385a7bc34",
    slug: "nya-work-experience-activities-in-new-york-city",
  },
  {
    uuid: "907b3590-0036-0130-a4c5-58d385a7bc34",
    slug: "zoography",
  },
  {
    uuid: "0c6989c0-003e-0130-d8a6-58d385a7bc34",
    slug: "les-fleurs-et-leurs-applications-decoratives",
  },
  {
    uuid: "3e8b6bb0-0036-0130-46fb-58d385a7bc34",
    slug: "the-new-york-journal-or-general-advertiser",
  },
  {
    uuid: "ad9ef6e0-003d-0130-260b-58d385a7bc34",
    slug: "ocherk-zamiechatelnieshikh-drevnoste-voronezhsko-guberni",
  },
  {
    uuid: "a4e35310-003d-0130-bb5a-58d385a7bc34",
    slug: "libro-primo-vltimo-della-historia-de-lindie-occidentali",
  },
  {
    uuid: "e3fcc0e0-6535-0137-937d-0e9660dc84bf",
    slug: "albert-s-bard-papers",
  },
  {
    uuid: "39377560-f810-0136-3a8d-29dce8296dd9",
    slug: "the-arctic-regions",
  },
  {
    uuid: "f5311180-0031-0130-89db-58d385a7bc34",
    slug: "king-leopolds-rule-in-africa",
  },
  {
    uuid: "15c72d60-0033-0130-c491-58d385a7bc34",
    slug: "neglected-neighbors-stories-of-life-in-the-alleys-tenements-and-shanties",
  },
  {
    uuid: "63ab8bc0-c61e-012f-ddd0-58d385a7bc34",
    slug: "constance-lindsay-skinner-papers",
  },
  {
    uuid: "eecad090-3217-0137-6e67-7f7953f3db9a",
    slug: "exaltacion-de-la-divina-misericordia-en-la-milagrosa-renovacion-de-la-soberana-2",
  },
  {
    uuid: "15a9f7c0-20d1-0137-b51e-494cdcd84026",
    slug: "histoire-naturelle-des-orangers",
  },
  {
    uuid: "29466230-fbf2-0136-947c-538d185de65b",
    slug: "the-period-of-gods-work-on-this-planet",
  },
  {
    uuid: "216eff30-6f84-0133-9b03-00505686d14e",
    slug: "committee-of-fifteen-records",
  },
  {
    uuid: "a9ef1200-c62d-012f-8ba3-58d385a7bc34",
    slug: "matthew-arnold-collection-of-papers-1857-1888",
  },
  {
    uuid: "c1af35a0-3dbf-0137-318b-3bf1f16c41bd",
    slug: "the-works-of-william-e-channing",
  },
  {
    uuid: "3330f620-c626-012f-775a-58d385a7bc34",
    slug: "joseph-schillinger-papers-1918-2000",
  },
  {
    uuid: "1a837430-16aa-0137-3050-55c85a66108e",
    slug: "merrymans-monthly",
  },
  {
    uuid: "1bbbce30-3dc2-0137-91d5-00b9eb453c83",
    slug: "peter-gansevoort-jr-military-papers",
  },
  {
    uuid: "799a3520-c621-012f-8230-58d385a7bc34",
    slug: "william-schuman-papers-and-records",
  },
  {
    uuid: "f13bc750-2197-0137-e8d5-6df554faf34b",
    slug: "la-brique-et-la-terre-cuite",
  },
  {
    uuid: "2db64300-36bd-0137-937c-311d9eafbf55",
    slug: "pottery-and-glassware-reporter",
  },
  {
    uuid: "c5abb480-6eaf-0137-6d4c-41954963af6c",
    slug: "new-chamber-ballet",
  },
  {
    uuid: "c1cb3110-3784-0137-41d6-09812f36c062",
    slug: "virginia-woolf-collection-of-papers",
  },
  {
    uuid: "9cb69710-24cb-0137-cc60-2bb19dc75a3b",
    slug: "adeline-oppenheim-guimard-papers",
  },
  {
    uuid: "2f521dd0-36ba-0137-4504-0b3118223de4",
    slug: "the-clay-worker",
  },
  {
    uuid: "dbf1a9c0-84ae-0133-6de9-00505686a51c",
    slug: "saeko-ichinohe-video-archive",
  },
  {
    uuid: "19ed0b70-c6cf-012f-5269-58d385a7bc34",
    slug: "juni-rui-kassen-emaki",
  },
  {
    uuid: "e2173990-78ed-0137-faab-79a73c423591",
    slug: "prints-by-john-greenwood",
  },
  {
    uuid: "83daf9e0-fcca-0136-85f7-0df312d19899",
    slug: "master-humphreys-clock",
  },
  {
    uuid: "5b410320-79b7-0137-7e3f-008f16b5d7de",
    slug: "r-h-burnside-collection",
  },
  {
    uuid: "d6bf2ae0-7ff0-0137-6258-756da83bca96",
    slug: "lynching",
  },
  {
    uuid: "2c026450-5b75-0131-52dd-58d385a7bbd0",
    slug: "les-monumens-antiques-du-muse-napolon",
  },
  {
    uuid: "75ac6440-8433-0134-3a66-00505686a51c",
    slug: "ann-barzel-video-archive",
  },
  {
    uuid: "cc7e3ca0-65d9-0137-9bc4-0033363fbc14",
    slug: "bata-kindai-amgoza-ibn-lobagola-papers",
  },
  {
    uuid: "fbb4c5f0-c6b7-012f-232b-58d385a7bc34",
    slug: "konmara-jataka",
  },
  {
    uuid: "d4034f50-937f-0132-1289-58d385a7bbd0",
    slug: "a-series-of-character-sketches-from-dickens",
  },
  {
    uuid: "7301fb10-4d93-0137-e8b4-391e6af96ef8",
    slug: "rogue",
  },
  {
    uuid: "ce616bb0-c602-012f-9f85-58d385a7bc34",
    slug: "a-world-history-of-photography",
  },
  {
    uuid: "fe75ca80-af72-0130-6d1d-58d385a7b928",
    slug: "adolph-menzel-verzeichnis-seines-graphischen-werkes",
  },
  {
    uuid: "58d41b00-c6e0-012f-9b21-58d385a7bc34",
    slug: "albom-risunkov-k-puteshestviiu-na-amur-sovershennomu-ot-sibirskago-otdiela",
  },
  {
    uuid: "6e1cb150-4dbb-0137-241e-659854788d9d",
    slug: "election-ballots",
  },
  {
    uuid: "6ab58040-3c67-0137-3df3-7b225240548e",
    slug: "pavli-iovii-novocomensis-episcopi-nvcerini",
  },
  {
    uuid: "378fc480-8aee-0137-485b-1d1cdfe611bb",
    slug: "artur-michel-papers",
  },
  {
    uuid: "afac9660-89fa-0137-3456-21275428bbfb",
    slug: "bluestime-power-hour-videos",
  },
  {
    uuid: "4903d350-c615-012f-6ef2-58d385a7bc34",
    slug: "the-dark-continent-africa-the-landscape-and-the-people",
  },
  {
    uuid: "9d9d7c90-c6f7-012f-4a42-3c075448cc4b",
    slug: "les-laques-du-coromandel",
  },
  {
    uuid: "cb389f40-c6b5-012f-d34d-58d385a7bc34",
    slug: "papillons",
  },
  {
    uuid: "40009870-c6b8-012f-6c96-58d385a7bc34",
    slug: "insectes",
  },
  {
    uuid: "6ee6ab70-c626-012f-2896-58d385a7bc34",
    slug: "views-of-north-carolina-pennsylvania-florida-and-new-york-including-unidentified",
  },
  {
    uuid: "68872550-c623-012f-f9b9-58d385a7bc34",
    slug: "drawings-by-clark-ashton-smith",
  },
  {
    uuid: "e619b6e0-c622-012f-66ee-58d385a7bc34",
    slug: "original-drawings-for-paul",
  },
  {
    uuid: "5d148260-c628-012f-e3d2-58d385a7bc34",
    slug: "stroitelnaia-promyshlennost",
  },
  {
    uuid: "238255a0-c61e-012f-10b3-58d385a7bc34",
    slug: "a-school-history-of-the-negro-race-in-america-from-1619-to-1890-combined",
  },
  {
    uuid: "d00ff8a0-c625-012f-0c79-58d385a7bc34",
    slug: "bat-yeor-and-david-littman-papers-1961",
  },
  {
    uuid: "a0eca050-c609-012f-86a1-58d385a7bc34",
    slug: "the-north-carolina-chain-gang-a-study-of-county-convict-road-work",
  },
  {
    uuid: "f295c9d0-c608-012f-a43d-58d385a7bc34",
    slug: "stroitelstvo-moskvy",
  },
  {
    uuid: "0ce71c70-c608-012f-325a-58d385a7bc34",
    slug: "bilance-psychoanalysy",
  },
  {
    uuid: "6d863a40-c60a-012f-f83d-58d385a7bc34",
    slug: "die-rmischen-mosaiken-und-malereien-der-kirchlichen-bauten-vom-iv-bis-xiii",
  },
  {
    uuid: "43015850-c607-012f-62f4-58d385a7bc34",
    slug: "inventors-and-inventions",
  },
  {
    uuid: "a6e87f80-c602-012f-687a-58d385a7bc34",
    slug: "anita-bush-stock-company",
  },
  {
    uuid: "9c748380-c607-012f-f687-58d385a7bc34",
    slug: "arkhitektura-sssr",
  },
  {
    uuid: "0e6dc840-c604-012f-cc92-58d385a7bc34",
    slug: "au-dfaut-du-silence",
  },
  {
    uuid: "bf5788b0-9b13-0135-afb0-7974b8534fa1",
    slug: "berenice-abbott-papers",
  },
  {
    uuid: "f9323500-c604-012f-f380-58d385a7bc34",
    slug: "brotherhood-of-sleeping-car-porters-photograph-collection",
  },
  {
    uuid: "d142cb30-ddeb-0135-c70a-7fb37697ce10",
    slug: "goin-a-buffalo-theater-stills-collection",
  },
  {
    uuid: "462d6230-efe0-0134-165d-7f3be9d19d91",
    slug: "jack-butler-yeats-collection-of-papers",
  },
  {
    uuid: "bf6fecc0-c604-012f-7eff-58d385a7bc34",
    slug: "los-toros",
  },
  {
    uuid: "b15c7050-cd57-0130-c1df-58d385a7bbd0",
    slug: "paddy-chayefsky-papers",
  },
  {
    uuid: "3be79f10-b5ba-0130-35fe-58d385a7b928",
    slug: "return-to-yesterday",
  },
  {
    uuid: "bf81c040-c607-012f-8c6e-58d385a7bc34",
    slug: "saber-vivir",
  },
  {
    uuid: "8b70b460-c604-012f-6897-58d385a7bc34",
    slug: "urformen-der-kunst-photographische-pflanzenbilder",
  },
  {
    uuid: "f44cfbf0-c6ca-012f-47e8-58d385a7bc34",
    slug: "books-of-the-fellows-of-the-cullman-center-for-scholars-and-writers",
  },
  {
    uuid: "e0386e70-c616-012f-4000-58d385a7bc34",
    slug: "john-cage-music-manuscript-collection",
  },
  {
    uuid: "085329d0-c6ce-012f-f188-58d385a7bc34",
    slug: "le-vitrail-lexposition-internationale-des-arts-dcoratifs-paris-1925",
  },
  {
    uuid: "49d80030-c607-012f-f10f-58d385a7bc34",
    slug: "steuben-glass-collection",
  },
  {
    uuid: "829df610-c6cf-012f-8d6d-58d385a7bc34",
    slug: "le-croquis-original-album-spcial-de-carnaval",
  },
  {
    uuid: "60aaec30-c6ba-012f-5ef9-58d385a7bc34",
    slug: "philosophy-and-opinions-of-marcus-garvey-or-africa-for-the-africans",
  },
  {
    uuid: "642bbd70-1bea-0132-ff85-58d385a7b928",
    slug: "a-tour-of-duty-in-southern-europe",
  },
  {
    uuid: "81b0b460-c628-012f-3bf6-58d385a7bc34",
    slug: "theatre-for-walter-hartwig-esq-ogunquit-me-ogunquit-playhouse",
  },
  {
    uuid: "e7e583b0-ccc8-0131-1875-58d385a7bbd0",
    slug: "lhommedieu-family-genealogical-research-files",
  },
  {
    uuid: "d333e1e0-c61f-012f-6f18-58d385a7bc34",
    slug: "st-marks-united-methodist-church-collection",
  },
  {
    uuid: "bca37bc0-c61e-012f-153d-58d385a7bc34",
    slug: "portraits-and-caricatures",
  },
  {
    uuid: "fc47be40-c620-012f-a2d6-58d385a7bc34",
    slug: "portraits-of-artists-writers-musicians-composers-and-photographers",
  },
  {
    uuid: "f83f8540-c620-012f-6d16-58d385a7bc34",
    slug: "sidonia-the-sorceress",
  },
  {
    uuid: "90f072d0-7c22-0133-6405-00505686d14e",
    slug: "clark-m-eichelberger-papers",
  },
  {
    uuid: "0043fa50-c609-012f-5ab6-58d385a7bc34",
    slug: "hik-kann-the-sense-of-flying",
  },
  {
    uuid: "db3ed6c0-c608-012f-877b-58d385a7bc34",
    slug: "bert-bertram-scrapbooks",
  },
  {
    uuid: "a47dc560-bb88-0132-b066-58d385a7b928",
    slug: "charles-curtis",
  },
  {
    uuid: "4312ee20-c609-012f-bd2c-58d385a7bc34",
    slug: "drawings-by-james-daugherty",
  },
  {
    uuid: "6b3e47f0-acc5-0133-e3fa-00505686a51c",
    slug: "george-platt-lynes-photographic-scrapbooks",
  },
  {
    uuid: "7687fc80-19c0-0132-0e58-58d385a7b928",
    slug: "a-o-f-les-arts-les-mtiers-la-littrature-la-musique-de-lafrique-noire",
  },
  {
    uuid: "e6fedaf0-e574-0133-2739-00505686d14e",
    slug: "african-miscellaneous-collection",
  },
  {
    uuid: "39d8a8e0-0be6-0130-3de6-58d385a7b928",
    slug: "artwork",
  },
  {
    uuid: "e86480e0-c604-012f-0486-58d385a7bc34",
    slug: "candide-or-the-optimist-2",
  },
  {
    uuid: "138c6bf0-58a1-0133-246d-00505686a51c",
    slug: "college-humor",
  },
  {
    uuid: "36a66040-c603-012f-b844-58d385a7bc34",
    slug: "costume-designs-for-ziegfeld-midnight-frolic-1928",
  },
  {
    uuid: "7d0278c0-c606-012f-816d-58d385a7bc34",
    slug: "descendants-of-george-drake-and-mary-oliver",
  },
  {
    uuid: "efd6bce0-d414-0133-b102-00505686d14e",
    slug: "evelyn-waugh-collection-of-papers",
  },
  {
    uuid: "d8eb4b90-6966-0134-18dd-00505686a51c",
    slug: "experiencing-devekut",
  },
  {
    uuid: "bb90e650-452f-0134-3bc2-00505686a51c",
    slug: "hankow-herald",
  },
  {
    uuid: "320ea750-4bc3-0136-9050-4749fc1db5d8",
    slug: "international-labor-defense-photograph-collection",
  },
  {
    uuid: "53489cd0-a9ec-0134-9412-00505686d14e",
    slug: "john-latouche-papers",
  },
  {
    uuid: "b226f4e0-c609-012f-ecd0-58d385a7bc34",
    slug: "la-femme-100-ttes",
  },
  {
    uuid: "fa889d00-c603-012f-5894-58d385a7bc34",
    slug: "low-cost-housing-here-and-abroad-report-to-mayor-la-guardia-by-nathan-straus",
  },
  {
    uuid: "416b5540-92b7-0132-a168-58d385a7bbd0",
    slug: "mabel-dwight",
  },
  {
    uuid: "ce235110-29d0-0134-c5d4-00505686d14e",
    slug: "merce-cunningham-dance-company-choreographic-records",
  },
  {
    uuid: "b7a2ad60-582a-0134-df24-00505686d14e",
    slug: "moorish-science-temple-of-america-collection",
  },
  {
    uuid: "1ca45280-cea2-0133-cc9f-00505686d14e",
    slug: "richard-wright-collection",
  },
  {
    uuid: "78d04f10-7c50-0134-16b5-00505686a51c",
    slug: "ruthven-todd-portfolio",
  },
  {
    uuid: "48107420-2d94-0133-fa9e-58d385a7b928",
    slug: "teo-macero-collection",
  },
  {
    uuid: "e31b8900-c602-012f-8b6d-58d385a7bc34",
    slug: "the-negro-worker",
  },
  {
    uuid: "3d0aa0c0-1a43-0136-23b3-4374a7475230",
    slug: "vincent-persichetti-papers",
  },
  {
    uuid: "f4d362f0-ad82-0133-1a7f-00505686a51c",
    slug: "vision-a-literary-quarterly",
  },
  {
    uuid: "e8e7f880-1632-0135-3814-0fb24ffa1f97",
    slug: "ms-bergensfjord",
  },
  {
    uuid: "d5367370-c6f2-012f-b372-58d385a7bc34",
    slug: "albom-revoliutsionno-satiry-1905-1906-gg",
  },
  {
    uuid: "23ca0870-c6f3-012f-ba65-58d385a7bc34",
    slug: "voobrazhaemye-portrety",
  },
  {
    uuid: "03f80170-8430-0134-b852-00505686a51c",
    slug: "photographs-of-mexican-life-from-negatives-of-julio-de-la-fuente",
  },
  {
    uuid: "1c9d6780-c6d9-012f-e0c1-58d385a7bc34",
    slug: "magazin-aka",
  },
  {
    uuid: "e0bc4220-c6ce-012f-13d5-58d385a7bc34",
    slug: "robert-benney-research-materials",
  },
  {
    uuid: "7f90c270-c61d-012f-f124-58d385a7bc34",
    slug: "national-negro-congress-photograph-collection",
  },
  {
    uuid: "2a118330-7db7-0134-460c-00505686d14e",
    slug: "carnegie-corporation-of-new-york-correspondence",
  },
  {
    uuid: "e173add0-633f-0135-4c98-193eb69fe01e",
    slug: "fuck-nam",
  },
  {
    uuid: "c24f9640-2840-0135-dfe6-4fc6505fe7fc",
    slug: "american-industrial-mission-to-mexico-records",
  },
  {
    uuid: "671103b0-e841-0132-d836-58d385a7bbd0",
    slug: "brazillian-coffee-industry",
  },
  {
    uuid: "fb078e90-36cf-0132-823e-58d385a7b928",
    slug: "john-cage-sketches-and-images-from-the-robert-rauschenberg-foundation",
  },
  {
    uuid: "e23e01b0-e597-0134-7bac-65e4d82f4a35",
    slug: "cahiers-de-letoile",
  },
  {
    uuid: "41eec460-7459-0134-a0e9-00505686a51c",
    slug: "les-ballets-amricains-de-ruth-page-bentley-stone-jos-limn-photographies",
  },
  {
    uuid: "ec128770-64c9-0135-08be-5d6d87653169",
    slug: "open-city",
  },
  {
    uuid: "7f118620-8429-0134-7220-00505686a51c",
    slug: "photographs-by-hugo-brehme",
  },
  {
    uuid: "646ef340-47a6-0134-1bbb-00505686d14e",
    slug: "town-hall-inc-records",
  },
  {
    uuid: "8a30c7e0-6711-0134-3b8e-00505686d14e",
    slug: "w-h-auden-collection-of-papers",
  },
  {
    uuid: "22988240-7db8-0134-672c-00505686d14e",
    slug: "charles-boultenhouse-and-parker-tyler-papers",
  },
  {
    uuid: "4071a0c0-5dbd-0135-d049-08f98afea7e1",
    slug: "courrier-cinematographique",
  },
  {
    uuid: "6efd8000-ddeb-0135-e070-0333f7b2223a",
    slug: "four-saints-in-three-acts-theater-stills-collection",
  },
  {
    uuid: "f4bf7d50-c603-012f-7406-58d385a7bc34",
    slug: "french-participation-in-the-new-york-worlds-fair",
  },
  {
    uuid: "986dda90-c605-012f-46d9-58d385a7bc34",
    slug: "he-disappeared-into-complete-silence-suite-of-nine-engravings",
  },
  {
    uuid: "f4eb0340-13f7-0135-f7f5-0f1fb25cb66e",
    slug: "new-york-amsterdam-news",
  },
  {
    uuid: "1fa55ad0-c608-012f-2213-58d385a7bc34",
    slug: "new-york-city-numbered-streets",
  },
  {
    uuid: "f3558d60-5dda-0135-9dfe-0612acde2cbb",
    slug: "plan-for-permanent-world-capitol-at-flushing-meadow-park-2",
  },
  {
    uuid: "c1af5de0-c6f2-012f-8cee-58d385a7bc34",
    slug: "the-americas",
  },
  {
    uuid: "6acb5510-c60a-012f-d863-58d385a7bc34",
    slug: "the-fania-marinoff-collection-of-photographs-of-dancers-and-allied-artists",
  },
  {
    uuid: "ffb1d9b0-c60a-012f-8758-58d385a7bc34",
    slug: "the-new-york-times-magazine",
  },
  {
    uuid: "76f0a880-c6d8-012f-97d9-58d385a7bc34",
    slug: "anna-pavlova-programs-1915-1923",
  },
  {
    uuid: "b2b8feb0-c6bf-012f-6aa1-58d385a7bc34",
    slug: "arc-de-triomphe-des-tuileries-rig-en-1806-daprs-les-dessins-et-sous-la-direction",
  },
  {
    uuid: "9e26c140-ffb9-0135-0be9-79baa240b727",
    slug: "photographs-by-man-ray",
  },
  {
    uuid: "49ff04f0-a5ab-0132-7e32-58d385a7b928",
    slug: "harriet-tubman-research-material",
  },
  {
    uuid: "4a88a830-a010-0132-ffbf-58d385a7b928",
    slug: "vernon-howe-bailey",
  },
  {
    uuid: "f4ad3870-1270-0135-34ea-01793a7b1922",
    slug: "an-historical-account-of-the-ancient-greek-city-of-paestum",
  },
  {
    uuid: "bd70d180-e9c4-0135-1acf-7d4730218469",
    slug: "architectura-navalis-mercatoria",
  },
  {
    uuid: "10446e20-bac9-0136-0ad9-29f7c492ba4b",
    slug: "collection-of-short-orchestral-works",
  },
  {
    uuid: "a15cf050-bb55-0136-1c09-439283cdecc5",
    slug: "iid-symphony",
  },
  {
    uuid: "0f7736d0-6f08-0135-7f35-00d82db74e31",
    slug: "maurice-hunter-scrapbooks",
  },
  {
    uuid: "7b138040-bdbb-0136-6e0b-1f6724523ce1",
    slug: "photographs-by-bliss-bros",
  },
  {
    uuid: "f76e91d0-c6b2-012f-b3ba-58d385a7bc34",
    slug: "quince-sellos-cubanos",
  },
  {
    uuid: "754c38e0-c61d-012f-b388-58d385a7bc34",
    slug: "rockefeller-institute-for-medical-research-correspondence",
  },
  {
    uuid: "47c6fdb0-fd32-0135-ee32-59102e4df940",
    slug: "ronald-sanders-papers",
  },
  {
    uuid: "451b58e0-8a71-0135-8348-41145f677858",
    slug: "ballet",
  },
  {
    uuid: "4a8792c0-c6cd-012f-7f55-58d385a7bc34",
    slug: "alexandra-exter-collection",
  },
  {
    uuid: "6295c190-81cf-0135-1c8f-6938dcda1eec",
    slug: "ceremonies-and-celebrations",
  },
  {
    uuid: "f0aa7d20-959a-0135-a0cf-41c0ee6af083",
    slug: "photographs-by-de-hirsh-margules",
  },
  {
    uuid: "51302aa0-00bd-0137-b610-03ff5ab49d4e",
    slug: "white-rose-mission-and-industrial-association-collection-1899-1981",
  },
  {
    uuid: "15da0dd0-fad1-0135-b2e8-494c4bf7701c",
    slug: "muriel-rukeyser-collection-of-papers",
  },
  {
    uuid: "4ea934d0-c604-012f-14e8-58d385a7bc34",
    slug: "ren-sergent-architecte-1865-1927",
  },
  {
    uuid: "d5d93170-d93c-0136-640d-6f733fe275bd",
    slug: "shivery-family-photograph-collection",
  },
  {
    uuid: "69646ee0-3935-0137-85cb-5f70aadcf1bd",
    slug: "songs-of-the-wren",
  },
  {
    uuid: "07e605a0-238c-0135-7663-05d2a662c684",
    slug: "stefan-frenkel-papers",
  },
  {
    uuid: "b5cc42d0-3d97-0135-ac75-7b6cca889faa",
    slug: "vincent-astor-foundation-records",
  },
  {
    uuid: "9956aa40-639e-0137-1831-059ecf54f8c3",
    slug: "piccirilli-family-papers",
  },
  {
    uuid: "b614dd20-c616-012f-f952-58d385a7bc34",
    slug: "photographs-of-us-route-1-from-maine-to-florida",
  },
  {
    uuid: "96a68e50-b9cd-0131-ad18-58d385a7bbd0",
    slug: "beverly-sills-scores",
  },
  {
    uuid: "a6b16e70-c60a-012f-c58a-58d385a7bc34",
    slug: "london-north-eastern-railway-magazine",
  },
  {
    uuid: "a5e42680-56d3-0136-5585-33a9479859c1",
    slug: "anti-nazi-material",
  },
  {
    uuid: "9eb52c30-6126-0136-dedd-067a5b1f6d2b",
    slug: "astronomia-instavrata",
  },
  {
    uuid: "a2e2f0e0-c609-012f-ac76-58d385a7bc34",
    slug: "ballet-foundation-collection-of-orchestral-scores-and-parts-ca-1938-1962",
  },
  {
    uuid: "f79b1170-31f0-0136-344f-37d46241e737",
    slug: "barbara-goldsmith-papers",
  },
  {
    uuid: "a591f600-976d-0136-0aea-3371c22331c9",
    slug: "composers-recordings-inc-records",
  },
  {
    uuid: "d5faaef0-2eed-0136-90d4-3dc4e2aa972c",
    slug: "die-schaulade",
  },
  {
    uuid: "4c214370-c60b-012f-a35e-58d385a7bc34",
    slug: "guichard-parris-photograph-collection",
  },
  {
    uuid: "686f7430-7eca-0135-2d81-3bc052af8688",
    slug: "robert-motherwell",
  },
  {
    uuid: "e2841f60-aeda-0136-4fd6-4b2b71d25af5",
    slug: "ruth-page-papers-additions",
  },
  {
    uuid: "7c706fe0-7d75-0136-4121-2deb5ccafbf5",
    slug: "trend-photographic-scrapbook",
  },
  {
    uuid: "7614a2a0-c6cb-012f-2720-58d385a7bc34",
    slug: "ensembles-mobiliers",
  },
  {
    uuid: "baa0a0e0-3de8-0137-a8b2-45fd88f4f04d",
    slug: "the-new-york-coach-makers-magazine",
  },
  {
    uuid: "3dc859a0-792e-0130-acba-58d385a7b928",
    slug: "azoth-siue-avreli-occvltae-philosophorvm",
  },
  {
    uuid: "b26e5100-e420-0135-b203-0cbe652b92cf",
    slug: "morgan-and-marvin-smith-collection-additions",
  },
  {
    uuid: "54e42200-abcd-0137-2edd-08fbbf51c892",
    slug: "john-henrik-clarke-photograph-collection",
  },
  {
    uuid: "a75585d0-7691-0137-6535-0dbc937f9fc2",
    slug: "south-sea-bubble-prints",
  },
  {
    uuid: "df8e2060-c628-012f-eeb6-58d385a7bc34",
    slug: "views-of-women-and-children-in-new-york-city",
  },
  {
    uuid: "99b57d20-4e4d-0137-3dbf-6b67d7f36ae7",
    slug: "maria-tallchief-video-archive",
  },
  {
    uuid: "47ab0ee0-634b-0130-477d-58d385a7b928",
    slug: "ruta",
  },
  {
    uuid: "0b76ac00-c16b-0130-2f4e-58d385a7bbd0",
    slug: "a-system-of-vegetables",
  },
  {
    uuid: "8ec3d870-8ee5-0137-b514-2f1e3790d4f7",
    slug: "dance-news",
  },
  {
    uuid: "3fa3d930-6943-0133-bfb0-00505686d14e",
    slug: "el-universal-ilustrado",
  },
  {
    uuid: "c608fc50-f6dc-0134-74e9-695f6edde51f",
    slug: "franne-lee-papers-and-designs",
  },
  {
    uuid: "092e96a0-7a7f-0137-5a38-15bb326cba89",
    slug: "new-spencerian-compendium-of-penmanship",
  },
  {
    uuid: "370057c0-6867-0137-7f29-0005db3dfae5",
    slug: "report-of-the-council-of-hygiene-and-public-health-of-the-citizens-association",
  },
  {
    uuid: "e1d10390-21d1-0133-d803-58d385a7bbd0",
    slug: "tauba-auerbach",
  },
  {
    uuid: "e28a6500-6abb-0137-43c6-35b6bcfe7758",
    slug: "the-hoffman-house-bartenders-guide",
  },
  {
    uuid: "060e1110-4351-0137-7f50-08936cc3c27a",
    slug: "vita-beati-tvrribii-archiepiscopi-limani-in-indies",
  },
  {
    uuid: "f4612400-19b7-0132-959e-58d385a7b928",
    slug: "x-x",
  },
  {
    uuid: "c8c59c40-c602-012f-fd8f-58d385a7bc34",
    slug: "catalogue-of-the-annual-exhibition-of-the-architectural-league-of-new-york",
  },
  {
    uuid: "a2264e00-c619-012f-eb6f-58d385a7bc34",
    slug: "prodromus-dissertationum-cosmographicarum-continens-mysterium-cosmographicum",
  },
  {
    uuid: "e01843a0-c603-012f-7de1-58d385a7bc34",
    slug: "the-favourite-rondeau",
  },
  {
    uuid: "742f5fe0-0042-0130-e2e7-58d385a7bc34",
    slug: "al-kalim-al-tayyib-wa-al-ghayth-al-sayyib",
  },
  {
    uuid: "24230f80-6abe-0137-2957-739f4090a9ef",
    slug: "scrapbooks-of-architecture",
  },
  {
    uuid: "29a4c200-4806-0137-fec3-05cd7c98d06e",
    slug: "a-history-of-the-city-of-baltimore-its-men-and-institutions",
  },
  {
    uuid: "88230120-83c6-0137-af1f-0c7be3687376",
    slug: "ajs-perspectives",
  },
  {
    uuid: "bbaea490-4808-0137-bbb1-0770b526a8dd",
    slug: "dixie",
  },
  {
    uuid: "fea19560-83bd-0137-e23c-53b349cefa52",
    slug: "studies-in-contemporary-jewry",
  },
  {
    uuid: "84f53840-83ca-0137-a049-4d948a74b06a",
    slug: "yizker",
  },
  {
    uuid: "531ec510-c6b3-012f-9643-58d385a7bc34",
    slug: "selected-items-from-lest-we-forget-exhibition",
  },
  {
    uuid: "67872730-8181-0137-9667-5d592a705567",
    slug: "gran-fury-collection",
  },
  {
    uuid: "0fb13eb0-0044-0130-4e76-58d385a7bc34",
    slug: "album-of-photographs-of-pakistan-egypt-and-european-locations",
  },
  {
    uuid: "3ee36e00-893c-0137-da87-00153333f93f",
    slug: "almon-harris-thompson-and-ellen-powell-thompson-diaries",
  },
  {
    uuid: "02ed27e0-a5ab-0137-6a6c-0e97f51c51e9",
    slug: "atlas-des-enfans",
  },
  {
    uuid: "1be9ce60-c629-012f-7386-58d385a7bc34",
    slug: "horae-2-3-4",
  },
  {
    uuid: "8b98e230-c617-012f-4873-58d385a7bc34",
    slug: "description-des-experiences-de-la-machine-aerostatique-de-mm-de-montgolfier",
  },
  {
    uuid: "6180faa0-c60a-012f-18dc-58d385a7bc34",
    slug: "a-narrative-of-the-life-of-rev-noah-davis-a-colored-man-written-by-himself",
  },
  {
    uuid: "adbb20b0-c6ca-012f-bee2-58d385a7bc34",
    slug: "cartes-de-visite-collection-2",
  },
  {
    uuid: "1c364360-c619-012f-7489-58d385a7bc34",
    slug: "my-southern-home",
  },
  {
    uuid: "aacbd6d0-c608-012f-ff43-58d385a7bc34",
    slug: "revelations-of-a-slave-smuggler",
  },
  {
    uuid: "8ee65b50-c618-012f-a441-58d385a7bc34",
    slug: "malerei-photographie-film",
  },
  {
    uuid: "1060a670-c605-012f-67cf-58d385a7bc34",
    slug: "poems-2",
  },
  {
    uuid: "d0205f90-c603-012f-9236-58d385a7bc34",
    slug: "stories-of-old-daniel-or-tales-of-wonder-and-delight",
  },
  {
    uuid: "7e2a47a0-c602-012f-39f0-58d385a7bc34",
    slug: "the-trial-of-thomas-theaker-coachman",
  },
  {
    uuid: "374fdc30-1850-0137-3a51-3f3746d97976",
    slug: "mary-bryant-papers",
  },
  {
    uuid: "deaeacc0-c6b9-0137-629b-1588f343b085",
    slug: "interweaving-patterns",
  },
  {
    uuid: "696f9970-c6b7-012f-08be-58d385a7bc34",
    slug: "petrogradskie-torzhestva-po-prazdnovaniiu-piato-godovshchiny-oktiabrsko",
  },
  {
    uuid: "1e5aae20-483b-0137-02c7-7d9c2cc9fc4a",
    slug: "pease-ellimans-catalog-of-east-side-new-york-apartment-plans",
  },
  {
    uuid: "634f3af0-c607-012f-9f2d-58d385a7bc34",
    slug: "travelguide",
  },
  {
    uuid: "c28b2340-c602-012f-a12b-58d385a7bc34",
    slug: "compendium-musices",
  },
  {
    uuid: "1d981810-395f-0137-a273-4deaf06d36a8",
    slug: "das-liszt-ge-berlin",
  },
  {
    uuid: "abb0bb80-798b-0137-a0cd-51d261158829",
    slug: "elizabeth-oakes-prince-smith-papers",
  },
  {
    uuid: "1b778000-c902-0137-62ad-154794c04ee4",
    slug: "george-clayton-foulk-papers",
  },
  {
    uuid: "e6743f00-be7d-0136-c489-3b5da6a0624d",
    slug: "go-guide-to-pleasant-motoring",
  },
  {
    uuid: "986ee250-c616-012f-0357-58d385a7bc34",
    slug: "godeys-magazine",
  },
  {
    uuid: "e7bfc770-99c1-0137-c2b3-0949154e4d1a",
    slug: "how-scientific-management-is-applied",
  },
  {
    uuid: "d0699060-710c-0137-9428-5b79b8e8589e",
    slug: "isaac-and-joshua-child-papers",
  },
  {
    uuid: "8285dd10-8ede-0137-a24c-5f1a925e6c27",
    slug: "music-division-poster-collection",
  },
  {
    uuid: "e44a5b40-b247-0137-c5e1-0e33ee0ff48c",
    slug: "negro-suffrage-in-new-jersey-1776-1875",
  },
  {
    uuid: "672056d0-766f-0137-1bac-4b5769c98ef2",
    slug: "netherlandish-and-belgian-prints",
  },
  {
    uuid: "1a372b90-b701-0137-0ac5-25ac115397cc",
    slug: "un-marito-pur-che-sia",
  },
  {
    uuid: "bd4420e0-8fa1-0137-9905-007748b1a84a",
    slug: "apparitions",
  },
  {
    uuid: "f82167a0-8bba-0137-ff2c-43138aeb9b15",
    slug: "sado-kinzan-no-zu",
  },
  {
    uuid: "9f86c7b0-c6d0-012f-f3ba-58d385a7bc34",
    slug: "under-the-red-cross-flag-at-home-and-abroad",
  },
  {
    uuid: "c7e42950-c6cd-012f-3866-58d385a7bc34",
    slug: "postcard-collection",
  },
  {
    uuid: "bda61c50-c8ec-0137-7d03-4b6bd3a8d312",
    slug: "ping-chong-archive",
  },
  {
    uuid: "611d3960-9a7c-0137-9d3f-67f1426d7b12",
    slug: "john-golden-papers",
  },
  {
    uuid: "6c719df0-c361-0137-1ff5-7180566b5ee2",
    slug: "lucy-stone",
  },
  {
    uuid: "79510240-a002-0137-3991-5d4249b1d4de",
    slug: "illustrated-catalogue-of-photographers-negatives",
  },
  {
    uuid: "f4e46cf0-c36c-0137-fd70-0db49073b296",
    slug: "pt-barnum-papers",
  },
  {
    uuid: "fd91e5d0-6e84-0137-8c8b-29f62a223abe",
    slug: "sy-friedman-photographs",
  },
  {
    uuid: "ff7ca130-cdbb-0137-beaa-436f9f24d6ea",
    slug: "donald-byrd-video-archive",
  },
  {
    uuid: "b1374470-cdbc-0137-6ae0-1b6cf11b7a89",
    slug: "national-ballet-of-canada-video-archive",
  },
  {
    uuid: "4d84ffe0-cdbc-0137-3ae1-0003f7178e37",
    slug: "lucia-r-wayne-collection",
  },
  {
    uuid: "db238d60-cdbc-0137-4915-5576f177bc2d",
    slug: "north-carolina-school-of-the-arts-video-archive",
  },
  {
    uuid: "a680fb70-cdcd-0137-38da-33c1c5d47299",
    slug: "tenting-on-the-plains",
  },
  {
    uuid: "9ea5d5b0-1117-0132-7932-58d385a7b928",
    slug: "the-green-book",
  },
  {
    uuid: "25f53610-d1a6-0137-06cc-075edff642c8",
    slug: "montague-collection-of-historical-autographs",
  },
  {
    uuid: "5e851f60-c621-012f-dbc7-58d385a7bc34",
    slug: "life-at-the-south-or-uncle-toms-cabin-as-it-is",
  },
  {
    uuid: "5d4bf9d0-8944-0137-5dd7-0137f347c7ca",
    slug: "bookbindings-in-the-spencer-collection",
  },
  {
    uuid: "a9e7cbe0-a3f0-0132-2ad0-58d385a7bbd0",
    slug: "florence-nightingale-levy-papers",
  },
  {
    uuid: "697dc320-d704-0137-fc0d-1fe69aa01b68",
    slug: "lincoln-kirstein-family-photo-albums",
  },
  {
    uuid: "c2945830-0034-0130-dc53-58d385a7bc34",
    slug: "st-joseph-city-directory-and-business-mirror",
  },
  {
    uuid: "be18f080-c5c6-012f-fc40-58d385a7bc34",
    slug: "books-bequeathed-by-william-augustus-spencer",
  },
  {
    uuid: "7446a6c0-c5f0-012f-41c0-58d385a7bc34",
    slug: "hortus-romanus-juxta-systems-tournefortianum-paulo",
  },
  {
    uuid: "8122ebf0-c5f4-012f-59ef-58d385a7bc34",
    slug: "print-collection",
  },
  {
    uuid: "5c092b50-c607-012f-4af5-58d385a7bc34",
    slug: "english-caricatures",
  },
  {
    uuid: "fd98a820-c607-012f-232d-58d385a7bc34",
    slug: "the-loyalists-and-slavery-in-new-brunswick",
  },
  {
    uuid: "cdd00ad0-c603-012f-b916-58d385a7bc34",
    slug: "lectures-on-natural-philosophy",
  },
  {
    uuid: "66f45850-c5fd-012f-debe-58d385a7bc34",
    slug: "russkiia-narodnyia-kartinki-sobral-i-opisal-da-rovinskii",
  },
  {
    uuid: "df08aef0-c6ce-012f-25f5-58d385a7bc34",
    slug: "petergof",
  },
  {
    uuid: "126ed640-c60a-012f-0732-58d385a7bc34",
    slug: "autobiography-of-james-l-smith",
  },
  {
    uuid: "2f962990-c60b-012f-72be-58d385a7bc34",
    slug: "the-doolittle-engravings-of-the-battles-of-lexington-and-concord-in-1775",
  },
  {
    uuid: "dc52dbf0-c60a-012f-8182-58d385a7bc34",
    slug: "union-der-sozialistischen-sowjet-republiken",
  },
  {
    uuid: "86883200-c60a-012f-00c4-58d385a7bc34",
    slug: "zenit",
  },
  {
    uuid: "349e2040-c60a-012f-6901-58d385a7bc34",
    slug: "an-autobiography-the-story-of-the-lords-dealings-with-mrs-amanda-smith",
  },
  {
    uuid: "bc35a380-c608-012f-2380-58d385a7bc34",
    slug: "from-the-cellular-communion-series",
  },
  {
    uuid: "e49e84d0-c608-012f-1628-58d385a7bc34",
    slug: "larchitettura",
  },
  {
    uuid: "b8b348e0-c608-012f-7836-58d385a7bc34",
    slug: "liber-chronicarum",
  },
  {
    uuid: "2f955ac0-c609-012f-31ae-58d385a7bc34",
    slug: "picturesque-america-or-the-land-we-live-in",
  },
  {
    uuid: "663d9be0-c604-012f-48f3-58d385a7bc34",
    slug: "a-compendious-system-of-astronomy",
  },
  {
    uuid: "925f6690-c607-012f-084a-58d385a7bc34",
    slug: "american-political-caricatures-1841-1856",
  },
  {
    uuid: "9659bc20-c607-012f-36c1-58d385a7bc34",
    slug: "fleetwood",
  },
  {
    uuid: "05770860-c605-012f-8715-58d385a7bc34",
    slug: "malerische-reise-durch-rgen",
  },
  {
    uuid: "c14f6c90-c607-012f-4476-58d385a7bc34",
    slug: "mukujk-daidarani-ky",
  },
  {
    uuid: "52dbf760-c607-012f-6bf3-58d385a7bc34",
    slug: "reconstruction-collection",
  },
  {
    uuid: "fe069be0-c606-012f-87bf-58d385a7bc34",
    slug: "st-leon-a-tale-of-the-sixteenth-century",
  },
  {
    uuid: "54229ea0-c607-012f-dbff-58d385a7bc34",
    slug: "the-new-bath-guide-or-memoirs-of-the-b-n-r-d-family",
  },
  {
    uuid: "65a064d0-c607-012f-d107-58d385a7bc34",
    slug: "uncle-toms-cabin-or-the-history-of-a-christian-slave",
  },
  {
    uuid: "552e8770-c604-012f-7740-58d385a7bc34",
    slug: "biblia-uulgar-historiata",
  },
  {
    uuid: "d6652df0-c602-012f-2b97-58d385a7bc34",
    slug: "a-case-of-conscience-whether-it-be-lawful-to-admit-jews-into-a-christian",
  },
  {
    uuid: "22ec8490-c606-012f-fbda-58d385a7bc34",
    slug: "a-description-of-millenium-hall",
  },
  {
    uuid: "4a0407d0-c605-012f-951f-58d385a7bc34",
    slug: "afghanistan-1993-2008",
  },
  {
    uuid: "ea72fbf0-c607-012f-4812-58d385a7bc34",
    slug: "africa-1870-1899",
  },
  {
    uuid: "19d8cd80-c605-012f-cd11-58d385a7bc34",
    slug: "an-introduction-to-botany",
  },
  {
    uuid: "246ffc60-c606-012f-4421-58d385a7bc34",
    slug: "angelicas-ladies-library",
  },
  {
    uuid: "5f868ef0-c604-012f-0703-58d385a7bc34",
    slug: "architecture-franoise-ou-recueil-des-plans-elevations-coupes-et-profils",
  },
  {
    uuid: "9c1de500-c605-012f-0300-58d385a7bc34",
    slug: "autobiography-of-a-fugitive-negro-his-anti-slavery-labours-in-the-united-states",
  },
  {
    uuid: "9048d600-c605-012f-2d4c-58d385a7bc34",
    slug: "balieffs-chauve-souris-of-moscow",
  },
  {
    uuid: "0db69440-c603-012f-a551-58d385a7bc34",
    slug: "bank-note-vignettes",
  },
  {
    uuid: "edc31030-c604-012f-c1f3-58d385a7bc34",
    slug: "cent-ans-de-thtre-par-la-photographie-comdiens-et-comdiennes-dhier",
  },
  {
    uuid: "23c17910-c606-012f-5652-58d385a7bc34",
    slug: "domestic-manners-of-the-americans",
  },
  {
    uuid: "c4962110-c603-012f-021b-58d385a7bc34",
    slug: "elements-of-morality",
  },
  {
    uuid: "c4b8b690-c602-012f-3090-58d385a7bc34",
    slug: "emile-ou-de-lducation",
  },
  {
    uuid: "cd15d070-c603-012f-836b-58d385a7bc34",
    slug: "english-laws-for-women-in-the-nineteenth-century",
  },
  {
    uuid: "24f4bea0-c603-012f-e9b6-58d385a7bc34",
    slug: "fables-for-the-female-sex",
  },
  {
    uuid: "eb00a070-c604-012f-390f-58d385a7bc34",
    slug: "frankenstein-or-the-modern-prometheus",
  },
  {
    uuid: "2d5c4250-c605-012f-69a5-58d385a7bc34",
    slug: "gymnasium-chases",
  },
  {
    uuid: "5110d570-c604-012f-d78e-58d385a7bc34",
    slug: "iohan-vvolfii-ic-lectionvm",
  },
  {
    uuid: "822ac3e0-c604-012f-e692-58d385a7bc34",
    slug: "les-quatre-filz-aymon",
  },
  {
    uuid: "2d5e8df0-c603-012f-6364-58d385a7bc34",
    slug: "letters-on-the-improvement-of-the-mind",
  },
  {
    uuid: "20f36a30-c608-012f-d9d7-58d385a7bc34",
    slug: "long-island-press",
  },
  {
    uuid: "18f0bbb0-c606-012f-baf0-58d385a7bc34",
    slug: "memoirs-of-mrs-inchbald",
  },
  {
    uuid: "1140ea20-c605-012f-e592-58d385a7bc34",
    slug: "mrs-leicesters-school-or-the-history-of-several-young-ladies-related-2",
  },
  {
    uuid: "c5696390-c603-012f-91b8-58d385a7bc34",
    slug: "original-stories-from-real-life-with-conversations-calcuated-to-regulate",
  },
  {
    uuid: "62147690-c607-012f-471d-58d385a7bc34",
    slug: "parades",
  },
  {
    uuid: "25e7a410-c603-012f-4a65-58d385a7bc34",
    slug: "practical-hints-to-young-females-on-the-duties-of-a-wife-a-mother-and-a-mistress",
  },
  {
    uuid: "20f7db40-c606-012f-95b1-58d385a7bc34",
    slug: "srie-b-pointes-sches",
  },
  {
    uuid: "16068d50-c605-012f-4218-58d385a7bc34",
    slug: "the-history-of-mary-wood-the-house-maid-or-the-danger-of-false-excuses",
  },
  {
    uuid: "30376df0-c606-012f-f130-58d385a7bc34",
    slug: "the-st-mmin-collection-of-portraits",
  },
  {
    uuid: "2f008ba0-c603-012f-de32-58d385a7bc34",
    slug: "the-book-of-household-management",
  },
  {
    uuid: "78243490-c605-012f-ef02-58d385a7bc34",
    slug: "the-courtezan-or-the-adventures-of-harriet-wilson",
  },
  {
    uuid: "1b3a7370-c606-012f-0c3f-58d385a7bc34",
    slug: "the-female-advocate",
  },
  {
    uuid: "9cf5b110-c604-012f-bd16-58d385a7bc34",
    slug: "the-guide-to-domestic-happiness",
  },
  {
    uuid: "bfce22d0-c603-012f-ec0b-58d385a7bc34",
    slug: "the-mirror-of-the-graces-or-the-english-ladys-costume",
  },
  {
    uuid: "7c8f32d0-c602-012f-ad62-58d385a7bc34",
    slug: "the-polite-lady-or-a-course-of-female-education",
  },
  {
    uuid: "2871ab20-c603-012f-fdaa-58d385a7bc34",
    slug: "the-surprising-adventures-of-a-female-husband",
  },
  {
    uuid: "73792e70-c602-012f-976c-58d385a7bc34",
    slug: "an-authentic-narrative-of-the-seminole-war-and-of-the-miraculous-escape-of-mrs",
  },
  {
    uuid: "395012c0-50c4-0132-de89-58d385a7bbd0",
    slug: "liber-veritatis",
  },
  {
    uuid: "a4b58b00-c6f7-012f-8b56-58d385a7bc34",
    slug: "playing-cards-engineering",
  },
  {
    uuid: "d7b9c6d0-c6f7-012f-adc4-58d385a7bc34",
    slug: "playing-cards-mechanics",
  },
  {
    uuid: "786fbfe0-0040-0130-e306-58d385a7bc34",
    slug: "ecclesiae-militantis-triumphi-siue-deo-amabilium-martyrum-gloriosa-pro-christi",
  },
  {
    uuid: "6ea7e1a0-aebc-0130-4b8c-58d385a7b928",
    slug: "amor-und-psyche",
  },
  {
    uuid: "c2617c50-3959-0133-86fa-00505686d14e",
    slug: "awful-shipwreck",
  },
  {
    uuid: "598b04c0-0042-0130-0e3b-58d385a7bc34",
    slug: "carta-executoria-de-hidalguia",
  },
  {
    uuid: "f77e1770-87aa-0132-9a67-58d385a7b928",
    slug: "el-arte-en-la-vida-diaria",
  },
  {
    uuid: "46704e90-d455-012f-17bd-58d385a7bbd0",
    slug: "illustrations-of-master-humphreys-clock",
  },
  {
    uuid: "8e081d30-0042-0130-5289-58d385a7bc34",
    slug: "lorraine-hansberry-photograph-collection",
  },
  {
    uuid: "755f6060-a3f3-0132-13f5-58d385a7b928",
    slug: "philip-levine-collection-of-papers-1993-2008",
  },
  {
    uuid: "f7afe4f0-8df3-0132-a64a-58d385a7bbd0",
    slug: "thomas-hart-benton",
  },
  {
    uuid: "9f6915c0-03a7-0136-0706-491a323bd036",
    slug: "yaddo-records",
  },
  {
    uuid: "880ccb40-cc96-0135-4539-7da2ee898935",
    slug: "george-eliot-collection-of-papers",
  },
  {
    uuid: "e481bfc0-2d5e-0137-0a94-4157657dff25",
    slug: "motion-picture-record",
  },
  {
    uuid: "a0579af0-28a0-0137-0b55-71cf8885b126",
    slug: "slavery-and-the-abolition-of-the-slave-trade-collection",
  },
  {
    uuid: "07e9ef10-0565-0137-3a9b-3910ae6b5c8f",
    slug: "charles-tomlinson-griffes-collection",
  },
  {
    uuid: "8e61e5b0-509c-0136-40c9-0e559938fafa",
    slug: "regina-resnik-sound-recordings-materials",
  },
  {
    uuid: "e5d53c30-d5da-0134-3edd-00505686d14e",
    slug: "works-process-at-the-guggenheim-video-archive",
  },
  {
    uuid: "19f3e130-f63e-0135-3a1f-05f05423d96b",
    slug: "max-wertheimer-papers",
  },
  {
    uuid: "b36a5d10-7cbf-0133-0c8a-00505686d14e",
    slug: "the-english-musical-gazette-or-monthly-intelligencer",
  },
  {
    uuid: "041d3da0-509b-0136-bb3a-471743ff594e",
    slug: "new-york-philharmonic-collection-of-broadcast-concerts-1934-1955",
  },
  {
    uuid: "89eb3220-5269-0137-1cd4-45e7631963a4",
    slug: "vita-del-servo-di-dio-d-torivio-alfonso-mogrovejo",
  },
  {
    uuid: "efca9980-a026-0137-0091-5fbc27112f18",
    slug: "sterreichische-plakatkunst",
  },
  {
    uuid: "5bd09f90-a0f4-0137-800d-51852a29d898",
    slug: "allegorien-und-embleme",
  },
  {
    uuid: "4983bce0-799e-0137-bb3e-6bbdceea59b4",
    slug: "bill-gunn-papers",
  },
  {
    uuid: "cc725e30-9442-0137-ca0b-0b3b8ec3f44d",
    slug: "clavdii-ptolemaei-geographicae-enarrationis",
  },
  {
    uuid: "8706cd60-7f35-0137-11ce-0bd9d495973a",
    slug: "the-scientific-library",
  },
  {
    uuid: "8ff596d0-63a9-0137-799c-21ee1a21328e",
    slug: "the-universal-magazine-of-knowledge-and-pleasure",
  },
  {
    uuid: "bb6ed4f0-8afb-0137-e041-2d9ff7c87ac4",
    slug: "janet-mansfield-soares-video-archive",
  },
  {
    uuid: "e57e3dc0-8c64-0137-fd92-155898514978",
    slug: "new-york-public-library-for-the-performing-arts-lectureconcert-series",
  },
  {
    uuid: "20a6b770-8afd-0137-eba2-02d23a49e11a",
    slug: "encyclopaedia-cinematographica",
  },
  {
    uuid: "2cfa85c0-b6ff-0137-c21f-2d72c2b2304e",
    slug: "kei-takeis-moving-earth-company-video",
  },
  {
    uuid: "c75a17c0-7673-0137-ee32-0d36d5bfd115",
    slug: "varie-figure-gobbi-suite-appele-aussi-les-bossus-les-pygmes-les-nains-grotesques",
  },
  {
    uuid: "778fbbe0-7666-0137-68ec-31a0d139f01c",
    slug: "blumen-und-prospecten-bchlein",
  },
  {
    uuid: "9ff1e720-8afa-0137-96d7-7daffa36c321",
    slug: "david-voss-video-archive",
  },
  {
    uuid: "73d5f320-badb-0137-a502-47be82da5623",
    slug: "terry-stark-javanese-dance",
  },
  {
    uuid: "2b8c6e10-b62a-0137-dade-09f687d18d0e",
    slug: "donald-oenslager-papers-and-designs",
  },
  {
    uuid: "ebfa1b20-733f-0137-9395-0bbd70fe9287",
    slug: "kenneth-w-porter-photograph-collection",
  },
  {
    uuid: "45aa1380-c6b8-0137-1f4f-25846f8bbe7b",
    slug: "compagnie-jant-bi-video-archive",
  },
  {
    uuid: "cee9ee10-a59c-0137-7e6f-0b59784b3bde",
    slug: "atlas-des-enfans-ou-nouvelle-mthode-pour-apprendre-la-gographie",
  },
  {
    uuid: "cbb40350-d8c5-0137-4c90-17b0dfa5156e",
    slug: "david-fulton-karsner-papers",
  },
  {
    uuid: "b004d820-601d-0135-9fdb-3bf1ab9bf51a",
    slug: "oracle",
  },
  {
    uuid: "96498cd0-bde3-0137-4ec4-3fd1f2cb1ba3",
    slug: "album-de-96-dessins-originaux-et-maquettes",
  },
  {
    uuid: "3862ed60-b180-0137-be7e-0d9e65592e2e",
    slug: "collection-des-exemples-les-plus-estims-des-portes-monumentales-de-la-grce",
  },
  {
    uuid: "15f2f2c0-baec-0137-c184-5d4ffc31d9cd",
    slug: "demetrio-e-polibio-2",
  },
  {
    uuid: "e8e2c740-8eda-0137-7c0b-1563d5d2c59a",
    slug: "alexander-smallens-papers",
  },
  {
    uuid: "b86cebf0-a57e-0137-d898-494545596783",
    slug: "atkinsons-casket",
  },
  {
    uuid: "aed1ff40-ccd8-0137-390b-6744839c618e",
    slug: "conquistas-de-las-islas-philipinas",
  },
  {
    uuid: "2ef1eeb0-a023-0137-723d-09732f876c21",
    slug: "library-of-universal-history",
  },
  {
    uuid: "d5c48720-a0ef-0137-dda4-6d78c8b9ca29",
    slug: "puck-2",
  },
  {
    uuid: "73f36ad0-d806-0137-6c02-1d18927dd867",
    slug: "robert-stone-papers",
  },
  {
    uuid: "28098150-b7be-0137-cb92-0b7e49f12d5d",
    slug: "rules-for-the-society-of-negroes-1693",
  },
  {
    uuid: "e358ade0-c6a9-0137-13e0-432dac65a0fb",
    slug: "the-colonizationist-and-journal-of-freedom",
  },
  {
    uuid: "adfab570-cc0a-0137-e48a-27646ef1ec85",
    slug: "workers-life",
  },
  {
    uuid: "137d4470-c6ca-012f-5023-58d385a7bc34",
    slug: "photographs-of-japan-2",
  },
  {
    uuid: "6f33a7b0-c6d3-012f-8f0a-58d385a7bc34",
    slug: "a-collection-of-roses-from-nature",
  },
  {
    uuid: "7788f440-c6d0-012f-1411-58d385a7bc34",
    slug: "momoyogusa",
  },
  {
    uuid: "068563e0-c6db-012f-5458-58d385a7bc34",
    slug: "il-reale-giardino-di-boboli-nella-sua-pianta-e-nelle-sue-statue-di-francesco",
  },
  {
    uuid: "0f03b250-c6d9-012f-c239-58d385a7bc34",
    slug: "albom-dukhovno-missii",
  },
  {
    uuid: "1add7860-c6d0-012f-80df-58d385a7bc34",
    slug: "tarjumah-i-suwar-al-kawkib",
  },
  {
    uuid: "5ddd89b0-c6cd-012f-8aec-58d385a7bc34",
    slug: "vegetable-materia-medica-of-the-united-states-or-medical-botany-containing",
  },
  {
    uuid: "cc82ad10-c6dc-012f-3a88-58d385a7bc34",
    slug: "vidy-sviato-troitsko-sergevo-lavry-i-eia-okrestnoste",
  },
  {
    uuid: "677236e0-c6ce-012f-046a-58d385a7bc34",
    slug: "vidy-i-prilozheniia-k-ocherkam-rossii",
  },
  {
    uuid: "f72f4420-c6e0-012f-e6ce-58d385a7bc34",
    slug: "posters-from-the-new-york-sunday-herald-1895-1896",
  },
  {
    uuid: "3ee45b00-c6e0-012f-074d-58d385a7bc34",
    slug: "dokumentum",
  },
  {
    uuid: "17eed570-c6e0-012f-962f-58d385a7bc34",
    slug: "de-sideribus-tractatus",
  },
  {
    uuid: "94b95360-c6ce-012f-6dfa-58d385a7bc34",
    slug: "slavery-times-in-kentucky",
  },
  {
    uuid: "ca435d60-c6be-012f-0f58-58d385a7bc34",
    slug: "china",
  },
  {
    uuid: "7f02b4f0-c6cd-012f-9a5a-58d385a7bc34",
    slug: "jesse-alexander-photograph-collection",
  },
  {
    uuid: "242294a0-c6be-012f-3cb2-58d385a7bc34",
    slug: "posters-by-will-bradley",
  },
  {
    uuid: "91276b20-c6c0-012f-49d8-58d385a7bc34",
    slug: "the-spring-book-of-b-kuppenheimer-co-illustrating-a-new-century",
  },
  {
    uuid: "35f41fe0-c6be-012f-6c63-58d385a7bc34",
    slug: "moscou",
  },
  {
    uuid: "9e8490c0-c6b9-012f-6bad-58d385a7bc34",
    slug: "bakemono-yotsugi-no-hachinoki-the-goblin-inheritance-and-the-bonsai-trees",
  },
  {
    uuid: "1bf9d520-c6b6-012f-a48f-58d385a7bc34",
    slug: "prodromo",
  },
  {
    uuid: "21b0c370-c6b9-012f-961b-58d385a7bc34",
    slug: "le-corbeau",
  },
  {
    uuid: "0378bd40-c6b4-012f-18bd-58d385a7bc34",
    slug: "central-park-in-1862",
  },
  {
    uuid: "185c2dd0-c6b8-012f-444b-58d385a7bc34",
    slug: "the-beauties-of-the-court-of-charles-the-second-a-series-of-portraits",
  },
  {
    uuid: "e44cf130-c6b3-012f-a9ed-58d385a7bc34",
    slug: "the-uncle-toms-cabin-almanack-or-abolitionist-memento-for-1853",
  },
  {
    uuid: "80af35a0-ad8d-0133-1162-00505686a51c",
    slug: "assotto-saint-photograph-collection",
  },
  {
    uuid: "90ca4d90-c62a-012f-3259-58d385a7bc34",
    slug: "michimori",
  },
  {
    uuid: "36657f70-c62a-012f-1d00-58d385a7bc34",
    slug: "yakusha-ezukushi",
  },
  {
    uuid: "236b00d0-c62b-012f-1fc7-58d385a7bc34",
    slug: "uvres-de-della-bella-dessines-et-graves-par-lui-mesmi",
  },
  {
    uuid: "6b7be1e0-c62a-012f-7840-58d385a7bc34",
    slug: "autographs-for-freedom-2",
  },
  {
    uuid: "fba6d300-c627-012f-f174-58d385a7bc34",
    slug: "the-negro-at-mound-bayou-being-an-authentic-story-of-the-founding-growth",
  },
  {
    uuid: "4094e080-c624-012f-2afa-58d385a7bc34",
    slug: "saishiki-mitsu-no-asa",
  },
  {
    uuid: "43134360-c629-012f-6001-58d385a7bc34",
    slug: "beauty-and-the-beast-2",
  },
  {
    uuid: "d9d38860-c628-012f-8205-58d385a7bc34",
    slug: "robert-clifton-weaver-photograph-collection",
  },
  {
    uuid: "75bbfe90-de48-0137-b515-0a14e131f2d2",
    slug: "john-quinn-papers",
  },
  {
    uuid: "61729040-c61f-012f-036a-58d385a7bc34",
    slug: "thrse-bonney-collection-of-photographs-of-france-other-european-countries-world",
  },
  {
    uuid: "47996e00-c621-012f-4990-58d385a7bc34",
    slug: "hunt-lenox-globe",
  },
  {
    uuid: "e8560f00-c621-012f-d316-58d385a7bc34",
    slug: "astronomical-charts",
  },
  {
    uuid: "22d1d7f0-c621-012f-2061-58d385a7bc34",
    slug: "illustrated-description-of-the-broadway-underground-railway",
  },
  {
    uuid: "d20cbd30-c621-012f-d92e-58d385a7bc34",
    slug: "istoricheskie-vidy-v-gorodie-kostromie-i-selie-korobovie",
  },
  {
    uuid: "89252610-c621-012f-9ff4-58d385a7bc34",
    slug: "samarski-kaedralny-sobor-vo-imia-spasa-s-pridielami-vo-imia-sv-blagoviernago",
  },
  {
    uuid: "8ed27ce0-c61f-012f-6586-58d385a7bc34",
    slug: "photos-from-the-early-soviet-period-miscellaneous-subjects-1918-1934",
  },
  {
    uuid: "b24a45b0-c61f-012f-f5c9-58d385a7bc34",
    slug: "the-work-of-george-maillard-kesslere",
  },
  {
    uuid: "6bfce660-c619-012f-4a3c-58d385a7bc34",
    slug: "a-history-of-the-colonization-of-africa-by-alien-races",
  },
  {
    uuid: "96bab0b0-c617-012f-90de-58d385a7bc34",
    slug: "berlin-story",
  },
  {
    uuid: "eb8814c0-c617-012f-69d0-58d385a7bc34",
    slug: "charles-t-griffes-clippings-excerpts",
  },
  {
    uuid: "ff4e9080-c618-012f-78ab-58d385a7bc34",
    slug: "jacobi-nobilis-dani-friderici-ii",
  },
  {
    uuid: "6bfd2df0-c617-012f-8629-58d385a7bc34",
    slug: "geograficheskia-karty-rossi-s-izobrazhenem-gerbov-kostiumov-i-naznachenem-verst",
  },
  {
    uuid: "8f63f2c0-c616-012f-72b8-58d385a7bc34",
    slug: "histories-of-four-young-ladies",
  },
  {
    uuid: "54d2ce90-c617-012f-30bc-58d385a7bc34",
    slug: "illustrations-of-the-royal-water-lily",
  },
  {
    uuid: "89017020-c617-012f-e14b-58d385a7bc34",
    slug: "materaly-dlia-istori-imperatorskago-moskovskago-vospitatelnago-doma",
  },
  {
    uuid: "344deea0-c616-012f-8ed2-58d385a7bc34",
    slug: "the-pictorial-field-book-of-the-war-of-1812-or-illustrations-by-pen-and-pencil",
  },
  {
    uuid: "05771c10-e860-0137-7bbf-297b3bf6fada",
    slug: "harry-miller-lydenberg-papers",
  },
  {
    uuid: "5ce222a0-c618-012f-74a8-58d385a7bc34",
    slug: "la-caricature-journal-fond-et-dirig-par-c-philipon",
  },
  {
    uuid: "b64f7530-c617-012f-eac3-58d385a7bc34",
    slug: "photographs-2",
  },
  {
    uuid: "1c643190-dd7e-0137-19ea-13e6c2dc8b58",
    slug: "humphrey-weidman-group",
  },
  {
    uuid: "8acca770-de0d-0137-97d8-13c9abd78037",
    slug: "gordon-anderson-collection",
  },
  {
    uuid: "a9bf9f60-dc90-0137-4888-6367f0d8af4e",
    slug: "national-american-woman-suffrage-association-records",
  },
  {
    uuid: "4a9a73b0-c8fc-0137-f370-39a75fdc4b73",
    slug: "illustrated-catalogue-of-ruling-machines-ruling-pens-sawing-machines-press",
  },
  {
    uuid: "4d4d51d0-517b-0136-bb12-0ad1862c2541",
    slug: "century-flashlight-photographers-circus-photographs",
  },
  {
    uuid: "cd5110b0-debb-0135-d3ad-39bb885a76de",
    slug: "gordon-parks-portfolio",
  },
  {
    uuid: "735402c0-eae3-0137-49c9-754ab61980d5",
    slug: "american-scenic-and-historic-preservation-society-records",
  },
  {
    uuid: "fe332cc0-641c-0136-8dcf-7151b36894f3",
    slug: "findens-illustrations-of-the-life-and-works-of-lord-byron",
  },
  {
    uuid: "1c17a7f0-6451-0136-b1f8-71bfaab76577",
    slug: "illustrations-of-goethes-faust",
  },
  {
    uuid: "787d94b0-dd8d-0137-3a75-21a3b0b15d8e",
    slug: "amerikanskaia-tekhnika-i-promyshlennost",
  },
  {
    uuid: "04539450-6443-0136-4241-012f31d411ca",
    slug: "edward-ellerker-williams-manuscript-material",
  },
  {
    uuid: "e5597160-27f5-0137-e510-0d3e47e37edc",
    slug: "felix-labunski-papers",
  },
  {
    uuid: "42ef0890-6378-0136-0c00-007b759587ce",
    slug: "james-and-horace-smith",
  },
  {
    uuid: "727c9300-710d-0137-30f9-5d374fc950e0",
    slug: "jeanne-manford-papers",
  },
  {
    uuid: "1ec87b10-62ba-0136-d272-6b419d84205b",
    slug: "the-life-and-labours-of-vincent-novello",
  },
  {
    uuid: "d7af61e0-6430-0136-b047-097a14eaca99",
    slug: "the-works-of-lord-byron-with-illustrations",
  },
  {
    uuid: "3ba25520-f1ec-0137-c057-2151bf9fb4ae",
    slug: "williams-walker-musical-comedies-oversize",
  },
  {
    uuid: "ac463680-d4ba-0137-a234-01a0e5c78788",
    slug: "propaganda-collection",
  },
  {
    uuid: "558d5400-cc2c-0137-d47a-656130e4afe1",
    slug: "i-capuleti-e-i-montecchi",
  },
  {
    uuid: "a87ca3d0-df06-0137-2584-0974b20ba159",
    slug: "forgeries-collection",
  },
  {
    uuid: "6af10bf0-c5ed-0137-aa2e-3b51cf5a48b3",
    slug: "cuchulain-of-muirthemne",
  },
  {
    uuid: "467e76e0-cdce-0137-3289-0f1760c924e8",
    slug: "the-shewing-up-of-blanco-posnet",
  },
  {
    uuid: "64e76090-cf6e-0133-93da-00505686d14e",
    slug: "william-butler-yeats-collection-of-papers",
  },
  {
    uuid: "777cf0c0-f917-0137-2a1c-15d9bea7e3b8",
    slug: "koo-dance-company-estelle-eichenberger-video-archive",
  },
  {
    uuid: "34174100-f917-0137-90ef-7fdf953a9675",
    slug: "karin-young-video-archive",
  },
  {
    uuid: "fa8265c0-f916-0137-625f-4b21822fb557",
    slug: "mary-overlie-video-archive",
  },
  {
    uuid: "849f6b10-d707-0137-e522-02b58fe884ef",
    slug: "photographic-scrapbooks-monte-carlo-ballet-russe-and-les-ballets-russes-dyagilev",
  },
  {
    uuid: "e678f7b0-c624-012f-89de-58d385a7bc34",
    slug: "photo-illustrations-from-the-physical-science-study-committee",
  },
  {
    uuid: "7343cf60-fbb4-0130-13ce-58d385a7b928",
    slug: "continuatio-ad-manuductionem-organicam",
  },
  {
    uuid: "626a6eb0-2afc-0136-bdeb-079e7a507367",
    slug: "jerome-robbins-dance-division-three-dimensional-objects",
  },
  {
    uuid: "69e61850-1d47-0135-411f-0031c8a6d904",
    slug: "the-bungalow-magazine",
  },
  {
    uuid: "d49643e0-fd98-0137-26b0-3377dfb6d555",
    slug: "joseph-conrad-collection-of-papers",
  },
  {
    uuid: "eefa0a40-b23f-0137-1f88-619b3d246fca",
    slug: "twenty-four-original-character-studies-illustrating-american-notes",
  },
  {
    uuid: "6d3affb0-c616-012f-7665-58d385a7bc34",
    slug: "bonnie-clark-collection",
  },
  {
    uuid: "b816b550-0021-0138-2d9d-652d49603fba",
    slug: "craig-duncan-collection",
  },
  {
    uuid: "2fec5430-c61f-012f-708a-58d385a7bc34",
    slug: "the-fundamental-constitutions-of-carolina",
  },
  {
    uuid: "0ad37d20-0651-0138-4c61-15e9e9bdbfbe",
    slug: "eleonora-von-mendelssohn-papers",
  },
  {
    uuid: "e021eb90-064c-0138-f682-615ff4c2484d",
    slug: "robert-h-davis-papers",
  },
  {
    uuid: "19d4fef0-e9ee-0137-1e70-0a1f379b9312",
    slug: "willa-cather-collection-of-papers",
  },
  {
    uuid: "34aa9fe0-0a38-0138-dc2c-4b9fe6c06fab",
    slug: "poems",
  },
  {
    uuid: "5bc43090-e144-0137-2d58-73d283175487",
    slug: "the-half-century-magazine",
  },
  {
    uuid: "d16cd8b0-8bcb-0137-2b33-1750784094ad",
    slug: "annals-of-the-new-york-stage",
  },
  {
    uuid: "f5c23f00-d190-0137-7a24-0993913c8e9f",
    slug: "new-york-post",
  },
  {
    uuid: "f8ece7d0-e214-0137-91ca-0036b7668a5f",
    slug: "siniaia-bluza",
  },
  {
    uuid: "c8a78dd0-e218-0137-6c76-3f404337c7f0",
    slug: "stil-i-epokha",
  },
  {
    uuid: "07253a20-e859-0137-ace3-6fc237376e2a",
    slug: "virgo-trivmphans",
  },
  {
    uuid: "558b17d0-d31e-0137-5360-0611650e0526",
    slug: "george-william-russell-collection-of-papers",
  },
  {
    uuid: "f516c930-c6ed-012f-dbc6-58d385a7bc34",
    slug: "veshch-mezhdunarodnoe-obozrenie-sovremennogo-iskusstva",
  },
  {
    uuid: "bb16ce50-cb66-0137-8d6d-1b985578fd4c",
    slug: "willa-kim-designs",
  },
  {
    uuid: "156b6b90-c5f3-012f-00f8-58d385a7bc34",
    slug: "joseph-conrad-collection-of-papers-microfilm",
  },
  {
    uuid: "6e3fa160-e202-0137-cb95-315892d2d34f",
    slug: "jack-kerouac-typescript-drafts-for-beat-traveler",
  },
  {
    uuid: "1df6ed80-def7-0137-1ad0-758457af9077",
    slug: "lady-gregory-collection-uncataloged-material",
  },
  {
    uuid: "4fcaf110-c76d-0137-27dc-071b511be8ef",
    slug: "samhain",
  },
  {
    uuid: "c9a051b0-c600-012f-bac2-58d385a7bc34",
    slug: "la-rivista-illustrata-del-popolo-ditalia",
  },
  {
    uuid: "6a98c7d0-c6bd-012f-ba4f-58d385a7bc34",
    slug: "marifatnmah",
  },
  {
    uuid: "1bbe7580-c607-012f-bb3d-58d385a7bc34",
    slug: "narrative-of-the-sufferings-of-lewis-clarke-during-a-captivity-of-more-than",
  },
  {
    uuid: "f53d7ae0-c606-012f-8f47-58d385a7bc34",
    slug: "decisive-confirmation-of-the-awful-disclosures-of-maria-monk",
  },
  {
    uuid: "644dc060-c6be-012f-018d-58d385a7bc34",
    slug: "introductiones-ad-astrologiam",
  },
  {
    uuid: "8589ea70-c607-012f-ac01-58d385a7bc34",
    slug: "ajib-al-makhlqt-va-gharib-al-mawjdt",
  },
  {
    uuid: "900f9920-361c-0138-85d3-771aa34c2d19",
    slug: "ezra-pound-collection-of-papers",
  },
  {
    uuid: "a09fa4c0-2f35-0138-b406-057fd520c232",
    slug: "hanya-holm-papers",
  },
  {
    uuid: "2f732fe0-c62a-012f-d38f-58d385a7bc34",
    slug: "businesses",
  },
  {
    uuid: "ca1305b0-34b6-0138-0d0b-1fc15de3621e",
    slug: "leigh-rollin-whipper-photograph-collection",
  },
  {
    uuid: "d9858b00-c6bb-012f-2439-58d385a7bc34",
    slug: "marifatnmah-2",
  },
  {
    uuid: "2eda53e0-c6f6-012f-50d4-58d385a7bc34",
    slug: "slavery",
  },
  {
    uuid: "96e17ef0-cdc4-0137-a85c-37767f3dc076",
    slug: "the-lorillard-story",
  },
  {
    uuid: "dda95a80-c624-012f-2dba-58d385a7bc34",
    slug: "the-book-of-travels-in-africa-from-the-earliest-ages-to-the-present-time",
  },
  {
    uuid: "0b9debc0-c6dd-012f-4575-58d385a7bc34",
    slug: "bezbozhnik",
  },
  {
    uuid: "431cf9c0-d188-0137-4938-41b51856d1ac",
    slug: "frederick-melton-photographs",
  },
  {
    uuid: "14a21940-c6b6-012f-84a0-58d385a7bc34",
    slug: "trattato-di-architettura-civile-e-militare",
  },
  {
    uuid: "83b5c840-c6ba-012f-2564-58d385a7bc34",
    slug: "psalterium-2",
  },
  {
    uuid: "c3099e00-c624-012f-7368-58d385a7bc34",
    slug: "from-the-virginia-plantation-to-the-national-capitol-or-the-first-and-only-negro",
  },
  {
    uuid: "e784fc80-0eeb-0133-520d-58d385a7b928",
    slug: "der-raupen-wunderbare-verwandelung",
  },
  {
    uuid: "f9380a40-0e2d-0133-5444-58d385a7bbd0",
    slug: "teatro-delle-nobili-et-virtvose-donne",
  },
  {
    uuid: "bc9e9a20-e91e-0137-3073-07f6c821b277",
    slug: "materials-relating-to-the-development-of-railroads-of-the-russian-empire",
  },
  {
    uuid: "4a9ca8f0-ed10-0137-e36b-5f73aa3797cf",
    slug: "compendium",
  },
  {
    uuid: "d37f4310-e863-0137-9d60-7b167d9789b6",
    slug: "hl-mencken-papers",
  },
  {
    uuid: "63710d40-e859-0137-515d-732e3beec8cb",
    slug: "edwin-hatfield-anderson-records",
  },
  {
    uuid: "af5315f0-3943-0138-4ccb-0f7aefff05c7",
    slug: "ford-roelker-turle-family-papers",
  },
  {
    uuid: "0a92d240-36f9-0138-270e-09b098624dd2",
    slug: "richard-upjohn-and-richard-michell-upjohn-papers",
  },
  {
    uuid: "b4dd1f60-1c71-0138-e4e9-0122b9ace960",
    slug: "litchfield-family-photograph-collection",
  },
  {
    uuid: "1bf4c330-d253-0137-9c55-0bf7bb7cf638",
    slug: "jurab-al-kurdi",
  },
  {
    uuid: "62da34c0-a543-0135-5968-4773c213c0fd",
    slug: "irving-kolodin-papers",
  },
  {
    uuid: "a9d3fd70-394e-0138-0af8-6dd4b3f2b14c",
    slug: "fern-helscher-papers",
  },
  {
    uuid: "97974880-1933-0138-1c1e-0193385febd5",
    slug: "middleton-spike-harris-slavery-and-abolition-collection1718-1876-legacy",
  },
  {
    uuid: "ec35c770-8ee0-0132-47b7-58d385a7b928",
    slug: "thirty-original-character-studies-illustrating-martin-chuzzlewit",
  },
  {
    uuid: "85726ea0-24e3-0138-be63-075116c4e092",
    slug: "a-short-account-of-algiers-and-of-its-several-wars-against-spain-france-england",
  },
  {
    uuid: "69573ec0-95ce-0132-7abe-58d385a7bbd0",
    slug: "adolf-dehn",
  },
  {
    uuid: "d1898750-e98c-012f-eb14-58d385a7bbd0",
    slug: "mogen-dovid-delicatessen-magazine",
  },
  {
    uuid: "43a4cad0-7267-0132-4582-58d385a7bbd0",
    slug: "morris-rosenfeld-photographs",
  },
  {
    uuid: "7bd4d8d0-c606-012f-4f81-58d385a7bc34",
    slug: "neue-zrcher-zeitung-und-schweizerisches-handelsblatt",
  },
  {
    uuid: "621713c0-2bed-0138-25ce-051dadd1f963",
    slug: "relation-dun-voyage-fait-en-1695-1696-1697",
  },
  {
    uuid: "da266580-1aac-0138-2748-59fc6f2c31fd",
    slug: "the-constitutional-courant",
  },
  {
    uuid: "9b839220-c607-012f-a2c6-58d385a7bc34",
    slug: "the-monthly-illustrator",
  },
  {
    uuid: "c50c09f0-420c-0138-bb59-773ff7b6ed71",
    slug: "edith-segal-papers-additions",
  },
  {
    uuid: "9b75ce10-e859-0137-af53-374eb2a26786",
    slug: "emma-mills-correspondence",
  },
  {
    uuid: "fab22220-e858-0137-dd9e-55215698676b",
    slug: "merle-de-vore-johnson-papers",
  },
  {
    uuid: "13a12f60-2bf0-0138-4522-41c2eb197eb9",
    slug: "jane-austen-papers",
  },
  {
    uuid: "9fadced0-c5ed-012f-54de-58d385a7bc34",
    slug: "umeleck-mescnk",
  },
  {
    uuid: "477a35b0-c6c2-012f-8cd3-58d385a7bc34",
    slug: "timbuctoo-the-mysterious",
  },
  {
    uuid: "5cdea6a0-c6d1-012f-4292-58d385a7bc34",
    slug: "simms-blue-book-and-national-negro-business-and-professional-directory",
  },
  {
    uuid: "3fd0c1a0-c6da-012f-ec94-3c075448cc4b",
    slug: "american-civilization-and-the-negro-the-afro-american-in-relation-to-national",
  },
  {
    uuid: "087305e0-c6db-012f-6933-3c075448cc4b",
    slug: "progress-and-achievements-of-the-colored-people",
  },
  {
    uuid: "f038d8f0-c6ce-012f-26ae-3c075448cc4b",
    slug: "souvenir-of-negro-progress-chicago-1779-1925",
  },
  {
    uuid: "4a335720-c6da-012f-3c90-58d385a7bc34",
    slug: "aunt-phebe-uncle-tom-and-others-character-studies-among-the-old-slaves",
  },
  {
    uuid: "d50aac20-c6cd-012f-ce34-58d385a7bc34",
    slug: "half-a-century-of-lutheranism-among-our-colored-people",
  },
  {
    uuid: "18a0d200-c6ce-012f-951c-58d385a7bc34",
    slug: "shadow-and-light",
  },
  {
    uuid: "3f175960-c6d7-012f-2708-3c075448cc4b",
    slug: "nos-africains",
  },
  {
    uuid: "feafac10-c6ce-012f-f3a4-58d385a7bc34",
    slug: "the-book-of-trinidad",
  },
  {
    uuid: "a5c9aa30-c6bf-012f-c404-58d385a7bc34",
    slug: "our-church-industrial-high-schools-for-negroes",
  },
  {
    uuid: "a70e33e0-c6bd-012f-1780-3c075448cc4b",
    slug: "lafrique-occidentale-franaise-ouvrage-illustr-de-49-gravures-tires-hors-texte",
  },
  {
    uuid: "628aaf40-c6bb-012f-af1f-3c075448cc4b",
    slug: "le-sngal-la-france-dans-lafrique-occidentale",
  },
  {
    uuid: "c6acdb30-c6bb-012f-ecee-58d385a7bc34",
    slug: "les-franais-au-niger-voyages-et-combats-par-le-capitaine-pietri",
  },
  {
    uuid: "a5c132a0-c607-012f-87df-58d385a7bc34",
    slug: "tribuna-literrn-a-umleck",
  },
  {
    uuid: "6b25ceb0-3c7a-0138-870a-6bf913e8497c",
    slug: "eulogium-on-the-life-and-character-of-william-wilberforce-esq",
  },
  {
    uuid: "c71f4e30-3c7a-0138-74af-09c1148138db",
    slug: "pactolus-prime",
  },
  {
    uuid: "d668b1b0-e6dd-0136-0f1c-67bbfa3bc9b0",
    slug: "george-platt-lynes-photographs",
  },
  {
    uuid: "82c0c9f0-0b5c-0136-ff8b-2d75a9f3c330",
    slug: "committee-of-fourteen-records",
  },
  {
    uuid: "488119c0-dc7e-0136-f19e-09f940fbe1fe",
    slug: "fred-fehl-photographs",
  },
  {
    uuid: "f2d9e930-5b09-0133-afe5-00505686d14e",
    slug: "coriolanus-costume-designs",
  },
  {
    uuid: "b38eb130-51c1-0138-8518-5b7b2941b55e",
    slug: "hudson-collection",
  },
  {
    uuid: "4d2a8200-526b-0138-19f3-3f85f1b87f8e",
    slug: "william-conant-church-papers",
  },
  {
    uuid: "f102a1e0-5278-0138-d678-21868ba2299f",
    slug: "edward-s-and-mary-stillman-harkness-collection",
  },
  {
    uuid: "bc942540-519c-0138-f876-7546cd223e7d",
    slug: "liberal-party-of-new-york-state-records",
  },
  {
    uuid: "2f72a740-50d7-0138-5c8c-04d841dd1230",
    slug: "william-barclay-parsons-collection-of-robert-fulton-manuscripts",
  },
  {
    uuid: "b9511ed0-c622-012f-1917-58d385a7bc34",
    slug: "liturgial-texts",
  },
  {
    uuid: "50d82870-0622-0132-5da4-58d385a7b928",
    slug: "m-u-m",
  },
  {
    uuid: "650ae350-362e-0138-c670-29513d3ba4e2",
    slug: "the-heroes-or-greek-fairy-tales-for-my-children-by-charles-kingsley-illustrated",
  },
  {
    uuid: "b8c5d110-52a2-0138-6152-2ddba71e8fe7",
    slug: "babette-deutsch-papers",
  },
  {
    uuid: "7f162870-54e8-0138-7b13-31e4e2ea4c17",
    slug: "whitney-cookery-collection",
  },
  {
    uuid: "d4ed06a0-c6b3-012f-7559-58d385a7bc34",
    slug: "lectionary-2",
  },
  {
    uuid: "716fada0-c622-012f-ef32-58d385a7bc34",
    slug: "libro-de-profecie",
  },
  {
    uuid: "a6f0c0a0-c616-012f-c25e-58d385a7bc34",
    slug: "a-dissertation-upon-the-epistles-of-phalaris-with-an-answer-to-the-objections",
  },
  {
    uuid: "16beac70-55ba-0138-2cd4-33c56a2fc612",
    slug: "constable-pierrepont-papers",
  },
  {
    uuid: "fd15b5a0-c609-012f-4495-58d385a7bc34",
    slug: "prayers-for-shabbath-rosh-hashanah-and-kippur-or-the-sabbath-the-beginning",
  },
  {
    uuid: "5ca61110-55ac-0138-3ce4-1fe913b98d65",
    slug: "black-mountain-college-and-merce-cunningham-in-the-fifties",
  },
  {
    uuid: "1c20ac90-c62c-012f-7590-58d385a7bc34",
    slug: "iezda-do-moskwy-y-posugi-z-modych-lat",
  },
  {
    uuid: "7e6e8d30-c625-012f-e81e-58d385a7bc34",
    slug: "missal-for-augustinian-use",
  },
  {
    uuid: "92565150-559c-0138-831d-552e54b0711c",
    slug: "paschal-guzman-video-archive",
  },
  {
    uuid: "6e7342e0-55b7-0138-339d-514a55f428b7",
    slug: "contemporary-dance-system-company-video-archives",
  },
  {
    uuid: "d582cf20-5593-0138-2248-4185e78f58cf",
    slug: "sally-gross-and-company-video-archive",
  },
  {
    uuid: "fc6adcc0-55bf-0138-cef0-045f5ab97464",
    slug: "the-judson-project-video-archive",
  },
  {
    uuid: "f0883800-55b0-0138-2f27-553870b4734b",
    slug: "the-magic-of-dance",
  },
  {
    uuid: "fd3f0b90-5598-0138-c6a1-212630e58df8",
    slug: "billy-wilson-video-archive",
  },
  {
    uuid: "a41c0ef0-55ba-0138-8080-081c6434bd44",
    slug: "celebration",
  },
  {
    uuid: "ccd33b40-529e-0138-1c2d-1d3a2e4a2b25",
    slug: "mimi-garrard-dance-theatre-video-archive",
  },
  {
    uuid: "67ef6650-c602-012f-91d7-58d385a7bc34",
    slug: "le-vet-yaakov-derashot-al-seder-parshiyot-ha-shanah-ve-nilveh-ba-sof-hidushe",
  },
  {
    uuid: "29a426c0-5bfa-0138-1909-777d889fbfd7",
    slug: "andr-kertsz",
  },
  {
    uuid: "f7a29010-5bfe-0138-c357-0172686f2bb0",
    slug: "edward-schwartz",
  },
  {
    uuid: "bb24ac80-5bde-0138-91ea-57e339c174e5",
    slug: "eve-arnold",
  },
  {
    uuid: "64483ad0-5bf2-0138-fb5f-415c37c8b585",
    slug: "jessie-tarbox-beals",
  },
  {
    uuid: "a4970de0-5c07-0138-43ee-0725ee5af192",
    slug: "paul-strand",
  },
  {
    uuid: "83d17ac0-5c09-0138-e176-776d494ef6cc",
    slug: "vito-acconci",
  },
  {
    uuid: "dfe3c2d0-5bdf-0138-614a-3322fb3068dc",
    slug: "zaida-ben-yusuf",
  },
  {
    uuid: "6eb0b140-5cb9-0138-0db8-6d5e941b744b",
    slug: "aaron-siskind",
  },
  {
    uuid: "2f4f8d40-5cb3-0138-3a60-08bff21aa859",
    slug: "arnold-genthe",
  },
  {
    uuid: "6a21b710-5d5e-0138-10e8-2fe8404b3e1a",
    slug: "diane-arbus",
  },
  {
    uuid: "1680b330-5cce-0138-4117-275d95e5475c",
    slug: "duane-michals",
  },
  {
    uuid: "9aa25cd0-5cc9-0138-20a7-4d9ae63be3c8",
    slug: "hans-namuth",
  },
  {
    uuid: "e727d670-5ca0-0138-533f-00117cdd3789",
    slug: "larry-r-collins",
  },
  {
    uuid: "66623100-5d62-0138-74f0-073326fedf83",
    slug: "lee-friedlander",
  },
  {
    uuid: "2c82e2f0-5d5b-0138-e4be-616594f22ba2",
    slug: "timothy-greenfield-sanders",
  },
  {
    uuid: "9ce4c430-c6b2-012f-c496-58d385a7bc34",
    slug: "education",
  },
  {
    uuid: "78da7740-5cbc-0138-c412-00d81f23f252",
    slug: "keep-on-rolling-my-years-with-the-skateboarders-of-houston",
  },
  {
    uuid: "793036d0-c6eb-012f-9a5a-3c075448cc4b",
    slug: "itinraire-pittoresque-du-fleuve-hudson-et-des-parties-latrales-de-lamrique",
  },
  {
    uuid: "a425bc20-c625-012f-0d9e-58d385a7bc34",
    slug: "voyage-a-meroe",
  },
  {
    uuid: "e88439e0-c617-012f-1260-58d385a7bc34",
    slug: "vidy-goroda-shlisselburga",
  },
  {
    uuid: "9c7c8600-c604-012f-486b-58d385a7bc34",
    slug: "anno-regni-georgii-iii-regis-magn-britanni-franc-hiberni-quinto",
  },
  {
    uuid: "22386690-c6ce-012f-dfea-58d385a7bc34",
    slug: "khram-vo-imia-khrista-spasitelia-v-moskvie",
  },
  {
    uuid: "5799f670-62d3-0138-13fc-3b9adb66ccd3",
    slug: "lioret-cylinders",
  },
  {
    uuid: "41127ee0-6af3-0138-36c0-31e1da2aa518",
    slug: "national-civic-federation-records",
  },
  {
    uuid: "7c924180-6b84-0138-b824-357eedf223e8",
    slug: "th-morrell-collection-of-original-autograph-letters-of-the-presidents",
  },
  {
    uuid: "bc036d90-6ae8-0138-9f11-6ba559e5e9ef",
    slug: "william-law-papers",
  },
  {
    uuid: "8015eec0-6d49-0138-9b22-7f329162b08e",
    slug: "entertainers",
  },
  {
    uuid: "3b603440-d05c-012f-2bb8-58d385a7bbd0",
    slug: "maps-of-central-america",
  },
  {
    uuid: "0ff9c4f0-6799-0138-3307-041b81edc969",
    slug: "madame-butterfly",
  },
  {
    uuid: "fa427350-6794-0138-1e9c-29e1bfe857f0",
    slug: "dream-land",
  },
  {
    uuid: "304e1e60-67a1-0138-b65c-00433690dc11",
    slug: "quartet-no-2-op-40",
  },
  {
    uuid: "4b42ea80-6aaf-0138-92c7-395bcf864bea",
    slug: "ballets-selections",
  },
  {
    uuid: "9f309f10-7101-0138-c9c3-4996c4ee613e",
    slug: "manhattanville",
  },
  {
    uuid: "be850ae0-6e13-0138-a356-7df5d5d25c54",
    slug: "florence-kelley-papers",
  },
  {
    uuid: "9e1284b0-c6db-012f-524c-58d385a7bc34",
    slug: "die-perle",
  },
  {
    uuid: "b031c0c0-c6bd-012f-8777-58d385a7bc34",
    slug: "documents-de-bijouterie-et-orfvrerie-modernes",
  },
  {
    uuid: "43648f80-c6cf-012f-b5f2-58d385a7bc34",
    slug: "kumano-no-honji-emaki",
  },
  {
    uuid: "eca5a000-c6b8-012f-91c7-58d385a7bc34",
    slug: "russian-ballet-dancers-in-photographs",
  },
  {
    uuid: "08a37ba0-71d9-0138-b0ad-03da9762dee1",
    slug: "chiang-ching-video-archive",
  },
  {
    uuid: "0c7dcaf0-7370-0138-4fd2-0fd244c493ee",
    slug: "church-buildings",
  },
  {
    uuid: "a94a2600-bac1-0132-6c51-58d385a7b928",
    slug: "ernst-ludwig-kirchner",
  },
  {
    uuid: "88db9900-c6b4-012f-d9dd-58d385a7bc34",
    slug: "palestine-and-syria",
  },
  {
    uuid: "d3bcf270-c6cb-012f-d98b-58d385a7bc34",
    slug: "ysuf-va-zulaykh-2",
  },
  {
    uuid: "add66660-906b-0132-edf6-58d385a7b928",
    slug: "petri-de-blarroriuo-parhisiani-insigne-nanceidos",
  },
  {
    uuid: "b17dddc0-5a96-0135-75a7-0813eb4bb11d",
    slug: "the-oster-collection",
  },
  {
    uuid: "6e7fd490-c602-012f-3979-58d385a7bc34",
    slug: "the-jewish-communal-register-of-new-york-city-1917-1918",
  },
  {
    uuid: "5ec65280-8939-0132-8d5e-58d385a7b928",
    slug: "malerische-innenrume-moderner-wohnungen",
  },
  {
    uuid: "2945bd20-eee4-0133-15d5-00505686a51c",
    slug: "the-myung-soo-kim-video-archive",
  },
  {
    uuid: "ab70b940-8bf4-0138-1291-7556ca42a5dc",
    slug: "the-story-of-dolly-dowsie-and-the-live-rocking-horse",
  },
  {
    uuid: "44322700-c607-012f-9ad3-58d385a7bc34",
    slug: "william-n-and-isabele-t-spiller-photograph-collection",
  },
  {
    uuid: "6cc047d0-189f-0131-d26b-58d385a7bbd0",
    slug: "henry-kimball-hadley-papers",
  },
  {
    uuid: "24c9b2c0-8f02-0138-3b86-69d5f47036bc",
    slug: "books-in-the-war",
  },
  {
    uuid: "2cd5ed30-e859-0137-e866-0006d55287fb",
    slug: "james-oppenheim-papers",
  },
  {
    uuid: "dbbd8070-c5fa-0137-c438-15c9d241f05f",
    slug: "collection-of-abbey-theatre-ephemera",
  },
  {
    uuid: "aa448970-5c99-0138-4ca0-574268839ab3",
    slug: "thomas-skelton-papers",
  },
  {
    uuid: "6693b8e0-5742-0138-d956-517abe64ba85",
    slug: "tharon-musser-designs-and-papers",
  },
  {
    uuid: "39dc7130-6791-0138-def4-0b38894de810",
    slug: "richard-nelson-papers-and-designs",
  },
  {
    uuid: "29489070-bbf7-0135-f2e8-3f5f544a5965",
    slug: "carolyn-george-photographs",
  },
  {
    uuid: "57e04f90-513a-0130-86aa-58d385a7b928",
    slug: "collection-of-18th-century-manuscript-music-ca-1730-1750",
  },
  {
    uuid: "5e76f010-9dcd-0132-0a54-58d385a7b928",
    slug: "benjamin-miller",
  },
  {
    uuid: "f6a38460-1f6e-0138-a4c6-37bbb49434f0",
    slug: "calendrier-historial",
  },
  {
    uuid: "8261a370-a9a1-0138-6e89-03d36ba99553",
    slug: "uuarachtighe-ende-grondighe-beschryvinghe-van-het-groot-en-gout-rijck",
  },
  {
    uuid: "26c01c60-c607-012f-5efe-58d385a7bc34",
    slug: "sangoku-meiken-tessenka",
  },
  {
    uuid: "ed1e6520-b309-0138-6bec-71742e3aa892",
    slug: "the-cavalla-messenger",
  },
  {
    uuid: "d9066440-6a81-0131-76ce-58d385a7b928",
    slug: "richard-hoover-designs-and-papers",
  },
  {
    uuid: "82055c50-2046-0138-5a64-336a95969a86",
    slug: "offenbach-archival-depot",
  },
  {
    uuid: "13938ce0-c6c0-012f-c1a2-58d385a7bc34",
    slug: "loie-fuller",
  },
  {
    uuid: "3308f5c0-24dd-0138-714e-2bc597493e18",
    slug: "narrative-of-a-residence-in-algiers",
  },
  {
    uuid: "7cc30d20-bac6-0132-4c01-58d385a7bbd0",
    slug: "ryonosuke-fukui",
  },
  {
    uuid: "ea2ef0a0-24e1-0138-7414-05f3b1b11b8e",
    slug: "the-captives",
  },
  {
    uuid: "4f200ec0-92b9-0132-027f-58d385a7bbd0",
    slug: "tsugouharu-foujita",
  },
  {
    uuid: "32e2e4e0-f1f9-0137-1170-2370d3c8bdb9",
    slug: "wie-die-ostmark-ihre-befreiung-erlebte",
  },
  {
    uuid: "d8e0b2e0-1f8d-0138-424e-087b1d109fc0",
    slug: "grosvenor-notes",
  },
  {
    uuid: "d359b460-2428-0138-b7db-2f7f8bec869d",
    slug: "le-dessin-et-son-enseignement-dans-les-coles-de-tokio",
  },
  {
    uuid: "f89926b0-2f15-0138-2107-5d7872205ac5",
    slug: "le-tour-du-monde-en-quatre-vingts-jours",
  },
  {
    uuid: "66929920-2427-0138-7b34-75a026bcba89",
    slug: "little-wars",
  },
  {
    uuid: "b60e6aa0-3576-0138-4faa-1fd1465b96e4",
    slug: "little-women",
  },
  {
    uuid: "09b3b4d0-c6d6-012f-4166-3c075448cc4b",
    slug: "thirty-six-views-of-jehol",
  },
  {
    uuid: "6b6bab60-c6df-012f-66f9-58d385a7bc34",
    slug: "documents-de-style-empire-le-luminaire-recuell-de-documents-publi-par-e-hessling",
  },
  {
    uuid: "31937290-bf0e-0138-aad9-2b80ffff21eb",
    slug: "prints-by-edward-hopper",
  },
  {
    uuid: "c64bd590-c623-012f-65ab-58d385a7bc34",
    slug: "ressen-zukan",
  },
  {
    uuid: "fe489d00-c6cd-012f-db76-58d385a7bc34",
    slug: "albom-suvorovskikh-pole-srazhen",
  },
  {
    uuid: "96e38cc0-6639-0138-e6bf-1da170c07e4e",
    slug: "the-mermaid-at-home",
  },
  {
    uuid: "3bac8e30-c60b-012f-3ee9-58d385a7bc34",
    slug: "biblia-dat-is-de-gantsche-h-schrifture-vervattende-allede-canonycke-boecken",
  },
  {
    uuid: "65af4e70-c38c-0138-d8de-069b0874cd3d",
    slug: "edward-thomas-collection-of-papers",
  },
  {
    uuid: "f25df320-ba43-0138-07eb-43c9c23c275a",
    slug: "photographs-by-erna-lendvai-dirksen",
  },
  {
    uuid: "b9643b30-b3f4-0138-59cc-336c161fc4f9",
    slug: "el-periquillo-sarniento",
  },
  {
    uuid: "8266d230-c453-0138-cc77-3bcd9532ff23",
    slug: "thomas-bohen-papers-regarding-grace-paley",
  },
  {
    uuid: "93d6e3f0-3b01-0138-5762-6beed2c4c3f5",
    slug: "michael-friedman-papers",
  },
  {
    uuid: "bea63b60-adc8-0138-7284-15a93a8f8bb5",
    slug: "scrapbooks",
  },
  {
    uuid: "7216bde0-3236-0138-9a01-65c9e545fe55",
    slug: "miscellaneous-personal-name-files-2",
  },
  {
    uuid: "00cb5dd0-c2ca-0138-caa4-33e3ca33d743",
    slug: "victor-young-papers",
  },
  {
    uuid: "f8965280-9050-0132-d187-58d385a7bbd0",
    slug: "fifty-prints-of-the-year-1932",
  },
  {
    uuid: "4a3d6040-c51f-0138-6c97-1fb0665ca7e9",
    slug: "theatre-on-film-and-tape-archive-public-program-videos",
  },
  {
    uuid: "95bab330-c6ed-012f-2200-58d385a7bc34",
    slug: "yamato-jinbutsu-gafu",
  },
  {
    uuid: "4f2e6cc0-c626-012f-e124-58d385a7bc34",
    slug: "viaggio-della-terra-sancta-di-yherusaleme",
  },
  {
    uuid: "614d9f90-c6b8-012f-3c96-58d385a7bc34",
    slug: "de-consolation",
  },
  {
    uuid: "607c2c10-c6b4-012f-8cbf-3c075448cc4b",
    slug: "hakuby-genji-monogatari-emaki",
  },
  {
    uuid: "99e88320-ed2f-0137-03ab-4514288df0ec",
    slug: "willa-kim-collection-of-scripts",
  },
  {
    uuid: "cc8109b0-da17-0136-affa-3be6df21b07e",
    slug: "jacobs-pillow-dance-festival-scrapbooks",
  },
  {
    uuid: "dfd2b790-e305-0137-ea03-49e136cb8860",
    slug: "nezumi-no-soshi-emaki-2",
  },
  {
    uuid: "0aff3090-4452-0133-bbc9-00505686a51c",
    slug: "bhagavata-purana",
  },
  {
    uuid: "22d72510-c6b5-012f-582a-58d385a7bc34",
    slug: "tarjumah-i-al-maslik-va-al-mamlik",
  },
  {
    uuid: "57a09260-c5e2-0137-ebd2-2d15ae10ae54",
    slug: "the-love-lyrics-songs-of-proteus",
  },
  {
    uuid: "95676ed0-ae8d-0138-f0f5-3dbaf6ec86cb",
    slug: "suites",
  },
  {
    uuid: "42c8a190-627e-0130-72a3-58d385a7b928",
    slug: "the-new-england-primer-enlarged",
  },
  {
    uuid: "2a447010-e568-0138-1b0e-0b59e44c4cd9",
    slug: "harlem-neighborhoods-association-records",
  },
  {
    uuid: "911f9a80-e198-0138-3876-00218a75a58b",
    slug: "new-york-typographical-union-no-6-records",
  },
  {
    uuid: "6e3fe7d0-c3b6-0138-cdf0-35738cc02854",
    slug: "printers-ink",
  },
  {
    uuid: "f5393650-c6f3-012f-a4c2-58d385a7bc34",
    slug: "the-negro-in-chicago",
  },
  {
    uuid: "c1b93460-c3b9-0138-a8f1-1f92769a7bfe",
    slug: "the-periscope",
  },
  {
    uuid: "0d5aeb80-c6f2-012f-85eb-3c075448cc4b",
    slug: "the-history-of-the-negro-church",
  },
  {
    uuid: "3f019f90-d763-0138-3776-00b4c2bf1914",
    slug: "robert-f-byrnes-collection-of-automat-memorabilia",
  },
  {
    uuid: "bc8493e0-c6bf-012f-edea-58d385a7bc34",
    slug: "town-country",
  },
  {
    uuid: "4559ccf0-eaeb-0138-2a33-0242ac110002",
    slug: "elizabeth-van-lew-papers",
  },
  {
    uuid: "26ea1bb0-ee14-0138-2e4d-0242ac110003",
    slug: "bacon-cipher-collection",
  },
  {
    uuid: "b64b3d20-c6ec-012f-1681-3c075448cc4b",
    slug: "albom-kostromsko-gubernsko-zemsko-vystavki-ustroenno-v-oznamenovanie-300-lietiia",
  },
  {
    uuid: "1257ed70-004e-0130-6ea8-58d385a7bc34",
    slug: "odessa",
  },
  {
    uuid: "55c7a4c0-ea32-0138-3962-0242ac110005",
    slug: "richard-john-levy-and-sally-waldman-sweet-collection",
  },
  {
    uuid: "406d6590-f63d-0135-c35b-0011bcf75ea5",
    slug: "isabel-florence-hapgood-papers",
  },
  {
    uuid: "b2eb11a0-f13a-0138-ffc9-0242ac110003",
    slug: "america-being-the-latest-and-most-accurate-description-of-the-nevv-vvorld-2",
  },
  {
    uuid: "2ab7cd50-a0d8-0132-4e69-58d385a7bbd0",
    slug: "habitvs-prcipvorvm-popvlorvm-tam-virorvm-qvam-fminarum-singulari-arte-depicti",
  },
  {
    uuid: "c2cd85f0-c90c-0138-3387-0f777ab4d564",
    slug: "victory-book-campaign-records",
  },
  {
    uuid: "c3588fe0-c602-012f-3395-58d385a7bc34",
    slug: "ascap-journal",
  },
  {
    uuid: "6c492650-b500-0130-d3de-58d385a7b928",
    slug: "alberta-hunter-photograph-collection",
  },
  {
    uuid: "d39d1810-f156-0138-0bed-0242ac110003",
    slug: "joannis-keppleri-de-stella-nova-in-pede-serpentarii",
  },
  {
    uuid: "e0bfbb30-f6d5-0138-be0d-0242ac110003",
    slug: "makhzan-al-asrar",
  },
  {
    uuid: "810e1550-0199-0133-e007-58d385a7bbd0",
    slug: "nanette-bearden-photograph-collection",
  },
  {
    uuid: "0e52b240-0042-0130-84f0-58d385a7bc34",
    slug: "official-records-of-the-union-and-confederate-navies-in-the-war-of-the-rebellion",
  },
  {
    uuid: "efa02bf0-bb8e-0132-05bb-58d385a7bbd0",
    slug: "postcards-of-the-united-states",
  },
  {
    uuid: "04312ae0-4807-0137-5af3-01d2bffc15fe",
    slug: "report",
  },
  {
    uuid: "a8a3b350-4d06-0134-c39b-00505686d14e",
    slug: "t-s-eliot-collection-of-papers",
  },
  {
    uuid: "179ec230-e7ee-0130-2963-58d385a7b928",
    slug: "the-spur",
  },
  {
    uuid: "02dc4150-0af5-0138-226c-6d7d9c28f46f",
    slug: "drawings-depicting-chinese-and-indian-persons-engaged-in-tobacco-related-jobs",
  },
  {
    uuid: "5ef64900-fcf5-0138-45ab-0242ac110004",
    slug: "alix-b-williamson-papers",
  },
  {
    uuid: "d4909390-0f8d-0133-b548-58d385a7b928",
    slug: "aurora-leigh",
  },
  {
    uuid: "7714ed00-e1ff-0132-d6b7-58d385a7b928",
    slug: "mundo-grfico",
  },
  {
    uuid: "ae0960f0-fc63-0130-43bf-58d385a7bbd0",
    slug: "my-life-and-sacred-songs",
  },
  {
    uuid: "67a971b0-e596-0130-aee6-58d385a7bbd0",
    slug: "yankee-diva",
  },
  {
    uuid: "be1cd470-5c3a-0131-a34e-58d385a7b928",
    slug: "passio-domini-nostri-iesu",
  },
  {
    uuid: "51801cd0-3dec-0133-17fb-00505686a51c",
    slug: "pauline-clairmont-manuscript-material",
  },
  {
    uuid: "bbd196b0-639a-0132-0849-58d385a7b928",
    slug: "photographs-by-esther-bubley",
  },
  {
    uuid: "86111b50-3e02-0133-0d38-00505686a51c",
    slug: "wilhelm-charles-gaulis-clairmont-manuscript-material",
  },
  {
    uuid: "d12131f0-511b-0135-2d97-0d731f11179f",
    slug: "miscellaneous-collections-subjects",
  },
  {
    uuid: "c2f60a00-2079-0130-1037-58d385a7bbd0",
    slug: "pennsylvania",
  },
  {
    uuid: "51746a10-c605-012f-a8ab-58d385a7bc34",
    slug: "the-bridge-a-poem",
  },
  {
    uuid: "251a6be0-899a-0130-63dc-58d385a7b928",
    slug: "the-heathen-chinee",
  },
  {
    uuid: "d6e69a40-0eff-0133-3f72-58d385a7bbd0",
    slug: "the-life-and-transactions-of-margaret-nicholson",
  },
  {
    uuid: "32597ca0-747e-0130-f409-58d385a7b928",
    slug: "topographiae",
  },
  {
    uuid: "00f33e00-3e45-0130-7a06-58d385a7b928",
    slug: "twelve-views-in-the-interior-of-guiana",
  },
  {
    uuid: "b4e106b0-de18-0132-f6c5-58d385a7bbd0",
    slug: "clairmont-family-papers",
  },
  {
    uuid: "ef9c7a60-c608-012f-7a91-58d385a7bc34",
    slug: "the-voice-of-the-negro",
  },
  {
    uuid: "ea3dd8d0-c603-012f-4d7a-58d385a7bc34",
    slug: "open-vistas-a-bi-monthly-of-life-and-letters",
  },
  {
    uuid: "bd638b50-c605-012f-a253-58d385a7bc34",
    slug: "the-red-badge-of-courage",
  },
  {
    uuid: "ba8bfc00-0a6d-0130-3743-58d385a7bbd0",
    slug: "the-souls-of-black-folk",
  },
  {
    uuid: "02ee6480-01b2-0139-80be-0242ac110002",
    slug: "national-board-of-review-of-motion-pictures-records",
  },
  {
    uuid: "0a4f2550-d04a-0138-221b-0f52d04aacde",
    slug: "habitat",
  },
  {
    uuid: "a23fade0-bade-0138-875c-153f216dc9ab",
    slug: "motorcycle-illustrated",
  },
  {
    uuid: "386d5830-2876-0131-23db-58d385a7bbd0",
    slug: "the-history-of-that-great-and-renowned-monarchy-of-china",
  },
  {
    uuid: "32441120-c605-012f-5eb5-58d385a7bc34",
    slug: "a-new-and-accurate-account-of-the-provinces-of-south-carolina-and-georgia",
  },
  {
    uuid: "c67ac940-c604-012f-154d-58d385a7bc34",
    slug: "designs-by-mr-r-bentley-for-six-poems-by-mr-t-gray",
  },
  {
    uuid: "33680d50-c623-012f-de3b-58d385a7bc34",
    slug: "metalcraft",
  },
  {
    uuid: "51a9ecf0-cbc0-0130-c000-58d385a7b928",
    slug: "galleria-givstiniana-del-marchese-vincenzo-givstiniani",
  },
  {
    uuid: "2c2aabf0-aea1-0130-6226-58d385a7bbd0",
    slug: "max-klinger",
  },
  {
    uuid: "b785c2b0-c605-012f-3fb8-58d385a7bc34",
    slug: "ancient-egyptian-paintings",
  },
  {
    uuid: "09e0abe0-fb8c-012f-8e6f-58d385a7b928",
    slug: "art-and-progress",
  },
  {
    uuid: "d5fb9470-b95d-0133-2f40-00505686d14e",
    slug: "british-galleries-of-painting-and-sculpture",
  },
  {
    uuid: "e3d65fe0-c605-012f-ca99-58d385a7bc34",
    slug: "coes-crosstown-carnival",
  },
  {
    uuid: "83a8ba50-5f89-0131-1b23-58d385a7b928",
    slug: "costumes-anciens-et-modernes",
  },
  {
    uuid: "aaf96480-a47a-0130-be29-58d385a7b928",
    slug: "cours-darchitecture-ou-trait-de-la-dcoration-distribution-construction",
  },
  {
    uuid: "4cd0a980-c605-012f-2943-58d385a7bc34",
    slug: "das-deutsche-zimmer-der-renaissance",
  },
  {
    uuid: "0ab4a170-ec4f-0132-2906-58d385a7b928",
    slug: "dorische-polychromie",
  },
  {
    uuid: "9f0f7930-93f9-0130-bf6f-58d385a7b928",
    slug: "epidaure",
  },
  {
    uuid: "022e9970-9e3b-0130-c949-58d385a7b928",
    slug: "histoire-de-lhabitation-humaine",
  },
  {
    uuid: "6b7c4900-c186-0130-3bb1-58d385a7bbd0",
    slug: "iranische-felsreliefs",
  },
  {
    uuid: "945b6610-ec4b-0132-6662-58d385a7bbd0",
    slug: "le-jupiter-olympien",
  },
  {
    uuid: "d634c820-c605-012f-c17b-58d385a7bc34",
    slug: "the-temple-of-king-sethos-i-at-abydos",
  },
  {
    uuid: "91fa7c10-d539-0130-c5f0-58d385a7b928",
    slug: "difices-de-rome-moderne-ou",
  },
  {
    uuid: "25c449a0-de56-012f-06f5-58d385a7bbd0",
    slug: "apocalypsis-sancti-johannis-2",
  },
  {
    uuid: "f252ca30-d051-0138-7e2b-23e29c8d2534",
    slug: "john-tenniel-final-proofs",
  },
  {
    uuid: "597a1ee0-0741-0139-1b34-0242ac110004",
    slug: "s-n-behrman-papers",
  },
  {
    uuid: "d9ba5cb0-51f4-0130-01d2-58d385a7bbd0",
    slug: "amphitheatrum-sapientiae-aeternae-solius-verae-christiano-kabalisticum",
  },
  {
    uuid: "cdd628a0-cf16-0131-1957-58d385a7bbd0",
    slug: "optic-thesavrvs",
  },
  {
    uuid: "b61735b0-c602-012f-21dc-58d385a7bc34",
    slug: "pomponii-melae-de-orbis-sitv-libri-tres-accvratissime-emendati",
  },
  {
    uuid: "90a50de0-eccc-0130-02fa-58d385a7b928",
    slug: "the-pen-mans-paradis-both-pleasant-profitable",
  },
  {
    uuid: "cef90b00-a6cf-0130-91c5-58d385a7b928",
    slug: "uvres-de-moliere-2",
  },
  {
    uuid: "0cd68c20-07fe-0139-a640-0242ac110005",
    slug: "chester-f-carlson-papers",
  },
  {
    uuid: "3d82de10-fe03-0130-e26e-58d385a7b928",
    slug: "a-relation-of-a-voyage-made-in-the-years-1695-1696-1697",
  },
  {
    uuid: "c62fccf0-286b-0131-2dbd-58d385a7b928",
    slug: "de-bello-tartarico-historia",
  },
  {
    uuid: "2ecaa940-cf14-0131-eb21-58d385a7bbd0",
    slug: "theatrum-biblicum",
  },
  {
    uuid: "3a02a050-c512-0132-bdc0-58d385a7bbd0",
    slug: "machinae-novae-favsti-verantii-siceni",
  },
  {
    uuid: "aee0fa00-8b8a-0131-534e-58d385a7bbd0",
    slug: "margarita-philosophica",
  },
  {
    uuid: "04e41ba0-c617-012f-824d-58d385a7bc34",
    slug: "murs-usages-et-costumes-de-tous-les-peuples-du-monde-daprs-des-documents",
  },
  {
    uuid: "c80ee810-c604-012f-6071-58d385a7bc34",
    slug: "nicolaus-gerhaert-seine-kunst-und-seine-wirkung",
  },
  {
    uuid: "aad60390-c4c6-0131-e6ee-58d385a7bbd0",
    slug: "photographic-topics",
  },
  {
    uuid: "48ddb400-ba8e-0130-c865-58d385a7b928",
    slug: "the-diagonal",
  },
  {
    uuid: "43a394a0-a3c0-0130-1c8a-58d385a7bbd0",
    slug: "the-literary-works-of-leonardo-da-vinci",
  },
  {
    uuid: "eaa1a700-1920-0133-bb36-58d385a7b928",
    slug: "tombeaux-des-princes-de-grands-capitaines-et-autres-hommes-illustres-qui-ont",
  },
  {
    uuid: "fe470930-c0c2-0130-249b-58d385a7b928",
    slug: "vida-do-apostolico-padre-antonio-vieyra-da-companhia-de-jesus-chamado-por",
  },
  {
    uuid: "f1e80280-c609-012f-5c97-58d385a7bc34",
    slug: "david-copperfield",
  },
  {
    uuid: "22cf9270-0769-0139-309e-0242ac110002",
    slug: "british-headquarters-papers",
  },
  {
    uuid: "1c63d960-b753-0130-60c3-58d385a7b928",
    slug: "elementa-geometriae",
  },
  {
    uuid: "e8257540-dfc5-0132-77f3-58d385a7b928",
    slug: "compte-rendu-de-gestion-pour-lexercice",
  },
  {
    uuid: "56d05990-1775-0133-aa0e-58d385a7bbd0",
    slug: "der-kurlnder",
  },
  {
    uuid: "f29e9370-ece0-0136-209a-791c30a824b9",
    slug: "jacobs-pillow-scrapbooks",
  },
  {
    uuid: "c2767180-c605-012f-d926-58d385a7bc34",
    slug: "apollonii-pergaei-conicorum-libri-octo-et-sereni-antissensis-de-sectione",
  },
  {
    uuid: "0a255620-c605-012f-370a-58d385a7bc34",
    slug: "astronomica-institutio",
  },
  {
    uuid: "438826b0-9bb8-0130-aadd-58d385a7b928",
    slug: "trages-y-costumbres-de-la-provincia-de-buenos-aires",
  },
  {
    uuid: "20024ad0-ce82-0138-be1c-009bfa5ca3ec",
    slug: "engineering-review",
  },
  {
    uuid: "a5024400-efb0-0138-bff6-0242ac110003",
    slug: "artistic-houses",
  },
  {
    uuid: "a7174220-c607-012f-025e-58d385a7bc34",
    slug: "illustrations-of-the-croton-aqueduct",
  },
  {
    uuid: "4b18e9a0-72f0-0130-fd27-58d385a7b928",
    slug: "morbidity-and-mortality-weekly-report",
  },
  {
    uuid: "916fb990-85c5-0130-c36f-58d385a7bbd0",
    slug: "nouveau-systme-du-monde-conforme-lecriture-sainte",
  },
  {
    uuid: "cae17d60-c602-012f-d929-58d385a7bc34",
    slug: "exposition-des-dcouvertes-philosophiques-de-m-le-chevalier-newton",
  },
  {
    uuid: "300a30b0-5c5c-0131-9203-58d385a7bbd0",
    slug: "fashions-of-the-hour",
  },
  {
    uuid: "919c6d30-c604-012f-0fc0-58d385a7bc34",
    slug: "geometria-renato-des-cartes-anno-1637-gallic-edita",
  },
  {
    uuid: "e7763da0-5379-0130-7edb-58d385a7bbd0",
    slug: "la-dioptrique-oculaire-ou-la-thorique-la-positive-et-la-mchanique-de-loculaire",
  },
  {
    uuid: "74e15670-c602-012f-a1d8-58d385a7bc34",
    slug: "les-forces-physiques",
  },
  {
    uuid: "b5440890-e179-0138-6d09-2b641f1db186",
    slug: "les-travaux-souterrains-de-paris",
  },
  {
    uuid: "ab082070-c846-0137-d87a-339bcbf6ad97",
    slug: "the-official-foreign-air-mail-guide",
  },
  {
    uuid: "11e30370-d268-0137-685e-016d9a5014a5",
    slug: "london-terrace-tatler",
  },
  {
    uuid: "036ba230-19b7-0137-9b3e-0215fdbc9add",
    slug: "voyages-au-soudan-oriental-et-dans-lafrique-septenrionale-excuts-de-1847-1854",
  },
  {
    uuid: "8e98bd30-c60a-012f-efce-58d385a7bc34",
    slug: "gramercy-parks-illustrated-bulletin",
  },
  {
    uuid: "952d4d50-c60a-012f-f864-58d385a7bc34",
    slug: "physica-curiosa-sive-mirabilia-naturae-et-artis",
  },
  {
    uuid: "ff833d00-c608-012f-676c-58d385a7bc34",
    slug: "a-philip-randolph-institute-collection",
  },
  {
    uuid: "bab5db80-1004-0139-2ed9-0242ac110003",
    slug: "adolph-bolm-photographic-scrapbook",
  },
  {
    uuid: "15a89040-85d5-0130-46ff-58d385a7b928",
    slug: "opere-del-conte-jacopo-riccati-nobile-trevigiano",
  },
  {
    uuid: "287646c0-c609-012f-f87e-58d385a7bc34",
    slug: "rp-athanasii-kircheri-e-societate-jesu-iter-extaticum-coeleste",
  },
  {
    uuid: "ddf5b090-c607-012f-e6ae-58d385a7bc34",
    slug: "albert-victor-johnson-collection",
  },
  {
    uuid: "75af62c0-c606-012f-0ad9-58d385a7bc34",
    slug: "systema-cosmicvm",
  },
  {
    uuid: "8ca9f630-46de-0130-a8fa-58d385a7bbd0",
    slug: "the-american-swedish-monthly",
  },
  {
    uuid: "743198b0-c606-012f-a34e-58d385a7bc34",
    slug: "the-annals-of-newtown-in-queens-county-new-york",
  },
  {
    uuid: "b5611610-c607-012f-1a6f-58d385a7bc34",
    slug: "the-picturesque-beauties-of-the-hudson-river-and-its-vicinity",
  },
  {
    uuid: "93ff9990-10c1-0139-7816-0242ac110003",
    slug: "theatre-world",
  },
  {
    uuid: "adcedf70-ab22-0137-4f6f-45a28b658ce0",
    slug: "alvin-ailey-american-dance-theater-photograph-collection",
  },
  {
    uuid: "de08c0d0-ede1-0132-a921-58d385a7bbd0",
    slug: "catalogs-announcements-etc",
  },
  {
    uuid: "599ea220-c604-012f-505e-58d385a7bc34",
    slug: "letters-notes-and-postcards-1871-1932",
  },
  {
    uuid: "9129c990-dfae-0132-4325-58d385a7b928",
    slug: "life-travels-and-adventures-in-california-and-scenes-in-the-pacific-ocean",
  },
  {
    uuid: "898542d0-c604-012f-a306-58d385a7bc34",
    slug: "plunkitt-of-tammany-hall-a-series-of-very-plain-talks-on-very-practical-politics",
  },
  {
    uuid: "ac9f3980-f9ec-012f-97f1-58d385a7b928",
    slug: "property-by-arthur-jerome-eddy",
  },
  {
    uuid: "8d639a80-cbcd-0130-bc07-58d385a7b928",
    slug: "recollections-of-thomas-d-duncan-a-confederate-soldier",
  },
  {
    uuid: "37fbf1c0-f888-0130-d215-58d385a7bbd0",
    slug: "reports-of-explorations-and-surveys",
  },
  {
    uuid: "fc4a3e40-c605-012f-c208-58d385a7bc34",
    slug: "revelation-des-mysteres-des-teintures-essencieles-des-sept-metaux-et-de-leurs",
  },
  {
    uuid: "54284750-c607-012f-6f68-58d385a7bc34",
    slug: "ruth-page-awards-programs",
  },
  {
    uuid: "355bb990-e1f6-0132-da96-58d385a7bbd0",
    slug: "science-and-mechanics",
  },
  {
    uuid: "f7079da0-7482-0130-5e1f-58d385a7b928",
    slug: "the-edison-monthly",
  },
  {
    uuid: "0767e510-c603-012f-5307-58d385a7bc34",
    slug: "the-criminal-prisons-of-london-and-scenes-of-prison-life-by-henry-mayhew",
  },
  {
    uuid: "4e92ea50-bb61-0139-c8f3-0242ac110005",
    slug: "jane-porter-papers",
  },
  {
    uuid: "60932400-20f2-0138-8583-05c43d448773",
    slug: "posada-collection",
  },
  {
    uuid: "95299cd0-bda0-0139-9ae1-0242ac110003",
    slug: "wilkie-collins-collection-of-papers",
  },
  {
    uuid: "8e106df0-c608-012f-8934-58d385a7bc34",
    slug: "elizabeth-barrett-browning-collection-of-papers-2",
  },
  {
    uuid: "094aa790-8a87-0139-d854-0242ac110002",
    slug: "harold-m-fleming-papers",
  },
  {
    uuid: "26e7b4f0-ef87-0137-2eb4-05b75e737ac4",
    slug: "costas-dance-photographs",
  },
  {
    uuid: "53683760-0a7a-0139-66b2-0242ac110004",
    slug: "schomburg-menu-collection",
  },
  {
    uuid: "3a994050-bc12-0139-f2b7-0242ac110005",
    slug: "robert-brewster-stanton-papers",
  },
  {
    uuid: "aaecc3c0-0036-0130-c93a-58d385a7bc34",
    slug: "reproductions-in-facsimile-of-drawings-by-the-old-masters-in-the-collection",
  },
  {
    uuid: "6212e980-93d3-0139-51bb-0242ac110002",
    slug: "robert-browning-collection-of-papers",
  },
  {
    uuid: "f2d52900-4cf1-0138-2fe8-7945a6596273",
    slug: "il-callotto-resuscitato",
  },
  {
    uuid: "3fc33e80-c608-012f-a8d1-58d385a7bc34",
    slug: "limn-choreography",
  },
  {
    uuid: "4ee1f1d0-7e95-0139-c74e-0242ac110002",
    slug: "music-division-rare-iconography",
  },
  {
    uuid: "46db7f40-9969-0139-db92-0242ac110002",
    slug: "william-williams-papers",
  },
  {
    uuid: "d4e0dea0-c6da-012f-0c6b-58d385a7bc34",
    slug: "projets-darchitecture-et-autres-productions-de-cet-art-qui-ont-mrit-les-grands",
  },
  {
    uuid: "704e6970-c6db-012f-d6d7-58d385a7bc34",
    slug: "thorie-de-la-figure-humaine-considre-dans-ses-principes-soit-en-repos-ou-en",
  },
  {
    uuid: "789e31f0-1626-0139-1414-0242ac110004",
    slug: "boris-aronson-papers-and-designs",
  },
  {
    uuid: "ade6cf60-9a4a-0139-5029-0242ac110002",
    slug: "john-bigelow-papers",
  },
  {
    uuid: "ef3c66a0-c6d9-012f-28ca-58d385a7bc34",
    slug: "in-motion-the-african-american-migration-experience",
  },
  {
    uuid: "7b1224b0-18a4-0139-e694-0242ac110004",
    slug: "loie-fuller-collection",
  },
  {
    uuid: "a0ab73a0-c6cd-012f-703b-58d385a7bc34",
    slug: "the-slaves-friend",
  },
  {
    uuid: "61ca95c0-9fa6-0139-cc75-0242ac110002",
    slug: "richard-rodgers-papers",
  },
  {
    uuid: "4e5120a0-b763-0139-df95-0242ac110005",
    slug: "robert-graves-collection-of-papers",
  },
  {
    uuid: "87026160-8fe5-0139-b56e-0242ac110002",
    slug: "isaac-rosenberg-collection-of-papers",
  },
  {
    uuid: "ae4193a0-b810-0139-c001-0242ac110005",
    slug: "ken-dewey-collection",
  },
  {
    uuid: "f8da4800-aa33-0139-c762-0242ac110003",
    slug: "jos-limn-and-pauline-lawrence-limn-photograph-files",
  },
  {
    uuid: "9ba81870-59af-0139-4605-0242ac110003",
    slug: "the-trefoil",
  },
  {
    uuid: "d3616560-9012-0139-b36d-0242ac110002",
    slug: "sir-leslie-stephen-collection-of-papers",
  },
  {
    uuid: "16c2fbe0-958f-0139-8a7a-0242ac110002",
    slug: "abraham-lincoln-collection",
  },
  {
    uuid: "9f210560-5f9c-0139-94e5-0242ac110002",
    slug: "caffe-cino-posters",
  },
  {
    uuid: "6a1ca4e0-5373-0139-5c13-0242ac110003",
    slug: "jumbo-costume-designs",
  },
  {
    uuid: "8e632940-c6bb-012f-f93c-58d385a7bc34",
    slug: "a-treatise-of-japaning-and-varnishing",
  },
  {
    uuid: "e1521670-c6ba-012f-b5fe-58d385a7bc34",
    slug: "key-to-the-art-of-drawing-the-human-figure-comprised-in-twenty-four",
  },
  {
    uuid: "01df1930-3744-0139-53ce-0242ac110004",
    slug: "lucille-lortel-papers",
  },
  {
    uuid: "0525fae0-c6b8-012f-29ab-58d385a7bc34",
    slug: "nouveau-livre-dornemens-douvrages-dorfvrerie",
  },
  {
    uuid: "61ef4260-d2da-0139-ff02-0242ac110003",
    slug: "vladimir-nabokov-papers",
  },
  {
    uuid: "0a16a740-4845-0139-8194-0242ac110004",
    slug: "magic-scrapbooks-and-posters",
  },
  {
    uuid: "e4de6670-1c90-0139-3bc2-0242ac110004",
    slug: "leland-hayward-papers",
  },
  {
    uuid: "f29247f0-aa9f-0139-7ebc-0242ac110003",
    slug: "new-york-times-company-records-general-files",
  },
  {
    uuid: "5f23ddc0-aa31-0139-cf1b-0242ac110003",
    slug: "jos-limn-papers",
  },
  {
    uuid: "2774cc80-cdc5-0138-4ed2-3b83f0a420d2",
    slug: "gala-performance-to-save-the-dance-collection-photographs",
  },
  {
    uuid: "f56f2e30-558f-0138-7a71-39d28a319efb",
    slug: "nathaniel-trumbull-papers",
  },
  {
    uuid: "344cc6b0-01e8-013a-9062-0242ac110002",
    slug: "new-yorker-records",
  },
  {
    uuid: "cf5a0fc0-a1e5-0139-9346-0242ac110002",
    slug: "richard-barr-and-clinton-wilder-papers",
  },
  {
    uuid: "7a07a950-7f6d-0139-a6fe-0242ac110003",
    slug: "teatro-al-da",
  },
  {
    uuid: "e774ce50-c623-012f-e2a2-58d385a7bc34",
    slug: "music-and-some-highly-musical-people",
  },
  {
    uuid: "9ad76130-542b-0139-7779-0242ac110004",
    slug: "camp-shows-publicity-records",
  },
  {
    uuid: "9fb3c9a0-7f6f-0139-3853-0242ac110003",
    slug: "empresario-internacional",
  },
  {
    uuid: "6e592ba0-970a-0139-fc46-0242ac110002",
    slug: "greenwich-village-follies-designs",
  },
  {
    uuid: "9f794cd0-3e49-0130-e27d-58d385a7b928",
    slug: "les-travavx-dvlysse",
  },
  {
    uuid: "2fd4f050-17c3-0139-2e46-0242ac110004",
    slug: "pauline-lawrence-limn-collection",
  },
  {
    uuid: "abba85b0-7948-0139-daca-0242ac110005",
    slug: "spalding-baseball-collection",
  },
  {
    uuid: "44e06e90-234c-0138-4533-599c34b21841",
    slug: "truman-capote-papers",
  },
  {
    uuid: "f1007570-1c7d-0139-14cc-0242ac110004",
    slug: "bertram-david-wolfe-papers",
  },
  {
    uuid: "d91965c0-8684-0139-510c-0242ac110004",
    slug: "bettye-lane-gay-rights-movement-photographs",
  },
  {
    uuid: "29899510-7875-0139-dcd6-0242ac110005",
    slug: "holger-cahill-papers",
  },
  {
    uuid: "bffe9940-79d9-0139-da5c-0242ac110002",
    slug: "horace-grant-healey-penmanship-collection",
  },
  {
    uuid: "70963000-0200-013a-bb25-0242ac110004",
    slug: "jack-kerouac-papers",
  },
  {
    uuid: "1a1bd750-b11a-0139-8ffd-0242ac110005",
    slug: "joel-sayre-papers",
  },
  {
    uuid: "e55362f0-c617-012f-0245-58d385a7bc34",
    slug: "character-recognition",
  },
  {
    uuid: "57c16ac0-10d0-0139-d6c2-0242ac110005",
    slug: "margaret-barker-papers",
  },
  {
    uuid: "014fc8c0-85de-0139-9c5d-0242ac110002",
    slug: "michael-p-riabouchinsky-papers",
  },
  {
    uuid: "c82ae620-64b5-0139-f554-0242ac110002",
    slug: "middleton-spike-harris-papers",
  },
  {
    uuid: "8a53b730-ac5c-0130-2c3f-58d385a7b928",
    slug: "puerto-rico-ilustrado",
  },
  {
    uuid: "f2274e90-4c7d-0139-07aa-0242ac110003",
    slug: "receil-de-figures-antiques",
  },
  {
    uuid: "f53d32c0-537f-0139-6857-0242ac110002",
    slug: "schieffelin-family-papers",
  },
  {
    uuid: "be3b9e90-30d6-0139-fb03-0242ac110003",
    slug: "the-people-of-the-abyss",
  },
  {
    uuid: "40fa8630-ac59-0139-1600-0242ac110004",
    slug: "theodore-winthrop-papers",
  },
  {
    uuid: "d711ab20-aab8-0139-fd33-0242ac110002",
    slug: "tobacco-dealers-trade-cards-labels-and-wrappers",
  },
  {
    uuid: "c072f440-6b0f-0139-2ba8-0242ac110002",
    slug: "alexandria-virginia-account-books",
  },
  {
    uuid: "cd099690-995c-0134-9ae1-00505686d14e",
    slug: "alfred-kazin-papers",
  },
  {
    uuid: "9c525270-88f8-0139-2394-0242ac110004",
    slug: "central-and-eastern-european-planning-board-records",
  },
  {
    uuid: "76034030-0042-0139-ae77-0242ac110002",
    slug: "crane-family-papers",
  },
  {
    uuid: "553d50f0-85a7-0139-8863-0242ac110002",
    slug: "louis-waldman-papers",
  },
  {
    uuid: "4f2ed160-38db-0139-f37f-0242ac110004",
    slug: "maitland-collection-of-south-sea-company-and-mississippi-scheme-papers",
  },
  {
    uuid: "34c76730-c94c-0138-8eff-0bfcc866ca86",
    slug: "miscellaneous-manuscripts-2",
  },
  {
    uuid: "56ada210-c607-012f-740f-58d385a7bc34",
    slug: "mu-dan-ting-huan-hun-ji",
  },
  {
    uuid: "1f732700-7866-0139-62de-0242ac110004",
    slug: "patricia-cornwell-collection",
  },
  {
    uuid: "c2f59fe0-9bae-0139-dbcd-0242ac110002",
    slug: "peter-wexler-photographs-and-designs",
  },
  {
    uuid: "49aa06c0-8fda-0139-1c32-0242ac110002",
    slug: "photographic-negatives-of-dancers-and-dance-companies",
  },
  {
    uuid: "638b1280-a220-0139-80d7-0242ac110002",
    slug: "samuel-ward-papers",
  },
  {
    uuid: "a2095310-9b08-0130-87bb-58d385a7bbd0",
    slug: "sanitary-pottery",
  },
  {
    uuid: "2c6e6be0-0fdf-0139-4f50-0242ac110003",
    slug: "the-pictorial-bible",
  },
  {
    uuid: "d2f9f900-4a13-0139-34b3-0242ac110002",
    slug: "tom-wolfe-papers",
  },
  {
    uuid: "90f16220-8902-0139-b62b-0242ac110002",
    slug: "albert-tracy-papers",
  },
  {
    uuid: "cbdb7190-ee0b-0138-5c6b-0242ac110003",
    slug: "alexandre-vattemare-papers",
  },
  {
    uuid: "17cc3ad0-7484-0139-eaf7-0242ac110002",
    slug: "alfred-williams-anthony-collection",
  },
  {
    uuid: "170df700-42d8-0139-9e87-0242ac110003",
    slug: "anthology-of-kabbalistic-writings-from-north-africa",
  },
  {
    uuid: "7f723c10-7467-0139-b629-0242ac110002",
    slug: "astor-library-records",
  },
  {
    uuid: "0be8d0b0-9c67-0139-518e-0242ac110002",
    slug: "clifford-odets-papers",
  },
  {
    uuid: "aa408090-3a4d-0134-8373-00505686a51c",
    slug: "colonial-dance-orchestra-portrait-collection",
  },
  {
    uuid: "1f8e85a0-42fd-0139-43ba-0242ac110005",
    slug: "edith-segal-papers",
  },
  {
    uuid: "ad56dd30-aa89-0139-a713-0242ac110004",
    slug: "howard-bay-designs-and-technical-drawings",
  },
  {
    uuid: "3a76dd50-ac56-0139-78c9-0242ac110003",
    slug: "jg-holland-papers",
  },
  {
    uuid: "a7b158b0-793e-0139-4b3c-0242ac110002",
    slug: "james-fenimore-cooper-collection-of-papers",
  },
  {
    uuid: "f31196b0-430f-0130-fbf5-58d385a7b928",
    slug: "le-triomphe-de-la-religion-sous-louis-le-grand",
  },
  {
    uuid: "f53a8920-ab8f-0139-960d-0242ac110002",
    slug: "life-of-lady-jane-grey-and-of-lord-guildford-dudley-her-husband",
  },
  {
    uuid: "04ef5d40-899f-0139-70e6-0242ac110002",
    slug: "marianne-moore-collection-of-papers",
  },
  {
    uuid: "2be874f0-5dc1-0130-0672-58d385a7bbd0",
    slug: "narrative-of-the-british-mission-to-theodore-king-of-abyssinia",
  },
  {
    uuid: "05c77250-b4a7-0138-9c26-61281c17e7ae",
    slug: "patrick-kelly-archive",
  },
  {
    uuid: "89842a60-f04d-0138-1992-0242ac110003",
    slug: "raccolta-di-quaranta-proverbi-toscani",
  },
  {
    uuid: "d7923890-3428-0131-aa8f-58d385a7bbd0",
    slug: "rcits-des-temps-mrovingiens",
  },
  {
    uuid: "e88aee80-5a73-0139-c66e-0242ac110002",
    slug: "sir-walter-scott-collection-of-papers",
  },
  {
    uuid: "6776ca10-12fd-0139-9931-0242ac110003",
    slug: "tamara-toumanova-photographic-scrapbooks",
  },
  {
    uuid: "ba252170-9633-0139-414b-0242ac110002",
    slug: "washington-irving-collection-of-papers",
  },
  {
    uuid: "8aed6da0-c609-012f-bb36-58d385a7bc34",
    slug: "candide",
  },
  {
    uuid: "b9d4b9c0-89bd-0139-15fa-0242ac110004",
    slug: "diana-vreeland-papers",
  },
  {
    uuid: "71859be0-3573-0138-3611-537850f88752",
    slug: "dudley-williams-papers",
  },
  {
    uuid: "0450eea0-752b-0139-2e68-0242ac110002",
    slug: "edna-st-vincent-millay-collection-of-papers",
  },
  {
    uuid: "44b0f7a0-341c-0139-22b4-0242ac110004",
    slug: "frank-p-walsh-papers",
  },
  {
    uuid: "20876620-c609-012f-b5bb-58d385a7bc34",
    slug: "historia-inquisitionis-cui-subjungitur-liber-sententiarum-inquisitionis",
  },
  {
    uuid: "286cd7a0-c607-012f-677f-58d385a7bc34",
    slug: "jamaica-1880-1900",
  },
  {
    uuid: "1bf0eed0-41f3-0138-52bc-45b3ee604e76",
    slug: "james-and-charles-daugherty-collection",
  },
  {
    uuid: "af945d80-faa5-0138-1a88-0242ac110002",
    slug: "john-shaw-billings-papers",
  },
  {
    uuid: "afe195f0-cc93-0139-4037-0242ac110004",
    slug: "levi-p-morton-papers",
  },
  {
    uuid: "bef26220-3e64-0139-1978-0242ac110003",
    slug: "lgendes-des-artistes",
  },
  {
    uuid: "80bc0530-8669-0139-db39-0242ac110002",
    slug: "montague-collier-family-papers",
  },
  {
    uuid: "6f35b4b0-c60a-012f-87d4-58d385a7bc34",
    slug: "national-jeweler",
  },
  {
    uuid: "9f7a6910-9a15-0139-5611-0242ac110002",
    slug: "olive-reeves-smith-papers",
  },
  {
    uuid: "06530810-a9c4-0139-cc44-0242ac110003",
    slug: "pauline-koner-papers",
  },
  {
    uuid: "7636f090-c608-012f-a6f5-58d385a7bc34",
    slug: "pedestrianism-or-an-account-of-the-performances-of-celebrated-pedestrians-during",
  },
  {
    uuid: "b6244230-d8d7-0138-f13f-45c5ec4e7863",
    slug: "photographs-by-edward-curtis",
  },
  {
    uuid: "60e257d0-2eee-0137-54ef-6742f2e832ff",
    slug: "piano-solos",
  },
  {
    uuid: "a855de80-10e2-0139-e113-0242ac110002",
    slug: "sardis-restaurant-caricatures",
  },
  {
    uuid: "726b6680-22d3-0139-502a-0242ac110003",
    slug: "sonny-rollins-photograph-collection",
  },
  {
    uuid: "8326b0b0-c61e-012f-47f9-58d385a7bc34",
    slug: "the-new-york-herald-2",
  },
  {
    uuid: "2c8b73d0-2c3f-0130-e922-58d385a7bbd0",
    slug: "the-rider-driver",
  },
  {
    uuid: "43e5e590-12f6-0139-3ad3-0242ac110005",
    slug: "uta-hagen-and-herbert-berghof-papers",
  },
  {
    uuid: "afa8aad0-ab8e-0139-513a-0242ac110005",
    slug: "vito-marcantonio-photographs",
  },
  {
    uuid: "ae7543b0-ad26-0139-95ea-0242ac110004",
    slug: "vito-russo-papers",
  },
  {
    uuid: "7a0b3d00-4784-0138-8a6c-0d5dcc505f83",
    slug: "young-cherry-trees-secured-against-hares",
  },
  {
    uuid: "79768d70-c606-012f-7f4c-58d385a7bc34",
    slug: "a-hoosier-romance-1868",
  },
  {
    uuid: "38f97a30-8b1b-0139-b992-0242ac110003",
    slug: "a-life-worth-living",
  },
  {
    uuid: "be17c740-8515-0139-4932-0242ac110002",
    slug: "aline-macmahon-papers",
  },
  {
    uuid: "3726bd10-3229-0137-37a8-0bd703aeeac1",
    slug: "american-negro-theatre-records",
  },
  {
    uuid: "0b000800-f1e2-0138-0330-0242ac110002",
    slug: "artifacts-and-memorabilia-collection",
  },
  {
    uuid: "f14fabc0-c606-012f-1c62-58d385a7bc34",
    slug: "candide-or-all-for-the-best",
  },
  {
    uuid: "2da8a640-c607-012f-8ad7-58d385a7bc34",
    slug: "candide-or-the-optimist-2-3",
  },
  {
    uuid: "113a4060-c607-012f-407c-58d385a7bc34",
    slug: "comus-2",
  },
  {
    uuid: "7ba4e8e0-8f1e-0139-ba72-0242ac110003",
    slug: "costume-designs-for-ruth-page",
  },
  {
    uuid: "a540c110-3b18-0134-9a05-00505686a51c",
    slug: "edna-thomas-collection",
  },
  {
    uuid: "8d5073d0-c607-012f-9474-58d385a7bc34",
    slug: "four-poems-by-john-milton",
  },
  {
    uuid: "74be8c10-c607-012f-25ae-58d385a7bc34",
    slug: "frederick-sandys-1829-1904",
  },
  {
    uuid: "594d4f50-9b02-0139-a8aa-0242ac110003",
    slug: "george-antheil-scores-and-papers",
  },
  {
    uuid: "40cb98a0-c607-012f-bb4b-58d385a7bc34",
    slug: "geto-motivn",
  },
  {
    uuid: "fc900de0-ab68-0139-488f-0242ac110005",
    slug: "gypsy-rose-lee-papers",
  },
  {
    uuid: "bca59b80-c607-012f-ade1-58d385a7bc34",
    slug: "habitations-ouvrires-et-agricoles-cits-bains-et-lavoirs-socits-alimentaires",
  },
  {
    uuid: "79ac9830-c619-012f-3e7e-58d385a7bc34",
    slug: "harpers-bazaar",
  },
  {
    uuid: "30d4cd50-b4b2-0138-8adb-7d3a862ed817",
    slug: "harriet-the-moses-of-her-people",
  },
  {
    uuid: "b6077f80-41b1-0132-64cf-58d385a7bbd0",
    slug: "housing-public-housing-slum-clearance-quasi-public-housing-f-h-a-housing",
  },
  {
    uuid: "ede5f400-2296-0133-5f8a-58d385a7bbd0",
    slug: "hung-lou-meng-tu-yung",
  },
  {
    uuid: "bc8a5430-c606-012f-1181-58d385a7bc34",
    slug: "illustrations-cover-designs-etc-by-elizabeth-colborne",
  },
  {
    uuid: "588394c0-bd93-0139-68f9-0242ac110004",
    slug: "joan-marcus-photographs",
  },
  {
    uuid: "0cfdcf30-b0fd-0139-62b2-0242ac110005",
    slug: "joseph-buloff-papers",
  },
  {
    uuid: "48563170-8019-0133-3ed4-00505686d14e",
    slug: "kinder-velt",
  },
  {
    uuid: "84933ec0-6437-0139-fc1c-0242ac110003",
    slug: "lantica-mvsica-ridotta-alla-moderna-prattica",
  },
  {
    uuid: "e1803bd0-c607-012f-abf0-58d385a7bc34",
    slug: "llectricit-au-thatre",
  },
  {
    uuid: "f012fa00-c609-012f-761c-58d385a7bc34",
    slug: "le-monde-illustr",
  },
  {
    uuid: "976d3cb0-c607-012f-8ef3-58d385a7bc34",
    slug: "libro-compuesto-por-el-muy-docto-senor-hh-saul-levi-morteira-alav-asalom",
  },
  {
    uuid: "c84f4bc0-5ec6-0132-3309-58d385a7bbd0",
    slug: "mary-sherman-album",
  },
  {
    uuid: "1380db60-b33f-0138-a5dd-0a18dc5bab17",
    slug: "mother-goose-or-the-old-nursery-rhymes",
  },
  {
    uuid: "ce8ea560-e5f3-0132-ff64-58d385a7b928",
    slug: "muestras-de-los-nuevos-punzones-y-matrices-para-la-letra-de-imprenta-executados",
  },
  {
    uuid: "5bb1ddc0-fd12-0138-a25d-0242ac110003",
    slug: "muse-des-dames-et-des-demoiselles",
  },
  {
    uuid: "bdd57350-c606-012f-e8f3-58d385a7bc34",
    slug: "naval-air-pilot",
  },
  {
    uuid: "e7b11090-c607-012f-bb0e-58d385a7bc34",
    slug: "new-york-citys-exhibit-at-the-panama-pacific-international-exposition-san",
  },
  {
    uuid: "9ad4d3f0-c609-012f-61c4-58d385a7bc34",
    slug: "new-york-daily-tribune",
  },
  {
    uuid: "609420d0-d53c-0130-dc7c-58d385a7bbd0",
    slug: "o-ha-yo",
  },
  {
    uuid: "fd216860-c606-012f-c542-58d385a7bc34",
    slug: "original-woodcut-impressions-for-the-weiss-kunig",
  },
  {
    uuid: "a8857120-d765-0130-b561-58d385a7b928",
    slug: "paris-comique",
  },
  {
    uuid: "895aad70-1d8c-0139-ba96-0242ac110003",
    slug: "photographic-scrapbook",
  },
  {
    uuid: "7cd887e0-7fbc-0131-0dc3-58d385a7b928",
    slug: "radio-city-music-hall-presents-cheer-china",
  },
  {
    uuid: "afd5df90-bd4c-0138-fdd2-0971a4cfbbf9",
    slug: "report-on-public-baths-and-public-comfort-stations",
  },
  {
    uuid: "e883fd40-a907-0138-16b7-171820c8f292",
    slug: "schuyler-colfax-papers",
  },
  {
    uuid: "b2a599b0-59b7-0139-d251-0242ac110005",
    slug: "schuyler-family-papers",
  },
  {
    uuid: "ec1c5ce0-c607-012f-d27a-58d385a7bc34",
    slug: "selihot-le-ashmurot-ha-boker-u-tehinot-yeme-ha-taaniyot-ve-yom-kipur-katan",
  },
  {
    uuid: "9c93dea0-7871-0139-381f-0242ac110002",
    slug: "spanish-child-welfare-association-of-america-records",
  },
  {
    uuid: "43e74ea0-1a10-0138-22d5-41bb3bec93b7",
    slug: "suantraidhe-agus-goltraidhe",
  },
  {
    uuid: "526011f0-3c47-0132-b8af-58d385a7b928",
    slug: "the-big-show-set-designs-by-mark-lawson-and-nash",
  },
  {
    uuid: "8bfe31c0-c609-012f-c19d-58d385a7bc34",
    slug: "the-boulevardier",
  },
  {
    uuid: "496cca80-fd40-0130-5fd5-58d385a7b928",
    slug: "the-chinese-students-monthly",
  },
  {
    uuid: "e5b78370-207f-0139-3a0d-0242ac110003",
    slug: "the-junior-citizen",
  },
  {
    uuid: "4c14e090-253d-0130-532f-58d385a7bbd0",
    slug: "the-southern-letter",
  },
  {
    uuid: "103c5770-c607-012f-6b50-58d385a7bc34",
    slug: "the-history-of-candide-or-all-for-the-best",
  },
  {
    uuid: "29bf14a0-75ff-0139-5ad0-0242ac110005",
    slug: "virginia-girvin-collection",
  },
  {
    uuid: "2fbd8e40-b595-0138-0451-371990722f13",
    slug: "vita-sackville-west-collection-of-papers",
  },
  {
    uuid: "b3dfa9d0-3450-0131-485e-58d385a7bbd0",
    slug: "when-malindy-sings-poems",
  },
  {
    uuid: "b75c33f0-957c-0139-3948-0242ac110002",
    slug: "william-edgar-papers",
  },
  {
    uuid: "61efd1c0-7519-0139-9750-0242ac110003",
    slug: "a-biographical-sketch-of-the-most-distinguished-writers-of-ancient-and-modern",
  },
  {
    uuid: "3ea37d90-f9eb-012f-ca2e-58d385a7b928",
    slug: "a-journey-in-brazil",
  },
  {
    uuid: "abb96190-37e9-0130-b19e-58d385a7bbd0",
    slug: "a-lesson-in-sign-talk",
  },
  {
    uuid: "7b944bb0-689d-0139-2276-0242ac110003",
    slug: "a-voyage-round-the-world-in-the-years-1803-4-5-6",
  },
  {
    uuid: "60308820-7532-0139-d431-0242ac110003",
    slug: "across-widest-africa",
  },
  {
    uuid: "d7970d50-c6d1-012f-dd42-58d385a7bc34",
    slug: "albom-vidov-uspensko-kevo-pechersko-lavry-i-snimkov-drevnoste-i",
  },
  {
    uuid: "9d4dd510-b4eb-0130-960d-58d385a7b928",
    slug: "album-of-472-engravings",
  },
  {
    uuid: "c79c0790-3aea-0133-050f-00505686a51c",
    slug: "alsatia-illustrata-celtica-romana-francica",
  },
  {
    uuid: "9dbe90e0-bb4d-0139-7712-0242ac110003",
    slug: "american-broadsides-collection",
  },
  {
    uuid: "165a2cb0-d70d-0137-4413-2ba430177672",
    slug: "american-scenery-or-land-lake-and-river-illustrations-of-transatlantic-nature",
  },
  {
    uuid: "405b7770-4156-0139-eef3-0242ac110003",
    slug: "an-account-of-the-college-of-new-jersey",
  },
  {
    uuid: "a8529860-ce7a-0138-df69-61d6466d41a4",
    slug: "anna-pavlova-three-studies-and-a-portrait",
  },
  {
    uuid: "8f3972c0-c235-0139-5fb6-0242ac110003",
    slug: "annales-du-muse-et-de-lcole-moderne-des-beaux-arts",
  },
  {
    uuid: "ef6d26f0-c760-0132-f87d-58d385a7bbd0",
    slug: "anne-nichols-papers-1873-1965",
  },
  {
    uuid: "48e47ab0-010b-0139-dbd3-0242ac110003",
    slug: "anthologia-hibernica",
  },
  {
    uuid: "ed6e4600-c603-012f-e6e1-58d385a7bc34",
    slug: "anti-lucretius-sive-de-deo-et-natura-libri-novem",
  },
  {
    uuid: "7cf3b020-01fb-013a-3212-0242ac110002",
    slug: "arnold-s-eagle",
  },
  {
    uuid: "d7653530-c604-012f-f571-58d385a7bc34",
    slug: "art-de-la-guerre",
  },
  {
    uuid: "59138ad0-9a25-0139-9895-0242ac110004",
    slug: "arthur-hopkins-papers",
  },
  {
    uuid: "9a0c9c90-f441-0138-e037-0242ac110002",
    slug: "arthur-m-schlesinger-jr-papers",
  },
  {
    uuid: "59714cd0-01ed-013a-b85e-0242ac110002",
    slug: "barbara-alper",
  },
  {
    uuid: "6e4bac10-2de0-0131-e965-58d385a7bbd0",
    slug: "biblia",
  },
  {
    uuid: "4fe6f130-0036-0130-09ad-58d385a7bc34",
    slug: "bibliothecae-alexandrinae-icones-symbolicae-pd-christofori-giardae-cler-reg-s",
  },
  {
    uuid: "7c237050-01ef-013a-b927-0242ac110003",
    slug: "bill-jacobson",
  },
  {
    uuid: "879b4080-c604-012f-acc3-58d385a7bc34",
    slug: "bugakuzu",
  },
  {
    uuid: "ab315a30-1baa-0130-6b6a-58d385a7bbd0",
    slug: "buntpapier-fabrikation",
  },
  {
    uuid: "a195a2d0-4d97-0137-2ba5-6779209b3a9f",
    slug: "cabaret-voltaire",
  },
  {
    uuid: "b7d31030-c605-012f-7d13-58d385a7bc34",
    slug: "captivity-of-the-oatman-girls",
  },
  {
    uuid: "53d28e30-61e8-0131-79c1-58d385a7b928",
    slug: "character-sketches-of-romance-fiction-and-the-drama",
  },
  {
    uuid: "339a4b00-028c-013a-7fb7-0242ac110003",
    slug: "christine-osinski",
  },
  {
    uuid: "9235b130-0042-0130-78bc-58d385a7bc34",
    slug: "civilian-defense",
  },
  {
    uuid: "b6764f20-c607-012f-684b-58d385a7bc34",
    slug: "cosmopolitan",
  },
  {
    uuid: "95aa6380-b10a-0139-4da2-0242ac110002",
    slug: "costume-designs-1615-1633",
  },
  {
    uuid: "990c39e0-7b93-0139-8f98-0242ac110002",
    slug: "d-h-lawrence-collection-of-papers",
  },
  {
    uuid: "2d5ae050-c9d8-0138-b69a-2f688a30c168",
    slug: "dance-perspectives",
  },
  {
    uuid: "f14fd3f0-c603-012f-2a39-58d385a7bc34",
    slug: "de-la-philosophie-de-la-nature",
  },
  {
    uuid: "061eb620-c606-012f-a76a-58d385a7bc34",
    slug: "decorations-faites-dans-la-ville-de-grenoble-capitale-de-la-province-de-dauphin",
  },
  {
    uuid: "ce5c3140-c60a-012f-24ae-58d385a7bc34",
    slug: "der-dada",
  },
  {
    uuid: "33b701d0-8021-0133-e04c-00505686d14e",
    slug: "di-idishe-kinder-velt",
  },
  {
    uuid: "c379e670-3058-0131-c906-58d385a7bbd0",
    slug: "die-frauenkleidung",
  },
  {
    uuid: "afec22b0-aeb9-0130-3d9f-58d385a7bbd0",
    slug: "die-graphischen-knste",
  },
  {
    uuid: "4dadb400-b33b-0138-b9d1-19a27052ac13",
    slug: "die-kleine-puppenkchin",
  },
  {
    uuid: "5e497cd0-d42a-012f-8edb-58d385a7b928",
    slug: "einblattdrucke-des-fnfzehnten-jahrhunderts",
  },
  {
    uuid: "1d650d80-4785-0138-5297-0776e04ce6ff",
    slug: "elease-perkins-collection",
  },
  {
    uuid: "6806b1c0-c625-012f-4388-58d385a7bc34",
    slug: "eleven-engravings-of-architectural-views-of-genoa-after-antonio-giolfi",
  },
  {
    uuid: "e4f214e0-e066-0136-9ee7-079de5c4d09d",
    slug: "environmental-action-coalition-records",
  },
  {
    uuid: "51574ee0-b4e7-0138-cb51-35fe7ee1c050",
    slug: "epitome-in-divae-parthenices-mariae-historiam",
  },
  {
    uuid: "9f2a1fe0-01ec-013a-705a-0242ac110002",
    slug: "erika-stone",
  },
  {
    uuid: "bb84d1e0-01f9-013a-e52c-0242ac110004",
    slug: "eugene-richards",
  },
  {
    uuid: "371c98b0-c60b-012f-58b3-58d385a7bc34",
    slug: "eusebia-cosme-photograph-collection",
  },
  {
    uuid: "56700a50-b4d3-0130-6c26-58d385a7bbd0",
    slug: "extracts-from-the-manual-for-the-patriotic-volunteer-on-active-service",
  },
  {
    uuid: "21e28880-5375-0130-4ec5-58d385a7b928",
    slug: "eyn-schn-ntzlich-bchlin-vnd-vnderweisung-der-kunst-des-messens-mit-dem-zirckel",
  },
  {
    uuid: "62af50e0-59d4-0139-1399-0242ac110003",
    slug: "fire",
  },
  {
    uuid: "169246c0-8a78-0139-c9a2-0242ac110004",
    slug: "ford-autograph-collection",
  },
  {
    uuid: "6c0db0c0-3718-0138-e77b-4b11cbe4fff1",
    slug: "francis-toohey-papers",
  },
  {
    uuid: "f07c20e0-f470-012f-a846-58d385a7b928",
    slug: "frank-leslies-historical-register-of-the-united-states-centennial-exposition",
  },
  {
    uuid: "9d6e7850-1452-0133-5070-58d385a7bbd0",
    slug: "frederick-douglass-collection",
  },
  {
    uuid: "ae0b3490-7477-0139-54f3-0242ac110002",
    slug: "free-circulating-libraries-records",
  },
  {
    uuid: "14aa6640-f064-0138-b9c5-0242ac110003",
    slug: "french-institute-in-the-united-states-gift-of-designs1917-1947",
  },
  {
    uuid: "44708870-8361-0130-d585-58d385a7b928",
    slug: "gazlays-united-states-hotel-guide-for-1875",
  },
  {
    uuid: "d0505720-c93e-0138-dc53-0036cbf493c2",
    slug: "gertrude-shurr-papers",
  },
  {
    uuid: "a3b1e990-b93c-0132-8a85-58d385a7bbd0",
    slug: "ghana-today",
  },
  {
    uuid: "98e89140-f9c7-0138-01da-0242ac110002",
    slug: "gino-speranza-papers",
  },
  {
    uuid: "23ed5c40-f9fb-0138-c443-0242ac110002",
    slug: "giuditta-pasta-correspondence",
  },
  {
    uuid: "2cae12e0-79fc-0130-b8a2-58d385a7bbd0",
    slug: "greater-erie",
  },
  {
    uuid: "e6b677c0-16de-0139-c0b4-0242ac110004",
    slug: "herman-rosenthal-papers",
  },
  {
    uuid: "b7b740e0-5e9a-0139-0abf-0242ac110003",
    slug: "histoire-de-la-louisiane",
  },
  {
    uuid: "4ae54fb0-c605-012f-3632-58d385a7bc34",
    slug: "histoire-du-ciel",
  },
  {
    uuid: "845c61c0-d2c8-0139-7ac2-0242ac110003",
    slug: "histoire-generale-des-voyages-ou-nouvelle-collection-de-toutes-les-relations",
  },
  {
    uuid: "fa820690-b330-0138-7de2-79514d78dc72",
    slug: "histoires-ou-contes-du-temps-pass",
  },
  {
    uuid: "293d3320-c603-012f-3f6d-58d385a7bc34",
    slug: "history-of-tulare-county-california",
  },
  {
    uuid: "97de7160-34c9-0134-7aeb-00505686d14e",
    slug: "howarth-gurdjieff-archive",
  },
  {
    uuid: "d4109f10-c605-012f-8223-58d385a7bc34",
    slug: "i-qvattro-libri-dell-architettvra-di-andrea-palladio-ne-quali-dopo-un-breue",
  },
  {
    uuid: "459e1ca0-c603-012f-a5c2-58d385a7bc34",
    slug: "igeret-orhot-olam-ha-melamedet-adam-daat-helke-ha-7-aklimim",
  },
  {
    uuid: "67bd4bb0-c602-012f-9ff2-58d385a7bc34",
    slug: "in-di-shturm-teg",
  },
  {
    uuid: "03308b80-c604-012f-7d09-58d385a7bc34",
    slug: "inge-hardison-portfolio",
  },
  {
    uuid: "8b8172c0-0042-0130-6c20-58d385a7bc34",
    slug: "isadora-duncan-pina-bausch",
  },
  {
    uuid: "494166e0-c608-012f-d466-58d385a7bc34",
    slug: "jake-and-dinos-chapmans-disasters-of-war",
  },
  {
    uuid: "26dd8040-00ec-0139-8236-0242ac110002",
    slug: "james-monroe-papers",
  },
  {
    uuid: "f0c2f8c0-7ac0-0139-6904-0242ac110002",
    slug: "james-riker-papers",
  },
  {
    uuid: "906eb580-25d0-0139-977a-0242ac110003",
    slug: "jerome-robbins-dance-division-negative-files",
  },
  {
    uuid: "d7c418e0-64b2-0139-0041-0242ac110003",
    slug: "jones-sadler-family-photograph-collection",
  },
  {
    uuid: "08498d10-612f-0136-6f02-352960b720f3",
    slug: "krishnagita",
  },
  {
    uuid: "baf2c4f0-27a7-0131-fd7c-58d385a7bbd0",
    slug: "kremenits-vizshgorodek-un-potshayev-yizker-bukh",
  },
  {
    uuid: "9db38380-c607-012f-5643-58d385a7bc34",
    slug: "lart-et-la-mode",
  },
  {
    uuid: "d6a2fa00-c604-012f-e2d4-58d385a7bc34",
    slug: "lexistence-de-dieu-dmontre-par-les-merveilles-de-la-nature-en-trois-parties-ou",
  },
  {
    uuid: "b7a32de0-c607-012f-3993-58d385a7bc34",
    slug: "la-phalange",
  },
  {
    uuid: "c0a4c6d0-c605-012f-c374-58d385a7bc34",
    slug: "la-chronologie-des-anciens-royaumes-corrige",
  },
  {
    uuid: "c2f7fae0-c605-012f-40a5-58d385a7bc34",
    slug: "la-gravure-italienne",
  },
  {
    uuid: "a7afa670-c602-012f-5127-58d385a7bc34",
    slug: "la-processione-del-doge-nella-domenica-delle-palme",
  },
  {
    uuid: "de1811b0-5e79-0139-0786-0242ac110004",
    slug: "lafargue-clinic-records",
  },
  {
    uuid: "3411dbd0-c6e0-012f-7f38-58d385a7bc34",
    slug: "layl-va-majnn",
  },
  {
    uuid: "035df020-ce14-0139-1e1f-0242ac110002",
    slug: "legendario-de-sancti-vulgare-storiado",
  },
  {
    uuid: "d5dd74e0-c604-012f-eb42-58d385a7bc34",
    slug: "les-jeux-du-cirque-et-la-vie-foraine",
  },
  {
    uuid: "c20359a0-6e18-0139-9be0-0242ac110003",
    slug: "les-steppes-de-la-mer-caspienne-le-caucase-la-crime-et-la-russie-mridionale",
  },
  {
    uuid: "a030a7d0-30be-0139-6d8a-0242ac110003",
    slug: "lester-a-walton-photograph-collection",
  },
  {
    uuid: "0d966be0-790b-0139-2e06-0242ac110003",
    slug: "letters-and-professional-ephemera",
  },
  {
    uuid: "48ff0380-c605-012f-808e-58d385a7bc34",
    slug: "life-at-the-south-or-uncle-toms-cabin-as-it-is-2",
  },
  {
    uuid: "10fe9570-c604-012f-7442-58d385a7bc34",
    slug: "likutim-shonim",
  },
  {
    uuid: "b83d2930-c94f-0138-f4f2-43428db5407d",
    slug: "lincoln-kirstein-papers-2",
  },
  {
    uuid: "ba0dc480-c607-012f-3123-58d385a7bc34",
    slug: "literary-digest",
  },
  {
    uuid: "51a9b2c0-01f1-013a-f730-0242ac110004",
    slug: "louis-faurer",
  },
  {
    uuid: "edc98e50-8f23-0139-b1d5-0242ac110002",
    slug: "lucia-chase-papers",
  },
  {
    uuid: "db9ae370-b335-0138-1d7d-0f7fdff3ea1e",
    slug: "lustige-geschichten-und-drollige-bilder-mit-15-schn-kolorirten-tafeln-fr-kinder",
  },
  {
    uuid: "818f1b20-0aff-0138-b34e-7b37515c42e8",
    slug: "luz",
  },
  {
    uuid: "f39d8e80-ead5-0138-f0f1-0242ac110002",
    slug: "macmillan-company-records",
  },
  {
    uuid: "4db2ea60-c605-012f-47c3-58d385a7bc34",
    slug: "mallorca-the-magnificent",
  },
  {
    uuid: "a3c13ae0-4be6-0131-1ed8-58d385a7bbd0",
    slug: "manuel-du-dessinateur-lithographe",
  },
  {
    uuid: "cbfef310-caf4-0139-d95d-0242ac110002",
    slug: "margaret-e-lynn-army-music-and-theatre-collection",
  },
  {
    uuid: "5ba97c40-e575-0138-7073-7f177865c8fd",
    slug: "marion-davies-papers1915-1928",
  },
  {
    uuid: "5a48e7a0-8c87-0137-215c-096535744cef",
    slug: "mary-ellis-papers",
  },
  {
    uuid: "e6c4e060-4163-0138-1f9e-15f8897acbe6",
    slug: "mary-hinkson-papers",
  },
  {
    uuid: "04817f20-c606-012f-226e-58d385a7bc34",
    slug: "matsukaze-murasame-emaki",
  },
  {
    uuid: "b2be4a70-c602-012f-7a7e-58d385a7bc34",
    slug: "mercurio-de-nueva-york",
  },
  {
    uuid: "e787d970-72aa-0138-5859-3366264ebb7d",
    slug: "merrill-ashley-papers",
  },
  {
    uuid: "5c76a5f0-c623-012f-08ce-58d385a7bc34",
    slug: "merz",
  },
  {
    uuid: "bf818460-30c2-0139-dd85-0242ac110003",
    slug: "middleton-a-spike-harris-photograph-collection",
  },
  {
    uuid: "5a1d8fa0-e098-0132-75b1-58d385a7b928",
    slug: "mikhail-aleksandrovich-vrubel",
  },
  {
    uuid: "0edc61c0-3438-0131-1b5b-58d385a7b928",
    slug: "mind",
  },
  {
    uuid: "ab261550-c980-0138-f59d-7de3a23357ef",
    slug: "miscellaneous-manuscripts-2-3",
  },
  {
    uuid: "053f4ce0-1170-0130-0caf-58d385a7bbd0",
    slug: "miss-minervas-cook-book",
  },
  {
    uuid: "8513b360-79e7-0139-286b-0242ac110002",
    slug: "mitchell-kennerley-papers",
  },
  {
    uuid: "b1a2a640-c604-012f-58f4-58d385a7bc34",
    slug: "mon-amie-lucie-delarue-mardrus",
  },
  {
    uuid: "f307f280-c9dd-0138-a9e8-7541c1948bbf",
    slug: "muriel-petioni-photograph-collection",
  },
  {
    uuid: "98e583c0-273a-0138-d5ae-47658229493b",
    slug: "research-libraries-jewish-division-records",
  },
  {
    uuid: "e09da000-7939-0139-a463-0242ac110002",
    slug: "new-york-city-miscellaneous-collection",
  },
  {
    uuid: "b52c94b0-c602-012f-36b5-58d385a7bc34",
    slug: "newton-poema",
  },
  {
    uuid: "2bd4b120-c603-012f-5c9f-58d385a7bc34",
    slug: "nineveh-and-its-remains",
  },
  {
    uuid: "7f6fc4c0-a8d9-0138-2d74-01969883448b",
    slug: "omnia-platonis-opera",
  },
  {
    uuid: "b979d4c0-7bc8-0131-5007-58d385a7b928",
    slug: "osvobozhdennyi-don-kikhot",
  },
  {
    uuid: "4c859b00-de7d-012f-7489-58d385a7bbd0",
    slug: "paris-illustr",
  },
  {
    uuid: "334e5380-c606-012f-71ff-58d385a7bc34",
    slug: "passacaglia-and-fugue-in-c-minor-humphrey",
  },
  {
    uuid: "76702bb0-7b8f-0139-f253-0242ac110002",
    slug: "pelham-grenville-wodehouse-collection-of-papers",
  },
  {
    uuid: "a5a98490-f9c5-0137-fda4-0970c3637883",
    slug: "photographs-by-sandra-weiner",
  },
  {
    uuid: "f385d530-ad23-0139-ada8-0242ac110003",
    slug: "photographs-of-ruth-page",
  },
  {
    uuid: "882cbc50-c605-012f-5f46-58d385a7bc34",
    slug: "phra-malai-manuscript",
  },
  {
    uuid: "9ca40640-c608-012f-66da-58d385a7bc34",
    slug: "pictorial-review",
  },
  {
    uuid: "9487d7f0-fbb1-0139-20f6-0242ac110004",
    slug: "pierre-toussaint-papers",
  },
  {
    uuid: "c572b5b0-f5f6-0138-64cf-0242ac110003",
    slug: "pocket-congressional-directory",
  },
  {
    uuid: "40d5a340-c609-012f-a1f4-58d385a7bc34",
    slug: "political-cartoons-by-rollin-kirby",
  },
  {
    uuid: "eea06020-1329-0139-b3ee-0242ac110004",
    slug: "popular-balanchine-dossiers",
  },
  {
    uuid: "f720f350-4d00-0138-d1ef-79b4b9c0dbb0",
    slug: "prints-by-abraham-bosse",
  },
  {
    uuid: "014ad390-a8e7-0138-d3c2-0c19746d3c47",
    slug: "protest-against-the-bill-to-repeal-the-american-stamp-act-of-last-session",
  },
  {
    uuid: "956bca60-c607-012f-c1d6-58d385a7bc34",
    slug: "psst",
  },
  {
    uuid: "4b34b040-ebb0-012f-fbbf-58d385a7b928",
    slug: "raccolta-di-ottanta-stampe-rappresentanti-i-quadri",
  },
  {
    uuid: "f4e10010-eba2-0138-6e5e-0242ac110003",
    slug: "real-estate-forum",
  },
  {
    uuid: "b418fd20-9c71-0138-a091-0bda499b8d6b",
    slug: "realia-charlotte-bront",
  },
  {
    uuid: "40e39250-c607-012f-995d-58d385a7bc34",
    slug: "rebekah-west-harkness-scrapbooks",
  },
  {
    uuid: "9fd8a6f0-c607-012f-41bb-58d385a7bc34",
    slug: "reclams-universum",
  },
  {
    uuid: "f9320340-c605-012f-c6ef-58d385a7bc34",
    slug: "reflexions-sur-la-physique-moderne-ou-la-philosophie-newtonienne",
  },
  {
    uuid: "481d4420-c605-012f-7df9-58d385a7bc34",
    slug: "report-of-the-proceedings-of-the-mock-convention-of-the-womens-national",
  },
  {
    uuid: "60cffb70-0a81-0130-a6d2-58d385a7bbd0",
    slug: "revue-encyclopdique",
  },
  {
    uuid: "9ce61170-01e5-013a-1315-0242ac110003",
    slug: "robert-capa",
  },
  {
    uuid: "bce14810-01de-013a-a903-0242ac110004",
    slug: "robert-gibson",
  },
  {
    uuid: "e9b447e0-59e4-0139-1642-0242ac110002",
    slug: "robert-southey-collection-of-papers",
  },
  {
    uuid: "448f5fd0-7622-0139-97dd-0242ac110005",
    slug: "robert-troup-papers",
  },
  {
    uuid: "4fcaf8d0-ea0c-0138-618c-0242ac110003",
    slug: "robin-hood",
  },
  {
    uuid: "8e12afe0-c607-012f-13ba-58d385a7bc34",
    slug: "robotncky-kalendr",
  },
  {
    uuid: "eea8f0d0-b0fd-0139-8ba9-0242ac110005",
    slug: "rosamond-gilder-papers",
  },
  {
    uuid: "e22c7bf0-4b00-0136-9088-013955bfbdf0",
    slug: "rural-youth-on-relief",
  },
  {
    uuid: "06f7ed70-c566-0139-fd71-0242ac110003",
    slug: "salvatore-mercuri-velvet-underground-collection",
  },
  {
    uuid: "5eaa5000-85a5-0139-6b63-0242ac110002",
    slug: "samuel-richardson-collection-of-papers",
  },
  {
    uuid: "2dad54f0-c603-012f-20c7-58d385a7bc34",
    slug: "sefer-torat-hayim-helek-1-3-mi-sheelot-u-teshuvot-de-shayakhe-la-tur-hoshen",
  },
  {
    uuid: "82387450-f7a0-0138-4698-0242ac110003",
    slug: "segvndo-volvmen-de-las-obras-de-soror-jvana-ines-de-la-crvz",
  },
  {
    uuid: "aa3b4520-01f6-013a-3a46-0242ac110002",
    slug: "shelby-lee-adams",
  },
  {
    uuid: "10827940-e231-0132-d598-58d385a7bbd0",
    slug: "sinai",
  },
  {
    uuid: "2c152460-c603-012f-27ac-58d385a7bc34",
    slug: "sketch-of-the-life-of-miss-ellen-jewett-by-one-who-knew-her",
  },
  {
    uuid: "a012b560-9c00-0131-abc8-58d385a7bbd0",
    slug: "souvenir-of-our-public-schools",
  },
  {
    uuid: "32994440-3511-0131-542c-58d385a7b928",
    slug: "souvenirs-de-la-princesse-de-tarente-1789-1792",
  },
  {
    uuid: "cfa114e0-c61f-012f-f503-58d385a7bc34",
    slug: "staff-association-records",
  },
  {
    uuid: "f3f19300-c605-012f-8946-58d385a7bc34",
    slug: "tung-kou",
  },
  {
    uuid: "712c7380-6353-0135-d850-116f42bfe3ff",
    slug: "terry-southern-papers",
  },
  {
    uuid: "6a8b5a20-34f3-0131-abb9-58d385a7b928",
    slug: "the-balance-and-columbian-repository",
  },
  {
    uuid: "8f5bd5f0-0042-0130-56f5-58d385a7bc34",
    slug: "the-baptist-home-mission-monthly",
  },
  {
    uuid: "bb9c42d0-a15c-0130-8277-58d385a7bbd0",
    slug: "the-boys-own-paper",
  },
  {
    uuid: "730e0b70-c602-012f-633b-58d385a7bc34",
    slug: "the-caliper-published-eight-times-a-year-by-the-students-of-the-stuyvesant-high",
  },
  {
    uuid: "7f7a6da0-88f1-0139-b1c1-0242ac110003",
    slug: "the-delineator",
  },
  {
    uuid: "34988460-c608-012f-ea85-58d385a7bc34",
    slug: "the-forum",
  },
  {
    uuid: "1722b0e0-1173-0130-f41d-58d385a7b928",
    slug: "the-gun-club-cook-book",
  },
  {
    uuid: "f050f390-df3a-0138-50f9-45764c243e6c",
    slug: "the-holy-bible-2",
  },
  {
    uuid: "e325f880-c604-012f-48d6-58d385a7bc34",
    slug: "the-holy-bible-2-3-4-5",
  },
  {
    uuid: "c7be8ef0-c607-012f-0ea4-58d385a7bc34",
    slug: "the-new-york-standard",
  },
  {
    uuid: "df12be30-c607-012f-88b1-58d385a7bc34",
    slug: "the-new-york-ecclesiologist",
  },
  {
    uuid: "0bd9eb60-f537-0138-a317-0242ac110003",
    slug: "the-new-york-gazette",
  },
  {
    uuid: "b3bde4d0-5e73-0139-74cb-0242ac110003",
    slug: "the-outspan",
  },
  {
    uuid: "7e66fc80-88fb-0139-f8bd-0242ac110003",
    slug: "the-political-magazine-and-parliamentary-naval-military-and-literary-journal",
  },
  {
    uuid: "d7ee4020-c607-012f-b583-58d385a7bc34",
    slug: "the-quarterly-illustrator",
  },
  {
    uuid: "c069e500-c607-012f-4ee3-58d385a7bc34",
    slug: "the-religious-souvenir",
  },
  {
    uuid: "9a304ec0-6281-0130-61d8-58d385a7bbd0",
    slug: "the-road-to-the-temple-of-honour-and-fame",
  },
  {
    uuid: "f51398f0-5408-0133-cb59-00505686d14e",
    slug: "the-successful-american",
  },
  {
    uuid: "b37c6c00-c602-012f-bacb-58d385a7bc34",
    slug: "the-book-of-english-trades-and-library-of-the-useful-arts-with-seventy",
  },
  {
    uuid: "96afb300-ea26-012f-36c5-58d385a7bbd0",
    slug: "the-book-of-spirits-and-tales-of-the-dead-comprising-lord-byron-in-the-other",
  },
  {
    uuid: "b5dac750-c605-012f-527f-58d385a7bc34",
    slug: "the-dawn",
  },
  {
    uuid: "c7c3d130-af6b-0139-fdfe-0242ac110002",
    slug: "the-fireworks-above-castel-santangelo",
  },
  {
    uuid: "60200db0-f473-012f-b33e-58d385a7b928",
    slug: "the-history-of-the-children-in-the-wood",
  },
  {
    uuid: "d918ff20-c603-012f-f9c4-58d385a7bc34",
    slug: "the-indictment-of-the-better-business-bureau-conspiracy-stock-exchange-gambling",
  },
  {
    uuid: "5a2e9400-0042-0130-a9c9-58d385a7bc34",
    slug: "the-island-of-doctor-moreau",
  },
  {
    uuid: "60dd6910-c604-012f-9ec3-58d385a7bc34",
    slug: "the-life-and-career-of-tiburcio-vasquez-the-california-stage-robber",
  },
  {
    uuid: "6ff601e0-4a59-0136-2ec4-00e3d443f342",
    slug: "the-nation-and-the-negro",
  },
  {
    uuid: "c67c2af0-c606-012f-84ac-58d385a7bc34",
    slug: "the-play-pictorial-2",
  },
  {
    uuid: "a38c2600-c602-012f-c15d-58d385a7bc34",
    slug: "the-poetical-works-of-edgar-allan-poe",
  },
  {
    uuid: "2cae5b50-c603-012f-950c-58d385a7bc34",
    slug: "the-three-lectures-of-mohammed-alexander-russell-webb",
  },
  {
    uuid: "40680c10-4871-0130-03db-58d385a7bbd0",
    slug: "the-works-of-the-right-honourable-lady-mary-wortley-montagu",
  },
  {
    uuid: "31eec660-fd16-0138-9157-0242ac110003",
    slug: "tip-top-weekly",
  },
  {
    uuid: "74927200-b113-0139-f6ed-0242ac110005",
    slug: "tony-pastor-collection",
  },
  {
    uuid: "013206f0-eaaa-0132-1355-58d385a7b928",
    slug: "toscana",
  },
  {
    uuid: "a810f0c0-1c6c-0130-df8e-58d385a7b928",
    slug: "trilby",
  },
  {
    uuid: "8eebfdc0-f45d-012f-6956-58d385a7b928",
    slug: "tbae",
  },
  {
    uuid: "69bc5670-8afd-0132-92dc-58d385a7bbd0",
    slug: "ugwalo-lu-ka-bunyane-ogutiwa-uguhamba-gwomhambi",
  },
  {
    uuid: "8d260fa0-7f97-0139-4bf8-0242ac110002",
    slug: "united-scenic-artists-exam-designs",
  },
  {
    uuid: "31883f60-56e2-0131-5f6a-58d385a7bbd0",
    slug: "unsere-monarchie-die-sterreichischen-kronlnder-zur-zeit-des-50",
  },
  {
    uuid: "21b72280-c605-012f-4a12-58d385a7bc34",
    slug: "vaslav-nijinsky-an-artistic-interpretation-of-his-work-in-black-white-and-gold",
  },
  {
    uuid: "17b8bf50-c60a-012f-d901-58d385a7bc34",
    slug: "vivos-voco",
  },
  {
    uuid: "39e8a540-af5e-0139-fdca-0242ac110002",
    slug: "voyage-dans-les-mers-de-linde",
  },
  {
    uuid: "2ea09f60-cd2e-0139-fd6e-0242ac110002",
    slug: "voyages-and-travels-in-various-parts-of-the-world",
  },
  {
    uuid: "2f12e790-f75e-0132-d8e9-58d385a7bbd0",
    slug: "vona-i-mir",
  },
  {
    uuid: "ee1cf130-c603-012f-8b8e-58d385a7bc34",
    slug: "waste-of-daylight",
  },
  {
    uuid: "e138ace0-01f5-013a-d29b-0242ac110002",
    slug: "wegee",
  },
  {
    uuid: "0467e3c0-269e-0139-fae0-0242ac110003",
    slug: "west-africa-before-europe",
  },
  {
    uuid: "cf969260-c608-012f-dd5a-58d385a7bc34",
    slug: "wilhelmina-adams-photograph-collection",
  },
  {
    uuid: "a292c130-d5cb-0138-4302-7398299cd79c",
    slug: "william-beekman-collection-of-virginia-woolf-and-her-circle",
  },
  {
    uuid: "f9873390-01e0-013a-f86b-0242ac110003",
    slug: "william-klein",
  },
  {
    uuid: "436724d0-01f4-013a-4260-0242ac110003",
    slug: "william-wegman",
  },
  {
    uuid: "6ccdda50-64b3-0139-506f-0242ac110003",
    slug: "wonderful-adventures-of-mrs-seacole-in-many-lands",
  },
  {
    uuid: "101e47d0-f763-0132-dc25-58d385a7bbd0",
    slug: "zaporozhe-v-ostatkakh-stariny-i-predaniakh-naroda",
  },
  {
    uuid: "ec3c4e70-c603-012f-20cf-58d385a7bc34",
    slug: "al-hidyah-f-takhrj-ahdth-al-bidyah-bidyat-al-mujtahid-li-ibn-rushd",
  },
  {
    uuid: "1d107420-f79f-0139-492b-0242ac110004",
    slug: "alaska-yukon-exposition-and-other-alaskan-views",
  },
  {
    uuid: "e97594d0-e632-0138-0942-0242ac110003",
    slug: "thirteen-manuscript-legal-documents-relating-to-the-estate-and-property-of-anne",
  },
  {
    uuid: "113468c0-091a-013a-a522-0242ac110003",
    slug: "ralph-waldo-emerson-collection-of-papers",
  },
  {
    uuid: "6eaee210-e727-0139-27cc-0242ac110004",
    slug: "john-w-cooper-collection",
  },
  {
    uuid: "5147b540-f951-0139-5f66-0242ac110003",
    slug: "ralph-j-bunche-photograph-collection",
  },
  {
    uuid: "b352f3f0-cd33-0139-1954-0242ac110004",
    slug: "carol-rosegg-photographs",
  },
  {
    uuid: "bd605fe0-c0c5-0139-6f85-0242ac110004",
    slug: "el-agorero-moderno",
  },
  {
    uuid: "a4281fe0-e7e0-0139-162d-0242ac110003",
    slug: "normo-graphy-normal-or-natural-writing",
  },
  {
    uuid: "c4d84e30-c605-012f-de5f-58d385a7bc34",
    slug: "annual-benefit",
  },
  {
    uuid: "671d26d0-f962-0139-90b7-0242ac110002",
    slug: "henry-david-thoreau-collection",
  },
  {
    uuid: "fe8d29b0-c616-012f-441a-58d385a7bc34",
    slug: "eighteenth-century-russian-erotic-art",
  },
  {
    uuid: "44c6e230-e670-0139-88a2-0242ac110003",
    slug: "poems-on-several-subjects",
  },
  {
    uuid: "506a8e80-f7b8-0139-ffed-0242ac110002",
    slug: "the-french-plan",
  },
  {
    uuid: "54adcc00-f92a-0139-6881-0242ac110002",
    slug: "the-novels-and-tales-of-henry-james",
  },
  {
    uuid: "c23abae0-c618-012f-1180-58d385a7bc34",
    slug: "negro-actors-guild-of-america-photograph-collection",
  },
  {
    uuid: "e2680050-d2a8-012f-edb8-58d385a7b928",
    slug: "panoramic-views-collection",
  },
  {
    uuid: "f40b9f30-0753-013a-954a-0242ac110004",
    slug: "edith-wynner-papers",
  },
  {
    uuid: "415b2920-c6cf-012f-4dcf-58d385a7bc34",
    slug: "jrusalem-tude-et-reproduction-photographique-des-monuments-de-la-ville-sainte",
  },
  {
    uuid: "24fc78e0-988f-0138-b354-7557849ba9de",
    slug: "act-up-new-york-records",
  },
  {
    uuid: "5c638470-c60a-012f-26ed-58d385a7bc34",
    slug: "uncle-isaac-or-old-days-in-the-south",
  },
  {
    uuid: "886a83a0-01c6-0135-a617-3c07547a230f",
    slug: "de-la-bataille-judaque",
  },
  {
    uuid: "47a6d530-bfc3-0138-799c-0a95e1923e7c",
    slug: "letters-to-robert-fizdale-and-arthur-gold",
  },
  {
    uuid: "45493400-003e-0130-39b8-58d385a7bc34",
    slug: "genealogical-scroll-of-the-rulers-of-mewar",
  },
  {
    uuid: "d27401a0-0030-0130-4635-58d385a7bc34",
    slug: "ape",
  },
  {
    uuid: "039992e0-b22a-0137-5e79-41a66d436962",
    slug: "laisvosios-minties-albumas-serija-pirma",
  },
  {
    uuid: "9a1c0440-fbec-0131-6488-58d385a7bbd0",
    slug: "somebodys-luggage-miniature-locket-album-of-tom-thumb-and-lavinia-warren",
  },
  {
    uuid: "07fdc500-ceac-0133-4a71-00505686a51c",
    slug: "in-allen-meinen-thaten-a-4-voci-2-hautb-2-violini-viola-e-continuo",
  },
  {
    uuid: "0428f9c0-0034-0130-c718-58d385a7bc34",
    slug: "11-heures-du-matin",
  },
  {
    uuid: "6a951820-c603-012f-e82b-58d385a7bc34",
    slug: "21st-us-naval-construction-battalion-1942-1943-souvenir-annual",
  },
  {
    uuid: "8832ae30-0033-0130-c100-58d385a7bc34",
    slug: "28-xbre-1836-jersey-city-en-face-new-york",
  },
  {
    uuid: "76bd8fe0-7bb0-0135-3a60-2bae3babcc48",
    slug: "2me-symphonie-romantique-pour-grand-orchestre",
  },
  {
    uuid: "05f76f60-0035-0130-359b-58d385a7bc34",
    slug: "38th-regiment-jefferson-guards-new-york-state-artillery",
  },
  {
    uuid: "0bcad930-86bf-0131-dd4a-58d385a7b928",
    slug: "4-minute-men-a-message-from-the-government-at-washington-committee-on-public",
  },
  {
    uuid: "e1951b10-d507-0136-fa03-60f81dd2b63c",
    slug: "a-christmas-carol-in-prose-being-a-ghost-story-of-christmas-authors-personal",
  },
  {
    uuid: "08733840-003e-0130-10fa-58d385a7bc34",
    slug: "a-negro-holiday-in-havana",
  },
  {
    uuid: "81e61490-8362-0134-2c89-00505686a51c",
    slug: "a-poetical-epistle-to-the-king-of-hayti",
  },
  {
    uuid: "9d1d77d0-0032-0130-5d88-58d385a7bc34",
    slug: "a-relation-of-a-journey-begun-an-dom-1610-foure-bookes-coutaining-a-description",
  },
  {
    uuid: "d5d9be00-29af-0133-2cbe-60f81dd2b63c",
    slug: "a-thanksgiving-sermon-preached-january-1-1808-in-st-thomass-or-the-african",
  },
  {
    uuid: "6068db30-8f06-0134-019f-00505686a51c",
    slug: "a-venetian-courtesan",
  },
  {
    uuid: "b3b02b80-0031-0130-4cf6-58d385a7bc34",
    slug: "a-bill-to-remove-doubts-as-to-quakers-and-jews-marriages",
  },
  {
    uuid: "a93c38c0-9a85-0132-4501-58d385a7bbd0",
    slug: "a-book-of-new-allegorical-devices-for-artists-in-general-particularly",
  },
  {
    uuid: "0a417810-2639-0132-4a54-58d385a7b928",
    slug: "a-cabana-de-pai-thomaz-drama-em-7-quadros",
  },
  {
    uuid: "b1133610-0237-0137-25d6-45b38a5b7ce9",
    slug: "a-calm-address-to-our-american-colonies",
  },
  {
    uuid: "bbc74090-7d0c-0134-6688-00505686a51c",
    slug: "a-catalogue-of-chinese-curiosities-exhibiting-at-no-8-park-place",
  },
  {
    uuid: "ed24ab40-c547-012f-18c8-3c075448cc4b",
    slug: "a-coign-of-vantage",
  },
  {
    uuid: "56cbb040-0036-0130-61cc-58d385a7bc34",
    slug: "a-collection-of-revival-hymns-and-plantation-melodies",
  },
  {
    uuid: "7e56daf0-c602-012f-fb13-58d385a7bc34",
    slug: "a-complete-system-of-magic",
  },
  {
    uuid: "27cc0470-29af-0133-0ea2-60f81dd2b63c",
    slug: "a-concise-statement-of-the-question-regarding-the-abolition-of-the-slave-trade",
  },
  {
    uuid: "013066a0-c5eb-012f-e30b-58d385a7bc34",
    slug: "a-counterblaste-to-tobacco",
  },
  {
    uuid: "769abbe0-29af-0133-4dd3-60f81dd2b63c",
    slug: "a-country-gentlemans-reasons-for-voting-against-mr-wilberforces-motion",
  },
  {
    uuid: "f9b13970-c5ea-012f-b576-58d385a7bc34",
    slug: "a-cudgelling-match-between-english-french-negroes-in-the-island-of-dominica",
  },
  {
    uuid: "95c4d350-0033-0130-2cdf-58d385a7bc34",
    slug: "a-declaration-by-the-representatives-of-the-united-states-of-america-in-general",
  },
  {
    uuid: "06688830-2865-0133-e08e-60f81dd2b63c",
    slug: "a-dialogue-concerning-the-slavery-of-the-africans-shewing-it-to-be-the-duty",
  },
  {
    uuid: "4b8a8c30-bc23-0135-f265-097522588e4b",
    slug: "a-discourse-concerning-coining-the-new-money-lighter-in-answer-to-mr-locks",
  },
  {
    uuid: "03b645d0-29b0-0133-9f1e-60f81dd2b63c",
    slug: "a-discourse-delivered-before-the-african-society-at-their-meeting-house",
  },
  {
    uuid: "a2d7fa70-29af-0133-af3f-60f81dd2b63c",
    slug: "a-discourse-delivered-at-the-african-meeting-house-in-boston-july-14-1808",
  },
  {
    uuid: "9e73c5c0-ee87-0131-39d5-58d385a7b928",
    slug: "a-general-map-of-the-river-sanaga-from-the-falls-of-govina-to-the-ocean",
  },
  {
    uuid: "f8d70130-c547-012f-6365-3c075448cc4b",
    slug: "a-history-of-the-negro-troops-in-the-war-of-the-rebellion-1861-1865-preceded",
  },
  {
    uuid: "9e8f80b0-0034-0130-1ba4-58d385a7bc34",
    slug: "a-home-on-the-mississippi",
  },
  {
    uuid: "f6f502f0-9654-0130-06ee-58d385a7b928",
    slug: "a-lady-and-her-husband",
  },
  {
    uuid: "5833e660-0033-0130-603d-58d385a7bc34",
    slug: "a-law-for-regulating-negroes-and-slaves-in-the-night-time",
  },
  {
    uuid: "185966c0-29af-0133-1668-60f81dd2b63c",
    slug: "a-letter-to-william-wilberforce-esq-mp-vice-president-of-the-african-institution",
  },
  {
    uuid: "4fce9c60-1d8b-0139-67c1-0242ac110003",
    slug: "a-long-minuet-as-danced-at-bath",
  },
  {
    uuid: "0589dc20-98ea-0136-f587-078686fd87d8",
    slug: "a-manual-of-the-british-algae-containing-generic-and-specific-descriptions",
  },
  {
    uuid: "d0ac82e0-ee87-0131-bc3f-58d385a7b928",
    slug: "a-map-of-surinam-barbutius-and-cayenne-in-south-america",
  },
  {
    uuid: "908b3f50-ee87-0131-2b16-58d385a7b928",
    slug: "a-map-of-zambesia",
  },
  {
    uuid: "e07a5bb0-ee87-0131-ef70-58d385a7b928",
    slug: "a-map-of-the-island-of-jamaica-divided-into-counties-and-parishes",
  },
  {
    uuid: "fea83140-ee87-0131-ebfa-58d385a7b928",
    slug: "a-map-of-the-kingdom-of-whidah",
  },
  {
    uuid: "026295b0-ee88-0131-0d88-58d385a7b928",
    slug: "a-map-of-the-kingdoms-of-koto-popo-fida-or-whidah-and-adra",
  },
  {
    uuid: "d3af7fa0-ee87-0131-7452-58d385a7b928",
    slug: "a-map-of-the-river-gambria-from-its-mouth-to-eropina",
  },
  {
    uuid: "a47637e0-ee87-0131-92ba-58d385a7b928",
    slug: "a-map-of-the-river-gambia-from-eropina-to-barrakunda",
  },
  {
    uuid: "b338cb00-ee87-0131-c7c4-58d385a7b928",
    slug: "a-map-or-chart-of-the-west-coast-of-africa-from-tanit-to-the-mouth-of-the-river",
  },
  {
    uuid: "c3b1dfe0-ee87-0131-f363-58d385a7b928",
    slug: "a-map-showing-the-routes-of-some-native-caravans-from-the-coast-to-the-interior",
  },
  {
    uuid: "1c675cb0-2e5b-0133-2e8e-60f81dd2b63c",
    slug: "a-narrative-of-the-insurrection-in-the-island-of-grenada-which-took-place",
  },
  {
    uuid: "ba4feef0-ee87-0131-7e5e-58d385a7b928",
    slug: "a-new-and-accurate-map-of-africa-from-the-latest-and-best-observations",
  },
  {
    uuid: "da4b5010-ee87-0131-31b0-58d385a7b928",
    slug: "a-new-and-accurate-map-of-the-european-settlements-on-the-coast-of-africa",
  },
  {
    uuid: "ea170ea0-ee87-0131-f1e7-58d385a7b928",
    slug: "a-new-map-of-jamaica-exhibiting-the-boundaries-of-each-parish-and-the-different",
  },
  {
    uuid: "f13eec00-ee87-0131-d2f3-58d385a7b928",
    slug: "a-particular-map-of-the-river-sanaga-from-its-desart-to-the-isle-of-morfil-or",
  },
  {
    uuid: "f387daf0-ee87-0131-4d1a-58d385a7b928",
    slug: "a-particular-map-of-the-river-sanaga-from-its-mouth-to-the-desart-exhibiting",
  },
  {
    uuid: "e9188e70-c352-0136-adb1-6363d5e46eae",
    slug: "a-picturesque-tour-of-italy-from-drawings-made-in-1816-1817",
  },
  {
    uuid: "3fbe3450-0036-0130-ea48-58d385a7bc34",
    slug: "a-plan-of-the-city-of-new-york-from-an-actual-survey",
  },
  {
    uuid: "c47541f0-c605-012f-5ddc-58d385a7bc34",
    slug: "a-portrait-of-russian-noblewoman",
  },
  {
    uuid: "fa9b7a10-0030-0130-31f2-58d385a7bc34",
    slug: "a-proclamacion-ordeyned-by-the-kynges-maiestie-with-the-aduice-of-his-honorable",
  },
  {
    uuid: "adab9af0-c542-012f-6693-3c075448cc4b",
    slug: "a-proclamation-for-calling-in-and-suppressing-of-two-books-written-by-john",
  },
  {
    uuid: "9600ca20-c5ea-012f-6ebc-58d385a7bc34",
    slug: "a-prospectus-of-a-new-monthly-paper-to-be-called-the-calumet",
  },
  {
    uuid: "4e8dabf0-8a93-0130-b93c-58d385a7bbd0",
    slug: "a-reviewer-reviewed",
  },
  {
    uuid: "be06fd50-eed1-012f-5a46-58d385a7b928",
    slug: "a-scrapbook-of-politics",
  },
  {
    uuid: "5533a300-c557-012f-6da4-3c075448cc4b",
    slug: "a-signal-from-mars-march-and-two-step",
  },
  {
    uuid: "525ee860-c557-012f-25f5-3c075448cc4b",
    slug: "a-south-prospect-of-ye-flourishing-city-of-new-york-in-the-province-of-new-york",
  },
  {
    uuid: "03035e30-c543-012f-231e-58d385a7bc34",
    slug: "a-south-west-view-of-lancaster-in-pennsylvania",
  },
  {
    uuid: "48433880-c557-012f-0346-3c075448cc4b",
    slug: "a-view-of-bethlehem-one-of-the-bretherns-principal-settlements-in-pensylvania",
  },
  {
    uuid: "a6676760-c52b-012f-6344-3c075448cc4b",
    slug: "a-view-of-charles-town-the-capital-of-south-carolina-in-north-america",
  },
  {
    uuid: "02ee9050-0035-0130-9e43-58d385a7bc34",
    slug: "a-view-of-charles-town-the-capital-of-south-carolina",
  },
  {
    uuid: "0b204ef0-c552-012f-5213-3c075448cc4b",
    slug: "a-view-of-fort-george-with-the-city-of-new-york-from-the-southwest",
  },
  {
    uuid: "ec2ca490-c5ea-012f-1f67-58d385a7bc34",
    slug: "a-view-of-new-castle-with-the-fort-and-light-house-on-the-entrance",
  },
  {
    uuid: "7186be90-c54c-012f-250f-3c075448cc4b",
    slug: "a-view-of-sutters-mill-and-culloma-valley-on-the-south-fork-of-the-american-line",
  },
  {
    uuid: "4f0fe7c0-2e5b-0133-af4f-60f81dd2b63c",
    slug: "a-view-of-the-present-increase-of-the-slave-trade-the-cause-of-that-increase",
  },
  {
    uuid: "cef56d10-01bf-0135-7d1c-3c07547a230f",
    slug: "a-view-of-the-present-state-of-the-african-slave-trade-published-by-direction",
  },
  {
    uuid: "70779830-c54c-012f-3799-3c075448cc4b",
    slug: "a-view-of-the-town-and-harbour-of-san-francisco",
  },
  {
    uuid: "3c5f6860-0032-0130-de11-58d385a7bc34",
    slug: "a-visit-to-the-grandmother",
  },
  {
    uuid: "d0fc2170-0034-0130-3050-58d385a7bc34",
    slug: "a-wife",
  },
  {
    uuid: "d0172470-d913-0139-3952-0242ac110004",
    slug: "als-1824-apr-26-from-frd-kalkbrenner-london-to-ignace-moscheles",
  },
  {
    uuid: "e122c5f0-0033-0130-15c4-58d385a7bc34",
    slug: "abbotsford-the-seat-of-sir-walter-scott-bart",
  },
  {
    uuid: "2600a750-1467-0134-b6ac-00505686a51c",
    slug: "accounts-and-transactions-relative-to-the-estate-of-samuel-bayard",
  },
  {
    uuid: "abfab1c0-57d0-0137-dc72-1ffe422e4099",
    slug: "actes-et-entractes",
  },
  {
    uuid: "46ebd720-24e4-0133-9501-58d385a7b928",
    slug: "adolph-philipse-estate-records",
  },
  {
    uuid: "d00f87b0-0034-0130-b951-58d385a7bc34",
    slug: "adoration-of-the-magi",
  },
  {
    uuid: "3069ec00-0033-0130-3864-58d385a7bc34",
    slug: "africa-and-america-addresses-and-discourses",
  },
  {
    uuid: "f003f340-0034-0130-3750-58d385a7bc34",
    slug: "africa-and-the-american-negro-addresses-and-proceedings-of-the-congress",
  },
  {
    uuid: "22e262e0-ee88-0131-51f3-58d385a7b928",
    slug: "africa-antiqua",
  },
  {
    uuid: "585d1560-f015-0131-036a-58d385a7b928",
    slug: "africa-secondo-le-ultime-osservazioni-dellacademia-reale-delle-scienze-de-parigi",
  },
  {
    uuid: "47354710-ee88-0131-dd6d-58d385a7b928",
    slug: "africa-septentrionalis",
  },
  {
    uuid: "342ab4e0-ee88-0131-37ed-58d385a7b928",
    slug: "africa-north-eastern-sheet",
  },
  {
    uuid: "0b998a30-ee88-0131-8d5b-58d385a7b928",
    slug: "africa-with-all-its-states-kingdoms-republics-regions-islands-ca-improved",
  },
  {
    uuid: "c2b7c740-29af-0133-4bc1-60f81dd2b63c",
    slug: "african-slave-trade-message-from-the-president-of-the-united-states-transmitting",
  },
  {
    uuid: "296db950-ee88-0131-88e3-58d385a7b928",
    slug: "africa-2-3",
  },
  {
    uuid: "307675b0-ee88-0131-688a-58d385a7b928",
    slug: "africa-2-3-4",
  },
  {
    uuid: "4fe95280-ee88-0131-4a2e-58d385a7b928",
    slug: "africa-2-3-4-5",
  },
  {
    uuid: "70836880-f015-0131-b64a-58d385a7b928",
    slug: "africa-2-3-4-5-6",
  },
  {
    uuid: "8132b1e0-f015-0131-d265-58d385a7b928",
    slug: "africa-2-3-4-5-6-7",
  },
  {
    uuid: "b0ee2e10-ee87-0131-0a8d-58d385a7b928",
    slug: "afric-antiqu-et-quarundam-europ-asique-adiacentium-regionum-accurata-delineatio",
  },
  {
    uuid: "fe759f10-0031-0130-8e5c-58d385a7bc34",
    slug: "afric-nova-descriptio",
  },
  {
    uuid: "44db86b0-ee88-0131-e28c-58d385a7b928",
    slug: "afrique-publie-sous-les-auspices-de-monseigneur-le-duc-dorlans-prmier-prince",
  },
  {
    uuid: "ab3b5320-c6ef-012f-7ffb-58d385a7bc34",
    slug: "aftermath",
  },
  {
    uuid: "4c4c53c0-c553-012f-105a-58d385a7bc34",
    slug: "akwukwo-ukwe-nasusu-ibo",
  },
  {
    uuid: "1f04a2d0-9895-0134-f5cb-00505686a51c",
    slug: "aktsonernoe-obshchestvo-slovolitni-oi-leman-v-s-peterburgie-i-moskvie",
  },
  {
    uuid: "d645f070-21f5-0139-1b90-0242ac110003",
    slug: "albrecht-drer-lia-vivo-kaj-elekto-el-liaj-verkoj-kun-klarigoj-de-la-apartaj",
  },
  {
    uuid: "f8773080-ffc1-0131-a1cf-58d385a7b928",
    slug: "album-of-carte-de-visite-portraits-of-union-army-officers-and-statesmen",
  },
  {
    uuid: "e6ec5ee0-831a-0132-00b2-58d385a7b928",
    slug: "alexander-hamilton-plan-of-a-constitution-for-america",
  },
  {
    uuid: "99ba7220-0034-0130-e439-58d385a7bc34",
    slug: "alexandre-dumas",
  },
  {
    uuid: "e4e61fe0-178b-0133-17e6-58d385a7bbd0",
    slug: "alfred",
  },
  {
    uuid: "7341d960-c54b-012f-d62d-3c075448cc4b",
    slug: "allegory-of-war",
  },
  {
    uuid: "d8a5cce0-c556-012f-16c7-3c075448cc4b",
    slug: "alles-ist-eitel-everything-in-vanity",
  },
  {
    uuid: "6158cb50-5dc8-0135-3963-13a4e569bdfe",
    slug: "alphabet-discs",
  },
  {
    uuid: "cfb0ca70-0a4f-0134-a0cb-00505686a51c",
    slug: "am-bodensee",
  },
  {
    uuid: "eb004660-c5e9-012f-3d69-58d385a7bc34",
    slug: "ambroise-vollard",
  },
  {
    uuid: "a1fcf5c0-c552-012f-3338-3c075448cc4b",
    slug: "americae-pars-borealis-florida-baccalaos-canada-corterealis",
  },
  {
    uuid: "cf489580-c532-012f-ae74-58d385a7bc34",
    slug: "american-christian-union",
  },
  {
    uuid: "14c5b060-c5eb-012f-9bfc-58d385a7bc34",
    slug: "american-circus-in-france",
  },
  {
    uuid: "8fd71c80-c604-012f-7576-58d385a7bc34",
    slug: "american-rhymes",
  },
  {
    uuid: "4cc26c70-c557-012f-8d4b-3c075448cc4b",
    slug: "american-scenery-palenville-new-york",
  },
  {
    uuid: "f55ada00-c5ea-012f-2b30-58d385a7bc34",
    slug: "american-wedding-march",
  },
  {
    uuid: "64adc9b0-0032-0130-9f76-58d385a7bc34",
    slug: "america",
  },
  {
    uuid: "cbd4ea10-c5e9-012f-d33e-58d385a7bc34",
    slug: "an-art-loan-exhibition-fund-for-the-pedestal-to-the-bartholdi-statue",
  },
  {
    uuid: "eb9271e0-c5e9-012f-cc91-58d385a7bc34",
    slug: "an-august-day-impression-from-cancelled-plate",
  },
  {
    uuid: "eb4be700-c5e9-012f-88a1-58d385a7bc34",
    slug: "an-august-day",
  },
  {
    uuid: "c412ee70-c604-012f-5fc8-58d385a7bc34",
    slug: "an-account-of-the-design-of-the-society-for-promoting-religious-knowledge-among",
  },
  {
    uuid: "87e2bae0-29af-0133-3e6b-60f81dd2b63c",
    slug: "an-account-of-the-insurrection-in-st-domingo-begun-in-august-1791-taken",
  },
  {
    uuid: "07fbbea0-c557-012f-8ca6-3c075448cc4b",
    slug: "an-address-delivered-in-the-african-episcopal-church-on-the-25th-march-1811",
  },
  {
    uuid: "e29002b0-29af-0133-555f-60f81dd2b63c",
    slug: "an-address-to-the-new-york-african-society-for-mutual-relief-delivered",
  },
  {
    uuid: "f95db590-29af-0133-a2c2-60f81dd2b63c",
    slug: "an-address-to-the-people-of-great-britain-on-the-utility-of-refraining",
  },
  {
    uuid: "a8bda400-10a5-0134-2dee-00505686a51c",
    slug: "an-alphabetical-catalogue-with-notes-of-theatrical-representations-ca-submitted",
  },
  {
    uuid: "d4a4d8f0-29ae-0133-852c-60f81dd2b63c",
    slug: "an-essay-on-the-impolicy-of-the-african-slave-trade-in-two-parts-by-the-rev-t",
  },
  {
    uuid: "0fcc5130-29ae-0133-3359-60f81dd2b63c",
    slug: "an-exposition-of-the-african-slave-trade-from-the-year-1840-to-1850-inclusive",
  },
  {
    uuid: "b24755c0-29af-0133-5872-60f81dd2b63c",
    slug: "an-inquiry-into-the-causes-of-the-insurrection-of-the-negroes-in-the-island",
  },
  {
    uuid: "34269e40-2e5b-0133-3764-60f81dd2b63c",
    slug: "an-oration-commemorative-of-the-abolition-of-the-slave-trade-in-the-united",
  },
  {
    uuid: "fcd2d390-01c3-0135-9c48-3c07547a230f",
    slug: "an-oration-on-the-abolition-of-the-slave-trade-delivered-on-the-first-day",
  },
  {
    uuid: "ba7b17c0-29af-0133-7699-60f81dd2b63c",
    slug: "an-oration-on-the-abolition-of-the-slave-trade-delivered-in-the-african-church",
  },
  {
    uuid: "e6c92d50-ee87-0131-c2f9-58d385a7b928",
    slug: "an-outline-map-of-the-linguistic-families-of-africa",
  },
  {
    uuid: "4f5d7d70-c557-012f-eaa6-3c075448cc4b",
    slug: "an-unfinished-house-in-chesnut-street-philadelphia-built-for-the-late-robert",
  },
  {
    uuid: "305959b0-e978-012f-9348-58d385a7b928",
    slug: "andante-noche-de-los-tropicos",
  },
  {
    uuid: "ce0bdb10-c54c-012f-13c7-3c075448cc4b",
    slug: "anecdotes-africaines-depuis-lorigine-ou-la-dcouverte-des-diffrents-royaumes-qui",
  },
  {
    uuid: "578be1e0-479e-0138-97ca-0e588c515cea",
    slug: "animal-spirit-blue",
  },
  {
    uuid: "c3a34850-0030-0130-1233-58d385a7bc34",
    slug: "annals-of-the-first-african-church-in-the-united-states-of-america-microform",
  },
  {
    uuid: "96c5f0a0-125c-0138-383a-60f81dd2b63c",
    slug: "anne-wagner-album",
  },
  {
    uuid: "fe972540-0034-0130-112d-58d385a7bc34",
    slug: "announcing-the-fall-style-book",
  },
  {
    uuid: "72420f90-035a-0135-c896-13824e36242f",
    slug: "annual-report-with-the-constitution-and-by-laws",
  },
  {
    uuid: "dcb53010-a688-0133-9b1f-00505686d14e",
    slug: "anthony-imperato-trini-alvarado-and-unidentified-others-in-the-stage-production",
  },
  {
    uuid: "2c4e48f0-ee88-0131-58e3-58d385a7b928",
    slug: "aphricae-tabula-i",
  },
  {
    uuid: "e0fba280-003d-0130-d59d-58d385a7bc34",
    slug: "apuleius-changed-into-a-donkey",
  },
  {
    uuid: "e5006bd0-c507-0136-4edf-518c7cf7dd2a",
    slug: "arco-trivmphal-y-explicacion-de-svs-historias-empressas-y-hieroglyphicos",
  },
  {
    uuid: "8ddd1410-0036-0130-25ea-58d385a7bc34",
    slug: "arizona-march-and-two-step",
  },
  {
    uuid: "3897e7c0-8036-0139-89c1-0242ac110003",
    slug: "arrest-du-conseil-destat-du-roy",
  },
  {
    uuid: "5f301f40-c548-012f-d3e3-58d385a7bc34",
    slug: "artykelen-van-t-overgaen-van-nieuw-nederlandt",
  },
  {
    uuid: "b15d70e0-0031-0130-63f0-58d385a7bc34",
    slug: "astronomicum-csareum",
  },
  {
    uuid: "2d38a0f0-cf59-0133-4eb5-00505686a51c",
    slug: "atlas-eclipticalis-19500",
  },
  {
    uuid: "2c67a1c0-a82b-0133-97c3-00505686a51c",
    slug: "atlas-of-the-illustrated-building-laws-of-the-principal-cities-of-the-united",
  },
  {
    uuid: "16b478a0-0035-0130-a025-58d385a7bc34",
    slug: "aurora-ny-from-the-north-poplars",
  },
  {
    uuid: "ccc071c0-0031-0130-d76e-58d385a7bc34",
    slug: "autobiography-sermons-addresses-and-essays-of-bishop-lh-holsey",
  },
  {
    uuid: "5ed73e80-d4ef-0138-d598-0413bd0d2e0e",
    slug: "autograph-album-from-the-signing-of-the-treaty-of-riga",
  },
  {
    uuid: "5e6a0740-0042-0130-fb27-58d385a7bc34",
    slug: "autograph-letter-signed-to-percy-bysshe-shelley-6-jul-1822",
  },
  {
    uuid: "1f50d0a0-e278-0130-1c45-58d385a7bbd0",
    slug: "autograph-letter-signed-to-philip-pendleton-cooke-9-august-1846",
  },
  {
    uuid: "ea48a7d0-0031-0130-a27c-58d385a7bc34",
    slug: "baldwins-hotel-and-theatre-san-francisco-cal",
  },
  {
    uuid: "4a5b0010-c551-012f-6661-3c075448cc4b",
    slug: "balloon-barge-at-james-river-in-virginia-custis",
  },
  {
    uuid: "98847d80-fbec-0131-86f0-58d385a7bbd0",
    slug: "baptme-enfant-boubou-keita",
  },
  {
    uuid: "cebefba0-0252-0137-c48e-21eeb1abf88d",
    slug: "barnums-museum-1776-1861",
  },
  {
    uuid: "abf13370-c54a-012f-945f-3c075448cc4b",
    slug: "battles-and-victories-of-allen-allensworth-am-phd-lieutenant-colonel-retired-us",
  },
  {
    uuid: "a4be8f60-86bd-0131-223a-58d385a7bbd0",
    slug: "beat-back-the-hun-with-liberty-bonds",
  },
  {
    uuid: "34172ab0-efc5-012f-17e4-58d385a7bbd0",
    slug: "bekers-yunyon-lokal-453-apelirt-tsu-koyfn-broyt-un-keyk-produktn-mit-dem",
  },
  {
    uuid: "c04a2060-0032-0130-2194-58d385a7bc34",
    slug: "belle-dame-voulez-vous-bien-accepter-mon-bras-votre-passion-est-trop-subite-pour",
  },
  {
    uuid: "3cc89910-0036-0130-1397-58d385a7bc34",
    slug: "ben-hur-chariot-race-march",
  },
  {
    uuid: "7f0af270-c604-012f-b2be-58d385a7bc34",
    slug: "beschryving-van-de-plechtigheden-nevens-de-lofdichten-en-gebeden-uitgesproken-op",
  },
  {
    uuid: "41763720-c6b2-0132-99ad-58d385a7b928",
    slug: "betulia-liberata",
  },
  {
    uuid: "06169030-ad46-0135-9fe9-5d93a39366b8",
    slug: "bianca-opera-in-one-act-orchestra-score",
  },
  {
    uuid: "bb4a99e0-0032-0130-2cf9-58d385a7bc34",
    slug: "birds-eye-view-of-fargo-dakota-1880",
  },
  {
    uuid: "7649b290-c54c-012f-b327-3c075448cc4b",
    slug: "birds-eye-view-of-rochester-strafford-county-new-hampshire-from-a-position-east",
  },
  {
    uuid: "f11ff4b0-c5ea-012f-8f7e-58d385a7bc34",
    slug: "birds-eye-view-of-san-luis-obispo-cal",
  },
  {
    uuid: "092dcec0-0035-0130-7e81-58d385a7bc34",
    slug: "birds-eye-view-of-the-city-and-county-of-san-francisco-1869",
  },
  {
    uuid: "51af50f0-003e-0130-03f9-58d385a7bc34",
    slug: "birds-eye-view-of-the-great-suspension-bridge-connecting-the-cities-of-new-york",
  },
  {
    uuid: "df7ca700-0033-0130-c1a4-58d385a7bc34",
    slug: "birds-eye-view-of-camp-convalescent-near-alexandria-va",
  },
  {
    uuid: "5f9038f0-0036-0130-c705-58d385a7bc34",
    slug: "birds-eye-view-of-the-city-of-san-francisco-and-surrounding-country",
  },
  {
    uuid: "663d7ec0-0036-0130-6e4b-58d385a7bc34",
    slug: "birds-eye-view-of-washington-dc-and-environs-1865",
  },
  {
    uuid: "6fc0cad0-0034-0130-548a-58d385a7bc34",
    slug: "black-residents-near-the-capitol-in-washington",
  },
  {
    uuid: "4accb810-c557-012f-640f-3c075448cc4b",
    slug: "blake-street-denver-colorado",
  },
  {
    uuid: "fed55480-0031-0130-7af9-58d385a7bc34",
    slug: "bonaventure-a-prose-pastoral-of-acadian-louisiana",
  },
  {
    uuid: "23034810-6285-0130-3af8-58d385a7bbd0",
    slug: "book-of-nonsense",
  },
  {
    uuid: "992de4f0-86c0-0131-7c3c-58d385a7b928",
    slug: "books-wanted-for-our-men-in-camp-and-over-there",
  },
  {
    uuid: "0c3de3d0-86b6-0131-0f6a-58d385a7bbd0",
    slug: "bouck-white-preacher-church-of-the-social-revolution",
  },
  {
    uuid: "e981e440-86c0-0131-a363-58d385a7b928",
    slug: "boys-and-girls-you-can-help-your-uncle-sam-win-the-war",
  },
  {
    uuid: "f6253ae0-4801-0132-1049-58d385a7bbd0",
    slug: "breve-metodo-di-canto-diviso-in-tre-parti-composto-e-dedicato-a-girolamo",
  },
  {
    uuid: "81466020-c551-012f-0b86-3c075448cc4b",
    slug: "bridges-at-echo-bay",
  },
  {
    uuid: "1a154490-c9b7-0132-a9c3-58d385a7b928",
    slug: "buckleys-history-of-the-great-reunion-of-the-north-and-the-south-and-of-the-blue",
  },
  {
    uuid: "8597eb20-0032-0130-82cb-58d385a7bc34",
    slug: "budapest-from-the-fortress",
  },
  {
    uuid: "9a502a00-c556-012f-61c9-58d385a7bc34",
    slug: "buildings-of-the-great-central-fair-in-aid-of-the-us-sanitary-commission-logan",
  },
  {
    uuid: "8d66c1a0-ea90-0131-92ee-58d385a7bbd0",
    slug: "burdge-and-allied-families",
  },
  {
    uuid: "51ef9bb0-c557-012f-66af-3c075448cc4b",
    slug: "burning-of-the-merchants-exchange-new-york-city-the-great-fire-of-december-1835",
  },
  {
    uuid: "310b4480-acf8-0138-385d-2f4827a0d518",
    slug: "bust-of-dionysius-or-antinous",
  },
  {
    uuid: "d1f5c500-a8e3-0138-67f2-01f555728f46",
    slug: "bust-of-voltaire",
  },
  {
    uuid: "7fb82f70-c551-012f-370f-3c075448cc4b",
    slug: "caatskill-falls",
  },
  {
    uuid: "d43052f0-c549-012f-c4b4-3c075448cc4b",
    slug: "cakiamouni-and-tiou-minh",
  },
  {
    uuid: "15f8a020-68c1-0135-04bb-25c8a88e6488",
    slug: "calisthenic-songs-illustrated-a-new-and-popular-collection-of-calisthenic-songs",
  },
  {
    uuid: "17205cf0-0035-0130-c490-58d385a7bc34",
    slug: "camp-fires-of-the-afro-american-or-the-colored-man-as-a-patriot-soldier-sailor",
  },
  {
    uuid: "8ed14410-2eae-0135-5a20-615f4fe64d65",
    slug: "campaign-songs-for-1888-dedicated-to-the-loyal-voters-of-the-union-who-prefer",
  },
  {
    uuid: "ebc9b1c0-c5e9-012f-d225-58d385a7bc34",
    slug: "canal-in-the-dunes",
  },
  {
    uuid: "ecc52da0-c536-012f-c71d-58d385a7bc34",
    slug: "caricature-of-locke-favorite-of-fortune-figures-explanatory-of-the-conformation",
  },
  {
    uuid: "3a57f8c0-ee88-0131-a8cc-58d385a7b928",
    slug: "carta-delle-isole-antille",
  },
  {
    uuid: "5f75f0e0-f015-0131-3669-58d385a7b928",
    slug: "carte-dune-partie-de-lafrique-mridionale-pour-lintelligence-des-travaux",
  },
  {
    uuid: "8905a320-f015-0131-43e4-58d385a7b928",
    slug: "carte-de-la-coste-occidentale-dafrique-depuis-le-cap-blanc-jusqua-tanit",
  },
  {
    uuid: "7d70ca00-f015-0131-c133-58d385a7b928",
    slug: "carte-du-golfe-de-benin-et-partie-de-la-cte-de-guine-depuis-la-riv-de-volta",
  },
  {
    uuid: "64aec8b0-f015-0131-af52-58d385a7b928",
    slug: "carte-du-thatre-de-la-guerre-au-transvaal",
  },
  {
    uuid: "5f0f8c20-ee88-0131-84fa-58d385a7b928",
    slug: "carte-exacte-de-la-cte-du-cap-verd",
  },
  {
    uuid: "53f765b0-1255-0138-bb49-60f81dd2b63c",
    slug: "casey-at-the-bat",
  },
  {
    uuid: "1d9a53b0-cc57-0133-1b78-00505686a51c",
    slug: "cast-of-e-e-cummings-hand",
  },
  {
    uuid: "05ddce50-c557-012f-50fc-3c075448cc4b",
    slug: "cat-holding-a-mouse",
  },
  {
    uuid: "40899a40-429e-0137-aca3-1d91761bcaee",
    slug: "catalog-of-the-public-library-of-toledo",
  },
  {
    uuid: "d8ed83b0-dfca-0133-6d65-00505686a51c",
    slug: "catalogue-of-captain-de-negronis-collection-of-porcelain-jade-jewels-c",
  },
  {
    uuid: "6637a350-a7de-0136-d5c0-0911e7ad7278",
    slug: "catalogue-of-charles-lambs-library",
  },
  {
    uuid: "42c56300-c16c-0130-ab31-58d385a7bbd0",
    slug: "catalogue-of-standard-new-jersey-records-for-the-edison-phonograph",
  },
  {
    uuid: "a9a402b0-c605-012f-60d8-58d385a7bc34",
    slug: "catalogue-of-very-important-finished-pictures-studies-sketches-and-original",
  },
  {
    uuid: "c9cec960-0032-0130-7948-58d385a7bc34",
    slug: "cataracte-de-niagara-falls-of-niagara-united-states-of-nth-america-carte",
  },
  {
    uuid: "7e7c91f0-c551-012f-f090-3c075448cc4b",
    slug: "catharine-macaulay-autograph-letter-copy-signed-to-mary-wollstonecraft-30",
  },
  {
    uuid: "45c68bf0-003e-0130-8985-58d385a7bc34",
    slug: "catskill-mountain-house",
  },
  {
    uuid: "a4f7aa40-0031-0130-7fff-58d385a7bc34",
    slug: "catskill-mountains-from-w-youngs-saugerties-ny",
  },
  {
    uuid: "ac3fca50-c54c-012f-99b1-3c075448cc4b",
    slug: "celui-la-on-peut-le-mettre-en-liberte-il-nest-plus-dangereux",
  },
  {
    uuid: "fa1e75f0-7e41-0132-1606-58d385a7bbd0",
    slug: "chaconne",
  },
  {
    uuid: "fee1b7b0-c5ea-012f-db97-58d385a7bc34",
    slug: "chopin",
  },
  {
    uuid: "6ea80d00-205b-0139-80ad-0242ac110003",
    slug: "choregraphie-ou-lart-de-dcrire-la-dance-par-caracteres-figures-et-signes",
  },
  {
    uuid: "4aeae8c0-1c93-0130-9c46-58d385a7bbd0",
    slug: "chosen-gyoretsu-zu",
  },
  {
    uuid: "612962f0-5066-0135-6505-43416ca16717",
    slug: "chromatische-anmerkungen",
  },
  {
    uuid: "feeb34c0-c6e3-012f-5be1-3c075448cc4b",
    slug: "chronicle",
  },
  {
    uuid: "7866ab00-0032-0130-b703-58d385a7bc34",
    slug: "ciaconna-di-j-s-bach",
  },
  {
    uuid: "0aef6e40-8c2a-0135-e210-2160ed205228",
    slug: "cinq-caprices-pour-le-violon-seul-op-18",
  },
  {
    uuid: "ffb966e0-8c3d-0135-6e3a-03e9f71e52c1",
    slug: "cinque-etudes-pour-le-violon-seul-ov-33",
  },
  {
    uuid: "4f01e300-c557-012f-d29c-3c075448cc4b",
    slug: "city-of-concord-nh-from-the-high-bluff-about-80-rods-north-east-of-the-free",
  },
  {
    uuid: "75386160-c54c-012f-0bf1-3c075448cc4b",
    slug: "city-of-taunton-mass",
  },
  {
    uuid: "99925800-0030-0130-f8a6-58d385a7bc34",
    slug: "city-residence-of-mr-daniel-parish-new-york",
  },
  {
    uuid: "29f3ef50-c607-012f-0e0a-58d385a7bc34",
    slug: "clotelle-or-the-colored-heroine-a-tale-of-the-southern-states-2",
  },
  {
    uuid: "5b631290-0032-0130-8416-58d385a7bc34",
    slug: "coats-of-arms-of-new-amsterdam-and-new-netherland",
  },
  {
    uuid: "797b0a40-d0d4-0132-7c11-58d385a7bbd0",
    slug: "collection-of-lute-music-in-french-lute-tablature",
  },
  {
    uuid: "0c24d4f0-c5ff-0132-cf01-58d385a7bbd0",
    slug: "collection-of-magical-and-astrological-texts",
  },
  {
    uuid: "8a8aaf90-c17a-0134-3c79-00505686a51c",
    slug: "collection-of-organ-music-chiefly-fugues",
  },
  {
    uuid: "9c097ea0-c532-012f-b9f1-3c075448cc4b",
    slug: "collection-of-texts-on-shabbethai-tzevi-and-the-sabbatean-movement",
  },
  {
    uuid: "0ed66d90-003e-0130-3c1b-58d385a7bc34",
    slug: "colonel-timothy-omeara-an-unknown-hero-of-the-war",
  },
  {
    uuid: "11d1c9c0-c096-0134-dc7d-00505686a51c",
    slug: "commanders-of-the-dining-room-biographic-sketches-and-portraits-of-successful",
  },
  {
    uuid: "7534b690-8e52-0134-6598-00505686a51c",
    slug: "commonplace-book-of-songs",
  },
  {
    uuid: "fbdbbdc0-c605-012f-fc5c-58d385a7bc34",
    slug: "communications-on-public-health-and-public-improvements-presented",
  },
  {
    uuid: "ef691e70-29af-0133-391c-60f81dd2b63c",
    slug: "comparative-statement-with-reference-to-a-british-claim-against-the-united",
  },
  {
    uuid: "6c435350-bf34-0135-2c32-0f9fcb6844cd",
    slug: "compendio-historico-del-los-indios-de-peru",
  },
  {
    uuid: "19a20fb0-af6e-0134-cd81-00505686a51c",
    slug: "complete-course-in-modern-harmony-composition-and-orchestration-for-dance-band",
  },
  {
    uuid: "71d2ede0-c604-012f-3c43-58d385a7bc34",
    slug: "concerto-for-violin-and-string-orchestra",
  },
  {
    uuid: "82367f60-feae-012f-cb38-58d385a7bbd0",
    slug: "condemned-tenement",
  },
  {
    uuid: "663312e0-c258-0135-3ee1-0118bc5318d8",
    slug: "considrations-diverses-sur-hati",
  },
  {
    uuid: "1790c8c0-4489-0135-3911-0f9ea53740e6",
    slug: "conte-de-tsar-saltan-et-de-son-fils-le-glorieux-et-puissant-prince-gvidon",
  },
  {
    uuid: "97b44b70-0034-0130-7dcd-58d385a7bc34",
    slug: "continental-clothing-house-566-568-570-and-572-washington-street-boston",
  },
  {
    uuid: "89b651b0-037c-0135-fa4f-006b13569428",
    slug: "conundrum-fan",
  },
  {
    uuid: "8210bb80-c54c-012f-e308-3c075448cc4b",
    slug: "conversation-galante",
  },
  {
    uuid: "af428170-fc04-0132-8eca-58d385a7bbd0",
    slug: "cosmographey-oder-beschreibung-aller-lnder-herrschafften-frnemsten-stetten",
  },
  {
    uuid: "1c1d9770-ee88-0131-5d80-58d385a7b928",
    slug: "coste-dafrique-et-les-isles-comprises-entre-le-cap-rouge-et-la-riviere-de-nunho",
  },
  {
    uuid: "77ee7930-e292-0134-53ee-2b9c829022eb",
    slug: "costume-designs-for-the-ballet-la-pastorella-svizzera",
  },
  {
    uuid: "761992a0-fbec-0131-19ca-58d385a7bbd0",
    slug: "costumes-des-pays-bas",
  },
  {
    uuid: "b1b4a060-9e2c-0130-fe26-58d385a7b928",
    slug: "costumi-della-corte-pontificia",
  },
  {
    uuid: "19c43b30-ee88-0131-dcb0-58d385a7b928",
    slug: "countries-in-the-northern-tropical-regions-of-africa",
  },
  {
    uuid: "0feb3a00-c533-012f-321d-3c075448cc4b",
    slug: "credo",
  },
  {
    uuid: "7a2c13f0-003e-0130-f4cf-58d385a7bc34",
    slug: "crescentius-mather-aetatis-suae-85-1724",
  },
  {
    uuid: "15934ea0-cc58-0133-7078-00505686a51c",
    slug: "critical-remarks-by-the-committee-of-examination-on-compositions-c-presented",
  },
  {
    uuid: "fb9c81c0-0034-0130-0b7f-58d385a7bc34",
    slug: "crystal-palace-new-york",
  },
  {
    uuid: "8356f560-003e-0130-e79d-58d385a7bc34",
    slug: "custerssic-last-charge-march-galop-descriptive",
  },
  {
    uuid: "05574380-c575-012f-544f-58d385a7bc34",
    slug: "dada-siegt-wiedererffnung-der-polizeilich-geschlossenen-ausstellung",
  },
  {
    uuid: "1e8a0090-0031-0130-bf09-58d385a7bc34",
    slug: "dance-mad-or-the-dances-of-the-day",
  },
  {
    uuid: "1a910e10-c5eb-012f-b713-58d385a7bc34",
    slug: "dance-of-the-dryads",
  },
  {
    uuid: "f6d8db30-0031-0130-1ed4-58d385a7bc34",
    slug: "dancing-a-complete-instructor-and-guide-to-all-the-new-and-standard-dances",
  },
  {
    uuid: "8a3bb3c0-a74c-0133-8950-00505686a51c",
    slug: "daniel-phoenix-jr-receipt-book",
  },
  {
    uuid: "d1834960-a7d9-0136-33d2-7d1c8cc22cd3",
    slug: "das-gelobte-abgebildete-schlaraffen-land",
  },
  {
    uuid: "83f75370-0031-0130-40be-58d385a7bc34",
    slug: "dawn-of-the-century-march",
  },
  {
    uuid: "879ccbb0-29af-0133-fe52-60f81dd2b63c",
    slug: "de-bow-genealogy",
  },
  {
    uuid: "5dd3a310-c701-012f-48d2-3c075448cc4b",
    slug: "de-herba-panacea-quam-alii-tabacum-alii-petum-aut-nicotianam-vocant-brevis",
  },
  {
    uuid: "baa8f410-c542-012f-4b42-3c075448cc4b",
    slug: "de-la-rhabilitation-de-la-race-noire-par-la-rpublique-dhati",
  },
  {
    uuid: "181a3a90-0036-0130-3def-58d385a7bc34",
    slug: "de-larpublique-dcembre-1830-no-3-from-pasquinade",
  },
  {
    uuid: "8ebd7820-21cf-0133-d407-58d385a7b928",
    slug: "de-lumi-e-obra",
  },
  {
    uuid: "77fafb40-c603-012f-0511-58d385a7bc34",
    slug: "de-prinselijke-afkomst-der-nederlandsche-vlag-gehandhaafd",
  },
  {
    uuid: "8ae7f5d0-0032-0130-3aec-58d385a7bc34",
    slug: "deborah-an-oratorio-or-sacred-drama-as-it-is-performd-at-the-kings-theatre",
  },
  {
    uuid: "1700cd90-c554-012f-8aae-3c075448cc4b",
    slug: "declaration-of-independence",
  },
  {
    uuid: "d64272f0-bd6b-0138-5821-53366f71579c",
    slug: "dedham-vale",
  },
  {
    uuid: "66a81de0-e1b5-0134-7926-574bfeab36a4",
    slug: "del-vetro-libri-quattro-pubblicati-in-occasione-de-gloriosi-sponsali",
  },
  {
    uuid: "f8994c10-fc03-0132-9725-58d385a7bbd0",
    slug: "dellhistoria-natvrale-di-ferrante-imperato-libri-xxviii-nella-qvale",
  },
  {
    uuid: "c52cf280-0031-0130-b2e5-58d385a7bc34",
    slug: "depuis-que-virginie-a-obtenu-la-septieme-accessit-de-poesie-24",
  },
  {
    uuid: "6a135870-0032-0130-071c-58d385a7bc34",
    slug: "der-letzte-zauberer-oper-in-2-akten",
  },
  {
    uuid: "7c7b1770-e2e6-0132-e6c7-58d385a7bbd0",
    slug: "deux-amours",
  },
  {
    uuid: "cd2f8420-c604-012f-1302-58d385a7bc34",
    slug: "deux-nocturnes-pour-le-piano-forte-op-32",
  },
  {
    uuid: "bbbc6020-c605-012f-a2df-58d385a7bc34",
    slug: "deux-nocturnes-pour-le-pianoforte-op-55",
  },
  {
    uuid: "ccebde20-5595-0133-c6cd-00505686a51c",
    slug: "diarios-y-memorias-de-los-svcessos-principales-y-noticias-mas-sobresalientes-en",
  },
  {
    uuid: "1ad70e70-0032-0130-f815-58d385a7bc34",
    slug: "die-brder-gemeinde-bethlehem-in-nord-america-in-pensylvanien",
  },
  {
    uuid: "bd7b1c00-9331-0130-4494-58d385a7b928",
    slug: "die-gtterbraut",
  },
  {
    uuid: "5ddf39a0-c545-012f-c5b5-3c075448cc4b",
    slug: "die-freundliche-bewillkommung-der-saltzburgischen-emigranten-in-leipzig-anno",
  },
  {
    uuid: "a3421380-9892-0134-7371-00505686a51c",
    slug: "die-sterreichische-vlkerbundanleihe-materialien-und-daten-nach-dem-stande-vom-31",
  },
  {
    uuid: "3e3cd9f0-dfa7-0132-2cb1-58d385a7bbd0",
    slug: "discours-prononc-par-m-levque-de-viviers-avant-de-prter-son-serment-civique-le",
  },
  {
    uuid: "cd297aa0-c5ea-012f-a4b2-58d385a7bc34",
    slug: "dissertation-sur-la-generation-et-les-transformations-des-insectes-de-surinam",
  },
  {
    uuid: "73863090-f015-0131-0a19-58d385a7b928",
    slug: "dominii-e-protettorati-italiani-nelleritrea-e-regioni-limitrofe-sudan-abissinia",
  },
  {
    uuid: "e2bfb3b0-50f8-0133-b433-00505686a51c",
    slug: "dos-fechas-holograph",
  },
  {
    uuid: "09c16a80-8495-0136-7bf7-6bf747782136",
    slug: "dr-faust",
  },
  {
    uuid: "6d87e300-c602-012f-e633-58d385a7bc34",
    slug: "dr-jekyll-and-mr-hyde-or-a-mis-spent-life-a-drama-in-four-acts",
  },
  {
    uuid: "9d11a6a0-c5ea-012f-da35-58d385a7bc34",
    slug: "dragon-tree-peak-of-teneriffe",
  },
  {
    uuid: "14c2dbb0-d50d-0130-07a0-58d385a7b928",
    slug: "dvorets-sovetov-vsesoiuzny-konkurs-1932-g-izdanie-soiuza-sovetskikh",
  },
  {
    uuid: "f3ea1650-c5ea-012f-cf01-58d385a7bc34",
    slug: "early-german-woodcut-of-a-new-world-scene",
  },
  {
    uuid: "53630880-0032-0130-4c08-58d385a7bc34",
    slug: "earthquakes-tokens-of-gods-power-and-wrath",
  },
  {
    uuid: "5ac67590-bcfa-0131-6e13-58d385a7b928",
    slug: "eccles-mill-and-pond-fayettevile-north-carolina",
  },
  {
    uuid: "f09f8180-29ae-0133-4eb4-60f81dd2b63c",
    slug: "eda-glaser-microfilm-collection",
  },
  {
    uuid: "1aa46ba0-c7e1-0135-1566-0d7eb556c178",
    slug: "ehon-tshshi",
  },
  {
    uuid: "398b38b0-60db-0135-6988-0f92c77b8f70",
    slug: "el-brasil-restituido",
  },
  {
    uuid: "c6496060-c6e4-012f-3170-3c075448cc4b",
    slug: "elegy-for-viola-and-piano",
  },
  {
    uuid: "8b094e30-2f9e-0131-346f-58d385a7bbd0",
    slug: "elementos-de-analoga-y-sintaxis-de-la-lengua-castellana-extractados",
  },
  {
    uuid: "33084c70-0032-0130-75d2-58d385a7bc34",
    slug: "elisabeth-grace-and-rachel-martin",
  },
  {
    uuid: "5a258170-50ae-0133-2e74-00505686a51c",
    slug: "elizabeth-de-hart-bleecker-diary",
  },
  {
    uuid: "3357d730-003e-0130-8907-58d385a7bc34",
    slug: "elizabeth-margaret-chandler",
  },
  {
    uuid: "20a95e90-0d03-0131-33af-58d385a7b928",
    slug: "ellen-merton-the-belle-of-lowell-or-the-confessions-of-the-gfk-club",
  },
  {
    uuid: "2620dc20-ee88-0131-2030-58d385a7b928",
    slug: "empire-des-abissins-comme-il-est-presentement",
  },
  {
    uuid: "865e5500-0034-0130-32c8-58d385a7bc34",
    slug: "enfants-jouant-la-balle",
  },
  {
    uuid: "eaf18130-c54b-012f-1d75-3c075448cc4b",
    slug: "epitaph-suite-inquisition-movement",
  },
  {
    uuid: "3ddac6b0-0036-0130-129f-58d385a7bc34",
    slug: "erste-internationale-dada-messe",
  },
  {
    uuid: "3f28d020-8c3f-0135-f484-05603560d5f9",
    slug: "etudes-et-caprices-pour-le-violon-seul-oeuv-35-cah-v-no-18-24",
  },
  {
    uuid: "2cdca3d0-c6ce-012f-7650-58d385a7bc34",
    slug: "ex-libris-solomon-schechter",
  },
  {
    uuid: "cafe0e60-0032-0130-bd77-58d385a7bc34",
    slug: "exchange-hotel-and-ballard-house-richmond-va",
  },
  {
    uuid: "92ee43a0-29af-0133-2824-60f81dd2b63c",
    slug: "extracts-from-the-evidence-delivered-before-a-select-committee-of-the-house",
  },
  {
    uuid: "01387ce0-c575-012f-116e-58d385a7bc34",
    slug: "f-street-denver",
  },
  {
    uuid: "7e20ce70-c551-012f-8333-58d385a7bc34",
    slug: "fm-arouet-de-voltaire",
  },
  {
    uuid: "ca039bb0-29af-0133-d051-60f81dd2b63c",
    slug: "facts-and-documents-connected-with-the-late-insurrection-in-jamaica",
  },
  {
    uuid: "ef1495c0-c5ea-012f-62fb-58d385a7bc34",
    slug: "fall-river-mass-1852",
  },
  {
    uuid: "585817a0-003e-0130-d1c3-58d385a7bc34",
    slug: "falls-of-the-indian-brook-opposite-west-point-ny",
  },
  {
    uuid: "b4234df0-0bac-0133-d026-58d385a7bbd0",
    slug: "fancy-costumes-scrapbook-approximately-1920-1932",
  },
  {
    uuid: "8b88d1d0-0033-0130-68eb-58d385a7bc34",
    slug: "fantaisie-pour-le-piano-op-49-f-minor",
  },
  {
    uuid: "a628ed70-29b0-0133-4f65-60f81dd2b63c",
    slug: "farewell-address",
  },
  {
    uuid: "40e61b00-c540-012f-e02c-3c075448cc4b",
    slug: "fifteen-pueblo-indians-who-are-in-washington-in-aim-to-keep-the-firewater-out",
  },
  {
    uuid: "18e8e990-c552-012f-40c9-3c075448cc4b",
    slug: "fifteen-years-of-a-dancers-life-with-some-account-of-her-distinguished-friends",
  },
  {
    uuid: "c6149020-0032-0130-c333-58d385a7bc34",
    slug: "fifth-avenue-from-42nd-street-looking-north",
  },
  {
    uuid: "75c626f0-c54c-012f-7676-3c075448cc4b",
    slug: "fifth-avenue-from-42nd-street-looking-south",
  },
  {
    uuid: "52d195c0-c603-012f-c369-58d385a7bc34",
    slug: "financial-instructions-in-relation-to-army-accounts-1910-reprinted",
  },
  {
    uuid: "cb7adae0-0358-0135-830c-2154a1d81be1",
    slug: "financial-report-from-april-1893-to-jan-1897",
  },
  {
    uuid: "efccde60-c5ea-012f-e61c-58d385a7bc34",
    slug: "first-view-of-the-battle-of-patapsco-neck-baltimore-maryland",
  },
  {
    uuid: "ddb7ddc0-c604-012f-6de3-58d385a7bc34",
    slug: "five-preludes-passacaglias-and-fugues-for-string-quartet-or-orchestra",
  },
  {
    uuid: "d82a6a90-0031-0130-1848-58d385a7bc34",
    slug: "folks-from-dixie-with-illustrations-by-e-w-kemble",
  },
  {
    uuid: "7206e180-79c8-0133-22eb-00505686a51c",
    slug: "fort-niagara-statement-of-account-with-edward-pollard",
  },
  {
    uuid: "9fca8830-c939-0134-a0c5-00505686a51c",
    slug: "fort-ontario-ledger",
  },
  {
    uuid: "8113a100-003e-0130-9442-58d385a7bc34",
    slug: "fort-pickens-pensacola-harbor-florida",
  },
  {
    uuid: "fdcd8ff0-c605-012f-9494-58d385a7bc34",
    slug: "four-years-in-europe-the-barnum-bailey-greatest-show-on-earth-in-the-old-world",
  },
  {
    uuid: "a0b39da0-0034-0130-e21a-58d385a7bc34",
    slug: "fourth-of-july-parade-passing-new-york-public-library-off-fifth-avenue",
  },
  {
    uuid: "7a573c80-c170-0130-23e2-58d385a7b928",
    slug: "fragment-of-a-cello-part-for-the-trio-op-87",
  },
  {
    uuid: "2d88c2f0-003e-0130-0d92-58d385a7bc34",
    slug: "frances-burney-darblay",
  },
  {
    uuid: "caccec10-c5ea-012f-420d-58d385a7bc34",
    slug: "francis-days-new-and-original-ball-room-dances-containing-full-descriptions",
  },
  {
    uuid: "a84f60d0-cddf-0138-029f-0335ad7a68e9",
    slug: "francis-stanfell-papers",
  },
  {
    uuid: "f5461440-2a6d-0133-d7f6-3c07547a230f",
    slug: "frankenstein-or-the-modern-prometheus-to-which-is-added-vol-1-of-f-schillers",
  },
  {
    uuid: "be294d00-9ad8-0134-7eb4-00505686a51c",
    slug: "freedom-a-fable",
  },
  {
    uuid: "f337e650-c5ea-012f-92b2-58d385a7bc34",
    slug: "from-a-contemporary-print-federal-hall-wall-street-and-trinity-church-new-york",
  },
  {
    uuid: "dde82e40-0032-0130-f826-58d385a7bc34",
    slug: "from-the-ball-room-to-hell",
  },
  {
    uuid: "6f0ffff0-c54c-012f-59d9-3c075448cc4b",
    slug: "front-view-of-the-new-york-post-office",
  },
  {
    uuid: "15b27490-eac6-0132-794b-58d385a7bbd0",
    slug: "fubo-onju-kyo",
  },
  {
    uuid: "2866af40-7aca-0135-dcb6-0c9bdce76ccf",
    slug: "full-blooded-yankee",
  },
  {
    uuid: "eccf8a20-c5ea-012f-5eeb-58d385a7bc34",
    slug: "fulton-st-and-market",
  },
  {
    uuid: "4ffe34f0-6a79-0135-cb9b-413a8cc9bc5a",
    slug: "funeral-notice-hippie-in-the-haight-ashbury-disctrict-of-this-city-hippie",
  },
  {
    uuid: "80428920-0d48-0138-fc89-698c5b30c74e",
    slug: "gadla-estifanos-e-abakerazun",
  },
  {
    uuid: "a9a9c290-0033-0130-d7e7-58d385a7bc34",
    slug: "gag-book",
  },
  {
    uuid: "0415eae0-fcf1-0138-d2ef-0242ac110003",
    slug: "galley-proofs-for-the-novel-germinal-with-the-authors-manuscript-corrections",
  },
  {
    uuid: "8b68b1e0-2eae-0135-6275-236a3bdb495f",
    slug: "garfield-and-arthur-republican-campaign-song-book-1880",
  },
  {
    uuid: "b685bee0-0031-0130-2a30-58d385a7bc34",
    slug: "genealogical-chronology-of-the-world-before-christ-giving-the-origin-genealogy",
  },
  {
    uuid: "8de73680-0033-0130-778b-58d385a7bc34",
    slug: "general-view-of-the-great-yo-semite-valley-mariposa-county-california",
  },
  {
    uuid: "c3582080-003d-0130-f463-58d385a7bc34",
    slug: "gentlemen-at-a-richly-laid-table",
  },
  {
    uuid: "ba096870-5ee6-0132-0022-58d385a7b928",
    slug: "george-clinton-genet-cash-book",
  },
  {
    uuid: "55aa9440-7546-0139-7cc6-0242ac110003",
    slug: "george-endicott-diary",
  },
  {
    uuid: "f99b2d40-205a-0130-7baa-58d385a7b928",
    slug: "george-washington-st-john-citizen-and-upon-occasion-soldier",
  },
  {
    uuid: "9f42dce0-8317-0132-a808-58d385a7bbd0",
    slug: "george-washington-notebook-as-a-virginia-colonel",
  },
  {
    uuid: "06436fb0-c557-012f-9650-3c075448cc4b",
    slug: "georgiana-duchess-of-devonshire",
  },
  {
    uuid: "2fb32470-c552-012f-1a8f-3c075448cc4b",
    slug: "gilbert-academy-and-agricultural-college-winsted-louisiana-sketches-2",
  },
  {
    uuid: "02aba8d0-011e-0135-a3fe-6bb8353e7ded",
    slug: "gochi-gozo-himitsusho",
  },
  {
    uuid: "852dd960-dffa-0138-1395-4b3a8943e6d1",
    slug: "gospodina-leona-sapekhi-kantslera-velikag-kniazhestva-litevskag-uvieshchatelnoe",
  },
  {
    uuid: "76198e30-6edd-0133-e8fb-00505686d14e",
    slug: "gouverneur-kemble-cash-book",
  },
  {
    uuid: "5d70eb20-7f7e-0139-d123-0242ac110003",
    slug: "gov-houston-in-exile",
  },
  {
    uuid: "fbd51d80-68c0-0135-710f-0f35c4abdc83",
    slug: "graded-exercises-and-songs-for-school-and-home-part-i",
  },
  {
    uuid: "4ef82540-c551-012f-4582-3c075448cc4b",
    slug: "grand-battle-of-n-orleans-under-the-veteran-general-andrew-jackson",
  },
  {
    uuid: "4be7dfb0-c557-012f-588b-3c075448cc4b",
    slug: "grand-parade-of-the-knights-templar-triennial-conclave-san-francisco-august-20",
  },
  {
    uuid: "d5770c40-8214-0136-5435-6d1384a7f56d",
    slug: "grande-sonate-pour-le-clavecin-ou-forte-piano-oeuvre-26",
  },
  {
    uuid: "c870db50-e335-0130-3a18-58d385a7b928",
    slug: "grandfathers-clock",
  },
  {
    uuid: "f2f081b0-c5ea-012f-e1a1-58d385a7bc34",
    slug: "great-suspension-bridge-at-lewiston-and-queenston-over-the-niagara-river-six",
  },
  {
    uuid: "a5bb7110-7662-0137-2658-0b77d438b5e6",
    slug: "green-umbrella-with-a-parrot-headed-handle-like-that-carried-by-mary-poppins",
  },
  {
    uuid: "bdfc90a0-c557-012f-9403-58d385a7bc34",
    slug: "greenwich-village",
  },
  {
    uuid: "79f5b580-0031-0130-5b9c-58d385a7bc34",
    slug: "gregory-hines-as-scrooge-in-the-stage-production-comin-uptown",
  },
  {
    uuid: "80a00fe0-0031-0130-6352-58d385a7bc34",
    slug: "group-of-three-men",
  },
  {
    uuid: "1eea08e0-ee88-0131-9944-58d385a7b928",
    slug: "guinea",
  },
  {
    uuid: "868281f0-f015-0131-65e4-58d385a7b928",
    slug: "guine-entre-serre-lione-et-le-passage-de-la-ligne",
  },
  {
    uuid: "e106fdd0-d763-0138-adc5-07f27de8ff1b",
    slug: "hms-aeolus-and-hms-norwich-logbooks",
  },
  {
    uuid: "9bacbc50-c556-012f-1303-58d385a7bc34",
    slug: "hackets-town-warren-co-nj",
  },
  {
    uuid: "4f7822b0-c00d-0136-5411-11376e3c248e",
    slug: "hackley-harrisons-hotel-and-apartment-guide-for-colored-travelers-board-rooms",
  },
  {
    uuid: "34a8ab40-c605-012f-e4a8-58d385a7bc34",
    slug: "handbook-of-the-10-pr-jointed-bl-gun-mule-equipment-1914",
  },
  {
    uuid: "56f84bc0-0042-0130-508d-58d385a7bc34",
    slug: "hannes-in-amerika-seine-erfahrungen-in-deutschland-und-amerika-in-schwbischen",
  },
  {
    uuid: "1ae32350-0c1e-0130-2fd8-58d385a7b928",
    slug: "harmonice-musices-odhecaton",
  },
  {
    uuid: "581540a0-003e-0130-0d95-58d385a7bc34",
    slug: "harpers-february",
  },
  {
    uuid: "8ad66a00-6343-0135-fd08-5f2b6518dd2e",
    slug: "hayes-wheeler-song-book",
  },
  {
    uuid: "86ec2e40-2eae-0135-b855-0413a8fbbad7",
    slug: "hayes-and-wheeler-campaign-song-book-for-the-centennial-year-containing-over",
  },
  {
    uuid: "8a6d1ea0-2eae-0135-6597-354752eb4816",
    slug: "hayes-song-and-joke-book",
  },
  {
    uuid: "8bfd6240-c552-012f-dccb-3c075448cc4b",
    slug: "head-of-an-old-spaniard",
  },
  {
    uuid: "4a667f20-c557-012f-5b05-3c075448cc4b",
    slug: "helena",
  },
  {
    uuid: "0c90c3e0-ea3a-0134-795e-076dd017a035",
    slug: "henry-laurens-diary",
  },
  {
    uuid: "dce159a0-29d3-0134-5369-00505686a51c",
    slug: "henry-ten-eyck-docket-of-actions-at-law-and-related-documents",
  },
  {
    uuid: "3ae35a40-0034-0130-29a6-58d385a7bc34",
    slug: "her-royal-highness-the-princess-charlotte-of-wales",
  },
  {
    uuid: "f442a4a0-9cd5-0131-019c-58d385a7b928",
    slug: "her-enemy-some-friends-and-other-personages-stories-and-studies-mostly-of-human",
  },
  {
    uuid: "87f1e4b0-0034-0130-0b87-58d385a7bc34",
    slug: "hercules-killing-cacus",
  },
  {
    uuid: "a1e6c9b0-ad01-0139-603c-0242ac110002",
    slug: "het-groote-tafereel-der-dwaasheid",
  },
  {
    uuid: "3757a0a0-bbe6-0133-6ab9-00505686d14e",
    slug: "hieronymi-cardanide-svbtilitate-libri-xxi",
  },
  {
    uuid: "adcf4440-c6ef-012f-0f95-58d385a7bc34",
    slug: "hirte",
  },
  {
    uuid: "7abce8a0-0032-0130-abf1-58d385a7bc34",
    slug: "histoire-du-tabac-ou-il-traite-particulierement-du-tabac-en-poudre",
  },
  {
    uuid: "23e92ce0-d241-0132-e618-58d385a7bbd0",
    slug: "histoire-du-regne-de-mouley-ismael-roy-de-maroc-fez-tafilet-souz-c",
  },
  {
    uuid: "fa7ef9a0-67da-0139-cb26-0242ac110003",
    slug: "histoire-naturelle-du-cacao-et-du-sucre-divise-en-deux-traits-qui-contiennent",
  },
  {
    uuid: "31346b50-c988-0135-7259-47c3112d2bcd",
    slug: "historia-de-abrahamo-et-de-gomorro-sodomitica-eversione-ex-alcorano-ejusque",
  },
  {
    uuid: "47054f60-2e5d-0133-532c-60f81dd2b63c",
    slug: "historic-sketches-of-the-south",
  },
  {
    uuid: "ea4a69a0-a879-0131-e6c8-58d385a7b928",
    slug: "history-of-the-116th-regiment-usc-infantry-from-its-organization-in-the-early",
  },
  {
    uuid: "1db07fe0-c62d-012f-dd93-58d385a7bc34",
    slug: "history-of-the-first-african-baptist-church-from-its-organization-january-20th-2",
  },
  {
    uuid: "bafd5380-70c2-0131-8309-58d385a7bbd0",
    slug: "history-of-the-new-york-public-library-astor-lenox-and-tilden-foundations",
  },
  {
    uuid: "0dca4600-a9dd-0134-f32e-00505686a51c",
    slug: "history-of-the-samuel-crosby-family-of-bristol-new-york-with-his-genealogical",
  },
  {
    uuid: "e782a0c0-c605-012f-935b-58d385a7bc34",
    slug: "history-second-mobile-radio-broadcasting-company-december-1943-may-1945",
  },
  {
    uuid: "1ffa2890-6359-0130-5175-58d385a7bbd0",
    slug: "hokusai-manga-2",
  },
  {
    uuid: "6ea30890-c54c-012f-a7d3-3c075448cc4b",
    slug: "hollis-harvard-and-massachusetts-halls",
  },
  {
    uuid: "06369c50-0031-0130-9ff3-58d385a7bc34",
    slug: "holzschnitt",
  },
  {
    uuid: "62c8d130-0120-0135-25f7-06721a8d7d62",
    slug: "hoyo-sho",
  },
  {
    uuid: "efec1a50-1db1-0133-1471-58d385a7bbd0",
    slug: "hugh-gaine-receipt-book",
  },
  {
    uuid: "51988090-c738-0132-b02d-58d385a7b928",
    slug: "haye-ha-nefesh",
  },
  {
    uuid: "55627a40-c766-0132-3572-58d385a7b928",
    slug: "helek-rishon-mi-sefer-ha-olamot-o-maaeh-toviyah-kolel-ha-arba-olamot-ve-nehelak",
  },
  {
    uuid: "70e802b0-eac8-0132-d378-58d385a7b928",
    slug: "i-ryoun-haengsil-to",
  },
  {
    uuid: "256fa720-86bd-0131-56e3-58d385a7bbd0",
    slug: "i-want-you-for-us-army-nearest-recruiting-station",
  },
  {
    uuid: "10c7f720-c5eb-012f-d681-58d385a7bc34",
    slug: "iv-dollars",
  },
  {
    uuid: "0e3668d0-ec57-0132-5e09-58d385a7bbd0",
    slug: "il-diavolo-biondo-romanzo",
  },
  {
    uuid: "b9d1b640-0034-0130-75f2-58d385a7bc34",
    slug: "immanuel-kant",
  },
  {
    uuid: "4cc09cb0-0b20-0134-98eb-00505686a51c",
    slug: "imprint-of-the-artists-left-hand",
  },
  {
    uuid: "88fc8cb0-0036-0130-ac05-58d385a7bc34",
    slug: "improvements-on-the-art-of-manufacturing-grain-into-flour-or-meal",
  },
  {
    uuid: "3c070da0-68c2-0135-eea2-6d7976cc435f",
    slug: "improving-songs-for-anxious-children",
  },
  {
    uuid: "d3092d60-f7a4-0130-853a-58d385a7bbd0",
    slug: "in-love-if-love-be-love-vivians-song",
  },
  {
    uuid: "fcc6c3d0-c5e9-012f-81bb-58d385a7bc34",
    slug: "in-old-plantation-days",
  },
  {
    uuid: "1f819e50-c605-012f-3099-58d385a7bc34",
    slug: "in-the-court-for-the-trial-of-impeachments-and-the-correction-of-errors-between",
  },
  {
    uuid: "bb9ef940-0034-0130-c717-58d385a7bc34",
    slug: "incantation-bowl",
  },
  {
    uuid: "b32fd7f0-42b2-0133-7dc5-00505686a51c",
    slug: "index-to-the-amateur-periodicals-collection-in-dy-n-c-1-187-which-consists",
  },
  {
    uuid: "fd53dd10-e707-0134-9193-754b5d337f84",
    slug: "index-to-uncatalogued-us-railway-pamphlets-t-p-r-nc-1-72",
  },
  {
    uuid: "00727900-c605-012f-b511-58d385a7bc34",
    slug: "india-center-to-promote-cultural-relations-between-india-and-america",
  },
  {
    uuid: "f2e79c20-8426-0134-3b10-00505686a51c",
    slug: "indian-of-guillisani-lampa-peru",
  },
  {
    uuid: "152658c0-0036-0130-b06a-58d385a7bc34",
    slug: "interior-of-vestibule-canal-street-front-new-custom-house-new-orleans",
  },
  {
    uuid: "58f3b2b0-9ab5-0132-e179-58d385a7b928",
    slug: "introdutioni-a-note-con-terza-maggiore-e-con-terza-minore-e-terza-natturale",
  },
  {
    uuid: "a6746a00-2e5b-0133-dc04-60f81dd2b63c",
    slug: "intrieurs-franais",
  },
  {
    uuid: "36ed3cb0-e898-0133-b3af-00505686a51c",
    slug: "invitation-to-the-wedding-ceremony-of-edith-jones-and-edward-r-wharton",
  },
  {
    uuid: "1043aec0-c5eb-012f-9920-58d385a7bc34",
    slug: "invoice-from-aaron-lopez-to-samuel-and-william-vernon",
  },
  {
    uuid: "c81f7470-2f1d-0138-d031-0835b16ce70b",
    slug: "ioannis-antonij-sicci-de-optimo-medico-caput-primum-libri-primi-de-antiqua",
  },
  {
    uuid: "f5a99010-c701-012f-c2b2-3c075448cc4b",
    slug: "ioyfull-nevves-out-of-the-newe-founde-worlde-wherein-is-declared-the-rare",
  },
  {
    uuid: "ad3303a0-0032-0130-450e-58d385a7bc34",
    slug: "irvings-residence-on-the-hudson",
  },
  {
    uuid: "b497f9f0-0031-0130-0d8a-58d385a7bc34",
    slug: "islip-church-long-island-1842",
  },
  {
    uuid: "4f5e3580-ab80-0135-05b8-007ac3d7bb5d",
    slug: "isole-famose-porti-fortezze-e-terre-maritime-sottoposte-alla-serma-sigria-di",
  },
  {
    uuid: "45344e70-0031-0130-b95b-58d385a7bc34",
    slug: "iupiter-ot-ferus-est-eius-sic-fulmen-et-ales",
  },
  {
    uuid: "2c294ff0-0031-0130-1fb0-58d385a7bc34",
    slug: "j-punt-pientre-et-graveur",
  },
  {
    uuid: "489d9470-0031-0130-1e60-58d385a7bc34",
    slug: "jp-marat-lami-du-peuple",
  },
  {
    uuid: "e82a5ca0-2c29-0134-4323-00505686a51c",
    slug: "jabez-fitch-diary",
  },
  {
    uuid: "c7b08fc0-bbd5-0133-0137-00505686d14e",
    slug: "james-maury-letters",
  },
  {
    uuid: "d6cee680-c556-012f-6284-3c075448cc4b",
    slug: "james-watt-dem-erfinder-der-dampfmaschine",
  },
  {
    uuid: "d7ef6440-c556-012f-92af-3c075448cc4b",
    slug: "jesus-preaching-from-the-ship",
  },
  {
    uuid: "6866b490-c557-012f-bbeb-3c075448cc4b",
    slug: "jews-bill-as-amended-on-report",
  },
  {
    uuid: "dbd80f50-c54b-012f-38ae-3c075448cc4b",
    slug: "jogar-capora-ou-danse-de-la-guerre",
  },
  {
    uuid: "1a22c260-a0fe-0133-f5e0-00505686d14e",
    slug: "john-hyslop-diary",
  },
  {
    uuid: "3cf27b50-ee88-0131-109e-58d385a7b928",
    slug: "johnsons-west-indies",
  },
  {
    uuid: "9eb731f0-0bb3-0133-786a-58d385a7bbd0",
    slug: "joseph-johnson-diary",
  },
  {
    uuid: "83150410-0032-0130-edac-58d385a7bc34",
    slug: "sed-venit-hora-ut-omnis-qui-interficet-vos-arbitretur",
  },
  {
    uuid: "5af32fa0-c54c-012f-6d83-3c075448cc4b",
    slug: "juillet-1991",
  },
  {
    uuid: "f54dca10-125b-0138-c400-60f81dd2b63c",
    slug: "julia-conyers-album",
  },
  {
    uuid: "e46f4dc0-0033-0130-a13e-58d385a7bc34",
    slug: "junction-of-the-potomac-and-shenandoah-virginia",
  },
  {
    uuid: "be34b550-68c1-0135-f615-713567d14893",
    slug: "juvenile-songs-religious-moral-and-sentimental-with-brief-exercises-adapted",
  },
  {
    uuid: "6b2a35e0-f015-0131-72f3-58d385a7b928",
    slug: "kaart-van-de-goud-kust-of-kust-van-guinea",
  },
  {
    uuid: "1046c1c0-003e-0130-569b-58d385a7bc34",
    slug: "kaiser-jubilee-march-concert-march-two-step",
  },
  {
    uuid: "ef67f670-e80c-0130-657b-58d385a7b928",
    slug: "kalpasutra",
  },
  {
    uuid: "0e5ed040-e87c-0131-38e2-3c075448cc4b",
    slug: "kamerny-orkestr-akademicheskogo-teatra-opery-i-baleta-goroda-kazani-kontsert",
  },
  {
    uuid: "3a7fa160-676e-0131-ae0f-58d385a7b928",
    slug: "khor-liubitele-dukhovo-muzyki-sostoiashchi-pod-avgustieshim-gosudaria-imperatora",
  },
  {
    uuid: "b6cfdb20-0033-0130-c987-58d385a7bc34",
    slug: "kirkstall-abbey-near-leeds-yorkshire",
  },
  {
    uuid: "f0b51320-68bf-0135-4ba9-03ece64e97f3",
    slug: "kitty-cheatham-her-book-a-collection-of-songs-from-the-repertoire-of-miss-kitty",
  },
  {
    uuid: "09e0c2d0-bd74-0139-6ffd-0242ac110003",
    slug: "klnge",
  },
  {
    uuid: "31604950-0121-0135-8273-0f85db448aaa",
    slug: "koyaku-zukan",
  },
  {
    uuid: "a2a50ba0-c552-012f-6bf0-3c075448cc4b",
    slug: "lanatheme-dv-tabac",
  },
  {
    uuid: "1d63a530-4fd1-0136-1578-0d5cbaa82631",
    slug: "lhatiade-pome-en-huit-chants",
  },
  {
    uuid: "e0ac8830-0030-0130-22fa-58d385a7bc34",
    slug: "lhomme-orchestre-berlioz-in-la-caricature-provisoire-november-1-1838",
  },
  {
    uuid: "4e2d5f80-c605-012f-d769-58d385a7bc34",
    slug: "lingnu-libertin-ou-la-marquise-et-le-marmiton",
  },
  {
    uuid: "41e14ce0-67d6-0139-ee76-0242ac110003",
    slug: "la-nouvelle-france-ou-la-description-de-la-louisiane-connu-sous-le-nom",
  },
  {
    uuid: "a11589b0-c54b-012f-2b90-3c075448cc4b",
    slug: "la-villa-madama",
  },
  {
    uuid: "1127e960-5fcb-0138-c7a1-0cfcdb8637e1",
    slug: "la-villette-rue-asselin-fille-publique-faisant-le-quart-devant-sa-porte-19e",
  },
  {
    uuid: "a34ea6d0-bba6-0137-79a8-51ef59f01128",
    slug: "la-cambiale-di-matrimonio-farsadel-sigr-gioacchino-rossini-nel-teatro",
  },
  {
    uuid: "5beb86c0-6a7d-0131-25f2-58d385a7b928",
    slug: "la-clef-du-cabinet-hermetique",
  },
  {
    uuid: "19c83760-0033-0130-e138-58d385a7bc34",
    slug: "la-historia-general-delas-indias",
  },
  {
    uuid: "db70a200-e803-0134-1108-11da80d2c46b",
    slug: "la-mascherata-degli-dei-nell-ingresso-dell-eccellentissimo-signor-girolamo",
  },
  {
    uuid: "684dff50-f015-0131-4bdc-58d385a7b928",
    slug: "la-mission-marchand-et-langleterre-carte-de-la-region-explore",
  },
  {
    uuid: "b6f99190-4e1e-0135-b674-63bb4f1cc296",
    slug: "la-mort-of-s-franois-xavier",
  },
  {
    uuid: "968b6cb0-e277-0134-c263-6d3653de9645",
    slug: "la-reggia-di-calipso-cantata-a-sette-voci",
  },
  {
    uuid: "a94f5ad0-205a-0139-4d74-0242ac110003",
    slug: "la-stnochorgraphie-ou-art-dcrire-promptement-la-danse-par-arthur-saint-lon-avec",
  },
  {
    uuid: "6d5db460-bf2b-0134-9b42-00505686a51c",
    slug: "lady-anne-hamilton-commonplace-book-of-poetry",
  },
  {
    uuid: "26b52840-0031-0130-a3ed-58d385a7bc34",
    slug: "lady-elizabeth-foster",
  },
  {
    uuid: "4c8ebeb0-de25-0137-5d17-21f6da1c57c3",
    slug: "lady-gregory-sighing-for-new-worlds-to-kiltartanise",
  },
  {
    uuid: "c76187b0-0032-0130-3c86-58d385a7bc34",
    slug: "lady-lightfoot",
  },
  {
    uuid: "2890e900-0031-0130-7b15-58d385a7bc34",
    slug: "lady-with-parrot",
  },
  {
    uuid: "4b5220f0-c557-012f-6ec6-3c075448cc4b",
    slug: "lafayette-college-easton-pennsylvania",
  },
  {
    uuid: "05137b90-0035-0130-ff29-58d385a7bc34",
    slug: "lafayette-college",
  },
  {
    uuid: "4d263f90-c557-012f-c420-3c075448cc4b",
    slug: "lake-george-black-mountain",
  },
  {
    uuid: "f6fdf2a0-c551-012f-dee6-3c075448cc4b",
    slug: "landscape-with-ruins-and-two-cows-at-the-waterside",
  },
  {
    uuid: "04112b10-c557-012f-ddec-3c075448cc4b",
    slug: "landscapes-and-ruins-or-ruins-with-a-ditch-at-the-left",
  },
  {
    uuid: "cd6fa080-af15-0132-e7bb-58d385a7b928",
    slug: "landscape",
  },
  {
    uuid: "63c04720-e59d-0130-8070-58d385a7bbd0",
    slug: "larghetto-organo-for-page-138-139",
  },
  {
    uuid: "083b1950-f66e-0131-f260-58d385a7b928",
    slug: "le-bac-souvenir-des-iles-bezons",
  },
  {
    uuid: "00298650-7be7-0137-cb59-2fa45fa765c9",
    slug: "le-cabinet-des-beaux-arts-ou-recueil-destampes-gravs-daprs-les-tableaux-dun",
  },
  {
    uuid: "0b1258c0-0031-0130-7527-58d385a7bc34",
    slug: "le-chapeau-epingle-la-fille-de-berthe-morisot-et-sa-cousine",
  },
  {
    uuid: "052f5ae0-0031-0130-4e1e-58d385a7bc34",
    slug: "le-chapeau-epingle",
  },
  {
    uuid: "1ea5fdc0-0034-0130-1b55-58d385a7bc34",
    slug: "le-chapeau-epingle-2",
  },
  {
    uuid: "7c0943b0-5f21-0139-ed23-0242ac110003",
    slug: "le-code-noir-ou-edit-du-roy",
  },
  {
    uuid: "e02aab10-7f08-0132-9529-58d385a7b928",
    slug: "le-filet-brod-technique-modles-divers-procds-dexcution-bibliographie",
  },
  {
    uuid: "d893dee0-d209-0131-1454-58d385a7bbd0",
    slug: "le-livre-de-ruth-traduit-de-la-sainte-bible",
  },
  {
    uuid: "accc4280-1d8b-0139-25f2-0242ac110003",
    slug: "le-matre-a-danser-qui-enseigne-la-maniere-de-faire-tous-les-differens-pas",
  },
  {
    uuid: "f682f210-0030-0130-591b-58d385a7bc34",
    slug: "le-printemps",
  },
  {
    uuid: "2c07d6f0-c4a1-0135-02e4-4faa62a022a6",
    slug: "le-sacre-du-printemps-tableaux-de-la-russie-paenne-en-deux-parties",
  },
  {
    uuid: "f9a0da90-d21d-0130-99ab-58d385a7b928",
    slug: "le-sacre-du-printemps",
  },
  {
    uuid: "f7e51b50-e87b-0131-bc4b-3c075448cc4b",
    slug: "leonard-bernstein-in-salzau-1987-international-conductors-competition-and-master",
  },
  {
    uuid: "ff2d0cf0-c5ea-012f-eb8e-58d385a7bc34",
    slug: "les-avocats-et-les-plaideurs",
  },
  {
    uuid: "e6ee4ed0-0030-0130-fc03-58d385a7bc34",
    slug: "les-singvlaritez-de-la-france-antarctiqveavtrement-nommee-amerique-de-plusieurs",
  },
  {
    uuid: "38060ae0-0034-0130-dd90-58d385a7bc34",
    slug: "letter-cirey-france-to-marie-louise-mignot-afterwards-denis-paris-1737-dec-7",
  },
  {
    uuid: "07fda820-0035-0130-671f-58d385a7bc34",
    slug: "letter-of-columbus-to-luis-de-santangel-dated-15-february-1493",
  },
  {
    uuid: "f409f890-d505-0136-e93a-60f81dd2b63c",
    slug: "letter-book",
  },
  {
    uuid: "637de4f0-0031-0130-c39f-58d385a7bc34",
    slug: "lettres-de-mons-de-voltaire-a-mad-la-marq-du-deffand",
  },
  {
    uuid: "575d2350-a639-0132-81dc-58d385a7bbd0",
    slug: "lewis-ogden-letterbook",
  },
  {
    uuid: "7f332000-0c1d-0130-a504-58d385a7b928",
    slug: "liber-primus-ecclesiasticarum-cantionum-quatuor-uocum-superior",
  },
  {
    uuid: "be07f710-0c17-0130-e0b7-58d385a7b928",
    slug: "liber-primus-ecclesiasticarum-cantionum-quatuor-uocum-bassus",
  },
  {
    uuid: "be2572a0-0033-0130-da60-58d385a7bc34",
    slug: "liberias-offering-being-addresses-sermons-etc-by-rev-edward-w-blyden",
  },
  {
    uuid: "18ceafb0-c554-012f-b795-3c075448cc4b",
    slug: "library-lions-support-christmas-tree",
  },
  {
    uuid: "ea5524c0-c5e9-012f-76e9-58d385a7bc34",
    slug: "library",
  },
  {
    uuid: "36870780-c603-012f-d59a-58d385a7bc34",
    slug: "life-and-adventures-of-the-accomplished-forger-and-swindler-colonel-monroe",
  },
  {
    uuid: "49f8f7a0-c557-012f-d943-3c075448cc4b",
    slug: "lime-stone-springs-female-high-school-spartanburgh-dist-sc",
  },
  {
    uuid: "005f9e80-e87c-0131-3248-3c075448cc4b",
    slug: "lincoln-center-25th-anniversary-in-house-presentation",
  },
  {
    uuid: "58ff0df0-003e-0130-c3c1-58d385a7bc34",
    slug: "lincoln-centennial-grand-march",
  },
  {
    uuid: "51467530-0033-0130-c87c-58d385a7bc34",
    slug: "lionel-mapleson-with-edison-home-phonograph-and-extra-large-horn-probably",
  },
  {
    uuid: "554d98e0-cc5f-0133-9fc2-00505686a51c",
    slug: "list-of-loyalists-against-whom-judgments-were-given-under-the-confiscation-act",
  },
  {
    uuid: "7a0458b0-0032-0130-68bd-58d385a7bc34",
    slug: "lista-das-pessoas-que-sahira-condenaces-que-tiverae-sentenas-que-se-lra-no-auto",
  },
  {
    uuid: "99524d00-c54b-012f-a465-3c075448cc4b",
    slug: "lithographic-printers-union-annual-ball-jany-25-1858-ladies-invitation",
  },
  {
    uuid: "01546640-c5e6-012f-327d-3c075448cc4b",
    slug: "little-dansies-one-day-at-sabbath-school",
  },
  {
    uuid: "afc465e0-d508-0136-7fbe-60f81dd2b63c",
    slug: "little-johnny-jones-pamphlet",
  },
  {
    uuid: "6876f570-fbec-0131-9a08-58d385a7bbd0",
    slug: "living-emblem-of-the-united-states-marines-100-officers-and-9000-enlisted-men",
  },
  {
    uuid: "3ab64490-5e9b-0131-94c7-58d385a7bbd0",
    slug: "livre-de-toutes-sortes-de-feuilles-servant-lorfvrerie-plate-2",
  },
  {
    uuid: "eaea5b70-52b7-0134-4e64-00505686a51c",
    slug: "lobspruch-dess-edlen-hochberhmten-krauts-petum-oder-taback",
  },
  {
    uuid: "5a9f6130-fa1d-0135-aad8-433b6dc335de",
    slug: "locks-and-builders-hardware",
  },
  {
    uuid: "3ec1efc0-9da7-0136-e0d0-0052e8f31c3e",
    slug: "love-and-duty",
  },
  {
    uuid: "9c16f280-0034-0130-4c41-58d385a7bc34",
    slug: "ludlow-castle-rising-of-the-water-nymphs-comus",
  },
  {
    uuid: "412a81a0-d505-0136-ea25-60f81dd2b63c",
    slug: "m-william-shak-speare-his-true-chronicle-historie-of-the-life-and-death-of-king",
  },
  {
    uuid: "c9c5d0a0-286a-0133-afad-60f81dd2b63c",
    slug: "maaseh-yehudit",
  },
  {
    uuid: "822b5aa0-fed0-0131-31ae-58d385a7b928",
    slug: "macbeth",
  },
  {
    uuid: "fd579e70-0034-0130-0e1e-58d385a7bc34",
    slug: "main-plaza-san-antonio-texas",
  },
  {
    uuid: "0df935d0-003e-0130-caec-58d385a7bc34",
    slug: "majr-genl-george-b-mcclellan-general-in-chief-of-the-us-army",
  },
  {
    uuid: "22a49fb0-c551-012f-2d3c-3c075448cc4b",
    slug: "making-night-hideous",
  },
  {
    uuid: "f8e2c350-065d-0134-ec0f-00505686a51c",
    slug: "man-braucht-kein-geld-musikalisches-lustspiel-in-drei-bildern",
  },
  {
    uuid: "ed7115e0-ee87-0131-0e17-58d385a7b928",
    slug: "map-of-africa-from-the-latest-authorities-possessions-of-the-european-powers",
  },
  {
    uuid: "bee22190-ee87-0131-4b48-58d385a7b928",
    slug: "map-of-part-of-central-africa-according-to-clapperton-denham-richardson-barth",
  },
  {
    uuid: "ddc13220-ee87-0131-6dbf-58d385a7b928",
    slug: "map-of-part-of-the-western-coast-of-africa-extending-from-the-isles-de-loss",
  },
  {
    uuid: "f7900e50-ee87-0131-2a85-58d385a7b928",
    slug: "map-of-part-of-the-windward-coast-of-guinea-and-of-the-malaghetta-or-grain-coast",
  },
  {
    uuid: "bb16c1d0-182d-0137-2bd9-5b43835e619f",
    slug: "map-of-the-east-side-of-the-north-river-done-in-consequence-of-orders-from-his",
  },
  {
    uuid: "b6602740-ee87-0131-474d-58d385a7b928",
    slug: "map-of-the-old-continent-exhibiting-its-greatest-diametrical-length",
  },
  {
    uuid: "fc053940-ee87-0131-c461-58d385a7b928",
    slug: "map-of-the-mouth-of-the-river-kongo-or-zayre-with-the-adjacent-coast",
  },
  {
    uuid: "1dcc2bd0-0034-0130-bec7-58d385a7bc34",
    slug: "map-of-the-west-coast-of-africa-comprising-guinea-and-the-british-possessions",
  },
  {
    uuid: "e3ce70d0-ee87-0131-1d00-58d385a7b928",
    slug: "map-of-the-west-coast-of-africa-comprising-guinea-and-the-british-possessions-2",
  },
  {
    uuid: "a0896f90-ee87-0131-ad40-58d385a7b928",
    slug: "map-of-tribal-and-place-names",
  },
  {
    uuid: "9aa3a7f0-ee87-0131-26fd-58d385a7b928",
    slug: "map-showing-the-distribution-of-slaves-in-the-southern-states",
  },
  {
    uuid: "07d253f0-ee88-0131-fe5f-58d385a7b928",
    slug: "map-showing-the-distribution-of-the-slave-population-of-the-southern-states",
  },
  {
    uuid: "5de3e790-003e-0130-f8d5-58d385a7bc34",
    slug: "mapa-de-la-sierra-gorda-y-costa-del-seno-mexicano-desde-la-ciudad",
  },
  {
    uuid: "61108d00-1466-0133-7868-58d385a7b928",
    slug: "margeurite-le-comte-des-acadmies-de-peinture-et-de-belles-letres-de-rome",
  },
  {
    uuid: "98d79700-0034-0130-8805-58d385a7bc34",
    slug: "marriage-a-la-mode",
  },
  {
    uuid: "a4133540-c605-012f-e38b-58d385a7bc34",
    slug: "maryland-in-liberia",
  },
  {
    uuid: "e4ccc070-0033-0130-e51c-58d385a7bc34",
    slug: "massachusetts-hall-in-the-university-of-cambridge-new-england",
  },
  {
    uuid: "a0fa3430-c548-012f-1d78-3c075448cc4b",
    slug: "masterpieces-of-negro-eloquence-the-best-speeches-delivered-by-the-negro",
  },
  {
    uuid: "e8581560-50f8-0133-f4ce-00505686a51c",
    slug: "mateo-xxv-30-holograph",
  },
  {
    uuid: "edbc2160-c547-012f-bf2e-3c075448cc4b",
    slug: "maternite",
  },
  {
    uuid: "76bf78e0-f015-0131-4b73-58d385a7b928",
    slug: "mauretania-numidia-gaetulia-etc",
  },
  {
    uuid: "edc1ea40-c54b-012f-490f-3c075448cc4b",
    slug: "maurices-art-of-dancing-an-autobiographical-sketch-with-complete-descriptions",
  },
  {
    uuid: "4c8fab20-ee88-0131-a5b0-58d385a7b928",
    slug: "mauritania-nuova-tavola",
  },
  {
    uuid: "e9ce6120-0357-0135-44a9-57c9eeb7ab19",
    slug: "medicine-and-commerce-two-books-in-one-volume",
  },
  {
    uuid: "acd5a3b0-003d-0130-1ab3-58d385a7bc34",
    slug: "memorial-of-napoleon",
  },
  {
    uuid: "09c1a7f0-1567-0134-fe76-00505686a51c",
    slug: "merton-college-freshmen-1914",
  },
  {
    uuid: "27bc7c20-8d51-0132-f4b7-58d385a7b928",
    slug: "methodist-itinerant-system-it-is-here-seen-that-the-methodist-connexion",
  },
  {
    uuid: "5b73d840-d4ef-0133-c18c-00505686a51c",
    slug: "midrash-be-hidush-perush-le-hagadat-pesah",
  },
  {
    uuid: "21e15ca0-47e3-0136-4998-59d8dd70b216",
    slug: "miniature-portrait-of-samuel-s-forman",
  },
  {
    uuid: "b97d5130-113b-0133-3919-58d385a7bbd0",
    slug: "minutes-of-the-committee-of-brookhaven-manor-of-st-george-and-patentship",
  },
  {
    uuid: "9f47d730-c740-0132-a3f5-58d385a7bbd0",
    slug: "miscellany-of-philosophical-works",
  },
  {
    uuid: "a6bdc120-c54a-012f-30f9-3c075448cc4b",
    slug: "missal-box-with-woodcut-of-god-almighty-inside-lid",
  },
  {
    uuid: "ca3547e0-0032-0130-18fb-58d385a7bc34",
    slug: "modern-dances-as-fashion-reformers",
  },
  {
    uuid: "4a9ad810-4228-0138-419f-091b38fbcf5d",
    slug: "molitvnik-o-gospod-boz-pochinaiem-slzhba-sviatogo-oana-zlatousta",
  },
  {
    uuid: "3127d5a0-fc27-0138-1735-0242ac110003",
    slug: "money-and-trade-considered-with-a-proposal-for-supplying-the-nation-with-money",
  },
  {
    uuid: "e7261820-0031-0130-d3dd-58d385a7bc34",
    slug: "monsieur-ma-femme-est-inspiree-depuis-ce-matin",
  },
  {
    uuid: "54e83160-2111-0138-d58f-3139bbabd0b7",
    slug: "more-of-our-best-prize-recipes-from-the-pittsfield-jewish-community",
  },
  {
    uuid: "bfcbed40-2e5b-0133-1416-60f81dd2b63c",
    slug: "mose-among-the-britishers-or-the-bhoy-in-london",
  },
  {
    uuid: "80e5f7c0-0036-0130-7c89-58d385a7bc34",
    slug: "moulin-vent-sur-les-bords-de-lhudson-en-face-new-york-pl-1re",
  },
  {
    uuid: "ec875540-c5ea-012f-fc4c-58d385a7bc34",
    slug: "mount-vernon",
  },
  {
    uuid: "27ab7aa0-c551-012f-9db0-3c075448cc4b",
    slug: "mountainous-landscape-with-a-house",
  },
  {
    uuid: "56a7acd0-f015-0131-ed75-58d385a7b928",
    slug: "mouth-of-the-senegal-river-and-surrounding-areas",
  },
  {
    uuid: "48ac2580-c557-012f-4a01-3c075448cc4b",
    slug: "mower-usa-general-hospital-chestnut-hill-philadelphia",
  },
  {
    uuid: "7290df10-c54c-012f-c3f5-3c075448cc4b",
    slug: "mower-usa-general-hospital-chestnut-hill-philadelphia-2",
  },
  {
    uuid: "769158b0-0036-0130-016a-58d385a7bc34",
    slug: "mr-ira-aldridge-the-celebrated-african-tragedian",
  },
  {
    uuid: "aa42dca0-c54c-012f-26d2-3c075448cc4b",
    slug: "mr-james-gillray",
  },
  {
    uuid: "6e456200-0034-0130-b271-58d385a7bc34",
    slug: "mrs-jordan-in-the-character-of-hypolita",
  },
  {
    uuid: "ee72f460-c545-012f-8a9e-58d385a7bc34",
    slug: "mrs-robinson",
  },
  {
    uuid: "53de0840-0032-0130-f516-58d385a7bc34",
    slug: "mrs-siddons-in-the-character-of-zara",
  },
  {
    uuid: "a374a720-68c1-0135-8199-3943d08d9b6a",
    slug: "music-rhymes",
  },
  {
    uuid: "8cc4c350-5ec5-0131-160a-58d385a7bbd0",
    slug: "music-score-for-fred-niblos-metro-goldwyn-mayer-production-of-ben-hur",
  },
  {
    uuid: "65e8dbf0-0b2d-0130-ce48-58d385a7bbd0",
    slug: "musica-di-xiii-autori-illustri-a-cinque-voci-novamente-per-angelo-gardano",
  },
  {
    uuid: "b670e100-164e-0135-e7b6-3bd251f24796",
    slug: "muze-moskovsko-oblasti-sbornik",
  },
  {
    uuid: "78ecac40-0a4a-0134-0f4a-00505686a51c",
    slug: "muze-novogo-zapadnogo-iskusstva",
  },
  {
    uuid: "b4bf7dd0-003d-0130-9ff4-58d385a7bc34",
    slug: "my-lady-nicotine",
  },
  {
    uuid: "c8cd6a10-c546-012f-4a3b-3c075448cc4b",
    slug: "my-memoirs",
  },
  {
    uuid: "1e03ce60-c619-012f-2708-58d385a7bc34",
    slug: "my-southern-home-or-the-south-and-its-people-2",
  },
  {
    uuid: "8e8f1a20-c605-012f-16fc-58d385a7bc34",
    slug: "mthode-nouvelle-et-raisonne-pour-la-flte",
  },
  {
    uuid: "bee272e0-c603-012f-b53a-58d385a7bc34",
    slug: "mthode-pour-la-flte-considrablement-augmente",
  },
  {
    uuid: "b33397d0-c009-0136-7aeb-5d14e5199b19",
    slug: "nha-directory-and-guide-to-travelers",
  },
  {
    uuid: "737cb000-0e9a-0132-9338-58d385a7bbd0",
    slug: "narcissus-at-the-spring-after-parmigianino",
  },
  {
    uuid: "132e6150-0031-0130-9c21-58d385a7bc34",
    slug: "narrative-of-william-w-brown-an-american-slave-2",
  },
  {
    uuid: "2ce41040-29ae-0133-46f3-60f81dd2b63c",
    slug: "nat-turners-insurrection",
  },
  {
    uuid: "46147f40-003e-0130-403e-58d385a7bc34",
    slug: "natchez-under-the-hill-mississippi",
  },
  {
    uuid: "cdab18b0-ebc0-0138-0018-0242ac110003",
    slug: "native-american-muslin-painting",
  },
  {
    uuid: "68625730-42fb-0134-7a27-00505686a51c",
    slug: "negro-anthology-1931-1933",
  },
  {
    uuid: "7aec2670-f015-0131-535f-58d385a7b928",
    slug: "negroland-and-guinea-with-the-european-settlements-explaining-what-belongs",
  },
  {
    uuid: "4a45d990-fbed-0131-0163-58d385a7bbd0",
    slug: "neighbors-16",
  },
  {
    uuid: "4ba86c60-0036-0130-3767-58d385a7bc34",
    slug: "never-mind-i-will-clean-the-streets",
  },
  {
    uuid: "61184d20-c56b-012f-1534-58d385a7bc34",
    slug: "new-haven-from-east-rock-1853",
  },
  {
    uuid: "6e216210-0762-0131-5fa9-58d385a7bbd0",
    slug: "new-netherland-families-the-first-five-and-some-later-generations-van-dien-van",
  },
  {
    uuid: "59c29500-25c2-0134-0b7d-00505686a51c",
    slug: "new-york-city-mayors-court-trial-minutes",
  },
  {
    uuid: "49f1f2b0-50aa-0133-d0bb-00505686a51c",
    slug: "new-york-court-of-vice-admiralty-records",
  },
  {
    uuid: "a6390540-0031-0130-957e-58d385a7bc34",
    slug: "new-york-crystal-palace-for-the-exhibition-of-the-industry-of-all-nations",
  },
  {
    uuid: "5a365370-0032-0130-aa39-58d385a7bc34",
    slug: "new-york-public-library",
  },
  {
    uuid: "38fd1290-50ad-0133-887f-00505686a51c",
    slug: "new-york-state-comptroller-memorandum-book",
  },
  {
    uuid: "56221660-c557-012f-70ce-3c075448cc4b",
    slug: "new-york-and-coney-island-cycle-march-two-step",
  },
  {
    uuid: "f5d754c0-0031-0130-194d-58d385a7bc34",
    slug: "new-york-taken-from-battery-place",
  },
  {
    uuid: "732b65e0-c54c-012f-ffb8-3c075448cc4b",
    slug: "new-york-und-umgegend",
  },
  {
    uuid: "d6d8ed90-ee87-0131-233a-58d385a7b928",
    slug: "new-map-of-cape-colony-and-adjacent-territories",
  },
  {
    uuid: "a876c7e0-0033-0130-b50c-58d385a7bc34",
    slug: "newburgh-from-fishkill-landing",
  },
  {
    uuid: "cb514a80-0031-0130-737b-58d385a7bc34",
    slug: "niagara-falls-from-the-table-rock",
  },
  {
    uuid: "015f0a80-0034-0130-7520-58d385a7bc34",
    slug: "niagara-falls-part-of-the-american-fall-from-the-foot-of-the-stair-case",
  },
  {
    uuid: "b481f320-0033-0130-6d73-58d385a7bc34",
    slug: "niagara-falls-part-of-the-american-fall-from-the-foot-of-the-stair-case-2",
  },
  {
    uuid: "29a7a150-c54c-012f-8aa7-58d385a7bc34",
    slug: "niagara-falls-part-of-the-british-fall-taken-from-under-the-table-rock",
  },
  {
    uuid: "2d002e50-0036-0130-5d22-58d385a7bc34",
    slug: "niagara-falls-part-of-the-british-fall-taken-from-under-the-table-rock-2",
  },
  {
    uuid: "4daaf390-c556-012f-62d8-58d385a7bc34",
    slug: "niagara-fallsthis-view-of-the-american-fall-taken-from-goat-island",
  },
  {
    uuid: "f290b4c0-c5ea-012f-2e1f-58d385a7bc34",
    slug: "niagara-fallsthis-view-of-the-british-fall-taken-from-goat-island",
  },
  {
    uuid: "c0fb7d50-0032-0130-a463-58d385a7bc34",
    slug: "nicasius-de-sille-schout-sheriff-of-new-amsterdam",
  },
  {
    uuid: "e63e7840-c536-012f-6cf7-58d385a7bc34",
    slug: "nieu-amsterdam-atque-new-york",
  },
  {
    uuid: "a6fffd20-0036-0130-4bf0-58d385a7bc34",
    slug: "noche-de-los-tropicos",
  },
  {
    uuid: "17174680-003e-0130-8bb0-58d385a7bc34",
    slug: "northern-liberties-and-spring-garden-water-works",
  },
  {
    uuid: "4a432080-ee88-0131-9e82-58d385a7b928",
    slug: "northern-and-central-africa",
  },
  {
    uuid: "8542c3b0-c603-012f-757d-58d385a7bc34",
    slug: "nos-douanes-hati",
  },
  {
    uuid: "ab290160-0032-0130-b75d-58d385a7bc34",
    slug: "notes-on-a-constitution-for-france",
  },
  {
    uuid: "b77fe5c0-c602-012f-902a-58d385a7bc34",
    slug: "nouvelles-de-lamerique-ou-le-mercure-ameriquain",
  },
  {
    uuid: "e82c2ac0-e979-012f-341b-58d385a7b928",
    slug: "nuit-des-tropiques-symphonie-pour-grande-orchestre-par-l-m-gottschalk",
  },
  {
    uuid: "827c04d0-2868-0133-330d-60f81dd2b63c",
    slug: "objections-to-the-abolition-of-the-slave-trade-with-answers-to-which",
  },
  {
    uuid: "ccf949f0-0032-0130-13db-58d385a7bc34",
    slug: "observations-of-persons-and-things-in-south-africa-1900-1904-microform",
  },
  {
    uuid: "c8d2e7c0-f8f8-0133-dab5-00505686a51c",
    slug: "observations-on-certain-documents-contained-in-no-v-vi-of-the-history",
  },
  {
    uuid: "7226cc30-01c5-0135-c4b0-3c07547a230f",
    slug: "observations-on-the-inslaving-importing-and-purchasing-of-negroes-with-some",
  },
  {
    uuid: "b593e340-2d18-0139-fdbb-0242ac110003",
    slug: "observations-sur-lorigine-et-les-progrs-du-prjug-des-colons-blancs-contre",
  },
  {
    uuid: "c58162f0-da52-0133-ef97-00505686a51c",
    slug: "oceletepec-santa-maria-council-house-of-santa-maria-toluca",
  },
  {
    uuid: "86c768b0-0034-0130-aa72-58d385a7bc34",
    slug: "official-stationery-of-the-cameron-dragoons-philadelphia",
  },
  {
    uuid: "d4cf38b0-0033-0130-a56b-58d385a7bc34",
    slug: "old-creole-days-by-george-w-cable",
  },
  {
    uuid: "c449b4f0-c546-012f-251f-3c075448cc4b",
    slug: "old-pat",
  },
  {
    uuid: "57cb2860-c607-012f-3695-58d385a7bc34",
    slug: "oliver-cromwell-letter-to-john-cotton",
  },
  {
    uuid: "54200240-b401-0138-e4bc-716d88f09454",
    slug: "oliver-costume-design-for-oliver-twist",
  },
  {
    uuid: "1c8809d0-c5eb-012f-ef47-58d385a7bc34",
    slug: "olympia-typewriter-belonging-to-terry-southern",
  },
  {
    uuid: "41cb0fb0-c603-012f-d67c-58d385a7bc34",
    slug: "on-roach-fishing-and-its-peculiarities",
  },
  {
    uuid: "e01f0b00-c604-012f-c7f9-58d385a7bc34",
    slug: "on-the-way-a-historical-narrative-of-the-two-thirtieth-field-artillery",
  },
  {
    uuid: "c1201680-5e4e-0133-af76-00505686d14e",
    slug: "one-deck-of-cards-shape-cards",
  },
  {
    uuid: "80c92e00-003e-0130-db1a-58d385a7bc34",
    slug: "one-of-the-graces-making-a-man-or-frankenstein-outdone-phillips-fec",
  },
  {
    uuid: "013a8da0-d510-0136-cd6f-60f81dd2b63c",
    slug: "opisaniie-sviashchiennieishago-koronovaniia-ikh-imperatorskikh-velichestv",
  },
  {
    uuid: "b1249d10-1649-0135-83f1-08f8f1e8765f",
    slug: "orfe",
  },
  {
    uuid: "122cdc10-0032-0130-6561-58d385a7bc34",
    slug: "original-cotillion-figures",
  },
  {
    uuid: "7125e370-0036-0130-065c-58d385a7bc34",
    slug: "osceola-of-florida",
  },
  {
    uuid: "b312e7d0-c54c-012f-77c9-3c075448cc4b",
    slug: "osobennaia-poviest-dlia-molodykh-dievushek",
  },
  {
    uuid: "191d26c0-c557-012f-7fe8-3c075448cc4b",
    slug: "our-manpower",
  },
  {
    uuid: "42ad9790-0036-0130-be61-58d385a7bc34",
    slug: "out-of-the-darkness-or-diabolism-and-destiny-microform",
  },
  {
    uuid: "a85ee020-c54a-012f-bedc-3c075448cc4b",
    slug: "outside-of-that-cowboy-book-i-showed-you-there-aint-a-decent-book-in-the-whole",
  },
  {
    uuid: "8a274630-5a6c-0139-f59b-0242ac110003",
    slug: "pages-from-the-diary-of-a-jackass",
  },
  {
    uuid: "15858460-c5eb-012f-ec87-58d385a7bc34",
    slug: "painting-of-george-washington",
  },
  {
    uuid: "233157b0-0032-0130-75ef-58d385a7bc34",
    slug: "panorama-of-broadway-in-new-york-city",
  },
  {
    uuid: "83bf8380-82a9-0134-db06-00505686a51c",
    slug: "panorama-of-buenos-aires-taken-from-the-azotea-of-the-british-legation-395-calle",
  },
  {
    uuid: "db7ba2e0-c6b7-012f-ed1f-58d385a7bc34",
    slug: "panorama-of-san-francisco-taken-from-the-tower-of-the-house-of-mrs-mark-hopkins",
  },
  {
    uuid: "5722fe60-5b93-0131-8261-58d385a7bbd0",
    slug: "panoramic-view-of-manhattan-showing-brooklyn-bridge-under-construction",
  },
  {
    uuid: "42699100-82a7-0134-0f15-00505686a51c",
    slug: "panoramic-view-of-valparaiso",
  },
  {
    uuid: "e4084a50-0033-0130-0ddb-58d385a7bc34",
    slug: "panoramic-views-of-philadelphia-from-the-state-house-east-view-looking-down",
  },
  {
    uuid: "eeb3e180-c5ea-012f-ea85-58d385a7bc34",
    slug: "panoramic-views-of-philadelphia-from-the-state-house-north-view-looking-across",
  },
  {
    uuid: "3cbebe90-1256-0138-a074-60f81dd2b63c",
    slug: "pantomima-poesie",
  },
  {
    uuid: "c9cbb7e0-3778-0132-5762-58d385a7bbd0",
    slug: "paris",
  },
  {
    uuid: "ef75af60-c5ea-012f-ea1a-58d385a7bc34",
    slug: "park-row-stores-opposite-the-astor-house-new-york",
  },
  {
    uuid: "fc842f30-e333-0130-869b-58d385a7b928",
    slug: "part-of-the-original-chorus-of-the-song-marching-through-georgia-in-authors",
  },
  {
    uuid: "6246e850-97a6-0133-18ae-00505686d14e",
    slug: "parthenia-in-violata-or-mayden-musicke-for-the-virginalls-and-bass-viol",
  },
  {
    uuid: "cc42fa40-c5e9-012f-6c38-58d385a7bc34",
    slug: "party-drinking-and-smoking-outdoors",
  },
  {
    uuid: "8ea5e110-5aa6-0139-a224-0242ac110003",
    slug: "passover-seder-service-deutsches-theatre-restaurant-munich-germany-april-15-16",
  },
  {
    uuid: "2b6bee10-003e-0130-294d-58d385a7bc34",
    slug: "paul-reveres-ride-march-galop",
  },
  {
    uuid: "ed88dac0-c5ea-012f-6fa2-58d385a7bc34",
    slug: "pawtucket-bridge-1817",
  },
  {
    uuid: "c3f69bf0-c546-012f-c03f-3c075448cc4b",
    slug: "peasant-seated-with-jug",
  },
  {
    uuid: "13f35dc0-c533-012f-73a6-3c075448cc4b",
    slug: "peasant-seated-with-mug",
  },
  {
    uuid: "50cb13c0-c551-012f-f462-3c075448cc4b",
    slug: "pencil-drawing-of-a-hand-by-queen-victoria",
  },
  {
    uuid: "ec0d51b0-e1af-0134-321c-5115c958cffe",
    slug: "per-le-felicissime-nozze-del-nobile-sigr-conte-gio-battista-fullini-colla-nobile",
  },
  {
    uuid: "859941f0-c607-012f-178e-58d385a7bc34",
    slug: "percy-bysshe-shelley-poet-trading-card",
  },
  {
    uuid: "d862acf0-c604-012f-da01-58d385a7bc34",
    slug: "peregrinacio-del-venturos-pelegri",
  },
  {
    uuid: "2b6d28e0-c569-012f-fc9b-58d385a7bc34",
    slug: "perspective-de-la-ville-neuve-et-du-palais-de-sm-dit-dholland-es-des-environs",
  },
  {
    uuid: "3e01cf30-0031-0130-a7d6-58d385a7bc34",
    slug: "peter-stuyvesant",
  },
  {
    uuid: "82c79ae0-7f25-0132-c54d-58d385a7b928",
    slug: "petition-to-george-iii-king-of-great-britain-1775",
  },
  {
    uuid: "79245ab0-c557-012f-d712-3c075448cc4b",
    slug: "pferd-un-igel",
  },
  {
    uuid: "73bc53f0-0034-0130-55cc-58d385a7bc34",
    slug: "philadelphia-in-1702",
  },
  {
    uuid: "9e3bb640-5e29-0132-2799-58d385a7b928",
    slug: "photograph-of-sean-ocasey-and-george-bernard-shaw",
  },
  {
    uuid: "ef4dcc00-c547-012f-2fc4-3c075448cc4b",
    slug: "photograph-of-t-s-eliot",
  },
  {
    uuid: "4546df40-8607-0131-8355-58d385a7b928",
    slug: "photograph-of-the-air-ship-hindenburg-over-new-york-city",
  },
  {
    uuid: "c8e39e50-68bf-0135-b9ea-5d97f68fe0a8",
    slug: "pickaback-songs",
  },
  {
    uuid: "d6c17610-c65b-0136-bbe0-19ddf099efce",
    slug: "picturesque-scenery-in-north-wales",
  },
  {
    uuid: "c200c340-c5e9-012f-1947-58d385a7bc34",
    slug: "pitfalls-of-the-ballroom",
  },
  {
    uuid: "55fcd790-0034-0130-f034-58d385a7bc34",
    slug: "place-du-geffrard-port-au-prince",
  },
  {
    uuid: "5976c400-f015-0131-7962-58d385a7b928",
    slug: "plan-de-lisle-et-ville-de-quiloa-tir-de-langlois",
  },
  {
    uuid: "12d81690-fe1d-0131-3d4e-58d385a7bbd0",
    slug: "plan-de-la-cte-de-lest-de-madagascar-depuis-la-baye-de-vohemare-jusquau-cap",
  },
  {
    uuid: "82923190-003e-0130-e1de-58d385a7bc34",
    slug: "plan-for-a-rail-way-supension-bridge-across-the-connecticut-below-middletown",
  },
  {
    uuid: "ccc4f600-ba7c-0134-f934-00505686a51c",
    slug: "planting-potatoes-qeroskiku",
  },
  {
    uuid: "36103360-c6e0-012f-79f4-3c075448cc4b",
    slug: "pocahontas-ballet-legend-in-one-act",
  },
  {
    uuid: "56f64e40-c557-012f-9480-3c075448cc4b",
    slug: "poem-for-flute-and-orchestra",
  },
  {
    uuid: "b8b981a0-c557-012f-423d-58d385a7bc34",
    slug: "poems-on-pipes-and-smoking-circa-1875-1877",
  },
  {
    uuid: "d104dfe0-c600-0132-c756-58d385a7bbd0",
    slug: "poems-discourses-and-riddles",
  },
  {
    uuid: "963b7480-0033-0130-65eb-58d385a7bc34",
    slug: "poesas-completas-de-gabriel-de-la-concepcin-valds-plcido",
  },
  {
    uuid: "1b236f20-c5eb-012f-a688-58d385a7bc34",
    slug: "policeman-in-front-of-new-york-public-library",
  },
  {
    uuid: "0973c450-4a9e-0133-6efa-60f81dd2b63c",
    slug: "polish-music-history-compilation-of-television-programs",
  },
  {
    uuid: "16c2eab0-d918-0135-e560-5b4b134e9dd4",
    slug: "polyhymnia",
  },
  {
    uuid: "ccbdcbe0-6ce9-0131-8b90-58d385a7b928",
    slug: "poor-richards-way-to-wealth",
  },
  {
    uuid: "3ad18680-8d1b-0131-72ff-58d385a7b928",
    slug: "portrait-of-anton-von-webern",
  },
  {
    uuid: "9fd4c1c0-0031-0130-d80e-58d385a7bc34",
    slug: "portrait-of-dirck-volkertszoon-coornhert",
  },
  {
    uuid: "27839620-0032-0130-f321-58d385a7bc34",
    slug: "portrait-of-frederic-chopin",
  },
  {
    uuid: "b4e9ba30-0031-0130-9396-58d385a7bc34",
    slug: "portrait-of-richard-james-horatio-gottheil",
  },
  {
    uuid: "779662e0-0036-0130-7e78-58d385a7bc34",
    slug: "portrait-of-woislav-m-petrovitch-second-chief-of-the-slavonic-division",
  },
  {
    uuid: "7b086560-0036-0130-3c6a-58d385a7bc34",
    slug: "portsmouth-in-new-hampshire",
  },
  {
    uuid: "055f7130-0033-0130-207f-58d385a7bc34",
    slug: "pour-lhistoire-27-mars-1883-recueil-de-documents-manuscrits-et-indits",
  },
  {
    uuid: "b38b16f0-e812-0130-be8e-58d385a7b928",
    slug: "pragyanpti",
  },
  {
    uuid: "acb35f50-b3e1-0138-4745-6b7082ae2c33",
    slug: "preliminary-drawing-for-bad-hat-the-fountain-from-madeline-and-the-bad-hat",
  },
  {
    uuid: "c13f3220-f14d-0138-aecd-0242ac110003",
    slug: "premir-grand-concerto-pour-le-piano-forte-op-11",
  },
  {
    uuid: "ce0dd5b0-c5ea-012f-a8b0-58d385a7bc34",
    slug: "preparing-for-market",
  },
  {
    uuid: "863b6930-a960-0136-84a0-5de2d86212ad",
    slug: "princess-rgina-being-the-continuation-of-monsieur-saranti",
  },
  {
    uuid: "13838af0-0035-0130-a344-58d385a7bc34",
    slug: "printing-house-square-new-york",
  },
  {
    uuid: "2df722a0-3e3c-0130-8ab1-58d385a7b928",
    slug: "pro-dva-kvadrata-suprematicheski-skaz-v-6-ti-postrokakh",
  },
  {
    uuid: "fd2b0570-003d-0130-c5ab-58d385a7bc34",
    slug: "proceedings-of-the-national-negro-conference-1909-new-york-may-31-and-june-1",
  },
  {
    uuid: "777def00-c6fa-012f-fcba-3c075448cc4b",
    slug: "procession-of-victuallers-of-philadelphia-on-the-15th-of-march-1821",
  },
  {
    uuid: "ba5de250-c557-012f-900f-58d385a7bc34",
    slug: "promulgation-of-the-city-of-new-amsterdam",
  },
  {
    uuid: "666eecd0-0ad8-0137-52f6-04b13e0d7b75",
    slug: "public-health-organization-in-nigeria",
  },
  {
    uuid: "f4728670-2867-0133-9705-60f81dd2b63c",
    slug: "publicit",
  },
  {
    uuid: "b430d400-0030-0130-a44f-58d385a7bc34",
    slug: "puerto-rico-y-su-historia-investigaciones-crticas",
  },
  {
    uuid: "3a06d300-0032-0130-5aa8-58d385a7bc34",
    slug: "puerto-rico",
  },
  {
    uuid: "a53f5aa0-c554-012f-e428-58d385a7bc34",
    slug: "quadrilles-la-finale",
  },
  {
    uuid: "74b1f630-c6e3-012f-b0bf-3c075448cc4b",
    slug: "quartet-op-6",
  },
  {
    uuid: "1ec12c20-8c40-0135-48a5-2717a69ff9d8",
    slug: "quatre-etudes-pour-le-violon-seul-oeuvre-30",
  },
  {
    uuid: "b4871d20-4e6f-0137-586b-7b3854abfaae",
    slug: "quattro-chiacchiere-colle-ragazze",
  },
  {
    uuid: "2ce5db40-9014-0135-b9ec-25ff2c48e0f1",
    slug: "queens-knight-a-prose-epic",
  },
  {
    uuid: "87800d30-c605-012f-4def-58d385a7bc34",
    slug: "rapport-fait-a-la-convention-nationale-au-nom-de-la-commission-des-vingt-un",
  },
  {
    uuid: "f48d4520-29af-0133-32c9-60f81dd2b63c",
    slug: "recaptured-africans-letter-from-the-secretary-of-the-navy-transmitting",
  },
  {
    uuid: "0a6eaa30-8361-0130-2587-58d385a7bbd0",
    slug: "recherche-sur-les-champignons-agarics-1er-premire-essai",
  },
  {
    uuid: "a196b860-0034-0130-1374-58d385a7bc34",
    slug: "recueil-gnral-des-lois-actes-du-gouvernement-dhati-microform-depuis",
  },
  {
    uuid: "9a29a710-003d-0130-57f8-58d385a7bc34",
    slug: "reflexions-sur-la-traite-et-lesclavage-des-negres-microform-traduit-de-langlais",
  },
  {
    uuid: "0f5cbb00-003e-0130-9258-58d385a7bc34",
    slug: "reigns-supreme",
  },
  {
    uuid: "d1cce590-c604-012f-00b4-58d385a7bc34",
    slug: "relaa-da-entrada-que-fez-o-excellentissimo-e-reverendissimo-senhor-d-fr-antonio",
  },
  {
    uuid: "5b0784e0-c604-012f-fa20-58d385a7bc34",
    slug: "relaa-da-entrada-que-fez-o-excellentissimo-e-reverendissimo-senhor-d-fr-antoni-2",
  },
  {
    uuid: "78d78990-c557-012f-28a3-3c075448cc4b",
    slug: "rellacao-das-pessoas-december-26-1623",
  },
  {
    uuid: "f01c4a30-c5ea-012f-990b-58d385a7bc34",
    slug: "rendezvous-of-distribution-birds-eye-view-of-camp-convalescent-near-alexandria",
  },
  {
    uuid: "83a959f0-0032-0130-d105-58d385a7bc34",
    slug: "ren-goulaine-de-laudonnire-and-american-natives-in-florida",
  },
  {
    uuid: "3ad0f260-50ac-0133-558d-00505686a51c",
    slug: "reports-of-the-board-of-treasury",
  },
  {
    uuid: "5ca0bfe0-f015-0131-e2ad-58d385a7b928",
    slug: "representation-du-cours-ordinaire-des-vents-de-traverse-qui-regnent-le-long",
  },
  {
    uuid: "09c8caf0-c5eb-012f-50f3-58d385a7bc34",
    slug: "representation-la-plus-nouvelle-et-exacte-de-lile-martinique-la-premiere",
  },
  {
    uuid: "12f9c1b0-ee88-0131-7260-58d385a7b928",
    slug: "republic-of-liberia",
  },
  {
    uuid: "2bbc9ab0-c54c-012f-4510-3c075448cc4b",
    slug: "repulsed-but-not-discouraged",
  },
  {
    uuid: "5f20c630-c5f8-0132-fd03-58d385a7b928",
    slug: "responsa-on-the-laws-of-prozbul",
  },
  {
    uuid: "35a41ea0-003e-0130-1a46-58d385a7bc34",
    slug: "retour-de-russie",
  },
  {
    uuid: "09c30410-c625-0134-0644-00505686a51c",
    slug: "reuben-rattle-the-younger-son-holograph-1847-1848",
  },
  {
    uuid: "cefddfd0-c6e4-012f-8f6c-3c075448cc4b",
    slug: "revery-for-violoncello-and-pianoforte",
  },
  {
    uuid: "40468090-2755-0133-be47-58d385a7bbd0",
    slug: "revisionist-history-lesson",
  },
  {
    uuid: "57d85970-d1c3-0133-ef53-00505686a51c",
    slug: "rikka-zu-2",
  },
  {
    uuid: "3def9060-c731-0132-4c0f-58d385a7bbd0",
    slug: "rikud-ha-teyashim-veha-izim",
  },
  {
    uuid: "a0c5ec40-c5eb-012f-7619-58d385a7bc34",
    slug: "rinaldo-and-armida-tasso-jerusalem-delivered",
  },
  {
    uuid: "499254c0-c557-012f-9ccd-3c075448cc4b",
    slug: "rio-janeiro",
  },
  {
    uuid: "a8195ec0-c552-012f-1802-3c075448cc4b",
    slug: "ritual-for-the-order-of-bees-for-boys-and-girls",
  },
  {
    uuid: "25fddfa0-b3e4-0138-934d-0d9a86765bdd",
    slug: "robin-and-his-mother-go-to-nottingham-fair",
  },
  {
    uuid: "3b8102a0-236b-0138-bc19-6723caae4b7c",
    slug: "robinzon-o-lah-mizeriyah",
  },
  {
    uuid: "30788930-c54f-012f-89a4-3c075448cc4b",
    slug: "rochester",
  },
  {
    uuid: "ee6d38c0-c5ea-012f-4f08-58d385a7bc34",
    slug: "rockland-lake-cutting-ice-view-from-the-north-east",
  },
  {
    uuid: "16723ae0-0032-0130-818e-58d385a7bc34",
    slug: "rogers-slide-lake-george-columbian-magazine",
  },
  {
    uuid: "cdbf9df0-c5ea-012f-8a57-58d385a7bc34",
    slug: "roler-skatin-lessuns-rote-by-the-profsr",
  },
  {
    uuid: "bdee7be0-c605-012f-29bd-58d385a7bc34",
    slug: "romeo-and-juliet",
  },
  {
    uuid: "d62f5c60-c605-012f-3761-58d385a7bc34",
    slug: "romeo-and-juliet-2",
  },
  {
    uuid: "04628470-f5dd-0138-5d50-0242ac110003",
    slug: "rondeau-elegant-pour-le-piano-forte-op-16",
  },
  {
    uuid: "e4b8dc70-50f8-0133-757e-00505686a51c",
    slug: "rusia-holograph-ca-1920",
  },
  {
    uuid: "173236a0-351e-0131-87d7-58d385a7bbd0",
    slug: "rminiscences-de-don-juan",
  },
  {
    uuid: "a1ddf290-dfa2-0132-52e3-58d385a7bbd0",
    slug: "rponse-toutes-les-adhsions-de-m-flamarens-ci-devant-vque-de-prigueux-savoir",
  },
  {
    uuid: "30a96c50-0031-0130-fb15-58d385a7bc34",
    slug: "saint-anthonys-nose-view-on-north-river",
  },
  {
    uuid: "54941be0-0032-0130-995a-58d385a7bc34",
    slug: "salome",
  },
  {
    uuid: "5e968590-eac1-0132-0860-58d385a7bbd0",
    slug: "sam-kang-haeng-silto",
  },
  {
    uuid: "4822e1d0-0396-0131-38a6-58d385a7b928",
    slug: "samuel-clemens",
  },
  {
    uuid: "6fffeb70-c54c-012f-ffc8-3c075448cc4b",
    slug: "san-francisco-from-rincon-point",
  },
  {
    uuid: "a90ba290-0033-0130-a20c-58d385a7bc34",
    slug: "san-francisco-in-1849",
  },
  {
    uuid: "f230bfe0-c5ea-012f-b37c-58d385a7bc34",
    slug: "san-francisco-1860",
  },
  {
    uuid: "3c80fab0-c5cf-012f-2715-58d385a7bc34",
    slug: "san-francisco-looking-south-from-north-point",
  },
  {
    uuid: "44ee01b0-003e-0130-72bf-58d385a7bc34",
    slug: "san-francisco",
  },
  {
    uuid: "55332490-0031-0130-e945-58d385a7bc34",
    slug: "santa-cruz-california",
  },
  {
    uuid: "fc526aa0-0034-0130-a2b1-58d385a7bc34",
    slug: "saratoga-schottisch-new-york",
  },
  {
    uuid: "d51ea1a0-a6e4-0135-5bbd-069d2368a31b",
    slug: "sbornik-diplomaticheskikh-dokumentov-kasaiushchikhsia-peregovorov-mezhdu-rosseiu",
  },
  {
    uuid: "4bb7fe20-0033-0130-98d8-58d385a7bc34",
    slug: "science-unveiling-the-beauties-of-nature-to-the-genius-of-america-1814",
  },
  {
    uuid: "dbf82860-c6e0-012f-67c4-3c075448cc4b",
    slug: "scraps-of-african-methodist-episcopal-history-2",
  },
  {
    uuid: "d4e94320-c556-012f-5df5-3c075448cc4b",
    slug: "sculptured-lion-in-front-of-nypl",
  },
  {
    uuid: "f8793c60-c551-012f-840d-3c075448cc4b",
    slug: "sefer-ha-emunot",
  },
  {
    uuid: "606e3550-c6b5-0132-9976-58d385a7b928",
    slug: "sefer-nitsahon",
  },
  {
    uuid: "3f4f3110-7c8e-0131-56a7-58d385a7b928",
    slug: "seimei-shoka-zukan",
  },
  {
    uuid: "626830f0-29af-0133-b5ff-60f81dd2b63c",
    slug: "seizure-of-american-vessels-slave-trade-message-from-the-president-of-the-united",
  },
  {
    uuid: "728e3e20-fd3c-0134-55ec-7d1e3e8997b3",
    slug: "selections-from-browning-authors-proofs",
  },
  {
    uuid: "ad4eef80-12df-0133-a180-58d385a7bbd0",
    slug: "self-portrait",
  },
  {
    uuid: "ed52bf20-75c6-0133-f8ac-00505686d14e",
    slug: "sendas-de-libertad-obra-educative-con-ideas-prcticas-y-cientficas-para-alcanzar",
  },
  {
    uuid: "2e311450-c5b6-012f-9012-58d385a7bc34",
    slug: "sequoia-wellingtonia-the-two-guardsmen",
  },
  {
    uuid: "fe995ac0-cc02-0132-37c0-58d385a7bbd0",
    slug: "serenade",
  },
  {
    uuid: "95c17e90-c6f8-012f-9d0e-58d385a7bc34",
    slug: "sermons-addresses-and-reminiscences-and-important-correspondence-with-a-pictur-2",
  },
  {
    uuid: "e7f1fd60-a7f2-0137-54e9-033db27bb7e9",
    slug: "sextett-fr-2-violinen-2-violen-2-violoncelli",
  },
  {
    uuid: "84f626b0-0031-0130-3418-58d385a7bc34",
    slug: "shaagat-aryeh",
  },
  {
    uuid: "2409aa40-0031-0130-ed89-58d385a7bc34",
    slug: "shakers-near-lebanon",
  },
  {
    uuid: "5591ece0-a9d9-0130-aa00-58d385a7b928",
    slug: "shanghai-tu-bai-ru-men-zong-h-too-bk-zh-mung",
  },
  {
    uuid: "8126cd20-4e62-0132-8f9b-58d385a7b928",
    slug: "shche-ne-vmerla-ukrana-200-patriotychnykh-i-narodnykh-ukranskykh-pisen-na",
  },
  {
    uuid: "d3c6f5d0-c549-012f-beb5-3c075448cc4b",
    slug: "shepherd-sleeping-before-a-large-tree",
  },
  {
    uuid: "4832eb40-c83f-0133-4c16-00505686a51c",
    slug: "shiohi-no-tsuto",
  },
  {
    uuid: "586c3c80-d57a-0136-6642-6b1a273f1c67",
    slug: "shisendo-sanjuroku-shisen",
  },
  {
    uuid: "cddb4550-3148-0132-eb05-3c075448cc4b",
    slug: "signature-interview-with-pearl-bailey",
  },
  {
    uuid: "a56bff10-931b-0130-82d1-58d385a7b928",
    slug: "signor-formica",
  },
  {
    uuid: "17da4470-209b-0139-da7b-0242ac110003",
    slug: "silas-dickinsons-book",
  },
  {
    uuid: "8020e970-c551-012f-d8a4-3c075448cc4b",
    slug: "silver-lake-near-caatskill-mountain-house",
  },
  {
    uuid: "1423b3a0-351e-0131-2bee-58d385a7bbd0",
    slug: "sinfonia-dabey-noch-fr-2-clarini",
  },
  {
    uuid: "fedca3d0-c605-012f-6046-58d385a7bc34",
    slug: "sinfonie-a-due-violini-e-basso",
  },
  {
    uuid: "0d796c90-bf59-0131-8266-58d385a7b928",
    slug: "sir-thomas-west-2nd-lord-de-la-warr",
  },
  {
    uuid: "3fdea9b0-c6e3-012f-e307-3c075448cc4b",
    slug: "sitio-de-zaragoza-sketches",
  },
  {
    uuid: "e5c2c540-c6e3-012f-4b65-3c075448cc4b",
    slug: "six-songs-for-the-harpsichord-or-piano-forte",
  },
  {
    uuid: "cff0bdb0-d434-012f-fdaa-58d385a7bbd0",
    slug: "siyar-i-nab",
  },
  {
    uuid: "19db4f00-351e-0131-8519-58d385a7bbd0",
    slug: "sketch-for-die-vorstellung-des-chaos",
  },
  {
    uuid: "84260e30-003e-0130-59a7-58d385a7bc34",
    slug: "sketch-of-center-tablet-of-san-francisco",
  },
  {
    uuid: "665bb030-2e5b-0133-a938-60f81dd2b63c",
    slug: "sketchbook-containing-views-recording-a-tour-in-switzerland-and-france",
  },
  {
    uuid: "0af0ea60-1d8c-0139-dd02-0242ac110003",
    slug: "sketchbook",
  },
  {
    uuid: "15af8da0-b609-0136-512a-7f223aff6ad5",
    slug: "sketchbook-2",
  },
  {
    uuid: "0c68cf90-351e-0131-0444-58d385a7bbd0",
    slug: "sketches-for-the-archduke-trio-op-97-scherzo-and-andante-cantabile",
  },
  {
    uuid: "f0696b70-ceb0-0133-4d24-00505686a51c",
    slug: "sketches-for-the-prelude-and-act-one-of-tristan-und-isolde",
  },
  {
    uuid: "4c68a6b0-29af-0133-7915-60f81dd2b63c",
    slug: "slave-trade-sierra-leone-return-to-an-address-to-his-majesty-dated-7-march-1832",
  },
  {
    uuid: "e20bf5b0-c01a-0136-7fe0-000bde94fce8",
    slug: "smiths-tourist-guide-of-necessary-information-for-businessman-tourist-traveler",
  },
  {
    uuid: "f1a96130-de30-0137-3c7c-6bbe1fc8eb39",
    slug: "sobranie-pamiatnikov-tserkovny-stariny",
  },
  {
    uuid: "651dcf40-0036-0130-235e-58d385a7bc34",
    slug: "soldier-and-his-wife",
  },
  {
    uuid: "d5835b80-f7a5-0130-ca93-58d385a7bbd0",
    slug: "sonata-for-viola-and-piano",
  },
  {
    uuid: "10430740-351e-0131-b509-58d385a7bbd0",
    slug: "sonata",
  },
  {
    uuid: "7a30b4e0-01db-0131-7d17-58d385a7bbd0",
    slug: "sonata-2",
  },
  {
    uuid: "737bbdf0-c602-012f-ca31-58d385a7bc34",
    slug: "sonates-deux-violonchelles-op-1-4",
  },
  {
    uuid: "fc69c030-68be-0135-d3a9-0830ce8541fe",
    slug: "songs-and-pictures-a-childs-book",
  },
  {
    uuid: "6e49b390-134a-0131-e2c4-58d385a7bbd0",
    slug: "songs-of-innocence-2",
  },
  {
    uuid: "035ee450-68c2-0135-1eda-2dabf2b41b12",
    slug: "songs-of-health-and-joy",
  },
  {
    uuid: "d04d99f0-8e53-0134-84bb-00505686a51c",
    slug: "songs-unto-the-violl-and-lute",
  },
  {
    uuid: "332aba00-29ae-0133-36a3-60f81dd2b63c",
    slug: "sonia-delaunay-ses-peintures-ses-objets-ses-tissus-simultans-ses-modes",
  },
  {
    uuid: "e5bbcaa0-0030-0130-d07f-58d385a7bc34",
    slug: "south-boston-1859",
  },
  {
    uuid: "edcb1a10-c5ea-012f-12ae-58d385a7bc34",
    slug: "south-east-view-of-the-pennsylvania-hospital",
  },
  {
    uuid: "f1fb7fb0-55e3-0135-a1a8-3515c1be6c64",
    slug: "souvenir-album-scenes-of-the-play-ben-hur",
  },
  {
    uuid: "2a8aeb90-b57e-0137-554f-0833636fe4b4",
    slug: "souvenir-dandalousie-bolero-pour-le-piano-forte-op-19",
  },
  {
    uuid: "383d7170-7ac8-0130-ff64-58d385a7bbd0",
    slug: "specifications-for-power-stations-equipments-apparatus-plans-etc",
  },
  {
    uuid: "aca306a0-c54c-012f-799d-3c075448cc4b",
    slug: "specimen-sheet",
  },
  {
    uuid: "d0e91af0-b011-0139-2214-0242ac110002",
    slug: "speculum-diuersarum-imaginum-speculatiuarum",
  },
  {
    uuid: "d42a2020-c607-012f-b006-58d385a7bc34",
    slug: "speeches-and-letters-2",
  },
  {
    uuid: "e4c179a0-2865-0133-fdf1-60f81dd2b63c",
    slug: "speeches-in-parliament-respecting-the-abolition-of-the-african-slave-trade",
  },
  {
    uuid: "f0bda3d0-1260-0138-638d-60f81dd2b63c",
    slug: "spiritual-milk-for-boston-babes-in-either-england",
  },
  {
    uuid: "87782a20-2e5b-0133-16ac-60f81dd2b63c",
    slug: "spring-and-all",
  },
  {
    uuid: "82e21100-fbec-0131-edea-58d385a7bbd0",
    slug: "squares-hong-kong-ii",
  },
  {
    uuid: "6a1bc460-c6fa-012f-c875-3c075448cc4b",
    slug: "st-louis-missouri-in-1832",
  },
  {
    uuid: "cc3fe9e0-0031-0130-b44c-58d385a7bc34",
    slug: "st-margaret-of-hungary",
  },
  {
    uuid: "4a1cb330-0031-0130-5ffb-58d385a7bc34",
    slug: "st-pauls-german-lutheran-church-n-east-corner-of-brown-and-st-john-sts-phila",
  },
  {
    uuid: "660c1ed0-e599-0130-3585-58d385a7b928",
    slug: "stage-coach-reel-i-march-of-the-outcasts",
  },
  {
    uuid: "98c0acf0-fe23-0131-9fc7-58d385a7b928",
    slug: "stannard-and-sons-perspective-view-of-the-seat-of-war-in-south-africa",
  },
  {
    uuid: "1024c020-0031-0130-6081-58d385a7bc34",
    slug: "stanza-della-segnatura",
  },
  {
    uuid: "f0ca1fa0-c5ea-012f-0c78-58d385a7bc34",
    slug: "storm-in-the-rocky-mountains",
  },
  {
    uuid: "2e9f8850-c5eb-012f-2cfe-58d385a7bc34",
    slug: "strange-true-stories-of-louisiana",
  },
  {
    uuid: "36e10770-29af-0133-cea8-60f81dd2b63c",
    slug: "substance-of-the-speech-of-the-right-honourable-lord-grenville-in-the-house",
  },
  {
    uuid: "54ce20e0-f015-0131-3c4d-58d385a7b928",
    slug: "suite-de-la-coste-de-guine-depuis-le-cap-de-palme-jusquau-cap-des-trois-pointes",
  },
  {
    uuid: "073847d0-003e-0130-d330-58d385a7bc34",
    slug: "summit-of-mount-washington-new-hampshire-6380-feet-above-the-level-of-the-sea",
  },
  {
    uuid: "d6517960-0030-0130-fb87-58d385a7bc34",
    slug: "sunny-side-the-residence-of-the-late-washington-irving-near-tarrytown-ny",
  },
  {
    uuid: "4003fc70-d57c-0136-8a7b-02f73f20971c",
    slug: "suonate-a-tre-due-violini-e-violone-col-basso-perl-organo-opera-prima",
  },
  {
    uuid: "f2e49480-dbcb-0137-60d5-0fa846ece37f",
    slug: "syllabic-system-of-orthography-invented-by-the-revd-jas-evans-adapted",
  },
  {
    uuid: "6de56270-c605-012f-fa76-58d385a7bc34",
    slug: "syllabvs-errorum-et-contradictionvm-i-lipsii-quae-in-polit",
  },
  {
    uuid: "ab99c130-c6b5-012f-205f-58d385a7bc34",
    slug: "symphonie-no-5",
  },
  {
    uuid: "622c6d00-f015-0131-d656-58d385a7b928",
    slug: "tabula-africae-iii",
  },
  {
    uuid: "f9c63e40-1325-0131-64c7-58d385a7bbd0",
    slug: "taccuinum-sanitatis",
  },
  {
    uuid: "98deb930-c554-012f-c169-3c075448cc4b",
    slug: "tarikh-el-fettach-ou-chronique-du-chercheur-microform-pour-servir-lhistoire",
  },
  {
    uuid: "0a9599b0-86a7-0131-34ff-58d385a7bbd0",
    slug: "that-liberty-shall-not-perish-from-the-earth-buy-liberty-bonds-fourth-liberty",
  },
  {
    uuid: "e8846060-29af-0133-606f-60f81dd2b63c",
    slug: "the-african-squadron-ashburton-treaty-consular-sea-letters",
  },
  {
    uuid: "b2442680-2e5b-0133-7aa7-60f81dd2b63c",
    slug: "the-african-squadron-and-mr-hutts-committee",
  },
  {
    uuid: "7be80330-2e5b-0133-ee6b-60f81dd2b63c",
    slug: "the-african-squadron-vindicated",
  },
  {
    uuid: "4f59fb70-c551-012f-eb43-3c075448cc4b",
    slug: "the-alchemist",
  },
  {
    uuid: "7c7e32c0-2eae-0135-084d-0d447bdf4468",
    slug: "the-american-republican-songster",
  },
  {
    uuid: "aa38e0d0-9096-0133-8b9d-60f81dd2b63c",
    slug: "the-american-spelling-book-ontaining-an-easy-standard-of-pronunciation-being",
  },
  {
    uuid: "58a665d0-003e-0130-71a7-58d385a7bc34",
    slug: "the-arcade-providence-ri",
  },
  {
    uuid: "57c8fa80-e22b-0132-1cec-58d385a7bbd0",
    slug: "the-arrivall-and-intertainements-of-the-embassador-alkaid-jaurar-ben-abdella",
  },
  {
    uuid: "a6ce5ee0-1349-0131-babd-58d385a7bbd0",
    slug: "the-book-of-thel",
  },
  {
    uuid: "823751a0-9333-0130-02b6-58d385a7bbd0",
    slug: "the-bride-of-the-gods-an-ancient-hindu-legend-in-one-act-and-three-scenes",
  },
  {
    uuid: "df070d70-7bdc-0137-bc47-3d6eaa522937",
    slug: "the-bubblers-medley-or-a-sketch-of-the-times-being-europes-memorial-for-the-year",
  },
  {
    uuid: "336fa820-0031-0130-f47d-58d385a7bc34",
    slug: "the-castle-walk",
  },
  {
    uuid: "2a8dcff0-286b-0133-6ca9-60f81dd2b63c",
    slug: "the-chevalier-de-saint-george-and-negro-music-at-birth",
  },
  {
    uuid: "3c875a00-0034-0130-ad6f-58d385a7bc34",
    slug: "the-creoles-of-louisiana-by-george-w-cable",
  },
  {
    uuid: "38789930-ee88-0131-fa55-58d385a7b928",
    slug: "the-distribution-of-indian-tribes-in-the-southeast-about-the-year-1715-redrawn",
  },
  {
    uuid: "5dc59020-0034-0130-ce82-58d385a7bc34",
    slug: "the-dunbar-speaker-and-entertainer-containing-the-best-prose-and-poetic",
  },
  {
    uuid: "04853020-c603-012f-d0ac-58d385a7bc34",
    slug: "the-fall-of-usher-a-dramatic-opera-in-one-act-of-three-scenes",
  },
  {
    uuid: "e3b1a300-0033-0130-763f-58d385a7bc34",
    slug: "the-falls-of-niagara",
  },
  {
    uuid: "3d2b0bf0-c557-012f-e89a-3c075448cc4b",
    slug: "the-ferry-house-the-cortlandt-street-ferry-from-the-jersey-city-side",
  },
  {
    uuid: "742fc6a0-c54c-012f-ebc7-3c075448cc4b",
    slug: "the-fruits-of-arbitrary-power-or-the-bloody-massacre",
  },
  {
    uuid: "a8bc0e30-ee87-0131-2191-58d385a7b928",
    slug: "the-graphic-map-of-european-possessions-in-africa",
  },
  {
    uuid: "4d1ff1f0-f962-0131-7bf3-58d385a7b928",
    slug: "the-graphic-map-of-south-central-africa-shewing-the-british-german-possessions",
  },
  {
    uuid: "3dba6700-c557-012f-adb2-3c075448cc4b",
    slug: "the-greek-influence-upon-the-stage",
  },
  {
    uuid: "7a153bd0-2eae-0135-da82-11d476a9e975",
    slug: "the-harrison-medal-minstrel-comprising-a-collection-of-the-most-popular",
  },
  {
    uuid: "82341270-2eae-0135-ce4d-3bffffc9bc30",
    slug: "the-horace-greeley-campaign-songster",
  },
  {
    uuid: "4d973ae0-c557-012f-29c6-3c075448cc4b",
    slug: "the-hudson-from-west-point-grounds-of-the-us-military-academy",
  },
  {
    uuid: "ec01e380-15e5-0138-2b66-539ccaf5d8d8",
    slug: "the-independent-republic-of-liberia-its-constitution-and-declaration",
  },
  {
    uuid: "858fb540-003e-0130-9511-58d385a7bc34",
    slug: "the-indian-family",
  },
  {
    uuid: "79512770-156b-0134-53e9-00505686a51c",
    slug: "the-jack-knife",
  },
  {
    uuid: "298df770-7465-0134-1ce8-00505686a51c",
    slug: "the-jubilee-songs-chorusses-c-in-the-musical-afterpiece-called-garricks-jubilee",
  },
  {
    uuid: "a736bd00-c557-012f-69ab-3c075448cc4b",
    slug: "the-monkey-and-the-dolphin",
  },
  {
    uuid: "e35a96c0-0033-0130-6624-58d385a7bc34",
    slug: "the-nativity",
  },
  {
    uuid: "9cb4a0c0-c5eb-012f-2803-58d385a7bc34",
    slug: "the-negro-in-ancient-history",
  },
  {
    uuid: "a7d2fa00-a4de-0137-7a47-02da17e30159",
    slug: "the-negro-in-business-2",
  },
  {
    uuid: "8fdddcb0-0040-0130-ac67-58d385a7bc34",
    slug: "the-negro-in-medicine",
  },
  {
    uuid: "d4983c20-c549-012f-dad1-3c075448cc4b",
    slug: "the-negro-in-the-american-rebellion-microform-his-heroism-and-his-fidelity",
  },
  {
    uuid: "4c03dc20-c5ea-012f-c8d5-58d385a7bc34",
    slug: "the-negro-question-by-george-w-cable",
  },
  {
    uuid: "8f8e85c0-0036-0130-7ef4-58d385a7bc34",
    slug: "the-new-york-public-library-and-fifth-avenue",
  },
  {
    uuid: "9bc52450-0034-0130-abda-58d385a7bc34",
    slug: "the-new-york-public-library",
  },
  {
    uuid: "3443d7b0-003e-0130-6523-58d385a7bc34",
    slug: "the-palais-royal-gallerys-walk",
  },
  {
    uuid: "4b7d5b40-c551-012f-f267-3c075448cc4b",
    slug: "the-passing-storm",
  },
  {
    uuid: "69c9ac40-0032-0130-daf1-58d385a7bc34",
    slug: "the-quack",
  },
  {
    uuid: "5d9fcab0-c548-012f-2f58-58d385a7bc34",
    slug: "the-sorceress",
  },
  {
    uuid: "8ef03a30-c607-012f-ad6d-58d385a7bc34",
    slug: "the-star-spangled-banner-a-pariotic-sic-song",
  },
  {
    uuid: "7e7dcd80-0033-0130-4cff-58d385a7bc34",
    slug: "the-state-house-in-philadelphia-1776",
  },
  {
    uuid: "079b79c0-003e-0130-4211-58d385a7bc34",
    slug: "the-summit-of-mt-washington",
  },
  {
    uuid: "949211f0-0036-0130-2e71-58d385a7bc34",
    slug: "the-the-black-man-his-antecedents-his-genius-and-his-achievements",
  },
  {
    uuid: "3ed88e10-0036-0130-aec9-58d385a7bc34",
    slug: "the-tile-club-and-the-milliner-of-bridgehampton",
  },
  {
    uuid: "3e5556a0-868f-0139-0006-0242ac110003",
    slug: "the-twenty-fourth-united-states-naval-construction-battalion",
  },
  {
    uuid: "7f968690-0036-0130-5264-58d385a7bc34",
    slug: "the-upper-ferry-bridge-over-the-river-schuylkill-near-morris-street",
  },
  {
    uuid: "c7ee9260-c464-0133-1dd7-00505686a51c",
    slug: "the-vvhole-booke-of-psalmes",
  },
  {
    uuid: "b11de2c0-01c7-0135-bd07-3c07547a230f",
    slug: "the-westmoreland-manuscript-of-the-poems-of-john-donne",
  },
  {
    uuid: "e833f280-c605-012f-0a07-58d385a7bc34",
    slug: "the-whiteleys-of-northwest-arkansas",
  },
  {
    uuid: "b7259760-b40c-0130-88d2-58d385a7b928",
    slug: "the-world-war-ii-diary-of-konstantin-f-herrmann",
  },
  {
    uuid: "4ab74be0-ff56-0138-225e-0242ac110003",
    slug: "the-yankee-tar-an-authentic-narrative-of-the-voyages-and-hardships-of-john-hoxse",
  },
  {
    uuid: "4e892ab0-c557-012f-67bd-3c075448cc4b",
    slug: "the-yo-hamite-falls-this-magnificent-scene-is-situated-in-the-yo-hamite-valley",
  },
  {
    uuid: "dc6003f0-29af-0133-5089-60f81dd2b63c",
    slug: "the-act-of-incorporation-and-constitution-of-the-new-york-society-for-promoting",
  },
  {
    uuid: "ada5ee10-0920-0132-b21f-58d385a7b928",
    slug: "the-anacreontic-song-sung-by-mr-incledon-with-great-applause",
  },
  {
    uuid: "e9e00ae0-c5e9-012f-2172-58d385a7bc34",
    slug: "the-annunciation",
  },
  {
    uuid: "645a9e40-54fe-0139-4850-0242ac110003",
    slug: "the-assiento-or-contract-for-allowing-for-the-subjects-of-great-britain",
  },
  {
    uuid: "c3390c20-68be-0135-a8ab-21abe27e6fd6",
    slug: "the-babys-opera-a-book-of-old-rhymes-with-new-dresses",
  },
  {
    uuid: "3bd2dc10-0034-0130-a4a6-58d385a7bc34",
    slug: "the-ballance-of-power",
  },
  {
    uuid: "ee6f0c70-0031-0130-6bda-58d385a7bc34",
    slug: "the-black-crook-an-original-magical-and-spectacular-drama-in-four-acts",
  },
  {
    uuid: "d5be6890-c556-012f-5aed-3c075448cc4b",
    slug: "the-blind-fiddler",
  },
  {
    uuid: "0b84c720-c543-012f-6961-58d385a7bc34",
    slug: "the-brutal-assassination-of-the-emperor-maximillian",
  },
  {
    uuid: "33efa370-003e-0130-66a1-58d385a7bc34",
    slug: "the-building-of-the-brooklyn-art-association",
  },
  {
    uuid: "b998c390-0032-0130-41ef-58d385a7bc34",
    slug: "the-burning-of-rome-descriptive-march-and-two-step",
  },
  {
    uuid: "1aaee030-50e9-0134-1ecb-00505686a51c",
    slug: "the-cabinet-dictionary-containing-an-explanation-of-all-the-terms-used",
  },
  {
    uuid: "58ba5a00-c557-012f-4da0-3c075448cc4b",
    slug: "the-carnival-king-march-two-step",
  },
  {
    uuid: "23a25430-0034-0130-62a8-58d385a7bc34",
    slug: "the-case-of-many-hundreds-of-poor-english-captives-in-algier-together-with-some",
  },
  {
    uuid: "93bab480-01c4-0135-d943-3c07547a230f",
    slug: "the-case-of-our-fellow-creatures-the-oppressed-africans-respectfully-recommended",
  },
  {
    uuid: "702c4b20-762b-0131-9198-58d385a7b928",
    slug: "the-celestial-railroad",
  },
  {
    uuid: "a2c95cf0-59d5-0139-890c-0242ac110003",
    slug: "the-chimera-or-the-french-way-of-paying-national-debts-laid-open-being",
  },
  {
    uuid: "4f1efc20-0033-0130-8393-58d385a7bc34",
    slug: "the-city-of-st-louis",
  },
  {
    uuid: "f4bf9820-0031-0130-4ab6-58d385a7bc34",
    slug: "the-conflagration-of-the-masonic-hall-chestnut-street-philadelphia",
  },
  {
    uuid: "fe21aab0-29af-0133-bf10-60f81dd2b63c",
    slug: "the-constitution-of-the-new-jersey-society-for-promoting-the-abolition",
  },
  {
    uuid: "4cfa6b70-c551-012f-e25c-3c075448cc4b",
    slug: "the-dance-in-the-country",
  },
  {
    uuid: "eaeeecc0-205a-0139-bc96-0242ac110003",
    slug: "the-dance-score-a-project-for-dance-notation",
  },
  {
    uuid: "3a917470-0031-0130-d1b9-58d385a7bc34",
    slug: "the-dandy-slave-a-scene-in-baltimore-maryland",
  },
  {
    uuid: "7c3c37e0-c551-012f-8e88-3c075448cc4b",
    slug: "the-decision-of-the-legislature-on-the-petition-of-henry-avery-benjamin-birdsall",
  },
  {
    uuid: "9a4bf930-c604-012f-10db-58d385a7bc34",
    slug: "the-decorative-work-of-alfred-stevens-being-a-paper-read-before-the-institute",
  },
  {
    uuid: "8caee5b0-c552-012f-1116-3c075448cc4b",
    slug: "the-drawbridge-second-state",
  },
  {
    uuid: "6bed2eb0-003e-0130-0f46-58d385a7bc34",
    slug: "the-effects-of-wine",
  },
  {
    uuid: "ee7cedc0-286a-0133-34f6-60f81dd2b63c",
    slug: "the-exhibits-of-the-slavonic-division-archival-materials",
  },
  {
    uuid: "12fb8c20-0036-0130-9fb7-58d385a7bc34",
    slug: "the-fascinating-boston-how-to-dance-and-how-to-teach-the-popular-new-social",
  },
  {
    uuid: "157e1900-0036-0130-91a2-58d385a7bc34",
    slug: "the-federal-overture-as-performed-at-the-theatres-in-philadelphia-and-new-york",
  },
  {
    uuid: "08d63830-c553-012f-1290-58d385a7bc34",
    slug: "the-first-colored-baptist-church-in-north-america-constituted-at-savannah-2",
  },
  {
    uuid: "d48abd50-c556-012f-60b8-3c075448cc4b",
    slug: "the-fish",
  },
  {
    uuid: "1dae84d0-9170-0133-d6c2-60f81dd2b63c",
    slug: "the-foreign-slave-trade-the-source-of-political-power-of-material-progress",
  },
  {
    uuid: "c47d1180-003d-0130-f56d-58d385a7bc34",
    slug: "the-forged-note-a-romance-of-the-darker-races",
  },
  {
    uuid: "25f8fb70-0034-0130-05b5-58d385a7bc34",
    slug: "the-future-of-africa-being-addresses-sermons-etc-etc-delivered-in-the-republic",
  },
  {
    uuid: "8a8dfaa0-0d02-0131-36ac-58d385a7b928",
    slug: "the-ghals-of-boston-or-pen-and-pencil-sketches-of-celebrated-courtezans-by-one",
  },
  {
    uuid: "2ed37610-c54c-012f-222e-3c075448cc4b",
    slug: "the-golden-trade",
  },
  {
    uuid: "9b2d97a0-0032-0130-e12f-58d385a7bc34",
    slug: "the-grand-display-of-fireworks-and-illuminations-at-the-opening-of-the-great",
  },
  {
    uuid: "76b4a620-c54c-012f-c36a-3c075448cc4b",
    slug: "the-great-bartholdi-statue-liberty-enlightening-the-world",
  },
  {
    uuid: "0c2a7040-c552-012f-877b-3c075448cc4b",
    slug: "the-great-east-river-suspension-bridge-connecting-the-cities-of-new-york",
  },
  {
    uuid: "caa90ec0-31d6-0136-5170-57c36f88a6be",
    slug: "the-great-war-map-of-battle-line-in-france-and-belgium",
  },
  {
    uuid: "78c05210-0034-0130-b545-58d385a7bc34",
    slug: "the-greatness-of-christ-and-other-sermons-by-alex-crummell",
  },
  {
    uuid: "3dd8c250-003e-0130-5147-58d385a7bc34",
    slug: "the-heart-of-happy-hollow",
  },
  {
    uuid: "f4731470-003d-0130-c206-58d385a7bc34",
    slug: "the-history-of-the-british-plantations-in-america",
  },
  {
    uuid: "8b0bf640-29ae-0133-a0cb-60f81dd2b63c",
    slug: "the-history-of-the-new-york-african-free-schools-from-their-establishment",
  },
  {
    uuid: "8b0626d0-0031-0130-f91c-58d385a7bc34",
    slug: "the-house-behind-the-cedars-microform",
  },
  {
    uuid: "7ed9d1c0-29af-0133-f900-60f81dd2b63c",
    slug: "the-injustice-and-impolicy-of-the-slave-trade-and-of-the-slavery-of-the-africa-2",
  },
  {
    uuid: "aa49cb60-29af-0133-d000-60f81dd2b63c",
    slug: "the-interest-in-slavery-of-the-southern-non-slave-holder-the-right-of-peaceful",
  },
  {
    uuid: "aa717780-c552-012f-dde9-3c075448cc4b",
    slug: "the-interesting-narrative-of-the-life-of-olaudah-equiano-or-gustavus-vassa-2-3",
  },
  {
    uuid: "bd44a1d0-0033-0130-a04a-58d385a7bc34",
    slug: "international-primary-and-business-chart-the-object-and-word-method",
  },
  {
    uuid: "5674d980-c545-012f-a5d2-3c075448cc4b",
    slug: "the-jig-st-patricks-day",
  },
  {
    uuid: "671b36a0-0036-0130-5fad-58d385a7bc34",
    slug: "the-landing-of-the-british-forces-in-the-jerseys-on-the-20th-of-november-1776",
  },
  {
    uuid: "67e1ce10-63c1-0133-b8d3-00505686d14e",
    slug: "the-languages-and-races-of-dardistan",
  },
  {
    uuid: "9cbeaab0-0034-0130-41be-58d385a7bc34",
    slug: "the-life-of-a-fireman-the-new-era-steam-and-muscle",
  },
  {
    uuid: "0d027d00-c543-012f-aff2-58d385a7bc34",
    slug: "the-life-of-a-fireman-the-metropolitan-system",
  },
  {
    uuid: "b6bfc9b0-0034-0130-800f-58d385a7bc34",
    slug: "the-literary-collector-cover",
  },
  {
    uuid: "90f58dc0-c6e2-012f-8938-3c075448cc4b",
    slug: "the-little-book-of-louis-moreau-gottschalk-seven-previously-unpublished-piano",
  },
  {
    uuid: "815cbfb0-c605-012f-8189-58d385a7bc34",
    slug: "the-log-of-hms-phaeton-1900-1903",
  },
  {
    uuid: "54121020-eac7-0132-4ef7-58d385a7b928",
    slug: "the-love-and-care-of-children",
  },
  {
    uuid: "4e10bc70-c557-012f-7d36-3c075448cc4b",
    slug: "the-mammoth-tree-grove-calaveras-county-california",
  },
  {
    uuid: "e7f0e190-674d-0136-fc6c-45116077671a",
    slug: "the-man-eaters-of-tsavo-and-other-east-african-adventures",
  },
  {
    uuid: "56126dd0-0036-0130-4d82-58d385a7bc34",
    slug: "the-mansion-of-gen-stryker",
  },
  {
    uuid: "f730db30-c552-012f-b1fb-58d385a7bc34",
    slug: "the-massacre-of-the-innocents",
  },
  {
    uuid: "68875460-c552-012f-1965-58d385a7bc34",
    slug: "the-midnight-flyer-march-two-step",
  },
  {
    uuid: "7722b600-0031-0130-72d0-58d385a7bc34",
    slug: "the-modern-dance-a-fearless-discussion-of-a-social-menace",
  },
  {
    uuid: "2fbd54c0-c5b6-012f-a51b-58d385a7bc34",
    slug: "the-new-tribune-building",
  },
  {
    uuid: "5ae5bc80-003e-0130-dcba-58d385a7bc34",
    slug: "the-new-tribune-building-2",
  },
  {
    uuid: "d63e3bb0-627f-0130-8f0d-58d385a7b928",
    slug: "the-new-game-of-emulation",
  },
  {
    uuid: "74b5cde0-c54c-012f-11c0-3c075448cc4b",
    slug: "the-old-post-office-new-york",
  },
  {
    uuid: "501e9970-c552-012f-75dc-58d385a7bc34",
    slug: "the-passions",
  },
  {
    uuid: "950a9e70-2cda-0134-ee24-00505686a51c",
    slug: "the-pleasant-comedie-of-old-fortunatus",
  },
  {
    uuid: "f2dee2a0-0030-0130-06ca-58d385a7bc34",
    slug: "the-pleasure-dome-of-kubla-khan-symphonic-poem-for-grand-orchestra",
  },
  {
    uuid: "1143c840-0032-0130-2066-58d385a7bc34",
    slug: "the-pleasures-of-a-married-state",
  },
  {
    uuid: "14f05970-c554-012f-537d-3c075448cc4b",
    slug: "the-poetry-by-mrs-robinson-no-1-is-it-in-mansions-rich-and-gay-that-nature-owns",
  },
  {
    uuid: "58761430-87f0-0133-dff8-00505686a51c",
    slug: "the-printers-handy-book-of-specimens-exhibiting-the-choicest-productions",
  },
  {
    uuid: "30003330-c54f-012f-c08d-3c075448cc4b",
    slug: "the-rail-road-suspension-bridge-near-niagara-falls",
  },
  {
    uuid: "c94b7570-0032-0130-b326-58d385a7bc34",
    slug: "the-reading-room-of-the-carl-h-pforzheimer-collection-of-shelley-and-his-circle",
  },
  {
    uuid: "ce4c07e0-c5ea-012f-2acb-58d385a7bc34",
    slug: "the-relation-of-the-dance-to-religion",
  },
  {
    uuid: "5f0e7290-c545-012f-0c55-3c075448cc4b",
    slug: "the-rising-son-or-the-antecedents-and-advancement-of-the-colored-race",
  },
  {
    uuid: "12a0a2f0-c533-012f-9bdb-3c075448cc4b",
    slug: "the-round-tower",
  },
  {
    uuid: "0c8d9470-286b-0133-dcdc-60f81dd2b63c",
    slug: "the-samples-collection-of-the-new-york-public-library-slavonic-division",
  },
  {
    uuid: "a1779f60-c54b-012f-1e1a-3c075448cc4b",
    slug: "the-silent-counsellor",
  },
  {
    uuid: "e1311f10-003d-0130-001e-58d385a7bc34",
    slug: "the-six-voyages-through-turky-into-persia-and-the-east-indies",
  },
  {
    uuid: "67ec7200-2e5d-0133-63fb-60f81dd2b63c",
    slug: "the-social-harmonist-containing-first-the-necessary-rules-of-music-second",
  },
  {
    uuid: "a19304e0-c552-012f-d30e-3c075448cc4b",
    slug: "the-sorrows-of-yamba-or-the-negro-womans-lamentation",
  },
  {
    uuid: "4e9fc7f0-0031-0130-b8fe-58d385a7bc34",
    slug: "the-south-part-of-virginia-now-the-north-part-of-carolina",
  },
  {
    uuid: "062ec250-5f2a-0139-dc16-0242ac110003",
    slug: "the-speech-of-the-right-honourable-john-aislabie-esq-upon-his-defence-made",
  },
  {
    uuid: "491f8380-c5e6-012f-f002-3c075448cc4b",
    slug: "the-sport-of-the-gods",
  },
  {
    uuid: "686dd710-c604-012f-749e-58d385a7bc34",
    slug: "the-story-of-battery-b-306th-fa-77th-division-sept-211917-to-may-10-1919",
  },
  {
    uuid: "30d15be0-c54f-012f-d258-3c075448cc4b",
    slug: "the-story-of-a-rising-race-microform-the-negro-in-revelation-in-history",
  },
  {
    uuid: "d4230130-c556-012f-5e3a-3c075448cc4b",
    slug: "the-street-spring-blossoms-june-blossoms",
  },
  {
    uuid: "a5b7e890-003d-0130-19ca-58d385a7bc34",
    slug: "the-strength-of-gideon-and-other-stories",
  },
  {
    uuid: "521590b0-0034-0130-9994-58d385a7bc34",
    slug: "the-sudarium-of-st-veronica",
  },
  {
    uuid: "29ae8730-0031-0130-1a65-58d385a7bc34",
    slug: "the-sunflower",
  },
  {
    uuid: "457471d0-0031-0130-4177-58d385a7bc34",
    slug: "the-tomb-of-genl-wh-harrison-north-bend-ohio",
  },
  {
    uuid: "e088efa0-c014-0136-98ef-7b90cc6cd4ed",
    slug: "the-travelers-guide-hotels-apartments-rooms-meals-garage-accommodations-etc",
  },
  {
    uuid: "4da73ec0-c551-012f-295e-3c075448cc4b",
    slug: "the-tribulations-of-st-anthony",
  },
  {
    uuid: "04766950-c543-012f-b176-58d385a7bc34",
    slug: "the-two-suitors",
  },
  {
    uuid: "d6d18ed0-0030-0130-e65a-58d385a7bc34",
    slug: "the-uncalled-a-novel",
  },
  {
    uuid: "834b9360-6a7b-0131-3441-58d385a7b928",
    slug: "the-vindication-of-astrology-c",
  },
  {
    uuid: "b5c57de0-0031-0130-82f4-58d385a7bc34",
    slug: "the-vintage-festival-a-play-pageant-festivities-celebrating-the-vine",
  },
  {
    uuid: "0f1e3e40-0031-0130-d4dc-58d385a7bc34",
    slug: "the-vision-of-ezekiel",
  },
  {
    uuid: "85591100-4969-0135-920c-0338cebc6beb",
    slug: "the-vocal-and-instrumental-musick-of-the-prophetess-or-the-history-of-dioclesian",
  },
  {
    uuid: "ee1e2c00-c5ea-012f-3c90-58d385a7bc34",
    slug: "theological-seminary-betw-20th-21st-sts-9th-10th-aves",
  },
  {
    uuid: "56591360-0036-0130-2bda-58d385a7bc34",
    slug: "this-evening-friday-july-20th-1827-will-be-presented-first-time-this-season",
  },
  {
    uuid: "ef2b8e70-82e8-0132-7182-58d385a7bbd0",
    slug: "thomas-jefferson-account-book-1791-1803",
  },
  {
    uuid: "ec080230-c5e9-012f-8518-58d385a7bc34",
    slug: "thomas-jefferson-autograph-letter-signed-to-colonel-archibald-ritchie-may-8-1781",
  },
  {
    uuid: "684d0ad0-c6b6-012f-b9ae-58d385a7bc34",
    slug: "thou-hast-here-gentle-reader-a-true-hydrographical-description-of-so-much",
  },
  {
    uuid: "33a03eb0-0035-0130-1350-58d385a7bc34",
    slug: "three-years-in-europe-or-places-i-have-seen-and-people-i-have-met",
  },
  {
    uuid: "56217070-6d18-0132-2a71-58d385a7bbd0",
    slug: "thundering-dawn",
  },
  {
    uuid: "46a9eef0-ceb3-0133-7d44-00505686a51c",
    slug: "threse-philosophe-ou-mmoires-pour-servir-lhistoire-du-p-dirrag-de-mademoiselle",
  },
  {
    uuid: "3d088040-5aec-0137-2335-0473721881f5",
    slug: "ticket-for-a-charles-dickens-reading-at-st-martins-hall-london-30-june-1867",
  },
  {
    uuid: "4038ca00-c691-0132-51bb-58d385a7b928",
    slug: "tiklal",
  },
  {
    uuid: "3fb46eb0-68c0-0135-0726-0257a5397ba8",
    slug: "tiny-tunes-for-tiny-people",
  },
  {
    uuid: "936c33e0-cc57-0133-7139-00505686a51c",
    slug: "title-of-executors-administrators-by-the-honbl-tapping-reeve-litchfield",
  },
  {
    uuid: "6e382300-c54c-012f-4263-3c075448cc4b",
    slug: "to-joseph-s-lewis-esquire-this-view-of-fair-mount-works",
  },
  {
    uuid: "6c3dc400-c539-012f-e954-58d385a7bc34",
    slug: "tobacco-acts",
  },
  {
    uuid: "f16f4270-c5ea-012f-7094-58d385a7bc34",
    slug: "todds-valley-placer-county-california",
  },
  {
    uuid: "a4076fc0-c6ef-012f-d8e6-58d385a7bc34",
    slug: "tom-hopkinson",
  },
  {
    uuid: "d3d4d240-a448-0134-de63-00505686a51c",
    slug: "tractatus-theologico-politicus-continens-dissertationes-aliquot-quibus",
  },
  {
    uuid: "5ccad270-ee88-0131-6784-58d385a7b928",
    slug: "tractus-littorales-guine-a-promontorio-verde-usque-ad-sinum-catenbelae",
  },
  {
    uuid: "35ec8680-003e-0130-8cea-58d385a7bc34",
    slug: "tratado-sobre-la-cultura-y-preparaciones-del-tabaco-en-cordova-y-orizava",
  },
  {
    uuid: "d9fcf090-5438-0139-0db2-0242ac110003",
    slug: "trattato-como-se-a-da-inbrigliare-il-cavallo-e-de-tutti-signali",
  },
  {
    uuid: "d3805b50-284a-0133-8a4e-60f81dd2b63c",
    slug: "travellers-and-outlaws-episodes-in-american-history",
  },
  {
    uuid: "57db1cb0-0032-0130-36fe-58d385a7bc34",
    slug: "tripitaka-strapitaka-prajpramit-vajracchedik-chinese",
  },
  {
    uuid: "8766dc60-45f5-0134-9727-00505686a51c",
    slug: "tripiaka-strapiaka-avatasakastra-korean",
  },
  {
    uuid: "5ef0b0a0-8c40-0135-7cd0-093a7695553a",
    slug: "trois-caprices-pour-le-violon-op-20",
  },
  {
    uuid: "7daa91f0-8c2a-0135-f6fe-0677215ba6f6",
    slug: "trois-caprices-pour-le-violon-op-20-2",
  },
  {
    uuid: "68400840-d838-0139-5182-0242ac110004",
    slug: "trois-sonates-pour-le-piano-forte-accompanges-dune-flute-oeuvre-second",
  },
  {
    uuid: "0eb2af90-4d13-0138-2d76-2173d963b7cb",
    slug: "trompe-loeil-of-assignats-with-beggar-after-callot",
  },
  {
    uuid: "1cf74150-c6b0-0132-9702-58d385a7bbd0",
    slug: "tsahot-bedihuta-de-kidushin",
  },
  {
    uuid: "3e345e70-4f5f-0133-409d-00505686d14e",
    slug: "tupa-drama-lirica-en-un-acto-piano-y-canto",
  },
  {
    uuid: "472171c0-0033-0130-7f1c-58d385a7bc34",
    slug: "two-cowherds-and-bulls-near-house",
  },
  {
    uuid: "73a9d440-c54b-012f-9471-3c075448cc4b",
    slug: "two-favorite-minuets-for-the-german-flute-violin-and-harpsichord",
  },
  {
    uuid: "adcdbe30-c54c-012f-4236-3c075448cc4b",
    slug: "two-greyhounds-and-a-third-dog-sleeping",
  },
  {
    uuid: "e9033fd0-164c-0135-f174-0d1924c965be",
    slug: "tsentralny-muze-krasno-armii",
  },
  {
    uuid: "449e92a0-003e-0130-3f47-58d385a7bc34",
    slug: "us-navy-yard-at-mare-island-california",
  },
  {
    uuid: "49900a20-c604-012f-9bbb-58d385a7bc34",
    slug: "uss-maine",
  },
  {
    uuid: "8b9e3750-c552-012f-9239-3c075448cc4b",
    slug: "ulysses-and-calypso",
  },
  {
    uuid: "58ac63f0-c606-012f-b733-58d385a7bc34",
    slug: "uncle-toms-cabin-holograph-leaf",
  },
  {
    uuid: "3036ce70-d83b-0139-6f8e-0242ac110003",
    slug: "une-sonate-pour-le-piano-forte-avec-accompagnement-dun-violon-ou-dune-flute-op",
  },
  {
    uuid: "7b2b4ed0-c557-012f-d223-3c075448cc4b",
    slug: "unemployed-buy-apples-5-cents-each",
  },
  {
    uuid: "2a815a00-0031-0130-fc33-58d385a7bc34",
    slug: "union-humboldt-county-cal",
  },
  {
    uuid: "4cb2d3d0-25c4-0134-1199-00505686a51c",
    slug: "united-states-district-court-of-new-york-proceedings",
  },
  {
    uuid: "8116b340-0031-0130-9366-58d385a7bc34",
    slug: "united-states-senate-chamber",
  },
  {
    uuid: "d6410190-c54b-012f-ce48-3c075448cc4b",
    slug: "united-nations-march-and-two-step",
  },
  {
    uuid: "552e7c70-a157-0130-7f6b-58d385a7bbd0",
    slug: "untitled-knitted-to-order-sport-clothes-for-bonwitt-teller-sportswear",
  },
  {
    uuid: "0f1a2b10-ee88-0131-94b5-58d385a7b928",
    slug: "upper-nubia-and-abyssinia",
  },
  {
    uuid: "a75cf580-c6ef-012f-7b90-58d385a7bc34",
    slug: "using-an-empty-frame-andr-lhote-shows-his-pupils-how-to-compose-a-landscape",
  },
  {
    uuid: "f6b36d40-0a46-0134-0f45-00505686a51c",
    slug: "ustav-imperatorskago-obshchestva-pooshchreniia-khudozhestv-vysochashe",
  },
  {
    uuid: "b8960460-7bdf-0137-e888-5f61277fe722",
    slug: "valeur-des-assignats-et-autres-papiers-monnoies-depuis-lpoque-de-leur-emission",
  },
  {
    uuid: "32d22e60-0031-0130-2373-58d385a7bc34",
    slug: "van-tassels-house-irvings-residence",
  },
  {
    uuid: "1d1bd920-0031-0130-5ffe-58d385a7bc34",
    slug: "vaux-hall",
  },
  {
    uuid: "bf4908b0-c604-012f-595f-58d385a7bc34",
    slug: "veg",
  },
  {
    uuid: "ee9de7a0-9ec3-0134-94b6-00505686a51c",
    slug: "venetia",
  },
  {
    uuid: "265c5e00-0031-0130-331b-58d385a7bc34",
    slug: "vertumne-and-pomone",
  },
  {
    uuid: "5a9501a0-c103-0136-67bf-231c16f25c41",
    slug: "vida-virtvdes-y-milagros-del-nvevo-apostol-del-pirv-el-vereable-pf-francisco",
  },
  {
    uuid: "277a66e0-c569-012f-4a57-58d385a7bc34",
    slug: "view-of-baltimore",
  },
  {
    uuid: "491cbfe0-c557-012f-f4b4-3c075448cc4b",
    slug: "view-of-chelsea-mass-from-eagle-hill-east-boston",
  },
  {
    uuid: "b2c6a170-0030-0130-17cf-58d385a7bc34",
    slug: "view-of-dover-nh-taken-from-garrison-hill",
  },
  {
    uuid: "4cd6e1b0-0036-0130-003f-58d385a7bc34",
    slug: "view-of-great-salt-lake-city",
  },
  {
    uuid: "73b9c540-c54c-012f-43d8-3c075448cc4b",
    slug: "view-of-green-river-wyoming-territory-looking-north",
  },
  {
    uuid: "71183c30-c54c-012f-43bb-3c075448cc4b",
    slug: "view-of-honolulu-harbor",
  },
  {
    uuid: "6f870620-c54c-012f-f5c1-3c075448cc4b",
    slug: "view-of-jefferson-watkins-glen-chemung-co-ny-looking-north",
  },
  {
    uuid: "4c560710-c557-012f-dbf9-3c075448cc4b",
    slug: "view-of-matagorda-texas",
  },
  {
    uuid: "9fd915f0-0034-0130-a0d4-58d385a7bc34",
    slug: "view-of-melrose-and-surroundings-taken-from-the-ursuline-convent-westchester-co",
  },
  {
    uuid: "b4e96a10-0032-0130-c8d1-58d385a7bc34",
    slug: "view-of-minesota-mine-county-of-ontonagon-state-of-michigan-taken-from-the-south",
  },
  {
    uuid: "28bc1970-c569-012f-c84a-58d385a7bc34",
    slug: "view-of-new-haven-connecticut-from-ferry-hill",
  },
  {
    uuid: "d47341f0-0033-0130-eab1-58d385a7bc34",
    slug: "view-of-new-london-from-fort-griswold",
  },
  {
    uuid: "3f2f7d10-0036-0130-23bc-58d385a7bc34",
    slug: "view-of-philadelphia",
  },
  {
    uuid: "abad5340-0032-0130-bdec-58d385a7bc34",
    slug: "view-of-sacramento-city-as-it-appeared-during-the-great-inundation-in-january",
  },
  {
    uuid: "320aea90-0032-0130-fd1e-58d385a7bc34",
    slug: "view-of-san-francisco-1850-taken-from-a-high-point-of-the-south-side",
  },
  {
    uuid: "d1f29720-0030-0130-aa42-58d385a7bc34",
    slug: "view-of-winsted-conn",
  },
  {
    uuid: "782459d0-c54c-012f-a0d3-3c075448cc4b",
    slug: "view-of-yosemite-valley-california",
  },
  {
    uuid: "29e177a0-c554-012f-8594-3c075448cc4b",
    slug: "view-of-the-distributing-reservoir-on-murrays-hill-city-of-new-york",
  },
  {
    uuid: "72128630-c54c-012f-f571-3c075448cc4b",
    slug: "view-of-the-east-dorset-italian-marble-mountains-and-mills",
  },
  {
    uuid: "50bdfd80-c557-012f-bb54-3c075448cc4b",
    slug: "view-of-the-water-gap-and-columbia-glassworks-river-delaware",
  },
  {
    uuid: "f39521f0-c5ea-012f-80b3-58d385a7bc34",
    slug: "view-of-the-city-of-bangor-me",
  },
  {
    uuid: "82e138c0-003e-0130-bdd7-58d385a7bc34",
    slug: "view-of-the-great-fire-in-new-york-decr-16th-and-17th-1835-as-seen-from-the-top",
  },
  {
    uuid: "9492f4d0-0030-0130-af2d-58d385a7bc34",
    slug: "view-of-the-ruins-after-the-great-fire-in-new-york-decr-16th-and-17th-1835-as",
  },
  {
    uuid: "ed2fce20-c5ea-012f-4063-58d385a7bc34",
    slug: "view-on-the-potomac-virginia",
  },
  {
    uuid: "d884da60-ae8b-0138-affc-2bdc16f36b57",
    slug: "virginal-music-ms-english-early-17th-century",
  },
  {
    uuid: "8915b580-1348-0131-dc36-58d385a7b928",
    slug: "visions-of-the-daughters-of-albion",
  },
  {
    uuid: "e67ad4e0-c551-012f-f01a-3c075448cc4b",
    slug: "visit-of-the-ku-klux-a-drawing-by-frank-bellew-in-harpers-weekly-24-february",
  },
  {
    uuid: "d0234820-81dc-0134-f062-00505686a51c",
    slug: "vita-del-lascivo",
  },
  {
    uuid: "5b157830-c545-012f-3ce8-3c075448cc4b",
    slug: "vivamus-bacchi-plenos-sumamus-et-haustus-vita-alris-alis-eft-viver-mi-biberi-est",
  },
  {
    uuid: "19a5bb10-8c3c-0135-f724-09f4237957dd",
    slug: "vocabulaire-malgache-distribu-en-deux-parties-la-premiere-franois-et-malgache",
  },
  {
    uuid: "598169a0-ee88-0131-e349-58d385a7b928",
    slug: "voyage-du-captaine-dampier-a-la-n-hollande-etc",
  },
  {
    uuid: "8092cde0-003e-0130-d959-58d385a7bc34",
    slug: "vue-de-san-francisco-vista-de-san-francisco",
  },
  {
    uuid: "5736bef0-29af-0133-afd9-60f81dd2b63c",
    slug: "vritable-origine-des-troubles-de-s-domingue-et-des-diffrentes-causes-qui",
  },
  {
    uuid: "74bf8b40-2f23-0134-c62d-00505686a51c",
    slug: "waiting-for-mass-courtmacsherry-co-cork",
  },
  {
    uuid: "e487c5f0-d058-0130-b2b8-58d385a7bbd0",
    slug: "walt-whitman",
  },
  {
    uuid: "517d92f0-c557-012f-da63-3c075448cc4b",
    slug: "washington-greys-8th-regt-nyst-on-special-duty-at-camp-washington-quarantine-st",
  },
  {
    uuid: "7737a100-c54c-012f-3cb0-3c075448cc4b",
    slug: "washington-hall-philadelphia",
  },
  {
    uuid: "b128b780-1353-0131-ab4b-58d385a7bbd0",
    slug: "washington-heights-manhattan-its-eventful-past",
  },
  {
    uuid: "c303dfb0-0032-0130-b2d5-58d385a7bc34",
    slug: "washington-irvings-house-at-hell-gate-ny",
  },
  {
    uuid: "d4fc4880-c54b-012f-4a87-3c075448cc4b",
    slug: "washingtons-monument-baltimore",
  },
  {
    uuid: "5b714670-c545-012f-5ff8-3c075448cc4b",
    slug: "washingtons-monument-baltimore-2",
  },
  {
    uuid: "55fcce00-ee88-0131-adb0-58d385a7b928",
    slug: "west-africa-from-the-travels-in-africa",
  },
  {
    uuid: "e5ecd8d0-0033-0130-d8d8-58d385a7bc34",
    slug: "what-i-saw-at-the-worlds-fair-or-notes-of-the-great-exhibition",
  },
  {
    uuid: "f06e2b90-c5ea-012f-9cd5-58d385a7bc34",
    slug: "wildey-monument-commemorating-the-founding-of-the-independent-order-of-odd",
  },
  {
    uuid: "2c890060-0031-0130-317e-58d385a7bc34",
    slug: "william-blake",
  },
  {
    uuid: "c0aec690-0034-0130-ddac-58d385a7bc34",
    slug: "william-duke-of-clarence-autograph-letter-signed-to-dorothy-jordan-25-september",
  },
  {
    uuid: "9d890640-4a9d-0133-34c3-00505686d14e",
    slug: "winning-of-the-west-manuscript-1889",
  },
  {
    uuid: "2bdb7760-0036-0130-c22e-58d385a7bc34",
    slug: "winter",
  },
  {
    uuid: "32d77bb0-18ed-0137-dcc8-7dcdd7bc6c68",
    slug: "with-the-114th-in-the-eto-a-combat-history",
  },
  {
    uuid: "f498ced0-c5ea-012f-95a1-58d385a7bc34",
    slug: "women-forever-march",
  },
  {
    uuid: "4666afe0-003e-0130-0d85-58d385a7bc34",
    slug: "wood-at-the-canal",
  },
  {
    uuid: "ef6b9c20-f66d-0131-6f65-58d385a7b928",
    slug: "wooded-landscape-with-herdsman-and-cows",
  },
  {
    uuid: "69082830-c5a4-0132-3ede-58d385a7b928",
    slug: "work-of-lurianic-kabbalah",
  },
  {
    uuid: "e991c8b0-e87b-0131-ba91-3c075448cc4b",
    slug: "wynton-marsalis-playing-through-the-changes",
  },
  {
    uuid: "401e7b60-0036-0130-94d0-58d385a7bc34",
    slug: "xii-midzynarodowe-targi-wschodnie-we-lwowie-od-18-do-30vi-1932",
  },
  {
    uuid: "86eafa90-8a8f-0135-bbd9-3b68804860d3",
    slug: "yellow-kid",
  },
  {
    uuid: "505d0fe0-c557-012f-7a36-3c075448cc4b",
    slug: "yerba-buena-now-san-francisco-in-the-spring-of-1837",
  },
  {
    uuid: "677b9980-0034-0130-ea17-58d385a7bc34",
    slug: "yes-yes-mr-fire-chief-ill-help-those-little-boys-set-fire-to-the-town",
  },
  {
    uuid: "841981e0-0036-0130-a03d-58d385a7bc34",
    slug: "zephire-and-flore",
  },
  {
    uuid: "9a9165b0-c54b-012f-2da7-3c075448cc4b",
    slug: "zhalovannaia-gramota",
  },
  {
    uuid: "e8d09da0-125a-0138-c70d-60f81dd2b63c",
    slug: "zhivopisnoe-puteshestvie-ot-moskvy-do-kitaiskoi-granitsy",
  },
  {
    uuid: "0d01f240-1c20-0132-681a-58d385a7b928",
    slug: "zum-anfang-rckert",
  },
  {
    uuid: "bd055840-2263-0137-bb05-492e59808f68",
    slug: "peter-and-wendy-pp-and-wendy-holograph-signed-and-dated-strand-june-27-1911",
  },
  {
    uuid: "952943a0-0030-0130-2247-58d385a7bc34",
    slug: "alaam-and-the-angel",
  },
  {
    uuid: "da67da90-27d1-0132-e61c-58d385a7b928",
    slug: "pitre-a-don-bernard-de-galvez-colonel-des-armes-de-sa-majest-catholique",
  },
  {
    uuid: "6e019780-f2d0-0134-cb30-0517ba8e61b0",
    slug: "nsa-lutri-laste-oppus-lhhidelt-phh-kirja-perr-rrselletetu-nink-kssimisse-nink",
  },
  {
    uuid: "112526c0-c5e6-012f-b65c-3c075448cc4b",
    slug: "edgar-allan-poe-walking-high-bridge",
  },
  {
    uuid: "cb9e4a80-c607-012f-8379-58d385a7bc34",
    slug: "british-central-africa-an-attempt-to-give-some-account-of-a-portion",
  },
  {
    uuid: "0ef4eb00-c605-012f-7c28-58d385a7bc34",
    slug: "catechism-for-the-religous-instructions-of-persons-of-colour",
  },
  {
    uuid: "710cf760-c605-012f-62d4-58d385a7bc34",
    slug: "philosophi-naturalis-principia-mathematica",
  },
  {
    uuid: "7f903670-c61f-012f-552d-58d385a7bc34",
    slug: "le-triumphe-danvers-faict-pour-la-noble-festes-de-la-thoison-dor",
  },
  {
    uuid: "d5936980-634c-0130-5355-58d385a7bbd0",
    slug: "r-caldecotts-picture-books",
  },
  {
    uuid: "d3802d10-f49a-0139-3bff-0242ac110002",
    slug: "friedman-abeles-photographs",
  },
  {
    uuid: "3a268ed0-6a33-0139-0acc-0242ac110002",
    slug: "thomas-addis-emmet-collection",
  },
  {
    uuid: "58226000-9cbe-013a-f681-0242ac110003",
    slug: "photographs-of-buildings-under-construction-1901-1935",
  },
  {
    uuid: "b21984e0-7f90-0139-d2bf-0242ac110003",
    slug: "cinelandia",
  },
  {
    uuid: "7dd35bc0-20cb-013b-3855-0242ac110002",
    slug: "l-j-binns-caricatures",
  },
  {
    uuid: "99e7b490-d07c-013a-67c1-0242ac110002",
    slug: "milton-galamison-papers",
  },
  {
    uuid: "3ad62d50-c6e7-012f-3c90-58d385a7bc34",
    slug: "illustrated-catalogue-of-ornamental-iron-work-manufactured-by-janes-beebe-co",
  },
  {
    uuid: "be8f1750-feba-0139-6311-0242ac110002",
    slug: "automatic-world",
  },
  {
    uuid: "e5bad880-c6cd-012f-160a-58d385a7bc34",
    slug: "loggie-di-rafaele-nel-vaticano",
  },
  {
    uuid: "235d2060-c6dc-012f-346e-58d385a7bc34",
    slug: "natan-altman",
  },
  {
    uuid: "ee7b9f10-c6df-012f-091b-58d385a7bc34",
    slug: "verscheyden-schrynwerck-als-portalen-kleerkassen-buffetten-ledikanten-tafels",
  },
  {
    uuid: "b59fc0c0-58a6-0137-2396-0b9c5d094bd8",
    slug: "john-henrik-clarke-papers",
  },
  {
    uuid: "de4f01c0-c6cd-012f-4eb2-58d385a7bc34",
    slug: "iskusstvo-v-bytu-36-tablits",
  },
  {
    uuid: "3440a9f0-ff8f-0135-6b72-0780a0cebd81",
    slug: "miscellaneous-collections-us-states-and-territories",
  },
  {
    uuid: "b5937950-c6ce-012f-33bb-58d385a7bc34",
    slug: "pavlovsk-le-palais-le-parc-peintures-sculptures-tissus-porcelaines-bronzes",
  },
  {
    uuid: "76de69b0-c6cf-012f-8b5b-58d385a7bc34",
    slug: "gl-ordini-equestri-religioso-militari",
  },
  {
    uuid: "b8a99770-7558-0139-4ed2-0242ac110005",
    slug: "jules-fisher-and-peggy-eisenhauer-papers-and-designs",
  },
  {
    uuid: "31d2a620-ee6b-013a-8950-0242ac110003",
    slug: "theatre-on-film-and-tape-photographs",
  },
  {
    uuid: "8533bac0-7309-013a-ec9d-0242ac110004",
    slug: "port-au-prince-haiti-november-1987",
  },
  {
    uuid: "0b266080-9368-013a-969d-0242ac110003",
    slug: "berg-collection-printed-books",
  },
  {
    uuid: "3e23a5f0-0f55-013a-6986-0242ac110004",
    slug: "canadian-music-trades-journal",
  },
  {
    uuid: "85969b10-c6b7-012f-e14a-58d385a7bc34",
    slug: "specimens-of-the-geometrical-mosaic-of-the-middle-ages",
  },
  {
    uuid: "1b352620-c6b5-012f-6028-58d385a7bc34",
    slug: "a-suite-of-twenty-engravings-of-the-yuan-ming-yuan-summer-palaces-and-gardens",
  },
  {
    uuid: "239b09e0-ea66-013a-39ba-0242ac110003",
    slug: "saul-steinberg-collection",
  },
  {
    uuid: "9115c860-57a5-013a-220c-0242ac110003",
    slug: "peter-stone-papers",
  },
  {
    uuid: "c5a52e30-c622-012f-2288-58d385a7bc34",
    slug: "photographs-of-new-york-city-and-puerto-rico",
  },
  {
    uuid: "7e27a040-1262-013a-f304-0242ac110003",
    slug: "george-platt-lynesjack-woody-photographs",
  },
  {
    uuid: "71e634a0-62a8-013a-0638-0242ac110003",
    slug: "a-voyage-to-the-river-sierra-leone-on-the-coast-of-africa",
  },
  {
    uuid: "7aeec890-5cf5-013a-0bab-0242ac110002",
    slug: "kiowa-indian-art",
  },
  {
    uuid: "501baf90-badc-0137-15a9-0d9f7c4e4b45",
    slug: "viola-farber-dance-company-video-archive",
  },
  {
    uuid: "8ab8c8c0-3c90-0139-8dff-0242ac110002",
    slug: "paul-robeson-collection",
  },
  {
    uuid: "8ee5a170-bd19-0137-6edb-5f46f3771b33",
    slug: "sara-sugihara-video-archive",
  },
  {
    uuid: "b6bcefd0-3e7b-013a-4a9b-0242ac110004",
    slug: "egypt-nubia-and-ethiopia-2",
  },
  {
    uuid: "0acc4d80-66a0-013a-ecf9-0242ac110004",
    slug: "flo-ziegfeld-billie-burke-papers-1907-1984",
  },
  {
    uuid: "61f18650-deb4-013a-11bc-0242ac110004",
    slug: "le-thtre-italien-de-gherardi-ou-le-recueil-gnral-de-toutes-les-comdies-scnes",
  },
  {
    uuid: "1bc9f300-e51b-013a-35d8-0242ac110003",
    slug: "nat-king-cole-photograph-collection",
  },
  {
    uuid: "8ba50a30-2048-0138-da03-0b35bb8dc622",
    slug: "africa-and-the-american-flag",
  },
  {
    uuid: "2eba4360-bb46-013a-1235-0242ac110004",
    slug: "group-theatre-london",
  },
  {
    uuid: "a1bec690-b46b-013a-ef62-0242ac110004",
    slug: "hallie-flanagan-papers",
  },
  {
    uuid: "b188b6c0-f916-0137-7e44-13ceb34eca28",
    slug: "kongelige-danske-ballet-video-archive",
  },
  {
    uuid: "a5ef6470-bd1a-0137-91b8-11758fac98c8",
    slug: "luis-montero-video-archive",
  },
  {
    uuid: "b9ffc0b0-559d-0138-d54b-11b2e9b4b111",
    slug: "mitchell-rose-dance-company-video-archive",
  },
  {
    uuid: "89d00f30-34e5-013a-0f27-0242ac110003",
    slug: "paramount-studios-motion-picture-stills-scrapbooks-1927-1947",
  },
  {
    uuid: "ebdf1ad0-fec9-0139-c985-0242ac110004",
    slug: "a-exposio-de-1922",
  },
  {
    uuid: "d2302ee0-1d59-013a-2650-0242ac110003",
    slug: "copy-berg-papers",
  },
  {
    uuid: "e7ea9b90-d209-0139-e549-0242ac110003",
    slug: "willa-cather-literary-manuscripts",
  },
  {
    uuid: "723343a0-8ff6-0139-ad8f-0242ac110002",
    slug: "american-ballet-theatre-records",
  },
  {
    uuid: "7b919070-c31c-013a-78c6-0242ac110003",
    slug: "haitian-revolution-1946",
  },
  {
    uuid: "e977bc10-5132-013a-b854-0242ac110003",
    slug: "migration",
  },
  {
    uuid: "c35da1f0-5158-013a-b07d-0242ac110002",
    slug: "playwrights-company-records",
  },
  {
    uuid: "0f753d20-6d81-0130-049d-58d385a7bbd0",
    slug: "programs-and-playbills",
  },
  {
    uuid: "5af7f7b0-15d6-013b-1895-0242ac110002",
    slug: "the-messenger",
  },
  {
    uuid: "0ea798a0-2f64-013a-c5fa-0242ac110002",
    slug: "a-particuler-discourse-concerninge-the-greate-necessitie-and-manifolde",
  },
  {
    uuid: "054edf30-4595-013a-2a1a-0242ac110002",
    slug: "beale-shorthand-collection",
  },
  {
    uuid: "3eaa9c00-d460-013a-9f7c-0242ac110003",
    slug: "cl-baley-collection",
  },
  {
    uuid: "f9f3a770-3bbf-0134-d67c-00505686a51c",
    slug: "canada-lee-photograph-collection",
  },
  {
    uuid: "6860d860-7923-0139-0a72-0242ac110002",
    slug: "chester-kallman-collection-of-papers",
  },
  {
    uuid: "90fcad80-748c-0139-a08e-0242ac110002",
    slug: "f-m-esfandiary-fm-2030-papers",
  },
  {
    uuid: "39981570-b842-013a-794f-0242ac110002",
    slug: "foster-murphy-collection",
  },
  {
    uuid: "fc28c400-5157-013a-7eaa-0242ac110003",
    slug: "joel-e-spingarn-papers",
  },
  {
    uuid: "97fb8600-a896-013a-042b-0242ac110003",
    slug: "josephine-baker-scrapbooks",
  },
  {
    uuid: "a61b62e0-7bd6-013a-7f21-0242ac110003",
    slug: "new-york-amsterdam-news-2",
  },
  {
    uuid: "8e1e2e20-c608-012f-6681-58d385a7bc34",
    slug: "rhoda-g-freeman-manuscript-and-research-collection-1956-1985",
  },
  {
    uuid: "8ef58200-44cb-013a-d811-0242ac110002",
    slug: "rosika-schwimmer-papers",
  },
  {
    uuid: "c7aa3e90-8ea5-013a-4a93-0242ac110002",
    slug: "tony-straiges-designs",
  },
  {
    uuid: "07d6bf50-e804-0139-c7cc-0242ac110002",
    slug: "olam-katan",
  },
  {
    uuid: "1e030160-a495-013a-e55b-0242ac110003",
    slug: "a-perfect-school-of-instructions-for-the-officers-of-the-mouth",
  },
  {
    uuid: "c5a4e970-70bb-013a-4562-0242ac110004",
    slug: "alices-adventures-in-wonderland-2",
  },
  {
    uuid: "319f3180-f5b0-013a-8226-0242ac110003",
    slug: "arkitekten",
  },
  {
    uuid: "dbc093c0-3e71-013a-7ae1-0242ac110003",
    slug: "benjamin-j-davis-papers",
  },
  {
    uuid: "2ce0b3e0-e058-013a-11e1-0242ac110004",
    slug: "charm",
  },
  {
    uuid: "1a5a20a0-deb6-013a-fe37-0242ac110003",
    slug: "description-du-plan-en-relief-de-labbaye-de-la-trappe",
  },
  {
    uuid: "2211a0e0-f3a2-0139-c194-0242ac110003",
    slug: "descrizione-del-sacro-monte-della-vernia",
  },
  {
    uuid: "b4635590-64e4-013a-3f5e-0242ac110002",
    slug: "exhibition-of-the-works-of-the-sculptor-oconnor",
  },
  {
    uuid: "e8545900-af77-013a-deca-0242ac110002",
    slug: "ferguson-family-papers",
  },
  {
    uuid: "55839df0-e7dd-0139-e69e-0242ac110002",
    slug: "from-matter-to-spirit",
  },
  {
    uuid: "9ba19570-d919-013a-de87-0242ac110003",
    slug: "george-cruickshank",
  },
  {
    uuid: "9d3b9b90-57a9-013a-3243-0242ac110002",
    slug: "george-kennan-papers",
  },
  {
    uuid: "bac6f620-8792-013a-9960-0242ac110004",
    slug: "gustave-reese-papers",
  },
  {
    uuid: "aabcdbd0-c602-012f-0ef4-58d385a7bc34",
    slug: "harlem",
  },
  {
    uuid: "ef651a20-60f5-013a-0dd9-0242ac110004",
    slug: "joffrey-ballet-company-records",
  },
  {
    uuid: "9e1d0b60-294b-013a-8fa7-0242ac110004",
    slug: "lafargue-clinic-photograph-collection",
  },
  {
    uuid: "26bf49a0-016c-013b-e719-0242ac110003",
    slug: "library-school-records",
  },
  {
    uuid: "d11abf80-2585-013b-384e-0242ac110003",
    slug: "meta-warrick-fuller-papers",
  },
  {
    uuid: "64d415b0-fa58-013a-db67-0242ac110003",
    slug: "otto-harbach-papers",
  },
  {
    uuid: "04907a40-4c6f-0139-fad5-0242ac110003",
    slug: "photographs-by-martin-chambi",
  },
  {
    uuid: "26032b80-f797-0138-6899-0242ac110004",
    slug: "poetry-society-of-america-records",
  },
  {
    uuid: "702c1840-13e1-013a-7d90-0242ac110004",
    slug: "programs",
  },
  {
    uuid: "b8735160-ad42-013a-6934-0242ac110002",
    slug: "remington-notes",
  },
  {
    uuid: "30893af0-70bf-013a-6d85-0242ac110004",
    slug: "scenes-in-the-life-of-harriet-tubman",
  },
  {
    uuid: "59ebff10-c607-012f-19b3-58d385a7bc34",
    slug: "slave-holding-in-north-carolina-an-economic-view",
  },
  {
    uuid: "eba362a0-a483-013a-d65a-0242ac110003",
    slug: "staff-news",
  },
  {
    uuid: "d6977de0-e5ce-013a-9ac6-0242ac110004",
    slug: "stone-an-illustrated-magazine",
  },
  {
    uuid: "773c7710-981a-013a-d797-0242ac110003",
    slug: "the-american-devon-herd-book",
  },
  {
    uuid: "d7ba44f0-b2db-013a-9048-0242ac110003",
    slug: "the-national-temperance-advocate",
  },
  {
    uuid: "53e2eaa0-a474-013a-3576-0242ac110003",
    slug: "the-new-world",
  },
  {
    uuid: "d51c8410-0f3d-013a-ad44-0242ac110004",
    slug: "the-office-magazine-of-management-equipment-automation",
  },
  {
    uuid: "960ea0a0-e4f0-013a-0cdc-0242ac110003",
    slug: "the-rambler-magazine",
  },
  {
    uuid: "6933ec70-59da-0130-fc00-58d385a7b928",
    slug: "the-electric-zone-new-york-district-sept-30th-1906",
  },
  {
    uuid: "cd487770-c607-012f-6e29-58d385a7bc34",
    slug: "the-new-man-twenty-nine-years-a-slave-twenty-nine-years-a-free-man",
  },
  {
    uuid: "90655a40-0042-0130-aeda-58d385a7bc34",
    slug: "the-tale-of-topsy-transit",
  },
  {
    uuid: "6077ebe0-c607-012f-03d9-58d385a7bc34",
    slug: "via-port-of-new-york",
  },
  {
    uuid: "da1ccda0-a8d4-0138-7fd9-5b986523d553",
    slug: "winnie-the-pooh",
  },
  {
    uuid: "c129b3b0-6caf-013a-e984-0242ac110002",
    slug: "album-de-posies-de-la-comtesse-auriemma-vianelli-de-venise",
  },
  {
    uuid: "125ff9f0-2946-013a-9c84-0242ac110003",
    slug: "allan-morrison-collection-additions",
  },
  {
    uuid: "c4044b30-9e24-013a-c5e9-0242ac110003",
    slug: "biographical-history-of-massachusetts",
  },
  {
    uuid: "05162390-6b49-013a-41a8-0242ac110004",
    slug: "charles-hullmandel",
  },
  {
    uuid: "dd98d8b0-da05-013a-665b-0242ac110002",
    slug: "charlotte-bront-manuscript-material",
  },
  {
    uuid: "1c5cf1f0-7ba2-013a-3fd7-0242ac110003",
    slug: "chemical-atlas",
  },
  {
    uuid: "b89ca0d0-dae3-013a-0aef-0242ac110004",
    slug: "chim-chim",
  },
  {
    uuid: "3ba88140-e417-013a-3cb5-0242ac110004",
    slug: "die-neueste-art-zur-galanten-und-theatralischen-tanz-kunst",
  },
  {
    uuid: "79564e20-1aef-013a-09de-0242ac110002",
    slug: "diplomatic-correspondence",
  },
  {
    uuid: "e5b6de80-df5d-013a-5935-0242ac110003",
    slug: "ectypa-vegetabilium-nach-der-natur-verfertigte-abdrcke-der-gewchse",
  },
  {
    uuid: "cf83a000-bf33-013a-9d69-0242ac110003",
    slug: "english-songs",
  },
  {
    uuid: "063a7be0-08ed-013a-6616-0242ac110003",
    slug: "expos-des-travaux-relatifs-la-reconnaissance-hydrographique-des-ctes",
  },
  {
    uuid: "8bc822c0-e807-0139-4376-0242ac110002",
    slug: "habima",
  },
  {
    uuid: "416459c0-a49b-013a-ee28-0242ac110003",
    slug: "il-trinciante",
  },
  {
    uuid: "11deadd0-9fbf-013a-d13a-0242ac110002",
    slug: "jones-sadler-family-papers",
  },
  {
    uuid: "32cf9af0-6a58-013a-7881-0242ac110002",
    slug: "joseph-pennell",
  },
  {
    uuid: "8fe41a60-3900-013a-de2b-0242ac110004",
    slug: "miscellaneous-personal-name-files-2-3-4",
  },
  {
    uuid: "37dc7500-df61-013a-1b4c-0242ac110004",
    slug: "krhe-winterreise-no-15",
  },
  {
    uuid: "88eac300-6b18-013a-d23c-0242ac110002",
    slug: "la-guide-des-trangers-curieux-de-voir-de-connotre-les-choses-les-plus",
  },
  {
    uuid: "34e513d0-c605-012f-dae5-58d385a7bc34",
    slug: "le-code-noir-ou-recueil-des-reglemens-rendus-jusqu-present-concernant-le",
  },
  {
    uuid: "3055d1a0-a492-013a-019c-0242ac110003",
    slug: "li-tre-trattati-di-messer-mattia-giegher",
  },
  {
    uuid: "3cb9ca80-7ba9-013a-c3dc-0242ac110004",
    slug: "lima-justificada",
  },
  {
    uuid: "0c29e230-a49f-013a-d3ed-0242ac110003",
    slug: "m-bortolomeo-sic-scappi-dell-arte-del-cvcinare-con-il-mastro-de-casa",
  },
  {
    uuid: "d939cca0-af77-013a-8395-0242ac110003",
    slug: "meeres-stille-und-glckliche-fahrt",
  },
  {
    uuid: "1bc9d2b0-e5b6-013a-bca5-0242ac110003",
    slug: "miniature-leaf-shaped-quran",
  },
  {
    uuid: "77eb99f0-e80c-0139-0704-0242ac110004",
    slug: "moledet",
  },
  {
    uuid: "c7623310-e515-013a-1d83-0242ac110003",
    slug: "morris-blackburn",
  },
  {
    uuid: "f56b2330-d0a4-013a-3a2a-0242ac110003",
    slug: "mmoires-doutre-tombe",
  },
  {
    uuid: "ef14cae0-dae1-013a-150e-0242ac110003",
    slug: "narrative-of-the-life-of-frederick-douglass-an-american-slave",
  },
  {
    uuid: "2391ed10-91cf-013a-16e6-0242ac110004",
    slug: "new-york-and-regional-theatrical-souvenir-programs1903-1937",
  },
  {
    uuid: "0fcba440-a499-013a-f439-0242ac110002",
    slug: "opera-di-bartolomeo-scappi-m-dellarte-del-cucinare-con-laquale-si-pu-ammaestrare",
  },
  {
    uuid: "ba8dce80-aae9-013a-b546-0242ac110004",
    slug: "rhode-island-orderly-book",
  },
  {
    uuid: "9ba7d090-3c12-013a-572a-0242ac110004",
    slug: "richard-rogers-bowker-papers",
  },
  {
    uuid: "34bf6960-e7f0-0139-b2b3-0242ac110004",
    slug: "social-concern-and-left-politics-in-jewish-american-art",
  },
  {
    uuid: "83bbdff0-decb-013a-f845-0242ac110004",
    slug: "the-beauties-of-flora",
  },
  {
    uuid: "5c6a0610-70bd-013a-2b9d-0242ac110002",
    slug: "the-english-struwwelpeter",
  },
  {
    uuid: "dff6a5a0-c7fb-013a-316b-0242ac110003",
    slug: "the-house-on-henry-street",
  },
  {
    uuid: "3d3c2290-c605-012f-6dbc-58d385a7bc34",
    slug: "the-inter-state-tattler-photograph-collection",
  },
  {
    uuid: "99bb6b10-f542-0138-38ab-0242ac110003",
    slug: "the-joshua-bloch-memorial-volume",
  },
  {
    uuid: "30837710-56bc-013a-f6b5-0242ac110002",
    slug: "the-malcolm-x-collection-papers",
  },
  {
    uuid: "1bbdb3b0-9cab-013a-2de0-0242ac110003",
    slug: "the-mapleson-cylinders",
  },
  {
    uuid: "2526e020-d0a3-013a-39b0-0242ac110003",
    slug: "the-great-bronze-age-of-china",
  },
  {
    uuid: "6b428300-c602-012f-8baa-58d385a7bc34",
    slug: "the-modern-building-organization",
  },
  {
    uuid: "ec919350-c603-012f-cc8b-58d385a7bc34",
    slug: "the-steam-engine-its-origin-and-gradual-improvement-from-the-time-of-hero",
  },
  {
    uuid: "a1a07220-e5af-013a-10e9-0242ac110003",
    slug: "the-waste-land",
  },
  {
    uuid: "b7ef2360-c603-012f-5dec-58d385a7bc34",
    slug: "theoria-motuum-planetarum-et-cometarum",
  },
  {
    uuid: "93b019e0-c604-012f-6cb4-58d385a7bc34",
    slug: "theoria-philosophiae-naturalis-redacta-ad-unicam-legem-virium-in-natura",
  },
  {
    uuid: "c45fd590-061d-013b-0da2-0242ac110002",
    slug: "time-timekeepers",
  },
  {
    uuid: "f089f690-c603-012f-7c64-58d385a7bc34",
    slug: "trait-doptique-sur-les-reflexions-refractions-inflexions-et-les-couleurs",
  },
  {
    uuid: "a4766300-eb40-013a-271d-0242ac110003",
    slug: "tribute-to-fdor-lopukhov",
  },
  {
    uuid: "2fcd2750-c605-012f-4d70-58d385a7bc34",
    slug: "ussr-exhibition-of-achievements-in-science-technology-and-culture-new-york-1959",
  },
  {
    uuid: "74081d80-844f-0130-9cc8-58d385a7bbd0",
    slug: "versuch-einer-nhren-erklrung-von-der-natur-der-farben-zur-erluterung",
  },
  {
    uuid: "0942cd60-a4a2-013a-51af-0242ac110003",
    slug: "vollstndig-vermehrtes-trincir-buch",
  },
  {
    uuid: "8bf90b30-3c02-013a-d134-0242ac110004",
    slug: "william-h-butler-photograph-collection",
  },
  {
    uuid: "307f33b0-7914-0139-a691-0242ac110002",
    slug: "george-moore-collection-of-papers",
  },
  {
    uuid: "806f2dc0-7492-0139-aeee-0242ac110002",
    slug: "herbert-j-seligmann-papers",
  },
  {
    uuid: "0ff594a0-c4dd-013a-5a92-0242ac110002",
    slug: "john-wolcott-phelps-papers",
  },
  {
    uuid: "eac40ec0-aae9-013a-5ca6-0242ac110004",
    slug: "lillian-d-wald-papers",
  },
  {
    uuid: "9cc15300-faee-013a-de49-0242ac110003",
    slug: "peter-pan-costume-designs",
  },
  {
    uuid: "8467ec00-43ce-013a-bccb-0242ac110004",
    slug: "sadie-p-delaney-papers",
  },
  {
    uuid: "d4039640-1257-0138-5dce-60f81dd2b63c",
    slug: "a-handbook-for-greek-and-roman-lace-making",
  },
  {
    uuid: "957898e0-ee87-0131-378b-58d385a7b928",
    slug: "a-map-of-martinico-from-the-latest-and-best-authorities",
  },
  {
    uuid: "ae52ecf0-ee87-0131-572e-58d385a7b928",
    slug: "a-new-correct-map-of-negroland-and-guinea",
  },
  {
    uuid: "c06783b0-60fd-013a-4c34-0242ac110002",
    slug: "americas-prima-donna-in-a-score-of-brilliant-portraitures",
  },
  {
    uuid: "9ef51840-3b33-013a-6092-0242ac110002",
    slug: "convention-of-the-freedmen-of-north-carolina-official-proceedings",
  },
  {
    uuid: "6287ff00-0031-0130-9bf2-58d385a7bc34",
    slug: "cummings-royal-portable-typewriter-with-case",
  },
  {
    uuid: "03a70920-6054-013a-cb79-0242ac110003",
    slug: "dw-griffiths-birth-of-a-nation",
  },
  {
    uuid: "43bde3e0-6053-013a-0459-0242ac110003",
    slug: "diktatura-proletarata-v-rossi-nabroski-s-natury-iuk-artsybusheva-politicheske",
  },
  {
    uuid: "2df1ef10-ffc2-0131-42a5-58d385a7b928",
    slug: "ed-laurens-cigarette-cards",
  },
  {
    uuid: "9473b190-e670-013a-13c9-0242ac110004",
    slug: "el-general-san-martin-presenci-la-declaracion-de-la-independencia-de-los-estados",
  },
  {
    uuid: "a3ac60f0-e67b-0139-239f-0242ac110004",
    slug: "etablissesment-provisoire-nauvoo",
  },
  {
    uuid: "6725ea00-cad9-0139-23b5-0242ac110002",
    slug: "events-of-the-tulsa-disaster",
  },
  {
    uuid: "ae038630-2468-013a-e36b-0242ac110003",
    slug: "four-duets-for-alto-and-baritone",
  },
  {
    uuid: "15527690-c5eb-012f-f135-58d385a7bc34",
    slug: "henry-d-thoreau-land-surveying-handbill",
  },
  {
    uuid: "21d0f6c0-1ad6-0139-8244-0242ac110003",
    slug: "het-nievwe-licht-der-zeevaert-ofte-havenwyser-van-de-oostersche-noordsche-en",
  },
  {
    uuid: "58314690-c545-012f-0cd2-3c075448cc4b",
    slug: "ill-sweep-your-streets-if-no-one-else-will",
  },
  {
    uuid: "8a87bd40-5c57-013a-ffc2-0242ac110003",
    slug: "in-congress-july-4-1776-a-declaration-by-the-representatives-of-the-united",
  },
  {
    uuid: "89f4cf00-bd08-013a-4e01-0242ac110003",
    slug: "jewish-moroccan-man",
  },
  {
    uuid: "2eb10f40-ee88-0131-a2e5-58d385a7b928",
    slug: "l-afrique-avec-ses-divisions-geographiques-les-colonies-europennes-cc",
  },
  {
    uuid: "694419a0-b207-013a-52ff-0242ac110003",
    slug: "lessor-victorieux",
  },
  {
    uuid: "b26e38d0-c603-012f-d44e-58d385a7bc34",
    slug: "la-mujer-nicaragense-ante-el-derecho-de-sufragar-por-qu-me-opuse-a-que-se-le",
  },
  {
    uuid: "4af75970-e08c-0132-818e-58d385a7b928",
    slug: "letter-of-james-madison-to-james-maury-the-madison-business-agent-in-virginia",
  },
  {
    uuid: "d6a57660-dfa8-0132-4955-58d385a7bbd0",
    slug: "lettre-pastorale-de-lvque-constitutionnel-du-dpartement-de-dordogne-a-tous",
  },
  {
    uuid: "6c2d1630-003e-0130-36da-58d385a7bc34",
    slug: "memoranda-book-with-accompanied-by-material-written-by-charles-dickens",
  },
  {
    uuid: "889f0de0-ca5f-013a-eadd-0242ac110003",
    slug: "mir-s-bogom-chelovk-ili-pokaene-sviatoe-primireiushtee-bogovi-chlovka-chenem-t",
  },
  {
    uuid: "741201a0-c54b-012f-ea3e-3c075448cc4b",
    slug: "narrative-of-the-life-of-frederick-douglass-an-american-slave-written-by-himself",
  },
  {
    uuid: "0834a7f0-dfab-0132-df64-58d385a7b928",
    slug: "notions",
  },
  {
    uuid: "eef61560-38df-013a-6451-0242ac110003",
    slug: "pices-de-clavecin-composes-par-monsieur-marchand-organiste-de-leglise-de-st",
  },
  {
    uuid: "d0e77a50-e121-013a-14c1-0242ac110003",
    slug: "relazione-della-spedizione-e-conquista-dellisola-di-s-domingo-preceduta-dalla",
  },
  {
    uuid: "ffea8fc0-f958-0139-c6cd-0242ac110003",
    slug: "rileys-flute-melodies-third-volume",
  },
  {
    uuid: "71e8d590-1578-013a-149c-0242ac110004",
    slug: "salome-2",
  },
  {
    uuid: "11c25470-6052-013a-7da7-0242ac110003",
    slug: "samaritan-bible",
  },
  {
    uuid: "9ac2fb00-61c0-013a-7b51-0242ac110003",
    slug: "scrapbook-documenting-the-appearances-of-dancer-alice-eis-and-her-partner-bert",
  },
  {
    uuid: "6031c920-e65e-0130-287d-58d385a7bbd0",
    slug: "short-hints-towards-a-scheme-for-a-general-union-of-the-british-colonies",
  },
  {
    uuid: "bd75dee0-6351-0130-2c20-58d385a7bbd0",
    slug: "study-subject-winter",
  },
  {
    uuid: "56cc6460-c545-012f-d3e3-3c075448cc4b",
    slug: "the-siamese-cats",
  },
  {
    uuid: "19647c20-4637-013a-bcb3-0242ac110002",
    slug: "the-complete-vocal-instructor",
  },
  {
    uuid: "32678d00-6051-013a-1dbc-0242ac110003",
    slug: "the-delights-of-harmony-being-a-collection-of-psalm-and-hymn-tunes",
  },
  {
    uuid: "962a34e0-c6f8-012f-7886-3c075448cc4b",
    slug: "the-eruption-of-mount-etna-in-1766",
  },
  {
    uuid: "71126000-c54d-012f-dd8f-58d385a7bc34",
    slug: "the-life-and-public-services-of-rev-wm-washington-browne-founder-of-the-grand",
  },
  {
    uuid: "799f0b40-125a-0138-b9ff-60f81dd2b63c",
    slug: "the-pencil-of-nature",
  },
  {
    uuid: "7a660d40-0031-0130-0e00-58d385a7bc34",
    slug: "the-poor-labouring-bee",
  },
  {
    uuid: "d4c33280-13d5-013a-df93-0242ac110004",
    slug: "travels",
  },
  {
    uuid: "61876f80-5dba-0130-bfda-58d385a7b928",
    slug: "twenty-four-children-in-an-automobile",
  },
  {
    uuid: "12b62d00-ffc2-0131-d16f-58d385a7b928",
    slug: "war-memories-1861-the-war-for-the-union-1865-catalogue-of-original",
  },
  {
    uuid: "49535870-2469-013a-037a-0242ac110003",
    slug: "weg-der-liebe-2ter-theilh-a-v-herder",
  },
  {
    uuid: "853c4bd0-c717-0139-83ff-0242ac110004",
    slug: "why-reparations-reparations-is-the-battle-cry-for-the-economic-and-social",
  },
  {
    uuid: "afa9af80-1599-013a-3d50-0242ac110002",
    slug: "tsu-miyage",
  },
  {
    uuid: "b7303270-eb38-013a-9460-0242ac110003",
    slug: "le-tombeau-des-secrets",
  },
  {
    uuid: "a078fef0-d489-013a-5650-0242ac110003",
    slug: "the-heritage-institute-museum-and-library-photographs",
  },
  {
    uuid: "9986c800-3069-013b-5237-0242ac110002",
    slug: "william-godwin-manuscript-material",
  },
  {
    uuid: "9a9df790-0030-0130-9439-58d385a7bc34",
    slug: "an-elegiac-poem-on-the-death-of-that-celebrated-divine-and-eminent-servant-2",
  },
  {
    uuid: "9f6d4820-a76d-0139-7f7e-0242ac110002",
    slug: "augustus-porter-daybook",
  },
  {
    uuid: "8362ce00-0033-0130-c039-58d385a7bc34",
    slug: "banneker-microform-the-afric-american-astronomer",
  },
  {
    uuid: "3003ef30-0036-0130-c3d4-58d385a7bc34",
    slug: "by-stephen-f-austin-civil-commandant-of-the-colony-forming-on-the-colorado",
  },
  {
    uuid: "1e21b0e0-02b3-0131-0305-58d385a7b928",
    slug: "description-with-illustrations-of-nine-elegant-residences-fronting-on-central",
  },
  {
    uuid: "76ab55e0-c605-012f-d85d-58d385a7bc34",
    slug: "morozov-house-in-moscow",
  },
  {
    uuid: "9400a660-c557-012f-3be6-3c075448cc4b",
    slug: "narrative-of-william-wells-brown-microform-a-fugitive-slave-written-by-himself",
  },
  {
    uuid: "935d1200-bc65-0132-3171-58d385a7b928",
    slug: "the-new-brackley-ballad-to-the-tune-of-the-lampoon-of-the-four-tunbridge-doctors",
  },
  {
    uuid: "c78d0c50-cb29-0136-19e2-315ad36b3e36",
    slug: "the-poetical-works-of-percy-bysshe-shelley-revised-press-proof",
  },
  {
    uuid: "057f14f0-c557-012f-5144-3c075448cc4b",
    slug: "to-the-settlers-in-austins-settlement-fellow-citizens-after-an-absence",
  },
  {
    uuid: "799a8550-003e-0130-ecd0-58d385a7bc34",
    slug: "world-map-on-double-cordiform-projection",
  },
  {
    uuid: "02c420a0-218f-013b-b98a-0242ac110003",
    slug: "fredi-washington-photograph-collection",
  },
  {
    uuid: "12b42900-cb2d-0136-b9a5-063d16b29ce3",
    slug: "ettore-tragedia-improvvisata",
  },
  {
    uuid: "fbf11dc0-0034-0130-984b-58d385a7bc34",
    slug: "auction-extraordinary-unrestricted-sale-of-rowfant-publications-saturday-evening",
  },
  {
    uuid: "b1d7b400-3469-013b-ab0f-0242ac110003",
    slug: "genevieve-taggard-papers",
  },
  {
    uuid: "aaf94eb0-1d79-013b-0e2b-0242ac110002",
    slug: "the-cenci",
  },
  {
    uuid: "c8786570-1cbf-013b-1a6e-0242ac110002",
    slug: "dicks-complete-edition-of-shaksperes-works",
  },
  {
    uuid: "babadd60-1d72-013b-dd94-0242ac110002",
    slug: "liberia-2",
  },
  {
    uuid: "db6fc3b0-166b-013b-3ab8-0242ac110002",
    slug: "narrative-of-sojourner-truth",
  },
  {
    uuid: "00b6de50-c557-012f-8616-3c075448cc4b",
    slug: "a-defense-of-the-negro-race-in-america-from-the-assaults-and-charges-of-rev-j-l",
  },
  {
    uuid: "1e785870-0032-0130-da84-58d385a7bc34",
    slug: "a-semi-centenary-discourse-microform-delivered-in-the-first-african",
  },
  {
    uuid: "dc6aace0-c5e9-012f-ab82-58d385a7bc34",
    slug: "address-delivered-by-hon-frederick-douglass-at-the-third-annual-fair",
  },
  {
    uuid: "54b73260-c548-012f-e2e1-58d385a7bc34",
    slug: "africa-and-the-africans-proceedings-on-the-occasion-of-a-banquet-given",
  },
  {
    uuid: "969fd1b0-0030-0130-7fc6-58d385a7bc34",
    slug: "boston-slave-riot-and-trial-of-anthony-burns",
  },
  {
    uuid: "675ef980-0032-0130-ab5a-58d385a7bc34",
    slug: "history-of-the-bethel-literary-and-historical-association-microform-being",
  },
  {
    uuid: "a95751f0-0030-0130-7202-58d385a7bc34",
    slug: "liberia-the-americo-african-republic-microform-being-some-impressions",
  },
  {
    uuid: "1e659740-c5eb-012f-aae0-58d385a7bc34",
    slug: "poems-on-comic-serious-and-moral-subjects-by-phillis-wheatley-negro-servant",
  },
  {
    uuid: "fb075e20-c552-012f-6b29-58d385a7bc34",
    slug: "poems-on-various-subjects-religious-and-moral-by-phillis-wheatley-negro-servant",
  },
  {
    uuid: "01528f00-c54b-012f-65eb-58d385a7bc34",
    slug: "the-negro-in-his-relations-to-the-church-microfrom-historical-view",
  },
  {
    uuid: "7e891430-0036-0130-547a-58d385a7bc34",
    slug: "the-negro-problem-in-the-united-states-microform-with-special-reference-to-mr",
  },
  {
    uuid: "5583d130-0032-0130-1714-58d385a7bc34",
    slug: "the-relations-and-duties-of-free-colored-men-in-america-to-africa-a-letter",
  },
  {
    uuid: "82457780-c551-012f-8620-3c075448cc4b",
    slug: "the-three-needs-of-liberia-a-lecture-delivered-at-lower-buchanan-grand-bassa",
  },
  {
    uuid: "5b996640-c31c-0139-0bac-0242ac110004",
    slug: "arthur-alfonso-schomburg-papers",
  },
  {
    uuid: "89a68e50-e6a1-013a-ba43-0242ac110002",
    slug: "george-e-joseph-photographs",
  },
  {
    uuid: "100986c0-2173-013b-5dc3-0242ac110002",
    slug: "el-libertador",
  },
  {
    uuid: "f1335f50-a6fb-013a-ec1c-0242ac110002",
    slug: "orlando",
  },
  {
    uuid: "8eb01010-0033-0130-2189-58d385a7bc34",
    slug: "les-ftes-du-centenaire-aux-gonave-prcdes-dune-prface-de-ducas-pierre-louis",
  },
  {
    uuid: "c4aeccc0-c546-012f-08ff-3c075448cc4b",
    slug: "the-negro-in-masonic-literature",
  },
  {
    uuid: "c77ded30-c546-012f-5f7b-3c075448cc4b",
    slug: "a-black-man-will-be-the-coming-universal-king-microform-proven-by-biblical",
  },
  {
    uuid: "e138f520-0031-0130-83c4-58d385a7bc34",
    slug: "proceedings-and-addresses-on-the-occasion-of-the-inauguration-of-the-rev",
  },
  {
    uuid: "5e8411c0-003e-0130-e948-58d385a7bc34",
    slug: "sketches-of-southern-life",
  },
  {
    uuid: "7bd97d30-c54c-012f-88b4-3c075448cc4b",
    slug: "the-anti-slavery-harp-microform-a-collection-of-songs-for-anti-slavery-meetings",
  },
  {
    uuid: "f58e32e0-3202-013b-6b69-0242ac110002",
    slug: "isadora-duncan-photographs-nos-1-181",
  },
  {
    uuid: "7d10f150-e9c8-013a-8b28-0242ac110003",
    slug: "michael-cummings-african-american-art-event-ephemera-collection",
  },
  {
    uuid: "a61cb0c0-a7c1-013a-7e7d-0242ac110003",
    slug: "beginning-again",
  },
  {
    uuid: "2c3cea40-003e-0130-351b-58d385a7bc34",
    slug: "approaching-storm-microform",
  },
  {
    uuid: "fbbeb6b0-0030-0130-9f9f-58d385a7bc34",
    slug: "creole-slave-songs",
  },
  {
    uuid: "68526700-003e-0130-c345-58d385a7bc34",
    slug: "hints-on-the-care-of-children",
  },
  {
    uuid: "5866bae0-0034-0130-9296-58d385a7bc34",
    slug: "life-of-charles-bw-gordon-pastor-of-the-first-baptist-church-petersburg-virginia",
  },
  {
    uuid: "c85e67a0-c54c-012f-6171-3c075448cc4b",
    slug: "manifeste-du-roi",
  },
  {
    uuid: "6a631250-003e-0130-ca49-58d385a7bc34",
    slug: "proceedings-at-the-inauguration-of-liberia-college-at-monrovia-january-23-1862",
  },
  {
    uuid: "0d6d0e00-0031-0130-4062-58d385a7bc34",
    slug: "speech-of-hon-thos-e-miller-of-south-carolina-in-the-house-of-representatives",
  },
  {
    uuid: "97166ab0-c5ea-012f-52be-58d385a7bc34",
    slug: "the-ethiopians-place-in-history-and-his-contribution-to-the-worlds-civilization",
  },
  {
    uuid: "469b9b60-003e-0130-5fb0-58d385a7bc34",
    slug: "the-condition-elevation-emigration-and-destiny-of-the-colored-people",
  },
  {
    uuid: "86847940-0031-0130-4360-58d385a7bc34",
    slug: "the-heroism-of-the-rev-richard-allen-microform-founder-and-first-bishop",
  },
  {
    uuid: "950f7690-0031-0130-593c-58d385a7bc34",
    slug: "the-love-of-landry",
  },
  {
    uuid: "86b3a7a0-429e-013b-aa2a-0242ac110003",
    slug: "drumetul-incendiar",
  },
  {
    uuid: "c1c12c20-42a0-013b-7653-0242ac110003",
    slug: "paradisul-suspinelor",
  },
  {
    uuid: "cec6c260-433e-013b-12b2-0242ac110003",
    slug: "drexel-5871",
  },
  {
    uuid: "df8a9b00-003d-0130-488c-58d385a7bc34",
    slug: "a-short-history-of-the-african-union-meeting-and-school-house-erected",
  },
  {
    uuid: "c3c54610-0033-0130-d190-58d385a7bc34",
    slug: "a-colored-man-abroad-microform-what-he-saw-and-heard-in-the-holy-land",
  },
  {
    uuid: "ac381ee0-0032-0130-c23d-58d385a7bc34",
    slug: "an-open-letter-by-booker-t-washington-to-the-louisiana-constitutional",
  },
  {
    uuid: "f318fb80-3837-013b-2589-0242ac110002",
    slug: "black-hermans-easy-pocket-tricks-which-you-can-do-all-new-tricks-remember-black",
  },
  {
    uuid: "5e0d7890-3839-013b-6c40-0242ac110002",
    slug: "black-hermans-secrets-of-magic-mystery-legerdermain",
  },
  {
    uuid: "a5a59ab0-c54c-012f-ef6d-3c075448cc4b",
    slug: "inaugural-sermon-delivered-at-the-celebration-of-the-first-anniversary",
  },
  {
    uuid: "0d1dbab0-0033-0130-56a4-58d385a7bc34",
    slug: "la-nationalit-et-son-influence-quant-la-jouissance-lexercice-des-droits",
  },
  {
    uuid: "c6551960-0032-0130-3ee6-58d385a7bc34",
    slug: "overture-to-the-song-of-hiawatha-microform-for-full-orchestra-op-30-no-3",
  },
  {
    uuid: "d066b5a0-c5e9-012f-1cce-58d385a7bc34",
    slug: "proceedings-of-the-national-conference-of-colored-men-in-the-united-states",
  },
  {
    uuid: "01be88d0-0034-0130-498a-58d385a7bc34",
    slug: "sierra-leone-and-liberia-their-origin-work-and-destiny-a-lecture-delivered",
  },
  {
    uuid: "c39f9210-003d-0130-d573-58d385a7bc34",
    slug: "the-african-problem-and-the-method-of-its-solution-the-annual-discourse",
  },
  {
    uuid: "59a27cd0-003e-0130-752c-58d385a7bc34",
    slug: "the-african-society-and-miss-mary-kingsley",
  },
  {
    uuid: "24633440-0034-0130-9dea-58d385a7bc34",
    slug: "the-english-language-in-liberia-the-annual-address-before-the-citizens",
  },
  {
    uuid: "2f0d9f60-003e-0130-a0c5-58d385a7bc34",
    slug: "the-black-troopers-the-daring-heroism-of-the-negro-soldiers",
  },
  {
    uuid: "7584e610-003e-0130-291a-58d385a7bc34",
    slug: "the-fugitive-blacksmith-events-in-the-history-of-james-wc-pennington-pastor",
  },
  {
    uuid: "54a0b3c0-0034-0130-e312-58d385a7bc34",
    slug: "the-southern-struggle-for-pure-government-an-address-by-george-w-cable-delivered",
  },
  {
    uuid: "91150350-c557-012f-b454-3c075448cc4b",
    slug: "the-status-of-american-negro-citizenship-microform",
  },
  {
    uuid: "917d18f0-0036-0130-9597-58d385a7bc34",
    slug: "violets-and-other-tales",
  },
  {
    uuid: "ad6d8d30-ef41-013a-496e-0242ac110003",
    slug: "songs-and-piano-solos",
  },
  {
    uuid: "b99137f0-c54f-012f-158b-58d385a7bc34",
    slug: "anne-scolaire-1889-1890-microform-monsieur-o-rameau-directeur-solennits-de-fin",
  },
  {
    uuid: "fcc05a60-0030-0130-d56e-58d385a7bc34",
    slug: "in-dahomey-a-negro-musical-comedy",
  },
  {
    uuid: "4b33ce80-003e-0130-3d1b-58d385a7bc34",
    slug: "principia-of-ethnology-the-origin-of-races-and-color-with-an-archeological",
  },
  {
    uuid: "0f952d70-0034-0130-bab7-58d385a7bc34",
    slug: "the-reason-why-the-colored-american-is-not-in-the-worlds-columbian-exposition",
  },
  {
    uuid: "52462a90-003e-0130-bd20-58d385a7bc34",
    slug: "the-the-black-mans-doom-the-two-barbarous-and-cruel-decisions-of-the-united",
  },
  {
    uuid: "110d0790-49bb-013b-cb74-0242ac110003",
    slug: "leaves-of-grass",
  },
  {
    uuid: "d5786090-2238-013b-5682-0242ac110002",
    slug: "leichtes-trio-fr-zwei-violinen-und-violoncell-kchel-no-266-nachgelassenes-werk",
  },
  {
    uuid: "8bca3b00-ffd4-013a-c140-0242ac110003",
    slug: "notes-and-reflections-of-an-artist-on-japan-its-people-and-its-art-freely",
  },
  {
    uuid: "a0832c90-0150-013b-3981-0242ac110002",
    slug: "serenade-fr-zwei-violinen-alt-violoncell-contrabass",
  },
  {
    uuid: "07b45f30-94c3-0139-e59f-0242ac110003",
    slug: "the-negro-in-new-york-an-informal-social-history",
  },
  {
    uuid: "bd582690-e9c1-013a-79dd-0242ac110003",
    slug: "ionisation-nicolas-slonimsky",
  },
  {
    uuid: "5ddc1140-3cb0-0138-f5a9-09aa5a9c9533",
    slug: "octandre",
  },
  {
    uuid: "1cab03c0-3ca0-0138-9d42-07ac4ab53c49",
    slug: "sketch-for-deserts",
  },
  {
    uuid: "f803d170-3c9f-0138-74e3-69112483bbc7",
    slug: "sketches-for-deserts",
  },
  {
    uuid: "b81c5820-5884-013b-1018-0242ac110002",
    slug: "nautilus-insurance-company-slavery-era-ledgers",
  },
  {
    uuid: "2dce2080-57e3-013b-8fab-0242ac110002",
    slug: "mary-jane-godwin-manuscript-material",
  },
  {
    uuid: "21ed95d0-54bd-013b-1591-0242ac110002",
    slug: "thomas-turner-manuscript-material",
  },
  {
    uuid: "4339d620-57ec-013b-4e06-0242ac110002",
    slug: "elizabeth-inchbald-manuscript-material",
  },
  {
    uuid: "cc779d10-3069-013b-b0ef-0242ac110004",
    slug: "lives-of-the-necromancers-with-tipped-in-autograph-letter-signed-to-thomas",
  },
  {
    uuid: "6b6532b0-5df7-013b-36f8-0242ac110002",
    slug: "austin-hansen-photograph-collection",
  },
  {
    uuid: "d9abebb0-003d-0130-164f-58d385a7bc34",
    slug: "visions-of-the-dusk",
  },
  {
    uuid: "b827eb20-20c8-013b-c740-0242ac110002",
    slug: "james-gossage-photographs",
  },
  {
    uuid: "21555160-6377-013b-1b50-0242ac110003",
    slug: "schomburg-daguerreotype-collection",
  },
  {
    uuid: "19cb0ee0-36c2-0137-457d-074ece691dde",
    slug: "the-ceramic-art-of-great-britain",
  },
  {
    uuid: "95976940-044f-013b-bb3a-0242ac110003",
    slug: "rodd-family-papers",
  },
  {
    uuid: "449503e0-4756-013b-970a-0242ac110003",
    slug: "albom-uzorov-dlia-vyshivania",
  },
  {
    uuid: "9b46fdb0-6b56-013a-0822-0242ac110002",
    slug: "narrative-of-a-journey-to-the-shores-of-the-polar-sea",
  },
  {
    uuid: "50338580-6c0f-013a-6119-0242ac110002",
    slug: "narrative-of-a-second-voyage-in-search-of-a-north-west-passage",
  },
  {
    uuid: "7d801730-6be8-013a-6484-0242ac110002",
    slug: "a-peep-at-the-esquimaux",
  },
  {
    uuid: "4427c760-669d-013a-a567-0242ac110002",
    slug: "beschryving-van-oud-groenland-of-eigentlyk-van-de-zoogenaamde-straat-davis",
  },
  {
    uuid: "fb33b1a0-36a0-013b-ba6a-0242ac110002",
    slug: "a-negro-explorer-at-the-north-pole",
  },
  {
    uuid: "eed57580-369f-013b-fb09-0242ac110003",
    slug: "fighting-the-polar-ice",
  },
  {
    uuid: "89ed4110-27a8-013b-fa0e-0242ac110002",
    slug: "geschichte-der-schiffahrten-und-versuche-welche-zur-entdeckung-des-nordstlichen",
  },
  {
    uuid: "6fa54d90-312b-013b-dae0-0242ac110004",
    slug: "stuart-ostrow-papers",
  },
  {
    uuid: "151e9c10-6cc7-013a-b4a6-0242ac110003",
    slug: "the-us-grinnell-expedition-in-search-of-sir-john-franklin",
  },
  {
    uuid: "3cf47a90-6cda-013a-5c3e-0242ac110003",
    slug: "the-two-voyages-of-the-pandora-in-1875-and-1876",
  },
  {
    uuid: "3ca1f1f0-64f8-0135-9454-495168f94619",
    slug: "yeah",
  },
  {
    uuid: "75f55950-7263-013b-3624-0242ac110003",
    slug: "angela-morgan-papers",
  },
  {
    uuid: "e01f9110-e7e9-0130-ee08-58d385a7b928",
    slug: "the-art-amateur",
  },
  {
    uuid: "1f020430-ffcf-013a-9264-0242ac110003",
    slug: "die-oesterreichisch-ungarische-nordpol-expedition-1872-1874",
  },
  {
    uuid: "e5529ad0-6ce2-013a-b025-0242ac110004",
    slug: "nordpol-expedition-von-graf-wilczek-expdition-au-ple-nord-par-le-compte-wilczek",
  },
  {
    uuid: "e41324f0-01ef-013b-6a87-0242ac110002",
    slug: "narrative-of-an-attempt-to-reach-the-north-pole",
  },
  {
    uuid: "d6cace60-8bb3-0138-859c-07743cf11ef0",
    slug: "vier-ernste-gesnge-fur-klavier-allein-mit-hinzugeggem-text-von-max-reger",
  },
  {
    uuid: "54b45f40-6b29-013a-5e18-0242ac110003",
    slug: "a-voyage-towards-the-north-pole-undertaken-by-his-majestys-command-1773",
  },
  {
    uuid: "60f2b420-667d-013a-f1bd-0242ac110002",
    slug: "atlas-sive-cosmographicae-meditationes-de-fabrica-mvndi-et-fabricati-figvra",
  },
  {
    uuid: "7ec8f270-6fe2-013a-79a8-0242ac110004",
    slug: "die-sterreichisch-ungarische-nordpol-expedition-in-den-jahren-1872-1874",
  },
  {
    uuid: "9f277b00-015e-013b-4f2d-0242ac110002",
    slug: "northern-regions",
  },
  {
    uuid: "0ebffd00-75a8-013b-3911-0242ac110005",
    slug: "ten-coloured-views-taken-during-the-arctic-expedition-of-her-majestys-ships",
  },
  {
    uuid: "636ab400-0162-013b-3136-0242ac110002",
    slug: "physikalische-beobachtungen-des-capitain-lieutenant-baron-v-wrangel-wahrend",
  },
  {
    uuid: "8c910130-486e-0134-39e4-00505686a51c",
    slug: "southern-horrors-lynch-law-in-all-its-phases",
  },
  {
    uuid: "6a123b60-c605-012f-4ec9-58d385a7bc34",
    slug: "a-trve-relation-of-such-occurrences-and-accidents-of-noateas-hath-hapned",
  },
  {
    uuid: "090776b0-003e-0130-1262-58d385a7bc34",
    slug: "sinners-in-the-hands-of-an-angry-god",
  },
  {
    uuid: "8eea98f0-315b-013b-76e1-0242ac110003",
    slug: "carmelita-maracci-papers",
  },
  {
    uuid: "5d6d4930-7b25-013b-b6a5-0242ac110005",
    slug: "arithmetica-universalis",
  },
  {
    uuid: "ef388820-3929-013b-c053-0242ac110004",
    slug: "cinderella-erin",
  },
  {
    uuid: "be9e7760-669b-013a-b5a1-0242ac110002",
    slug: "gods-power-and-providence",
  },
  {
    uuid: "d2ca15d0-2708-013b-b273-0242ac110002",
    slug: "photographs-of-dancers",
  },
  {
    uuid: "76b06400-7b40-013b-2164-0242ac110003",
    slug: "student-nonviolent-coordinating-committee-collection",
  },
  {
    uuid: "63c20ba0-0200-013b-6ace-0242ac110002",
    slug: "the-keepsake-for",
  },
  {
    uuid: "ac2ddc90-8ce1-013a-7d36-0242ac110004",
    slug: "duckworth-hills-papers",
  },
  {
    uuid: "b6288460-7717-013a-1400-0242ac110004",
    slug: "kaladlit-assilialiait-grnlandske-trsnit",
  },
  {
    uuid: "d75b0000-4bd2-013b-4eb3-0242ac110002",
    slug: "circle-in-the-square-papers",
  },
  {
    uuid: "772792f0-6cd5-013a-a203-0242ac110004",
    slug: "the-open-polar-sea-a-narrative-of-a-voyage-of-discovery-towards-the-north-pole",
  },
  {
    uuid: "e2256060-7e65-013b-314f-0242ac110006",
    slug: "philosophi-naturalis-principia-mathematica-2",
  },
  {
    uuid: "255494a0-01f4-013b-f5b7-0242ac110002",
    slug: "undersgelses-reise-til-stkysten-af-gronland",
  },
  {
    uuid: "a3422820-6ccf-013a-1c2f-0242ac110002",
    slug: "voyage-dune-femme-au-spitzberg",
  },
  {
    uuid: "8cd08820-c6cc-012f-d3d0-58d385a7bc34",
    slug: "modern-furniture",
  },
  {
    uuid: "c078e190-c6c0-012f-cfb9-58d385a7bc34",
    slug: "the-flowers-of-milton",
  },
  {
    uuid: "e4317290-a594-0132-6554-58d385a7bbd0",
    slug: "charles-dickens-by-pen-and-pencil",
  },
  {
    uuid: "d20c9c60-907c-0132-2256-58d385a7b928",
    slug: "ten-girls-from-dickens",
  },
  {
    uuid: "f2377a50-0033-0130-b789-58d385a7bc34",
    slug: "charitable-institutions-in-colored-churches",
  },
  {
    uuid: "863c57e0-c551-012f-b93f-3c075448cc4b",
    slug: "thoughts-and-sentiments-on-the-evil-and-wicked-traffic-of-the-slavery",
  },
  {
    uuid: "b2b31bf0-c31b-0139-7ea3-0242ac110003",
    slug: "arthur-alfonso-schomburg-papers-additions",
  },
  {
    uuid: "be56e060-c607-012f-cab5-58d385a7bc34",
    slug: "pigments",
  },
  {
    uuid: "cebb57b0-0034-0130-820c-58d385a7bc34",
    slug: "a-mans-ransom-microform",
  },
  {
    uuid: "05a980f0-0034-0130-d188-58d385a7bc34",
    slug: "a-two-years-absence-microform-or-farewell-sermon-preached-in-the-fifth",
  },
  {
    uuid: "81cb3200-0031-0130-64ba-58d385a7bc34",
    slug: "an-appeal-to-caesar-microform-sermon-on-the-race-question-by-c-t-walker",
  },
  {
    uuid: "e98d4f70-c552-012f-2da3-58d385a7bc34",
    slug: "biennial-oration-before-the-second-bmc-of-the-grand-united-order-of-odd-fellows",
  },
  {
    uuid: "182fccb0-003e-0130-7f1e-58d385a7bc34",
    slug: "les-jumelles-or-the-twins",
  },
  {
    uuid: "0365a3b0-003e-0130-b904-58d385a7bc34",
    slug: "running-a-thousand-miles-for-freedom-or-the-escape-of-william-and-ellen-craft",
  },
  {
    uuid: "52f57920-0033-0130-170d-58d385a7bc34",
    slug: "the-race-problem-in-america",
  },
  {
    uuid: "13e6e400-c6d0-012f-5135-58d385a7bc34",
    slug: "chippendales-ornaments-and-interior-decorations",
  },
  {
    uuid: "a9243210-c6c9-012f-7d06-3c075448cc4b",
    slug: "plakat",
  },
  {
    uuid: "d2c61050-c6b7-012f-3223-58d385a7bc34",
    slug: "russk-voenny-byt",
  },
  {
    uuid: "623ea520-798b-013b-0428-0242ac110005",
    slug: "beethovens-sonaten",
  },
  {
    uuid: "e664ee80-951e-0132-77b8-58d385a7bbd0",
    slug: "characters-of-romance",
  },
  {
    uuid: "9c3c4350-0031-0130-6247-58d385a7bc34",
    slug: "the-necessities-and-advantages-of-education-considered-in-relation-to-colored",
  },
  {
    uuid: "32facd50-36f6-0137-ff9d-7d6a30d5ae5e",
    slug: "sol-jacobson-papers",
  },
  {
    uuid: "56453fc0-8634-013b-7ddc-0242ac110003",
    slug: "moorish-science-temple-of-america-photograph-collection",
  },
  {
    uuid: "1b7f3c10-6cd2-013a-be5c-0242ac110002",
    slug: "voyages-de-la-commission-scientifique-du-nord-en-scandinavie-en-laponie-au",
  },
  {
    uuid: "a4c96e30-36a3-013b-8150-0242ac110003",
    slug: "geroicheskaia-popeia",
  },
  {
    uuid: "c8ab4190-36a4-013b-977d-0242ac110003",
    slug: "geroicheski-pokhod",
  },
  {
    uuid: "b5af51d0-8616-013b-f5ae-0242ac110003",
    slug: "shores-of-the-polar-sea",
  },
  {
    uuid: "08052ad0-29af-0133-2705-60f81dd2b63c",
    slug: "the-speech-of-william-wilberforce-esq-representative-for-the-county-of-york",
  },
  {
    uuid: "9b239e10-29af-0133-7438-60f81dd2b63c",
    slug: "a-discourse-delivered-april-12-1797-at-the-request-of-and-before-the-new-york",
  },
  {
    uuid: "d2bfa700-d94f-013a-f441-0242ac110003",
    slug: "the-snowy-day",
  },
  {
    uuid: "19f6a5f0-b38b-013a-2bc0-0242ac110003",
    slug: "caricature-of-serge-dyagilev",
  },
  {
    uuid: "682680e0-c5ea-012f-8ba3-58d385a7bc34",
    slug: "every-day-new-and-wonder-by-lorenzo-delos-reyes",
  },
  {
    uuid: "0ac4b840-c6cf-012f-d042-58d385a7bc34",
    slug: "pamiatniki-drevniago-khudozhestva-v-rossi",
  },
  {
    uuid: "6cdb8460-c605-012f-04aa-58d385a7bc34",
    slug: "orden-de-ros-asanah-y-kipur-por-estillo-corriente-seguido-sin-bolver-de-una",
  },
  {
    uuid: "19ed0ab0-c609-012f-a9ca-58d385a7bc34",
    slug: "le-miroir-des-sports",
  },
  {
    uuid: "9459c460-6fca-0130-7fa1-58d385a7bbd0",
    slug: "france-maroc",
  },
  {
    uuid: "29c2d670-67a1-0132-9aa4-58d385a7b928",
    slug: "die-bhne-im-bauhaus",
  },
  {
    uuid: "e790cbd0-0031-0130-1dae-58d385a7bc34",
    slug: "a-bibliographical-checklist-of-american-negro-poetry-microform",
  },
  {
    uuid: "ce3b89e0-c5e9-012f-a38c-58d385a7bc34",
    slug: "a-discourse-delivered-on-the-occasion-of-the-death-of-mr-james-forten-sr",
  },
  {
    uuid: "ae8213d0-c542-012f-4364-3c075448cc4b",
    slug: "a-little-dreaming-microform",
  },
  {
    uuid: "c7a317f0-ee87-0131-11fd-58d385a7b928",
    slug: "a-new-map-of-africa-from-the-best-authorities",
  },
  {
    uuid: "131148e0-0033-0130-f3bb-58d385a7bc34",
    slug: "a-primer-of-facts-pertaining-to-the-early-greatness-of-the-african-race",
  },
  {
    uuid: "a72d8ec0-0033-0130-7898-58d385a7bc34",
    slug: "a-sketch-of-the-life-of-benjamin-banneker-from-notes-taken-in-1836-read-by-j",
  },
  {
    uuid: "3ee3aa00-0032-0130-3abc-58d385a7bc34",
    slug: "a-text-book-of-the-origin-and-history-etc-etc-of-the-colored-people",
  },
  {
    uuid: "34708070-0034-0130-34c8-58d385a7bc34",
    slug: "a-vindication-of-the-african-race-being-a-brief-examination-of-the-arguments",
  },
  {
    uuid: "a7eb67c0-c5e9-012f-4cb7-58d385a7bc34",
    slug: "a-voice-from-harpers-ferry-a-narrative-of-events-at-harpers-ferry-with-incidents",
  },
  {
    uuid: "efeb2f30-c6db-012f-c0ec-58d385a7bc34",
    slug: "the-cabinet-and-chair-makers-real-friend-companion-or-the-whole-system",
  },
  {
    uuid: "95874ee0-c54c-012f-1c94-3c075448cc4b",
    slug: "african-trading-microform-or-the-trials-of-william-narh-ocansey-of-addah-west",
  },
  {
    uuid: "a20962c0-c5e9-012f-517a-58d385a7bc34",
    slug: "atlantas-offering-poems",
  },
  {
    uuid: "070bc0a0-c557-012f-2c82-3c075448cc4b",
    slug: "changes-in-the-occupational-status-of-negroes-1940-1950",
  },
  {
    uuid: "6abb8c10-0034-0130-82f4-58d385a7bc34",
    slug: "cumming-wrong-colenso-right-a-reply-to-the-rev-dr-cummings-moses-right-colenso",
  },
  {
    uuid: "f769d520-0030-0130-b41a-58d385a7bc34",
    slug: "diamond-jubilee-of-the-grand-united-order-of-odd-fellows-in-america-microform",
  },
  {
    uuid: "186c6e10-0036-0130-90d9-58d385a7bc34",
    slug: "economic-cooperation-among-the-negroes-of-georgia-microform-report-of-a-social",
  },
  {
    uuid: "0baf65c0-0035-0130-a8af-58d385a7bc34",
    slug: "from-west-africa-to-palestine",
  },
  {
    uuid: "684a2190-0036-0130-2fc4-58d385a7bc34",
    slug: "idylls-of-the-bible-by-mrs-few-harper",
  },
  {
    uuid: "c244ec60-c54f-012f-728a-58d385a7bc34",
    slug: "john-brown-an-address-by-frederick-douglass-at-the-fourteenth-anniversary",
  },
  {
    uuid: "6b3b73b0-0036-0130-d72d-58d385a7bc34",
    slug: "judas-microform-drame-haitien-en-4-actes-en-prose",
  },
  {
    uuid: "167ca210-0033-0130-8eb7-58d385a7bc34",
    slug: "le-comte-de-limonade-microform-ses-concitoyens-des-parties-de-louest-et-du-sud",
  },
  {
    uuid: "f89262d0-c552-012f-97fa-58d385a7bc34",
    slug: "letters-of-phillis-wheatley-the-negro-slave-poet-of-boston",
  },
  {
    uuid: "403a4570-0033-0130-cb23-58d385a7bc34",
    slug: "life-of-charles-t-walker-the-black-spurgeon",
  },
  {
    uuid: "f3a7ec00-c553-012f-0958-3c075448cc4b",
    slug: "memoir-and-poems-of-phillis-wheatley-a-native-african-and-a-slave-also-poems",
  },
  {
    uuid: "bdc5efb0-0034-0130-4709-58d385a7bc34",
    slug: "mistakes-of-dr-w-e-b-du-bois-being-an-answer-to-dr-w-e-b-du-bois-attack-upon",
  },
  {
    uuid: "b01abfb0-c54c-012f-608e-3c075448cc4b",
    slug: "mohammedanism-and-the-negro-race",
  },
  {
    uuid: "5014eca0-0031-0130-8fa6-58d385a7bc34",
    slug: "moses-a-story-of-the-nile-by-mrs-few-harper",
  },
  {
    uuid: "db27bc80-c5e9-012f-d850-58d385a7bc34",
    slug: "narrative-of-the-life-and-adventures-of-paul-cuffe-a-pequot-indian-during",
  },
  {
    uuid: "919514d0-0030-0130-29e9-58d385a7bc34",
    slug: "philip-and-the-eunuch-or-the-instruments-and-methods-of-africas-evangelization",
  },
  {
    uuid: "4cbbf950-0033-0130-5ea7-58d385a7bc34",
    slug: "proceedings-at-the-banquet-in-honour-of-edward-wilmot-blyden-on-the-occasion",
  },
  {
    uuid: "a0f6b210-c554-012f-2cad-58d385a7bc34",
    slug: "sanitary-conditions-among-the-negroes-of-athens-georgia-microform",
  },
  {
    uuid: "32ad8af0-c6dc-012f-7291-58d385a7bc34",
    slug: "funny-folks",
  },
  {
    uuid: "8bbc58e0-b38c-013a-b9e5-0242ac110003",
    slug: "drawings-and-watercolors-of-the-jazz-scene",
  },
  {
    uuid: "0687d3b0-8ae6-0132-4aad-58d385a7b928",
    slug: "emblems-divine-and-moral",
  },
  {
    uuid: "9bcb7910-fb89-012f-a0a9-58d385a7b928",
    slug: "the-tour-of-james-monroe-president-of-the-united-states",
  },
  {
    uuid: "971df0b0-c60a-012f-3e06-58d385a7bc34",
    slug: "crime-and-criminals",
  },
  {
    uuid: "c55ab320-c606-012f-6ce8-58d385a7bc34",
    slug: "religion",
  },
  {
    uuid: "4f6ab460-4afa-0136-8ab1-7befdfda582b",
    slug: "the-african-newsletter",
  },
  {
    uuid: "f83c3d60-72cb-0138-437a-01169ef663b0",
    slug: "exceptional-black-scientists-photograph-collection",
  },
  {
    uuid: "a99011e0-c604-012f-3b02-58d385a7bc34",
    slug: "joel-e-and-amy-e-spingarn-photograph-collection",
  },
  {
    uuid: "78660fb0-003e-0130-fd6c-58d385a7bc34",
    slug: "services-of-colored-americans-in-the-wars-of-1776-and-1812",
  },
  {
    uuid: "2aad3d60-0032-0130-232f-58d385a7bc34",
    slug: "sketch-of-the-early-history-of-the-african-methodist-episcopal-zion-church",
  },
  {
    uuid: "a104df60-c550-012f-cf51-3c075448cc4b",
    slug: "slave-life-in-virginia-and-kentucky-or-fifty-years-of-slavery-in-the-southern",
  },
  {
    uuid: "4dcf1970-003e-0130-4bc9-58d385a7bc34",
    slug: "songs-of-jamaica-2",
  },
  {
    uuid: "1bb82f40-0032-0130-609c-58d385a7bc34",
    slug: "songs-of-the-soil-microform",
  },
  {
    uuid: "9f4c8740-c548-012f-a164-3c075448cc4b",
    slug: "speech-of-rev-alexander-crummell-at-the-colonization-anniversary-new-york-may",
  },
  {
    uuid: "07ee5170-0034-0130-44fb-58d385a7bc34",
    slug: "ten-years-work-for-indians-at-the-hampton-normal-and-agricultural-institute",
  },
  {
    uuid: "19840d60-0032-0130-ad23-58d385a7bc34",
    slug: "the-afro-american-in-politics-an-address-delivered-by-t-mccants-stewart",
  },
  {
    uuid: "9dece0c0-c5ea-012f-edb0-58d385a7bc34",
    slug: "the-black-man-and-the-franchise-microform-also-natives-and-liquor-in-south",
  },
  {
    uuid: "7cfe6930-003e-0130-8419-58d385a7bc34",
    slug: "the-harlem-negro",
  },
  {
    uuid: "7a9c90d0-003e-0130-2769-58d385a7bc34",
    slug: "the-negro-question-by-george-w-cable-2",
  },
  {
    uuid: "b1102360-0030-0130-e66d-58d385a7bc34",
    slug: "the-negros-origin-microform-and-is-the-negro-cursed",
  },
  {
    uuid: "1930c090-e630-0138-6348-0242ac110003",
    slug: "the-dolls-casket",
  },
  {
    uuid: "e0f7b1e0-c54c-012f-b79a-58d385a7bc34",
    slug: "the-duty-of-a-rising-christian-state-to-contribute-to-the-worlds-well-being",
  },
  {
    uuid: "09e2f150-0031-0130-330c-58d385a7bc34",
    slug: "the-exodus-address",
  },
  {
    uuid: "68f2a180-0034-0130-d691-58d385a7bc34",
    slug: "the-life-and-sufferings-of-leonard-black-a-fugitive-from-slavery",
  },
  {
    uuid: "cdbfe890-0030-0130-07e7-58d385a7bc34",
    slug: "the-life-of-the-rev-dandridge-f-davis-of-the-african-me-church-microform",
  },
  {
    uuid: "9e9d5880-c554-012f-61e8-58d385a7bc34",
    slug: "the-origin-and-purpose-of-african-colonization-being-the-annual-discourse",
  },
  {
    uuid: "e4882b90-c5e5-012f-1eed-3c075448cc4b",
    slug: "the-solution-of-problems-the-duty-and-destiny-of-man-the-annual-sermon",
  },
  {
    uuid: "efde2340-c545-012f-ff97-58d385a7bc34",
    slug: "une-cause-sans-effet-microform-comdie-en-deux-actes",
  },
  {
    uuid: "899d88e0-0036-0130-24d4-58d385a7bc34",
    slug: "walkers-appeal-in-four-articles-together-with-a-preamble-to-the-coloured",
  },
  {
    uuid: "129a10f0-61d5-013b-f7c6-0242ac110003",
    slug: "schomburg-tintype-collection",
  },
  {
    uuid: "53d5c9d0-4af0-0136-e668-0035dbcd32a6",
    slug: "christian-democracy-for-america",
  },
  {
    uuid: "35c07be0-4a32-0136-4e0c-55406fc1b976",
    slug: "life-of-george-henry",
  },
  {
    uuid: "483a6c00-ea91-013a-3e56-0242ac110003",
    slug: "milt-hinton",
  },
  {
    uuid: "9a9b5dd0-ee67-013a-9faf-0242ac110003",
    slug: "passing",
  },
  {
    uuid: "811f6bc0-4a37-0136-0a36-4766fec1131b",
    slug: "sermons",
  },
  {
    uuid: "54e0e680-4a49-0136-0097-639389c2aec6",
    slug: "social-conditions-in-an-american-city",
  },
  {
    uuid: "6b525490-ec2b-013a-7278-0242ac110003",
    slug: "the-africans-right-to-citizenship",
  },
  {
    uuid: "5747b130-4b08-0136-7a25-59d56db7845d",
    slug: "the-negro-of-the-old-south",
  },
  {
    uuid: "46ffc920-d92e-013a-8bce-0242ac110003",
    slug: "missal-box",
  },
  {
    uuid: "3ab8ad90-d94c-013a-e53f-0242ac110003",
    slug: "printing-block-for-illustration-in-bye-baby-bunting",
  },
  {
    uuid: "926bd280-d9fc-013a-2a7e-0242ac110004",
    slug: "sons-de-mlze",
  },
  {
    uuid: "7a09d4a0-ec1b-013a-866a-0242ac110003",
    slug: "john-taylor-arms",
  },
  {
    uuid: "e0c5c310-c603-012f-bd12-58d385a7bc34",
    slug: "glckliche-hand",
  },
  {
    uuid: "156e5bd0-6e80-013b-c46a-0242ac110003",
    slug: "bestimmung-des-musikalischen-zeitmasses-nach-mlzels-metronom-zweite-lieferung",
  },
  {
    uuid: "6d841dc0-f19e-013a-3621-0242ac110003",
    slug: "piney-woods-money-mama-low-down-mojo-blues",
  },
  {
    uuid: "594ad460-c6bb-012f-8f94-58d385a7bc34",
    slug: "st-petersbourg",
  },
  {
    uuid: "44b03300-eeb2-0132-697a-58d385a7b928",
    slug: "dutch-west-india-company-brazil-records",
  },
  {
    uuid: "79a50bf0-c602-012f-31b0-58d385a7bc34",
    slug: "whitmans-teaching-at-smithtown-1837-1838",
  },
  {
    uuid: "e7fcc3b0-61d4-013b-4b75-0242ac110003",
    slug: "schomburg-ambrotype-collection",
  },
  {
    uuid: "b801f6a0-0d99-0131-7e11-3c075448cc4b",
    slug: "victor-jessen-video-archive",
  },
  {
    uuid: "e4537e30-9b58-013b-7967-0242ac110004",
    slug: "the-messenger-2",
  },
  {
    uuid: "05161360-2007-013b-8783-0242ac110003",
    slug: "photographs-of-buildings-under-construction-1911-1931",
  },
  {
    uuid: "288c2160-9b49-013b-a001-0242ac110004",
    slug: "in-the-land-of-the-pharaohs",
  },
  {
    uuid: "4f5ed050-f3d5-013a-322f-0242ac110002",
    slug: "kenneth-foy-papers",
  },
  {
    uuid: "fd609f30-589b-013b-b10f-0242ac110003",
    slug: "matthus-merian-the-elder",
  },
  {
    uuid: "cdb12c00-7fed-013b-c403-0242ac110002",
    slug: "h-r-newtons-oyster-house-ledger-and-photographs",
  },
  {
    uuid: "ec3385f0-3dda-013b-da4c-0242ac110004",
    slug: "motivy-ukrainskago-ornamenta",
  },
  {
    uuid: "50ed1f60-5d32-013b-5fd0-0242ac110002",
    slug: "baron-byron-george-gordon-byron-collection-of-papers",
  },
  {
    uuid: "a24d3630-a013-013b-077e-0242ac110002",
    slug: "charles-turner-papers",
  },
  {
    uuid: "eb708c60-74b7-013b-26f4-0242ac110005",
    slug: "bim-bom-dzelen-bom",
  },
  {
    uuid: "4a60a620-7d68-013b-c081-0242ac110006",
    slug: "new-york-by-sunlight-and-gaslight",
  },
  {
    uuid: "5458edd0-74c3-013b-57d5-0242ac110003",
    slug: "sue-fuller",
  },
  {
    uuid: "33a979a0-74ba-013b-e3b2-0242ac110005",
    slug: "tanjore-paintings",
  },
  {
    uuid: "8e1406f0-088a-0138-99d3-5b13f5eaf3aa",
    slug: "trait-lmentaire-thorique-et-pratique-de-lart-de-la-danse-contenant",
  },
  {
    uuid: "ec2cbbf0-a27e-013b-a59a-0242ac110002",
    slug: "camera-club-of-new-york-records",
  },
  {
    uuid: "ccc5cf70-a418-013b-d523-0242ac110002",
    slug: "thomas-love-peacock-manuscript-material",
  },
  {
    uuid: "74f1a8e0-a3f8-013b-4a93-0242ac110002",
    slug: "claire-clairmont-manuscript-material",
  },
  {
    uuid: "8dfca040-a577-013b-1ad4-0242ac110002",
    slug: "fred-f-french-companies-records",
  },
  {
    uuid: "53cf0da0-8313-013b-4523-0242ac110006",
    slug: "nuova-esatissima-descrizione-di-tutte-le-citta-dell-europa",
  },
  {
    uuid: "91adb1f0-82e0-013b-1db0-0242ac110006",
    slug: "france-amerique",
  },
  {
    uuid: "94651050-2313-013b-09af-0242ac110003",
    slug: "lawrence-brown-scores",
  },
  {
    uuid: "55b95990-83e3-013b-fdb1-0242ac110006",
    slug: "the-pamphlet-files",
  },
  {
    uuid: "b42bfb40-c607-012f-3a80-58d385a7bc34",
    slug: "camera-work-a-photographic-quarterly",
  },
  {
    uuid: "e73ad670-8630-013b-2963-0242ac110002",
    slug: "contemporaries-gallery-records",
  },
  {
    uuid: "3ff0bad0-771b-013a-ac9b-0242ac110004",
    slug: "a-series-of-eight-sketches-in-colour-by-lieut-cresswell-of-the-voyage-of-hms",
  },
  {
    uuid: "0db55430-b0a6-013b-d09e-0242ac110003",
    slug: "james-reese-europe-collection",
  },
  {
    uuid: "6abcc880-c608-012f-264e-58d385a7bc34",
    slug: "thesavrvs-novi-testamenti-elegantissimis-iconibvs-expressvs-continens-historias",
  },
  {
    uuid: "8e4470b0-b15b-013b-fddc-0242ac110003",
    slug: "citizens-for-a-quieter-city-records",
  },
  {
    uuid: "ee726070-b223-013b-1257-0242ac110003",
    slug: "harriet-pickens-papers",
  },
  {
    uuid: "3ad08ad0-3c29-013b-6e69-0242ac110002",
    slug: "arthur-russell-papers",
  },
  {
    uuid: "c848bae0-d251-0137-aa82-000ddd26f2e1",
    slug: "london-terrace-news",
  },
  {
    uuid: "f087b8e0-6dd0-013b-b1c2-0242ac110002",
    slug: "yeichi-nimura-and-lisan-kay-nimura-papers",
  },
  {
    uuid: "2f7b0df0-c673-013b-0ab4-0242ac110003",
    slug: "miscellaneous-american-letters-and-papers-malp",
  },
  {
    uuid: "8aaa9bc0-c0ec-013b-8307-0242ac110002",
    slug: "teresa-guiccioli-manuscript-material",
  },
  {
    uuid: "3eadea30-cc01-013b-9bff-0242ac110003",
    slug: "robinson-locke-collection",
  },
  {
    uuid: "734bce60-cbea-013b-815c-0242ac110003",
    slug: "regina-resnik-papers",
  },
  {
    uuid: "2deca5d0-b61f-013b-0a1b-0242ac110004",
    slug: "william-b-osgood-field-papers",
  },
  {
    uuid: "3b2114b0-af9d-013b-0f4e-0242ac110003",
    slug: "max-beerbohm-collection-of-papers",
  },
  {
    uuid: "444b23d0-d649-013b-03e4-0242ac110002",
    slug: "prague",
  },
  {
    uuid: "e35228a0-c6b6-012f-4bcb-58d385a7bc34",
    slug: "izobrazheniia-russkikh-sviatykh",
  },
  {
    uuid: "24cc8cb0-f438-013b-8772-0242ac110004",
    slug: "benjamin-randolph-ledger",
  },
  {
    uuid: "156a9510-2412-013c-b2f5-0242ac110002",
    slug: "edward-john-trelawny-manuscript-material",
  },
  {
    uuid: "56cd8270-6b25-013a-425b-0242ac110003",
    slug: "an-account-of-several-late-voyages-discoveries-to-the-sovth-and-north",
  },
  {
    uuid: "58202780-177c-013c-2aa3-0242ac110004",
    slug: "lawrence-d-reddick-photograph-collection",
  },
  {
    uuid: "c56781f0-552b-013a-3732-0242ac110002",
    slug: "lily-yuen-papers",
  },
  {
    uuid: "96fd7e90-08b0-0133-5894-58d385a7b928",
    slug: "picture-collection-records",
  },
  {
    uuid: "da0fa250-bae1-013b-d5f6-0242ac110004",
    slug: "ten-years-of-american-opera-design-graphic",
  },
  {
    uuid: "fa339c80-6a90-013a-a8fc-0242ac110004",
    slug: "de-noordsche-weereld-vertoond-in-twee-nieuwe-aenmercklijcke-derwaerts-gedaene",
  },
  {
    uuid: "fde7e440-f41d-013b-9035-0242ac110002",
    slug: "deli-and-restaurant-matchbook-covers",
  },
  {
    uuid: "bec0b350-5e01-013b-45f5-0242ac110002",
    slug: "song-slides-illustrating-early-20th-century-popular-songs",
  },
  {
    uuid: "96812f20-a57a-013b-520d-0242ac110002",
    slug: "georgia-lloyd-papers",
  },
  {
    uuid: "a8801810-c671-013b-8f0f-0242ac110002",
    slug: "narrative-of-a-voyage-to-the-polar-sea-during-1875-6-in-hm-ships-alert",
  },
  {
    uuid: "3fb20400-e8fa-013b-d50d-0242ac110004",
    slug: "irina-baronova-papers",
  },
  {
    uuid: "23ae4bd0-ba0f-013b-475f-0242ac110004",
    slug: "sy-oliver-papers",
  },
  {
    uuid: "555d8df0-a57c-013b-5315-0242ac110002",
    slug: "dorothy-frooks-papers",
  },
  {
    uuid: "55226fc0-24cd-013c-2e35-0242ac110002",
    slug: "hilda-simms-photograph-collection",
  },
  {
    uuid: "9b3acc10-fe73-013b-b03a-0242ac110002",
    slug: "james-van-der-zee-portfolio",
  },
  {
    uuid: "8a1c2e30-c680-013b-34e8-0242ac110002",
    slug: "ziegler-polar-expedition",
  },
  {
    uuid: "ea3723f0-c609-012f-2fad-58d385a7bc34",
    slug: "zoku-koya-bunk",
  },
  {
    uuid: "e11897a0-6a5c-013a-7b86-0242ac110004",
    slug: "ausfhrliche-beschreibung-des-theils-bewohnt-theils-unbewohnt-so-genannten",
  },
  {
    uuid: "e80bf950-f71f-013b-282a-0242ac110003",
    slug: "campaign-for-world-government-records-of-the-chicago-office",
  },
  {
    uuid: "ff250460-c608-012f-0582-58d385a7bc34",
    slug: "kaitai-shinsho",
  },
  {
    uuid: "a5627de0-c6da-012f-6bcb-58d385a7bc34",
    slug: "kishi-empu",
  },
  {
    uuid: "f5048b90-eec3-0137-44da-4d1d93c795a1",
    slug: "mamie-casey-and-william-dye-smith-letters",
  },
  {
    uuid: "04bcf230-0231-013c-0dbd-0242ac110002",
    slug: "peary-arctic-expedition",
  },
  {
    uuid: "d307efd0-f416-013b-f52b-0242ac110002",
    slug: "sala-garncarz-kirschner-collection",
  },
  {
    uuid: "55ce89d0-b06d-013b-6246-0242ac110002",
    slug: "the-yellow-book",
  },
  {
    uuid: "63b5b590-1538-013c-ab6b-0242ac110002",
    slug: "william-pop-gates-photograph-collection",
  },
  {
    uuid: "d6c33ac0-f340-013b-7d60-0242ac110002",
    slug: "boys-of-england",
  },
  {
    uuid: "a870b150-4381-013b-3ecd-0242ac110003",
    slug: "cambodian-dance-photographs",
  },
  {
    uuid: "10fb76c0-3148-0137-6f54-5b593fcbc4d0",
    slug: "chamberlain-and-lyman-brown-papers",
  },
  {
    uuid: "36defe40-a577-013b-a3cd-0242ac110002",
    slug: "cleveland-perkins-family-papers",
  },
  {
    uuid: "786dd640-c9c7-0132-b013-58d385a7b928",
    slug: "costume-designs-by-adrian",
  },
  {
    uuid: "1c2e7ac0-12b6-013c-59a0-0242ac110002",
    slug: "emile-antoine-verpilleux",
  },
  {
    uuid: "5a4d1b20-c285-013b-3012-0242ac110002",
    slug: "encyclopdie-ou-dictionnaire-raisonn-des-sciences-des-arts-et-des-mtiers-2",
  },
  {
    uuid: "31fbf260-2019-013c-5372-0242ac110004",
    slug: "flowers-from-the-holy-land",
  },
  {
    uuid: "332a50f0-a718-013b-683d-0242ac110002",
    slug: "francesca-alexander-collection-of-papers",
  },
  {
    uuid: "fbc145d0-12df-013c-4e7a-0242ac110002",
    slug: "frederick-oneal-photograph-collection",
  },
  {
    uuid: "17b94b70-f298-013b-5d6b-0242ac110004",
    slug: "harry-hershfield-collection",
  },
  {
    uuid: "49b27750-1833-013c-c36d-0242ac110002",
    slug: "in-darkest-africa-or-the-quest-rescue-and-retreat-of-emin-governor-of-equatoria",
  },
  {
    uuid: "f6b35ca0-0e0f-013c-00dd-0242ac110004",
    slug: "john-keats-collection-of-papers",
  },
  {
    uuid: "a4f602f0-0886-013c-ed57-0242ac110004",
    slug: "josephine-schwarz-collection-of-dance-photographs",
  },
  {
    uuid: "68f6dd20-6b33-013a-1315-0242ac110003",
    slug: "journal-of-a-voyage-for-the-discovery-of-a-north-west-passage-from-the-atlantic",
  },
  {
    uuid: "a6683cc0-1d11-013c-b308-0242ac110004",
    slug: "khalyastre",
  },
  {
    uuid: "98e56a60-f41a-013b-fb38-0242ac110004",
    slug: "mary-lwenkopf-weiss-papers",
  },
  {
    uuid: "bfc257a0-c607-012f-8707-58d385a7bc34",
    slug: "metamorphoseon-ouidianarum-typi-aliquot",
  },
  {
    uuid: "e47fa910-e90a-013b-3940-0242ac110002",
    slug: "oscar-micheaux-photograph-collection",
  },
  {
    uuid: "51df2350-edbb-013b-97ea-0242ac110003",
    slug: "ossie-davis-and-ruby-dee-papers",
  },
  {
    uuid: "e1dd3bc0-3c53-013b-ae18-0242ac110004",
    slug: "photographic-scrapbook-2",
  },
  {
    uuid: "6ba9d590-b071-013b-43fc-0242ac110002",
    slug: "portrait-drawings-and-caricatures-showing-persons-depicted-smoking",
  },
  {
    uuid: "f5c14020-1e75-013c-b411-0242ac110002",
    slug: "sefer-ha-zikaron-shel-ha-bitan-ha-eretsyireeli-ba-taarukhah-ha-olamit",
  },
  {
    uuid: "b44ecc10-2006-013c-8cd9-0242ac110003",
    slug: "sholem-aleykhem-tsu-imigranten",
  },
  {
    uuid: "e15527d0-022e-013c-41cd-0242ac110002",
    slug: "souvenir-willem-barentsz",
  },
  {
    uuid: "06c96390-6c54-0138-2f1f-47dd6ef58168",
    slug: "suffragist",
  },
  {
    uuid: "752ed170-b554-013b-ca3c-0242ac110003",
    slug: "the-annie-proulx-papers",
  },
  {
    uuid: "e359b480-8a28-013b-608f-0242ac110003",
    slug: "the-butlers-staff-magazine",
  },
  {
    uuid: "a3de1dc0-dbc2-013b-3bb7-0242ac110002",
    slug: "the-holy-koran-of-the-moorish-science-temple-of-america",
  },
  {
    uuid: "6baeb180-8ed9-013b-b1c8-0242ac110003",
    slug: "the-book-of-khalid",
  },
  {
    uuid: "918bd240-eb6e-013b-dc76-0242ac110002",
    slug: "the-daily-worker",
  },
  {
    uuid: "78f8f070-74bd-013b-c4ed-0242ac110003",
    slug: "the-interesting-narrative-of-the-life-of-olaudah-equiano-or-gustavus-vassa-2",
  },
  {
    uuid: "30c04590-032b-0133-322d-58d385a7bbd0",
    slug: "the-town-and-country-magazine-or-universal-repository-of-knowledge-instruction",
  },
  {
    uuid: "2469d1c0-2014-0132-c4d5-58d385a7bbd0",
    slug: "thoms-official-directory-of-the-united-kingdom-of-great-britain-and-ireland",
  },
  {
    uuid: "8f02fc20-afd6-013b-68dc-0242ac110002",
    slug: "vanity",
  },
  {
    uuid: "61418150-f422-013b-04e2-0242ac110002",
    slug: "the-god-of-vengeance",
  },
  {
    uuid: "f83ad0f0-92c9-0132-b604-58d385a7bbd0",
    slug: "a-christmas-carol-in-prose",
  },
  {
    uuid: "d9416050-c679-013b-fdb4-0242ac110002",
    slug: "a-thousand-days-in-the-arctic",
  },
  {
    uuid: "3942e110-143c-013c-1ec3-0242ac110002",
    slug: "a-voyage-of-discovery-towards-the-north-pole",
  },
  {
    uuid: "e6ba1550-2002-013c-cfff-0242ac110002",
    slug: "an-epistle-to-the-hebrews",
  },
  {
    uuid: "58f42160-d646-013b-2ad9-0242ac110002",
    slug: "anna-lucasta-theater-stills-collection",
  },
  {
    uuid: "8df54240-0305-013c-7f0c-0242ac110002",
    slug: "arbaah-turim",
  },
  {
    uuid: "00aa5530-c68a-013b-920c-0242ac110002",
    slug: "at-the-pole-with-cook-and-peary",
  },
  {
    uuid: "2b2eac80-6690-013a-f404-0242ac110004",
    slug: "beschreibung-der-schiffart-des-haubtmans-martini-forbissher-auss-engelland",
  },
  {
    uuid: "956d8be0-c604-012f-801c-58d385a7bc34",
    slug: "bon-no-tsuki",
  },
  {
    uuid: "38332180-ff45-0137-2aa4-61b4c836c066",
    slug: "cabin-and-plantation-songs-as-sung-by-the-hampton-students",
  },
  {
    uuid: "eadc4870-4113-0132-22c6-58d385a7b928",
    slug: "clason-point-gardens-bronx-new-york",
  },
  {
    uuid: "cd342f30-1da3-013c-2767-0242ac110003",
    slug: "collection-of-autographs-of-all-the-signers-of-the-israeli-declaration",
  },
  {
    uuid: "453c4660-c67e-013b-af85-0242ac110002",
    slug: "collection-of-newspaper-clippings-relating-to-the-arctic-expeditions-from-oct-17",
  },
  {
    uuid: "73eaf940-0c44-013b-7e5c-0242ac110002",
    slug: "das-puch-exulis",
  },
  {
    uuid: "fc7ec670-f408-013b-c350-0242ac110002",
    slug: "der-galaganer-hon",
  },
  {
    uuid: "0b021a80-66a0-013a-af5a-0242ac110002",
    slug: "description-et-histoire-naturelle-du-groenland",
  },
  {
    uuid: "a9a70350-1ffa-013c-143e-0242ac110003",
    slug: "di-yudishe-bibliotek",
  },
  {
    uuid: "0961d360-f3f9-013b-ea37-0242ac110002",
    slug: "di-kupe",
  },
  {
    uuid: "d5576a30-c66e-013b-300c-0242ac110002",
    slug: "die-zweite-deutsche-nordpolarfahrt-in-den-jahren-1869-und-1870-unter-fhrung",
  },
  {
    uuid: "1f59f7c0-1fff-013c-731c-0242ac110002",
    slug: "dikduk-leshon-ivrit",
  },
  {
    uuid: "f0d09d30-0314-013c-ecd9-0242ac110002",
    slug: "divre-agur-ben-yakeh-el-ha-talmid-azariyah-avraham",
  },
  {
    uuid: "6c7f1f50-02e9-013c-795c-0242ac110004",
    slug: "dorothy-schiff-papers",
  },
  {
    uuid: "70595c80-950c-0132-fd2d-58d385a7b928",
    slug: "douglas-coudy-scrapbook",
  },
  {
    uuid: "0795b0d0-c606-012f-4b1e-58d385a7bc34",
    slug: "ehon-sakaegusa",
  },
  {
    uuid: "f2fccff0-c02e-013b-7cdf-0242ac110002",
    slug: "eine-frau-erlebt-die-polarnacht",
  },
  {
    uuid: "2c4890f0-201b-013c-29d1-0242ac110004",
    slug: "emunah-amen",
  },
  {
    uuid: "92f2df50-c02d-013b-5d21-0242ac110002",
    slug: "excursions-on-land-and-sea-the-worlds-wonders",
  },
  {
    uuid: "52802fe0-c67b-013b-ed58-0242ac110002",
    slug: "farthest-north",
  },
  {
    uuid: "0103a020-c605-012f-b84a-58d385a7bc34",
    slug: "gaen-ykaku-sh",
  },
  {
    uuid: "2e95e500-4a25-0136-a2d6-053901747f78",
    slug: "geschichte-der-sklaverei-in-den-vereinigten-staaten-von-amerika",
  },
  {
    uuid: "0c1c57b0-f426-013b-d229-0242ac110002",
    slug: "hagadat-ha-atsmaut",
  },
  {
    uuid: "4dd526d0-1d06-013c-d27f-0242ac110002",
    slug: "halakhah-adam-mi-yirael-le-ferushim-ba-mekomot-ha-setumim",
  },
  {
    uuid: "06f3a6a0-c606-012f-dc1b-58d385a7bc34",
    slug: "hana-gyshi",
  },
  {
    uuid: "78449700-d269-013b-e280-0242ac110002",
    slug: "harlem-riot-of-1943-reports",
  },
  {
    uuid: "f0e6a820-0320-013c-db07-0242ac110002",
    slug: "histoire-des-juifs-et-des-peuples-voisins",
  },
  {
    uuid: "0e2c5d90-b61b-013b-9a63-0242ac110003",
    slug: "historia-geogrfica-civil-y-natural-de-la-ysla-de-san-juan-bautista-de-puerto",
  },
  {
    uuid: "6b1137e0-8dd6-013b-915b-0242ac110003",
    slug: "history-of-the-cherokee-indians-and-their-legends-and-folk-lore",
  },
  {
    uuid: "ed691800-1d9e-013c-60a9-0242ac110004",
    slug: "hevrah-mishnayot-mi-bet-ha-keneset-ershte-galitsyaner-dukler-magen-avraham",
  },
  {
    uuid: "611dd7a0-f406-013b-1195-0242ac110002",
    slug: "jdischer-kinderkalender",
  },
  {
    uuid: "25761740-c606-012f-ffe2-58d385a7bc34",
    slug: "kagetsu-j",
  },
  {
    uuid: "8ea606c0-f27a-013b-e09c-0242ac110002",
    slug: "ker-xavier-roussel",
  },
  {
    uuid: "f3e0b930-c603-012f-1e59-58d385a7bc34",
    slug: "kyka-ekydai",
  },
  {
    uuid: "5fac1110-1f5a-013c-fa04-0242ac110002",
    slug: "las-excelencias-de-los-hebreos",
  },
  {
    uuid: "07533100-4a3a-0136-b319-7dd4e799fd61",
    slug: "laws-relative-to-slaves-and-the-slave-trade",
  },
  {
    uuid: "2988afe0-1cf0-013c-e428-0242ac110003",
    slug: "masekhet-healim",
  },
  {
    uuid: "71626000-12bb-013c-1a26-0242ac110002",
    slug: "melville-j-and-frances-s-herskovits-collection-realia",
  },
  {
    uuid: "732f9270-d255-013b-61ff-0242ac110002",
    slug: "men-of-hawaii",
  },
  {
    uuid: "81f10660-0ec2-013c-131a-0242ac110002",
    slug: "mifflin-wistar-gibbs-portrait-collection",
  },
  {
    uuid: "58933f20-3cf0-013b-d627-0242ac110002",
    slug: "mikhail-mordkin-photographs",
  },
  {
    uuid: "0f731ba0-1f6c-013c-abac-0242ac110004",
    slug: "mishpat-shalom",
  },
  {
    uuid: "8b33d9f0-f343-013b-9f2e-0242ac110002",
    slug: "patriotic-toasts",
  },
  {
    uuid: "612cc1e0-6620-0138-a82e-631eff4473ee",
    slug: "photographs-by-joan-roth",
  },
  {
    uuid: "031fccc0-05b0-0135-8b80-0f38c2ef1ffe",
    slug: "photographs-by-witho-worms",
  },
  {
    uuid: "b94d4540-c03e-0132-5d11-58d385a7b928",
    slug: "pictures-from-dickens-with-readings",
  },
  {
    uuid: "38e495a0-1d09-013c-9309-0242ac110003",
    slug: "pinkas-ha-gadol-de-havurah-ha-kedoshah-talmud-torah-di-kk-stavisk-shenat-609",
  },
  {
    uuid: "4540bcf0-1dab-013c-9bf4-0242ac110002",
    slug: "pinas-evrat-leem-la-reuvim-e-hakhnasat-orim-la-aniyim",
  },
  {
    uuid: "72e5c4e0-bf5a-013b-d089-0242ac110002",
    slug: "posters-2-3-4",
  },
  {
    uuid: "ab1d2780-6684-013a-daaf-0242ac110004",
    slug: "prmatvr-solis-apparitionis-in-nova-zembla-causa-vera-de-magnete-rsic-non-nulla",
  },
  {
    uuid: "a5de9e70-1f6e-013c-19ef-0242ac110004",
    slug: "r-sender-blank-un-zayn-fulgeshetste-familye",
  },
  {
    uuid: "d96c5b60-f3fb-013b-cacf-0242ac110002",
    slug: "rekvyem",
  },
  {
    uuid: "76bfebf0-6a4d-013a-6096-0242ac110004",
    slug: "relation-dv-groenland",
  },
  {
    uuid: "49130ee0-7f06-0137-6513-043141d7cbc2",
    slug: "robin-w-winks-blacks-in-canada-photograph-collection",
  },
  {
    uuid: "262e8ce0-b75d-013a-57ac-0242ac110003",
    slug: "ruth-page-collection",
  },
  {
    uuid: "b1ed1650-1cf1-013c-5a1c-0242ac110004",
    slug: "seder-tefilot-le-moadim-ovim",
  },
  {
    uuid: "6dd7df30-031b-013c-9da3-0242ac110002",
    slug: "sefer-hokhmat-ha-yad",
  },
  {
    uuid: "86051d70-031d-013c-75a1-0242ac110002",
    slug: "sefer-igeret-orhot-olam",
  },
  {
    uuid: "9a1103f0-1857-013c-ba43-0242ac110003",
    slug: "sefer-mitsvot-gadol",
  },
  {
    uuid: "ad118980-1ce5-013c-4c9a-0242ac110003",
    slug: "sefer-mitsvot-gadol-2",
  },
  {
    uuid: "f63a9100-1f67-013c-c7b9-0242ac110005",
    slug: "serkele-oder-falshn-tsavoe",
  },
  {
    uuid: "c1b22600-bae1-013b-e6aa-0242ac110002",
    slug: "sketchbook-of-monuments",
  },
  {
    uuid: "ae0bb4a0-4a2a-0136-3ed1-09d82bd345c1",
    slug: "slavery-in-alabama",
  },
  {
    uuid: "d76ba230-c66c-013b-4a73-0242ac110002",
    slug: "svenska-polar-expeditionen-r-1868-med-kronongfartyget-sofia",
  },
  {
    uuid: "1dd79cd0-0318-013c-5864-0242ac110002",
    slug: "teshuvot-sheelot",
  },
  {
    uuid: "b84aa6f0-f344-013b-a97c-0242ac110002",
    slug: "the-german-american-plot",
  },
  {
    uuid: "f8a56540-c02f-013b-2040-0242ac110002",
    slug: "the-new-north",
  },
  {
    uuid: "d63d4640-c6bd-012f-b159-58d385a7bc34",
    slug: "voyage-pittoresque-et-historique-au-brsil",
  },
  {
    uuid: "549b88f0-c62c-012f-7217-58d385a7bc34",
    slug: "friends-worth-knowing",
  },
  {
    uuid: "6bd7e890-2028-013c-a884-0242ac110003",
    slug: "mexican-folkways",
  },
  {
    uuid: "d09b22f0-07db-013c-a68e-0242ac110002",
    slug: "red-rubber",
  },
  {
    uuid: "d504d730-c668-013b-33d9-0242ac110002",
    slug: "the-forces-of-nature",
  },
  {
    uuid: "f5e1dec0-0da8-013a-6e37-0242ac110004",
    slug: "the-history-of-the-decline-and-fall-of-the-roman-empire",
  },
  {
    uuid: "fe4a9ab0-c66a-013b-00c8-0242ac110002",
    slug: "the-last-of-the-arctic-voyages",
  },
  {
    uuid: "a27283b0-c666-013b-3228-0242ac110002",
    slug: "the-last-voyage-of-capt-sir-john-ross-rn-to-the-arctic-regions",
  },
  {
    uuid: "e6ebe660-c604-012f-231f-58d385a7bc34",
    slug: "the-new-stage",
  },
  {
    uuid: "9c44dae0-5524-013a-efed-0242ac110002",
    slug: "the-oasis",
  },
  {
    uuid: "259ebad0-c665-013b-96c7-0242ac110002",
    slug: "the-private-journal-of-captain-g-f-lyon-of-h-m-s-hecla-during-the-recent-voyage",
  },
  {
    uuid: "4f1b0560-12b2-013c-f684-0242ac110002",
    slug: "the-roving-editor",
  },
  {
    uuid: "b1b95380-2011-013c-6fd4-0242ac110002",
    slug: "the-spirit-of-the-ghetto",
  },
  {
    uuid: "c5759000-1cff-013c-9d31-0242ac110002",
    slug: "toldot-yaakov-yosef",
  },
  {
    uuid: "9b99db80-1f64-013c-9c3c-0242ac110003",
    slug: "toldot-ha-teva",
  },
  {
    uuid: "9617f000-c604-012f-158d-58d385a7bc34",
    slug: "untitled-album-of-surimono",
  },
  {
    uuid: "93c5f3a0-0eda-013c-9f72-0242ac110002",
    slug: "whos-who-among-the-colored-baptists-of-the-united-states",
  },
  {
    uuid: "1497fed0-1d0f-013c-17ac-0242ac110003",
    slug: "yizkor-dem-ondeynken-zshitomirer-kdoyshim",
  },
  {
    uuid: "dff06aa0-0c41-013b-3a89-0242ac110002",
    slug: "feuerwerkbuch-von-1420",
  },
  {
    uuid: "dc448580-83c2-013b-7231-0242ac110002",
    slug: "masters-davis-collection",
  },
  {
    uuid: "0f47b840-0138-013b-46ef-0242ac110002",
    slug: "the-north-georgia-gazette",
  },
  {
    uuid: "ffba3600-771b-013a-ea00-0242ac110002",
    slug: "a-series-of-fourteen-sketches-made-during-the-voyage-up-wellington-channel",
  },
  {
    uuid: "dbf16510-f41c-013b-fea6-0242ac110002",
    slug: "autograph-letter-signed-to-capt-jer-osborne-newport-july-27-1767",
  },
  {
    uuid: "4d925b40-a58c-013b-ba6c-0242ac110003",
    slug: "baika-j",
  },
  {
    uuid: "6b96a520-c688-013b-f1f3-0242ac110002",
    slug: "capt-tyson-of-arctic-exploration",
  },
  {
    uuid: "cfac57a0-d263-013b-e11c-0242ac110002",
    slug: "centennial-memorial-of-american-independence",
  },
  {
    uuid: "6b4e13d0-a669-013b-a331-0242ac110002",
    slug: "chikud-gafu",
  },
  {
    uuid: "70d540b0-a018-013b-5a86-0242ac110003",
    slug: "chju-ryakugashiki",
  },
  {
    uuid: "56dd15c0-f815-013b-a784-0242ac110002",
    slug: "constitution-of-the-kovner-verein",
  },
  {
    uuid: "ae7b2bd0-0032-0130-0139-58d385a7bc34",
    slug: "de-orbe-novo-decades",
  },
  {
    uuid: "fd994c70-296a-0136-eed1-2da22d5da1b8",
    slug: "divers-sundry-waies-of-two-parts-in-one-to-the-number-of-fortie-uppon-one",
  },
  {
    uuid: "efa8cfb0-c835-0137-bb9d-0049ed979e07",
    slug: "drmg-dmtr-mint-ntkntes",
  },
  {
    uuid: "88c88e80-bc04-0135-f4ac-0cfa00b09987",
    slug: "elisa-ossia-una-disgrazia-lesser-donna",
  },
  {
    uuid: "2ae573f0-aa2d-013b-c3db-0242ac110002",
    slug: "enno-gyja-monogatari",
  },
  {
    uuid: "317b6640-a3ff-013b-910c-0242ac110003",
    slug: "gi-o-monogatari-emaki",
  },
  {
    uuid: "3c35e040-c742-013b-73c0-0242ac110002",
    slug: "girl-seated-by-a-window-next-to-the-el-miss-sanderson",
  },
  {
    uuid: "82947370-a974-013b-c630-0242ac110002",
    slug: "if-shashin-kagami",
  },
  {
    uuid: "849151f0-1659-0135-18b4-0bb783fe2cd8",
    slug: "katalog-vystavki-russkikh-portretov-izviestnykh-lits-xvi-xviii-viekov-ustroenno",
  },
  {
    uuid: "01d72ca0-1526-013c-e3d4-0242ac110002",
    slug: "konstanzer-weltchronik-der-antichrist-15-anzeichen-vor-dem-j-gsten-gericht",
  },
  {
    uuid: "49ba7f20-a595-013b-3dd3-0242ac110003",
    slug: "kychzan-2",
  },
  {
    uuid: "edb852e0-bba4-0137-addd-03fb31f6664e",
    slug: "la-cambiale-di-matrimonio-farsa",
  },
  {
    uuid: "20b703d0-bc31-013b-d60f-0242ac110002",
    slug: "letter-to-my-dear-sir-asking-for-thanks-to-be-conveyed-to-mrs-atkins",
  },
  {
    uuid: "e5010b70-9f62-013b-a50f-0242ac110004",
    slug: "maometto-ii-follia-sul-fior-degli-anni-atto-2o",
  },
  {
    uuid: "a9d3bb10-a006-013b-a0be-0242ac110003",
    slug: "meigetsu-j",
  },
  {
    uuid: "babcb6d0-12b4-013c-3186-0242ac110002",
    slug: "new-york-public-library-2",
  },
  {
    uuid: "d8aedcd0-aa21-013b-dce4-0242ac110002",
    slug: "nogaku-sumidagawa-emaki",
  },
  {
    uuid: "9cd7cdf0-c76c-013b-1e3d-0242ac110002",
    slug: "phantastisches-intermezzo-fr-orchester-op-18",
  },
  {
    uuid: "089e9500-1daa-013c-589d-0242ac110004",
    slug: "rachels-grab-am-bethlehem-wege-palstina",
  },
  {
    uuid: "afc1ca60-5c96-0138-4cf0-174967cace7d",
    slug: "relation-dune-conspiration-trame-par-les-ngres-dans-lsle-de-s-domingue",
  },
  {
    uuid: "71fc0920-7560-0135-d072-07f451794ebc",
    slug: "robert-e-lee-engineering-notebook",
  },
  {
    uuid: "a4953a60-a01f-013b-75ee-0242ac110004",
    slug: "shidare-yanagi",
  },
  {
    uuid: "6e3de6c0-aa1f-013b-963a-0242ac110002",
    slug: "shiohi-no-tsuto-2",
  },
  {
    uuid: "47e7e620-56f2-0136-d62e-0cb94f34cf9d",
    slug: "stances-hatiennes",
  },
  {
    uuid: "bd8d8f90-b07a-013b-7587-0242ac110002",
    slug: "sudden-appearance-of-mr-beerbohm-in-the-new-english-art-club",
  },
  {
    uuid: "368b9560-a0e2-013b-a863-0242ac110004",
    slug: "taiheiki-emaki",
  },
  {
    uuid: "e787a190-bc31-013b-81b2-0242ac110002",
    slug: "the-august-23rd-blouse",
  },
  {
    uuid: "b6444be0-12b2-013c-530a-0242ac110002",
    slug: "the-new-york-public-library-and-fifth-avenue-2",
  },
  {
    uuid: "1246b900-12ab-013c-5fe7-0242ac110002",
    slug: "the-new-york-public-library-2",
  },
  {
    uuid: "bd229ee0-003d-0130-5911-58d385a7bc34",
    slug: "the-fanatics",
  },
  {
    uuid: "18091640-87d6-0133-b635-00505686d14e",
    slug: "the-printers-handy-book-of-specimens-exhibiting-the-choicest-productions-2",
  },
  {
    uuid: "e8d9dcc0-a709-013b-b1a6-0242ac110002",
    slug: "untitled-haikai-anthology",
  },
  {
    uuid: "e578ea50-7716-013a-7e7d-0242ac110004",
    slug: "vvaerachtighe-beschryvinghe-uan-drie-seylagien-ter-werelt-noyt-soo-vreemt",
  },
  {
    uuid: "1dbdb6a0-7b3a-013b-3f73-0242ac110006",
    slug: "von-brder-rauschen-vn-was-wunders-er-getriben-hat-in-einem-closter-dar-in-er-syb",
  },
  {
    uuid: "ac634650-aa14-013b-da8b-0242ac110002",
    slug: "yashima-niko-monogatari",
  },
  {
    uuid: "af0c4c70-aa2b-013b-2eec-0242ac110002",
    slug: "zegaibo-emaki",
  },
  {
    uuid: "ee80a390-a6fc-013b-e85f-0242ac110002",
    slug: "zenz-katsugan",
  },
  {
    uuid: "526ab8a0-c11e-013b-eaba-0242ac110002",
    slug: "four-treatises-on-automata-1a-monumental-water-clock-2-a-musical-automaton-3",
  },
  {
    uuid: "ef83bc20-c603-012f-ed4f-58d385a7bc34",
    slug: "memoir-of-james-allen-hardie-inspector-general-united-states-army",
  },
  {
    uuid: "d6279b90-9a93-0132-5860-58d385a7b928",
    slug: "gouverneur-kemble-letter-book",
  },
  {
    uuid: "8350b0a0-f015-0131-88f4-58d385a7b928",
    slug: "presbiteri-johannis-sive-abissinorum-imperi-descriptio",
  },
  {
    uuid: "df6a8390-0ff6-0139-f4fa-0242ac110003",
    slug: "the-importance-and-propriety-of-a-better-system-of-musical-education-as-a-medium",
  },
  {
    uuid: "e67a51f0-cdc2-0137-bdbd-017269e073ae",
    slug: "wheelmens-reference-book-containing-biographical-sketches-of-leading-wheelmen",
  },
  {
    uuid: "06b7f250-4063-013c-c3ac-0242ac110003",
    slug: "emigrant-savings-bank-records",
  },
  {
    uuid: "55f5a440-c604-012f-ad29-58d385a7bc34",
    slug: "zang-tumb-tuuum-adrianopoli-ottobre-1912",
  },
  {
    uuid: "23741760-e4ce-0134-6533-5b48cdbc5e8b",
    slug: "manuscript-book-of-minuets",
  },
  {
    uuid: "144eed30-442d-013c-6a51-0242ac110002",
    slug: "kurt-fisher-haitian-collection",
  },
  {
    uuid: "20d29db0-2400-013c-58cb-0242ac110002",
    slug: "john-a-roebling-sons-company-brooklyn-bridge-engineers-drawings",
  },
  {
    uuid: "e80ce2d0-5099-0136-d3b7-393ae39632e1",
    slug: "the-toscanini-legacy-collection-of-sound-recordings",
  },
  {
    uuid: "2f517670-18e2-013c-e325-0242ac110003",
    slug: "instructions-on-needle-work-and-knitting",
  },
  {
    uuid: "bb14d5c0-3ebd-013c-9c79-0242ac110002",
    slug: "may-edward-chinn-collection",
  },
  {
    uuid: "ed922950-18ea-013c-c3b0-0242ac110002",
    slug: "s-j-perelman-collection-of-papers-1924-1970-bulk-1928-1951",
  },
  {
    uuid: "23412970-c608-012f-bd05-58d385a7bc34",
    slug: "stilfragen-grundlegungen-zu-einer-geschichte-der-ornamentik",
  },
  {
    uuid: "fa04c8f0-c604-012f-ed48-58d385a7bc34",
    slug: "the-african-times-and-orient-review",
  },
  {
    uuid: "0f256a50-3637-013c-582c-0242ac110003",
    slug: "the-street-speaker",
  },
  {
    uuid: "d7293aa0-232b-013c-b72f-0242ac110002",
    slug: "caterina-jarboro-photograph-collection",
  },
  {
    uuid: "cbe5a3d0-0c8a-013c-2825-0242ac110002",
    slug: "essai-sur-lducation-des-aveugles",
  },
  {
    uuid: "7e570ba0-bc30-013b-555f-0242ac110002",
    slug: "frankenstein-or-the-modern-prometheus-2",
  },
  {
    uuid: "36068200-bc3f-013b-c5ad-0242ac110002",
    slug: "frankenstein-2-3-4-5",
  },
  {
    uuid: "dca9c220-4a4c-0136-ec6a-7bf34913b659",
    slug: "le-fils-de-la-nuit",
  },
  {
    uuid: "9e3f3f30-232d-013c-1b6a-0242ac110005",
    slug: "muriel-rahn-portrait-collection",
  },
  {
    uuid: "2f0e0460-62e5-0138-6e1d-45fed8b29815",
    slug: "music-division-letter-file",
  },
  {
    uuid: "ecf19370-1912-013c-4746-0242ac110003",
    slug: "observations",
  },
  {
    uuid: "e25fd950-4044-013c-4ae3-0242ac110004",
    slug: "over-de-voortteeling-en-wonderbaerlyke-veranderingen-der-surinaamsche-insecten",
  },
  {
    uuid: "cd95fc40-cc12-013b-1c54-0242ac110002",
    slug: "arbit-blatas-original-artwork",
  },
  {
    uuid: "14af7a10-2320-013c-6244-0242ac110004",
    slug: "a-quarto-album-of-original-cutwork-valentines-and-manuscript-verses-with-fine",
  },
  {
    uuid: "29367980-c60a-012f-f4d2-58d385a7bc34",
    slug: "frances-hodgson-burnett-manuscripts",
  },
  {
    uuid: "b88cdc20-e426-013a-2533-0242ac110004",
    slug: "countdown-to-eternity",
  },
  {
    uuid: "9eed23a0-c8ac-0135-77ba-01df38f2e43c",
    slug: "japanese-dance-drawings-in-color",
  },
  {
    uuid: "157e30c0-df65-013a-5ad7-0242ac110004",
    slug: "kate-shepard",
  },
  {
    uuid: "85b32350-0d20-013c-95a0-0242ac110002",
    slug: "turf-field-and-farm",
  },
  {
    uuid: "4c672520-0e21-013c-e0c8-0242ac110002",
    slug: "an-anthology-of-mystical-turkish-poetry-prayers-anecdotes-stories-and-so",
  },
  {
    uuid: "c1c6e250-1a8a-013c-438d-0242ac110003",
    slug: "carle-vernet",
  },
  {
    uuid: "85aa85b0-1a81-013c-6795-0242ac110004",
    slug: "christoph-jamnitzer",
  },
  {
    uuid: "2f5e55b0-4687-013c-e141-0242ac110004",
    slug: "john-glenn",
  },
  {
    uuid: "3f9b7000-2345-013c-ccef-0242ac110003",
    slug: "sefer-shemot",
  },
  {
    uuid: "14ac8e10-2027-013c-64c4-0242ac110002",
    slug: "the-portrait-of-a-banker-james-stillman-1850-1918",
  },
  {
    uuid: "7d0b0590-2340-013c-6992-0242ac110002",
    slug: "transformations",
  },
  {
    uuid: "a26269d0-0896-013c-fd4e-0242ac110002",
    slug: "my-first-four-years-in-the-itineracy-of-the-african-methodist-episcopal-church",
  },
  {
    uuid: "b53008c0-087f-013c-ca0f-0242ac110002",
    slug: "souvenir-de-la-pologne-5e-recueil-de-quatre-mazurkas-pour-le-piano-forte-op-30",
  },
  {
    uuid: "f5e7d0a0-524c-0137-e850-00352631e988",
    slug: "the-negro-in-medicine-2",
  },
  {
    uuid: "bbefdfe0-49ca-013c-e237-0242ac110003",
    slug: "children",
  },
  {
    uuid: "7eb59320-19eb-013c-9cfd-0242ac110003",
    slug: "alison-saar",
  },
  {
    uuid: "1af553a0-49c9-013c-1d6a-0242ac110004",
    slug: "annual-report-of-the-american-colonization-society",
  },
  {
    uuid: "d30463a0-fa7f-0133-7c50-00505686a51c",
    slug: "the-musical-news",
  },
  {
    uuid: "030460e0-50d5-013c-0038-0242ac110003",
    slug: "storm-delarveri-photographs",
  },
  {
    uuid: "86fc1640-c609-012f-7e98-58d385a7bc34",
    slug: "chatterjees-picture-albums",
  },
  {
    uuid: "71c67970-0036-0130-c617-58d385a7bc34",
    slug: "an-oration-on-the-abolition-of-the-slave-trade",
  },
  {
    uuid: "976ef4e0-c607-012f-404c-58d385a7bc34",
    slug: "commonplace-books-collection",
  },
  {
    uuid: "1742aa90-1b71-013c-0395-0242ac110002",
    slug: "fredi-washington-papers-microform",
  },
  {
    uuid: "85cf38a0-4c33-013c-d9ff-0242ac110004",
    slug: "willcox-collection",
  },
  {
    uuid: "c57b7b80-5416-013c-b9b2-0242ac110004",
    slug: "constitution-de-la-rpublique-franaise-propose-au-peuple-franais",
  },
  {
    uuid: "ba4282b0-24c5-013c-cce4-0242ac110002",
    slug: "dakota-mace",
  },
  {
    uuid: "90eb9260-4fef-013c-fa30-0242ac110004",
    slug: "hagadah-shel-pesah",
  },
  {
    uuid: "722c42c0-4ff7-013c-b164-0242ac110003",
    slug: "matnat-betsalel-la-haverav",
  },
  {
    uuid: "fc8d9380-347a-013c-68ec-0242ac110003",
    slug: "orpheus",
  },
  {
    uuid: "35030860-c606-012f-c921-58d385a7bc34",
    slug: "petri-nonii-salaciensis-de-arte-atqve-ratione-navigandi-libri-dvo",
  },
  {
    uuid: "f1095510-4ff1-013c-cb2b-0242ac110002",
    slug: "pinkas",
  },
  {
    uuid: "16602ca0-4f1e-013c-1e2b-0242ac110005",
    slug: "scroll-of-esther",
  },
  {
    uuid: "d0be8e60-4fed-013c-e1e9-0242ac110003",
    slug: "seder-hagadah-shel-pesah-2",
  },
  {
    uuid: "097e1210-4f23-013c-f779-0242ac110006",
    slug: "seder-tefilot",
  },
  {
    uuid: "aef8c700-4f28-013c-5964-0242ac110003",
    slug: "sefer-hanhagat-ha-hayim",
  },
  {
    uuid: "deaad220-4e5f-013c-f346-0242ac110003",
    slug: "sefer-evronot",
  },
  {
    uuid: "692f3220-4ff9-013c-7f5e-0242ac110002",
    slug: "tiklal-2",
  },
  {
    uuid: "daafb3a0-c609-012f-3ad8-58d385a7bc34",
    slug: "foreign-slave-trade",
  },
  {
    uuid: "76a59f70-5671-013c-73e7-0242ac110002",
    slug: "by-the-rivers-of-babylon",
  },
  {
    uuid: "f26dbd50-566d-013c-316e-0242ac110004",
    slug: "harivansa",
  },
  {
    uuid: "b86e7b00-3e00-013c-4e06-0242ac110003",
    slug: "the-manufacturer-and-builder",
  },
  {
    uuid: "fcc37d50-bc46-013b-fa2d-0242ac110002",
    slug: "america-grand-historical-spectacle-in-four-acts-and-seventeen-scenes",
  },
  {
    uuid: "5fc70220-33d9-013c-3721-0242ac110004",
    slug: "catalogue-of-the-private-collection-of-paintings-of-w-astor",
  },
  {
    uuid: "ab61bf20-0c95-013c-c831-0242ac110002",
    slug: "cherokee-alphabet",
  },
  {
    uuid: "ccf9c8c0-bc45-013b-d029-0242ac110002",
    slug: "coreografie-per-ballabili-dopera",
  },
  {
    uuid: "d8ec7250-18dc-013c-4d86-0242ac110003",
    slug: "farewell-banquet-tendered-by-the-histadruth-ivrith-and-the-ben-yehuda-jubilee",
  },
  {
    uuid: "12798990-3474-013c-abc1-0242ac110004",
    slug: "on-the-picket-line-we-shall-not-be-moved",
  },
  {
    uuid: "f1d89d00-c5ea-012f-ef4f-58d385a7bc34",
    slug: "rckzug-der-procession-nach-beendigung-des-festes-return-of-the-procession",
  },
  {
    uuid: "e7482200-e289-0130-2441-58d385a7b928",
    slug: "literary-america-some-honest-opinions-about-our-authorial-merits-and-demerits",
  },
  {
    uuid: "4ed4faf0-c617-012f-3241-58d385a7bc34",
    slug: "from-log-cabin-to-the-pulpit-or-fifteen-years-in-slavery",
  },
  {
    uuid: "b34793c0-3a16-0138-2c2b-0df97fb125b2",
    slug: "arte-y-trabajo",
  },
  {
    uuid: "6213db40-5af3-013c-fb96-0242ac110002",
    slug: "united-states-sanitary-commission-records-condensed-historical-matter",
  },
  {
    uuid: "29af1050-c6e8-012f-b4f4-3c075448cc4b",
    slug: "ehon-tokiwagusa",
  },
  {
    uuid: "8f515380-2c77-0136-2af7-4dd36ca0376d",
    slug: "the-bell-telephone-hour-collection-of-sound-recordings",
  },
  {
    uuid: "5a9b7c30-c5ec-012f-32f8-58d385a7bc34",
    slug: "collection-of-photographs-of-new-york-city",
  },
  {
    uuid: "652dbcc0-5fb7-013c-1fc1-0242ac110004",
    slug: "the-underground-rail-road",
  },
  {
    uuid: "a949b770-4f3f-013c-c453-0242ac110003",
    slug: "thomas-jefferson-hogg-manuscript-material",
  },
  {
    uuid: "4460cf00-5fc7-013c-4ee6-0242ac110002",
    slug: "james-baldwin-papers",
  },
  {
    uuid: "a3d0f360-5bbb-013c-03dc-0242ac110002",
    slug: "narratives-of-the-sufferings-of-lewis-and-milton-clarke",
  },
  {
    uuid: "ab05b630-3626-013c-1de6-0242ac110002",
    slug: "the-sound-of-harlem",
  },
  {
    uuid: "8b37ea70-c605-012f-950b-58d385a7bc34",
    slug: "ball-of-the-fine-arts-1916-program",
  },
  {
    uuid: "48132960-2e4d-013c-fb95-0242ac110003",
    slug: "miscellaneous-personal-name-files-2-3",
  },
  {
    uuid: "eef91020-c6cb-012f-7e4c-58d385a7bc34",
    slug: "one-hundred-years-of-the-african-methodist-episcopal-zion-church-or",
  },
  {
    uuid: "bced87c0-3ba7-013c-6dcc-0242ac110002",
    slug: "souvenir-of-the-decennial-celebration-of-the-witwatersrand-old-hebrew",
  },
  {
    uuid: "355ba1b0-003e-0130-33fe-58d385a7bc34",
    slug: "verwunderlicher-anfang-und-schmhlicher-aussgang-des-unlngst-neuenstandenen-juden",
  },
  {
    uuid: "c832f550-c6f6-012f-8b2a-58d385a7bc34",
    slug: "tipy-russkikh-kolonistov-v-s-shsa",
  },
  {
    uuid: "da4780c0-c6b3-012f-b722-58d385a7bc34",
    slug: "vidy-tserkve-i-zdan-moskovskago-stavropigalnago-pervoklassnago-simonova",
  },
  {
    uuid: "b6d21c50-5fdf-013c-ebcc-0242ac110002",
    slug: "universal-negro-improvement-association-miscellaneous-collection",
  },
  {
    uuid: "7f15e4a0-951a-0137-db7c-5bf8b9d4d27f",
    slug: "harry-k-morton-family-scrapbooks-and-memorabilia",
  },
  {
    uuid: "c28b7c90-1782-013c-44f7-0242ac110004",
    slug: "gotham-book-mart-records",
  },
  {
    uuid: "52815ee0-65f9-013c-cfc7-0242ac110003",
    slug: "george-brashear-scrapbooks",
  },
  {
    uuid: "b01080e0-c602-012f-a1bf-58d385a7bc34",
    slug: "sechs-personen-suchen-einen-autor-film-novelle-von-luigi-pirandello-und-adolf",
  },
  {
    uuid: "76203ee0-03d7-013c-3f0a-0242ac110002",
    slug: "ketubbah-tehran-1913",
  },
  {
    uuid: "98920070-03ca-013c-917f-0242ac110002",
    slug: "on-the-jewish-fields-of-the-ukraina",
  },
  {
    uuid: "2e9a33f0-03d4-013c-c9b1-0242ac110002",
    slug: "seder-hagadah",
  },
  {
    uuid: "692b0c20-03da-013c-5598-0242ac110002",
    slug: "tikkunei-zohar-ladino",
  },
  {
    uuid: "0b229660-03d9-013c-d8c5-0242ac110002",
    slug: "unah-miradah-ah-los-siyelos-o-la-puertah-de-lah-astronomiah",
  },
  {
    uuid: "edadc400-2580-013c-571f-0242ac110002",
    slug: "farewell-appearance-of-sissieretta-jones-known-as-the-black-patti",
  },
  {
    uuid: "2972e6d0-9b4e-013b-dcd9-0242ac110004",
    slug: "tvero-ronch-poas-obrazy-k-zormu-vyucovni-pro-mldez",
  },
  {
    uuid: "d806cbf0-74ba-013b-8e82-0242ac110002",
    slug: "violet-holmes-collection",
  },
  {
    uuid: "8afb8a40-c605-012f-70e9-58d385a7bc34",
    slug: "biblia-2",
  },
  {
    uuid: "6da2e490-c607-012f-5ea6-58d385a7bc34",
    slug: "hortus-eystettensis-sive-diligens-et-accurata-omnium-plantarum-florum-stirpium",
  },
  {
    uuid: "c15da8e0-67a8-013c-f2bd-0242ac110003",
    slug: "peasant-art-of-subcarpathian-russia-2",
  },
  {
    uuid: "ff08a6d0-8d60-0138-16c4-355bbf7a2e33",
    slug: "kei-takeis-moving-earth-company-video-archive",
  },
  {
    uuid: "a6be39d0-0031-0130-d360-58d385a7bc34",
    slug: "african-life-and-customs",
  },
  {
    uuid: "b0828a20-66f6-013c-8f08-0242ac110003",
    slug: "vulcan-society-photograph-collection",
  },
  {
    uuid: "cc291100-84ef-0134-2860-00505686a51c",
    slug: "the-mother-jones-international-fund-for-documentary-photography",
  },
  {
    uuid: "086c27a0-c606-012f-57ad-58d385a7bc34",
    slug: "narrative-of-the-life-of-frederick-douglass-an-american-slave-2",
  },
  {
    uuid: "e5c485b0-0e1f-0134-5da2-00505686d14e",
    slug: "samuel-adams-papers",
  },
  {
    uuid: "c96b7570-c6b6-012f-177b-58d385a7bc34",
    slug: "golden-jubilee-of-the-general-association-of-colored-baptists-in-kentucky",
  },
  {
    uuid: "c664df10-c6bd-012f-1549-58d385a7bc34",
    slug: "troitskaia-lavra-i-prep-sergii-radonezhskii-albom-fotografii",
  },
  {
    uuid: "a832c6b0-c6bd-012f-3e88-58d385a7bc34",
    slug: "karikatury",
  },
  {
    uuid: "ef165f50-c6bf-012f-a8b0-58d385a7bc34",
    slug: "periszkop",
  },
  {
    uuid: "17820bf0-c6dd-012f-cb1c-58d385a7bc34",
    slug: "lands-of-the-caribbean",
  },
  {
    uuid: "b1df5880-c6e0-012f-fe35-58d385a7bc34",
    slug: "the-encyclopedia-of-the-colored-baptists-of-alabama-their-leaders-and-their-work",
  },
  {
    uuid: "f1b7dfb0-646e-013c-08b5-0242ac110002",
    slug: "united-states-sanitary-commission-records-hospital-directory-archives",
  },
  {
    uuid: "e8a7d440-c62a-012f-f4fa-58d385a7bc34",
    slug: "my-spirituals",
  },
  {
    uuid: "a5174130-c627-012f-4123-58d385a7bc34",
    slug: "expositione-in-apocalypsim-and-catena-super-iohannem",
  },
  {
    uuid: "724303e0-c6bb-012f-afbd-58d385a7bc34",
    slug: "mavo",
  },
  {
    uuid: "c1a15b20-c622-012f-e389-58d385a7bc34",
    slug: "les-soires-de-rome-suite-de-dix-planches-dessines-et-graves-par-m-robert-du-roi",
  },
  {
    uuid: "b2f36320-c6f6-012f-e224-3c075448cc4b",
    slug: "a",
  },
  {
    uuid: "f82434e0-2720-0132-8337-58d385a7bbd0",
    slug: "material-culture-collection",
  },
  {
    uuid: "eb215d10-c6c9-012f-4e4d-58d385a7bc34",
    slug: "japanese-fairy-tales",
  },
  {
    uuid: "8b3009e0-67ad-013c-3005-0242ac110002",
    slug: "united-states-sanitary-commission-records-washington-dc-archives",
  },
  {
    uuid: "94ef5080-406b-013c-fafb-0242ac110003",
    slug: "martha-hill-research-materials",
  },
  {
    uuid: "de5cb560-4e6f-0137-32a7-57b2b9bd5de0",
    slug: "blondiau-theatre-arts-collection",
  },
  {
    uuid: "5adcdf40-358e-0134-316a-00505686a51c",
    slug: "description-de-lobservatoire-astronomique-central-de-poulkova",
  },
  {
    uuid: "7e45b450-9438-0132-d60f-58d385a7b928",
    slug: "essais-de-gravre",
  },
  {
    uuid: "103e7a40-5988-013c-5f06-0242ac110002",
    slug: "harry-belafonte-photographs",
  },
  {
    uuid: "faec0fa0-27bd-0131-d953-58d385a7bbd0",
    slug: "les-arts-de-la-maison",
  },
  {
    uuid: "04f39230-c607-012f-87dc-58d385a7bc34",
    slug: "little-women-or-meg-jo-beth-and-amy-2",
  },
  {
    uuid: "9c2e3130-c607-012f-ee10-58d385a7bc34",
    slug: "manual-of-the-corporation-of-the-city-of-new-york",
  },
  {
    uuid: "0dc8d6f0-1fb5-0131-a4b0-58d385a7bbd0",
    slug: "meccano-magazine",
  },
  {
    uuid: "5fc1f890-6b77-013c-0db9-0242ac110002",
    slug: "philip-sterling-research-materials-on-bert-williams",
  },
  {
    uuid: "ba5d8790-b676-0130-acc0-58d385a7bbd0",
    slug: "roan-stallion-tamar-and-other-poems",
  },
  {
    uuid: "95016da0-c607-012f-1bd5-58d385a7bc34",
    slug: "seven-pillars-of-wisdom-a-triumph",
  },
  {
    uuid: "f390bdf0-8edd-0132-c7bc-58d385a7b928",
    slug: "twelve-original-character-studies-illustrating-a-tale-of-two-cities",
  },
  {
    uuid: "8f7491f0-67b7-0138-f217-43e17665d2c8",
    slug: "when-a-man-loves",
  },
  {
    uuid: "9a3baa50-50b1-013c-0415-0242ac110003",
    slug: "p",
  },
  {
    uuid: "5c1fb640-c604-012f-3187-58d385a7bc34",
    slug: "a-new-account-of-some-parts-of-guinea-and-the-slave-trade",
  },
  {
    uuid: "3ce9c740-38d7-0135-00a8-79508491ec78",
    slug: "international-gay-information-center-collection-photographs",
  },
  {
    uuid: "30483870-c6bb-012f-f0aa-58d385a7bc34",
    slug: "vignettes-titres-frontispieces",
  },
  {
    uuid: "e37a36a0-c618-012f-5073-58d385a7bc34",
    slug: "roll-chronicle-of-the-kings-of-england-and-the-botelers-of-sudeley-castle",
  },
  {
    uuid: "dfa9cd70-654d-013c-8901-0242ac110002",
    slug: "allied-news-letter",
  },
  {
    uuid: "bd4f3d90-e5d2-0136-9dac-6d97dc2fd4eb",
    slug: "lock-of-hair-of-ludwig-van-beethoven",
  },
  {
    uuid: "35631040-50b7-013c-3271-0242ac110004",
    slug: "memorias",
  },
  {
    uuid: "cd5372d0-69ff-013c-7f6e-0242ac110005",
    slug: "the-american-agriculturist",
  },
  {
    uuid: "e87f7b10-c607-012f-4387-58d385a7bc34",
    slug: "thirty-six-views-of-mt-fuji",
  },
  {
    uuid: "e1f70a00-654c-013c-cfae-0242ac110004",
    slug: "wine-and-liquor-retailer",
  },
  {
    uuid: "8c426d80-26c2-0130-c4b0-58d385a7b928",
    slug: "buntpapier-fabrikation-2",
  },
  {
    uuid: "2be78d30-2165-0136-9af7-04735ca18d56",
    slug: "frankenstein-2-3-4",
  },
  {
    uuid: "6c39cdb0-c605-012f-e685-58d385a7bc34",
    slug: "gaash",
  },
  {
    uuid: "d4c5b780-5f15-013c-6672-0242ac110004",
    slug: "illustrated-outdoor-news",
  },
  {
    uuid: "4b6a5f20-1f5f-013c-c1ab-0242ac110003",
    slug: "jdisches-ceremoniel-oder-beschreibung-dererjenigen-gebruche",
  },
  {
    uuid: "a996d080-c605-012f-0b76-58d385a7bc34",
    slug: "manuscript-diary-of-an-italian-journey-23-jul-1818-aug-1819",
  },
  {
    uuid: "3b2b9f70-b5b8-0130-3f2c-58d385a7bbd0",
    slug: "mosquitoes",
  },
  {
    uuid: "6d26ca70-0042-0130-7c9b-58d385a7bc34",
    slug: "qurn-2",
  },
  {
    uuid: "3cf790f0-c494-0134-1c4f-00505686a51c",
    slug: "reginald-marsh-drawings",
  },
  {
    uuid: "29b98790-c603-012f-b98f-58d385a7bc34",
    slug: "the-sun-also-rises",
  },
  {
    uuid: "268796b0-c604-012f-bba2-58d385a7bc34",
    slug: "un-hiver-paris",
  },
  {
    uuid: "a491e920-6463-013c-a051-0242ac110003",
    slug: "united-states-sanitary-commission-records-california-branch-archives",
  },
  {
    uuid: "31702e20-a17a-0135-cad5-11dffa25be1e",
    slug: "viaggio-da-venetia",
  },
  {
    uuid: "5480fe40-650d-013a-b8f7-0242ac110004",
    slug: "althea-gibson-collection",
  },
  {
    uuid: "e1553f80-0af9-0134-884d-00505686a51c",
    slug: "kratki-obzor-sostoianiia-shkol-obshchestva-iziashchnykh-iskusstv-prochitanny-g",
  },
  {
    uuid: "ff2968c0-3ea0-013c-d48b-0242ac110002",
    slug: "distinguished-guests-1958",
  },
  {
    uuid: "8c177070-0355-0135-91e2-43b1e35df735",
    slug: "dr-abdous-travels-in-america-and-commercial-directory-of-the-arabic-speaking",
  },
  {
    uuid: "34ca99f0-003e-0130-20be-58d385a7bc34",
    slug: "grass-valley-nevada-county-california",
  },
  {
    uuid: "c71d1350-2867-0133-c137-60f81dd2b63c",
    slug: "la-dcoration-moderne-dans-le-textile-60-motifs-en-couleur",
  },
  {
    uuid: "067f7e10-6ab0-013c-ac03-0242ac110004",
    slug: "luf-zun-aser",
  },
  {
    uuid: "439d35a0-6aae-013c-6680-0242ac110003",
    slug: "mapah-derekh-emet-mapa-derekh-emes-te-karta-palestiny-idorogi-vykhoda-izrailian",
  },
  {
    uuid: "ce668260-c766-0132-045a-58d385a7b928",
    slug: "sefer-tsurat-ha-arets-sphaera-mundi",
  },
  {
    uuid: "f887f2d0-0034-0130-4ac4-58d385a7bc34",
    slug: "sn-fo-the-morning-after-the-great-fire-of-may-4th-view-taken-from-the-corner",
  },
  {
    uuid: "238743d0-0032-0130-9b8a-58d385a7bc34",
    slug: "the-new-dancing-as-it-should-be-for-the-ball-room-the-class-room-and-the-stage",
  },
  {
    uuid: "1cb6aaa0-3ebc-013c-144d-0242ac110003",
    slug: "three-emily-dickinson-pieces-for-string-quartet",
  },
  {
    uuid: "b697e0f0-61e0-013a-bcee-0242ac110003",
    slug: "tsuki-hyakushi",
  },
  {
    uuid: "bd84a640-2342-013c-7734-0242ac110002",
    slug: "untitled",
  },
  {
    uuid: "268bf890-06c2-013b-2c54-0242ac110002",
    slug: "zeh-sefer-zera-yitshak",
  },
  {
    uuid: "2423a4f0-c605-012f-bdc2-58d385a7bc34",
    slug: "interior-decoration-its-principles-and-practice",
  },
  {
    uuid: "bce312b0-c557-012f-b10a-58d385a7bc34",
    slug: "dom-jose",
  },
  {
    uuid: "5c8ad460-003e-0130-ab80-58d385a7bc34",
    slug: "our-origin-dangers-and-duties-the-annual-address-before-the-mayor-and-common",
  },
  {
    uuid: "3a3906e0-c76b-0137-0934-71fc2866ba92",
    slug: "the-abbey-row",
  },
  {
    uuid: "dc259e20-405b-013c-fbc7-0242ac110003",
    slug: "richard-saunders-photographs",
  },
  {
    uuid: "508118a0-1e73-013c-f009-0242ac110003",
    slug: "otsar-ha-shemot",
  },
  {
    uuid: "fd06ea00-8d61-013c-3a03-0242ac110002",
    slug: "modaah-o-mevaseret-okhmah",
  },
  {
    uuid: "d10cbad0-8d62-013c-9392-0242ac110002",
    slug: "ha-sinim",
  },
  {
    uuid: "9cf81c20-5971-013c-ae1b-0242ac110005",
    slug: "l-ci-darem-la-mano-vari-pour-le-piano-forte-oeuvre-2",
  },
  {
    uuid: "6aea0a50-8dfe-013c-7e41-0242ac110002",
    slug: "scene-from-the-yiddish-operetta-eretz-yisrael",
  },
  {
    uuid: "5c336a40-3ddb-013c-f9f1-0242ac110002",
    slug: "sefer-milhemet-ha-magen-hananyah-haviv-azulai-ve-sifro-magen-ha-dat",
  },
  {
    uuid: "05baef30-c6c0-012f-5654-58d385a7bc34",
    slug: "plantation-sketches",
  },
  {
    uuid: "e909f490-8d5a-013c-88e5-0242ac110003",
    slug: "advertising-cards",
  },
  {
    uuid: "d30d6b70-ee18-0138-0e5e-0242ac110005",
    slug: "richard-watson-gilder-papers",
  },
  {
    uuid: "7d0f0d80-1008-0130-1bd4-58d385a7b928",
    slug: "social",
  },
  {
    uuid: "8d47f450-8e1e-013c-f4e3-0242ac110003",
    slug: "geden-eyn-mol-far-ale-mol-shpayen-afn-dil-iz-mies-un-shedlikh-u-dos-ni",
  },
  {
    uuid: "25e8a8e0-8d55-013c-b5ac-0242ac110004",
    slug: "sholem-aleichem-cabinet-card-portrait",
  },
  {
    uuid: "ab197320-8d57-013c-e615-0242ac110003",
    slug: "sholem-aleichem-cabinet-card-portrait-2",
  },
  {
    uuid: "c8482a50-8e18-013c-e0bf-0242ac110002",
    slug: "tsum-gezun-tsu-lange-yorn-in-der-mames-milkh",
  },
  {
    uuid: "1a5e1d50-8e20-013c-3d40-0242ac110002",
    slug: "yerid-ha-mizra-be-yom-ha-shelishi-19536-ba-shaah-9-ba-erev-ba-amfitearon",
  },
  {
    uuid: "c9a53d20-8302-013b-659a-0242ac110002",
    slug: "leigh-hunt-manuscript-material",
  },
  {
    uuid: "7cfc8230-c6f6-012f-de09-58d385a7bc34",
    slug: "travels-in-ethiopia-above-the-second-cataract-of-the-nile",
  },
  {
    uuid: "96dabc60-c5ea-012f-5fea-58d385a7bc34",
    slug: "an-emblem-of-america",
  },
  {
    uuid: "0a2f2530-0035-0130-2358-58d385a7bc34",
    slug: "pershings-crusaders-march-militaire",
  },
  {
    uuid: "fd20c480-06be-013b-b116-0242ac110002",
    slug: "report-on-the-work-of-the-commission-sent-out-by-the-zionist-organization",
  },
  {
    uuid: "10b2e760-c61e-012f-1c2f-58d385a7bc34",
    slug: "zdrj",
  },
  {
    uuid: "1b79f970-61e1-013a-caca-0242ac110003",
    slug: "obstoiatelnoe-opisanie-torzhestvennykh-poriadkov-blagopoluchnago-vshestviia-v",
  },
  {
    uuid: "6b064d00-c6b8-012f-57b7-58d385a7bc34",
    slug: "belomorsko-baltiiskii-kanal-imeni-stalina",
  },
  {
    uuid: "aab961c0-c60a-012f-9c90-58d385a7bc34",
    slug: "national-lyrics",
  },
  {
    uuid: "1aa226e0-c605-012f-80a5-58d385a7bc34",
    slug: "the-repertory-of-arts-manufactures-and-agriculture",
  },
  {
    uuid: "681c1dd0-c637-012f-41ef-58d385a7bc34",
    slug: "collection-of-photographs-taken-by-daniel-b-austin-and-his-associate-adam-dove",
  },
  {
    uuid: "ae264890-c542-012f-cc9a-3c075448cc4b",
    slug: "emma-hamilton-as-bacchante",
  },
  {
    uuid: "cb258000-3bad-013c-c2da-0242ac110003",
    slug: "sefer-ahavat-ha-kadmonim-sidur-tefilot-mi-kol-ha-shanah-minhag-be-ha-kenes-shel",
  },
  {
    uuid: "78ef0b70-8632-013c-b094-0242ac110003",
    slug: "abraham-yates-jr-papers",
  },
  {
    uuid: "506d2910-c607-012f-4469-58d385a7bc34",
    slug: "the-prize",
  },
  {
    uuid: "b00d1e60-efdb-0134-4a9d-04bf078a3f88",
    slug: "elaine-de-kooning-memorial-portfolio",
  },
  {
    uuid: "40d439f0-dca8-0132-d0e3-58d385a7bbd0",
    slug: "staff-magazine",
  },
  {
    uuid: "caf34e80-53f9-0137-abe2-07b5f4d020c4",
    slug: "flournoy-miller-collection",
  },
  {
    uuid: "387ea600-c607-012f-bf7b-58d385a7bc34",
    slug: "the-sports-of-negro-children",
  },
  {
    uuid: "dc807c90-c603-012f-9eeb-58d385a7bc34",
    slug: "parliamentary-chess-match-by-cable",
  },
  {
    uuid: "23607c30-0715-013c-7916-0242ac110002",
    slug: "giacomo-puccini-correspondence-to-arturo-toscanini-1894-1924",
  },
  {
    uuid: "69e9a4a0-eed5-0133-298e-00505686a51c",
    slug: "the-dan-wagoner-video-archive",
  },
  {
    uuid: "a7229610-553f-0136-e8d7-0faadfe91d71",
    slug: "la-conquista-del-peru-llamada-la-nueua-castilla",
  },
  {
    uuid: "206825c0-2859-0133-57e3-60f81dd2b63c",
    slug: "jamaica-as-it-was-as-it-is-and-as-it-may-be-comprising-interesting-topics",
  },
  {
    uuid: "fc6db520-c604-012f-7a8a-58d385a7bc34",
    slug: "the-pennsylvania-journal-or-weekly-advertiser",
  },
  {
    uuid: "c8b68240-8497-0137-793b-6fbe63a993d2",
    slug: "izviestia-imperatorskago-russkago-geograficheskago-obshchestva",
  },
  {
    uuid: "170d1640-e62a-0138-9156-0242ac110003",
    slug: "a-grammatical-institute-of-the-english-language",
  },
  {
    uuid: "094d5040-0031-0130-df10-58d385a7bc34",
    slug: "willimantic-conn-1882-from-blake-mountain",
  },
  {
    uuid: "94cffec0-a1f3-0133-7962-00505686d14e",
    slug: "bruce-bisenz-flamenco-photographs",
  },
  {
    uuid: "f30708e0-c6d7-012f-b472-3c075448cc4b",
    slug: "the-negro-in-business",
  },
  {
    uuid: "7144d3c0-c60a-012f-b893-58d385a7bc34",
    slug: "collection-of-engravings-from-ancient-vases",
  },
  {
    uuid: "098d1ef0-c605-012f-fb64-58d385a7bc34",
    slug: "queen-mab-by-percy-bysshe-shelley-1821-edition-london",
  },
  {
    uuid: "4a279a30-c609-012f-c7ac-58d385a7bc34",
    slug: "histoire-naturelle-des-mammiferes-avec-des-figures-originales-coloriees",
  },
  {
    uuid: "cbcd9a00-9c67-013c-0d19-0242ac110002",
    slug: "charlotte-bront-papers-microform",
  },
  {
    uuid: "f7404ac0-c608-012f-d7f0-58d385a7bc34",
    slug: "photographs-of-hackley-school-and-the-hudson-valley",
  },
  {
    uuid: "5f228280-509b-0136-5468-0990b0282c52",
    slug: "henry-sylvern-collection-of-noncommercial-recordings1941-1958",
  },
  {
    uuid: "1b71dbe0-9c6f-013c-6ec6-0242ac110003",
    slug: "patrick-bront-papers-microform",
  },
  {
    uuid: "40084530-c6ca-012f-3561-58d385a7bc34",
    slug: "the-single-tax",
  },
  {
    uuid: "6d3fc9d0-c604-012f-f0e3-58d385a7bc34",
    slug: "recopilacion-delas-cartas-qve-fveron-embiadas-de-las-indias-isles-del",
  },
  {
    uuid: "0c73c6d0-c62b-012f-f421-58d385a7bc34",
    slug: "album-de-la-construction-de-la-statue-de-la-libert",
  },
  {
    uuid: "0a910f80-b662-0139-fed2-0242ac110005",
    slug: "straus-family-papers",
  },
  {
    uuid: "8d0cd9c0-a182-0135-2623-4347b8fc8734",
    slug: "viaggio-di-terra-santa-con-sve-stationi-e-misterii-del-m-r-p-frat-antonio-medina",
  },
  {
    uuid: "e3d27a10-9c75-013c-a73a-0242ac110002",
    slug: "emily-bront-papers-microform",
  },
  {
    uuid: "feb05800-c609-012f-c09b-58d385a7bc34",
    slug: "mitteilungen-der-anthropologischen-gesellschaft-in-wien",
  },
  {
    uuid: "0f52f0c0-5639-013c-0f3a-0242ac110003",
    slug: "hadassah-papers",
  },
  {
    uuid: "875f19d0-c605-012f-96bc-58d385a7bc34",
    slug: "a-journal-of-the-shipwreck-and-sufferings-of-daniel-foss",
  },
  {
    uuid: "e20af1d0-81b2-0133-ab45-00505686a51c",
    slug: "doris-chase-dance-series-video-archive",
  },
  {
    uuid: "9dfd2210-1b62-013c-70ec-0242ac110002",
    slug: "american-negro-ballet-company-scrapbook",
  },
  {
    uuid: "3f5fd2e0-7510-0133-b505-00505686a51c",
    slug: "description-de-lunivers-contenant-les-differents-systmes-di-monde-les-cartes",
  },
  {
    uuid: "101c1d50-74bc-013b-083b-0242ac110005",
    slug: "sarah-bernhardts-farewell-american-tour-poster-circa-1905",
  },
  {
    uuid: "f21482b0-546f-0135-22a1-021a09a7f390",
    slug: "vue-extrieure-de-leglise-de-notre-dame-de-chartres",
  },
  {
    uuid: "46ad2ae0-c5fe-012f-66d0-58d385a7bc34",
    slug: "ichtylogie-ou-histoire-naturelle",
  },
  {
    uuid: "b7385240-81bf-0134-e5ff-00505686a51c",
    slug: "corona-delle-nobili-et-virtvose-donne",
  },
  {
    uuid: "72425870-bd47-0133-eee5-00505686d14e",
    slug: "rappresentazione-di-dafne-favola-pastorale",
  },
  {
    uuid: "33d97960-602a-0136-2dbd-21f522645cb7",
    slug: "glenn-carrington-photograph-collection",
  },
  {
    uuid: "d3158da0-4380-0137-4742-65393e1b8462",
    slug: "the-world",
  },
  {
    uuid: "a083be30-72bf-013c-f5bb-0242ac110002",
    slug: "collection-of-property-maps-of-parts-of-westchester-county-ny-covering-mostly",
  },
  {
    uuid: "10d21340-1cf0-0133-1d06-58d385a7b928",
    slug: "chelsea-fire-club-record-book",
  },
  {
    uuid: "f1e25d00-c547-012f-0725-3c075448cc4b",
    slug: "miniature-portrait-of-william-godwin-copy-after-j-w-chandler",
  },
  {
    uuid: "e6de27b0-c6bd-012f-afaa-58d385a7bc34",
    slug: "album-of-photographs-depicting-the-construction-of-the-broadway-line-new-york",
  },
  {
    uuid: "28d187d0-c60b-012f-b4df-58d385a7bc34",
    slug: "saint-domingue-a-la-veille-de-la-revolution-souvenirs-du-baron-de-wimpffen",
  },
  {
    uuid: "f6b049c0-b3a3-013a-9c45-0242ac110003",
    slug: "magasin-pittoresque",
  },
  {
    uuid: "fcf8dbc0-ffc1-0131-b992-58d385a7b928",
    slug: "family-photo-album-1911",
  },
  {
    uuid: "cacb3650-0604-013b-b9f5-0242ac110002",
    slug: "maa-be-arav",
  },
  {
    uuid: "c358b8f0-abb9-0139-0cd2-0242ac110002",
    slug: "limn-choreography-2",
  },
  {
    uuid: "48f10d60-c617-012f-d644-58d385a7bc34",
    slug: "relation-dun-voyage-fait-en-1695-1696-1697-aux-cotes-dafrique-detroit",
  },
  {
    uuid: "75e72a40-c6ce-012f-d84d-58d385a7bc34",
    slug: "wilberforce-university-annual",
  },
  {
    uuid: "d16345b0-7275-013b-a985-0242ac110003",
    slug: "the-vanguard",
  },
  {
    uuid: "adf755d0-c61a-012f-0fbf-58d385a7bc34",
    slug: "history-of-the-louisiana-purchase-exposition",
  },
  {
    uuid: "fa7de550-9c60-013c-8c19-0242ac110003",
    slug: "die-muskete",
  },
  {
    uuid: "126b9bd0-a6a6-0133-d9b5-00505686a51c",
    slug: "minutes-of-the-commissioners-of-the-alms-house-and-bridewell",
  },
  {
    uuid: "e020e560-c62d-012f-a0f9-58d385a7bc34",
    slug: "walt-whitman-papers-1854-1892",
  },
  {
    uuid: "a7882a90-c6e0-012f-84ed-58d385a7bc34",
    slug: "dostoviernye-portrety-moskovskikh-gosudarei-ivana-iii-vasiliia-ivanovna-i-ivana",
  },
  {
    uuid: "2b64d3c0-68e1-0130-e62b-58d385a7b928",
    slug: "miscellaneous-personal-name-files-2-3-4-5-6",
  },
  {
    uuid: "9fd2c3f0-c604-012f-731f-58d385a7bc34",
    slug: "etiquette-in-society-in-business-in-politics-and-at-home",
  },
  {
    uuid: "28382fe0-c603-012f-0b5b-58d385a7bc34",
    slug: "the-citizen-and-strangers-pictorial-and-business-directory-for-the-city",
  },
  {
    uuid: "3de1cf00-c603-012f-8fba-58d385a7bc34",
    slug: "the-history-civil-and-commercial-of-the-british-colonies-in-the-west-indies",
  },
  {
    uuid: "c4276430-c533-012f-09e7-58d385a7bc34",
    slug: "dilucidae-simplicum-medicamentorum",
  },
  {
    uuid: "0d05d680-c6be-012f-f097-58d385a7bc34",
    slug: "shchan-no-bken",
  },
  {
    uuid: "d97c1450-c607-012f-05a6-58d385a7bc34",
    slug: "trial-of-john-c-colt-for-the-murder-of-samuel-adams",
  },
  {
    uuid: "22bfeee0-e81f-0135-a140-6da3b0d1ea54",
    slug: "katherine-handy-lewis-photograph-collection",
  },
  {
    uuid: "148853b0-34ee-0131-6863-58d385a7bbd0",
    slug: "il-petrarca",
  },
  {
    uuid: "4ac26750-c603-012f-14bc-58d385a7bc34",
    slug: "wade-genealogy-miscellaneous-notes-and-letters",
  },
  {
    uuid: "8f1c2f60-c6f6-012f-fc59-58d385a7bc34",
    slug: "manuel-gomtrique-du-tapissier-lusage-des-tapissiers",
  },
  {
    uuid: "6c4a0ff0-27d0-0132-251a-58d385a7bbd0",
    slug: "le-dieu-et-les-nayades-du-fleuve-st-louis-a-don-bernard-de-galvez-colonel",
  },
  {
    uuid: "82f31c80-0036-0130-2fac-58d385a7bc34",
    slug: "the-monument-to-de-kalb",
  },
  {
    uuid: "80fa1460-c52f-012f-be77-58d385a7bc34",
    slug: "drugstore-photographs-or-a-trip-along-the-yangtze-river-1999-by-dylan-stone",
  },
  {
    uuid: "b53bc8a0-c622-012f-befe-58d385a7bc34",
    slug: "le-paradis-perdu",
  },
  {
    uuid: "64835280-7cef-013c-2e49-0242ac110003",
    slug: "the-new-york-herald-2-3",
  },
  {
    uuid: "80fef4d0-c609-012f-6b27-58d385a7bc34",
    slug: "the-four-continents",
  },
  {
    uuid: "daca2410-8620-013c-b0fa-0242ac110002",
    slug: "ha-tsofeh-ba-arets-ha-adashah",
  },
  {
    uuid: "5c8add00-4bfa-013b-7537-0242ac110003",
    slug: "litsevaia-rukopisnaia-kniga",
  },
  {
    uuid: "e6405660-cdf5-0138-6005-1db9f733aae3",
    slug: "comfort-stations-in-new-york-city",
  },
  {
    uuid: "f7cf5f40-43e1-0139-1750-0242ac110003",
    slug: "the-personal-history-of-david-copperfield",
  },
  {
    uuid: "01b87f90-597f-013c-408b-0242ac110003",
    slug: "mary-wollstonecraft-shelley-manuscript-material",
  },
  {
    uuid: "11d35a40-9c60-013c-548a-0242ac110003",
    slug: "emily-bront-papers",
  },
  {
    uuid: "c77eb710-c606-012f-1c22-58d385a7bc34",
    slug: "cosmographia",
  },
  {
    uuid: "44317b30-2f3d-0138-6fbc-73338c70e885",
    slug: "lilliput",
  },
  {
    uuid: "28c768c0-98c5-0131-d23b-58d385a7bbd0",
    slug: "fragments-of-the-skull-of-percy-bysshe-shelley",
  },
  {
    uuid: "2a44ac00-c554-012f-b66d-3c075448cc4b",
    slug: "iola-leroy",
  },
  {
    uuid: "c8b23be0-c61a-012f-d2e4-58d385a7bc34",
    slug: "travels-in-the-timannee-kooranko-and-soolima-countries-in-western-africa",
  },
  {
    uuid: "df658540-c603-012f-a33d-58d385a7bc34",
    slug: "an-abridged-specimen-of-printing-types-made-at-bruces-new-york-type-foundry",
  },
  {
    uuid: "6cb9a090-c622-012f-8624-58d385a7bc34",
    slug: "le-livre-de-lecclsiaste-le-cantique-de-roy-salomon",
  },
  {
    uuid: "0cda8a40-0032-0130-2a36-58d385a7bc34",
    slug: "letter-from-chiang-kai-shek-to-adolf-hitler-in-chinese-with-translation",
  },
  {
    uuid: "9d7c5240-2a14-0131-988d-58d385a7bbd0",
    slug: "jewish-cookbooks",
  },
  {
    uuid: "f4b47b70-c6ce-012f-6143-58d385a7bc34",
    slug: "keij-gaen",
  },
  {
    uuid: "623eb140-c61d-012f-a39d-58d385a7bc34",
    slug: "nov-esk-divadlo",
  },
  {
    uuid: "c8b0d9d0-5fb8-013c-cb78-0242ac110003",
    slug: "the-underground-rail-road-2",
  },
  {
    uuid: "b6283860-d065-0130-0948-58d385a7b928",
    slug: "new-york-pro-musica-records",
  },
  {
    uuid: "863d6120-c616-012f-c953-58d385a7bc34",
    slug: "tsarskiia-palaty-v-imperatorskom-zimnem-dvortsie",
  },
  {
    uuid: "d743c0f0-8c9c-013c-e6eb-0242ac110003",
    slug: "the-malcolm-x-collection-photographs",
  },
  {
    uuid: "fbc1c250-a127-0139-6072-0242ac110004",
    slug: "william-makepeace-thackeray-collection-of-papers",
  },
  {
    uuid: "4fe51030-c647-012f-3e31-58d385a7bc34",
    slug: "souvenir-of-the-n-american-indians",
  },
  {
    uuid: "9883be40-0042-0130-3519-58d385a7bc34",
    slug: "the-zoology-of-the-voyage-of-hms-samarang",
  },
  {
    uuid: "5fc5e3d0-c604-012f-30d3-58d385a7bc34",
    slug: "proposals-for-the-speedy-settlement-of-the-waste-and-unappropriated-lands",
  },
  {
    uuid: "2dd1fb10-003e-0130-b878-58d385a7bc34",
    slug: "robert-southey-autograph-letter-signed-to-edith-southey-6-october-1801",
  },
  {
    uuid: "4cbe99b0-c629-012f-8632-58d385a7bc34",
    slug: "cabinet-du-petit-naturaliste-par-mad-d",
  },
  {
    uuid: "1ceeea40-b7b7-013c-295a-0242ac110002",
    slug: "jack-huckaback-the-scapegrace-raven",
  },
  {
    uuid: "2e08c020-0036-0130-2011-58d385a7bc34",
    slug: "view-of-new-orleans-taken-from-the-lower-cotton-press",
  },
  {
    uuid: "835d2f30-c603-012f-3370-58d385a7bc34",
    slug: "bickerstaffs-boston-almanac-for-the-year-of-our-redemption-1782",
  },
  {
    uuid: "ac42ae40-ee87-0131-6c15-58d385a7b928",
    slug: "particular-map-of-the-western-coast-of-africa-from-cape-blanco-to-cape-de-verga",
  },
  {
    uuid: "05ff8590-c628-012f-6dc9-58d385a7bc34",
    slug: "prophetae-minores",
  },
  {
    uuid: "996560d0-c605-012f-167c-58d385a7bc34",
    slug: "the-english-housekeeper-or-manual-of-domestic-management",
  },
  {
    uuid: "bd772e60-3eb1-013c-d025-0242ac110004",
    slug: "photographs-of-malcolm-x",
  },
  {
    uuid: "24367d10-c6b9-012f-76b8-58d385a7bc34",
    slug: "moths-and-butterflies-of-the-united-states-east-of-the-rocky-mountains-with-over",
  },
  {
    uuid: "d18085f0-25c6-0134-e544-00505686a51c",
    slug: "new-york-city-court-of-aldermen-records",
  },
  {
    uuid: "b5a8c1a0-21a9-0137-311f-6d955b683abe",
    slug: "el-sitio-de-saragoza",
  },
  {
    uuid: "f8cc3120-0032-0130-903b-58d385a7bc34",
    slug: "poesias-completas-de-placido-gabriel-de-la-concepcin-valds",
  },
  {
    uuid: "0b4eb800-a8d6-013c-6ddb-0242ac110006",
    slug: "james-baldwin-photograph-collection",
  },
  {
    uuid: "f661f490-c608-012f-4585-58d385a7bc34",
    slug: "lands-of-the-slave-and-the-free-or-cuba-the-united-states-and-canada",
  },
  {
    uuid: "1f16f790-b2f7-013c-4c70-0242ac110002",
    slug: "go-tell-it-on-the-mountain",
  },
  {
    uuid: "921f4c20-166c-0132-0f3d-58d385a7bbd0",
    slug: "dance-index",
  },
  {
    uuid: "0b7d5d90-7cd6-013c-20ba-0242ac110004",
    slug: "les-mellahs-de-rabat-sal",
  },
  {
    uuid: "fa270490-3653-0134-4629-00505686a51c",
    slug: "the-very-curious-and-wonderful-picture-book-of-pagan-history",
  },
  {
    uuid: "dba41b30-0ae6-0137-bfb0-4fa251ecd76a",
    slug: "lou-reed-papers",
  },
  {
    uuid: "4fe581b0-c6bc-012f-62a6-58d385a7bc34",
    slug: "sketches-of-character-and-costume-in-constantinople-ionian-islands-c",
  },
  {
    uuid: "8072d690-be21-013c-c01a-0242ac110004",
    slug: "baron-ungern-v-dokumentakh-i-memuarakh",
  },
  {
    uuid: "48caea70-a750-013c-8401-0242ac110002",
    slug: "helen-lansing-grinnell-diary",
  },
  {
    uuid: "9d24f2a0-0030-0130-ae78-58d385a7bc34",
    slug: "adam-and-eve",
  },
  {
    uuid: "b73f0f50-0033-0130-075f-58d385a7bc34",
    slug: "what-the-negro-must-learn-address-of-geo-w-cable-at-the-annual-meeting",
  },
  {
    uuid: "02dad740-a9e2-0134-c476-00505686a51c",
    slug: "otto-of-the-silver-hand",
  },
  {
    uuid: "309acc70-c603-012f-6519-58d385a7bc34",
    slug: "posters-by-jacob-kazaks",
  },
  {
    uuid: "7401f3a0-a342-013c-d1a9-0242ac110004",
    slug: "commercial-art",
  },
  {
    uuid: "8120b6a0-a0fe-013c-f606-0242ac110005",
    slug: "the-history-of-negroes-in-north-america",
  },
  {
    uuid: "e25aa980-a33d-013c-7bf4-0242ac110003",
    slug: "archiv-fr-buchgewerbe-und-gebrauchsgraphik",
  },
  {
    uuid: "c154fb50-a751-013c-70a0-0242ac110003",
    slug: "the-nbc",
  },
  {
    uuid: "99eed4a0-a75c-013c-c667-0242ac110002",
    slug: "the-illustrated-times",
  },
  {
    uuid: "c1aafd80-a1b8-013c-128a-0242ac110004",
    slug: "new-york-and-its-institutions-1609-1871",
  },
  {
    uuid: "0c0ce0a0-5fc1-0138-8f75-009944416e97",
    slug: "william-j-wilgus-papers",
  },
  {
    uuid: "1847e610-adb2-0133-7603-00505686d14e",
    slug: "the-musical-world",
  },
  {
    uuid: "ae1ab6a0-b4af-013c-936e-0242ac110006",
    slug: "kentoki",
  },
  {
    uuid: "60f867c0-c36b-013c-8b2b-0242ac110005",
    slug: "megillah",
  },
  {
    uuid: "11fdf590-7cdb-013c-a830-0242ac110005",
    slug: "la-rosa-del-amor",
  },
  {
    uuid: "bf6e5490-c603-012f-ece9-58d385a7bc34",
    slug: "photograph-of-n-gumilev",
  },
  {
    uuid: "5dea6260-c507-013c-bf11-0242ac110002",
    slug: "julia-jacquette",
  },
  {
    uuid: "2b9906f0-c77f-013c-fc09-0242ac110005",
    slug: "biblia-2-3",
  },
  {
    uuid: "2c2aa050-93cd-0130-841d-58d385a7b928",
    slug: "advertisement-rich-kip-junr-upholsterer-at-the-state-bed-new-york",
  },
  {
    uuid: "264fc590-c626-012f-d9c8-58d385a7bc34",
    slug: "the-illustrated-london-news-2",
  },
  {
    uuid: "6f19c570-bd34-013c-a066-0242ac110004",
    slug: "des-couleurs-et-de-leurs-applications-aux-arts-industriels-laide-des-cercles",
  },
  {
    uuid: "1e6dd2f0-c530-012f-c1f8-58d385a7bc34",
    slug: "new-york-worlds-fair-1939-and-1940-incorporated-records",
  },
  {
    uuid: "1ecca960-c6cc-012f-e438-58d385a7bc34",
    slug: "spode-his-successors-a-history-of-the-pottery-stoke-on-trent-1765-1865",
  },
  {
    uuid: "6b104930-a409-013c-dd1e-0242ac110004",
    slug: "lock-of-hair-of-allegra-byron",
  },
  {
    uuid: "24a38400-a1d6-013c-ae24-0242ac110004",
    slug: "the-wheel-of-fortune",
  },
  {
    uuid: "00173200-3335-0130-a7aa-58d385a7b928",
    slug: "la-ville-merveilleuse-rio-de-janeiro-pomes",
  },
  {
    uuid: "d0746fa0-bef0-013c-86e4-0242ac110004",
    slug: "apotheosis-of-george-washington",
  },
  {
    uuid: "83d86c30-61dc-0131-7f9f-58d385a7b928",
    slug: "wiener-strassenbilder-im-zeitalter-des-rokoko",
  },
  {
    uuid: "7da016e0-2e2c-013c-1aae-0242ac110003",
    slug: "diary-1918-1919",
  },
  {
    uuid: "27be7b00-c606-012f-7c93-58d385a7bc34",
    slug: "pauline-viardot-garca-letters-to-julius-rietz",
  },
  {
    uuid: "f5503450-a2ac-013c-a88c-0242ac110004",
    slug: "byron-memorial-ring",
  },
  {
    uuid: "1ed1b0e0-a8e9-013c-b3a4-0242ac110005",
    slug: "vida-de-san-felipe-de-jesus-protomartir-de-japon-y-patron-de-su-patria-mexico",
  },
  {
    uuid: "73eab210-b2ed-013c-5417-0242ac110002",
    slug: "john-cage",
  },
  {
    uuid: "7595b3e0-bd2e-013c-f548-0242ac110005",
    slug: "lord-byron-as-he-appeared-after-his-daily-ride-at-pisa-genoa",
  },
  {
    uuid: "7dcdaab0-a29d-013c-2040-0242ac110004",
    slug: "lord-byron",
  },
  {
    uuid: "8b3661f0-a67f-013c-1a43-0242ac110003",
    slug: "collection-of-piano-music-belonging-to-walter-and-edward-macdowell",
  },
  {
    uuid: "17710ee0-beef-013c-6fad-0242ac110003",
    slug: "zeichen-mahler-und-stickerbuch-zur-selbstbelehrung-fr-damen-welche-sich-mit",
  },
  {
    uuid: "8aaca140-a7ee-013c-8f99-0242ac110003",
    slug: "childe-harolds-pilgrimage",
  },
  {
    uuid: "cb4f47f0-a658-013c-fcf3-0242ac110002",
    slug: "letter-to-on-the-rev-wl-bowles-strictures-on-the-life-and-writings-of-pope",
  },
  {
    uuid: "6e2eeb80-beed-013c-a305-0242ac110005",
    slug: "the-holy-bible-contayning-the-old-and-new-testaments-newly-translated-out-of-ye",
  },
  {
    uuid: "d6cacc70-a2a2-013c-f01a-0242ac110005",
    slug: "the-curse-of-minerva",
  },
  {
    uuid: "94a0cd10-a27b-013c-0166-0242ac110002",
    slug: "the-parliamentary-speeches-of-lord-byron",
  },
  {
    uuid: "08ba7830-a67b-013c-f702-0242ac110002",
    slug: "the-poets-corner",
  },
  {
    uuid: "5765cda0-7cee-013c-4347-0242ac110003",
    slug: "husky-hans",
  },
  {
    uuid: "92f77440-7ce9-013c-80f0-0242ac110004",
    slug: "slide-kelly-slide-comic-song",
  },
  {
    uuid: "a7345150-7ced-013c-4503-0242ac110005",
    slug: "tessie-you-are-the-only-only-only",
  },
  {
    uuid: "0e5bf3e0-7cec-013c-0b30-0242ac110004",
    slug: "the-giants-of-1908-march-two-step",
  },
  {
    uuid: "ae9653e0-a725-013c-4ddf-0242ac110004",
    slug: "the-spot-where-the-body-of-shelley-was-burned",
  },
  {
    uuid: "34b8adc0-a2a6-013c-66c3-0242ac110002",
    slug: "watercolor-portrait-of-lord-byron",
  },
  {
    uuid: "841d2400-c46d-013c-7892-0242ac110002",
    slug: "transactions-of-the-royal-society-of-edinburgh",
  },
  {
    uuid: "4756d3a0-7c27-013c-8d98-0242ac110002",
    slug: "hagadah-shel-pesah-im-perush-kos-eliyahu",
  },
  {
    uuid: "44ac63a0-7cd2-013c-4da9-0242ac110005",
    slug: "sefer-okhmat-misken-ve-hu-sefer-rovets-she-nahagu-le-omram-ha-ahal-ha-adosh",
  },
  {
    uuid: "2bad1170-c60b-012f-107c-58d385a7bc34",
    slug: "explorations-in-south-west-africa-being-an-account-of-a-journey-in-the-years",
  },
  {
    uuid: "6e7d7ab0-c62b-012f-e924-58d385a7bc34",
    slug: "journal-of-a-residence-in-ashantee-comprising-notes-and-researches-relative",
  },
  {
    uuid: "e0df9cb0-a411-013c-58bf-0242ac110005",
    slug: "byron-extra-illustrated-copy",
  },
  {
    uuid: "557a6b60-a294-013c-c8c9-0242ac110004",
    slug: "unfilled-calls-feb-1925-feb-1928",
  },
  {
    uuid: "eb984d90-d7fd-013c-ea9e-0242ac110003",
    slug: "vanity-fair",
  },
  {
    uuid: "55dfde10-b7bc-013c-6764-0242ac110003",
    slug: "schrifttanz",
  },
  {
    uuid: "354dfaf0-a353-013c-044b-0242ac110002",
    slug: "service-book",
  },
  {
    uuid: "c5251080-8989-0139-9036-0242ac110003",
    slug: "sketch-of-the-mosquito-shore",
  },
  {
    uuid: "edb98ae0-f477-012f-90b5-58d385a7bbd0",
    slug: "el-arquitecto",
  },
  {
    uuid: "f5db2200-518d-0132-150e-58d385a7b928",
    slug: "a-son-of-the-forest-2",
  },
  {
    uuid: "e9b17d10-b95b-013c-b50b-0242ac110003",
    slug: "kammavacam",
  },
  {
    uuid: "a559fc20-c602-012f-f4b3-58d385a7bc34",
    slug: "sefer-virzbnik-starakhovits",
  },
  {
    uuid: "ed05a590-8427-0130-531e-58d385a7b928",
    slug: "entretiens-sur-la-pluralit-des-mondes",
  },
  {
    uuid: "28d2e320-b973-013c-70ec-0242ac110005",
    slug: "maps-of-property-in-the-city-of-new-york-belonging-to-john-j-astor-esq",
  },
  {
    uuid: "5fee3160-da3d-013c-3aba-0242ac110003",
    slug: "costume-and-textile-collection",
  },
  {
    uuid: "4eec0bc0-a297-013c-2089-0242ac110004",
    slug: "picture-collection-day-book-may-1917-jan-1925",
  },
  {
    uuid: "11343050-fbd8-013b-2266-0242ac110004",
    slug: "kay-zakariasen-greek-diners-collection",
  },
  {
    uuid: "3cf29c80-3931-0137-f3cb-599c952334bd",
    slug: "the-story-of-the-irish-citizen-army",
  },
  {
    uuid: "1c6ee3b0-c622-012f-df61-58d385a7bc34",
    slug: "speculum-humanea-salvationis",
  },
  {
    uuid: "77123600-c606-012f-1e5f-58d385a7bc34",
    slug: "the-idler-magazine",
  },
  {
    uuid: "1948b5d0-af17-013c-e0b0-0242ac110002",
    slug: "richard-t-greener-papers",
  },
  {
    uuid: "610cd190-fd9f-013b-53d1-0242ac110004",
    slug: "houdiniana",
  },
  {
    uuid: "0abbc2d0-c607-012f-97c3-58d385a7bc34",
    slug: "edo-meisho-zue",
  },
  {
    uuid: "b5d02860-d27e-013c-000d-0242ac110002",
    slug: "augusta-leigh-manuscript-material",
  },
  {
    uuid: "4d4df330-987c-013c-0687-0242ac110002",
    slug: "ronald-firbank-collection-of-papers",
  },
  {
    uuid: "1d8b3c10-c928-013c-3302-0242ac110002",
    slug: "patricia-zipprodt-papers-and-designs",
  },
  {
    uuid: "23d37fe0-d501-013c-d36a-0242ac110002",
    slug: "papers-relating-to-lord-byrons-dealings-with-francis-merryweather",
  },
  {
    uuid: "400b45e0-c865-013c-ff72-0242ac110002",
    slug: "commissioners-plan-of-manhattan-island-and-report-with-related-materials",
  },
  {
    uuid: "a169c0f0-d5c5-0138-1fa3-0ff52edbb1bd",
    slug: "eda-glaser-collection",
  },
  {
    uuid: "50964150-d33b-013c-18c0-0242ac110003",
    slug: "farrar-straus-giroux-inc-records",
  },
  {
    uuid: "7bfb8630-b977-013c-4708-0242ac110002",
    slug: "arthur-upham-pope-papers",
  },
  {
    uuid: "17bbc9b0-c90b-013c-ed64-0242ac110002",
    slug: "new-york-genealogical-and-biographical-society-family-files",
  },
  {
    uuid: "79ae0590-e4fd-013a-dbd9-0242ac110003",
    slug: "olivia-pleasants-frost-papers",
  },
  {
    uuid: "d90f7390-b48c-013c-a21b-0242ac110003",
    slug: "abraham-walkowitz-collection-of-isadora-duncan-materials",
  },
  {
    uuid: "848cde50-c7a4-013c-6a49-0242ac110002",
    slug: "berg-collection-uncataloged-manuscripts-2-3",
  },
  {
    uuid: "c69685d0-bd58-013c-a227-0242ac110005",
    slug: "poor-sarah-or-the-indian-woman",
  },
  {
    uuid: "7e5f0b50-e0be-013c-6cf4-0242ac110002",
    slug: "egbert-ethelred-brown-papers",
  },
  {
    uuid: "a9464b20-e30e-013c-35d5-0242ac110002",
    slug: "joshua-logan-correspondence-and-ephemera",
  },
  {
    uuid: "dd157ec0-e57c-013c-0676-0242ac110003",
    slug: "ernst-papanek-papers",
  },
  {
    uuid: "1ad15b10-c396-013c-e7f0-0242ac110005",
    slug: "double-portrait-of-louis-xvi-and-marie-antoinette",
  },
  {
    uuid: "218842b0-ebc4-013c-65d4-0242ac110002",
    slug: "bayard-campbell-pearsall-families-papers",
  },
  {
    uuid: "cbb9c4f0-c51c-013c-a15a-0242ac110005",
    slug: "historisch-spel-der-boekdrukkunst",
  },
  {
    uuid: "bb16c970-ebcc-013c-02ad-0242ac110004",
    slug: "william-frey-papers",
  },
  {
    uuid: "d10cf300-ebc7-013c-8a87-0242ac110002",
    slug: "bronson-family-papers",
  },
  {
    uuid: "f81ff800-ebc2-013c-fa63-0242ac110002",
    slug: "archibald-robertson-maps",
  },
  {
    uuid: "947cd660-c381-013c-73b3-0242ac110004",
    slug: "madeleine-pnitente",
  },
  {
    uuid: "9e0015f0-c38b-013c-134d-0242ac110005",
    slug: "textile-proof-woodcut-pattern-for-lace",
  },
  {
    uuid: "00f4b880-c42f-013c-3ba5-0242ac110003",
    slug: "the-true-image-of-our-lady-of-atocha",
  },
  {
    uuid: "b55957c0-ebc5-013c-b0bd-0242ac110002",
    slug: "william-frothingham-papers",
  },
  {
    uuid: "47b54060-c85b-013c-7245-0242ac110006",
    slug: "jet",
  },
  {
    uuid: "b82d0e60-d8d7-013c-b870-0242ac110002",
    slug: "haitian-refugee-collection",
  },
  {
    uuid: "2bd7bfe0-e4a9-013c-0b87-0242ac110002",
    slug: "on-the-origin-of-species-by-means-of-natural-selection",
  },
  {
    uuid: "ef6ad0f0-f03d-013c-cafe-0242ac110006",
    slug: "100-whitman-photographs",
  },
  {
    uuid: "036d8a80-d8d6-013c-d46e-0242ac110002",
    slug: "key-women-of-america-records",
  },
  {
    uuid: "77a75630-d4f5-013c-0e92-0242ac110002",
    slug: "east-village-eye-records",
  },
  {
    uuid: "379f1a80-2419-013c-8a74-0242ac110002",
    slug: "middleton-spike-harris-coin-collection",
  },
  {
    uuid: "6681fc20-c52b-012f-4eb1-58d385a7bc34",
    slug: "new-york-worlds-fair-1939-and-1940-incorporated-records-2",
  },
  {
    uuid: "df2a8240-1bbe-013d-fe9a-0242ac110004",
    slug: "carl-van-vechten-portraits",
  },
  {
    uuid: "66d899e0-b7b9-013c-626c-0242ac110002",
    slug: "jean-blackwell-hutson-photographs",
  },
  {
    uuid: "e3232750-de2b-013c-9a6c-0242ac110003",
    slug: "schomburg-center-photograph-collection",
  },
  {
    uuid: "903698e0-37be-013d-7ef4-0242ac110003",
    slug: "harry-a-williamson-papers-additions",
  },
  {
    uuid: "dcd51d30-c528-013c-8f76-0242ac110002",
    slug: "butler-huntington-smith-family-papers",
  },
  {
    uuid: "436c82d0-a024-013b-a337-0242ac110002",
    slug: "black-panther-party-harlem-branch-files",
  },
  {
    uuid: "06867800-0bd9-013d-bf88-0242ac110004",
    slug: "exhibitions-program-office-records",
  },
  {
    uuid: "ddee1df0-0592-013d-d78b-0242ac110004",
    slug: "rouben-ter-arutunian-design-portfolios",
  },
  {
    uuid: "6c754800-eb77-013c-d1f2-0242ac110002",
    slug: "washington-square-players-designs-posters-and-scripts",
  },
  {
    uuid: "55aa5440-3f48-013d-7b2d-0242ac110004",
    slug: "former-standalone-items",
  },
  {
    uuid: "286dcca0-3bb5-013d-60f7-0242ac110002",
    slug: "richard-b-moore-papers",
  },
  {
    uuid: "4bfe9050-df1b-013c-1de0-0242ac110003",
    slug: "westchester-playhouse-negatives",
  },
  {
    uuid: "96aa2130-efa1-013c-7ea8-0242ac110002",
    slug: "mother-earth",
  },
  {
    uuid: "889f4e60-785d-0139-cd09-0242ac110002",
    slug: "new-yorker-covers",
  },
  {
    uuid: "20e027e0-1632-013d-8291-0242ac110003",
    slug: "richard-h-and-elizabeth-b-stoddard-papers",
  },
  {
    uuid: "f61f56e0-3aeb-013d-30be-0242ac110003",
    slug: "the-negro-in-art-week-november-16-23",
  },
  {
    uuid: "3c72c7c0-f04d-013c-9ec4-0242ac110002",
    slug: "the-provincetown-plays",
  },
  {
    uuid: "667d4340-eebe-013c-6e7a-0242ac110002",
    slug: "a-few-figs-from-thistles",
  },
  {
    uuid: "221f6060-3721-013d-751b-0242ac110002",
    slug: "haitian-revolution-research-materials",
  },
  {
    uuid: "056bf6e0-3720-013d-84a7-0242ac110002",
    slug: "harry-belafonte-papers",
  },
  {
    uuid: "4f2a8c70-3f33-013d-2b02-0242ac110002",
    slug: "kuchel-dresels-california-views",
  },
  {
    uuid: "f18ea380-4133-013d-bc5d-0242ac110002",
    slug: "nelam-l-hill-papers",
  },
  {
    uuid: "2e9d5ad0-eeb9-013c-30d6-0242ac110006",
    slug: "peggy-bacon",
  },
  {
    uuid: "13b857b0-f90c-013c-7034-0242ac110002",
    slug: "report-on-the-geology-of-the-rainy-lake-region",
  },
  {
    uuid: "c5605b10-3f4d-013d-7ff6-0242ac110004",
    slug: "berg-collection-uncataloged-manuscripts-2-3-4",
  },
  {
    uuid: "79a1f5f0-c453-013c-b097-0242ac110005",
    slug: "sara-charlesworth",
  },
  {
    uuid: "6e405c10-04d4-013d-c999-0242ac110002",
    slug: "stephen-schmidt-engineering-papers",
  },
  {
    uuid: "11b9ff10-e88d-013c-e40a-0242ac110002",
    slug: "susan-jaffe-tane-collection-of-walt-whitman",
  },
  {
    uuid: "e2394dd0-36e5-013d-2137-0242ac110002",
    slug: "135th-street-branch-records",
  },
  {
    uuid: "d760b2f0-46ee-013d-26e9-0242ac110002",
    slug: "ad-catholicum-pariter-et-invictissimum-phillippum-dei-gratia-hispaniarum-regem",
  },
  {
    uuid: "0696fd30-42ff-013d-8e33-0242ac110002",
    slug: "album-of-telephotographs-for-advertising-exhibit",
  },
  {
    uuid: "740288d0-3f39-013d-2fda-0242ac110003",
    slug: "an-earnest-and-serious-address-to-the-freeholders-and-electors-of-great-britain",
  },
  {
    uuid: "4fba0460-ef9f-013c-7a2d-0242ac110003",
    slug: "anarchism-and-other-essays",
  },
  {
    uuid: "cf26f8d0-42f7-013d-fd41-0242ac110003",
    slug: "annales-eclesiasticos-y-seculares-de-la-muy-noble-y-muy-leal-ciudad-de-seuilla",
  },
  {
    uuid: "13c21590-455a-013d-a519-0242ac110004",
    slug: "anno-regni-georgii-ii-regis-magnae-britanniae-franciae-hiberniae-vicesimo-sexto",
  },
  {
    uuid: "47d48870-3f27-013d-ebc6-0242ac110003",
    slug: "annual-report-of-the-society-of-american-cantors",
  },
  {
    uuid: "b3c02cb0-42f0-013d-37bb-0242ac110003",
    slug: "antonii-mizaldi-monlvciani-asterismi-siue-stellatarum-octaui-cli-imaginum",
  },
  {
    uuid: "93198b00-097e-013d-af10-0242ac110002",
    slug: "benvenuto-disertori",
  },
  {
    uuid: "9a7e0cd0-f5e2-013c-fd44-0242ac110005",
    slug: "chakaia-booker",
  },
  {
    uuid: "8c043200-477e-013d-2bae-0242ac110002",
    slug: "cook-book-euclid-avenue-temple",
  },
  {
    uuid: "15617040-f05f-013c-f0e7-0242ac110002",
    slug: "crimes-of-preachers-in-the-united-states-and-canada",
  },
  {
    uuid: "108c3a80-45f5-013d-f72d-0242ac110002",
    slug: "don-quixote-and-sancho-panza",
  },
  {
    uuid: "5ff5df20-e47d-013c-7815-0242ac110003",
    slug: "dorian-book-quarterly",
  },
  {
    uuid: "d78d9790-3f25-013d-164c-0242ac110003",
    slug: "du-bist-mein-glick",
  },
  {
    uuid: "909eb700-1a1e-013d-05aa-0242ac110002",
    slug: "eleanor-gould-packard-papers",
  },
  {
    uuid: "2ee5fa90-2c24-013d-7132-0242ac110002",
    slug: "everyone-calls-themselves-an-ally-until-it-is-time-to-do-some-real-ally-shit",
  },
  {
    uuid: "37b64270-4797-013d-65e2-0242ac110003",
    slug: "excursions-daguerriennes",
  },
  {
    uuid: "45777d00-095c-013d-65a9-0242ac110004",
    slug: "fidelity",
  },
  {
    uuid: "acb5f490-4781-013d-ce11-0242ac110002",
    slug: "five-amulets-discovered-in-jewish-tombs-in-irbid-jordan",
  },
  {
    uuid: "d55f2020-c85d-013c-11e0-0242ac110002",
    slug: "grandassa-models-collection",
  },
  {
    uuid: "6fcf2ab0-fc31-013c-d13f-0242ac110004",
    slug: "greenwich-village-2",
  },
  {
    uuid: "4ec85fa0-3f30-013d-6210-0242ac110002",
    slug: "harpers-weekly-2",
  },
  {
    uuid: "fb55cef0-fc2e-013c-f39b-0242ac110003",
    slug: "ive-come-to-stay",
  },
  {
    uuid: "28ceb060-4629-013d-7836-0242ac110003",
    slug: "in-the-battle-for-new-york-or-uncle-sams-boys-in-the-desparate-struggle",
  },
  {
    uuid: "edbc15e0-464a-013d-cee1-0242ac110003",
    slug: "intriguing-recipes",
  },
  {
    uuid: "034c6d00-42fa-013d-cb2f-0242ac110004",
    slug: "ioannis-leonis-africani-africae-descriptio-ix-lib-absoluta",
  },
  {
    uuid: "6ede1e30-f5e4-013c-9f1d-0242ac110002",
    slug: "jacquelyn-strycker",
  },
  {
    uuid: "5cc57660-45ec-013d-5a5c-0242ac110002",
    slug: "john-adams-autograph-letter-signed-to-mr-jennings-paris-april-18-1783",
  },
  {
    uuid: "7c05b560-e551-013c-36d4-0242ac110003",
    slug: "john-steinbeck-letter-to-paul-muni",
  },
  {
    uuid: "aef61ce0-35a1-013d-c5c8-0242ac110003",
    slug: "joseph-beam-photograph-collection",
  },
  {
    uuid: "a66b3600-4711-013d-df74-0242ac110002",
    slug: "joseph-hawley-correspondence-and-documents",
  },
  {
    uuid: "fc2cf090-479c-013d-81d5-0242ac110004",
    slug: "ketuvim-aharonim",
  },
  {
    uuid: "58c50c40-4792-013d-e011-0242ac110002",
    slug: "krisko-resepies-far-der-idisher-baleboste",
  },
  {
    uuid: "dcede200-46e8-013d-3c69-0242ac110002",
    slug: "les-livres-sacrs-de-lorient",
  },
  {
    uuid: "03cfa8f0-4780-013d-04aa-0242ac110003",
    slug: "letter-to-joshua-cohen",
  },
  {
    uuid: "a4f23fc0-e924-013c-6cc8-0242ac110002",
    slug: "liber-cronicarum",
  },
  {
    uuid: "ec61cca0-fc29-013c-2d79-0242ac110005",
    slug: "men-and-steel",
  },
  {
    uuid: "bc429340-fc0c-013c-d281-0242ac110005",
    slug: "minna-and-myself",
  },
  {
    uuid: "c9b62e00-46ea-013d-b242-0242ac110003",
    slug: "momotaro-emaki",
  },
  {
    uuid: "9bc91880-ef3b-013a-3bdc-0242ac110003",
    slug: "nypl-treasures-exhibition",
  },
  {
    uuid: "974f0470-e87c-013c-9eef-0242ac110002",
    slug: "new-english-canaan-or-new-canaan",
  },
  {
    uuid: "986e36e0-46ed-013d-d77b-0242ac110004",
    slug: "nisho-tenshokodaijin-senko-jidai-sho",
  },
  {
    uuid: "3c308280-eec9-013c-7b52-0242ac110006",
    slug: "pagan",
  },
  {
    uuid: "38d51ee0-25e7-013d-b9b8-0242ac110002",
    slug: "pearl-primus-photograph-collection",
  },
  {
    uuid: "2d967190-4784-013d-3b1e-0242ac110003",
    slug: "pennsylvania-packet-and-daily-advertiser",
  },
  {
    uuid: "5b857380-4789-013d-f350-0242ac110003",
    slug: "psalterium-americanum",
  },
  {
    uuid: "8f6ef2e0-46eb-013d-1346-0242ac110004",
    slug: "public-enemy-2",
  },
  {
    uuid: "157a17b0-4782-013d-d661-0242ac110003",
    slug: "resolution-of-the-high-mighty-lords-states-general",
  },
  {
    uuid: "a7f54280-04ba-013d-cd5b-0242ac110003",
    slug: "reysen-und-wanderschafften-durch-das-gelobte-land",
  },
  {
    uuid: "cdcee050-f06b-013c-28cf-0242ac110006",
    slug: "ten-days-that-shook-the-world",
  },
  {
    uuid: "07c75b90-3be3-013d-2653-0242ac110003",
    slug: "thats-my-cup-blues",
  },
  {
    uuid: "7cdf9dc0-42f2-013d-40e1-0242ac110002",
    slug: "the-abbey-theatre-dublin",
  },
  {
    uuid: "00b1cb40-fc0f-013c-38c0-0242ac110003",
    slug: "the-ghetto-and-other-poems",
  },
  {
    uuid: "603dbb60-fc11-013c-da8e-0242ac110005",
    slug: "the-glebe",
  },
  {
    uuid: "c5f269f0-f10d-013c-901f-0242ac110002",
    slug: "the-greenwich-village-quill",
  },
  {
    uuid: "9abda950-e475-013c-ca2a-0242ac110002",
    slug: "the-rubbers-bros-comics",
  },
  {
    uuid: "2ab1da20-4791-013d-f99d-0242ac110002",
    slug: "the-settlement-cook-book",
  },
  {
    uuid: "f39d0b30-41fe-013d-07ea-0242ac110002",
    slug: "the-web-a-revelation-of-patriotism",
  },
  {
    uuid: "11df8fe0-fc20-013c-ddfd-0242ac110005",
    slug: "the-ballad-of-the-harp-weaver",
  },
  {
    uuid: "f9c7d920-3f2a-013d-2fc0-0242ac110004",
    slug: "the-boy-allies-with-the-terror-of-the-seas",
  },
  {
    uuid: "c279af20-fc2b-013c-6c6c-0242ac110005",
    slug: "the-day-in-bohemia",
  },
  {
    uuid: "3da1c360-46e7-013d-945e-0242ac110002",
    slug: "the-interesting-narrative-of-the-life-of-olaudah-equiano-or-gustavus-vassa-2-3-4",
  },
  {
    uuid: "76ced960-46fd-013d-c103-0242ac110002",
    slug: "the-silent-south-together-with-the-freedmans-case-in-equity-and-the-convict",
  },
  {
    uuid: "96e6d880-3f3b-013d-7102-0242ac110003",
    slug: "the-trusts-the-people-and-the-square-deal",
  },
  {
    uuid: "280c3b50-e3b9-013c-6615-0242ac110003",
    slug: "traps-for-the-young",
  },
  {
    uuid: "e4889370-f372-013c-5fd3-0242ac110005",
    slug: "travels-in-england-france-spain-and-the-barbary-states-in-the-years-1813-14",
  },
  {
    uuid: "ba2c2630-3f27-013d-a47d-0242ac110002",
    slug: "valley-of-vision",
  },
  {
    uuid: "dac6ebd0-478a-013d-9135-0242ac110002",
    slug: "voyage-to-a-thousand-cares",
  },
  {
    uuid: "da709a10-38c4-013d-5035-0242ac110002",
    slug: "web-du-bois-papers",
  },
  {
    uuid: "02a750f0-4165-013d-30fa-0242ac110004",
    slug: "wolffs-cook-book",
  },
  {
    uuid: "a58a73a0-42fa-013d-6b3c-0242ac110003",
    slug: "charles-e-rotkin-photographic-prints",
  },
  {
    uuid: "f81754d0-a5a5-0132-86da-58d385a7b928",
    slug: "louis-schanker",
  },
  {
    uuid: "89dcaac0-eee0-013c-82dc-0242ac110003",
    slug: "new-york-amsterdam-news-2-3",
  },
  {
    uuid: "b7ac3120-e540-013c-1f67-0242ac110004",
    slug: "philip-burton-papers-unprocessed",
  },
  {
    uuid: "bcbd96e0-b96a-0138-36cd-06bcbb1d0e94",
    slug: "tenacious",
  },
  {
    uuid: "1810acb0-f42e-013c-6e94-0242ac110002",
    slug: "thomas-russell-jones-papers",
  },
  {
    uuid: "272096d0-c1f3-013c-0c38-0242ac110005",
    slug: "24-dessins-isomtriques-afrique-cubique",
  },
  {
    uuid: "01938490-a0e8-013c-08c8-0242ac110005",
    slug: "album-de-lart-polonais",
  },
  {
    uuid: "90ae8000-3176-013d-06e6-0242ac110002",
    slug: "annual-exhibition-by-negro-artists-december-8-1923-january-8-1924-135-street",
  },
  {
    uuid: "b393e110-e886-013c-7921-0242ac110006",
    slug: "books-the-nazis-banned-an-exhibition-in-the-new-york-public-library-1942",
  },
  {
    uuid: "01278a30-d648-013b-b71e-0242ac110002",
    slug: "hadamaky",
  },
  {
    uuid: "fc9d1f80-9eb9-013c-ec12-0242ac110005",
    slug: "krlovsk-horn-mesto-kutn-hora-sdlo-umen",
  },
  {
    uuid: "cfaa87f0-dd67-013c-a2e7-0242ac110002",
    slug: "magpie-a-literary-art-publication-vol-26-no-1",
  },
  {
    uuid: "6c131c30-040d-013d-bab8-0242ac110002",
    slug: "mary-anna-palmer-draper",
  },
  {
    uuid: "97fb8300-b237-013c-d4b1-0242ac110004",
    slug: "masa-be-arav",
  },
  {
    uuid: "cf5d6a70-0f9d-013d-62aa-0242ac110002",
    slug: "ocangra-aramee-wawakakara-or-winnebago-prayer-book",
  },
  {
    uuid: "e2a2d5b0-182e-013b-7574-0242ac110002",
    slug: "rip-van-winkle-an-original-american-grand-opera-in-three-acts",
  },
  {
    uuid: "2a0ef430-e884-013c-7520-0242ac110002",
    slug: "sbornik-rasporiazhen-po-tsenzurie-s-1828-po-1862-g",
  },
  {
    uuid: "ea4227c0-b817-0139-0df4-0242ac110002",
    slug: "testimony-against-hugh-parsons-charged-with-witchcraft",
  },
  {
    uuid: "4d161380-c456-013c-6ac7-0242ac110003",
    slug: "the-floating-world-lotus-125th",
  },
  {
    uuid: "ad55e2a0-c399-013c-1b7c-0242ac110005",
    slug: "the-holy-trinity",
  },
  {
    uuid: "ff0b5a90-bdff-013c-faa9-0242ac110005",
    slug: "the-teares-or-lamentacions-of-a-sorrowfull-soule-composed-with-musicall-ayres",
  },
  {
    uuid: "87240ab0-0719-013d-8d70-0242ac110004",
    slug: "thoughts-on-the-peace-and-the-probable-advantages-thereof-to-the-united-states",
  },
  {
    uuid: "013a4140-c45f-013c-269d-0242ac110004",
    slug: "two-moons",
  },
  {
    uuid: "5af6c940-c45b-013c-85aa-0242ac110005",
    slug: "script-b",
  },
  {
    uuid: "a4c384f0-4ea1-013d-c7bd-0242ac110002",
    slug: "schomburg-photographs-and-prints-subject-collections-street-scenes",
  },
  {
    uuid: "46f7c820-c6d8-012f-a6f6-58d385a7bc34",
    slug: "a-selection-of-hexandrian-plants-belonging-to-the-natural-orders-amaryllid",
  },
  {
    uuid: "90ea5130-697b-013d-338d-0242ac110005",
    slug: "howard-orphanage-and-industrial-school-photograph-collection",
  },
  {
    uuid: "e4f33160-64c5-013d-d20b-0242ac110005",
    slug: "first-convention-for-the-canadian-league-for-the-advancement-of-colored-people",
  },
  {
    uuid: "f97c3840-409a-013d-bf35-0242ac110002",
    slug: "metronome-magazine-photographs",
  },
  {
    uuid: "5f7473f0-7d6e-013a-6217-0242ac110003",
    slug: "jerzy-fitelberg-papers",
  },
  {
    uuid: "5ced63a0-63d5-013d-669b-0242ac110002",
    slug: "ap-bedou-portfolio",
  },
  {
    uuid: "a20da180-3d75-013d-8894-0242ac110002",
    slug: "anne-bront-papers",
  },
  {
    uuid: "d99ff390-c605-012f-7d06-58d385a7bc34",
    slug: "portraits-of-marion-anderson-albert-basserman-alban-berg-albert-einstein-hedy",
  },
  {
    uuid: "a4756610-6963-013d-eb89-0242ac110002",
    slug: "berenice-abbott-portfolio",
  },
  {
    uuid: "e2cda4f0-42e1-013d-1072-0242ac110002",
    slug: "gilbert-jenkins-jr-letters-sent",
  },
  {
    uuid: "66e6ca90-4218-013d-6909-0242ac110002",
    slug: "report-of-the-mayors-billboard-advertising-commission-of-the-city-of-new-york",
  },
  {
    uuid: "357c4fa0-64c3-013d-dd28-0242ac110003",
    slug: "us-colored-troops-infantry-100th-regiment-company-i-collection",
  },
  {
    uuid: "d66286b0-576e-013d-bd80-0242ac110002",
    slug: "drawings-by-john-singer-sargent",
  },
  {
    uuid: "c75f96f0-3ae6-013d-af0a-0242ac110002",
    slug: "it-is",
  },
  {
    uuid: "cce50280-63f8-013d-bf76-0242ac110003",
    slug: "edward-schwartz-portfolio",
  },
  {
    uuid: "8f4ec390-64c0-013d-82de-0242ac110003",
    slug: "music",
  },
  {
    uuid: "bc08d300-64ba-013d-ed15-0242ac110005",
    slug: "vocal-groups",
  },
  {
    uuid: "7446d310-332a-013d-cf52-0242ac110002",
    slug: "an-account-of-the-late-negro-insurrection-which-took-place-in-the-island",
  },
  {
    uuid: "b20cad20-e53b-013c-6acb-0242ac110002",
    slug: "zero-and-kate-mostel-papers",
  },
  {
    uuid: "8ad17fb0-e558-013c-d072-0242ac110002",
    slug: "new-york-street-theater-caravan-records",
  },
  {
    uuid: "05f86680-56a0-013d-b372-0242ac110002",
    slug: "photographs-by-nell-dorr",
  },
  {
    uuid: "d0f55ff0-569f-013d-fb0e-0242ac110005",
    slug: "prints-by-henry-fuseli",
  },
  {
    uuid: "912493b0-5693-013d-db55-0242ac110005",
    slug: "photographs-by-fred-vernon-sampson",
  },
  {
    uuid: "1bc1e1d0-575a-013d-90ae-0242ac110002",
    slug: "prints-by-jean-baptiste-chapuy",
  },
  {
    uuid: "9010cc80-5762-013d-cd37-0242ac110004",
    slug: "prints-by-adolph-gottlieb",
  },
  {
    uuid: "7940cd70-583f-013d-4e40-0242ac110003",
    slug: "birds-eye-view-of-the-city-of-pyongyang-heijo",
  },
  {
    uuid: "a9cdca90-5697-013d-48e7-0242ac110005",
    slug: "photographs-by-berenice-abbott",
  },
  {
    uuid: "0bb1c590-56a9-013d-2b55-0242ac110002",
    slug: "photographs-by-dag-alveng",
  },
  {
    uuid: "3c8e9ad0-583e-013d-97bf-0242ac110002",
    slug: "prints-by-the-gay-liberation-front",
  },
  {
    uuid: "a0777280-583c-013d-ddab-0242ac110004",
    slug: "watercolors-by-william-blake",
  },
  {
    uuid: "6f71dda0-568f-013d-b72d-0242ac110004",
    slug: "photographs-by-ben-ross",
  },
  {
    uuid: "2c9488a0-5691-013d-b7e4-0242ac110003",
    slug: "photographs-of-alberto-giacometti",
  },
  {
    uuid: "1c08fa90-576e-013d-0298-0242ac110005",
    slug: "prints-by-mickalene-thomas",
  },
  {
    uuid: "41e902c0-56db-013d-43b9-0242ac110004",
    slug: "drawings-by-felix-octavius-carr-darley",
  },
  {
    uuid: "8b54bae0-281b-013d-6e85-0242ac110002",
    slug: "isabel-washington-powell-photograph-collection",
  },
  {
    uuid: "520a2bc0-5696-013d-720c-0242ac110003",
    slug: "photographs-of-arthur-rimbaud",
  },
  {
    uuid: "4cdcbd50-6a08-013d-689e-0242ac110004",
    slug: "photographs-of-the-gullah-people",
  },
  {
    uuid: "13746af0-6a18-013d-a927-0242ac110002",
    slug: "scurlock-studio-portfolio",
  },
  {
    uuid: "736febb0-b5e8-013b-4ced-0242ac110002",
    slug: "reginald-marsh",
  },
  {
    uuid: "31d44390-52b2-013d-127b-0242ac110003",
    slug: "julian-mayfield-photograph-collection",
  },
  {
    uuid: "8e7ae570-4782-013d-76e9-0242ac110003",
    slug: "thirtieth-congress-first-session",
  },
  {
    uuid: "317f2940-8d67-013c-9065-0242ac110002",
    slug: "the-elevated-express",
  },
  {
    uuid: "534f4390-2c03-013d-984f-0242ac110002",
    slug: "syriac-manuscripts",
  },
  {
    uuid: "90a45f60-6f90-013d-9739-0242ac110002",
    slug: "patrick-kelly-photographs",
  },
  {
    uuid: "40e69a70-721b-013d-1376-0242ac110002",
    slug: "george-westerman-photographs",
  },
  {
    uuid: "2003cfa0-80c5-013c-ce7d-0242ac110005",
    slug: "the-subway-sun",
  },
  {
    uuid: "019b8240-566b-013d-951b-0242ac110002",
    slug: "robert-motherwell-2",
  },
  {
    uuid: "977fefa0-7cfb-013d-b4cc-0242ac110002",
    slug: "haiti-miscellaneous-collections",
  },
  {
    uuid: "4de12520-6aa9-013c-6d3f-0242ac110003",
    slug: "forers",
  },
  {
    uuid: "6f0c7be0-2dc2-013d-334c-0242ac110003",
    slug: "their-eyes-were-watching-god",
  },
  {
    uuid: "543596a0-4091-013d-997e-0242ac110003",
    slug: "the-new-negro",
  },
  {
    uuid: "09e60750-30c3-013d-e05e-0242ac110002",
    slug: "black-manhattan",
  },
  {
    uuid: "7c043fc0-30b9-013d-875c-0242ac110004",
    slug: "harlem-shadows",
  },
  {
    uuid: "ccef3ea0-30be-013d-5110-0242ac110002",
    slug: "banjo",
  },
  {
    uuid: "9339b2c0-7de3-013d-9e45-0242ac110003",
    slug: "mary-hays-manuscript-material",
  },
  {
    uuid: "cbb1d2c0-03d8-013d-871a-0242ac110002",
    slug: "ruth-ann-koesun-collection",
  },
  {
    uuid: "b3da5650-8358-013d-e4ab-0242ac110003",
    slug: "joan-mccracken-ephemera",
  },
  {
    uuid: "07e14ab0-6329-013d-1cf9-0242ac110003",
    slug: "rachel-crothers-papers",
  },
  {
    uuid: "25f055c0-6891-013d-0e03-0242ac110003",
    slug: "mura-dehn-photographs",
  },
  {
    uuid: "854e1400-899d-013d-918c-0242ac110002",
    slug: "frdrique-petrides-papers",
  },
  {
    uuid: "e690d340-e500-013a-1c4c-0242ac110003",
    slug: "phelps-stokes-fund-photograph-collection",
  },
  {
    uuid: "d8834a10-897c-013d-b8fb-0242ac110003",
    slug: "bible-historiale-completed-version",
  },
  {
    uuid: "1f182f10-78ed-013d-5352-0242ac110004",
    slug: "die-bauwelt",
  },
  {
    uuid: "2f151240-6247-013d-50f1-0242ac110004",
    slug: "velhagen-klasings-monatshefte",
  },
  {
    uuid: "e4d9e770-8b49-013d-5581-0242ac110002",
    slug: "edward-harrigan-papers",
  },
  {
    uuid: "212f6f20-16fb-013d-11c7-0242ac110003",
    slug: "gay-mens-health-crisis-records",
  },
  {
    uuid: "4d2c3120-899f-013d-63b0-0242ac110003",
    slug: "la-revue-du-bureau",
  },
  {
    uuid: "97b4ce80-5e4a-013d-ac27-0242ac110003",
    slug: "james-van-der-zee",
  },
  {
    uuid: "f3e44c90-7508-013d-1c78-0242ac110003",
    slug: "great-races-of-mankind",
  },
  {
    uuid: "99127670-98a7-013d-d415-0242ac110002",
    slug: "schomburg-photographs-and-prints-subject-collections-organizations",
  },
  {
    uuid: "3c2d54f0-753b-013d-7073-0242ac110002",
    slug: "artis-perspectiu-plurium-generum-elegantissim-formul",
  },
  {
    uuid: "a890bf70-8804-013d-09d5-0242ac110003",
    slug: "national-alliance-against-racist-and-political-repression-us-angela-davis",
  },
  {
    uuid: "fe7b94d0-a3a5-013d-5b5f-0242ac110002",
    slug: "sydney-howard-gay-papers",
  },
  {
    uuid: "a592e400-a43e-013d-0b89-0242ac110003",
    slug: "stratemeyer-syndicate-records",
  },
  {
    uuid: "ae291b00-a449-013d-4be1-0242ac110003",
    slug: "paul-kester-papers",
  },
  {
    uuid: "550f90a0-a452-013d-d3d4-0242ac110004",
    slug: "bryant-godwin-papers",
  },
  {
    uuid: "406d35e0-a454-013d-13af-0242ac110003",
    slug: "ward-family-papers",
  },
  {
    uuid: "e62a2a60-a48f-013d-df9b-0242ac110003",
    slug: "ely-family-letters",
  },
  {
    uuid: "d251d360-89ab-013d-61df-0242ac110002",
    slug: "poems-on-various-subjects-religious-and-moral-2",
  },
  {
    uuid: "2b0c0a20-7444-013d-72d7-0242ac110002",
    slug: "photographs-2-3",
  },
  {
    uuid: "0f933900-744a-013d-c587-0242ac110002",
    slug: "photographs-2-3-4",
  },
  {
    uuid: "db9e66e0-a48c-013d-3ffc-0242ac110003",
    slug: "maryam-jameelah-papers",
  },
  {
    uuid: "17de3410-a5f0-013d-e6fd-0242ac110003",
    slug: "ezra-a-carman-papers",
  },
  {
    uuid: "185e5900-a5e9-013d-04be-0242ac110003",
    slug: "fannia-m-cohn-papers",
  },
  {
    uuid: "d8403210-a5d6-013d-f6f9-0242ac110003",
    slug: "ernest-harvier-scrapbooks",
  },
  {
    uuid: "b2296d10-a5d6-013d-182a-0242ac110002",
    slug: "craig-rodwell-papers",
  },
  {
    uuid: "7b7e8f20-a5d9-013d-3753-0242ac110002",
    slug: "ida-m-mellen-papers",
  },
  {
    uuid: "6e3c8c40-a5db-013d-8176-0242ac110003",
    slug: "frank-e-buttolph-papers",
  },
  {
    uuid: "04c0b6d0-a5ef-013d-1bf6-0242ac110002",
    slug: "john-milton-papers",
  },
  {
    uuid: "2b5be100-a5dd-013d-ced4-0242ac110003",
    slug: "stanley-m-isaacs-papers",
  },
  {
    uuid: "1cbe9800-a5f5-013d-e69d-0242ac110002",
    slug: "frank-h-pierce-papers-relating-to-the-uss-monitor",
  },
  {
    uuid: "4cdd3410-a5ec-013d-3a0a-0242ac110002",
    slug: "frederick-w-kobb-and-helen-jay-de-bois-genealogical-research-papers",
  },
  {
    uuid: "3ed0c5d0-a6a7-013d-738f-0242ac110003",
    slug: "shaker-manuscript-collection",
  },
  {
    uuid: "43c9fd90-a6c1-013d-9a4a-0242ac110002",
    slug: "hayden-carruth-papers",
  },
  {
    uuid: "1f17a520-a6bb-013d-a85a-0242ac110002",
    slug: "moses-taylor-papers",
  },
  {
    uuid: "52088c10-a6a5-013d-70fe-0242ac110003",
    slug: "isaac-goldberg-papers",
  },
  {
    uuid: "8df946d0-a6ab-013d-a852-0242ac110002",
    slug: "methodist-episcopal-church-records",
  },
  {
    uuid: "fb495b10-a6ad-013d-b353-0242ac110003",
    slug: "ivins-family-papers",
  },
  {
    uuid: "e1c8aa30-8e2d-013d-fbba-0242ac110004",
    slug: "edith-storey-photographs-circa-1900s-1920s",
  },
  {
    uuid: "cb66a4f0-71fe-013d-9ac6-0242ac110002",
    slug: "pryor-dodge-collection",
  },
  {
    uuid: "18959e90-68aa-013d-588f-0242ac110002",
    slug: "photographic-scrapbook-2-3-4",
  },
  {
    uuid: "73db68b0-a38e-0134-833c-00505686d14e",
    slug: "lotte-goslar-papers",
  },
  {
    uuid: "dbaa3b50-898a-013d-f102-0242ac110003",
    slug: "artis-magn-artilleri",
  },
  {
    uuid: "320111a0-89a8-013d-79b6-0242ac110004",
    slug: "kniga-sviashchennag-psno-khvaleniia-dukhovnog-sladko-glasiia-torzhestvennago",
  },
  {
    uuid: "f0e78970-9a0b-013d-25eb-0242ac110003",
    slug: "vojtch-preissig-18731944",
  },
  {
    uuid: "dc11f7f0-99f9-013d-03f3-0242ac110002",
    slug: "trudy",
  },
  {
    uuid: "ea80b610-8d83-013d-abc4-0242ac110002",
    slug: "livonian-and-danish-parchments-and-seals",
  },
  {
    uuid: "e39763b0-898a-013d-8fd1-0242ac110003",
    slug: "armenian-manuscripts-collection",
  },
  {
    uuid: "d02e09a0-b009-013d-d871-0242ac110003",
    slug: "robert-southey-manuscript-material",
  },
  {
    uuid: "139f77c0-b5af-013d-a1be-0242ac110003",
    slug: "the-american-institute-of-social-service-exhibition-photographs-1905",
  },
  {
    uuid: "f143e880-9aee-013d-6e98-0242ac110004",
    slug: "sovetski-film",
  },
  {
    uuid: "68bb27d0-9edd-013d-bd5a-0242ac110003",
    slug: "stickerei-u-spitzen-rundschau",
  },
  {
    uuid: "2a204ba0-8d92-013d-0323-0242ac110002",
    slug: "national-negro-congress-records",
  },
  {
    uuid: "df85e300-b4f3-013d-95c7-0242ac110002",
    slug: "jn-laudem-serenissi-mi-ferdinandi-hispania-r-regis-bethi-c-regni-granat",
  },
  {
    uuid: "8489f150-dfbb-0136-6a63-037f1789ff3b",
    slug: "indoamrica",
  },
  {
    uuid: "3856e0f0-a5d5-013d-aa31-0242ac110003",
    slug: "notes-on-debates-in-the-federal-convention-of-1787",
  },
  {
    uuid: "32a4d310-beec-013d-f787-0242ac110003",
    slug: "luther-adler-papers",
  },
  {
    uuid: "94267160-9967-013d-a1a6-0242ac110002",
    slug: "ottilie-clairmont-manuscript-material",
  },
  {
    uuid: "0b155570-bf2d-013d-6fe9-0242ac110003",
    slug: "ella-baker-papers",
  },
  {
    uuid: "03e26f60-c17c-013d-ae47-0242ac110003",
    slug: "robert-moses-papers",
  },
  {
    uuid: "a60439f0-7923-013d-c553-0242ac110003",
    slug: "prints",
  },
  {
    uuid: "14034230-72af-013d-0ad3-0242ac110004",
    slug: "99-monsters",
  },
  {
    uuid: "771b9250-a9af-013d-89e5-0242ac110002",
    slug: "history-of-the-american-negro-and-his-institutions",
  },
  {
    uuid: "866eb030-78f7-013d-bba2-0242ac110002",
    slug: "prints-2",
  },
  {
    uuid: "1ca010e0-72da-013d-0a73-0242ac110002",
    slug: "good-morning",
  },
  {
    uuid: "00cc1500-b5a0-013d-ac8f-0242ac110003",
    slug: "golf-illustrated-outdoor-america",
  },
  {
    uuid: "2f0450d0-72d1-013d-7c81-0242ac110002",
    slug: "lets-go-outside",
  },
  {
    uuid: "ea653d50-bdf1-013c-b521-0242ac110002",
    slug: "charles-payne-collection",
  },
  {
    uuid: "827cabd0-bd6e-013c-9d85-0242ac110002",
    slug: "care-records",
  },
  {
    uuid: "bf4c3f90-72d5-013d-56da-0242ac110003",
    slug: "the-corona-palimpsest",
  },
  {
    uuid: "6e05b5c0-cd76-013d-cfb3-0242ac110003",
    slug: "playboy",
  },
  {
    uuid: "e2ac7ff0-72cc-013d-9a7c-0242ac110002",
    slug: "paris-metro-affiches",
  },
  {
    uuid: "43999c30-cc64-013d-cb72-0242ac110003",
    slug: "golfers-magazine",
  },
  {
    uuid: "6b3b9310-d694-013d-db33-0242ac110003",
    slug: "english-caricatures-2",
  },
  {
    uuid: "23870210-d788-013d-242c-0242ac110002",
    slug: "martin-b-duberman-papers",
  },
  {
    uuid: "029b5d60-ba5e-013d-0baa-0242ac110002",
    slug: "interreligious-foundation-for-community-organization-records",
  },
  {
    uuid: "f70af4a0-bf19-013d-ba66-0242ac110004",
    slug: "new-york-commercial-advertiser",
  },
  {
    uuid: "765eb8d0-79d7-013d-1d3e-0242ac110003",
    slug: "prints-2-3",
  },
  {
    uuid: "fee0c070-79d2-013d-3065-0242ac110004",
    slug: "prints-2-3-4",
  },
  {
    uuid: "c68a7700-b2fb-013c-0f26-0242ac110002",
    slug: "beauford-delaney-collection",
  },
  {
    uuid: "1e1b1080-a612-013d-33cf-0242ac110002",
    slug: "the-vladimir-teteriatnikov-scrapbook-collection",
  },
  {
    uuid: "02b11f70-562e-0136-56b1-717acc2d928c",
    slug: "gay-mens-health-crisis-records-2",
  },
];

export default collectionSlugToUuid;
