import { initRouter }   from "./controllers/router.js";
import { renderHeader } from "./views/headerView.js";
import { renderFooter } from "./views/footerView.js"

document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    initRouter();
});