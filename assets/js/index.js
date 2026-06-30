// ^ Write your JavaScript code here
/*=======================================================
  * Task 1 ( Nav Links trak what page open ) *
  =======================================================*/
let links = document.querySelectorAll(".nav-links a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    // Remove active from all links
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }
    // Add active to clicked link
    this.classList.add("active");
  });
}
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  let current = "";
  for (let i = 0; i < sections.length; i++) {
    if (window.scrollY >= sections[i].offsetTop - 100) {
      current = sections[i].id;
    }
  }
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
    if (links[i].getAttribute("href") === "#" + current) {
      links[i].classList.add("active");
    }
  }
});
/*=======================================================
  * Task 2 ( Dark & Light button ) *
  =======================================================*/
let themeToggleButton = document.getElementById("theme-toggle-button");

// Load saved theme mode when the page starts
function loadThemeMode() {
  const savedMode = localStorage.getItem("themeMode");
  if (savedMode === "light") {
    document.querySelectorAll(".dark").forEach((el) => el.classList.remove("dark"));
  }
  // if nothing saved, or saved as "dark", leave it as is
}
themeToggleButton.addEventListener("click", function () {
  const isDark = document.querySelectorAll(".dark").length > 0;
  if (isDark) {
    // currently dark → switch to light
    document.querySelectorAll(".dark").forEach((el) => el.classList.remove("dark"));
    localStorage.setItem("themeMode", "light");
  } else {
    // currently light → switch to dark
    document.documentElement.classList.add("dark");
    localStorage.setItem("themeMode", "dark");
  }
});
// Run on page load
loadThemeMode();
/*=======================================================
  * Task 3 ( Nav & Taps buttons to show cards )*
  =======================================================*/
let portfolioFilter = document.querySelectorAll(".portfolio-filter");
let projects = [
  {
    title: "متجر إلكتروني متكامل",
    category: "web",
    image: "./assets/imgs/portfolio-1-BqicZ04C.webp",
    description: "منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات",

    badge: "موقع ويب",
    badgeColor: "primary",

    technologies: ["React", "Node.js", "MongoDB"],

    preview: "#",
    github: "#",
  },
  {
    title: "تطبيق إدارة المهام",
    category: "app",
    image: "./assets/imgs/portfolio-2-D0_acfF_.webp",
    description: "تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي",

    badge: "تطبيق",
    badgeColor: "secondary",

    technologies: ["Vue.js", "Firebase", "Tailwind"],

    preview: "#",
    github: "#",
  },

  {
    title: "موقع شخصي إبداعي",
    category: "design",
    image: "./assets/imgs/portfolio-3-uJsBXCgl.webp",
    description: "تصميم موقع شخصي بأسلوب عصري وألوان جريئة",

    badge: "تصميم",
    badgeColor: "accent",

    technologies: ["Figma", "UI/UX", "Prototype"],

    preview: "#",
    figma: "#",
  },
  {
    title: "موقع شركة استشارية",
    category: "web",
    image: "./assets/imgs/portfolio-4-Czusdp5K.webp",
    description: "موقع احترافي لشركة استشارات مع نظام حجز المواعيد",

    badge: "موقع ويب",
    badgeColor: "primary",

    technologies: ["Next.js", "TypeScript", "Prisma"],

    preview: "#",
    github: "#",
  },
  {
    title: "لوحة تحليلات اجتماعية",
    category: "app",
    image: "./assets/imgs/portfolio-5-ChqqtI-W.webp",
    description: "منصة تحليل وإدارة حسابات التواصل الاجتماعي",

    badge: "تطبيق",
    badgeColor: "secondary",

    technologies: ["React", "Chart.js", "API"],

    preview: "#",
    github: "#",
  },
  {
    title: "متجر أزياء فاخر",
    category: "ecommerce",
    image: "./assets/imgs/portfolio-6-C9bxzsei.webp",
    description: "منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية",

    badge: "تجارة",
    badgeColor: "accent",

    technologies: ["Next.js", "Stripe", "Sanity"],

    preview: "#",
    github: "#",
  },
  {
    title: "موقع مطعم وتوصيل",
    category: "web",
    image: "./assets/imgs/portfolio-7-BXDNVwGk.webp",
    description: "منصة طلب طعام مع نظام توصيل وتتبع الطلبات",

    badge: "موقع ويب",
    badgeColor: "primary",

    technologies: ["React", "Express", "PostgreSQL"],

    preview: "#",
    github: "#",
  },
  {
    title: "تطبيق لياقة بدنية",
    category: "app",
    image: "./assets/imgs/portfolio-8-BnHB_F_a.webp",
    description: "تطبيق متكامل لتتبع التمارين والتغذية والتقدم",

    badge: "تطبيق",
    badgeColor: "secondary",

    technologies: ["React Native", "Redux", "Firebase"],

    preview: "#",
    github: "#",
  },
  {
    title: "تصميم تطبيق جوال",
    category: "design",
    image: "./assets/imgs/portfolio-9-Q6q-wpwU.webp",
    description: "تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف",

    badge: "تصميم",
    badgeColor: "accent",

    technologies: ["Figma", "Adobe XD"],

    preview: "#",
    figma: "#",
  },
];
// Apply active button style using current theme colors
function applyActiveFilterStyle() {
  const primary = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();
  const secondary = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-secondary")
    .trim();
  const activeBtn = document.querySelector(".portfolio-filter.active");
  if (activeBtn) {
    activeBtn.style.background = `linear-gradient(to right, ${primary}, ${secondary})`;
    activeBtn.style.color = "white";
    activeBtn.style.borderColor = "transparent";
  }
}

