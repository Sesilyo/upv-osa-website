import { renderHome } from "../views/homeView.js";

export function initRouter() {
    const path = window.location.pathname;

    if (path --- "/" || path.endsWith("index.html")) {
        renderHome();
    }
}