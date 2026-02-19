const worldEvents = {
  '2020s': [
    { label: 'COVID-19 Pandemic', desc: 'Global pandemic caused by SARS-CoV-2, leading to worldwide lockdowns, over six million deaths, and accelerated vaccine development' },
    { label: 'Rise of AI', desc: 'ChatGPT and generative AI transformed industries, sparking debates about automation, creativity, and the future of work' },
    { label: 'Climate Crisis', desc: 'Record-breaking heatwaves, wildfires, and floods intensified the global push for renewable energy and climate policy' },
  ],
  '2010s': [
    { label: 'Social Media Revolution', desc: 'Platforms like Instagram, Snapchat, and TikTok reshaped communication, culture, and political movements around the world' },
    { label: 'Arab Spring', desc: 'Wave of pro-democracy uprisings swept across the Middle East and North Africa, toppling long-standing authoritarian regimes' },
    { label: 'Bitcoin & Crypto', desc: 'Cryptocurrency surged into mainstream awareness, creating new financial markets and challenging traditional banking systems' },
  ],
  '2000s': [
    { label: 'Rise of the Internet', desc: 'Broadband adoption exploded worldwide, transforming commerce, media, and daily life through platforms like Google and YouTube' },
    { label: '9/11 & War on Terror', desc: 'The September 11 attacks on the United States led to wars in Afghanistan and Iraq, reshaping global security policy' },
    { label: 'iPhone Launch', desc: 'Apple introduced the iPhone in 2007, revolutionizing mobile computing and launching the modern smartphone era' },
  ],
  '1990s': [
    { label: 'Fall of the Berlin Wall', desc: 'The Berlin Wall fell in 1989, leading to German reunification and symbolizing the end of Cold War divisions in Europe' },
    { label: 'World Wide Web', desc: 'Tim Berners-Lee\'s invention went public, connecting millions of people and laying the foundation for the digital age' },
    { label: 'Mandela Freed', desc: 'Nelson Mandela was released from prison in 1990 and became South Africa\'s first Black president, ending apartheid' },
  ],
  '1980s': [
    { label: 'End of the Cold War', desc: 'Tensions between the United States and Soviet Union eased, culminating in the dissolution of the USSR in 1991' },
    { label: 'MTV & Pop Culture', desc: 'Music Television launched in 1981, transforming the music industry and giving rise to iconic pop and rock artists' },
    { label: 'Chernobyl', desc: 'The 1986 nuclear disaster in Ukraine became the worst nuclear accident in history, contaminating vast areas of Europe' },
  ],
  '1970s': [
    { label: 'Moon Landing Era', desc: 'NASA\'s Apollo program continued lunar missions, while the Space Shuttle program began development for a new era of spaceflight' },
    { label: 'Oil Crisis', desc: 'OPEC oil embargoes in 1973 and 1979 caused fuel shortages, economic recession, and a global shift in energy policy' },
    { label: 'Watergate', desc: 'The Watergate scandal led to President Nixon\'s resignation in 1974, shaking public trust in the U.S. government' },
  ],
  '1960s': [
    { label: 'Civil Rights Movement', desc: 'Activists led by Martin Luther King Jr. fought for racial equality in the United States, securing landmark legislation' },
    { label: 'Vietnam War', desc: 'The prolonged conflict in Southeast Asia divided American society and sparked massive anti-war protests worldwide' },
    { label: 'Woodstock', desc: 'The 1969 music festival in New York drew hundreds of thousands, becoming a defining moment of counterculture and peace' },
  ],
  '1950s': [
    { label: 'Post-War Boom', desc: 'Economic prosperity surged across the West after World War II, fueling suburban growth, consumerism, and the baby boom' },
    { label: 'Korean War', desc: 'The 1950-1953 conflict between North and South Korea drew in global superpowers and solidified Cold War battle lines' },
    { label: 'Rock & Roll', desc: 'Elvis Presley, Chuck Berry, and others pioneered a new genre that transformed popular music and youth culture forever' },
  ],
  '1940s': [
    { label: 'World War II', desc: 'The deadliest conflict in human history ended in 1945 after six years of global warfare and the Holocaust' },
    { label: 'Atomic Bomb', desc: 'The United States dropped atomic bombs on Hiroshima and Nagasaki in 1945, ushering in the nuclear age' },
    { label: 'United Nations Founded', desc: 'Established in 1945 to promote international cooperation and prevent future wars, with 51 founding member nations' },
  ],
  '1930s': [
    { label: 'The Great Depression', desc: 'A devastating global economic downturn caused mass unemployment, poverty, and political instability throughout the decade' },
    { label: 'Rise of Fascism', desc: 'Authoritarian regimes gained power in Germany, Italy, and Spain, setting the stage for the Second World War' },
    { label: 'Golden Age of Cinema', desc: 'Hollywood flourished with technicolor films and iconic productions, offering escapism during years of economic hardship' },
  ],
  '1920s': [
    { label: 'The Roaring Twenties', desc: 'A decade of economic prosperity, cultural dynamism, and social change marked by jazz, flappers, and rapid urbanization' },
    { label: 'Jazz Age', desc: 'Jazz music rose from New Orleans to define an era, influencing art, literature, and nightlife across America and Europe' },
    { label: "Women's Suffrage", desc: 'Women won the right to vote in the United States and several other countries, advancing the fight for gender equality' },
  ],
  '1910s': [
    { label: 'World War I', desc: 'The Great War engulfed Europe from 1914 to 1918, killing millions and redrawing national borders across the continent' },
    { label: 'Russian Revolution', desc: 'The 1917 revolution overthrew the Tsarist monarchy and established the Soviet Union, reshaping global politics for decades' },
    { label: 'Spanish Flu', desc: 'The 1918 influenza pandemic infected a third of the world\'s population and killed an estimated 50 million people' },
  ],
  '1900s': [
    { label: 'Wright Brothers Flight', desc: 'Orville and Wilbur Wright achieved the first powered airplane flight in 1903 at Kitty Hawk, North Carolina' },
    { label: "Einstein's Relativity", desc: 'Albert Einstein published his special theory of relativity in 1905, fundamentally transforming our understanding of physics' },
    { label: 'Ford Model T', desc: 'Henry Ford introduced the Model T in 1908, making automobiles affordable and launching the era of mass production' },
  ],
};

export default worldEvents;
