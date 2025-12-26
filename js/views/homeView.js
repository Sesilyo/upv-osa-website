export function renderHome() {
    const app = document.getElementById("app");

    app.innerHTML = `
    <section class="hero">
        <h1>Office of Student Affairs</h1>
        <p>Supporting student life and development</p>
    </section>
    
    <section class="quick-links">
        <h2>Quick Links</h2>
        <div class="card-grid">
            <div class="card">Scholarships</div>
            <div class="card">Guidance</div>
            <div class="card">Activities</div>
            <div class="card">Forms</div>
        </div>
    </section>

    <section class="about">
        <h2>What is the OSA?</h2>
        <p>The Office of the Student Affairs provides...</p>
    </section>

    <section class="announcements-preview">
        <h2>Announcements</h2>
        <div id="announcement-preview"></div>
    </section>
    `;
}