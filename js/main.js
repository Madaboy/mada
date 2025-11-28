// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const content = item.querySelector('.faq-content');
    const icon = btn.querySelector('.faq-icon');

    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-content').classList.remove('open');
        otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
      }
    });

    // Toggle current FAQ
    content.classList.toggle('open');
    icon.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Video Carousel
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselDots = document.querySelectorAll('.carousel-dot');
let currentSlide = 0;
const slideInterval = 4000; // 4 seconds

function showSlide(index) {
  // Remove active class from all slides and dots
  carouselSlides.forEach(slide => slide.classList.remove('active'));
  carouselDots.forEach(dot => dot.classList.remove('active'));
  
  // Add active class to current slide and dot
  carouselSlides[index].classList.add('active');
  carouselDots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  showSlide(currentSlide);
}

// Auto-advance carousel
let carouselTimer = setInterval(nextSlide, slideInterval);

// Manual navigation with dots
carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    
    // Reset timer when manually changing slide
    clearInterval(carouselTimer);
    carouselTimer = setInterval(nextSlide, slideInterval);
  });
});

// Pause carousel on hover
const videoCarousel = document.querySelector('.video-carousel');
if (videoCarousel) {
  videoCarousel.addEventListener('mouseenter', () => {
    clearInterval(carouselTimer);
  });
  
  videoCarousel.addEventListener('mouseleave', () => {
    carouselTimer = setInterval(nextSlide, slideInterval);
  });
}
```

## 2️⃣ Cómo obtener miniaturas de YouTube

Para usar videos de YouTube, necesitas el **ID del video**. 

**Ejemplo:** Si tu video es `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
El ID es: `dQw4w9WgXcQ`

**URL de miniatura de YouTube:**
```
https://img.youtube.com/vi/ID_DEL_VIDEO/maxresdefault.jpg