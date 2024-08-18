// Script for Scroll Animations

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition > sectionTop + sectionHeight / 4) {
                section.classList.add("visible");
                section.classList.remove("hidden");
            } else {
                section.classList.remove("visible");
                section.classList.add("hidden");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on page load
});