// Build technology tags
function createTechnologies(techs) {
  let html = "";
  for (let i = 0; i < techs.length; i++) {
    html += `
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">
        ${techs[i]}
      </span>
    `;
  }
  return html;
}

// Build GitHub/Figma button
function createSecondButton(project) {
  if (project.github) {
    return `
      <a href="${project.github}" class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group" aria-label="GitHub repo">
        <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white" aria-hidden="true"></i>
      </a>
    `;
  }
  if (project.figma) {
    return `
      <a href="${project.figma}" class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group" aria-label="Figma design">
        <i class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white" aria-hidden="true"></i>
      </a>
    `;
  }
  return "";
}

// Render project cards
const portfolioGrid = document.getElementById("portfolio-grid");
function displayProjects(arr) {
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    html += `
      <div class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 transition-all duration-300">
        <div class="relative h-72 overflow-hidden">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <span class="px-4 py-1 bg-${p.badgeColor}/20 text-${p.badgeColor} rounded-full text-sm font-medium">
              ${p.badge}
            </span>
            <div class="flex gap-2">
              <a href="${p.preview}" class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group" aria-label="Project preview">
                <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white" aria-hidden="true"></i>
              </a>
              ${createSecondButton(p)}
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-2">${p.title}</h3>
          <p class="text-slate-500 dark:text-slate-400 mb-4">${p.description}</p>
          <div class="flex flex-wrap gap-2">
            ${createTechnologies(p.technologies)}
          </div>
        </div>
      </div>
    `;
  }
  portfolioGrid.innerHTML = html;
}
displayProjects(projects);

// One loop handles both: active style + filtering
portfolioFilter.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active state from all buttons
    portfolioFilter.forEach((b) => {
      b.classList.remove("active");
      b.style.background = "";
      b.style.color = "";
      b.style.borderColor = "";
    });
    // Set this button as active
    this.classList.add("active");
    applyActiveFilterStyle();
    // Filter projects
    const category = this.dataset.filter;
    const filtered =
      category === "all"
        ? projects
        : projects.filter((p) => p.category === category);
    displayProjects(filtered);
  });
});
/*=======================================================
  * Task 4 ( Testimonials Carousel )*
  =======================================================*/
