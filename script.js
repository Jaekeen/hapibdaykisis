/* =====================================================================
    HAPI BDAY KISIS
   ===================================================================== */
const CONFIG = {
  herName: "Kisses",
  welcomeText: "Helo, I made something for u hehe 🎂",
  greeting: "HAPPY BIRTHDAY, {name}!! 🎂",

  // ---- THE BIRTHDAY MESSAGE ----
  message:
    "HI AGAIN BIRTHDAY GIRLLLL HAHAHAHAHAHA HAPIIII BIRTHDAYYYYY 🎂 I hope you're enjoying your dayyy!! and I hope you have a really good one today and get to do whatever makes you happy HAHAHAHA okay byeeeeeee -from your #1 fan ",
  signature: "", 

  // ---- (inside the assets folder) ----
  photo: "assets/kisis-photo.jpg",
  music: { file: "assets/birthday-song.mp3", volume: 1.1, loop: true }, // volume 
  wobbleSpeed: 1, // her photo
  catSpeed: 1, // idle cat animations
  confettiAmount: 1.2, // how much confetti falls
  chaosSeconds: 5, // how long MORE CHAOS lasts

  // ---- COLORS ----
  colors: {
    ink: "#2d2a3e", // outlines and text
    accent: "#dd2370", // main pink
    accent2: "#7c4dff", // purple
    card: "#fff6fa", // message card background
    confetti: ["#ff4d8d", "#ffb703", "#2ec4b6", "#8a5cf6", "#3a86ff", "#ff7aa2", "#ffd23f"],
    letters: ["#e0246f", "#ef8d00", "#14a89b", "#7c4dff", "#2f74f0"], // greeting letters
  },

  // ---- MOCHA (brown) AND MAGGIE (white) ----
  dogs: {
    title: "Birthday party security",
    approval: "Final approval: Mocha & Maggie ✅",
    mocha: {
      name: "Mocha", role: "Head of security", photo: "assets/mocha.jpg",
      sayings: ["Don't listen to Maggie. I'm the favorite.",
    "I was told there would be snacks.",
    "She's cute, but I'm cuter.",
    "Okay fine, it's her birthday. 🙄",
   "I'm 5. I know what I'm doing.",
   "I'm 5. I know what I'm doing.",
  "Mocha (5) says happy birthday 🐾",
  "Birthday girl!! GIVE ME ATTENTION.",
    "CASE FILE #005: a whole birthday website. Explain yourself, Jachin.",
  "OFFICIAL STATEMENT: he wouldn't have made all this for just anybody.",
    "I've guarded this household for 5 years. I've never seen Jachin act this suspicious.",
    "From what this website tells me, he really wanted you to feel special today.",
                
               ],
        
    
    },
    maggie: {
      name: "Maggie", role: "Chief birthday inspector", photo: "assets/maggie.jpg",
      sayings: ["Happy birthday! Now give me treats.",
    "I'm obviously the favorite child.",
    "Can I have some of the birthday cake?",
    "I demand cuddles immediately.",
      "I'm 2 and I want snacks.",
         "Birthday girl!! GIVE ME ATTENTION.",
         "Maggie (2) says happy birthday!! 🐾",
                "JACHIN THINKS YOU'RE CUTE BTW. OKAY BYEEE",
                "we asked the creator whether he likes you. he gave us a whole website instead of an answer.",
                "we asked the creator whether he likes you. he gave us a whole website instead of an answer.",
                "OMG OMG OMG THE GUY WHO MADE THIS LIKES OUR HUMAN",
                "GUYS I FOUND OUT WHY THE CATS ARE HERE. THEY'RE COVERING FOR JACHIN.",
                "Maggie has no idea what's happening but she's excited.",
  
  ],
    },
  },

  // ---- THE DOGS LEAVE THEIR SPOTS, WANDER, THEN WALK BACK ----
  dogRoam: { homeSeconds: [20, 40], legs: [3, 5], speed: 150 }, // seconds at their spot, stops per walk, walking speed (px/sec)

  // ---- WHEN SOMEONE SPAMS "MORE CHAOS", THE DOGS GET ANGRY ----
  // Counts taps inside windowSeconds. Warning, then scolding, then the button locks for cooldownSeconds.
  dogAnger: {
    warnAt: 4, scoldAt: 7, angryAt: 10, windowSeconds: 12, cooldownSeconds: 8,
    warn: "psst... Mocha & Maggie are getting suspicious 👀",
    scold: "STOP PRESSING IT!! Mocha & Maggie are getting ANGRY 💢",
    angry: "TOO MUCH CHAOS. Mocha & Maggie are angry, the button is locked for a moment 🔒",
    growls: ["GRRR", "WOOF!! (that means stop)", "*angry dog noises*", "ENOUGH CHAOS"],
  },

  // ---- FLOATING MESSAGES and CAT REACTIONS ----
  floaters: {
    open: ["THE CATS HAVE ARRIVED", "IT'S YOUR DAY KISIS!!"],
    chaos: ["PARTY MODE ACTIVATED", "THE CATS ARE LOSING IT", "SECURITY HAS BEEN NOTIFIED",     "THIS PARTY IS GETTING OUT OF HAND",
    "NOBODY IS STOPPING THE CONFETTI",
    "23RD BIRTHDAY CHAOS: ACTIVATED",
           "🚨 BIRTHDAY EMERGENCY 🚨 We have detected an unusually high level of cuteness.",],
    last: ["SPECIAL DELIVERY 💌"],
    patrol: ["PATROL COMPLETE ✅", "ALL CLEAR. CAKE SAFE.", "SECURITY IS BACK AT THEIR POST",     "5-YEAR-OLD SECURITY CHIEF SAYS ALL CLEAR",
    "2-YEAR-OLD ASSISTANT SECURITY OFFICER WANTS TREATS" ],
  },
  catSayings: [
"meow (birthday girl detected)",
    "Fun fact: she calls me Joe",
    "Apparently I'm allowed to call her Love",
    "She likes being complimented (source: trust me)",
      "fun fact: someone gets happy when you reply",
         "this website was NOT made under normal circumstances",
       "you didn't hear this from us, okay?",
    "Fun fact: she somehow makes everything funny",
    "She has officially made my eyes very blessed",
    "please stop being this cute",
      "coded with HTML, CSS, JavaScript",
         "website by jachin, obviously",
    "Jachin has a crush on you. there, we said it.",
    "we asked Jachin if he likes you. he suddenly became very quiet.",
       "the cats have confirmed that this is NOT just birthday-greeting behavior",
          "CONFIDENTIAL: Jachin thinks you're really, really pretty.",
           "this was supposed to be a simple birthday thing",
     "someone's been catching feelings and it isn't any of us",
    "You don't have to do anything extraordinary to make a person enjoy your company.",
     "FINAL REPORT: Jachin likes you, and I think he's genuinely glad he met you.",
      "we were told there would be cake. where is it.",
      "meow meow. translation: HAPPY BIRTHDAYYYYY.",
      "the cats have officially taken over the website.",
      "psst... Joe definitely spent way too much time making this.",
      "you didn't hear this from us, but someone is very glad he met you.",
      
  ],
};
/* ===================== END OF THE PART YOU EDIT ===================== */

