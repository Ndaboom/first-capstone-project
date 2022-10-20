//Speakers array
const speakers = [  
  {
    speaker_name: "Yochai Benkler",
    speaker_title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    speaker_bio: "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
    speaker_image: "./assets/images/speaker1.png"
  },
  {
    speaker_name: "SohYeong Noh",
    speaker_title: "Director of Art Centre Nabi and a board member of CC Korea",
    speaker_bio: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
    speaker_image: "./assets/images/speaker3.png"
  },
  {
    speaker_name: "Kilnam Chon",
    speaker_title: "",
    speaker_bio: "Kilham Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
    speaker_image: "./assets/images/speaker2.png"
  },
  {
    speaker_name: "Julia Leda",
    speaker_title: "President of Young Pirates of Europe",
    speaker_bio: "European integration, political democracy and participation of youth through online as her major condem, Reda's report outlining potential changes to EU copyright law was approved by the Parlament in July.",
    speaker_image: "./assets/images/speaker4.png"
  },
  {
    speaker_name: "Lila Tretikov",
    speaker_title: "Executive Director of the Wikimedia Foundation",
    speaker_bio: "Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.",
    speaker_image: "./assets/images/speaker5.png"
  },
  {
    speaker_name: "Ryan Merkley",
    speaker_title: "CEO of Creative Commons, ex COO of the Mozilla Foundation",
    speaker_bio: "Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.",
    speaker_image: "./assets/images/speaker6.png"
  }
];

// Dynamically Populate Speakers Sections
  const speakers_element = document.querySelector('.speakers-list');
function createSpeaker(speaker) {
  const item = document.createElement('div');
  item.className = 'speaker-element';

  const speakerImg = document.createElement('img');
  speakerImg.className = 'speaker-img';
  speakerImg.setAttribute('src', speaker.speaker_image);
  item.appendChild(speakerImg);

  const speakerDetails = document.createElement('div');
  speakerDetails.className = 'speaker-details';

  const speakerName = document.createElement('h3');
  speakerName.innerHTML = speaker.speaker_name;
  speakerDetails.appendChild(speakerName);

  const speakerTitle = document.createElement('em');
  speakerTitle.innerHTML = speaker.speaker_title;
  speakerDetails.appendChild(speakerTitle);

  const speakerBio = document.createElement('p');
  speakerBio.innerHTML = speaker.speaker_bio;
  speakerDetails.appendChild(speakerBio);
  
  item.appendChild(speakerDetails);
  speakers_element.append(item);
}

const populateSections = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    createSpeaker(arr[i]);
  }
};

populateSections(speakers);

// HEADER POPUP SCRIPT

const toggleMenu = document.querySelector('.toggleNav');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close_icon');
const menuOptions = document.querySelectorAll('.popup_menu_option');

// Modal menu toggle
toggleMenu.addEventListener('click', () => {
  popup.classList.remove('hide');
});

// Close mobile menu
close.addEventListener('click', () => {
  popup.classList.add('hide');
});

// Add click listener to mobile menu
menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    popup.classList.add('hide');
  });
});

// Modal close event
modalCloseBtn.addEventListener('click', () => {
  modalSection.classList.add('hide');
});

modalSection.addEventListener('click', () => {
  modalSection.classList.add('hide');
});