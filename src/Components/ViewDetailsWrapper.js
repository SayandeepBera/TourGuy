import React from 'react'
import { useParams } from 'react-router-dom';
import ViewDetails from './ViewDetails';

// kolkata
import kolkata_background from './Images/kolkata-2.jpg';
import victoria from './Images/v1.jpeg';
import alipur from './Images/alipur_zoo.avif';
import dakshineswar from './Images/dakshineswar_temple.jpg';

// paris
import paris_background from './Images/paris2.avif';
import Eiffel_Tower from './Images/Eiffel_Tower.jpg';
import Louvre_Museum from './Images/Louvre_Museum.jpg';
import Notre_Dame_Cathedral from './Images/Notre-Dame Cathedral.jpg';

// gangtok
import gangtok_background from './Images/gangtok-2.jpg';
import Rumtek_Monastery from './Images/Rumtek_Monastery.webp';
import Tsomgo_Lake from './Images/Tsomgo_Lake.jpg';
import MG_Marg from './Images/MG_Marg.jpg';

// new york
import new_york_background from './Images/new_york3.avif';
import Statue_of_Liberty from './Images/new_work.jpg';
import Times_Square from './Images/Times_Square.webp';
import Central_Park from './Images/Central_Park.jpg';

// rome
import rome_background from './Images/rome2.png';
import The_Colosseum from './Images/rome.jpg';
import The_Roman_Forum from './Images/The_Roman_Forum.jpg';
import St_Peter_Basilica from './Images/St._Peter_Basilica.avif';

// london
import london_background from './Images/london2.jpg';
import The_British_Museum from './Images/The_British_Museum.webp';
import Big_Ben from './Images/Big_Ben.webp';
import The_Tower_of_London from './Images/The_Tower_of_London.jpg';

// singapur
import singapur_background from './Images/singapur2.jpg';
import Marina_Bay_Sands from './Images/Marina_Bay_Sands.jpg';
import Gardens_by_the_Bay from './Images/Gardens_by_the_Bay.jpg';
import Sentosa_Island from './Images/Sentosa_Island.jpg';

// bangkok
import bangkok_background from './Images/bangkok2.jpg';
import The_Grand_Palace from './Images/The_Grand_Palace.jpg';
import Wat_Arun from './Images/Wat_Arun.jpg';
import Khao_San_Road from './Images/Khao_San_Road.jpg';

// switzerland
import switzerland_background from './Images/switzerland2.jpg';
import Matterhorn from './Images/Matterhorn.jpg';
import Lake_Geneva from './Images/Lake_Geneva.jpg';
import The_Jungfrau_Region from './Images/The_Jungfrau_Region.jpg';

// dubai
import dubai_background from './Images/dubai2.jpg';
import Burj_Khalifa from './Images/Burj_Khalifa.jpg';
import Burj_Al_Arab from './Images/Burj_Al_Arab.jpg';
import Palm_Jumeirah from './Images/Palm_Jumeirah.jpg';

// amritsar
import amritsar_background from './Images/amritsar2.jpg';
import Golden_Temple from './Images/Golden_Temple.jpg';
import Jallianwala_Bagh from './Images/Jallianwala_Bagh.jpg';
import Wagah_Border from './Images/Wagah_Border.webp';

// Andaman & Nicobar Islands
import andaman_nicobar_background from './Images/andaman_nicobar2.jpg';
import Radhanagar_Beach from './Images/Radhanagar_Beach.jpg';
import Cellular_Jail from './Images/Cellular_Jail.jpg';
import Havelock_Island from './Images/Havelock_Island.jpg';

// goa
import goa_background from './Images/goa2.jpg';
import Baga_Beach from './Images/Baga_Beach.jpg';
import Fort_Aguada from './Images/Fort_Aguada.jpg';
import Anjuna_Beach from './Images/Anjuna_Beach.jpg';

// darjeeling
import darjeeling_background from './Images/darjeeling2.jpg';
import The_Darjeeling_Himalayan_Railway from './Images/The_Darjeeling_Himalayan_Railway.jpeg';
import Tiger_Hill from './Images/Tiger_Hill.webp';
import Batasia_Loop from './Images/Batasia_Loop.jpg';

