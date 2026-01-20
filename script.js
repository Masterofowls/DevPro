// ===================================
// GLOBAL STATE
// ===================================
let currentPage = 0;
const totalPages = 5;
let isAnimating = false;

// Mobile detection for performance optimization
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  ) || window.innerWidth < 768;
const isReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// Project data for modal
const projectData = {
  ecommerce: {
    title: "E-Commerce Platform",
    description:
      "A comprehensive full-stack e-commerce solution featuring real-time inventory management, secure payment processing with Stripe integration, advanced product search and filtering, user authentication and authorization, shopping cart with persistent storage, order tracking and management, responsive design for all devices, and RESTful API backend. Built with modern technologies for optimal performance and scalability.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redux"],
    features: [
      "Real-time inventory tracking and updates",
      "Secure payment processing with Stripe",
      "Advanced product search and filtering",
      "User authentication with JWT",
      "Shopping cart with local storage",
      "Order management dashboard",
      "Responsive design for all devices",
      "RESTful API with Express.js",
    ],
    liveUrl: "https://example-ecommerce.netlify.app",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    previewUrl: "https://example-ecommerce.netlify.app",
  },
  "ai-dashboard": {
    title: "AI Analytics Dashboard",
    description:
      "An advanced real-time data visualization platform powered by machine learning algorithms. Features include predictive analytics using TensorFlow, interactive charts and graphs with D3.js, real-time data streaming with WebSockets, custom ML models for business insights, automated report generation, multi-user collaboration features, and API integration with various data sources. Perfect for data-driven decision making.",
    tech: [
      "Next.js",
      "Python",
      "TensorFlow",
      "D3.js",
      "WebSocket",
      "PostgreSQL",
      "FastAPI",
    ],
    features: [
      "Predictive analytics with TensorFlow",
      "Real-time data visualization with D3.js",
      "WebSocket for live data streaming",
      "Custom ML model training interface",
      "Automated report generation",
      "Multi-user collaboration",
      "API integration with multiple sources",
      "Dark/Light theme support",
    ],
    liveUrl: "https://example-ai-dashboard.vercel.app",
    githubUrl: "https://github.com/yourusername/ai-dashboard",
    previewUrl: "https://example-ai-dashboard.vercel.app",
  },
  "social-app": {
    title: "Social Media Application",
    description:
      "A modern real-time social networking platform built with React Native for cross-platform mobile development. Features include instant messaging with Firebase, real-time notifications and updates, user profiles with customizable themes, photo and video sharing with cloud storage, friend connections and social graph, activity feeds with infinite scroll, push notifications for mobile, and secure authentication. Designed for seamless user interaction and engagement.",
    tech: [
      "React Native",
      "Firebase",
      "GraphQL",
      "Redux",
      "Expo",
      "Cloud Storage",
    ],
    features: [
      "Real-time messaging with Firebase",
      "Push notifications for mobile devices",
      "Photo and video sharing with compression",
      "User profiles with custom themes",
      "Friend connections and following",
      "Activity feed with infinite scroll",
      "Story feature with 24-hour expiry",
      "GraphQL API for efficient data fetching",
    ],
    liveUrl: "https://example-social-app.netlify.app",
    githubUrl: "https://github.com/yourusername/social-media-app",
    previewUrl: "https://example-social-app.netlify.app",
  },
};

// ===================================
// ENHANCED SPLASH SCREEN
// ===================================
window.addEventListener("load", () => {
  const splashScreen = document.getElementById("splashScreen");
  const progressBar = document.querySelector(".splash-progress-bar");
  const statusText = document.querySelector(".splash-status");

  // Status messages
  const statuses = [
    "Initializing experience...",
    "Loading animations...",
    "Preparing portfolio...",
    "Almost ready...",
  ];

  let statusIndex = 0;

  // Update status text
  const statusInterval = setInterval(() => {
    if (statusIndex < statuses.length) {
      statusText.textContent = statuses[statusIndex];
      statusIndex++;
    }
  }, 500);

  // Animate SVG elements
  anime({
    targets: ".splash-circle",
    strokeDashoffset: [377, 0],
    easing: "easeInOutQuad",
    duration: 2000,
  });

  anime({
    targets: ".splash-hex-outer",
    rotate: 360,
    easing: "linear",
    duration: 8000,
    loop: true,
  });

  anime({
    targets: ".splash-hex-mid",
    rotate: -360,
    easing: "linear",
    duration: 6000,
    loop: true,
  });

  // Wait for animations to complete
  setTimeout(() => {
    clearInterval(statusInterval);
    statusText.textContent = "Ready!";

    // Fade out splash screen
    anime({
      targets: splashScreen,
      opacity: [1, 0],
      scale: [1, 1.1],
      duration: 800,
      easing: "easeInQuad",
      complete: () => {
        splashScreen.classList.add("hidden");
        initializeAnimations();
      },
    });
  }, 3500);
});

