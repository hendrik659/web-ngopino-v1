let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");

  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  slides[currentSlide].classList.add("active");
}

// Auto slide
setInterval(() => {
  changeSlide(1);
}, 5000);

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger i");

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-times");
  } else {
    hamburger.classList.remove("fa-times");
    hamburger.classList.add("fa-bars");
  }
}

// Tambahkan smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Tutup menu mobile jika terbuka
      const navLinks = document.querySelector(".nav-links");
      if (navLinks.classList.contains("active")) {
        toggleMenu();
      }
    }
  });
});

// Tambahkan efek parallax sederhana
window.addEventListener("scroll", function () {
  const carousel = document.querySelector(".hero-carousel");
  const scrolled = window.pageYOffset;
  const rate = scrolled * 0.5;

  if (window.innerWidth > 768) {
    // Hanya aktif di desktop
    carousel.style.transform = `translate3d(0, ${rate}px, 0)`;
  }
});

// Tambahkan script untuk efek scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