const $ = (id) => document.getElementById(id);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const fill = (s) => s.replace(/\{name\}/g, CONFIG.herName);
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const floatLayer = $("float-layer");

/* ---------- Apply config to the page ---------- */
const rs = document.documentElement.style;
rs.setProperty("--ink", CONFIG.colors.ink);
rs.setProperty("--accent", CONFIG.colors.accent);
rs.setProperty("--accent2", CONFIG.colors.accent2);
rs.setProperty("--card", CONFIG.colors.card);
rs.setProperty("--wobble", CONFIG.wobbleSpeed);
rs.setProperty("--cat-speed", CONFIG.catSpeed);
document.title = fill("Happy Birthday, {name}! 🎂");
$("welcome-text").textContent = CONFIG.welcomeText;
$("message").textContent = fill(CONFIG.message);
$("signature").textContent = CONFIG.signature;

/* ---------- Greeting: every letter is its own bouncy span ---------- */
(function buildGreeting() {
  const h = $("greeting"), text = fill(CONFIG.greeting).toUpperCase(), L = CONFIG.colors.letters;
  h.setAttribute("aria-label", text);
  h.textContent = "";
  let i = 0;
  text.split(" ").forEach((word) => {
    const w = document.createElement("span");
    w.className = "word";
    w.setAttribute("aria-hidden", "true");
    [...word].forEach((ch) => {
      const s = document.createElement("span");
      s.className = "letter";
      s.textContent = ch;
      s.style.cssText = `--i:${i};--lc:${L[i % L.length]};--r:${i % 2 ? -3 : 3}deg`;
      i++;
      w.append(s);
    });
    h.append(w, " ");
  });
})();

/* ---------- Her photo (with a friendly placeholder if the file is missing) ---------- */
(function setupPhoto() {
  const img = $("photo");
  const placeholder = "data:image/svg+xml," + encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400'><rect width='300' height='400' fill='#fff0f6'/>" +
    "<text x='150' y='190' font-size='64' text-anchor='middle'>📸</text>" +
    "<text x='150' y='240' font-size='16' text-anchor='middle' fill='#2d2a3e' font-family='sans-serif'>add " + CONFIG.photo + "</text></svg>");
  img.alt = `Photo of ${CONFIG.herName}`;
  img.onerror = () => { console.warn("Photo not found:", CONFIG.photo); img.onerror = null; img.src = placeholder; };
  img.src = CONFIG.photo;
})();