// ===================================
// INITIALIZATION
// ===================================
function initializeAnimations() {
  // Animate hero elements
  animateHeroPage();

  // Initialize particle background
  initParticles();

  // Animate navbar
  animateNavbar();

  // Initialize project modal
  initProjectModal();
}

// Old preloader code removed

// ===================================
// HERO PAGE ANIMATIONS
// ===================================
function animateHeroPage() {
  // Animate hero shapes with Anime.js
  anime({
    targets: ".shape-1",
    rotate: 360,
    duration: 20000,
    easing: "linear",
    loop: true,
  });

  anime({
    targets: ".shape-2",
    rotate: -360,
    duration: 15000,
    easing: "linear",
    loop: true,
  });

  anime({
    targets: ".shape-3",
    rotate: 360,
    duration: 10000,
    easing: "linear",
    loop: true,
  });

  anime({
    targets: ".shape-4",
    scale: [1, 1.1, 1],
    opacity: [0.5, 1, 0.5],
    duration: 3000,
    easing: "easeInOutQuad",
    loop: true,
  });

  anime({
    targets: ".code-symbol",
    translateY: [-10, 10],
    duration: 2000,
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });

  anime({
    targets: ".dot",
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
    duration: 2000,
    easing: "easeInOutQuad",
    loop: true,
  });
}

// ===================================
// NAVIGATION
// ===================================
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Animate menu items
  if (navMenu.classList.contains("active")) {
    anime({
      targets: ".nav-item",
      translateX: [-50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: "easeOutQuad",
      duration: 600,
    });
  }
});

// Navigation link clicks
navLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetPage = parseInt(link.dataset.page);
    navigateToPage(targetPage);

    // Close mobile menu
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Animate navbar on initialization
function animateNavbar() {
  anime({
    targets: ".logo",
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 800,
    easing: "easeOutQuad",
  });

  anime({
    targets: ".nav-item",
    translateY: [-30, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, { start: 300 }),
    duration: 600,
    easing: "easeOutQuad",
  });
}

// ===================================
// PAGE NAVIGATION
// ===================================
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const bookPages = document.querySelectorAll(".book-page");

// Update page navigation buttons
function updatePageNavigation() {
  if (currentPage === 0) {
    prevPageBtn.classList.add("hidden");
  } else {
    prevPageBtn.classList.remove("hidden");
  }

  if (currentPage === totalPages - 1) {
    nextPageBtn.classList.add("hidden");
  } else {
    nextPageBtn.classList.remove("hidden");
  }

  // Update active nav link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (parseInt(link.dataset.page) === currentPage) {
      link.classList.add("active");
    }
  });
}

