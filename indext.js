// Smooth scrolling for navbar links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute("href").substring(1); // Get target ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smooth scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for fixed navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});