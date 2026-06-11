// FILENAME: heroCarousel
// PURPOSE:  handles the carousel slideshow inside home page


// config
const SLIDE_WIDTH_RATIO = 0.62; // active slide takes 62% viewporth width
const PEEK_VISIBLE = 0.05; // how much slides is visible
const AUTO_ADVANCE_MS = 5000; // auto-advance in ms
const SIDE_SCALE = 0.88; // scale of non-active slides

// carousel data
const slides = [
    {   // 1st image
        image : "./assets/images/hero-imgs/sample-1.jpg",
        eyebrow: "Office of Student Affairs - UPV Miag-ao",
        headline: "Supporting every Iskolar ng Bayan.",
        subtext: "The OSA is your partner in student life - from scholarships and counseling to organizations and wellness.",
        cta: { label : "Explore Our Services", href:"#" }
    },

    {   // 2nd image
        image    : "./assets/images/hero-imgs/sample-2.jpg",
        eyebrow  : "Student Wellness",
        headline : "Your well-being matters.",
        subtext  : "OSA offers free, confidential counseling sessions for all enrolled UPV students.",
        cta      : { label: "Book a Session", href: "#" }
    },
    
    {   // 3rd image
        image    : "./assets/images/hero-imgs/sample-3.jpg",
        eyebrow  : "Financial Assistance",
        headline : "Scholarships & grants for you.",
        subtext  : "Learn about STFAP, DOST, and other scholarship programs available to UPV students.",
        cta      : { label: "View Scholarships", href: "./services.html#scholarships" }
    }
]


// build html
function buildCarousel() {
    const heroSection = document.querySelector("#hero-section");
    if (!heroSection) return;

    const heroContent = `
        <div class="carousel-track-wrapper">
            <div id="carousel-track" class="carousel-track">
                ${slides.map((slide, i) => `
                        <div class="carousel-slide ${i === 0 ? "active" : ""}"
                            data-index="${i}"
                            role="group"
                            aria-label="Slide ${i + 1} of ${slides.length}"
                        >

                            <img src="${slide.image}"
                                alt="${slide.eyebrow}"
                                draggable="false"
                            >

                            <div class="carousel-slide-overlay"></div>

                            <div class="carousel-slide-content">
                                <div class="carousel-rule" aria-hidden="true"></div>
                                <div class="carousel-text">
                                    <span class="carousel-eyebrow">${slide.eyebrow}</span>
                                    <h2 class="carousel-headline">${slide.headline}</h2>
                                    <p class="carousel-subtext">${slide.subtext}</p>
                                    <a href="${slide.cta.href}" class="carousel-cta">
                                        ${slide.cta.label}
                                    </a>
                                </div>
                            </div>
                        </div>
                    `).join("")}
            </div>
        </div>

        <div class="carousel-contents">
            <button class="carousel-arrow" id="carousel-prev" aria-label="Previous slide">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            ${slides.map((_, i) => `
                <button class="carousel-dot ${i === 0 ? "active" : ""}"
                    data-index="${i}"
                    aria-label="Go to slide ${i + 1}"
                >
                </button>
            `).join("")}

            <button class="carousel-arrow" id="carousel-next" aria-label="Next slide">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    `;

    heroSection.innerHTML = heroContent;
}


// layout
let currentIndex = 0;
let autoAdvanceTimer = null;

function getSlideWidth() {
    return Math.round(window.innerWidth * SLIDE_WIDTH_RATIO);
}

function getSideGap() {
    // gap between slides so peek amount is right
    const slideWidth = getSlideWidth();
    const peek       = Math.round(window.innerWidth * PEEK_VISIBLE);
    // side slide appears at scale(SIDE_SCALE), so its visible width is slideWidth * SIDE_SCALE
    // we want only `peek` px of it visible
    const scaledWidth = slideWidth * SIDE_SCALE;
    return Math.round(peek - scaledWidth / 2);
}

function applyLayout() {
    const track  = document.getElementById("carousel-track");
    const slides = track.querySelectorAll(".carousel-slide");
    const slideW = getSlideWidth();

    slides.forEach(slide => {
        slide.style.width = `${slideW}px`;
    });

    // gap between slide centers so peeks are correct
    // center of viewport = where active slide should be
    const gap = Math.round((window.innerWidth - slideW) / 2 - slideW * (1 - SIDE_SCALE) / 2);
    track.style.gap = `${Math.max(gap, -slideW * 0.3)}px`;

    applyTranslate(currentIndex, false);
}

function applyTranslate(index, animate = true) {
    const track  = document.getElementById("carousel-track");
    const slideW = getSlideWidth();

    if (!animate) {
        track.style.transition = "none";
    } else {
        track.style.transition = "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)";
    }

    // offset so the active slide is centered in the viewport
    const centerOffset = (window.innerWidth - slideW) / 2;
    const translateX   = centerOffset - index * (slideW + parseInt(track.style.gap || 0));

    track.style.transform = `translateX(${translateX}px)`;
}


// ------------------------------------------------------------
// STATE — update active slide and dots
// ------------------------------------------------------------

function goTo(index) {
    const allSlides = document.querySelectorAll(".carousel-slide");
    const allDots   = document.querySelectorAll(".carousel-dot");

    // clamp
    currentIndex = (index + slides.length) % slides.length;

    allSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
    });

    allDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
        dot.setAttribute("aria-selected", i === currentIndex);
    });

    applyTranslate(currentIndex);
}

function next() { goTo(currentIndex + 1); }
function prev() { goTo(currentIndex - 1); }


// ------------------------------------------------------------
// AUTO ADVANCE
// ------------------------------------------------------------

function startAutoAdvance() {
    stopAutoAdvance();
    autoAdvanceTimer = setInterval(next, AUTO_ADVANCE_MS);
}

function stopAutoAdvance() {
    if (autoAdvanceTimer) {
        clearInterval(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }
}


// ------------------------------------------------------------
// EVENTS
// ------------------------------------------------------------

function bindEvents() {
    document.getElementById("carousel-next")
        .addEventListener("click", () => { next(); startAutoAdvance(); });

    document.getElementById("carousel-prev")
        .addEventListener("click", () => { prev(); startAutoAdvance(); });

    document.querySelectorAll(".carousel-dot").forEach(dot => {
        dot.addEventListener("click", () => {
            goTo(parseInt(dot.dataset.index));
            startAutoAdvance();
        });
    });

    // pause on hover
    const wrapper = document.querySelector(".carousel-track-wrapper");
    wrapper.addEventListener("mouseenter", stopAutoAdvance);
    wrapper.addEventListener("mouseleave", startAutoAdvance);

    // recompute layout on resize
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            applyLayout();
        }, 100);
    });
}




// initialization and export
export function initHeroCarousel() {
    buildCarousel();
    applyLayout();
    bindEvents();
    startAutoAdvance();
}