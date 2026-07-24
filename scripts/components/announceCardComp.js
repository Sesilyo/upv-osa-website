// FILENAME: announceCardComp.js

export function announcementCard({ tag, title, date, excerpt, link }) {
    const content = `
        <article class="announce-card">
            <span class="announce-tag announce-tag-${tag.toLowerCase()}">${tag}</span>
            <div class="announce-card-content">
                <p class="announce-card-title">${title}</p>
                <p class="announce-card-date">${date}</p>
                <p class="announce-card-excerpt">${excerpt}</p>
            </div>
            <a href="${link}">Read more</a>

        </article>
    `;

    return content;
}