const testimonials = [
  {
    name: "أحمد السعيد",
    job: "مدير شركة التقنية الحديثة",
    image: "/assets/imgs/avatar-1-BQH9KX0X.webp",
    review:
      "شغل أحمد معانا كان حاجة تانية خالص. قدم حلول مبتكرة لكل المشاكل اللي واجهتنا.",
    color: "accent",
  },
  {
    name: "سيف أسامة",
    job: "ميديا باير",
    image: "/assets/imgs/avatar-2-CyFiVXIH.webp",
    review:
      "المتجر بتاعنا بقى محترف ومريح جداً في الاستخدام. مبيعاتنا زادت 60%.",
    color: "primary",
  },
  {
    name: "خالد صلاح",
    job: "مدير تطوير الأعمال",
    image: "/assets/imgs/avatar-3-CmoFRkys.webp",
    review: "التطبيق اللي عمله لنا شغال زي الفل على كل الأجهزة.",
    color: "secondary",
  },
  {
    name: "أحمد الرفاعي",
    job: "جرافيك ديزاينر",
    image: "/assets/imgs/avatar-4-CI2X8fvY.webp",
    review: "تجربة ممتازة من الأول للآخر. الموقع الجديد عجب العملاء جداً.",
    color: "accent",
  },
  {
    name: "عمر عادل",
    job: "مؤسس شركة ناشئة",
    image: "/assets/imgs/avatar-5-BF_5vAuR.webp",
    review: "أحمد ساعدنا نحول الفكرة لواقع. الـ MVP كان ممتاز.",
    color: "primary",
  },
  {
    name: "كريم ياسر",
    job: "دكتور صيدلي",
    image: "/assets/imgs/avatar-6-IIG--UcM.webp",
    review: "الشغل مع أحمد كان مريح ومنظم جداً.",
    color: "secondary",
  },
];
const carousel = document.getElementById("testimonials-carousel");
const indicatorsContainer = document.getElementById("indicators-container");
const nextBtn = document.getElementById("next-testimonial");
const prevBtn = document.getElementById("prev-testimonial");
// Generate Cards
function displayTestimonials() {
  let cartona = "";
  for (let i = 0; i < testimonials.length; i++) {
    cartona += `
      <div
        class="testimonial-card
        flex-shrink-0
        
        px-4"
       
      >
        <div
          class="bg-white/80 dark:bg-slate-800/50
          backdrop-blur-sm
          rounded-2xl
          p-8
          border
          border-slate-200
          dark:border-slate-700
          h-full"
        >
          <div class="flex items-center mb-6">
            <img
              src="${testimonials[i].image}"
              class="w-16 h-16 rounded-full ml-4 object-cover border-2 border-${testimonials[i].color}"
            >
            <div>
              <h4 class="text-xl font-bold">
                ${testimonials[i].name}
              </h4>
              <p class="text-slate-500 dark:text-slate-400">
                ${testimonials[i].job}
              </p>
            </div>
          </div>
          <div class="flex mb-4">
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
          </div>
          <p
            class="text-slate-600 dark:text-slate-300 leading-relaxed text-lg"
          >
            "${testimonials[i].review}"
          </p>
        </div>
      </div>
    `;
  }
  carousel.innerHTML = cartona;
}
function getVisibleCards() {
  if (window.innerWidth >= 1024) {
    return 3;
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    return 2;
  }
  return 1;
}
// Generate Indicators
function createIndicators() {
  const visibleCards = getVisibleCards();
  const slidesCount = testimonials.length - visibleCards + 1;
  let cartona = "";
  for (let i = 0; i < slidesCount; i++) {
    cartona += `
      <button
        class="carousel-indicator
        w-3
        h-3
        rounded-full
        ${i === 0 ? "bg-accent" : "bg-slate-400"}
        "
        data-index="${i}"
      ></button>
    `;
  }
  indicatorsContainer.innerHTML = cartona;
}

