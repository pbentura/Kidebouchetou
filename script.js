document.addEventListener("DOMContentLoaded", () => {

    // Navbar burger menu
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    const textContainer = document.querySelector(".text-container");
    const navItems = document.querySelectorAll(".navbar-item");

    // Ajouter la classe pour afficher l'animation
    setTimeout(() => {
        textContainer.classList.add("show");
    }, 500);

    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, 700 + index * 200);
    });

    // Fonction pour créer les icônes flottantes
    function createFloatingIcons() {
        const container = document.createElement("div");
        container.classList.add("floating-letters-container");
        container.id = "floating-icons-container";

        for (let i = 0; i < 10; i++) {
            const icons = ["fa-wrench", "fa-faucet-drip", "fa-shower"];
            const iconClass = icons[i % icons.length]; // Alterner entre les icônes

            const icon = document.createElement("i");
            icon.classList.add("fa-solid", iconClass, "fa-xs", "floating-letter");
            icon.style.left = Math.random() * 100 + "vw";
            icon.style.animationDelay = Math.random() * 10 + "s";
            icon.style.animationDuration = (10 + Math.random() * 10) + "s";
            icon.style.color = "black";

            container.appendChild(icon);
        }

        document.body.appendChild(container);
    }

    // Vérifier si l'utilisateur est sur l'accueil
    function checkHomePage() {
        const accueilSection = document.querySelector("#accueil");
        const floatingIconsContainer = document.getElementById("floating-icons-container");

        if (accueilSection && window.scrollY < accueilSection.offsetHeight) {
            if (!floatingIconsContainer) {
                createFloatingIcons();
            }
        } else {
            if (floatingIconsContainer) {
                floatingIconsContainer.remove();
            }
        }
    }

    // Vérification initiale
    // checkHomePage();
    //
    // // Ajouter un événement au scroll pour vérifier si on quitte l'accueil
    // window.addEventListener("scroll", checkHomePage);

    AOS.init({
        duration: 1000,
    });
});