// Navigate to specific page with realistic book page turning
function navigateToPage(pageIndex) {
  if (
    isAnimating ||
    pageIndex === currentPage ||
    pageIndex < 0 ||
    pageIndex >= totalPages
  ) {
    return;
  }

  isAnimating = true;
  const currentPageEl = bookPages[currentPage];
  const nextPageEl = bookPages[pageIndex];
  const direction = pageIndex > currentPage ? "next" : "prev";

  // Reset any existing transforms and inline styles
  currentPageEl.style.transform = "";
  nextPageEl.style.transform = "";
  currentPageEl.style.opacity = "";
  nextPageEl.style.opacity = "";

  // Add page flip classes
  currentPageEl.classList.add("page-flipping");
  currentPageEl.classList.add(direction === "next" ? "flip-next" : "flip-prev");
  nextPageEl.classList.add("page-behind");

  // Realistic book page turn animation with curl effect
  const flipTimeline = anime.timeline({
    easing: "cubicBezier(0.55, 0.085, 0.68, 0.53)",
    complete: () => {
      // Complete cleanup of all animation states
      currentPageEl.classList.remove(
        "active",
        "page-flipping",
        "flip-next",
        "flip-prev",
      );
      nextPageEl.classList.remove("page-behind");

      // Reset all inline styles
      currentPageEl.style.transform = "";
      currentPageEl.style.opacity = "";
      currentPageEl.style.zIndex = "";
      nextPageEl.style.transform = "";
      nextPageEl.style.opacity = "";
      nextPageEl.style.zIndex = "";

      isAnimating = false;
      currentPage = pageIndex;
      updatePageNavigation();
      animatePageContent(pageIndex);
    },
  });

  // Faster, simplified animation for mobile
  const isQuickMode = isMobile || isReducedMotion;
  const durations = isQuickMode
    ? { lift: 150, curl1: 300, curl2: 250, settle: 150, fade: 400 }
    : { lift: 250, curl1: 550, curl2: 450, settle: 250, fade: 800 };

  if (direction === "next") {
    // Forward page turn - realistic curl from right edge with gradual lift
    flipTimeline
      .add({
        targets: currentPageEl,
        rotateY: [0, 15],
        translateZ: [0, 30],
        transformOrigin: "100% 50%",
        duration: durations.lift,
        easing: "easeOutQuad",
        begin: () => {
          nextPageEl.style.zIndex = 5;
          currentPageEl.style.zIndex = 10;
        },
      })
      .add({
        targets: currentPageEl,
        rotateY: [15, 90],
        translateZ: [30, 60],
        transformOrigin: "100% 50%",
        duration: durations.curl1,
        easing: "cubicBezier(0.45, 0.05, 0.55, 0.95)",
      })
      .add({
        targets: currentPageEl,
        rotateY: [90, 165],
        translateZ: [60, 30],
        transformOrigin: "100% 50%",
        duration: durations.curl2,
        easing: "cubicBezier(0.45, 0.05, 0.55, 0.95)",
      })
      .add({
        targets: currentPageEl,
        rotateY: [165, 180],
        translateZ: [30, 0],
        transformOrigin: "100% 50%",
        duration: durations.settle,
        easing: "easeInQuad",
      })
      .add(
        {
          targets: nextPageEl,
          opacity: [0, 1],
          scale: [0.96, 1],
          translateZ: [-10, 0],
          duration: durations.fade,
          easing: "easeOutCubic",
          begin: () => {
            nextPageEl.classList.add("active");
          },
        },
        isQuickMode ? "-=500" : "-=900",
      );
  } else {
    // Backward page turn - realistic curl from left edge with gradual lift
    flipTimeline
      .add({
        targets: currentPageEl,
        rotateY: [0, -15],
        translateZ: [0, 30],
        transformOrigin: "0% 50%",
        duration: durations.lift,
        easing: "easeOutQuad",
        begin: () => {
          nextPageEl.style.zIndex = 5;
          currentPageEl.style.zIndex = 10;
          nextPageEl.style.opacity = 0;
          nextPageEl.style.transform = "scale(0.96) translateZ(-10px)";
        },
      })
      .add({
        targets: currentPageEl,
        rotateY: [-15, -90],
        translateZ: [30, 60],
        transformOrigin: "0% 50%",
        duration: durations.curl1,
        easing: "cubicBezier(0.45, 0.05, 0.55, 0.95)",
      })
      .add({
        targets: currentPageEl,
        rotateY: [-90, -165],
        translateZ: [60, 30],
        transformOrigin: "0% 50%",
        duration: durations.curl2,
        easing: "cubicBezier(0.45, 0.05, 0.55, 0.95)",
      })
      .add({
        targets: currentPageEl,
        rotateY: [-165, -180],
        translateZ: [30, 0],
        transformOrigin: "0% 50%",
        duration: durations.settle,
        easing: "easeInQuad",
      })
      .add(
        {
          targets: nextPageEl,
          opacity: [0, 1],
          scale: [0.96, 1],
          translateZ: [-10, 0],
          rotateY: [0, 0],
          duration: durations.fade,
          easing: "easeOutCubic",
          begin: () => {
            nextPageEl.classList.add("active");
          },
        },
        isQuickMode ? "-=500" : "-=900",
      );
  }
}

// Previous page
prevPageBtn.addEventListener("click", () => {
  navigateToPage(currentPage - 1);
});

// Next page
nextPageBtn.addEventListener("click", () => {
  navigateToPage(currentPage + 1);
});

// Hero button navigation
document.querySelectorAll("[data-navigate]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetPage = parseInt(btn.dataset.navigate);
    navigateToPage(targetPage);
  });
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    navigateToPage(currentPage - 1);
  } else if (e.key === "ArrowRight") {
    navigateToPage(currentPage + 1);
  }
});

// ===================================
// PAGE-SPECIFIC ANIMATIONS
// ===================================
function animatePageContent(pageIndex) {
  // Recreate D3 visualizations when navigating to relevant pages
  recreateD3Visualizations(pageIndex);

  switch (pageIndex) {
    case 1: // About page
      animateAboutPage();
      break;
    case 2: // Skills page
      animateSkillsPage();
      break;
    case 3: // Projects page
      animateProjectsPage();
      break;
    case 4: // Contact page
      animateContactPage();
      break;
  }
}

// About page animations
function animateAboutPage() {
  // Animate hexagon
  anime({
    targets: ".hex-border",
    rotate: 360,
    duration: 30000,
    easing: "linear",
    loop: true,
  });

  // Animate stat numbers
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((stat) => {
    const target = parseInt(stat.dataset.target);
    anime({
      targets: stat,
      innerHTML: [0, target],
      easing: "easeOutQuad",
      duration: 2000,
      round: 1,
    });
  });

  // Animate stat cards
  anime({
    targets: ".stat-card",
    scale: [0.8, 1],
    opacity: [0, 1],
    delay: anime.stagger(150),
    duration: 600,
    easing: "easeOutElastic",
    elasticity: 400,
  });
}

// Skills page animations
function animateSkillsPage() {
  // Animate skill cards
  anime({
    targets: ".skill-card",
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 600,
    easing: "easeOutQuad",
  });

  // Animate skill progress bars
  const skillProgressBars = document.querySelectorAll(".skill-progress");
  skillProgressBars.forEach((bar) => {
    const progress = bar.dataset.progress;
    anime({
      targets: bar,
      width: [`0%`, `${progress}%`],
      duration: 1500,
      easing: "easeOutQuad",
      delay: 300,
    });
  });

  // Animate tech tags
  anime({
    targets: ".tech-tag",
    scale: [0, 1],
    opacity: [0, 1],
    delay: anime.stagger(50, { start: 500 }),
    duration: 400,
    easing: "easeOutElastic",
    elasticity: 500,
  });
}

