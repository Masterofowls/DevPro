// Multilingual Translation System
const translations = {
  en: {
    // Navigation
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",

    // Hero Section
    heroTitle1: "Creative",
    heroTitle2: "Fullstack",
    heroTitle3: "Developer",
    heroSubtitle: "Crafting digital experiences with code & creativity",
    heroButtonPrimary: "Get In Touch",
    heroButtonSecondary: "View Projects",
    scrollIndicator: "Scroll to explore",

    // About Section
    aboutTitle: "About",
    aboutTitleHighlight: "Me",
    aboutDescription1:
      "I'm a passionate fullstack developer with a love for creating elegant solutions to complex problems. With expertise spanning from frontend aesthetics to backend architecture, I bring ideas to life through clean, efficient code.",
    aboutDescription2:
      "My journey in tech has been driven by curiosity and a commitment to continuous learning. I specialize in modern JavaScript frameworks, cloud technologies, and creating seamless user experiences that make a difference.",
    aboutYearsLabel: "Years Experience",
    aboutProjectsLabel: "Projects Completed",
    aboutClientsLabel: "Happy Clients",
    aboutCoffeeLabel: "Cups of Coffee",

    // Skills Section
    skillsTitle: "Technical",
    skillsTitleHighlight: "Skills",
    skillsCategoryFrontend: "Frontend",
    skillsCategoryBackend: "Backend",
    skillsCategoryTools: "Tools & Others",
    skillsVisualization: "Technology Ecosystem",
    skillsRadarTitle: "Skill Proficiency",

    // Projects Section
    projectsTitle: "Featured",
    projectsTitleHighlight: "Projects",
    projectTimelineTitle: "Development Journey",

    // Project Cards
    project1Title: "E-Commerce Platform",
    project1Description:
      "Full-featured online shopping platform with real-time inventory, payment processing, and admin dashboard.",
    project2Title: "AI Chat Application",
    project2Description:
      "Real-time chat application with AI-powered responses, user authentication, and message encryption.",
    project3Title: "Task Management System",
    project3Description:
      "Collaborative task management tool with team workspaces, real-time updates, and analytics dashboard.",
    project4Title: "Weather Forecast App",
    project4Description:
      "Beautiful weather application with location-based forecasts, interactive maps, and historical data visualization.",
    project5Title: "Portfolio CMS",
    project5Description:
      "Content management system for creative professionals with drag-and-drop builder and SEO optimization.",
    project6Title: "Fitness Tracker",
    project6Description:
      "Mobile-first fitness tracking application with workout plans, nutrition tracking, and progress analytics.",

    projectViewDetails: "View Details",
    projectModalTech: "Technologies Used",
    projectModalFeatures: "Key Features",
    projectModalLinks: "Project Links",
    projectModalLiveDemo: "Live Demo",
    projectModalGitHub: "GitHub Repository",
    projectModalClose: "Close",

    // Contact Section
    contactTitle: "Get In",
    contactTitleHighlight: "Touch",
    contactSubtitle: "Let's work together on your next project",
    contactFormName: "Your Name",
    contactFormEmail: "Your Email",
    contactFormMessage: "Your Message",
    contactFormButton: "Send Message",
    contactInfoTitle: "Contact Information",
    contactInfoEmail: "Email",
    contactInfoPhone: "Phone",
    contactInfoLocation: "Location",
    contactSocialTitle: "Follow Me",

    // Toast Messages
    toastSuccess: "Message sent successfully!",
    toastError: "Failed to send message. Please try again.",
    toastValidationName: "Please enter your name",
    toastValidationEmail: "Please enter a valid email",
    toastValidationMessage: "Please enter your message",
  },

  ru: {
    // Навигация
    navAbout: "О себе",
    navSkills: "Навыки",
    navProjects: "Проекты",
    navContact: "Контакты",

    // Главная секция
    heroTitle1: "Креативный",
    heroTitle2: "Fullstack",
    heroTitle3: "Разработчик",
    heroSubtitle: "Создаю цифровые впечатления через код и креативность",
    heroButtonPrimary: "Связаться",
    heroButtonSecondary: "Посмотреть проекты",
    scrollIndicator: "Прокрутите для изучения",

    // О себе
    aboutTitle: "О",
    aboutTitleHighlight: "Себе",
    aboutDescription1:
      "Я увлечённый fullstack-разработчик с любовью к созданию элегантных решений сложных проблем. С опытом от фронтенд-эстетики до бэкенд-архитектуры, я воплощаю идеи в жизнь через чистый, эффективный код.",
    aboutDescription2:
      "Мой путь в технологиях движим любопытством и стремлением к непрерывному обучению. Я специализируюсь на современных JavaScript-фреймворках, облачных технологиях и создании бесшовного пользовательского опыта, который имеет значение.",
    aboutYearsLabel: "Лет опыта",
    aboutProjectsLabel: "Завершённых проектов",
    aboutClientsLabel: "Довольных клиентов",
    aboutCoffeeLabel: "Чашек кофе",

    // Навыки
    skillsTitle: "Технические",
    skillsTitleHighlight: "Навыки",
    skillsCategoryFrontend: "Фронтенд",
    skillsCategoryBackend: "Бэкенд",
    skillsCategoryTools: "Инструменты и другое",
    skillsVisualization: "Технологическая экосистема",
    skillsRadarTitle: "Уровень владения",

    // Проекты
    projectsTitle: "Избранные",
    projectsTitleHighlight: "Проекты",
    projectTimelineTitle: "Путь разработки",

    // Карточки проектов
    project1Title: "Платформа электронной коммерции",
    project1Description:
      "Полнофункциональная платформа онлайн-покупок с инвентаризацией в реальном времени, обработкой платежей и панелью администратора.",
    project2Title: "Приложение AI-чата",
    project2Description:
      "Приложение для чата в реальном времени с ответами на основе ИИ, аутентификацией пользователей и шифрованием сообщений.",
    project3Title: "Система управления задачами",
    project3Description:
      "Инструмент для совместного управления задачами с командными рабочими пространствами, обновлениями в реальном времени и панелью аналитики.",
    project4Title: "Приложение прогноза погоды",
    project4Description:
      "Красивое приложение погоды с прогнозами на основе местоположения, интерактивными картами и визуализацией исторических данных.",
    project5Title: "Портфолио CMS",
    project5Description:
      "Система управления контентом для творческих профессионалов с конструктором перетаскивания и оптимизацией SEO.",
    project6Title: "Фитнес-трекер",
    project6Description:
      "Мобильное приложение для отслеживания фитнеса с планами тренировок, отслеживанием питания и аналитикой прогресса.",

    projectViewDetails: "Подробнее",
    projectModalTech: "Использованные технологии",
    projectModalFeatures: "Ключевые функции",
    projectModalLinks: "Ссылки на проект",
    projectModalLiveDemo: "Демо",
    projectModalGitHub: "GitHub репозиторий",
    projectModalClose: "Закрыть",

    // Контакты
    contactTitle: "Свяжитесь",
    contactTitleHighlight: "Со мной",
    contactSubtitle: "Давайте работать вместе над вашим следующим проектом",
    contactFormName: "Ваше имя",
    contactFormEmail: "Ваш Email",
    contactFormMessage: "Ваше сообщение",
    contactFormButton: "Отправить",
    contactInfoTitle: "Контактная информация",
    contactInfoEmail: "Email",
    contactInfoPhone: "Телефон",
    contactInfoLocation: "Местоположение",
    contactSocialTitle: "Подписывайтесь",

    // Уведомления
    toastSuccess: "Сообщение успешно отправлено!",
    toastError: "Не удалось отправить сообщение. Попробуйте ещё раз.",
    toastValidationName: "Пожалуйста, введите ваше имя",
    toastValidationEmail: "Пожалуйста, введите корректный email",
    toastValidationMessage: "Пожалуйста, введите ваше сообщение",
  },

  de: {
    // Navigation
    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navProjects: "Projekte",
    navContact: "Kontakt",

    // Hauptbereich
    heroTitle1: "Kreativer",
    heroTitle2: "Fullstack",
    heroTitle3: "Entwickler",
    heroSubtitle: "Digitale Erlebnisse mit Code & Kreativität schaffen",
    heroButtonPrimary: "Kontakt aufnehmen",
    heroButtonSecondary: "Projekte ansehen",
    scrollIndicator: "Scrollen zum Erkunden",

    // Über mich
    aboutTitle: "Über",
    aboutTitleHighlight: "Mich",
    aboutDescription1:
      "Ich bin ein leidenschaftlicher Fullstack-Entwickler mit einer Vorliebe für elegante Lösungen komplexer Probleme. Mit Fachwissen von Frontend-Ästhetik bis Backend-Architektur erwecke ich Ideen durch sauberen, effizienten Code zum Leben.",
    aboutDescription2:
      "Meine Reise in der Technologie wird von Neugier und dem Engagement für kontinuierliches Lernen angetrieben. Ich spezialisiere mich auf moderne JavaScript-Frameworks, Cloud-Technologien und die Schaffung nahtloser Benutzererfahrungen, die einen Unterschied machen.",
    aboutYearsLabel: "Jahre Erfahrung",
    aboutProjectsLabel: "Abgeschlossene Projekte",
    aboutClientsLabel: "Zufriedene Kunden",
    aboutCoffeeLabel: "Tassen Kaffee",

    // Fähigkeiten
    skillsTitle: "Technische",
    skillsTitleHighlight: "Fähigkeiten",
    skillsCategoryFrontend: "Frontend",
    skillsCategoryBackend: "Backend",
    skillsCategoryTools: "Tools & Andere",
    skillsVisualization: "Technologie-Ökosystem",
    skillsRadarTitle: "Kompetenzprofil",

    // Projekte
    projectsTitle: "Ausgewählte",
    projectsTitleHighlight: "Projekte",
    projectTimelineTitle: "Entwicklungsreise",

    // Projektkarten
    project1Title: "E-Commerce-Plattform",
    project1Description:
      "Voll ausgestattete Online-Shopping-Plattform mit Echtzeit-Inventar, Zahlungsabwicklung und Admin-Dashboard.",
    project2Title: "KI-Chat-Anwendung",
    project2Description:
      "Echtzeit-Chat-Anwendung mit KI-gestützten Antworten, Benutzerauthentifizierung und Nachrichtenverschlüsselung.",
    project3Title: "Aufgabenverwaltungssystem",
    project3Description:
      "Kollaboratives Aufgabenverwaltungs-Tool mit Team-Arbeitsbereichen, Echtzeit-Updates und Analyse-Dashboard.",
    project4Title: "Wettervorhersage-App",
    project4Description:
      "Schöne Wetter-App mit standortbasierten Vorhersagen, interaktiven Karten und historischer Datenvisualisierung.",
    project5Title: "Portfolio-CMS",
    project5Description:
      "Content-Management-System für Kreativprofis mit Drag-and-Drop-Builder und SEO-Optimierung.",
    project6Title: "Fitness-Tracker",
    project6Description:
      "Mobile-First-Fitness-Tracking-Anwendung mit Trainingsplänen, Ernährungsverfolgung und Fortschrittsanalyse.",

    projectViewDetails: "Details anzeigen",
    projectModalTech: "Verwendete Technologien",
    projectModalFeatures: "Hauptmerkmale",
    projectModalLinks: "Projekt-Links",
    projectModalLiveDemo: "Live-Demo",
    projectModalGitHub: "GitHub-Repository",
    projectModalClose: "Schließen",

    // Kontakt
    contactTitle: "Kontakt",
    contactTitleHighlight: "Aufnehmen",
    contactSubtitle:
      "Lassen Sie uns gemeinsam an Ihrem nächsten Projekt arbeiten",
    contactFormName: "Ihr Name",
    contactFormEmail: "Ihre E-Mail",
    contactFormMessage: "Ihre Nachricht",
    contactFormButton: "Nachricht senden",
    contactInfoTitle: "Kontaktinformationen",
    contactInfoEmail: "E-Mail",
    contactInfoPhone: "Telefon",
    contactInfoLocation: "Standort",
    contactSocialTitle: "Folgen Sie mir",

    // Benachrichtigungen
    toastSuccess: "Nachricht erfolgreich gesendet!",
    toastError:
      "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    toastValidationName: "Bitte geben Sie Ihren Namen ein",
    toastValidationEmail: "Bitte geben Sie eine gültige E-Mail ein",
    toastValidationMessage: "Bitte geben Sie Ihre Nachricht ein",
  },

  fr: {
    // Navigation
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navContact: "Contact",

    // Section Héros
    heroTitle1: "Développeur",
    heroTitle2: "Fullstack",
    heroTitle3: "Créatif",
    heroSubtitle: "Créer des expériences numériques avec code et créativité",
    heroButtonPrimary: "Contactez-moi",
    heroButtonSecondary: "Voir les projets",
    scrollIndicator: "Faites défiler pour explorer",

    // À propos
    aboutTitle: "À",
    aboutTitleHighlight: "Propos",
    aboutDescription1:
      "Je suis un développeur fullstack passionné avec un amour pour créer des solutions élégantes à des problèmes complexes. Avec une expertise allant de l'esthétique frontend à l'architecture backend, je donne vie aux idées à travers un code propre et efficace.",
    aboutDescription2:
      "Mon parcours dans la technologie est motivé par la curiosité et un engagement envers l'apprentissage continu. Je me spécialise dans les frameworks JavaScript modernes, les technologies cloud et la création d'expériences utilisateur fluides qui font la différence.",
    aboutYearsLabel: "Années d'expérience",
    aboutProjectsLabel: "Projets terminés",
    aboutClientsLabel: "Clients satisfaits",
    aboutCoffeeLabel: "Tasses de café",

    // Compétences
    skillsTitle: "Compétences",
    skillsTitleHighlight: "Techniques",
    skillsCategoryFrontend: "Frontend",
    skillsCategoryBackend: "Backend",
    skillsCategoryTools: "Outils et autres",
    skillsVisualization: "Écosystème technologique",
    skillsRadarTitle: "Maîtrise des compétences",

    // Projets
    projectsTitle: "Projets",
    projectsTitleHighlight: "En vedette",
    projectTimelineTitle: "Parcours de développement",

    // Cartes de projet
    project1Title: "Plateforme E-Commerce",
    project1Description:
      "Plateforme de shopping en ligne complète avec inventaire en temps réel, traitement des paiements et tableau de bord admin.",
    project2Title: "Application de Chat IA",
    project2Description:
      "Application de chat en temps réel avec réponses alimentées par l'IA, authentification des utilisateurs et chiffrement des messages.",
    project3Title: "Système de gestion des tâches",
    project3Description:
      "Outil de gestion collaborative des tâches avec espaces de travail d'équipe, mises à jour en temps réel et tableau de bord analytique.",
    project4Title: "Application Météo",
    project4Description:
      "Belle application météo avec prévisions basées sur la localisation, cartes interactives et visualisation des données historiques.",
    project5Title: "CMS Portfolio",
    project5Description:
      "Système de gestion de contenu pour professionnels créatifs avec constructeur glisser-déposer et optimisation SEO.",
    project6Title: "Tracker de Fitness",
    project6Description:
      "Application de suivi fitness mobile-first avec plans d'entraînement, suivi nutritionnel et analyses de progression.",

    projectViewDetails: "Voir les détails",
    projectModalTech: "Technologies utilisées",
    projectModalFeatures: "Fonctionnalités clés",
    projectModalLinks: "Liens du projet",
    projectModalLiveDemo: "Démo en direct",
    projectModalGitHub: "Dépôt GitHub",
    projectModalClose: "Fermer",

    // Contact
    contactTitle: "Entrer en",
    contactTitleHighlight: "Contact",
    contactSubtitle: "Travaillons ensemble sur votre prochain projet",
    contactFormName: "Votre nom",
    contactFormEmail: "Votre e-mail",
    contactFormMessage: "Votre message",
    contactFormButton: "Envoyer le message",
    contactInfoTitle: "Informations de contact",
    contactInfoEmail: "E-mail",
    contactInfoPhone: "Téléphone",
    contactInfoLocation: "Localisation",
    contactSocialTitle: "Suivez-moi",

    // Notifications
    toastSuccess: "Message envoyé avec succès!",
    toastError: "Échec de l'envoi du message. Veuillez réessayer.",
    toastValidationName: "Veuillez entrer votre nom",
    toastValidationEmail: "Veuillez entrer un e-mail valide",
    toastValidationMessage: "Veuillez entrer votre message",
  },

  es: {
    // Navegación
    navAbout: "Acerca de",
    navSkills: "Habilidades",
    navProjects: "Proyectos",
    navContact: "Contacto",

    // Sección Hero
    heroTitle1: "Desarrollador",
    heroTitle2: "Fullstack",
    heroTitle3: "Creativo",
    heroSubtitle: "Creando experiencias digitales con código y creatividad",
    heroButtonPrimary: "Contactar",
    heroButtonSecondary: "Ver proyectos",
    scrollIndicator: "Desplázate para explorar",

    // Acerca de
    aboutTitle: "Acerca",
    aboutTitleHighlight: "De mí",
    aboutDescription1:
      "Soy un desarrollador fullstack apasionado con amor por crear soluciones elegantes a problemas complejos. Con experiencia desde la estética frontend hasta la arquitectura backend, doy vida a las ideas a través de código limpio y eficiente.",
    aboutDescription2:
      "Mi viaje en tecnología está impulsado por la curiosidad y el compromiso con el aprendizaje continuo. Me especializo en frameworks JavaScript modernos, tecnologías en la nube y en crear experiencias de usuario fluidas que marcan la diferencia.",
    aboutYearsLabel: "Años de experiencia",
    aboutProjectsLabel: "Proyectos completados",
    aboutClientsLabel: "Clientes satisfechos",
    aboutCoffeeLabel: "Tazas de café",

    // Habilidades
    skillsTitle: "Habilidades",
    skillsTitleHighlight: "Técnicas",
    skillsCategoryFrontend: "Frontend",
    skillsCategoryBackend: "Backend",
    skillsCategoryTools: "Herramientas y otros",
    skillsVisualization: "Ecosistema tecnológico",
    skillsRadarTitle: "Dominio de habilidades",

    // Proyectos
    projectsTitle: "Proyectos",
    projectsTitleHighlight: "Destacados",
    projectTimelineTitle: "Viaje de desarrollo",

    // Tarjetas de proyecto
    project1Title: "Plataforma E-Commerce",
    project1Description:
      "Plataforma de compras en línea completa con inventario en tiempo real, procesamiento de pagos y panel de administración.",
    project2Title: "Aplicación de Chat IA",
    project2Description:
      "Aplicación de chat en tiempo real con respuestas impulsadas por IA, autenticación de usuarios y cifrado de mensajes.",
    project3Title: "Sistema de gestión de tareas",
    project3Description:
      "Herramienta de gestión colaborativa de tareas con espacios de trabajo en equipo, actualizaciones en tiempo real y panel de análisis.",
    project4Title: "Aplicación del tiempo",
    project4Description:
      "Hermosa aplicación del tiempo con pronósticos basados en ubicación, mapas interactivos y visualización de datos históricos.",
    project5Title: "CMS de Portfolio",
    project5Description:
      "Sistema de gestión de contenido para profesionales creativos con constructor de arrastrar y soltar y optimización SEO.",
    project6Title: "Rastreador de Fitness",
    project6Description:
      "Aplicación de seguimiento de fitness mobile-first con planes de entrenamiento, seguimiento nutricional y análisis de progreso.",

    projectViewDetails: "Ver detalles",
    projectModalTech: "Tecnologías utilizadas",
    projectModalFeatures: "Características clave",
    projectModalLinks: "Enlaces del proyecto",
    projectModalLiveDemo: "Demo en vivo",
    projectModalGitHub: "Repositorio GitHub",
    projectModalClose: "Cerrar",

    // Contacto
    contactTitle: "Ponte en",
    contactTitleHighlight: "Contacto",
    contactSubtitle: "Trabajemos juntos en tu próximo proyecto",
    contactFormName: "Tu nombre",
    contactFormEmail: "Tu correo electrónico",
    contactFormMessage: "Tu mensaje",
    contactFormButton: "Enviar mensaje",
    contactInfoTitle: "Información de contacto",
    contactInfoEmail: "Correo electrónico",
    contactInfoPhone: "Teléfono",
    contactInfoLocation: "Ubicación",
    contactSocialTitle: "Sígueme",

    // Notificaciones
    toastSuccess: "¡Mensaje enviado con éxito!",
    toastError: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    toastValidationName: "Por favor ingresa tu nombre",
    toastValidationEmail: "Por favor ingresa un correo válido",
    toastValidationMessage: "Por favor ingresa tu mensaje",
  },

  pt: {
    // Navegação
    navAbout: "Sobre",
    navSkills: "Habilidades",
    navProjects: "Projetos",
    navContact: "Contato",

    // Seção Hero
    heroTitle1: "Desenvolvedor",
    heroTitle2: "Fullstack",
    heroTitle3: "Criativo",
    heroSubtitle: "Criando experiências digitais com código e criatividade",
    heroButtonPrimary: "Entre em contato",
    heroButtonSecondary: "Ver projetos",
    scrollIndicator: "Role para explorar",

    // Sobre
    aboutTitle: "Sobre",
    aboutTitleHighlight: "Mim",
    aboutDescription1:
      "Sou um desenvolvedor fullstack apaixonado com amor por criar soluções elegantes para problemas complexos. Com experiência desde estética frontend até arquitetura backend, dou vida às ideias através de código limpo e eficiente.",
    aboutDescription2:
      "Minha jornada em tecnologia é impulsionada pela curiosidade e comprometimento com o aprendizado contínuo. Eu me especializo em frameworks JavaScript modernos, tecnologias em nuvem e na criação de experiências de usuário perfeitas que fazem a diferença.",
    aboutYearsLabel: "Anos de experiência",
    aboutProjectsLabel: "Projetos concluídos",
    aboutClientsLabel: "Clientes satisfeitos",
    aboutCoffeeLabel: "Xícaras de café",

    // Habilidades
    skillsTitle: "Habilidades",
    skillsTitleHighlight: "Técnicas",
    skillsCategoryFrontend: "Frontend",
    skillsCategoryBackend: "Backend",
    skillsCategoryTools: "Ferramentas e outros",
    skillsVisualization: "Ecossistema tecnológico",
    skillsRadarTitle: "Proficiência em habilidades",

    // Projetos
    projectsTitle: "Projetos",
    projectsTitleHighlight: "Em destaque",
    projectTimelineTitle: "Jornada de desenvolvimento",

    // Cartões de projeto
    project1Title: "Plataforma E-Commerce",
    project1Description:
      "Plataforma de compras online completa com inventário em tempo real, processamento de pagamentos e painel administrativo.",
    project2Title: "Aplicativo de Chat IA",
    project2Description:
      "Aplicativo de chat em tempo real com respostas alimentadas por IA, autenticação de usuários e criptografia de mensagens.",
    project3Title: "Sistema de gerenciamento de tarefas",
    project3Description:
      "Ferramenta colaborativa de gerenciamento de tarefas com espaços de trabalho em equipe, atualizações em tempo real e painel de análise.",
    project4Title: "Aplicativo de previsão do tempo",
    project4Description:
      "Belo aplicativo de clima com previsões baseadas em localização, mapas interativos e visualização de dados históricos.",
    project5Title: "CMS de Portfólio",
    project5Description:
      "Sistema de gerenciamento de conteúdo para profissionais criativos com construtor de arrastar e soltar e otimização de SEO.",
    project6Title: "Rastreador de Fitness",
    project6Description:
      "Aplicativo de rastreamento de fitness mobile-first com planos de treino, rastreamento nutricional e análise de progresso.",

    projectViewDetails: "Ver detalhes",
    projectModalTech: "Tecnologias usadas",
    projectModalFeatures: "Recursos principais",
    projectModalLinks: "Links do projeto",
    projectModalLiveDemo: "Demo ao vivo",
    projectModalGitHub: "Repositório GitHub",
    projectModalClose: "Fechar",

    // Contato
    contactTitle: "Entre em",
    contactTitleHighlight: "Contato",
    contactSubtitle: "Vamos trabalhar juntos no seu próximo projeto",
    contactFormName: "Seu nome",
    contactFormEmail: "Seu e-mail",
    contactFormMessage: "Sua mensagem",
    contactFormButton: "Enviar mensagem",
    contactInfoTitle: "Informações de contato",
    contactInfoEmail: "E-mail",
    contactInfoPhone: "Telefone",
    contactInfoLocation: "Localização",
    contactSocialTitle: "Siga-me",

    // Notificações
    toastSuccess: "Mensagem enviada com sucesso!",
    toastError: "Falha ao enviar mensagem. Por favor, tente novamente.",
    toastValidationName: "Por favor, insira seu nome",
    toastValidationEmail: "Por favor, insira um e-mail válido",
    toastValidationMessage: "Por favor, insira sua mensagem",
  },

  ar: {
    // التنقل
    navAbout: "عني",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navContact: "اتصل بي",

    // قسم البطل
    heroTitle1: "مطور",
    heroTitle2: "Fullstack",
    heroTitle3: "مبدع",
    heroSubtitle: "صناعة تجارب رقمية بالكود والإبداع",
    heroButtonPrimary: "تواصل معي",
    heroButtonSecondary: "عرض المشاريع",
    scrollIndicator: "قم بالتمرير للاستكشاف",

    // عني
    aboutTitle: "عن",
    aboutTitleHighlight: "نفسي",
    aboutDescription1:
      "أنا مطور fullstack شغوف بحب خلق حلول أنيقة لمشاكل معقدة. مع خبرة تمتد من جماليات الواجهة الأمامية إلى بنية الخلفية، أحقق الأفكار من خلال كود نظيف وفعال.",
    aboutDescription2:
      "رحلتي في التكنولوجيا مدفوعة بالفضول والالتزام بالتعلم المستمر. أنا متخصص في أطر عمل JavaScript الحديثة، تقنيات السحابة، وخلق تجارب مستخدم سلسة تحدث فرقًا.",
    aboutYearsLabel: "سنوات الخبرة",
    aboutProjectsLabel: "المشاريع المكتملة",
    aboutClientsLabel: "العملاء السعداء",
    aboutCoffeeLabel: "أكواب القهوة",

    // المهارات
    skillsTitle: "المهارات",
    skillsTitleHighlight: "التقنية",
    skillsCategoryFrontend: "الواجهة الأمامية",
    skillsCategoryBackend: "الواجهة الخلفية",
    skillsCategoryTools: "الأدوات وأخرى",
    skillsVisualization: "النظام البيئي التكنولوجي",
    skillsRadarTitle: "إتقان المهارات",

    // المشاريع
    projectsTitle: "المشاريع",
    projectsTitleHighlight: "المميزة",
    projectTimelineTitle: "رحلة التطوير",

    // بطاقات المشروع
    project1Title: "منصة التجارة الإلكترونية",
    project1Description:
      "منصة تسوق عبر الإنترنت كاملة المزايا مع مخزون في الوقت الفعلي، معالجة المدفوعات ولوحة تحكم الإدارة.",
    project2Title: "تطبيق الدردشة بالذكاء الاصطناعي",
    project2Description:
      "تطبيق دردشة في الوقت الفعلي مع استجابات مدعومة بالذكاء الاصطناعي، مصادقة المستخدم وتشفير الرسائل.",
    project3Title: "نظام إدارة المهام",
    project3Description:
      "أداة إدارة مهام تعاونية مع مساحات عمل الفريق، تحديثات في الوقت الفعلي ولوحة تحليلات.",
    project4Title: "تطبيق توقعات الطقس",
    project4Description:
      "تطبيق طقس جميل مع توقعات على أساس الموقع، خرائط تفاعلية وتصور البيانات التاريخية.",
    project5Title: "نظام إدارة المحتوى للمحفظة",
    project5Description:
      "نظام إدارة محتوى للمحترفين المبدعين مع منشئ السحب والإفلات وتحسين SEO.",
    project6Title: "متتبع اللياقة البدنية",
    project6Description:
      "تطبيق تتبع لياقة بدنية يعطي الأولوية للهاتف المحمول مع خطط التمرين، تتبع التغذية وتحليلات التقدم.",

    projectViewDetails: "عرض التفاصيل",
    projectModalTech: "التقنيات المستخدمة",
    projectModalFeatures: "الميزات الرئيسية",
    projectModalLinks: "روابط المشروع",
    projectModalLiveDemo: "العرض الحي",
    projectModalGitHub: "مستودع GitHub",
    projectModalClose: "إغلاق",

    // اتصل
    contactTitle: "تواصل",
    contactTitleHighlight: "معنا",
    contactSubtitle: "دعنا نعمل معًا على مشروعك التالي",
    contactFormName: "اسمك",
    contactFormEmail: "بريدك الإلكتروني",
    contactFormMessage: "رسالتك",
    contactFormButton: "إرسال الرسالة",
    contactInfoTitle: "معلومات الاتصال",
    contactInfoEmail: "البريد الإلكتروني",
    contactInfoPhone: "الهاتف",
    contactInfoLocation: "الموقع",
    contactSocialTitle: "تابعني",

    // الإشعارات
    toastSuccess: "تم إرسال الرسالة بنجاح!",
    toastError: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    toastValidationName: "يرجى إدخال اسمك",
    toastValidationEmail: "يرجى إدخال بريد إلكتروني صالح",
    toastValidationMessage: "يرجى إدخال رسالتك",
  },

  zh: {
    // 导航
    navAbout: "关于",
    navSkills: "技能",
    navProjects: "项目",
    navContact: "联系",

    // 主页部分
    heroTitle1: "创意",
    heroTitle2: "全栈",
    heroTitle3: "开发者",
    heroSubtitle: "用代码和创意打造数字体验",
    heroButtonPrimary: "联系我",
    heroButtonSecondary: "查看项目",
    scrollIndicator: "滚动探索",

    // 关于
    aboutTitle: "关于",
    aboutTitleHighlight: "我",
    aboutDescription1:
      "我是一名充满激情的全栈开发者，热爱为复杂问题创建优雅的解决方案。凭借从前端美学到后端架构的专业知识，我通过干净、高效的代码将想法变为现实。",
    aboutDescription2:
      "我的技术之旅由好奇心和对持续学习的承诺驱动。我专注于现代JavaScript框架、云技术，以及创造产生影响的无缝用户体验。",
    aboutYearsLabel: "年经验",
    aboutProjectsLabel: "完成项目",
    aboutClientsLabel: "满意客户",
    aboutCoffeeLabel: "杯咖啡",

    // 技能
    skillsTitle: "技术",
    skillsTitleHighlight: "技能",
    skillsCategoryFrontend: "前端",
    skillsCategoryBackend: "后端",
    skillsCategoryTools: "工具和其他",
    skillsVisualization: "技术生态系统",
    skillsRadarTitle: "技能熟练度",

    // 项目
    projectsTitle: "精选",
    projectsTitleHighlight: "项目",
    projectTimelineTitle: "开发历程",

    // 项目卡片
    project1Title: "电子商务平台",
    project1Description:
      "功能齐全的在线购物平台，具有实时库存、支付处理和管理仪表板。",
    project2Title: "AI聊天应用",
    project2Description:
      "实时聊天应用程序，具有AI驱动的响应、用户身份验证和消息加密。",
    project3Title: "任务管理系统",
    project3Description:
      "协作任务管理工具，具有团队工作空间、实时更新和分析仪表板。",
    project4Title: "天气预报应用",
    project4Description:
      "漂亮的天气应用程序，具有基于位置的预报、交互式地图和历史数据可视化。",
    project5Title: "作品集CMS",
    project5Description:
      "为创意专业人士提供的内容管理系统，具有拖放构建器和SEO优化。",
    project6Title: "健身追踪器",
    project6Description:
      "移动优先的健身追踪应用程序，具有锻炼计划、营养追踪和进度分析。",

    projectViewDetails: "查看详情",
    projectModalTech: "使用的技术",
    projectModalFeatures: "主要功能",
    projectModalLinks: "项目链接",
    projectModalLiveDemo: "在线演示",
    projectModalGitHub: "GitHub仓库",
    projectModalClose: "关闭",

    // 联系
    contactTitle: "联系",
    contactTitleHighlight: "我",
    contactSubtitle: "让我们一起开发您的下一个项目",
    contactFormName: "您的名字",
    contactFormEmail: "您的邮箱",
    contactFormMessage: "您的消息",
    contactFormButton: "发送消息",
    contactInfoTitle: "联系信息",
    contactInfoEmail: "邮箱",
    contactInfoPhone: "电话",
    contactInfoLocation: "位置",
    contactSocialTitle: "关注我",

    // 通知
    toastSuccess: "消息发送成功！",
    toastError: "消息发送失败。请重试。",
    toastValidationName: "请输入您的名字",
    toastValidationEmail: "请输入有效的邮箱",
    toastValidationMessage: "请输入您的消息",
  },

  ja: {
    // ナビゲーション
    navAbout: "私について",
    navSkills: "スキル",
    navProjects: "プロジェクト",
    navContact: "お問い合わせ",

    // ヒーローセクション
    heroTitle1: "クリエイティブ",
    heroTitle2: "フルスタック",
    heroTitle3: "デベロッパー",
    heroSubtitle: "コードと創造性でデジタル体験を作る",
    heroButtonPrimary: "お問い合わせ",
    heroButtonSecondary: "プロジェクトを見る",
    scrollIndicator: "スクロールして探索",

    // 私について
    aboutTitle: "私",
    aboutTitleHighlight: "について",
    aboutDescription1:
      "私は複雑な問題にエレガントなソリューションを作ることを愛する情熱的なフルスタック開発者です。フロントエンドの美学からバックエンドアーキテクチャまでの専門知識を持ち、クリーンで効率的なコードを通じてアイデアを実現します。",
    aboutDescription2:
      "私の技術への旅は好奇心と継続的な学習へのコミットメントによって駆動されています。モダンなJavaScriptフレームワーク、クラウド技術、そして違いを生むシームレスなユーザー体験の作成を専門としています。",
    aboutYearsLabel: "年の経験",
    aboutProjectsLabel: "完了プロジェクト",
    aboutClientsLabel: "満足したクライアント",
    aboutCoffeeLabel: "杯のコーヒー",

    // スキル
    skillsTitle: "技術的",
    skillsTitleHighlight: "スキル",
    skillsCategoryFrontend: "フロントエンド",
    skillsCategoryBackend: "バックエンド",
    skillsCategoryTools: "ツールとその他",
    skillsVisualization: "技術エコシステム",
    skillsRadarTitle: "スキル習熟度",

    // プロジェクト
    projectsTitle: "注目の",
    projectsTitleHighlight: "プロジェクト",
    projectTimelineTitle: "開発の旅",

    // プロジェクトカード
    project1Title: "Eコマースプラットフォーム",
    project1Description:
      "リアルタイム在庫、決済処理、管理ダッシュボードを備えたフル機能のオンラインショッピングプラットフォーム。",
    project2Title: "AIチャットアプリケーション",
    project2Description:
      "AI駆動の応答、ユーザー認証、メッセージ暗号化を備えたリアルタイムチャットアプリケーション。",
    project3Title: "タスク管理システム",
    project3Description:
      "チームワークスペース、リアルタイム更新、分析ダッシュボードを備えた協調的なタスク管理ツール。",
    project4Title: "天気予報アプリ",
    project4Description:
      "位置ベースの予報、インタラクティブマップ、履歴データ視覚化を備えた美しい天気アプリケーション。",
    project5Title: "ポートフォリオCMS",
    project5Description:
      "ドラッグアンドドロップビルダーとSEO最適化を備えたクリエイティブプロフェッショナル向けコンテンツ管理システム。",
    project6Title: "フィットネストラッカー",
    project6Description:
      "ワークアウトプラン、栄養トラッキング、進捗分析を備えたモバイルファーストのフィットネストラッキングアプリケーション。",

    projectViewDetails: "詳細を見る",
    projectModalTech: "使用技術",
    projectModalFeatures: "主要機能",
    projectModalLinks: "プロジェクトリンク",
    projectModalLiveDemo: "ライブデモ",
    projectModalGitHub: "GitHubリポジトリ",
    projectModalClose: "閉じる",

    // お問い合わせ
    contactTitle: "お問い",
    contactTitleHighlight: "合わせ",
    contactSubtitle: "次のプロジェクトで一緒に働きましょう",
    contactFormName: "お名前",
    contactFormEmail: "メールアドレス",
    contactFormMessage: "メッセージ",
    contactFormButton: "メッセージを送信",
    contactInfoTitle: "お問い合わせ情報",
    contactInfoEmail: "メール",
    contactInfoPhone: "電話",
    contactInfoLocation: "場所",
    contactSocialTitle: "フォローする",

    // 通知
    toastSuccess: "メッセージが正常に送信されました！",
    toastError: "メッセージの送信に失敗しました。もう一度お試しください。",
    toastValidationName: "お名前を入力してください",
    toastValidationEmail: "有効なメールアドレスを入力してください",
    toastValidationMessage: "メッセージを入力してください",
  },

  hi: {
    // नेविगेशन
    navAbout: "मेरे बारे में",
    navSkills: "कौशल",
    navProjects: "प्रोजेक्ट्स",
    navContact: "संपर्क",

    // हीरो सेक्शन
    heroTitle1: "रचनात्मक",
    heroTitle2: "फुलस्टैक",
    heroTitle3: "डेवलपर",
    heroSubtitle: "कोड और रचनात्मकता के साथ डिजिटल अनुभव तैयार करना",
    heroButtonPrimary: "संपर्क करें",
    heroButtonSecondary: "प्रोजेक्ट देखें",
    scrollIndicator: "एक्सप्लोर करने के लिए स्क्रॉल करें",

    // मेरे बारे में
    aboutTitle: "मेरे",
    aboutTitleHighlight: "बारे में",
    aboutDescription1:
      "मैं एक भावुक फुलस्टैक डेवलपर हूं जो जटिल समस्याओं के लिए सुरुचिपूर्ण समाधान बनाने से प्यार करता हूं। फ्रंटएंड सौंदर्यशास्त्र से लेकर बैकएंड आर्किटेक्चर तक की विशेषज्ञता के साथ, मैं स्वच्छ, कुशल कोड के माध्यम से विचारों को जीवन में लाता हूं।",
    aboutDescription2:
      "तकनीक में मेरी यात्रा जिज्ञासा और निरंतर सीखने की प्रतिबद्धता से प्रेरित है। मैं आधुनिक JavaScript फ्रेमवर्क, क्लाउड प्रौद्योगिकियों और निर्बाध उपयोगकर्ता अनुभव बनाने में विशेषज्ञ हूं जो अंतर लाते हैं।",
    aboutYearsLabel: "वर्षों का अनुभव",
    aboutProjectsLabel: "पूर्ण परियोजनाएं",
    aboutClientsLabel: "खुश ग्राहक",
    aboutCoffeeLabel: "कप कॉफी",

    // कौशल
    skillsTitle: "तकनीकी",
    skillsTitleHighlight: "कौशल",
    skillsCategoryFrontend: "फ्रंटएंड",
    skillsCategoryBackend: "बैकएंड",
    skillsCategoryTools: "उपकरण और अन्य",
    skillsVisualization: "प्रौद्योगिकी पारिस्थितिकी तंत्र",
    skillsRadarTitle: "कौशल निपुणता",

    // प्रोजेक्ट्स
    projectsTitle: "चुनिंदा",
    projectsTitleHighlight: "प्रोजेक्ट्स",
    projectTimelineTitle: "विकास यात्रा",

    // प्रोजेक्ट कार्ड
    project1Title: "ई-कॉमर्स प्लेटफॉर्म",
    project1Description:
      "रीयल-टाइम इन्वेंट्री, भुगतान प्रसंस्करण और व्यवस्थापक डैशबोर्ड के साथ पूर्ण-विशेषताओं वाला ऑनलाइन शॉपिंग प्लेटफॉर्म।",
    project2Title: "AI चैट एप्लीकेशन",
    project2Description:
      "AI-संचालित प्रतिक्रियाओं, उपयोगकर्ता प्रमाणीकरण और संदेश एन्क्रिप्शन के साथ रीयल-टाइम चैट एप्लीकेशन।",
    project3Title: "कार्य प्रबंधन प्रणाली",
    project3Description:
      "टीम वर्कस्पेस, रीयल-टाइम अपडेट और विश्लेषण डैशबोर्ड के साथ सहयोगी कार्य प्रबंधन उपकरण।",
    project4Title: "मौसम पूर्वानुमान ऐप",
    project4Description:
      "स्थान-आधारित पूर्वानुमान, इंटरएक्टिव मानचित्र और ऐतिहासिक डेटा विज़ुअलाइज़ेशन के साथ सुंदर मौसम एप्लिकेशन।",
    project5Title: "पोर्टफोलियो CMS",
    project5Description:
      "ड्रैग-एंड-ड्रॉप बिल्डर और SEO अनुकूलन के साथ रचनात्मक पेशेवरों के लिए सामग्री प्रबंधन प्रणाली।",
    project6Title: "फिटनेस ट्रैकर",
    project6Description:
      "वर्कआउट योजनाओं, पोषण ट्रैकिंग और प्रगति विश्लेषण के साथ मोबाइल-फर्स्ट फिटनेस ट्रैकिंग एप्लिकेशन।",

    projectViewDetails: "विवरण देखें",
    projectModalTech: "प्रयुक्त प्रौद्योगिकियां",
    projectModalFeatures: "मुख्य विशेषताएं",
    projectModalLinks: "प्रोजेक्ट लिंक",
    projectModalLiveDemo: "लाइव डेमो",
    projectModalGitHub: "GitHub रिपॉजिटरी",
    projectModalClose: "बंद करें",

    // संपर्क
    contactTitle: "संपर्क",
    contactTitleHighlight: "करें",
    contactSubtitle: "आइए अपनी अगली परियोजना पर एक साथ काम करें",
    contactFormName: "आपका नाम",
    contactFormEmail: "आपका ईमेल",
    contactFormMessage: "आपका संदेश",
    contactFormButton: "संदेश भेजें",
    contactInfoTitle: "संपर्क जानकारी",
    contactInfoEmail: "ईमेल",
    contactInfoPhone: "फोन",
    contactInfoLocation: "स्थान",
    contactSocialTitle: "मुझे फॉलो करें",

    // सूचनाएं
    toastSuccess: "संदेश सफलतापूर्वक भेजा गया!",
    toastError: "संदेश भेजने में विफल। कृपया पुनः प्रयास करें।",
    toastValidationName: "कृपया अपना नाम दर्ज करें",
    toastValidationEmail: "कृपया एक वैध ईमेल दर्ज करें",
    toastValidationMessage: "कृपया अपना संदेश दर्ज करें",
  },
};

