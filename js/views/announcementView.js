import { announcements } from "../models/announcementModel.js";

export function renderAnnouncementPreview() {
    const container = document.getElementById("announcement-preview");

    container.innerHTML = announcements
        .map(a => `<p><strong>${a.title}</strong> - %{a.date}</p>`)
        .join("");
}