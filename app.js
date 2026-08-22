const animals = [
  {
    id: "cat",
    name: "Cat",
    shadow: "#e8a838",
    sound: "sounds/cat.mp3",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="130" rx="55" ry="45" fill="#F4A460"/>
      <circle cx="100" cy="85" r="50" fill="#F4A460"/>
      <polygon points="55,55 45,15 75,45" fill="#F4A460"/>
      <polygon points="145,55 155,15 125,45" fill="#F4A460"/>
      <polygon points="58,52 50,22 72,48" fill="#FFB6C1"/>
      <polygon points="142,52 150,22 128,48" fill="#FFB6C1"/>
      <ellipse cx="78" cy="82" rx="12" ry="14" fill="#fff"/>
      <ellipse cx="122" cy="82" rx="12" ry="14" fill="#fff"/>
      <circle cx="80" cy="84" r="7" fill="#2d3436"/>
      <circle cx="124" cy="84" r="7" fill="#2d3436"/>
      <ellipse cx="100" cy="98" rx="5" ry="4" fill="#FFB6C1"/>
      <path d="M88,105 Q100,112 112,105" stroke="#2d3436" stroke-width="2" fill="none"/>
      <line x1="60" y1="95" x2="30" y2="90" stroke="#2d3436" stroke-width="2"/>
      <line x1="60" y1="100" x2="28" y2="102" stroke="#2d3436" stroke-width="2"/>
      <line x1="140" y1="95" x2="170" y2="90" stroke="#2d3436" stroke-width="2"/>
      <line x1="140" y1="100" x2="172" y2="102" stroke="#2d3436" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "dog",
    name: "Dog",
    shadow: "#c0392b",
    sound: "sounds/dog.mp3",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="135" rx="58" ry="42" fill="#D2691E"/>
      <ellipse cx="100" cy="82" rx="48" ry="44" fill="#D2691E"/>
      <ellipse cx="52" cy="95" rx="22" ry="30" fill="#8B4513"/>
      <ellipse cx="148" cy="95" rx="22" ry="30" fill="#8B4513"/>
      <ellipse cx="78" cy="78" rx="13" ry="15" fill="#fff"/>
      <ellipse cx="122" cy="78" rx="13" ry="15" fill="#fff"/>
      <circle cx="80" cy="80" r="7" fill="#2d3436"/>
      <circle cx="124" cy="80" r="7" fill="#2d3436"/>
      <ellipse cx="100" cy="95" rx="14" ry="10" fill="#2d3436"/>
      <path d="M90,102 Q100,112 110,102" stroke="#2d3436" stroke-width="2" fill="none"/>
      <path d="M100,105 Q100,125 85,130" stroke="#D2691E" stroke-width="8" fill="none" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "cow",
    name: "Cow",
    shadow: "#636e72",
    sound: "sounds/cow.mp3",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="130" rx="60" ry="45" fill="#fff"/>
      <ellipse cx="70" cy="120" rx="18" ry="22" fill="#2d3436"/>
      <ellipse cx="115" cy="135" rx="15" ry="18" fill="#2d3436"/>
      <ellipse cx="100" cy="78" rx="50" ry="42" fill="#fff"/>
      <ellipse cx="55" cy="55" rx="14" ry="22" fill="#FFB6C1"/>
      <ellipse cx="145" cy="55" rx="14" ry="22" fill="#FFB6C1"/>
      <ellipse cx="78" cy="72" rx="11" ry="13" fill="#2d3436"/>
      <ellipse cx="122" cy="72" rx="11" ry="13" fill="#2d3436"/>
      <ellipse cx="100" cy="92" rx="16" ry="12" fill="#FFB6C1"/>
      <circle cx="94" cy="90" r="3" fill="#2d3436"/>
      <circle cx="106" cy="90" r="3" fill="#2d3436"/>
    </svg>`,
  },
  {
    id: "duck",
    name: "Duck",
    shadow: "#f39c12",
    sound: "sounds/duck.mp3",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="105" cy="120" rx="55" ry="40" fill="#FFD700"/>
      <circle cx="130" cy="75" r="35" fill="#FFD700"/>
      <ellipse cx="155" cy="78" rx="18" ry="10" fill="#FF8C00"/>
      <circle cx="118" cy="68" r="6" fill="#2d3436"/>
      <path d="M60,120 Q40,130 35,145" stroke="#FFD700" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="80" cy="155" rx="8" ry="5" fill="#FF8C00"/>
      <ellipse cx="130" cy="155" rx="8" ry="5" fill="#FF8C00"/>
    </svg>`,
  },
  {
    id: "pig",
    name: "Pig",
    shadow: "#e84393",
    sound: "sounds/pig.mp3",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="125" rx="58" ry="48" fill="#FFB6C1"/>
      <circle cx="100" cy="78" r="48" fill="#FFB6C1"/>
      <polygon points="58,45 48,10 72,38" fill="#FFB6C1"/>
      <polygon points="142,45 152,10 128,38" fill="#FFB6C1"/>
      <circle cx="78" cy="72" r="8" fill="#2d3436"/>
      <circle cx="122" cy="72" r="8" fill="#2d3436"/>
      <ellipse cx="100" cy="92" rx="18" ry="14" fill="#FF69B4"/>
      <circle cx="93" cy="90" r="4" fill="#2d3436"/>
      <circle cx="107" cy="90" r="4" fill="#2d3436"/>
      <path d="M85,102 Q100,110 115,102" stroke="#2d3436" stroke-width="2" fill="none"/>
      <path d="M55,130 Q30,120 25,100" stroke="#FFB6C1" stroke-width="5" fill="none" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "sheep",
    name: "Sheep",
    shadow: "#a29bfe",
    sound: "sounds/sheep.mp3",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="120" rx="62" ry="50" fill="#f0f0f0"/>
      <circle cx="70" cy="105" r="22" fill="#f0f0f0"/>
      <circle cx="130" cy="105" r="22" fill="#f0f0f0"/>
      <circle cx="85" cy="85" r="20" fill="#f0f0f0"/>
      <circle cx="115" cy="85" r="20" fill="#f0f0f0"/>
      <circle cx="100" cy="72" r="18" fill="#f0f0f0"/>
      <ellipse cx="100" cy="68" rx="28" ry="24" fill="#2d3436"/>
      <circle cx="90" cy="65" r="4" fill="#fff"/>
      <circle cx="110" cy="65" r="4" fill="#fff"/>
      <circle cx="91" cy="66" r="2" fill="#2d3436"/>
      <circle cx="111" cy="66" r="2" fill="#2d3436"/>
    </svg>`,
  },
  {
    id: "rooster",
    name: "Rooster",
    shadow: "#d63031",
    sound: "sounds/rooster.mp3",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="105" cy="130" rx="50" ry="38" fill="#FFD700"/>
      <circle cx="120" cy="85" r="35" fill="#FFD700"/>
      <polygon points="130,55 145,30 135,58" fill="#FF4500"/>
      <polygon points="120,52 125,25 118,50" fill="#FF4500"/>
      <polygon points="108,50 105,20 100,48" fill="#FF4500"/>
      <ellipse cx="140" cy="82" rx="12" ry="8" fill="#FF4500"/>
      <circle cx="108" cy="78" r="6" fill="#2d3436"/>
      <path d="M70,130 L55,155 M70,135 L50,150" stroke="#FF8C00" stroke-width="4" stroke-linecap="round"/>
      <path d="M140,130 L155,155 M140,135 L160,150" stroke="#FF8C00" stroke-width="4" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "lion",
    name: "Lion",
    shadow: "#e17055",
    sound: "sounds/lion.mp3",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="95" r="62" fill="#DEB887"/>
      <circle cx="55" cy="80" r="22" fill="#DEB887"/>
      <circle cx="145" cy="80" r="22" fill="#DEB887"/>
      <circle cx="65" cy="120" r="20" fill="#DEB887"/>
      <circle cx="135" cy="120" r="20" fill="#DEB887"/>
      <circle cx="100" cy="145" r="18" fill="#DEB887"/>
      <circle cx="100" cy="90" r="42" fill="#F4A460"/>
      <ellipse cx="82" cy="85" rx="10" ry="12" fill="#fff"/>
      <ellipse cx="118" cy="85" rx="10" ry="12" fill="#fff"/>
      <circle cx="84" cy="87" r="6" fill="#2d3436"/>
      <circle cx="120" cy="87" r="6" fill="#2d3436"/>
      <ellipse cx="100" cy="102" rx="12" ry="9" fill="#2d3436"/>
      <path d="M88,108 Q100,118 112,108" stroke="#2d3436" stroke-width="2" fill="none"/>
    </svg>`,
  },
];

