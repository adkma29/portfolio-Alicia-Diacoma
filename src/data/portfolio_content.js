// 📁 src/data/content.js
// Toutes les données de ton portfolio centralisées ici !

export const personalInfo = {
  name: "Alicia DIACOMA",
  title: "Développeuse web frontend",
  tagline: "Hey, moi c’est Alicia !",
  age: 21,
  location: "Païta, Tribu de Naniouni",
  description: "Je m’appelle Alicia Diacoma, fraîchement entrée dans la vingtaine et sur le point de boucler ma troisième année de Bachelor Universitaire de Technologie des Métiers du Multimédia et de l’Internet, avec une spécialisation en développement web.",
  traits: ["Autonome", "Ponctuelle", "Empathie", "Sociable"],
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
  ],
  softSkills: [
    "Travail en équipe",
    "Créativité",
    "Résolution de problèmes",
    "Communication",
    "Gestion de projet",
    "Apprentissage continu"
  ]
};

export const education = [
  {
    id: 1,
    period: "2023 - 2025",
    school: "Université de la Nouvelle-Calédonie",
    degree: "BUT MMI",
    specialization: "Parcours Développement Web",
    description: "Formation complète en multimédia et internet avec spécialisation en développement front-end",
    status: "En cours - 3ème année en alternance chez Skazy"
  },
  {
    id: 2,
    period: "2020 - 2022",
    school: "Lycée du Grand Nouméa",
    degree: "Baccalauréat Général",
    specialization: "NSI & LLCA",
    description: "Spécialisée en Numérique et Science de l'Informatique & Littérature, Langues et Cultures de l'Antiquité",
    status: "Obtenu avec mention Assez Bien"
  }
];

export const experiences = [
  {
    id: 1,
    period: "Depuis Avril 2025",
    role: "Développeuse Web",
    company: "Skazy", // À compléter avec le nom
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
    company: "Wel'Com", // À compléter
    type: "Stage de 2ème année",
    location: "Nouméa, Nouvelle-Calédonie",
    description: "Développement web et découverte du monde professionnel du développement",
    tasks: [
      "Création de pages web responsive",
      "Intégration HTML/CSS/JS",
      "Tests et débogage"
    ],
    current: false
  },
  {
    id: 3,
    period: "Novembre - Décembre 2023",
    role: "Infographiste",
    company: "Laboratoire interdisciplinaire de recherche en éducation (LIRE) de l'Université de NC", // À compléter
    type: "Stage de 1ère année",
    location: "Nouvelle-Calédonie",
    description: "Création graphique et découverte du design web",
    tasks: [
      "Création de visuels",
      "Retouche d'images",
      "Maquettage web"
    ],
    current: false
  }
];

export const projects = [
  {
    id: 1,
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
    image: "/projects/7wonders.jpg", // À ajouter dans /public/projects/
    demoUrl: "", // Si disponible
    githubUrl: "", // Si disponible
    category: "3D/WebGL",
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "Question pour un Champion - VR",
    subtitle: "Un quiz en réalité virtuelle",
    description: "Quiz interactif façon Questions pour un champion, sur le thème de l'IUT, développé en réalité virtuelle pour une expérience immersive.",
    technologies: ["Unity", "C#", "VR SDK", "3D Modeling"],
    features: [
      "Environnement VR immersif",
      "Questions thématiques IUT",
      "Système de score",
      "Interaction gestuelle"
    ],
    image: "/projects/qpuc-vr.jpg", // À ajouter
    demoUrl: "",
    githubUrl: "",
    category: "VR/Gaming",
    year: "2024",
    featured: true
  },
  {
    id: 3,
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
    image: "/projects/akuma.jpg", // À ajouter
    demoUrl: "",
    githubUrl: "",
    category: "Web/E-commerce",
    year: "2023",
    featured: true
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: contact.linkedinUrl,
    icon: "linkedin", // Pour react-icons: FaLinkedin
    color: "#0077B5"
  },
  {
    name: "GitHub",
    url: contact.githubUrl,
    icon: "github", // FaGithub
    color: "#181717"
  },
  {
    name: "Email",
    url: `mailto:${contact.email}`,
    icon: "email", // MdEmail
    color: "#EA4335"
  },
  {
    name: "Phone",
    url: `tel:${contact.phone}`,
    icon: "phone", // FaPhone
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

// Configuration du site
export const siteConfig = {
  title: "Portfolio - Alicia DIACOMA",
  description: "Portfolio de Alicia DIACOMA, développeuse web frontend spécialisée en React",
  keywords: "développeuse web, frontend, React, JavaScript, portfolio, Nouvelle-Calédonie",
  author: "Alicia DIACOMA",
  siteUrl: "https://alicia-diacoma.dev", // À mettre à jour
  image: "/og-image.jpg", // Image pour partage réseaux sociaux
  
  // Couleurs du thème (pour Tailwind config)
  theme: {
    primary: "#8B5CF6", // Violet
    secondary: "#EC4899", // Rose
    dark: "#1F2937", // Gris foncé
    light: "#F9FAFB", // Blanc cassé
    accent: "#10B981" // Vert pour accents
  }
};