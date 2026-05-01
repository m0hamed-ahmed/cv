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

const icons = {
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.86-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.91c.85 0 1.7.12 2.49.36 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.48.1 2.74.64.72 1.03 1.64 1.03 2.77 0 3.96-2.33 4.83-4.56 5.09.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" fill="currentColor"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.88 3.3 4.97c0 1.08.87 1.97 1.95 1.97s1.96-.89 1.96-1.97A1.97 1.97 0 0 0 5.25 3ZM20.7 12.82c0-3.45-1.84-5.05-4.29-5.05-1.98 0-2.86 1.09-3.35 1.86V8.5H9.68V20h3.38v-6.17c0-1.63.31-3.2 2.33-3.2 2 0 2.03 1.87 2.03 3.31V20h3.38l-.01-7.18Z" fill="currentColor"/></svg>',
  android:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.46 9h9.08c.8 0 1.46.67 1.46 1.5V17c0 .83-.65 1.5-1.46 1.5H7.46C6.65 18.5 6 17.83 6 17v-6.5C6 9.67 6.65 9 7.46 9Zm1.12-3.77.9.52L8.1 8h1.27l1.3-2.18A6.3 6.3 0 0 1 12 5.7c.46 0 .91.04 1.34.12L14.63 8h1.27l-1.38-2.25.9-.52-.38-.68-.98.57A5.9 5.9 0 0 0 12 4.8c-.73 0-1.42.13-2.06.32l-.98-.57-.38.68ZM10 12a.75.75 0 1 0 .01-1.5A.75.75 0 0 0 10 12Zm4 0a.75.75 0 1 0 .01-1.5A.75.75 0 0 0 14 12Z" fill="currentColor"/></svg>',
  ios:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.43 2c.12 1.38-.43 2.4-1.08 3.16-.66.76-1.75 1.34-2.87 1.25-.15-1.32.47-2.44 1.11-3.15.7-.8 1.9-1.38 2.84-1.26ZM18.5 17.35c-.57 1.32-.84 1.9-1.58 3.07-1.03 1.61-2.49 3.62-4.31 3.63-1.61.01-2.03-1.05-4.22-1.04-2.2.01-2.65 1.06-4.26 1.05-1.82-.02-3.2-1.82-4.23-3.43C-1.9 17.85-.89 11.9 1.76 8.66c1.89-2.31 4.87-3.66 7.67-3.66 2.14 0 3.49 1.17 5.27 1.17 1.72 0 2.76-1.17 5.25-1.17.88 0 3.62.08 5.35 2.58-4.71 2.57-3.95 9.25.2 9.77Z" fill="currentColor"/></svg>',
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.9-.25 7.1 5.28 7.1-5.28H4.9Zm14.6 11V8.38l-6.98 5.19a.9.9 0 0 1-1.04 0L4.5 8.38v9.12h15Z" fill="currentColor"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.5 11.5 0 0 0 3.61.58c.56 0 .96.4.96.96V20c0 .56-.4 1-.96 1C10.52 21 3 13.48 3 4.96 3 4.4 3.44 4 4 4h3.5c.56 0 .96.4.96.96 0 1.26.2 2.47.58 3.61.12.35.03.75-.24 1.02l-2.18 2.2Z" fill="currentColor"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.27-1.64a11.92 11.92 0 0 0 5.8 1.48h.01c6.57 0 11.91-5.34 11.91-11.92 0-3.18-1.24-6.16-3.47-8.44ZM12.08 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.83 9.83 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.98 2.91a9.82 9.82 0 0 1 2.89 6.99c0 5.46-4.44 9.9-9.88 9.9Zm5.43-7.41c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" fill="currentColor"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 9h-3.09a15.6 15.6 0 0 0-1.44-5.03A8.53 8.53 0 0 1 18.93 11ZM12 4.07c.95 1.09 1.92 3.11 2.28 6.93H9.72C10.08 7.18 11.05 5.16 12 4.07ZM4.07 13h3.09c.15 1.8.63 3.53 1.44 5.03A8.53 8.53 0 0 1 4.07 13Zm3.09-2H4.07a8.53 8.53 0 0 1 4.53-5.03A15.6 15.6 0 0 0 7.16 11Zm4.84 8.93c-.95-1.09-1.92-3.11-2.28-6.93h4.56c-.36 3.82-1.33 5.84-2.28 6.93ZM13.4 18.03A15.6 15.6 0 0 0 14.84 13h3.09a8.53 8.53 0 0 1-4.53 5.03Z" fill="currentColor"/></svg>',
  briefcase:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4.75C9 3.78 9.78 3 10.75 3h2.5C14.22 3 15 3.78 15 4.75V6h3.25C19.22 6 20 6.78 20 7.75v8.5c0 .97-.78 1.75-1.75 1.75H5.75A1.75 1.75 0 0 1 4 16.25v-8.5C4 6.78 4.78 6 5.75 6H9V4.75ZM10.5 6h3V4.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25V6Z" fill="currentColor"/></svg>',
  code:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.7 16.6-4.3-4.3L8.7 8l1.1 1.1-3.2 3.2 3.2 3.2-1.1 1.1Zm6.6 0-1.1-1.1 3.2-3.2-3.2-3.2L15.3 8l4.3 4.3-4.3 4.3ZM10.4 20l2.7-16h1.5l-2.7 16h-1.5Z" fill="currentColor"/></svg>',
  education:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm-6 8.24V15c0 1.93 2.69 3.5 6 3.5s6-1.57 6-3.5v-3.76l-6 3-6-3Z" fill="currentColor"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h1.5v2H15V2H16.5v2h1.75C19.22 4 20 4.78 20 5.75v12.5c0 .97-.78 1.75-1.75 1.75H5.75A1.75 1.75 0 0 1 4 18.25V5.75C4 4.78 4.78 4 5.75 4H7V2Zm11.5 7H5.5v9.25c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V9Z" fill="currentColor"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="currentColor"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.72-4.35-9.33-8.28C.9 10.03 1.57 6.4 4.7 4.8c2.11-1.08 4.41-.48 5.8 1.14 1.38-1.62 3.69-2.22 5.79-1.14 3.14 1.6 3.8 5.23 2.04 7.92C18.72 16.65 12 21 12 21Z" fill="currentColor"/></svg>',
  location:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.08 7-12a7 7 0 1 0-14 0c0 5.92 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="currentColor"/></svg>',
  about:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 12 7Zm2 10h-4v-1.5h1.25v-4H10V10h2.75v5.5H14V17Z" fill="currentColor"/></svg>',
  projects:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.75 4h5.5C11.22 4 12 4.78 12 5.75v5.5c0 .97-.78 1.75-1.75 1.75h-5.5A1.75 1.75 0 0 1 3 11.25v-5.5C3 4.78 3.78 4 4.75 4Zm9 0h5.5C20.22 4 21 4.78 21 5.75v5.5c0 .97-.78 1.75-1.75 1.75h-5.5A1.75 1.75 0 0 1 12 11.25v-5.5C12 4.78 12.78 4 13.75 4Zm-9 9h5.5c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75h-5.5A1.75 1.75 0 0 1 3 20.25v-5.5C3 13.78 3.78 13 4.75 13Zm9 0h5.5c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75h-5.5A1.75 1.75 0 0 1 12 20.25v-5.5c0-.97.78-1.75 1.75-1.75Z" fill="currentColor"/></svg>',
  video:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.75 4h8.5C15.22 4 16 4.78 16 5.75v3.58l2.86-1.9c.8-.53 1.89.04 1.89 1v7.14c0 .96-1.09 1.53-1.89 1L16 14.67v3.58c0 .97-.78 1.75-1.75 1.75h-8.5A1.75 1.75 0 0 1 4 18.25V5.75C4 4.78 4.78 4 5.75 4Z" fill="currentColor"/></svg>',
  certificate:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.75 3h10.5C18.22 3 19 3.78 19 4.75v7.46a4.75 4.75 0 1 1-6 7.04l-1 .75-1-.75a4.75 4.75 0 1 1-6-7.04V4.75C5 3.78 5.78 3 6.75 3Zm1.25 3v2h8V6H8Zm0 4v1.21a4.73 4.73 0 0 1 5 7.79 4.73 4.73 0 0 1 5-7.79V10H8Zm4.35 4.15-.85 1.72-1.9.28 1.37 1.34-.32 1.89L12.5 18l1.7.89-.32-1.89 1.37-1.34-1.9-.28-.85-1.72Z" fill="currentColor"/></svg>',
};

