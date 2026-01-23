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
                <a href="/index.html" class="header-nav-link" data-nav="home">HOME</a>
                
                <div id="nav-dropdown">
                    <a class="header-nav-link" data-nav="services">SERVICES</a>
                    
                    <div class="dropdown-menu">
                        <a href="/pages/services/counseling.html">Guidance & Counceling</a>
                        <a href="/pages/services/scholarship.html">Scholarship & Financial Aid</a>
                        <a href="/pages/services/resident.html">Residential Services</a>
                        <a href="/pages/services/organizations.html">Student Organizations</a>
                    </div>

                </div>

                <a href="/pages/faculty-contacts.html"  class="header-nav-link" data-nav="faculty">FACULTY & CONTACTS</a>
                <a class="header-nav-link" data-nav="about">ABOUT US</a>
            </nav>

        </div>
    `;


    const currentPage = document.body.dataset.page;
    const navLinks = document.querySelectorAll(".header-nav-link");

    navLinks.forEach(link => {
        if (link.dataset.nav == currentPage) {
            link.classList.add("active");
        }
    });


    const SHRINK_ENTER = 120;
    const SHRINK_EXIT  = 60;

    let isShrink = false;

    window.addEventListener("scroll", () => {
        const y = window.scrollY;

        if (siteHeader.classList.contains("hide")) return;

        if (!isShrink && y > SHRINK_ENTER) {
            siteHeader.classList.add("shrink");
            isShrink = true;
        }

        if (isShrink && y < SHRINK_EXIT) {
            siteHeader.classList.remove("shrink");
            isShrink = false;
        }
    });


    const FOOTER_OBSERVER = new IntersectionObserver(
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
    FOOTER_OBSERVER.observe(siteFooter);
});

console.log("header - okay")