/* ---------- Cats: original SVG drawings ---------- */
const CATS = {
  "cat-a": { pose: "sit", fur: "#ffb86b", belly: "#fff0dc", hat: ["#ff5c9d", "#ffd23f"], face: "open", tabby: true, d: -1 },
  "cat-b": { pose: "cheer", fur: "#ffffff", belly: "#ffe3ec", hat: ["#38bdf8", "#ffd23f"], face: "happy", d: -2.5 },
  "cat-c": { pose: "loaf", fur: "#b9bcc8", belly: "#eceef4", hat: ["#a66bff", "#ffe14d"], face: "open", d: -3.4 },
  "cat-d": { pose: "sit", fur: "#f6e7cf", belly: "#fffaf0", hat: ["#10c9a0", "#ff5c9d"], face: "wink", d: -0.6 },
  "peek-cat": { pose: "peek", fur: "#ffb86b", belly: "#fff0dc", hat: ["#ff5c9d", "#ffd23f"], face: "open", tabby: true, d: 0 },
};

function catSVG(c) {
  const O = 'stroke="#4a3b47" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"';
  const f = c.fur, [h1, h2] = c.hat;
  const E = (cx, cy, rx, ry, fl, x = "") => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fl}" ${x}/>`;
  const tail = (d) => `<path class="tail" d="${d}" fill="none" stroke="#4a3b47" stroke-width="14" stroke-linecap="round"/><path class="tail" d="${d}" fill="none" stroke="${f}" stroke-width="9" stroke-linecap="round"/>`;
  const arm = (cls, d, px) => `<g class="${cls}"><path d="${d}" fill="none" stroke="#4a3b47" stroke-width="15" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${f}" stroke-width="10" stroke-linecap="round"/>${E(px, 76, 8, 8, f, O)}</g>`;
  const feet = E(52, 152, 12, 7, f, O) + E(88, 152, 12, 7, f, O);
  const bodies = {
    sit: tail("M98 130C130 130 134 98 118 92") + E(70, 124, 32, 30, f, O) + E(70, 134, 18, 16, c.belly) + feet + E(54, 140, 8, 11, f, O) + E(86, 140, 8, 11, f, O),
    cheer: tail("M98 130C130 130 134 98 118 92") + E(70, 124, 32, 30, f, O) + E(70, 134, 18, 16, c.belly) + feet + arm("arm-l", "M46 114Q24 104 24 78", 24) + arm("arm-r", "M94 114Q116 104 116 78", 116),
    loaf: tail("M108 132C134 132 136 104 124 98") + E(70, 128, 44, 26, f, O) + E(52, 150, 10, 6, f, O) + E(88, 150, 10, 6, f, O),
    peek: "",
  };
  const eye = (x) => `<circle cx="${x}" cy="76" r="4.5" fill="#2d2a3e"/><circle cx="${x + 1.5}" cy="74.5" r="1.5" fill="#fff"/>`;
  const arc = (x) => `<path d="M${x - 6} 78Q${x} 69 ${x + 6} 78" fill="none" stroke="#2d2a3e" stroke-width="3.2" stroke-linecap="round"/>`;
  const face = { open: eye(56) + eye(84), happy: arc(56) + arc(84), wink: eye(56) + arc(84) }[c.face];
  const tabby = c.tabby ? '<path d="M37 68Q43 68 47 71M36 76Q42 76 46 78M103 68Q97 68 93 71M104 76Q98 76 94 78" fill="none" stroke="#b86a2a" stroke-width="2.5" stroke-linecap="round"/>' : "";
  const cone = "M53 48L70 8L87 48Z";
  const hat = `<g transform="rotate(-8 70 48)"><g class="hat"><path d="${cone}" fill="${h1}"/><path d="M62.4 26H77.6L80.2 32H59.8Z" fill="${h2}"/><path d="M56.8 39H83.2L85.3 44H54.7Z" fill="${h2}"/><path d="${cone}" fill="none" ${O}/>${E(70, 48, 19, 4.5, h2, O)}<circle cx="70" cy="8" r="5.5" fill="${h2}" ${O}/></g></g>`;
  const head =
    `<path d="M36 62L38 26L64 46Z" fill="${f}" ${O}/><path d="M104 62L102 26L76 46Z" fill="${f}" ${O}/>` +
    '<path d="M42 52L43 36L55 46Z" fill="#ffb3c7"/><path d="M98 52L97 36L85 46Z" fill="#ffb3c7"/>' +
    E(70, 74, 36, 32, f, O) + tabby + `<g class="eyes">${face}</g>` +
    E(46, 88, 6, 3.5, "#ff8fb1", 'opacity=".55"') + E(94, 88, 6, 3.5, "#ff8fb1", 'opacity=".55"') +
    '<path d="M67 82h6l-3 4z" fill="#ff7aa2"/><path d="M70 86Q65 93 59 88M70 86Q75 93 81 88" fill="none" stroke="#2d2a3e" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M38 84L20 80M38 89L20 91M102 84L120 80M102 89L120 91" stroke="#8a7a86" stroke-width="1.6" stroke-linecap="round"/>' + hat;
  const paws = c.pose === "peek" ? E(50, 110, 11, 8, f, O) + E(90, 110, 11, 8, f, O) : "";
  const sparks = `<path class="spark" d="M122 22l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="${h2}"/><path class="spark" d="M16 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="${h1}"/>`;
  return `<svg viewBox="0 0 140 ${c.pose === "peek" ? 116 : 160}" style="--d:${c.d}s" aria-hidden="true" focusable="false">${bodies[c.pose]}${head}${paws}${sparks}</svg>`;
}

