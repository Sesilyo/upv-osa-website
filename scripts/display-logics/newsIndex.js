// FILENAME: newsIndex.js

import { newsCard } from "../components/newsCardComp.js";

export function renderNews(articles) {

    const container = document.getElementById("univ-news-section");
    if (!container) return;

    const header = `
        <div class="section-header" style="max-width:var(-CONTENT-MAX-WIDTH-); margin: 0 auto var(--SP-8); padding: 0 var(--SP-8);">
            <div class="section-rule" aria-hidden="true"></div>
            <h2 class="section-title">University News</h2>
            <a href="#" class="section-view-all">View all</a>
        </div>
    `;

    const grid = document.createElement("div");
    grid.className = "news-grid";
    grid.innerHTML = articles.map(newsCard).join("");

    container.innerHTML = header;
    container.appendChild(grid);
}