export const personalInfo = {
  name: "Alicia DIACOMA",
  title: "Développeuse web frontend",
  tagline: "Hey, moi c’est Alicia !",
  age: 21,
  location: "Païta, Tribu de Naniouni",
  description: "Je m’appelle Alicia Diacoma, fraîchement entrée dans la vingtaine et sur le point de boucler ma troisième année de Bachelor Universitaire de Technologie des Métiers du Multimédia et de l’Internet, avec une spécialisation en développement web.",
  traits: ["Autonome", "Ponctuelle", "Empathique", "Sociable"],
  status: "Étudiante en 3ème année de BUT MMI",
  bio: "Une petite kanak du Pacifique, passionnée de développement front-end et toujours partante pour un défi créatif. Du simple site vitrine à l’univers immersif de la réalité virtuelle, j’aime explorer toutes les facettes du web moderne — là où design, code et curiosité se rencontrent.",
  bioabout: "Curieuse de nature, j’aime explorer, apprendre et toucher à tout — du code à la création, en passant par tout ce qui éveille ma créativité. Découvrir, tester, comprendre, puis créer : c’est ce qui me motive chaque jour.\n\nDéterminée et passionnée, je poursuis mes objectifs avec enthousiasme… et toujours le sourire 😁 "
};

export const contact = {
  phone: "+687 82.90.51",
  email: "aliciadiacoma29@gmail.com",
  linkedin: "Alicia DIACOMA",
  linkedinUrl: "https://www.linkedin.com/in/alicia-diacoma-84a26b270/", 
  github: "adkma29", 
  githubUrl: "https://github.com/adkma29" 
};

export const skills = {
  languages: [
    { name: "HTML5", level: 90, icon: "🌐" },
    { name: "CSS3", level: 85, icon: "🎨" },
    { name: "JavaScript", level: 75, icon: "⚡" },
    { name: "React", level: 70, icon: "⚛️" },
    { name: "PHP", level: 45, icon: "🐘" },
    { name: "Angular", level: 60, icon: "🔺" },
    { name: "Wordpress", level: 60, icon: "🧩" },
    { name: "SQL", level: 80, icon: "🗄️" }
  ],
  tools: [
    { name: "VS Code", icon: "🤖" },
    { name: "Git", icon: "📦" },
    { name: "Figma", icon: "📐" },
    { name: "Blender", icon: "🧊" },
    { name: "Unity", icon: "🕹️" },
    { name: "Adobe Suite", icon: "🖼️" },
    { name: "Canva", icon: "🎨" },
    { name: "GitLab", icon: "🦊" }
  ]
};

export const education = [
  {
    id: 1,
    period: "2023 - 2025",
    school: "Université de la Nouvelle-Calédonie",
    degree: "Bachelor Universitaire de Technologie des Métiers du Multimédia et de l'Internet (BUT MMI)",
    specialization: "Développement web",
    description: "Compétences : développement web, création graphique, réalisation audiovisuelle, stratégie et techniques de communication • Certifiée PIX",
    status: "En cours - 3ème année en alternance chez Skazy"
  },
  {
    id: 2,
    period: "2020 - 2022",
    school: "Lycée du Grand Nouméa",
    degree: "Baccalauréat Général",
    specialization: "Spécialités NSI & LLCA",
    description: "Numérique et Sciences de l'Informatique et Langue, Littérature et Culture de l'Antiquité • Certifiée PIX",
    status: "Mention Assez Bien"
  },
  {
    id: 3,
    period: "février 2022",
    school: "Base Aérienne 186 Lieutenant Paul Klein",
    degree: "PMI PDN",
    specialization: "Défense Nationale - Armée de l'Air",
    description: "Brevet de participation et de réussite à la Période Militaire Initiale de Perfectionnement à la Défense Nationale",
    status: "Mention Bien"
  }
];