// Projects page animations
function animateProjectsPage() {
  anime({
    targets: ".project-card",
    translateY: [50, 0],
    opacity: [0, 1],
    rotate: [-5, 0],
    delay: anime.stagger(150),
    duration: 800,
    easing: "easeOutQuad",
  });
}

// Contact page animations
function animateContactPage() {
  anime({
    targets: ".contact-info",
    translateX: [-50, 0],
    opacity: [0, 1],
    duration: 600,
    easing: "easeOutQuad",
  });

  anime({
    targets: ".contact-form",
    translateX: [50, 0],
    opacity: [0, 1],
    duration: 600,
    easing: "easeOutQuad",
  });

  anime({
    targets: ".form-group",
    translateY: [20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, { start: 300 }),
    duration: 500,
    easing: "easeOutQuad",
  });
}

// ===================================
// PARTICLE BACKGROUND
// ===================================
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50; // Reduced from 80 for better performance

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = `rgba(0, 245, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation loop
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    // Connect particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.strokeStyle = `rgba(0, 245, 255, ${0.2 * (1 - distance / 120)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  // Resize canvas
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Mouse interaction
  let mouse = { x: null, y: null, radius: 150 };

  canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

    particles.forEach((particle) => {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        particle.x -= (dx / distance) * 2;
        particle.y -= (dy / distance) * 2;
      }
    });
  });

  canvas.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });
}

// ===================================
// FORM HANDLING
// ===================================
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Animate submit button
  const submitBtn = contactForm.querySelector(".btn-submit");

  anime({
    targets: submitBtn,
    scale: [1, 0.95, 1.05, 1],
    duration: 600,
    easing: "easeInOutQuad",
  });

  // Simulate form submission
  setTimeout(() => {
    // Show success message
    anime({
      targets: ".form-input",
      backgroundColor: ["rgba(26, 26, 46, 0.8)", "rgba(0, 245, 255, 0.1)"],
      duration: 400,
      direction: "alternate",
      easing: "easeInOutQuad",
    });

    // Reset form
    setTimeout(() => {
      contactForm.reset();
      alert("Message sent successfully! (This is a demo)");
    }, 800);
  }, 1000);
});

// ===================================
// SMOOTH SCROLL FOR MOUSE WHEEL
// ===================================
let scrollTimeout;

window.addEventListener(
  "wheel",
  (e) => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      if (e.deltaY > 0) {
        // Scroll down - next page
        navigateToPage(currentPage + 1);
      } else if (e.deltaY < 0) {
        // Scroll up - previous page
        navigateToPage(currentPage - 1);
      }
    }, 100);
  },
  { passive: true },
);

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const intersectionObserverOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Trigger animations
      if (entry.target.classList.contains("skill-card")) {
        const progressBar = entry.target.querySelector(".skill-progress");
        if (progressBar && !progressBar.style.width) {
          const progress = progressBar.dataset.progress;
          anime({
            targets: progressBar,
            width: [`0%`, `${progress}%`],
            duration: 1500,
            easing: "easeOutQuad",
          });
        }
      }
    }
  });
}, intersectionObserverOptions);

// Observe skill cards
document.querySelectorAll(".skill-card").forEach((card) => {
  observer.observe(card);
});

// ===================================
// LOGO ROTATION ANIMATION
// ===================================
anime({
  targets: ".logo-svg",
  rotate: 360,
  duration: 20000,
  easing: "linear",
  loop: true,
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Debounced window resize for better performance
let resizeTimeout;
window.addEventListener(
  "resize",
  () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Recreate D3 visualizations on resize if needed
      if (currentPage === 2 || currentPage === 3) {
        recreateD3Visualizations(currentPage);
      }
    }, 250);
  },
  { passive: true },
);

// Lazy load images when needed
const lazyImages = document.querySelectorAll("image[href]");

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      // Image is already set in HTML, just observe for preloading
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => {
  imageObserver.observe(img);
});

// ===================================
// INITIALIZE ON LOAD
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  updatePageNavigation();
});

// ===================================
// PROJECT MODAL FUNCTIONALITY
// ===================================
let projectModal, modalOverlay, modalClose, modalTitle, modalDescription;
let modalTechList,
  modalFeaturesList,
  modalIframe,
  modalLiveLink,
  modalGithubLink;

