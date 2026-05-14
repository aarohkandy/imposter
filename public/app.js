const STORAGE_KEY = "imposter-local-minimal-v1";
const AI_KEY_STORAGE = "imposter-openai-key";

const SECRET_BANK = {
  "Food & Drinks": [
    { secret: "Pizza", hint: "cheese, slice, delivery" },
    { secret: "Sushi", hint: "rice, seaweed, chopsticks" },
    { secret: "Tacos", hint: "shell, salsa, Tuesday" },
    { secret: "Pancakes", hint: "syrup, stack, breakfast" },
    { secret: "Coffee", hint: "morning, caffeine, cup" },
    { secret: "Ice Cream", hint: "cold, scoop, cone" },
    { secret: "Popcorn", hint: "movie, butter, bucket" },
    { secret: "Ramen", hint: "noodles, broth, steam" },
    { secret: "French Fries", hint: "salty, crispy, ketchup" },
    { secret: "Burrito", hint: "wrapped, beans, foil" },
    { secret: "Milkshake", hint: "straw, thick, diner" },
    { secret: "Dumplings", hint: "filled, bite, steamed" },
    { secret: "Hot Dog", hint: "bun, mustard, stadium" },
    { secret: "Chocolate", hint: "sweet, bar, melting" }
  ],
  "Places": [
    { secret: "Airport", hint: "security, luggage, gate" },
    { secret: "Library", hint: "quiet, shelves, card" },
    { secret: "Casino", hint: "chips, luck, table" },
    { secret: "Aquarium", hint: "glass, water, tanks" },
    { secret: "Amusement Park", hint: "rides, tickets, screams" },
    { secret: "Movie Theater", hint: "screen, seats, trailers" },
    { secret: "Hospital", hint: "nurses, beds, waiting" },
    { secret: "Museum", hint: "exhibits, guards, quiet" },
    { secret: "Gym", hint: "weights, sweat, locker" },
    { secret: "Rooftop", hint: "skyline, stairs, view" },
    { secret: "Subway Station", hint: "platform, train, map" },
    { secret: "Bakery", hint: "bread, smell, counter" },
    { secret: "Supermarket", hint: "cart, aisles, checkout" },
    { secret: "Beach", hint: "sand, towel, waves" }
  ],
  "Everyday Objects": [
    { secret: "Umbrella", hint: "rain, handle, opens" },
    { secret: "Toothbrush", hint: "sink, bristles, morning" },
    { secret: "Backpack", hint: "straps, school, zipper" },
    { secret: "Headphones", hint: "music, ears, cord" },
    { secret: "Sunglasses", hint: "sun, face, lenses" },
    { secret: "Mirror", hint: "reflection, bathroom, glass" },
    { secret: "Candle", hint: "flame, wax, scent" },
    { secret: "Remote Control", hint: "buttons, couch, TV" },
    { secret: "Wallet", hint: "cards, cash, pocket" },
    { secret: "Pillow", hint: "sleep, soft, bed" },
    { secret: "Suitcase", hint: "travel, handle, packing" },
    { secret: "Perfume", hint: "spray, bottle, smell" },
    { secret: "Notebook", hint: "paper, pages, notes" },
    { secret: "Camera", hint: "photo, lens, flash" }
  ],
  "Activities": [
    { secret: "Karaoke", hint: "microphone, lyrics, singing" },
    { secret: "Camping", hint: "tent, fire, sleeping" },
    { secret: "Bowling", hint: "pins, lane, shoes" },
    { secret: "Yoga", hint: "mat, stretch, breathing" },
    { secret: "Skateboarding", hint: "wheels, tricks, pavement" },
    { secret: "Fishing", hint: "rod, hook, lake" },
    { secret: "Cooking", hint: "pan, recipe, stove" },
    { secret: "Dancing", hint: "music, rhythm, floor" },
    { secret: "Hiking", hint: "trail, boots, mountain" },
    { secret: "Swimming", hint: "pool, water, goggles" },
    { secret: "Boxing", hint: "gloves, ring, punch" },
    { secret: "Shopping", hint: "bags, receipt, mall" },
    { secret: "Picnic", hint: "blanket, basket, park" },
    { secret: "Road Trip", hint: "car, snacks, playlist" }
  ],
  "Entertainment": [
    { secret: "Plot Twist", hint: "story, surprise, ending" },
    { secret: "Jump Scare", hint: "horror, sudden, scream" },
    { secret: "Red Carpet", hint: "celebrities, cameras, outfits" },
    { secret: "Encore", hint: "concert, again, applause" },
    { secret: "Paparazzi", hint: "photos, celebrity, chasing" },
    { secret: "Reality TV", hint: "drama, cameras, confession" },
    { secret: "Superhero", hint: "cape, powers, saving" },
    { secret: "Villain", hint: "evil, plan, laugh" },
    { secret: "Movie Trailer", hint: "preview, voiceover, coming" },
    { secret: "Music Video", hint: "song, visuals, dance" },
    { secret: "Stand-up Comedy", hint: "stage, jokes, microphone" },
    { secret: "Game Show", hint: "host, buzzer, prize" },
    { secret: "Spoiler Alert", hint: "ending, warning, ruined" },
    { secret: "Laugh Track", hint: "sitcom, audience, fake" }
  ],
  "Social Situations": [
    { secret: "First Date", hint: "nervous, dinner, questions" },
    { secret: "Job Interview", hint: "resume, questions, handshake" },
    { secret: "Group Chat", hint: "texts, notifications, everyone" },
    { secret: "Family Dinner", hint: "table, relatives, questions" },
    { secret: "Wedding Toast", hint: "speech, glass, couple" },
    { secret: "Birthday Party", hint: "cake, candles, gifts" },
    { secret: "Awkward Silence", hint: "quiet, uncomfortable, staring" },
    { secret: "Peer Pressure", hint: "friends, dare, uncomfortable" },
    { secret: "Guilty Pleasure", hint: "secret, fun, ashamed" },
    { secret: "Inside Joke", hint: "laughing, private, confusing" },
    { secret: "Secret Santa", hint: "gift, anonymous, holiday" },
    { secret: "Breakup Text", hint: "phone, ending, painful" },
    { secret: "Roommate Fight", hint: "dishes, rent, argument" },
    { secret: "Road Rage", hint: "traffic, horn, angry" }
  ],
  "Tech & Internet": [
    { secret: "Password", hint: "login, secret, forgotten" },
    { secret: "Screenshot", hint: "screen, save, proof" },
    { secret: "Bluetooth", hint: "wireless, pairing, speaker" },
    { secret: "Wi-Fi", hint: "router, signal, password" },
    { secret: "Email", hint: "inbox, subject, send" },
    { secret: "Podcast", hint: "audio, host, episode" },
    { secret: "Instagram", hint: "photos, stories, followers" },
    { secret: "TikTok", hint: "scroll, short, trend" },
    { secret: "Video Call", hint: "camera, mute, meeting" },
    { secret: "Autocorrect", hint: "typing, mistake, phone" },
    { secret: "Spam Folder", hint: "email, junk, hidden" },
    { secret: "Low Battery", hint: "charger, percent, panic" },
    { secret: "AirDrop", hint: "nearby, photo, iPhone" },
    { secret: "Search History", hint: "browser, private, embarrassing" }
  ],
  "Animals": [
    { secret: "Penguin", hint: "waddle, ice, tuxedo" },
    { secret: "Dolphin", hint: "ocean, smart, clicks" },
    { secret: "Kangaroo", hint: "pouch, jump, Australia" },
    { secret: "Shark", hint: "teeth, ocean, fin" },
    { secret: "Octopus", hint: "tentacles, ink, ocean" },
    { secret: "Owl", hint: "night, eyes, hoot" },
    { secret: "Giraffe", hint: "neck, spots, tall" },
    { secret: "Crocodile", hint: "teeth, swamp, snap" },
    { secret: "Flamingo", hint: "pink, one-leg, water" },
    { secret: "Koala", hint: "tree, sleepy, eucalyptus" },
    { secret: "Horse", hint: "riding, mane, stable" },
    { secret: "Butterfly", hint: "wings, colorful, garden" }
  ],
  "School & Work": [
    { secret: "Deadline", hint: "time, pressure, late" },
    { secret: "Presentation", hint: "slides, speaking, nervous" },
    { secret: "Detention", hint: "school, trouble, after" },
    { secret: "Report Card", hint: "grades, parents, semester" },
    { secret: "Office Party", hint: "coworkers, snacks, awkward" },
    { secret: "Team Meeting", hint: "calendar, agenda, talking" },
    { secret: "Coffee Break", hint: "work, cup, pause" },
    { secret: "Alarm Clock", hint: "morning, sound, late" },
    { secret: "Homework", hint: "school, desk, due" },
    { secret: "Whiteboard", hint: "marker, meeting, writing" },
    { secret: "Lunchbox", hint: "school, food, container" },
    { secret: "Name Tag", hint: "shirt, hello, event" }
  ],
  "Feelings & Concepts": [
    { secret: "Nostalgia", hint: "past, memory, warm" },
    { secret: "Sarcasm", hint: "tone, opposite, joke" },
    { secret: "Procrastination", hint: "later, deadline, avoiding" },
    { secret: "FOMO", hint: "missing, party, anxiety" },
    { secret: "Common Sense", hint: "obvious, practical, basic" },
    { secret: "Deja Vu", hint: "familiar, again, strange" },
    { secret: "Overthinking", hint: "thoughts, spiral, late-night" },
    { secret: "First Impression", hint: "meeting, judgment, instant" },
    { secret: "Comfort Zone", hint: "safe, familiar, limits" },
    { secret: "Stage Fright", hint: "audience, nervous, spotlight" },
    { secret: "Luck", hint: "chance, lucky, random" },
    { secret: "Jealousy", hint: "wanting, envy, comparison" }
  ]
};