export const experiences = [
  {
    id: 1,
    period: "Depuis Avril 2025",
    role: "Développeuse Web",
    company: "Skazy",
    logo: "/logo-entreprise/skazy.png",
    type: "Alternance 3ème année",
    location: "Nouméa, Nouvelle-Calédonie",
    description: "Développement d'applications web en conditions réelles, travail en équipe sur des projets clients",
    tasks: [
      "Développement front-end et un peu de back-end",
      "Maintenance et optimisation de produit tel qu'Optimal RH",
      "Travail collaboratif en équipe",
      "Participation à des réunions agiles",
      "Refonte graphique d'application Optimal Fleet"
    ],
    current: true
  },
  {
    id: 2,
    period: "Septembre - Novembre 2024",
    role: "Développeuse Web",
    company: "Wel'Com",
    logo: "/logo-entreprise/welcom.png",
    type: "Stage de 2ème année - 2 mois",
    location: "Nouméa, Nouvelle-Calédonie",
    description: "Création et intégration de contenu web, maquettage de sites et accompagnement client",
    tasks: [
      "Création d'un site web WordPress pour l'entreprise",
      "Conception de maquettes de sites web et refonte",
      "Création et intégration de contenu",
      "Accompagnement aux rendez-vous clients"
    ],
    current: false
  },
  {
    id: 3,
    period: "Novembre - Décembre 2023",
    role: "Infographiste",
    company: "LIRE - UNC",
    logo: "/logo-entreprise/lire.png",
    type: "Stage de 1ère année - 1 mois",
    location: "Nouvelle-Calédonie",
    description: "Vulgarisation scientifique et création graphique pour rendre les recherches accessibles au grand public",
    tasks: [
      "Vulgarisation des recherches des doctorants sous forme d'infographies",
      "Création de pictogrammes personnalisés",
      "Design graphique pour la communication scientifique",
      "Adaptation de contenus complexes pour tout public"
    ],
    current: false
  }
];