// Initialize project modal
function initProjectModal() {
  // Get modal elements
  projectModal = document.getElementById("projectModal");
  modalOverlay = document.querySelector(".modal-overlay");
  modalClose = document.querySelector(".modal-close");
  modalTitle = document.querySelector(".modal-title");
  modalDescription = document.querySelector(".modal-description");
  modalTechList = document.querySelector(".modal-tech-list");
  modalFeaturesList = document.querySelector(".modal-features-list");
  modalIframe = document.querySelector(".modal-iframe");
  modalLiveLink = document.querySelector(".modal-live-link");
  modalGithubLink = document.querySelector(".modal-github-link");

  if (!projectModal) return;

  const viewButtons = document.querySelectorAll(".btn-view");

  viewButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = button.getAttribute("data-project");
      if (projectId && projectData[projectId]) {
        openProjectModal(projectId);
      }
    });
  });

  // Close modal events
  modalClose.addEventListener("click", closeProjectModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeProjectModal();
    }
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
      closeProjectModal();
    }
  });
}

// Open project modal
function openProjectModal(projectId) {
  const project = projectData[projectId];

  // Populate modal content
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  // Set links
  modalLiveLink.href = project.liveUrl;
  modalGithubLink.href = project.githubUrl;

  // Clear and populate tech stack
  modalTechList.innerHTML = "";
  project.tech.forEach((tech) => {
    const badge = document.createElement("span");
    badge.className = "tech-badge";
    badge.textContent = tech;
    modalTechList.appendChild(badge);
  });

  // Clear and populate features
  modalFeaturesList.innerHTML = "";
  project.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    modalFeaturesList.appendChild(li);
  });

  // Load iframe
  modalIframe.src = project.previewUrl;

  // Show modal with animation
  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Animate modal entrance
  anime({
    targets: ".modal-container",
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 600,
    easing: "cubicBezier(0.645, 0.045, 0.355, 1)",
  });
}

// Close project modal
function closeProjectModal() {
  anime({
    targets: ".modal-container",
    scale: [1, 0.8],
    opacity: [1, 0],
    duration: 400,
    easing: "cubicBezier(0.645, 0.045, 0.355, 1)",
    complete: () => {
      projectModal.classList.remove("active");
      document.body.style.overflow = "";
      modalIframe.src = "";
    },
  });
}

// Initialize modal on load
document.addEventListener("DOMContentLoaded", () => {
  initProjectModal();
});

// ===================================
// ADVANCED USER INTERACTIONS
// ===================================

// Smooth Parallax Mouse Tracking for Cards
const interactiveCards = document.querySelectorAll(
  ".project-card, .skill-card, .stat-card",
);

interactiveCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    anime({
      targets: card,
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 300,
      easing: "easeOutQuad",
    });
  });

  card.addEventListener("mouseleave", () => {
    anime({
      targets: card,
      rotateX: 0,
      rotateY: 0,
      duration: 500,
      easing: "easeOutElastic(1, 0.5)",
    });
  });
});

// Ripple Effect for Buttons
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple-effect");

  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

document
  .querySelectorAll(".btn, .btn-primary, .btn-secondary, .btn-view")
  .forEach((button) => {
    button.addEventListener("click", createRipple);
  });

// Magnetic Button Effect
const magneticButtons = document.querySelectorAll(
  ".btn-primary, .btn-secondary",
);

magneticButtons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0, 0)";
  });
});

// Enhanced Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      anime({
        targets: entry.target,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "cubicBezier(0.645, 0.045, 0.355, 1)",
        delay: 100,
      });
      animateOnScroll.unobserve(entry.target);
    }
  });
}, observerOptions);

document
  .querySelectorAll(".project-card, .skill-card, .stat-card")
  .forEach((el) => {
    animateOnScroll.observe(el);
  });

// Optimized Scroll & Swipe Behavior
const bookContainer = document.querySelector(".book-container");
if (bookContainer) {
  let scrollTimeout;
  let isScrolling = false;
  let touchStartX = 0;
  let touchStartY = 0;

  // Check if element has scrollable content
  function hasScrollableContent(element) {
    if (!element) return false;
    const hasVerticalScroll = element.scrollHeight > element.clientHeight;
    const hasHorizontalScroll = element.scrollWidth > element.clientWidth;
    return hasVerticalScroll || hasHorizontalScroll;
  }

  // Check if element or its parents are scrollable
  function isScrollableElement(target) {
    let el = target;
    while (el && el !== bookContainer) {
      if (hasScrollableContent(el)) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        const overflowX = style.overflowX;
        if (
          overflowY === "auto" ||
          overflowY === "scroll" ||
          overflowX === "auto" ||
          overflowX === "scroll"
        ) {
          return true;
        }
      }
      el = el.parentElement;
    }
    return false;
  }

  // Optimized wheel event with better throttling and scroll detection
  bookContainer.addEventListener(
    "wheel",
    (e) => {
      // Allow scrolling within scrollable elements
      if (isScrollableElement(e.target)) {
        return;
      }

      if (isScrolling) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1;
        if (Math.abs(e.deltaY) > 50) {
          isScrolling = true;
          navigateToPage(currentPage + direction);
          setTimeout(() => {
            isScrolling = false;
          }, 800);
        }
      }, 100);
    },
    { passive: true },
  );

  // Touch swipe support for mobile
  let touchStartElement = null;

  bookContainer.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartElement = e.target;
    },
    { passive: true },
  );

  bookContainer.addEventListener(
    "touchend",
    (e) => {
      if (isScrolling) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Check if started within scrollable element
      if (isScrollableElement(touchStartElement)) {
        // Only navigate on horizontal swipe if within scrollable element
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 80) {
          isScrolling = true;
          const direction = diffX > 0 ? 1 : -1;
          navigateToPage(currentPage + direction);
          setTimeout(() => {
            isScrolling = false;
          }, 800);
        }
        return;
      }

      // Horizontal swipe (page navigation)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        isScrolling = true;
        const direction = diffX > 0 ? 1 : -1;
        navigateToPage(currentPage + direction);
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
      // Vertical swipe (page navigation) - only if not in scrollable area
      else if (Math.abs(diffY) > 50) {
        isScrolling = true;
        const direction = diffY > 0 ? 1 : -1;
        navigateToPage(currentPage + direction);
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    },
    { passive: true },
  );
}