// Questions are organized into topic groups. Each round, a group is picked at random, then two different
// questions from that group are assigned — one to the crew, one secretly to the imposter. Both the real
// question and the imposter question rotate independently, making patterns nearly impossible to memorize.
// Rule: answers must CLUSTER (popular answers dominate) so an off-topic answer is detectable.
// No visually-observable answers, no binary preference questions, no "last thing you did" questions.
const QUESTION_GROUPS = [
  {
    topic: "Nostalgic Smells",
    questions: [
      "What's the most nostalgic smell?",
      "What smell makes you feel most at home?",
      "What smell do you associate with summer?",
      "What smell instantly makes you hungry?",
      "What smell reminds you most of being a kid?",
      "What smell do you find the most comforting?"
    ]
  },
  {
    topic: "Satisfying Sounds",
    questions: [
      "What sound is the most satisfying to hear?",
      "What sound instantly relaxes you?",
      "What's the most irritating sound in existence?",
      "What sound do you associate with a good day?",
      "What sound makes you feel most uneasy?",
      "What sound do you wish you could block out forever?"
    ]
  },
  {
    topic: "Childhood TV",
    questions: [
      "What TV show defined your childhood?",
      "What cartoon character did you relate to most as a kid?",
      "What childhood show would you still watch right now?",
      "What show did you watch after school every day?",
      "What childhood TV character did you have a crush on?",
      "What show from your childhood do you wish came back?"
    ]
  },
  {
    topic: "Social Awkwardness",
    questions: [
      "What do you do when you forget someone's name mid-conversation?",
      "What's your move when a joke you tell completely doesn't land?",
      "What do you do when someone waves at you but isn't actually waving at you?",
      "What's your exit strategy when you're stuck in a boring conversation?",
      "What do you do when you walk into the wrong room and everyone looks at you?",
      "What's your go-to thing to stare at when an elevator is too quiet?"
    ]
  },
  {
    topic: "Morning Rituals",
    questions: [
      "What's the first thing you actually do after waking up?",
      "What's the first app you open in the morning?",
      "What do you do in the first 10 minutes of being awake?",
      "What gets you out of bed on a hard morning?",
      "What's the first thing you drink in the morning?",
      "What's the first thing you check when you pick up your phone?"
    ]
  },
  {
    topic: "Overrated Things",
    questions: [
      "What food that most people love do you find completely overrated?",
      "What popular vacation destination is massively overhyped?",
      "What holiday tradition is completely overrated?",
      "What popular hobby do you secretly find boring?",
      "What type of restaurant is the most overrated?",
      "What experience everyone raves about do you find underwhelming?"
    ]
  },
  {
    topic: "Irrational Fears",
    questions: [
      "What's a completely irrational fear you actually have?",
      "What sounds totally harmless but makes you want to leave the room?",
      "What texture or sensation gives you the worst feeling?",
      "What everyday object do you have an unexplained aversion to?",
      "What perfectly normal thing makes you deeply uncomfortable?",
      "What thing do most people find fine that genuinely creeps you out?"
    ]
  },
  {
    topic: "Hypothetical Meals",
    questions: [
      "If you had to eat one food for a week straight, what would it be?",
      "If you could only eat food from one country forever, what would it be?",
      "What would your last meal be if you had to pick right now?",
      "What food could you eat for breakfast, lunch, and dinner?",
      "If you had to eat the same thing every morning forever, what would it be?",
      "What one food would you bring to a deserted island?"
    ]
  },
  {
    topic: "Cancelled Plans",
    questions: [
      "What's your gut reaction when plans get cancelled?",
      "What's the first thing you do when you get an unexpected free evening?",
      "What's your ideal way to spend a random free afternoon?",
      "What do you reach for first when you have nothing to do?",
      "What's the fastest way you unwind when you suddenly have free time?",
      "What do you do with yourself when you have a whole day with zero plans?"
    ]
  },
  {
    topic: "Embarrassing Phases",
    questions: [
      "What was your most embarrassing personality phase growing up?",
      "What fashion choice from your past makes you cringe the most?",
      "What did you think was cool as a kid that is painfully cringe now?",
      "What hobby did you go through that you'd never admit to publicly?",
      "What's the most embarrassing thing you were obsessed with as a teenager?",
      "What era of your style history do you wish you could erase?"
    ]
  },
  {
    topic: "Useless Talents",
    questions: [
      "What's a completely useless skill you're actually good at?",
      "What's a weird thing you can do that has zero practical use?",
      "What odd ability do you have that would never impress anyone?",
      "What's a dumb trick you can do that you're secretly proud of?",
      "What's the most pointless thing you're weirdly good at?",
      "What skill do you have that absolutely no one has ever asked for?"
    ]
  },
  {
    topic: "Night Habits",
    questions: [
      "What do you always do before you can fall asleep?",
      "What's the last thing you do before you go to bed?",
      "What do you always need to have to sleep properly?",
      "What do you do when you can't fall asleep?",
      "What's your late-night guilty pleasure?",
      "What's the worst thing you regularly do to your sleep schedule?"
    ]
  },
  {
    topic: "Comfort Food",
    questions: [
      "What's your go-to comfort food when you're sick?",
      "What do you eat when you're sad and don't want to cook?",
      "What food do you crave most when it's cold outside?",
      "What's the first food you make when you need to feel better?",
      "What do you order when you want to feel taken care of?",
      "What food do you turn to when nothing is going right?"
    ]
  },
  {
    topic: "Phone Behavior",
    questions: [
      "What app do you open out of pure habit when you're bored?",
      "What app do you waste the most time on?",
      "What app would embarrass you most if someone saw your screen time?",
      "What app do you always tell yourself you'll delete but never do?",
      "What's the app you check most compulsively without realizing it?",
      "What app do you delete when someone asks to borrow your phone?"
    ]
  },
  {
    topic: "Dream Life",
    questions: [
      "What skill would you want to wake up with tomorrow?",
      "What talent do you wish you had spent time learning as a kid?",
      "What ability do you secretly think you'd be great at with no practice?",
      "What skill do you consider picking up every year but never do?",
      "What talent do you most envy in other people?",
      "What skill would impress people most if you suddenly had it?"
    ]
  },
  {
    topic: "The Worst Thing",
    questions: [
      "What's the worst sound in the world?",
      "What's the worst smell imaginable?",
      "What's the worst texture to touch?",
      "What's the worst feeling that isn't physically painful?",
      "What's the worst thing someone can do at a dinner party?",
      "What's the worst way to start a Monday?"
    ]
  },
  {
    topic: "Guilty Pleasures",
    questions: [
      "What's a guilty pleasure you actually don't feel guilty about?",
      "What trashy TV show could you watch forever?",
      "What food combination would horrify a chef but you love?",
      "What's something you do alone that you'd never admit to in public?",
      "What habit do you have that you'd be mildly embarrassed to explain?",
      "What deeply uncool thing do you genuinely enjoy?"
    ]
  },
  {
    topic: "Childhood Fears",
    questions: [
      "What were you irrationally afraid of as a kid?",
      "What childhood fear do you still kind of have as an adult?",
      "What movie or show traumatized you as a child?",
      "What were you convinced was coming to get you in the dark?",
      "What thing under your bed or in your closet scared you most?",
      "What as a kid made you refuse to be alone in a room?"
    ]
  },
  {
    topic: "Food Crimes",
    questions: [
      "What food do you eat in a way that would horrify a chef?",
      "What condiment do you put on things that most people find weird?",
      "What food combination do you love that grosses everyone else out?",
      "What's your most controversial food opinion?",
      "What's a food you eat completely wrong that you refuse to change?",
      "What's the most offensive thing you regularly do to food?"
    ]
  },
  {
    topic: "Travel Personality",
    questions: [
      "What's always in your bag when you travel no matter what?",
      "What's the thing you most often regret not packing?",
      "What's the first thing you do when you check into a hotel?",
      "What's the first thing you look for when you land somewhere new?",
      "What travel habit do you have that probably annoys other people?",
      "What do you always do on the first day in a new city?"
    ]
  },
  {
    topic: "Weird Superstitions",
    questions: [
      "What superstition do you follow even though you know it's ridiculous?",
      "What do you always do for good luck that you'd be embarrassed to admit?",
      "What ritual do you have before something important?",
      "What sign or omen do you actually pay attention to?",
      "What thing do you believe brings you bad luck?",
      "What pre-event ritual do you swear by even though it makes no sense?"
    ]
  },
  {
    topic: "End of the World",
    questions: [
      "What's the first thing you'd do if you found out the world was ending in a week?",
      "Who would you call first if the world was ending?",
      "Where would you go if civilization collapsed tomorrow?",
      "What skill would keep you alive in an apocalypse?",
      "What's the first thing you'd stock up on if disaster struck?",
      "What's the most useless thing you'd instinctively grab in an emergency?"
    ]
  },
  {
    topic: "Animal You'd Be",
    questions: [
      "What animal do you think you'd be in another life?",
      "What animal best matches your personality?",
      "What animal do people say you remind them of?",
      "What animal would your closest friend say you are?",
      "What animal would you be at a party?",
      "What animal do you secretly think represents you perfectly?"
    ]
  },
  {
    topic: "Pop Culture Hot Takes",
    questions: [
      "What wildly popular movie do you think is actually terrible?",
      "What critically acclaimed TV show couldn't you finish?",
      "What artist does everyone love that you genuinely don't get?",
      "What beloved classic do you think is massively overhyped?",
      "What musician's fanbase do you find the most baffling?",
      "What show that got cancelled did you secretly think deserved it?"
    ]
  },
  {
    topic: "Things You Avoid",
    questions: [
      "What chore do you put off the longest?",
      "What's the one task you'll do literally anything to delay?",
      "What do you always say you'll deal with later and then forget?",
      "What healthy habit do you always intend to start but never do?",
      "What do you always skip that everyone else seems to do regularly?",
      "What obligation do you dread so much you procrastinate for weeks?"
    ]
  },
  {
    topic: "Personality in Crisis",
    questions: [
      "What do you do first when something goes wrong?",
      "How do you react when a plan falls apart completely?",
      "What's your first instinct when you get unexpectedly bad news?",
      "What do you reach for when you need to calm down fast?",
      "What's your default coping mechanism when everything feels like too much?",
      "What do you do when you're overwhelmed and don't know where to start?"
    ]
  },
  {
    topic: "Time Travel",
    questions: [
      "What decade would you time travel to?",
      "What decade would you avoid at all costs?",
      "What historical figure would you most want to have dinner with?",
      "What decade do you feel most like you belong in?",
      "What year in history would you most want to observe?",
      "What era of history would you choose if you had to live in one forever?"
    ]
  },
  {
    topic: "Desert Island",
    questions: [
      "What one thing would you bring to a deserted island?",
      "What skill would you most want to have on a deserted island?",
      "What luxury item would you smuggle onto a deserted island?",
      "What's the first thing you'd do if you washed up on a deserted island?",
      "What person would you want stranded with you?",
      "What's the one thing you'd miss most if you were stranded alone?"
    ]
  },
  {
    topic: "Dream Job",
    questions: [
      "What's your dream job if money didn't matter?",
      "What job would be your absolute nightmare?",
      "What job would you be secretly great at?",
      "What profession do you find most interesting from the outside?",
      "What job do you think is way harder than people realize?",
      "What career do you wish you had picked instead?"
    ]
  },
  {
    topic: "The Perfect Day",
    questions: [
      "What does your perfect lazy day look like?",
      "What's your ideal way to spend a rainy day inside?",
      "What's your version of a perfect Sunday morning?",
      "What would your ideal day off from everything look like?",
      "What's the ideal thing to do on a free day when the weather is perfect?",
      "What's the best possible way to spend a day with zero obligations?"
    ]
  },
  {
    topic: "Invisible vs Flying",
    questions: [
      "What's the first thing you'd do if you were invisible for a day?",
      "What's the first thing you'd do if you could fly?",
      "What would you use invisibility for that you'd never admit out loud?",
      "Where would you fly first if you could?",
      "What's the most useful real-world application of being invisible?",
      "What's the most useful real-world application of being able to fly?"
    ]
  },
  {
    topic: "Mystery & Paranormal",
    questions: [
      "What conspiracy theory do you find most compelling?",
      "What paranormal thing do you secretly believe in a little?",
      "What unexplained phenomenon would you most want answered?",
      "What eerie coincidence in your life do you still think about?",
      "What mystery do you think about more than you should?",
      "What conspiracy theory is ridiculous but kind of fun to believe?"
    ]
  }
];