export const projects = [
  {
    id: 1,
    title: "Avengers Alicia - Système de Gestion Culturelle",
    subtitle: "Application Symfony multilingue de gestion de bibliothèque et collections",
    description: "Application web complète développée avec Symfony dans le cadre du BUT MMI 3. Elle propose un système de gestion multi-entités (bibliothèque, marque-pages, collections naturelles) avec une architecture MVC robuste. L'application intègre un système d'internationalisation FR/EN avec URLs localisées et utilise Doctrine ORM pour gérer les relations complexes entre entités.",
    technologies: ["Symfony 7.2", "PHP 8.2", "Doctrine ORM", "Twig", "MySQL", "Symfony Translation", "Composer"],
    features: [
      "Gestion complète de bibliothèque avec CRUD livres/auteurs et relations Doctrine",
      "Système de marque-pages personnalisables avec mots-clés",
      "Internationalisation FR/EN avec basculement automatique et routes localisées",
      "Requêtes avancées : filtrage par lettre, recherche par nombre de livres",
      "Formulaires Symfony typés avec validation et messages flash traduits"
    ],
    image: "/projects/avengers-alicia.png",
    demoUrl: null,
    githubUrl: "https://github.com/adkma29/Symfony-dans-tous-ses-tats.git",
    category: "Développement Web",
    year: "2024",
    completed: true
  },
  {
    id: 2,
    title: "7 Wonders 3D",
    subtitle: "Un globe pour voyager à travers les merveilles du monde",
    description: "Application interactive 3D permettant de découvrir les merveilles du monde, d'hier à aujourd'hui, à travers un globe terrestre navigable.",
    technologies: ["Three.js", "JavaScript", "WebGL", "HTML5", "CSS3"],
    features: [
      "Navigation 3D interactive",
      "Visualisation des merveilles des différentes époques",
      "Informations contextuelles",
      "Animations fluides"
    ],
    image: "/projects/7wonders3D.png",
    demoUrl: "https://7wonders3d2025.netlify.app/",
    githubUrl: "https://github.com/adkma29/7wonders3d",
    category: "3D/WebGL",
    year: "2025"
  },
  {
    id: 3,
    title: "3d-Scene-React-Three",
    subtitle: "Scène 3D interactive avec React Three Fiber",
    description: "Application React permettant d'afficher et de manipuler des modèles 3D dans le navigateur grâce à Three.js et React Three Fiber.",
    technologies: ["React", "React Three Fiber", "Three.js"],
    features: [
      "Affichage de modèles 3D",
      "Navigation interactive",
      "Interface React moderne"
    ],
    image: "/projects/scene3d.png",
    demoUrl: "https://mascene3doff.netlify.app/",
    githubUrl: "https://github.com/adkma29/3d-Scene-React-Three.git",
    category: "3D/React",
    year: "2025"
  },
  {
    id: 4,
    title: "Convertisseur de Devises XPF",
    subtitle: "Conversion en temps réel du Franc Pacifique vers 12 devises internationales",
    description: "Application Vue.js permettant de convertir instantanément des montants en Francs Pacifiques (XPF) vers 12 devises internationales (Dollar australien, néo-zélandais, fidjien, Baht thaïlandais, Vatu...). L'application récupère les taux de change en temps réel via l'API ExchangeRate-API et se met à jour automatiquement toutes les heures.",
    technologies: ["Vue.js 3", "Vue Router", "Vue CLI", "ExchangeRate-API", "FlagCDN", "CSS3"],
    features: [
      "Conversion en temps réel de XPF vers 12 devises internationales",
      "Saisie dynamique du montant avec calcul instantané",
      "Affichage des drapeaux de pays pour chaque devise",
      "Mise à jour automatique des taux de change toutes les heures",
      "Interface responsive avec design moderne",
      "Gestion d'erreurs lors de la récupération des données API"
    ],
    image: "/projects/convertisseurdevise.png",
    demoUrl: "https://convertdevisenc.netlify.app/",
    githubUrl: "https://github.com/adkma29/project-vue-diacoma-alicia",
    category: "Web/Vue.js",
    year: "2025"
  },
  {
    id: 5,
    title: "Question pour un Champion - VR",
    subtitle: "Un quizz en réalité virtuelle sur l'IUT de la Nouvelle-Calédonie",
    description: "Jeu quiz VR développé avec Unity pour Meta Quest 2. Le projet intègre une connexion à une base de données MySQL pour récupérer les questions dynamiquement et sauvegarder les scores. Utilisation du XR Interaction Toolkit pour les interactions VR (pointeur laser, boutons 3D), clavier virtuel Oculus pour la saisie, et assets 3D personnalisés créés sous Blender.",
    technologies: ["Unity 2022.3", "C#", "XR Interaction Toolkit", "Meta Quest 2", "MySQL", "PHP API", "Blender"],
    features: [
      "Environnement VR immersif avec suivi tête/mains",
      "Interactions via pointeur laser et boutons 3D animés",
      "Connexion base de données MySQL via API PHP",
      "Questions dynamiques sur le thème de l'IUT",
      "Système de score avec sauvegarde serveur",
      "Clavier virtuel Oculus intégré",
      "Assets 3D personnalisés (Blender)"
    ],
    image: "/projects/qp1c.png",
    demoUrl: null,
    githubUrl: null,
    category: "VR/Gaming",
    year: "2025",
    completed: true
  },
  {
    id: 6,
    title: "Akuma no Mi Store",
    subtitle: "Boutique de fruits du démon",
    description: "Site e-commerce fictif inspiré de l'univers One Piece, permettant d'acheter des fruits du démon avec leurs pouvoirs uniques.",
    technologies: ["React", "CSS3", "JavaScript", "API"],
    features: [
      "Catalogue de produits",
      "Fiches détaillées des fruits",
      "Panier d'achat",
      "Design inspiré de One Piece"
    ],
    image: "/projects/akmstore.png",
    demoUrl: null,
    githubUrl: null,
    category: "Web/E-commerce",
    year: "2024",
    completed: true
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: contact.linkedinUrl,
    icon: "linkedin",
    color: "#0077B5"
  },
  {
    name: "GitHub",
    url: contact.githubUrl,
    icon: "github",
    color: "#181717"
  },
  {
    name: "Email",
    url: `mailto:${contact.email}`,
    icon: "email",
    color: "#EA4335"
  },
  {
    name: "Phone",
    url: `tel:${contact.phone}`,
    icon: "phone",
    color: "#25D366"
  }
];

export const ctaButtons = {
  home: {
    primary: "Découvrez mon parcours",
    secondary: "Voir mes projets"
  },
  about: {
    downloadCV: "Télécharger mon CV",
    contact: "Me contacter"
  },
  projects: {
    viewDemo: "Voir la démo",
    viewCode: "Voir le code",
    learnMore: "En savoir plus"
  }
};

export const siteConfig = {
  title: "Portfolio - Alicia DIACOMA",
  description: "Portfolio de Alicia DIACOMA, développeuse web frontend spécialisée en React",
  keywords: "développeuse web, frontend, React, JavaScript, portfolio, Nouvelle-Calédonie",
  author: "Alicia DIACOMA",
  siteUrl: "https://alicia-diacoma.dev",
  image: "/og-image.jpg",
  theme: {
    primary: "#8B5CF6",
    secondary: "#EC4899",
    dark: "#1F2937",
    light: "#F9FAFB",
    accent: "#10B981"
  }
};