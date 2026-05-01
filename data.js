window.PORTFOLIO_DATA = {
  defaultLanguage: "en",

  ui: {
    en: {
      brand: "Portfolio",
      nav: {
        skills: "Technical Skills",
        experience: "Work Experience",
        projects: "Projects",
        background: "Education",
        internship: "Internship",
        languages: "Languages",
      },
      sections: {
        aboutTitle: "Technical Skills",
        experienceTitle: "Work Experience",
        projectsTitle: "Projects",
      },
      actions: {
        switchToArabic: "AR",
        switchToEnglish: "EN",
      },
      labels: {
        android: "Android",
        ios: "Apple",
        github: "GitHub",
        linkedin: "LinkedIn",
        video: "Video",
      },
    },
    ar: {
      brand: "السيرة الذاتية",
      nav: {
        skills: "المهارات التقنية",
        experience: "الخبرات العملية",
        projects: "المشاريع",
        background: "التعليم",
        internship: "التدريب",
        languages: "اللغات",
      },
      sections: {
        aboutTitle: "المهارات التقنية",
        experienceTitle: "الخبرات العملية",
        projectsTitle: "المشاريع",
      },
      actions: {
        switchToArabic: "AR",
        switchToEnglish: "EN",
      },
      labels: {
        android: "أندرويد",
        ios: "Apple",
        github: "جيت هب",
        linkedin: "لينكدإن",
        video: "فيديو",
      },
    },
  },

  personal: {
    name: "Mohamed Ahmed Mohamed",
    role: {
      en: "Software Engineer (Flutter Developer)",
      ar: "مهندس برمجيات (مطور Flutter)",
    },
    title: {
      en: "Software Engineer (Flutter Developer)",
      ar: "مهندس برمجيات (مطور Flutter)",
    },
    location: {
      en: "Shubra El Kheima, Qalyubia, Egypt",
      ar: "شبرا الخيمة، القليوبية، مصر",
    },
    summary: {
      en: "Software Engineer with a Computer Science degree and 3 years of experience building Android and iOS applications with Flutter. Focused on high-quality mobile products, clean architecture, real business needs, and continuous learning.",
      ar: "مهندس برمجيات حاصل على بكالوريوس علوم الحاسب ولدي خبرة 3 سنوات في تطوير تطبيقات أندرويد وآيفون باستخدام Flutter، مع اهتمام كبير بجودة المنتج، البنية النظيفة، وتحويل احتياجات العمل إلى تطبيقات قوية وفعالة.",
    },
    profileImage: "assets/images/profile/profile.jpeg",
    personalFacts: [
      {
        icon: "calendar",
        label: { en: "Date of Birth", ar: "تاريخ الميلاد" },
        value: { en: "30 November 1998", ar: "30 نوفمبر 1998" },
      },
      {
        icon: "shield",
        label: { en: "Military Status", ar: "الموقف العسكري" },
        value: { en: "Exemption", ar: "إعفاء" },
      },
      {
        icon: "heart",
        label: { en: "Marital Status", ar: "الحالة الاجتماعية" },
        value: { en: "Married", ar: "متزوج" },
      },
    ],
    stats: [
      { value: "18+", label: { en: "Android Apps", ar: "تطبيقات أندرويد" } },
      { value: "16+", label: { en: "iPhone Apps", ar: "تطبيقات آيفون" } },
    ],
  },

  socialLinks: [
    {
      type: "email",
      label: "Email",
      href: "mailto:mohamed.ahmed50050073@gmail.com",
    },
    {
      type: "phone",
      label: "Phone",
      href: "tel:+201550112656",
    },
    {
      type: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/201550112656",
    },
    {
      type: "android",
      label: "Google Play",
      href: "https://play.google.com/store/apps/developer?id=M0hamed+Ahmed",
    },
    {
      type: "ios",
      label: "App Store",
      href: "https://apps.apple.com/us/developer/mohamed-ahmed/id1835281118",
    },
    { type: "github", label: "GitHub", href: "https://github.com/m0hamed-ahmed" },
    {
      type: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/m0hamed-ahmed/",
    },
    { type: "cv", label: "CV PDF", href: "https://drive.google.com/file/d/1abefkRhH_7qY_9L3QbjkFYTAnmi0zPLp/view?usp=sharing" },
  ],

  skills: [
    {
      title: { en: "Flutter Development", ar: "تطوير Flutter" },
      text: {
        en: "3 years of experience in building cross-platform applications.",
        ar: "خبرة 3 سنوات في بناء تطبيقات متعددة المنصات.",
      },
    },
    {
      title: { en: "Java Development", ar: "تطوير Java" },
      text: {
        en: "Less than a year of experience in Native Android and Desktop applications.",
        ar: "أقل من سنة خبرة في تطبيقات أندرويد الأصلية وتطبيقات الديسكتوب.",
      },
    },
    {
      title: {
        en: "Object-Oriented Programming (OOP)",
        ar: "البرمجة كائنية التوجه (OOP)",
      },
      text: {
        en: "Familiar with design principles.",
        ar: "إلمام جيد بمبادئ التصميم البرمجي.",
      },
    },
    {
      title: { en: "Clean Architecture & MVVM", ar: "Clean Architecture وMVVM" },
      text: {
        en: "Efficient in building scalable and maintainable apps.",
        ar: "كفاءة في بناء تطبيقات قابلة للتوسع وسهلة الصيانة.",
      },
    },
    {
      title: { en: "State Management", ar: "إدارة الحالة" },
      text: {
        en: "Experience with Provider and Bloc (Cubit).",
        ar: "خبرة في استخدام Provider وBloc (Cubit).",
      },
    },
    {
      title: { en: "Local Storage", ar: "التخزين المحلي" },
      text: {
        en: "Experienced in using Shared Preferences and SQLite for data persistence.",
        ar: "خبرة في استخدام Shared Preferences وSQLite لحفظ البيانات محليًا.",
      },
    },
    {
      title: { en: "RESTful APIs", ar: "واجهات RESTful APIs" },
      text: {
        en: "Working with Dio and HTTP packages.",
        ar: "التعامل مع حزم Dio وHTTP.",
      },
    },
    {
      title: { en: "Firebase Services", ar: "خدمات Firebase" },
      text: {
        en: "Authentication, Firestore, Storage, and Cloud Messaging (Push Notifications).",
        ar: "Authentication وFirestore وStorage وCloud Messaging (الإشعارات).",
      },
    },
    {
      title: { en: "Google Services", ar: "خدمات Google" },
      text: {
        en: "Google Maps and Dynamic Links.",
        ar: "Google Maps وDynamic Links.",
      },
    },
    {
      title: { en: "Payment Integration", ar: "ربط بوابات الدفع" },
      text: {
        en: "Experience with various payment gateways.",
        ar: "خبرة في التعامل مع بوابات دفع متنوعة.",
      },
    },
    {
      title: { en: "App Monetization", ar: "الربح من التطبيقات" },
      text: {
        en: "Implementing AdMob for revenue generation.",
        ar: "تطبيق AdMob لتحقيق دخل من التطبيقات.",
      },
    },
    {
      title: { en: "Crash Monitoring", ar: "متابعة الأعطال" },
      text: {
        en: "Firebase Crashlytics for error tracking.",
        ar: "استخدام Firebase Crashlytics لتتبع الأخطاء.",
      },
    },
    {
      title: { en: "Version Control", ar: "إدارة الإصدارات" },
      text: {
        en: "Proficient with Git and GitHub.",
        ar: "إجادة العمل باستخدام Git وGitHub.",
      },
    },
    {
      title: { en: "Deployment & Publishing", ar: "النشر والإطلاق" },
      text: {
        en: "Published 15+ apps on the Play Store.",
        ar: "نشر أكثر من 15 تطبيقًا على Google Play.",
      },
    },
    {
      title: { en: "Postman", ar: "Postman" },
      text: {
        en: "Ability to work with Postman software.",
        ar: "القدرة على العمل باستخدام برنامج Postman.",
      },
    },
    {
      title: {
        en: "Business Requirements",
        ar: "فهم متطلبات العمل",
      },
      text: {
        en: "Ability to understand business requirements and translate them into technical requirements.",
        ar: "القدرة على فهم متطلبات العمل وتحويلها إلى متطلبات تقنية واضحة.",
      },
    },
    {
      title: { en: "Problem Solving", ar: "حل المشكلات" },
      text: {
        en: "Search for solutions and solve problems.",
        ar: "البحث عن الحلول والتعامل مع المشكلات بفعالية.",
      },
    },
  ],

  experience: [
    {
      company: "Sigma Tech Company",
      role: {
        en: "Flutter Developer",
        ar: "Flutter Developer",
      },
      companyLine: {
        en: "Sigma Tech Company (Remotly) Kuwait",
        ar: "Sigma Tech Company (Remotly) Kuwait",
      },
      period: { en: "April 2023 - now", ar: "أبريل 2023 - حتى الآن" },
      logo: "assets/images/experience/sigma-tech.png",
      description: {
        en: "Development, contribution to multiple projects, collaboration with a team, and working with GitHub.",
        ar: "التطوير والمساهمة في عدة مشاريع والتعاون مع فريق والعمل باستخدام GitHub.",
      },
      links: [
        {
          label: "Website",
          href: "https://sigmatech.com.kw/",
          type: "globe",
        },
      ],
    },
    {
      company: "Freelance",
      role: { en: "Freelancer", ar: "Freelancer" },
      companyLine: { en: "Flutter", ar: "Flutter" },
      period: { en: "September 2021 - now", ar: "سبتمبر 2021 - حتى الآن" },
      logo: "",
      description: {
        en: "Built multiple mobile applications using Flutter for real clients, with a focus on delivering practical products tailored to real business needs.",
        ar: "تطوير عدة تطبيقات موبايل باستخدام Flutter لعملاء حقيقيين مع التركيز على تقديم منتجات عملية تناسب احتياجات العمل الفعلية.",
      },
    },
    {
      company: "March Part Company",
      role: {
        en: "Data Entry",
        ar: "Data Entry",
      },
      companyLine: {
        en: "March Part Company 6th of October, Giza",
        ar: "March Part Company 6th of October, Giza",
      },
      period: { en: "September 2020 - December 2020", ar: "سبتمبر 2020 - ديسمبر 2020" },
      logo: "assets/images/experience/march-part.jpeg",
      description: {
        en: "Developed a data loader desktop application with python to upload products in March Part site with one click.",
        ar: "تطوير تطبيق ديسكتوب لتحميل البيانات باستخدام Python لرفع المنتجات على موقع March Part بضغطة واحدة.",
      },
    },
    {
      company: "Freelance",
      role: { en: "Freelancer", ar: "Freelancer" },
      companyLine: { en: "Java", ar: "Java" },
      period: { en: "April 2020 - December 2020", ar: "أبريل 2020 - ديسمبر 2020" },
      logo: "",
      description: {
        en: "Created 4 simple mobile applications and 1 desktop application using Java.",
        ar: "إنشاء 4 تطبيقات موبايل بسيطة وتطبيق ديسكتوب واحد باستخدام Java.",
      },
    },
  ],

  projects: [
    {
      name: "Having",
      group: "freelance",
      category: { en: "Real Estate Platform", ar: "منصة عقارية" },
      description: {
        en: "A real estate platform that allows users to buy, sell, and rent properties.",
        ar: "منصة عقارية متكاملة تتيح للمستخدمين شراء وبيع وتأجير العقارات.",
      },
      logo: "assets/images/projects/having/logo.jpg",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.app.having_market",
        ios: "https://apps.apple.com/us/app/having/id6737735937",
      },
    },
    {
      name: "Food In",
      group: "freelance",
      category: { en: "Food & Beverage", ar: "الأغذية والمشروبات" },
      description: {
        en: "A platform connecting job seekers with companies and supporting recruitment and supply processes.",
        ar: "منصة تربط بين الباحثين عن عمل والشركات وتدعم التوظيف وعمليات التوريد.",
      },
      logo: "assets/images/projects/food-in/logo.png",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.app.food_in",
        ios: "https://apps.apple.com/eg/app/food-in/id6736846972",
      },
    },
    {
      name: "Kilo Mart",
      group: "freelance",
      category: { en: "E-Commerce", ar: "تجارة إلكترونية" },
      description: {
        en: "A connected commerce system for customer shopping, seller management, and delivery operations.",
        ar: "نظام تجارة إلكترونية مترابط يشمل تجربة العميل وإدارة البائعين وعمليات التوصيل.",
      },
      logo: "assets/images/projects/kilo-mart/logo.png",
      gallery: [],
      subApps: [
        {
          name: { en: "Customer", ar: "العميل" },
          links: {
            android: "https://play.google.com/store/apps/details?id=com.app.kilo_mart_customer",
            ios: "https://apps.apple.com/us/app/kilo-mart/id6744124465",
          },
        },
        {
          name: { en: "Provider", ar: "البائع" },
          links: {
            android: "https://play.google.com/store/apps/details?id=com.app.kilo_mart_provider",
            ios: "https://apps.apple.com/us/app/kilo-mart-provider/id6744124614",
          },
        },
        {
          name: { en: "Delivery", ar: "التوصيل" },
          links: {
            android: "https://play.google.com/store/apps/details?id=com.app.kilo_mart_delivery",
            ios: "https://apps.apple.com/us/app/kilo-mart-delivery/id6744123141",
          },
        },
      ],
      links: {},
    },
    {
      name: "Wazfnee",
      group: "freelance",
      category: { en: "Recruitment Platform", ar: "منصة توظيف" },
      description: {
        en: "A recruitment platform connecting employers and job seekers through direct communication.",
        ar: "منصة توظيف تربط بين أصحاب العمل والباحثين عن فرص عمل بشكل مباشر وفعال.",
      },
      logo: "assets/images/projects/wazfnee/logo.jpg",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.app.wazfnee",
        ios: "https://apps.apple.com/us/app/wazfnee/id6475053730",
      },
    },
    {
      name: "Excellence Road Institute",
      group: "freelance",
      category: { en: "EdTech", ar: "التعليم الإلكتروني" },
      description: {
        en: "A Saudi platform specializing in online education and training, offering courses, exam solving, question banks, and teacher-student interaction.",
        ar: "منصة سعودية متخصصة في التعليم والتدريب الإلكتروني، توفر الدورات والاختبارات وبنك الأسئلة والتفاعل بين المعلم والطالب.",
      },
      logo: "assets/images/projects/excellence-road/logo.jpeg",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.app.excellence_road_institute",
        ios: "https://apps.apple.com/us/app/%D9%85%D8%B9%D9%87%D8%AF-%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%AA%D9%85%D9%8A%D8%B2/id6741032849",
      },
    },
    {
      name: "El Mister",
      group: "freelance",
      category: { en: "Education Management", ar: "إدارة تعليمية" },
      description: {
        en: "A complete educational platform covering teacher operations and student academic follow-up within one connected system.",
        ar: "منصة تعليمية متكاملة تجمع بين إدارة المعلمين ومتابعة الطلاب الأكاديمية داخل نظام واحد مترابط.",
      },
      logo: "assets/images/projects/el-mister/logo.png",
      gallery: [],
      subApps: [
        {
          name: { en: "Teachers", ar: "المعلمين" },
          links: {
            android: "https://play.google.com/store/apps/details?id=com.app.elmister",
            ios: "https://apps.apple.com/us/app/elmister/id6751473047",
          },
        },
        {
          name: { en: "Students", ar: "الطلاب" },
          links: {
            android: "https://play.google.com/store/apps/details?id=com.app.elmister_students",
            ios: "https://apps.apple.com/us/app/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B1-%D9%84%D9%84%D8%B7%D9%84%D8%A7%D8%A8/id6751475463",
          },
        },
      ],
      links: {},
    },
    {
      name: "Bawabeti",
      group: "freelance",
      category: { en: "Client Platform", ar: "منصة خدمية" },
      description: {
        en: "A client-facing mobile app published on the App Store.",
        ar: "تطبيق خدمي موجه للعملاء ومنشور على App Store.",
      },
      logo: "assets/images/projects/bawabeti/logo.jpeg",
      gallery: [],
      links: {
        ios: "https://apps.apple.com/us/app/%D8%A8%D9%88%D8%A7%D8%A8%D8%AA%D9%8A/id6757091929",
      },
    },
    {
      name: "Wellaura",
      group: "freelance",
      category: { en: "Lifestyle App", ar: "تطبيق لايف ستايل" },
      description: {
        en: "A lifestyle mobile application published on the App Store.",
        ar: "تطبيق لايف ستايل منشور على App Store.",
      },
      logo: "assets/images/projects/wellaura/logo.png",
      gallery: [],
      links: {
        ios: "https://apps.apple.com/us/app/wellaura/id6755082827",
      },
    },
    {
      name: "Ghaith",
      group: "sigma",
      category: { en: "Service Platform", ar: "منصة خدمية" },
      description: {
        en: "A water delivery app with flexible scheduling, subscription management, live tracking, and secure payments.",
        ar: "تطبيق لتوصيل المياه يوفّر جدولة مرنة وإدارة الاشتراكات وتتبع الطلبات والدفع الآمن.",
      },
      logo: "assets/images/projects/ghaith/logo.jpg",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.app.ghaith",
        ios: "https://apps.apple.com/us/app/%D8%BA%D9%8A%D8%AB-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA/id6759941948",
      },
    },
    {
      name: "Akle",
      group: "sigma",
      category: { en: "Food App", ar: "تطبيق طعام" },
      description: {
        en: "A nutrition app that analyzes meal photos, estimates calories and protein, tracks weekly weight, and lets users buy related products.",
        ar: "تطبيق تغذية يحلل صور الوجبات ويقدّر السعرات والبروتين، ويتابع الوزن أسبوعيًا، ويتيح شراء المنتجات المرتبطة بذلك.",
      },
      logo: "assets/images/projects/akle/logo.png",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.app.akle",
        ios: "https://apps.apple.com/us/app/akle/id6749232667",
      },
    },
    {
      name: "Mubarah",
      group: "sigma",
      category: { en: "Sports App", ar: "تطبيق رياضي" },
      description: {
        en: "A social sports app for organizing matches, joining teams, participating in events, and connecting with other players.",
        ar: "منصة اجتماعية رياضية لتنظيم المباريات وإنشاء الفرق والانضمام للفعاليات والتواصل مع اللاعبين.",
      },
      logo: "assets/images/projects/mubarah/logo.jpg",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.app.mubarah",
        ios: "https://apps.apple.com/us/app/%D9%85%D8%A8%D8%A7%D8%B1%D8%A7%D8%A9/id6753926670",
      },
    },
    {
      name: "White Silk",
      group: "sigma",
      category: { en: "Lifestyle Brand", ar: "علامة لايف ستايل" },
      description: {
        en: "A laundry service app for pickup, delivery, and order management with a convenient digital experience.",
        ar: "تطبيق لخدمات الغسيل يوفّر الاستلام والتوصيل وإدارة الطلبات ضمن تجربة رقمية مريحة.",
      },
      logo: "assets/images/projects/white-silk/logo.png",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.q8intouch.whitesilk",
        ios: "https://apps.apple.com/us/app/%D9%88%D8%A7%D9%8A%D8%AA-%D8%B3%D9%8A%D9%84%D9%83/id1534151117",
      },
    },
    {
      name: "4rents",
      group: "sigma",
      category: { en: "Rental Platform", ar: "منصة تأجير" },
      description: {
        en: "An app for managing and tracking real estate unit operations, viewing invoices, and paying rent easily.",
        ar: "تطبيق لإدارة وتتبع عمليات الوحدة العقارية، مع عرض الفواتير ومشاركتها وتسهيل دفع الإيجار بسهولة.",
      },
      logo: "assets/images/projects/4rents/logo.png",
      gallery: [],
      links: {},
    },
    {
      name: "Ebhar",
      group: "freelance",
      category: { en: "Child Assessment", ar: "تقييم مهارات الأطفال" },
      description: {
        en: "An app for assessing children's skills and cognitive abilities, providing intelligence analytics, recommendations, and certified evaluation reports.",
        ar: "تطبيق لتقييم مهارات الأطفال وقدراتهم المعرفية مع تحليلات دقيقة وتوصيات وتقارير تقييم معتمدة.",
      },
      logo: "assets/images/projects/ebhar/logo.png",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.ebhar.ebhar_games",
        ios: "https://apps.apple.com/us/app/%D8%A7%D8%A8%D9%87%D8%A7%D8%B1/id6757565978",
        linkedin: "https://www.linkedin.com/posts/m0hamed-ahmed_i-just-finished-from-ebhar-project-i-was-activity-6949514317708820480-eV0x?utm_source=share%26utm_medium=member_desktop",
      },
    },
    {
      name: "Sevati",
      group: "freelance",
      category: { en: "Social Platform", ar: "منصة اجتماعية" },
      description: {
        en: "A social application for posts, interactions, and instant messaging.",
        ar: "تطبيق اجتماعي يتيح المنشورات والتفاعل عليها والمراسلة الفورية.",
      },
      logo: "",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.app.sevati",
      },
    },
    {
      name: "Fahem",
      group: "freelance",
      category: { en: "Professional Services", ar: "خدمات مهنية" },
      description: {
        en: "A service platform connecting users and business providers across legal, accounting, and public relations workflows.",
        ar: "منصة خدمية تربط المستخدمين ومقدمي الخدمات في مجالات القانون والمحاسبة والعلاقات العامة داخل تجربة واحدة.",
      },
      logo: "assets/images/projects/fahem/logo.png",
      gallery: [],
      subApps: [
        {
          name: { en: "Clients", ar: "العملاء" },
          links: {},
        },
        {
          name: { en: "Business", ar: "مقدمي الخدمة" },
          links: {},
        },
      ],
      links: {},
    },
    {
      name: "Sweft",
      group: "freelance",
      category: { en: "Transportation", ar: "النقل" },
      description: {
        en: "A transportation platform built for both passengers and drivers with ride requests, tracking, and trip management.",
        ar: "منصة نقل تخدم الركاب والسائقين مع إدارة الطلبات وتتبع الرحلات وتنظيم التشغيل.",
      },
      logo: "",
      gallery: [],
      subApps: [
        {
          name: { en: "Passengers", ar: "الركاب" },
          links: {
            android: "https://play.google.com/store/apps/details?id=com.app.eagle_users",
          },
        },
        {
          name: { en: "Drivers", ar: "السائقين" },
          links: {},
        },
      ],
      links: {},
    },
    {
      name: "LoLo Video",
      group: "freelance",
      category: { en: "Transportation Platform", ar: "منصة نقل" },
      description: {
        en: "A transportation platform connecting users with private cars, scooters, and taxis, with tracking, sharing, and driver earnings management.",
        ar: "منصة نقل تربط المستخدمين بالسيارات الخاصة والسكوترات والتاكسي مع التتبع والمشاركة وإدارة أرباح السائقين.",
      },
      logo: "",
      gallery: [],
      links: {},
    },
    {
      name: "Kids Games",
      group: "personal",
      category: { en: "Personal Project", ar: "مشروع شخصي" },
      description: {
        en: "A personal game project focused on fun and interactive child-friendly gameplay.",
        ar: "مشروع ألعاب شخصي يركز على تجربة ممتعة وتفاعلية مناسبة للأطفال.",
      },
      logo: "",
      gallery: [],
      links: {
        video: "https://drive.google.com/file/d/1n7JEuVuXyaIaaoe4lJfO8w3n342yyPu-/view",
      },
    },
    {
      name: "Write Words",
      group: "educational",
      category: { en: "Educational Project", ar: "مشروع تعليمي" },
      description: {
        en: "An educational project designed to support writing practice and learning activities.",
        ar: "مشروع تعليمي لدعم التدريب على الكتابة والأنشطة التعليمية.",
      },
      logo: "",
      gallery: [],
      links: {
        video: "https://drive.google.com/file/d/1GeeZhAPfM9y7Q7y-SFXOSrzLcr4r92D1/view",
      },
    },
    {
      name: "Memory Test",
      group: "personal",
      category: { en: "Personal Project", ar: "مشروع شخصي" },
      description: {
        en: "A memory challenge app that tests user focus and recall speed.",
        ar: "تطبيق لاختبار الذاكرة والتركيز وسرعة التذكر.",
      },
      logo: "",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.test.youriq",
        video: "https://drive.google.com/file/d/1bfeKEtUY0A4rlJitDp-YgRF8F9_ONJic/view",
      },
    },
    {
      name: "IQ Test",
      group: "personal",
      category: { en: "Personal Project", ar: "مشروع شخصي" },
      description: {
        en: "A personal project centered around intelligence and test-based interaction.",
        ar: "مشروع شخصي يركز على اختبارات الذكاء والتفاعل القائم على الأسئلة.",
      },
      logo: "",
      gallery: [],
      links: {
        video: "https://drive.google.com/file/d/1MpT7w-vjx030ygbXvQ5-2ftLSsrLg0wr/view",
      },
    },
    {
      name: "XO with Friend",
      group: "personal",
      category: { en: "Personal Project", ar: "مشروع شخصي" },
      description: {
        en: "A multiplayer XO game that lets users play with friends online.",
        ar: "لعبة XO متعددة اللاعبين تتيح للمستخدمين اللعب مع الأصدقاء عبر الإنترنت.",
      },
      logo: "",
      gallery: [],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.xo.online",
        video: "https://drive.google.com/file/d/1ZFH34NsBBpFiu7XI_-NOXVOo3FuJlqIN/view",
      },
    },
    {
      name: "Age Calculator",
      group: "personal",
      category: { en: "Utility App", ar: "تطبيق خدمي" },
      description: {
        en: "A simple utility app for calculating age quickly and accurately.",
        ar: "تطبيق خدمي بسيط لحساب العمر بسرعة ودقة.",
      },
      logo: "",
      gallery: [],
      links: {
        video: "https://drive.google.com/file/d/1CcIxwFKE3Z3rGHeA86mLy4Py6abuz-eM/view",
      },
    },
    {
      name: "IQ Science",
      group: "personal",
      category: { en: "Personal Project", ar: "مشروع شخصي" },
      description: {
        en: "An educational and science-based quiz style project.",
        ar: "مشروع تعليمي يعتمد على أسلوب الاختبارات العلمية والمعرفية.",
      },
      logo: "",
      gallery: [],
      links: {
        video: "https://drive.google.com/file/d/1HXg7AQf0RLCetlQdrUquwiLu3E3kh6nS/view",
      },
    },
    {
      name: "Hospital System",
      group: "personal",
      category: { en: "Desktop Project", ar: "مشروع ديسكتوب" },
      description: {
        en: "A software project focused on hospital workflow and system operations.",
        ar: "مشروع برمجي يركز على إدارة سير العمل والعمليات داخل النظام الطبي.",
      },
      logo: "",
      gallery: [],
      links: {
        video: "https://drive.google.com/file/d/1wnLhnVbfIR8eo0zPv8cfrk0UQ7dUNiXg/view",
      },
    },
    {
      name: "La Vie",
      group: "educational",
      category: { en: "Educational Project", ar: "مشروع تعليمي" },
      description: {
        en: "An educational Flutter project built to practice structured app architecture and API integration.",
        ar: "مشروع Flutter تعليمي للتدرب على هيكلة التطبيقات وربط الـ APIs.",
      },
      logo: "",
      gallery: [],
      links: {
        github: "https://github.com/m0hamed-ahmed/la_vie",
        video: "https://drive.google.com/file/d/1OeU25Cbm0qAM_b3a6gy_1P79hgJvoplo/view",
      },
    },
    {
      name: "Weather App",
      group: "educational",
      category: { en: "Educational Project", ar: "مشروع تعليمي" },
      description: {
        en: "A weather tracking app built as an educational project using Flutter.",
        ar: "تطبيق لمتابعة الطقس تم تطويره كمشروع تعليمي باستخدام Flutter.",
      },
      logo: "",
      gallery: [],
      links: {
        github: "https://github.com/m0hamed-ahmed/weather_app",
        video: "https://drive.google.com/file/d/1IRSY-oodet7XT0yDgQssxs-YY8V-Q57X/view",
      },
    },
    {
      name: "TO-Do App",
      group: "educational",
      category: { en: "Educational Project", ar: "مشروع تعليمي" },
      description: {
        en: "A task management educational app focused on CRUD flows and local app structure.",
        ar: "تطبيق تعليمي لإدارة المهام يركز على عمليات CRUD وبنية التطبيق المحلية.",
      },
      logo: "",
      gallery: [],
      links: {
        github: "https://github.com/m0hamed-ahmed/todo_app",
        video: "https://drive.google.com/file/d/10XIQXettP4jrrEik4cpfH72FIPp-iTI-/view",
      },
    },
    {
      name: "News App",
      group: "educational",
      category: { en: "Educational Project", ar: "مشروع تعليمي" },
      description: {
        en: "A Flutter news app built to practice API consumption and presentation patterns.",
        ar: "تطبيق أخبار باستخدام Flutter للتدرب على استهلاك الـ APIs وأنماط العرض.",
      },
      logo: "",
      gallery: [],
      links: {
        github: "https://github.com/m0hamed-ahmed/news_app",
        video: "https://drive.google.com/file/d/1GouWUyctLFSdCggizGny9wCyjPls3yVJ/view",
      },
    },
  ],

  extraSections: [
    {
      id: "background",
      title: { en: "Education", ar: "التعليم" },
      items: [
        {
          title: {
            en: "Bachelor's Degree in Computer Science",
            ar: "بكالوريوس علوم الحاسب",
          },
          subtitle: {
            en: "Faculty of Science, Ain Shams University.",
            ar: "كلية العلوم، جامعة عين شمس.",
          },
          date: {
            en: "September 2017 - June 2022.",
            ar: "من سبتمبر 2017 إلى يونيو 2022.",
          },
          text: {
            en: "",
            ar: "",
          },
          images: [
            "assets/images/education/ain-shams.png",
            "assets/images/education/faculty-of-science.jpeg",
          ],
        },
        {
          title: {
            en: "Graduation Project",
            ar: "مشروع التخرج",
          },
          text: {
            en: "Real-Time Face Recognition System.",
            ar: "نظام التعرف على الوجوه في الوقت الحقيقي.",
          },
          bullets: {
            en: [
              "Project Idea: Identify authorized people through camera recognition.",
              "Used Technologies: Python, OpenCV, Dlib Library, TensorFlow, MySQL.",
              "My Role: Create a database and deal with CRUD operations using Python language.",
            ],
            ar: [
              "فكرة المشروع: التعرف على الأشخاص المصرح لهم من خلال الكاميرات.",
              "التقنيات المستخدمة: Python وOpenCV وDlib Library وTensorFlow وMySQL.",
              "دوري: إنشاء قاعدة البيانات والتعامل مع عمليات CRUD باستخدام لغة Python.",
            ],
          },
          links: [
            {
              label: "GitHub",
              href: "https://github.com/m0hamed-ahmed/Realtime-Face-Recognition-System--DYMOO",
              type: "github",
            },
            {
              label: "Video",
              href: "https://drive.google.com/file/d/1qGMPIqTstFeXVmJN7jbHHfH4zSz1L_Vg/view",
              type: "video",
            },
          ],
        },
      ],
    },
    {
      id: "internship",
      title: { en: "Internship", ar: "التدريب" },
      items: [
        {
          title: {
            en: "Flutter Hackathon",
            ar: "Flutter Hackathon",
          },
          subtitle: {
            en: "Orange Digital Center Egypt",
            ar: "Orange Digital Center Egypt",
          },
          date: {
            en: "August 2022.",
            ar: "أغسطس 2022.",
          },
          text: {
            en: "",
            ar: "",
          },
        },
        {
          title: {
            en: "Flutter Internship",
            ar: "Flutter Internship",
          },
          subtitle: {
            en: "Algoriza Company",
            ar: "Algoriza Company",
          },
          date: {
            en: "June 2022 - September 2022.",
            ar: "من يونيو 2022 إلى سبتمبر 2022.",
          },
          text: {
            en: "",
            ar: "",
          },
          links: [
            {
              label: "Certificate",
              href: "https://drive.google.com/file/d/1Br1wg3QfhQ3O4LQaWauRDFeC5F692HXq/view?usp=sharing",
              type: "certificate",
            },
          ],
        },
      ],
    },
    {
      id: "languages",
      title: { en: "Languages", ar: "اللغات" },
      items: [
        {
          title: { en: "Arabic", ar: "العربية" },
          text: {
            en: "Excellent (Mother Tongue).",
            ar: "ممتازة (اللغة الأم).",
          },
        },
        {
          title: { en: "English", ar: "الإنجليزية" },
          text: {
            en: "Good.",
            ar: "جيدة.",
          },
        },
      ],
    },
  ],
};