Object.entries(CATS).forEach(([id, spec]) => {
  const el = $(id);
  el.innerHTML = id === "peek-cat"
    ? catSVG(spec)
    : `<span class="cat-move"><span class="cat-fx">${catSVG(spec)}</span></span><span class="cat-bubble" aria-hidden="true"></span>`;
});

/* ---------- Mocha (brown) and Maggie (white): simple cartoon dogs, no breed implied ---------- */
function partyHat(h1, h2) {
  const O = 'stroke="#4a3b47" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"', cone = "M53 48L70 8L87 48Z";
  return `<g transform="rotate(-8 70 48)"><g class="hat"><path d="${cone}" fill="${h1}"/><path d="M62.4 26H77.6L80.2 32H59.8Z" fill="${h2}"/><path d="M56.8 39H83.2L85.3 44H54.7Z" fill="${h2}"/><path d="${cone}" fill="none" ${O}/><ellipse cx="70" cy="48" rx="19" ry="4.5" fill="${h2}" ${O}/><circle cx="70" cy="8" r="5.5" fill="${h2}" ${O}/></g></g>`;
}

function dogSVG(d) {
  const O = 'stroke="#4a3b47" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"', f = d.fur, [h1, h2] = d.hat, cake = d.prop === "cake";
  const E = (cx, cy, rx, ry, fl, x = "") => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fl}" ${x}/>`;
  const td = cake ? "M42 132C16 128 8 106 16 94" : "M98 132C124 128 132 106 124 94";
  const tail = ["#4a3b47", f].map((c, i) => `<path class="tail${cake ? " tail-l" : ""}" d="${td}" fill="none" stroke="${c}" stroke-width="${i ? 9 : 14}" stroke-linecap="round"/>`).join("");
  const eye = (x) => `<circle cx="${x}" cy="74" r="4.5" fill="#2d2a3e"/><circle cx="${x + 1.5}" cy="72.5" r="1.5" fill="#fff"/>`;
  const brow = `<path d="${d.brow === "raised" ? "M49 65L62 66M78 63L91 58" : "M49 61L62 66M91 61L78 66"}" fill="none" stroke="#2d2a3e" stroke-width="3" stroke-linecap="round"/>`;
  // Mocha guards a birthday cake; Maggie holds a magnifying glass
  const prop = cake
    ? `<ellipse cx="140" cy="157" rx="26" ry="4.5" fill="#e8e4ee" stroke="#4a3b47" stroke-width="2"/><rect x="122" y="138" width="36" height="17" rx="4" fill="#ffc2da" ${O}/><rect x="128" y="122" width="24" height="16" rx="4" fill="#fff4c2" ${O}/><rect x="138" y="110" width="4" height="12" fill="#38bdf8"/><ellipse class="spark" cx="140" cy="106" rx="3" ry="5" fill="#ffb703"/>`
    : '<circle cx="-8" cy="116" r="17" fill="#d9f1ff" fill-opacity=".7" stroke="#4a3b47" stroke-width="4"/><path d="M4 128L30 150" stroke="#4a3b47" stroke-width="6" stroke-linecap="round"/>';
  return `<svg viewBox="${cake ? "0 0 175 160" : "-35 0 175 160"}" style="--d:-1.2s" aria-hidden="true" focusable="false">` +
    tail + E(70, 128, 32, 28, f, O) + E(70, 136, 16, 17, d.muzzle) + E(54, 150, 10, 8, f, O) + E(86, 150, 10, 8, f, O) + prop +
    E(70, 78, 34, 30, f, O) + E(38, 84, 11, 21, d.ear, O + ' transform="rotate(14 38 84)"') + E(102, 84, 11, 21, d.ear, O + ' transform="rotate(-14 102 84)"') +
    E(70, 92, 16, 12, d.muzzle) + E(70, 86, 6, 4.5, "#2d2a3e") + E(70, 100, 4.5, 5.5, "#ff8fb1") +
    '<path d="M70 90V94M70 94Q64 99 58 94M70 94Q76 99 82 94" fill="none" stroke="#2d2a3e" stroke-width="2" stroke-linecap="round"/>' +
    `<g class="eyes">${eye(56)}${eye(84)}</g>${brow}${partyHat(h1, h2)}` +
    `<path class="spark" d="M122 22l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="${h2}"/><path class="spark" d="M16 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="${h1}"/></svg>`;
}

