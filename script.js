const portfolio = window.PORTFOLIO_DATA;
let currentLanguage = portfolio.defaultLanguage || "en";
let lightboxState = { images: [], index: 0 };
let currentProjectTab = "all";

const qs = (selector) => document.querySelector(selector);
const qsAll = (selector) => Array.from(document.querySelectorAll(selector));
const cleanText = (value) =>
  typeof value === "string" ? value.replace(/\.\s*$/u, "").trim() : value;
const byLang = (value) =>
  cleanText(
    value && typeof value === "object" && !Array.isArray(value)
      ? value[currentLanguage] ?? value.en ?? ""
      : value
  );

const iconClasses = {
  github: "fa-brands fa-github",
  linkedin: "fa-brands fa-linkedin",
  "google-play": "fa-brands fa-google-play",
  "app-store": "fa-brands fa-apple",
  android: "fa-brands fa-google-play",
  ios: "fa-brands fa-apple",
  email: "fa-solid fa-envelope",
  phone: "fa-solid fa-phone",
  whatsapp: "fa-brands fa-whatsapp",
  globe: "fa-solid fa-globe",
  code: "fa-solid fa-code",
  briefcase: "fa-solid fa-briefcase",
  internship: "fa-solid fa-briefcase",
  "work-experience": "fa-solid fa-building",
  education: "fa-solid fa-graduation-cap",
  calendar: "fa-solid fa-calendar-days",
  shield: "fa-solid fa-shield-halved",
  heart: "fa-solid fa-heart",
  languages: "fa-solid fa-globe",
  about: "fa-solid fa-circle-info",
  projects: "fa-solid fa-folder-open",
  video: "fa-solid fa-video",
  certificate: "fa-solid fa-award",
  location: "fa-solid fa-location-dot",
  book: "fa-solid fa-book",
  info: "fa-solid fa-circle-info",
};

const linkIcons = {
  github: "github",
  linkedin: "linkedin",
  android: "google-play",
  ios: "app-store",
  email: "email",
  phone: "phone",
  whatsapp: "whatsapp",
  globe: "globe",
  code: "code",
  briefcase: "briefcase",
  internship: "internship",
  "work-experience": "work-experience",
  education: "education",
  about: "about",
  projects: "projects",
  video: "video",
  certificate: "certificate",
};

const iconMarkup = (name) => {
  const iconClass = iconClasses[name] || iconClasses.globe;
  return `<i class="icon ${iconClass}" aria-hidden="true"></i>`;
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (typeof text === "string") element.textContent = text;
  return element;
};

const createLink = (item, className = "") => {
  const link = createElement("a", className);
  const iconName = linkIcons[item.type] || "globe";
  link.href = item.href || "#";
  link.target = item.href?.startsWith("http") ? "_blank" : "_self";
  link.rel = item.href?.startsWith("http") ? "noreferrer" : "";
  link.innerHTML = `${iconMarkup(iconName)}<span>${byLang(item.label)}</span>`;
  return link;
};

const clearNode = (selector) => {
  const element = qs(selector);
  if (element) element.innerHTML = "";
  return element;
};

const setDocumentLanguage = () => {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", currentLanguage === "ar");
};

const fillStaticText = () => {
  const ui = portfolio.ui[currentLanguage];
  document.title = `${byLang(portfolio.personal.name)} | ${byLang(portfolio.personal.role)}`;
  qs(".brand").textContent = ui.brand;
  qs("#aboutTitle").textContent = ui.sections.aboutTitle;
  qs("#experienceTitle").textContent = ui.sections.experienceTitle;
  qs("#projectsTitle").textContent = ui.sections.projectsTitle;
  qs("#languageToggle").textContent =
    currentLanguage === "en" ? ui.actions.switchToArabic : ui.actions.switchToEnglish;
  qs("#summaryLabel").textContent = currentLanguage === "en" ? "Summary" : "الملخص";
};

const fillNavigation = () => {
  const nav = portfolio.ui[currentLanguage].nav;
  const navLinks = clearNode("#navLinks");
  [
    { label: nav.education, href: "#education", type: "education" },
    { label: nav.internship, href: "#internship", type: "internship" },
    { label: nav["work-experience"], href: "#work-experience", type: "work-experience" },
    { label: nav["technical-skills"], href: "#technical-skills", type: "code" },
    { label: nav.projects, href: "#projects", type: "projects" },
    { label: nav.languages, href: "#languages", type: "globe" },
  ].forEach((item) => navLinks.append(createLink(item)));
};

