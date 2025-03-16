document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function countdown() {
        const weddingDate = new Date("2025-04-18T00:00:00").getTime();
        const timer = setInterval(() => {
          const now = new Date().getTime();
          const timeLeft = weddingDate - now;
          
          // Still counting down
          if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            document.getElementById("countdown").innerHTML = `Only ${days} days until forever begins!`;
          } 
          // Wedding day (within 24 hours after the wedding start)
          else if (timeLeft > -86400000) { // 86400000ms = 24 hours
            document.getElementById("countdown").innerHTML = "Today is the big day!";
          } 
          // After wedding day
          else {
            document.getElementById("countdown").innerHTML = "Forever has begun";
            clearInterval(timer);
          }
        }, 1000);
      }

// document.addEventListener("DOMContentLoaded", function () {
//     function countdown() {
//       const weddingDateObj = new Date("2025-03-09T00:00:00");
//       const timer = setInterval(() => {
//         const now = new Date();
        
//         // Check if wedding day is over
//         if (now < weddingDateObj) {
//           clearInterval(timer);
//           document.getElementById("countdown").style.display = "none";
//           return;
//         }
        
//         // Check if today is the wedding day
//         if (now.toDateString() === weddingDateObj.toDateString()) {
//           document.getElementById("countdown").innerHTML = "Today is the big day!";
//         } else {
//           // Before wedding day: show days left
//           const timeLeft = weddingDateObj.getTime() - now.getTime();
//           const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//           document.getElementById("countdown").innerHTML = `${days} days to go!`;
//         }
//       }, 1000);
//     }
//     countdown();
//   });
  
      

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

    document.querySelectorAll('.img-fluid').forEach(img => {
        img.addEventListener('click', function() {
          const modalImage = document.getElementById('modalImage');
          // Set the modal image source to the clicked image source
          modalImage.src = this.src;
          // Create and show the modal
          const modal = new bootstrap.Modal(document.getElementById('imageModal'));
          modal.show();
        });
    });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });
});