// jaipur
import jaipur_background from './Images/jaipur2.jpg';
import Amber_Fort from './Images/Amber_Fort.jpg';
import Hawa_Mahal from './Images/Hawa_Mahal.jpg';
import City_Palace from './Images/City_Palace.jpg';

// jammu & kashmir
import jammu_kashmir_background from './Images/jammu_kashmir2.jpg';
import dal_lake from './Images/dal_lake.jpg';
import Vaishno_Devi_Temple from './Images/Vaishno_Devi_Temple.jpg';
import Gulmarg from './Images/Gulmarg.jpg';

// varanasi
import varanasi_background from './Images/varanasi2.jpg';
import The_Ganges_River from './Images/The_Ganges_River.jpg';
import Kashi_Vishwanath_Temple from './Images/Kashi_Vishwanath_Temple.jpg';
import Sarnath from './Images/Sarnath.jpg';

// kerala
import kerala_background from './Images/kerala2.jpg';
import Alleppey_Backwaters from './Images/Alleppey_Backwaters.jpg';
import Munnar_Tea_Gardens from './Images/Munnar_Tea_Gardens.jpg';
import Athirappilly_Waterfalls from './Images/Athirappilly_Waterfalls.jpg';

export default function ViewDetailsWrapper() {
    const { cityName } = useParams();

  const cityData = {
    kolkata: {
      city: "Kolkata",
      marking: "The City of Joy",
      description: `Kolkata, formerly known as Calcutta, is the capital of West Bengal and one of India's major cultural, historical, and intellectual hubs. Known as the "City of Joy", it blends colonial architecture, vibrant festivals, street food, and rich literature. Iconic landmarks include the Victoria Memorial, Howrah Bridge, Dakshineswar Temple, and its buzzing street markets. It's a city that celebrates art, tradition, and resilience with unmatched warmth.`,
      image: kolkata_background,
      key_Highlights: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple"],
      accommodation: ["Victoria Memorial","Alipur Zoo","Dakshineswar Temple"],
      accommodation_img: [victoria,alipur,dakshineswar],
      map_title: "Kolkata Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.278204120637!2d88.36389501496153!3d22.5726465851809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277d2c148bfa9%3A0x1a9e828c54094ebd!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1616161616161",

    },
    paris: {
      city: "Paris",
      marking: "The City of Love",
      description: `Paris, often called "The City of Love" or "The City of Lights", is the vibrant capital of France. Famous for its stunning landmarks like the "Eiffel Tower", "Louvre Museum", and "Notre-Dame Cathedral", Paris offers a perfect blend of history, art, and modern flair. The city is renowned for its world-class cuisine, charming cafés, and romantic ambiance. Strolling along the "Seine River" or through its picturesque streets, Paris feels like a dream come to life, making it a must-visit destination for travelers seeking culture, beauty, and romance.`,
      image: paris_background,
      key_Highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
      accommodation: ["Eiffel Tower","Louvre Museum","Notre-Dame Cathedral"],
      accommodation_img: [Eiffel_Tower,Louvre_Museum,Notre_Dame_Cathedral],
      map_title: "Paris Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999253744661!2d2.292292615674938!3d48.85837307928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcd7e1f2b0f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1616161616161",
    },
    gangtok: {
      city: "Gangtok",
      marking: "The Gateway to Sikkim's Serenity",
      description: `Gangtok, the capital of "Sikkim", is a serene hill station nestled in the Himalayas. Known for its breathtaking views of the "Kanchenjunga" mountain range, Gangtok offers a perfect blend of natural beauty, cultural heritage, and tranquility. The town is famous for its peaceful monasteries, like "Rumtek Monastery", and vibrant markets. Surrounded by lush greenery and pristine landscapes, Gangtok is a paradise for nature lovers and adventure seekers, offering activities like trekking, river rafting, and exploring picturesque valleys. It's a peaceful getaway, offering a unique Himalayan experience.`,
      image: gangtok_background,
      key_Highlights: ["Rumtek Monastery","Tsomgo Lake","MG Marg"],
      accommodation: ["Rumtek Monastery","Tsomgo Lake","MG Marg"],
      accommodation_img: [Rumtek_Monastery,Tsomgo_Lake,MG_Marg],
      map_title: "Gangtok Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.847496134282!2d88.6065036150613!3d27.33140098295164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a5b3d8f1c3d3%3A0x1a9e828c54094ebd!2sGangtok%2C%20Sikkim%2C%20India!5e0!3m2!1sen!2sin!4v1616161616161",
    },
    newyork: {
      city: "New York",
      marking: "The City That Never Sleeps",
      description: `New York City, often called "The Big Apple", is a vibrant and dynamic metropolis known for its iconic landmarks like "Times Square", "Central Park", and the "Statue of Liberty". A global hub for culture, art, fashion, and business, NYC never sleeps with its bustling streets, world-class museums, and diverse neighborhoods. From Broadway shows to skyscrapers like the "Empire State Building", it's a city that blends history with modernity. Whether you're exploring "Manhattan", the artsy "Brooklyn", or the green spaces of "Queens", New York offers endless excitement and energy. It's a city of dreams, where anything feels possible.`,
      image: new_york_background,
      key_Highlights: ["Statue of Liberty", "Times Square", "Central Park"],
      accommodation: ["Statue of Liberty","Times Square","Central Park"],
      accommodation_img: [Statue_of_Liberty,Times_Square,Central_Park],
      map_title: "New York Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43833263513!2d-74.11808613053897!3d40.70582545015885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xa0b0b6c9d011c1f!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1713696667281!5m2!1sen!2sin",
    },
    rome: {
      city: "Rome",
      marking: "The Eternal City",
      description: `Rome, the capital of Italy, is known as "The Eternal City". It's one of the oldest continuously inhabited cities in the world and was the heart of the mighty Roman Empire. Famous for its ancient ruins like the Colosseum, Roman Forum, and Pantheon, it also houses Vatican City, the smallest country in the world and the spiritual center of the Catholic Church. Rome blends history, art, and culture with modern life, all under a warm Mediterranean sun.`,
      image: rome_background,
      key_Highlights: ["The Colosseum", "The Roman Forum", "St. Peter's Basilica"],
      accommodation: ["The Colosseum", "The Roman Forum", "St. Peter's Basilica"],
      accommodation_img: [The_Colosseum,The_Roman_Forum,St_Peter_Basilica],
      map_title: "Rome Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43833263513!2d12.4963665!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61c3f8c9c91d%3A0x503f85293f0d6f8a!2sRome%2C%20Italy!5e0!3m2!1sen!2sin!4v1713698456161",
    },
    london: {
      city: "London",
      marking: "The City of Timeless Elegance",
      description: `London, the capital of the United Kingdom, is a global hub of culture, history, and finance. Famous landmarks include Big Ben, Buckingham Palace, Tower Bridge, and the London Eye. It's home to the British royal family, world-class museums, and a rich blend of tradition and modernity. With its red buses, black cabs, and endless charm, London is a city that's both classic and cosmopolitan.`,
      image: london_background,
      key_Highlights: ["The British Museum", "Big Ben", "The Tower of London"],
      accommodation: ["The British Museum", "Big Ben", "The Tower of London"],
      accommodation_img: [The_British_Museum,Big_Ben,The_Tower_of_London],
      map_title: "London Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.0914793687105!2d-0.128004!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4d7d5d0ed7%3A0x210ebff6d517f02e!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1713697073514",
    },
    singapore: {
      city: "Singapore",
      marking: "The City in a Garden",
      description: `Singapore is a small but powerful city-state in Southeast Asia, known for being clean, green, and high-tech. It’s a global financial center with iconic spots like Marina Bay Sands, Gardens by the Bay, and the Merlion. Despite its size, it’s a cultural melting pot of Chinese, Malay, Indian, and Western influences. With its smart city innovations, strict laws, and amazing food scene, Singapore is often called “The City in a Garden.”`,
      image: singapur_background,
      key_Highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
      accommodation: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
      accommodation_img: [Marina_Bay_Sands,Gardens_by_the_Bay,Sentosa_Island],
      map_title: "Singapore Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10330.710728184308!2d103.81983977746582!3d1.352083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a9b79d9ee09%3A0x9d542f35097c8e4d!2sSingapore!5e0!3m2!1sen!2sin!4v1713697207354",
    },
    bangkok: {
      city: "Bangkok",
      marking: "The City of Angels",
      description: `Bangkok, the capital of Thailand, is a vibrant city known for its bustling street life, ornate temples, and spicy street food. Landmarks like the Grand Palace, Wat Arun, and floating markets showcase its rich culture. It's a place where ancient tradition meets modern energy, with glittering malls, tuk-tuks zipping through traffic, and night markets that stay alive till late. No wonder it’s called “The City of Angels.”`,
      image: bangkok_background,
      key_Highlights: ["The Grand Palace", "Wat Arun", "Khao San Road"],
      accommodation: ["The Grand Palace", "Wat Arun", "Khao San Road"],
      accommodation_img: [The_Grand_Palace,Wat_Arun,Khao_San_Road],
      map_title: "Bangkok Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195592.97821844733!2d100.501765!3d13.756331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8c6a279a27%3A0xf8acbbf679d28fd8!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1713697303625",
    },
    switzerland: {
      city: "Switzerland",
      marking: "The Land of Peace and Precision",
      description: `Switzerland is a peaceful, landlocked country in the heart of Europe, famous for its Alps, chocolates, cheese, and precision watches. Known for its neutral politics, it's home to international organizations like the United Nations and Red Cross. With cities like Zurich, Geneva, and Bern, and stunning natural scenery like Lake Geneva and the Matterhorn, Switzerland blends modern life with breathtaking nature. It’s often called “The Land of Peace and Precision.”`,
      image: switzerland_background,
      key_Highlights: ["Matterhorn", "Lake Geneva", "The Jungfrau Region"],
      accommodation: ["Matterhorn", "Lake Geneva", "The Jungfrau Region"],
      accommodation_img: [Matterhorn,Lake_Geneva,The_Jungfrau_Region],
      map_title: "Switzerland Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172954.23644236752!2d8.227512!3d46.818157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b3189139d8b7b%3A0x8ff8107b9833d206!2sSwitzerland!5e0!3m2!1sen!2sin!4v1713697420216",
    },
    dubai: {
      city: "Dubai",
      marking: "The City of Dreams",
      description: `Dubai is a dazzling city in the United Arab Emirates, known for its luxury, modern architecture, and desert charm. It boasts world-famous landmarks like the Burj Khalifa, Palm Jumeirah, and Burj Al Arab. Dubai is a global hub for business, tourism, and shopping, with extravagant malls, luxury hotels, and bustling markets. The city mixes futuristic innovation with rich Arab culture, offering everything from desert safaris to high-end experiences.`,
      image: dubai_background,
      key_Highlights: ["Burj Khalifa", "Burj Al Arab", "Palm Jumeirah"],
      accommodation: ["Burj Khalifa", "Burj Al Arab", "Palm Jumeirah"],
      accommodation_img: [Burj_Khalifa,Burj_Al_Arab,Palm_Jumeirah],
      map_title: "Dubai Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.60035036029!2d55.276687!3d25.276987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f436b0adf67%3A0x97f8f9d17e4f56b1!2sDubai%2C%20UAE!5e0!3m2!1sen!2sin!4v1713697512134",
    },
    amritsar: {
      city: "Amritsar",
      marking: "The City of Eternal Light",
      description: `Amritsar is a historic city in Punjab, India, and the spiritual center of the Sikh religion. The Golden Temple, or Harmandir Sahib, is its iconic landmark, drawing millions of visitors each year for its serene beauty and spiritual significance. The city is also known for its vibrant bazaars, delicious food (especially Amritsari kulchas and lassi), and the Jallianwala Bagh memorial, marking a tragic chapter in Indian history. Amritsar blends devotion, history, and rich culture, making it a must-visit destination in India.`,
      image: amritsar_background,
      key_Highlights: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
      accommodation: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
      accommodation_img: [Golden_Temple,Jallianwala_Bagh,Wagah_Border],
      map_title: "Amritsar Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.582619960055!2d74.8553096149616!3d31.63398068110018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a30856b45581d%3A0x77703b2c67bb3d9e!2sAmritsar%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1713697644563",
    },
    andaman_nicobar: {
      city: "Andaman & Nicobar Islands",
      marking: "The City That Never Sleeps",
      description: `New York City, often called "The Big Apple", is a vibrant and dynamic metropolis known for its iconic landmarks like "Times Square", "Central Park", and the "Statue of Liberty". A global hub for culture, art, fashion, and business, NYC never sleeps with its bustling streets, world-class museums, and diverse neighborhoods. From Broadway shows to skyscrapers like the "Empire State Building", it's a city that blends history with modernity. Whether you're exploring "Manhattan", the artsy "Brooklyn", or the green spaces of "Queens", New York offers endless excitement and energy. It's a city of dreams, where anything feels possible.`,
      image: andaman_nicobar_background,
      key_Highlights: ["Radhanagar Beach", "Cellular Jail", "Havelock Island"],
      accommodation: ["Radhanagar Beach", "Cellular Jail", "Havelock Island"],
      accommodation_img: [Radhanagar_Beach,Cellular_Jail,Havelock_Island],
      map_title: "Andaman & Nicobar Islands Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154491.156775628!2d93.829313!3d11.623931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273939ab1f5e7%3A0x32e0be3967c9c522!2sAndaman%20and%20Nicobar%20Islands%2C%20India!5e0!3m2!1sen!2sin!4v1713697761685",
    },
    goa: {
      city: "Goa",
      marking: "The Land of Sun, Sand, and Serenity",
      description: `Goa is a coastal state in western India, famous for its pristine beaches, vibrant nightlife, and Portuguese-influenced architecture. It's a top destination for both party-goers and those seeking relaxation, with places like Baga, Anjuna, and Palolem offering everything from lively beach parties to peaceful, secluded spots. Goa is also known for its spicy cuisine, colorful festivals, and historic churches. It’s a perfect blend of sun, culture, and fun.`,
      image: goa_background,
      key_Highlights: ["Baga Beach", "Fort Aguada", "Anjuna Beach"],
      accommodation: ["Baga Beach", "Fort Aguada", "Anjuna Beach"],
      accommodation_img: [Baga_Beach,Fort_Aguada,Anjuna_Beach],
      map_title: "Goa Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46756.67966904248!2d73.764654!3d15.299326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff27915a0c497%3A0xd6c65a6a1b8a27d2!2sGoa%2C%20India!5e0!3m2!1sen!2sin!4v1713697867479",
    },
    darjeeling: {
      city: "Darjeeling",
      marking: "The Queen of the Hills",
      description: `Darjeeling, located in the eastern Himalayas in West Bengal, India, is a charming hill station known as the "Queen of the Hills." Famous for its tea estates, scenic landscapes, and cool weather, it offers stunning views of Kanchenjunga. The Darjeeling Himalayan Railway, a UNESCO World Heritage site, is a major attraction. Darjeeling also boasts Tibetan culture, vibrant monasteries, and a blend of British colonial architecture. It’s a peaceful getaway, offering both natural beauty and a rich cultural experience.`,
      image: darjeeling_background,
      key_Highlights: ["The Darjeeling Himalayan Railway", "Tiger Hill", "Batasia Loop"],
      accommodation: ["The Darjeeling Himalayan Railway", "Tiger Hill", "Batasia Loop"],
      accommodation_img: [The_Darjeeling_Himalayan_Railway,Tiger_Hill,Batasia_Loop],
      map_title: "Darjeeling Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2266886282564!2d88.26364091496161!3d27.0361453963015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e57a81db2e8f75%3A0x7b33a66b9eacb0c0!2sDarjeeling%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1713697972942",
    },
    jaipur: {
      city: "Jaipur",
      marking: "The City That Never Sleeps",
      description: `New York City, often called "The Big Apple", is a vibrant and dynamic metropolis known for its iconic landmarks like "Times Square", "Central Park", and the "Statue of Liberty". A global hub for culture, art, fashion, and business, NYC never sleeps with its bustling streets, world-class museums, and diverse neighborhoods. From Broadway shows to skyscrapers like the "Empire State Building", it's a city that blends history with modernity. Whether you're exploring "Manhattan", the artsy "Brooklyn", or the green spaces of "Queens", New York offers endless excitement and energy. It's a city of dreams, where anything feels possible.`,
      image: jaipur_background,
      key_Highlights: ["Amber Fort", "Hawa Mahal", "City Palace"],
      accommodation: ["Amber Fort", "Hawa Mahal", "City Palace"],
      accommodation_img: [Amber_Fort,Hawa_Mahal,City_Palace],
      map_title: "Jaipur Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.672028143952!2d75.82480921496144!3d26.912434283435063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40f70f2ecb9%3A0x92541ebf02c0e767!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1713698086801",
    },
    jammu_kashmir: {
      city: "Jammu & Kashmir",
      marking: "The Paradise on Earth",
      description: `Jammu & Kashmir, located in northern India, is renowned for its majestic landscapes, including the Himalayas, lush valleys, and beautiful lakes like Dal Lake in Srinagar. The region is famous for its Shikara rides, flower gardens, and skiing in places like Gulmarg. Jammu & Kashmir is also home to significant religious sites, including Vaishno Devi in Jammu and Amarnath Cave in the Kashmir Valley. Known as "The Paradise on Earth," it offers a perfect blend of natural beauty, adventure, and spiritual serenity.`,
      image: jammu_kashmir_background,
      key_Highlights: ["Dal Lake", "Vaishno Devi Temple", "Gulmarg"],
      accommodation: ["Dal Lake", "Vaishno Devi Temple", "Gulmarg"],
      accommodation_img: [dal_lake,Vaishno_Devi_Temple,Gulmarg],
      map_title: "Jammu & Kashmir Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254142.7173978374!2d75.1663505!3d33.7781707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39188e2eb4551fa3%3A0x5e5a450f870570bb!2sJammu%20and%20Kashmir%2C%20India!5e0!3m2!1sen!2sin!4v1713698202535",
    },
    varanasi: {
      city: "Varanasi",
      marking: "The City of Eternal Flame",
      description: `Varanasi, also known as Benares or Kashi, is one of the oldest and holiest cities in India, located on the banks of the Ganges River. It’s a major pilgrimage site for Hindus, famous for its ghats, where people come to perform rituals, take holy dips, and cremate the deceased. The city is known for its ancient temples, including the Kashi Vishwanath Temple, and vibrant cultural heritage. Varanasi is a hub of spirituality, music, and philosophy, offering a profound and unique experience of life, death, and devotion.`,
      image: varanasi_background,
      key_Highlights: ["The Ganges River", "Kashi Vishwanath Temple", "Sarnath"],
      accommodation: ["The Ganges River", "Kashi Vishwanath Temple", "Sarnath"],
      accommodation_img: [The_Ganges_River,Kashi_Vishwanath_Temple,Sarnath],
      map_title: "Varanasi Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3898005853706!2d82.99880041496148!3d25.31764623312902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be05b4d3f5eaf%3A0x2622838d70b2b50c!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1713698325578",
    },
    kerala: {
      city: "Kerala",
      marking: "God's Own Country",
      description: `Kerala, located in southern India, is known for its lush greenery, backwaters, and beautiful beaches along the Arabian Sea. Often called “God’s Own Country,” it offers a unique mix of serenity and adventure with activities like houseboat cruises in Alleppey, wildlife sanctuaries, and the famous Athirappilly Waterfalls. Kerala is also known for its rich cultural traditions, like Kathakali dance, Ayurveda, and Onam festival. The state’s spices and cuisine, especially Kerala Sadya and seafood, are world-renowned.`,
      image: kerala_background,
      key_Highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Athirappilly Waterfalls"],
      accommodation: ["Alleppey Backwaters", "Munnar Tea Gardens", "Athirappilly Waterfalls"],
      accommodation_img: [Alleppey_Backwaters,Munnar_Tea_Gardens,Athirappilly_Waterfalls],
      map_title: "Kerala Map",
      map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369155.0503141575!2d76.634225!3d10.850515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06299d6a6b34c5%3A0x100cd779b9eae5f1!2sKerala%2C%20India!5e0!3m2!1sen!2sin!4v1713698600497",
    },
  };

  const data=cityData[cityName.toLowerCase()] || {};

  return (
    <div>
      <ViewDetails
        city={data.city} 
        marking={data.marking} 
        description={data.description}
        image={data.image}
        key_Highlights={data.key_Highlights}
        accommodation={data.accommodation}
        accommodation_img={data.accommodation_img}
        map_title={data.map_title}
        map_link={data.map_link} />
    </div>
  )
}