const DEFAULT_PLAYERS = [];
const CATEGORIES = Object.keys(SECRET_BANK);

const CASE_MOODS = [
  "Someone at the table is about to sound just a little too confident.",
  "The evidence is simple. The lying is where it gets expensive.",
  "One clue each. One bad actor. No one gets to look innocent for free.",
  "Keep your clue clean. Keep your face cleaner.",
  "A quiet room, a shared secret, and one person reading the room instead of the file."
];

const HINT_MODES = {
  none: {
    label: "No hints",
    detail: "Pure read-the-room mode. Imposters only get the category."
  },
  imposter: {
    label: "Imposter hint",
    detail: "Only imposters get a concrete three-word clue packet."
  }
};

const saved = loadSettings();
const state = {
  players: Array.isArray(saved.players) && saved.players.length ? saved.players : DEFAULT_PLAYERS,
  selectedCats: new Set(
    Array.isArray(saved.selectedCats) && saved.selectedCats.length
      ? saved.selectedCats.filter((category) => CATEGORIES.includes(category))
      : CATEGORIES
  ),
  settings: {
    imposterCount: Number.isInteger(saved.imposterCount) ? saved.imposterCount : 1,
    hintMode: HINT_MODES[saved.hintMode] ? saved.hintMode : "imposter",
    wordSource: saved.wordSource === "bank" ? "bank" : "ai",
    blindImposter: saved.blindImposter === true,
    gameMode: saved.gameMode === "question" ? "question" : "secret"
  },
  word: null,
  fakeWord: null,
  question: null,
  imposterQuestion: null,
  category: null,
  imposterIndexes: [],
  caseId: "",
  hint: "",
  mood: "",
  phase: "setup",
  turn: 0,
  message: "",
  editingIdx: null,
  loading: false,
  apiKey: localStorage.getItem(AI_KEY_STORAGE) || ""
};

