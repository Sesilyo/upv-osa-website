// FILENAME: headerComp.js
// the header component injected via JavaScript

export function injectHeader() {
    const headerElem = document.getElementById('navbar-container');
    const navBar = `
    <div id = "main-navbar">
        <a href = "/index.html" class = "main-navbar-links active">HOME</a>
        <a href = "#" class = "main-navbar-links">SERVICES</a>
        <a href = "#" class = "main-navbar-links">ABOUT</a>
        
        <!-- dropdown container for faculty & staff -->
        <div class = "dropdown">
            <button class  = "dropdown-btn">FACULTY & STAFF ▾</button>
            <div class = "dropdown-content">
                <a href = "../pages/director.html">OSA DIRECTOR</a>
                <a href = "../pages/leadership.html">LEADERSHIP</a>
                <a href = "../pages/units.html">UNITS</a>
            </div>
        </div>
    </div>
    `;

    if (headerElem) {
        headerElem.innerHTML = navBar;
    }
}