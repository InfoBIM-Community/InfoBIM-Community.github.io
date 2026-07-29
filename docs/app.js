(() => {
  const supported = ["pt-BR", "en", "es"];
  const languageButtons = [...document.querySelectorAll("[data-lang-select]")];

  const getNested = (object, path) =>
    path.split(".").reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), object);

  const applyTranslations = (messages, language) => {
    document.documentElement.lang = language;
    document.documentElement.dataset.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = getNested(messages, node.dataset.i18n);
      if (typeof value === "string") node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-meta]").forEach((node) => {
      const value = getNested(messages, node.dataset.i18nMeta);
      if (typeof value === "string") node.setAttribute("content", value);
    });

    const title = getNested(messages, "meta.title");
    if (title) document.title = title;

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.langSelect === language));
    });
  };

  const setLanguage = async (language) => {
    const selected = supported.includes(language) ? language : "pt-BR";
    try {
      const response = await fetch(`i18n/${selected}.json`);
      if (!response.ok) throw new Error("Translation file unavailable");
      const messages = await response.json();
      applyTranslations(messages, selected);
      localStorage.setItem("infobim-language", selected);
    } catch (error) {
      console.warn(error);
    }
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langSelect));
  });

  const stored = localStorage.getItem("infobim-language");
  const browserLanguage = navigator.language?.toLowerCase() || "";
  const initial = stored || (browserLanguage.startsWith("es") ? "es" : browserLanguage.startsWith("en") ? "en" : "pt-BR");
  setLanguage(initial);
})();