const DOG_ART = {
  mocha: { fur: "#8b5a3c", ear: "#5e3b26", muzzle: "#d9b48f", hat: ["#10c9a0", "#ffd23f"], prop: "cake", brow: "serious" },
  maggie: { fur: "#ffffff", ear: "#efe9e4", muzzle: "#fffaf5", hat: ["#a66bff", "#ff5c9d"], prop: "glass", brow: "raised" },
};
$("sec-title").textContent = CONFIG.dogs.title;
$("approval").textContent = CONFIG.dogs.approval;
Object.entries(DOG_ART).forEach(([k, art]) => [$("dog-" + k), $("roam-" + k)].forEach((el) => {
  const d = CONFIG.dogs[k], card = el.closest(".dog-card");
  if (card) { card.querySelector(".dog-name").textContent = d.name; card.querySelector(".dog-role").textContent = d.role; }
  el.setAttribute("aria-label", `${d.name}, ${d.role}. Tap for a message.`);
  el.innerHTML = `<span class="cat-move"><span class="cat-fx">${dogSVG(art)}</span></span><span class="cat-bubble" aria-hidden="true"></span>`;
  // If her real photo exists, swap the drawing for the photo (in a circle, wearing the party hat)
  const probe = new Image();
  probe.onload = () => {
    el.querySelector(".cat-fx").innerHTML = `<span class="dog-photo"><img src="${d.photo}" alt=""><svg class="dog-hat" viewBox="44 0 52 54" aria-hidden="true">${partyHat(...art.hat)}</svg><i aria-hidden="true">${art.prop === "cake" ? "🎂" : "🔍"}</i></span>`;
  };
  probe.src = d.photo;
}));

/* ---------- Mocha and Maggie leave their spots, wander the page, then walk back to the security box ---------- */
const rand = (a, b) => a + Math.random() * (b - a);
const Roamers = ["mocha", "maggie"].map((k) => ({ k, home: $("dog-" + k), roam: $("roam-" + k), state: "home", x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, legs: 0, pause: 0, called: false, next: Infinity }));
let patrolHint = false;
function place(r, tilt = 0) {
  const x = Math.min(Math.max(r.x, 0), innerWidth - r.roam.offsetWidth);
  r.roam.style.transform = `translate(${x}px,${r.y}px) rotate(${tilt}deg)`;
}
function wander(r) {
  const w = r.roam.offsetWidth;
  r.tx = rand(8, Math.max(9, innerWidth - w - 8));
  r.ty = rand(70, Math.max(71, innerHeight - w * 0.9 - 8));
}
function leaveHome(r) {
  const b = r.home.getBoundingClientRect();
  r.roam.style.width = b.width + "px"; // same size as the one at home, so the swap is invisible
  Object.assign(r, { x: b.left, y: b.top, vx: 0, vy: 0, state: "out", called: false, pause: 0, legs: Math.round(rand(...CONFIG.dogRoam.legs)) });
  r.roam.classList.add("on");
  r.home.style.visibility = "hidden";
  r.home.closest(".dog-card").classList.add("away");
  wander(r);
  place(r);
  if (!patrolHint) { patrolHint = true; setTimeout(() => toast("tap the page to call the dogs 🐕"), 1500); }
}
function arrive(r) {
  r.state = "home";
  r.roam.classList.remove("on", "is-running");
  r.home.style.visibility = "";
  r.home.closest(".dog-card").classList.remove("away");
  r.next = performance.now() + rand(...CONFIG.dogRoam.homeSeconds) * 1000;
  if (Math.random() < 0.5) floatText("patrol");
}
let lastT = performance.now();
function roamLoop(now) {
  const dt = Math.min((now - lastT) / 1000, 0.05);
  lastT = now;
  Roamers.forEach((r) => {
    if (r.state === "home") { if (now > r.next && !$("main").hidden && !reduced()) leaveHome(r); return; }
    if (now < r.pause) { r.roam.classList.remove("is-running"); return; } // sitting for a moment
    r.roam.classList.add("is-running");
    if (r.state === "return") { const b = r.home.getBoundingClientRect(); r.tx = b.left; r.ty = b.top; }
    const dx = r.tx - r.x, dy = r.ty - r.y, d = Math.hypot(dx, dy) || 1;
    if (d < (r.state === "return" ? 8 : 14)) {
      if (r.state === "return") return arrive(r);
      if (r.called) { r.called = false; r.pause = now + 1800; hearts(r.x + r.roam.offsetWidth / 2, r.y); }
      if (--r.legs <= 0) r.state = "return"; else wander(r);
      return;
    }
    const sp = Math.min(Math.max(d * 0.8, CONFIG.dogRoam.speed), 700) * (r.state === "return" ? 1.3 : 1);
    r.vx += (dx / d * sp - r.vx) * Math.min(1, dt * 3);
    r.vy += (dy / d * sp - r.vy) * Math.min(1, dt * 3);
    r.x += r.vx * dt;
    r.y += r.vy * dt;
    place(r, Math.max(-8, Math.min(8, r.vx * 0.03)));
  });
  requestAnimationFrame(roamLoop);
}
requestAnimationFrame(roamLoop);
// Tap the page (not a button) and any walking dog runs over to that spot
document.addEventListener("pointerdown", (e) => {
  if (e.target.closest("button")) return;
  Roamers.forEach((r) => {
    if (r.state !== "out") return;
    Object.assign(r, { tx: e.clientX - r.roam.offsetWidth / 2, ty: e.clientY - r.roam.offsetHeight / 2, called: true, pause: 0, legs: Math.max(r.legs, 2) });
  });
});
Roamers.forEach((r) => {
  r.roam.addEventListener("click", () => { r.pause = performance.now() + 2500; }); // tap a walking dog: it stops to say hi
  r.home.addEventListener("click", () => { if (r.state === "home") r.next = Math.min(r.next, performance.now() + 1500); }); // tap a dog at its spot: it goes on patrol
});

