document.addEventListener("DOMContentLoaded", () => {

    const siteHeader = document.querySelector("header");
    const siteFooter = document.querySelector("footer");
    
    if (!siteHeader || !siteFooter) return;

    siteHeader.innerHTML = `
        <div id="inner-header">
            <div id="header-left">
                <div id="logos">
                    <img src="/assets/images/logos/UPV-logo.png" alt="UPV logo" id="UPV-logo">
                </div>

                <div id="header-branding">
                    <h1 id="title">Office of Student Affairs</h1>
                    <h2 id="subtitle">University of the Philippines Visayas</h2>
                </div>
            </div>

    
            <nav id="header-nav">
                <a class="header-nav-link active">HOME</a>
                
                <div id="nav-dropdown">
                    <a class="header-nav-link">SERVICES</a>
                    
                    <div class="dropdown-menu">
                        <a href="/pages/services/counseling.html">Guidance & Counceling</a>
                        <a href="/pages/services/scholarship.html">Scholarship & Financial Aid</a>
                        <a href="/pages/services/resident.html">Residential Services</a>
                        <a href="/pages/services/organizations.html">Student Organizations</a>
                    </div>

                </div>

                <a href="/pages/faculty-contacts.html"  class="header-nav-link">FACULTY & CONTACTS</a>
                <a class="header-nav-link">ABOUT US</a>
            </nav>

        </div>
    `;


    const hero = document.querySelector("#hero");

    const shrinkObserver = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                siteHeader.classList.add("shrink");
            } else {
                siteHeader.classList.remove("shrink");
            }
        },
        {
            root: null,
            threshold: 0.9,
        }
    );

    shrinkObserver.observe(hero);


    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                siteHeader.classList.add("hide");
            } else {
                siteHeader.classList.remove("hide");
            }
        },

        {
            root: null,
            threshold: 0.1,
        }
    );
    observer.observe(siteFooter);
});

console.log("header - okay")