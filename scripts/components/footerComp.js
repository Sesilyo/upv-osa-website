// FILENAME: footerComp.js
// the header component injected via JavaScript

export function injectFooter() {
    const footerElem = document.querySelector('footer');
    const footerContent = `
        <div id="footer-inner">

            <!-- brand column -->
            <div id="footer-brand">
                <img    src="./assets/images/logos/UP_Visayas_Logo.svg.png"
                        alt="University of the Philippines Visayas seal"
                        id="footer-seal"
                >

                <div id="footer-brand-text">
                    <p id="footer-university">University of the Philippines Visayas</p>
                    <p id="footer-unit">Office of Student Affairs</p>
                    <address id="footer-address">
                        Miag-ao, Iloilo 5023<br>
                        <a href="mailto:osa.upv@up.edu.ph">osa.upv@up.edu.ph</a>
                    </address>
                </div>
            </div>

            <!-- nav columns -->
            <div id="footer-nav-columns">
                <nav class="footer-nav-col" aria-label="Services">
                    <p class="footer-nav-heading">Services</p>
                    <ul role="list">
                        <li><a href="#">Guidance &amp; Counseling</a></li>
                        <li><a href="#">Student Organizations</a></li>
                        <li><a href="#">Scholarships</a></li>
                        <li><a href="#">Residential Servces</a></li>
                    </ul>
                </nav>
                        
                <nav class="footer-nav-col" aria-label="Office">        
                    <p class="footer-nav-heading">Offices</p>
                    <ul role="list">
                        <li><a href="#">About OSA</a></li>
                        <li><a href="#">Faculty &amp; Staff</a></li>
                        <li><a href="#">Mandate</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <nav class="footer-nav-col" aria-label="Resources">        
                    <p class="footer-nav-heading">Resources</p>
                    <ul role="list">
                        <li><a href="#">Forms &amp; Documents</a></li>
                        <li><a href="#">Student Handbook</a></li>
                        <li><a href="#">OSA Announcements</a></li>
                        <li><a href="#">University</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <!-- bottom bar -->
        <div id="footer-bottom">
            <span id="footer-copyright">
                &copy; ${new Date().getFullYear()} University of the Philippines Visayas.
                All rights reserved.
            </span>

            <div id="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Accessibility</a>
                <a href="#">Staff Login</a>
            </div>
        </div>
    `;

    if (footerElem) {
        footerElem.innerHTML = footerContent;
    }
}