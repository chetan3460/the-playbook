
const dialog = document.getElementById("dialog");

const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

const titleEl = document.getElementById("dialog-title");
const subtitleEl = document.getElementById("dialog-subtitle");
const contentEl = document.querySelector(".dialog-body .dialog-content");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.querySelector(".close");
const zoomOverlay = document.getElementById("imageZoomOverlay");
const zoomImg = document.getElementById("imageZoomTarget");
const zoomCloseBtn = document.querySelector(".image-zoom-close");

function openImageZoom(src, alt = "") {
  zoomImg.src = src;
  zoomImg.alt = alt;
  zoomOverlay.classList.add("open");
}

function closeImageZoom() {
  zoomOverlay.classList.remove("open");
  zoomImg.src = "";
}

/* Events */
zoomCloseBtn.onclick = closeImageZoom;
zoomOverlay.onclick = e => {
  if (e.target === zoomOverlay) closeImageZoom();
};

// Diagrams
//semcdr
function createSEMCDRFlow() {
  const container = document.createElement("div");
  container.className =
    "semcdr-flow d-flex flex-wrap gap-2 align-items-center justify-content-center py-2 px-1 bg-white border border-dark rounded mb-4";

  const items = [
    { text: "SOURCE", class: "text-primary" },
    { arrow: true },
    { text: "ENCODER", class: "text-secondary" },
    { arrow: true },
    { text: "MESSAGE", class: "text-danger border border-danger rounded-pill px-2" },
    { arrow: true },
    { text: "CHANNEL", class: "text-secondary" },
    { arrow: true },
    { text: "RECEIVER", class: "text-success" }
  ];

  items.forEach(item => {
    if (item.arrow) {
      const arrow = document.createElement("span");
      arrow.innerHTML = "➜";
      arrow.className = "mx-1 text-muted";
      container.appendChild(arrow);
    } else {
      const box = document.createElement("div");
      box.textContent = item.text;
      box.className = item.class;
      container.appendChild(box);
    }
  });

  return container;
}

//fcbgrid
function createFCBGrid() {
  const grid = document.createElement("div");
  grid.className = "fcb-grid mb-3 border border-dark p-2";
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "1fr 1fr";
  grid.style.width = "100%";

  const cells = [
    {
      title: "1. THINK / HIGH",
      desc: "Informative\n(Car, Insurance)"
    },
    {
      title: "2. FEEL / HIGH",
      desc: "Affective\n(Jewelry, Perfume)"
    },
    {
      title: "3. THINK / LOW",
      desc: "Habitual\n(Detergent, Gas)"
    },
    {
      title: "4. FEEL / LOW",
      desc: "Satisfaction\n(Candy, Ice Cream)"
    }
  ];

  cells.forEach((cell, index) => {
    const div = document.createElement("div");
    div.className = `fcb-cell ${cell.color}`;

    const title = document.createElement("div");
    title.className = "fcb-title";
    title.textContent = cell.title;

    const desc = document.createElement("div");
    desc.className = "fcb-desc";
    desc.innerHTML = cell.desc.replace(/\n/g, "<br>");

    div.appendChild(title);
    div.appendChild(desc);

    grid.appendChild(div);
  });

  return grid;
}

//ansoffgrid
function createAnsoffGrid() {
  const grid = document.createElement("div");
  grid.className = "ansoff-grid mb-3";
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "1fr 1fr";
  grid.style.width = "100%";

  const cells = [
    {
      title: "PENETRATION",
      desc: "Old Product / Old Market"
    },
    {
      title: "PRODUCT DEV",
      desc: "New Product / Old Market"
    },
    {
      title: "MARKET DEV",
      desc: "Old Product / New Market"
    },
    {
      title: "DIVERSIFY",
      desc: "New Product / New Market"
    }
  ];

  cells.forEach(cell => {
    const div = document.createElement("div");
    div.className = `ansoff-cell ${cell.color}`;

    const title = document.createElement("div");
    title.className = "ansoff-title";
    title.textContent = cell.title;

    const desc = document.createElement("div");
    desc.className = "ansoff-desc";
    desc.textContent = cell.desc;

    div.appendChild(title);
    div.appendChild(desc);
    grid.appendChild(div);
  });

  return grid;
}