/* ---------- Confetti (one canvas, no libraries) ---------- */
const Confetti = (() => {
  const cv = $("confetti"), ctx = cv.getContext("2d");
  let W, H, dpr, parts = [], raf = 0, last = 0, rain = false, boostUntil = 0, carry = 0;
  const MAX = innerWidth < 600 ? 350 : 700;
  const size = () => { dpr = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; };
  addEventListener("resize", size);
  size();

  const make = (x, y, vx, vy) => {
    const r = Math.random();
    parts.push({ x, y, vx, vy, s: 6 + Math.random() * 7, c: pick(CONFIG.colors.confetti), k: r < 0.6 ? 0 : r < 0.78 ? 1 : r < 0.9 ? 2 : 3,
      a: Math.random() * 6.3, va: (Math.random() - 0.5) * 9, f: Math.random() * 6.3, vf: 4 + Math.random() * 6,
      drag: 2.2 + Math.random() * 1.3, ph: Math.random() * 6.3, t: 0 });
  };
  const run = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };

  function burst(x, y, n = 90, o = {}) {
    if (reduced()) return;
    const { angle = -Math.PI / 2, spread = Math.PI * 2, power = 850 } = o;
    n = Math.min(n, MAX - parts.length);
    for (let i = 0; i < n; i++) {
      const a = angle + (Math.random() - 0.5) * spread, sp = power * (0.3 + Math.random() * 0.7);
      make(x, y, Math.cos(a) * sp, Math.sin(a) * sp);
    }
    run();
  }

  function draw(p) {
    const s = p.s;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.a);
    ctx.fillStyle = p.c;
    ctx.beginPath();
    if (p.k === 0) { ctx.scale(1, Math.cos(p.f)); ctx.rect(-s / 2, -s * 0.3, s, s * 0.6); }
    else if (p.k === 1) ctx.arc(0, 0, s * 0.4, 0, 6.3);
    else if (p.k === 2) for (let i = 0; i < 10; i++) { const r = i % 2 ? s * 0.25 : s * 0.6, a = i * Math.PI / 5; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
    else { ctx.moveTo(0, s * 0.35); ctx.bezierCurveTo(-s * 0.9, -s * 0.25, -s * 0.4, -s * 0.85, 0, -s * 0.35); ctx.bezierCurveTo(s * 0.4, -s * 0.85, s * 0.9, -s * 0.25, 0, s * 0.35); }
    ctx.fill();
    ctx.restore();
  }

  function tick(now) {
    raf = 0;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (rain && !reduced()) {
      carry += dt * 16 * CONFIG.confettiAmount * Math.min(Math.max(W / 800, 0.6), 1.6) * (now < boostUntil ? 4 : 1);
      while (carry >= 1 && parts.length < MAX) { carry--; make(Math.random() * W, -14, 0, 50 + Math.random() * 100); }
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.t += dt;
      p.vy += (520 - p.drag * p.vy) * dt;
      p.vx -= p.drag * p.vx * dt;
      p.x += (p.vx + Math.sin(p.t * 2 + p.ph) * 28) * dt;
      p.y += p.vy * dt;
      p.a += p.va * dt;
      p.f += p.vf * dt;
      if (p.y > H + 20 || p.x < -40 || p.x > W + 40 || p.t > 12) { parts.splice(i, 1); continue; }
      draw(p);
    }
    if (parts.length || (rain && !reduced())) raf = requestAnimationFrame(tick);
  }
  return { burst, startRain() { rain = true; run(); }, boost(sec) { boostUntil = performance.now() + sec * 1000; } };
})();