if (state.selectedCats.size === 0) {
  CATEGORIES.forEach((category) => state.selectedCats.add(category));
}

const root = document.querySelector("#root");

render();

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveSettings() {
  normalizeSettings();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      players: state.players,
      selectedCats: Array.from(state.selectedCats),
      imposterCount: state.settings.imposterCount,
      hintMode: state.settings.hintMode,
      wordSource: state.settings.wordSource,
      blindImposter: state.settings.blindImposter,
      gameMode: state.settings.gameMode
    })
  );
}

const _drag = { active: false, src: -1, over: -1, clone: null, listEl: null, offsetY: 0 };

document.addEventListener("touchmove", (e) => {
  if (!_drag.active) return;
  e.preventDefault();
  const t = e.touches[0];
  if (_drag.clone) _drag.clone.style.top = (t.clientY - _drag.offsetY) + "px";
  if (_drag.clone) _drag.clone.style.visibility = "hidden";
  const under = document.elementFromPoint(t.clientX, t.clientY);
  if (_drag.clone) _drag.clone.style.visibility = "";
  if (_drag.listEl) _drag.listEl.querySelectorAll(".player-item").forEach((e) => e.classList.remove("drag-over"));
  const item = under && under.closest(".player-item");
  if (item && _drag.listEl && _drag.listEl.contains(item)) {
    const idx = +item.dataset.idx;
    if (idx !== _drag.src) { item.classList.add("drag-over"); _drag.over = idx; }
    else _drag.over = _drag.src;
  }
}, { passive: false });

function endTouchDrag() {
  if (!_drag.active) return;
  if (_drag.clone) { _drag.clone.remove(); _drag.clone = null; }
  if (_drag.listEl) _drag.listEl.querySelectorAll(".player-item").forEach((e) => e.classList.remove("dragging", "drag-over"));
  const { src, over } = _drag;
  Object.assign(_drag, { active: false, src: -1, over: -1, listEl: null });
  if (over !== -1 && over !== src) {
    const moved = state.players.splice(src, 1)[0];
    state.players.splice(over, 0, moved);
    saveSettings();
    render();
  }
}
document.addEventListener("touchend", endTouchDrag);
document.addEventListener("touchcancel", endTouchDrag);

function pick(items) {
  return items[randomInt(items.length)];
}

function randomInt(max) {
  if (window.crypto && typeof window.crypto.getRandomValues === "function") {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return values[0] % max;
  }

  return Math.floor(Math.random() * max);
}

function pickQuestionPair() {
  const group = pick(QUESTION_GROUPS);
  const idx1 = randomInt(group.questions.length);
  // Pick a second distinct index without a loop
  let idx2 = randomInt(group.questions.length - 1);
  if (idx2 >= idx1) idx2 += 1;
  return { question: group.questions[idx1], imposterQuestion: group.questions[idx2] };
}

async function startRound() {
  normalizeSettings();

  if (state.players.length < 3) {
    state.message = "Add at least 3 players.";
    render();
    return;
  }

  if (state.settings.gameMode === "secret" && state.selectedCats.size === 0) {
    state.message = "Choose at least 1 category.";
    render();
    return;
  }

  state.imposterIndexes = pickUniqueIndexes(state.players.length, state.settings.imposterCount);
  state.caseId = createCaseId();
  state.mood = pick(CASE_MOODS);
  state.turn = 0;
  state.message = "";

  if (state.settings.gameMode === "question") {
    state.word = null;
    state.fakeWord = null;
    state.category = null;
    state.hint = "";

    if (state.settings.wordSource === "ai" && state.apiKey) {
      state.loading = true;
      render();
      try {
        const result = await generateQuestionWithAI(state.apiKey);
        state.question = result.question;
        state.imposterQuestion = result.imposterQuestion;
      } catch {
        const fallback = pickQuestionPair();
        state.question = fallback.question;
        state.imposterQuestion = fallback.imposterQuestion;
        state.message = "AI unavailable — used question bank instead.";
      }
      state.loading = false;
    } else {
      const pair = pickQuestionPair();
      state.question = pair.question;
      state.imposterQuestion = pair.imposterQuestion;
    }
  } else {
    state.question = null;
    state.imposterQuestion = null;

    const categories = Array.from(state.selectedCats);
    state.category = pick(categories);

    if (state.settings.wordSource === "ai" && state.apiKey) {
      state.loading = true;
      render();
      try {
        const result = await generateWithAI(state.category, state.apiKey);
        state.word = result.secret;
        state.hint = result.hint;
      } catch {
        const fallback = pick(SECRET_BANK[state.category]);
        state.word = fallback.secret;
        state.hint = fallback.hint;
        state.message = "AI unavailable — used word bank instead.";
      }
      state.loading = false;
    } else {
      const secretCase = pick(SECRET_BANK[state.category]);
      state.word = secretCase.secret;
      state.hint = secretCase.hint;
    }

    if (state.settings.blindImposter) {
      const pool = SECRET_BANK[state.category].filter(entry => entry.secret !== state.word);
      state.fakeWord = pick(pool).secret;
    } else {
      state.fakeWord = null;
    }
  }

  state.phase = "pass";
  render();
}