const linkIcons = {
  github: "github",
  linkedin: "linkedin",
  android: "android",
  ios: "ios",
  email: "email",
  phone: "phone",
  whatsapp: "whatsapp",
  globe: "globe",
  code: "code",
  briefcase: "briefcase",
  education: "education",
  about: "about",
  projects: "projects",
  video: "video",
  certificate: "certificate",
};

const iconMarkup = (name) =>
  `<span class="icon" aria-hidden="true">${icons[name] || ""}</span>`;

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
  link.innerHTML = `${iconMarkup(iconName)}<span>${item.label}</span>`;
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
  document.title = `${portfolio.personal.name} | ${byLang(portfolio.personal.role)}`;
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
    { label: nav.background, href: "#backgroundSection", type: "education" },
    { label: nav.internship, href: "#internshipSection", type: "briefcase" },
    { label: nav.experience, href: "#experience", type: "briefcase" },
    { label: nav.skills, href: "#about", type: "code" },
    { label: nav.projects, href: "#projects", type: "projects" },
    { label: nav.languages, href: "#languagesSection", type: "globe" },
  ].forEach((item) => navLinks.append(createLink(item)));
};

const fillHero = () => {
  const { personal, socialLinks } = portfolio;
  const profileImage = qs("#profileImage");
  const profileFallback = qs("#profileFallback");

  qs("#heroEyebrow").textContent = "";
  qs("#heroTitle").textContent = personal.name;
  qs("#heroSubtitle").textContent = byLang(personal.title);
  qs("#heroSummary").textContent = byLang(personal.summary);

  if (personal.profileImage) {
    profileImage.src = personal.profileImage;
    profileImage.alt = `${personal.name} portrait`;
    profileImage.hidden = false;
    profileFallback.hidden = true;
  } else {
    profileImage.hidden = true;
    profileFallback.hidden = false;
    profileFallback.textContent = personal.name
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
    const logoMarkup = item.logo ? `<div class="experience-images"><div class="experience-logo"><img src="${item.logo}" alt="${item.company} logo" /></div></div>` : "";
    const linksMarkup = item.links?.length
      ? `<div class="extra-links">${item.links.map((link) => createLink(link).outerHTML).join("")}</div>`
      : "";
    article.innerHTML = `
      <div class="experience-head">
        <div>
          <h3>${iconMarkup("briefcase")}<span>${byLang(item.role || item.position)}</span></h3>
          ${item.companyLine ? `<p class="experience-subline">${byLang(item.companyLine)}</p>` : ""}
        </div>
        <strong>${byLang(item.period)}</strong>
      </div>
      <p>${byLang(item.description)}</p>
      ${linksMarkup}
      ${logoMarkup}
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
  freelance: { en: "Freelance Client Projects", ar: "مشاريع العملاء" },
  personal: { en: "Personal Projects", ar: "المشاريع الشخصية" },
  educational: { en: "Educational Projects", ar: "المشاريع التعليمية" },
};

const fillProjects = () => {
  const projectTabs = clearNode("#projectTabs");
  const projectsList = clearNode("#projectsList");
  const tabs = ["all", "sigma", "freelance", "personal", "educational"];
  tabs.forEach((tab) => {
    const count = tab === "all"
      ? portfolio.projects.length
      : portfolio.projects.filter((project) => (project.group || "freelance") === tab).length;
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
    : portfolio.projects.filter((project) => (project.group || "freelance") === currentProjectTab);
  filteredProjects.forEach((project, index) => {
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
                      <h3>${iconMarkup("education")}<span>${byLang(item.title)}</span></h3>
                      ${item.subtitle ? `<p class="extra-subline">${byLang(item.subtitle)}</p>` : ""}
                    </div>
                    ${item.date ? `<strong>${byLang(item.date)}</strong>` : ""}
                  </div>
                `
                : `<h3>${iconMarkup("education")}<span>${byLang(item.title)}</span></h3>`
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
  renderExtraSection(education, "#backgroundSection");
  renderExtraSection(internship, "#internshipSection", 1);
  renderExtraSection(languages, "#languagesSection", 2);
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