//heirarchy funnel
function createHierarchyFunnel() {
  const container = document.createElement("div");
  container.className = "hierarchy-funnel mb-3";

  const stages = [
    "AWARENESS",
    "KNOWLEDGE",
    "LIKING",
    "PREFERENCE",
    "CONVICTION",
    "PURCHASE"
  ];

  stages.forEach((stage, index) => {
    const row = document.createElement("div");
    row.className = "funnel-stage";

    if (stage === "PURCHASE") {
      row.classList.add("final");
    }

    row.textContent = stage;
    container.appendChild(row);
  });

  return container;
}

//STP MODEL
function createStpModel() {
  const container = document.createElement("div");
  container.className = "stp-model mb-3";

  const stages = [
    { label: "Geographic", desc: "Country, City, Urban/Rural" },
    { label: "Demographic", desc: "Age, Gender, Income, Education" },
    { label: "Psychographic", desc: "Lifestyle, Values, Personality" },
    { label: "Behavioral", desc: "Usage rate, Loyalty, Readiness" }
  ];

  stages.forEach(stage => {
    const row = document.createElement("div");
    row.className = "stp-stage";

    row.innerHTML = `
      <span class="stp-title">${stage.label}:</span>
      <span class="stp-desc">${stage.desc}</span>
    `;

    container.appendChild(row);
  });

  return container;
}

function createDropdownItem({ label, desc, image, link, cta }) {
  const wrapper = document.createElement("div");
  wrapper.className = "dropdown-item";

  const header = document.createElement("button");
  header.className = "dropdown-header";
  header.innerHTML = `
    <span class="dropdown-title">${label}</span>
    <span class="dropdown-icon">+</span>
  `;

  const body = document.createElement("div");
  body.className = "dropdown-body";

  if (desc) {
    const p = document.createElement("p");
    p.className = "dropdown-desc";
    p.textContent = desc;
    body.appendChild(p);
  }

  /* IMAGE */
  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.className = "dropdown-image";
    img.addEventListener("click", () => {
      openImageZoom(image, label);
    });
    body.appendChild(img);
  }

  /* LINK (YouTube or any URL) */
  if (link) {
    const watchBtn = document.createElement("button");
    watchBtn.className = "watch-now-btn";
    watchBtn.textContent = cta || "WATCH NOW";

    watchBtn.addEventListener("click", e => {
      e.stopPropagation();

      // YOUTUBE
      if (link.includes("youtube.com") || link.includes("youtu.be")) {
        body.innerHTML = "";

        let videoId = "";

        if (link.includes("youtu.be")) {
          videoId = link.split("youtu.be/")[1];
        } else {
          videoId = link.split("v=")[1]?.split("&")[0];
        }

        if (!videoId) return;

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.width = "100%";
        iframe.height = "315";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        body.appendChild(iframe);
      }
      // NON-YOUTUBE LINK
      else {
        window.open(link, "_blank", "noopener");
      }
    });

    body.appendChild(watchBtn);
  }

  header.addEventListener("click", () => {
    const isOpen = wrapper.classList.contains("open");

    document
      .querySelectorAll(".dropdown-item.open")
      .forEach(el => el.classList.remove("open"));

    if (!isOpen) wrapper.classList.add("open");
  });

  wrapper.appendChild(header);
  wrapper.appendChild(body);

  return wrapper;
}

/* =====================
   SVG SETUP
===================== */

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("id", "flow-svg");
Object.assign(svg.style, {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none"
});

document.querySelector(".flow-chart").appendChild(svg);

/* =====================
   DATA
===================== */

