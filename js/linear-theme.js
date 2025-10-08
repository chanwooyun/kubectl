// Linear theme JavaScript

(function() {
  'use strict';

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = 70;
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Carousel
  const carousel = document.querySelector('#introCarousel');
  if (carousel) {
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-control-prev');
    const nextBtn = carousel.querySelector('.carousel-control-next');
    let currentIndex = 0;
    let autoplayInterval;

    function showSlide(index) {
      items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
          item.classList.add('active');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
    }

    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        nextSlide();
        stopAutoplay();
        startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        prevSlide();
        stopAutoplay();
        startAutoplay();
      });
    }

    startAutoplay();
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
  }

  // Testimonials carousel
  const testimonialsCarousel = document.querySelector('.testimonials-carousel');
  if (testimonialsCarousel) {
    const items = testimonialsCarousel.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    // Show first item
    if (items.length > 0) {
      items[0].classList.add('active');
    }

    // Create navigation buttons
    const prevBtn = document.createElement('a');
    prevBtn.className = 'carousel-control-prev';
    prevBtn.href = '#';
    prevBtn.innerHTML = '<span class="ion-chevron-left"></span>';

    const nextBtn = document.createElement('a');
    nextBtn.className = 'carousel-control-next';
    nextBtn.href = '#';
    nextBtn.innerHTML = '<span class="ion-chevron-right"></span>';

    testimonialsCarousel.appendChild(prevBtn);
    testimonialsCarousel.appendChild(nextBtn);

    function showItem(index) {
      items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
          item.classList.add('active');
        }
      });
    }

    function nextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }

    function prevItem() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    }

    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      nextItem();
    });

    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      prevItem();
    });

    // Autoplay
    setInterval(nextItem, 4000);
  }

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Header scroll effect
  const header = document.querySelector('#header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        header.style.background = 'rgba(11, 12, 16, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.background = 'rgba(11, 12, 16, 0.8)';
        header.style.boxShadow = 'none';
      }
    });
  }

  // Active menu on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  window.addEventListener('scroll', function() {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const li = link.parentElement;
      li.classList.remove('menu-active');

      if (link.getAttribute('href') === '#' + current) {
        li.classList.add('menu-active');
      }
    });
  });

  // Mobile navigation
  const mobileToggle = document.createElement('div');
  mobileToggle.className = 'mobile-nav-toggle';
  mobileToggle.innerHTML = '<i class="fa fa-bars"></i>';
  mobileToggle.style.display = 'none';

  // Add to header
  const navContainer = document.querySelector('#nav-menu-container');
  if (navContainer) {
    navContainer.parentElement.appendChild(mobileToggle);
  }

  // Show/hide toggle on mobile
  function checkMobile() {
    if (window.innerWidth <= 768) {
      mobileToggle.style.display = 'block';
    } else {
      mobileToggle.style.display = 'none';
      const navMenu = document.querySelector('.nav-menu');
      if (navMenu) {
        navMenu.classList.remove('mobile-nav-active');
      }
    }
  }

  checkMobile();
  window.addEventListener('resize', checkMobile);

  mobileToggle.addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      navMenu.classList.toggle('mobile-nav-active');
      const icon = this.querySelector('i');
      if (navMenu.classList.contains('mobile-nav-active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const navMenu = document.querySelector('.nav-menu');
      if (navMenu && window.innerWidth <= 768) {
        navMenu.classList.remove('mobile-nav-active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

})();