function cannons() {
  Confetti.burst(0, innerHeight, 120, { angle: -Math.PI * 0.3, spread: 0.7, power: 1300 });
  Confetti.burst(innerWidth, innerHeight, 120, { angle: -Math.PI * 0.7, spread: 0.7, power: 1300 });
}

/* ---------- Floating messages, hearts, cat reactions ---------- */
function toast(text) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = text;
  t.style.cssText = `left:${20 + Math.random() * 60}%;top:${22 + Math.random() * 30}%;--rot:${(Math.random() - 0.5) * 14}deg;--c:${pick(CONFIG.colors.confetti)}`;
  floatLayer.append(t);
  setTimeout(() => t.remove(), 2400);
}
const cycle = {};
function floatText(kind) {
  const list = CONFIG.floaters[kind];
  cycle[kind] = ((cycle[kind] ?? -1) + 1) % list.length;
  toast(list[cycle[kind]]);
}
function hearts(x, y) {
  if (reduced()) return;
  for (let i = 0; i < 6; i++) {
    const s = document.createElement("span");
    s.className = "heart";
    s.textContent = pick(["♥", "♥", "✦"]);
    s.style.cssText = `left:${x + (Math.random() - 0.5) * 50}px;top:${y}px;--dx:${(Math.random() - 0.5) * 80}px;color:${pick(CONFIG.colors.confetti)}`;
    floatLayer.append(s);
    setTimeout(() => s.remove(), 1300);
  }
}
function say(cat, text) {
  const b = cat.querySelector(".cat-bubble"), r = cat.getBoundingClientRect(), cx = r.left + r.width / 2;
  b.textContent = text;
  const w = b.offsetWidth, left = cx - w / 2, right = cx + w / 2;
  b.style.setProperty("--shift", (left < 8 ? 8 - left : right > innerWidth - 8 ? innerWidth - 8 - right : 0) + "px");
  b.classList.add("show");
  clearTimeout(b._t);
  b._t = setTimeout(() => b.classList.remove("show"), 2200);
  $("sr-status").textContent = text;
}
function reactCat(cat, lines = CONFIG.catSayings) {
  cat.classList.remove("is-reacting");
  void cat.offsetWidth;
  cat.classList.add("is-reacting");
  setTimeout(() => cat.classList.remove("is-reacting"), 750);
  const r = cat.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  Confetti.burst(x, y, 30, { power: 600 });
  hearts(x, y);
  say(cat, pick(lines));
}
["cat-a", "cat-b", "cat-c", "cat-d"].forEach((id) => $(id).addEventListener("click", () => reactCat($(id))));
["mocha", "maggie"].forEach((k) => ["dog-", "roam-"].forEach((p) => $(p + k).addEventListener("click", () => reactCat($(p + k), CONFIG.dogs[k].sayings))));

let danceTimer, chaosTimer;
function dance(ms) {
  document.body.classList.add("is-dancing");
  clearTimeout(danceTimer);
  danceTimer = setTimeout(() => document.body.classList.remove("is-dancing"), ms);
}

/* ---------- Music ---------- */
const audio = new Audio();
let musicBad = false;
audio.preload = "auto";
audio.loop = CONFIG.music.loop;
function syncMusic() {
  const t = $("music-toggle"), off = audio.paused || musicBad;
  t.setAttribute("aria-pressed", String(!off));
  t.classList.toggle("is-off", off);
  t.classList.toggle("is-bad", musicBad);
  t.title = musicBad ? "Music file not found" : off ? "Play music" : "Pause music";
}
audio.addEventListener("error", () => { musicBad = true; console.warn("Music not found or unplayable:", CONFIG.music.file); syncMusic(); });
audio.addEventListener("play", syncMusic);
audio.addEventListener("pause", syncMusic);
audio.src = CONFIG.music.file;
function playMusic() {
  audio.volume = 0;
  const p = audio.play();
  if (p) p.catch(syncMusic);
  let v = 0; // gentle fade-in (phones that lock volume simply ignore this)
  const id = setInterval(() => { v = Math.min(CONFIG.music.volume, v + 0.04); audio.volume = v; if (v >= CONFIG.music.volume) clearInterval(id); }, 80);
}
$("music-toggle").addEventListener("click", () => {
  if (musicBad) return toast("music file not found 🥲");
  if (audio.paused) { audio.volume = CONFIG.music.volume; audio.play().catch(syncMusic); } else audio.pause();
});
syncMusic();

