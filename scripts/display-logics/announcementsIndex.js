// FILENAME: announcementsIndex.js

import { announcementCard } from "../components/announceCardComp.js";

export function renderAnnouncements(announcements) {
    const container = document.getElementById("osa-announcements-section");
    const grid = document.createElement("div");
    grid.checkVisibility;
    grid.className = "announcements-grid";

    grid.innerHTML = announcements.map(announcementCard).join("");
    container.appendChild(grid);
}