// FILENAME: headerComp.js
// the header component injected via JavaScript

export function injectHeader() {
    const headerElem = document.querySelector('header');
    const navBar = `
        <div id="main-navbar">
            <a href="#" class="main-navbar-links active">HOME</a>
            <a href="#" class="main-navbar-links active">ABOUT</a>
        </div>
    `;

    if (headerElem) {
        headerElem.innerHTML = navBar;
    }
}