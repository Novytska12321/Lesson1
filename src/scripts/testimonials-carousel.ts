export function initTestimonialsCarousel(): void {
  const carousel = document.querySelector<HTMLElement>(".y-testimonials-carousel");

  if (!carousel) {
    return;
  }

  const viewport = carousel.querySelector<HTMLElement>(".y-testimonials-carousel-viewport");
  const track = carousel.querySelector<HTMLElement>(".y-testimonials-carousel-track");
  const slides = carousel.querySelectorAll<HTMLElement>(".y-testimonials-carousel-slide");
  const dots = carousel.querySelectorAll<HTMLButtonElement>(".y-testimonials-carousel-dot");

  if (!viewport || !track || slides.length === 0 || dots.length === 0) {
    return;
  }

  let currentIndex = 0;
  let touchStartX = 0;

  const getVisibleSlidesCount = (): number => (window.matchMedia("(min-width: 768px)").matches ? 2 : 1);

  const goToSlide = (index: number): void => {
    const visibleSlidesCount = getVisibleSlidesCount();
    const maxIndex = Math.max(slides.length - visibleSlidesCount, 0);

    currentIndex = Math.min(Math.max(index, 0), maxIndex);

    const slideWidth = slides[0]?.getBoundingClientRect().width ?? viewport.clientWidth;
    const trackStyles = window.getComputedStyle(track);
    const slideGap = Number.parseFloat(trackStyles.columnGap) || 0;

    track.style.transform = `translateX(-${currentIndex * (slideWidth + slideGap)}px)`;

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === currentIndex;
      const isVisible = dotIndex <= maxIndex;

      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
      dot.hidden = !isVisible;
      dot.setAttribute("aria-hidden", String(!isVisible));
    });

    slides.forEach((slide, slideIndex) => {
      const isVisible = slideIndex >= currentIndex && slideIndex < currentIndex + visibleSlidesCount;

      slide.setAttribute("aria-hidden", String(!isVisible));
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  viewport.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? 0;
    },
    { passive: true },
  );

  viewport.addEventListener(
    "touchend",
    (event) => {
      const touchEndX = event.changedTouches[0]?.clientX ?? 0;
      const swipeDistance = touchEndX - touchStartX;
      const swipeThreshold = 50;

      if (swipeDistance > swipeThreshold) {
        goToSlide(currentIndex - 1);
      } else if (swipeDistance < -swipeThreshold) {
        goToSlide(currentIndex + 1);
      }
    },
    { passive: true },
  );

  window.addEventListener("resize", () => {
    goToSlide(currentIndex);
  });

  goToSlide(0);
}
