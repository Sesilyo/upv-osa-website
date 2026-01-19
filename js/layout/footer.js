document.addEventListener("DOMContentLoaded", () => {
    const siteFooter = document.querySelector("footer");

    if (!siteFooter) return;

    siteFooter.innerHTML = `
        <div id="inner-footer">
            <p>© Office of Student Affairs — University of the Philippines Visayas</p>
        </div>
    
    `;
});