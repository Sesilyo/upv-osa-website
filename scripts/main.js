// FILENAME: main.js
// terminal of JavaScript modules

// IMPORTS
import { injectHeader } from "./components/headerComp.js";
import { injectFooter } from "./components/footerComp.js";
import { initHeroCarousel } from "./display-logics/heroCarousel.js";


// FUNCTION CALLS
injectHeader();
initHeroCarousel();
injectFooter();