// Language configuration
const languageConfig = {
  en: { name: "English", flag: "🇬🇧", dir: "ltr" },
  ru: { name: "Русский", flag: "🇷🇺", dir: "ltr" },
  de: { name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  fr: { name: "Français", flag: "🇫🇷", dir: "ltr" },
  es: { name: "Español", flag: "🇪🇸", dir: "ltr" },
  pt: { name: "Português", flag: "🇵🇹", dir: "ltr" },
  ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" },
  zh: { name: "中文", flag: "🇨🇳", dir: "ltr" },
  ja: { name: "日本語", flag: "🇯🇵", dir: "ltr" },
  hi: { name: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
};

// Get translation by key
function t(key) {
  const currentLang = getCurrentLanguage();
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

// Get current language from localStorage or default to English
function getCurrentLanguage() {
  return localStorage.getItem("language") || "en";
}

// Set language
function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Language '${lang}' not found. Falling back to 'en'.`);
    lang = "en";
  }

  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = languageConfig[lang].dir;

  // Update all translatable elements
  updateTranslations();

  // Trigger custom event for language change
  window.dispatchEvent(
    new CustomEvent("languageChanged", { detail: { language: lang } }),
  );
}

// Update all translatable elements
function updateTranslations() {
  // Update elements with text content
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = t(key);
    element.textContent = translation;
  });

  // Update elements with placeholder attribute
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    const translation = t(key);
    element.placeholder = translation;
  });
}

// Initialize language system on page load
function initializeLanguageSystem() {
  const currentLang = getCurrentLanguage();
  document.documentElement.lang = currentLang;
  document.documentElement.dir = languageConfig[currentLang].dir;
  updateTranslations();
}

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    translations,
    languageConfig,
    t,
    getCurrentLanguage,
    setLanguage,
    updateTranslations,
    initializeLanguageSystem,
  };
}
