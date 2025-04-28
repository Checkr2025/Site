const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;
let slideInterval;
let startX = 0;
let endX = 0;

function createDots() {
  slides.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.dataset.index = idx;
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });
}
createDots();

function updateSlider() {
  slider.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dots span').forEach(dot => dot.classList.remove('active'));
  document.querySelectorAll('.dots span')[current].classList.add('active');
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    const overlay = slide.querySelector('.overlay');
    if (overlay) overlay.classList.remove('animate');
  });

  slides[current].classList.add('active');
  const activeOverlay = slides[current].querySelector('.overlay');
  if (activeOverlay) {
    setTimeout(() => activeOverlay.classList.add('animate'), 10);
  }
}

function goToSlide(index) {
  current = index;
  updateSlider();
  resetAutoplay();
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlider();
}

function startAutoplay() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetAutoplay() {
  clearInterval(slideInterval);
  startAutoplay();
}

// Add swipe support
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  if (startX > endX + 50) {
    // Swipe left
    nextSlide();
    resetAutoplay();
  } else if (startX < endX - 50) {
    // Swipe right
    prevSlide();
    resetAutoplay();
  }
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoplay();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoplay();
});

updateSlider();
startAutoplay();