async function generateWithAI(category, apiKey) {
  const allExamples = [
    { cat: "Food",     ex: '{"secret":"Pizza","hint":"Friday, argument, leftovers"}' },
    { cat: "Food",     ex: '{"secret":"Ramen","hint":"midnight, warmth, slurp"}' },
    { cat: "Food",     ex: '{"secret":"Tacos","hint":"Tuesday, messy, optional"}' },
    { cat: "Place",    ex: '{"secret":"Airport","hint":"strangers, goodbye, delays"}' },
    { cat: "Place",    ex: '{"secret":"Gym","hint":"resolution, mirror, excuses"}' },
    { cat: "Place",    ex: '{"secret":"Library","hint":"whispering, overdue, escape"}' },
    { cat: "Object",   ex: '{"secret":"Umbrella","hint":"forgotten, dripping, optimism"}' },
    { cat: "Object",   ex: '{"secret":"Wallet","hint":"panic, ritual, emptied"}' },
    { cat: "Activity", ex: '{"secret":"Camping","hint":"bugs, disconnected, regret"}' },
    { cat: "Activity", ex: '{"secret":"Swimming","hint":"chlorine, laps, silence"}' },
  ];
  const shuffled = allExamples.sort(() => Math.random() - 0.5).slice(0, 4);
  const exampleBlock = shuffled.map(e => `Category: ${e.cat} → ${e.ex}`).join("\n");

  const prompt = `You are a game master for the party game "Imposter". Generate a NEW secret word and 3 hint words for the category: ${category}.

SECRET WORD:
- Must be a common everyday word any adult instantly knows (e.g. sunscreen, elevator, handshake)
- Pick something DIFFERENT from the examples below — do not reuse them
- No abstract, niche, or obscure words

HINTS (the hard part):
- 3 single words that are sneaky — they fit the secret but also fit many other things
- A player who knows the secret should think "yes, that works" — but the imposter shouldn't be able to narrow it down easily
- Forbidden: synonyms, physical descriptions, obvious associations (e.g. for "Coffee" do NOT say "caffeine", "hot", "mug", "morning", "beans")
- Good hints feel slightly unexpected or emotional — they suggest a context or feeling, not a definition

STYLE EXAMPLES (do not repeat these):
${exampleBlock}

Return ONLY this JSON, no markdown:
{"secret":"word or phrase","hint":"word1, word2, word3"}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 80,
      temperature: 1.1
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  const raw = data.choices[0].message.content.trim().replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  const parsed = JSON.parse(raw);
  if (!parsed.secret || !parsed.hint) throw new Error("Unexpected AI response shape");
  return parsed;
}

async function generateQuestionWithAI(apiKey) {
  const examples = [
    '{"question":"What\'s the most nostalgic smell?","imposterQuestion":"What smell makes you feel most at home?"}',
    '{"question":"What\'s a completely irrational fear you actually have?","imposterQuestion":"What thing do most people find fine that genuinely creeps you out?"}',
    '{"question":"What food do you eat in a way that would horrify a chef?","imposterQuestion":"What\'s your most controversial food opinion?"}',
    '{"question":"What\'s the first thing you do when you check into a hotel?","imposterQuestion":"What\'s the first thing you look for in a hotel room?"}',
    '{"question":"What do you do when you forget someone\'s name mid-conversation?","imposterQuestion":"What\'s your exit strategy when you\'re stuck in a boring conversation?"}',
  ];
  const exampleBlock = examples.slice(0, 3).join("\n");

  const prompt = `You are a game master for a party game called "Alibi Imposter". Generate a question pair for the game.

HOW THE GAME WORKS:
- Everyone gets the REAL question, gives their answer with no explanation, then the question is revealed
- The imposter secretly gets a SLIGHTLY DIFFERENT question — they don't know they're the imposter
- Players must figure out whose answer seemed off after the question is revealed

RULES FOR THE QUESTION PAIR:
- Questions should be INTERESTING and UNEXPECTED — not bland favorites (not "favorite color", "favorite season")
- Great topics: nostalgic senses, irrational fears, social awkwardness, hypotheticals, food crimes, guilty pleasures, childhood memories, weird superstitions, hot takes
- The real question should produce answers that tend to CLUSTER so the imposter's different answer sticks out
- Answers should be SHORT: a word, a smell, a place, a food, a feeling, a name
- The imposter question must be on the same topic but subtly different — answerable without knowing the real question
- The two questions should be SIMILAR ENOUGH that the imposter doesn't immediately realize they have a different question
- Do NOT use binary yes/no questions, trivia, or questions where everyone's answer would be identical

GOOD EXAMPLES (do not reuse):
${exampleBlock}

Return ONLY this JSON, no markdown:
{"question":"the real question","imposterQuestion":"the imposter's slightly different question"}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
      temperature: 1.1
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  const raw = data.choices[0].message.content.trim().replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  const parsed = JSON.parse(raw);
  if (!parsed.question || !parsed.imposterQuestion) throw new Error("Unexpected AI response shape");
  return parsed;
}

function renderLoading() {
  const card = el("div", { class: "card" });
  card.appendChild(el("div", { class: "progress" }, "Opening case file"));
  card.appendChild(el("div", { class: "icon-circle" }, "AI"));
  card.appendChild(el("div", { class: "name" }, "Generating…"));
  card.appendChild(el("div", { class: "tip" }, "Picking a fresh word. Just a moment."));
  return card;
}

function render() {
  root.replaceChildren();

  if (state.loading) {
    root.appendChild(renderLoading());
  } else if (state.phase === "setup") {
    root.appendChild(renderSetup());
  } else if (state.phase === "pass") {
    root.appendChild(renderPass());
  } else if (state.phase === "reveal") {
    root.appendChild(renderReveal());
  } else if (state.phase === "answers") {
    root.appendChild(renderAnswers());
  } else if (state.phase === "discuss") {
    root.appendChild(renderDiscuss());
  } else {
    root.appendChild(renderDone());
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function saveEdit(idx, val) {
  const v = val.trim().replace(/\s+/g, " ");
  if (v && !state.players.some((p, i) => p === v && i !== idx)) {
    state.players[idx] = v;
    saveSettings();
  }
  state.editingIdx = null;
  render();
}

function makePlayerList() {
  const list = el("div", { class: "player-list" });
  let deskSrc = -1;

  state.players.forEach((player, i) => {
    const item = el("div", { class: "player-item" });
    item.dataset.idx = i;
    item.setAttribute("draggable", "true");

    const handle = el("span", { class: "drag-handle" }, "⠿");

    let nameEl;
    if (state.editingIdx === i) {
      nameEl = document.createElement("input");
      nameEl.className = "player-name-edit";
      nameEl.type = "text";
      nameEl.maxLength = 20;
      nameEl.value = player;
      nameEl.setAttribute("autocomplete", "off");
      nameEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); saveEdit(i, nameEl.value); }
        if (e.key === "Escape") { state.editingIdx = null; render(); }
      });
      nameEl.addEventListener("blur", () => saveEdit(i, nameEl.value));
      setTimeout(() => { nameEl.focus(); nameEl.select(); }, 0);
    } else {
      nameEl = el("span", { class: "player-name" }, player);
    }

    const actions = el("div", { class: "player-actions" });
    if (state.editingIdx !== i) {
      const editBtn = el("button", { type: "button", class: "icon-btn", "aria-label": `Edit ${player}` }, "✎");
      editBtn.addEventListener("click", (e) => { e.stopPropagation(); state.editingIdx = i; render(); });
      actions.appendChild(editBtn);
    }
    actions.appendChild(el("button", {
      type: "button", class: "icon-btn", "aria-label": `Remove ${player}`,
      onclick: () => { state.players.splice(i, 1); state.editingIdx = null; state.message = ""; normalizeSettings(); saveSettings(); render(); }
    }, "×"));

    // Desktop drag
    item.addEventListener("dragstart", (e) => {
      deskSrc = i; e.dataTransfer.effectAllowed = "move";
      setTimeout(() => item.classList.add("dragging"), 0);
    });
    item.addEventListener("dragend", () => {
      deskSrc = -1;
      list.querySelectorAll(".player-item").forEach((e) => e.classList.remove("dragging", "drag-over"));
    });
    item.addEventListener("dragover", (e) => {
      e.preventDefault();
      if (deskSrc !== -1 && deskSrc !== i) item.classList.add("drag-over");
    });
    item.addEventListener("dragleave", () => item.classList.remove("drag-over"));
    item.addEventListener("drop", (e) => {
      e.preventDefault();
      if (deskSrc !== -1 && deskSrc !== i) {
        const moved = state.players.splice(deskSrc, 1)[0];
        state.players.splice(i, 0, moved);
        deskSrc = -1; saveSettings(); render();
      }
    });

    // Touch drag — only from handle
    handle.addEventListener("touchstart", (e) => {
      _drag.active = true; _drag.src = i; _drag.over = i; _drag.listEl = list;
      const rect = item.getBoundingClientRect();
      _drag.offsetY = e.touches[0].clientY - rect.top;
      const clone = item.cloneNode(true);
      clone.style.cssText = "position:fixed;left:" + rect.left + "px;top:" + rect.top + "px;width:" + rect.width + "px;z-index:9999;pointer-events:none;opacity:0.9;border-radius:8px;box-shadow:0 12px 40px rgba(0,0,0,.7);";
      document.body.appendChild(clone);
      _drag.clone = clone;
      item.classList.add("dragging");
    }, { passive: true });

    item.appendChild(handle);
    item.appendChild(nameEl);
    item.appendChild(actions);
    list.appendChild(item);
  });

  if (!state.players.length) {
    list.appendChild(el("span", { class: "empty-note" }, "No suspects yet."));
  }

  return list;
}