const steps = [
  {
    id: "client",
    title: "CLIENT BRIEF",
    subtitle: "KICKOFF",
    content: [
      { type: "text", value: "The starting point. The raw request and requirements from the client. Who is speaking to whom?" }
    ]
  },
  {
    id: "semcdr",
    title: "SEMCDR Model",
    content: [
      { type: "semcdr-diagram" },
      { type: "text", value: "This model will help you get an overview of the entire communication process. For an agency like ours, this is what it would look like:" },
      { type: "text", value: "Source (S) - A client who wants to communicate something to their audience. <br><span class='eg'>E.g.: Tata Capital wants to tell its customers that they have a new offer on home loans.</span>" },
      { type: "text", value: "Encoder (E) - We would be the encoders who translate that message into a comprehensible and interesting one. <br><span class='eg'>E.g.: We make a creative emailer for them.<span>" },
      { type: "text", value: "Message (M) - The actual copy and design that goes into the emailer. <br><span class='eg'>E.g.: Our New ROI on Home Loans is 7.66%.</span>" },
      { type: "text", value: "Channel (C) - The medium of the message.<br><span class='eg'>E.g.: Email</span>" },
      { type: "text", value: "Decoder (D): How the person will decode the message.<br><span class='eg'>E.g.: Reading the email on their mobile phones or desktops.</span>" },
      { type: "text", value: "Understanding every component of this process for every brief helps us create the right message for the right audience deployed through the right channel." }
    ]
  },
  {
    id: "brand",
    title: "BRAND / PRODUCT",
    content: [
      { type: "text", value: "So, there is a product. A chocolate bar with raisins, UV blocking eyeglasses, aerodynamic bicycles, or baby lotions. It could be anything. A product that you have used before, you've seen other people use it, or something you're seeing for the very first time. You may have some preconceived notions about these products. And that is fine. One may hate raisins in chocolates or find the mechanics of a bicycle absolutely delightful. No matter what it is, one thing you cannot be is disinterested. If you're going to sell a product through writing or design, you ought to approach it with interest and curiosity." },
      { type: "text", value: "What this means is that you ask a lot of questions." },
      { type: "text", value: "How is the product made?" },
      { type: "text", value: "Where is it made?" },
      { type: "text", value: "What materials are used in making this product?" },
      { type: "text", value: "What consumer problem is it trying to solve?" },
      { type: "text", value: "Does it have many competitors? Who are they? How is their product different from ours?" },
      { type: "text", value: "If there was ever a rabbit hole that you should go down, this is it. Know your product like it was your childhood best friend. Spend time with it. Use it and experience it for yourself." },
    ]
  },
  {
    id: "fcb",
    title: "FCB GRID",
    content: [
      // { type: "fcb-grid" },
      { type: "text", value: "The FCB Grid maps products on two axes: <b>Thinking vs Feeling</b> and <b>High vs Low Involvement</b>. This helps determine the right advertising approach—whether to <b>inform</b>, <b>evoke emotion</b>, or <b>drive action</b>." },
      { type: "text", value: "<b>Quadrant 1: High Involvement + Thinking</b>" },
      { type: "text", value: "Products like life insurance, utility cars, and commercial real estate require research and careful evaluation. Consumers follow a learn–feel–do path, so advertising should focus on detailed features and information." },
      { type: "text", value: "<b>Quadrant 2: High Involvement + Feeling</b>" },
      { type: "text", value: "Emotion-driven, high-value products such as luxury handbags, jewellery, perfumes, and art are tied to self-esteem. Advertising should build a strong emotional connection." },
      { type: "text", value: "<b>Quadrant 3: Low Involvement + Thinking</b>" },
      { type: "text", value: "Everyday products like toothpaste, detergents, and stationery involve quick, habitual decisions, though features still matter. Trials and demos help drive preference." },
      { type: "text", value: "<b>Quadrant 4: Low Involvement + Feeling</b>" },
      { type: "text", value: "mpulse products like ice cream, snacks, and inexpensive accessories are bought first and evaluated later. Advertising should stress low price and instant" },
      { type: "image", src: "images/fcb-grid.png", alt: "FCB Grid" }

    ]
  },
  {
    id: "matrix",
    title: "ANSOFF MATRIX",
    content: [
      // { type: "ansoff-grid" },
      { type: "image", src: "images/ansoff.png", alt: "Ansoff Matrix" },
      { type: "text", value: "This matrix is usually used for strategists and product development teams to create new products. But it can also be used to understand a product and where it stands in the market." },
      { type: "text", value: "On the Y axis we have Newness of markets<br>On the X axis, we have Newness of Products" },
      { type: "text", value: "The grid gives us four quadrants which either tell us if our product is an established product (with a lot of competition) in a saturated market or is it an innovative product in a market that is yet to be formally established." }
    ]
  },
  {
    id: "audience",
    title: "TARGET AUDIENCE",
    content: [
      { type: "text", value: "You may have the best story in the world. Gripping plot, relatable characters, amazing dialogues, the whole shebang. But if you’re going to narrate this mind-blowing story to a Gujarati person in Tamil, it would be nothing more than pure gibberish. While no advertiser will be so far off from his/her target audience, our aim should be to know our target audience as closely as possible." },
      { type: "text", value: "We should know their habits, their likes and dislikes, their interests, their buying patterns, the places they hang out at, the kind of movies they like, how they interact with our product and more." }
    ]
  },
  {
    id: "hierarchy",
    title: "HIERARCHY OF EFFECTS",
    content: [
      { type: "hierarchy-funnel" },
      { type: "text", value: "This particular model can be used to map your consumer’s awareness of your product. Knowing this helps you make the right assumptions while drafting your message." }
    ]
  },
  {
    id: "stp",
    title: "STP MODEL",
    content: [
      { type: "text", value: "Target Audience is broad term. For Bisleri, anyone who is thirsty is technically their target audience. But they cannot create a campaign based on this understanding. Narrowing down your target audience, hence, becomes crucial." },
      { type: "text", value: "With the STP model you can break down your target audience into smaller segments and create different messages for those particular segments." },
      { type: "text", value: "You can segment your audience based on the following factors:" },
      { type: "text", value: "Psychographic Attributes (lifestyle preferences, hobbies, beliefs, interests)" },
      { type: "text", value: "Geographic Attributes (country, state, city, region, weather)" },
      { type: "text", value: "Behavioural attributes (online habits, preferred communication channels, brand loyalty)" },
      { type: "text", value: "Demographics (age, gender, economic status, education, profession)" },
      { type: "stp-model" }
    ]
  },
  {
    id: "channel",
    title: "CHANNEL",
    content: [
      { type: "text", value: "It’s important to know from the get-go where your message is going to be displayed. Because your medium has a great influence on your message and how it will be executed. Generally, we can divide the media into 3 categories:" },
      { type: "text", value: "1. Print  <br><span class='eg'>Newspapers</span>   <br><span class='eg'>Magazines</span>   <br><span class='eg'>Brochures / Flyers / Pamphlets</span> <br><span class='eg'>Packaging (printed labels/boxes)</span>  <br><span class='eg'>In-store printed materials (danglers, tent cards, wobblers, shelf strips)</span>" },
      { type: "text", value: "2. Digital  <br><span class='eg'>Social media ads (Instagram, Facebook, YouTube, LinkedIn)</span>   <br><span class='eg'>Search ads (Google/Bing)</span>   <br><span class='eg'>Display/banner ads (websites & apps)</span> <br><span class='eg'>Video ads (YouTube, OTT platforms)</span>  <br><span class='eg'>Email marketing</span>  <br><span class='eg'>SMS/WhatsApp marketing</span> <br><span class='eg'>Mobile in-app ads</span> <br><span class='eg'>Push notifications</span> <br><span class='eg'>Websites & content marketing (SEO blogs)</span> <br><span class='eg'>Podcasts & music streaming ads</span> <br><span class='eg'>Influencer marketing</span>" },
      { type: "text", value: "3. Outdoors (OOH) <br><span class='eg'>Billboards (static & digital)</span> <br><span class='eg'>Bus shelters</span> <br><span class='eg'>Metro/train panels</span> <br><span class='eg'>Airport branding</span>  <br><span class='eg'>Mall branding & kiosks</span>  <br><span class='eg'>Hoardings near highways</span> <br><span class='eg'>Mobile in-app ads</span> <br><span class='eg'>Push notifications</span> <br><span class='eg'>Websites & content marketing (SEO blogs)</span> <br><span class='eg'>Auto-rickshaw & taxi ads</span> <br><span class='eg'>Bus wraps & metro train wraps</span> <br><span class='eg'>Roadshows, on-ground activations</span> <br><span class='eg'>Event branding (expos, festivals, concerts)</span>" }
    ]
  },
  {
    id: "message",
    title: "MESSAGE",
    content: [
      { type: "text", value: "The message that your client wants to convey to their existing and prospective customers." }
    ]
  },
  {
    id: "insights",
    title: "INSIGHTS",
    // subtitle: "THE SPARK",
    content: [
      { type: "text", value: "Insights are human truths. You find them by observing people, how they use a product, and making the unobvious things obvious. Insights can be small or big and will usually make people say or think: I relate to this." },
      { type: "text", value: "E.g.: This Nike campaign had a core truth to it that every runner will identify with: Even when you love running, you hate it a little bit." },
      { type: "text", value: "You may not find an insight for every creative that you make. But when your campaign is rooted in a strong insight, your messaging will be stronger and more resonant." },
      { type: "image", src: "images/unnamed.png", alt: "insights" }
    ]
  },
  {
    id: "route",
    title: "ROUTE",
    content: [
      { type: "text", value: "" }
    ]
  },
  {
    id: "rational",
    title: "RATIONAL",
    content: [
      { type: "text", value: "Appealing to the head. Used when people rationally choose between outcomes associated with values." }
    ]
  },
  {
    id: "features",
    title: "FEATURES",
    content: [
      { type: "text", value: "<span class='subtitle' style='font-size: 15px;'>Focusing on specific attributes.</span>" },
      { type: "image", src: "images/features.jpeg", alt: "Product features illustration" }
    ]
  },
  {
    id: "social-proof",
    title: "SOCIAL PROOF",
    content: [
      { type: "text", value: "<span class='subtitle' style='font-size: 15px;'>Reviews and popularity.</span>" },
      { type: "image", src: "images/social-proof.jpg", alt: "Product features illustration" }
    ]
  },
  {
    id: "value",
    title: "VALUE",
    content: [
      { type: "text", value: "<span class='subtitle' style='font-size: 15px;'>Cost vs Benefit.</span>" },
      { type: "image", src: "images/value.jpg", alt: "Product features illustration" }
    ]
  },
  {
    id: "authority",
    title: "AUTHORITY",
    content: [
      { type: "text", value: "<span class='subtitle' style='font-size: 15px;'>Expert endorsements.</span>" },
      { type: "image", src: "images/authority.jpg", alt: "Product features illustration" }
    ]
  },
  {
    id: "hybrid",
    title: "HYBRID",
    content: [
      { type: "text", value: "Combining rational arguments with emotional hooks." }
    ]
  },
  {
    id: "emotional",
    title: "EMOTIONAL",
    content: [
      { type: "text", value: "Connects with consumers by evoking specific feelings and desires." }
    ]
  },
  {
    id: "feelings",
    title: "FEELINGS",
    content: [
      { type: "dropdown", label: "FEAR / ANXIETY", desc: "Using fear to motivate action.", image: "images/FearAnxiety.jpg" },
      { type: "dropdown", label: "NOSTALGIA", desc: "Longing for the past.", cta: "WATCH NOW", link: "https://www.youtube.com/watch?v=iVIJpwW1UcQ" },
      { type: "dropdown", label: "HUMOUR", desc: "Making them laugh to lower defenses.", image: "images/humour.jpg" },
      { type: "dropdown", label: "JOY", desc: "Pure happiness associated with the product.", image: "images/joy.jpg" },
      { type: "dropdown", label: "AMUSEMENT/SURPRISE", desc: "The element of shock or delight.", image: "images/" },
      { type: "dropdown", label: "ENVY", desc: "Wanting what others have.", image: "images/envy.jpg" },
      { type: "dropdown", label: "CURIOSITY", desc: "Driving interest through the unknown.", image: "images/curiosity.jpg" }
    ]
  },
  {
    id: "desires",
    title: "DESIRES",
    content: [
      { type: "dropdown", label: "STATUS", desc: "The need for esteem and recognition.", image: "images/status.jpeg" },
      { type: "dropdown", label: "LEGACY", desc: "Leaving a mark.", image: "images/legacy.jpg" },
      { type: "dropdown", label: "MASCULINITY", desc: "Appealing to traditional masculine ideals.", image: "images/masculinity.jpg" },
      { type: "dropdown", label: "SEX", desc: "Primal attraction.", image: "images/primalAttraction.jpg" },
      { type: "dropdown", label: "FOMO", desc: "Fear Of Missing Out.", image: "images/FOMO.jpg" },
      { type: "dropdown", label: "POWER", desc: "Control and influence.", image: "images/power.jpg" },
      { type: "dropdown", label: "SUCCESS", desc: "Achievement.", image: "images/success.jpg" }
    ]
  },
  {
    id: "execution",
    title: "EXECUTION",
    content: [
      { type: "text", value: "The final output phase." }
    ]
  },
  {
    id: "copy",
    title: "COPY",
    content: [
      { type: "dropdown", label: "ALLITERATION", desc: "Repetition of initial consonant sounds.", image: "images/alliteration.jpg" },
      { type: "dropdown", label: "PUN", desc: "A joke exploiting different possible meanings.", image: "images/pun.jpg" },
      { type: "dropdown", label: "RHYMES", desc: "Correspondence of sound between words.", image: "images/rhymes.jpg" },
      { type: "dropdown", label: "ONOMATOPOEIA", desc: "Words that mimic a sound.", image: "images/cocacola.jpg" },
      { type: "dropdown", label: "DOUBLE ENTENDRE", desc: "A word/phrase open to two interpretations.", image: "images/doubleEntendre.jpg" },
      { type: "dropdown", label: "EXAGGERATION", desc: "Dramatically overstating a benefit.", image: "images/exaggeration.jpg" },
      { type: "dropdown", label: "METONYMY", desc: "Using a part to represent the whole.", image: "images/metonymy.jpg" },
      { type: "dropdown", label: "QUESTION", desc: "Engages the reader directly.", image: "images/question.jpg" },
      { type: "dropdown", label: "QUOTES", desc: "Leveraging testimonials or expert opinion.", image: "images/quotes.jpg" },
      { type: "dropdown", label: "NUMBERS/STATS", desc: "Using specific data to provide concrete evidence.", image: "images/numberStats.jpg" }
    ]
  },
  {
    id: "visual-design",
    title: "VISUAL DESIGN",
    content: [
      { type: "dropdown", label: "ASSOCIATION", desc: "Connecting product with a lifestyle.", image: "images/association.jpg" },
      { type: "dropdown", label: "JUXTAPOSITION", desc: "Placing contrasting things together.", image: "images/shark.jpg" },
      { type: "dropdown", label: "SYMBOLISM", desc: "Using symbols to represent ideas.", image: "images/symbolism.jpg" },
      { type: "dropdown", label: "REFERENTIAL", desc: "Referencing pop culture.", image: "images/referential.jpg" },
      { type: "dropdown", label: "EXAGGERATION", desc: "Visual hyperbole.", image: "images/exaggeration-2.jpg" },
      { type: "dropdown", label: "TYPOGRAPHIC", desc: "Using text as a visual element.", image: "images/typography.jpg" },
      { type: "dropdown", label: "DEMONSTRATION", desc: "Showing the product in use.", image: "images/dove.jpg" },
      { type: "dropdown", label: "COLOUR", desc: "Using color psychology." },
      { type: "dropdown", label: "ANTHROPOMORPHISM", desc: "Giving human traits to objects.", image: "images/enthropomorphism.jpg" },
      { type: "dropdown", label: "METONYMY", desc: "Visual metaphor.", image: "images/metonymy-2.jpg" }
    ]
  },
  {
    id: "creative",
    title: "THE FINAL CREATIVE",
    content: [
      { type: "text", value: "The complete campaign ready for launch." }
    ]
  },
];

