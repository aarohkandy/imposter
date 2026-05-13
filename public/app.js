const STORAGE_KEY = "imposter-local-minimal-v1";

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

const DEFAULT_PLAYERS = ["om", "aryan", "rohan", "thomas", "roger", "aaroh"];
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
    hintMode: HINT_MODES[saved.hintMode] ? saved.hintMode : "imposter"
  },
  word: null,
  category: null,
  imposterIndexes: [],
  caseId: "",
  hint: "",
  mood: "",
  phase: "setup",
  turn: 0,
  message: ""
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
      hintMode: state.settings.hintMode
    })
  );
}

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

function startRound() {
  normalizeSettings();

  if (state.players.length < 3) {
    state.message = "Add at least 3 players.";
    render();
    return;
  }

  if (state.selectedCats.size === 0) {
    state.message = "Choose at least 1 category.";
    render();
    return;
  }

  const categories = Array.from(state.selectedCats);
  state.category = pick(categories);
  const secretCase = pick(SECRET_BANK[state.category]);
  state.word = secretCase.secret;
  state.hint = secretCase.hint;
  state.imposterIndexes = pickUniqueIndexes(state.players.length, state.settings.imposterCount);
  state.caseId = createCaseId();
  state.mood = pick(CASE_MOODS);
  state.turn = 0;
  state.phase = "pass";
  state.message = "";
  render();
}

function render() {
  root.replaceChildren();

  if (state.phase === "setup") {
    root.appendChild(renderSetup());
  } else if (state.phase === "pass") {
    root.appendChild(renderPass());
  } else if (state.phase === "reveal") {
    root.appendChild(renderReveal());
  } else if (state.phase === "discuss") {
    root.appendChild(renderDiscuss());
  } else {
    root.appendChild(renderDone());
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function renderSetup() {
  normalizeSettings();

  const wrap = el("div");
  wrap.appendChild(el("p", { class: "case-kicker" }, "Case file / private round"));
  wrap.appendChild(el("h1", { class: "h" }, "Imposter"));
  wrap.appendChild(
    el("p", { class: "sub" }, "A secret is on the table. One player walks in with nothing but nerve.")
  );

  wrap.appendChild(
    el(
      "div",
      { class: "meta-strip", "aria-label": "Round setup summary" },
      el("span", null, `${state.players.length} suspects`),
      el("span", null, `${state.selectedCats.size} word decks`),
      el("span", null, `${state.settings.imposterCount} forged ${state.settings.imposterCount === 1 ? "file" : "files"}`)
    )
  );

  wrap.appendChild(el("div", { class: "section" }, "Case rules"));
  wrap.appendChild(renderRulesPanel());

  wrap.appendChild(el("div", { class: "section" }, `Suspects (${state.players.length})`));

  const playersDiv = el("div", { class: "players" });
  state.players.forEach((player, index) => {
    const tag = el("div", { class: "tag" }, el("span", null, player));
    tag.appendChild(
      el(
        "button",
        {
          type: "button",
          "aria-label": `Remove ${player}`,
          onclick: () => {
            state.players.splice(index, 1);
            state.message = "";
            normalizeSettings();
            saveSettings();
            render();
          }
        },
        "x"
      )
    );
    playersDiv.appendChild(tag);
  });

  if (!state.players.length) {
    playersDiv.appendChild(el("span", { class: "empty-note" }, "No players yet."));
  }

  wrap.appendChild(playersDiv);

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

  if (state.message) {
    wrap.appendChild(el("p", { class: "tip" }, state.message));
  }

  const startButton = el("button", { type: "button", class: "btn-primary", onclick: startRound }, "Open the case");
  startButton.disabled = state.players.length < 3 || state.selectedCats.size === 0;
  wrap.appendChild(startButton);

  wrap.appendChild(
    el(
      "div",
      { class: "rules" },
      `${state.settings.imposterCount} ${state.settings.imposterCount === 1 ? "file is" : "files are"} forged. ${hintRuleText()} Say one clue, keep your face steady, then vote on who is making it up.`
    )
  );

  return wrap;
}

function renderRulesPanel() {
  const panel = el("div", { class: "choice-panel" });

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

  panel.append(
    imposterGroup,
    hintGroup,
    el("p", { class: "rule-detail" }, HINT_MODES[state.settings.hintMode].detail)
  );
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
  const card = el("div", { class: "card" });
  card.appendChild(el("div", { class: "progress" }, `${state.caseId} / dossier ${state.turn + 1} of ${state.players.length}`));
  card.appendChild(el("div", { class: "icon-circle", "aria-hidden": "true" }, "CASE"));
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
  const card = el("div", { class: isImposter ? "card imposter" : "card crew" });
  card.appendChild(el("div", { class: "progress" }, `${state.caseId} / ${name}`));

  if (isImposter) {
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
    card.appendChild(el("div", { class: "word" }, state.word));
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
    state.phase = "discuss";
  } else {
    state.turn += 1;
    state.phase = "pass";
  }

  render();
}

function renderDiscuss() {
  const wrap = el("div");
  wrap.appendChild(el("p", { class: "case-kicker" }, "Interrogation"));
  wrap.appendChild(el("h1", { class: "h" }, "The table is live"));
  wrap.appendChild(el("p", { class: "sub" }, "One clue each. Then watch who starts explaining too much."));

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
  list.appendChild(el("li", null, "Go around the room. Each person gives one clue."));
  list.appendChild(el("li", null, "No saying the secret. No phrases. No rescuing the liar."));
  list.appendChild(el("li", null, "After one full round, accuse someone out loud."));
  list.appendChild(el("li", null, "If the vote ties, run one more clue round and make it hurt."));
  list.appendChild(el("li", null, "If caught, each accused imposter gets one final guess at the secret."));
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
  const card = el("div", { class: "card" });
  card.appendChild(el("div", { class: "progress" }, `${state.caseId} / case closed`));
  card.appendChild(el("div", { class: "cat" }, `Secret - ${state.category}`));
  card.appendChild(el("div", { class: "word" }, state.word));
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
  const forged = `${state.settings.imposterCount} forged ${state.settings.imposterCount === 1 ? "file" : "files"}`;
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
}

function pickUniqueIndexes(totalPlayers, count) {
  const indexes = Array.from({ length: totalPlayers }, (_, index) => index);

  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = randomInt(i + 1);
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }

  return indexes.slice(0, count);
}
