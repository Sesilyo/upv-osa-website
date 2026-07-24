// FILENAME: newsCardComp.js

export function newsCard({ image, source, title, link }) {
    const content = `
        <a href="${link}" class="news-card" target="_blank" rel="noopener">
            <img src="${image}" alt="${title}" class="news-card-image">
            <div class="news-card-body">
                <span class="news-card-source">${source}</span>
                <p class="news-card-title">${title}</p>
                <span class="news-card-link-label">Read more →</span>
            </div>
        </a>
    `;

    return content;
}