// Interactive Skill Bars with Hover
document.querySelectorAll(".skill-card").forEach((card) => {
  const progressBar = card.querySelector(".skill-progress");
  if (progressBar) {
    card.addEventListener("mouseenter", () => {
      anime({
        targets: progressBar,
        scaleY: [1, 1.5],
        duration: 300,
        easing: "easeOutQuad",
      });
    });

    card.addEventListener("mouseleave", () => {
      anime({
        targets: progressBar,
        scaleY: [1.5, 1],
        duration: 300,
        easing: "easeOutQuad",
      });
    });
  }
});

// Haptic Feedback Simulation (Visual Feedback)
function visualFeedback(element) {
  anime({
    targets: element,
    scale: [1, 0.95, 1],
    duration: 200,
    easing: "easeInOutQuad",
  });
}

document.querySelectorAll(".nav-link, .page-nav").forEach((el) => {
  el.addEventListener("click", () => visualFeedback(el));
});

// Enhanced Contact Form Interactions
const contactFormElement = document.getElementById("contactForm");
if (contactFormElement) {
  const formInputs = contactFormElement.querySelectorAll("input, textarea");

  formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      anime({
        targets: input,
        borderColor: ["rgba(0, 245, 255, 0.2)", "rgba(0, 245, 255, 1)"],
        boxShadow: [
          "0 0 0 rgba(0, 245, 255, 0)",
          "0 0 20px rgba(0, 245, 255, 0.5)",
        ],
        duration: 300,
        easing: "easeOutQuad",
      });
    });

    input.addEventListener("blur", () => {
      anime({
        targets: input,
        borderColor: ["rgba(0, 245, 255, 1)", "rgba(0, 245, 255, 0.2)"],
        boxShadow: [
          "0 0 20px rgba(0, 245, 255, 0.5)",
          "0 0 0 rgba(0, 245, 255, 0)",
        ],
        duration: 300,
        easing: "easeOutQuad",
      });
    });
  });
}

// ===================================
// D3.JS DATA VISUALIZATIONS
// ===================================

// Skills Radar Chart
function createSkillsRadarChart() {
  const container = document.getElementById("skillsRadarChart");
  if (!container) return;

  const width = Math.min(600, container.clientWidth);
  const height = Math.min(500, width);
  const margin = 80;
  const radius = Math.min(width, height) / 2 - margin;

  // Skills data
  const skills = [
    { skill: "React", value: 95 },
    { skill: "Node.js", value: 88 },
    { skill: "TypeScript", value: 90 },
    { skill: "Python", value: 85 },
    { skill: "MongoDB", value: 82 },
    { skill: "AWS", value: 78 },
    { skill: "Docker", value: 80 },
    { skill: "GraphQL", value: 87 },
  ];

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create gradient
  const defs = svg.append("defs");
  const gradient = defs.append("radialGradient").attr("id", "radarGradient");
  gradient
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#00f5ff")
    .attr("stop-opacity", 0.8);
  gradient
    .append("stop")
    .attr("offset", "50%")
    .attr("stop-color", "#7b2ff7")
    .attr("stop-opacity", 0.6);
  gradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#fc00ff")
    .attr("stop-opacity", 0.4);

  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const angleSlice = (Math.PI * 2) / skills.length;

  // Draw grid circles
  const levels = 5;
  for (let i = 1; i <= levels; i++) {
    const levelRadius = (radius / levels) * i;
    g.append("circle")
      .attr("r", levelRadius)
      .attr("class", "radar-grid-line")
      .style("fill", "none")
      .style("stroke", "rgba(0, 245, 255, 0.1)")
      .style("stroke-width", 1);
  }

  // Draw axes
  skills.forEach((d, i) => {
    const angle = angleSlice * i - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    g.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", x)
      .attr("y2", y)
      .attr("class", "radar-axis-line");

    // Add labels
    const labelRadius = radius + 30;
    const labelX = Math.cos(angle) * labelRadius;
    const labelY = Math.sin(angle) * labelRadius;

    g.append("text")
      .attr("x", labelX)
      .attr("y", labelY)
      .attr("class", "radar-label")
      .text(d.skill)
      .style("text-anchor", "middle")
      .style("dominant-baseline", "middle");
  });

  // Create area path
  const radarLine = d3
    .lineRadial()
    .radius((d) => (d.value / 100) * radius)
    .angle((d, i) => i * angleSlice);

  const area = g
    .append("path")
    .datum(skills)
    .attr("class", "radar-area")
    .attr("d", radarLine)
    .style("fill", "url(#radarGradient)")
    .style("fill-opacity", 0)
    .style("stroke", "#00f5ff")
    .style("stroke-width", 2);

  // Animate area
  area.transition().duration(1500).style("fill-opacity", 0.3);

  // Add data points
  skills.forEach((d, i) => {
    const angle = angleSlice * i - Math.PI / 2;
    const r = (d.value / 100) * radius;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    g.append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 0)
      .attr("class", "radar-point")
      .style("fill", "#00f5ff")
      .style("stroke", "white")
      .style("stroke-width", 2)
      .transition()
      .delay(i * 100)
      .duration(500)
      .attr("r", 5);
  });
}

