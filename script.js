document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function countdown() {
        const weddingDate = new Date("2025-12-31T00:00:00").getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = weddingDate - now;
            if (timeLeft < 0) {
                document.getElementById("countdown").innerHTML = "Today is the big day!";
                clearInterval(timer);
                return;
            }
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            document.getElementById("countdown").innerHTML = `${days} days to go!`;
        }, 1000);
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in Animation for Sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.6s ease-in-out";
        observer.observe(section);
    });

    // Initialize Countdown
    countdown();
});

