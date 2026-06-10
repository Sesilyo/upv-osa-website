// FILENAME: footerComp.js
// the header component injected via JavaScript

export function injectFooter() {
    const footerElem = document.querySelector('footer');
    const footerContent = `
        <h1>+--- FOOTER HERE ---+</h1>
    `;

    if (footerElem) {
        footerElem.innerHTML = footerContent;
    }
}