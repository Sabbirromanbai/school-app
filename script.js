 
      // ================= LANGUAGE SWITCHER =================

const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-bn][data-en]");

/**
 * Page er sob text ebong language button er style update kore
 * @param {string} language - 'en' ba 'bn'
 */
function setLanguage(language) {
  // 1. Text update kora
  translatableElements.forEach((element) => {
    element.textContent = language === "en" ? element.dataset.en : element.dataset.bn;
  });

  // 2. Active/Inactive Button Style update kora
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;

    // Active state classes
    button.classList.toggle("bg-[#00BA74]", isActive);
    button.classList.toggle("text-white", isActive);

    // Inactive state classes
    button.classList.toggle("text-slate-600", !isActive);
    button.classList.toggle("dark:text-gray-300", !isActive);
  });

  // 3. LocalStorage-e preference save kora
  localStorage.setItem("edurlab-language", language);
}

// 4. Event Listeners add kora
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;
    setLanguage(selectedLanguage);
  });
});

// 5. Page Load er somoy Saved Language set kora
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("edurlab-language") || "bn";
  setLanguage(savedLanguage);
});



        // end
      const featureSlides = document.querySelectorAll(".feature-slide");
      const featureDots = document.querySelectorAll(".feature-dot");

      let featureCurrent = 0;

      function showFeatureSlide(index) {
        featureSlides.forEach((slide, i) => {
          slide.classList.toggle("opacity-100", i === index);
          slide.classList.toggle("opacity-0", i !== index);

          if (i === index) {
            slide.classList.add("scale-105");
          } else {
            slide.classList.remove("scale-105");
          }
        });

        featureDots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.remove("w-2", "bg-white/40");
            dot.classList.add("w-8", "bg-[#00BA74]");
          } else {
            dot.classList.remove("w-8", "bg-[#00BA74]");
            dot.classList.add("w-2", "bg-white/40");
          }
        });
      }

      function nextFeatureSlide() {
        featureCurrent++;

        if (featureCurrent >= featureSlides.length) {
          featureCurrent = 0;
        }

        showFeatureSlide(featureCurrent);
      }

      setInterval(nextFeatureSlide, 4500);

      featureDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          featureCurrent = index;
          showFeatureSlide(featureCurrent);
        });
      });

      const mobileAppBtn = document.getElementById("mobileAppBtn");
      const mobileAppMenu = document.getElementById("mobileAppMenu");
      const mobileAppIcon = document.getElementById("mobileAppIcon");

      mobileAppBtn?.addEventListener("click", () => {
        mobileAppMenu.classList.toggle("hidden");
        mobileAppIcon.classList.toggle("rotate-180");
      });

      // End

      const slides = document.querySelectorAll(".school-slide");
      const dots = document.querySelectorAll(".slider-dot");

      const prevButton = document.getElementById("heroPrev");
      const nextButton = document.getElementById("heroNext");

      let currentSlide = 0;
      let autoSlideTimer;

      // ===============================
      // SHOW SLIDE
      // ===============================

      function showSlide(index) {
        // Loop forward
        if (index >= slides.length) {
          index = 0;
        }

        // Loop backward
        if (index < 0) {
          index = slides.length - 1;
        }

        currentSlide = index;

        // Slides
        slides.forEach((slide, slideIndex) => {
          if (slideIndex === currentSlide) {
            slide.classList.add("active");

            slide.classList.remove(
              "opacity-0",
              "invisible",
              "translate-x-12",
              "scale-[0.985]",
            );

            slide.classList.add(
              "opacity-100",
              "visible",
              "translate-x-0",
              "scale-100",
            );
          } else {
            slide.classList.remove(
              "active",
              "opacity-100",
              "visible",
              "translate-x-0",
              "scale-100",
            );

            slide.classList.add(
              "opacity-0",
              "invisible",
              "translate-x-12",
              "scale-[0.985]",
            );
          }
        });

        // Dots
        dots.forEach((dot, dotIndex) => {
          if (dotIndex === currentSlide) {
            dot.classList.add("active", "w-[30px]", "bg-[#00BA74]");

            dot.classList.remove("w-2");
          } else {
            dot.classList.remove("active", "w-[30px]", "bg-[#00BA74]");

            dot.classList.add("w-2", "bg-slate-300");
          }
        });
      }

      // ===============================
      // NEXT
      // ===============================

      function nextSlide() {
        showSlide(currentSlide + 1);
      }

      // ===============================
      // PREVIOUS
      // ===============================

      function previousSlide() {
        showSlide(currentSlide - 1);
      }

      // ===============================
      // AUTO SLIDE
      // ===============================

      function startAutoSlide() {
        clearInterval(autoSlideTimer);

        autoSlideTimer = setInterval(() => {
          nextSlide();
        }, 5000);
      }

      // ===============================
      // NEXT BUTTON
      // ===============================

      nextButton.addEventListener("click", () => {
        nextSlide();

        startAutoSlide();
      });

      // ===============================
      // PREVIOUS BUTTON
      // ===============================

      prevButton.addEventListener("click", () => {
        previousSlide();

        startAutoSlide();
      });

      // ===============================
      // DOT BUTTON
      // ===============================

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          showSlide(index);

          startAutoSlide();
        });
      });

      // ===============================
      // INITIAL
      // ===============================

      showSlide(0);

      startAutoSlide();

      // Theme Toggle
      const themeToggleBtn = document.getElementById("themeToggle");
      const themeIcon = document.getElementById("themeIcon");
      const htmlElement = document.documentElement;

      themeToggleBtn.addEventListener("click", () => {
        if (htmlElement.classList.contains("dark")) {
          htmlElement.classList.remove("dark");
          htmlElement.classList.add("light");
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
          themeIcon.classList.remove("text-amber-400");
          themeIcon.classList.add("text-slate-700");
        } else {
          htmlElement.classList.remove("light");
          htmlElement.classList.add("dark");
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
          themeIcon.classList.remove("text-slate-700");
          themeIcon.classList.add("text-amber-400");
        }
      });

      // Swiper Slider Config for Reviews
      var swiper = new Swiper(".reviewSwiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      });

      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const mobileMenuIcon = document.getElementById("mobileMenuIcon");

      mobileMenuBtn.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.contains("hidden");

        mobileMenu.classList.toggle("hidden");

        mobileMenuIcon.classList.toggle("fa-bars", !isHidden);
        mobileMenuIcon.classList.toggle("fa-xmark", isHidden);

        mobileMenuBtn.setAttribute("aria-expanded", isHidden);
      });

      // Mobile menu click করলে menu close হবে
      document.querySelectorAll(".mobile-nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");

          mobileMenuIcon.classList.remove("fa-xmark");
          mobileMenuIcon.classList.add("fa-bars");

          mobileMenuBtn.setAttribute("aria-expanded", "false");
        });
      });

      const mobileThemeToggle = document.getElementById("mobileThemeToggle");

      mobileThemeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");

        updateThemeIcons();
      });

      function updateThemeIcons() {
        const isDark = document.documentElement.classList.contains("dark");

        const themeIcon = document.getElementById("themeIcon");
        const mobileThemeIcon = document.getElementById("mobileThemeIcon");

        if (isDark) {
          themeIcon.className = "fa-solid fa-sun text-lg";
          mobileThemeIcon.className = "fa-solid fa-sun";
        } else {
          themeIcon.className = "fa-solid fa-moon text-lg";
          mobileThemeIcon.className = "fa-solid fa-moon";
        }
      }

      const statNumbers = document.querySelectorAll(".stat-number");

      const animateStats = () => {
        statNumbers.forEach((stat) => {
          const target = Number(stat.dataset.target);
          const suffix = stat.dataset.suffix;

          let current = 0;
          const duration = 1600;
          const startTime = performance.now();

          const updateNumber = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);

            current = Math.floor(progress * target);

            stat.textContent = current.toLocaleString() + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            }
          };

          requestAnimationFrame(updateNumber);
        });
      };

      const statsSection = document.getElementById("stats");

      const statsObserver = new IntersectionObserver(
        (entries, observer) => {
          if (entries[0].isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        },
        {
          threshold: 0.3,
        },
      );

      statsObserver.observe(statsSection);