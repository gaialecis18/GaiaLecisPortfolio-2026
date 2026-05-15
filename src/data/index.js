export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '#projects' },
  { label: 'About', path: '/about' },
];

export const projects = [
  {
    slug: 'learn-the-einaudi-way',
    title: 'Learn The Einaudi Way',
    category: 'Project Detail',
    caseStudy: 'High-fidelity mobile app prototype — 2026',
    role: 'UX/UI Designer & Engineer',
    focus: 'Mobile UX & Rebranding',
    summary:
      '“Learn The Einaudi Way” is a personal project born from my experience as a student at **Collegio Einaudi**, aimed at improving how students manage **MUR-required extracurricular activities**. I designed a **mobile-first app** that simplifies tracking hours, registering for activities, and monitoring progress, laying the foundation for a broader, cohesive redesign of the Collegio’s digital ecosystem.',
    hero: '/assets/projects/learn-the-einaudi-way/thumbnail.jpg',
    showHeroVisual: false,
    coverImage: '/assets/projects/learn-the-einaudi-way/cover.jpg',
    cardTags: ['Mobile UX', 'React Native', 'Student Platform'],
    overview:
      '“Learn The Einaudi Way” is a **mobile-first concept** developed to enhance the student experience at Collegio Einaudi, a College of Merit focused on academic and personal growth. The project addresses the limitations of the **current, outdated web platform** by introducing a more intuitive and accessible way for students to manage **MUR-required extracurricular activities**. The app is designed to streamline key actions such as tracking completed hours, registering for activities, and monitoring individual progress, all within a clear and user-friendly interface. The project is grounded in a **user-centered approach**, informed by direct experience with the system’s pain points. Future developments include the full implementation of the app and a complete redesign of the Collegio’s website to ensure a consistent and cohesive digital ecosystem.',
    details: [
      {
        title: 'The Challenge',
        body: 'Adapting **long-established web-based user flows** into mobile-friendly experiences, while introducing new features that align with **students’ needs and expectations**.',
      },
      {
        title: 'The Solution',
        body: 'The solution was to design a **familiar yet innovative interface**, faithfully replicating interaction patterns found in the apps most commonly used by students today.',
      },
    ],
    features: [
      {
        highlight: 'Mobile-first',
        title: 'Built around student routines',
        body: 'A dedicated interface shaped around how Collegio Einaudi students **register for activities**, **check progress**, and **manage required hours**.',
      },
      {
        highlight: 'Clearer flows',
        title: 'Familiar interaction patterns',
        body: 'Navigation and **visual hierarchy** borrow from the apps students already use, making the experience easier to understand from the **first tap**.',
      },
      {
        highlight: 'Fast tracking',
        title: 'Progress always visible',
        body: '**Hours**, **activity status**, and **next actions** are surfaced in a more direct way, reducing friction compared with the previous web-based platform.',
      },
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/gaialecis18/collegio-einaudi-pfp-app', type: 'github' },
    ],
    tools: ['Figma', 'Mobile UX', 'User Research', 'High-Fidelity Prototype', 'Front-end Development', 'React Native', 'Vibe Coding', 'Git', 'Claude', 'Codex'],
    metrics: [
      { value: '90%', label: 'Overall satisfaction', description: 'Students reported a **high level of satisfaction** with the new mobile interface during the user testing phase.' },
      { value: '4/5', label: 'Students', description: 'Students declared that they would rather use the **new mobile interface** than the previous web-based version.' },
    ],
  },
  {
    slug: 'polito-faculty-app',
    title: 'PoliTo Faculty App',
    category: 'Project Detail',
    caseStudy: 'Mobile App — 2026',
    role: 'UX/UI Engineer',
    focus: 'Mobile UI & Design System',
    summary:
      'PoliTo Faculty App is a **proprietary mobile application** designed for professors at **Politecnico di Torino**, enabling them to manage courses, communications, and student interactions directly from their smartphones. Built on a **new unified design system** and grounded in extensive user research and testing, the app translates the full functionality of the web portal into a streamlined mobile experience; it is currently available as a **preview** and not yet publicly released.',
    hero: '/assets/projects/polito-faculty-app/thumbnail.jpg',
    showHeroVisual: false,
    coverImage: '/assets/projects/polito-faculty-app/cover.jpg',
    cardTags: ['Design System', 'Faculty App', 'Mobile UI'],
    overview:
      'The PoliTo Faculty App is a **mobile-first extension** of the Politecnico di Torino’s digital ecosystem, designed to bring the full functionality of the faculty web portal into a more accessible and efficient mobile experience. Developed for **university professors**, the app supports key academic tasks such as course management, communication, and student interaction, enabling seamless access on the go. The project is built upon a newly defined, **cohesive design system** that unifies all Politecnico applications, ensuring consistency across platforms like the student app and portals. Its development was driven by **in-depth user research**, needs analysis, and iterative user testing, with a strong focus on usability and real-world workflows. Currently, the app is in a **preview stage** and has not yet been released to the public.',
    details: [
      {
        title: 'The Challenge',
        body: 'The main challenge was translating the **complexity of the web portal** into a clear and efficient mobile experience without losing functionality. At the same time, it required defining a **consistent and scalable design system** across all Politecnico platforms.',
      },
      {
        title: 'The Solution',
        body: 'A **mobile-first redesign** based on in-depth user research, prioritizing key workflows and simplifying access to core features. A **unified design system** was implemented to ensure consistency, scalability, and a cohesive experience across all Politecnico platforms.',
      },
    ],
    features: [
      {
        highlight: 'Mobile workflows',
        title: 'Academic tasks on the go',
        body: '**Course management**, **communication**, and **student interactions** were translated into focused mobile flows for professors.',
      },
      {
        highlight: 'React Native',
        title: 'Performance-minded interface',
        body: 'The app was developed with attention to **responsive interactions**, **accessibility**, and reliable mobile behavior.',
      },
      {
        highlight: 'Design system',
        title: 'Reusable interface tokens',
        body: 'A shared set of **visual and interaction rules** helps align the Faculty App with the broader Politecnico ecosystem.',
      },
    ],
    tools: ['Figma', 'React Native', 'Design Tokens', 'User Research', 'Usability Testing', 'Accessibility', 'Prototyping'],
  },
  {
    slug: 'entertainme',
    title: 'EntertainMe',
    category: 'Project Detail',
    caseStudy: 'University Project — 2024',
    role: 'UI Designer & Front-end Developer',
    focus: 'Human Computer Interaction',
    summary:
      'EntertainMe is a **mobile app** designed to simplify content selection across multiple streaming platforms by using **AI-driven, personalized recommendations** and offering additional “extras” content to enrich the viewing experience.',
    hero: '/assets/projects/entertainme/thumbnail.jpg',
    showHeroVisual: false,
    coverImage: '/assets/projects/entertainme/cover.jpg',
    cardTags: ['AI Recommendations', 'HCI', 'Streaming UX'],
    overview:
      'The project addresses the growing complexity of **digital entertainment platforms**, where users struggle to find what to watch due to content overload and ineffective recommendations. Through **extensive user research** and iterative prototyping, EntertainMe introduces a user-centered solution that combines **AI suggestions** with interactive features like mood-based filtering and curated extras. The app focuses on improving both **decision-making** and **post-viewing engagement**, creating a more meaningful and guided entertainment experience. It evolves from low- to high-fidelity prototypes, validated through usability testing, and aims to balance algorithmic suggestions with user freedom.',
    details: [
      {
        title: 'Technical Overview',
        body: 'The application is built with a **client-server architecture**, utilizing **React** for the front-end and a **Node.js backend** to handle AI-driven recommendations and user data management.',
      },
      {
        title: 'User Research & Needfinding',
        body: 'The app was developed based on **surveys and interviews**, identifying key pain points in the content selection process and understanding user preferences across different streaming platforms.',
      },
    ],
    features: [
      {
        highlight: 'AI guidance',
        title: 'Personalized recommendations',
        body: 'Suggestions adapt to **user preferences**, **viewing history**, and **mood-based choices** to reduce decision fatigue.',
      },
      {
        highlight: 'Aggregation',
        title: 'One browsing experience',
        body: 'Content from **multiple streaming services** is brought into a unified flow for faster comparison and selection.',
      },
      {
        highlight: 'Clarity',
        title: 'Readable interaction hierarchy',
        body: 'The interface prioritizes **clean navigation**, recognizable patterns, and direct access to the most useful actions.',
      },
      {
        highlight: 'Feedback',
        title: 'Continuous refinement',
        body: '**User feedback mechanisms** support more relevant recommendations and stronger post-viewing engagement.',
      },
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/gaialecis18/EntertainMe--PoliTO-Project--Human-Computer-Interaction', type: 'github' },
    ],
    tools: ['Figma', 'React', 'Node.js', 'AI Recommendations', 'UX Research', 'Notion', 'Front-end Development', 'Usability Testing', 'Prototyping', 'Git'],
    metrics: [
      { value: '100%', label: 'User Satisfaction', description: 'All tested users reported the app as **easy to use** and useful in reducing time spent choosing content, highlighting strong perceived value.', },
      { value: '14.5/5', label: 'Task Success Score', description: 'Average performance score across all tasks and users, reflecting **efficiency and clarity** in interaction design.', },
      { value: '96%', label: 'Task Completion Rate', description: 'Represents how successfully users completed assigned tasks during testing. Shows that **core flows are intuitive and effective**.', },
      { value: '95/100', label: 'SUS Score', description: 'Measures overall usability of the app based on the System Usability Scale questionnaire. Indicates **excellent usability and user satisfaction**.'},
    ],
  },
  {
    slug: 'locknroll',
    title: 'Lock & Roll',
    category: 'Project Detail',
    caseStudy: 'University Project — 2024',
    role: 'Project Manager & Front-end Developer',
    focus: 'Embedded System & Android App',
    summary:
      'Lock’n Roll is a **smart locker system** for food delivery in university environments, allowing users to order meals via an app and pick them up from **heated lockers** at flexible times, eliminating delivery delays and coordination issues.',
    hero: '/assets/projects/locknroll/thumbnail.jpg',
    showHeroVisual: false,
    coverImage: '/assets/projects/locknroll/cover.jpg',
    cardTags: ['IoT System', 'Android App', 'Firebase'],
    overview:
      'The project was designed to improve the food delivery experience for students who spend long hours at university and often struggle with short breaks, delivery delays, and communication issues with couriers. Through **user research with 40 participants**, the team identified a strong demand for a **reliable, flexible, and contactless delivery system**. The solution combines a mobile app and a **physical smart locker infrastructure** that stores food safely and keeps it warm until pickup. The system is built around a **multi-actor ecosystem** and focuses on optimizing efficiency, timing flexibility, and user autonomy.',
    details: [
      {
        title: 'Technical Overview',
        body: 'Embedded system characterized by a **mobile application (Android)**, **Cloud Backend (Firebase Realtime DB + Authentication)**, an **IoT Layer (ESP-8266 + Arduino)** and a **Physical Locker System** with hardware, sensors, and actuators.',
      },
      {
        title: 'Interaction Flow',
        body: 'The app sends a request, then the system generates a **PIN shown on the locker display**. The user picks up the order by entering the PIN on the keypad. After pickup, the locker closes, sends a **confirmation notification**, and resets.',
      },
    ],
    features: [
      {
        highlight: 'Selection',
        title: 'Locker choice by need',
        body: 'Users can select a locker based on **location** and **compartment size** before completing the delivery flow.',
      },
      {
        highlight: 'Pickup',
        title: 'Guided access flow',
        body: '**Authentication**, **PIN generation**, **locker opening**, pickup confirmation, and reset are organized into one clear sequence.',
      },
      {
        highlight: 'Realtime',
        title: 'Status and availability updates',
        body: '**Notifications** keep users informed about order progress, locker access, and pickup completion.',
      },
    ],
    links: [
      { label: 'GitHub repository', url: 'https://github.com/gaialecis18/Lock-Roll---PoliTO-Project---Digital-Interface-Design', type: 'github' },
    ],
    tools: ['Android', 'Firebase', 'ESP8266', 'Arduino', 'Figma', 'IoT Prototyping', 'User Research', 'Notion', 'Kotlin', 'Git'],
    metrics: [
      { value: '90%', label: 'User Interest Rate', description: 'Percentage of surveyed users interested in using the smart locker service, showing **strong product-market fit**.', },
      { value: '100%', label: 'App Adoption Willingness', description: 'All respondents declared willingness to download and use the app, indicating **high usability expectations** and perceived value.', },
      { value: '85%', label: 'Flexibility Demand', description: 'Users who value **flexible delivery timing** and heated storage, validating the core feature of the smart locker system.', },
    ],
  }
];