/* ---------- Decorations: bunting + a few twinkles ---------- */
function buildBunting() {
  const b = $("bunting"), C = CONFIG.colors.confetti;
  b.textContent = "";
  for (let i = 0; i < Math.ceil(innerWidth / 46); i++) {
    const f = document.createElement("span");
    f.className = "flag";
    f.style.cssText = `--i:${i};--c:${C[i % C.length]}`;
    b.append(f);
  }
}
buildBunting();
addEventListener("resize", buildBunting);
[["✦", 8, 18], ["♥", 90, 14], ["★", 14, 46], ["✦", 86, 40], ["♥", 6, 72], ["★", 92, 68], ["✦", 24, 88], ["♥", 78, 90]].forEach(([g, x, y], i) => {
  const s = document.createElement("span");
  s.textContent = g;
  s.style.cssText = `left:${x}%;top:${y}%;font-size:${14 + (i % 3) * 6}px;color:${CONFIG.colors.confetti[i % CONFIG.colors.confetti.length]};animation-delay:${-i * 0.7}s`;
  $("decor").append(s);
});

/* ---------- Buttons ---------- */
$("open-btn").addEventListener("click", (e) => {
  const btn = e.currentTarget, r = btn.getBoundingClientRect();
  btn.disabled = true;
  playMusic(); // must run inside the click, or browsers block audio
  $("main").hidden = false;
  scrollTo(0, 0);
  $("welcome").classList.add("leaving");
  Confetti.burst(r.left + r.width / 2, r.top + r.height / 2, 160, { power: 1000 });
  cannons();
  Confetti.startRain();
  dance(3000);
  setTimeout(() => floatText("open"), 400);
  setTimeout(() => floatText("open"), 1700);
  setTimeout(() => { $("welcome").hidden = true; $("greeting").focus({ preventScroll: true }); }, reduced() ? 0 : 450);
  setTimeout(() => say($("cat-d"), "poke me!"), 3500);
  Roamers.forEach((r, i) => { r.next = performance.now() + 7000 + i * 5000; });
});

/* ---------- Don't spam MORE CHAOS: Mocha and Maggie get angry ---------- */
const chaosBtn = $("chaos-btn"), chaosLabel = chaosBtn.textContent;
const dogIds = () => Roamers.map((r) => (r.state === "home" ? r.home : r.roam)); // the visible Mocha and Maggie
let chaosTaps = [], warnTimer;
function warn(text, ms) {
  const w = $("chaos-warning");
  w.textContent = text;
  w.hidden = false;
  clearTimeout(warnTimer);
  warnTimer = setTimeout(() => { w.hidden = true; }, ms);
}
function dogsAngry() {
  const A = CONFIG.dogAnger;
  chaosBtn.disabled = true;
  chaosBtn.textContent = "DOGS ARE ANGRY 🐕💢";
  document.body.classList.remove("is-chaos");
  document.body.classList.add("dogs-angry");
  warn(A.angry, A.cooldownSeconds * 1000);
  Roamers.forEach((r) => { if (r.state === "out") { r.state = "return"; r.pause = 0; } r.next = performance.now() + (A.cooldownSeconds + 4) * 1000; });
  dogIds().forEach((el) => say(el, pick(A.growls)));
  setTimeout(() => {
    chaosTaps = [];
    chaosBtn.disabled = false;
    chaosBtn.textContent = chaosLabel;
    document.body.classList.remove("dogs-angry");
    toast("the dogs have calmed down 🐕");
  }, A.cooldownSeconds * 1000);
}

$("chaos-btn").addEventListener("click", (e) => {
  const A = CONFIG.dogAnger, now = Date.now();
  chaosTaps = chaosTaps.filter((t) => now - t < A.windowSeconds * 1000);
  chaosTaps.push(now);
  if (chaosTaps.length >= A.angryAt) return dogsAngry();
  if (chaosTaps.length === A.scoldAt) { warn(A.scold, 5000); dogIds().forEach((el) => say(el, pick(A.growls))); }
  else if (chaosTaps.length === A.warnAt) warn(A.warn, 4000);
  const r = e.currentTarget.getBoundingClientRect();
  Confetti.burst(r.left + r.width / 2, r.top + r.height / 2, 140, { power: 1000 });
  cannons();
  [150, 300, 450, 600].forEach((ms) => setTimeout(() => Confetti.burst(Math.random() * innerWidth, Math.random() * innerHeight * 0.6, 80, { power: 800 }), ms));
  Confetti.boost(CONFIG.chaosSeconds);
  document.body.classList.add("is-chaos");
  clearTimeout(chaosTimer);
  chaosTimer = setTimeout(() => document.body.classList.remove("is-chaos"), CONFIG.chaosSeconds * 1000);
  floatText("chaos");
});

$("last-btn").addEventListener("click", (e) => {
  e.currentTarget.hidden = true;
  const card = $("message-card");
  card.hidden = false;
  $("approval").hidden = false;
  Confetti.burst(innerWidth / 2, innerHeight * 0.6, 90, { power: 700 });
  floatText("last");
  dance(1500);
  card.scrollIntoView({ behavior: "instant", block: "center" });
  $("sr-status").textContent = "Your birthday message is here.";
});