function renderSetup() {
  normalizeSettings();
  const isQuestionMode = state.settings.gameMode === "question";

  const wrap = el("div");
  wrap.appendChild(el("p", { class: "case-kicker" }, isQuestionMode ? "Alibi / everyone answers" : "Case file / private round"));
  wrap.appendChild(el("h1", { class: "h" }, "Imposter"));
  wrap.appendChild(
    el("p", { class: "sub" }, isQuestionMode
      ? "Everyone gets a question. All answer first — then the question is revealed."
      : "A secret is on the table. One player walks in with nothing but nerve.")
  );

  wrap.appendChild(
    el(
      "div",
      { class: "meta-strip", "aria-label": "Round setup summary" },
      el("span", null, `${state.players.length} suspects`),
      isQuestionMode
        ? el("span", null, `${QUESTION_GROUPS.reduce((n, g) => n + g.questions.length, 0)} questions`)
        : el("span", null, `${state.selectedCats.size} word decks`),
      el("span", null, `${state.settings.imposterCount} forged ${state.settings.imposterCount === 1 ? "file" : "files"}`)
    )
  );

  wrap.appendChild(el("div", { class: "section" }, "Case rules"));
  wrap.appendChild(renderRulesPanel());

  wrap.appendChild(el("div", { class: "section" }, `Suspects (${state.players.length})`));
  wrap.appendChild(makePlayerList());

  const addRow = el("form", { class: "add" });
  const input = el("input", {
    type: "text",
    placeholder: "Add suspect",
    maxlength: "20",
    autocomplete: "off",
    "aria-label": "Add suspect"
  });
  const addButton = el("button", { type: "submit" }, "Add");
  addRow.append(input, addButton);
  addRow.addEventListener("submit", (event) => {
    event.preventDefault();
    addPlayer(input.value);
    input.value = "";
    input.focus();
  });
  wrap.appendChild(addRow);

  if (!isQuestionMode) {
    wrap.appendChild(el("div", { class: "section" }, "Word decks"));

    const catsDiv = el("div", { class: "pills" });
    CATEGORIES.forEach((category) => {
      const selected = state.selectedCats.has(category);
      catsDiv.appendChild(
        el(
          "button",
          {
            type: "button",
            class: selected ? "pill on" : "pill",
            "aria-pressed": selected ? "true" : "false",
            onclick: () => {
              if (state.selectedCats.has(category)) {
                state.selectedCats.delete(category);
              } else {
                state.selectedCats.add(category);
              }
              state.message = "";
              saveSettings();
              render();
            }
          },
          category
        )
      );
    });
    wrap.appendChild(catsDiv);
  }

  if (state.settings.wordSource === "ai") {
    wrap.appendChild(el("div", { class: "section" }, "OpenAI API key"));
    const keyRow = el("form", { class: "add", style: "margin-bottom:12px" });
    const keyInput = el("input", { type: "password", placeholder: "sk-…", maxlength: "200", autocomplete: "off", "aria-label": "OpenAI API key" });
    keyInput.value = state.apiKey;
    keyInput.addEventListener("input", () => {
      state.apiKey = keyInput.value.trim();
      localStorage.setItem(AI_KEY_STORAGE, state.apiKey);
    });
    keyRow.appendChild(keyInput);
    keyRow.addEventListener("submit", (e) => e.preventDefault());
    wrap.appendChild(keyRow);
    const keyNote = state.apiKey
      ? el("p", { class: "rule-detail", style: "margin-bottom:20px" }, "Key saved. AI will generate a fresh word each round.")
      : el("p", { class: "rule-detail", style: "margin-bottom:20px" }, "No key — word bank will be used as fallback. Get a key at platform.openai.com.");
    wrap.appendChild(keyNote);
  }

  if (state.message) {
    wrap.appendChild(el("p", { class: "tip" }, state.message));
  }

  const startButton = el("button", { type: "button", class: "btn-primary", onclick: startRound }, "Open the case");
  const notEnoughPlayers = state.players.length < 3;
  const noCategories = !isQuestionMode && state.selectedCats.size === 0;
  startButton.disabled = notEnoughPlayers || noCategories;
  wrap.appendChild(startButton);

  wrap.appendChild(
    el(
      "div",
      { class: "rules" },
      isQuestionMode
        ? `${state.settings.imposterCount} ${state.settings.imposterCount === 1 ? "player" : "players"} secretly get a different question. Everyone answers with no explanation — then the question is revealed and you vote on who was off.`
        : `${state.settings.imposterCount} ${state.settings.imposterCount === 1 ? "file is" : "files are"} forged. ${hintRuleText()} Say one clue, keep your face steady, then vote on who is making it up.`
    )
  );

  return wrap;
}

function renderRulesPanel() {
  const panel = el("div", { class: "choice-panel" });
  const isQuestionMode = state.settings.gameMode === "question";

  // Game mode selector
  const modeGroup = el("div", { class: "choice-group" }, el("p", null, "Game mode"), el("div", { class: "choice-row stacked" }));
  const modeChoices = modeGroup.querySelector(".choice-row");
  [
    { value: "secret", label: "Secret word", detail: "Everyone knows the word except the imposter." },
    { value: "question", label: "Alibi", detail: "Everyone answers the same question — except the imposter gets a slightly different one." }
  ].forEach(({ value, label }) => {
    const selected = state.settings.gameMode === value;
    modeChoices.appendChild(el("button", {
      type: "button",
      class: selected ? "choice text-choice on" : "choice text-choice",
      "aria-pressed": selected ? "true" : "false",
      onclick: () => { state.settings.gameMode = value; state.message = ""; saveSettings(); render(); }
    }, label));
  });

  const imposterGroup = el(
    "div",
    { class: "choice-group" },
    el("p", null, "Forged files"),
    el("div", { class: "choice-row" })
  );
  const imposterChoices = imposterGroup.querySelector(".choice-row");

  [1, 2, 3].forEach((count) => {
    const disabled = count > maxImpostersForCurrentPlayers();
    const selected = state.settings.imposterCount === count;
    imposterChoices.appendChild(
      el(
        "button",
        {
          type: "button",
          class: selected ? "choice on" : "choice",
          disabled: disabled ? "true" : null,
          "aria-pressed": selected ? "true" : "false",
          onclick: () => {
            state.settings.imposterCount = count;
            state.message = "";
            saveSettings();
            render();
          }
        },
        String(count)
      )
    );
  });

  const sourceGroup = el("div", { class: "choice-group" }, el("p", null, "Word source"), el("div", { class: "choice-row stacked" }));
  const sourceChoices = sourceGroup.querySelector(".choice-row");
  [{ value: "ai", label: "AI generated" }, { value: "bank", label: isQuestionMode ? "Question bank" : "Word bank" }].forEach(({ value, label }) => {
    const selected = state.settings.wordSource === value;
    sourceChoices.appendChild(el("button", {
      type: "button",
      class: selected ? "choice text-choice on" : "choice text-choice",
      "aria-pressed": selected ? "true" : "false",
      onclick: () => { state.settings.wordSource = value; state.message = ""; saveSettings(); render(); }
    }, label));
  });

  const panelChildren = [modeGroup, imposterGroup, sourceGroup];

  if (!isQuestionMode) {
    const hintGroup = el(
      "div",
      { class: "choice-group" },
      el("p", null, "Imposter hint"),
      el("div", { class: "choice-row stacked" })
    );
    const hintChoices = hintGroup.querySelector(".choice-row");
    Object.entries(HINT_MODES).forEach(([value, mode]) => {
      const selected = state.settings.hintMode === value;
      hintChoices.appendChild(
        el(
          "button",
          {
            type: "button",
            class: selected ? "choice text-choice on" : "choice text-choice",
            "aria-pressed": selected ? "true" : "false",
            onclick: () => {
              state.settings.hintMode = value;
              state.message = "";
              saveSettings();
              render();
            }
          },
          mode.label
        )
      );
    });
    panelChildren.push(hintGroup);

    const blindGroup = el("div", { class: "choice-group" }, el("p", null, "Blind imposter"), el("div", { class: "choice-row stacked" }));
    const blindChoices = blindGroup.querySelector(".choice-row");
    [{ value: false, label: "Off" }, { value: true, label: "On" }].forEach(({ value, label }) => {
      const selected = state.settings.blindImposter === value;
      blindChoices.appendChild(el("button", {
        type: "button",
        class: selected ? "choice text-choice on" : "choice text-choice",
        "aria-pressed": selected ? "true" : "false",
        onclick: () => { state.settings.blindImposter = value; state.message = ""; saveSettings(); render(); }
      }, label));
    });
    panelChildren.push(blindGroup);
    panelChildren.push(el("p", { class: "rule-detail" }, HINT_MODES[state.settings.hintMode].detail));
    if (state.settings.blindImposter) {
      panelChildren.push(el("p", { class: "rule-detail" }, "Blind imposter: the imposter receives a fake word and doesn't know they're the liar."));
    }
  } else {
    panelChildren.push(el("p", { class: "rule-detail" }, "Alibi: everyone reads a question and answers out loud. The imposter secretly got a slightly different question — their alibi won't quite match. Blind imposter is always on."));
  }

  panel.append(...panelChildren);
  return panel;
}

