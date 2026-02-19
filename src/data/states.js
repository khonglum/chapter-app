const states = {
  "Argentina": [
    "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes",
    "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza",
    "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis",
    "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"
  ],
  "Australia": [
    "Australian Capital Territory", "New South Wales", "Northern Territory",
    "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"
  ],
  "Bangladesh": [
    "Barishal", "Chattogram", "Dhaka", "Khulna", "Mymensingh", "Rajshahi",
    "Rangpur", "Sylhet"
  ],
  "Belgium": [
    "Brussels-Capital Region", "Flemish Region", "Walloon Region"
  ],
  "Brazil": [
    "Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara",
    "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso",
    "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana",
    "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte",
    "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo",
    "Sergipe", "Tocantins"
  ],
  "Cambodia": [
    "Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Thom",
    "Kandal", "Phnom Penh", "Prey Veng", "Pursat", "Siem Reap", "Svay Rieng"
  ],
  "Canada": [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick",
    "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia",
    "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
    "Yukon"
  ],
  "Chile": [
    "Antofagasta", "Araucania", "Arica y Parinacota", "Atacama",
    "Aysen", "Biobio", "Coquimbo", "Los Lagos", "Los Rios", "Magallanes",
    "Maule", "Metropolitana de Santiago", "Nuble", "O'Higgins", "Tarapaca",
    "Valparaiso"
  ],
  "China": [
    "Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong",
    "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan",
    "Hong Kong", "Hubei", "Hunan", "Inner Mongolia", "Jiangsu", "Jiangxi",
    "Jilin", "Liaoning", "Macau", "Ningxia", "Qinghai", "Shaanxi",
    "Shandong", "Shanghai", "Shanxi", "Sichuan", "Tianjin", "Tibet",
    "Xinjiang", "Yunnan", "Zhejiang"
  ],
  "Colombia": [
    "Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota", "Bolivar",
    "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco",
    "Cordoba", "Cundinamarca", "Guainia", "Guaviare", "Huila", "La Guajira",
    "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo",
    "Quindio", "Risaralda", "San Andres y Providencia", "Santander", "Sucre",
    "Tolima", "Valle del Cauca", "Vaupes", "Vichada"
  ],
  "Denmark": [
    "Capital Region", "Central Denmark", "North Denmark", "Region Zealand",
    "South Denmark"
  ],
  "Egypt": [
    "Alexandria", "Aswan", "Asyut", "Beheira", "Cairo", "Dakahlia",
    "Fayoum", "Gharbia", "Giza", "Ismailia", "Luxor", "Minya",
    "Port Said", "Qalyubia", "Sharqia"
  ],
  "Finland": [
    "Central Finland", "Kainuu", "Lapland", "North Karelia",
    "North Ostrobothnia", "Ostrobothnia", "Pirkanmaa", "Satakunta",
    "South Karelia", "Uusimaa"
  ],
  "France": [
    "Auvergne-Rhone-Alpes", "Bourgogne-Franche-Comte", "Bretagne",
    "Centre-Val de Loire", "Corse", "Grand Est", "Hauts-de-France",
    "Ile-de-France", "Normandie", "Nouvelle-Aquitaine", "Occitanie",
    "Pays de la Loire", "Provence-Alpes-Cote d'Azur"
  ],
  "Germany": [
    "Baden-Wurttemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen",
    "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern",
    "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony",
    "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"
  ],
  "Ghana": [
    "Ahafo", "Ashanti", "Bono", "Bono East", "Central", "Eastern",
    "Greater Accra", "North East", "Northern", "Oti", "Savannah",
    "Upper East", "Upper West", "Volta", "Western", "Western North"
  ],
  "Hong Kong": [
    "Hong Kong Island", "Kowloon", "New Territories"
  ],
  "India": [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh",
    "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
    "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
  ],
  "Indonesia": [
    "Aceh", "Bali", "Banten", "Bengkulu", "Central Java",
    "Central Kalimantan", "Central Sulawesi", "East Java",
    "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta",
    "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku",
    "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands",
    "South Kalimantan", "South Sulawesi", "South Sumatra",
    "Southeast Sulawesi", "West Java", "West Kalimantan",
    "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra",
    "Yogyakarta"
  ],
  "Ireland": [
    "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway",
    "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick",
    "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon",
    "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"
  ],
  "Israel": [
    "Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"
  ],
  "Italy": [
    "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna",
    "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche",
    "Molise", "Piedmont", "Puglia", "Sardinia", "Sicily", "Trentino-South Tyrol",
    "Tuscany", "Umbria", "Valle d'Aosta", "Veneto"
  ],
  "Japan": [
    "Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka",
    "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo",
    "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa",
    "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano",
    "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka",
    "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi",
    "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata",
    "Yamaguchi", "Yamanashi"
  ],
  "Kenya": [
    "Bungoma", "Embu", "Garissa", "Kakamega", "Kiambu", "Kilifi",
    "Kisumu", "Machakos", "Meru", "Mombasa", "Nairobi", "Nakuru",
    "Nyeri", "Turkana", "Uasin Gishu"
  ],
  "Malaysia": [
    "Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Melaka",
    "Negeri Sembilan", "Pahang", "Penang", "Perak", "Perlis", "Putrajaya",
    "Sabah", "Sarawak", "Selangor", "Terengganu"
  ],
  "Mexico": [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
    "Chiapas", "Chihuahua", "Ciudad de Mexico", "Coahuila", "Colima",
    "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco",
    "Mexico State", "Michoacan", "Morelos", "Nayarit", "Nuevo Leon",
    "Oaxaca", "Puebla", "Queretaro", "Quintana Roo", "San Luis Potosi",
    "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz",
    "Yucatan", "Zacatecas"
  ],
  "Morocco": [
    "Beni Mellal-Khenifra", "Casablanca-Settat", "Dakhla-Oued Ed-Dahab",
    "Draa-Tafilalet", "Fes-Meknes", "Guelmim-Oued Noun",
    "Laayoune-Sakia El Hamra", "Marrakech-Safi", "Oriental",
    "Rabat-Sale-Kenitra", "Souss-Massa", "Tanger-Tetouan-Al Hoceima"
  ],
  "Myanmar": [
    "Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin",
    "Magway", "Mandalay", "Mon", "Naypyidaw", "Rakhine", "Sagaing",
    "Shan", "Tanintharyi", "Yangon"
  ],
  "Nepal": [
    "Bagmati", "Gandaki", "Karnali", "Koshi", "Lumbini", "Madhesh",
    "Sudurpashchim"
  ],
  "Netherlands": [
    "Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen",
    "Limburg", "North Brabant", "North Holland", "Overijssel",
    "South Holland", "Utrecht", "Zeeland"
  ],
  "New Zealand": [
    "Auckland", "Bay of Plenty", "Canterbury", "Gisborne", "Hawke's Bay",
    "Manawatu-Whanganui", "Marlborough", "Nelson", "Northland", "Otago",
    "Southland", "Taranaki", "Tasman", "Waikato", "Wellington",
    "West Coast"
  ],
  "Nigeria": [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti",
    "Enugu", "Federal Capital Territory", "Gombe", "Imo", "Jigawa",
    "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
    "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ],
  "Norway": [
    "Agder", "Innlandet", "More og Romsdal", "Nordland", "Oslo",
    "Rogaland", "Troms og Finnmark", "Trondelag", "Vestfold og Telemark",
    "Vestland", "Viken"
  ],
  "Pakistan": [
    "Azad Jammu and Kashmir", "Balochistan", "Gilgit-Baltistan",
    "Islamabad Capital Territory", "Khyber Pakhtunkhwa", "Punjab", "Sindh"
  ],
  "Peru": [
    "Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca",
    "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin",
    "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios",
    "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna",
    "Tumbes", "Ucayali"
  ],
  "Philippines": [
    "Bangsamoro", "Bicol", "CAR (Cordillera)", "CALABARZON", "Caraga",
    "Cagayan Valley", "Central Luzon", "Central Visayas", "Davao",
    "Eastern Visayas", "Ilocos", "MIMAROPA", "National Capital Region",
    "Northern Mindanao", "SOCCSKSARGEN", "Western Visayas", "Zamboanga Peninsula"
  ],
  "Poland": [
    "Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz",
    "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole",
    "Podkarpackie", "Podlaskie", "Pomeranian", "Silesian", "Swietokrzyskie",
    "Warmian-Masurian", "West Pomeranian"
  ],
  "Portugal": [
    "Aveiro", "Azores", "Beja", "Braga", "Braganca", "Castelo Branco",
    "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisbon", "Madeira",
    "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo",
    "Vila Real", "Viseu"
  ],
  "Russia": [
    "Chelyabinsk", "Irkutsk", "Kaliningrad", "Krasnodar", "Krasnoyarsk",
    "Moscow", "Moscow Oblast", "Nizhny Novgorod", "Novosibirsk",
    "Perm", "Rostov", "Saint Petersburg", "Samara", "Sverdlovsk",
    "Tatarstan", "Tyumen", "Volgograd", "Voronezh",
    "Bashkortostan", "Chechen Republic"
  ],
  "Saudi Arabia": [
    "Al Bahah", "Al Jawf", "Al Madinah", "Al Qassim", "Asir",
    "Eastern Province", "Ha'il", "Jazan", "Makkah", "Najran",
    "Northern Borders", "Riyadh", "Tabuk"
  ],
  "Singapore": [
    "Singapore"
  ],
  "South Africa": [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo",
    "Mpumalanga", "North West", "Northern Cape", "Western Cape"
  ],
  "South Korea": [
    "Busan", "Chungcheongbuk-do", "Chungcheongnam-do", "Daegu", "Daejeon",
    "Gangwon-do", "Gwangju", "Gyeonggi-do", "Gyeongsangbuk-do",
    "Gyeongsangnam-do", "Incheon", "Jeju-do", "Jeollabuk-do",
    "Jeollanam-do", "Sejong", "Seoul", "Ulsan"
  ],
  "Spain": [
    "Andalusia", "Aragon", "Asturias", "Balearic Islands", "Basque Country",
    "Canary Islands", "Cantabria", "Castile and Leon", "Castile-La Mancha",
    "Catalonia", "Community of Madrid", "Extremadura", "Galicia",
    "La Rioja", "Murcia", "Navarre", "Valencian Community"
  ],
  "Sri Lanka": [
    "Central", "Eastern", "North Central", "North Western", "Northern",
    "Sabaragamuwa", "Southern", "Uva", "Western"
  ],
  "Sweden": [
    "Blekinge", "Dalarna", "Gavleborg", "Gotland", "Halland",
    "Jamtland", "Jonkoping", "Kalmar", "Kronoberg", "Norrbotten",
    "Orebro", "Ostergotland", "Skane", "Sodermanland", "Stockholm",
    "Uppsala", "Varmland", "Vasterbotten", "Vasternorrland",
    "Vastmanland", "Vastra Gotaland"
  ],
  "Switzerland": [
    "Aargau", "Appenzell Ausserrhoden", "Appenzell Innerrhoden",
    "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneva",
    "Glarus", "Graubunden", "Jura", "Lucerne", "Neuchatel", "Nidwalden",
    "Obwalden", "Schaffhausen", "Schwyz", "Solothurn", "St. Gallen",
    "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"
  ],
  "Taiwan": [
    "Changhua County", "Chiayi City", "Chiayi County", "Hsinchu City",
    "Hsinchu County", "Hualien County", "Kaohsiung", "Keelung",
    "Kinmen County", "Lienchiang County", "Miaoli County", "Nantou County",
    "New Taipei", "Penghu County", "Pingtung County", "Taichung",
    "Tainan", "Taipei", "Taitung County", "Taoyuan", "Yilan County",
    "Yunlin County"
  ],
  "Thailand": [
    "Bangkok", "Chiang Mai", "Chiang Rai", "Chonburi", "Khon Kaen",
    "Krabi", "Lampang", "Nakhon Ratchasima", "Nakhon Si Thammarat",
    "Nonthaburi", "Pathum Thani", "Pattani", "Phuket", "Rayong",
    "Samut Prakan", "Samut Sakhon", "Songkhla", "Surat Thani",
    "Ubon Ratchathani", "Udon Thani"
  ],
  "Turkey": [
    "Adana", "Ankara", "Antalya", "Balikesir", "Bursa", "Denizli",
    "Diyarbakir", "Eskisehir", "Gaziantep", "Istanbul", "Izmir",
    "Kayseri", "Kocaeli", "Konya", "Malatya", "Manisa", "Mersin",
    "Mugla", "Samsun", "Trabzon"
  ],
  "United Arab Emirates": [
    "Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah",
    "Sharjah", "Umm Al Quwain"
  ],
  "United Kingdom": [
    "Bedfordshire", "Berkshire", "Birmingham", "Bristol", "Buckinghamshire",
    "Cambridgeshire", "Cheshire", "Cornwall", "County Durham", "Cumbria",
    "Derbyshire", "Devon", "Dorset", "East Sussex", "East Yorkshire",
    "Edinburgh", "Essex", "Glasgow", "Gloucestershire", "Greater London",
    "Greater Manchester", "Hampshire", "Herefordshire", "Hertfordshire",
    "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Liverpool",
    "Norfolk", "North Yorkshire", "Northern Ireland", "Northamptonshire",
    "Northumberland", "Nottinghamshire", "Oxfordshire", "Rutland", "Scotland",
    "Shropshire", "Somerset", "South Yorkshire", "Staffordshire", "Suffolk",
    "Surrey", "Tyne and Wear", "Wales", "Warwickshire", "West Midlands",
    "West Sussex", "West Yorkshire", "Wiltshire", "Worcestershire"
  ],
  "United States": [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
  ],
  "Vietnam": [
    "Ba Ria-Vung Tau", "Binh Duong", "Can Tho", "Da Nang", "Dak Lak",
    "Dong Nai", "Hai Phong", "Ha Noi", "Ho Chi Minh City", "Hue",
    "Khanh Hoa", "Lam Dong", "Long An", "Nghe An", "Quang Nam",
    "Quang Ninh", "Thanh Hoa", "Thai Nguyen", "Tien Giang", "Vinh Phuc"
  ]
};

export default states;