export const expertiseBlocks = [
  {
    title: 'Technical Skills',
    description:
      'Crafting digital products with a deep understanding of **front-end technologies**, enabling seamless collaboration between **design and development**.',
    tags: ['React JS', 'Javascript', 'React Native', 'Typescript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Git', 'Node.js', 'GenAI Tools', 'AI Agents', 'Claude', 'Antropic', 'Codex'],
  },
  {
    title: 'Systems Architecture',
    description:
      'Designing **scalable components** and **design tokens** that support consistency across multi-platform ecosystems.',
    tags: ['Token Systems', 'Design Libraries', 'Component Architecture'],
  },
  {
    title: 'UX Strategy & Vision',
    description:
      'Defining a clear digital north star by aligning **user needs** with **business goals** through research, flows, and product direction.',
    tags: ['Research', 'User Mapping', 'Needfindings'],
  },
  {
    title: 'Prototyping',
    description:
      'Creating **high-fidelity motion** and **interaction models** that simulate the feel of the final product.',
    tags: ['Figma', 'A/B Testing', 'User Testing'],
  },
  {
    title: 'Digital Project Management',
    description:
      'Coordinating **cross-functional teams** and managing project timelines to ensure successful delivery of digital products.',
    tags: ['Jira', 'Notion', 'Trello', 'Agile Methodologies'],
  },
  {
    title: '2D & 3D graphics',
    description:
      'Creating engaging visual content and interactive experiences through **2D and 3D design** and **animation**.',
    tags: ['Blender', 'DaVinci Resolve', 'Adobe Premiere', 'Adobe Photoshop', 'Adobe Illustrator', 'Houdini', 'Unity', 'Adobe Lightroom', 'Adobe After Effects', 'Figma', 'Canva'],},
];

export const timelineEvents = [
  {
    year: 'September 2025 — Present',
    title: 'UX/UI Engineer @ Politecnico di Torino',
    description:
      'UX/UI Engineer and developer at **Politecnico di Torino**, I design and optimize digital interfaces while managing the full **pre-development lifecycle**, from user research to prototyping and testing. I bridge design and development by translating UI components into **reusable, integration-ready code**.',
  },
  {
    year: 'September 2024 — December 2024',
    title: 'R&D Techinical Director @ EDI - Effetti Digitali Italiani',
    description:
      'R&D intern focused on integrating **AI tools into a 3D production pipeline**, researching and validating markerless motion capture solutions. Developed a full **retargeting and data refinement pipeline** to deliver production-ready animation results.',
  },
  {
    year: 'September 2023 — June 2024',
    title: 'Web Designer and Social Media Manager @ Politecnico di Torino',
    description:
      'Contributed to the **redesign of Collegio ICM websites** through part-time collaborations, updating and restructuring content, while managing the department’s **social media presence** across multiple platforms through content creation and publishing.',
  },
];

export const projectMap = projects.reduce((map, project) => {
  map[project.slug] = project;
  return map;
}, {});
