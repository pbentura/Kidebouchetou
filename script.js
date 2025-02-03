document.addEventListener("DOMContentLoaded", () => {
    // Navbar burger menu
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0)
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                const target = el.dataset.target
                const $target = document.getElementById(target)
                el.classList.toggle("is-active")
                $target.classList.toggle("is-active")
            })
        })
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            })
        })
    })

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        var name = document.querySelector('input[type="text"]').value;
        var email = document.querySelector('input[type="email"]').value;
        var message = document.querySelector('textarea').value;

        if (!name || !email || !message) {
            alert('Tous les champs sont obligatoires !');
            event.preventDefault();
        }
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

    const container = document.createElement("div");
    container.classList.add("floating-letters-container");

    // Créer plusieurs icônes flottantes
    for (let i = 0; i < 10; i++) {
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-wrench", "fa-xs", "floating-letter");

        icon.style.left = Math.random() * 100 + "vw";
        icon.style.animationDelay = Math.random() * 10 + "s";
        icon.style.animationDuration = (10 + Math.random() * 10) + "s";
        icon.style.color = 'black';

        const icon2 = document.createElement("i");
        icon2.classList.add("fa-solid", "fa-faucet-drip", "fa-xs", "floating-letter");

        icon2.style.left = Math.random() * 100 + "vw";
        icon2.style.animationDelay = Math.random() * 10 + "s";
        icon2.style.animationDuration = (10 + Math.random() * 10) + "s";
        icon2.style.color = 'black';

        const icon3 = document.createElement("i");
        icon3.classList.add("fa-solid", "fa-shower", "fa-xs", "floating-letter");

        icon3.style.left = Math.random() * 100 + "vw";
        icon3.style.animationDelay = Math.random() * 10 + "s";
        icon3.style.animationDuration = (10 + Math.random() * 10) + "s";
        icon3.style.color = 'black';


        container.appendChild(icon3);
        container.appendChild(icon2);
        container.appendChild(icon);
    }

    document.body.appendChild(container);
})

