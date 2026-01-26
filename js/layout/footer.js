document.addEventListener("DOMContentLoaded", () => {
    const siteFooter = document.querySelector("footer");

    if (!siteFooter) return;

    siteFooter.innerHTML = `
        <div id="inner-footer">
            <p>(033) 315-9631 local 167</p>
            <p>osa.upvisayas@up.edu.ph</p>
            <p>facebook.com/upvosa</p>
            <p>© Office of Student Affairs — University of the Philippines Visayas</p>
        </div>
    
    `;
});