// Technology Network Graph
function createTechNetworkGraph() {
  const container = document.getElementById("techNetworkGraph");
  if (!container) return;

  const width = Math.min(700, container.clientWidth);
  const height = Math.min(500, width * 0.7);

  const nodes = [
    { id: "React", group: 1, size: 25 },
    { id: "Node.js", group: 2, size: 25 },
    { id: "MongoDB", group: 2, size: 20 },
    { id: "Express", group: 2, size: 18 },
    { id: "TypeScript", group: 1, size: 22 },
    { id: "Next.js", group: 1, size: 20 },
    { id: "GraphQL", group: 3, size: 18 },
    { id: "PostgreSQL", group: 2, size: 18 },
    { id: "Docker", group: 3, size: 20 },
    { id: "AWS", group: 3, size: 22 },
    { id: "Redux", group: 1, size: 16 },
    { id: "Jest", group: 3, size: 15 },
  ];

  const links = [
    { source: "React", target: "TypeScript" },
    { source: "React", target: "Next.js" },
    { source: "React", target: "Redux" },
    { source: "Node.js", target: "Express" },
    { source: "Node.js", target: "MongoDB" },
    { source: "Node.js", target: "PostgreSQL" },
    { source: "GraphQL", target: "React" },
    { source: "GraphQL", target: "Node.js" },
    { source: "Docker", target: "Node.js" },
    { source: "AWS", target: "Docker" },
    { source: "Jest", target: "React" },
    { source: "TypeScript", target: "Node.js" },
  ];

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const colorScale = d3
    .scaleOrdinal()
    .domain([1, 2, 3])
    .range(["#00f5ff", "#7b2ff7", "#fc00ff"]);

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(80),
    )
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force(
      "collision",
      d3.forceCollide().radius((d) => d.size + 10),
    );

  const link = svg
    .append("g")
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "network-link")
    .style("stroke", "rgba(0, 245, 255, 0.2)")
    .style("stroke-width", 1.5);

  const node = svg
    .append("g")
    .selectAll("g")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "network-node")
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended),
    );

  node
    .append("circle")
    .attr("r", (d) => d.size)
    .style("fill", (d) => colorScale(d.group))
    .style("stroke", "rgba(0, 245, 255, 0.5)")
    .style("stroke-width", 2);

  node
    .append("text")
    .text((d) => d.id)
    .attr("dy", (d) => d.size + 15)
    .style("fill", "#ffffff")
    .style("font-size", "11px")
    .style("font-weight", "600")
    .style("text-anchor", "middle");

  // Hover effects
  node
    .on("mouseover", function (event, d) {
      d3.select(this)
        .select("circle")
        .transition()
        .duration(300)
        .attr("r", d.size + 5)
        .style("filter", "drop-shadow(0 0 10px rgba(0, 245, 255, 0.8))");

      link
        .style("stroke", (l) =>
          l.source.id === d.id || l.target.id === d.id
            ? "#00f5ff"
            : "rgba(0, 245, 255, 0.2)",
        )
        .style("stroke-width", (l) =>
          l.source.id === d.id || l.target.id === d.id ? 3 : 1.5,
        );
    })
    .on("mouseout", function (event, d) {
      d3.select(this)
        .select("circle")
        .transition()
        .duration(300)
        .attr("r", d.size)
        .style("filter", "none");

      link.style("stroke", "rgba(0, 245, 255, 0.2)").style("stroke-width", 1.5);
    });

  simulation.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("transform", (d) => `translate(${d.x},${d.y})`);
  });

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }
}