// Carousel Logic
let currentSlide = 0;
function updateCarousel() {
  const card = document.querySelector(".testimonial-card");
  const indicators = document.querySelectorAll(".carousel-indicator");
  const cardWidth = card.offsetWidth;
  carousel.style.transform = `translateX(${currentSlide * cardWidth}px)`;
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("bg-accent");
    indicators[i].classList.add("bg-slate-400");
  }
  indicators[currentSlide].classList.remove("bg-slate-400");
  indicators[currentSlide].classList.add("bg-accent");
}

// Next Button
nextBtn.addEventListener("click", () => {
  const visibleCards = getVisibleCards();
  const maxSlides = testimonials.length - visibleCards;
  currentSlide++;
  if (currentSlide > maxSlides) {
    currentSlide = 0;
  }
  updateCarousel();
});

// Prev Button
prevBtn.addEventListener("click", () => {
  const visibleCards = getVisibleCards();
  const maxSlides = testimonials.length - visibleCards;
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = maxSlides;
  }
  updateCarousel();
});

// Indicators Click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("carousel-indicator")) {
    currentSlide = Number(e.target.dataset.index);
    updateCarousel();
  }
});
window.addEventListener("resize", () => {
  currentSlide = 0;
  createIndicators();
  updateCarousel();
});
// Initialize Functions
displayTestimonials();
createIndicators();
updateCarousel();

/*=======================================================
  * Task 5 ( Settings Sidebar )*
  =======================================================*/
const settingsBtn = document.getElementById("settings-toggle");
const sidebar = document.getElementById("settings-sidebar");
const closeBtn = document.getElementById("close-settings");

function openSidebar() {
  sidebar.classList.add("translate-x-0");
  sidebar.classList.remove("translate-x-full");
  settingsBtn.style.transform = "translateY(-50%) translateX(-320px)";
}

function closeSidebar() {
  sidebar.classList.add("translate-x-full");
  sidebar.classList.remove("translate-x-0");
  settingsBtn.style.transform = "translateY(-50%) translateX(0)";
}

settingsBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("translate-x-0")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

closeBtn.addEventListener("click", closeSidebar);

document.addEventListener("click", (e) => {
  const isOpen = sidebar.classList.contains("translate-x-0");
  const clickedOutside = !sidebar.contains(e.target) && !settingsBtn.contains(e.target);
  if (isOpen && clickedOutside) {
    closeSidebar();
  }
});

// Available theme colors — edit as needed for your project
const THEMES = [
  { name: "blue", primary: "#3b82f6", secondary: "#06b6d4", accent: "#8b5cf6" },
  { name: "green", primary: "#10b981", secondary: "#34d399", accent: "#6ee7b7" },
  { name: "coral", primary: "#f43f5e", secondary: "#fb7185", accent: "#fda4af" },
  { name: "purple", primary: "#7c3aed", secondary: "#8b5cf6", accent: "#a78bfa" }, // default
  { name: "orange", primary: "#f97316", secondary: "#fb923c", accent: "#fdba74" },
  { name: "red", primary: "#ef4444", secondary: "#f87171", accent: "#fca5a5" },
  { name: "teal", primary: "#14b8a6", secondary: "#2dd4bf", accent: "#5eead4" },
  { name: "indigo", primary: "#6366f1", secondary: "#818cf8", accent: "#a5b4fc" },
];

// Available fonts
const FONTS = {
  alexandria: "'Alexandria', sans-serif",
  tajawal: "'Tajawal', sans-serif",
  cairo: "'Cairo', sans-serif",
};

// Default settings
const DEFAULTS = {
  font: "tajawal",
  theme: "purple",
};

// ===== Run on page load =====
document.addEventListener("DOMContentLoaded", () => {
  buildColorGrid();
  loadSettings();
});

// ===== Build the color buttons =====
function buildColorGrid() {
  const grid = document.getElementById("theme-colors-grid");
  if (!grid) return;
  grid.innerHTML = "";
  for (let i = 0; i < THEMES.length; i++) {
    const theme = THEMES[i];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-color-btn";
    btn.dataset.theme = theme.name;
    btn.setAttribute("aria-label", "color " + theme.name);
    btn.style.cssText = `
      width: 48px; height: 48px; border-radius: 50%;
      background: ${theme.primary};
      border: 3px solid transparent;
      cursor: pointer; transition: all 0.2s;
      display: flex; align-items: center; justify-content: center;
    `;
    btn.innerHTML = '<i class="fa-solid fa-check" style="color:#fff;opacity:0;font-size:14px;transition:opacity .2s"></i>';
    grid.appendChild(btn);
  }
}