let currentIndex = 0;
let dialogOpen = false;

/* =====================
   DIALOG LOGIC
===================== */

function openDialog(index) {
  currentIndex = index;
  updateDialog();
  highlightNode(index);

  dialog.classList.add("open");
  overlay.classList.add("show");
  document.querySelector(".playbook").classList.add("dialog-open");
  dialogOpen = true;

  // Redraw connections during transition
  const interval = setInterval(renderConnections, 16);
  setTimeout(() => clearInterval(interval), 400);
}

function closeDialog() {
  dialog.classList.remove("open");
  overlay.classList.remove("show");
  document.querySelector(".playbook").classList.remove("dialog-open");
  dialogOpen = false;

  document.querySelectorAll(".node").forEach(n =>
    n.classList.remove("selected")
  );

  // Redraw connections during transition
  const interval = setInterval(renderConnections, 16);
  setTimeout(() => clearInterval(interval), 400);
}

function updateDialog() {
  const step = steps[currentIndex];

  titleEl.textContent = step.title;
  subtitleEl.textContent = step.subtitle || "";
  contentEl.innerHTML = "";

  step.content.forEach(item => {
    if (item.type === "text") {
      const p = document.createElement("p");
      p.innerHTML = item.value;
      contentEl.appendChild(p);
    }

    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      img.className = "dialog-image";

      img.style.width = "100%";
      img.style.margin = "12px 0";

      img.addEventListener("click", () => {
        openImageZoom(item.src, item.alt);
      });

      contentEl.appendChild(img);
    }

    if (item.type === "semcdr-diagram") {
      contentEl.appendChild(createSEMCDRFlow());
    }

    if (item.type === "fcb-grid") {
      contentEl.appendChild(createFCBGrid());
    }

    if (item.type === "ansoff-grid") {
      contentEl.appendChild(createAnsoffGrid());
    }

    if (item.type === "hierarchy-funnel") {
      contentEl.appendChild(createHierarchyFunnel());
    }

    if (item.type === "stp-model") {
      contentEl.appendChild(createStpModel());
    }

    if (item.type === "dropdown") {
      contentEl.appendChild(createDropdownItem(item));
    }

  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === steps.length - 1;
}

/* =====================
   NODE HIGHLIGHT
===================== */

function highlightNode(index) {
  document.querySelectorAll(".node, #route").forEach(n =>
    n.classList.remove("selected")
  );

  const activeNode = document.getElementById(steps[index].id);
  if (!activeNode) return;

  activeNode.classList.add("selected");
  if (window.innerHeight <= 1500) {
    setTimeout(() => {
      activeNode.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 200);
  }
}

/* =====================
   EVENTS
===================== */

steps.forEach((step, index) => {
  const node = document.getElementById(step.id);
  if (!node) return;

  node.addEventListener("click", e => {
    e.stopPropagation();
    openDialog(index);
  });
});

prevBtn.onclick = e => {
  e.stopPropagation();
  if (currentIndex > 0) {
    currentIndex--;
    updateDialog();
    highlightNode(currentIndex);
  }
};

nextBtn.onclick = e => {
  e.stopPropagation();
  if (currentIndex < steps.length - 1) {
    currentIndex++;
    updateDialog();
    highlightNode(currentIndex);
  }
};

dialog.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeBtn.addEventListener("click", e => {
  e.stopPropagation();
  closeDialog();
});

overlay.addEventListener("click", (e) => {
  // Only close if click is directly on overlay
  if (e.target === overlay) {
    closeDialog();
  }
});

/* =====================
   SVG CONNECTORS
===================== */

const connections = [
  ["client", "semcdr", "#700029"],

  ["semcdr", "brand", "#242424ff"],
  ["semcdr", "audience", "#242424ff"],
  ["semcdr", "channel", "#242424ff"],
  ["semcdr", "message", "#242424ff"],

  ["brand", "fcb", "#242424ff"],
  ["brand", "matrix", "#242424ff"],
  ["matrix", "insights", "#242424ff"],
  ["fcb", "insights", "#242424ff"],

  ["audience", "hierarchy", "#242424ff"],
  ["audience", "stp", "#242424ff"],
  ["stp", "insights", "#242424ff"],
  ["hierarchy", "insights", "#242424ff"],

  ["channel", "insights", "#242424ff"],
  ["message", "insights", "#242424ff"],

  ["insights", "route", "#242424ff"],

  ["route", "rational", "#242424ff"],
  ["route", "hybrid", "#242424ff"],
  ["route", "emotional", "#242424ff"],

  ["rational", "features", "#242424ff"],
  ["rational", "value", "#242424ff"],
  ["value", "authority", "#242424ff"],
  ["features", "social-proof", "#242424ff"],
  ["social-proof", "execution", "#242424ff"],
  ["authority", "execution", "#242424ff"],

  ["hybrid", "execution", "#242424ff"],

  ["emotional", "feelings", "#242424ff"],
  ["emotional", "desires", "#242424ff"],
  ["desires", "execution", "#242424ff"],
  ["feelings", "execution", "#242424ff"],

  ["execution", "copy", "#242424ff"],
  ["execution", "visual-design", "#242424ff"],
  ["copy", "creative", "#242424ff"],
  ["visual-design", "creative", "#242424ff"],
];

const mobileConnections = [
  ["client", "semcdr", "#700029"],

  ["semcdr", "brand", "#242424ff"],
  ["brand", "fcb", "#242424ff"],
  ["brand", "matrix", "#242424ff"],
  ["fcb", "audience", "#242424ff"],
  ["matrix", "audience", "#242424ff"],

  ["audience", "hierarchy", "#242424ff"],
  ["audience", "stp", "#242424ff"],
  ["stp", "channel", "#242424ff"],
  ["hierarchy", "channel", "#242424ff"],
  ["channel", "message", "#242424ff"],
  ["message", "insights", "#242424ff"],
  ["insights", "route", "#242424ff"],

  ["route", "rational", "#242424ff"],
  ["rational", "features", "#242424ff"],
  ["rational", "value", "#242424ff"],
  ["value", "authority", "#242424ff"],
  ["features", "social-proof", "#242424ff"],
  ["social-proof", "hybrid", "#242424ff"],
  ["authority", "hybrid", "#242424ff"],
  ["hybrid", "emotional", "#242424ff"],
  ["emotional", "feelings", "#242424ff"],
  ["emotional", "desires", "#242424ff"],
  ["desires", "execution", "#242424ff"],
  ["feelings", "execution", "#242424ff"],
  ["execution", "copy", "#242424ff"],
  ["copy", "visual-design", "#242424ff"],
  ["visual-design", "creative", "#242424ff"],
];

const isMobile = () => window.innerWidth <= 768;

function drawDesktopConnections() {
  svg.innerHTML = "";

  connections.forEach(([fromId, toId, color]) => {
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);
    if (!from || !to) return;

    const a = from.getBoundingClientRect();
    const b = to.getBoundingClientRect();
    const p = svg.getBoundingClientRect();

    const x1 = a.left + a.width / 2 - p.left;
    const y1 = a.bottom - p.top;
    const x2 = b.left + b.width / 2 - p.left;
    const y2 = b.top - p.top;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    path.setAttribute(
      "d",
      `M ${x1} ${y1}
       C ${x1} ${y1 + 40},
         ${x2} ${y2 - 40},
         ${x2} ${y2}`
    );

    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "3");

    svg.appendChild(path);
  });
}