// Project Timeline
function createProjectTimeline() {
  const container = document.getElementById("projectTimeline");
  if (!container) return;

  const margin = { top: 40, right: 40, bottom: 60, left: 100 };
  const width =
    Math.min(900, container.clientWidth) - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const projects = [
    {
      name: "E-Commerce Platform",
      startDate: new Date(2023, 0),
      endDate: new Date(2023, 5),
      progress: 100,
    },
    {
      name: "AI Dashboard",
      startDate: new Date(2023, 4),
      endDate: new Date(2023, 11),
      progress: 95,
    },
    {
      name: "Social Media App",
      startDate: new Date(2023, 10),
      endDate: new Date(2024, 3),
      progress: 90,
    },
    {
      name: "API Gateway",
      startDate: new Date(2024, 2),
      endDate: new Date(2024, 7),
      progress: 80,
    },
  ];

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Create scales
  const xScale = d3
    .scaleTime()
    .domain([
      d3.min(projects, (d) => d.startDate),
      d3.max(projects, (d) => d.endDate),
    ])
    .range([0, width]);

  const yScale = d3
    .scaleBand()
    .domain(projects.map((d) => d.name))
    .range([0, height])
    .padding(0.3);

  const colorScale = d3
    .scaleLinear()
    .domain([0, 50, 100])
    .range(["#fc00ff", "#7b2ff7", "#00f5ff"]);

  // Add axes
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale).ticks(6))
    .style("color", "#a8a8b3")
    .selectAll("text")
    .style("font-family", "Fira Code, monospace")
    .style("font-size", "10px");

  svg
    .append("g")
    .call(d3.axisLeft(yScale))
    .style("color", "#a8a8b3")
    .selectAll("text")
    .style("font-family", "Space Grotesk, sans-serif")
    .style("font-size", "12px")
    .style("font-weight", "600");

  // Create tooltip
  const tooltip = d3
    .select(container)
    .append("div")
    .attr("class", "timeline-tooltip")
    .style("position", "absolute")
    .style("background", "rgba(26, 26, 46, 0.95)")
    .style("border", "1px solid #00f5ff")
    .style("border-radius", "8px")
    .style("padding", "12px")
    .style("opacity", 0);

  // Add bars
  svg
    .selectAll(".timeline-bar")
    .data(projects)
    .enter()
    .append("rect")
    .attr("class", "timeline-bar")
    .attr("x", (d) => xScale(d.startDate))
    .attr("y", (d) => yScale(d.name))
    .attr("width", 0)
    .attr("height", yScale.bandwidth())
    .attr("rx", 8)
    .style("fill", (d) => colorScale(d.progress))
    .style("opacity", 0.7)
    .on("mouseover", function (event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("filter", "drop-shadow(0 0 10px rgba(0, 245, 255, 0.8))");

      tooltip.transition().duration(200).style("opacity", 1);
      tooltip
        .html(
          `
        <h4>${d.name}</h4>
        <p>Start: ${d.startDate.toLocaleDateString()}</p>
        <p>End: ${d.endDate.toLocaleDateString()}</p>
        <p>Progress: ${d.progress}%</p>
      `,
        )
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY - 40 + "px");
    })
    .on("mouseout", function () {
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 0.7)
        .style("filter", "none");

      tooltip.transition().duration(200).style("opacity", 0);
    })
    .transition()
    .duration(1000)
    .delay((d, i) => i * 200)
    .attr("width", (d) => xScale(d.endDate) - xScale(d.startDate));
}

// Initialize D3 visualizations when page loads
document.addEventListener("DOMContentLoaded", () => {
  // Wait for page to be visible before creating visualizations
  setTimeout(() => {
    createSkillsRadarChart();
    createTechNetworkGraph();
    createProjectTimeline();
  }, 500);
});

// Recreate visualizations when navigating to relevant pages
function recreateD3Visualizations(pageIndex) {
  if (pageIndex === 2) {
    // Skills page
    setTimeout(() => {
      const radarContainer = document.getElementById("skillsRadarChart");
      const networkContainer = document.getElementById("techNetworkGraph");
      if (radarContainer && radarContainer.children.length === 0) {
        createSkillsRadarChart();
      }
      if (networkContainer && networkContainer.children.length === 0) {
        createTechNetworkGraph();
      }
    }, 300);
  } else if (pageIndex === 3) {
    // Projects page
    setTimeout(() => {
      const timelineContainer = document.getElementById("projectTimeline");
      if (timelineContainer && timelineContainer.children.length === 0) {
        createProjectTimeline();
      }
    }, 300);
  }
}

// ===================================
// THEME TRANSITION EFFECT
// ===================================
document.querySelectorAll(".book-page").forEach((page) => {
  page.addEventListener("transitionstart", () => {
    // Add subtle scale effect during transition
    anime({
      targets: page.querySelector(".page-content"),
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 600,
      easing: "easeOutQuad",
    });
  });
});

// ===================================
// PWA SERVICE WORKER REGISTRATION
// ===================================
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "✅ Service Worker registered successfully:",
          registration.scope,
        );

        // Check for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New service worker available, prompt user to refresh
              if (confirm("New version available! Refresh to update?")) {
                newWorker.postMessage({ type: "SKIP_WAITING" });
                window.location.reload();
              }
            }
          });
        });
      })
      .catch((error) => {
        console.log("❌ Service Worker registration failed:", error);
      });
  });

  // Handle service worker controller change
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}
