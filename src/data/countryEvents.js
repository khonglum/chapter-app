const countryEvents = {
  "United States": {
    "2020s": [
      { label: "Capitol Riot", desc: "Supporters of President Trump stormed the US Capitol on January 6, 2021 in an attempt to overturn the election" },
      { label: "Roe v Wade Overturned", desc: "The Supreme Court struck down federal abortion rights in 2022, returning the issue to individual states" },
      { label: "AI Boom", desc: "ChatGPT and generative AI rapidly transformed tech, business, and creative industries across America" },
    ],
    "2010s": [
      { label: "Obama Era", desc: "President Obama signed the Affordable Care Act and pursued progressive domestic policies across two terms" },
      { label: "Trump Elected", desc: "Donald Trump won the 2016 presidential election, ushering in a populist shift in American politics" },
      { label: "BLM Movement", desc: "Black Lives Matter protests against police brutality and racial injustice swept cities nationwide after high-profile killings" },
    ],
    "2000s": [
      { label: "9/11 Attacks", desc: "Terrorists hijacked planes and struck the World Trade Center and Pentagon on September 11, 2001, killing nearly 3,000" },
      { label: "Hurricane Katrina", desc: "A catastrophic hurricane devastated New Orleans and the Gulf Coast in 2005, exposing failures in disaster response" },
      { label: "Obama Inaugurated", desc: "Barack Obama became the first African American president in January 2009, winning on a message of hope" },
    ],
    "1990s": [
      { label: "NAFTA Signed", desc: "The North American Free Trade Agreement eliminated trade barriers between the US, Canada, and Mexico in 1994" },
      { label: "Clinton Impeachment", desc: "President Bill Clinton was impeached by the House in 1998 over perjury charges but acquitted by the Senate" },
      { label: "Dot-com Bubble", desc: "Massive speculation in internet startups drove stock prices to unsustainable highs before the market crashed in 2000" },
    ],
    "1980s": [
      { label: "Reagan Revolution", desc: "President Reagan championed tax cuts, deregulation, and a strong military posture that reshaped conservative politics" },
      { label: "Challenger Disaster", desc: "The Space Shuttle Challenger broke apart 73 seconds after launch in 1986, killing all seven crew members" },
      { label: "Berlin Wall Falls", desc: "The fall of the Berlin Wall in 1989 symbolized the end of the Cold War and American ideological victory" },
    ],
    "1970s": [
      { label: "Watergate Scandal", desc: "A political scandal led to President Nixon's resignation in 1974 after evidence of White House cover-ups emerged" },
      { label: "Vietnam War Ends", desc: "The last US troops withdrew from Vietnam and Saigon fell in 1975, ending America's longest war at the time" },
      { label: "Moon Landing Era", desc: "NASA continued Apollo missions in the early 1970s, cementing America's legacy in space exploration and achievement" },
    ],
    "1960s": [
      { label: "JFK Assassination", desc: "President John F. Kennedy was assassinated in Dallas, Texas on November 22, 1963, shocking the entire nation" },
      { label: "Civil Rights Act", desc: "Landmark 1964 legislation outlawed discrimination based on race, color, religion, sex, or national origin across America" },
      { label: "Moon Landing", desc: "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon in 1969" },
    ],
    "1950s": [
      { label: "Korean War", desc: "American forces fought in Korea from 1950 to 1953 to contain communist expansion in the Cold War era" },
      { label: "Rosa Parks Protest", desc: "Rosa Parks refused to give up her bus seat in 1955, sparking the Montgomery Bus Boycott and civil rights movement" },
      { label: "Interstate Highways Built", desc: "The Federal Highway Act of 1956 authorized construction of 41,000 miles of interstate highways across the nation" },
    ],
    "1940s": [
      { label: "Pearl Harbor Attack", desc: "Japan bombed Pearl Harbor on December 7, 1941, drawing the United States into World War II" },
      { label: "D-Day Invasion", desc: "Allied forces stormed the beaches of Normandy on June 6, 1944 in the largest seaborne invasion in history" },
      { label: "Atomic Bomb Dropped", desc: "The US dropped atomic bombs on Hiroshima and Nagasaki in August 1945, leading to Japan's surrender" },
    ],
    "1930s": [
      { label: "Great Depression", desc: "The worst economic downturn in modern history caused mass unemployment, poverty, and bank failures across America" },
      { label: "New Deal Programs", desc: "President Roosevelt launched sweeping federal programs to provide relief, recovery, and reform during the Depression era" },
      { label: "Dust Bowl Crisis", desc: "Severe drought and poor farming practices created devastating dust storms across the Great Plains throughout the 1930s" },
    ],
    "1920s": [
      { label: "Roaring Twenties", desc: "A decade of economic prosperity, cultural dynamism, jazz music, and social change transformed American urban life" },
      { label: "Women Win Suffrage", desc: "The 19th Amendment was ratified in 1920, granting women the constitutional right to vote across all states" },
      { label: "Prohibition Era", desc: "The 18th Amendment banned alcohol production and sale, fueling organized crime and speakeasy culture nationwide" },
    ],
    "1910s": [
      { label: "World War I Entry", desc: "The United States entered World War I in 1917, tipping the balance in favor of the Allied Powers" },
      { label: "Panama Canal Opens", desc: "The Panama Canal opened in 1914, revolutionizing global trade by connecting the Atlantic and Pacific oceans" },
      { label: "Spanish Flu Pandemic", desc: "The 1918 influenza pandemic killed an estimated 675,000 Americans and tens of millions of people worldwide" },
    ],
    "1900s": [
      { label: "Wright Brothers Fly", desc: "Orville and Wilbur Wright achieved the first powered airplane flight at Kitty Hawk, North Carolina in 1903" },
      { label: "Model T Launched", desc: "Henry Ford introduced the affordable Model T in 1908, making automobile ownership accessible to ordinary Americans" },
      { label: "San Francisco Earthquake", desc: "A devastating earthquake and subsequent fires destroyed much of San Francisco in 1906, killing over 3,000 people" },
    ],
  },
  "United Kingdom": {
    "2020s": [
      { label: "Queen Elizabeth Passes", desc: "Queen Elizabeth II died in September 2022 after 70 years on the throne, the longest reign in British history" },
      { label: "Brexit Enacted", desc: "The UK formally left the European Union in January 2020 after years of contentious political debate" },
      { label: "Cost of Living Crisis", desc: "Soaring energy prices and inflation squeezed household budgets across Britain, triggering widespread economic hardship" },
    ],
    "2010s": [
      { label: "Brexit Referendum", desc: "The UK voted 52% to 48% to leave the European Union in June 2016, reshaping British politics entirely" },
      { label: "Royal Wedding", desc: "Prince William married Catherine Middleton in 2011 in a globally televised ceremony at Westminster Abbey" },
      { label: "Scottish Independence Vote", desc: "Scotland held an independence referendum in 2014, with 55% voting to remain part of the United Kingdom" },
    ],
    "2000s": [
      { label: "London Bombings", desc: "Coordinated terrorist bombings struck London's public transport system on July 7, 2005, killing 52 people" },
      { label: "Iraq War Involvement", desc: "The UK joined the US-led invasion of Iraq in 2003, sparking massive anti-war protests across Britain" },
      { label: "Financial Crisis", desc: "The 2008 global financial crisis hit Britain hard, requiring government bailouts of major banks like RBS" },
    ],
    "1990s": [
      { label: "Princess Diana Dies", desc: "Princess Diana was killed in a car crash in Paris in 1997, prompting an unprecedented wave of public grief" },
      { label: "Channel Tunnel Opens", desc: "The Channel Tunnel linking England and France opened in 1994, creating a rail connection under the English Channel" },
      { label: "Good Friday Agreement", desc: "The 1998 peace accord largely ended decades of sectarian conflict in Northern Ireland through power-sharing arrangements" },
    ],
    "1980s": [
      { label: "Falklands War", desc: "Britain fought and won a brief war against Argentina over the Falkland Islands in the South Atlantic in 1982" },
      { label: "Thatcher Era", desc: "Prime Minister Margaret Thatcher pursued privatization, deregulation, and anti-union policies that reshaped the British economy" },
      { label: "Miners Strike", desc: "Coal miners staged a year-long strike in 1984-85 against pit closures, ending in a defeat that weakened unions" },
    ],
    "1970s": [
      { label: "UK Joins EEC", desc: "Britain joined the European Economic Community in 1973, beginning decades of economic integration with continental Europe" },
      { label: "Winter of Discontent", desc: "Widespread public sector strikes during the winter of 1978-79 caused chaos and helped bring Thatcher to power" },
      { label: "North Sea Oil", desc: "Discovery and extraction of North Sea oil transformed Britain's energy landscape and boosted government revenues significantly" },
    ],
    "1960s": [
      { label: "Beatlemania", desc: "The Beatles became a global cultural phenomenon, revolutionizing popular music and defining the spirit of the 1960s" },
      { label: "Swinging Sixties", desc: "London became the center of a cultural revolution in fashion, music, and social attitudes during the decade" },
      { label: "Decolonization Era", desc: "Britain granted independence to numerous African and Asian colonies, marking the rapid dissolution of the British Empire" },
    ],
    "1950s": [
      { label: "Queen Elizabeth Crowned", desc: "Elizabeth II was crowned in June 1953 in the first coronation to be televised, watched by millions" },
      { label: "NHS Established", desc: "The National Health Service launched in 1948, providing free healthcare at the point of use for all Britons" },
      { label: "Suez Crisis", desc: "Britain's failed 1956 military intervention in Egypt exposed declining imperial power and strained US-UK relations" },
    ],
    "1940s": [
      { label: "World War II", desc: "Britain endured the Blitz, fought across multiple fronts, and emerged victorious but economically exhausted from the war" },
      { label: "Battle of Britain", desc: "The Royal Air Force defended Britain against massive German air attacks in 1940, preventing a Nazi invasion" },
      { label: "NHS Founded", desc: "The Labour government established the National Health Service in 1948 to provide universal free healthcare" },
    ],
    "1930s": [
      { label: "Abdication Crisis", desc: "King Edward VIII abdicated in 1936 to marry American divorcee Wallis Simpson, shocking the British establishment" },
      { label: "Great Depression Impact", desc: "Mass unemployment and economic hardship hit industrial regions especially hard during the global economic downturn" },
      { label: "Appeasement Policy", desc: "Prime Minister Chamberlain pursued appeasement of Hitler, culminating in the 1938 Munich Agreement before war broke out" },
    ],
    "1920s": [
      { label: "Irish Independence", desc: "The Anglo-Irish Treaty of 1921 established the Irish Free State, ending centuries of direct British rule over Ireland" },
      { label: "General Strike", desc: "A nine-day general strike in 1926 paralyzed the country as workers supported coal miners facing wage cuts" },
      { label: "BBC Founded", desc: "The British Broadcasting Corporation was established in 1922, becoming a pioneering institution in public service broadcasting" },
    ],
    "1910s": [
      { label: "World War I", desc: "Britain entered the Great War in 1914, suffering nearly a million military deaths over four devastating years" },
      { label: "Titanic Sinks", desc: "The RMS Titanic sank on its maiden voyage in 1912 after hitting an iceberg, killing over 1,500 passengers" },
      { label: "Women Suffrage Movement", desc: "Suffragettes campaigned vigorously for women's voting rights, leading to partial suffrage being granted in 1918" },
    ],
    "1900s": [
      { label: "Edwardian Era Begins", desc: "King Edward VII's reign ushered in a period of social change, technological progress, and imperial confidence" },
      { label: "Labour Party Founded", desc: "The Labour Party was formally established in 1900, giving the British working class direct political representation" },
      { label: "Entente Cordiale Signed", desc: "Britain and France signed the 1904 Entente Cordiale, resolving colonial disputes and forming a strategic alliance" },
    ],
  },
  "Malaysia": {
    "2020s": [
      { label: "Political Realignment", desc: "Malaysia experienced major shifts in political coalitions, with multiple changes of government in a short period" },
      { label: "Endemic COVID Transition", desc: "Malaysia transitioned from pandemic restrictions to treating COVID-19 as endemic in April 2022, reopening borders" },
      { label: "Anwar Becomes PM", desc: "Anwar Ibrahim became Prime Minister in November 2022 after decades as opposition leader, forming a unity government" },
    ],
    "2010s": [
      { label: "1MDB Scandal", desc: "Billions were allegedly embezzled from the state investment fund 1MDB, leading to a massive international corruption probe" },
      { label: "GST Introduced", desc: "Malaysia implemented a 6% Goods and Services Tax in 2015, later abolished after the 2018 change of government" },
      { label: "Pakatan Harapan Wins", desc: "The opposition coalition won the 2018 general election, ending 61 years of Barisan Nasional rule for the first time" },
    ],
    "2000s": [
      { label: "Petronas Towers Era", desc: "The Petronas Twin Towers symbolized Malaysia's modernization ambitions and economic growth on the world stage" },
      { label: "Multimedia Super Corridor", desc: "Malaysia launched a technology corridor to attract global IT companies and develop its digital economy infrastructure" },
      { label: "Abdullah Badawi Era", desc: "Abdullah Badawi succeeded Mahathir as Prime Minister in 2003, initially winning a landslide before losing ground" },
    ],
    "1990s": [
      { label: "Asian Financial Crisis", desc: "The 1997 crisis devastated Malaysia's economy, with Mahathir imposing capital controls rather than accepting IMF aid" },
      { label: "KL Tower Built", desc: "The Kuala Lumpur Tower was completed in 1995, becoming a major telecommunications tower and city landmark" },
      { label: "Rapid Industrialization", desc: "Malaysia transformed from an agricultural economy to a manufacturing powerhouse, especially in electronics and semiconductors" },
    ],
    "1980s": [
      { label: "Look East Policy", desc: "Mahathir encouraged Malaysia to emulate Japanese and Korean work ethics and development models for economic growth" },
      { label: "Proton Car Launched", desc: "Malaysia's national car project Proton launched its first model in 1985, symbolizing industrial ambition and national pride" },
      { label: "Mahathir Era Begins", desc: "Mahathir Mohamad became Prime Minister in 1981, beginning a 22-year tenure that transformed the nation's economy" },
    ],
    "1970s": [
      { label: "New Economic Policy", desc: "The NEP was introduced in 1971 to reduce poverty and restructure the economy to address ethnic economic disparities" },
      { label: "Rukun Negara Adopted", desc: "Malaysia adopted the Rukun Negara as its national ideology in 1970 to promote unity after racial tensions" },
      { label: "Federal Territory Formed", desc: "Kuala Lumpur was carved out of Selangor in 1974 to become a federal territory and the national capital" },
    ],
    "1960s": [
      { label: "Malaysia Formed", desc: "The Federation of Malaysia was established in 1963, uniting Malaya, Singapore, Sabah, and Sarawak into one nation" },
      { label: "Singapore Separates", desc: "Singapore was expelled from the Malaysian Federation in 1965 due to political and ethnic tensions between leaders" },
      { label: "Confrontation With Indonesia", desc: "Indonesia opposed the formation of Malaysia, leading to a low-level military confrontation from 1963 to 1966" },
    ],
    "1950s": [
      { label: "Merdeka Independence", desc: "Malaya gained independence from Britain on August 31, 1957, with Tunku Abdul Rahman declaring Merdeka in Kuala Lumpur" },
      { label: "Emergency Period", desc: "The Malayan Emergency saw British and local forces fight a communist insurgency in the jungles from 1948 to 1960" },
      { label: "Alliance Party Formed", desc: "The Alliance coalition of UMNO, MCA, and MIC was formed, establishing the multiracial political model for independence" },
    ],
    "1940s": [
      { label: "Japanese Occupation", desc: "Japan occupied Malaya from 1942 to 1945, causing widespread hardship and fueling post-war nationalist sentiment" },
      { label: "Malayan Union Proposed", desc: "Britain proposed the Malayan Union in 1946, sparking widespread Malay opposition that united nationalist political movements" },
      { label: "Federation of Malaya", desc: "The Federation of Malaya was established in 1948 as a compromise, replacing the unpopular Malayan Union proposal" },
    ],
    "1930s": [
      { label: "Great Depression Impact", desc: "Falling commodity prices during the Depression devastated Malaya's rubber and tin export-dependent economy severely" },
      { label: "Rubber Industry Decline", desc: "Global demand for rubber collapsed in the 1930s, causing widespread unemployment among plantation workers in Malaya" },
      { label: "Decentralization Policy", desc: "The British colonial administration shifted toward greater administrative decentralization across the Malay states during this period" },
    ],
    "1920s": [
      { label: "Rubber Boom", desc: "Surging global demand for rubber brought economic prosperity and attracted waves of immigrant labor to Malaya" },
      { label: "Tin Mining Peak", desc: "Malaya became the world's largest tin producer, with mining operations driving economic growth and infrastructure development" },
      { label: "British Colonial Rule", desc: "Britain consolidated its control over the Malay Peninsula through a system of residents and advisors to local rulers" },
    ],
    "1910s": [
      { label: "Federated Malay States", desc: "The Federated Malay States operated under centralized British administration, developing modern infrastructure and civil services" },
      { label: "Rubber Plantations Expand", desc: "Large-scale rubber plantations expanded rapidly across Malaya, transforming the landscape and attracting migrant workers from abroad" },
      { label: "Railway Network Grows", desc: "British colonial authorities expanded the railway network to connect tin mines and rubber plantations to coastal ports" },
    ],
    "1900s": [
      { label: "British Malaya Established", desc: "Britain consolidated its authority over the Malay Peninsula through treaties and administrative arrangements with local rulers" },
      { label: "Tin Industry Booms", desc: "Tin mining expanded dramatically in the early 1900s, making Malaya a leading global producer of the metal" },
      { label: "Immigration Increases", desc: "Large numbers of Chinese and Indian immigrants arrived to work in mines and plantations, reshaping Malaya's demographics" },
    ],
  },
  "Singapore": {
    "2020s": [
      { label: "COVID Zero Strategy", desc: "Singapore initially pursued strict COVID containment before transitioning to living with the virus as endemic" },
      { label: "Changi Terminal 5 Plans", desc: "Singapore advanced plans for Changi Airport Terminal 5, a massive expansion to maintain its aviation hub status" },
      { label: "Lee Hsien Loong Steps Down", desc: "Prime Minister Lee Hsien Loong handed power to Lawrence Wong in 2024, marking a generational leadership transition" },
    ],
    "2010s": [
      { label: "Lee Kuan Yew Passes", desc: "Founding father Lee Kuan Yew died in March 2015, prompting a massive national outpouring of grief and reflection" },
      { label: "SG50 Celebration", desc: "Singapore celebrated its 50th anniversary of independence in 2015 with nationwide festivities and national reflection" },
      { label: "Smart Nation Initiative", desc: "The government launched the Smart Nation initiative to harness technology for improving public services and daily life" },
    ],
    "2000s": [
      { label: "Integrated Resorts Built", desc: "Marina Bay Sands and Resorts World Sentosa opened as integrated resorts, transforming Singapore's tourism and entertainment landscape" },
      { label: "SARS Outbreak", desc: "The 2003 SARS epidemic tested Singapore's public health system, killing 33 people and reshaping crisis preparedness" },
      { label: "Biomedical Hub Push", desc: "Singapore invested heavily in biomedical sciences research and manufacturing to diversify its high-tech economy further" },
    ],
    "1990s": [
      { label: "Asian Financial Crisis", desc: "Singapore weathered the 1997 Asian financial crisis relatively well due to strong reserves and prudent fiscal management" },
      { label: "Changi Airport Expands", desc: "Changi Airport underwent major expansions in the 1990s, solidifying its reputation as a world-class aviation hub" },
      { label: "Tech Industry Growth", desc: "Singapore invested in information technology infrastructure and education, positioning itself as a regional technology hub" },
    ],
    "1980s": [
      { label: "MRT System Opens", desc: "Singapore's Mass Rapid Transit system began operations in 1987, revolutionizing public transportation across the island" },
      { label: "Economic Restructuring", desc: "Singapore shifted from labor-intensive manufacturing to higher-value industries like finance, technology, and services" },
      { label: "Public Housing Boom", desc: "The government rapidly expanded HDB public housing, eventually housing the vast majority of Singapore's population" },
    ],
    "1970s": [
      { label: "National Service Begins", desc: "Singapore implemented mandatory military conscription for male citizens to build a credible defense force for the small nation" },
      { label: "Jurong Industrial Estate", desc: "The Jurong Industrial Estate grew into a major manufacturing zone, driving Singapore's rapid economic industrialization" },
      { label: "HDB Expansion", desc: "The Housing Development Board massively expanded public housing construction, providing affordable homes for the growing population" },
    ],
    "1960s": [
      { label: "Independence Declared", desc: "Singapore became an independent republic on August 9, 1965, after separation from Malaysia under difficult circumstances" },
      { label: "Separation From Malaysia", desc: "Singapore was expelled from the Malaysian Federation in 1965, forcing the small island nation to survive independently" },
      { label: "Industrialization Begins", desc: "Singapore launched aggressive industrialization efforts to create jobs and build an economy from virtually no natural resources" },
    ],
  },
  "India": {
    "2020s": [
      { label: "COVID Second Wave", desc: "India suffered a devastating second COVID wave in 2021, overwhelming hospitals and causing widespread oxygen shortages" },
      { label: "Chandrayaan-3 Lands", desc: "India became the fourth country to land on the Moon in 2023, with Chandrayaan-3 touching down near the south pole" },
      { label: "Digital India Push", desc: "The government accelerated digital infrastructure development, expanding internet access and digital payment systems across the country" },
    ],
    "2010s": [
      { label: "Demonetization", desc: "Prime Minister Modi suddenly banned 500 and 1000 rupee notes in 2016, aiming to curb corruption and black money" },
      { label: "GST Rollout", desc: "India implemented a unified Goods and Services Tax in 2017, replacing a complex web of state and central taxes" },
      { label: "Aadhaar System Launched", desc: "The world's largest biometric ID system was rolled out, assigning unique 12-digit numbers to over a billion Indians" },
    ],
    "2000s": [
      { label: "Mumbai Terror Attacks", desc: "Coordinated terrorist attacks struck multiple locations in Mumbai in November 2008, killing 166 people over three days" },
      { label: "IT Industry Boom", desc: "India's information technology sector experienced explosive growth, with companies like Infosys and TCS becoming global leaders" },
      { label: "Economic Liberalization Grows", desc: "India continued market reforms begun in the 1990s, achieving rapid GDP growth and expanding its middle class significantly" },
    ],
    "1990s": [
      { label: "Economic Reforms Begin", desc: "Finance Minister Manmohan Singh launched landmark economic liberalization in 1991, opening India's economy to global markets" },
      { label: "Pokhran Nuclear Tests", desc: "India conducted nuclear weapons tests at Pokhran in 1998, declaring itself a nuclear power and facing international sanctions" },
      { label: "Liberalization Era", desc: "India dismantled the License Raj system, reducing bureaucratic controls and encouraging private enterprise and foreign investment" },
    ],
    "1980s": [
      { label: "Bhopal Gas Tragedy", desc: "A toxic gas leak at a Union Carbide pesticide plant in Bhopal in 1984 killed thousands in history's worst industrial disaster" },
      { label: "Indira Gandhi Assassinated", desc: "Prime Minister Indira Gandhi was assassinated by her Sikh bodyguards in 1984, triggering deadly anti-Sikh riots" },
      { label: "Operation Blue Star", desc: "The Indian Army stormed the Golden Temple in Amritsar in 1984 to remove armed Sikh militants, causing major controversy" },
    ],
    "1970s": [
      { label: "Emergency Period", desc: "Prime Minister Indira Gandhi declared a state of emergency from 1975 to 1977, suspending civil liberties and elections" },
      { label: "Green Revolution", desc: "New agricultural technologies and high-yield crop varieties dramatically increased food production, averting widespread famine in India" },
      { label: "Bangladesh War", desc: "India intervened militarily in 1971, leading to the creation of Bangladesh from former East Pakistan after a brief war" },
    ],
    "1960s": [
      { label: "Indo-Pak Wars", desc: "India and Pakistan fought wars in 1965 over Kashmir, with both sides claiming victory in the inconclusive conflict" },
      { label: "Nehru Era Ends", desc: "Prime Minister Jawaharlal Nehru died in 1964, ending an era of nation-building and non-aligned foreign policy leadership" },
      { label: "Green Revolution Starts", desc: "India began adopting modern agricultural practices and high-yield seeds to boost food production and combat hunger" },
    ],
    "1950s": [
      { label: "First Elections Held", desc: "India held its first general elections in 1951-52, becoming the world's largest democracy with universal adult suffrage" },
      { label: "Five Year Plans", desc: "India adopted Soviet-style five-year economic plans to drive industrialization, infrastructure development, and self-sufficiency" },
      { label: "States Reorganized", desc: "The States Reorganisation Act of 1956 redrew India's internal boundaries along linguistic lines, creating new states" },
    ],
    "1940s": [
      { label: "Independence Achieved", desc: "India gained independence from British colonial rule on August 15, 1947, after decades of struggle and sacrifice" },
      { label: "Partition of India", desc: "The subcontinent was divided into India and Pakistan in 1947, causing massive displacement and communal violence" },
      { label: "Gandhi Assassinated", desc: "Mahatma Gandhi was shot and killed by a Hindu nationalist on January 30, 1948, plunging the nation into mourning" },
    ],
    "1930s": [
      { label: "Salt March", desc: "Gandhi led the famous 240-mile Salt March in 1930 to protest British salt taxes, galvanizing the independence movement" },
      { label: "Civil Disobedience Movement", desc: "Indians engaged in widespread nonviolent resistance against British rule, including boycotts of British goods and institutions" },
      { label: "Round Table Conferences", desc: "British and Indian leaders held conferences in London from 1930 to 1932 to discuss constitutional reforms for India" },
    ],
    "1920s": [
      { label: "Non-Cooperation Movement", desc: "Gandhi launched a mass movement urging Indians to boycott British institutions, goods, and titles to demand self-rule" },
      { label: "Gandhi Leads Freedom", desc: "Mahatma Gandhi emerged as the central leader of India's independence movement, promoting nonviolent civil disobedience nationwide" },
      { label: "Chauri Chaura Incident", desc: "Protesters set fire to a police station in 1922, killing officers, prompting Gandhi to halt the non-cooperation movement" },
    ],
    "1910s": [
      { label: "Home Rule Movement", desc: "Indian leaders Tilak and Besant launched Home Rule Leagues demanding self-governance within the British Empire framework" },
      { label: "Jallianwala Bagh Massacre", desc: "British troops killed hundreds of unarmed civilians at a peaceful gathering in Amritsar in 1919, outraging all of India" },
      { label: "Lucknow Pact", desc: "The Indian National Congress and Muslim League agreed on a framework for Hindu-Muslim political cooperation in 1916" },
    ],
    "1900s": [
      { label: "Bengal Partition", desc: "The British partitioned Bengal in 1905 along religious lines, sparking widespread protests and the Swadeshi movement" },
      { label: "Swadeshi Movement", desc: "Indians boycotted British goods and promoted domestic products as a form of economic resistance against colonial rule" },
      { label: "Indian National Congress Grows", desc: "The Congress party expanded its base and began demanding greater Indian participation in governance and self-rule" },
    ],
  },
  "Japan": {
    "2020s": [
      { label: "Tokyo Olympics Held", desc: "The postponed 2020 Olympics were held in Tokyo in 2021 without spectators due to the ongoing COVID pandemic" },
      { label: "Abe Assassinated", desc: "Former Prime Minister Shinzo Abe was fatally shot during a campaign speech in July 2022, shocking the nation" },
      { label: "Yen Weakens Sharply", desc: "The Japanese yen fell to multi-decade lows against the dollar, driven by divergent monetary policies with the US" },
    ],
    "2010s": [
      { label: "Fukushima Disaster", desc: "A massive earthquake and tsunami in 2011 caused nuclear meltdowns at Fukushima, the worst nuclear accident since Chernobyl" },
      { label: "Tokyo Olympics Awarded", desc: "Tokyo was selected in 2013 to host the 2020 Summer Olympics, sparking a wave of urban development projects" },
      { label: "Abenomics Era", desc: "Prime Minister Abe launched aggressive monetary easing, fiscal stimulus, and structural reforms to revive Japan's stagnant economy" },
    ],
    "2000s": [
      { label: "Koizumi Reforms", desc: "Prime Minister Koizumi pursued structural reforms including postal privatization to modernize Japan's economy and government institutions" },
      { label: "Aging Population Crisis", desc: "Japan confronted a rapidly aging society with declining birth rates, creating severe labor shortages and fiscal pressures" },
      { label: "Tech Innovation Hub", desc: "Japan continued to lead in robotics, electronics, and automotive technology innovation despite broader economic stagnation" },
    ],
    "1990s": [
      { label: "Lost Decade Begins", desc: "Japan's asset bubble burst, triggering a prolonged period of economic stagnation, deflation, and banking crises throughout the 1990s" },
      { label: "Kobe Earthquake", desc: "A devastating earthquake struck Kobe in January 1995, killing over 6,000 people and causing massive infrastructure destruction" },
      { label: "Tokyo Subway Attack", desc: "The Aum Shinrikyo cult released sarin nerve gas on Tokyo subway trains in 1995, killing 13 and injuring thousands" },
    ],
    "1980s": [
      { label: "Economic Bubble Peak", desc: "Japan's economy surged with soaring real estate and stock prices, making Tokyo's land theoretically worth more than all of America" },
      { label: "Plaza Accord Signed", desc: "Major nations agreed to depreciate the US dollar against the yen in 1985, significantly impacting Japan's export economy" },
      { label: "Nintendo Era Begins", desc: "Nintendo launched the NES console and iconic games like Super Mario Bros, revolutionizing the global video game industry" },
    ],
    "1970s": [
      { label: "Oil Crisis Impact", desc: "The 1973 oil crisis hit resource-poor Japan especially hard, forcing dramatic improvements in energy efficiency and conservation" },
      { label: "Okinawa Returned", desc: "The United States returned administrative control of Okinawa to Japan in 1972 after 27 years of post-war occupation" },
      { label: "Economic Growth Continues", desc: "Japan maintained strong economic growth through manufacturing exports, becoming the world's second-largest economy by decade's end" },
    ],
    "1960s": [
      { label: "Tokyo Olympics 1964", desc: "The 1964 Tokyo Olympics showcased Japan's remarkable post-war recovery and modernization to the entire world" },
      { label: "Bullet Train Launched", desc: "The Shinkansen high-speed rail began service in 1964, connecting Tokyo and Osaka and revolutionizing rail travel globally" },
      { label: "Economic Miracle", desc: "Japan experienced extraordinary economic growth through export-led industrialization, becoming a major global economic power by the late 1960s" },
    ],
    "1950s": [
      { label: "Korean War Boom", desc: "American military procurement during the Korean War stimulated Japan's industrial recovery and launched its economic resurgence" },
      { label: "Post-War Recovery", desc: "Japan rebuilt its devastated economy and infrastructure with remarkable speed, laying foundations for the economic miracle ahead" },
      { label: "US Occupation Ends", desc: "The American occupation of Japan officially ended in 1952 with the San Francisco Peace Treaty restoring sovereignty" },
    ],
    "1940s": [
      { label: "World War II", desc: "Japan fought across the Pacific before suffering devastating defeats and the atomic bombings that led to unconditional surrender" },
      { label: "Hiroshima and Nagasaki", desc: "Atomic bombs destroyed Hiroshima and Nagasaki in August 1945, killing over 200,000 people and ending the war" },
      { label: "New Constitution Adopted", desc: "Japan adopted a new pacifist constitution in 1947 under American occupation, renouncing war and establishing democratic governance" },
    ],
    "1930s": [
      { label: "Militarism Rises", desc: "Japan's military increasingly dominated politics, pushing aggressive expansionist policies in Asia throughout the 1930s decade" },
      { label: "Manchuria Invasion", desc: "Japan invaded and occupied Manchuria in 1931, establishing the puppet state of Manchukuo and escalating regional tensions" },
      { label: "Great Depression Impact", desc: "The global Depression hit Japan's export-dependent economy hard, fueling nationalist sentiment and military expansionism across Asia" },
    ],
    "1920s": [
      { label: "Taisho Democracy", desc: "Japan experienced a period of democratic governance and political liberalization during the Taisho era of the 1920s" },
      { label: "Great Kanto Earthquake", desc: "A massive earthquake devastated Tokyo and Yokohama in 1923, killing over 100,000 people and destroying vast urban areas" },
      { label: "Universal Male Suffrage", desc: "Japan granted voting rights to all men over 25 in 1925, significantly expanding democratic participation in elections" },
    ],
    "1910s": [
      { label: "Taisho Era Begins", desc: "Emperor Taisho's reign began in 1912, ushering in a period of greater political openness and democratic movements" },
      { label: "World War I Entry", desc: "Japan joined the Allied Powers in World War I, seizing German territories in the Pacific and expanding influence" },
      { label: "Industrial Growth", desc: "Japan's industrial base expanded rapidly during World War I as European competitors were occupied with the conflict" },
    ],
    "1900s": [
      { label: "Russo-Japanese War Won", desc: "Japan defeated Russia in 1905, becoming the first Asian power to beat a European nation in modern warfare" },
      { label: "Meiji Era Peaks", desc: "Japan's rapid modernization under Emperor Meiji reached its zenith, establishing the nation as a major world power" },
      { label: "Korea Annexed", desc: "Japan formally annexed Korea in 1910, beginning 35 years of colonial rule over the Korean Peninsula" },
    ],
  },
  "South Korea": {
    "2020s": [
      { label: "Itaewon Crowd Crush", desc: "A deadly crowd crush during Halloween celebrations in Seoul's Itaewon district in 2022 killed over 150 people" },
      { label: "K-Culture Global Rise", desc: "Korean pop music, dramas, films, and cuisine achieved unprecedented worldwide popularity and cultural influence in the 2020s" },
      { label: "Yoon Impeachment Crisis", desc: "President Yoon Suk-yeol faced impeachment proceedings after briefly declaring martial law in late 2024, triggering political turmoil" },
    ],
    "2010s": [
      { label: "Gangnam Style Viral", desc: "Psy's Gangnam Style became the first YouTube video to reach one billion views in 2012, showcasing Korean pop culture" },
      { label: "Park Geun-hye Impeached", desc: "President Park was impeached and removed from office in 2017 over a corruption scandal involving a close confidante" },
      { label: "PyeongChang Olympics", desc: "South Korea hosted the 2018 Winter Olympics, which featured a historic joint Korean team marching at the opening ceremony" },
    ],
    "2000s": [
      { label: "Korean Wave Begins", desc: "Korean pop culture including K-dramas and K-pop began spreading across Asia and eventually worldwide in the 2000s" },
      { label: "World Cup Co-Hosted", desc: "South Korea co-hosted the 2002 FIFA World Cup with Japan, with the national team reaching the semifinals" },
      { label: "Tech Giant Samsung Rises", desc: "Samsung grew into a global technology powerhouse, becoming the world's largest manufacturer of smartphones and memory chips" },
    ],
    "1990s": [
      { label: "Asian Financial Crisis", desc: "South Korea needed a massive IMF bailout in 1997 as the Asian financial crisis devastated its economy" },
      { label: "Democratization Matures", desc: "South Korea's democracy consolidated in the 1990s with peaceful transfers of power and strengthened civil institutions" },
      { label: "Kim Dae-jung Elected", desc: "Opposition leader Kim Dae-jung won the presidency in 1997, marking the first peaceful transfer to the opposition party" },
    ],
    "1980s": [
      { label: "Gwangju Uprising", desc: "Military forces violently suppressed pro-democracy protesters in Gwangju in May 1980, killing hundreds of civilians" },
      { label: "Seoul Olympics 1988", desc: "South Korea hosted the 1988 Summer Olympics, showcasing its economic development and modernization to the world" },
      { label: "Democratization Movement", desc: "Massive pro-democracy protests in June 1987 forced the military government to allow direct presidential elections" },
    ],
    "1970s": [
      { label: "Rapid Industrialization", desc: "South Korea pursued aggressive export-led industrialization, building major steel, shipbuilding, and electronics industries rapidly" },
      { label: "Park Chung-hee Era", desc: "President Park's authoritarian rule drove economic development but repressed political freedoms until his assassination in 1979" },
      { label: "Saemaul Movement", desc: "The New Village Movement modernized rural South Korea through community-driven infrastructure and agricultural improvement projects" },
    ],
    "1960s": [
      { label: "Military Coup", desc: "General Park Chung-hee seized power in a 1961 military coup, beginning decades of authoritarian rule focused on development" },
      { label: "Economic Development Plans", desc: "The government launched ambitious five-year economic plans that transformed South Korea from poverty to industrialization" },
      { label: "Vietnam War Participation", desc: "South Korea sent over 300,000 troops to fight alongside the US in Vietnam, receiving economic aid in return" },
    ],
    "1950s": [
      { label: "Korean War", desc: "The devastating 1950-53 war between North and South Korea killed millions and left the peninsula permanently divided" },
      { label: "Post-War Reconstruction", desc: "South Korea rebuilt from near-total devastation with significant American aid, laying groundwork for future economic growth" },
      { label: "Republic Established", desc: "The Republic of Korea was formally established in 1948 with Syngman Rhee as its first president under US support" },
    ],
    "1940s": [
      { label: "Liberation From Japan", desc: "Korea was liberated from 35 years of Japanese colonial rule when Japan surrendered to the Allies in August 1945" },
      { label: "Nation Divided", desc: "The Korean Peninsula was divided along the 38th parallel into Soviet and American occupation zones after World War II" },
      { label: "Republic Founded", desc: "The Republic of Korea was officially proclaimed in 1948, establishing a separate government in the southern half of Korea" },
    ],
  },
  "Australia": {
    "2020s": [
      { label: "COVID Lockdowns", desc: "Australian cities endured some of the world's longest and strictest COVID lockdowns, especially in Melbourne and Sydney" },
      { label: "Voice Referendum Fails", desc: "A 2023 referendum to establish an Indigenous Voice to Parliament was rejected by a majority of Australian voters" },
      { label: "Bushfire Recovery Continues", desc: "Communities continued recovering from the catastrophic 2019-20 Black Summer bushfires that burned over 46 million acres" },
    ],
    "2010s": [
      { label: "Marriage Equality Passed", desc: "Australia legalized same-sex marriage in 2017 following a national postal survey in which 61.6% voted in favor" },
      { label: "Bushfire Crisis", desc: "The 2019-20 Black Summer bushfires devastated vast areas of Australia, destroying thousands of homes and killing billions of animals" },
      { label: "Mining Boom Ends", desc: "The decade-long mining boom driven by Chinese demand for iron ore and coal wound down, reshaping Australia's economy" },
    ],
    "2000s": [
      { label: "Sydney Olympics", desc: "Australia hosted the 2000 Summer Olympics in Sydney, widely regarded as one of the best-organized Games in history" },
      { label: "Apology to Aboriginals", desc: "Prime Minister Kevin Rudd delivered a formal national apology to Aboriginal peoples for past injustices in 2008" },
      { label: "Iraq War Involvement", desc: "Australia joined the US-led coalition in the 2003 invasion of Iraq, committing troops to the controversial conflict" },
    ],
    "1990s": [
      { label: "Mabo Decision", desc: "The 1992 High Court ruling recognized native title rights of Indigenous Australians, overturning the doctrine of terra nullius" },
      { label: "Gun Reform Enacted", desc: "Australia enacted strict gun control laws in 1996 after the Port Arthur massacre, banning semi-automatic weapons nationwide" },
      { label: "Republic Referendum", desc: "A 1999 referendum on whether Australia should become a republic was narrowly defeated, keeping the constitutional monarchy" },
    ],
    "1980s": [
      { label: "Hawke-Keating Reforms", desc: "Labor governments under Hawke and Keating modernized the economy through deregulation, tariff cuts, and financial market reforms" },
      { label: "Bicentenary Celebrated", desc: "Australia celebrated its 200th anniversary of European settlement in 1988 amid Indigenous protests calling it Invasion Day" },
      { label: "Dollar Floated", desc: "The Australian dollar was floated on international currency markets in 1983, marking a major step in economic liberalization" },
    ],
    "1970s": [
      { label: "Whitlam Dismissal", desc: "Prime Minister Gough Whitlam was controversially dismissed by the Governor-General in 1975, Australia's greatest constitutional crisis" },
      { label: "Vietnam War Ends", desc: "Australia withdrew its forces from Vietnam by 1973, ending a divisive military commitment that sparked domestic protests" },
      { label: "Multicultural Policy Starts", desc: "Australia began dismantling the White Australia policy and embracing multiculturalism, welcoming immigrants from diverse backgrounds" },
    ],
    "1960s": [
      { label: "Vietnam War Entry", desc: "Australia committed combat troops to the Vietnam War in 1965, initially with public support that later eroded" },
      { label: "Immigration Policy Shifts", desc: "Australia began relaxing its restrictive White Australia immigration policy, allowing more non-European migrants to settle" },
      { label: "Decimal Currency Adopted", desc: "Australia replaced pounds and shillings with the decimal dollar and cents currency system in February 1966" },
    ],
    "1950s": [
      { label: "Immigration Boom", desc: "Post-war immigration brought millions of Europeans to Australia, dramatically transforming the nation's cultural and demographic composition" },
      { label: "Korean War Participation", desc: "Australian forces fought in the Korean War from 1950 to 1953 as part of the United Nations coalition" },
      { label: "Snowy Mountains Scheme", desc: "The massive Snowy Mountains hydroelectric project was built, providing water and power while employing thousands of migrants" },
    ],
    "1940s": [
      { label: "World War II Role", desc: "Australia fought alongside the Allies across the Pacific and Mediterranean, suffering significant casualties at home and abroad" },
      { label: "Post-War Immigration", desc: "Australia launched a massive post-war immigration program, encouraging Europeans to settle and help build the nation" },
      { label: "Kokoda Track Campaign", desc: "Australian soldiers fought a grueling campaign along the Kokoda Track in New Guinea, repelling the Japanese advance in 1942" },
    ],
    "1930s": [
      { label: "Great Depression Impact", desc: "Australia was severely hit by the Depression with unemployment reaching nearly 30%, causing widespread poverty and hardship" },
      { label: "Sydney Harbour Bridge", desc: "The iconic Sydney Harbour Bridge opened in 1932, becoming an enduring symbol of the city and the nation" },
      { label: "Bodyline Cricket Series", desc: "The controversial 1932-33 Ashes cricket series strained relations between Australia and England due to intimidating bowling tactics" },
    ],
    "1920s": [
      { label: "Returned Soldiers Settle", desc: "Thousands of World War I veterans were given land for farming under soldier settlement schemes across rural Australia" },
      { label: "Canberra Develops", desc: "Construction progressed on the planned national capital Canberra, with Parliament House opening there in 1927" },
      { label: "Aviation Pioneers", desc: "Australian aviators like Charles Kingsford Smith made pioneering long-distance flights, connecting Australia to the wider world by air" },
    ],
    "1910s": [
      { label: "Gallipoli Campaign", desc: "Australian and New Zealand forces landed at Gallipoli in 1915, suffering heavy casualties in a defining national moment" },
      { label: "World War I Entry", desc: "Australia enthusiastically joined Britain in World War I in 1914, sending over 400,000 volunteers to fight overseas" },
      { label: "Transcontinental Railway", desc: "Construction began on the Trans-Australian Railway linking east and west, completed in 1917 to unify the continent" },
    ],
    "1900s": [
      { label: "Federation Achieved", desc: "The six Australian colonies united to form the Commonwealth of Australia on January 1, 1901 as an independent federation" },
      { label: "White Australia Policy", desc: "The new federal government enacted the Immigration Restriction Act in 1901, effectively barring non-European immigration" },
      { label: "Capital Territory Chosen", desc: "The site for Australia's new federal capital was selected in the territory that would become Canberra in 1908" },
    ],
  },
  "Philippines": {
    "2020s": [
      { label: "COVID Lockdowns", desc: "The Philippines imposed some of the world's longest COVID lockdowns, severely impacting the economy and daily life" },
      { label: "Marcos Jr Elected", desc: "Ferdinand Marcos Jr won the presidency in 2022, returning the Marcos family to power decades after their ouster" },
      { label: "Typhoon Recovery Efforts", desc: "The Philippines continued rebuilding from devastating typhoons while strengthening disaster preparedness for future storms" },
    ],
    "2010s": [
      { label: "Duterte Presidency", desc: "President Rodrigo Duterte launched a controversial and deadly war on drugs that drew international human rights criticism" },
      { label: "Typhoon Haiyan", desc: "Super Typhoon Haiyan struck the Philippines in 2013, killing over 6,000 people and devastating the Visayas region" },
      { label: "Marawi Siege", desc: "Philippine forces battled ISIS-linked militants who seized parts of Marawi city in 2017, resulting in months of fighting" },
    ],
    "2000s": [
      { label: "EDSA III Protests", desc: "Supporters of ousted President Estrada stormed the presidential palace in 2001 in a failed attempt to restore him" },
      { label: "Arroyo Presidency", desc: "Gloria Macapagal Arroyo served as president from 2001 to 2010, facing allegations of corruption and electoral fraud" },
      { label: "OFW Economy Grows", desc: "Remittances from millions of Overseas Filipino Workers became a vital economic lifeline, supporting families and the national economy" },
    ],
    "1990s": [
      { label: "Ramos Reforms", desc: "President Fidel Ramos pursued economic liberalization and infrastructure development, stabilizing the Philippines after years of instability" },
      { label: "Mount Pinatubo Erupts", desc: "Mount Pinatubo erupted catastrophically in 1991, one of the largest volcanic eruptions of the 20th century worldwide" },
      { label: "EDSA II Revolution", desc: "A second People Power uprising in 2001 forced President Joseph Estrada from office over corruption allegations" },
    ],
    "1980s": [
      { label: "EDSA People Power", desc: "Millions of Filipinos took to the streets in 1986, peacefully overthrowing the Marcos dictatorship in a landmark revolution" },
      { label: "Aquino Assassination", desc: "Opposition leader Benigno Aquino Jr was assassinated at Manila airport in 1983, galvanizing opposition to Marcos rule" },
      { label: "Marcos Overthrown", desc: "Ferdinand Marcos and his family fled to Hawaii in 1986 as the People Power Revolution ended his 20-year rule" },
    ],
    "1970s": [
      { label: "Martial Law Declared", desc: "President Marcos declared martial law in 1972, centralizing power and suppressing political opposition and civil liberties" },
      { label: "Marcos Dictatorship", desc: "Ferdinand Marcos ruled as an authoritarian dictator throughout the 1970s, enriching his family while repressing dissent" },
      { label: "Muslim Insurgency", desc: "Armed conflict erupted in Mindanao as the Moro National Liberation Front fought for Muslim autonomy in the south" },
    ],
    "1960s": [
      { label: "Marcos Elected", desc: "Ferdinand Marcos won the presidency in 1965, initially pursuing ambitious infrastructure projects before consolidating authoritarian power" },
      { label: "Infrastructure Development", desc: "The Philippine government invested in roads, bridges, and public buildings during the early Marcos presidency years" },
      { label: "Vietnam War Support", desc: "The Philippines provided logistical support and non-combat troops to the US war effort in Vietnam" },
    ],
    "1950s": [
      { label: "Magsaysay Presidency", desc: "President Ramon Magsaysay was a popular leader who fought corruption and defeated the communist Huk rebellion effectively" },
      { label: "Post-War Rebuilding", desc: "The Philippines rebuilt from wartime devastation with American aid, reconstructing Manila and other cities from the ruins" },
      { label: "Huk Rebellion Quelled", desc: "The government successfully suppressed the communist Huk guerrilla insurgency through military action and rural development programs" },
    ],
    "1940s": [
      { label: "Japanese Occupation", desc: "Japan occupied the Philippines from 1942 to 1945, imposing harsh rule and causing widespread suffering and resistance" },
      { label: "Battle of Manila", desc: "The 1945 Battle of Manila devastated the capital city, killing over 100,000 civilians in fierce urban fighting" },
      { label: "Independence Granted", desc: "The United States granted the Philippines full independence on July 4, 1946, ending nearly five decades of American rule" },
    ],
    "1930s": [
      { label: "Commonwealth Established", desc: "The Philippine Commonwealth was inaugurated in 1935 as a transitional government preparing the country for full independence" },
      { label: "Quezon Presidency", desc: "Manuel Quezon became the first president of the Philippine Commonwealth, leading the nation toward self-governance" },
      { label: "Independence Movement", desc: "Filipino leaders negotiated with the US for a clear timeline toward full national independence and sovereignty" },
    ],
    "1920s": [
      { label: "Filipinization Policy", desc: "American colonial administrators gradually placed more Filipinos in government positions as part of a localization effort" },
      { label: "Wood-Forbes Mission", desc: "A US investigation reviewed Philippine governance in 1921, delaying independence plans and maintaining American colonial control" },
      { label: "Independence Campaigns", desc: "Filipino political leaders sent missions to Washington advocating for self-governance and a clear path to independence" },
    ],
    "1910s": [
      { label: "American Colonial Period", desc: "The United States established colonial institutions including public schools and a civil service across the Philippine islands" },
      { label: "Philippine Assembly Grows", desc: "The elected Philippine Assembly expanded its legislative role, giving Filipinos increasing participation in their own governance" },
      { label: "Jones Act Passed", desc: "The 1916 Jones Act promised Philippine independence and created an elected Senate, advancing self-governance significantly" },
    ],
    "1900s": [
      { label: "Philippine-American War", desc: "Filipinos fought a brutal war against American colonization from 1899 to 1902, resulting in hundreds of thousands of deaths" },
      { label: "US Colonial Rule", desc: "The United States established colonial government over the Philippines after defeating Spain and Filipino resistance forces" },
      { label: "Aguinaldo Captured", desc: "Revolutionary leader Emilio Aguinaldo was captured by American forces in 1901, weakening the armed resistance movement" },
    ],
  },
  "Indonesia": {
    "2020s": [
      { label: "New Capital Nusantara", desc: "Indonesia began building a new capital city called Nusantara on Borneo to replace the sinking and overcrowded Jakarta" },
      { label: "COVID Response", desc: "Indonesia battled severe COVID waves with a massive vaccination campaign across its sprawling archipelago of thousands of islands" },
      { label: "Nickel Export Boom", desc: "Indonesia leveraged its vast nickel reserves to become a key player in the global electric vehicle battery supply chain" },
    ],
    "2010s": [
      { label: "Jokowi Elected", desc: "Joko Widodo won the presidency in 2014 as a political outsider, promising reform and infrastructure development nationwide" },
      { label: "Infrastructure Push", desc: "President Jokowi launched massive infrastructure projects including toll roads, airports, and power plants across the archipelago" },
      { label: "Tsunami Disasters", desc: "Indonesia suffered devastating tsunamis in Sulawesi in 2018, killing thousands and highlighting ongoing natural disaster vulnerability" },
    ],
    "2000s": [
      { label: "Bali Bombings", desc: "Terrorist bombings struck Bali nightclubs in 2002, killing 202 people in Indonesia's deadliest act of terrorism" },
      { label: "Aceh Tsunami", desc: "The catastrophic 2004 Indian Ocean tsunami killed over 170,000 people in Aceh province, devastating the entire coastal region" },
      { label: "Democratic Transition", desc: "Indonesia successfully transitioned to democracy with direct presidential elections and decentralization of power to regions" },
    ],
    "1990s": [
      { label: "Asian Financial Crisis", desc: "The 1997 crisis caused Indonesia's currency to collapse and economy to contract, triggering widespread social unrest" },
      { label: "Suharto Resigns", desc: "President Suharto resigned in May 1998 after 32 years in power amid mass protests and economic collapse" },
      { label: "Reformasi Movement", desc: "Students and activists demanded political reform, free elections, and an end to corruption after Suharto's authoritarian rule" },
    ],
    "1980s": [
      { label: "Oil Price Drop Impact", desc: "Falling global oil prices in the mid-1980s forced Indonesia to diversify its economy away from petroleum dependence" },
      { label: "Transmigration Program", desc: "The government relocated millions of people from crowded Java to outer islands, a controversial demographic engineering program" },
      { label: "Economic Diversification", desc: "Indonesia expanded manufacturing, textiles, and tourism sectors to reduce reliance on oil and gas export revenues" },
    ],
    "1970s": [
      { label: "Oil Boom Era", desc: "Rising oil prices brought significant revenue to Indonesia, funding development projects but also increasing corruption levels" },
      { label: "East Timor Annexed", desc: "Indonesia invaded and annexed East Timor in 1975, beginning a brutal 24-year occupation that killed tens of thousands" },
      { label: "New Order Consolidates", desc: "Suharto's New Order regime consolidated authoritarian control while pursuing rapid economic development and foreign investment" },
    ],
    "1960s": [
      { label: "Suharto Takes Power", desc: "General Suharto gradually assumed power from Sukarno in 1965-67, establishing the authoritarian New Order government" },
      { label: "Anti-Communist Purge", desc: "Mass killings of suspected communists in 1965-66 resulted in an estimated 500,000 to one million deaths across Indonesia" },
      { label: "Konfrontasi Ends", desc: "Indonesia's military confrontation against Malaysia ended in 1966 as Suharto normalized relations with neighboring countries" },
    ],
    "1950s": [
      { label: "Bandung Conference", desc: "Indonesia hosted the landmark 1955 Asian-African Conference, establishing the Non-Aligned Movement during the Cold War era" },
      { label: "Parliamentary Democracy", desc: "Indonesia experimented with parliamentary democracy in the 1950s before Sukarno imposed his Guided Democracy system" },
      { label: "Regional Rebellions", desc: "Several regional uprisings challenged the central government in the late 1950s, threatening Indonesian national unity" },
    ],
    "1940s": [
      { label: "Independence Declared", desc: "Sukarno and Hatta proclaimed Indonesian independence on August 17, 1945, immediately after the Japanese surrender" },
      { label: "Dutch Colonial War", desc: "Indonesia fought a four-year war of independence against the Netherlands, which attempted to reassert colonial control" },
      { label: "Sukarno Leads Nation", desc: "Sukarno emerged as the founding father and first president, uniting diverse ethnic groups into one Indonesian nation" },
    ],
    "1930s": [
      { label: "Nationalist Movement Grows", desc: "Indonesian nationalist organizations expanded despite Dutch colonial repression, building the foundations for future independence" },
      { label: "Dutch Colonial Rule", desc: "The Netherlands continued exploiting Indonesia's resources while restricting political freedoms and nationalist activities in the colony" },
      { label: "Great Depression Impact", desc: "Falling commodity prices during the Depression devastated Indonesia's export economy, causing widespread rural poverty and hardship" },
    ],
    "1920s": [
      { label: "Communist Uprisings", desc: "The Indonesian Communist Party launched failed uprisings against Dutch colonial rule in 1926-27, leading to mass arrests" },
      { label: "Nationalist Awakening", desc: "A new generation of educated Indonesians began organizing political movements demanding self-governance and national identity" },
      { label: "Sarekat Islam Movement", desc: "The Islamic-based Sarekat Islam became a major mass movement, mobilizing millions against Dutch colonial exploitation" },
    ],
    "1910s": [
      { label: "Ethical Policy Era", desc: "The Dutch pursued an Ethical Policy aiming to improve colonial welfare through education, irrigation, and limited development" },
      { label: "Budi Utomo Movement", desc: "Budi Utomo, founded in 1908, continued as one of Indonesia's first modern nationalist organizations promoting cultural identity" },
      { label: "Colonial Education Expands", desc: "The Dutch expanded education for Indonesians, inadvertently creating an educated class that would lead the independence movement" },
    ],
    "1900s": [
      { label: "Dutch East Indies", desc: "The Netherlands controlled the vast Indonesian archipelago as the Dutch East Indies, extracting resources for colonial profit" },
      { label: "Ethical Policy Begins", desc: "The Dutch colonial government introduced the Ethical Policy in 1901, promising modest improvements in native welfare" },
      { label: "Early Nationalist Stirrings", desc: "The first modern Indonesian organizations emerged, planting seeds of national consciousness among the educated indigenous population" },
    ],
  },
  "China": {
    "2020s": [
      { label: "Zero-COVID Policy", desc: "China enforced strict lockdowns and mass testing to eliminate COVID, before abruptly abandoning the policy in late 2022" },
      { label: "Tech Crackdown", desc: "The government launched sweeping regulatory actions against major tech companies including Alibaba, Tencent, and Didi" },
      { label: "Common Prosperity Drive", desc: "President Xi promoted common prosperity policies aimed at reducing wealth inequality and reining in excessive corporate power" },
    ],
    "2010s": [
      { label: "Xi Jinping Era", desc: "Xi Jinping consolidated power as China's most dominant leader in decades, removing presidential term limits in 2018" },
      { label: "Belt and Road Initiative", desc: "China launched a massive global infrastructure investment program connecting Asia, Africa, and Europe through trade routes" },
      { label: "Anti-Corruption Campaign", desc: "Xi's sweeping anti-corruption drive punished over a million officials, consolidating his authority while addressing public grievances" },
    ],
    "2000s": [
      { label: "WTO Membership", desc: "China joined the World Trade Organization in 2001, accelerating its integration into the global economy and boosting exports" },
      { label: "Beijing Olympics", desc: "China hosted the 2008 Summer Olympics in Beijing, showcasing its modernization and rising global status to the world" },
      { label: "Economic Superpower Rise", desc: "China experienced extraordinary economic growth, lifting hundreds of millions from poverty and becoming the world's factory" },
    ],
    "1990s": [
      { label: "Deng Xiaoping Reforms", desc: "Deng Xiaoping's market reforms continued transforming China's economy, creating special economic zones and encouraging foreign investment" },
      { label: "Hong Kong Handover", desc: "Britain returned sovereignty of Hong Kong to China on July 1, 1997, under a one country two systems framework" },
      { label: "Three Gorges Dam", desc: "Construction progressed on the massive Three Gorges Dam, the world's largest hydroelectric project, displacing over a million people" },
    ],
    "1980s": [
      { label: "Economic Opening Up", desc: "Deng Xiaoping's reform and opening-up policies transformed China from a planned economy toward market-oriented growth" },
      { label: "Special Economic Zones", desc: "China established special economic zones in coastal cities like Shenzhen, attracting foreign investment and spurring rapid development" },
      { label: "Tiananmen Square Protests", desc: "Pro-democracy protests in Beijing's Tiananmen Square were violently suppressed by the military in June 1989, killing many" },
    ],
    "1970s": [
      { label: "Nixon Visits China", desc: "President Nixon's 1972 visit to China opened diplomatic relations between the two nations after decades of hostility" },
      { label: "Mao Zedong Dies", desc: "Chairman Mao died in September 1976, ending an era of revolutionary politics and opening the door to reform" },
      { label: "Cultural Revolution Ends", desc: "The decade-long Cultural Revolution formally ended in 1976 after causing immense social upheaval and millions of deaths" },
    ],
    "1960s": [
      { label: "Cultural Revolution", desc: "Mao launched the Cultural Revolution in 1966, mobilizing youth to purge perceived enemies and causing nationwide chaos" },
      { label: "Sino-Soviet Split", desc: "Relations between China and the Soviet Union deteriorated sharply over ideological and territorial disputes during the 1960s" },
      { label: "Great Leap Aftermath", desc: "China recovered from the catastrophic Great Leap Forward famine that killed tens of millions of people nationwide" },
    ],
    "1950s": [
      { label: "Korean War Entry", desc: "China intervened massively in the Korean War in 1950, sending hundreds of thousands of troops against UN forces" },
      { label: "Great Leap Forward", desc: "Mao's disastrous industrialization campaign from 1958 to 1962 caused one of history's deadliest famines, killing millions" },
      { label: "Five Year Plan", desc: "China adopted Soviet-style central planning to rapidly industrialize, building heavy industry and collective agriculture systems" },
    ],
    "1940s": [
      { label: "Communist Revolution Wins", desc: "Mao Zedong's Communist forces defeated the Nationalists in the civil war, fundamentally transforming China's political system" },
      { label: "Civil War Ends", desc: "The Chinese Civil War concluded in 1949 with the Nationalists retreating to Taiwan and the Communists taking power" },
      { label: "People's Republic Founded", desc: "Mao Zedong proclaimed the People's Republic of China on October 1, 1949, establishing Communist rule over mainland China" },
    ],
    "1930s": [
      { label: "Long March", desc: "The Communist Red Army undertook the legendary Long March in 1934-35, trekking thousands of miles to escape Nationalist forces" },
      { label: "Japanese Invasion", desc: "Japan launched a full-scale invasion of China in 1937, beginning years of brutal warfare and occupation" },
      { label: "Civil War Continues", desc: "The Nationalists and Communists continued their civil conflict even as Japan threatened China's sovereignty throughout the decade" },
    ],
    "1920s": [
      { label: "CCP Founded", desc: "The Chinese Communist Party was founded in Shanghai in 1921, beginning its long journey to eventually ruling mainland China" },
      { label: "Northern Expedition", desc: "Nationalist forces launched the Northern Expedition in 1926 to unify China by defeating regional warlords across the country" },
      { label: "Warlord Era", desc: "China was fragmented under competing regional warlords after the fall of the Qing Dynasty, causing widespread instability" },
    ],
    "1910s": [
      { label: "Republic Established", desc: "The Republic of China was established in 1912 after revolutionaries overthrew the last imperial dynasty of China" },
      { label: "Qing Dynasty Falls", desc: "The Qing Dynasty collapsed in 1911-12, ending over two thousand years of imperial rule across China" },
      { label: "May Fourth Movement", desc: "Students protested in 1919 against foreign imperialism and traditional culture, sparking a transformative intellectual awakening in China" },
    ],
    "1900s": [
      { label: "Boxer Rebellion", desc: "The Boxer Uprising against foreign influence was crushed by an eight-nation alliance in 1900, humiliating the Qing court" },
      { label: "Late Qing Reforms", desc: "The weakened Qing Dynasty attempted modernization reforms in education, military, and governance, but changes came too late" },
      { label: "Revolutionary Movements", desc: "Sun Yat-sen and other revolutionaries organized movements to overthrow the Qing Dynasty and establish a modern Chinese republic" },
    ],
  },
  "Brazil": {
    "2020s": [
      { label: "COVID Crisis", desc: "Brazil suffered one of the world's worst COVID outbreaks, with over 700,000 deaths amid controversial government responses" },
      { label: "Lula Returns", desc: "Luiz Inacio Lula da Silva won the 2022 presidential election, returning to power after imprisonment and political turmoil" },
      { label: "Amazon Deforestation Debate", desc: "Global attention focused on accelerating Amazon rainforest destruction, with debates over development versus environmental preservation intensifying" },
    ],
    "2010s": [
      { label: "World Cup Hosted", desc: "Brazil hosted the 2014 FIFA World Cup amid massive protests over government spending priorities and public service shortfalls" },
      { label: "Olympics in Rio", desc: "Rio de Janeiro hosted the 2016 Summer Olympics, the first held in South America, amid economic and political crises" },
      { label: "Lava Jato Scandal", desc: "The massive Car Wash corruption investigation exposed billions in bribes involving politicians and state oil company Petrobras" },
    ],
    "2000s": [
      { label: "Lula Presidency", desc: "President Lula da Silva led Brazil through an economic boom, lifting millions from poverty with social welfare programs" },
      { label: "Economic Boom", desc: "Brazil's economy surged in the 2000s driven by commodity exports, growing middle class, and foreign investment inflows" },
      { label: "Bolsa Familia Program", desc: "The conditional cash transfer program provided financial aid to millions of poor families, significantly reducing extreme poverty rates" },
    ],
    "1990s": [
      { label: "Real Plan Stabilizes", desc: "The 1994 Real Plan successfully tamed hyperinflation by introducing a new currency, stabilizing Brazil's chaotic economy" },
      { label: "Cardoso Reforms", desc: "President Fernando Henrique Cardoso implemented economic reforms including privatization and fiscal discipline to modernize Brazil's economy" },
      { label: "Privatization Wave", desc: "Brazil privatized major state-owned enterprises in telecommunications, mining, and banking during the 1990s reform period" },
    ],
    "1980s": [
      { label: "Democratization Returns", desc: "Brazil transitioned from military dictatorship to civilian democratic rule, adopting a new constitution in 1988" },
      { label: "Hyperinflation Crisis", desc: "Brazil experienced extreme hyperinflation throughout the 1980s, with prices sometimes doubling monthly and eroding living standards" },
      { label: "Diretas Ja Movement", desc: "Massive public demonstrations demanded direct presidential elections in 1984, becoming a landmark moment in Brazil's democratic transition" },
    ],
    "1970s": [
      { label: "Economic Miracle", desc: "Brazil experienced rapid economic growth under military rule, with GDP expanding dramatically through industrial development and infrastructure" },
      { label: "Military Rule Continues", desc: "The military dictatorship continued repressing political opposition while pursuing aggressive economic development policies throughout the decade" },
      { label: "Itaipu Dam Built", desc: "Construction of the massive Itaipu Dam on the Parana River created one of the world's largest hydroelectric power plants" },
    ],
    "1960s": [
      { label: "Military Coup", desc: "The Brazilian military overthrew President Goulart in 1964, beginning 21 years of authoritarian military dictatorship" },
      { label: "Brasilia Inaugurated", desc: "The new modernist capital city of Brasilia was inaugurated in 1960, fulfilling a long-held vision of interior development" },
      { label: "Bossa Nova Era", desc: "Bossa nova music emerged from Brazil and captivated the world, blending samba rhythms with jazz harmonies beautifully" },
    ],
    "1950s": [
      { label: "Kubitschek Presidency", desc: "President Juscelino Kubitschek pursued ambitious development goals, promising fifty years of progress in five years of governance" },
      { label: "Brasilia Construction", desc: "The construction of the new capital Brasilia in central Brazil was a monumental modernist urban planning achievement" },
      { label: "Industrial Growth", desc: "Brazil's industrial sector expanded rapidly in the 1950s, with automobile manufacturing and steel production driving economic modernization" },
    ],
    "1940s": [
      { label: "World War II Role", desc: "Brazil was the only South American country to send combat troops to fight in World War II in Europe" },
      { label: "Vargas Era", desc: "Getulio Vargas dominated Brazilian politics as an authoritarian leader who modernized the economy and labor laws" },
      { label: "Estado Novo Period", desc: "Vargas ruled through the Estado Novo dictatorship until 1945, centralizing power and promoting industrialization and nationalism" },
    ],
    "1930s": [
      { label: "Vargas Revolution", desc: "Getulio Vargas seized power in a 1930 revolution, ending the Old Republic and beginning a transformative era of governance" },
      { label: "Coffee Crisis", desc: "The collapse of global coffee prices during the Depression devastated Brazil's export-dependent economy and rural livelihoods" },
      { label: "Estado Novo Established", desc: "Vargas established the authoritarian Estado Novo regime in 1937, dissolving congress and centralizing power under his rule" },
    ],
    "1920s": [
      { label: "Tenentismo Movement", desc: "Young military officers launched rebellions against the corrupt Old Republic political system, demanding modernization and reform" },
      { label: "Coffee Economy", desc: "Coffee exports dominated Brazil's economy in the 1920s, making the country the world's largest producer and exporter" },
      { label: "Modernist Art Week", desc: "The 1922 Modern Art Week in Sao Paulo launched a cultural revolution seeking a uniquely Brazilian artistic identity" },
    ],
    "1910s": [
      { label: "Rubber Boom Declines", desc: "Brazil's once-lucrative rubber industry collapsed as Asian plantations undercut Amazon rubber prices, devastating the regional economy" },
      { label: "World War I Impact", desc: "World War I disrupted Brazil's trade relationships and prompted early efforts at import substitution and domestic industrialization" },
      { label: "Old Republic Era", desc: "Brazil's Old Republic was dominated by coffee oligarchs from Sao Paulo and Minas Gerais who alternated presidential power" },
    ],
    "1900s": [
      { label: "Coffee Republic Era", desc: "Coffee barons wielded enormous political and economic power in early 1900s Brazil, shaping national policy around exports" },
      { label: "Immigration Waves", desc: "Millions of European and Japanese immigrants arrived in Brazil in the early 1900s, transforming the nation's demographics" },
      { label: "Urban Modernization", desc: "Major Brazilian cities like Rio de Janeiro underwent modernization with new boulevards, sanitation systems, and public buildings" },
    ],
  },
  "Nigeria": {
    "2020s": [
      { label: "EndSARS Movement", desc: "Young Nigerians protested against police brutality in 2020, with the Lekki toll gate shooting drawing global condemnation" },
      { label: "Naira Redesign Crisis", desc: "A rushed currency redesign in 2023 caused severe cash shortages, economic disruption, and widespread public frustration" },
      { label: "Tinubu Elected", desc: "Bola Ahmed Tinubu won the 2023 presidential election and immediately removed the controversial fuel subsidy upon taking office" },
    ],
    "2010s": [
      { label: "Boko Haram Crisis", desc: "The Boko Haram insurgency devastated northeastern Nigeria, displacing millions and killing tens of thousands of people" },
      { label: "Buhari Elected", desc: "Muhammadu Buhari won the 2015 election, marking Nigeria's first peaceful democratic transfer of power between parties" },
      { label: "Chibok Girls Abduction", desc: "Boko Haram kidnapped 276 schoolgirls from Chibok in 2014, sparking the global Bring Back Our Girls campaign" },
    ],
    "2000s": [
      { label: "Return to Democracy", desc: "Nigeria transitioned from military to civilian rule in 1999, with democratic governance continuing throughout the 2000s decade" },
      { label: "Oil Economy Boom", desc: "High global oil prices drove strong economic growth, though oil wealth remained unevenly distributed across the population" },
      { label: "Obasanjo Presidency", desc: "President Olusegun Obasanjo led Nigeria through its democratic transition, pursuing economic reforms and anti-corruption measures" },
    ],
    "1990s": [
      { label: "Abacha Dictatorship", desc: "General Sani Abacha ruled as a brutal dictator from 1993 until his sudden death in 1998, looting billions" },
      { label: "Abiola Election Annulled", desc: "The military annulled the 1993 presidential election won by Moshood Abiola, plunging Nigeria into political crisis" },
      { label: "Ken Saro-Wiwa Executed", desc: "Writer and activist Ken Saro-Wiwa was executed in 1995 for campaigning against oil pollution in the Niger Delta" },
    ],
    "1980s": [
      { label: "Military Coups", desc: "Nigeria experienced multiple military coups during the 1980s, with successive juntas seizing power from civilian and military governments" },
      { label: "Oil Bust Impact", desc: "Collapsing oil prices in the mid-1980s devastated Nigeria's petroleum-dependent economy, causing austerity and widespread hardship" },
      { label: "Structural Adjustment Program", desc: "Nigeria adopted IMF-backed structural adjustment policies that deregulated the economy but increased poverty for ordinary citizens" },
    ],
    "1970s": [
      { label: "Oil Boom Era", desc: "Surging oil revenues transformed Nigeria into Africa's wealthiest nation, funding massive infrastructure and development projects nationwide" },
      { label: "Civil War Ends", desc: "The Nigerian Civil War ended in 1970 with Biafra's surrender, followed by a policy of reconciliation and rebuilding" },
      { label: "FESTAC 77 Festival", desc: "Nigeria hosted the Second World Black and African Festival of Arts and Culture in 1977, celebrating Pan-African heritage" },
    ],
    "1960s": [
      { label: "Independence Achieved", desc: "Nigeria gained independence from Britain on October 1, 1960, becoming Africa's most populous independent nation" },
      { label: "Civil War Begins", desc: "The Biafran War erupted in 1967 when southeastern Nigeria declared independence, leading to a devastating three-year conflict" },
      { label: "First Republic Falls", desc: "Military coups in 1966 overthrew Nigeria's First Republic, beginning decades of alternating military and civilian rule" },
    ],
    "1950s": [
      { label: "Self-Governance Push", desc: "Nigerian political leaders negotiated with Britain for greater autonomy and a clear path toward full national independence" },
      { label: "Regional Autonomy", desc: "Nigeria's three regions gained increasing self-governance powers in the 1950s, each developing distinct political identities" },
      { label: "Pre-Independence Politics", desc: "Political parties organized along ethnic and regional lines, shaping the dynamics that would define independent Nigeria's governance" },
    ],
    "1940s": [
      { label: "Richards Constitution", desc: "The 1946 Richards Constitution introduced regional councils but was criticized by Nigerian nationalists for insufficient representation" },
      { label: "Nationalist Movement Grows", desc: "Nigerian nationalist organizations expanded their demands for self-governance, inspired by post-war anti-colonial movements globally" },
      { label: "Post-War Activism", desc: "Nigerian veterans returning from World War II brought new expectations for rights and self-determination, fueling nationalist activism" },
    ],
    "1930s": [
      { label: "Colonial Economic Policies", desc: "British colonial administration structured Nigeria's economy around export crops and resource extraction for the benefit of the empire" },
      { label: "Cocoa Industry Grows", desc: "Cocoa production expanded significantly in western Nigeria, becoming a major export crop and source of regional wealth" },
      { label: "Youth Movement Emerges", desc: "A new generation of educated Nigerians formed youth organizations demanding greater political rights and eventual self-governance" },
    ],
    "1920s": [
      { label: "Herbert Macaulay Activism", desc: "Herbert Macaulay, considered the father of Nigerian nationalism, led early political movements challenging British colonial authority" },
      { label: "Colonial Rule Expands", desc: "Britain consolidated administrative control across Nigeria, imposing indirect rule through local chiefs and traditional authorities" },
      { label: "Lagos Protests", desc: "Residents of Lagos organized protests against colonial taxation and governance policies, expressing early nationalist sentiments" },
    ],
    "1910s": [
      { label: "Amalgamation of Nigeria", desc: "Britain merged the Northern and Southern protectorates into a single colony called Nigeria in 1914 under Lord Lugard" },
      { label: "Lugard Governance", desc: "Governor Frederick Lugard implemented the system of indirect rule, governing through existing traditional authority structures" },
      { label: "Colonial Infrastructure", desc: "The British built railways, roads, and ports primarily to facilitate the extraction and export of Nigerian resources" },
    ],
    "1900s": [
      { label: "British Protectorate", desc: "Britain established formal protectorates over northern and southern Nigeria in the early 1900s, consolidating colonial control" },
      { label: "Colonial Consolidation", desc: "British forces conquered remaining independent territories across Nigeria, bringing the entire region under colonial administration" },
      { label: "Sokoto Caliphate Falls", desc: "British forces defeated the Sokoto Caliphate in 1903, bringing northern Nigeria's largest precolonial state under colonial rule" },
    ],
  },
  "Germany": {
    "2020s": [
      { label: "Energy Crisis", desc: "Germany faced a severe energy crisis after Russia cut gas supplies following the invasion of Ukraine in 2022" },
      { label: "Scholz Becomes Chancellor", desc: "Olaf Scholz succeeded Angela Merkel as Chancellor in 2021, leading a three-party coalition government for the first time" },
      { label: "Ukraine War Impact", desc: "Russia's invasion of Ukraine prompted Germany to dramatically increase military spending and reassess its security policies" },
    ],
    "2010s": [
      { label: "Refugee Crisis", desc: "Germany admitted over one million refugees in 2015, mostly from Syria, in a controversial open-door policy under Merkel" },
      { label: "Merkel Era", desc: "Chancellor Angela Merkel dominated German and European politics for 16 years, steering the country through multiple crises" },
      { label: "Energiewende Policy", desc: "Germany pursued an ambitious energy transition toward renewable sources while phasing out nuclear power after Fukushima" },
    ],
    "2000s": [
      { label: "Euro Adopted", desc: "Germany fully adopted the euro currency in 2002, replacing the Deutsche Mark as part of European monetary integration" },
      { label: "World Cup Hosted", desc: "Germany hosted the 2006 FIFA World Cup, which boosted national pride and showcased the country's modern image" },
      { label: "Hartz Reforms", desc: "Controversial labor market reforms restructured Germany's welfare system and reduced unemployment, but increased income inequality" },
    ],
    "1990s": [
      { label: "German Reunification", desc: "East and West Germany officially reunified on October 3, 1990, ending over four decades of Cold War division" },
      { label: "Berlin Capital Again", desc: "Berlin was reinstated as Germany's capital in 1991, with the government gradually relocating from Bonn throughout the decade" },
      { label: "EU Integration Deepens", desc: "Germany played a central role in deepening European integration, including the Maastricht Treaty and preparations for the euro" },
    ],
    "1980s": [
      { label: "Berlin Wall Falls", desc: "The Berlin Wall fell on November 9, 1989, symbolizing the end of the Cold War and heralding German reunification" },
      { label: "Green Party Rises", desc: "The Green Party entered the Bundestag in 1983, bringing environmentalism and anti-nuclear activism into mainstream German politics" },
      { label: "Cold War Tensions", desc: "Germany remained at the center of Cold War tensions with NATO missile deployments sparking massive peace protests" },
    ],
    "1970s": [
      { label: "Ostpolitik Policy", desc: "Chancellor Willy Brandt's Ostpolitik normalized relations with East Germany and Eastern Europe, easing Cold War tensions significantly" },
      { label: "RAF Terrorism", desc: "The Red Army Faction conducted kidnappings and assassinations in 1977, creating a domestic security crisis across West Germany" },
      { label: "Economic Stability", desc: "West Germany maintained strong economic performance through the 1970s despite global oil crises and inflation pressures" },
    ],
    "1960s": [
      { label: "Berlin Wall Built", desc: "East Germany built the Berlin Wall in 1961, physically dividing the city and preventing citizens from fleeing west" },
      { label: "Economic Miracle Peak", desc: "West Germany's economic miracle reached its peak, transforming the country into one of Europe's wealthiest industrial nations" },
      { label: "Guest Worker Program", desc: "West Germany recruited millions of guest workers from Turkey and Southern Europe to fill labor shortages in booming industries" },
    ],
    "1950s": [
      { label: "West Germany Founded", desc: "The Federal Republic of Germany was established in 1949, creating a democratic state in the western occupation zones" },
      { label: "Economic Miracle Begins", desc: "West Germany's Wirtschaftswunder brought rapid economic recovery and growth, transforming the war-torn nation into a prosperous democracy" },
      { label: "NATO Membership", desc: "West Germany joined NATO in 1955, rearming and integrating into the Western military alliance during the Cold War" },
    ],
    "1940s": [
      { label: "World War II Ends", desc: "Nazi Germany surrendered unconditionally in May 1945, ending the devastating war that killed millions across Europe" },
      { label: "Nuremberg Trials", desc: "Nazi leaders were tried for war crimes and crimes against humanity at the International Military Tribunal in Nuremberg" },
      { label: "Nation Divided", desc: "Germany was divided into four occupation zones, eventually splitting into democratic West Germany and communist East Germany" },
    ],
    "1930s": [
      { label: "Nazi Regime", desc: "Adolf Hitler and the Nazi Party established a totalitarian dictatorship, systematically dismantling democracy and persecuting minorities" },
      { label: "Reichstag Fire", desc: "The 1933 Reichstag fire was used by the Nazis as a pretext to suspend civil liberties and consolidate power" },
      { label: "Persecution Begins", desc: "The Nazi regime began systematic persecution of Jewish people and other minorities through discriminatory laws and violence" },
    ],
    "1920s": [
      { label: "Weimar Republic", desc: "Germany's first democratic government struggled with political instability, extremism, and the legacy of World War I" },
      { label: "Hyperinflation Crisis", desc: "Germany experienced catastrophic hyperinflation in 1923, with prices doubling every few days and devastating the middle class" },
      { label: "Golden Twenties Culture", desc: "Berlin became a vibrant cultural capital in the late 1920s, thriving in art, cinema, music, and nightlife" },
    ],
    "1910s": [
      { label: "World War I", desc: "Germany fought in World War I from 1914 to 1918, suffering millions of casualties before ultimate military defeat" },
      { label: "Kaiser Abdicates", desc: "Kaiser Wilhelm II abdicated in November 1918 as revolution swept Germany following military defeat in World War I" },
      { label: "Weimar Republic Founded", desc: "The Weimar Republic was proclaimed in 1919, establishing Germany's first parliamentary democracy after the monarchy collapsed" },
    ],
    "1900s": [
      { label: "Imperial Germany Era", desc: "Kaiser Wilhelm II's Germany was a major European power with growing industrial might and imperial ambitions worldwide" },
      { label: "Industrial Powerhouse", desc: "Germany became Europe's leading industrial nation in the early 1900s, excelling in chemicals, engineering, and steel production" },
      { label: "Naval Arms Race", desc: "Germany embarked on a naval buildup to challenge British sea power, escalating tensions that contributed to World War I" },
    ],
  },
  "Thailand": {
    "2020s": [
      { label: "Youth Protest Movement", desc: "Young Thais staged unprecedented protests in 2020 demanding democratic reforms and changes to the monarchy's political role" },
      { label: "COVID Tourism Impact", desc: "Thailand's vital tourism industry was devastated by COVID travel restrictions, causing severe economic hardship across the country" },
      { label: "Political Reforms Debated", desc: "Debates over constitutional reform and democratic governance continued as Thailand navigated between military and civilian political forces" },
    ],
    "2010s": [
      { label: "Military Coup 2014", desc: "The Thai military seized power in May 2014, overthrowing the elected government and imposing martial law nationwide" },
      { label: "King Bhumibol Passes", desc: "King Bhumibol Adulyadej died in October 2016 after 70 years on the throne, plunging Thailand into deep mourning" },
      { label: "Political Polarization", desc: "Thailand remained deeply divided between pro-establishment royalists and supporters of former Prime Minister Thaksin Shinawatra's movement" },
    ],
    "2000s": [
      { label: "Thaksin Era", desc: "Prime Minister Thaksin Shinawatra dominated Thai politics with populist policies before being ousted in a 2006 military coup" },
      { label: "Tsunami Devastation", desc: "The 2004 Indian Ocean tsunami killed over 5,000 people in Thailand, devastating coastal communities and the tourism industry" },
      { label: "Yellow Shirt Protests", desc: "Royalist protesters wearing yellow shirts occupied government buildings and airports to oppose the elected Thaksin-allied government" },
    ],
    "1990s": [
      { label: "Economic Crisis", desc: "The 1997 Asian financial crisis began in Thailand when the baht collapsed, triggering economic turmoil across the region" },
      { label: "Democratic Constitution", desc: "Thailand adopted a progressive new constitution in 1997 that strengthened democratic institutions and civil rights protections" },
      { label: "Tom Yum Goong Crisis", desc: "The Thai name for the 1997 financial crisis reflected its devastating impact on the country's economy and currency" },
    ],
    "1980s": [
      { label: "Economic Boom", desc: "Thailand experienced rapid economic growth in the late 1980s, becoming one of Asia's fastest-growing economies through manufacturing" },
      { label: "Tourism Industry Grows", desc: "Thailand's tourism sector expanded dramatically, with Bangkok, Phuket, and Chiang Mai becoming major international travel destinations" },
      { label: "Prem Era Stability", desc: "Prime Minister Prem Tinsulanonda provided political stability from 1980 to 1988, balancing military and civilian interests effectively" },
    ],
    "1970s": [
      { label: "Student Uprising", desc: "A student-led uprising in October 1973 overthrew the military dictatorship, briefly ushering in a period of democracy" },
      { label: "Communist Insurgency", desc: "The Communist Party of Thailand waged an armed insurgency in rural areas during the Cold War era" },
      { label: "Democracy Movement", desc: "Thai students and activists pushed for democratic governance, facing violent military crackdowns including the 1976 Thammasat massacre" },
    ],
    "1960s": [
      { label: "Vietnam War Ally", desc: "Thailand served as a key US ally during the Vietnam War, hosting American air bases for bombing campaigns" },
      { label: "Infrastructure Development", desc: "Thailand invested heavily in roads, dams, and infrastructure partly funded by American military spending during the Vietnam era" },
      { label: "American Military Bases", desc: "The US established major military bases across Thailand during the Vietnam War, bringing economic activity and cultural change" },
    ],
    "1950s": [
      { label: "Military Rule", desc: "Field Marshal Sarit Thanarat seized power in 1957, establishing a military dictatorship focused on development and anti-communism" },
      { label: "Cold War Alliance", desc: "Thailand aligned closely with the United States during the Cold War, receiving significant military and economic aid" },
      { label: "Economic Development Plans", desc: "The government launched national economic development plans to modernize Thailand's largely agricultural economy through industrialization" },
    ],
    "1940s": [
      { label: "World War II Role", desc: "Thailand was occupied by Japan and declared war on the Allies, though a resistance movement worked against the Japanese" },
      { label: "Name Changed to Thailand", desc: "The country officially changed its name from Siam to Thailand in 1939, meaning Land of the Free" },
      { label: "Post-War Transition", desc: "Thailand navigated the post-war period by aligning with Western powers and avoiding the colonial fate of neighboring nations" },
    ],
    "1930s": [
      { label: "Constitutional Monarchy Begins", desc: "A 1932 revolution transformed Thailand from an absolute monarchy to a constitutional monarchy with a parliamentary system" },
      { label: "Siamese Revolution 1932", desc: "Military and civilian elites staged a bloodless coup in 1932, ending absolute royal rule and establishing a constitution" },
      { label: "Nation Building", desc: "Thai leaders promoted national identity and modernization while navigating between European colonial powers in Southeast Asia" },
    ],
    "1920s": [
      { label: "Absolute Monarchy Era", desc: "King Prajadhipok ruled as an absolute monarch while facing growing demands for political reform and constitutional governance" },
      { label: "Modernization Efforts", desc: "Thailand continued modernizing its legal, educational, and administrative systems to maintain independence from colonial powers" },
      { label: "Education Reforms", desc: "The Thai government expanded public education to improve literacy and develop a modern, skilled workforce nationwide" },
    ],
    "1910s": [
      { label: "World War I Participation", desc: "Thailand sent a small expeditionary force to fight in World War I, gaining international recognition and treaty revisions" },
      { label: "Vajiravudh Reign", desc: "King Vajiravudh promoted Thai nationalism, founded the Wild Tiger Corps, and modernized the nation during his reign" },
      { label: "Nationalism Promoted", desc: "The Thai government actively promoted national identity, patriotism, and cultural unity to strengthen the nation against colonialism" },
    ],
    "1900s": [
      { label: "Chakri Reform Era", desc: "The Chakri dynasty pursued wide-ranging modernization reforms in administration, law, and infrastructure to preserve Thai sovereignty" },
      { label: "Modernization Under Chulalongkorn", desc: "King Chulalongkorn reformed Thailand's government, abolished slavery, and modernized infrastructure to prevent colonial domination" },
      { label: "Railway Expansion", desc: "Thailand expanded its railway network in the early 1900s, connecting Bangkok to provincial cities and boosting commerce" },
    ],
  },
  "Hong Kong": {
    "2020s": [
      { label: "National Security Law", desc: "Beijing imposed a sweeping national security law in 2020, dramatically curtailing Hong Kong's political freedoms and opposition" },
      { label: "Zero-COVID Restrictions", desc: "Hong Kong imposed strict COVID measures including quarantine requirements that isolated the city from the rest of the world" },
      { label: "Emigration Wave", desc: "Tens of thousands of Hong Kong residents emigrated to the UK, Canada, and Australia amid political changes and uncertainty" },
    ],
    "2010s": [
      { label: "Umbrella Movement", desc: "Pro-democracy protesters occupied major streets for 79 days in 2014, demanding genuine universal suffrage for Hong Kong" },
      { label: "Extradition Bill Protests", desc: "Massive protests erupted in 2019 against a proposed extradition bill, with millions marching in the largest demonstrations ever" },
      { label: "Housing Crisis Deepens", desc: "Hong Kong's extreme housing affordability crisis worsened, with sky-high property prices making it the world's most expensive city" },
    ],
    "2000s": [
      { label: "SARS Outbreak", desc: "The 2003 SARS epidemic hit Hong Kong particularly hard, killing 299 residents and disrupting the economy significantly" },
      { label: "Article 23 Protests", desc: "Half a million people protested in 2003 against proposed national security legislation under Basic Law Article 23, forcing withdrawal" },
      { label: "Disneyland Opens", desc: "Hong Kong Disneyland opened in 2005, boosting tourism and reinforcing the city's status as a family travel destination" },
    ],
    "1990s": [
      { label: "Handover to China", desc: "Britain returned sovereignty of Hong Kong to China on July 1, 1997, ending 156 years of colonial rule" },
      { label: "Last British Governor", desc: "Chris Patten served as Hong Kong's last British governor, introducing democratic reforms before the 1997 handover to China" },
      { label: "Airport at Chek Lap Kok", desc: "Hong Kong's new international airport opened at Chek Lap Kok in 1998, replacing the legendary Kai Tak Airport" },
    ],
    "1980s": [
      { label: "Sino-British Declaration", desc: "Britain and China signed the 1984 Joint Declaration agreeing to return Hong Kong to China under one country two systems" },
      { label: "MTR Expansion", desc: "Hong Kong's Mass Transit Railway expanded rapidly, becoming one of the world's most efficient urban transit systems" },
      { label: "Economic Boom", desc: "Hong Kong thrived as a major financial center and manufacturing hub, becoming one of Asia's Four Tiger economies" },
    ],
    "1970s": [
      { label: "Anti-Corruption ICAC", desc: "The Independent Commission Against Corruption was established in 1974, dramatically reducing systemic corruption in Hong Kong" },
      { label: "Mandatory Education", desc: "The government introduced nine years of free and compulsory education, dramatically improving literacy and social mobility" },
      { label: "Public Housing Expansion", desc: "Hong Kong expanded its massive public housing program, providing affordable homes for hundreds of thousands of residents" },
    ],
    "1960s": [
      { label: "Star Ferry Riots", desc: "Riots erupted in 1966 over a Star Ferry fare increase, reflecting deeper social tensions in colonial Hong Kong" },
      { label: "Cultural Revolution Spillover", desc: "Pro-communist riots inspired by China's Cultural Revolution rocked Hong Kong in 1967, challenging British colonial authority" },
      { label: "Industrialization Boom", desc: "Hong Kong transformed into a major manufacturing center, producing textiles, electronics, and plastics for global export markets" },
    ],
    "1950s": [
      { label: "Refugee Influx", desc: "Hundreds of thousands of refugees fled Communist China to Hong Kong, dramatically increasing the population and labor supply" },
      { label: "Shek Kip Mei Fire", desc: "A devastating squatter settlement fire in 1953 left 53,000 homeless, prompting the government's massive public housing program" },
      { label: "Manufacturing Takes Off", desc: "Hong Kong's manufacturing sector grew rapidly as entrepreneurs and workers from mainland China built new industries" },
    ],
    "1940s": [
      { label: "Japanese Occupation", desc: "Japan occupied Hong Kong from December 1941 to August 1945, imposing harsh conditions that halved the population" },
      { label: "Liberation in 1945", desc: "British forces liberated Hong Kong from Japanese occupation in August 1945, restoring colonial administration to the territory" },
      { label: "Post-War Reconstruction", desc: "Hong Kong rebuilt its economy and infrastructure after the devastation of Japanese occupation and World War II" },
    ],
  },
  "Taiwan": {
    "2020s": [
      { label: "Chip Industry Dominance", desc: "Taiwan's TSMC became the world's most critical semiconductor manufacturer, producing the majority of advanced computer chips globally" },
      { label: "Cross-Strait Tensions Rise", desc: "Military tensions between Taiwan and China intensified significantly, with increased Chinese military activities near the island" },
      { label: "COVID Success Story", desc: "Taiwan was widely praised for its early and effective COVID-19 containment strategy that kept case numbers remarkably low" },
    ],
    "2010s": [
      { label: "Sunflower Movement", desc: "Students occupied the legislature in 2014 to protest a trade agreement with China, galvanizing youth political activism" },
      { label: "Same-Sex Marriage Legalized", desc: "Taiwan became the first place in Asia to legalize same-sex marriage in 2019, advancing LGBTQ rights in the region" },
      { label: "Tsai Ing-wen Elected", desc: "Tsai Ing-wen became Taiwan's first female president in 2016, leading the independence-leaning Democratic Progressive Party to power" },
    ],
    "2000s": [
      { label: "First Party Rotation", desc: "The Democratic Progressive Party won the presidency in 2000, marking Taiwan's first peaceful transfer of power between parties" },
      { label: "High Speed Rail Opens", desc: "Taiwan's high-speed rail system connecting Taipei to Kaohsiung opened in 2007, transforming intercity travel on the island" },
      { label: "Chen Shui-bian Era", desc: "President Chen Shui-bian pursued a more assertive Taiwanese identity, raising tensions with Beijing during his two terms" },
    ],
    "1990s": [
      { label: "First Direct Elections", desc: "Taiwan held its first direct presidential election in 1996, with Lee Teng-hui winning despite Chinese military intimidation" },
      { label: "Democratization Complete", desc: "Taiwan completed its transition from authoritarian rule to full democracy, becoming a model for peaceful democratic transformation" },
      { label: "Taiwan Miracle Economy", desc: "Taiwan's economy continued its remarkable growth, becoming a global leader in technology manufacturing and electronics exports" },
    ],
    "1980s": [
      { label: "Martial Law Lifted", desc: "President Chiang Ching-kuo lifted martial law in 1987 after 38 years, opening the door to democratic reforms" },
      { label: "Opposition Party Formed", desc: "The Democratic Progressive Party was founded in 1986, becoming Taiwan's first legal opposition party and challenging KMT rule" },
      { label: "Economic Liberalization", desc: "Taiwan liberalized its economy and financial markets in the 1980s, fueling continued growth as a technology manufacturing hub" },
    ],
    "1970s": [
      { label: "UN Seat Lost", desc: "Taiwan lost its United Nations seat to the People's Republic of China in 1971, facing growing diplomatic isolation" },
      { label: "Chiang Kai-shek Dies", desc: "President Chiang Kai-shek died in 1975, ending his decades-long authoritarian rule and beginning a gradual political opening" },
      { label: "Ten Major Construction Projects", desc: "Taiwan launched ten major infrastructure projects including highways, railways, and an airport to modernize the economy" },
    ],
    "1960s": [
      { label: "Export Processing Zones", desc: "Taiwan established export processing zones that attracted foreign investment and transformed the island into a manufacturing powerhouse" },
      { label: "Land Reform Success", desc: "Successful land reform redistributed agricultural land to tenant farmers, reducing inequality and boosting rural productivity significantly" },
      { label: "Rapid Industrialization", desc: "Taiwan shifted from agriculture to industry-led growth, developing textiles, plastics, and electronics manufacturing for export markets" },
    ],
    "1950s": [
      { label: "KMT Retreats to Taiwan", desc: "Chiang Kai-shek's Nationalist government retreated to Taiwan in 1949 after losing the Chinese Civil War to the Communists" },
      { label: "White Terror Period", desc: "The KMT government imposed martial law and carried out political repression, imprisoning and executing thousands of dissidents" },
      { label: "US Military Aid Begins", desc: "American military and economic aid to Taiwan began during the Korean War, ensuring the island's security against China" },
    ],
    "1940s": [
      { label: "Japanese Rule Ends", desc: "Fifty years of Japanese colonial rule over Taiwan ended with Japan's surrender in World War II in 1945" },
      { label: "228 Incident", desc: "Government troops violently suppressed an anti-government uprising in February 1947, killing thousands of Taiwanese civilians" },
      { label: "Republic of China Relocates", desc: "The Republic of China government relocated to Taiwan in 1949 after the Communist victory on the mainland" },
    ],
  },
  "Vietnam": {
    "2020s": [
      { label: "COVID Manufacturing Shift", desc: "Global companies accelerated moving supply chains to Vietnam as a China alternative, boosting the nation's manufacturing sector" },
      { label: "Tech Hub Emergence", desc: "Vietnam's technology sector grew rapidly with software development and electronics manufacturing becoming major economic drivers" },
      { label: "Climate Change Flooding", desc: "Vietnam faced increasing climate-related flooding in the Mekong Delta, threatening agriculture and millions of coastal residents" },
    ],
    "2010s": [
      { label: "TPP Trade Deal", desc: "Vietnam participated in Trans-Pacific Partnership negotiations, seeking to deepen economic integration with Pacific Rim nations" },
      { label: "Middle Class Growth", desc: "Vietnam's rapidly expanding middle class drove consumer spending, urbanization, and demand for higher quality goods and services" },
      { label: "Tourism Boom", desc: "International tourism to Vietnam surged, with visitors drawn to the country's natural beauty, culture, and affordable prices" },
    ],
    "2000s": [
      { label: "WTO Membership", desc: "Vietnam joined the World Trade Organization in 2007, accelerating economic integration and attracting increased foreign investment" },
      { label: "Doi Moi Success", desc: "Vietnam's market-oriented reforms continued bearing fruit with strong GDP growth and dramatic poverty reduction across the country" },
      { label: "Foreign Investment Surge", desc: "Foreign companies invested heavily in Vietnam's manufacturing sector, building factories for electronics, textiles, and consumer goods" },
    ],
    "1990s": [
      { label: "US Normalization", desc: "The United States and Vietnam normalized diplomatic relations in 1995, ending decades of hostility following the Vietnam War" },
      { label: "Economic Opening", desc: "Vietnam opened its economy further to foreign trade and investment in the 1990s, generating rapid growth from a low base" },
      { label: "Reunification Stabilizes", desc: "Unified Vietnam achieved greater political and economic stability, moving beyond the immediate aftermath of war and reunification" },
    ],
    "1980s": [
      { label: "Doi Moi Reforms Begin", desc: "Vietnam launched the Doi Moi economic renovation policy in 1986, transitioning from central planning toward a market economy" },
      { label: "Cambodian Intervention", desc: "Vietnam invaded Cambodia in 1978 and occupied the country throughout the 1980s, removing the Khmer Rouge from power" },
      { label: "Economic Hardship", desc: "Vietnam suffered severe economic difficulties in the 1980s with hyperinflation, food shortages, and international isolation" },
    ],
    "1970s": [
      { label: "Fall of Saigon", desc: "North Vietnamese forces captured Saigon on April 30, 1975, ending the Vietnam War and unifying the country" },
      { label: "Reunification", desc: "North and South Vietnam were officially reunified as the Socialist Republic of Vietnam in 1976 under Communist rule" },
      { label: "Boat People Crisis", desc: "Hundreds of thousands of Vietnamese fled by sea after reunification, creating a massive refugee crisis across Southeast Asia" },
    ],
    "1960s": [
      { label: "Vietnam War Escalates", desc: "The conflict intensified dramatically as the US deployed hundreds of thousands of combat troops to South Vietnam" },
      { label: "Gulf of Tonkin", desc: "The 1964 Gulf of Tonkin incident led to congressional authorization for escalating US military involvement in Vietnam" },
      { label: "Tet Offensive", desc: "North Vietnamese and Viet Cong forces launched a surprise nationwide offensive in 1968, shocking American public opinion" },
    ],
    "1950s": [
      { label: "Dien Bien Phu", desc: "Vietnamese forces defeated the French at Dien Bien Phu in 1954, ending French colonial rule in Indochina decisively" },
      { label: "Geneva Accords", desc: "The 1954 Geneva Accords temporarily divided Vietnam at the 17th parallel, with planned reunification elections never held" },
      { label: "North-South Division", desc: "Vietnam was divided into the communist North and US-backed South, setting the stage for decades of conflict" },
    ],
    "1940s": [
      { label: "Ho Chi Minh Declaration", desc: "Ho Chi Minh declared Vietnamese independence on September 2, 1945, establishing the Democratic Republic of Vietnam" },
      { label: "First Indochina War", desc: "Vietnam fought against France to achieve independence from 1946 to 1954 in a costly anti-colonial war" },
      { label: "Japanese Occupation Ends", desc: "Japan's occupation of Vietnam during World War II ended with Japan's surrender in August 1945 to the Allies" },
    ],
    "1930s": [
      { label: "Communist Party Founded", desc: "Ho Chi Minh founded the Indochinese Communist Party in 1930, which would lead Vietnam's independence and unification struggles" },
      { label: "Yen Bai Mutiny", desc: "Vietnamese soldiers mutinied against French colonial rule at Yen Bai in 1930, though the uprising was quickly suppressed" },
      { label: "French Colonial Rule", desc: "France maintained tight colonial control over Vietnam, exploiting resources and suppressing nationalist and communist movements" },
    ],
    "1920s": [
      { label: "Nationalist Movements Rise", desc: "Vietnamese nationalist organizations grew in strength during the 1920s, demanding independence from French colonial domination" },
      { label: "Ho Chi Minh Abroad", desc: "The young Ho Chi Minh traveled through France, Russia, and China, developing revolutionary ideas and building international connections" },
      { label: "Colonial Exploitation", desc: "French colonial authorities extracted wealth from Vietnam through rubber plantations, mining operations, and heavy taxation of peasants" },
    ],
    "1910s": [
      { label: "French Indochina Era", desc: "Vietnam remained under French colonial administration as part of French Indochina, with limited autonomy for the Vietnamese people" },
      { label: "Resistance Movements", desc: "Various Vietnamese resistance movements challenged French colonial rule through both political organizing and occasional armed uprisings" },
      { label: "World War I Labor", desc: "Tens of thousands of Vietnamese were recruited as laborers and soldiers to support France's World War I effort" },
    ],
    "1900s": [
      { label: "Anti-French Uprisings", desc: "Vietnamese resistance fighters staged multiple uprisings against French colonial rule in the early 1900s, all ultimately suppressed" },
      { label: "Can Vuong Movement", desc: "The Can Vuong loyalist resistance movement continued fighting against French colonization in the name of the Vietnamese emperor" },
      { label: "Colonial Modernization", desc: "France built infrastructure in Vietnam including roads, railways, and ports primarily to facilitate colonial resource extraction" },
    ],
  },
  "France": {
    "2020s": [
      { label: "Pension Reform Protests", desc: "Massive nationwide protests erupted in 2023 against President Macron's plan to raise the retirement age from 62 to 64" },
      { label: "Paris Olympics 2024", desc: "Paris hosted the 2024 Summer Olympics with iconic venues along the Seine River and across the city's landmarks" },
      { label: "Macron Reelected", desc: "Emmanuel Macron won reelection in 2022, defeating far-right candidate Marine Le Pen in a closely watched presidential race" },
    ],
    "2010s": [
      { label: "Charlie Hebdo Attack", desc: "Terrorists attacked the Charlie Hebdo magazine offices in Paris in January 2015, killing 12 people in an assault on free speech" },
      { label: "Paris Climate Agreement", desc: "World leaders adopted the landmark Paris Agreement on climate change in 2015, setting goals to limit global warming" },
      { label: "Yellow Vest Protests", desc: "The Gilets Jaunes movement erupted in 2018 over fuel tax hikes, evolving into broader protests against economic inequality" },
    ],
    "2000s": [
      { label: "Banlieue Riots", desc: "Widespread riots erupted in French suburbs in 2005 after two teenagers died fleeing police, exposing deep social inequalities" },
      { label: "EU Constitution Rejected", desc: "French voters rejected the proposed European Constitution in a 2005 referendum, dealing a blow to EU integration efforts" },
      { label: "35-Hour Work Week", desc: "France's 35-hour work week law, implemented in 2000, reshaped labor practices and became a defining national policy" },
    ],
    "1990s": [
      { label: "Maastricht Treaty", desc: "France ratified the Maastricht Treaty in 1992, deepening European integration and paving the way for the euro currency" },
      { label: "1998 World Cup Win", desc: "France won the FIFA World Cup on home soil in 1998, uniting the nation behind its diverse multiethnic team" },
      { label: "Channel Tunnel Opens", desc: "The Channel Tunnel connecting France and England opened in 1994, creating a revolutionary rail link under the English Channel" },
    ],
    "1980s": [
      { label: "Mitterrand Era", desc: "Socialist President Francois Mitterrand led France from 1981 to 1995, initially nationalizing industries before shifting to pragmatism" },
      { label: "TGV Launched", desc: "France launched the TGV high-speed train service in 1981, revolutionizing rail travel with speeds exceeding 200 miles per hour" },
      { label: "Abolition of Death Penalty", desc: "France abolished the death penalty in 1981 under President Mitterrand, becoming one of the last Western European nations to do so" },
    ],
    "1970s": [
      { label: "Pompidou Centre Built", desc: "The Centre Pompidou opened in Paris in 1977, becoming a landmark of modern architecture and contemporary art culture" },
      { label: "Oil Crisis Impact", desc: "The 1973 oil crisis hit France hard, prompting a major shift toward nuclear energy that now powers most of the country" },
      { label: "Giscard Presidency", desc: "President Valery Giscard d'Estaing pursued social modernization, lowering the voting age and liberalizing divorce and abortion laws" },
    ],
    "1960s": [
      { label: "May 68 Protests", desc: "Massive student and worker protests nearly toppled the French government in May 1968, transforming social and cultural norms" },
      { label: "De Gaulle Resigns", desc: "President Charles de Gaulle resigned in 1969 after losing a referendum, ending his transformative leadership of the Fifth Republic" },
      { label: "Algerian Independence", desc: "France's brutal Algerian War ended in 1962 with Algerian independence, concluding a traumatic chapter in French colonial history" },
    ],
    "1950s": [
      { label: "European Coal Community", desc: "France co-founded the European Coal and Steel Community in 1951, laying the foundation for what became the European Union" },
      { label: "Indochina War Ends", desc: "France's defeat at Dien Bien Phu in 1954 ended its colonial war in Vietnam and its Indochina empire" },
      { label: "Fourth Republic Falls", desc: "The unstable Fourth Republic collapsed in 1958 amid the Algerian crisis, leading to de Gaulle's return and the Fifth Republic" },
    ],
    "1940s": [
      { label: "Nazi Occupation", desc: "Germany occupied France from 1940 to 1944, with the Vichy regime collaborating while the Resistance fought for liberation" },
      { label: "D-Day Liberation", desc: "Allied forces landed in Normandy on June 6, 1944, beginning the liberation of France from Nazi German occupation" },
      { label: "Fourth Republic Founded", desc: "France established the Fourth Republic in 1946 with a new constitution, beginning the difficult process of post-war reconstruction" },
    ],
    "1930s": [
      { label: "Popular Front Government", desc: "A left-wing Popular Front coalition governed France briefly in 1936-37, introducing major labor reforms and paid vacations" },
      { label: "Depression Hits France", desc: "The Great Depression reached France later than other nations but caused prolonged economic stagnation and political instability" },
      { label: "Maginot Line Built", desc: "France constructed the massive Maginot Line fortification system along the German border, which Germany later bypassed through Belgium" },
    ],
    "1920s": [
      { label: "Roaring Twenties Paris", desc: "Paris became the cultural capital of the world in the 1920s, attracting artists, writers, and musicians from everywhere" },
      { label: "Art Deco Movement", desc: "The Art Deco style emerged from France, influencing architecture, design, and visual arts with its elegant geometric forms" },
      { label: "Treaty of Versailles", desc: "France played a leading role in the 1919 Treaty of Versailles, imposing harsh reparations and territorial losses on Germany" },
    ],
    "1910s": [
      { label: "World War I Devastation", desc: "France suffered enormously in World War I, with 1.4 million soldiers killed and vast regions of the north destroyed" },
      { label: "Battle of Verdun", desc: "The 1916 Battle of Verdun became a symbol of French determination, lasting 10 months with massive casualties on both sides" },
      { label: "Clemenceau Leadership", desc: "Georges Clemenceau rallied France as wartime prime minister, earning the nickname The Tiger for his fierce determination to win" },
    ],
    "1900s": [
      { label: "Dreyfus Affair Resolved", desc: "Captain Alfred Dreyfus was finally exonerated in 1906 after years of wrongful conviction that exposed deep anti-Semitism in France" },
      { label: "Entente Cordiale", desc: "France and Britain signed the 1904 Entente Cordiale, ending centuries of rivalry and forming a strategic partnership" },
      { label: "Separation of Church State", desc: "France enacted the landmark 1905 law separating church and state, establishing the secular principle of laicite in governance" },
    ],
  },
};

export default countryEvents;