function addPlayer(rawName) {
  const name = rawName.trim().replace(/\s+/g, " ");

  if (!name) {
    return;
  }

  if (state.players.length >= 12) {
    state.message = "Maximum 12 players.";
    render();
    return;
  }

  const alreadyExists = state.players.some((player) => player.toLowerCase() === name.toLowerCase());
  if (alreadyExists) {
    state.message = `${name} is already in.`;
    render();
    return;
  }

  state.players.push(name);
  state.message = "";
  normalizeSettings();
  saveSettings();
  render();
}

function renderPass() {
  const name = state.players[state.turn];
  const isQuestionMode = state.settings.gameMode === "question";
  const card = el("div", { class: "card" });
  card.appendChild(el("div", { class: "progress" }, `${state.caseId} / dossier ${state.turn + 1} of ${state.players.length}`));
  card.appendChild(el("div", { class: "icon-circle", "aria-hidden": "true" }, isQuestionMode ? "Q" : "CASE"));
  card.appendChild(el("div", { class: "name" }, `Hand the file to ${name}`));
  card.appendChild(el("div", { class: "tip" }, "Everyone else looks away. This page belongs to one person."));
  card.appendChild(el("div", { class: "round-readout" }, rulesSummary()));
  card.appendChild(el("div", { class: "case-note" }, state.mood));
  card.appendChild(
    el(
      "div",
      { class: "actions" },
      el("button", { type: "button", class: "btn-primary", onclick: showReveal }, `Open ${name}'s file`),
      el("button", { type: "button", class: "btn-secondary", onclick: returnToSetup }, "Edit case rules")
    )
  );
  return card;
}

function showReveal() {
  state.phase = "reveal";
  render();
}

function renderReveal() {
  const isImposter = state.imposterIndexes.includes(state.turn);
  const name = state.players[state.turn];
  const isQuestionMode = state.settings.gameMode === "question";

  if (isQuestionMode) {
    // In question mode, everyone sees a crew-style card with their question.
    // The imposter gets their slightly-different question but doesn't know it's different.
    const shownQuestion = isImposter ? state.imposterQuestion : state.question;
    const card = el("div", { class: "card crew" });
    card.appendChild(el("div", { class: "progress" }, `${state.caseId} / ${name}`));
    card.appendChild(el("div", { class: "icon-circle crew", "aria-hidden": "true" }, "Q"));
    card.appendChild(el("div", { class: "cat" }, "Your question"));
    card.appendChild(el("div", { class: "word" }, shownQuestion));
    card.appendChild(el("div", { class: "tip" }, "Remember your answer. When everyone has seen their question, you'll each say it out loud — no explanation."));

    const isLast = state.turn === state.players.length - 1;
    const nextLabel = isLast ? "Seal it and begin" : "Seal it and pass";
    card.appendChild(
      el(
        "div",
        { class: "actions" },
        el("button", { type: "button", class: "btn-primary", onclick: nextPlayerOrDiscuss }, nextLabel),
        el("button", { type: "button", class: "btn-secondary", onclick: returnToSetup }, "Edit case rules")
      )
    );
    return card;
  }

  const showAsImposter = isImposter && !state.settings.blindImposter;
  const card = el("div", { class: showAsImposter ? "card imposter" : "card crew" });
  card.appendChild(el("div", { class: "progress" }, `${state.caseId} / ${name}`));

  if (showAsImposter) {
    card.appendChild(el("div", { class: "icon-circle imp", "aria-hidden": "true" }, "LIE"));
    card.appendChild(el("div", { class: "word danger" }, "You have no evidence"));
    card.appendChild(el("div", { class: "cat danger" }, `Category - ${state.category}`));
    card.appendChild(el("div", { class: "tip" }, "Listen hard. Borrow details. If they catch you, guess the secret to steal it."));
    if (state.settings.hintMode === "imposter") {
      card.appendChild(el("div", { class: "case-note danger" }, `Imposter hint: ${state.hint}`));
    } else {
      card.appendChild(el("div", { class: "case-note danger" }, "Your file is blank. Your confidence is the evidence now."));
    }
  } else {
    card.appendChild(el("div", { class: "icon-circle crew", "aria-hidden": "true" }, "TRUE"));
    card.appendChild(el("div", { class: "cat" }, `Category - ${state.category}`));
    card.appendChild(el("div", { class: "word" }, isImposter ? state.fakeWord : state.word));
    card.appendChild(el("div", { class: "tip" }, "Give one clue that proves you know it without handing the answer away."));
  }

  const isLast = state.turn === state.players.length - 1;
  const nextLabel = isLast ? "Seal it and begin" : "Seal it and pass";
  card.appendChild(
    el(
      "div",
      { class: "actions" },
      el("button", { type: "button", class: "btn-primary", onclick: nextPlayerOrDiscuss }, nextLabel),
      el("button", { type: "button", class: "btn-secondary", onclick: returnToSetup }, "Edit case rules")
    )
  );
  return card;
}

function nextPlayerOrDiscuss() {
  if (state.turn === state.players.length - 1) {
    state.phase = state.settings.gameMode === "question" ? "answers" : "discuss";
  } else {
    state.turn += 1;
    state.phase = "pass";
  }

  render();
}