function createArrowMarker(color) {
  const markerId = `arrow-${color.replace("#", "")}`;

  if (svg.querySelector(`#${markerId}`)) return markerId;

  const defs = svg.querySelector("defs") || svg.appendChild(
    document.createElementNS("http://www.w3.org/2000/svg", "defs")
  );

  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker.setAttribute("id", markerId);
  marker.setAttribute("markerWidth", "5");
  marker.setAttribute("markerHeight", "4");
  marker.setAttribute("refX", "4");
  marker.setAttribute("refY", "2");
  marker.setAttribute("orient", "auto");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M0,0 L0,4 L5,2 z");
  path.setAttribute("fill", color);

  marker.appendChild(path);
  defs.appendChild(marker);

  return markerId;
}

function drawMobileConnections() {
  svg.innerHTML = "";

  connections.forEach(([fromId, toId, color]) => {
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);
    if (!from || !to) return;

    const a = from.getBoundingClientRect();
    const b = to.getBoundingClientRect();
    const p = svg.getBoundingClientRect();

    const x1 = a.left + a.width / 2 - p.left;
    const y1 = a.bottom - p.top;

    const x2 = b.left + b.width / 2 - p.left;
    const y2 = b.top - p.top;

    const midY = (y1 + y2) / 2;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // vertical → horizontal → vertical (clean elbow)
    path.setAttribute(
      "d",
      `
      M ${x1} ${y1}
      L ${x1} ${midY}
      L ${x2} ${midY}
      L ${x2} ${y2}
      `
    );

    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "2");

    svg.appendChild(path);
  });
}

// window.addEventListener("resize", drawConnections);
// drawConnections();

function renderConnections() {
  if (isMobile()) {
    drawMobileConnections();
  } else {
    drawDesktopConnections();
  }
}

window.addEventListener("resize", renderConnections);
renderConnections();