// ===== Apply selected font =====
function applyFont(fontId) {
  const font = FONTS[fontId] || FONTS.tajawal;
  document.documentElement.style.setProperty("--font-main", font);
  document.body.style.fontFamily = font;
  const fontButtons = document.querySelectorAll(".font-option");
  fontButtons.forEach((btn) => {
    const isActive = btn.dataset.font === fontId;
    if (isActive) {
      btn.classList.add("active");
      btn.style.borderColor = "var(--color-primary, #7c3aed)";
    } else {
      btn.classList.remove("active");
      btn.style.borderColor = "";
    }
  });
}

// ===== Apply selected theme =====
function applyTheme(themeName) {
  const theme = THEMES.find((t) => t.name === themeName);
  if (!theme) return;
  const root = document.documentElement;
  root.style.setProperty("--color-primary", theme.primary);
  root.style.setProperty("--color-secondary", theme.secondary);
  root.style.setProperty("--color-accent", theme.accent);
  const colorButtons = document.querySelectorAll(".theme-color-btn");
  colorButtons.forEach((btn) => {
    const isActive = btn.dataset.theme === themeName;
    const checkIcon = btn.querySelector("i");
    if (isActive) {
      btn.style.borderColor = theme.primary;
      btn.style.boxShadow = `0 0 0 3px ${theme.primary}40`;
      checkIcon.style.opacity = "1";
    } else {
      btn.style.borderColor = "transparent";
      btn.style.boxShadow = "none";
      checkIcon.style.opacity = "0";
    }
  });
  // Re-paint the active filter button whenever the theme color changes in Nav & Tabs buttons
  applyActiveFilterStyle();
}

// ===== Font buttons click =====
const fontOptions = document.querySelectorAll(".font-option");
fontOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const fontId = btn.dataset.font;
    applyFont(fontId);
    localStorage.setItem("selectedFont", fontId);
  });
});

// ===== Color buttons click =====
const colorGrid = document.getElementById("theme-colors-grid");
if (colorGrid) {
  colorGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".theme-color-btn");
    if (!btn) return;
    const themeName = btn.dataset.theme;
    applyTheme(themeName);
    localStorage.setItem("selectedTheme", themeName);
  });
}

// ===== Reset button click =====
const resetBtn = document.getElementById("reset-settings");
if (resetBtn) {
  resetBtn.addEventListener("click", resetSettings);
}
function resetSettings() {
  applyFont(DEFAULTS.font);
  applyTheme(DEFAULTS.theme);
  localStorage.removeItem("selectedFont");
  localStorage.removeItem("selectedTheme");
}

// ===== Load saved settings on page load =====
function loadSettings() {
  const savedFont = localStorage.getItem("selectedFont") || DEFAULTS.font;
  const savedTheme = localStorage.getItem("selectedTheme") || DEFAULTS.theme;
  applyFont(savedFont);
  applyTheme(savedTheme);
  if (typeof applyActiveFilterStyle === "function") {
    applyActiveFilterStyle();
  }
}

/* *=======================================================
* Task 5 ( Scroll to Top Button )*
  =======================================================*/
const scrollBtn = document.getElementById("scroll-to-top");
const header = document.querySelector("header"); // change selector if your header has a different tag/id

// Show button after scrolling past the header
window.addEventListener("scroll", () => {
  if (window.scrollY > header) {
    scrollBtn.classList.remove("opacity-0", "invisible");
    scrollBtn.classList.add("opacity-100", "visible");
  } else {
    scrollBtn.classList.add("opacity-0", "invisible");
    scrollBtn.classList.remove("opacity-100", "visible");
  }
});

// Scroll to top when clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});