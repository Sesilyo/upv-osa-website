// FILENAME: headerComp.js
// the header component injected via JavaScript

export function injectHeader() {
    const headerElem = document.getElementById('navbar-container');
    const navBar = `
        <div id="main-navbar">
            <a href="#" class="main-navbar-links active">HOME</a>
            <a href="#" class="main-navbar-links">SERVICES</a>
            <a href="#" class="main-navbar-links">ABOUT</a>
            <a href="#" class="main-navbar-links">FACULTY & STAFF</a>
        </div>
    `;

    if (headerElem) {
        headerElem.innerHTML = navBar;
    }
}