const fillHero = () => {
  const { personal, socialLinks } = portfolio;
  const profileImage = qs("#profileImage");
  const profileFallback = qs("#profileFallback");

  qs("#heroEyebrow").textContent = "";
  qs("#heroTitle").textContent = byLang(personal.name);
  qs("#heroSubtitle").textContent = byLang(personal.title);
  qs("#heroSummary").textContent = byLang(personal.summary);

  if (personal.profileImage) {
    profileImage.src = personal.profileImage;
    profileImage.alt = `${byLang(personal.name)} portrait`;
    profileImage.hidden = false;
    profileFallback.hidden = true;
  } else {
    profileImage.hidden = true;
    profileFallback.hidden = false;
    profileFallback.textContent = byLang(personal.name)
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  const heroActions = clearNode("#heroActions");
  socialLinks.filter((item) => item.type !== "cv").forEach((item) => heroActions.append(createLink(item)));

  const heroFacts = clearNode("#heroFacts");
  const facts = [
    { icon: "location", label: { en: "Address", ar: "العنوان" }, value: personal.location },
    ...(personal.personalFacts || []),
  ];
  facts.forEach((item) => {
    const fact = createElement("div", "fact-pill");
    fact.innerHTML = `${iconMarkup(item.icon || "globe")}<span class="fact-label">${byLang(item.label)}:</span><span>${byLang(item.value)}</span>`;
    heroFacts.append(fact);
  });

  const heroStats = clearNode("#heroStats");
  personal.stats.forEach((item) => {
    const stat = createElement("div", "stat");
    stat.innerHTML = `<strong>${item.value}</strong><span class="stat-label">${byLang(item.label)}</span>`;
    heroStats.append(stat);
  });
};

const fillAbout = () => {
  const skillsList = clearNode("#skillsList");
  portfolio.skills.forEach((skill, index) => {
    const card = createElement("article", `skill-card fade-up delay-${Math.min(index, 3)}`);
    card.innerHTML = `<h3>${iconMarkup("code")}<span>${byLang(skill.title)}</span></h3><p>${byLang(skill.text)}</p>`;
    skillsList.append(card);
  });
};

const fillExperience = () => {
  const experienceList = clearNode("#experienceList");
  portfolio.experience.forEach((item, index) => {
    const article = createElement("article", `extra-card experience-card fade-up delay-${Math.min(index, 3)}`);
    const logoMarkup = item.logo ? `<div class="experience-logo"><img src="${item.logo}" alt="${item.company} logo" /></div>` : "";
    const linksMarkup = item.links?.length
      ? `<div class="extra-links">${item.links.map((link) => createLink(link).outerHTML).join("")}</div>`
      : "";
    article.innerHTML = `
      <div class="experience-head">
        <div>
          <h3>${iconMarkup("work-experience")}<span>${byLang(item.role || item.position)}</span></h3>
          ${item.companyLine ? `<p class="experience-subline">${byLang(item.companyLine)}</p>` : ""}
        </div>
        <strong>${byLang(item.period)}</strong>
      </div>
      <div class="experience-body">
        <p class="experience-description">${byLang(item.description)}</p>
        ${logoMarkup}
      </div>
      ${linksMarkup}
    `;
    experienceList.append(article);
  });
};

const allowedProjectLinks = (links) => {
  const labels = portfolio.ui[currentLanguage].labels;
  return [
    links.android ? { type: "android", label: labels.android, href: links.android } : null,
    links.ios ? { type: "ios", label: labels.ios, href: links.ios } : null,
    links.github ? { type: "github", label: labels.github, href: links.github } : null,
    links.linkedin ? { type: "linkedin", label: labels.linkedin, href: links.linkedin } : null,
    links.video ? { type: "video", label: labels.video, href: links.video } : null,
  ].filter(Boolean);
};

const projectTabLabels = {
  all: { en: "All", ar: "الكل" },
  sigma: { en: "Sigma Tech Projects", ar: "مشاريع سيجما تك" },
  freelance: { en: "Freelance Projects", ar: "مشاريع فريلانسر" },
  learning: { en: "Practice Projects", ar: "مشاريع تدريبية" },
};

const fillProjects = () => {
  const projectTabs = clearNode("#projectTabs");
  const projectsList = clearNode("#projectsList");
  const tabs = ["all", "sigma", "freelance", "learning"];
  tabs.forEach((tab) => {
    const count = tab === "all"
      ? portfolio.projects.length
      : portfolio.projects.filter((project) => {
          const group = project.group || "freelance";
          return tab === "learning"
            ? group === "learning"
            : group === tab;
        }).length;
    const button = createElement("button", `project-tab ${currentProjectTab === tab ? "active" : ""}`);
    button.type = "button";
    button.innerHTML = `<span>${byLang(projectTabLabels[tab])}</span><small>${count}</small>`;
    button.onclick = () => {
      currentProjectTab = tab;
      fillProjects();
    };
    projectTabs.append(button);
  });

  const filteredProjects = currentProjectTab === "all"
    ? portfolio.projects
    : currentProjectTab === "learning"
    ? portfolio.projects.filter((project) => (project.group || "freelance") === "learning")
    : portfolio.projects.filter((project) => (project.group || "freelance") === currentProjectTab);

  const freelanceProjectOrder = [
    "Having",
    "Wazfnee",
    "Food In",
    "Kilo Mart",
    "El Mister",
    "Ebhar",
    "Excellence Road Institute",
    "Wellaura",
    "Bawabeti",
  ];
  const allGroupOrder = ["sigma", "freelance", "learning"];
  const orderedProjects = currentProjectTab === "freelance"
    ? [...filteredProjects].sort((a, b) => {
        const indexA = freelanceProjectOrder.indexOf(a.name);
        const indexB = freelanceProjectOrder.indexOf(b.name);
        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
      })
    : currentProjectTab === "all"
    ? [...filteredProjects].sort((a, b) => {
        const groupA = a.group || "freelance";
        const groupB = b.group || "freelance";
        const indexA = allGroupOrder.indexOf(groupA);
        const indexB = allGroupOrder.indexOf(groupB);
        if (indexA !== indexB) {
          const safeA = indexA === -1 ? allGroupOrder.length : indexA;
          const safeB = indexB === -1 ? allGroupOrder.length : indexB;
          return safeA - safeB;
        }
        return 0;
      })
    : filteredProjects;

  orderedProjects.forEach((project, index) => {
    const article = createElement("article", `project-card fade-up delay-${Math.min(index, 3)}`);
    const linksMarkup = allowedProjectLinks(project.links || {}).map((link) => createLink(link).outerHTML).join("");
    const labels = portfolio.ui[currentLanguage].labels;
    const subAppsMarkup = (project.subApps || []).length
      ? `
        <div class="project-subapps">
          ${project.subApps.map((item) => {
            const subAppLinks = [
              item.links?.android ? { type: "android", label: labels.android, href: item.links.android } : null,
              item.links?.ios ? { type: "ios", label: labels.ios, href: item.links.ios } : null,
            ].filter(Boolean);
            if (!subAppLinks.length) return "";
            return `
              <div class="project-subapp">
                <strong>${byLang(item.name)}</strong>
                <div class="project-subapp-links">
                  ${subAppLinks.map((link) => createLink(link).outerHTML).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `
      : "";
    const logoMarkup = project.logo
      ? `<img class="project-logo-image" src="${project.logo}" alt="${project.name} logo" />`
      : `<span class="project-logo-fallback">${project.name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase()}</span>`;
    const hiddenNoteProjects = ["Kilo Mart", "El Mister", "Sweft"];
    const noteMarkup = project.note
      ? `<p class="project-note">${byLang(project.note)}</p>`
      : !Object.keys(project.links || {}).length && !hiddenNoteProjects.includes(project.name)
      ? `<p class="project-note">${currentLanguage === "ar" ? "جاري الرفع، وسيتم إضافة الروابط قريبًا." : "Publishing is in progress; links will be added soon."}</p>`
      : "";
    const galleryMarkup = (project.gallery || []).length
      ? `<div class="project-gallery">${project.gallery.map((image, imageIndex) => `<button class="project-thumb" type="button" data-project-name="${project.name}" data-image-index="${imageIndex}"><img src="${image}" alt="${project.name} screenshot ${imageIndex + 1}" /></button>`).join("")}</div>`
      : "";
    article.innerHTML = `
      <div class="project-topline">
        <span class="project-logo">${logoMarkup}</span>
        <p>${byLang(project.category)}</p>
      </div>
      <div class="project-head"><div class="project-meta"><h3>${project.name}</h3></div></div>
      <p>${byLang(project.description)}</p>
      ${noteMarkup}
      ${galleryMarkup}
      ${subAppsMarkup}
      <div class="project-links">${linksMarkup}</div>
    `;
    projectsList.append(article);
  });
  qsAll(".project-thumb").forEach((button) => {
    button.onclick = () => {
      const project = portfolio.projects.find((item) => item.name === button.dataset.projectName);
      openLightbox(project?.gallery || [], Number(button.dataset.imageIndex));
    };
  });
};

const renderExtraSection = (section, selector, index = 0) => {
  const target = clearNode(selector);
  if (!section || !target) return;
  const sectionIcon = section.id && iconClasses[section.id] ? section.id : "education";
  const wrapper = createElement("div", index > 0 ? "section-block" : "section-block fade-up");
  if (section.id) wrapper.id = section.id;
  wrapper.innerHTML = `
      <div class="section-heading"><div><h2>${byLang(section.title)}</h2></div></div>
      <div class="extras-grid">
        ${section.items.map((item) => `
          <article class="extra-card">
            ${
              item.subtitle || item.date
                ? `
                  <div class="extra-head">
                    <div>
                      <h3>${iconMarkup(sectionIcon)}<span>${byLang(item.title)}</span></h3>
                      ${item.subtitle ? `<p class="extra-subline">${byLang(item.subtitle)}</p>` : ""}
                    </div>
                    ${item.date ? `<strong>${byLang(item.date)}</strong>` : ""}
                  </div>
                `
                : `<h3>${iconMarkup(sectionIcon)}<span>${byLang(item.title)}</span></h3>`
            }
            ${byLang(item.text) ? `<p>${byLang(item.text)}</p>` : ""}
            ${item.images?.length ? `<div class="extra-images">${item.images.map((image, imageIndex) => `<div class="extra-image"><img src="${image}" alt="${byLang(item.title)} image ${imageIndex + 1}" /></div>`).join("")}</div>` : ""}
            ${item.bullets?.[currentLanguage]?.length ? `<ul class="extra-bullets">${item.bullets[currentLanguage].map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
            ${item.links?.length ? `<div class="extra-links">${item.links.map((link) => createLink({ type: link.type || "globe", label: link.label, href: link.href }).outerHTML).join("")}</div>` : ""}
          </article>
        `).join("")}
      </div>
    `;
  target.append(wrapper);
};

const fillExtraSections = () => {
  const education = portfolio.extraSections.find((section) => section.id === "background");
  const internship = portfolio.extraSections.find((section) => section.id === "internship");
  const languages = portfolio.extraSections.find((section) => section.id === "languages");
  renderExtraSection(education, "#education");
  renderExtraSection(internship, "#internship", 1);
  renderExtraSection(languages, "#languages", 2);
};

const renderLightbox = () => {
  const lightbox = qs("#lightbox");
  const image = qs("#lightboxImage");
  const content = qs(".lightbox-content");
  const thumbs = qs("#lightboxThumbs");
  if (!lightboxState.images.length) {
    lightbox.hidden = true;
    return;
  }
  lightbox.hidden = false;
  const applyOrientation = () => {
    const isPortrait = image.naturalHeight > image.naturalWidth;
    content.classList.toggle("portrait", isPortrait);
    content.classList.toggle("landscape", !isPortrait);
  };
  image.onload = applyOrientation;
  image.src = lightboxState.images[lightboxState.index];
  if (image.complete) applyOrientation();
  thumbs.innerHTML = lightboxState.images.map((src, index) => `<button class="lightbox-thumb ${index === lightboxState.index ? "active" : ""}" type="button" data-lightbox-index="${index}"><img src="${src}" alt="thumbnail ${index + 1}" /></button>`).join("");
  qsAll(".lightbox-thumb").forEach((button) => {
    button.onclick = () => {
      lightboxState.index = Number(button.dataset.lightboxIndex);
      renderLightbox();
    };
  });
};

const openLightbox = (images, index) => {
  if (!images.length) return;
  lightboxState = { images, index };
  renderLightbox();
};

const closeLightbox = () => {
  lightboxState = { images: [], index: 0 };
  renderLightbox();
};

const shiftLightbox = (step) => {
  if (!lightboxState.images.length) return;
  lightboxState.index = (lightboxState.index + step + lightboxState.images.length) % lightboxState.images.length;
  renderLightbox();
};

const setupNavToggle = () => {
  qs("#navToggle").onclick = () => qs("#navLinks").classList.toggle("open");
};

const setupLanguageToggle = () => {
  qs("#languageToggle").onclick = () => {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    render();
  };
};

const setupLightbox = () => {
  qs("#lightboxClose").onclick = closeLightbox;
  qs("#lightboxPrev").onclick = () => shiftLightbox(-1);
  qs("#lightboxNext").onclick = () => shiftLightbox(1);
  qs("#lightbox").onclick = (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  };
  document.addEventListener("keydown", (event) => {
    if (qs("#lightbox").hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") shiftLightbox(currentLanguage === "ar" ? 1 : -1);
    if (event.key === "ArrowRight") shiftLightbox(currentLanguage === "ar" ? -1 : 1);
  });
};

const render = () => {
  setDocumentLanguage();
  fillStaticText();
  fillNavigation();
  fillHero();
  fillAbout();
  fillExperience();
  fillProjects();
  fillExtraSections();
};

setupNavToggle();
setupLanguageToggle();
setupLightbox();
render();
