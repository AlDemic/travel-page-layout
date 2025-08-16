// 1. Get selector
const switcher = document.querySelector(".hero__header-lang");

// 2. Load language from localStorage or set "en" as base
const savedLang = localStorage.getItem("lang") || "en";
switcher.value = savedLang; // Upload choosed langiage in select
applyTranslations(savedLang);

// 3. Event of changing language
switcher.addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
});

// 4. Translation function
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = translations[lang][key] || key;
  });

  //aria-label translation
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    el.setAttribute = ("aria-label", translations[lang][key] || key);
  });

  //html lang
  document.documentElement.setAttribute("lang", lang);

  //title page translation
  if(translations[lang]["page-title"]) {
    document.title = translations[lang]["page-title"];
  }

  //placeholder translation
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key] || key;
  });
};