const grid = document.getElementById("animals-grid");
let currentAudio = null;
let currentButton = null;

function createRipple(button, event) {
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

function stopCurrentSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (currentButton) {
    currentButton.classList.remove("playing");
    currentButton = null;
  }
}

function playAnimalSound(animal, button, event) {
  stopCurrentSound();

  button.classList.add("bounce", "playing");
  button.addEventListener(
    "animationend",
    () => button.classList.remove("bounce"),
    { once: true }
  );

  if (event) createRipple(button, event);

  const audio = new Audio(animal.sound);
  audio.preload = "auto";
  currentAudio = audio;
  currentButton = button;

  audio.addEventListener("ended", () => {
    button.classList.remove("playing");
    if (currentAudio === audio) {
      currentAudio = null;
      currentButton = null;
    }
  });

  audio.play().catch(() => {
    button.classList.remove("playing");
  });
}

function renderAnimals() {
  animals.forEach((animal) => {
    const button = document.createElement("button");
    button.className = "animal-btn";
    button.type = "button";
    button.setAttribute("aria-label", `Play ${animal.name} sound`);
    button.style.setProperty("--shadow-color", animal.shadow);

    button.innerHTML = `
      <div class="animal-svg">${animal.svg}</div>
      <span class="animal-name">${animal.name}</span>
    `;

    button.addEventListener("click", (event) => {
      playAnimalSound(animal, button, event);
    });

    // Preload audio on first interaction anywhere
    button.addEventListener(
      "touchstart",
      () => {
        const preload = new Audio(animal.sound);
        preload.preload = "auto";
      },
      { once: true, passive: true }
    );

    grid.appendChild(button);
  });
}

renderAnimals();
