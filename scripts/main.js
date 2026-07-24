// FILENAME: main.js
// terminal of JavaScript modules

// IMPORTS
import { injectHeader } from "./components/headerComp.js";
import { injectFooter } from "./components/footerComp.js";
import { initHeroCarousel } from "./display-logics/heroCarousel.js";
import { renderAnnouncements } from "./display-logics/announcementsIndex.js";
import { renderNews } from "./display-logics/newsIndex.js";

// FUNCTION CALLS
const page = window.location.pathname.split("/").pop();

document.addEventListener("DOMContentLoaded", () => {
    injectHeader();

    if (page === "index.html" || page === "") {
            initHeroCarousel();
            renderAnnouncements([
                {
                    tag     : "General",
                    title   : "OSA office hours adjusted for midterm period",
                    date    : "June 10, 2026",
                    excerpt : "The OSA will observe modified hours from June 14–18.",
                    link    : "#"
                },
                {
                    tag     : "Academic",
                    title   : "STFAP bracket re-evaluation now open",
                    date    : "June 8, 2026",
                    excerpt : "Students may submit documents until June 30.",
                    link    : "#"
                },
                {
                    tag     : "Events",
                    title   : "Wellness Week 2026 registration open",
                    date    : "June 5, 2026",
                    excerpt : "Join OSA's Wellness Week from June 22–26.",
                    link    : "#"
                },
            ]);
        
            renderNews([
            {
                image  : "./assets/images/hero-imgs/sample-1.jpg",
                source : "UPV Official",
                title  : "UP System launches new mental health framework for state universities",
                link   : "#"
            },
            {
                image  : "./assets/images/hero-imgs/sample-2.jpg",
                source : "Philippine Collegian",
                title  : "Tuition-free policy extended for AY 2025–2026",
                link   : "#"
            },
            {
                image  : "./assets/images/hero-imgs/sample-3.jpg",
                source : "UPV Announcements",
                title  : "UPV Miag-ao ranked among top research universities in Western Visayas",
                link   : "#"
            },
        ]);
    }


    injectFooter();
})