function renderAnswers() {
  const wrap = el("div");
  wrap.appendChild(el("p", { class: "case-kicker" }, "Alibi"));
  wrap.appendChild(el("h1", { class: "h" }, "Everyone answers"));
  wrap.appendChild(el("p", { class: "sub" }, "Go around the table. Each person says their answer. No explanation, no context — just the answer."));

  wrap.appendChild(
    el(
      "div",
      { class: "case-banner" },
      el("span", null, state.caseId),
      el(
        "strong",
        null,
        `${state.settings.imposterCount} forged ${state.settings.imposterCount === 1 ? "file is" : "files are"} in circulation`
      )
    )
  );

  const card = el("div", { class: "info-box" });
  const list = el("ol", { class: "reveal-list" });
  list.appendChild(el("li", null, "Go around the table in order. Each person says only their answer."));
  list.appendChild(el("li", null, "No explanations. No context. Just the answer."));
  list.appendChild(el("li", null, "When everyone has answered, reveal the question and discuss."));
  card.appendChild(list);
  wrap.appendChild(card);

  const suspects = el("div", { class: "suspect-board" });
  state.players.forEach((player) => {
    suspects.appendChild(el("span", null, player));
  });
  wrap.appendChild(suspects);

  const row = el("div", { class: "actions" });
  row.appendChild(el("button", {
    type: "button",
    class: "btn-primary",
    onclick: () => { state.phase = "discuss"; render(); }
  }, "Reveal the question"));
  row.appendChild(el("button", { type: "button", class: "btn-secondary", onclick: startRound }, "New case"));
  row.appendChild(el("button", { type: "button", class: "btn-secondary", onclick: returnToSetup }, "Edit rules"));
  wrap.appendChild(row);
  return wrap;
}

function renderDiscuss() {
  const isQuestionMode = state.settings.gameMode === "question";
  const wrap = el("div");
  wrap.appendChild(el("p", { class: "case-kicker" }, isQuestionMode ? "Alibi" : "Interrogation"));
  wrap.appendChild(el("h1", { class: "h" }, "The table is live"));
  wrap.appendChild(el("p", { class: "sub" }, isQuestionMode
    ? "The question is out. Now discuss who gave a different answer."
    : "One clue each. Then watch who starts explaining too much."));

  wrap.appendChild(
    el(
      "div",
      { class: "case-banner" },
      el("span", null, state.caseId),
      el(
        "strong",
        null,
        `${state.settings.imposterCount} forged ${state.settings.imposterCount === 1 ? "file is" : "files are"} in circulation`
      )
    )
  );

  if (isQuestionMode) {
    const questionCard = el("div", { class: "info-box" });
    questionCard.appendChild(el("div", { class: "cat" }, "The real question"));
    questionCard.appendChild(el("div", { class: "word", style: "font-size: 1.1rem; margin: 8px 0 0;" }, state.question));
    wrap.appendChild(questionCard);
  }

  const card = el("div", { class: "info-box" });
  const list = el("ol", { class: "reveal-list" });

  if (isQuestionMode) {
    list.appendChild(el("li", null, "Everyone got this question — except one person quietly got a slightly different one."));
    list.appendChild(el("li", null, "Whose answer seemed off? Discuss, then vote."));
    list.appendChild(el("li", null, "If the vote ties, do another round of answers and force a decision."));
    list.appendChild(el("li", null, "If caught, the imposter gets one guess at what their question actually was."));
  } else {
    list.appendChild(el("li", null, "Go around the room. Each person gives one clue."));
    list.appendChild(el("li", null, "No saying the secret. No phrases. No rescuing the liar."));
    list.appendChild(el("li", null, "After one full round, accuse someone out loud."));
    list.appendChild(el("li", null, "If the vote ties, run one more clue round and make it hurt."));
    list.appendChild(el("li", null, "If caught, each accused imposter gets one final guess at the secret."));
  }

  card.appendChild(list);
  wrap.appendChild(card);

  const suspects = el("div", { class: "suspect-board" });
  state.players.forEach((player) => {
    suspects.appendChild(el("span", null, player));
  });
  wrap.appendChild(suspects);

  const row = el("div", { class: "actions" });
  row.appendChild(el("button", { type: "button", class: "btn-secondary", onclick: revealAnswer }, "Close the case"));
  row.appendChild(el("button", { type: "button", class: "btn-secondary", onclick: startRound }, "New case"));
  row.appendChild(el("button", { type: "button", class: "btn-secondary", onclick: returnToSetup }, "Edit rules"));
  wrap.appendChild(row);
  return wrap;
}

function revealAnswer() {
  state.phase = "done";
  render();
}

function renderDone() {
  const isQuestionMode = state.settings.gameMode === "question";
  const card = el("div", { class: "card" });
  card.appendChild(el("div", { class: "progress" }, `${state.caseId} / case closed`));

  if (isQuestionMode) {
    card.appendChild(el("div", { class: "cat" }, "The real question"));
    card.appendChild(el("div", { class: "word" }, state.question));
    card.appendChild(el("div", { style: "height: 8px;" }));
    card.appendChild(el("div", { class: "cat danger" }, "The imposter's question"));
    card.appendChild(el("div", { class: "word danger" }, state.imposterQuestion));
  } else {
    card.appendChild(el("div", { class: "cat" }, `Secret - ${state.category}`));
    card.appendChild(el("div", { class: "word" }, state.word));
  }

  card.appendChild(el("div", { style: "height: 8px;" }));
  card.appendChild(el("div", { class: "cat danger" }, state.imposterIndexes.length === 1 ? "The imposter was" : "The imposters were"));
  card.appendChild(el("div", { class: "word danger" }, state.imposterIndexes.map((index) => state.players[index]).join(", ")));
  card.appendChild(el("div", { class: "case-note" }, "Archive the accusations. Shuffle the evidence. Run it back."));

  const row = el("div", { class: "actions" });
  row.appendChild(el("button", { type: "button", class: "btn-primary", onclick: startRound }, "Open another case"));
  row.appendChild(
    el(
      "button",
      {
        type: "button",
        class: "btn-secondary",
        onclick: () => {
          state.phase = "setup";
          render();
        }
      },
      "Back to suspects"
    )
  );
  card.appendChild(row);
  return card;
}

function el(tag, attrs, ...children) {
  const element = document.createElement(tag);

  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (key === "class") {
        element.className = value;
      } else if (key === "onclick") {
        element.addEventListener("click", value);
      } else if (key === "style") {
        element.style.cssText = value;
      } else if (value !== null && value !== undefined) {
        element.setAttribute(key, value);
      }
    });
  }

  children.flat().forEach((child) => {
    if (child === null || child === undefined) {
      return;
    }

    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

function createCaseId() {
  return `CASE ${String(randomInt(900) + 100)}-${String(randomInt(90) + 10)}`;
}

function returnToSetup() {
  state.phase = "setup";
  state.turn = 0;
  state.message = "";
  render();
}

function rulesSummary() {
  const isQuestionMode = state.settings.gameMode === "question";
  const forged = `${state.settings.imposterCount} forged ${state.settings.imposterCount === 1 ? "file" : "files"}`;
  if (isQuestionMode) return `${forged} / alibi`;
  return `${forged} / ${HINT_MODES[state.settings.hintMode].label}`;
}

function hintRuleText() {
  if (state.settings.hintMode === "imposter") {
    return "Only imposters receive a hint.";
  }

  return "No one receives a hint.";
}

function maxImpostersForCurrentPlayers() {
  return Math.min(3, Math.max(1, state.players.length - 3));
}

function normalizeSettings() {
  state.settings.imposterCount = Math.min(
    maxImpostersForCurrentPlayers(),
    Math.max(1, Number(state.settings.imposterCount) || 1)
  );

  if (!HINT_MODES[state.settings.hintMode]) {
    state.settings.hintMode = "imposter";
  }

  if (state.settings.gameMode !== "question" && state.settings.gameMode !== "secret") {
    state.settings.gameMode = "secret";
  }
}

function pickUniqueIndexes(totalPlayers, count) {
  const indexes = Array.from({ length: totalPlayers }, (_, index) => index);

  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = randomInt(i + 1);
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }

  return indexes.slice(0, count);
}
