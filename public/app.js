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
    wordSource: saved.wordSource === "bank" ? "bank" : "ai"
  },
  word: null,
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
      wordSource: state.settings.wordSource
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

async function startRound() {
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
  state.imposterIndexes = pickUniqueIndexes(state.players.length, state.settings.imposterCount);
  state.caseId = createCaseId();
  state.mood = pick(CASE_MOODS);
  state.turn = 0;
  state.message = "";

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

  const sourceGroup = el("div", { class: "choice-group" }, el("p", null, "Word source"), el("div", { class: "choice-row stacked" }));
  const sourceChoices = sourceGroup.querySelector(".choice-row");
  [{ value: "ai", label: "AI generated" }, { value: "bank", label: "Word bank" }].forEach(({ value, label }) => {
    const selected = state.settings.wordSource === value;
    sourceChoices.appendChild(el("button", {
      type: "button",
      class: selected ? "choice text-choice on" : "choice text-choice",
      "aria-pressed": selected ? "true" : "false",
      onclick: () => { state.settings.wordSource = value; state.message = ""; saveSettings(); render(); }
    }, label));
  });

  panel.append(
    imposterGroup,
    hintGroup,
    sourceGroup,
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
